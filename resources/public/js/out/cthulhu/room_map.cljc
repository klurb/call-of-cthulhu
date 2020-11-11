(ns cthulhu.room-map
  (:require [advenjure.rooms :as room]
            [advenjure.items :as item]
            [advenjure.utils :as utils]
            [cthulhu.rooms.start :refer [start bedroom]]
            ))

;; define a room map and then set the connections between rooms
(def room-map
  (->
    {:R'lyeh start
     :bedroom bedroom}

    (room/connect :R'lyeh :north :bedroom)

   ))
