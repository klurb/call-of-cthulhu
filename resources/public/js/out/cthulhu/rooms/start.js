// Compiled by ClojureScript 1.9.229 {}
goog.provide('cthulhu.rooms.start');
goog.require('cljs.core');
goog.require('advenjure.rooms');
goog.require('advenjure.items');
goog.require('advenjure.utils');
goog.require('advenjure.change_rooms');
cthulhu.rooms.start.hammer = advenjure.items.make.call(null,"hammer","The head was a bit loose but still usable.",new cljs.core.Keyword(null,"take","take",-768884900),true,new cljs.core.Keyword(null,"use-with","use-with",-716477584),"Everything looking like a nail, huh?");
cthulhu.rooms.start.start = advenjure.rooms.add_item.call(null,advenjure.rooms.make.call(null,"R'lyeh","The nightmare corpse-city of R'lyeh\u2026was built in measureless eons behind history by the vast, loathsome shapes that seeped down from the dark stars. \n There lay great Cthulhu and his hordes, hidden in green slimy vaults.",new cljs.core.Keyword(null,"initial-description","initial-description",-1214943108),"I need to code this game...\nPh'nglui mglw'nafh Cthulhu R'lyeh wgah'nagl fhtagn",new cljs.core.Keyword(null,"default-go","default-go",-2063089013),"I have nowhere to go"),cthulhu.rooms.start.hammer,"");
cthulhu.rooms.start.bedroom = advenjure.rooms.add_item.call(null,advenjure.rooms.make.call(null,"bedroom","A simple room with a bed.",new cljs.core.Keyword(null,"initial-description","initial-description",-1214943108),"Enjoy the call of Cthulhu in your dreams."),advenjure.items.make.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["bed"], null),"a simple bed"),"");

//# sourceMappingURL=start.js.map?rel=1605080726481