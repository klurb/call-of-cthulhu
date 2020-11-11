(ns cthulhu.rooms.start
  (:require [advenjure.rooms :as room]
            [advenjure.items :as item]
            [advenjure.utils :as utils]
            [advenjure.change-rooms :refer [change-rooms]]
            ))

(def hammer (item/make "hammer" "The head was a bit loose but still usable."
                       :take true
                       :use-with "Everything looking like a nail, huh?"))

(def stick (item/make ["wood" "stick"] "It is no sword but it may be useful"
                       :take true
                      ))

(def nunchucks (item/make "nunchucks" "Yeah, like Michelangelo - maybe I will find pizza too?"
                      :take true
                      ))

(def ironthrone (item/make ["throne" "iron throne"] "What is the iron throne doing here?"
                       :use "I don't want to die. I will not sit on the iron throne!"
                       :take "It is made of the the iron of many blades. It is too heavy to be taken. With dragon fire I could melt it"
                          ))


(def statue (item/make ["statue" "statue of Cthulhu" "clay statue"] "A small statue of Cthulhu"
                       :take true
                       :use-with "Cthulhu fhtagn"))

(def cd (item/make ["cd" "disc"] "Stairway to Valhalla by Nanowar of Steel"
                       :take true
                       :read "Hey they have a song named Call of Cthulhu"
                       :play "Check it out https://www.youtube.com/watch?v=WPUJG2jTw9s"))


(def start (->
              (room/make "R'lyeh"
                         "The nightmare corpse-city of R'lyeh…was built in measureless eons behind history by the vast, loathsome shapes that seeped down from the dark stars. \nThere lay great Cthulhu and his hordes, hidden in green slimy vaults."
                         :initial-description "nPh'nglui mglw'nafh Cthulhu R'lyeh wgah'nagl fhtagn"
                         :default-go "I would not go there..."
                         )

))

(def east (->
            (room/make "R'lyeh "
                       "This does not seem friendly... I would not go there"
                       )
           (room/add-item stick "")
           ))

(def west (->
           (room/make "R'lyeh "
                      "Need help to find your way?"
                      )
           (room/add-item hammer "")
           ))

(def south (->
          (room/make "R'lyeh "
                     "Not this way... Are you lost?"
                      )
           ))

(def north (->
           (room/make "R'lyeh "
                      "It feels like a labyrinth..."
                      )
            (room/add-item nunchucks "")
           ))

(def throne (->
            (room/make "Throne room"
                       "Getting close..."
                       )
             (room/add-item ironthrone "")
             ))

(def bedroom (-> (room/make "bedroom"
                              "A simple room with a bed."
                              :initial-description "You woke up... It was just a dream...")
                   (room/add-item (item/make ["bed"] "a simple bed") "")
                   (room/add-item statue "")
                   (room/add-item cd "")
                 ))
