// Compiled by ClojureScript 1.9.229 {}
goog.provide('advenjure.verbs');
goog.require('cljs.core');
goog.require('advenjure.items');
goog.require('advenjure.ui.input');
goog.require('advenjure.ui.output');
goog.require('advenjure.rooms');
goog.require('clojure.set');
goog.require('advenjure.gettext.core');
goog.require('advenjure.hooks');
goog.require('advenjure.utils');
goog.require('advenjure.change_rooms');
goog.require('advenjure.eval');
advenjure.verbs.noop = (function advenjure$verbs$noop(kw){
return (function() { 
var G__31289__delegate = function (gs,item,etc){
var temp__4655__auto__ = cljs.core.get_in.call(null,item,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kw,new cljs.core.Keyword(null,"say","say",504378016)], null));
if(cljs.core.truth_(temp__4655__auto__)){
var speech = temp__4655__auto__;
return advenjure.utils.say.call(null,speech);
} else {
return null;
}
};
var G__31289 = function (gs,item,var_args){
var etc = null;
if (arguments.length > 2) {
var G__31292__i = 0, G__31292__a = new Array(arguments.length -  2);
while (G__31292__i < G__31292__a.length) {G__31292__a[G__31292__i] = arguments[G__31292__i + 2]; ++G__31292__i;}
  etc = new cljs.core.IndexedSeq(G__31292__a,0);
} 
return G__31289__delegate.call(this,gs,item,etc);};
G__31289.cljs$lang$maxFixedArity = 2;
G__31289.cljs$lang$applyTo = (function (arglist__31295){
var gs = cljs.core.first(arglist__31295);
arglist__31295 = cljs.core.next(arglist__31295);
var item = cljs.core.first(arglist__31295);
var etc = cljs.core.rest(arglist__31295);
return G__31289__delegate(gs,item,etc);
});
G__31289.cljs$core$IFn$_invoke$arity$variadic = G__31289__delegate;
return G__31289;
})()
;
});
advenjure.verbs.ask_ambiguous = (function advenjure$verbs$ask_ambiguous(item_name,items){
var first_different = (function (spec){
return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__31298_SHARP_){
return cljs.core.not_EQ_.call(null,p1__31298_SHARP_,item_name);
}),new cljs.core.Keyword(null,"names","names",-1943074658).cljs$core$IFn$_invoke$arity$1(spec)));
});
var names = cljs.core.map.call(null,first_different,items);
var names__$1 = cljs.core.map.call(null,((function (first_different,names){
return (function (p1__31299_SHARP_){
return [cljs.core.str("the "),cljs.core.str(p1__31299_SHARP_)].join('');
});})(first_different,names))
,names);
var first_names = clojure.string.join.call(null,", ",cljs.core.butlast.call(null,names__$1));
return [cljs.core.str("Which "),cljs.core.str(item_name),cljs.core.str("? "),cljs.core.str(advenjure.utils.capfirst.call(null,first_names)),cljs.core.str(" or "),cljs.core.str(cljs.core.last.call(null,names__$1)),cljs.core.str("?")].join('');
});
/**
 * Takes the verb name, the kw to look up at the item at the handler function,
 *   wraps the function with the common logic such as trying to find the item,
 *   executing pre/post conditions, etc.
 */
advenjure.verbs.make_item_handler = (function advenjure$verbs$make_item_handler(var_args){
var args31325 = [];
var len__21530__auto___31907 = arguments.length;
var i__21531__auto___31908 = (0);
while(true){
if((i__21531__auto___31908 < len__21530__auto___31907)){
args31325.push((arguments[i__21531__auto___31908]));

var G__31913 = (i__21531__auto___31908 + (1));
i__21531__auto___31908 = G__31913;
continue;
} else {
}
break;
}

var G__31336 = args31325.length;
switch (G__31336) {
case 2:
return advenjure.verbs.make_item_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__21549__auto__ = (new cljs.core.IndexedSeq(args31325.slice((3)),(0),null));
return advenjure.verbs.make_item_handler.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__21549__auto__);

}
});

advenjure.verbs.make_item_handler.cljs$core$IFn$_invoke$arity$2 = (function (verb_name,verb_kw){
return advenjure.verbs.make_item_handler.call(null,verb_name,verb_kw,advenjure.verbs.noop.call(null,verb_kw));
});

