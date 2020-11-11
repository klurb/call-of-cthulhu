// Compiled by ClojureScript 1.9.229 {}
goog.provide('cthulhu.game');
goog.require('cljs.core');
goog.require('advenjure.items');
goog.require('advenjure.plugins.points');
goog.require('cthulhu.room_map');
goog.require('advenjure.game');
goog.require('advenjure.plugins.map');
goog.require('advenjure.verb_map');
goog.require('advenjure.verbs');
goog.require('advenjure.utils');
goog.require('advenjure.plugins.dark');
cthulhu.game.break$ = advenjure.verbs.make_item_handler.call(null,"break",new cljs.core.Keyword(null,"break","break",126570225));
cthulhu.game.hold = advenjure.verbs.make_item_handler.call(null,"hold",new cljs.core.Keyword(null,"hold","hold",-1621118005));
cthulhu.game.drop_ = advenjure.verbs.make_say_verb.call(null,"I had plenty of room in my bag, no need to be dropping stuff.");
cthulhu.game.play = advenjure.verbs.make_item_handler.call(null,"play",new cljs.core.Keyword(null,"play","play",-580418022));
cthulhu.game.light = advenjure.verbs.make_item_handler.call(null,"light",new cljs.core.Keyword(null,"light","light",1918998747));
cthulhu.game.light_with = advenjure.verbs.make_compound_item_handler.call(null,"light",new cljs.core.Keyword(null,"light-with","light-with",51602034));
cthulhu.game.put_in = advenjure.verbs.make_compound_item_handler.call(null,"put",new cljs.core.Keyword(null,"put","put",1299772570));
cthulhu.game.put_against = advenjure.verbs.make_compound_item_handler.call(null,"put",new cljs.core.Keyword(null,"put-against","put-against",-170510122));
cthulhu.game.jump = (function cthulhu$game$jump(game_state){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"west-passage","west-passage",159674078),new cljs.core.Keyword(null,"current-room","current-room",491649183).cljs$core$IFn$_invoke$arity$1(game_state))){
return advenjure.utils.say.call(null,"No use, I still couldn't climb the window.");
} else {
return advenjure.utils.say.call(null,"Hop!");
}
});
cthulhu.game.reach = advenjure.verbs.make_item_handler.call(null,"reach",new cljs.core.Keyword(null,"reach","reach",1376483465),(function (game_state,item){
return advenjure.utils.say.call(null,cljs.core.get_in.call(null,item,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reach","reach",1376483465),new cljs.core.Keyword(null,"say","say",504378016)], null),"And do what?"));
}),new cljs.core.Keyword(null,"kw-required","kw-required",-916449094),false);
cthulhu.game.verb_map = advenjure.verb_map.add_verb.call(null,advenjure.verb_map.add_verb.call(null,advenjure.verb_map.add_verb.call(null,advenjure.verb_map.add_verb.call(null,advenjure.verb_map.add_verb.call(null,advenjure.verb_map.add_verb.call(null,advenjure.verb_map.add_verb.call(null,advenjure.verb_map.add_verb.call(null,advenjure.verb_map.add_verb.call(null,advenjure.verb_map.add_verb.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["^break (?<item>.*)","^break in (?<item>.*)","^break into (?<item>.*)","^break$"], null),cthulhu.game.break$),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["^hold (?<item>.*)","^hold$","^hold on (?<item>.*)","^hold on$","^hold on to (?<item>.*)","^hold on to$"], null),cthulhu.game.hold),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["^jump$"], null),cthulhu.game.jump),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["^drop (?<item>.*)","^drop$"], null),cthulhu.game.drop_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["^reach (?<item>.*)","^reach$"], null),cthulhu.game.reach),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["^play (?<item>.*)","^play$"], null),cthulhu.game.play),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["^light (?<item>.*)","^light$","^turn (?<item>.*)","^turn on (?<item>.*)","^turn (?<item>.*) on","^turn on$","^turn$"], null),cthulhu.game.light),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["^put (?<item1>.*) in (?<item2>.*)","^put (?<item1>.*) in$","^put (?<item1>.*) on (?<item2>.*)","^put (?<item1>.*) on$"], null),cthulhu.game.put_in),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["^put (?<item1>.*) against (?<item2>.*)"], null),cthulhu.game.put_against),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, ["^light (?<item1>.*) with (?<item2>.*)","^light (?<item1>.*) with$","^turn (?<item1>.*) with (?<item2>.*)","^turn on (?<item1>.*) with (?<item2>.*)","^turn (?<item1>.*) on with (?<item2>.*)","^turn (?<item1>.*) on with","^turn (?<item1>.*) with","^turn on (?<item1>.*) with$"], null),cthulhu.game.light_with);
cthulhu.game.init_text = [cljs.core.str("\nPh'nglui mglw'nafh Cthulhu R'lyeh wgah'nagl fhtagn"),cljs.core.str("\nIn his house at R'lyeh, dead Cthulhu waits dreaming.")].join('');
cthulhu.game.game_state = advenjure.game.use_plugin.call(null,advenjure.game.use_plugin.call(null,advenjure.game.use_plugin.call(null,advenjure.game.make.call(null,cthulhu.room_map.room_map,new cljs.core.Keyword(null,"R'lyeh","R'lyeh",-2062125158)),advenjure.plugins.map.map_on_every_room),advenjure.plugins.dark.dark_room),advenjure.plugins.points.points);
/**
 * Finish when arriving in bedroom for the moment.
 */
cthulhu.game.finished_QMARK_ = (function cthulhu$game$finished_QMARK_(gs){
var key_set = advenjure.utils.find_first.call(null,gs,"hammer");
var and__20443__auto__ = key_set;
if(cljs.core.truth_(and__20443__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"current-room","current-room",491649183).cljs$core$IFn$_invoke$arity$1(gs),new cljs.core.Keyword(null,"bedroom","bedroom",1632404761));
} else {
return and__20443__auto__;
}
});
cthulhu.game.run_game = (function cthulhu$game$run_game(){
return advenjure.game.run.call(null,cthulhu.game.game_state,cthulhu.game.finished_QMARK_,new cljs.core.Keyword(null,"start-message","start-message",-630575289),cthulhu.game.init_text,new cljs.core.Keyword(null,"end-message","end-message",-2112830994),"I woke up...\n  \n  \nThe End.",new cljs.core.Keyword(null,"verb-map","verb-map",1285414746),cthulhu.game.verb_map);
});

//# sourceMappingURL=game.js.map?rel=1605080729310