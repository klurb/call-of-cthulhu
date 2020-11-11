// Compiled by ClojureScript 1.9.229 {}
goog.provide('advenjure.game');
goog.require('cljs.core');
goog.require('advenjure.rooms');
goog.require('advenjure.ui.output');
goog.require('advenjure.ui.input');
goog.require('advenjure.verb_map');
goog.require('advenjure.hooks');
goog.require('advenjure.gettext.core');
goog.require('advenjure.utils');
goog.require('advenjure.change_rooms');
advenjure.game.default_prompt = (function advenjure$game$default_prompt(gs){
return [cljs.core.str("\n@"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(advenjure.utils.current_room.call(null,gs))),cljs.core.str(" ["),cljs.core.str(new cljs.core.Keyword(null,"moves","moves",927465255).cljs$core$IFn$_invoke$arity$1(gs)),cljs.core.str("] > ")].join('');
});
advenjure.game.hooks = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"after-item-handler","after-item-handler",258632585),null,new cljs.core.Keyword(null,"after-handler","after-handler",216363306),null,new cljs.core.Keyword(null,"before-change-room","before-change-room",-906852436),null,new cljs.core.Keyword(null,"after-change-room","after-change-room",-84875115),null,new cljs.core.Keyword(null,"before-item-handler","before-item-handler",1515326363),null,new cljs.core.Keyword(null,"before-handler","before-handler",-1763527428),null], null), null);
/**
 * Make a new game state based on a room map and an optional initial inventory set.
 */
advenjure.game.make = (function advenjure$game$make(var_args){
var args36931 = [];
var len__21530__auto___36944 = arguments.length;
var i__21531__auto___36945 = (0);
while(true){
if((i__21531__auto___36945 < len__21530__auto___36944)){
args36931.push((arguments[i__21531__auto___36945]));

var G__36946 = (i__21531__auto___36945 + (1));
i__21531__auto___36945 = G__36946;
continue;
} else {
}
break;
}

var G__36941 = args36931.length;
switch (G__36941) {
case 2:
return advenjure.game.make.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return advenjure.game.make.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36931.length)].join('')));

}
});

advenjure.game.make.cljs$core$IFn$_invoke$arity$2 = (function (room_map,start_room){
return advenjure.game.make.call(null,room_map,start_room,cljs.core.PersistentHashSet.EMPTY);
});

advenjure.game.make.cljs$core$IFn$_invoke$arity$3 = (function (room_map,start_room,inventory){
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"room-map","room-map",978449264),room_map,new cljs.core.Keyword(null,"current-room","current-room",491649183),start_room,new cljs.core.Keyword(null,"inventory","inventory",860201871),inventory,new cljs.core.Keyword(null,"events","events",1792552201),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"executed-dialogs","executed-dialogs",795280986),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"moves","moves",927465255),(0),new cljs.core.Keyword(null,"configuration","configuration",1431842520),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"start-message","start-message",-630575289),"",new cljs.core.Keyword(null,"end-message","end-message",-2112830994),"\nThe End.",new cljs.core.Keyword(null,"verb-map","verb-map",1285414746),advenjure.verb_map.default_map,new cljs.core.Keyword(null,"prompt","prompt",-78109487),advenjure.game.default_prompt,new cljs.core.Keyword(null,"hooks","hooks",-413590103),cljs.core.zipmap.call(null,advenjure.game.hooks,cljs.core.repeat.call(null,cljs.core.PersistentVector.EMPTY))], null)], null);
});

advenjure.game.make.cljs$lang$maxFixedArity = 3;

/**
 * Merges the given plugin spec into the given game configuration.
 */