advenjure.verbs.make_item_handler.cljs$core$IFn$_invoke$arity$variadic = (function (verb_name,verb_kw,handler,p__31339){
var map__31340 = p__31339;
var map__31340__$1 = ((((!((map__31340 == null)))?((((map__31340.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31340.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31340):map__31340);
var kw_required = cljs.core.get.call(null,map__31340__$1,new cljs.core.Keyword(null,"kw-required","kw-required",-916449094),true);
return ((function (map__31340,map__31340__$1,kw_required){
return (function() {
var G__31924 = null;
var G__31924__1 = (function (game_state){
return advenjure.utils.say.call(null,advenjure.gettext.core._.call(null,"%s what?",verb_name));
});
var G__31924__2 = (function (game_state,item_name){
var c__24323__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24323__auto__,map__31340,map__31340__$1,kw_required){
return (function (){
var f__24324__auto__ = (function (){var switch__24046__auto__ = ((function (c__24323__auto__,map__31340,map__31340__$1,kw_required){
return (function (state_31630){
var state_val_31631 = (state_31630[(1)]);
if((state_val_31631 === (65))){
var inst_31374 = (state_31630[(7)]);
var inst_31485 = advenjure.verbs.ask_ambiguous.call(null,item_name,inst_31374);
var inst_31486 = advenjure.utils.say.call(null,inst_31485);
var state_31630__$1 = state_31630;
var statearr_31632_31937 = state_31630__$1;
(statearr_31632_31937[(2)] = inst_31486);

(statearr_31632_31937[(1)] = (67));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31631 === (70))){
var inst_31624 = (state_31630[(2)]);
var state_31630__$1 = state_31630;
var statearr_31633_31941 = state_31630__$1;
(statearr_31633_31941[(2)] = inst_31624);

(statearr_31633_31941[(1)] = (67));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31631 === (62))){
var inst_31479 = advenjure.gettext.core._.call(null,"I didn't see that.");
var inst_31480 = advenjure.utils.say.call(null,inst_31479);
var state_31630__$1 = state_31630;
var statearr_31637_31948 = state_31630__$1;
(statearr_31637_31948[(2)] = inst_31480);

(statearr_31637_31948[(1)] = (64));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31631 === (74))){
var inst_31476 = (state_31630[(8)]);
var inst_31500 = (inst_31476 == null);
var state_31630__$1 = state_31630;
var statearr_31638_31953 = state_31630__$1;
(statearr_31638_31953[(2)] = inst_31500);

(statearr_31638_31953[(1)] = (76));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31631 === (7))){
var state_31630__$1 = state_31630;
var statearr_31639_31957 = state_31630__$1;
(statearr_31639_31957[(2)] = true);

(statearr_31639_31957[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31631 === (59))){
var inst_31445 = (state_31630[(9)]);
var state_31630__$1 = state_31630;
var statearr_31640_31958 = state_31630__$1;
(statearr_31640_31958[(2)] = inst_31445);

(statearr_31640_31958[(1)] = (60));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31631 === (20))){
var inst_31376 = (state_31630[(10)]);
var inst_31399 = cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,inst_31376);
var state_31630__$1 = state_31630;
var statearr_31641_31960 = state_31630__$1;
(statearr_31641_31960[(2)] = inst_31399);

(statearr_31641_31960[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31631 === (72))){
var state_31630__$1 = state_31630;
if(cljs.core.truth_(kw_required)){
var statearr_31642_31963 = state_31630__$1;
(statearr_31642_31963[(1)] = (74));

} else {
var statearr_31643_31965 = state_31630__$1;
(statearr_31643_31965[(1)] = (75));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31631 === (58))){
var inst_31445 = (state_31630[(9)]);
var state_31630__$1 = state_31630;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31630__$1,(61),inst_31445);
} else {
if((state_val_31631 === (60))){
var inst_31474 = (state_31630[(2)]);
var state_31630__$1 = state_31630;
var statearr_31644_31966 = state_31630__$1;
(statearr_31644_31966[(2)] = inst_31474);

(statearr_31644_31966[(1)] = (48));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31631 === (27))){
var inst_31395 = (state_31630[(2)]);
var state_31630__$1 = state_31630;
var statearr_31645_31968 = state_31630__$1;
(statearr_31645_31968[(2)] = inst_31395);

(statearr_31645_31968[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31631 === (1))){
var inst_31342 = advenjure.utils.find_item.call(null,game_state,item_name);
var inst_31343 = inst_31342;
var state_31630__$1 = (function (){var statearr_31646 = state_31630;
(statearr_31646[(11)] = inst_31343);

return statearr_31646;
})();
var statearr_31647_31984 = state_31630__$1;
(statearr_31647_31984[(2)] = null);

(statearr_31647_31984[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31631 === (69))){
var inst_31476 = (state_31630[(8)]);
var inst_31493 = inst_31476 === false;
var state_31630__$1 = state_31630;
if(cljs.core.truth_(inst_31493)){
var statearr_31648_31998 = state_31630__$1;
(statearr_31648_31998[(1)] = (71));

} else {
var statearr_31649_32000 = state_31630__$1;
(statearr_31649_32000[(1)] = (72));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31631 === (24))){
var inst_31397 = (state_31630[(2)]);
var state_31630__$1 = state_31630;
var statearr_31651_32003 = state_31630__$1;
(statearr_31651_32003[(2)] = inst_31397);

(statearr_31651_32003[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31631 === (55))){
var inst_31445 = (state_31630[(9)]);
var inst_31458 = cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,inst_31445);
var state_31630__$1 = state_31630;
var statearr_31652_32010 = state_31630__$1;
(statearr_31652_32010[(2)] = inst_31458);

(statearr_31652_32010[(1)] = (57));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31631 === (39))){
var inst_31430 = (state_31630[(2)]);
var state_31630__$1 = state_31630;
var statearr_31653_32015 = state_31630__$1;
(statearr_31653_32015[(2)] = inst_31430);

(statearr_31653_32015[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31631 === (46))){
var inst_31437 = (state_31630[(2)]);
var inst_31412 = inst_31437;
var state_31630__$1 = (function (){var statearr_31654 = state_31630;
(statearr_31654[(12)] = inst_31412);

return statearr_31654;
})();
var statearr_31655_32021 = state_31630__$1;
(statearr_31655_32021[(2)] = null);

(statearr_31655_32021[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31631 === (4))){
var inst_31343 = (state_31630[(11)]);
var inst_31349 = inst_31343.cljs$core$async$impl$protocols$ReadPort$;
var inst_31350 = (false) || (inst_31349);
var state_31630__$1 = state_31630;
if(cljs.core.truth_(inst_31350)){
var statearr_31656_32032 = state_31630__$1;
(statearr_31656_32032[(1)] = (7));

} else {
var statearr_31657_32033 = state_31630__$1;
(statearr_31657_32033[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31631 === (77))){
var inst_31505 = advenjure.gettext.core._.call(null,"I couldn't %s that.",verb_name);
var inst_31506 = advenjure.utils.say.call(null,inst_31505);
var state_31630__$1 = state_31630;
var statearr_31658_32043 = state_31630__$1;
(statearr_31658_32043[(2)] = inst_31506);

(statearr_31658_32043[(1)] = (79));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31631 === (54))){
var inst_31463 = (state_31630[(2)]);
var state_31630__$1 = state_31630;
var statearr_31659_32047 = state_31630__$1;
(statearr_31659_32047[(2)] = inst_31463);

(statearr_31659_32047[(1)] = (51));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31631 === (15))){
var inst_31372 = (state_31630[(2)]);
var state_31630__$1 = state_31630;
var statearr_31660_32052 = state_31630__$1;
(statearr_31660_32052[(2)] = inst_31372);

(statearr_31660_32052[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31631 === (48))){
var inst_31374 = (state_31630[(7)]);
var inst_31476 = (state_31630[(2)]);
var inst_31477 = cljs.core.empty_QMARK_.call(null,inst_31374);
var state_31630__$1 = (function (){var statearr_31661 = state_31630;
(statearr_31661[(8)] = inst_31476);

return statearr_31661;
})();
if(inst_31477){
var statearr_31662_32059 = state_31630__$1;
(statearr_31662_32059[(1)] = (62));

} else {
var statearr_31663_32061 = state_31630__$1;
(statearr_31663_32061[(1)] = (63));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31631 === (50))){
var inst_31445 = (state_31630[(9)]);
var inst_31465 = cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,inst_31445);
var state_31630__$1 = state_31630;
var statearr_31664_32070 = state_31630__$1;
(statearr_31664_32070[(2)] = inst_31465);

(statearr_31664_32070[(1)] = (51));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31631 === (75))){
var state_31630__$1 = state_31630;
var statearr_31665_32072 = state_31630__$1;
(statearr_31665_32072[(2)] = kw_required);

(statearr_31665_32072[(1)] = (76));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31631 === (21))){
var inst_31401 = (state_31630[(2)]);
var state_31630__$1 = state_31630;
if(cljs.core.truth_(inst_31401)){
var statearr_31666_32078 = state_31630__$1;
(statearr_31666_32078[(1)] = (28));

} else {
var statearr_31667_32079 = state_31630__$1;
(statearr_31667_32079[(1)] = (29));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31631 === (31))){
var inst_31404 = (state_31630[(2)]);
var inst_31376 = inst_31404;
var state_31630__$1 = (function (){var statearr_31668 = state_31630;
(statearr_31668[(10)] = inst_31376);

return statearr_31668;
})();
var statearr_31669_32085 = state_31630__$1;
(statearr_31669_32085[(2)] = null);

(statearr_31669_32085[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31631 === (32))){
var inst_31412 = (state_31630[(12)]);
var inst_31415 = (inst_31412 == null);
var inst_31416 = cljs.core.not.call(null,inst_31415);
var state_31630__$1 = state_31630;
if(inst_31416){
var statearr_31670_32097 = state_31630__$1;
(statearr_31670_32097[(1)] = (34));

} else {
var statearr_31671_32098 = state_31630__$1;
(statearr_31671_32098[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31631 === (40))){
var inst_31412 = (state_31630[(12)]);
var inst_31425 = cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,inst_31412);
var state_31630__$1 = state_31630;
var statearr_31672_32106 = state_31630__$1;
(statearr_31672_32106[(2)] = inst_31425);

(statearr_31672_32106[(1)] = (42));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31631 === (56))){
var state_31630__$1 = state_31630;
var statearr_31673_32109 = state_31630__$1;
(statearr_31673_32109[(2)] = false);

(statearr_31673_32109[(1)] = (57));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31631 === (33))){
var inst_31443 = (state_31630[(13)]);
var inst_31443__$1 = (state_31630[(2)]);
var inst_31444 = advenjure.hooks.eval_precondition.call(null,inst_31443__$1,game_state);
var inst_31445 = inst_31444;
var state_31630__$1 = (function (){var statearr_31674 = state_31630;
(statearr_31674[(9)] = inst_31445);

(statearr_31674[(13)] = inst_31443__$1);

return statearr_31674;
})();
var statearr_31675_32125 = state_31630__$1;
(statearr_31675_32125[(2)] = null);

(statearr_31675_32125[(1)] = (47));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31631 === (13))){
var inst_31343 = (state_31630[(11)]);
var state_31630__$1 = state_31630;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31630__$1,(16),inst_31343);
} else {
if((state_val_31631 === (22))){
var state_31630__$1 = state_31630;
var statearr_31677_32131 = state_31630__$1;
(statearr_31677_32131[(2)] = true);

(statearr_31677_32131[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31631 === (36))){
var inst_31434 = (state_31630[(2)]);
var state_31630__$1 = state_31630;
if(cljs.core.truth_(inst_31434)){
var statearr_31678_32132 = state_31630__$1;
(statearr_31678_32132[(1)] = (43));

} else {
var statearr_31679_32134 = state_31630__$1;
(statearr_31679_32134[(1)] = (44));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31631 === (41))){
var state_31630__$1 = state_31630;
var statearr_31680_32135 = state_31630__$1;
(statearr_31680_32135[(2)] = false);

(statearr_31680_32135[(1)] = (42));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31631 === (43))){
var inst_31412 = (state_31630[(12)]);
var state_31630__$1 = state_31630;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31630__$1,(46),inst_31412);
} else {
if((state_val_31631 === (61))){
var inst_31470 = (state_31630[(2)]);
var inst_31445 = inst_31470;
var state_31630__$1 = (function (){var statearr_31681 = state_31630;
(statearr_31681[(9)] = inst_31445);

return statearr_31681;
})();
var statearr_31682_32140 = state_31630__$1;
(statearr_31682_32140[(2)] = null);

(statearr_31682_32140[(1)] = (47));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31631 === (29))){
var inst_31376 = (state_31630[(10)]);
var state_31630__$1 = state_31630;
var statearr_31683_32143 = state_31630__$1;
(statearr_31683_32143[(2)] = inst_31376);

(statearr_31683_32143[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31631 === (44))){
var inst_31412 = (state_31630[(12)]);
var state_31630__$1 = state_31630;
var statearr_31684_32144 = state_31630__$1;
(statearr_31684_32144[(2)] = inst_31412);

(statearr_31684_32144[(1)] = (45));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31631 === (6))){
var inst_31365 = (state_31630[(2)]);
var state_31630__$1 = state_31630;
if(cljs.core.truth_(inst_31365)){
var statearr_31685_32151 = state_31630__$1;
(statearr_31685_32151[(1)] = (13));

} else {
var statearr_31686_32152 = state_31630__$1;
(statearr_31686_32152[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31631 === (28))){
var inst_31376 = (state_31630[(10)]);
var state_31630__$1 = state_31630;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31630__$1,(31),inst_31376);
} else {
if((state_val_31631 === (64))){
var inst_31628 = (state_31630[(2)]);
var state_31630__$1 = state_31630;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31630__$1,inst_31628);
} else {
if((state_val_31631 === (51))){
var inst_31467 = (state_31630[(2)]);
var state_31630__$1 = state_31630;
if(cljs.core.truth_(inst_31467)){
var statearr_31688_32156 = state_31630__$1;
(statearr_31688_32156[(1)] = (58));

} else {
var statearr_31689_32157 = state_31630__$1;
(statearr_31689_32157[(1)] = (59));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31631 === (25))){
var inst_31376 = (state_31630[(10)]);
var inst_31392 = cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,inst_31376);
var state_31630__$1 = state_31630;
var statearr_31690_32159 = state_31630__$1;
(statearr_31690_32159[(2)] = inst_31392);

(statearr_31690_32159[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31631 === (34))){
var inst_31412 = (state_31630[(12)]);
var inst_31418 = inst_31412.cljs$core$async$impl$protocols$ReadPort$;
var inst_31419 = (false) || (inst_31418);
var state_31630__$1 = state_31630;
if(cljs.core.truth_(inst_31419)){
var statearr_31691_32160 = state_31630__$1;
(statearr_31691_32160[(1)] = (37));

} else {
var statearr_31692_32163 = state_31630__$1;
(statearr_31692_32163[(1)] = (38));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31631 === (17))){
var inst_31376 = (state_31630[(10)]);
var inst_31381 = (inst_31376 == null);
var inst_31382 = cljs.core.not.call(null,inst_31381);
var state_31630__$1 = state_31630;
if(inst_31382){
var statearr_31693_32165 = state_31630__$1;
(statearr_31693_32165[(1)] = (19));

} else {
var statearr_31694_32166 = state_31630__$1;
(statearr_31694_32166[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31631 === (3))){
var inst_31374 = (state_31630[(7)]);
var inst_31374__$1 = (state_31630[(2)]);
var inst_31375 = cljs.core.first.call(null,inst_31374__$1);
var inst_31376 = inst_31375;
var state_31630__$1 = (function (){var statearr_31695 = state_31630;
(statearr_31695[(10)] = inst_31376);

(statearr_31695[(7)] = inst_31374__$1);

return statearr_31695;
})();
var statearr_31696_32171 = state_31630__$1;
(statearr_31696_32171[(2)] = null);

(statearr_31696_32171[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31631 === (12))){
var inst_31359 = (state_31630[(2)]);
var state_31630__$1 = state_31630;
var statearr_31697_32176 = state_31630__$1;
(statearr_31697_32176[(2)] = inst_31359);

(statearr_31697_32176[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31631 === (2))){
var inst_31343 = (state_31630[(11)]);
var inst_31346 = (inst_31343 == null);
var inst_31347 = cljs.core.not.call(null,inst_31346);
var state_31630__$1 = state_31630;
if(inst_31347){
var statearr_31698_32178 = state_31630__$1;
(statearr_31698_32178[(1)] = (4));

} else {
var statearr_31700_32179 = state_31630__$1;
(statearr_31700_32179[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31631 === (66))){
var inst_31476 = (state_31630[(8)]);
var inst_31488 = typeof inst_31476 === 'string';
var state_31630__$1 = state_31630;
if(cljs.core.truth_(inst_31488)){
var statearr_31701_32180 = state_31630__$1;
(statearr_31701_32180[(1)] = (68));

} else {
var statearr_31702_32181 = state_31630__$1;
(statearr_31702_32181[(1)] = (69));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31631 === (23))){
var inst_31376 = (state_31630[(10)]);
var inst_31389 = inst_31376.cljs$lang$protocol_mask$partition$;
var inst_31390 = (!inst_31389);
var state_31630__$1 = state_31630;
if(cljs.core.truth_(inst_31390)){
var statearr_31703_32183 = state_31630__$1;
(statearr_31703_32183[(1)] = (25));

} else {
var statearr_31704_32184 = state_31630__$1;
(statearr_31704_32184[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31631 === (47))){
var inst_31445 = (state_31630[(9)]);
var inst_31448 = (inst_31445 == null);
var inst_31449 = cljs.core.not.call(null,inst_31448);
var state_31630__$1 = state_31630;
if(inst_31449){
var statearr_31709_32188 = state_31630__$1;
(statearr_31709_32188[(1)] = (49));

} else {
var statearr_31710_32189 = state_31630__$1;
(statearr_31710_32189[(1)] = (50));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31631 === (35))){
var inst_31412 = (state_31630[(12)]);
var inst_31432 = cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,inst_31412);
var state_31630__$1 = state_31630;
var statearr_31711_32190 = state_31630__$1;
(statearr_31711_32190[(2)] = inst_31432);

(statearr_31711_32190[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31631 === (82))){
var inst_31618 = (state_31630[(2)]);
var state_31630__$1 = state_31630;
var statearr_31712_32192 = state_31630__$1;
(statearr_31712_32192[(2)] = inst_31618);

(statearr_31712_32192[(1)] = (79));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31631 === (76))){
var inst_31503 = (state_31630[(2)]);
var state_31630__$1 = state_31630;
if(cljs.core.truth_(inst_31503)){
var statearr_31713_32193 = state_31630__$1;
(statearr_31713_32193[(1)] = (77));

} else {
var statearr_31714_32196 = state_31630__$1;
(statearr_31714_32196[(1)] = (78));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31631 === (19))){
var inst_31376 = (state_31630[(10)]);
var inst_31385 = inst_31376.cljs$core$async$impl$protocols$ReadPort$;
var inst_31386 = (false) || (inst_31385);
var state_31630__$1 = state_31630;
if(cljs.core.truth_(inst_31386)){
var statearr_31716_32198 = state_31630__$1;
(statearr_31716_32198[(1)] = (22));

} else {
var statearr_31717_32199 = state_31630__$1;
(statearr_31717_32199[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31631 === (57))){
var inst_31461 = (state_31630[(2)]);
var state_31630__$1 = state_31630;
var statearr_31718_32201 = state_31630__$1;
(statearr_31718_32201[(2)] = inst_31461);

(statearr_31718_32201[(1)] = (54));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31631 === (68))){
var inst_31476 = (state_31630[(8)]);
var inst_31490 = advenjure.utils.say.call(null,inst_31476);
var state_31630__$1 = state_31630;
var statearr_31723_32226 = state_31630__$1;
(statearr_31723_32226[(2)] = inst_31490);

(statearr_31723_32226[(1)] = (70));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31631 === (11))){
var state_31630__$1 = state_31630;
var statearr_31724_32228 = state_31630__$1;
(statearr_31724_32228[(2)] = false);

(statearr_31724_32228[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31631 === (9))){
var inst_31361 = (state_31630[(2)]);
var state_31630__$1 = state_31630;
var statearr_31725_32233 = state_31630__$1;
(statearr_31725_32233[(2)] = inst_31361);

(statearr_31725_32233[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31631 === (5))){
var inst_31343 = (state_31630[(11)]);
var inst_31363 = cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,inst_31343);
var state_31630__$1 = state_31630;
var statearr_31726_32240 = state_31630__$1;
(statearr_31726_32240[(2)] = inst_31363);

(statearr_31726_32240[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31631 === (14))){
var inst_31343 = (state_31630[(11)]);
var state_31630__$1 = state_31630;
var statearr_31727_32242 = state_31630__$1;
(statearr_31727_32242[(2)] = inst_31343);

(statearr_31727_32242[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31631 === (45))){
var inst_31441 = (state_31630[(2)]);
var state_31630__$1 = state_31630;
var statearr_31728_32247 = state_31630__$1;
(statearr_31728_32247[(2)] = inst_31441);

(statearr_31728_32247[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31631 === (53))){
var inst_31445 = (state_31630[(9)]);
var inst_31455 = inst_31445.cljs$lang$protocol_mask$partition$;
var inst_31456 = (!inst_31455);
var state_31630__$1 = state_31630;
if(cljs.core.truth_(inst_31456)){
var statearr_31730_32251 = state_31630__$1;
(statearr_31730_32251[(1)] = (55));

} else {
var statearr_31731_32253 = state_31630__$1;
(statearr_31731_32253[(1)] = (56));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31631 === (78))){
var state_31630__$1 = state_31630;
var statearr_31732_32257 = state_31630__$1;
(statearr_31732_32257[(1)] = (80));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31631 === (26))){
var state_31630__$1 = state_31630;
var statearr_31734_32259 = state_31630__$1;
(statearr_31734_32259[(2)] = false);

(statearr_31734_32259[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31631 === (16))){
var inst_31368 = (state_31630[(2)]);
var inst_31343 = inst_31368;
var state_31630__$1 = (function (){var statearr_31735 = state_31630;
(statearr_31735[(11)] = inst_31343);

return statearr_31735;
})();
var statearr_31736_32263 = state_31630__$1;
(statearr_31736_32263[(2)] = null);

(statearr_31736_32263[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31631 === (81))){
var state_31630__$1 = state_31630;
var statearr_31737_32265 = state_31630__$1;
(statearr_31737_32265[(2)] = null);

(statearr_31737_32265[(1)] = (82));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31631 === (79))){
var inst_31620 = (state_31630[(2)]);
var state_31630__$1 = state_31630;
var statearr_31738_32269 = state_31630__$1;
(statearr_31738_32269[(2)] = inst_31620);

(statearr_31738_32269[(1)] = (73));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31631 === (38))){
var inst_31412 = (state_31630[(12)]);
var inst_31422 = inst_31412.cljs$lang$protocol_mask$partition$;
var inst_31423 = (!inst_31422);
var state_31630__$1 = state_31630;
if(cljs.core.truth_(inst_31423)){
var statearr_31739_32272 = state_31630__$1;
(statearr_31739_32272[(1)] = (40));

} else {
var statearr_31740_32274 = state_31630__$1;
(statearr_31740_32274[(1)] = (41));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31631 === (30))){
var inst_31408 = (state_31630[(2)]);
var state_31630__$1 = state_31630;
var statearr_31741_32276 = state_31630__$1;
(statearr_31741_32276[(2)] = inst_31408);

(statearr_31741_32276[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31631 === (73))){
var inst_31622 = (state_31630[(2)]);
var state_31630__$1 = state_31630;
var statearr_31743_32279 = state_31630__$1;
(statearr_31743_32279[(2)] = inst_31622);

(statearr_31743_32279[(1)] = (70));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31631 === (10))){
var inst_31343 = (state_31630[(11)]);
var inst_31356 = cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,inst_31343);
var state_31630__$1 = state_31630;
var statearr_31744_32281 = state_31630__$1;
(statearr_31744_32281[(2)] = inst_31356);

(statearr_31744_32281[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31631 === (18))){
var inst_31410 = (state_31630[(14)]);
var inst_31410__$1 = (state_31630[(2)]);
var inst_31411 = verb_kw.call(null,inst_31410__$1);
var inst_31412 = inst_31411;
var state_31630__$1 = (function (){var statearr_31745 = state_31630;
(statearr_31745[(14)] = inst_31410__$1);

(statearr_31745[(12)] = inst_31412);

return statearr_31745;
})();
var statearr_31746_32284 = state_31630__$1;
(statearr_31746_32284[(2)] = null);

(statearr_31746_32284[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31631 === (52))){
var state_31630__$1 = state_31630;
var statearr_31751_32287 = state_31630__$1;
(statearr_31751_32287[(2)] = true);

(statearr_31751_32287[(1)] = (54));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31631 === (67))){
var inst_31626 = (state_31630[(2)]);
var state_31630__$1 = state_31630;
var statearr_31752_32288 = state_31630__$1;
(statearr_31752_32288[(2)] = inst_31626);

(statearr_31752_32288[(1)] = (64));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31631 === (71))){
var inst_31495 = advenjure.gettext.core._.call(null,"I couldn't %s that.",verb_name);
var inst_31496 = advenjure.utils.say.call(null,inst_31495);
var state_31630__$1 = state_31630;
var statearr_31753_32290 = state_31630__$1;
(statearr_31753_32290[(2)] = inst_31496);

(statearr_31753_32290[(1)] = (73));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31631 === (42))){
var inst_31428 = (state_31630[(2)]);
var state_31630__$1 = state_31630;
var statearr_31754_32292 = state_31630__$1;
(statearr_31754_32292[(2)] = inst_31428);

(statearr_31754_32292[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31631 === (80))){
var inst_31476 = (state_31630[(8)]);
var inst_31410 = (state_31630[(14)]);
var inst_31374 = (state_31630[(7)]);
var inst_31443 = (state_31630[(13)]);
var inst_31613 = cljs.core.async.chan.call(null,(1));
var inst_31614 = (function (){var items = inst_31374;
var item = inst_31410;
var conditions = inst_31443;
var value = inst_31476;
var c__24323__auto____$1 = inst_31613;
return ((function (items,item,conditions,value,c__24323__auto____$1,inst_31476,inst_31410,inst_31374,inst_31443,inst_31613,state_val_31631,c__24323__auto__,map__31340,map__31340__$1,kw_required){
return (function (){
var f__24324__auto__ = (function (){var switch__24046__auto__ = ((function (items,item,conditions,value,c__24323__auto____$1,inst_31476,inst_31410,inst_31374,inst_31443,inst_31613,state_val_31631,c__24323__auto__,map__31340,map__31340__$1,kw_required){
return (function (state_31611){
var state_val_31612 = (state_31611[(1)]);
if((state_val_31612 === (7))){
var state_31611__$1 = state_31611;
var statearr_31756_32301 = state_31611__$1;
(statearr_31756_32301[(2)] = true);

(statearr_31756_32301[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31612 === (20))){
var inst_31544 = (state_31611[(7)]);
var inst_31564 = cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,inst_31544);
var state_31611__$1 = state_31611;
var statearr_31761_32302 = state_31611__$1;
(statearr_31761_32302[(2)] = inst_31564);

(statearr_31761_32302[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31612 === (27))){
var inst_31560 = (state_31611[(2)]);
var state_31611__$1 = state_31611;
var statearr_31762_32304 = state_31611__$1;
(statearr_31762_32304[(2)] = inst_31560);

(statearr_31762_32304[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31612 === (1))){
var inst_31509 = advenjure.hooks.execute.call(null,game_state,new cljs.core.Keyword(null,"before-item-handler","before-item-handler",1515326363),verb_kw,item);
var inst_31510 = inst_31509;
var state_31611__$1 = (function (){var statearr_31764 = state_31611;
(statearr_31764[(8)] = inst_31510);

return statearr_31764;
})();
var statearr_31765_32305 = state_31611__$1;
(statearr_31765_32305[(2)] = null);

(statearr_31765_32305[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31612 === (24))){
var inst_31562 = (state_31611[(2)]);
var state_31611__$1 = state_31611;
var statearr_31766_32309 = state_31611__$1;
(statearr_31766_32309[(2)] = inst_31562);

(statearr_31766_32309[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31612 === (39))){
var inst_31595 = (state_31611[(2)]);
var state_31611__$1 = state_31611;
var statearr_31767_32311 = state_31611__$1;
(statearr_31767_32311[(2)] = inst_31595);

(statearr_31767_32311[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31612 === (46))){
var inst_31602 = (state_31611[(2)]);
var inst_31577 = inst_31602;
var state_31611__$1 = (function (){var statearr_31772 = state_31611;
(statearr_31772[(9)] = inst_31577);

return statearr_31772;
})();
var statearr_31773_32314 = state_31611__$1;
(statearr_31773_32314[(2)] = null);

(statearr_31773_32314[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31612 === (4))){
var inst_31510 = (state_31611[(8)]);
var inst_31517 = inst_31510.cljs$core$async$impl$protocols$ReadPort$;
var inst_31518 = (false) || (inst_31517);
var state_31611__$1 = state_31611;
if(cljs.core.truth_(inst_31518)){
var statearr_31774_32316 = state_31611__$1;
(statearr_31774_32316[(1)] = (7));

} else {
var statearr_31775_32317 = state_31611__$1;
(statearr_31775_32317[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31612 === (15))){
var inst_31540 = (state_31611[(2)]);
var state_31611__$1 = state_31611;
var statearr_31777_32318 = state_31611__$1;
(statearr_31777_32318[(2)] = inst_31540);

(statearr_31777_32318[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31612 === (21))){
var inst_31566 = (state_31611[(2)]);
var state_31611__$1 = state_31611;
if(cljs.core.truth_(inst_31566)){
var statearr_31778_32320 = state_31611__$1;
(statearr_31778_32320[(1)] = (28));

} else {
var statearr_31779_32321 = state_31611__$1;
(statearr_31779_32321[(1)] = (29));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31612 === (31))){
var inst_31569 = (state_31611[(2)]);
var inst_31544 = inst_31569;
var state_31611__$1 = (function (){var statearr_31780 = state_31611;
(statearr_31780[(7)] = inst_31544);

return statearr_31780;
})();
var statearr_31781_32328 = state_31611__$1;
(statearr_31781_32328[(2)] = null);

(statearr_31781_32328[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31612 === (32))){
var inst_31577 = (state_31611[(9)]);
var inst_31580 = (inst_31577 == null);
var inst_31581 = cljs.core.not.call(null,inst_31580);
var state_31611__$1 = state_31611;
if(inst_31581){
var statearr_31782_32330 = state_31611__$1;
(statearr_31782_32330[(1)] = (34));

} else {
var statearr_31783_32331 = state_31611__$1;
(statearr_31783_32331[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31612 === (40))){
var inst_31577 = (state_31611[(9)]);
var inst_31590 = cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,inst_31577);
var state_31611__$1 = state_31611;
var statearr_31785_32333 = state_31611__$1;
(statearr_31785_32333[(2)] = inst_31590);

(statearr_31785_32333[(1)] = (42));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31612 === (33))){
var inst_31608 = (state_31611[(2)]);
var inst_31609 = advenjure.hooks.execute.call(null,inst_31608,new cljs.core.Keyword(null,"after-item-handler","after-item-handler",258632585),verb_kw,item);
var state_31611__$1 = state_31611;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31611__$1,inst_31609);
} else {
if((state_val_31612 === (13))){
var inst_31510 = (state_31611[(8)]);
var state_31611__$1 = state_31611;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31611__$1,(16),inst_31510);
} else {
if((state_val_31612 === (22))){
var state_31611__$1 = state_31611;
var statearr_31786_32370 = state_31611__$1;
(statearr_31786_32370[(2)] = true);

(statearr_31786_32370[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31612 === (36))){
var inst_31599 = (state_31611[(2)]);
var state_31611__$1 = state_31611;
if(cljs.core.truth_(inst_31599)){
var statearr_31787_32374 = state_31611__$1;
(statearr_31787_32374[(1)] = (43));

} else {
var statearr_31788_32378 = state_31611__$1;
(statearr_31788_32378[(1)] = (44));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31612 === (41))){
var state_31611__$1 = state_31611;
var statearr_31794_32382 = state_31611__$1;
(statearr_31794_32382[(2)] = false);

(statearr_31794_32382[(1)] = (42));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31612 === (43))){
var inst_31577 = (state_31611[(9)]);
var state_31611__$1 = state_31611;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31611__$1,(46),inst_31577);
} else {
if((state_val_31612 === (29))){
var inst_31544 = (state_31611[(7)]);
var state_31611__$1 = state_31611;
var statearr_31795_32393 = state_31611__$1;
(statearr_31795_32393[(2)] = inst_31544);

(statearr_31795_32393[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31612 === (44))){
var inst_31577 = (state_31611[(9)]);
var state_31611__$1 = state_31611;
var statearr_31796_32420 = state_31611__$1;
(statearr_31796_32420[(2)] = inst_31577);

(statearr_31796_32420[(1)] = (45));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31612 === (6))){
var inst_31533 = (state_31611[(2)]);
var state_31611__$1 = state_31611;
if(cljs.core.truth_(inst_31533)){
var statearr_31797_32434 = state_31611__$1;
(statearr_31797_32434[(1)] = (13));

} else {
var statearr_31798_32437 = state_31611__$1;
(statearr_31798_32437[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31612 === (28))){
var inst_31544 = (state_31611[(7)]);
var state_31611__$1 = state_31611;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31611__$1,(31),inst_31544);
} else {
if((state_val_31612 === (25))){
var inst_31544 = (state_31611[(7)]);
var inst_31557 = cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,inst_31544);
var state_31611__$1 = state_31611;
var statearr_31803_32444 = state_31611__$1;
(statearr_31803_32444[(2)] = inst_31557);

(statearr_31803_32444[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31612 === (34))){
var inst_31577 = (state_31611[(9)]);
var inst_31583 = inst_31577.cljs$core$async$impl$protocols$ReadPort$;
var inst_31584 = (false) || (inst_31583);
var state_31611__$1 = state_31611;
if(cljs.core.truth_(inst_31584)){
var statearr_31804_32456 = state_31611__$1;
(statearr_31804_32456[(1)] = (37));

} else {
var statearr_31805_32457 = state_31611__$1;
(statearr_31805_32457[(1)] = (38));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31612 === (17))){
var inst_31544 = (state_31611[(7)]);
var inst_31547 = (inst_31544 == null);
var inst_31548 = cljs.core.not.call(null,inst_31547);
var state_31611__$1 = state_31611;
if(inst_31548){
var statearr_31810_32461 = state_31611__$1;
(statearr_31810_32461[(1)] = (19));

} else {
var statearr_31811_32464 = state_31611__$1;
(statearr_31811_32464[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31612 === (3))){
var inst_31542 = (state_31611[(10)]);
var inst_31542__$1 = (state_31611[(2)]);
var inst_31543 = handler.call(null,inst_31542__$1,item);
var inst_31544 = inst_31543;
var state_31611__$1 = (function (){var statearr_31816 = state_31611;
(statearr_31816[(10)] = inst_31542__$1);

(statearr_31816[(7)] = inst_31544);

return statearr_31816;
})();
var statearr_31817_32466 = state_31611__$1;
(statearr_31817_32466[(2)] = null);

(statearr_31817_32466[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31612 === (12))){
var inst_31527 = (state_31611[(2)]);
var state_31611__$1 = state_31611;
var statearr_31818_32471 = state_31611__$1;
(statearr_31818_32471[(2)] = inst_31527);

(statearr_31818_32471[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31612 === (2))){
var inst_31510 = (state_31611[(8)]);
var inst_31513 = (inst_31510 == null);
var inst_31515 = cljs.core.not.call(null,inst_31513);
var state_31611__$1 = state_31611;
if(inst_31515){
var statearr_31819_32474 = state_31611__$1;
(statearr_31819_32474[(1)] = (4));

} else {
var statearr_31820_32475 = state_31611__$1;
(statearr_31820_32475[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31612 === (23))){
var inst_31544 = (state_31611[(7)]);
var inst_31554 = inst_31544.cljs$lang$protocol_mask$partition$;
var inst_31555 = (!inst_31554);
var state_31611__$1 = state_31611;
if(cljs.core.truth_(inst_31555)){
var statearr_31825_32477 = state_31611__$1;
(statearr_31825_32477[(1)] = (25));

} else {
var statearr_31826_32479 = state_31611__$1;
(statearr_31826_32479[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31612 === (35))){
var inst_31577 = (state_31611[(9)]);
var inst_31597 = cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,inst_31577);
var state_31611__$1 = state_31611;
var statearr_31827_32483 = state_31611__$1;
(statearr_31827_32483[(2)] = inst_31597);

(statearr_31827_32483[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31612 === (19))){
var inst_31544 = (state_31611[(7)]);
var inst_31550 = inst_31544.cljs$core$async$impl$protocols$ReadPort$;
var inst_31551 = (false) || (inst_31550);
var state_31611__$1 = state_31611;
if(cljs.core.truth_(inst_31551)){
var statearr_31829_32485 = state_31611__$1;
(statearr_31829_32485[(1)] = (22));

} else {
var statearr_31830_32486 = state_31611__$1;
(statearr_31830_32486[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31612 === (11))){
var state_31611__$1 = state_31611;
var statearr_31831_32487 = state_31611__$1;
(statearr_31831_32487[(2)] = false);

(statearr_31831_32487[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31612 === (9))){
var inst_31529 = (state_31611[(2)]);
var state_31611__$1 = state_31611;
var statearr_31836_32488 = state_31611__$1;
(statearr_31836_32488[(2)] = inst_31529);

(statearr_31836_32488[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31612 === (5))){
var inst_31510 = (state_31611[(8)]);
var inst_31531 = cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,inst_31510);
var state_31611__$1 = state_31611;
var statearr_31837_32491 = state_31611__$1;
(statearr_31837_32491[(2)] = inst_31531);

(statearr_31837_32491[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31612 === (14))){
var inst_31510 = (state_31611[(8)]);
var state_31611__$1 = state_31611;
var statearr_31838_32496 = state_31611__$1;
(statearr_31838_32496[(2)] = inst_31510);

(statearr_31838_32496[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31612 === (45))){
var inst_31606 = (state_31611[(2)]);
var state_31611__$1 = state_31611;
var statearr_31839_32497 = state_31611__$1;
(statearr_31839_32497[(2)] = inst_31606);

(statearr_31839_32497[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31612 === (26))){
var state_31611__$1 = state_31611;
var statearr_31840_32499 = state_31611__$1;
(statearr_31840_32499[(2)] = false);

(statearr_31840_32499[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31612 === (16))){
var inst_31536 = (state_31611[(2)]);
var inst_31510 = inst_31536;
var state_31611__$1 = (function (){var statearr_31841 = state_31611;
(statearr_31841[(8)] = inst_31510);

return statearr_31841;
})();
var statearr_31842_32509 = state_31611__$1;
(statearr_31842_32509[(2)] = null);

(statearr_31842_32509[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31612 === (38))){
var inst_31577 = (state_31611[(9)]);
var inst_31587 = inst_31577.cljs$lang$protocol_mask$partition$;
var inst_31588 = (!inst_31587);
var state_31611__$1 = state_31611;
if(cljs.core.truth_(inst_31588)){
var statearr_31848_32512 = state_31611__$1;
(statearr_31848_32512[(1)] = (40));

} else {
var statearr_31849_32513 = state_31611__$1;
(statearr_31849_32513[(1)] = (41));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31612 === (30))){
var inst_31573 = (state_31611[(2)]);
var state_31611__$1 = state_31611;
var statearr_31850_32516 = state_31611__$1;
(statearr_31850_32516[(2)] = inst_31573);

(statearr_31850_32516[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31612 === (10))){
var inst_31510 = (state_31611[(8)]);
var inst_31524 = cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,inst_31510);
var state_31611__$1 = state_31611;
var statearr_31854_32519 = state_31611__$1;
(statearr_31854_32519[(2)] = inst_31524);

(statearr_31854_32519[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31612 === (18))){
var inst_31542 = (state_31611[(10)]);
var inst_31575 = (state_31611[(2)]);
var inst_31576 = advenjure.hooks.eval_postcondition.call(null,conditions,inst_31542,inst_31575);
var inst_31577 = inst_31576;
var state_31611__$1 = (function (){var statearr_31855 = state_31611;
(statearr_31855[(9)] = inst_31577);

return statearr_31855;
})();
var statearr_31856_32521 = state_31611__$1;
(statearr_31856_32521[(2)] = null);

(statearr_31856_32521[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31612 === (42))){
var inst_31593 = (state_31611[(2)]);
var state_31611__$1 = state_31611;
var statearr_31857_32524 = state_31611__$1;
(statearr_31857_32524[(2)] = inst_31593);

(statearr_31857_32524[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31612 === (37))){
var state_31611__$1 = state_31611;
var statearr_31858_32526 = state_31611__$1;
(statearr_31858_32526[(2)] = true);

(statearr_31858_32526[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31612 === (8))){
var inst_31510 = (state_31611[(8)]);
var inst_31521 = inst_31510.cljs$lang$protocol_mask$partition$;
var inst_31522 = (!inst_31521);
var state_31611__$1 = state_31611;
if(cljs.core.truth_(inst_31522)){
var statearr_31860_32528 = state_31611__$1;
(statearr_31860_32528[(1)] = (10));

} else {
var statearr_31861_32529 = state_31611__$1;
(statearr_31861_32529[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(items,item,conditions,value,c__24323__auto____$1,inst_31476,inst_31410,inst_31374,inst_31443,inst_31613,state_val_31631,c__24323__auto__,map__31340,map__31340__$1,kw_required))
;
return ((function (switch__24046__auto__,items,item,conditions,value,c__24323__auto____$1,inst_31476,inst_31410,inst_31374,inst_31443,inst_31613,state_val_31631,c__24323__auto__,map__31340,map__31340__$1,kw_required){
return (function() {
var advenjure$verbs$state_machine__24047__auto__ = null;
var advenjure$verbs$state_machine__24047__auto____0 = (function (){
var statearr_31869 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31869[(0)] = advenjure$verbs$state_machine__24047__auto__);

(statearr_31869[(1)] = (1));

return statearr_31869;
});
var advenjure$verbs$state_machine__24047__auto____1 = (function (state_31611){
while(true){
var ret_value__24048__auto__ = (function (){try{while(true){
var result__24049__auto__ = switch__24046__auto__.call(null,state_31611);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24049__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24049__auto__;
}
break;
}
}catch (e31870){if((e31870 instanceof Object)){
var ex__24050__auto__ = e31870;
var statearr_31871_32552 = state_31611;
(statearr_31871_32552[(5)] = ex__24050__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31611);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31870;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32554 = state_31611;
state_31611 = G__32554;
continue;
} else {
return ret_value__24048__auto__;
}
break;
}
});
advenjure$verbs$state_machine__24047__auto__ = function(state_31611){
switch(arguments.length){
case 0:
return advenjure$verbs$state_machine__24047__auto____0.call(this);
case 1:
return advenjure$verbs$state_machine__24047__auto____1.call(this,state_31611);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
advenjure$verbs$state_machine__24047__auto__.cljs$core$IFn$_invoke$arity$0 = advenjure$verbs$state_machine__24047__auto____0;
advenjure$verbs$state_machine__24047__auto__.cljs$core$IFn$_invoke$arity$1 = advenjure$verbs$state_machine__24047__auto____1;
return advenjure$verbs$state_machine__24047__auto__;
})()
;})(switch__24046__auto__,items,item,conditions,value,c__24323__auto____$1,inst_31476,inst_31410,inst_31374,inst_31443,inst_31613,state_val_31631,c__24323__auto__,map__31340,map__31340__$1,kw_required))
})();
var state__24325__auto__ = (function (){var statearr_31873 = f__24324__auto__.call(null);
(statearr_31873[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24323__auto____$1);

return statearr_31873;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24325__auto__);
});
;})(items,item,conditions,value,c__24323__auto____$1,inst_31476,inst_31410,inst_31374,inst_31443,inst_31613,state_val_31631,c__24323__auto__,map__31340,map__31340__$1,kw_required))
})();
var inst_31615 = cljs.core.async.impl.dispatch.run.call(null,inst_31614);
var state_31630__$1 = (function (){var statearr_31878 = state_31630;
(statearr_31878[(15)] = inst_31615);

return statearr_31878;
})();
var statearr_31879_32556 = state_31630__$1;
(statearr_31879_32556[(2)] = inst_31613);

(statearr_31879_32556[(1)] = (82));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31631 === (37))){
var state_31630__$1 = state_31630;
var statearr_31880_32562 = state_31630__$1;
(statearr_31880_32562[(2)] = true);

(statearr_31880_32562[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31631 === (63))){
var inst_31374 = (state_31630[(7)]);
var inst_31482 = cljs.core.count.call(null,inst_31374);
var inst_31483 = (inst_31482 > (1));
var state_31630__$1 = state_31630;
if(cljs.core.truth_(inst_31483)){
var statearr_31881_32570 = state_31630__$1;
(statearr_31881_32570[(1)] = (65));

} else {
var statearr_31882_32575 = state_31630__$1;
(statearr_31882_32575[(1)] = (66));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31631 === (8))){
var inst_31343 = (state_31630[(11)]);
var inst_31353 = inst_31343.cljs$lang$protocol_mask$partition$;
var inst_31354 = (!inst_31353);
var state_31630__$1 = state_31630;
if(cljs.core.truth_(inst_31354)){
var statearr_31883_32650 = state_31630__$1;
(statearr_31883_32650[(1)] = (10));

} else {
var statearr_31884_32667 = state_31630__$1;
(statearr_31884_32667[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31631 === (49))){
var inst_31445 = (state_31630[(9)]);
var inst_31451 = inst_31445.cljs$core$async$impl$protocols$ReadPort$;
var inst_31452 = (false) || (inst_31451);
var state_31630__$1 = state_31630;
if(cljs.core.truth_(inst_31452)){
var statearr_31889_32725 = state_31630__$1;
(statearr_31889_32725[(1)] = (52));

} else {
var statearr_31890_32727 = state_31630__$1;
(statearr_31890_32727[(1)] = (53));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__24323__auto__,map__31340,map__31340__$1,kw_required))
;
return ((function (switch__24046__auto__,c__24323__auto__,map__31340,map__31340__$1,kw_required){
return (function() {
var advenjure$verbs$state_machine__24047__auto__ = null;
var advenjure$verbs$state_machine__24047__auto____0 = (function (){
var statearr_31898 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31898[(0)] = advenjure$verbs$state_machine__24047__auto__);

(statearr_31898[(1)] = (1));

return statearr_31898;
});
var advenjure$verbs$state_machine__24047__auto____1 = (function (state_31630){
while(true){
var ret_value__24048__auto__ = (function (){try{while(true){
var result__24049__auto__ = switch__24046__auto__.call(null,state_31630);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24049__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24049__auto__;
}
break;
}
}catch (e31899){if((e31899 instanceof Object)){
var ex__24050__auto__ = e31899;
var statearr_31900_32749 = state_31630;
(statearr_31900_32749[(5)] = ex__24050__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31630);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31899;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32756 = state_31630;
state_31630 = G__32756;
continue;
} else {
return ret_value__24048__auto__;
}
break;
}
});
advenjure$verbs$state_machine__24047__auto__ = function(state_31630){
switch(arguments.length){
case 0:
return advenjure$verbs$state_machine__24047__auto____0.call(this);
case 1:
return advenjure$verbs$state_machine__24047__auto____1.call(this,state_31630);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
advenjure$verbs$state_machine__24047__auto__.cljs$core$IFn$_invoke$arity$0 = advenjure$verbs$state_machine__24047__auto____0;
advenjure$verbs$state_machine__24047__auto__.cljs$core$IFn$_invoke$arity$1 = advenjure$verbs$state_machine__24047__auto____1;
return advenjure$verbs$state_machine__24047__auto__;
})()
;})(switch__24046__auto__,c__24323__auto__,map__31340,map__31340__$1,kw_required))
})();
var state__24325__auto__ = (function (){var statearr_31905 = f__24324__auto__.call(null);
(statearr_31905[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24323__auto__);

return statearr_31905;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24325__auto__);
});})(c__24323__auto__,map__31340,map__31340__$1,kw_required))
);

return c__24323__auto__;
});
G__31924 = function(game_state,item_name){
switch(arguments.length){
case 1:
return G__31924__1.call(this,game_state);
case 2:
return G__31924__2.call(this,game_state,item_name);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__31924.cljs$core$IFn$_invoke$arity$1 = G__31924__1;
G__31924.cljs$core$IFn$_invoke$arity$2 = G__31924__2;
return G__31924;
})()
;})(map__31340,map__31340__$1,kw_required))
});

advenjure.verbs.make_item_handler.cljs$lang$applyTo = (function (seq31326){
var G__31327 = cljs.core.first.call(null,seq31326);
var seq31326__$1 = cljs.core.next.call(null,seq31326);
var G__31328 = cljs.core.first.call(null,seq31326__$1);
var seq31326__$2 = cljs.core.next.call(null,seq31326__$1);
var G__31329 = cljs.core.first.call(null,seq31326__$2);
var seq31326__$3 = cljs.core.next.call(null,seq31326__$2);
return advenjure.verbs.make_item_handler.cljs$core$IFn$_invoke$arity$variadic(G__31327,G__31328,G__31329,seq31326__$3);
});

advenjure.verbs.make_item_handler.cljs$lang$maxFixedArity = (3);

/**
 * The same as above but adapted to compund verbs.
 */
advenjure.verbs.make_compound_item_handler = (function advenjure$verbs$make_compound_item_handler(var_args){
var args32779 = [];
var len__21530__auto___33724 = arguments.length;
var i__21531__auto___33725 = (0);
while(true){
if((i__21531__auto___33725 < len__21530__auto___33724)){
args32779.push((arguments[i__21531__auto___33725]));

var G__33726 = (i__21531__auto___33725 + (1));
i__21531__auto___33725 = G__33726;
continue;
} else {
}
break;
}

var G__32796 = args32779.length;
switch (G__32796) {
case 2:
return advenjure.verbs.make_compound_item_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__21549__auto__ = (new cljs.core.IndexedSeq(args32779.slice((3)),(0),null));
return advenjure.verbs.make_compound_item_handler.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__21549__auto__);

}
});

advenjure.verbs.make_compound_item_handler.cljs$core$IFn$_invoke$arity$2 = (function (verb_name,verb_kw){
return advenjure.verbs.make_compound_item_handler.call(null,verb_name,verb_kw,advenjure.verbs.noop.call(null,verb_kw));
});

advenjure.verbs.make_compound_item_handler.cljs$core$IFn$_invoke$arity$variadic = (function (verb_name,verb_kw,handler,p__32803){
var map__32804 = p__32803;
var map__32804__$1 = ((((!((map__32804 == null)))?((((map__32804.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32804.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32804):map__32804);
var kw_required = cljs.core.get.call(null,map__32804__$1,new cljs.core.Keyword(null,"kw-required","kw-required",-916449094),true);
return ((function (map__32804,map__32804__$1,kw_required){
return (function() {
var G__33729 = null;
var G__33729__1 = (function (game_state){
return advenjure.utils.say.call(null,advenjure.gettext.core._.call(null,"%s what?",verb_name));
});
var G__33729__2 = (function (game_state,item1){
return advenjure.utils.say.call(null,advenjure.gettext.core._.call(null,"%s %s with what?",verb_name,item1));
});
var G__33729__3 = (function (game_state,item1_name,item2_name){
var c__24323__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24323__auto__,map__32804,map__32804__$1,kw_required){
return (function (){
var f__24324__auto__ = (function (){var switch__24046__auto__ = ((function (c__24323__auto__,map__32804,map__32804__$1,kw_required){
return (function (state_33202){
var state_val_33203 = (state_33202[(1)]);
if((state_val_33203 === (65))){
var inst_32952 = (state_33202[(7)]);
var inst_32974 = cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,inst_32952);
var state_33202__$1 = state_33202;
var statearr_33209_33734 = state_33202__$1;
(statearr_33209_33734[(2)] = inst_32974);

(statearr_33209_33734[(1)] = (66));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33203 === (70))){
var inst_32952 = (state_33202[(7)]);
var inst_32967 = cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,inst_32952);
var state_33202__$1 = state_33202;
var statearr_33210_33737 = state_33202__$1;
(statearr_33210_33737[(2)] = inst_32967);

(statearr_33210_33737[(1)] = (72));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33203 === (62))){
var inst_32952 = (state_33202[(7)]);
var inst_32955 = (inst_32952 == null);
var inst_32956 = cljs.core.not.call(null,inst_32955);
var state_33202__$1 = state_33202;
if(inst_32956){
var statearr_33214_33738 = state_33202__$1;
(statearr_33214_33738[(1)] = (64));

} else {
var statearr_33216_33739 = state_33202__$1;
(statearr_33216_33739[(1)] = (65));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33203 === (74))){
var inst_32952 = (state_33202[(7)]);
var state_33202__$1 = state_33202;
var statearr_33217_33740 = state_33202__$1;
(statearr_33217_33740[(2)] = inst_32952);

(statearr_33217_33740[(1)] = (75));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33203 === (110))){
var inst_33061 = advenjure.gettext.core._.call(null,"I couldn't %s that.",verb_name);
var inst_33062 = advenjure.utils.say.call(null,inst_33061);
var state_33202__$1 = state_33202;
var statearr_33219_33741 = state_33202__$1;
(statearr_33219_33741[(2)] = inst_33062);

(statearr_33219_33741[(1)] = (112));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33203 === (7))){
var state_33202__$1 = state_33202;
var statearr_33223_33742 = state_33202__$1;
(statearr_33223_33742[(2)] = true);

(statearr_33223_33742[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33203 === (59))){
var inst_32916 = (state_33202[(8)]);
var state_33202__$1 = state_33202;
var statearr_33224_33743 = state_33202__$1;
(statearr_33224_33743[(2)] = inst_32916);

(statearr_33224_33743[(1)] = (60));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33203 === (86))){
var state_33202__$1 = state_33202;
var statearr_33226_33745 = state_33202__$1;
(statearr_33226_33745[(2)] = false);

(statearr_33226_33745[(1)] = (87));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33203 === (20))){
var inst_32846 = (state_33202[(9)]);
var inst_32868 = cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,inst_32846);
var state_33202__$1 = state_33202;
var statearr_33227_33747 = state_33202__$1;
(statearr_33227_33747[(2)] = inst_32868);

(statearr_33227_33747[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33203 === (72))){
var inst_32970 = (state_33202[(2)]);
var state_33202__$1 = state_33202;
var statearr_33234_33749 = state_33202__$1;
(statearr_33234_33749[(2)] = inst_32970);

(statearr_33234_33749[(1)] = (69));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33203 === (58))){
var inst_32916 = (state_33202[(8)]);
var state_33202__$1 = state_33202;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33202__$1,(61),inst_32916);
} else {
if((state_val_33203 === (60))){
var inst_32948 = (state_33202[(2)]);
var state_33202__$1 = state_33202;
var statearr_33256_33751 = state_33202__$1;
(statearr_33256_33751[(2)] = inst_32948);

(statearr_33256_33751[(1)] = (48));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33203 === (27))){
var inst_32864 = (state_33202[(2)]);
var state_33202__$1 = state_33202;
var statearr_33266_33754 = state_33202__$1;
(statearr_33266_33754[(2)] = inst_32864);

(statearr_33266_33754[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33203 === (1))){
var inst_32810 = advenjure.utils.find_item.call(null,game_state,item1_name);
var inst_32811 = inst_32810;
var state_33202__$1 = (function (){var statearr_33287 = state_33202;
(statearr_33287[(10)] = inst_32811);

return statearr_33287;
})();
var statearr_33298_33763 = state_33202__$1;
(statearr_33298_33763[(2)] = null);

(statearr_33298_33763[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33203 === (69))){
var inst_32972 = (state_33202[(2)]);
var state_33202__$1 = state_33202;
var statearr_33311_33766 = state_33202__$1;
(statearr_33311_33766[(2)] = inst_32972);

(statearr_33311_33766[(1)] = (66));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33203 === (101))){
var inst_33020 = (state_33202[(11)]);
var inst_33045 = advenjure.utils.say.call(null,inst_33020);
var state_33202__$1 = state_33202;
var statearr_33337_33772 = state_33202__$1;
(statearr_33337_33772[(2)] = inst_33045);

(statearr_33337_33772[(1)] = (103));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33203 === (24))){
var inst_32866 = (state_33202[(2)]);
var state_33202__$1 = state_33202;
var statearr_33345_33776 = state_33202__$1;
(statearr_33345_33776[(2)] = inst_32866);

(statearr_33345_33776[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33203 === (102))){
var inst_33020 = (state_33202[(11)]);
var inst_33048 = inst_33020 === false;
var state_33202__$1 = state_33202;
if(cljs.core.truth_(inst_33048)){
var statearr_33364_33784 = state_33202__$1;
(statearr_33364_33784[(1)] = (104));

} else {
var statearr_33367_33788 = state_33202__$1;
(statearr_33367_33788[(1)] = (105));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33203 === (55))){
var inst_32916 = (state_33202[(8)]);
var inst_32931 = cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,inst_32916);
var state_33202__$1 = state_33202;
var statearr_33380_33793 = state_33202__$1;
(statearr_33380_33793[(2)] = inst_32931);

(statearr_33380_33793[(1)] = (57));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33203 === (85))){
var inst_32987 = (state_33202[(12)]);
var inst_33002 = cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,inst_32987);
var state_33202__$1 = state_33202;
var statearr_33393_33801 = state_33202__$1;
(statearr_33393_33801[(2)] = inst_33002);

(statearr_33393_33801[(1)] = (87));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33203 === (39))){
var inst_32901 = (state_33202[(2)]);
var state_33202__$1 = state_33202;
var statearr_33394_33809 = state_33202__$1;
(statearr_33394_33809[(2)] = inst_32901);

(statearr_33394_33809[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33203 === (88))){
var inst_32987 = (state_33202[(12)]);
var state_33202__$1 = state_33202;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33202__$1,(91),inst_32987);
} else {
if((state_val_33203 === (46))){
var inst_32908 = (state_33202[(2)]);
var inst_32881 = inst_32908;
var state_33202__$1 = (function (){var statearr_33395 = state_33202;
(statearr_33395[(13)] = inst_32881);

return statearr_33395;
})();
var statearr_33397_33828 = state_33202__$1;
(statearr_33397_33828[(2)] = null);

(statearr_33397_33828[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33203 === (4))){
var inst_32811 = (state_33202[(10)]);
var inst_32819 = inst_32811.cljs$core$async$impl$protocols$ReadPort$;
var inst_32820 = (false) || (inst_32819);
var state_33202__$1 = state_33202;
if(cljs.core.truth_(inst_32820)){
var statearr_33402_33836 = state_33202__$1;
(statearr_33402_33836[(1)] = (7));

} else {
var statearr_33403_33837 = state_33202__$1;
(statearr_33403_33837[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33203 === (77))){
var inst_32987 = (state_33202[(12)]);
var inst_32991 = (inst_32987 == null);
var inst_32992 = cljs.core.not.call(null,inst_32991);
var state_33202__$1 = state_33202;
if(inst_32992){
var statearr_33404_33842 = state_33202__$1;
(statearr_33404_33842[(1)] = (79));

} else {
var statearr_33405_33844 = state_33202__$1;
(statearr_33405_33844[(1)] = (80));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33203 === (106))){
var inst_33188 = (state_33202[(2)]);
var state_33202__$1 = state_33202;
var statearr_33407_33849 = state_33202__$1;
(statearr_33407_33849[(2)] = inst_33188);

(statearr_33407_33849[(1)] = (103));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33203 === (95))){
var inst_32844 = (state_33202[(14)]);
var inst_33034 = advenjure.verbs.ask_ambiguous.call(null,item1_name,inst_32844);
var inst_33035 = advenjure.utils.say.call(null,inst_33034);
var state_33202__$1 = state_33202;
var statearr_33411_33855 = state_33202__$1;
(statearr_33411_33855[(2)] = inst_33035);

(statearr_33411_33855[(1)] = (97));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33203 === (54))){
var inst_32936 = (state_33202[(2)]);
var state_33202__$1 = state_33202;
var statearr_33413_33861 = state_33202__$1;
(statearr_33413_33861[(2)] = inst_32936);

(statearr_33413_33861[(1)] = (51));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33203 === (92))){
var inst_33028 = advenjure.gettext.core._.call(null,"I didn't see that.");
var inst_33029 = advenjure.utils.say.call(null,inst_33028);
var state_33202__$1 = state_33202;
var statearr_33417_33868 = state_33202__$1;
(statearr_33417_33868[(2)] = inst_33029);

(statearr_33417_33868[(1)] = (94));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33203 === (104))){
var inst_33051 = [cljs.core.str("I couldn't "),cljs.core.str(verb_name),cljs.core.str(" that.")].join('');
var inst_33052 = advenjure.utils.say.call(null,inst_33051);
var state_33202__$1 = state_33202;
var statearr_33421_33873 = state_33202__$1;
(statearr_33421_33873[(2)] = inst_33052);

(statearr_33421_33873[(1)] = (106));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33203 === (15))){
var inst_32842 = (state_33202[(2)]);
var state_33202__$1 = state_33202;
var statearr_33424_33874 = state_33202__$1;
(statearr_33424_33874[(2)] = inst_32842);

(statearr_33424_33874[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33203 === (48))){
var inst_32879 = (state_33202[(15)]);
var inst_32950 = (state_33202[(2)]);
var inst_32951 = verb_kw.call(null,inst_32879);
var inst_32952 = inst_32951;
var state_33202__$1 = (function (){var statearr_33426 = state_33202;
(statearr_33426[(7)] = inst_32952);

(statearr_33426[(16)] = inst_32950);

return statearr_33426;
})();
var statearr_33428_33894 = state_33202__$1;
(statearr_33428_33894[(2)] = null);

(statearr_33428_33894[(1)] = (62));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33203 === (50))){
var inst_32916 = (state_33202[(8)]);
var inst_32939 = cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,inst_32916);
var state_33202__$1 = state_33202;
var statearr_33432_33907 = state_33202__$1;
(statearr_33432_33907[(2)] = inst_32939);

(statearr_33432_33907[(1)] = (51));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33203 === (75))){
var inst_32983 = (state_33202[(2)]);
var state_33202__$1 = state_33202;
var statearr_33434_33917 = state_33202__$1;
(statearr_33434_33917[(2)] = inst_32983);

(statearr_33434_33917[(1)] = (63));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33203 === (99))){
var inst_33020 = (state_33202[(11)]);
var inst_33043 = typeof inst_33020 === 'string';
var state_33202__$1 = state_33202;
if(cljs.core.truth_(inst_33043)){
var statearr_33436_33927 = state_33202__$1;
(statearr_33436_33927[(1)] = (101));

} else {
var statearr_33438_33931 = state_33202__$1;
(statearr_33438_33931[(1)] = (102));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33203 === (21))){
var inst_32870 = (state_33202[(2)]);
var state_33202__$1 = state_33202;
if(cljs.core.truth_(inst_32870)){
var statearr_33441_33939 = state_33202__$1;
(statearr_33441_33939[(1)] = (28));

} else {
var statearr_33443_33943 = state_33202__$1;
(statearr_33443_33943[(1)] = (29));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33203 === (31))){
var inst_32873 = (state_33202[(2)]);
var inst_32846 = inst_32873;
var state_33202__$1 = (function (){var statearr_33446 = state_33202;
(statearr_33446[(9)] = inst_32846);

return statearr_33446;
})();
var statearr_33447_33955 = state_33202__$1;
(statearr_33447_33955[(2)] = null);

(statearr_33447_33955[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33203 === (113))){
var inst_32879 = (state_33202[(15)]);
var inst_32844 = (state_33202[(14)]);
var inst_32914 = (state_33202[(17)]);
var inst_33020 = (state_33202[(11)]);
var inst_32985 = (state_33202[(18)]);
var inst_32950 = (state_33202[(16)]);
var inst_33178 = cljs.core.async.chan.call(null,(1));
var inst_33179 = (function (){var items1 = inst_32844;
var item1 = inst_32879;
var items2 = inst_32914;
var item2 = inst_32950;
var conditions = inst_32985;
var value = inst_33020;
var c__24323__auto____$1 = inst_33178;
return ((function (items1,item1,items2,item2,conditions,value,c__24323__auto____$1,inst_32879,inst_32844,inst_32914,inst_33020,inst_32985,inst_32950,inst_33178,state_val_33203,c__24323__auto__,map__32804,map__32804__$1,kw_required){
return (function (){
var f__24324__auto__ = (function (){var switch__24046__auto__ = ((function (items1,item1,items2,item2,conditions,value,c__24323__auto____$1,inst_32879,inst_32844,inst_32914,inst_33020,inst_32985,inst_32950,inst_33178,state_val_33203,c__24323__auto__,map__32804,map__32804__$1,kw_required){
return (function (state_33173){
var state_val_33175 = (state_33173[(1)]);
if((state_val_33175 === (7))){
var state_33173__$1 = state_33173;
var statearr_33453_33988 = state_33173__$1;
(statearr_33453_33988[(2)] = true);

(statearr_33453_33988[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33175 === (20))){
var inst_33100 = (state_33173[(7)]);
var inst_33122 = cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,inst_33100);
var state_33173__$1 = state_33173;
var statearr_33457_33994 = state_33173__$1;
(statearr_33457_33994[(2)] = inst_33122);

(statearr_33457_33994[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33175 === (27))){
var inst_33118 = (state_33173[(2)]);
var state_33173__$1 = state_33173;
var statearr_33459_34004 = state_33173__$1;
(statearr_33459_34004[(2)] = inst_33118);

(statearr_33459_34004[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33175 === (1))){
var inst_33065 = advenjure.hooks.execute.call(null,game_state,new cljs.core.Keyword(null,"before-item-handler","before-item-handler",1515326363),verb_kw,item1,item2);
var inst_33066 = inst_33065;
var state_33173__$1 = (function (){var statearr_33461 = state_33173;
(statearr_33461[(8)] = inst_33066);

return statearr_33461;
})();
var statearr_33463_34012 = state_33173__$1;
(statearr_33463_34012[(2)] = null);

(statearr_33463_34012[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33175 === (24))){
var inst_33120 = (state_33173[(2)]);
var state_33173__$1 = state_33173;
var statearr_33466_34021 = state_33173__$1;
(statearr_33466_34021[(2)] = inst_33120);

(statearr_33466_34021[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33175 === (39))){
var inst_33155 = (state_33173[(2)]);
var state_33173__$1 = state_33173;
var statearr_33468_34030 = state_33173__$1;
(statearr_33468_34030[(2)] = inst_33155);

(statearr_33468_34030[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33175 === (46))){
var inst_33162 = (state_33173[(2)]);
var inst_33135 = inst_33162;
var state_33173__$1 = (function (){var statearr_33470 = state_33173;
(statearr_33470[(9)] = inst_33135);

return statearr_33470;
})();
var statearr_33471_34037 = state_33173__$1;
(statearr_33471_34037[(2)] = null);

(statearr_33471_34037[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33175 === (4))){
var inst_33066 = (state_33173[(8)]);
var inst_33072 = inst_33066.cljs$core$async$impl$protocols$ReadPort$;
var inst_33073 = (false) || (inst_33072);
var state_33173__$1 = state_33173;
if(cljs.core.truth_(inst_33073)){
var statearr_33472_34040 = state_33173__$1;
(statearr_33472_34040[(1)] = (7));

} else {
var statearr_33473_34043 = state_33173__$1;
(statearr_33473_34043[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33175 === (15))){
var inst_33096 = (state_33173[(2)]);
var state_33173__$1 = state_33173;
var statearr_33477_34048 = state_33173__$1;
(statearr_33477_34048[(2)] = inst_33096);

(statearr_33477_34048[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33175 === (21))){
var inst_33124 = (state_33173[(2)]);
var state_33173__$1 = state_33173;
if(cljs.core.truth_(inst_33124)){
var statearr_33480_34053 = state_33173__$1;
(statearr_33480_34053[(1)] = (28));

} else {
var statearr_33482_34056 = state_33173__$1;
(statearr_33482_34056[(1)] = (29));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33175 === (31))){
var inst_33127 = (state_33173[(2)]);
var inst_33100 = inst_33127;
var state_33173__$1 = (function (){var statearr_33484 = state_33173;
(statearr_33484[(7)] = inst_33100);

return statearr_33484;
})();
var statearr_33486_34061 = state_33173__$1;
(statearr_33486_34061[(2)] = null);

(statearr_33486_34061[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33175 === (32))){
var inst_33135 = (state_33173[(9)]);
var inst_33139 = (inst_33135 == null);
var inst_33140 = cljs.core.not.call(null,inst_33139);
var state_33173__$1 = state_33173;
if(inst_33140){
var statearr_33490_34062 = state_33173__$1;
(statearr_33490_34062[(1)] = (34));

} else {
var statearr_33492_34067 = state_33173__$1;
(statearr_33492_34067[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33175 === (40))){
var inst_33135 = (state_33173[(9)]);
var inst_33150 = cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,inst_33135);
var state_33173__$1 = state_33173;
var statearr_33494_34070 = state_33173__$1;
(statearr_33494_34070[(2)] = inst_33150);

(statearr_33494_34070[(1)] = (42));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33175 === (33))){
var inst_33168 = (state_33173[(2)]);
var inst_33169 = advenjure.hooks.execute.call(null,inst_33168,new cljs.core.Keyword(null,"after-item-handler","after-item-handler",258632585),verb_kw,item1,item2);
var state_33173__$1 = state_33173;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33173__$1,inst_33169);
} else {
if((state_val_33175 === (13))){
var inst_33066 = (state_33173[(8)]);
var state_33173__$1 = state_33173;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33173__$1,(16),inst_33066);
} else {
if((state_val_33175 === (22))){
var state_33173__$1 = state_33173;
var statearr_33499_34072 = state_33173__$1;
(statearr_33499_34072[(2)] = true);

(statearr_33499_34072[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33175 === (36))){
var inst_33159 = (state_33173[(2)]);
var state_33173__$1 = state_33173;
if(cljs.core.truth_(inst_33159)){
var statearr_33501_34073 = state_33173__$1;
(statearr_33501_34073[(1)] = (43));

} else {
var statearr_33503_34074 = state_33173__$1;
(statearr_33503_34074[(1)] = (44));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33175 === (41))){
var state_33173__$1 = state_33173;
var statearr_33506_34075 = state_33173__$1;
(statearr_33506_34075[(2)] = false);

(statearr_33506_34075[(1)] = (42));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33175 === (43))){
var inst_33135 = (state_33173[(9)]);
var state_33173__$1 = state_33173;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33173__$1,(46),inst_33135);
} else {
if((state_val_33175 === (29))){
var inst_33100 = (state_33173[(7)]);
var state_33173__$1 = state_33173;
var statearr_33508_34080 = state_33173__$1;
(statearr_33508_34080[(2)] = inst_33100);

(statearr_33508_34080[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33175 === (44))){
var inst_33135 = (state_33173[(9)]);
var state_33173__$1 = state_33173;
var statearr_33510_34084 = state_33173__$1;
(statearr_33510_34084[(2)] = inst_33135);

(statearr_33510_34084[(1)] = (45));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33175 === (6))){
var inst_33088 = (state_33173[(2)]);
var state_33173__$1 = state_33173;
if(cljs.core.truth_(inst_33088)){
var statearr_33513_34085 = state_33173__$1;
(statearr_33513_34085[(1)] = (13));

} else {
var statearr_33514_34086 = state_33173__$1;
(statearr_33514_34086[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33175 === (28))){
var inst_33100 = (state_33173[(7)]);
var state_33173__$1 = state_33173;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33173__$1,(31),inst_33100);
} else {
if((state_val_33175 === (25))){
var inst_33100 = (state_33173[(7)]);
var inst_33115 = cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,inst_33100);
var state_33173__$1 = state_33173;
var statearr_33517_34087 = state_33173__$1;
(statearr_33517_34087[(2)] = inst_33115);

(statearr_33517_34087[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33175 === (34))){
var inst_33135 = (state_33173[(9)]);
var inst_33142 = inst_33135.cljs$core$async$impl$protocols$ReadPort$;
var inst_33143 = (false) || (inst_33142);
var state_33173__$1 = state_33173;
if(cljs.core.truth_(inst_33143)){
var statearr_33519_34088 = state_33173__$1;
(statearr_33519_34088[(1)] = (37));

} else {
var statearr_33520_34089 = state_33173__$1;
(statearr_33520_34089[(1)] = (38));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33175 === (17))){
var inst_33100 = (state_33173[(7)]);
var inst_33104 = (inst_33100 == null);
var inst_33105 = cljs.core.not.call(null,inst_33104);
var state_33173__$1 = state_33173;
if(inst_33105){
var statearr_33523_34090 = state_33173__$1;
(statearr_33523_34090[(1)] = (19));

} else {
var statearr_33524_34091 = state_33173__$1;
(statearr_33524_34091[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33175 === (3))){
var inst_33098 = (state_33173[(10)]);
var inst_33098__$1 = (state_33173[(2)]);
var inst_33099 = handler.call(null,inst_33098__$1,item1,item2);
var inst_33100 = inst_33099;
var state_33173__$1 = (function (){var statearr_33526 = state_33173;
(statearr_33526[(7)] = inst_33100);

(statearr_33526[(10)] = inst_33098__$1);

return statearr_33526;
})();
var statearr_33527_34095 = state_33173__$1;
(statearr_33527_34095[(2)] = null);

(statearr_33527_34095[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33175 === (12))){
var inst_33082 = (state_33173[(2)]);
var state_33173__$1 = state_33173;
var statearr_33530_34096 = state_33173__$1;
(statearr_33530_34096[(2)] = inst_33082);

(statearr_33530_34096[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33175 === (2))){
var inst_33066 = (state_33173[(8)]);
var inst_33069 = (inst_33066 == null);
var inst_33070 = cljs.core.not.call(null,inst_33069);
var state_33173__$1 = state_33173;
if(inst_33070){
var statearr_33531_34101 = state_33173__$1;
(statearr_33531_34101[(1)] = (4));

} else {
var statearr_33533_34102 = state_33173__$1;
(statearr_33533_34102[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33175 === (23))){
var inst_33100 = (state_33173[(7)]);
var inst_33112 = inst_33100.cljs$lang$protocol_mask$partition$;
var inst_33113 = (!inst_33112);
var state_33173__$1 = state_33173;
if(cljs.core.truth_(inst_33113)){
var statearr_33535_34103 = state_33173__$1;
(statearr_33535_34103[(1)] = (25));

} else {
var statearr_33537_34104 = state_33173__$1;
(statearr_33537_34104[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33175 === (35))){
var inst_33135 = (state_33173[(9)]);
var inst_33157 = cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,inst_33135);
var state_33173__$1 = state_33173;
var statearr_33538_34109 = state_33173__$1;
(statearr_33538_34109[(2)] = inst_33157);

(statearr_33538_34109[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33175 === (19))){
var inst_33100 = (state_33173[(7)]);
var inst_33107 = inst_33100.cljs$core$async$impl$protocols$ReadPort$;
var inst_33108 = (false) || (inst_33107);
var state_33173__$1 = state_33173;
if(cljs.core.truth_(inst_33108)){
var statearr_33541_34117 = state_33173__$1;
(statearr_33541_34117[(1)] = (22));

} else {
var statearr_33542_34118 = state_33173__$1;
(statearr_33542_34118[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33175 === (11))){
var state_33173__$1 = state_33173;
var statearr_33543_34119 = state_33173__$1;
(statearr_33543_34119[(2)] = false);

(statearr_33543_34119[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33175 === (9))){
var inst_33084 = (state_33173[(2)]);
var state_33173__$1 = state_33173;
var statearr_33544_34122 = state_33173__$1;
(statearr_33544_34122[(2)] = inst_33084);

(statearr_33544_34122[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33175 === (5))){
var inst_33066 = (state_33173[(8)]);
var inst_33086 = cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,inst_33066);
var state_33173__$1 = state_33173;
var statearr_33547_34129 = state_33173__$1;
(statearr_33547_34129[(2)] = inst_33086);

(statearr_33547_34129[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33175 === (14))){
var inst_33066 = (state_33173[(8)]);
var state_33173__$1 = state_33173;
var statearr_33550_34136 = state_33173__$1;
(statearr_33550_34136[(2)] = inst_33066);

(statearr_33550_34136[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33175 === (45))){
var inst_33166 = (state_33173[(2)]);
var state_33173__$1 = state_33173;
var statearr_33552_34137 = state_33173__$1;
(statearr_33552_34137[(2)] = inst_33166);

(statearr_33552_34137[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33175 === (26))){
var state_33173__$1 = state_33173;
var statearr_33557_34139 = state_33173__$1;
(statearr_33557_34139[(2)] = false);

(statearr_33557_34139[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33175 === (16))){
var inst_33092 = (state_33173[(2)]);
var inst_33066 = inst_33092;
var state_33173__$1 = (function (){var statearr_33560 = state_33173;
(statearr_33560[(8)] = inst_33066);

return statearr_33560;
})();
var statearr_33562_34147 = state_33173__$1;
(statearr_33562_34147[(2)] = null);

(statearr_33562_34147[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33175 === (38))){
var inst_33135 = (state_33173[(9)]);
var inst_33146 = inst_33135.cljs$lang$protocol_mask$partition$;
var inst_33147 = (!inst_33146);
var state_33173__$1 = state_33173;
if(cljs.core.truth_(inst_33147)){
var statearr_33566_34153 = state_33173__$1;
(statearr_33566_34153[(1)] = (40));

} else {
var statearr_33567_34156 = state_33173__$1;
(statearr_33567_34156[(1)] = (41));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33175 === (30))){
var inst_33131 = (state_33173[(2)]);
var state_33173__$1 = state_33173;
var statearr_33569_34162 = state_33173__$1;
(statearr_33569_34162[(2)] = inst_33131);

(statearr_33569_34162[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33175 === (10))){
var inst_33066 = (state_33173[(8)]);
var inst_33079 = cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,inst_33066);
var state_33173__$1 = state_33173;
var statearr_33571_34168 = state_33173__$1;
(statearr_33571_34168[(2)] = inst_33079);

(statearr_33571_34168[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33175 === (18))){
var inst_33098 = (state_33173[(10)]);
var inst_33133 = (state_33173[(2)]);
var inst_33134 = advenjure.hooks.eval_postcondition.call(null,conditions,inst_33098,inst_33133);
var inst_33135 = inst_33134;
var state_33173__$1 = (function (){var statearr_33573 = state_33173;
(statearr_33573[(9)] = inst_33135);

return statearr_33573;
})();
var statearr_33574_34169 = state_33173__$1;
(statearr_33574_34169[(2)] = null);

(statearr_33574_34169[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33175 === (42))){
var inst_33153 = (state_33173[(2)]);
var state_33173__$1 = state_33173;
var statearr_33576_34170 = state_33173__$1;
(statearr_33576_34170[(2)] = inst_33153);

(statearr_33576_34170[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33175 === (37))){
var state_33173__$1 = state_33173;
var statearr_33579_34171 = state_33173__$1;
(statearr_33579_34171[(2)] = true);

(statearr_33579_34171[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33175 === (8))){
var inst_33066 = (state_33173[(8)]);
var inst_33076 = inst_33066.cljs$lang$protocol_mask$partition$;
var inst_33077 = (!inst_33076);
var state_33173__$1 = state_33173;
if(cljs.core.truth_(inst_33077)){
var statearr_33581_34172 = state_33173__$1;
(statearr_33581_34172[(1)] = (10));

} else {
var statearr_33582_34173 = state_33173__$1;
(statearr_33582_34173[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(items1,item1,items2,item2,conditions,value,c__24323__auto____$1,inst_32879,inst_32844,inst_32914,inst_33020,inst_32985,inst_32950,inst_33178,state_val_33203,c__24323__auto__,map__32804,map__32804__$1,kw_required))
;
return ((function (switch__24046__auto__,items1,item1,items2,item2,conditions,value,c__24323__auto____$1,inst_32879,inst_32844,inst_32914,inst_33020,inst_32985,inst_32950,inst_33178,state_val_33203,c__24323__auto__,map__32804,map__32804__$1,kw_required){
return (function() {
var advenjure$verbs$state_machine__24047__auto__ = null;
var advenjure$verbs$state_machine__24047__auto____0 = (function (){
var statearr_33586 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33586[(0)] = advenjure$verbs$state_machine__24047__auto__);

(statearr_33586[(1)] = (1));

return statearr_33586;
});
var advenjure$verbs$state_machine__24047__auto____1 = (function (state_33173){
while(true){
var ret_value__24048__auto__ = (function (){try{while(true){
var result__24049__auto__ = switch__24046__auto__.call(null,state_33173);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24049__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24049__auto__;
}
break;
}
}catch (e33587){if((e33587 instanceof Object)){
var ex__24050__auto__ = e33587;
var statearr_33588_34174 = state_33173;
(statearr_33588_34174[(5)] = ex__24050__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33173);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33587;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34175 = state_33173;
state_33173 = G__34175;
continue;
} else {
return ret_value__24048__auto__;
}
break;
}
});
advenjure$verbs$state_machine__24047__auto__ = function(state_33173){
switch(arguments.length){
case 0:
return advenjure$verbs$state_machine__24047__auto____0.call(this);
case 1:
return advenjure$verbs$state_machine__24047__auto____1.call(this,state_33173);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
advenjure$verbs$state_machine__24047__auto__.cljs$core$IFn$_invoke$arity$0 = advenjure$verbs$state_machine__24047__auto____0;
advenjure$verbs$state_machine__24047__auto__.cljs$core$IFn$_invoke$arity$1 = advenjure$verbs$state_machine__24047__auto____1;
return advenjure$verbs$state_machine__24047__auto__;
})()
;})(switch__24046__auto__,items1,item1,items2,item2,conditions,value,c__24323__auto____$1,inst_32879,inst_32844,inst_32914,inst_33020,inst_32985,inst_32950,inst_33178,state_val_33203,c__24323__auto__,map__32804,map__32804__$1,kw_required))
})();
var state__24325__auto__ = (function (){var statearr_33589 = f__24324__auto__.call(null);
(statearr_33589[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24323__auto____$1);

return statearr_33589;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24325__auto__);
});
;})(items1,item1,items2,item2,conditions,value,c__24323__auto____$1,inst_32879,inst_32844,inst_32914,inst_33020,inst_32985,inst_32950,inst_33178,state_val_33203,c__24323__auto__,map__32804,map__32804__$1,kw_required))
})();
var inst_33180 = cljs.core.async.impl.dispatch.run.call(null,inst_33179);
var state_33202__$1 = (function (){var statearr_33590 = state_33202;
(statearr_33590[(19)] = inst_33180);

return statearr_33590;
})();
var statearr_33591_34176 = state_33202__$1;
(statearr_33591_34176[(2)] = inst_33178);

(statearr_33591_34176[(1)] = (115));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33203 === (32))){
var inst_32881 = (state_33202[(13)]);
var inst_32885 = (inst_32881 == null);
var inst_32886 = cljs.core.not.call(null,inst_32885);
var state_33202__$1 = state_33202;
if(inst_32886){
var statearr_33592_34177 = state_33202__$1;
(statearr_33592_34177[(1)] = (34));

} else {
var statearr_33593_34178 = state_33202__$1;
(statearr_33593_34178[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33203 === (40))){
var inst_32881 = (state_33202[(13)]);
var inst_32896 = cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,inst_32881);
var state_33202__$1 = state_33202;
var statearr_33594_34179 = state_33202__$1;
(statearr_33594_34179[(2)] = inst_32896);

(statearr_33594_34179[(1)] = (42));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33203 === (91))){
var inst_33014 = (state_33202[(2)]);
var inst_32987 = inst_33014;
var state_33202__$1 = (function (){var statearr_33595 = state_33202;
(statearr_33595[(12)] = inst_32987);

return statearr_33595;
})();
var statearr_33596_34180 = state_33202__$1;
(statearr_33596_34180[(2)] = null);

(statearr_33596_34180[(1)] = (77));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33203 === (108))){
var state_33202__$1 = state_33202;
var statearr_33597_34181 = state_33202__$1;
(statearr_33597_34181[(2)] = kw_required);

(statearr_33597_34181[(1)] = (109));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33203 === (56))){
var state_33202__$1 = state_33202;
var statearr_33598_34182 = state_33202__$1;
(statearr_33598_34182[(2)] = false);

(statearr_33598_34182[(1)] = (57));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33203 === (33))){
var inst_32914 = (state_33202[(17)]);
var inst_32914__$1 = (state_33202[(2)]);
var inst_32915 = cljs.core.first.call(null,inst_32914__$1);
var inst_32916 = inst_32915;
var state_33202__$1 = (function (){var statearr_33599 = state_33202;
(statearr_33599[(17)] = inst_32914__$1);

(statearr_33599[(8)] = inst_32916);

return statearr_33599;
})();
var statearr_33600_34183 = state_33202__$1;
(statearr_33600_34183[(2)] = null);

(statearr_33600_34183[(1)] = (47));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33203 === (13))){
var inst_32811 = (state_33202[(10)]);
var state_33202__$1 = state_33202;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33202__$1,(16),inst_32811);
} else {
if((state_val_33203 === (22))){
var state_33202__$1 = state_33202;
var statearr_33601_34184 = state_33202__$1;
(statearr_33601_34184[(2)] = true);

(statearr_33601_34184[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33203 === (90))){
var inst_33018 = (state_33202[(2)]);
var state_33202__$1 = state_33202;
var statearr_33602_34185 = state_33202__$1;
(statearr_33602_34185[(2)] = inst_33018);

(statearr_33602_34185[(1)] = (78));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33203 === (109))){
var inst_33059 = (state_33202[(2)]);
var state_33202__$1 = state_33202;
if(cljs.core.truth_(inst_33059)){
var statearr_33603_34186 = state_33202__$1;
(statearr_33603_34186[(1)] = (110));

} else {
var statearr_33604_34187 = state_33202__$1;
(statearr_33604_34187[(1)] = (111));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33203 === (36))){
var inst_32905 = (state_33202[(2)]);
var state_33202__$1 = state_33202;
if(cljs.core.truth_(inst_32905)){
var statearr_33605_34196 = state_33202__$1;
(statearr_33605_34196[(1)] = (43));

} else {
var statearr_33606_34197 = state_33202__$1;
(statearr_33606_34197[(1)] = (44));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33203 === (41))){
var state_33202__$1 = state_33202;
var statearr_33607_34205 = state_33202__$1;
(statearr_33607_34205[(2)] = false);

(statearr_33607_34205[(1)] = (42));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33203 === (89))){
var inst_32987 = (state_33202[(12)]);
var state_33202__$1 = state_33202;
var statearr_33608_34211 = state_33202__$1;
(statearr_33608_34211[(2)] = inst_32987);

(statearr_33608_34211[(1)] = (90));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33203 === (100))){
var inst_33192 = (state_33202[(2)]);
var state_33202__$1 = state_33202;
var statearr_33609_34219 = state_33202__$1;
(statearr_33609_34219[(2)] = inst_33192);

(statearr_33609_34219[(1)] = (97));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33203 === (43))){
var inst_32881 = (state_33202[(13)]);
var state_33202__$1 = state_33202;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33202__$1,(46),inst_32881);
} else {
if((state_val_33203 === (61))){
var inst_32944 = (state_33202[(2)]);
var inst_32916 = inst_32944;
var state_33202__$1 = (function (){var statearr_33610 = state_33202;
(statearr_33610[(8)] = inst_32916);

return statearr_33610;
})();
var statearr_33611_34241 = state_33202__$1;
(statearr_33611_34241[(2)] = null);

(statearr_33611_34241[(1)] = (47));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33203 === (29))){
var inst_32846 = (state_33202[(9)]);
var state_33202__$1 = state_33202;
var statearr_33612_34249 = state_33202__$1;
(statearr_33612_34249[(2)] = inst_32846);

(statearr_33612_34249[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33203 === (44))){
var inst_32881 = (state_33202[(13)]);
var state_33202__$1 = state_33202;
var statearr_33613_34253 = state_33202__$1;
(statearr_33613_34253[(2)] = inst_32881);

(statearr_33613_34253[(1)] = (45));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33203 === (93))){
var inst_32844 = (state_33202[(14)]);
var inst_33031 = cljs.core.count.call(null,inst_32844);
var inst_33032 = (inst_33031 > (1));
var state_33202__$1 = state_33202;
if(cljs.core.truth_(inst_33032)){
var statearr_33614_34260 = state_33202__$1;
(statearr_33614_34260[(1)] = (95));

} else {
var statearr_33615_34264 = state_33202__$1;
(statearr_33615_34264[(1)] = (96));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33203 === (6))){
var inst_32835 = (state_33202[(2)]);
var state_33202__$1 = state_33202;
if(cljs.core.truth_(inst_32835)){
var statearr_33616_34268 = state_33202__$1;
(statearr_33616_34268[(1)] = (13));

} else {
var statearr_33617_34276 = state_33202__$1;
(statearr_33617_34276[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33203 === (111))){
var state_33202__$1 = state_33202;
var statearr_33618_34280 = state_33202__$1;
(statearr_33618_34280[(1)] = (113));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33203 === (28))){
var inst_32846 = (state_33202[(9)]);
var state_33202__$1 = state_33202;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33202__$1,(31),inst_32846);
} else {
if((state_val_33203 === (64))){
var inst_32952 = (state_33202[(7)]);
var inst_32959 = inst_32952.cljs$core$async$impl$protocols$ReadPort$;
var inst_32960 = (false) || (inst_32959);
var state_33202__$1 = state_33202;
if(cljs.core.truth_(inst_32960)){
var statearr_33620_34296 = state_33202__$1;
(statearr_33620_34296[(1)] = (67));

} else {
var statearr_33621_34297 = state_33202__$1;
(statearr_33621_34297[(1)] = (68));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33203 === (103))){
var inst_33190 = (state_33202[(2)]);
var state_33202__$1 = state_33202;
var statearr_33622_34298 = state_33202__$1;
(statearr_33622_34298[(2)] = inst_33190);

(statearr_33622_34298[(1)] = (100));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33203 === (51))){
var inst_32941 = (state_33202[(2)]);
var state_33202__$1 = state_33202;
if(cljs.core.truth_(inst_32941)){
var statearr_33624_34299 = state_33202__$1;
(statearr_33624_34299[(1)] = (58));

} else {
var statearr_33626_34300 = state_33202__$1;
(statearr_33626_34300[(1)] = (59));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33203 === (25))){
var inst_32846 = (state_33202[(9)]);
var inst_32861 = cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,inst_32846);
var state_33202__$1 = state_33202;
var statearr_33628_34301 = state_33202__$1;
(statearr_33628_34301[(2)] = inst_32861);

(statearr_33628_34301[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33203 === (34))){
var inst_32881 = (state_33202[(13)]);
var inst_32888 = inst_32881.cljs$core$async$impl$protocols$ReadPort$;
var inst_32889 = (false) || (inst_32888);
var state_33202__$1 = state_33202;
if(cljs.core.truth_(inst_32889)){
var statearr_33629_34306 = state_33202__$1;
(statearr_33629_34306[(1)] = (37));

} else {
var statearr_33631_34307 = state_33202__$1;
(statearr_33631_34307[(1)] = (38));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33203 === (17))){
var inst_32846 = (state_33202[(9)]);
var inst_32849 = (inst_32846 == null);
var inst_32850 = cljs.core.not.call(null,inst_32849);
var state_33202__$1 = state_33202;
if(inst_32850){
var statearr_33632_34313 = state_33202__$1;
(statearr_33632_34313[(1)] = (19));

} else {
var statearr_33633_34314 = state_33202__$1;
(statearr_33633_34314[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33203 === (3))){
var inst_32844 = (state_33202[(14)]);
var inst_32844__$1 = (state_33202[(2)]);
var inst_32845 = cljs.core.first.call(null,inst_32844__$1);
var inst_32846 = inst_32845;
var state_33202__$1 = (function (){var statearr_33635 = state_33202;
(statearr_33635[(9)] = inst_32846);

(statearr_33635[(14)] = inst_32844__$1);

return statearr_33635;
})();
var statearr_33636_34323 = state_33202__$1;
(statearr_33636_34323[(2)] = null);

(statearr_33636_34323[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33203 === (12))){
var inst_32829 = (state_33202[(2)]);
var state_33202__$1 = state_33202;
var statearr_33637_34329 = state_33202__$1;
(statearr_33637_34329[(2)] = inst_32829);

(statearr_33637_34329[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33203 === (2))){
var inst_32811 = (state_33202[(10)]);
var inst_32815 = (inst_32811 == null);
var inst_32816 = cljs.core.not.call(null,inst_32815);
var state_33202__$1 = state_33202;
if(inst_32816){
var statearr_33638_34341 = state_33202__$1;
(statearr_33638_34341[(1)] = (4));

} else {
var statearr_33639_34344 = state_33202__$1;
(statearr_33639_34344[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33203 === (66))){
var inst_32976 = (state_33202[(2)]);
var state_33202__$1 = state_33202;
if(cljs.core.truth_(inst_32976)){
var statearr_33640_34353 = state_33202__$1;
(statearr_33640_34353[(1)] = (73));

} else {
var statearr_33641_34354 = state_33202__$1;
(statearr_33641_34354[(1)] = (74));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33203 === (107))){
var inst_33020 = (state_33202[(11)]);
var inst_33056 = (inst_33020 == null);
var state_33202__$1 = state_33202;
var statearr_33642_34360 = state_33202__$1;
(statearr_33642_34360[(2)] = inst_33056);

(statearr_33642_34360[(1)] = (109));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33203 === (23))){
var inst_32846 = (state_33202[(9)]);
var inst_32858 = inst_32846.cljs$lang$protocol_mask$partition$;
var inst_32859 = (!inst_32858);
var state_33202__$1 = state_33202;
if(cljs.core.truth_(inst_32859)){
var statearr_33643_34372 = state_33202__$1;
(statearr_33643_34372[(1)] = (25));

} else {
var statearr_33644_34378 = state_33202__$1;
(statearr_33644_34378[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33203 === (47))){
var inst_32916 = (state_33202[(8)]);
var inst_32920 = (inst_32916 == null);
var inst_32921 = cljs.core.not.call(null,inst_32920);
var state_33202__$1 = state_33202;
if(inst_32921){
var statearr_33645_34389 = state_33202__$1;
(statearr_33645_34389[(1)] = (49));

} else {
var statearr_33646_34397 = state_33202__$1;
(statearr_33646_34397[(1)] = (50));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33203 === (35))){
var inst_32881 = (state_33202[(13)]);
var inst_32903 = cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,inst_32881);
var state_33202__$1 = state_33202;
var statearr_33647_34415 = state_33202__$1;
(statearr_33647_34415[(2)] = inst_32903);

(statearr_33647_34415[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33203 === (82))){
var state_33202__$1 = state_33202;
var statearr_33649_34417 = state_33202__$1;
(statearr_33649_34417[(2)] = true);

(statearr_33649_34417[(1)] = (84));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33203 === (76))){
var inst_32979 = (state_33202[(2)]);
var inst_32952 = inst_32979;
var state_33202__$1 = (function (){var statearr_33651 = state_33202;
(statearr_33651[(7)] = inst_32952);

return statearr_33651;
})();
var statearr_33652_34430 = state_33202__$1;
(statearr_33652_34430[(2)] = null);

(statearr_33652_34430[(1)] = (62));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33203 === (97))){
var inst_33194 = (state_33202[(2)]);
var state_33202__$1 = state_33202;
var statearr_33654_34434 = state_33202__$1;
(statearr_33654_34434[(2)] = inst_33194);

(statearr_33654_34434[(1)] = (94));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33203 === (19))){
var inst_32846 = (state_33202[(9)]);
var inst_32853 = inst_32846.cljs$core$async$impl$protocols$ReadPort$;
var inst_32854 = (false) || (inst_32853);
var state_33202__$1 = state_33202;
if(cljs.core.truth_(inst_32854)){
var statearr_33655_34444 = state_33202__$1;
(statearr_33655_34444[(1)] = (22));

} else {
var statearr_33656_34447 = state_33202__$1;
(statearr_33656_34447[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33203 === (57))){
var inst_32934 = (state_33202[(2)]);
var state_33202__$1 = state_33202;
var statearr_33658_34458 = state_33202__$1;
(statearr_33658_34458[(2)] = inst_32934);

(statearr_33658_34458[(1)] = (54));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33203 === (68))){
var inst_32952 = (state_33202[(7)]);
var inst_32964 = inst_32952.cljs$lang$protocol_mask$partition$;
var inst_32965 = (!inst_32964);
var state_33202__$1 = state_33202;
if(cljs.core.truth_(inst_32965)){
var statearr_33659_34469 = state_33202__$1;
(statearr_33659_34469[(1)] = (70));

} else {
var statearr_33660_34470 = state_33202__$1;
(statearr_33660_34470[(1)] = (71));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33203 === (11))){
var state_33202__$1 = state_33202;
var statearr_33661_34471 = state_33202__$1;
(statearr_33661_34471[(2)] = false);

(statearr_33661_34471[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33203 === (115))){
var inst_33183 = (state_33202[(2)]);
var state_33202__$1 = state_33202;
var statearr_33663_34472 = state_33202__$1;
(statearr_33663_34472[(2)] = inst_33183);

(statearr_33663_34472[(1)] = (112));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33203 === (9))){
var inst_32831 = (state_33202[(2)]);
var state_33202__$1 = state_33202;
var statearr_33664_34478 = state_33202__$1;
(statearr_33664_34478[(2)] = inst_32831);

(statearr_33664_34478[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33203 === (5))){
var inst_32811 = (state_33202[(10)]);
var inst_32833 = cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,inst_32811);
var state_33202__$1 = state_33202;
var statearr_33665_34483 = state_33202__$1;
(statearr_33665_34483[(2)] = inst_32833);

(statearr_33665_34483[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33203 === (112))){
var inst_33186 = (state_33202[(2)]);
var state_33202__$1 = state_33202;
var statearr_33666_34489 = state_33202__$1;
(statearr_33666_34489[(2)] = inst_33186);

(statearr_33666_34489[(1)] = (106));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33203 === (83))){
var inst_32987 = (state_33202[(12)]);
var inst_32998 = inst_32987.cljs$lang$protocol_mask$partition$;
var inst_32999 = (!inst_32998);
var state_33202__$1 = state_33202;
if(cljs.core.truth_(inst_32999)){
var statearr_33667_34493 = state_33202__$1;
(statearr_33667_34493[(1)] = (85));

} else {
var statearr_33668_34499 = state_33202__$1;
(statearr_33668_34499[(1)] = (86));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33203 === (14))){
var inst_32811 = (state_33202[(10)]);
var state_33202__$1 = state_33202;
var statearr_33669_34508 = state_33202__$1;
(statearr_33669_34508[(2)] = inst_32811);

(statearr_33669_34508[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33203 === (45))){
var inst_32912 = (state_33202[(2)]);
var state_33202__$1 = state_33202;
var statearr_33670_34514 = state_33202__$1;
(statearr_33670_34514[(2)] = inst_32912);

(statearr_33670_34514[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33203 === (53))){
var inst_32916 = (state_33202[(8)]);
var inst_32928 = inst_32916.cljs$lang$protocol_mask$partition$;
var inst_32929 = (!inst_32928);
var state_33202__$1 = state_33202;
if(cljs.core.truth_(inst_32929)){
var statearr_33671_34523 = state_33202__$1;
(statearr_33671_34523[(1)] = (55));

} else {
var statearr_33672_34528 = state_33202__$1;
(statearr_33672_34528[(1)] = (56));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33203 === (78))){
var inst_32844 = (state_33202[(14)]);
var inst_32914 = (state_33202[(17)]);
var inst_33020 = (state_33202[(2)]);
var inst_33023 = cljs.core.empty_QMARK_.call(null,inst_32844);
var inst_33024 = cljs.core.empty_QMARK_.call(null,inst_32914);
var inst_33025 = (inst_33023) || (inst_33024);
var state_33202__$1 = (function (){var statearr_33673 = state_33202;
(statearr_33673[(11)] = inst_33020);

return statearr_33673;
})();
if(cljs.core.truth_(inst_33025)){
var statearr_33674_34542 = state_33202__$1;
(statearr_33674_34542[(1)] = (92));

} else {
var statearr_33675_34543 = state_33202__$1;
(statearr_33675_34543[(1)] = (93));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33203 === (26))){
var state_33202__$1 = state_33202;
var statearr_33676_34544 = state_33202__$1;
(statearr_33676_34544[(2)] = false);

(statearr_33676_34544[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33203 === (16))){
var inst_32838 = (state_33202[(2)]);
var inst_32811 = inst_32838;
var state_33202__$1 = (function (){var statearr_33677 = state_33202;
(statearr_33677[(10)] = inst_32811);

return statearr_33677;
})();
var statearr_33678_34545 = state_33202__$1;
(statearr_33678_34545[(2)] = null);

(statearr_33678_34545[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33203 === (81))){
var inst_33011 = (state_33202[(2)]);
var state_33202__$1 = state_33202;
if(cljs.core.truth_(inst_33011)){
var statearr_33680_34549 = state_33202__$1;
(statearr_33680_34549[(1)] = (88));

} else {
var statearr_33682_34552 = state_33202__$1;
(statearr_33682_34552[(1)] = (89));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33203 === (79))){
var inst_32987 = (state_33202[(12)]);
var inst_32994 = inst_32987.cljs$core$async$impl$protocols$ReadPort$;
var inst_32995 = (false) || (inst_32994);
var state_33202__$1 = state_33202;
if(cljs.core.truth_(inst_32995)){
var statearr_33683_34555 = state_33202__$1;
(statearr_33683_34555[(1)] = (82));

} else {
var statearr_33684_34559 = state_33202__$1;
(statearr_33684_34559[(1)] = (83));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33203 === (38))){
var inst_32881 = (state_33202[(13)]);
var inst_32892 = inst_32881.cljs$lang$protocol_mask$partition$;
var inst_32893 = (!inst_32892);
var state_33202__$1 = state_33202;
if(cljs.core.truth_(inst_32893)){
var statearr_33686_34560 = state_33202__$1;
(statearr_33686_34560[(1)] = (40));

} else {
var statearr_33687_34561 = state_33202__$1;
(statearr_33687_34561[(1)] = (41));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33203 === (98))){
var inst_32914 = (state_33202[(17)]);
var inst_33040 = advenjure.verbs.ask_ambiguous.call(null,item2_name,inst_32914);
var inst_33041 = advenjure.utils.say.call(null,inst_33040);
var state_33202__$1 = state_33202;
var statearr_33688_34566 = state_33202__$1;
(statearr_33688_34566[(2)] = inst_33041);

(statearr_33688_34566[(1)] = (100));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33203 === (87))){
var inst_33005 = (state_33202[(2)]);
var state_33202__$1 = state_33202;
var statearr_33689_34568 = state_33202__$1;
(statearr_33689_34568[(2)] = inst_33005);

(statearr_33689_34568[(1)] = (84));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33203 === (30))){
var inst_32877 = (state_33202[(2)]);
var state_33202__$1 = state_33202;
var statearr_33690_34569 = state_33202__$1;
(statearr_33690_34569[(2)] = inst_32877);

(statearr_33690_34569[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33203 === (73))){
var inst_32952 = (state_33202[(7)]);
var state_33202__$1 = state_33202;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33202__$1,(76),inst_32952);
} else {
if((state_val_33203 === (96))){
var inst_32914 = (state_33202[(17)]);
var inst_33037 = cljs.core.count.call(null,inst_32914);
var inst_33038 = (inst_33037 > (1));
var state_33202__$1 = state_33202;
if(cljs.core.truth_(inst_33038)){
var statearr_33691_34572 = state_33202__$1;
(statearr_33691_34572[(1)] = (98));

} else {
var statearr_33692_34576 = state_33202__$1;
(statearr_33692_34576[(1)] = (99));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33203 === (10))){
var inst_32811 = (state_33202[(10)]);
var inst_32826 = cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,inst_32811);
var state_33202__$1 = state_33202;
var statearr_33693_34581 = state_33202__$1;
(statearr_33693_34581[(2)] = inst_32826);

(statearr_33693_34581[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33203 === (18))){
var inst_32879 = (state_33202[(2)]);
var inst_32880 = advenjure.utils.find_item.call(null,game_state,item2_name);
var inst_32881 = inst_32880;
var state_33202__$1 = (function (){var statearr_33694 = state_33202;
(statearr_33694[(15)] = inst_32879);

(statearr_33694[(13)] = inst_32881);

return statearr_33694;
})();
var statearr_33695_34595 = state_33202__$1;
(statearr_33695_34595[(2)] = null);

(statearr_33695_34595[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33203 === (105))){
var state_33202__$1 = state_33202;
if(cljs.core.truth_(kw_required)){
var statearr_33696_34596 = state_33202__$1;
(statearr_33696_34596[(1)] = (107));

} else {
var statearr_33697_34597 = state_33202__$1;
(statearr_33697_34597[(1)] = (108));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33203 === (52))){
var state_33202__$1 = state_33202;
var statearr_33698_34600 = state_33202__$1;
(statearr_33698_34600[(2)] = true);

(statearr_33698_34600[(1)] = (54));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33203 === (114))){
var state_33202__$1 = state_33202;
var statearr_33699_34604 = state_33202__$1;
(statearr_33699_34604[(2)] = null);

(statearr_33699_34604[(1)] = (115));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33203 === (67))){
var state_33202__$1 = state_33202;
var statearr_33700_34608 = state_33202__$1;
(statearr_33700_34608[(2)] = true);

(statearr_33700_34608[(1)] = (69));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33203 === (71))){
var state_33202__$1 = state_33202;
var statearr_33701_34609 = state_33202__$1;
(statearr_33701_34609[(2)] = false);

(statearr_33701_34609[(1)] = (72));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33203 === (42))){
var inst_32899 = (state_33202[(2)]);
var state_33202__$1 = state_33202;
var statearr_33703_34610 = state_33202__$1;
(statearr_33703_34610[(2)] = inst_32899);

(statearr_33703_34610[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33203 === (80))){
var inst_32987 = (state_33202[(12)]);
var inst_33009 = cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,inst_32987);
var state_33202__$1 = state_33202;
var statearr_33705_34611 = state_33202__$1;
(statearr_33705_34611[(2)] = inst_33009);

(statearr_33705_34611[(1)] = (81));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33203 === (37))){
var state_33202__$1 = state_33202;
var statearr_33706_34614 = state_33202__$1;
(statearr_33706_34614[(2)] = true);

(statearr_33706_34614[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33203 === (63))){
var inst_32985 = (state_33202[(18)]);
var inst_32950 = (state_33202[(16)]);
var inst_32985__$1 = (state_33202[(2)]);
var inst_32986 = advenjure.hooks.eval_precondition.call(null,inst_32985__$1,game_state,inst_32950);
var inst_32987 = inst_32986;
var state_33202__$1 = (function (){var statearr_33707 = state_33202;
(statearr_33707[(12)] = inst_32987);

(statearr_33707[(18)] = inst_32985__$1);

return statearr_33707;
})();
var statearr_33708_34625 = state_33202__$1;
(statearr_33708_34625[(2)] = null);

(statearr_33708_34625[(1)] = (77));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33203 === (94))){
var inst_33196 = (state_33202[(2)]);
var state_33202__$1 = state_33202;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33202__$1,inst_33196);
} else {
if((state_val_33203 === (8))){
var inst_32811 = (state_33202[(10)]);
var inst_32823 = inst_32811.cljs$lang$protocol_mask$partition$;
var inst_32824 = (!inst_32823);
var state_33202__$1 = state_33202;
if(cljs.core.truth_(inst_32824)){
var statearr_33709_34640 = state_33202__$1;
(statearr_33709_34640[(1)] = (10));

} else {
var statearr_33710_34649 = state_33202__$1;
(statearr_33710_34649[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33203 === (49))){
var inst_32916 = (state_33202[(8)]);
var inst_32924 = inst_32916.cljs$core$async$impl$protocols$ReadPort$;
var inst_32925 = (false) || (inst_32924);
var state_33202__$1 = state_33202;
if(cljs.core.truth_(inst_32925)){
var statearr_33711_34654 = state_33202__$1;
(statearr_33711_34654[(1)] = (52));

} else {
var statearr_33712_34661 = state_33202__$1;
(statearr_33712_34661[(1)] = (53));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33203 === (84))){
var inst_33007 = (state_33202[(2)]);
var state_33202__$1 = state_33202;
var statearr_33713_34668 = state_33202__$1;
(statearr_33713_34668[(2)] = inst_33007);

(statearr_33713_34668[(1)] = (81));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__24323__auto__,map__32804,map__32804__$1,kw_required))
;
return ((function (switch__24046__auto__,c__24323__auto__,map__32804,map__32804__$1,kw_required){
return (function() {
var advenjure$verbs$state_machine__24047__auto__ = null;
var advenjure$verbs$state_machine__24047__auto____0 = (function (){
var statearr_33720 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33720[(0)] = advenjure$verbs$state_machine__24047__auto__);

(statearr_33720[(1)] = (1));

return statearr_33720;
});
var advenjure$verbs$state_machine__24047__auto____1 = (function (state_33202){
while(true){
var ret_value__24048__auto__ = (function (){try{while(true){
var result__24049__auto__ = switch__24046__auto__.call(null,state_33202);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24049__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24049__auto__;
}
break;
}
}catch (e33721){if((e33721 instanceof Object)){
var ex__24050__auto__ = e33721;
var statearr_33722_34711 = state_33202;
(statearr_33722_34711[(5)] = ex__24050__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33202);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33721;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34722 = state_33202;
state_33202 = G__34722;
continue;
} else {
return ret_value__24048__auto__;
}
break;
}
});
advenjure$verbs$state_machine__24047__auto__ = function(state_33202){
switch(arguments.length){
case 0:
return advenjure$verbs$state_machine__24047__auto____0.call(this);
case 1:
return advenjure$verbs$state_machine__24047__auto____1.call(this,state_33202);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
advenjure$verbs$state_machine__24047__auto__.cljs$core$IFn$_invoke$arity$0 = advenjure$verbs$state_machine__24047__auto____0;
advenjure$verbs$state_machine__24047__auto__.cljs$core$IFn$_invoke$arity$1 = advenjure$verbs$state_machine__24047__auto____1;
return advenjure$verbs$state_machine__24047__auto__;
})()
;})(switch__24046__auto__,c__24323__auto__,map__32804,map__32804__$1,kw_required))
})();
var state__24325__auto__ = (function (){var statearr_33723 = f__24324__auto__.call(null);
(statearr_33723[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24323__auto__);

return statearr_33723;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24325__auto__);
});})(c__24323__auto__,map__32804,map__32804__$1,kw_required))
);

return c__24323__auto__;
});
G__33729 = function(game_state,item1_name,item2_name){
switch(arguments.length){
case 1:
return G__33729__1.call(this,game_state);
case 2:
return G__33729__2.call(this,game_state,item1_name);
case 3:
return G__33729__3.call(this,game_state,item1_name,item2_name);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__33729.cljs$core$IFn$_invoke$arity$1 = G__33729__1;
G__33729.cljs$core$IFn$_invoke$arity$2 = G__33729__2;
G__33729.cljs$core$IFn$_invoke$arity$3 = G__33729__3;
return G__33729;
})()
;})(map__32804,map__32804__$1,kw_required))
});

advenjure.verbs.make_compound_item_handler.cljs$lang$applyTo = (function (seq32780){
var G__32782 = cljs.core.first.call(null,seq32780);
var seq32780__$1 = cljs.core.next.call(null,seq32780);
var G__32786 = cljs.core.first.call(null,seq32780__$1);
var seq32780__$2 = cljs.core.next.call(null,seq32780__$1);
var G__32787 = cljs.core.first.call(null,seq32780__$2);
var seq32780__$3 = cljs.core.next.call(null,seq32780__$2);
return advenjure.verbs.make_compound_item_handler.cljs$core$IFn$_invoke$arity$variadic(G__32782,G__32786,G__32787,seq32780__$3);
});

advenjure.verbs.make_compound_item_handler.cljs$lang$maxFixedArity = (3);

/**
 * Change the location if direction is valid.
 */
advenjure.verbs.go = (function advenjure$verbs$go(var_args){
var args34743 = [];
var len__21530__auto___34981 = arguments.length;
var i__21531__auto___34982 = (0);
while(true){
if((i__21531__auto___34982 < len__21530__auto___34981)){
args34743.push((arguments[i__21531__auto___34982]));

var G__34986 = (i__21531__auto___34982 + (1));
i__21531__auto___34982 = G__34986;
continue;
} else {
}
break;
}

var G__34746 = args34743.length;
switch (G__34746) {
case 1:
return advenjure.verbs.go.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return advenjure.verbs.go.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34743.length)].join('')));

}
});

advenjure.verbs.go.cljs$core$IFn$_invoke$arity$1 = (function (game_state){
return advenjure.utils.say.call(null,advenjure.gettext.core._.call(null,"Go where?"));
});

advenjure.verbs.go.cljs$core$IFn$_invoke$arity$2 = (function (game_state,direction){
var current = advenjure.utils.current_room.call(null,game_state);
var temp__4655__auto__ = cljs.core.get.call(null,advenjure.utils.direction_mappings,direction);
if(cljs.core.truth_(temp__4655__auto__)){
var dir = temp__4655__auto__;
var c__24323__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24323__auto__,dir,temp__4655__auto__,current){
return (function (){
var f__24324__auto__ = (function (){var switch__24046__auto__ = ((function (c__24323__auto__,dir,temp__4655__auto__,current){
return (function (state_34849){
var state_val_34850 = (state_34849[(1)]);
if((state_val_34850 === (7))){
var state_34849__$1 = state_34849;
var statearr_34851_35003 = state_34849__$1;
(statearr_34851_35003[(2)] = true);

(statearr_34851_35003[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34850 === (20))){
var inst_34789 = (state_34849[(7)]);
var inst_34789__$1 = new cljs.core.Keyword(null,"default-go","default-go",-2063089013).cljs$core$IFn$_invoke$arity$1(current);
var state_34849__$1 = (function (){var statearr_34852 = state_34849;
(statearr_34852[(7)] = inst_34789__$1);

return statearr_34852;
})();
if(cljs.core.truth_(inst_34789__$1)){
var statearr_34853_35005 = state_34849__$1;
(statearr_34853_35005[(1)] = (23));

} else {
var statearr_34854_35006 = state_34849__$1;
(statearr_34854_35006[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34850 === (27))){
var state_34849__$1 = state_34849;
var statearr_34855_35009 = state_34849__$1;
(statearr_34855_35009[(2)] = null);

(statearr_34855_35009[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34850 === (1))){
var inst_34748 = advenjure.hooks.eval_direction.call(null,game_state,dir);
var inst_34749 = inst_34748;
var state_34849__$1 = (function (){var statearr_34856 = state_34849;
(statearr_34856[(8)] = inst_34749);

return statearr_34856;
})();
var statearr_34857_35014 = state_34849__$1;
(statearr_34857_35014[(2)] = null);

(statearr_34857_35014[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34850 === (24))){
var inst_34793 = advenjure.gettext.core._.call(null,"Couldn't go in that direction.");
var state_34849__$1 = state_34849;
var statearr_34858_35025 = state_34849__$1;
(statearr_34858_35025[(2)] = inst_34793);

(statearr_34858_35025[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34850 === (4))){
var inst_34749 = (state_34849[(8)]);
var inst_34757 = inst_34749.cljs$core$async$impl$protocols$ReadPort$;
var inst_34758 = (false) || (inst_34757);
var state_34849__$1 = state_34849;
if(cljs.core.truth_(inst_34758)){
var statearr_34859_35037 = state_34849__$1;
(statearr_34859_35037[(1)] = (7));

} else {
var statearr_34860_35038 = state_34849__$1;
(statearr_34860_35038[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34850 === (15))){
var inst_34780 = (state_34849[(2)]);
var state_34849__$1 = state_34849;
var statearr_34861_35043 = state_34849__$1;
(statearr_34861_35043[(2)] = inst_34780);

(statearr_34861_35043[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34850 === (21))){
var state_34849__$1 = state_34849;
var statearr_34863_35044 = state_34849__$1;
(statearr_34863_35044[(1)] = (26));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34850 === (13))){
var inst_34749 = (state_34849[(8)]);
var state_34849__$1 = state_34849;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34849__$1,(16),inst_34749);
} else {
if((state_val_34850 === (22))){
var inst_34845 = (state_34849[(2)]);
var state_34849__$1 = state_34849;
var statearr_34865_35046 = state_34849__$1;
(statearr_34865_35046[(2)] = inst_34845);

(statearr_34865_35046[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34850 === (6))){
var inst_34773 = (state_34849[(2)]);
var state_34849__$1 = state_34849;
if(cljs.core.truth_(inst_34773)){
var statearr_34866_35047 = state_34849__$1;
(statearr_34866_35047[(1)] = (13));

} else {
var statearr_34867_35048 = state_34849__$1;
(statearr_34867_35048[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34850 === (28))){
var inst_34843 = (state_34849[(2)]);
var state_34849__$1 = state_34849;
var statearr_34869_35049 = state_34849__$1;
(statearr_34869_35049[(2)] = inst_34843);

(statearr_34869_35049[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34850 === (25))){
var inst_34795 = (state_34849[(2)]);
var inst_34796 = advenjure.utils.say.call(null,inst_34795);
var state_34849__$1 = state_34849;
var statearr_34870_35050 = state_34849__$1;
(statearr_34870_35050[(2)] = inst_34796);

(statearr_34870_35050[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34850 === (17))){
var inst_34782 = (state_34849[(9)]);
var inst_34785 = advenjure.utils.say.call(null,inst_34782);
var state_34849__$1 = state_34849;
var statearr_34872_35051 = state_34849__$1;
(statearr_34872_35051[(2)] = inst_34785);

(statearr_34872_35051[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34850 === (3))){
var inst_34782 = (state_34849[(9)]);
var inst_34782__$1 = (state_34849[(2)]);
var inst_34783 = typeof inst_34782__$1 === 'string';
var state_34849__$1 = (function (){var statearr_34874 = state_34849;
(statearr_34874[(9)] = inst_34782__$1);

return statearr_34874;
})();
if(cljs.core.truth_(inst_34783)){
var statearr_34875_35052 = state_34849__$1;
(statearr_34875_35052[(1)] = (17));

} else {
var statearr_34876_35053 = state_34849__$1;
(statearr_34876_35053[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34850 === (12))){
var inst_34767 = (state_34849[(2)]);
var state_34849__$1 = state_34849;
var statearr_34877_35054 = state_34849__$1;
(statearr_34877_35054[(2)] = inst_34767);

(statearr_34877_35054[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34850 === (2))){
var inst_34749 = (state_34849[(8)]);
var inst_34753 = (inst_34749 == null);
var inst_34754 = cljs.core.not.call(null,inst_34753);
var state_34849__$1 = state_34849;
if(inst_34754){
var statearr_34878_35057 = state_34849__$1;
(statearr_34878_35057[(1)] = (4));

} else {
var statearr_34879_35059 = state_34849__$1;
(statearr_34879_35059[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34850 === (23))){
var inst_34789 = (state_34849[(7)]);
var state_34849__$1 = state_34849;
var statearr_34881_35060 = state_34849__$1;
(statearr_34881_35060[(2)] = inst_34789);

(statearr_34881_35060[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34850 === (19))){
var inst_34847 = (state_34849[(2)]);
var state_34849__$1 = state_34849;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34849__$1,inst_34847);
} else {
if((state_val_34850 === (11))){
var state_34849__$1 = state_34849;
var statearr_34887_35065 = state_34849__$1;
(statearr_34887_35065[(2)] = false);

(statearr_34887_35065[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34850 === (9))){
var inst_34769 = (state_34849[(2)]);
var state_34849__$1 = state_34849;
var statearr_34891_35066 = state_34849__$1;
(statearr_34891_35066[(2)] = inst_34769);

(statearr_34891_35066[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34850 === (5))){
var inst_34749 = (state_34849[(8)]);
var inst_34771 = cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,inst_34749);
var state_34849__$1 = state_34849;
var statearr_34896_35070 = state_34849__$1;
(statearr_34896_35070[(2)] = inst_34771);

(statearr_34896_35070[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34850 === (14))){
var inst_34749 = (state_34849[(8)]);
var state_34849__$1 = state_34849;
var statearr_34898_35071 = state_34849__$1;
(statearr_34898_35071[(2)] = inst_34749);

(statearr_34898_35071[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34850 === (26))){
var inst_34782 = (state_34849[(9)]);
var inst_34838 = cljs.core.async.chan.call(null,(1));
var inst_34839 = (function (){var dir_value = inst_34782;
var c__24323__auto____$1 = inst_34838;
return ((function (dir_value,c__24323__auto____$1,inst_34782,inst_34838,state_val_34850,c__24323__auto__,dir,temp__4655__auto__,current){
return (function (){
var f__24324__auto__ = (function (){var switch__24046__auto__ = ((function (dir_value,c__24323__auto____$1,inst_34782,inst_34838,state_val_34850,c__24323__auto__,dir,temp__4655__auto__,current){
return (function (state_34836){
var state_val_34837 = (state_34836[(1)]);
if((state_val_34837 === (7))){
var state_34836__$1 = state_34836;
var statearr_34902_35076 = state_34836__$1;
(statearr_34902_35076[(2)] = true);

(statearr_34902_35076[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34837 === (1))){
var inst_34799 = advenjure.change_rooms.change_rooms.call(null,game_state,dir_value);
var inst_34800 = inst_34799;
var state_34836__$1 = (function (){var statearr_34906 = state_34836;
(statearr_34906[(7)] = inst_34800);

return statearr_34906;
})();
var statearr_34907_35077 = state_34836__$1;
(statearr_34907_35077[(2)] = null);

(statearr_34907_35077[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34837 === (4))){
var inst_34800 = (state_34836[(7)]);
var inst_34806 = inst_34800.cljs$core$async$impl$protocols$ReadPort$;
var inst_34807 = (false) || (inst_34806);
var state_34836__$1 = state_34836;
if(cljs.core.truth_(inst_34807)){
var statearr_34912_35080 = state_34836__$1;
(statearr_34912_35080[(1)] = (7));

} else {
var statearr_34913_35081 = state_34836__$1;
(statearr_34913_35081[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34837 === (15))){
var inst_34830 = (state_34836[(2)]);
var state_34836__$1 = state_34836;
var statearr_34917_35084 = state_34836__$1;
(statearr_34917_35084[(2)] = inst_34830);

(statearr_34917_35084[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34837 === (13))){
var inst_34800 = (state_34836[(7)]);
var state_34836__$1 = state_34836;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34836__$1,(16),inst_34800);
} else {
if((state_val_34837 === (6))){
var inst_34823 = (state_34836[(2)]);
var state_34836__$1 = state_34836;
if(cljs.core.truth_(inst_34823)){
var statearr_34921_35085 = state_34836__$1;
(statearr_34921_35085[(1)] = (13));

} else {
var statearr_34922_35086 = state_34836__$1;
(statearr_34922_35086[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34837 === (3))){
var inst_34832 = (state_34836[(2)]);
var inst_34833 = dir.call(null,current);
var inst_34834 = advenjure.hooks.eval_postcondition.call(null,inst_34833,game_state,inst_34832);
var state_34836__$1 = state_34836;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34836__$1,inst_34834);
} else {
if((state_val_34837 === (12))){
var inst_34817 = (state_34836[(2)]);
var state_34836__$1 = state_34836;
var statearr_34923_35087 = state_34836__$1;
(statearr_34923_35087[(2)] = inst_34817);

(statearr_34923_35087[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34837 === (2))){
var inst_34800 = (state_34836[(7)]);
var inst_34803 = (inst_34800 == null);
var inst_34804 = cljs.core.not.call(null,inst_34803);
var state_34836__$1 = state_34836;
if(inst_34804){
var statearr_34927_35088 = state_34836__$1;
(statearr_34927_35088[(1)] = (4));

} else {
var statearr_34928_35089 = state_34836__$1;
(statearr_34928_35089[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34837 === (11))){
var state_34836__$1 = state_34836;
var statearr_34929_35092 = state_34836__$1;
(statearr_34929_35092[(2)] = false);

(statearr_34929_35092[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34837 === (9))){
var inst_34819 = (state_34836[(2)]);
var state_34836__$1 = state_34836;
var statearr_34933_35095 = state_34836__$1;
(statearr_34933_35095[(2)] = inst_34819);

(statearr_34933_35095[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34837 === (5))){
var inst_34800 = (state_34836[(7)]);
var inst_34821 = cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,inst_34800);
var state_34836__$1 = state_34836;
var statearr_34934_35099 = state_34836__$1;
(statearr_34934_35099[(2)] = inst_34821);

(statearr_34934_35099[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34837 === (14))){
var inst_34800 = (state_34836[(7)]);
var state_34836__$1 = state_34836;
var statearr_34935_35100 = state_34836__$1;
(statearr_34935_35100[(2)] = inst_34800);

(statearr_34935_35100[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34837 === (16))){
var inst_34826 = (state_34836[(2)]);
var inst_34800 = inst_34826;
var state_34836__$1 = (function (){var statearr_34936 = state_34836;
(statearr_34936[(7)] = inst_34800);

return statearr_34936;
})();
var statearr_34937_35102 = state_34836__$1;
(statearr_34937_35102[(2)] = null);

(statearr_34937_35102[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34837 === (10))){
var inst_34800 = (state_34836[(7)]);
var inst_34813 = cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,inst_34800);
var state_34836__$1 = state_34836;
var statearr_34938_35103 = state_34836__$1;
(statearr_34938_35103[(2)] = inst_34813);

(statearr_34938_35103[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34837 === (8))){
var inst_34800 = (state_34836[(7)]);
var inst_34810 = inst_34800.cljs$lang$protocol_mask$partition$;
var inst_34811 = (!inst_34810);
var state_34836__$1 = state_34836;
if(cljs.core.truth_(inst_34811)){
var statearr_34939_35104 = state_34836__$1;
(statearr_34939_35104[(1)] = (10));

} else {
var statearr_34940_35105 = state_34836__$1;
(statearr_34940_35105[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(dir_value,c__24323__auto____$1,inst_34782,inst_34838,state_val_34850,c__24323__auto__,dir,temp__4655__auto__,current))
;
return ((function (switch__24046__auto__,dir_value,c__24323__auto____$1,inst_34782,inst_34838,state_val_34850,c__24323__auto__,dir,temp__4655__auto__,current){
return (function() {
var advenjure$verbs$state_machine__24047__auto__ = null;
var advenjure$verbs$state_machine__24047__auto____0 = (function (){
var statearr_34944 = [null,null,null,null,null,null,null,null];
(statearr_34944[(0)] = advenjure$verbs$state_machine__24047__auto__);

(statearr_34944[(1)] = (1));

return statearr_34944;
});
var advenjure$verbs$state_machine__24047__auto____1 = (function (state_34836){
while(true){
var ret_value__24048__auto__ = (function (){try{while(true){
var result__24049__auto__ = switch__24046__auto__.call(null,state_34836);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24049__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24049__auto__;
}
break;
}
}catch (e34945){if((e34945 instanceof Object)){
var ex__24050__auto__ = e34945;
var statearr_34946_35109 = state_34836;
(statearr_34946_35109[(5)] = ex__24050__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34836);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34945;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35110 = state_34836;
state_34836 = G__35110;
continue;
} else {
return ret_value__24048__auto__;
}
break;
}
});
advenjure$verbs$state_machine__24047__auto__ = function(state_34836){
switch(arguments.length){
case 0:
return advenjure$verbs$state_machine__24047__auto____0.call(this);
case 1:
return advenjure$verbs$state_machine__24047__auto____1.call(this,state_34836);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
advenjure$verbs$state_machine__24047__auto__.cljs$core$IFn$_invoke$arity$0 = advenjure$verbs$state_machine__24047__auto____0;
advenjure$verbs$state_machine__24047__auto__.cljs$core$IFn$_invoke$arity$1 = advenjure$verbs$state_machine__24047__auto____1;
return advenjure$verbs$state_machine__24047__auto__;
})()
;})(switch__24046__auto__,dir_value,c__24323__auto____$1,inst_34782,inst_34838,state_val_34850,c__24323__auto__,dir,temp__4655__auto__,current))
})();
var state__24325__auto__ = (function (){var statearr_34947 = f__24324__auto__.call(null);
(statearr_34947[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24323__auto____$1);

return statearr_34947;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24325__auto__);
});
;})(dir_value,c__24323__auto____$1,inst_34782,inst_34838,state_val_34850,c__24323__auto__,dir,temp__4655__auto__,current))
})();
var inst_34840 = cljs.core.async.impl.dispatch.run.call(null,inst_34839);
var state_34849__$1 = (function (){var statearr_34948 = state_34849;
(statearr_34948[(10)] = inst_34840);

return statearr_34948;
})();
var statearr_34950_35111 = state_34849__$1;
(statearr_34950_35111[(2)] = inst_34838);

(statearr_34950_35111[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34850 === (16))){
var inst_34776 = (state_34849[(2)]);
var inst_34749 = inst_34776;
var state_34849__$1 = (function (){var statearr_34951 = state_34849;
(statearr_34951[(8)] = inst_34749);

return statearr_34951;
})();
var statearr_34952_35113 = state_34849__$1;
(statearr_34952_35113[(2)] = null);

(statearr_34952_35113[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34850 === (10))){
var inst_34749 = (state_34849[(8)]);
var inst_34764 = cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,inst_34749);
var state_34849__$1 = state_34849;
var statearr_34955_35114 = state_34849__$1;
(statearr_34955_35114[(2)] = inst_34764);

(statearr_34955_35114[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34850 === (18))){
var inst_34782 = (state_34849[(9)]);
var inst_34787 = cljs.core.not.call(null,inst_34782);
var state_34849__$1 = state_34849;
if(inst_34787){
var statearr_34956_35115 = state_34849__$1;
(statearr_34956_35115[(1)] = (20));

} else {
var statearr_34957_35116 = state_34849__$1;
(statearr_34957_35116[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34850 === (8))){
var inst_34749 = (state_34849[(8)]);
var inst_34761 = inst_34749.cljs$lang$protocol_mask$partition$;
var inst_34762 = (!inst_34761);
var state_34849__$1 = state_34849;
if(cljs.core.truth_(inst_34762)){
var statearr_34959_35117 = state_34849__$1;
(statearr_34959_35117[(1)] = (10));

} else {
var statearr_34960_35118 = state_34849__$1;
(statearr_34960_35118[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__24323__auto__,dir,temp__4655__auto__,current))
;
return ((function (switch__24046__auto__,c__24323__auto__,dir,temp__4655__auto__,current){
return (function() {
var advenjure$verbs$state_machine__24047__auto__ = null;
var advenjure$verbs$state_machine__24047__auto____0 = (function (){
var statearr_34967 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34967[(0)] = advenjure$verbs$state_machine__24047__auto__);

(statearr_34967[(1)] = (1));

return statearr_34967;
});
var advenjure$verbs$state_machine__24047__auto____1 = (function (state_34849){
while(true){
var ret_value__24048__auto__ = (function (){try{while(true){
var result__24049__auto__ = switch__24046__auto__.call(null,state_34849);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24049__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24049__auto__;
}
break;
}
}catch (e34968){if((e34968 instanceof Object)){
var ex__24050__auto__ = e34968;
var statearr_34969_35119 = state_34849;
(statearr_34969_35119[(5)] = ex__24050__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34849);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34968;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35120 = state_34849;
state_34849 = G__35120;
continue;
} else {
return ret_value__24048__auto__;
}
break;
}
});
advenjure$verbs$state_machine__24047__auto__ = function(state_34849){
switch(arguments.length){
case 0:
return advenjure$verbs$state_machine__24047__auto____0.call(this);
case 1:
return advenjure$verbs$state_machine__24047__auto____1.call(this,state_34849);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
advenjure$verbs$state_machine__24047__auto__.cljs$core$IFn$_invoke$arity$0 = advenjure$verbs$state_machine__24047__auto____0;
advenjure$verbs$state_machine__24047__auto__.cljs$core$IFn$_invoke$arity$1 = advenjure$verbs$state_machine__24047__auto____1;
return advenjure$verbs$state_machine__24047__auto__;
})()
;})(switch__24046__auto__,c__24323__auto__,dir,temp__4655__auto__,current))
})();
var state__24325__auto__ = (function (){var statearr_34973 = f__24324__auto__.call(null);
(statearr_34973[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24323__auto__);

return statearr_34973;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24325__auto__);
});})(c__24323__auto__,dir,temp__4655__auto__,current))
);

return c__24323__auto__;
} else {
var temp__4655__auto____$1 = advenjure.utils.get_visible_room.call(null,game_state,direction);
if(cljs.core.truth_(temp__4655__auto____$1)){
var roomkw = temp__4655__auto____$1;
return advenjure.change_rooms.change_rooms.call(null,game_state,roomkw);
} else {
return advenjure.utils.say.call(null,"Go where?");
}
}
});

advenjure.verbs.go.cljs$lang$maxFixedArity = 2;

/**
 * Describe what's in the given direction.
 */
advenjure.verbs.look_to = (function advenjure$verbs$look_to(var_args){
var args35121 = [];
var len__21530__auto___35298 = arguments.length;
var i__21531__auto___35299 = (0);
while(true){
if((i__21531__auto___35299 < len__21530__auto___35298)){
args35121.push((arguments[i__21531__auto___35299]));

var G__35301 = (i__21531__auto___35299 + (1));
i__21531__auto___35299 = G__35301;
continue;
} else {
}
break;
}

var G__35123 = args35121.length;
switch (G__35123) {
case 1:
return advenjure.verbs.look_to.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return advenjure.verbs.look_to.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35121.length)].join('')));

}
});

advenjure.verbs.look_to.cljs$core$IFn$_invoke$arity$1 = (function (game_state){
return advenjure.utils.say.call(null,advenjure.gettext.core._.call(null,"Look to where?"));
});

advenjure.verbs.look_to.cljs$core$IFn$_invoke$arity$2 = (function (game_state,direction){
var temp__4655__auto__ = cljs.core.get.call(null,advenjure.utils.direction_mappings,direction);
if(cljs.core.truth_(temp__4655__auto__)){
var dir = temp__4655__auto__;
var c__24323__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24323__auto__,dir,temp__4655__auto__){
return (function (){
var f__24324__auto__ = (function (){var switch__24046__auto__ = ((function (c__24323__auto__,dir,temp__4655__auto__){
return (function (state_35227){
var state_val_35228 = (state_35227[(1)]);
if((state_val_35228 === (7))){
var state_35227__$1 = state_35227;
var statearr_35229_35310 = state_35227__$1;
(statearr_35229_35310[(2)] = true);

(statearr_35229_35310[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35228 === (20))){
var inst_35161 = (state_35227[(7)]);
var inst_35181 = cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,inst_35161);
var state_35227__$1 = state_35227;
var statearr_35230_35311 = state_35227__$1;
(statearr_35230_35311[(2)] = inst_35181);

(statearr_35230_35311[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35228 === (27))){
var inst_35177 = (state_35227[(2)]);
var state_35227__$1 = state_35227;
var statearr_35231_35315 = state_35227__$1;
(statearr_35231_35315[(2)] = inst_35177);

(statearr_35231_35315[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35228 === (1))){
var inst_35124 = advenjure.hooks.eval_direction.call(null,game_state,dir);
var inst_35125 = inst_35124;
var state_35227__$1 = (function (){var statearr_35232 = state_35227;
(statearr_35232[(8)] = inst_35125);

return statearr_35232;
})();
var statearr_35233_35317 = state_35227__$1;
(statearr_35233_35317[(2)] = null);

(statearr_35233_35317[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35228 === (24))){
var inst_35179 = (state_35227[(2)]);
var state_35227__$1 = state_35227;
var statearr_35234_35318 = state_35227__$1;
(statearr_35234_35318[(2)] = inst_35179);

(statearr_35234_35318[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35228 === (39))){
var inst_35192 = (state_35227[(9)]);
var inst_35206 = new cljs.core.Keyword(null,"visited","visited",-1610853875).cljs$core$IFn$_invoke$arity$1(inst_35192);
var state_35227__$1 = state_35227;
var statearr_35235_35319 = state_35227__$1;
(statearr_35235_35319[(2)] = inst_35206);

(statearr_35235_35319[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35228 === (46))){
var inst_35219 = (state_35227[(2)]);
var state_35227__$1 = state_35227;
var statearr_35236_35320 = state_35227__$1;
(statearr_35236_35320[(2)] = inst_35219);

(statearr_35236_35320[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35228 === (4))){
var inst_35125 = (state_35227[(8)]);
var inst_35131 = inst_35125.cljs$core$async$impl$protocols$ReadPort$;
var inst_35132 = (false) || (inst_35131);
var state_35227__$1 = state_35227;
if(cljs.core.truth_(inst_35132)){
var statearr_35237_35321 = state_35227__$1;
(statearr_35237_35321[(1)] = (7));

} else {
var statearr_35238_35322 = state_35227__$1;
(statearr_35238_35322[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35228 === (15))){
var inst_35154 = (state_35227[(2)]);
var state_35227__$1 = state_35227;
var statearr_35239_35323 = state_35227__$1;
(statearr_35239_35323[(2)] = inst_35154);

(statearr_35239_35323[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35228 === (21))){
var inst_35183 = (state_35227[(2)]);
var state_35227__$1 = state_35227;
if(cljs.core.truth_(inst_35183)){
var statearr_35240_35325 = state_35227__$1;
(statearr_35240_35325[(1)] = (28));

} else {
var statearr_35241_35326 = state_35227__$1;
(statearr_35241_35326[(1)] = (29));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35228 === (31))){
var inst_35186 = (state_35227[(2)]);
var inst_35161 = inst_35186;
var state_35227__$1 = (function (){var statearr_35242 = state_35227;
(statearr_35242[(7)] = inst_35161);

return statearr_35242;
})();
var statearr_35243_35330 = state_35227__$1;
(statearr_35243_35330[(2)] = null);

(statearr_35243_35330[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35228 === (32))){
var inst_35195 = advenjure.gettext.core._.call(null,"That direction was blocked.");
var inst_35196 = advenjure.utils.say.call(null,inst_35195);
var state_35227__$1 = state_35227;
var statearr_35244_35331 = state_35227__$1;
(statearr_35244_35331[(2)] = inst_35196);

(statearr_35244_35331[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35228 === (40))){
var inst_35208 = (state_35227[(2)]);
var state_35227__$1 = state_35227;
if(cljs.core.truth_(inst_35208)){
var statearr_35245_35335 = state_35227__$1;
(statearr_35245_35335[(1)] = (41));

} else {
var statearr_35246_35338 = state_35227__$1;
(statearr_35246_35338[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35228 === (33))){
var inst_35156 = (state_35227[(10)]);
var inst_35198 = cljs.core.not.call(null,inst_35156);
var state_35227__$1 = state_35227;
if(inst_35198){
var statearr_35247_35342 = state_35227__$1;
(statearr_35247_35342[(1)] = (35));

} else {
var statearr_35248_35343 = state_35227__$1;
(statearr_35248_35343[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35228 === (13))){
var inst_35125 = (state_35227[(8)]);
var state_35227__$1 = state_35227;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35227__$1,(16),inst_35125);
} else {
if((state_val_35228 === (22))){
var state_35227__$1 = state_35227;
var statearr_35249_35345 = state_35227__$1;
(statearr_35249_35345[(2)] = true);

(statearr_35249_35345[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35228 === (36))){
var inst_35192 = (state_35227[(9)]);
var inst_35203 = (state_35227[(11)]);
var inst_35203__$1 = new cljs.core.Keyword(null,"known","known",1655795903).cljs$core$IFn$_invoke$arity$1(inst_35192);
var state_35227__$1 = (function (){var statearr_35250 = state_35227;
(statearr_35250[(11)] = inst_35203__$1);

return statearr_35250;
})();
if(cljs.core.truth_(inst_35203__$1)){
var statearr_35251_35352 = state_35227__$1;
(statearr_35251_35352[(1)] = (38));

} else {
var statearr_35252_35353 = state_35227__$1;
(statearr_35252_35353[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35228 === (41))){
var inst_35192 = (state_35227[(9)]);
var inst_35210 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(inst_35192);
var inst_35211 = advenjure.gettext.core._.call(null,"The %s was in that direction.",inst_35210);
var inst_35212 = advenjure.utils.say.call(null,inst_35211);
var state_35227__$1 = state_35227;
var statearr_35253_35358 = state_35227__$1;
(statearr_35253_35358[(2)] = inst_35212);

(statearr_35253_35358[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35228 === (43))){
var inst_35221 = (state_35227[(2)]);
var state_35227__$1 = state_35227;
var statearr_35254_35363 = state_35227__$1;
(statearr_35254_35363[(2)] = inst_35221);

(statearr_35254_35363[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35228 === (29))){
var inst_35161 = (state_35227[(7)]);
var state_35227__$1 = state_35227;
var statearr_35255_35364 = state_35227__$1;
(statearr_35255_35364[(2)] = inst_35161);

(statearr_35255_35364[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35228 === (44))){
var inst_35215 = advenjure.gettext.core._.call(null,"I didn't know what was in that direction.");
var inst_35216 = advenjure.utils.say.call(null,inst_35215);
var state_35227__$1 = state_35227;
var statearr_35256_35366 = state_35227__$1;
(statearr_35256_35366[(2)] = inst_35216);

(statearr_35256_35366[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35228 === (6))){
var inst_35147 = (state_35227[(2)]);
var state_35227__$1 = state_35227;
if(cljs.core.truth_(inst_35147)){
var statearr_35257_35371 = state_35227__$1;
(statearr_35257_35371[(1)] = (13));

} else {
var statearr_35258_35372 = state_35227__$1;
(statearr_35258_35372[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35228 === (28))){
var inst_35161 = (state_35227[(7)]);
var state_35227__$1 = state_35227;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35227__$1,(31),inst_35161);
} else {
if((state_val_35228 === (25))){
var inst_35161 = (state_35227[(7)]);
var inst_35174 = cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,inst_35161);
var state_35227__$1 = state_35227;
var statearr_35259_35373 = state_35227__$1;
(statearr_35259_35373[(2)] = inst_35174);

(statearr_35259_35373[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35228 === (34))){
var inst_35225 = (state_35227[(2)]);
var state_35227__$1 = state_35227;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35227__$1,inst_35225);
} else {
if((state_val_35228 === (17))){
var inst_35161 = (state_35227[(7)]);
var inst_35164 = (inst_35161 == null);
var inst_35165 = cljs.core.not.call(null,inst_35164);
var state_35227__$1 = state_35227;
if(inst_35165){
var statearr_35260_35374 = state_35227__$1;
(statearr_35260_35374[(1)] = (19));

} else {
var statearr_35261_35375 = state_35227__$1;
(statearr_35261_35375[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35228 === (3))){
var inst_35156 = (state_35227[(10)]);
var inst_35156__$1 = (state_35227[(2)]);
var inst_35157 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_35158 = [new cljs.core.Keyword(null,"room-map","room-map",978449264),inst_35156__$1];
var inst_35159 = (new cljs.core.PersistentVector(null,2,(5),inst_35157,inst_35158,null));
var inst_35160 = cljs.core.get_in.call(null,game_state,inst_35159);
var inst_35161 = inst_35160;
var state_35227__$1 = (function (){var statearr_35262 = state_35227;
(statearr_35262[(7)] = inst_35161);

(statearr_35262[(10)] = inst_35156__$1);

return statearr_35262;
})();
var statearr_35263_35376 = state_35227__$1;
(statearr_35263_35376[(2)] = null);

(statearr_35263_35376[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35228 === (12))){
var inst_35141 = (state_35227[(2)]);
var state_35227__$1 = state_35227;
var statearr_35264_35377 = state_35227__$1;
(statearr_35264_35377[(2)] = inst_35141);

(statearr_35264_35377[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35228 === (2))){
var inst_35125 = (state_35227[(8)]);
var inst_35128 = (inst_35125 == null);
var inst_35129 = cljs.core.not.call(null,inst_35128);
var state_35227__$1 = state_35227;
if(inst_35129){
var statearr_35265_35378 = state_35227__$1;
(statearr_35265_35378[(1)] = (4));

} else {
var statearr_35266_35379 = state_35227__$1;
(statearr_35266_35379[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35228 === (23))){
var inst_35161 = (state_35227[(7)]);
var inst_35171 = inst_35161.cljs$lang$protocol_mask$partition$;
var inst_35172 = (!inst_35171);
var state_35227__$1 = state_35227;
if(cljs.core.truth_(inst_35172)){
var statearr_35267_35380 = state_35227__$1;
(statearr_35267_35380[(1)] = (25));

} else {
var statearr_35268_35381 = state_35227__$1;
(statearr_35268_35381[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35228 === (35))){
var inst_35200 = advenjure.gettext.core._.call(null,"There was nothing in that direction.");
var inst_35201 = advenjure.utils.say.call(null,inst_35200);
var state_35227__$1 = state_35227;
var statearr_35269_35382 = state_35227__$1;
(statearr_35269_35382[(2)] = inst_35201);

(statearr_35269_35382[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35228 === (19))){
var inst_35161 = (state_35227[(7)]);
var inst_35167 = inst_35161.cljs$core$async$impl$protocols$ReadPort$;
var inst_35168 = (false) || (inst_35167);
var state_35227__$1 = state_35227;
if(cljs.core.truth_(inst_35168)){
var statearr_35270_35383 = state_35227__$1;
(statearr_35270_35383[(1)] = (22));

} else {
var statearr_35271_35384 = state_35227__$1;
(statearr_35271_35384[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35228 === (11))){
var state_35227__$1 = state_35227;
var statearr_35272_35385 = state_35227__$1;
(statearr_35272_35385[(2)] = false);

(statearr_35272_35385[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35228 === (9))){
var inst_35143 = (state_35227[(2)]);
var state_35227__$1 = state_35227;
var statearr_35273_35386 = state_35227__$1;
(statearr_35273_35386[(2)] = inst_35143);

(statearr_35273_35386[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35228 === (5))){
var inst_35125 = (state_35227[(8)]);
var inst_35145 = cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,inst_35125);
var state_35227__$1 = state_35227;
var statearr_35274_35387 = state_35227__$1;
(statearr_35274_35387[(2)] = inst_35145);

(statearr_35274_35387[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35228 === (14))){
var inst_35125 = (state_35227[(8)]);
var state_35227__$1 = state_35227;
var statearr_35275_35388 = state_35227__$1;
(statearr_35275_35388[(2)] = inst_35125);

(statearr_35275_35388[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35228 === (45))){
var state_35227__$1 = state_35227;
var statearr_35276_35389 = state_35227__$1;
(statearr_35276_35389[(2)] = null);

(statearr_35276_35389[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35228 === (26))){
var state_35227__$1 = state_35227;
var statearr_35277_35390 = state_35227__$1;
(statearr_35277_35390[(2)] = false);

(statearr_35277_35390[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35228 === (16))){
var inst_35150 = (state_35227[(2)]);
var inst_35125 = inst_35150;
var state_35227__$1 = (function (){var statearr_35278 = state_35227;
(statearr_35278[(8)] = inst_35125);

return statearr_35278;
})();
var statearr_35279_35391 = state_35227__$1;
(statearr_35279_35391[(2)] = null);

(statearr_35279_35391[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35228 === (38))){
var inst_35203 = (state_35227[(11)]);
var state_35227__$1 = state_35227;
var statearr_35280_35392 = state_35227__$1;
(statearr_35280_35392[(2)] = inst_35203);

(statearr_35280_35392[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35228 === (30))){
var inst_35190 = (state_35227[(2)]);
var state_35227__$1 = state_35227;
var statearr_35281_35393 = state_35227__$1;
(statearr_35281_35393[(2)] = inst_35190);

(statearr_35281_35393[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35228 === (10))){
var inst_35125 = (state_35227[(8)]);
var inst_35138 = cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,inst_35125);
var state_35227__$1 = state_35227;
var statearr_35282_35394 = state_35227__$1;
(statearr_35282_35394[(2)] = inst_35138);

(statearr_35282_35394[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35228 === (18))){
var inst_35156 = (state_35227[(10)]);
var inst_35192 = (state_35227[(2)]);
var inst_35193 = typeof inst_35156 === 'string';
var state_35227__$1 = (function (){var statearr_35283 = state_35227;
(statearr_35283[(9)] = inst_35192);

return statearr_35283;
})();
if(cljs.core.truth_(inst_35193)){
var statearr_35284_35395 = state_35227__$1;
(statearr_35284_35395[(1)] = (32));

} else {
var statearr_35285_35396 = state_35227__$1;
(statearr_35285_35396[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35228 === (42))){
var state_35227__$1 = state_35227;
var statearr_35286_35397 = state_35227__$1;
(statearr_35286_35397[(1)] = (44));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35228 === (37))){
var inst_35223 = (state_35227[(2)]);
var state_35227__$1 = state_35227;
var statearr_35288_35400 = state_35227__$1;
(statearr_35288_35400[(2)] = inst_35223);

(statearr_35288_35400[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35228 === (8))){
var inst_35125 = (state_35227[(8)]);
var inst_35135 = inst_35125.cljs$lang$protocol_mask$partition$;
var inst_35136 = (!inst_35135);
var state_35227__$1 = state_35227;
if(cljs.core.truth_(inst_35136)){
var statearr_35289_35406 = state_35227__$1;
(statearr_35289_35406[(1)] = (10));

} else {
var statearr_35290_35410 = state_35227__$1;
(statearr_35290_35410[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__24323__auto__,dir,temp__4655__auto__))
;
return ((function (switch__24046__auto__,c__24323__auto__,dir,temp__4655__auto__){
return (function() {
var advenjure$verbs$state_machine__24047__auto__ = null;
var advenjure$verbs$state_machine__24047__auto____0 = (function (){
var statearr_35294 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35294[(0)] = advenjure$verbs$state_machine__24047__auto__);

(statearr_35294[(1)] = (1));

return statearr_35294;
});
var advenjure$verbs$state_machine__24047__auto____1 = (function (state_35227){
while(true){
var ret_value__24048__auto__ = (function (){try{while(true){
var result__24049__auto__ = switch__24046__auto__.call(null,state_35227);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24049__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24049__auto__;
}
break;
}
}catch (e35295){if((e35295 instanceof Object)){
var ex__24050__auto__ = e35295;
var statearr_35296_35414 = state_35227;
(statearr_35296_35414[(5)] = ex__24050__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35227);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35295;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35418 = state_35227;
state_35227 = G__35418;
continue;
} else {
return ret_value__24048__auto__;
}
break;
}
});
advenjure$verbs$state_machine__24047__auto__ = function(state_35227){
switch(arguments.length){
case 0:
return advenjure$verbs$state_machine__24047__auto____0.call(this);
case 1:
return advenjure$verbs$state_machine__24047__auto____1.call(this,state_35227);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
advenjure$verbs$state_machine__24047__auto__.cljs$core$IFn$_invoke$arity$0 = advenjure$verbs$state_machine__24047__auto____0;
advenjure$verbs$state_machine__24047__auto__.cljs$core$IFn$_invoke$arity$1 = advenjure$verbs$state_machine__24047__auto____1;
return advenjure$verbs$state_machine__24047__auto__;
})()
;})(switch__24046__auto__,c__24323__auto__,dir,temp__4655__auto__))
})();
var state__24325__auto__ = (function (){var statearr_35297 = f__24324__auto__.call(null);
(statearr_35297[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24323__auto__);

return statearr_35297;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24325__auto__);
});})(c__24323__auto__,dir,temp__4655__auto__))
);

return c__24323__auto__;
} else {
var temp__4655__auto____$1 = advenjure.utils.get_visible_room.call(null,game_state,direction);
if(cljs.core.truth_(temp__4655__auto____$1)){
var roomkw = temp__4655__auto____$1;
var room_name = cljs.core.get_in.call(null,game_state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"room-map","room-map",978449264),roomkw,new cljs.core.Keyword(null,"name","name",1843675177)], null));
var dir_kw = roomkw.call(null,clojure.set.map_invert.call(null,advenjure.utils.current_room.call(null,game_state)));
var dir_name = dir_kw.call(null,advenjure.utils.direction_names);
return advenjure.utils.say.call(null,advenjure.gettext.core._.call(null,"The %s was toward %s.",room_name,dir_name));
} else {
return advenjure.utils.say.call(null,advenjure.gettext.core._.call(null,"Look to where?"));
}
}
});

advenjure.verbs.look_to.cljs$lang$maxFixedArity = 2;

/**
 * Go to the previous room, if possible.
 */
advenjure.verbs.go_back = (function advenjure$verbs$go_back(game_state){
var temp__4655__auto__ = new cljs.core.Keyword(null,"previous-room","previous-room",1161246873).cljs$core$IFn$_invoke$arity$1(game_state);
if(cljs.core.truth_(temp__4655__auto__)){
var roomkw = temp__4655__auto__;
if(cljs.core.truth_(advenjure.rooms.connection_dir.call(null,advenjure.utils.current_room.call(null,game_state),roomkw))){
return advenjure.change_rooms.change_rooms.call(null,game_state,roomkw);
} else {
return advenjure.utils.say.call(null,advenjure.gettext.core._.call(null,"Where would back be?"));
}
} else {
return advenjure.utils.say.call(null,advenjure.gettext.core._.call(null,"Where would back be?"));
}
});
/**
 * Look around (describe room) and enumerate available movement directions.
 */
advenjure.verbs.look = (function advenjure$verbs$look(game_state){
advenjure.utils.say.call(null,[cljs.core.str(advenjure.rooms.describe.call(null,advenjure.utils.current_room.call(null,game_state)))].join(''));

advenjure.utils.say.call(null," ");

return cljs.core.reduce.call(null,(function (gs,dirkw){
var dir_value = advenjure.hooks.eval_direction.call(null,game_state,dirkw);
var dir_name = dirkw.call(null,advenjure.utils.direction_names);
var dir_room = cljs.core.get_in.call(null,game_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"room-map","room-map",978449264),dir_value], null));
if(cljs.core.truth_(dir_value)){
var c__24323__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24323__auto__,dir_value,dir_name,dir_room){
return (function (){
var f__24324__auto__ = (function (){var switch__24046__auto__ = ((function (c__24323__auto__,dir_value,dir_name,dir_room){
return (function (state_35677){
var state_val_35678 = (state_35677[(1)]);
if((state_val_35678 === (7))){
var state_35677__$1 = state_35677;
var statearr_35680_35770 = state_35677__$1;
(statearr_35680_35770[(2)] = true);

(statearr_35680_35770[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35678 === (20))){
var inst_35619 = (state_35677[(7)]);
var inst_35639 = cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,inst_35619);
var state_35677__$1 = state_35677;
var statearr_35681_35771 = state_35677__$1;
(statearr_35681_35771[(2)] = inst_35639);

(statearr_35681_35771[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35678 === (27))){
var inst_35635 = (state_35677[(2)]);
var state_35677__$1 = state_35677;
var statearr_35682_35772 = state_35677__$1;
(statearr_35682_35772[(2)] = inst_35635);

(statearr_35682_35772[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35678 === (1))){
var inst_35585 = gs;
var state_35677__$1 = (function (){var statearr_35683 = state_35677;
(statearr_35683[(8)] = inst_35585);

return statearr_35683;
})();
var statearr_35684_35773 = state_35677__$1;
(statearr_35684_35773[(2)] = null);

(statearr_35684_35773[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35678 === (24))){
var inst_35637 = (state_35677[(2)]);
var state_35677__$1 = state_35677;
var statearr_35686_35774 = state_35677__$1;
(statearr_35686_35774[(2)] = inst_35637);

(statearr_35686_35774[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35678 === (39))){
var state_35677__$1 = state_35677;
var statearr_35687_35775 = state_35677__$1;
(statearr_35687_35775[(1)] = (41));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35678 === (4))){
var inst_35585 = (state_35677[(8)]);
var inst_35591 = inst_35585.cljs$core$async$impl$protocols$ReadPort$;
var inst_35592 = (false) || (inst_35591);
var state_35677__$1 = state_35677;
if(cljs.core.truth_(inst_35592)){
var statearr_35689_35776 = state_35677__$1;
(statearr_35689_35776[(1)] = (7));

} else {
var statearr_35690_35777 = state_35677__$1;
(statearr_35690_35777[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35678 === (15))){
var inst_35614 = (state_35677[(2)]);
var state_35677__$1 = state_35677;
var statearr_35691_35778 = state_35677__$1;
(statearr_35691_35778[(2)] = inst_35614);

(statearr_35691_35778[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35678 === (21))){
var inst_35641 = (state_35677[(2)]);
var state_35677__$1 = state_35677;
if(cljs.core.truth_(inst_35641)){
var statearr_35692_35779 = state_35677__$1;
(statearr_35692_35779[(1)] = (28));

} else {
var statearr_35693_35780 = state_35677__$1;
(statearr_35693_35780[(1)] = (29));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35678 === (31))){
var inst_35644 = (state_35677[(2)]);
var inst_35619 = inst_35644;
var state_35677__$1 = (function (){var statearr_35694 = state_35677;
(statearr_35694[(7)] = inst_35619);

return statearr_35694;
})();
var statearr_35695_35781 = state_35677__$1;
(statearr_35695_35781[(2)] = null);

(statearr_35695_35781[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35678 === (32))){
var inst_35653 = advenjure.gettext.core._.call(null,"blocked.");
var inst_35654 = advenjure.utils.say.call(null,inst_35653);
var state_35677__$1 = state_35677;
var statearr_35696_35782 = state_35677__$1;
(statearr_35696_35782[(2)] = inst_35654);

(statearr_35696_35782[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35678 === (40))){
var inst_35673 = (state_35677[(2)]);
var state_35677__$1 = state_35677;
var statearr_35697_35783 = state_35677__$1;
(statearr_35697_35783[(2)] = inst_35673);

(statearr_35697_35783[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35678 === (33))){
var inst_35656 = (state_35677[(9)]);
var inst_35656__$1 = new cljs.core.Keyword(null,"visited","visited",-1610853875).cljs$core$IFn$_invoke$arity$1(dir_room);
var state_35677__$1 = (function (){var statearr_35698 = state_35677;
(statearr_35698[(9)] = inst_35656__$1);

return statearr_35698;
})();
if(cljs.core.truth_(inst_35656__$1)){
var statearr_35701_35784 = state_35677__$1;
(statearr_35701_35784[(1)] = (35));

} else {
var statearr_35702_35785 = state_35677__$1;
(statearr_35702_35785[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35678 === (13))){
var inst_35585 = (state_35677[(8)]);
var state_35677__$1 = state_35677;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35677__$1,(16),inst_35585);
} else {
if((state_val_35678 === (22))){
var state_35677__$1 = state_35677;
var statearr_35704_35786 = state_35677__$1;
(statearr_35704_35786[(2)] = true);

(statearr_35704_35786[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35678 === (36))){
var inst_35659 = new cljs.core.Keyword(null,"known","known",1655795903).cljs$core$IFn$_invoke$arity$1(dir_room);
var state_35677__$1 = state_35677;
var statearr_35705_35787 = state_35677__$1;
(statearr_35705_35787[(2)] = inst_35659);

(statearr_35705_35787[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35678 === (41))){
var inst_35668 = advenjure.utils.say.call(null,"???");
var state_35677__$1 = state_35677;
var statearr_35706_35788 = state_35677__$1;
(statearr_35706_35788[(2)] = inst_35668);

(statearr_35706_35788[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35678 === (43))){
var inst_35671 = (state_35677[(2)]);
var state_35677__$1 = state_35677;
var statearr_35710_35789 = state_35677__$1;
(statearr_35710_35789[(2)] = inst_35671);

(statearr_35710_35789[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35678 === (29))){
var inst_35619 = (state_35677[(7)]);
var state_35677__$1 = state_35677;
var statearr_35711_35790 = state_35677__$1;
(statearr_35711_35790[(2)] = inst_35619);

(statearr_35711_35790[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35678 === (6))){
var inst_35607 = (state_35677[(2)]);
var state_35677__$1 = state_35677;
if(cljs.core.truth_(inst_35607)){
var statearr_35713_35791 = state_35677__$1;
(statearr_35713_35791[(1)] = (13));

} else {
var statearr_35714_35792 = state_35677__$1;
(statearr_35714_35792[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35678 === (28))){
var inst_35619 = (state_35677[(7)]);
var state_35677__$1 = state_35677;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35677__$1,(31),inst_35619);
} else {
if((state_val_35678 === (25))){
var inst_35619 = (state_35677[(7)]);
var inst_35632 = cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,inst_35619);
var state_35677__$1 = state_35677;
var statearr_35719_35813 = state_35677__$1;
(statearr_35719_35813[(2)] = inst_35632);

(statearr_35719_35813[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35678 === (34))){
var inst_35616 = (state_35677[(10)]);
var inst_35675 = (state_35677[(2)]);
var state_35677__$1 = (function (){var statearr_35720 = state_35677;
(statearr_35720[(11)] = inst_35675);

return statearr_35720;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35677__$1,inst_35616);
} else {
if((state_val_35678 === (17))){
var inst_35619 = (state_35677[(7)]);
var inst_35622 = (inst_35619 == null);
var inst_35623 = cljs.core.not.call(null,inst_35622);
var state_35677__$1 = state_35677;
if(inst_35623){
var statearr_35721_35838 = state_35677__$1;
(statearr_35721_35838[(1)] = (19));

} else {
var statearr_35722_35839 = state_35677__$1;
(statearr_35722_35839[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35678 === (3))){
var inst_35616 = (state_35677[(2)]);
var inst_35617 = [cljs.core.str(dir_name),cljs.core.str(": ")].join('');
var inst_35618 = advenjure.utils.say_inline.call(null,inst_35617);
var inst_35619 = inst_35618;
var state_35677__$1 = (function (){var statearr_35723 = state_35677;
(statearr_35723[(10)] = inst_35616);

(statearr_35723[(7)] = inst_35619);

return statearr_35723;
})();
var statearr_35724_35840 = state_35677__$1;
(statearr_35724_35840[(2)] = null);

(statearr_35724_35840[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35678 === (12))){
var inst_35601 = (state_35677[(2)]);
var state_35677__$1 = state_35677;
var statearr_35725_35844 = state_35677__$1;
(statearr_35725_35844[(2)] = inst_35601);

(statearr_35725_35844[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35678 === (2))){
var inst_35585 = (state_35677[(8)]);
var inst_35588 = (inst_35585 == null);
var inst_35589 = cljs.core.not.call(null,inst_35588);
var state_35677__$1 = state_35677;
if(inst_35589){
var statearr_35726_35845 = state_35677__$1;
(statearr_35726_35845[(1)] = (4));

} else {
var statearr_35727_35846 = state_35677__$1;
(statearr_35727_35846[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35678 === (23))){
var inst_35619 = (state_35677[(7)]);
var inst_35629 = inst_35619.cljs$lang$protocol_mask$partition$;
var inst_35630 = (!inst_35629);
var state_35677__$1 = state_35677;
if(cljs.core.truth_(inst_35630)){
var statearr_35728_35864 = state_35677__$1;
(statearr_35728_35864[(1)] = (25));

} else {
var statearr_35729_35871 = state_35677__$1;
(statearr_35729_35871[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35678 === (35))){
var inst_35656 = (state_35677[(9)]);
var state_35677__$1 = state_35677;
var statearr_35730_35892 = state_35677__$1;
(statearr_35730_35892[(2)] = inst_35656);

(statearr_35730_35892[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35678 === (19))){
var inst_35619 = (state_35677[(7)]);
var inst_35625 = inst_35619.cljs$core$async$impl$protocols$ReadPort$;
var inst_35626 = (false) || (inst_35625);
var state_35677__$1 = state_35677;
if(cljs.core.truth_(inst_35626)){
var statearr_35731_35894 = state_35677__$1;
(statearr_35731_35894[(1)] = (22));

} else {
var statearr_35732_35895 = state_35677__$1;
(statearr_35732_35895[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35678 === (11))){
var state_35677__$1 = state_35677;
var statearr_35733_35896 = state_35677__$1;
(statearr_35733_35896[(2)] = false);

(statearr_35733_35896[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35678 === (9))){
var inst_35603 = (state_35677[(2)]);
var state_35677__$1 = state_35677;
var statearr_35734_35897 = state_35677__$1;
(statearr_35734_35897[(2)] = inst_35603);

(statearr_35734_35897[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35678 === (5))){
var inst_35585 = (state_35677[(8)]);
var inst_35605 = cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,inst_35585);
var state_35677__$1 = state_35677;
var statearr_35738_35898 = state_35677__$1;
(statearr_35738_35898[(2)] = inst_35605);

(statearr_35738_35898[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35678 === (14))){
var inst_35585 = (state_35677[(8)]);
var state_35677__$1 = state_35677;
var statearr_35739_35899 = state_35677__$1;
(statearr_35739_35899[(2)] = inst_35585);

(statearr_35739_35899[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35678 === (26))){
var state_35677__$1 = state_35677;
var statearr_35740_35900 = state_35677__$1;
(statearr_35740_35900[(2)] = false);

(statearr_35740_35900[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35678 === (16))){
var inst_35610 = (state_35677[(2)]);
var inst_35585 = inst_35610;
var state_35677__$1 = (function (){var statearr_35744 = state_35677;
(statearr_35744[(8)] = inst_35585);

return statearr_35744;
})();
var statearr_35745_35904 = state_35677__$1;
(statearr_35745_35904[(2)] = null);

(statearr_35745_35904[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35678 === (38))){
var inst_35663 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(dir_room);
var inst_35664 = [cljs.core.str(inst_35663),cljs.core.str(".")].join('');
var inst_35665 = advenjure.utils.say.call(null,inst_35664);
var state_35677__$1 = state_35677;
var statearr_35746_35907 = state_35677__$1;
(statearr_35746_35907[(2)] = inst_35665);

(statearr_35746_35907[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35678 === (30))){
var inst_35648 = (state_35677[(2)]);
var state_35677__$1 = state_35677;
var statearr_35751_35911 = state_35677__$1;
(statearr_35751_35911[(2)] = inst_35648);

(statearr_35751_35911[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35678 === (10))){
var inst_35585 = (state_35677[(8)]);
var inst_35598 = cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,inst_35585);
var state_35677__$1 = state_35677;
var statearr_35752_35912 = state_35677__$1;
(statearr_35752_35912[(2)] = inst_35598);

(statearr_35752_35912[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35678 === (18))){
var inst_35650 = (state_35677[(2)]);
var inst_35651 = typeof dir_value === 'string';
var state_35677__$1 = (function (){var statearr_35753 = state_35677;
(statearr_35753[(12)] = inst_35650);

return statearr_35753;
})();
if(cljs.core.truth_(inst_35651)){
var statearr_35754_35916 = state_35677__$1;
(statearr_35754_35916[(1)] = (32));

} else {
var statearr_35755_35917 = state_35677__$1;
(statearr_35755_35917[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35678 === (42))){
var state_35677__$1 = state_35677;
var statearr_35756_35918 = state_35677__$1;
(statearr_35756_35918[(2)] = null);

(statearr_35756_35918[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35678 === (37))){
var inst_35661 = (state_35677[(2)]);
var state_35677__$1 = state_35677;
if(cljs.core.truth_(inst_35661)){
var statearr_35757_35919 = state_35677__$1;
(statearr_35757_35919[(1)] = (38));

} else {
var statearr_35758_35920 = state_35677__$1;
(statearr_35758_35920[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35678 === (8))){
var inst_35585 = (state_35677[(8)]);
var inst_35595 = inst_35585.cljs$lang$protocol_mask$partition$;
var inst_35596 = (!inst_35595);
var state_35677__$1 = state_35677;
if(cljs.core.truth_(inst_35596)){
var statearr_35759_35921 = state_35677__$1;
(statearr_35759_35921[(1)] = (10));

} else {
var statearr_35760_35922 = state_35677__$1;
(statearr_35760_35922[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__24323__auto__,dir_value,dir_name,dir_room))
;
return ((function (switch__24046__auto__,c__24323__auto__,dir_value,dir_name,dir_room){
return (function() {
var advenjure$verbs$look_$_state_machine__24047__auto__ = null;
var advenjure$verbs$look_$_state_machine__24047__auto____0 = (function (){
var statearr_35764 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35764[(0)] = advenjure$verbs$look_$_state_machine__24047__auto__);

(statearr_35764[(1)] = (1));

return statearr_35764;
});
var advenjure$verbs$look_$_state_machine__24047__auto____1 = (function (state_35677){
while(true){
var ret_value__24048__auto__ = (function (){try{while(true){
var result__24049__auto__ = switch__24046__auto__.call(null,state_35677);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24049__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24049__auto__;
}
break;
}
}catch (e35765){if((e35765 instanceof Object)){
var ex__24050__auto__ = e35765;
var statearr_35766_35923 = state_35677;
(statearr_35766_35923[(5)] = ex__24050__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35677);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35765;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35924 = state_35677;
state_35677 = G__35924;
continue;
} else {
return ret_value__24048__auto__;
}
break;
}
});
advenjure$verbs$look_$_state_machine__24047__auto__ = function(state_35677){
switch(arguments.length){
case 0:
return advenjure$verbs$look_$_state_machine__24047__auto____0.call(this);
case 1:
return advenjure$verbs$look_$_state_machine__24047__auto____1.call(this,state_35677);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
advenjure$verbs$look_$_state_machine__24047__auto__.cljs$core$IFn$_invoke$arity$0 = advenjure$verbs$look_$_state_machine__24047__auto____0;
advenjure$verbs$look_$_state_machine__24047__auto__.cljs$core$IFn$_invoke$arity$1 = advenjure$verbs$look_$_state_machine__24047__auto____1;
return advenjure$verbs$look_$_state_machine__24047__auto__;
})()
;})(switch__24046__auto__,c__24323__auto__,dir_value,dir_name,dir_room))
})();
var state__24325__auto__ = (function (){var statearr_35767 = f__24324__auto__.call(null);
(statearr_35767[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24323__auto__);

return statearr_35767;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24325__auto__);
});})(c__24323__auto__,dir_value,dir_name,dir_room))
);

return c__24323__auto__;
} else {
return gs;
}
}),game_state,advenjure.utils.directions);
});
/**
 * Describe the inventory contents.
 */
advenjure.verbs.inventory = (function advenjure$verbs$inventory(game_state){
if(cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"inventory","inventory",860201871).cljs$core$IFn$_invoke$arity$1(game_state))){
return advenjure.utils.say.call(null,advenjure.gettext.core._.call(null,"I wasn't carrying anything."));
} else {
return advenjure.utils.say.call(null,[cljs.core.str(advenjure.gettext.core._.call(null,"I was carrying:")),cljs.core.str(advenjure.items.print_list.call(null,new cljs.core.Keyword(null,"inventory","inventory",860201871).cljs$core$IFn$_invoke$arity$1(game_state)))].join(''));
}
});
/**
 * Save the current game state to a file.
 */
advenjure.verbs.save = (function advenjure$verbs$save(game_state){
advenjure.ui.output.write_file.call(null,"saved.game",cljs.core.dissoc.call(null,game_state,new cljs.core.Keyword(null,"configuration","configuration",1431842520)));

return advenjure.utils.say.call(null,advenjure.gettext.core._.call(null,"Done."));
});
/**
 * Restore a previous game state from file.
 */
advenjure.verbs.restore = (function advenjure$verbs$restore(game_state){
try{var loaded_state = cljs.core.assoc.call(null,advenjure.ui.input.read_file.call(null,"saved.game"),new cljs.core.Keyword(null,"configuration","configuration",1431842520),new cljs.core.Keyword(null,"configuration","configuration",1431842520).cljs$core$IFn$_invoke$arity$1(game_state));
advenjure.utils.say.call(null,advenjure.rooms.describe.call(null,advenjure.utils.current_room.call(null,loaded_state)));

return loaded_state;
}catch (e35926){if((e35926 instanceof Object)){
var e = e35926;
return advenjure.utils.say.call(null,advenjure.gettext.core._.call(null,"No saved game found."));
} else {
throw e35926;

}
}});
/**
 * Close the game.
 */
advenjure.verbs.exit = (function advenjure$verbs$exit(game_state){
advenjure.utils.say.call(null,advenjure.gettext.core._.call(null,"Bye!"));

return advenjure.ui.input.exit.call(null);
});
advenjure.verbs.look_at = advenjure.verbs.make_item_handler.call(null,advenjure.gettext.core._.call(null,"look at"),new cljs.core.Keyword(null,"look-at","look-at",189063937),(function (game_state,item){
return advenjure.utils.say.call(null,new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(item));
}),new cljs.core.Keyword(null,"kw-required","kw-required",-916449094),false);
advenjure.verbs.look_inside = advenjure.verbs.make_item_handler.call(null,advenjure.gettext.core._.call(null,"look inside"),new cljs.core.Keyword(null,"look-in","look-in",97132698),(function (game_state,item){
var temp__4655__auto__ = cljs.core.get_in.call(null,item,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"look-in","look-in",97132698),new cljs.core.Keyword(null,"say","say",504378016)], null));
if(cljs.core.truth_(temp__4655__auto__)){
var custom_say = temp__4655__auto__;
return advenjure.utils.say.call(null,custom_say);
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(item))){
return advenjure.utils.say.call(null,advenjure.items.describe_container.call(null,item));
} else {
return advenjure.utils.say.call(null,advenjure.gettext.core._.call(null,"I couldn't look inside a %s.",advenjure.items.iname.call(null,item)));
}
}
}),new cljs.core.Keyword(null,"kw-required","kw-required",-916449094),false);
advenjure.verbs.take_ = advenjure.verbs.make_item_handler.call(null,advenjure.gettext.core._.call(null,"take"),new cljs.core.Keyword(null,"take","take",-768884900),(function (game_state,item){

if(cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"inventory","inventory",860201871).cljs$core$IFn$_invoke$arity$1(game_state),item)){
return advenjure.utils.say.call(null,advenjure.gettext.core._.call(null,"I already had that."));
} else {
var new_state = advenjure.utils.remove_item.call(null,game_state,item);
var new_inventory = cljs.core.conj.call(null,new cljs.core.Keyword(null,"inventory","inventory",860201871).cljs$core$IFn$_invoke$arity$1(new_state),item);
advenjure.utils.say.call(null,cljs.core.get_in.call(null,item,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"take","take",-768884900),new cljs.core.Keyword(null,"say","say",504378016)], null),advenjure.gettext.core._.call(null,"Taken.")));

return cljs.core.assoc.call(null,new_state,new cljs.core.Keyword(null,"inventory","inventory",860201871),new_inventory);
}
}));
/**
 * Go through every item in the room that defines a value for :take, and attempt
 *   to take it.
 */
advenjure.verbs.take_all = (function advenjure$verbs$take_all(game_state){
var items = advenjure.items.all_items.call(null,new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(advenjure.utils.current_room.call(null,game_state)));
var takeable = cljs.core.remove.call(null,cljs.core.comp.call(null,cljs.core.nil_QMARK_,new cljs.core.Keyword(null,"take","take",-768884900)),items);
var item_names = cljs.core.map.call(null,((function (items,takeable){
return (function (p1__35934_SHARP_){
return cljs.core.first.call(null,new cljs.core.Keyword(null,"names","names",-1943074658).cljs$core$IFn$_invoke$arity$1(p1__35934_SHARP_));
});})(items,takeable))
,takeable);
if(cljs.core.empty_QMARK_.call(null,item_names)){
return advenjure.utils.say.call(null,advenjure.gettext.core._.call(null,"I saw nothing worth taking."));
} else {
return cljs.core.reduce.call(null,((function (items,takeable,item_names){
return (function (gs,iname){
var c__24323__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24323__auto__,items,takeable,item_names){
return (function (){
var f__24324__auto__ = (function (){var switch__24046__auto__ = ((function (c__24323__auto__,items,takeable,item_names){
return (function (state_36316){
var state_val_36317 = (state_36316[(1)]);
if((state_val_36317 === (62))){
var inst_36283 = (state_36316[(7)]);
var state_36316__$1 = state_36316;
var statearr_36318_36454 = state_36316__$1;
(statearr_36318_36454[(2)] = inst_36283);

(statearr_36318_36454[(1)] = (63));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36317 === (7))){
var state_36316__$1 = state_36316;
var statearr_36319_36455 = state_36316__$1;
(statearr_36319_36455[(2)] = true);

(statearr_36319_36455[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36317 === (59))){
var state_36316__$1 = state_36316;
var statearr_36320_36457 = state_36316__$1;
(statearr_36320_36457[(2)] = false);

(statearr_36320_36457[(1)] = (60));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36317 === (20))){
var inst_36214 = (state_36316[(8)]);
var inst_36234 = cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,inst_36214);
var state_36316__$1 = state_36316;
var statearr_36321_36459 = state_36316__$1;
(statearr_36321_36459[(2)] = inst_36234);

(statearr_36321_36459[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36317 === (58))){
var inst_36283 = (state_36316[(7)]);
var inst_36296 = cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,inst_36283);
var state_36316__$1 = state_36316;
var statearr_36322_36464 = state_36316__$1;
(statearr_36322_36464[(2)] = inst_36296);

(statearr_36322_36464[(1)] = (60));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36317 === (60))){
var inst_36299 = (state_36316[(2)]);
var state_36316__$1 = state_36316;
var statearr_36323_36465 = state_36316__$1;
(statearr_36323_36465[(2)] = inst_36299);

(statearr_36323_36465[(1)] = (57));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36317 === (27))){
var inst_36230 = (state_36316[(2)]);
var state_36316__$1 = state_36316;
var statearr_36324_36470 = state_36316__$1;
(statearr_36324_36470[(2)] = inst_36230);

(statearr_36324_36470[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36317 === (1))){
var inst_36180 = gs;
var state_36316__$1 = (function (){var statearr_36325 = state_36316;
(statearr_36325[(9)] = inst_36180);

return statearr_36325;
})();
var statearr_36326_36471 = state_36316__$1;
(statearr_36326_36471[(2)] = null);

(statearr_36326_36471[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36317 === (24))){
var inst_36232 = (state_36316[(2)]);
var state_36316__$1 = state_36316;
var statearr_36327_36472 = state_36316__$1;
(statearr_36327_36472[(2)] = inst_36232);

(statearr_36327_36472[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36317 === (55))){
var state_36316__$1 = state_36316;
var statearr_36328_36473 = state_36316__$1;
(statearr_36328_36473[(2)] = true);

(statearr_36328_36473[(1)] = (57));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36317 === (39))){
var inst_36265 = (state_36316[(2)]);
var state_36316__$1 = state_36316;
var statearr_36329_36475 = state_36316__$1;
(statearr_36329_36475[(2)] = inst_36265);

(statearr_36329_36475[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36317 === (46))){
var inst_36272 = (state_36316[(2)]);
var inst_36247 = inst_36272;
var state_36316__$1 = (function (){var statearr_36330 = state_36316;
(statearr_36330[(10)] = inst_36247);

return statearr_36330;
})();
var statearr_36331_36477 = state_36316__$1;
(statearr_36331_36477[(2)] = null);

(statearr_36331_36477[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36317 === (4))){
var inst_36180 = (state_36316[(9)]);
var inst_36186 = inst_36180.cljs$core$async$impl$protocols$ReadPort$;
var inst_36187 = (false) || (inst_36186);
var state_36316__$1 = state_36316;
if(cljs.core.truth_(inst_36187)){
var statearr_36332_36479 = state_36316__$1;
(statearr_36332_36479[(1)] = (7));

} else {
var statearr_36333_36480 = state_36316__$1;
(statearr_36333_36480[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36317 === (54))){
var inst_36305 = (state_36316[(2)]);
var state_36316__$1 = state_36316;
if(cljs.core.truth_(inst_36305)){
var statearr_36334_36485 = state_36316__$1;
(statearr_36334_36485[(1)] = (61));

} else {
var statearr_36335_36486 = state_36316__$1;
(statearr_36335_36486[(1)] = (62));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36317 === (15))){
var inst_36209 = (state_36316[(2)]);
var state_36316__$1 = state_36316;
var statearr_36336_36491 = state_36316__$1;
(statearr_36336_36491[(2)] = inst_36209);

(statearr_36336_36491[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36317 === (48))){
var inst_36211 = (state_36316[(11)]);
var state_36316__$1 = state_36316;
var statearr_36337_36492 = state_36316__$1;
(statearr_36337_36492[(2)] = inst_36211);

(statearr_36337_36492[(1)] = (49));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36317 === (50))){
var inst_36283 = (state_36316[(7)]);
var inst_36286 = (inst_36283 == null);
var inst_36287 = cljs.core.not.call(null,inst_36286);
var state_36316__$1 = state_36316;
if(inst_36287){
var statearr_36338_36495 = state_36316__$1;
(statearr_36338_36495[(1)] = (52));

} else {
var statearr_36339_36496 = state_36316__$1;
(statearr_36339_36496[(1)] = (53));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36317 === (21))){
var inst_36236 = (state_36316[(2)]);
var state_36316__$1 = state_36316;
if(cljs.core.truth_(inst_36236)){
var statearr_36340_36498 = state_36316__$1;
(statearr_36340_36498[(1)] = (28));

} else {
var statearr_36341_36499 = state_36316__$1;
(statearr_36341_36499[(1)] = (29));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36317 === (31))){
var inst_36239 = (state_36316[(2)]);
var inst_36214 = inst_36239;
var state_36316__$1 = (function (){var statearr_36342 = state_36316;
(statearr_36342[(8)] = inst_36214);

return statearr_36342;
})();
var statearr_36343_36504 = state_36316__$1;
(statearr_36343_36504[(2)] = null);

(statearr_36343_36504[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36317 === (32))){
var inst_36247 = (state_36316[(10)]);
var inst_36250 = (inst_36247 == null);
var inst_36251 = cljs.core.not.call(null,inst_36250);
var state_36316__$1 = state_36316;
if(inst_36251){
var statearr_36345_36505 = state_36316__$1;
(statearr_36345_36505[(1)] = (34));

} else {
var statearr_36346_36506 = state_36316__$1;
(statearr_36346_36506[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36317 === (40))){
var inst_36247 = (state_36316[(10)]);
var inst_36260 = cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,inst_36247);
var state_36316__$1 = state_36316;
var statearr_36348_36507 = state_36316__$1;
(statearr_36348_36507[(2)] = inst_36260);

(statearr_36348_36507[(1)] = (42));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36317 === (56))){
var inst_36283 = (state_36316[(7)]);
var inst_36293 = inst_36283.cljs$lang$protocol_mask$partition$;
var inst_36294 = (!inst_36293);
var state_36316__$1 = state_36316;
if(cljs.core.truth_(inst_36294)){
var statearr_36349_36508 = state_36316__$1;
(statearr_36349_36508[(1)] = (58));

} else {
var statearr_36350_36509 = state_36316__$1;
(statearr_36350_36509[(1)] = (59));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36317 === (33))){
var inst_36278 = (state_36316[(12)]);
var inst_36278__$1 = (state_36316[(2)]);
var state_36316__$1 = (function (){var statearr_36351 = state_36316;
(statearr_36351[(12)] = inst_36278__$1);

return statearr_36351;
})();
if(cljs.core.truth_(inst_36278__$1)){
var statearr_36353_36510 = state_36316__$1;
(statearr_36353_36510[(1)] = (47));

} else {
var statearr_36355_36511 = state_36316__$1;
(statearr_36355_36511[(1)] = (48));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36317 === (13))){
var inst_36180 = (state_36316[(9)]);
var state_36316__$1 = state_36316;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36316__$1,(16),inst_36180);
} else {
if((state_val_36317 === (22))){
var state_36316__$1 = state_36316;
var statearr_36358_36512 = state_36316__$1;
(statearr_36358_36512[(2)] = true);

(statearr_36358_36512[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36317 === (36))){
var inst_36269 = (state_36316[(2)]);
var state_36316__$1 = state_36316;
if(cljs.core.truth_(inst_36269)){
var statearr_36360_36513 = state_36316__$1;
(statearr_36360_36513[(1)] = (43));

} else {
var statearr_36361_36514 = state_36316__$1;
(statearr_36361_36514[(1)] = (44));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36317 === (41))){
var state_36316__$1 = state_36316;
var statearr_36363_36515 = state_36316__$1;
(statearr_36363_36515[(2)] = false);

(statearr_36363_36515[(1)] = (42));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36317 === (43))){
var inst_36247 = (state_36316[(10)]);
var state_36316__$1 = state_36316;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36316__$1,(46),inst_36247);
} else {
if((state_val_36317 === (61))){
var inst_36283 = (state_36316[(7)]);
var state_36316__$1 = state_36316;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36316__$1,(64),inst_36283);
} else {
if((state_val_36317 === (29))){
var inst_36214 = (state_36316[(8)]);
var state_36316__$1 = state_36316;
var statearr_36364_36516 = state_36316__$1;
(statearr_36364_36516[(2)] = inst_36214);

(statearr_36364_36516[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36317 === (44))){
var inst_36247 = (state_36316[(10)]);
var state_36316__$1 = state_36316;
var statearr_36366_36517 = state_36316__$1;
(statearr_36366_36517[(2)] = inst_36247);

(statearr_36366_36517[(1)] = (45));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36317 === (6))){
var inst_36202 = (state_36316[(2)]);
var state_36316__$1 = state_36316;
if(cljs.core.truth_(inst_36202)){
var statearr_36367_36518 = state_36316__$1;
(statearr_36367_36518[(1)] = (13));

} else {
var statearr_36368_36519 = state_36316__$1;
(statearr_36368_36519[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36317 === (28))){
var inst_36214 = (state_36316[(8)]);
var state_36316__$1 = state_36316;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36316__$1,(31),inst_36214);
} else {
if((state_val_36317 === (64))){
var inst_36308 = (state_36316[(2)]);
var inst_36283 = inst_36308;
var state_36316__$1 = (function (){var statearr_36372 = state_36316;
(statearr_36372[(7)] = inst_36283);

return statearr_36372;
})();
var statearr_36373_36523 = state_36316__$1;
(statearr_36373_36523[(2)] = null);

(statearr_36373_36523[(1)] = (50));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36317 === (51))){
var inst_36314 = (state_36316[(2)]);
var state_36316__$1 = state_36316;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36316__$1,inst_36314);
} else {
if((state_val_36317 === (25))){
var inst_36214 = (state_36316[(8)]);
var inst_36227 = cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,inst_36214);
var state_36316__$1 = state_36316;
var statearr_36374_36525 = state_36316__$1;
(statearr_36374_36525[(2)] = inst_36227);

(statearr_36374_36525[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36317 === (34))){
var inst_36247 = (state_36316[(10)]);
var inst_36253 = inst_36247.cljs$core$async$impl$protocols$ReadPort$;
var inst_36254 = (false) || (inst_36253);
var state_36316__$1 = state_36316;
if(cljs.core.truth_(inst_36254)){
var statearr_36375_36527 = state_36316__$1;
(statearr_36375_36527[(1)] = (37));

} else {
var statearr_36379_36528 = state_36316__$1;
(statearr_36379_36528[(1)] = (38));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36317 === (17))){
var inst_36214 = (state_36316[(8)]);
var inst_36217 = (inst_36214 == null);
var inst_36218 = cljs.core.not.call(null,inst_36217);
var state_36316__$1 = state_36316;
if(inst_36218){
var statearr_36380_36529 = state_36316__$1;
(statearr_36380_36529[(1)] = (19));

} else {
var statearr_36381_36530 = state_36316__$1;
(statearr_36381_36530[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36317 === (3))){
var inst_36211 = (state_36316[(2)]);
var inst_36212 = [cljs.core.str(iname),cljs.core.str(": ")].join('');
var inst_36213 = advenjure.utils.say_inline.call(null,inst_36212);
var inst_36214 = inst_36213;
var state_36316__$1 = (function (){var statearr_36382 = state_36316;
(statearr_36382[(11)] = inst_36211);

(statearr_36382[(8)] = inst_36214);

return statearr_36382;
})();
var statearr_36383_36531 = state_36316__$1;
(statearr_36383_36531[(2)] = null);

(statearr_36383_36531[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36317 === (12))){
var inst_36196 = (state_36316[(2)]);
var state_36316__$1 = state_36316;
var statearr_36384_36533 = state_36316__$1;
(statearr_36384_36533[(2)] = inst_36196);

(statearr_36384_36533[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36317 === (2))){
var inst_36180 = (state_36316[(9)]);
var inst_36183 = (inst_36180 == null);
var inst_36184 = cljs.core.not.call(null,inst_36183);
var state_36316__$1 = state_36316;
if(inst_36184){
var statearr_36385_36534 = state_36316__$1;
(statearr_36385_36534[(1)] = (4));

} else {
var statearr_36387_36535 = state_36316__$1;
(statearr_36387_36535[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36317 === (23))){
var inst_36214 = (state_36316[(8)]);
var inst_36224 = inst_36214.cljs$lang$protocol_mask$partition$;
var inst_36225 = (!inst_36224);
var state_36316__$1 = state_36316;
if(cljs.core.truth_(inst_36225)){
var statearr_36388_36536 = state_36316__$1;
(statearr_36388_36536[(1)] = (25));

} else {
var statearr_36389_36537 = state_36316__$1;
(statearr_36389_36537[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36317 === (47))){
var inst_36278 = (state_36316[(12)]);
var state_36316__$1 = state_36316;
var statearr_36391_36538 = state_36316__$1;
(statearr_36391_36538[(2)] = inst_36278);

(statearr_36391_36538[(1)] = (49));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36317 === (35))){
var inst_36247 = (state_36316[(10)]);
var inst_36267 = cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,inst_36247);
var state_36316__$1 = state_36316;
var statearr_36392_36539 = state_36316__$1;
(statearr_36392_36539[(2)] = inst_36267);

(statearr_36392_36539[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36317 === (19))){
var inst_36214 = (state_36316[(8)]);
var inst_36220 = inst_36214.cljs$core$async$impl$protocols$ReadPort$;
var inst_36221 = (false) || (inst_36220);
var state_36316__$1 = state_36316;
if(cljs.core.truth_(inst_36221)){
var statearr_36394_36541 = state_36316__$1;
(statearr_36394_36541[(1)] = (22));

} else {
var statearr_36395_36542 = state_36316__$1;
(statearr_36395_36542[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36317 === (57))){
var inst_36301 = (state_36316[(2)]);
var state_36316__$1 = state_36316;
var statearr_36397_36543 = state_36316__$1;
(statearr_36397_36543[(2)] = inst_36301);

(statearr_36397_36543[(1)] = (54));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36317 === (11))){
var state_36316__$1 = state_36316;
var statearr_36401_36544 = state_36316__$1;
(statearr_36401_36544[(2)] = false);

(statearr_36401_36544[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36317 === (9))){
var inst_36198 = (state_36316[(2)]);
var state_36316__$1 = state_36316;
var statearr_36402_36545 = state_36316__$1;
(statearr_36402_36545[(2)] = inst_36198);

(statearr_36402_36545[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36317 === (5))){
var inst_36180 = (state_36316[(9)]);
var inst_36200 = cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,inst_36180);
var state_36316__$1 = state_36316;
var statearr_36403_36548 = state_36316__$1;
(statearr_36403_36548[(2)] = inst_36200);

(statearr_36403_36548[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36317 === (14))){
var inst_36180 = (state_36316[(9)]);
var state_36316__$1 = state_36316;
var statearr_36404_36549 = state_36316__$1;
(statearr_36404_36549[(2)] = inst_36180);

(statearr_36404_36549[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36317 === (45))){
var inst_36276 = (state_36316[(2)]);
var state_36316__$1 = state_36316;
var statearr_36405_36556 = state_36316__$1;
(statearr_36405_36556[(2)] = inst_36276);

(statearr_36405_36556[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36317 === (53))){
var inst_36283 = (state_36316[(7)]);
var inst_36303 = cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,inst_36283);
var state_36316__$1 = state_36316;
var statearr_36409_36563 = state_36316__$1;
(statearr_36409_36563[(2)] = inst_36303);

(statearr_36409_36563[(1)] = (54));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36317 === (26))){
var state_36316__$1 = state_36316;
var statearr_36417_36564 = state_36316__$1;
(statearr_36417_36564[(2)] = false);

(statearr_36417_36564[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36317 === (16))){
var inst_36205 = (state_36316[(2)]);
var inst_36180 = inst_36205;
var state_36316__$1 = (function (){var statearr_36421 = state_36316;
(statearr_36421[(9)] = inst_36180);

return statearr_36421;
})();
var statearr_36422_36565 = state_36316__$1;
(statearr_36422_36565[(2)] = null);

(statearr_36422_36565[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36317 === (38))){
var inst_36247 = (state_36316[(10)]);
var inst_36257 = inst_36247.cljs$lang$protocol_mask$partition$;
var inst_36258 = (!inst_36257);
var state_36316__$1 = state_36316;
if(cljs.core.truth_(inst_36258)){
var statearr_36423_36566 = state_36316__$1;
(statearr_36423_36566[(1)] = (40));

} else {
var statearr_36424_36567 = state_36316__$1;
(statearr_36424_36567[(1)] = (41));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36317 === (30))){
var inst_36243 = (state_36316[(2)]);
var state_36316__$1 = state_36316;
var statearr_36425_36568 = state_36316__$1;
(statearr_36425_36568[(2)] = inst_36243);

(statearr_36425_36568[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36317 === (10))){
var inst_36180 = (state_36316[(9)]);
var inst_36193 = cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,inst_36180);
var state_36316__$1 = state_36316;
var statearr_36427_36569 = state_36316__$1;
(statearr_36427_36569[(2)] = inst_36193);

(statearr_36427_36569[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36317 === (18))){
var inst_36211 = (state_36316[(11)]);
var inst_36245 = (state_36316[(2)]);
var inst_36246 = advenjure.verbs.take_.call(null,inst_36211,iname);
var inst_36247 = inst_36246;
var state_36316__$1 = (function (){var statearr_36428 = state_36316;
(statearr_36428[(10)] = inst_36247);

(statearr_36428[(13)] = inst_36245);

return statearr_36428;
})();
var statearr_36430_36570 = state_36316__$1;
(statearr_36430_36570[(2)] = null);

(statearr_36430_36570[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36317 === (52))){
var inst_36283 = (state_36316[(7)]);
var inst_36289 = inst_36283.cljs$core$async$impl$protocols$ReadPort$;
var inst_36290 = (false) || (inst_36289);
var state_36316__$1 = state_36316;
if(cljs.core.truth_(inst_36290)){
var statearr_36431_36572 = state_36316__$1;
(statearr_36431_36572[(1)] = (55));

} else {
var statearr_36432_36573 = state_36316__$1;
(statearr_36432_36573[(1)] = (56));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36317 === (42))){
var inst_36263 = (state_36316[(2)]);
var state_36316__$1 = state_36316;
var statearr_36433_36574 = state_36316__$1;
(statearr_36433_36574[(2)] = inst_36263);

(statearr_36433_36574[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36317 === (37))){
var state_36316__$1 = state_36316;
var statearr_36434_36575 = state_36316__$1;
(statearr_36434_36575[(2)] = true);

(statearr_36434_36575[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36317 === (63))){
var inst_36312 = (state_36316[(2)]);
var state_36316__$1 = state_36316;
var statearr_36435_36576 = state_36316__$1;
(statearr_36435_36576[(2)] = inst_36312);

(statearr_36435_36576[(1)] = (51));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36317 === (8))){
var inst_36180 = (state_36316[(9)]);
var inst_36190 = inst_36180.cljs$lang$protocol_mask$partition$;
var inst_36191 = (!inst_36190);
var state_36316__$1 = state_36316;
if(cljs.core.truth_(inst_36191)){
var statearr_36436_36577 = state_36316__$1;
(statearr_36436_36577[(1)] = (10));

} else {
var statearr_36437_36578 = state_36316__$1;
(statearr_36437_36578[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36317 === (49))){
var inst_36282 = (state_36316[(2)]);
var inst_36283 = inst_36282;
var state_36316__$1 = (function (){var statearr_36438 = state_36316;
(statearr_36438[(7)] = inst_36283);

return statearr_36438;
})();
var statearr_36439_36579 = state_36316__$1;
(statearr_36439_36579[(2)] = null);

(statearr_36439_36579[(1)] = (50));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__24323__auto__,items,takeable,item_names))
;
return ((function (switch__24046__auto__,c__24323__auto__,items,takeable,item_names){
return (function() {
var advenjure$verbs$take_all_$_state_machine__24047__auto__ = null;
var advenjure$verbs$take_all_$_state_machine__24047__auto____0 = (function (){
var statearr_36446 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36446[(0)] = advenjure$verbs$take_all_$_state_machine__24047__auto__);

(statearr_36446[(1)] = (1));

return statearr_36446;
});
var advenjure$verbs$take_all_$_state_machine__24047__auto____1 = (function (state_36316){
while(true){
var ret_value__24048__auto__ = (function (){try{while(true){
var result__24049__auto__ = switch__24046__auto__.call(null,state_36316);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24049__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24049__auto__;
}
break;
}
}catch (e36447){if((e36447 instanceof Object)){
var ex__24050__auto__ = e36447;
var statearr_36448_36580 = state_36316;
(statearr_36448_36580[(5)] = ex__24050__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36316);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36447;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36585 = state_36316;
state_36316 = G__36585;
continue;
} else {
return ret_value__24048__auto__;
}
break;
}
});
advenjure$verbs$take_all_$_state_machine__24047__auto__ = function(state_36316){
switch(arguments.length){
case 0:
return advenjure$verbs$take_all_$_state_machine__24047__auto____0.call(this);
case 1:
return advenjure$verbs$take_all_$_state_machine__24047__auto____1.call(this,state_36316);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
advenjure$verbs$take_all_$_state_machine__24047__auto__.cljs$core$IFn$_invoke$arity$0 = advenjure$verbs$take_all_$_state_machine__24047__auto____0;
advenjure$verbs$take_all_$_state_machine__24047__auto__.cljs$core$IFn$_invoke$arity$1 = advenjure$verbs$take_all_$_state_machine__24047__auto____1;
return advenjure$verbs$take_all_$_state_machine__24047__auto__;
})()
;})(switch__24046__auto__,c__24323__auto__,items,takeable,item_names))
})();
var state__24325__auto__ = (function (){var statearr_36449 = f__24324__auto__.call(null);
(statearr_36449[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24323__auto__);

return statearr_36449;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24325__auto__);
});})(c__24323__auto__,items,takeable,item_names))
);

return c__24323__auto__;
});})(items,takeable,item_names))
,game_state,item_names);
}
});
advenjure.verbs.open = advenjure.verbs.make_item_handler.call(null,advenjure.gettext.core._.call(null,"open"),new cljs.core.Keyword(null,"open","open",-1763596448),(function (game_state,item){
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"closed","closed",-919675359).cljs$core$IFn$_invoke$arity$1(item))){
return advenjure.utils.say.call(null,advenjure.gettext.core.p_.call(null,item,"It was already open."));
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"locked","locked",-1658763820).cljs$core$IFn$_invoke$arity$1(item))){
return advenjure.utils.say.call(null,advenjure.gettext.core.p_.call(null,item,"It was locked."));
} else {
var open_item = cljs.core.assoc.call(null,item,new cljs.core.Keyword(null,"closed","closed",-919675359),false);
var custom_say = cljs.core.get_in.call(null,item,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"open","open",-1763596448),new cljs.core.Keyword(null,"say","say",504378016)], null));
if(cljs.core.truth_(custom_say)){
advenjure.utils.say.call(null,custom_say);
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(open_item))){
advenjure.utils.say.call(null,advenjure.items.describe_container.call(null,open_item));
} else {
advenjure.utils.say.call(null,advenjure.gettext.core._.call(null,"Opened."));

}
}

return advenjure.utils.replace_item.call(null,game_state,item,open_item);

}
}
}));
advenjure.verbs.close = advenjure.verbs.make_item_handler.call(null,advenjure.gettext.core._.call(null,"close"),new cljs.core.Keyword(null,"close","close",1835149582),(function (game_state,item){
if(cljs.core.truth_(new cljs.core.Keyword(null,"closed","closed",-919675359).cljs$core$IFn$_invoke$arity$1(item))){
return advenjure.utils.say.call(null,advenjure.gettext.core.p_.call(null,item,"It was already closed."));
} else {
var closed_item = cljs.core.assoc.call(null,item,new cljs.core.Keyword(null,"closed","closed",-919675359),true);
advenjure.utils.say.call(null,cljs.core.get_in.call(null,item,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"close","close",1835149582),new cljs.core.Keyword(null,"say","say",504378016)], null),advenjure.gettext.core._.call(null,"Closed.")));

return advenjure.utils.replace_item.call(null,game_state,item,closed_item);
}
}));
advenjure.verbs.unlock = advenjure.verbs.make_compound_item_handler.call(null,advenjure.gettext.core._.call(null,"unlock"),new cljs.core.Keyword(null,"unlock","unlock",560395192),(function (game_state,locked,key_item){
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"locked","locked",-1658763820).cljs$core$IFn$_invoke$arity$1(locked))){
return advenjure.utils.say.call(null,advenjure.gettext.core.p_.call(null,locked,"It wasn't locked."));
} else {
if(cljs.core.not_EQ_.call(null,locked,new cljs.core.Keyword(null,"unlocks","unlocks",-448720775).cljs$core$IFn$_invoke$arity$1(key_item))){
return advenjure.utils.say.call(null,advenjure.gettext.core._.call(null,"That didn't work."));
} else {
var unlocked = cljs.core.assoc.call(null,locked,new cljs.core.Keyword(null,"locked","locked",-1658763820),false);
advenjure.utils.say.call(null,cljs.core.get_in.call(null,locked,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unlock","unlock",560395192),new cljs.core.Keyword(null,"say","say",504378016)], null),advenjure.gettext.core._.call(null,"Unlocked.")));

return advenjure.utils.replace_item.call(null,game_state,locked,unlocked);

}
}
}));
advenjure.verbs.open_with = advenjure.verbs.make_compound_item_handler.call(null,advenjure.gettext.core._.call(null,"open"),new cljs.core.Keyword(null,"open-with","open-with",1966309885),(function (game_state,closed,key_item){

if(cljs.core.not.call(null,new cljs.core.Keyword(null,"closed","closed",-919675359).cljs$core$IFn$_invoke$arity$1(closed))){
return advenjure.utils.say.call(null,advenjure.gettext.core.p_.call(null,closed,"It was already open."));
} else {
if(cljs.core.truth_((function (){var or__20455__auto__ = (function (){var and__20443__auto__ = new cljs.core.Keyword(null,"locked","locked",-1658763820).cljs$core$IFn$_invoke$arity$1(closed);
if(cljs.core.truth_(and__20443__auto__)){
return cljs.core._EQ_.call(null,closed,new cljs.core.Keyword(null,"unlocks","unlocks",-448720775).cljs$core$IFn$_invoke$arity$1(key_item));
} else {
return and__20443__auto__;
}
})();
if(cljs.core.truth_(or__20455__auto__)){
return or__20455__auto__;
} else {
return cljs.core._EQ_.call(null,closed,new cljs.core.Keyword(null,"opens","opens",2138874639).cljs$core$IFn$_invoke$arity$1(key_item));
}
})())){
var opened = cljs.core.merge.call(null,closed,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"locked","locked",-1658763820),false,new cljs.core.Keyword(null,"closed","closed",-919675359),false], null));
advenjure.utils.say.call(null,cljs.core.get_in.call(null,closed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"open-with","open-with",1966309885),new cljs.core.Keyword(null,"say","say",504378016)], null),advenjure.gettext.core._.call(null,"Opened.")));

return advenjure.utils.replace_item.call(null,game_state,closed,opened);
} else {
return advenjure.utils.say.call(null,advenjure.gettext.core._.call(null,"That didn't work."));

}
}
}),new cljs.core.Keyword(null,"kw-required","kw-required",-916449094),false);
advenjure.verbs.talk = advenjure.verbs.make_item_handler.call(null,advenjure.gettext.core._.call(null,"talk to"),new cljs.core.Keyword(null,"talk","talk",309472888),(function (game_state,item){
var dialog = advenjure.eval.eval.call(null,new cljs.core.Keyword(null,"dialog","dialog",1415150135).cljs$core$IFn$_invoke$arity$1(item));
return dialog.call(null,game_state);
}));
advenjure.verbs.make_move_item_handler = (function advenjure$verbs$make_move_item_handler(verb_name,verb_kw){
return advenjure.verbs.make_item_handler.call(null,verb_name,verb_kw,(function (game_state,item){
return advenjure.change_rooms.change_rooms.call(null,game_state,advenjure.hooks.eval_precondition.call(null,verb_kw.call(null,item)));
}));
});
advenjure.verbs.climb = advenjure.verbs.make_move_item_handler.call(null,advenjure.gettext.core._.call(null,"climb"),new cljs.core.Keyword(null,"climb","climb",-1345384598));
advenjure.verbs.climb_up = advenjure.verbs.make_move_item_handler.call(null,advenjure.gettext.core._.call(null,"climb up"),new cljs.core.Keyword(null,"climb-up","climb-up",-91800383));
advenjure.verbs.climb_down = advenjure.verbs.make_move_item_handler.call(null,advenjure.gettext.core._.call(null,"climb down"),new cljs.core.Keyword(null,"climb-down","climb-down",1994845284));
advenjure.verbs.enter = advenjure.verbs.make_move_item_handler.call(null,advenjure.gettext.core._.call(null,"enter"),new cljs.core.Keyword(null,"enter","enter",1792452624));
advenjure.verbs.read_ = advenjure.verbs.make_item_handler.call(null,advenjure.gettext.core._.call(null,"read"),new cljs.core.Keyword(null,"read","read",1140058661));
advenjure.verbs.use_ = advenjure.verbs.make_item_handler.call(null,advenjure.gettext.core._.call(null,"use"),new cljs.core.Keyword(null,"use","use",-1846382424));
advenjure.verbs.use_with = advenjure.verbs.make_compound_item_handler.call(null,advenjure.gettext.core._.call(null,"use"),new cljs.core.Keyword(null,"use-with","use-with",-716477584));
advenjure.verbs.make_say_verb = (function advenjure$verbs$make_say_verb(speech){
return (function (gs){
return advenjure.utils.say.call(null,speech);
});
});
advenjure.verbs.stand = advenjure.verbs.make_say_verb.call(null,advenjure.gettext.core._.call(null,"I was standing up already"));
advenjure.verbs.help = advenjure.verbs.make_say_verb.call(null,clojure.string.join.call(null,"\n    ",new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [advenjure.gettext.core._.call(null,"You're playing a text adventure game. You control the character by entering commands. Some available commands are:"),advenjure.gettext.core._.call(null,"GO <direction>: move in the given compass direction. For example: \"GO NORTH\". \"NORTH\" and \"N\" will work too."),advenjure.gettext.core._.call(null,"TAKE <item>: add an item to your inventory."),advenjure.gettext.core._.call(null,"INVENTORY: list your inventory contents. \"I\" will work too."),advenjure.gettext.core._.call(null,"LOOK: look around."),advenjure.gettext.core._.call(null,"LOOK AT <item>: look at some specific item."),advenjure.gettext.core._.call(null,"LOOK IN <item>: look inside some container item."),advenjure.gettext.core._.call(null,"TALK TO <character>: start a conversation with another character."),advenjure.gettext.core._.call(null,"UNLOCK <item> WITH <item>: unlock some item using another one. For example: UNLOCK door WITH key."),advenjure.gettext.core._.call(null,"OPEN, CLOSE, READ, TURN ON, PUT IN, EAT, DRINK, KILL, etc. may work on some objects, just try."),advenjure.gettext.core._.call(null,"SAVE: save your current progress."),advenjure.gettext.core._.call(null,"RESTORE: restore a previously saved game."),advenjure.gettext.core._.call(null,"EXIT: close the game."),advenjure.gettext.core._.call(null,"You can use the TAB key to get completion suggestions for a command and the UP/DOWN arrows to search the command history.")], null)));
advenjure.verbs.move = advenjure.verbs.make_item_handler.call(null,"move",new cljs.core.Keyword(null,"move","move",-2110884309));
advenjure.verbs.pull = advenjure.verbs.make_item_handler.call(null,"pull",new cljs.core.Keyword(null,"pull","pull",-860544805));
advenjure.verbs.push = advenjure.verbs.make_item_handler.call(null,"push",new cljs.core.Keyword(null,"push","push",799791267));

//# sourceMappingURL=verbs.js.map?rel=1605080728456