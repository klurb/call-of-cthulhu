// Compiled by ClojureScript 1.9.229 {}
goog.provide('advenjure.hooks');
goog.require('cljs.core');
goog.require('advenjure.eval');
/**
 * Pipe the game state through the hooks loaded for the given event kw,
 *   passing the extra parameters in each step.
 */
advenjure.hooks.execute = (function advenjure$hooks$execute(var_args){
var args__21537__auto__ = [];
var len__21530__auto___31154 = arguments.length;
var i__21531__auto___31155 = (0);
while(true){
if((i__21531__auto___31155 < len__21530__auto___31154)){
args__21537__auto__.push((arguments[i__21531__auto___31155]));

var G__31156 = (i__21531__auto___31155 + (1));
i__21531__auto___31155 = G__31156;
continue;
} else {
}
break;
}

var argseq__21538__auto__ = ((((2) < args__21537__auto__.length))?(new cljs.core.IndexedSeq(args__21537__auto__.slice((2)),(0),null)):null);
return advenjure.hooks.execute.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__21538__auto__);
});

advenjure.hooks.execute.cljs$core$IFn$_invoke$arity$variadic = (function (game_state,hook_kw,extra){
var hooks = cljs.core.get_in.call(null,game_state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"configuration","configuration",1431842520),new cljs.core.Keyword(null,"hooks","hooks",-413590103),hook_kw], null));
var apply_hook = ((function (hooks){
return (function (gs,hook){
var or__20455__auto__ = cljs.core.apply.call(null,hook,cljs.core.cons.call(null,gs,extra));
if(cljs.core.truth_(or__20455__auto__)){
return or__20455__auto__;
} else {
return gs;
}
});})(hooks))
;
return cljs.core.reduce.call(null,apply_hook,game_state,hooks);
});

advenjure.hooks.execute.cljs$lang$maxFixedArity = (2);

advenjure.hooks.execute.cljs$lang$applyTo = (function (seq31151){
var G__31152 = cljs.core.first.call(null,seq31151);
var seq31151__$1 = cljs.core.next.call(null,seq31151);
var G__31153 = cljs.core.first.call(null,seq31151__$1);
var seq31151__$2 = cljs.core.next.call(null,seq31151__$1);
return advenjure.hooks.execute.cljs$core$IFn$_invoke$arity$variadic(G__31152,G__31153,seq31151__$2);
});

/**
 * If the condition is a function return it's value, otherwise return unchanged.
 */
advenjure.hooks.eval_precondition = (function advenjure$hooks$eval_precondition(var_args){
var args__21537__auto__ = [];
var len__21530__auto___31159 = arguments.length;
var i__21531__auto___31160 = (0);
while(true){
if((i__21531__auto___31160 < len__21530__auto___31159)){
args__21537__auto__.push((arguments[i__21531__auto___31160]));

var G__31161 = (i__21531__auto___31160 + (1));
i__21531__auto___31160 = G__31161;
continue;
} else {
}
break;
}

var argseq__21538__auto__ = ((((1) < args__21537__auto__.length))?(new cljs.core.IndexedSeq(args__21537__auto__.slice((1)),(0),null)):null);
return advenjure.hooks.eval_precondition.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21538__auto__);
});

advenjure.hooks.eval_precondition.cljs$core$IFn$_invoke$arity$variadic = (function (condition,args){
var condition__$1 = advenjure.eval.eval.call(null,(function (){var or__20455__auto__ = new cljs.core.Keyword(null,"pre","pre",2118456869).cljs$core$IFn$_invoke$arity$1(condition);
if(cljs.core.truth_(or__20455__auto__)){
return or__20455__auto__;
} else {
return condition;
}
})());
if(cljs.core.fn_QMARK_.call(null,condition__$1)){
return cljs.core.apply.call(null,condition__$1,args);
} else {
return condition__$1;
}
});

advenjure.hooks.eval_precondition.cljs$lang$maxFixedArity = (1);

advenjure.hooks.eval_precondition.cljs$lang$applyTo = (function (seq31157){
var G__31158 = cljs.core.first.call(null,seq31157);
var seq31157__$1 = cljs.core.next.call(null,seq31157);
return advenjure.hooks.eval_precondition.cljs$core$IFn$_invoke$arity$variadic(G__31158,seq31157__$1);
});

/**
 * If there's a postcondition defined, evaluate it and return new game-state.
 *   Otherwise return the game-state unchanged.
 */
advenjure.hooks.eval_postcondition = (function advenjure$hooks$eval_postcondition(condition,old_state,new_state){
var condition__$1 = advenjure.eval.eval.call(null,new cljs.core.Keyword(null,"post","post",269697687).cljs$core$IFn$_invoke$arity$1(condition));
var new_state__$1 = (function (){var or__20455__auto__ = new_state;
if(cljs.core.truth_(or__20455__auto__)){
return or__20455__auto__;
} else {
return old_state;
}
})();
if(cljs.core.fn_QMARK_.call(null,condition__$1)){
var or__20455__auto__ = condition__$1.call(null,old_state,new_state__$1);
if(cljs.core.truth_(or__20455__auto__)){
return or__20455__auto__;
} else {
return new_state__$1;
}
} else {
return new_state__$1;
}
});
/**
 * Eval the precondition found in the given direction of the current room.
 */
advenjure.hooks.eval_direction = (function advenjure$hooks$eval_direction(game_state,direction){
var roomkw = new cljs.core.Keyword(null,"current-room","current-room",491649183).cljs$core$IFn$_invoke$arity$1(game_state);
var room = cljs.core.get_in.call(null,game_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"room-map","room-map",978449264),roomkw], null));
var dir_condition = direction.call(null,room);
return advenjure.hooks.eval_precondition.call(null,dir_condition,game_state);
});

//# sourceMappingURL=hooks.js.map?rel=1605080726427