(ns advenjure.items
  (:require [clojure.string :as string]
            [advenjure.gettext.core :refer [_ p_]]))

(defrecord Item [names description])

(defn open-defaults
  "If either closed, close or open keywords are in the item, set the defaults
  for an openable item."
  [item]
  (if (or (:open item) (:close item) (contains? item :closed))
    {:open true :close true :closed true}))

(defn unlock-defaults
  [item]
  (if (or (:unlock item) (contains? item :locked))
    {:unlock true :locked true :close true :closed true :open true}))

(defn climb-defaults
  [item]
  (if-let [room (or (:climb-up item) (:climb-down item))]
    {:climb room
     :climb-up (_ "Not up.")
     :climb-down (_ "Not down.")}))

(defn use-with-defaults
  [item]
  (if (:use-with item) {:use (_ "Use with what?")}))

(defn talk-defaults [item] (if (:dialog item) {:talk true}))

(defn make
  ([names description & {:as extras}]
   (let [names (if (string? names) [names] names)]
     (map->Item (merge {:names names :description description}
                       (open-defaults extras)
                       (unlock-defaults extras)
                       (talk-defaults extras)
                       (climb-defaults extras)
                       (use-with-defaults extras)
                       extras))))
  ([names]
   (make names (_ "There was nothing special about it."))))

(defn iname
  "Get the first name of the item."
  [item] (first (:names item)))

(declare describe-container)

(defn print-list-item [item]
  (p_ item "a %s" (iname item)))

(defn ntabs [n] (string/join (repeat n "  ")))

(defn print-list
  ([items] (print-list items 1))
  ([items level]
   (str "\n" (ntabs level)
     (string/join
       (str "\n" (ntabs level))
       (for [item items]
         (str (string/capitalize (print-list-item item))
              (describe-container item ". " (inc level))))))))

(defn describe-container
  "Recursively lists the contents of the item. If a prefix is given, it will be
  appended to the resulting string.
  If the item is empty or closed, the message will say so.
  If the item is not a container, returns nil."
  ([container] (describe-container container "" 1))
  ([container prefix] (describe-container container prefix 1))
  ([container prefix level]
   (if-let [items (:items container)]
     (let [container-name (str prefix (p_ container "The %s" (iname container)))] ; FIXME weird concatenation here
       (cond
         (:closed container) (p_ container "%s was closed." container-name)
         (empty? items) (p_ container "%s was empty." container-name)
         (= 1 (count items)) (_ "%s contained %s"
                                container-name
                                (print-list-item (first items)))
         (= 2 (count items)) (_ "%s contained %s and %s"
                                container-name
                                (print-list-item (first items))
                                (print-list-item (second items)))
         :else (_ "%s contained:%s" container-name (print-list items)))))))

(defn visible-items
  "Return items inside a container only if not closed."
  [container]
  (if (:closed container)
    #{}
    (:items container)))


(defn get-from
  "Get the spec for the items with the given name, if it's in the given set,
  or is contained by one of its items. Returns a sequence (not a single item)."
  [item-set item-name]
  (concat (filter #(some #{item-name} (:names %)) item-set)
          (flatten (map #(get-from (:items %) item-name)
                        (filter #(not-empty (visible-items %)) item-set)))))

(defn remove-from
  "Try to -recursively- remove the item from the given set. It takes a full
  item, not a name. Return the new state of the set, if the item is not found,
  return the set unmodified."
  [item-set item-spec]
  (if (contains? item-set item-spec)
    (disj item-set item-spec)
    (set (map (fn [item] (if-let [inner (:items item)]
                           (assoc item :items (remove-from inner item-spec))
                           item))
              item-set))))

(defn replace-from
  "Look for the old-item in the given set, remove it and put the new-item in the same place.
  Return the new state of the set."
  [item-set old-item new-item]
  ; TODO try to avoid copy paste the method above
  (if (contains? item-set old-item)
    (conj (disj item-set old-item) new-item)
    (set (map (fn [item] (if-let [inner (:items item)]
                           (assoc item :items (replace-from inner old-item new-item))
                           item))
              item-set))))

(defn all-items
  [item-set]
  (concat item-set (mapcat #(all-items (visible-items %)) item-set)))

(def all-item-names (comp #(mapcat :names %) all-items))
