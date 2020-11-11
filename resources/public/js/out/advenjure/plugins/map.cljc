(ns advenjure.plugins.map
  "Plugin that adds a MAP verb to display an ASCII map of the room connections
  and shows it upon room change."
  (:require [clojure.string :as string]
            [advenjure.verb-map :refer [add-verb]]
            [advenjure.gettext.core :refer [_]]
            [advenjure.utils :refer [current-room directions]]
            [advenjure.ui.output :refer [print-line clear]]
            [advenjure.hooks :refer [eval-precondition]]))

(def full 60)
(def half (/ full 2))
(def square (count "+--- N ---+"))
(def side (/ (- full square) 2))

; no idea how the fucking closure escaping works, patch it
(defn uarr [room]
  #?(:clj (str room " ↑")
     :cljs (str "     " room " &uarr;")))

(defn darr [room]
  #?(:clj (str room " ↓")
     :cljs (str "     " room " &darr;")))


(defn pad
  "Sorround the given text with spaces so the total size is the requested"
  [size text]
  (let [text (or text " ")
        total-space (- size (count text))
        single-space (inc (int (/ total-space 2)))
        lspaces (string/join (repeat single-space " "))
        rspaces (if (even? (count text)) (subs lspaces 1) lspaces)]
    (str lspaces text rspaces)))

(defn assoc-room-name
  "Add the name of the room in the given direction to the name map. Uses '?'
  for unvisited rooms and 'X' for blocked rooms."
  [game-state name-map [dir condition]]
  (let [room-kw (eval-precondition condition game-state)
        room (get-in game-state [:room-map room-kw])
        rname (cond (string? room-kw) "X"
                    (or (:known room) (:visited room)) (:name room)
                    :else "?")]
    (assoc name-map dir rname)))

(defn room-names
  [game-state]
  (let [current (current-room game-state)
        connected-kws (select-keys current directions)]
    (reduce #(assoc-room-name game-state %1 %2) {} connected-kws)))

(defn print-map_
  "Print a map of the current room, with the connections in every direction."
  [game-state]
  (let [rooms (room-names game-state)]
    (print-line)
    (print-line (pad full (and (:up rooms) (uarr (:up rooms)))))
    (print-line)
    (print-line (pad full (:north rooms)))
    (print-line (str (pad half (:northwest rooms)) (pad half (:northeast rooms))))
    (print-line (pad full "+--- N ---+"))
    (print-line (pad full "|         |"))
    (print-line (str (pad side (:west rooms))  "W         E" (pad side (:east rooms))))
    (print-line (pad full "|         |"))
    (print-line (pad full "+--- S ---+"))
    (print-line (str (pad half (:southwest rooms)) (pad half (:southeast rooms))))
    (print-line (pad full (:south rooms)))
    (print-line)
    (print-line (pad full (and (:down rooms) (darr (:down rooms)))))))



;; PLUGIN DEFINITIONS
(def verb-map (add-verb {} [(_ "^map$") (_ "^m$")] print-map_))

(def map-on-unvisited
  {:verb-map verb-map
   :hooks {:before-change-room (fn [gs]
                                  (let [visited? (:visited (current-room gs))]
                                    (if-not visited? (clear))
                                    (assoc gs :__show-map (not visited?))))

           :after-change-room (fn [gs]
                                (if (:__show-map gs) (print-map_ gs))
                                (dissoc gs :__show-map))}})

(def map-on-every-room
  {:verb-map verb-map
   :hooks {:before-change-room (fn [gs] (clear) gs)
           :after-change-room (fn [gs] (print-map_ gs))}})
