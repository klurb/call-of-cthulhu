(ns cthulhu.rooms.start
  (:require [advenjure.rooms :as room]
            [advenjure.items :as item]
            [advenjure.utils :as utils]
            [advenjure.change-rooms :refer [change-rooms]]
            ))

(def hammer (item/make "hammer" "The head was a bit loose but still usable."
                       :take true
                       :use-with "Everything looking like a nail, huh?"))


(def start (->
              (room/make "R'lyeh"
                         "The nightmare corpse-city of R'lyeh…was built in measureless eons behind history by the vast, loathsome shapes that seeped down from the dark stars. \n There lay great Cthulhu and his hordes, hidden in green slimy vaults."
                         :initial-description "I need to code this game...\nPh'nglui mglw'nafh Cthulhu R'lyeh wgah'nagl fhtagn"
                         :default-go "I have nowhere to go"
                         )
            (room/add-item hammer "")
))

(def bedroom (-> (room/make "bedroom"
                              "A simple room with a bed."
                              :initial-description "Enjoy the call of Cthulhu in your dreams.")
                   (room/add-item (item/make ["bed"] "a simple bed") "")
                 ))
