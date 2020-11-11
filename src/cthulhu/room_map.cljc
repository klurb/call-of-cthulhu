(ns cthulhu.room-map
  (:require [advenjure.rooms :as room]
            [advenjure.items :as item]
            [advenjure.utils :as utils]
            [cthulhu.rooms.start :refer [start east west south north bedroom throne]]
            [cthulhu.rooms.end :refer [end]]
            ))

;; define a room map and then set the connections between rooms
(def room-map
  (->
    {:R'lyeh start
     :throne throne
     :pier west
     :Cthulhu north
     :temple south
     :woods east
     :bedroom bedroom
     :end end}

   (room/one-way-connect :throne :up :bedroom)
   (room/one-way-connect :R'lyeh :north :pier)
   (room/one-way-connect :R'lyeh :east :woods)
   (room/one-way-connect :R'lyeh :west :Cthulhu)
   (room/one-way-connect :R'lyeh :south :temple)
   (room/one-way-connect :temple :west :woods)
   (room/one-way-connect :temple :east :Cthulhu)
   (room/one-way-connect :temple :north :temple)
   (room/one-way-connect :temple :south :pier)
   (room/one-way-connect :pier :west :Cthulhu)
   (room/one-way-connect :pier :east :temple)
   (room/one-way-connect :pier :north :pier)
   (room/one-way-connect :pier :south :woods)
   (room/one-way-connect :Cthulhu :west :temple)
   (room/one-way-connect :Cthulhu :east :pier)
   (room/one-way-connect :Cthulhu :north :woods)
   (room/one-way-connect :Cthulhu :south :Cthulhu)
   (room/one-way-connect :Cthulhu :down :throne)
   (room/one-way-connect :throne :west :pier)
   (room/one-way-connect :throne :east :woods)
   (room/one-way-connect :throne :north :Cthulhu)
   (room/one-way-connect :throne :south :temple)
   (room/one-way-connect :woods :west :woods)
   (room/one-way-connect :woods :east :woods)
   (room/one-way-connect :woods :north :temple)
   (room/one-way-connect :woods :south :woods)


   (room/connect :bedroom :north :end)


   ))