advenjure.game.use_plugin = (function advenjure$game$use_plugin(gs,plugin_spec){
var base_config = new cljs.core.Keyword(null,"configuration","configuration",1431842520).cljs$core$IFn$_invoke$arity$1(gs);
var merged_hooks = cljs.core.merge_with.call(null,cljs.core.conj,new cljs.core.Keyword(null,"hooks","hooks",-413590103).cljs$core$IFn$_invoke$arity$1(base_config),new cljs.core.Keyword(null,"hooks","hooks",-413590103).cljs$core$IFn$_invoke$arity$1(plugin_spec));
var merged_verbs = cljs.core.merge.call(null,new cljs.core.Keyword(null,"verb-map","verb-map",1285414746).cljs$core$IFn$_invoke$arity$1(base_config),new cljs.core.Keyword(null,"verb-map","verb-map",1285414746).cljs$core$IFn$_invoke$arity$1(plugin_spec));
var new_config = cljs.core.merge.call(null,base_config,plugin_spec,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hooks","hooks",-413590103),merged_hooks], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"verb-map","verb-map",1285414746),merged_verbs], null));
return cljs.core.assoc.call(null,gs,new cljs.core.Keyword(null,"configuration","configuration",1431842520),new_config);
});
/**
 * Take an input comand, find the verb in it and execute its action handler.
 */
advenjure.game.process_input = (function advenjure$game$process_input(game_state,input){
var verb_map = cljs.core.get_in.call(null,game_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"configuration","configuration",1431842520),new cljs.core.Keyword(null,"verb-map","verb-map",1285414746)], null));
var clean = clojure.string.trim.call(null,clojure.string.lower_case.call(null,input));
var vec__37153 = advenjure.verb_map.find_verb.call(null,verb_map,clean);
var verb = cljs.core.nth.call(null,vec__37153,(0),null);
var tokens = cljs.core.nth.call(null,vec__37153,(1),null);
var handler = cljs.core.get.call(null,verb_map,verb);
if(cljs.core.truth_(handler)){
var c__24323__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24323__auto__,verb_map,clean,vec__37153,verb,tokens,handler){
return (function (){
var f__24324__auto__ = (function (){var switch__24046__auto__ = ((function (c__24323__auto__,verb_map,clean,vec__37153,verb,tokens,handler){
return (function (state_37264){
var state_val_37265 = (state_37264[(1)]);
if((state_val_37265 === (7))){
var state_37264__$1 = state_37264;
var statearr_37266_37395 = state_37264__$1;
(statearr_37266_37395[(2)] = true);

(statearr_37266_37395[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37265 === (20))){
var inst_37194 = (state_37264[(7)]);
var inst_37214 = cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,inst_37194);
var state_37264__$1 = state_37264;
var statearr_37267_37396 = state_37264__$1;
(statearr_37267_37396[(2)] = inst_37214);

(statearr_37267_37396[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37265 === (27))){
var inst_37210 = (state_37264[(2)]);
var state_37264__$1 = state_37264;
var statearr_37268_37397 = state_37264__$1;
(statearr_37268_37397[(2)] = inst_37210);

(statearr_37268_37397[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37265 === (1))){
var inst_37156 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_37157 = [new cljs.core.Keyword(null,"moves","moves",927465255)];
var inst_37158 = (new cljs.core.PersistentVector(null,1,(5),inst_37156,inst_37157,null));
var inst_37159 = cljs.core.update_in.call(null,game_state,inst_37158,cljs.core.inc);
var inst_37160 = advenjure.hooks.execute.call(null,inst_37159,new cljs.core.Keyword(null,"before-handler","before-handler",-1763527428));
var inst_37161 = inst_37160;
var state_37264__$1 = (function (){var statearr_37269 = state_37264;
(statearr_37269[(8)] = inst_37161);

return statearr_37269;
})();
var statearr_37270_37407 = state_37264__$1;
(statearr_37270_37407[(2)] = null);

(statearr_37270_37407[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37265 === (24))){
var inst_37212 = (state_37264[(2)]);
var state_37264__$1 = state_37264;
var statearr_37271_37408 = state_37264__$1;
(statearr_37271_37408[(2)] = inst_37212);

(statearr_37271_37408[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37265 === (39))){
var inst_37253 = (state_37264[(2)]);
var state_37264__$1 = state_37264;
if(cljs.core.truth_(inst_37253)){
var statearr_37276_37412 = state_37264__$1;
(statearr_37276_37412[(1)] = (46));

} else {
var statearr_37277_37413 = state_37264__$1;
(statearr_37277_37413[(1)] = (47));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37265 === (46))){
var inst_37231 = (state_37264[(9)]);
var state_37264__$1 = state_37264;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37264__$1,(49),inst_37231);
} else {
if((state_val_37265 === (4))){
var inst_37161 = (state_37264[(8)]);
var inst_37167 = inst_37161.cljs$core$async$impl$protocols$ReadPort$;
var inst_37168 = (false) || (inst_37167);
var state_37264__$1 = state_37264;
if(cljs.core.truth_(inst_37168)){
var statearr_37278_37414 = state_37264__$1;
(statearr_37278_37414[(1)] = (7));

} else {
var statearr_37282_37415 = state_37264__$1;
(statearr_37282_37415[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37265 === (15))){
var inst_37190 = (state_37264[(2)]);
var state_37264__$1 = state_37264;
var statearr_37283_37416 = state_37264__$1;
(statearr_37283_37416[(2)] = inst_37190);

(statearr_37283_37416[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37265 === (48))){
var inst_37260 = (state_37264[(2)]);
var state_37264__$1 = state_37264;
var statearr_37284_37418 = state_37264__$1;
(statearr_37284_37418[(2)] = inst_37260);

(statearr_37284_37418[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37265 === (21))){
var inst_37216 = (state_37264[(2)]);
var state_37264__$1 = state_37264;
if(cljs.core.truth_(inst_37216)){
var statearr_37285_37419 = state_37264__$1;
(statearr_37285_37419[(1)] = (28));

} else {
var statearr_37286_37420 = state_37264__$1;
(statearr_37286_37420[(1)] = (29));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37265 === (31))){
var inst_37219 = (state_37264[(2)]);
var inst_37194 = inst_37219;
var state_37264__$1 = (function (){var statearr_37287 = state_37264;
(statearr_37287[(7)] = inst_37194);

return statearr_37287;
})();
var statearr_37288_37422 = state_37264__$1;
(statearr_37288_37422[(2)] = null);

(statearr_37288_37422[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37265 === (32))){
var inst_37225 = (state_37264[(10)]);
var state_37264__$1 = state_37264;
var statearr_37289_37423 = state_37264__$1;
(statearr_37289_37423[(2)] = inst_37225);

(statearr_37289_37423[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37265 === (40))){
var state_37264__$1 = state_37264;
var statearr_37290_37424 = state_37264__$1;
(statearr_37290_37424[(2)] = true);

(statearr_37290_37424[(1)] = (42));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37265 === (33))){
var inst_37192 = (state_37264[(11)]);
var state_37264__$1 = state_37264;
var statearr_37291_37425 = state_37264__$1;
(statearr_37291_37425[(2)] = inst_37192);

(statearr_37291_37425[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37265 === (13))){
var inst_37161 = (state_37264[(8)]);
var state_37264__$1 = state_37264;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37264__$1,(16),inst_37161);
} else {
if((state_val_37265 === (22))){
var state_37264__$1 = state_37264;
var statearr_37292_37426 = state_37264__$1;
(statearr_37292_37426[(2)] = true);

(statearr_37292_37426[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37265 === (36))){
var inst_37262 = (state_37264[(2)]);
var state_37264__$1 = state_37264;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37264__$1,inst_37262);
} else {
if((state_val_37265 === (41))){
var inst_37231 = (state_37264[(9)]);
var inst_37241 = inst_37231.cljs$lang$protocol_mask$partition$;
var inst_37242 = (!inst_37241);
var state_37264__$1 = state_37264;
if(cljs.core.truth_(inst_37242)){
var statearr_37293_37427 = state_37264__$1;
(statearr_37293_37427[(1)] = (43));

} else {
var statearr_37294_37428 = state_37264__$1;
(statearr_37294_37428[(1)] = (44));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37265 === (43))){
var inst_37231 = (state_37264[(9)]);
var inst_37244 = cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,inst_37231);
var state_37264__$1 = state_37264;
var statearr_37295_37430 = state_37264__$1;
(statearr_37295_37430[(2)] = inst_37244);

(statearr_37295_37430[(1)] = (45));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37265 === (29))){
var inst_37194 = (state_37264[(7)]);
var state_37264__$1 = state_37264;
var statearr_37296_37434 = state_37264__$1;
(statearr_37296_37434[(2)] = inst_37194);

(statearr_37296_37434[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37265 === (44))){
var state_37264__$1 = state_37264;
var statearr_37297_37438 = state_37264__$1;
(statearr_37297_37438[(2)] = false);

(statearr_37297_37438[(1)] = (45));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37265 === (6))){
var inst_37183 = (state_37264[(2)]);
var state_37264__$1 = state_37264;
if(cljs.core.truth_(inst_37183)){
var statearr_37298_37439 = state_37264__$1;
(statearr_37298_37439[(1)] = (13));

} else {
var statearr_37299_37446 = state_37264__$1;
(statearr_37299_37446[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37265 === (28))){
var inst_37194 = (state_37264[(7)]);
var state_37264__$1 = state_37264;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37264__$1,(31),inst_37194);
} else {
if((state_val_37265 === (25))){
var inst_37194 = (state_37264[(7)]);
var inst_37207 = cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,inst_37194);
var state_37264__$1 = state_37264;
var statearr_37302_37454 = state_37264__$1;
(statearr_37302_37454[(2)] = inst_37207);

(statearr_37302_37454[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37265 === (34))){
var inst_37229 = (state_37264[(2)]);
var inst_37230 = advenjure.hooks.execute.call(null,inst_37229,new cljs.core.Keyword(null,"after-handler","after-handler",216363306));
var inst_37231 = inst_37230;
var state_37264__$1 = (function (){var statearr_37303 = state_37264;
(statearr_37303[(9)] = inst_37231);

return statearr_37303;
})();
var statearr_37304_37455 = state_37264__$1;
(statearr_37304_37455[(2)] = null);

(statearr_37304_37455[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37265 === (17))){
var inst_37194 = (state_37264[(7)]);
var inst_37197 = (inst_37194 == null);
var inst_37198 = cljs.core.not.call(null,inst_37197);
var state_37264__$1 = state_37264;
if(inst_37198){
var statearr_37312_37456 = state_37264__$1;
(statearr_37312_37456[(1)] = (19));

} else {
var statearr_37313_37457 = state_37264__$1;
(statearr_37313_37457[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37265 === (3))){
var inst_37192 = (state_37264[(11)]);
var inst_37192__$1 = (state_37264[(2)]);
var inst_37193 = cljs.core.apply.call(null,handler,inst_37192__$1,tokens);
var inst_37194 = inst_37193;
var state_37264__$1 = (function (){var statearr_37317 = state_37264;
(statearr_37317[(11)] = inst_37192__$1);

(statearr_37317[(7)] = inst_37194);

return statearr_37317;
})();
var statearr_37318_37461 = state_37264__$1;
(statearr_37318_37461[(2)] = null);

(statearr_37318_37461[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37265 === (12))){
var inst_37177 = (state_37264[(2)]);
var state_37264__$1 = state_37264;
var statearr_37319_37463 = state_37264__$1;
(statearr_37319_37463[(2)] = inst_37177);

(statearr_37319_37463[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37265 === (2))){
var inst_37161 = (state_37264[(8)]);
var inst_37164 = (inst_37161 == null);
var inst_37165 = cljs.core.not.call(null,inst_37164);
var state_37264__$1 = state_37264;
if(inst_37165){
var statearr_37320_37466 = state_37264__$1;
(statearr_37320_37466[(1)] = (4));

} else {
var statearr_37321_37467 = state_37264__$1;
(statearr_37321_37467[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37265 === (23))){
var inst_37194 = (state_37264[(7)]);
var inst_37204 = inst_37194.cljs$lang$protocol_mask$partition$;
var inst_37205 = (!inst_37204);
var state_37264__$1 = state_37264;
if(cljs.core.truth_(inst_37205)){
var statearr_37322_37468 = state_37264__$1;
(statearr_37322_37468[(1)] = (25));

} else {
var statearr_37323_37469 = state_37264__$1;
(statearr_37323_37469[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37265 === (47))){
var inst_37231 = (state_37264[(9)]);
var state_37264__$1 = state_37264;
var statearr_37331_37470 = state_37264__$1;
(statearr_37331_37470[(2)] = inst_37231);

(statearr_37331_37470[(1)] = (48));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37265 === (35))){
var inst_37231 = (state_37264[(9)]);
var inst_37234 = (inst_37231 == null);
var inst_37235 = cljs.core.not.call(null,inst_37234);
var state_37264__$1 = state_37264;
if(inst_37235){
var statearr_37335_37474 = state_37264__$1;
(statearr_37335_37474[(1)] = (37));

} else {
var statearr_37336_37475 = state_37264__$1;
(statearr_37336_37475[(1)] = (38));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37265 === (19))){
var inst_37194 = (state_37264[(7)]);
var inst_37200 = inst_37194.cljs$core$async$impl$protocols$ReadPort$;
var inst_37201 = (false) || (inst_37200);
var state_37264__$1 = state_37264;
if(cljs.core.truth_(inst_37201)){
var statearr_37337_37477 = state_37264__$1;
(statearr_37337_37477[(1)] = (22));

} else {
var statearr_37338_37478 = state_37264__$1;
(statearr_37338_37478[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37265 === (11))){
var state_37264__$1 = state_37264;
var statearr_37339_37481 = state_37264__$1;
(statearr_37339_37481[(2)] = false);

(statearr_37339_37481[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37265 === (9))){
var inst_37179 = (state_37264[(2)]);
var state_37264__$1 = state_37264;
var statearr_37340_37482 = state_37264__$1;
(statearr_37340_37482[(2)] = inst_37179);

(statearr_37340_37482[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37265 === (5))){
var inst_37161 = (state_37264[(8)]);
var inst_37181 = cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,inst_37161);
var state_37264__$1 = state_37264;
var statearr_37341_37483 = state_37264__$1;
(statearr_37341_37483[(2)] = inst_37181);

(statearr_37341_37483[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37265 === (14))){
var inst_37161 = (state_37264[(8)]);
var state_37264__$1 = state_37264;
var statearr_37342_37484 = state_37264__$1;
(statearr_37342_37484[(2)] = inst_37161);

(statearr_37342_37484[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37265 === (45))){
var inst_37247 = (state_37264[(2)]);
var state_37264__$1 = state_37264;
var statearr_37350_37489 = state_37264__$1;
(statearr_37350_37489[(2)] = inst_37247);

(statearr_37350_37489[(1)] = (42));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37265 === (26))){
var state_37264__$1 = state_37264;
var statearr_37354_37490 = state_37264__$1;
(statearr_37354_37490[(2)] = false);

(statearr_37354_37490[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37265 === (16))){
var inst_37186 = (state_37264[(2)]);
var inst_37161 = inst_37186;
var state_37264__$1 = (function (){var statearr_37355 = state_37264;
(statearr_37355[(8)] = inst_37161);

return statearr_37355;
})();
var statearr_37356_37497 = state_37264__$1;
(statearr_37356_37497[(2)] = null);

(statearr_37356_37497[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37265 === (38))){
var inst_37231 = (state_37264[(9)]);
var inst_37251 = cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,inst_37231);
var state_37264__$1 = state_37264;
var statearr_37363_37500 = state_37264__$1;
(statearr_37363_37500[(2)] = inst_37251);

(statearr_37363_37500[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37265 === (30))){
var inst_37223 = (state_37264[(2)]);
var state_37264__$1 = state_37264;
var statearr_37367_37501 = state_37264__$1;
(statearr_37367_37501[(2)] = inst_37223);

(statearr_37367_37501[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37265 === (10))){
var inst_37161 = (state_37264[(8)]);
var inst_37174 = cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,inst_37161);
var state_37264__$1 = state_37264;
var statearr_37368_37504 = state_37264__$1;
(statearr_37368_37504[(2)] = inst_37174);

(statearr_37368_37504[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37265 === (18))){
var inst_37225 = (state_37264[(10)]);
var inst_37225__$1 = (state_37264[(2)]);
var state_37264__$1 = (function (){var statearr_37369 = state_37264;
(statearr_37369[(10)] = inst_37225__$1);

return statearr_37369;
})();
if(cljs.core.truth_(inst_37225__$1)){
var statearr_37370_37505 = state_37264__$1;
(statearr_37370_37505[(1)] = (32));

} else {
var statearr_37371_37506 = state_37264__$1;
(statearr_37371_37506[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37265 === (42))){
var inst_37249 = (state_37264[(2)]);
var state_37264__$1 = state_37264;
var statearr_37372_37507 = state_37264__$1;
(statearr_37372_37507[(2)] = inst_37249);

(statearr_37372_37507[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37265 === (37))){
var inst_37231 = (state_37264[(9)]);
var inst_37237 = inst_37231.cljs$core$async$impl$protocols$ReadPort$;
var inst_37238 = (false) || (inst_37237);
var state_37264__$1 = state_37264;
if(cljs.core.truth_(inst_37238)){
var statearr_37373_37508 = state_37264__$1;
(statearr_37373_37508[(1)] = (40));

} else {
var statearr_37374_37509 = state_37264__$1;
(statearr_37374_37509[(1)] = (41));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37265 === (8))){
var inst_37161 = (state_37264[(8)]);
var inst_37171 = inst_37161.cljs$lang$protocol_mask$partition$;
var inst_37172 = (!inst_37171);
var state_37264__$1 = state_37264;
if(cljs.core.truth_(inst_37172)){
var statearr_37375_37510 = state_37264__$1;
(statearr_37375_37510[(1)] = (10));

} else {
var statearr_37376_37511 = state_37264__$1;
(statearr_37376_37511[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37265 === (49))){
var inst_37256 = (state_37264[(2)]);
var inst_37231 = inst_37256;
var state_37264__$1 = (function (){var statearr_37377 = state_37264;
(statearr_37377[(9)] = inst_37231);

return statearr_37377;
})();
var statearr_37378_37513 = state_37264__$1;
(statearr_37378_37513[(2)] = null);

(statearr_37378_37513[(1)] = (35));


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
});})(c__24323__auto__,verb_map,clean,vec__37153,verb,tokens,handler))
;
return ((function (switch__24046__auto__,c__24323__auto__,verb_map,clean,vec__37153,verb,tokens,handler){
return (function() {
var advenjure$game$process_input_$_state_machine__24047__auto__ = null;
var advenjure$game$process_input_$_state_machine__24047__auto____0 = (function (){
var statearr_37382 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37382[(0)] = advenjure$game$process_input_$_state_machine__24047__auto__);

(statearr_37382[(1)] = (1));

return statearr_37382;
});
var advenjure$game$process_input_$_state_machine__24047__auto____1 = (function (state_37264){
while(true){
var ret_value__24048__auto__ = (function (){try{while(true){
var result__24049__auto__ = switch__24046__auto__.call(null,state_37264);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24049__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24049__auto__;
}
break;
}
}catch (e37383){if((e37383 instanceof Object)){
var ex__24050__auto__ = e37383;
var statearr_37384_37523 = state_37264;
(statearr_37384_37523[(5)] = ex__24050__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37264);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37383;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37525 = state_37264;
state_37264 = G__37525;
continue;
} else {
return ret_value__24048__auto__;
}
break;
}
});
advenjure$game$process_input_$_state_machine__24047__auto__ = function(state_37264){
switch(arguments.length){
case 0:
return advenjure$game$process_input_$_state_machine__24047__auto____0.call(this);
case 1:
return advenjure$game$process_input_$_state_machine__24047__auto____1.call(this,state_37264);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
advenjure$game$process_input_$_state_machine__24047__auto__.cljs$core$IFn$_invoke$arity$0 = advenjure$game$process_input_$_state_machine__24047__auto____0;
advenjure$game$process_input_$_state_machine__24047__auto__.cljs$core$IFn$_invoke$arity$1 = advenjure$game$process_input_$_state_machine__24047__auto____1;
return advenjure$game$process_input_$_state_machine__24047__auto__;
})()
;})(switch__24046__auto__,c__24323__auto__,verb_map,clean,vec__37153,verb,tokens,handler))
})();
var state__24325__auto__ = (function (){var statearr_37385 = f__24324__auto__.call(null);
(statearr_37385[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24323__auto__);

return statearr_37385;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24325__auto__);
});})(c__24323__auto__,verb_map,clean,vec__37153,verb,tokens,handler))
);

return c__24323__auto__;
} else {
if(!(clojure.string.blank_QMARK_.call(null,clean))){
advenjure.ui.output.print_line.call(null,advenjure.gettext.core._.call(null,"I didn't know how to do that."));
} else {
}

return game_state;
}
});
advenjure.game.say_message = (function advenjure$game$say_message(gs,kw){
var config = cljs.core.get_in.call(null,gs,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"configuration","configuration",1431842520),kw], null));
var value = ((cljs.core.fn_QMARK_.call(null,config))?config.call(null,gs):config);
return advenjure.utils.say.call(null,value);
});
/**
 * Run the game loop. Requires a finished? function to decide when to terminate
 *   the loop. The rest of the parameters are configuration key/values.
 */
advenjure.game.run = (function advenjure$game$run(var_args){
var args__21537__auto__ = [];
var len__21530__auto___37824 = arguments.length;
var i__21531__auto___37825 = (0);
while(true){
if((i__21531__auto___37825 < len__21530__auto___37824)){
args__21537__auto__.push((arguments[i__21531__auto___37825]));

var G__37826 = (i__21531__auto___37825 + (1));
i__21531__auto___37825 = G__37826;
continue;
} else {
}
break;
}

var argseq__21538__auto__ = ((((2) < args__21537__auto__.length))?(new cljs.core.IndexedSeq(args__21537__auto__.slice((2)),(0),null)):null);
return advenjure.game.run.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__21538__auto__);
});

advenjure.game.run.cljs$core$IFn$_invoke$arity$variadic = (function (game_state,finished_QMARK_,p__37534){
var map__37535 = p__37534;
var map__37535__$1 = ((((!((map__37535 == null)))?((((map__37535.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37535.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37535):map__37535);
var extras = map__37535__$1;
var game_state__$1 = advenjure.game.use_plugin.call(null,game_state,cljs.core.merge.call(null,extras,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"finished","finished",-1018867731),finished_QMARK_], null)));
advenjure.ui.output.init.call(null);

advenjure.game.say_message.call(null,game_state__$1,new cljs.core.Keyword(null,"start-message","start-message",-630575289));

var c__24323__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24323__auto__,game_state__$1,map__37535,map__37535__$1,extras){
return (function (){
var f__24324__auto__ = (function (){var switch__24046__auto__ = ((function (c__24323__auto__,game_state__$1,map__37535,map__37535__$1,extras){
return (function (state_37665){
var state_val_37666 = (state_37665[(1)]);
if((state_val_37666 === (7))){
var state_37665__$1 = state_37665;
var statearr_37669_37827 = state_37665__$1;
(statearr_37669_37827[(2)] = true);

(statearr_37669_37827[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37666 === (1))){
var inst_37540 = advenjure.ui.input.read_key.call(null);
var inst_37541 = inst_37540;
var state_37665__$1 = (function (){var statearr_37670 = state_37665;
(statearr_37670[(7)] = inst_37541);

return statearr_37670;
})();
var statearr_37671_37828 = state_37665__$1;
(statearr_37671_37828[(2)] = null);

(statearr_37671_37828[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37666 === (4))){
var inst_37541 = (state_37665[(7)]);
var inst_37547 = inst_37541.cljs$core$async$impl$protocols$ReadPort$;
var inst_37548 = (false) || (inst_37547);
var state_37665__$1 = state_37665;
if(cljs.core.truth_(inst_37548)){
var statearr_37672_37835 = state_37665__$1;
(statearr_37672_37835[(1)] = (7));

} else {
var statearr_37673_37836 = state_37665__$1;
(statearr_37673_37836[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37666 === (15))){
var inst_37570 = (state_37665[(2)]);
var state_37665__$1 = state_37665;
var statearr_37674_37837 = state_37665__$1;
(statearr_37674_37837[(2)] = inst_37570);

(statearr_37674_37837[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37666 === (13))){
var inst_37541 = (state_37665[(7)]);
var state_37665__$1 = state_37665;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37665__$1,(16),inst_37541);
} else {
if((state_val_37666 === (6))){
var inst_37563 = (state_37665[(2)]);
var state_37665__$1 = state_37665;
if(cljs.core.truth_(inst_37563)){
var statearr_37678_37838 = state_37665__$1;
(statearr_37678_37838[(1)] = (13));

} else {
var statearr_37679_37839 = state_37665__$1;
(statearr_37679_37839[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37666 === (3))){
var inst_37572 = (state_37665[(2)]);
var inst_37661 = cljs.core.async.chan.call(null,(1));
var inst_37662 = (function (){var k = inst_37572;
var c__24323__auto____$1 = inst_37661;
return ((function (k,c__24323__auto____$1,inst_37572,inst_37661,state_val_37666,c__24323__auto__,game_state__$1,map__37535,map__37535__$1,extras){
return (function (){
var f__24324__auto__ = (function (){var switch__24046__auto__ = ((function (k,c__24323__auto____$1,inst_37572,inst_37661,state_val_37666,c__24323__auto__,game_state__$1,map__37535,map__37535__$1,extras){
return (function (state_37659){
var state_val_37660 = (state_37659[(1)]);
if((state_val_37660 === (7))){
var inst_37578 = (state_37659[(7)]);
var inst_37598 = cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,inst_37578);
var state_37659__$1 = state_37659;
var statearr_37680_37841 = state_37659__$1;
(statearr_37680_37841[(2)] = inst_37598);

(statearr_37680_37841[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37660 === (20))){
var inst_37642 = (state_37659[(8)]);
var inst_37642__$1 = (state_37659[(2)]);
var inst_37643 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_37644 = [new cljs.core.Keyword(null,"configuration","configuration",1431842520),new cljs.core.Keyword(null,"finished","finished",-1018867731)];
var inst_37645 = (new cljs.core.PersistentVector(null,2,(5),inst_37643,inst_37644,null));
var inst_37646 = cljs.core.get_in.call(null,inst_37642__$1,inst_37645);
var inst_37647 = inst_37646.call(null,inst_37642__$1);
var inst_37648 = cljs.core.not.call(null,inst_37647);
var state_37659__$1 = (function (){var statearr_37688 = state_37659;
(statearr_37688[(8)] = inst_37642__$1);

return statearr_37688;
})();
if(inst_37648){
var statearr_37689_37845 = state_37659__$1;
(statearr_37689_37845[(1)] = (34));

} else {
var statearr_37690_37846 = state_37659__$1;
(statearr_37690_37846[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37660 === (27))){
var inst_37611 = (state_37659[(9)]);
var inst_37624 = cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,inst_37611);
var state_37659__$1 = state_37659;
var statearr_37691_37850 = state_37659__$1;
(statearr_37691_37850[(2)] = inst_37624);

(statearr_37691_37850[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37660 === (1))){
var inst_37573 = new cljs.core.Keyword(null,"current-room","current-room",491649183).cljs$core$IFn$_invoke$arity$1(game_state__$1);
var inst_37574 = advenjure.change_rooms.change_rooms.call(null,game_state__$1,inst_37573);
var inst_37575 = inst_37574;
var state_37659__$1 = (function (){var statearr_37692 = state_37659;
(statearr_37692[(10)] = inst_37575);

return statearr_37692;
})();
var statearr_37693_37851 = state_37659__$1;
(statearr_37693_37851[(2)] = null);

(statearr_37693_37851[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37660 === (24))){
var state_37659__$1 = state_37659;
var statearr_37694_37852 = state_37659__$1;
(statearr_37694_37852[(2)] = true);

(statearr_37694_37852[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37660 === (4))){
var inst_37578 = (state_37659[(7)]);
var inst_37581 = (inst_37578 == null);
var inst_37582 = cljs.core.not.call(null,inst_37581);
var state_37659__$1 = state_37659;
if(inst_37582){
var statearr_37695_37853 = state_37659__$1;
(statearr_37695_37853[(1)] = (6));

} else {
var statearr_37696_37854 = state_37659__$1;
(statearr_37696_37854[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37660 === (15))){
var inst_37578 = (state_37659[(7)]);
var state_37659__$1 = state_37659;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37659__$1,(18),inst_37578);
} else {
if((state_val_37660 === (21))){
var inst_37611 = (state_37659[(9)]);
var inst_37617 = inst_37611.cljs$core$async$impl$protocols$ReadPort$;
var inst_37618 = (false) || (inst_37617);
var state_37659__$1 = state_37659;
if(cljs.core.truth_(inst_37618)){
var statearr_37697_37855 = state_37659__$1;
(statearr_37697_37855[(1)] = (24));

} else {
var statearr_37698_37856 = state_37659__$1;
(statearr_37698_37856[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37660 === (31))){
var inst_37611 = (state_37659[(9)]);
var state_37659__$1 = state_37659;
var statearr_37699_37857 = state_37659__$1;
(statearr_37699_37857[(2)] = inst_37611);

(statearr_37699_37857[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37660 === (32))){
var inst_37640 = (state_37659[(2)]);
var state_37659__$1 = state_37659;
var statearr_37701_37858 = state_37659__$1;
(statearr_37701_37858[(2)] = inst_37640);

(statearr_37701_37858[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37660 === (33))){
var inst_37636 = (state_37659[(2)]);
var inst_37611 = inst_37636;
var state_37659__$1 = (function (){var statearr_37702 = state_37659;
(statearr_37702[(9)] = inst_37611);

return statearr_37702;
})();
var statearr_37706_37862 = state_37659__$1;
(statearr_37706_37862[(2)] = null);

(statearr_37706_37862[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37660 === (13))){
var state_37659__$1 = state_37659;
var statearr_37707_37866 = state_37659__$1;
(statearr_37707_37866[(2)] = false);

(statearr_37707_37866[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37660 === (22))){
var inst_37611 = (state_37659[(9)]);
var inst_37631 = cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,inst_37611);
var state_37659__$1 = state_37659;
var statearr_37708_37867 = state_37659__$1;
(statearr_37708_37867[(2)] = inst_37631);

(statearr_37708_37867[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37660 === (36))){
var inst_37655 = (state_37659[(2)]);
var state_37659__$1 = state_37659;
var statearr_37709_37868 = state_37659__$1;
(statearr_37709_37868[(2)] = inst_37655);

(statearr_37709_37868[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37660 === (29))){
var inst_37627 = (state_37659[(2)]);
var state_37659__$1 = state_37659;
var statearr_37710_37869 = state_37659__$1;
(statearr_37710_37869[(2)] = inst_37627);

(statearr_37710_37869[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37660 === (6))){
var inst_37578 = (state_37659[(7)]);
var inst_37584 = inst_37578.cljs$core$async$impl$protocols$ReadPort$;
var inst_37585 = (false) || (inst_37584);
var state_37659__$1 = state_37659;
if(cljs.core.truth_(inst_37585)){
var statearr_37715_37870 = state_37659__$1;
(statearr_37715_37870[(1)] = (9));

} else {
var statearr_37716_37871 = state_37659__$1;
(statearr_37716_37871[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37660 === (28))){
var state_37659__$1 = state_37659;
var statearr_37717_37872 = state_37659__$1;
(statearr_37717_37872[(2)] = false);

(statearr_37717_37872[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37660 === (25))){
var inst_37611 = (state_37659[(9)]);
var inst_37621 = inst_37611.cljs$lang$protocol_mask$partition$;
var inst_37622 = (!inst_37621);
var state_37659__$1 = state_37659;
if(cljs.core.truth_(inst_37622)){
var statearr_37719_37873 = state_37659__$1;
(statearr_37719_37873[(1)] = (27));

} else {
var statearr_37721_37874 = state_37659__$1;
(statearr_37721_37874[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37660 === (34))){
var inst_37642 = (state_37659[(8)]);
var inst_37575 = inst_37642;
var state_37659__$1 = (function (){var statearr_37722 = state_37659;
(statearr_37722[(10)] = inst_37575);

return statearr_37722;
})();
var statearr_37724_37875 = state_37659__$1;
(statearr_37724_37875[(2)] = null);

(statearr_37724_37875[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37660 === (17))){
var inst_37607 = (state_37659[(2)]);
var state_37659__$1 = state_37659;
var statearr_37725_37876 = state_37659__$1;
(statearr_37725_37876[(2)] = inst_37607);

(statearr_37725_37876[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37660 === (3))){
var inst_37657 = (state_37659[(2)]);
var state_37659__$1 = state_37659;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37659__$1,inst_37657);
} else {
if((state_val_37660 === (12))){
var inst_37578 = (state_37659[(7)]);
var inst_37591 = cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,inst_37578);
var state_37659__$1 = state_37659;
var statearr_37727_37889 = state_37659__$1;
(statearr_37727_37889[(2)] = inst_37591);

(statearr_37727_37889[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37660 === (2))){
var inst_37575 = (state_37659[(10)]);
var inst_37577 = advenjure.ui.input.get_input.call(null,inst_37575);
var inst_37578 = inst_37577;
var state_37659__$1 = (function (){var statearr_37728 = state_37659;
(statearr_37728[(7)] = inst_37578);

return statearr_37728;
})();
var statearr_37729_37890 = state_37659__$1;
(statearr_37729_37890[(2)] = null);

(statearr_37729_37890[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37660 === (23))){
var inst_37633 = (state_37659[(2)]);
var state_37659__$1 = state_37659;
if(cljs.core.truth_(inst_37633)){
var statearr_37730_37903 = state_37659__$1;
(statearr_37730_37903[(1)] = (30));

} else {
var statearr_37731_37904 = state_37659__$1;
(statearr_37731_37904[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37660 === (35))){
var inst_37652 = advenjure.game.say_message.call(null,game_state__$1,new cljs.core.Keyword(null,"end-message","end-message",-2112830994));
var inst_37653 = advenjure.ui.input.exit.call(null);
var state_37659__$1 = (function (){var statearr_37732 = state_37659;
(statearr_37732[(11)] = inst_37652);

return statearr_37732;
})();
var statearr_37733_37905 = state_37659__$1;
(statearr_37733_37905[(2)] = inst_37653);

(statearr_37733_37905[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37660 === (19))){
var inst_37611 = (state_37659[(9)]);
var inst_37614 = (inst_37611 == null);
var inst_37615 = cljs.core.not.call(null,inst_37614);
var state_37659__$1 = state_37659;
if(inst_37615){
var statearr_37736_37906 = state_37659__$1;
(statearr_37736_37906[(1)] = (21));

} else {
var statearr_37737_37907 = state_37659__$1;
(statearr_37737_37907[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37660 === (11))){
var inst_37596 = (state_37659[(2)]);
var state_37659__$1 = state_37659;
var statearr_37738_37908 = state_37659__$1;
(statearr_37738_37908[(2)] = inst_37596);

(statearr_37738_37908[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37660 === (9))){
var state_37659__$1 = state_37659;
var statearr_37740_37909 = state_37659__$1;
(statearr_37740_37909[(2)] = true);

(statearr_37740_37909[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37660 === (5))){
var inst_37575 = (state_37659[(10)]);
var inst_37609 = (state_37659[(2)]);
var inst_37610 = advenjure.game.process_input.call(null,inst_37575,inst_37609);
var inst_37611 = inst_37610;
var state_37659__$1 = (function (){var statearr_37741 = state_37659;
(statearr_37741[(9)] = inst_37611);

return statearr_37741;
})();
var statearr_37743_37910 = state_37659__$1;
(statearr_37743_37910[(2)] = null);

(statearr_37743_37910[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37660 === (14))){
var inst_37594 = (state_37659[(2)]);
var state_37659__$1 = state_37659;
var statearr_37744_37911 = state_37659__$1;
(statearr_37744_37911[(2)] = inst_37594);

(statearr_37744_37911[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37660 === (26))){
var inst_37629 = (state_37659[(2)]);
var state_37659__$1 = state_37659;
var statearr_37745_37912 = state_37659__$1;
(statearr_37745_37912[(2)] = inst_37629);

(statearr_37745_37912[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37660 === (16))){
var inst_37578 = (state_37659[(7)]);
var state_37659__$1 = state_37659;
var statearr_37746_37913 = state_37659__$1;
(statearr_37746_37913[(2)] = inst_37578);

(statearr_37746_37913[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37660 === (30))){
var inst_37611 = (state_37659[(9)]);
var state_37659__$1 = state_37659;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37659__$1,(33),inst_37611);
} else {
if((state_val_37660 === (10))){
var inst_37578 = (state_37659[(7)]);
var inst_37588 = inst_37578.cljs$lang$protocol_mask$partition$;
var inst_37589 = (!inst_37588);
var state_37659__$1 = state_37659;
if(cljs.core.truth_(inst_37589)){
var statearr_37747_37914 = state_37659__$1;
(statearr_37747_37914[(1)] = (12));

} else {
var statearr_37748_37920 = state_37659__$1;
(statearr_37748_37920[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37660 === (18))){
var inst_37603 = (state_37659[(2)]);
var inst_37578 = inst_37603;
var state_37659__$1 = (function (){var statearr_37749 = state_37659;
(statearr_37749[(7)] = inst_37578);

return statearr_37749;
})();
var statearr_37750_37921 = state_37659__$1;
(statearr_37750_37921[(2)] = null);

(statearr_37750_37921[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37660 === (8))){
var inst_37600 = (state_37659[(2)]);
var state_37659__$1 = state_37659;
if(cljs.core.truth_(inst_37600)){
var statearr_37754_37922 = state_37659__$1;
(statearr_37754_37922[(1)] = (15));

} else {
var statearr_37755_37923 = state_37659__$1;
(statearr_37755_37923[(1)] = (16));

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
});})(k,c__24323__auto____$1,inst_37572,inst_37661,state_val_37666,c__24323__auto__,game_state__$1,map__37535,map__37535__$1,extras))
;
return ((function (switch__24046__auto__,k,c__24323__auto____$1,inst_37572,inst_37661,state_val_37666,c__24323__auto__,game_state__$1,map__37535,map__37535__$1,extras){
return (function() {
var advenjure$game$state_machine__24047__auto__ = null;
var advenjure$game$state_machine__24047__auto____0 = (function (){
var statearr_37762 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37762[(0)] = advenjure$game$state_machine__24047__auto__);

(statearr_37762[(1)] = (1));

return statearr_37762;
});
var advenjure$game$state_machine__24047__auto____1 = (function (state_37659){
while(true){
var ret_value__24048__auto__ = (function (){try{while(true){
var result__24049__auto__ = switch__24046__auto__.call(null,state_37659);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24049__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24049__auto__;
}
break;
}
}catch (e37763){if((e37763 instanceof Object)){
var ex__24050__auto__ = e37763;
var statearr_37764_37934 = state_37659;
(statearr_37764_37934[(5)] = ex__24050__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37659);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37763;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37941 = state_37659;
state_37659 = G__37941;
continue;
} else {
return ret_value__24048__auto__;
}
break;
}
});
advenjure$game$state_machine__24047__auto__ = function(state_37659){
switch(arguments.length){
case 0:
return advenjure$game$state_machine__24047__auto____0.call(this);
case 1:
return advenjure$game$state_machine__24047__auto____1.call(this,state_37659);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
advenjure$game$state_machine__24047__auto__.cljs$core$IFn$_invoke$arity$0 = advenjure$game$state_machine__24047__auto____0;
advenjure$game$state_machine__24047__auto__.cljs$core$IFn$_invoke$arity$1 = advenjure$game$state_machine__24047__auto____1;
return advenjure$game$state_machine__24047__auto__;
})()
;})(switch__24046__auto__,k,c__24323__auto____$1,inst_37572,inst_37661,state_val_37666,c__24323__auto__,game_state__$1,map__37535,map__37535__$1,extras))
})();
var state__24325__auto__ = (function (){var statearr_37765 = f__24324__auto__.call(null);
(statearr_37765[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24323__auto____$1);

return statearr_37765;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24325__auto__);
});
;})(k,c__24323__auto____$1,inst_37572,inst_37661,state_val_37666,c__24323__auto__,game_state__$1,map__37535,map__37535__$1,extras))
})();
var inst_37663 = cljs.core.async.impl.dispatch.run.call(null,inst_37662);
var state_37665__$1 = (function (){var statearr_37766 = state_37665;
(statearr_37766[(8)] = inst_37663);

return statearr_37766;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37665__$1,inst_37661);
} else {
if((state_val_37666 === (12))){
var inst_37557 = (state_37665[(2)]);
var state_37665__$1 = state_37665;
var statearr_37767_37958 = state_37665__$1;
(statearr_37767_37958[(2)] = inst_37557);

(statearr_37767_37958[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37666 === (2))){
var inst_37541 = (state_37665[(7)]);
var inst_37544 = (inst_37541 == null);
var inst_37545 = cljs.core.not.call(null,inst_37544);
var state_37665__$1 = state_37665;
if(inst_37545){
var statearr_37768_37959 = state_37665__$1;
(statearr_37768_37959[(1)] = (4));

} else {
var statearr_37769_37960 = state_37665__$1;
(statearr_37769_37960[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37666 === (11))){
var state_37665__$1 = state_37665;
var statearr_37770_37961 = state_37665__$1;
(statearr_37770_37961[(2)] = false);

(statearr_37770_37961[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37666 === (9))){
var inst_37559 = (state_37665[(2)]);
var state_37665__$1 = state_37665;
var statearr_37771_37962 = state_37665__$1;
(statearr_37771_37962[(2)] = inst_37559);

(statearr_37771_37962[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37666 === (5))){
var inst_37541 = (state_37665[(7)]);
var inst_37561 = cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,inst_37541);
var state_37665__$1 = state_37665;
var statearr_37772_37963 = state_37665__$1;
(statearr_37772_37963[(2)] = inst_37561);

(statearr_37772_37963[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37666 === (14))){
var inst_37541 = (state_37665[(7)]);
var state_37665__$1 = state_37665;
var statearr_37773_37968 = state_37665__$1;
(statearr_37773_37968[(2)] = inst_37541);

(statearr_37773_37968[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37666 === (16))){
var inst_37566 = (state_37665[(2)]);
var inst_37541 = inst_37566;
var state_37665__$1 = (function (){var statearr_37774 = state_37665;
(statearr_37774[(7)] = inst_37541);

return statearr_37774;
})();
var statearr_37775_37973 = state_37665__$1;
(statearr_37775_37973[(2)] = null);

(statearr_37775_37973[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37666 === (10))){
var inst_37541 = (state_37665[(7)]);
var inst_37554 = cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.ReadPort,inst_37541);
var state_37665__$1 = state_37665;
var statearr_37776_37994 = state_37665__$1;
(statearr_37776_37994[(2)] = inst_37554);

(statearr_37776_37994[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37666 === (8))){
var inst_37541 = (state_37665[(7)]);
var inst_37551 = inst_37541.cljs$lang$protocol_mask$partition$;
var inst_37552 = (!inst_37551);
var state_37665__$1 = state_37665;
if(cljs.core.truth_(inst_37552)){
var statearr_37777_37995 = state_37665__$1;
(statearr_37777_37995[(1)] = (10));

} else {
var statearr_37778_37996 = state_37665__$1;
(statearr_37778_37996[(1)] = (11));

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
});})(c__24323__auto__,game_state__$1,map__37535,map__37535__$1,extras))
;
return ((function (switch__24046__auto__,c__24323__auto__,game_state__$1,map__37535,map__37535__$1,extras){
return (function() {
var advenjure$game$state_machine__24047__auto__ = null;
var advenjure$game$state_machine__24047__auto____0 = (function (){
var statearr_37794 = [null,null,null,null,null,null,null,null,null];
(statearr_37794[(0)] = advenjure$game$state_machine__24047__auto__);

(statearr_37794[(1)] = (1));

return statearr_37794;
});
var advenjure$game$state_machine__24047__auto____1 = (function (state_37665){
while(true){
var ret_value__24048__auto__ = (function (){try{while(true){
var result__24049__auto__ = switch__24046__auto__.call(null,state_37665);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24049__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24049__auto__;
}
break;
}
}catch (e37795){if((e37795 instanceof Object)){
var ex__24050__auto__ = e37795;
var statearr_37796_37997 = state_37665;
(statearr_37796_37997[(5)] = ex__24050__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37665);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37795;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37998 = state_37665;
state_37665 = G__37998;
continue;
} else {
return ret_value__24048__auto__;
}
break;
}
});
advenjure$game$state_machine__24047__auto__ = function(state_37665){
switch(arguments.length){
case 0:
return advenjure$game$state_machine__24047__auto____0.call(this);
case 1:
return advenjure$game$state_machine__24047__auto____1.call(this,state_37665);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
advenjure$game$state_machine__24047__auto__.cljs$core$IFn$_invoke$arity$0 = advenjure$game$state_machine__24047__auto____0;
advenjure$game$state_machine__24047__auto__.cljs$core$IFn$_invoke$arity$1 = advenjure$game$state_machine__24047__auto____1;
return advenjure$game$state_machine__24047__auto__;
})()
;})(switch__24046__auto__,c__24323__auto__,game_state__$1,map__37535,map__37535__$1,extras))
})();
var state__24325__auto__ = (function (){var statearr_37797 = f__24324__auto__.call(null);
(statearr_37797[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24323__auto__);

return statearr_37797;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24325__auto__);
});})(c__24323__auto__,game_state__$1,map__37535,map__37535__$1,extras))
);

return c__24323__auto__;
});

advenjure.game.run.cljs$lang$maxFixedArity = (2);

advenjure.game.run.cljs$lang$applyTo = (function (seq37531){
var G__37532 = cljs.core.first.call(null,seq37531);
var seq37531__$1 = cljs.core.next.call(null,seq37531);
var G__37533 = cljs.core.first.call(null,seq37531__$1);
var seq37531__$2 = cljs.core.next.call(null,seq37531__$1);
return advenjure.game.run.cljs$core$IFn$_invoke$arity$variadic(G__37532,G__37533,seq37531__$2);
});


//# sourceMappingURL=game.js.map?rel=1605080729235