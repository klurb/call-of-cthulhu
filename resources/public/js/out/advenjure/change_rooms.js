// Compiled by ClojureScript 1.9.229 {}
goog.provide('advenjure.change_rooms');
goog.require('cljs.core');
goog.require('advenjure.rooms');
goog.require('advenjure.hooks');
goog.require('advenjure.utils');
/**
 * Change room, say description, set visited.
 */
advenjure.change_rooms.change_rooms = (function advenjure$change_rooms$change_rooms(game_state,new_room){
var previous = new cljs.core.Keyword(null,"current-room","current-room",491649183).cljs$core$IFn$_invoke$arity$1(game_state);
var new_state = advenjure.hooks.execute.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,game_state,new cljs.core.Keyword(null,"previous-room","previous-room",1161246873),previous),new cljs.core.Keyword(null,"current-room","current-room",491649183),new_room),new cljs.core.Keyword(null,"before-change-room","before-change-room",-906852436));
var new_room__$1 = new cljs.core.Keyword(null,"current-room","current-room",491649183).cljs$core$IFn$_invoke$arity$1(new_state);
var room_spec = cljs.core.get_in.call(null,new_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"room-map","room-map",978449264),new_room__$1], null));
var new_state__$1 = cljs.core.assoc_in.call(null,new_state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"room-map","room-map",978449264),new_room__$1,new cljs.core.Keyword(null,"visited","visited",-1610853875)], null),true);
var finished_QMARK_ = cljs.core.get_in.call(null,new_state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"configuration","configuration",1431842520),new cljs.core.Keyword(null,"finished","finished",-1018867731)], null));
if(cljs.core.not.call(null,(function (){var and__20443__auto__ = finished_QMARK_;
if(cljs.core.truth_(and__20443__auto__)){
return finished_QMARK_.call(null,new_state__$1);
} else {
return and__20443__auto__;
}
})())){
advenjure.utils.say.call(null,advenjure.rooms.describe.call(null,room_spec));

return advenjure.hooks.execute.call(null,new_state__$1,new cljs.core.Keyword(null,"after-change-room","after-change-room",-84875115));
} else {
return new_state__$1;
}
});

//# sourceMappingURL=change_rooms.js.map?rel=1605080726464