// Compiled by ClojureScript 1.9.229 {}
goog.provide('advenjure.plugins.map');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('advenjure.verb_map');
goog.require('advenjure.gettext.core');
goog.require('advenjure.utils');
goog.require('advenjure.ui.output');
goog.require('advenjure.hooks');
advenjure.plugins.map.full = (60);
advenjure.plugins.map.half = (advenjure.plugins.map.full / (2));
advenjure.plugins.map.square = cljs.core.count.call(null,"+--- N ---+");
advenjure.plugins.map.side = ((advenjure.plugins.map.full - advenjure.plugins.map.square) / (2));
advenjure.plugins.map.uarr = (function advenjure$plugins$map$uarr(room){
return [cljs.core.str("     "),cljs.core.str(room),cljs.core.str(" &uarr;")].join('');
});
advenjure.plugins.map.darr = (function advenjure$plugins$map$darr(room){
return [cljs.core.str("     "),cljs.core.str(room),cljs.core.str(" &darr;")].join('');
});
/**
 * Sorround the given text with spaces so the total size is the requested
 */
advenjure.plugins.map.pad = (function advenjure$plugins$map$pad(size,text){
var text__$1 = (function (){var or__20455__auto__ = text;
if(cljs.core.truth_(or__20455__auto__)){
return or__20455__auto__;
} else {
return " ";
}
})();
var total_space = (size - cljs.core.count.call(null,text__$1));
var single_space = (((total_space / (2)) | (0)) + (1));
var lspaces = clojure.string.join.call(null,cljs.core.repeat.call(null,single_space," "));
var rspaces = ((cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,text__$1)))?cljs.core.subs.call(null,lspaces,(1)):lspaces);
return [cljs.core.str(lspaces),cljs.core.str(text__$1),cljs.core.str(rspaces)].join('');
});
/**
 * Add the name of the room in the given direction to the name map. Uses '?'
 *   for unvisited rooms and 'X' for blocked rooms.
 */
advenjure.plugins.map.assoc_room_name = (function advenjure$plugins$map$assoc_room_name(game_state,name_map,p__36948){
var vec__36952 = p__36948;
var dir = cljs.core.nth.call(null,vec__36952,(0),null);
var condition = cljs.core.nth.call(null,vec__36952,(1),null);
var room_kw = advenjure.hooks.eval_precondition.call(null,condition,game_state);
var room = cljs.core.get_in.call(null,game_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"room-map","room-map",978449264),room_kw], null));
var rname = ((typeof room_kw === 'string')?"X":(cljs.core.truth_((function (){var or__20455__auto__ = new cljs.core.Keyword(null,"known","known",1655795903).cljs$core$IFn$_invoke$arity$1(room);
if(cljs.core.truth_(or__20455__auto__)){
return or__20455__auto__;
} else {
return new cljs.core.Keyword(null,"visited","visited",-1610853875).cljs$core$IFn$_invoke$arity$1(room);
}
})())?new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(room):"?"
));
return cljs.core.assoc.call(null,name_map,dir,rname);
});
advenjure.plugins.map.room_names = (function advenjure$plugins$map$room_names(game_state){
var current = advenjure.utils.current_room.call(null,game_state);
var connected_kws = cljs.core.select_keys.call(null,current,advenjure.utils.directions);
return cljs.core.reduce.call(null,((function (current,connected_kws){
return (function (p1__36958_SHARP_,p2__36959_SHARP_){
return advenjure.plugins.map.assoc_room_name.call(null,game_state,p1__36958_SHARP_,p2__36959_SHARP_);
});})(current,connected_kws))
,cljs.core.PersistentArrayMap.EMPTY,connected_kws);
});
/**
 * Print a map of the current room, with the connections in every direction.
 */
