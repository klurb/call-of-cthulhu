// Compiled by ClojureScript 1.9.229 {}
goog.provide('advenjure.plugins.points');
goog.require('cljs.core');
goog.require('advenjure.utils');
advenjure.plugins.points.points_prompt = (function advenjure$plugins$points$points_prompt(gs){
return [cljs.core.str("\n@"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(advenjure.utils.current_room.call(null,gs))),cljs.core.str(" [P:"),cljs.core.str((function (){var or__20455__auto__ = new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(gs);
if(cljs.core.truth_(or__20455__auto__)){
return or__20455__auto__;
} else {
return (0);
}
})()),cljs.core.str(" | M:"),cljs.core.str(new cljs.core.Keyword(null,"moves","moves",927465255).cljs$core$IFn$_invoke$arity$1(gs)),cljs.core.str("] > ")].join('');
});
advenjure.plugins.points.add_points = (function advenjure$plugins$points$add_points(gs,amount){
return cljs.core.assoc.call(null,gs,new cljs.core.Keyword(null,"points","points",-1486596883),((function (){var or__20455__auto__ = new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(gs);
if(cljs.core.truth_(or__20455__auto__)){
return or__20455__auto__;
} else {
return (0);
}
})() + amount));
});
/**
 * If the item has points for the given verb, apply them and remove
 */
advenjure.plugins.points.add_verb_points = (function advenjure$plugins$points$add_verb_points(var_args){
var args__21537__auto__ = [];
var len__21530__auto___24015 = arguments.length;
var i__21531__auto___24016 = (0);
while(true){
if((i__21531__auto___24016 < len__21530__auto___24015)){
args__21537__auto__.push((arguments[i__21531__auto___24016]));

var G__24017 = (i__21531__auto___24016 + (1));
i__21531__auto___24016 = G__24017;
continue;
} else {
}
break;
}

var argseq__21538__auto__ = ((((2) < args__21537__auto__.length))?(new cljs.core.IndexedSeq(args__21537__auto__.slice((2)),(0),null)):null);
return advenjure.plugins.points.add_verb_points.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__21538__auto__);
});

advenjure.plugins.points.add_verb_points.cljs$core$IFn$_invoke$arity$variadic = (function (gs,kw,p__23995){
var vec__23997 = p__23995;
var item = cljs.core.nth.call(null,vec__23997,(0),null);
var temp__4655__auto__ = cljs.core.get_in.call(null,item,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kw,new cljs.core.Keyword(null,"points","points",-1486596883)], null));
if(cljs.core.truth_(temp__4655__auto__)){
var points = temp__4655__auto__;
return advenjure.utils.replace_item.call(null,advenjure.plugins.points.add_points.call(null,gs,points),item,cljs.core.update.call(null,item,kw,cljs.core.dissoc,new cljs.core.Keyword(null,"points","points",-1486596883)));
} else {
return null;
}
});

advenjure.plugins.points.add_verb_points.cljs$lang$maxFixedArity = (2);

advenjure.plugins.points.add_verb_points.cljs$lang$applyTo = (function (seq23985){
var G__23986 = cljs.core.first.call(null,seq23985);
var seq23985__$1 = cljs.core.next.call(null,seq23985);
var G__23988 = cljs.core.first.call(null,seq23985__$1);
var seq23985__$2 = cljs.core.next.call(null,seq23985__$1);
return advenjure.plugins.points.add_verb_points.cljs$core$IFn$_invoke$arity$variadic(G__23986,G__23988,seq23985__$2);
});

/**
 * If the room is visited for the first time and has a :points key, add them
 *   to the current score.
 */
advenjure.plugins.points.add_room_points = (function advenjure$plugins$points$add_room_points(gs){
var map__24038 = advenjure.utils.current_room.call(null,gs);
var map__24038__$1 = ((((!((map__24038 == null)))?((((map__24038.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24038.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24038):map__24038);
var visited = cljs.core.get.call(null,map__24038__$1,new cljs.core.Keyword(null,"visited","visited",-1610853875));
var points = cljs.core.get.call(null,map__24038__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
if(cljs.core.truth_((function (){var and__20443__auto__ = cljs.core.not.call(null,visited);
if(and__20443__auto__){
return points;
} else {
return and__20443__auto__;
}
})())){
return advenjure.plugins.points.add_points.call(null,gs,points);
} else {
return null;
}
});
advenjure.plugins.points.points = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"hooks","hooks",-413590103),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"after-item-handler","after-item-handler",258632585),advenjure.plugins.points.add_verb_points,new cljs.core.Keyword(null,"before-change-room","before-change-room",-906852436),advenjure.plugins.points.add_room_points], null),new cljs.core.Keyword(null,"prompt","prompt",-78109487),advenjure.plugins.points.points_prompt], null);

//# sourceMappingURL=points.js.map?rel=1605080717203