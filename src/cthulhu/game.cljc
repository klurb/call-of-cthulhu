(ns cthulhu.game
    (:require [advenjure.game :as game]
              [advenjure.plugins.map :refer [map-on-every-room]]
              [advenjure.plugins.dark :refer [dark-room]]
              [advenjure.plugins.points :refer [points]]
              [advenjure.items :as item]
              [advenjure.utils :as utils]
              [cthulhu.room-map :refer [room-map]]
              [advenjure.verbs :refer [make-item-handler make-compound-item-handler make-say-verb]]
              [advenjure.verb-map :refer [add-verb]]))

(def break (make-item-handler "break" :break))
(def hold (make-item-handler "hold" :hold))
(def drop_ (make-say-verb "I had plenty of room in my bag, no need to be dropping stuff."))
(def play (make-item-handler "play" :play))

(def light (make-item-handler "light" :light))
(def light-with (make-compound-item-handler "light" :light-with))

(def put-in (make-compound-item-handler "put" :put))

(def put-against (make-compound-item-handler "put" :put-against))

(defn jump [game-state]
  (if (= :west-passage (:current-room game-state))
    (utils/say "No use, I still couldn't climb the window.")
    (utils/say "Hop!")))

(def reach (make-item-handler "reach" :reach
                                           (fn [game-state item]
                                             (utils/say (get-in item [:reach :say] "And do what?")))
                              :kw-required false))

(def verb-map (-> {}
                  (add-verb ["^break (?<item>.*)" "^break in (?<item>.*)"  "^break into (?<item>.*)" "^break$"] break)
                  (add-verb ["^hold (?<item>.*)" "^hold$"
                             "^hold on (?<item>.*)" "^hold on$"
                             "^hold on to (?<item>.*)" "^hold on to$"] hold)
                  (add-verb ["^jump$"] jump)
                  (add-verb ["^drop (?<item>.*)" "^drop$"] drop_)
                  (add-verb ["^reach (?<item>.*)" "^reach$"] reach)
                  (add-verb ["^play (?<item>.*)" "^play$"] play)
                  (add-verb ["^light (?<item>.*)" "^light$"
                             "^turn (?<item>.*)" "^turn on (?<item>.*)"
                             "^turn (?<item>.*) on" "^turn on$" "^turn$"] light)
                  (add-verb ["^put (?<item1>.*) in (?<item2>.*)" "^put (?<item1>.*) in$"
                             "^put (?<item1>.*) on (?<item2>.*)" "^put (?<item1>.*) on$"] put-in)
                  (add-verb ["^put (?<item1>.*) against (?<item2>.*)"] put-against)
                  (add-verb ["^light (?<item1>.*) with (?<item2>.*)" "^light (?<item1>.*) with$"
                             "^turn (?<item1>.*) with (?<item2>.*)"
                             "^turn on (?<item1>.*) with (?<item2>.*)"
                             "^turn (?<item1>.*) on with (?<item2>.*)"
                             "^turn (?<item1>.*) on with"
                             "^turn (?<item1>.*) with"
                             "^turn on (?<item1>.*) with$"] light-with)))

(def init-text (str "\nPh'nglui mglw'nafh Cthulhu R'lyeh wgah'nagl fhtagn"
                    "\nIn his house at R'lyeh, dead Cthulhu waits dreaming."
                    ))

(def game-state (-> (game/make room-map :R'lyeh)
                    (game/use-plugin map-on-every-room)
                    (game/use-plugin dark-room)
                    (game/use-plugin points)))

(defn finished?
  "Finish when arriving in bedroom for the moment."
      [gs]
  (let [key-set (utils/find-first gs "hammer")]
    (and key-set (= (:current-room gs) :bedroom))))

(defn run-game []
  (game/run game-state
            finished?
            :start-message init-text
            :end-message "I woke up...\n  \n  \nThe End."
            :verb-map verb-map))