advenjure.plugins.map.print_map_ = (function advenjure$plugins$map$print_map_(game_state){
var rooms = advenjure.plugins.map.room_names.call(null,game_state);
advenjure.ui.output.print_line.call(null);

advenjure.ui.output.print_line.call(null,advenjure.plugins.map.pad.call(null,advenjure.plugins.map.full,(function (){var and__20443__auto__ = new cljs.core.Keyword(null,"up","up",-269712113).cljs$core$IFn$_invoke$arity$1(rooms);
if(cljs.core.truth_(and__20443__auto__)){
return advenjure.plugins.map.uarr.call(null,new cljs.core.Keyword(null,"up","up",-269712113).cljs$core$IFn$_invoke$arity$1(rooms));
} else {
return and__20443__auto__;
}
})()));

advenjure.ui.output.print_line.call(null);

advenjure.ui.output.print_line.call(null,advenjure.plugins.map.pad.call(null,advenjure.plugins.map.full,new cljs.core.Keyword(null,"north","north",651323902).cljs$core$IFn$_invoke$arity$1(rooms)));

advenjure.ui.output.print_line.call(null,[cljs.core.str(advenjure.plugins.map.pad.call(null,advenjure.plugins.map.half,new cljs.core.Keyword(null,"northwest","northwest",121027401).cljs$core$IFn$_invoke$arity$1(rooms))),cljs.core.str(advenjure.plugins.map.pad.call(null,advenjure.plugins.map.half,new cljs.core.Keyword(null,"northeast","northeast",-393120937).cljs$core$IFn$_invoke$arity$1(rooms)))].join(''));

advenjure.ui.output.print_line.call(null,advenjure.plugins.map.pad.call(null,advenjure.plugins.map.full,"+--- N ---+"));

advenjure.ui.output.print_line.call(null,advenjure.plugins.map.pad.call(null,advenjure.plugins.map.full,"|         |"));

advenjure.ui.output.print_line.call(null,[cljs.core.str(advenjure.plugins.map.pad.call(null,advenjure.plugins.map.side,new cljs.core.Keyword(null,"west","west",708776677).cljs$core$IFn$_invoke$arity$1(rooms))),cljs.core.str("W         E"),cljs.core.str(advenjure.plugins.map.pad.call(null,advenjure.plugins.map.side,new cljs.core.Keyword(null,"east","east",1189821678).cljs$core$IFn$_invoke$arity$1(rooms)))].join(''));

advenjure.ui.output.print_line.call(null,advenjure.plugins.map.pad.call(null,advenjure.plugins.map.full,"|         |"));

advenjure.ui.output.print_line.call(null,advenjure.plugins.map.pad.call(null,advenjure.plugins.map.full,"+--- S ---+"));

advenjure.ui.output.print_line.call(null,[cljs.core.str(advenjure.plugins.map.pad.call(null,advenjure.plugins.map.half,new cljs.core.Keyword(null,"southwest","southwest",-212094911).cljs$core$IFn$_invoke$arity$1(rooms))),cljs.core.str(advenjure.plugins.map.pad.call(null,advenjure.plugins.map.half,new cljs.core.Keyword(null,"southeast","southeast",565965044).cljs$core$IFn$_invoke$arity$1(rooms)))].join(''));

advenjure.ui.output.print_line.call(null,advenjure.plugins.map.pad.call(null,advenjure.plugins.map.full,new cljs.core.Keyword(null,"south","south",1586796293).cljs$core$IFn$_invoke$arity$1(rooms)));

advenjure.ui.output.print_line.call(null);

return advenjure.ui.output.print_line.call(null,advenjure.plugins.map.pad.call(null,advenjure.plugins.map.full,(function (){var and__20443__auto__ = new cljs.core.Keyword(null,"down","down",1565245570).cljs$core$IFn$_invoke$arity$1(rooms);
if(cljs.core.truth_(and__20443__auto__)){
return advenjure.plugins.map.darr.call(null,new cljs.core.Keyword(null,"down","down",1565245570).cljs$core$IFn$_invoke$arity$1(rooms));
} else {
return and__20443__auto__;
}
})()));
});
advenjure.plugins.map.verb_map = advenjure.verb_map.add_verb.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [advenjure.gettext.core._.call(null,"^map$"),advenjure.gettext.core._.call(null,"^m$")], null),advenjure.plugins.map.print_map_);
advenjure.plugins.map.map_on_unvisited = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"verb-map","verb-map",1285414746),advenjure.plugins.map.verb_map,new cljs.core.Keyword(null,"hooks","hooks",-413590103),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"before-change-room","before-change-room",-906852436),(function (gs){
var visited_QMARK_ = new cljs.core.Keyword(null,"visited","visited",-1610853875).cljs$core$IFn$_invoke$arity$1(advenjure.utils.current_room.call(null,gs));
if(cljs.core.not.call(null,visited_QMARK_)){
advenjure.ui.output.clear.call(null);
} else {
}

return cljs.core.assoc.call(null,gs,new cljs.core.Keyword(null,"__show-map","__show-map",678765732),cljs.core.not.call(null,visited_QMARK_));
}),new cljs.core.Keyword(null,"after-change-room","after-change-room",-84875115),(function (gs){
if(cljs.core.truth_(new cljs.core.Keyword(null,"__show-map","__show-map",678765732).cljs$core$IFn$_invoke$arity$1(gs))){
advenjure.plugins.map.print_map_.call(null,gs);
} else {
}

return cljs.core.dissoc.call(null,gs,new cljs.core.Keyword(null,"__show-map","__show-map",678765732));
})], null)], null);
advenjure.plugins.map.map_on_every_room = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"verb-map","verb-map",1285414746),advenjure.plugins.map.verb_map,new cljs.core.Keyword(null,"hooks","hooks",-413590103),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"before-change-room","before-change-room",-906852436),(function (gs){
advenjure.ui.output.clear.call(null);

return gs;
}),new cljs.core.Keyword(null,"after-change-room","after-change-room",-84875115),(function (gs){
return advenjure.plugins.map.print_map_.call(null,gs);
})], null)], null);

//# sourceMappingURL=map.js.map?rel=1605080728825