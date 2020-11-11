(ns cthulhu.rooms.end
    (:require [advenjure.rooms :as room]
              [advenjure.items :as item]
              [advenjure.utils :as utils]
              [advenjure.change-rooms :refer [change-rooms]]
              ))


(def end (-> (room/make "Apocalyptic world"
                       "Cthulhu is here... It is the apocalypse"
                       :initial-description "What have you done? You unleashed Cthulhu..."
                       )
            ))
