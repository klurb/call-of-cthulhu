(ns cthulhu.rooms.start
  (:require [advenjure.rooms :as room]
            [advenjure.items :as item]
            [advenjure.utils :as utils]
            [advenjure.change-rooms :refer [change-rooms]]
            ))

(def hammer (item/make "hammer" "The head was a bit loose but still usable."
                       :take true
                       :use-with "Everything looking like a nail, huh?"))

(def stick (item/make ["wood" "stick" "pointy stick"] "It is no sword but it may be useful"
                       :take true
                      ))

(def nunchucks (item/make "nunchucks" "Yeah, like Michelangelo - maybe I will find pizza too?"
                      :take true
                      ))

(def unicorn (item/make ["unicorn" "pink unicorn" "Cthulhu's unicorn"] "So fluffy..."
                          :take true
                          :use "You cuddled the unicorn and felt bettertake "
                          ))


(def ironthrone (item/make ["throne" "iron throne"] "What is the iron throne doing here?"
                       :use "I don't want to die. I will not sit on the iron throne!"
                       :take "It is made of the the iron of many blades. It is too heavy to be taken. With dragon fire I could melt it"
                          ))


(def statue (item/make ["statue" "statue of Cthulhu" "clay statue"] "A small statue of Cthulhu"
                       :take true
                       :use-with "Cthulhu fhtagn"))

(def ctbed (item/make ["bed" "king bed" "Cthulhu's bed"] "A large bed with a pink unicorn on it"
                       :take "I do not steal beds"))

(def costume (item/make ["costume" "tmnt costume" "Michelangelo costume" "turtle suit"] "A large costume of Michelangelo"
                      :take "It is not my size... :("))

(def cd (item/make ["cd" "disc" "CD"] "Stairway to Valhalla by Nanowar of Steel"
                       :take true
                       :read "Hey they have a song named Call of Cthulhu"
                       :play "Check it out - a song on the Call of Cthulhu https://www.youtube.com/watch?v=WPUJG2jTw9s"))


(def start (->
              (room/make "R'lyeh"
                         "The nightmare corpse-city of R'lyeh…was built in measureless eons behind history by the vast, loathsome shapes that seeped down from the dark stars. \nThere lay great Cthulhu and his hordes, hidden in green slimy vaults."
                         :initial-description "Ph'nglui mglw'nafh Cthulhu R'lyeh wgah'nagl fhtagn"
                         :default-go "I would not go there..."
                         )

))

(def east (->
            (room/make "Woods"
                       "These woods do not seem friendly... I would not go there"
                       )
           (room/add-item stick "")
           ))

(def west (->
           (room/make "Pier"
                      "If I had a boat, I could leave from the pier"
                      )
           (room/add-item hammer "")
           ))

(def south (->
          (room/make "Temple"
                     "A large temple with an altar at its center. It smells like blood"
                      )
            (room/add-item  (item/make ["altar"] "It is still wet from the blood of the last sacrifice"))
            ))

(def north (->
           (room/make "Cthulhu's bedroom "
                      "A large bedroom with a cosy bed. A huge costume of Michelangelo and some nunchucks lie on the floor"
                      )
            (room/add-item nunchucks "")
            (room/add-item costume "")
            (room/add-item ctbed "")
            (room/add-item unicorn "")
           ))

(def throne (->
            (room/make "Throne room"
                       "A large room with an iron throne... I want to fly away"
                       )
             (room/add-item ironthrone "")
             ))

(def bedroom (-> (room/make "bedroom"
                              "A simple room with a bed, a desk with a pile of stuff on it and a night stand"
                              :initial-description "You woke up... It was just a dream...")
                   (room/add-item (item/make ["bed"] "a simple bed") "")
                   (room/add-item (item/make ["night stand"] "a small night stand with a drawer and a CD on it") "")
                   (room/add-item (item/make ["drawer"] "it is shut") "")
                   (room/add-item (item/make ["desk"] "so much papers on it and a small statue") "")
                   (room/add-item (item/make ["papers"] "so many sheets... They are all saying 'All work and no play makes jack a dull boy'") "")
                   (room/add-item statue "")
                   (room/add-item cd "")
                 ))
