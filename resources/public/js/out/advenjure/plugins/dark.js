// Compiled by ClojureScript 1.9.229 {}
goog.provide('advenjure.plugins.dark');
goog.require('cljs.core');
goog.require('advenjure.rooms');
goog.require('advenjure.items');
goog.require('advenjure.change_rooms');
goog.require('advenjure.utils');
goog.require('advenjure.verb_map');
goog.require('advenjure.gettext.core');
/**
 * Make a dark version of the current room, preserving only the connection to the
 *   previous one.
 */
advenjure.plugins.dark.build_dark_room = (function advenjure$plugins$dark$build_dark_room(game_state){
var room_spec = advenjure.utils.current_room.call(null,game_state);
var previous_kw = new cljs.core.Keyword(null,"previous-room","previous-room",1161246873).cljs$core$IFn$_invoke$arity$1(game_state);
var rname = cljs.core.get.call(null,room_spec,new cljs.core.Keyword(null,"dark-name","dark-name",765526539),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(room_spec));
var description = cljs.core.get.call(null,room_spec,new cljs.core.Keyword(null,"dark-description","dark-description",-1923983777),advenjure.gettext.core._.call(null,"It was completely dark."));
var is_known_connection = ((function (room_spec,previous_kw,rname,description){
return (function (p__36927){
var vec__36928 = p__36927;
var k = cljs.core.nth.call(null,vec__36928,(0),null);
var v = cljs.core.nth.call(null,vec__36928,(1),null);
var and__20443__auto__ = advenjure.utils.directions.call(null,k);
if(cljs.core.truth_(and__20443__auto__)){
return cljs.core._EQ_.call(null,v,previous_kw);
} else {
return and__20443__auto__;
}
});})(room_spec,previous_kw,rname,description))
;
var known_connections = cljs.core.filter.call(null,is_known_connection,room_spec);
return cljs.core.merge.call(null,advenjure.rooms.make.call(null,rname,description),known_connections,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"original-room","original-room",26304066),new cljs.core.Keyword(null,"current-room","current-room",491649183).cljs$core$IFn$_invoke$arity$1(game_state)], null));
});
/**
 * Returns true if the room is dark and there are no light sources available.
 */
advenjure.plugins.dark.light_available_QMARK_ = (function advenjure$plugins$dark$light_available_QMARK_(game_state){
var room = advenjure.utils.current_room.call(null,game_state);
var items = advenjure.items.all_items.call(null,cljs.core.into.call(null,new cljs.core.Keyword(null,"inventory","inventory",860201871).cljs$core$IFn$_invoke$arity$1(game_state),new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(room)));
var light_items = cljs.core.filter.call(null,new cljs.core.Keyword(null,"lit","lit",-561435380),items);
return cljs.core.not_empty.call(null,light_items);
});
/**
 * If this is a regular room marked as :dark and there's no light source, replace
 *   it with a generated dark copy of the room.
 *   If this is a generated dark copy of a room, and there's a light source, replace
 *   it with the regular room.
 */
advenjure.plugins.dark.hook = (function advenjure$plugins$dark$hook(game_state){
var room = advenjure.utils.current_room.call(null,game_state);
var light_QMARK_ = advenjure.plugins.dark.light_available_QMARK_.call(null,game_state);
var is_generated_room = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"__dark-room","__dark-room",1879678998),new cljs.core.Keyword(null,"current-room","current-room",491649183).cljs$core$IFn$_invoke$arity$1(game_state));
if(cljs.core.truth_((function (){var and__20443__auto__ = new cljs.core.Keyword(null,"dark","dark",1818973999).cljs$core$IFn$_invoke$arity$1(room);
if(cljs.core.truth_(and__20443__auto__)){
return cljs.core.not.call(null,light_QMARK_);
} else {
return and__20443__auto__;
}
})())){
var dark_room = advenjure.plugins.dark.build_dark_room.call(null,game_state);
return cljs.core.assoc.call(null,cljs.core.assoc_in.call(null,game_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"room-map","room-map",978449264),new cljs.core.Keyword(null,"__dark-room","__dark-room",1879678998)], null),dark_room),new cljs.core.Keyword(null,"current-room","current-room",491649183),new cljs.core.Keyword(null,"__dark-room","__dark-room",1879678998));
} else {
if(cljs.core.truth_((function (){var and__20443__auto__ = is_generated_room;
if(and__20443__auto__){
return light_QMARK_;
} else {
return and__20443__auto__;
}
})())){
return advenjure.change_rooms.change_rooms.call(null,cljs.core.assoc.call(null,cljs.core.update_in.call(null,game_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"room-map","room-map",978449264)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"__dark-room","__dark-room",1879678998)),new cljs.core.Keyword(null,"current-room","current-room",491649183),new cljs.core.Keyword(null,"previous-room","previous-room",1161246873).cljs$core$IFn$_invoke$arity$1(game_state)),new cljs.core.Keyword(null,"original-room","original-room",26304066).cljs$core$IFn$_invoke$arity$1(room));
} else {
return null;
}
}
});
advenjure.plugins.dark.dark_room = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hooks","hooks",-413590103),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"before-change-room","before-change-room",-906852436),advenjure.plugins.dark.hook,new cljs.core.Keyword(null,"after-handler","after-handler",216363306),advenjure.plugins.dark.hook], null)], null);

//# sourceMappingURL=dark.js.map?rel=1605080728796