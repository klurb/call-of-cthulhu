// Compiled by ClojureScript 1.9.229 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
goog.require('cljs.reader');
figwheel.client._figwheel_version_ = "0.5.4-7";
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var args39284 = [];
var len__21530__auto___39287 = arguments.length;
var i__21531__auto___39288 = (0);
while(true){
if((i__21531__auto___39288 < len__21530__auto___39287)){
args39284.push((arguments[i__21531__auto___39288]));

var G__39289 = (i__21531__auto___39288 + (1));
i__21531__auto___39288 = G__39289;
continue;
} else {
}
break;
}

var G__39286 = args39284.length;
switch (G__39286) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39284.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),args], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__21537__auto__ = [];
var len__21530__auto___39292 = arguments.length;
var i__21531__auto___39293 = (0);
while(true){
if((i__21531__auto___39293 < len__21530__auto___39292)){
args__21537__auto__.push((arguments[i__21531__auto___39293]));

var G__39294 = (i__21531__auto___39293 + (1));
i__21531__auto___39293 = G__39294;
continue;
} else {
}
break;
}

var argseq__21538__auto__ = ((((0) < args__21537__auto__.length))?(new cljs.core.IndexedSeq(args__21537__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__21538__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq39291){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39291));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__21537__auto__ = [];
var len__21530__auto___39296 = arguments.length;
var i__21531__auto___39297 = (0);
while(true){
if((i__21531__auto___39297 < len__21530__auto___39296)){
args__21537__auto__.push((arguments[i__21531__auto___39297]));

var G__39298 = (i__21531__auto___39297 + (1));
i__21531__auto___39297 = G__39298;
continue;
} else {
}
break;
}

var argseq__21538__auto__ = ((((0) < args__21537__auto__.length))?(new cljs.core.IndexedSeq(args__21537__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__21538__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq39295){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39295));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__39299 = cljs.core._EQ_;
var expr__39300 = (function (){var or__20455__auto__ = (function (){try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
return localStorage.getItem("figwheel_autoload");
} else {
return null;
}
}catch (e39303){if((e39303 instanceof Error)){
var e = e39303;
return false;
} else {
throw e39303;

}
}})();
if(cljs.core.truth_(or__20455__auto__)){
return or__20455__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__39299.call(null,"true",expr__39300))){
return true;
} else {
if(cljs.core.truth_(pred__39299.call(null,"false",expr__39300))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__39300)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
} else {
}

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
}catch (e39305){if((e39305 instanceof Error)){
var e = e39305;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e39305;

}
}} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__39306){
var map__39309 = p__39306;
var map__39309__$1 = ((((!((map__39309 == null)))?((((map__39309.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39309.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39309):map__39309);
var message = cljs.core.get.call(null,map__39309__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__39309__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__20455__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__20455__auto__)){
return or__20455__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__20443__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__20443__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__20443__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__24323__auto___39471 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24323__auto___39471,ch){
return (function (){
var f__24324__auto__ = (function (){var switch__24046__auto__ = ((function (c__24323__auto___39471,ch){
return (function (state_39440){
var state_val_39441 = (state_39440[(1)]);
if((state_val_39441 === (7))){
var inst_39436 = (state_39440[(2)]);
var state_39440__$1 = state_39440;
var statearr_39442_39472 = state_39440__$1;
(statearr_39442_39472[(2)] = inst_39436);

(statearr_39442_39472[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39441 === (1))){
var state_39440__$1 = state_39440;
var statearr_39443_39473 = state_39440__$1;
(statearr_39443_39473[(2)] = null);

(statearr_39443_39473[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39441 === (4))){
var inst_39393 = (state_39440[(7)]);
var inst_39393__$1 = (state_39440[(2)]);
var state_39440__$1 = (function (){var statearr_39444 = state_39440;
(statearr_39444[(7)] = inst_39393__$1);

return statearr_39444;
})();
if(cljs.core.truth_(inst_39393__$1)){
var statearr_39445_39474 = state_39440__$1;
(statearr_39445_39474[(1)] = (5));

} else {
var statearr_39446_39475 = state_39440__$1;
(statearr_39446_39475[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39441 === (15))){
var inst_39400 = (state_39440[(8)]);
var inst_39415 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_39400);
var inst_39416 = cljs.core.first.call(null,inst_39415);
var inst_39417 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_39416);
var inst_39418 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_39417)].join('');
var inst_39419 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_39418);
var state_39440__$1 = state_39440;
var statearr_39447_39476 = state_39440__$1;
(statearr_39447_39476[(2)] = inst_39419);

(statearr_39447_39476[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39441 === (13))){
var inst_39424 = (state_39440[(2)]);
var state_39440__$1 = state_39440;
var statearr_39448_39477 = state_39440__$1;
(statearr_39448_39477[(2)] = inst_39424);

(statearr_39448_39477[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39441 === (6))){
var state_39440__$1 = state_39440;
var statearr_39449_39478 = state_39440__$1;
(statearr_39449_39478[(2)] = null);

(statearr_39449_39478[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39441 === (17))){
var inst_39422 = (state_39440[(2)]);
var state_39440__$1 = state_39440;
var statearr_39450_39479 = state_39440__$1;
(statearr_39450_39479[(2)] = inst_39422);

(statearr_39450_39479[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39441 === (3))){
var inst_39438 = (state_39440[(2)]);
var state_39440__$1 = state_39440;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39440__$1,inst_39438);
} else {
if((state_val_39441 === (12))){
var inst_39399 = (state_39440[(9)]);
var inst_39413 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_39399,opts);
var state_39440__$1 = state_39440;
if(cljs.core.truth_(inst_39413)){
var statearr_39451_39480 = state_39440__$1;
(statearr_39451_39480[(1)] = (15));

} else {
var statearr_39452_39481 = state_39440__$1;
(statearr_39452_39481[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39441 === (2))){
var state_39440__$1 = state_39440;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39440__$1,(4),ch);
} else {
if((state_val_39441 === (11))){
var inst_39400 = (state_39440[(8)]);
var inst_39405 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_39406 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_39400);
var inst_39407 = cljs.core.async.timeout.call(null,(1000));
var inst_39408 = [inst_39406,inst_39407];
var inst_39409 = (new cljs.core.PersistentVector(null,2,(5),inst_39405,inst_39408,null));
var state_39440__$1 = state_39440;
return cljs.core.async.ioc_alts_BANG_.call(null,state_39440__$1,(14),inst_39409);
} else {
if((state_val_39441 === (9))){
var inst_39400 = (state_39440[(8)]);
var inst_39426 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_39427 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_39400);
var inst_39428 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_39427);
var inst_39429 = [cljs.core.str("Not loading: "),cljs.core.str(inst_39428)].join('');
var inst_39430 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_39429);
var state_39440__$1 = (function (){var statearr_39453 = state_39440;
(statearr_39453[(10)] = inst_39426);

return statearr_39453;
})();
var statearr_39454_39482 = state_39440__$1;
(statearr_39454_39482[(2)] = inst_39430);

(statearr_39454_39482[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39441 === (5))){
var inst_39393 = (state_39440[(7)]);
var inst_39395 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_39396 = (new cljs.core.PersistentArrayMap(null,2,inst_39395,null));
var inst_39397 = (new cljs.core.PersistentHashSet(null,inst_39396,null));
var inst_39398 = figwheel.client.focus_msgs.call(null,inst_39397,inst_39393);
var inst_39399 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_39398);
var inst_39400 = cljs.core.first.call(null,inst_39398);
var inst_39401 = figwheel.client.autoload_QMARK_.call(null);
var state_39440__$1 = (function (){var statearr_39455 = state_39440;
(statearr_39455[(8)] = inst_39400);

(statearr_39455[(9)] = inst_39399);

return statearr_39455;
})();
if(cljs.core.truth_(inst_39401)){
var statearr_39456_39483 = state_39440__$1;
(statearr_39456_39483[(1)] = (8));

} else {
var statearr_39457_39484 = state_39440__$1;
(statearr_39457_39484[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39441 === (14))){
var inst_39411 = (state_39440[(2)]);
var state_39440__$1 = state_39440;
var statearr_39458_39485 = state_39440__$1;
(statearr_39458_39485[(2)] = inst_39411);

(statearr_39458_39485[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39441 === (16))){
var state_39440__$1 = state_39440;
var statearr_39459_39486 = state_39440__$1;
(statearr_39459_39486[(2)] = null);

(statearr_39459_39486[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39441 === (10))){
var inst_39432 = (state_39440[(2)]);
var state_39440__$1 = (function (){var statearr_39460 = state_39440;
(statearr_39460[(11)] = inst_39432);

return statearr_39460;
})();
var statearr_39461_39487 = state_39440__$1;
(statearr_39461_39487[(2)] = null);

(statearr_39461_39487[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39441 === (8))){
var inst_39399 = (state_39440[(9)]);
var inst_39403 = figwheel.client.reload_file_state_QMARK_.call(null,inst_39399,opts);
var state_39440__$1 = state_39440;
if(cljs.core.truth_(inst_39403)){
var statearr_39462_39488 = state_39440__$1;
(statearr_39462_39488[(1)] = (11));

} else {
var statearr_39463_39489 = state_39440__$1;
(statearr_39463_39489[(1)] = (12));

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
});})(c__24323__auto___39471,ch))
;
return ((function (switch__24046__auto__,c__24323__auto___39471,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__24047__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__24047__auto____0 = (function (){
var statearr_39467 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39467[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__24047__auto__);

(statearr_39467[(1)] = (1));

return statearr_39467;
});
var figwheel$client$file_reloader_plugin_$_state_machine__24047__auto____1 = (function (state_39440){
while(true){
var ret_value__24048__auto__ = (function (){try{while(true){
var result__24049__auto__ = switch__24046__auto__.call(null,state_39440);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24049__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24049__auto__;
}
break;
}
}catch (e39468){if((e39468 instanceof Object)){
var ex__24050__auto__ = e39468;
var statearr_39469_39490 = state_39440;
(statearr_39469_39490[(5)] = ex__24050__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39440);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39468;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39491 = state_39440;
state_39440 = G__39491;
continue;
} else {
return ret_value__24048__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__24047__auto__ = function(state_39440){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__24047__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__24047__auto____1.call(this,state_39440);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__24047__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__24047__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__24047__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__24047__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__24047__auto__;
})()
;})(switch__24046__auto__,c__24323__auto___39471,ch))
})();
var state__24325__auto__ = (function (){var statearr_39470 = f__24324__auto__.call(null);
(statearr_39470[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24323__auto___39471);

return statearr_39470;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24325__auto__);
});})(c__24323__auto___39471,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__39492_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__39492_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_39495 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_39495){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e39494){if((e39494 instanceof Error)){
var e = e39494;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_39495], null));
} else {
var e = e39494;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_39495))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__39496){
var map__39505 = p__39496;
var map__39505__$1 = ((((!((map__39505 == null)))?((((map__39505.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39505.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39505):map__39505);
var opts = map__39505__$1;
var build_id = cljs.core.get.call(null,map__39505__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__39505,map__39505__$1,opts,build_id){
return (function (p__39507){
var vec__39508 = p__39507;
var seq__39509 = cljs.core.seq.call(null,vec__39508);
var first__39510 = cljs.core.first.call(null,seq__39509);
var seq__39509__$1 = cljs.core.next.call(null,seq__39509);
var map__39511 = first__39510;
var map__39511__$1 = ((((!((map__39511 == null)))?((((map__39511.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39511.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39511):map__39511);
var msg = map__39511__$1;
var msg_name = cljs.core.get.call(null,map__39511__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__39509__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__39508,seq__39509,first__39510,seq__39509__$1,map__39511,map__39511__$1,msg,msg_name,_,map__39505,map__39505__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__39508,seq__39509,first__39510,seq__39509__$1,map__39511,map__39511__$1,msg,msg_name,_,map__39505,map__39505__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__39505,map__39505__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__39519){
var vec__39520 = p__39519;
var seq__39521 = cljs.core.seq.call(null,vec__39520);
var first__39522 = cljs.core.first.call(null,seq__39521);
var seq__39521__$1 = cljs.core.next.call(null,seq__39521);
var map__39523 = first__39522;
var map__39523__$1 = ((((!((map__39523 == null)))?((((map__39523.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39523.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39523):map__39523);
var msg = map__39523__$1;
var msg_name = cljs.core.get.call(null,map__39523__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__39521__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__39525){
var map__39537 = p__39525;
var map__39537__$1 = ((((!((map__39537 == null)))?((((map__39537.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39537.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39537):map__39537);
var on_compile_warning = cljs.core.get.call(null,map__39537__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__39537__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__39537,map__39537__$1,on_compile_warning,on_compile_fail){
return (function (p__39539){
var vec__39540 = p__39539;
var seq__39541 = cljs.core.seq.call(null,vec__39540);
var first__39542 = cljs.core.first.call(null,seq__39541);
var seq__39541__$1 = cljs.core.next.call(null,seq__39541);
var map__39543 = first__39542;
var map__39543__$1 = ((((!((map__39543 == null)))?((((map__39543.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39543.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39543):map__39543);
var msg = map__39543__$1;
var msg_name = cljs.core.get.call(null,map__39543__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__39541__$1;
var pred__39545 = cljs.core._EQ_;
var expr__39546 = msg_name;
if(cljs.core.truth_(pred__39545.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__39546))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__39545.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__39546))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__39537,map__39537__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__24323__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24323__auto__,msg_hist,msg_names,msg){
return (function (){
var f__24324__auto__ = (function (){var switch__24046__auto__ = ((function (c__24323__auto__,msg_hist,msg_names,msg){
return (function (state_39754){
var state_val_39755 = (state_39754[(1)]);
if((state_val_39755 === (7))){
var inst_39682 = (state_39754[(2)]);
var state_39754__$1 = state_39754;
if(cljs.core.truth_(inst_39682)){
var statearr_39756_39802 = state_39754__$1;
(statearr_39756_39802[(1)] = (8));

} else {
var statearr_39757_39803 = state_39754__$1;
(statearr_39757_39803[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39755 === (20))){
var inst_39748 = (state_39754[(2)]);
var state_39754__$1 = state_39754;
var statearr_39758_39804 = state_39754__$1;
(statearr_39758_39804[(2)] = inst_39748);

(statearr_39758_39804[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39755 === (27))){
var inst_39744 = (state_39754[(2)]);
var state_39754__$1 = state_39754;
var statearr_39759_39805 = state_39754__$1;
(statearr_39759_39805[(2)] = inst_39744);

(statearr_39759_39805[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39755 === (1))){
var inst_39675 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_39754__$1 = state_39754;
if(cljs.core.truth_(inst_39675)){
var statearr_39760_39806 = state_39754__$1;
(statearr_39760_39806[(1)] = (2));

} else {
var statearr_39761_39807 = state_39754__$1;
(statearr_39761_39807[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39755 === (24))){
var inst_39746 = (state_39754[(2)]);
var state_39754__$1 = state_39754;
var statearr_39762_39808 = state_39754__$1;
(statearr_39762_39808[(2)] = inst_39746);

(statearr_39762_39808[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39755 === (4))){
var inst_39752 = (state_39754[(2)]);
var state_39754__$1 = state_39754;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39754__$1,inst_39752);
} else {
if((state_val_39755 === (15))){
var inst_39750 = (state_39754[(2)]);
var state_39754__$1 = state_39754;
var statearr_39763_39809 = state_39754__$1;
(statearr_39763_39809[(2)] = inst_39750);

(statearr_39763_39809[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39755 === (21))){
var inst_39709 = (state_39754[(2)]);
var state_39754__$1 = state_39754;
var statearr_39764_39810 = state_39754__$1;
(statearr_39764_39810[(2)] = inst_39709);

(statearr_39764_39810[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39755 === (31))){
var inst_39733 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_39754__$1 = state_39754;
if(cljs.core.truth_(inst_39733)){
var statearr_39765_39811 = state_39754__$1;
(statearr_39765_39811[(1)] = (34));

} else {
var statearr_39766_39812 = state_39754__$1;
(statearr_39766_39812[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39755 === (32))){
var inst_39742 = (state_39754[(2)]);
var state_39754__$1 = state_39754;
var statearr_39767_39813 = state_39754__$1;
(statearr_39767_39813[(2)] = inst_39742);

(statearr_39767_39813[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39755 === (33))){
var inst_39731 = (state_39754[(2)]);
var state_39754__$1 = state_39754;
var statearr_39768_39814 = state_39754__$1;
(statearr_39768_39814[(2)] = inst_39731);

(statearr_39768_39814[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39755 === (13))){
var inst_39696 = figwheel.client.heads_up.clear.call(null);
var state_39754__$1 = state_39754;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39754__$1,(16),inst_39696);
} else {
if((state_val_39755 === (22))){
var inst_39713 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39714 = figwheel.client.heads_up.append_warning_message.call(null,inst_39713);
var state_39754__$1 = state_39754;
var statearr_39769_39815 = state_39754__$1;
(statearr_39769_39815[(2)] = inst_39714);

(statearr_39769_39815[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39755 === (36))){
var inst_39740 = (state_39754[(2)]);
var state_39754__$1 = state_39754;
var statearr_39770_39816 = state_39754__$1;
(statearr_39770_39816[(2)] = inst_39740);

(statearr_39770_39816[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39755 === (29))){
var inst_39724 = (state_39754[(2)]);
var state_39754__$1 = state_39754;
var statearr_39771_39817 = state_39754__$1;
(statearr_39771_39817[(2)] = inst_39724);

(statearr_39771_39817[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39755 === (6))){
var inst_39677 = (state_39754[(7)]);
var state_39754__$1 = state_39754;
var statearr_39772_39818 = state_39754__$1;
(statearr_39772_39818[(2)] = inst_39677);

(statearr_39772_39818[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39755 === (28))){
var inst_39720 = (state_39754[(2)]);
var inst_39721 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39722 = figwheel.client.heads_up.display_warning.call(null,inst_39721);
var state_39754__$1 = (function (){var statearr_39773 = state_39754;
(statearr_39773[(8)] = inst_39720);

return statearr_39773;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39754__$1,(29),inst_39722);
} else {
if((state_val_39755 === (25))){
var inst_39718 = figwheel.client.heads_up.clear.call(null);
var state_39754__$1 = state_39754;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39754__$1,(28),inst_39718);
} else {
if((state_val_39755 === (34))){
var inst_39735 = figwheel.client.heads_up.flash_loaded.call(null);
var state_39754__$1 = state_39754;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39754__$1,(37),inst_39735);
} else {
if((state_val_39755 === (17))){
var inst_39702 = (state_39754[(2)]);
var state_39754__$1 = state_39754;
var statearr_39774_39819 = state_39754__$1;
(statearr_39774_39819[(2)] = inst_39702);

(statearr_39774_39819[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39755 === (3))){
var inst_39694 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_39754__$1 = state_39754;
if(cljs.core.truth_(inst_39694)){
var statearr_39775_39820 = state_39754__$1;
(statearr_39775_39820[(1)] = (13));

} else {
var statearr_39776_39821 = state_39754__$1;
(statearr_39776_39821[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39755 === (12))){
var inst_39690 = (state_39754[(2)]);
var state_39754__$1 = state_39754;
var statearr_39777_39822 = state_39754__$1;
(statearr_39777_39822[(2)] = inst_39690);

(statearr_39777_39822[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39755 === (2))){
var inst_39677 = (state_39754[(7)]);
var inst_39677__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_39754__$1 = (function (){var statearr_39778 = state_39754;
(statearr_39778[(7)] = inst_39677__$1);

return statearr_39778;
})();
if(cljs.core.truth_(inst_39677__$1)){
var statearr_39779_39823 = state_39754__$1;
(statearr_39779_39823[(1)] = (5));

} else {
var statearr_39780_39824 = state_39754__$1;
(statearr_39780_39824[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39755 === (23))){
var inst_39716 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_39754__$1 = state_39754;
if(cljs.core.truth_(inst_39716)){
var statearr_39781_39825 = state_39754__$1;
(statearr_39781_39825[(1)] = (25));

} else {
var statearr_39782_39826 = state_39754__$1;
(statearr_39782_39826[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39755 === (35))){
var state_39754__$1 = state_39754;
var statearr_39783_39827 = state_39754__$1;
(statearr_39783_39827[(2)] = null);

(statearr_39783_39827[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39755 === (19))){
var inst_39711 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_39754__$1 = state_39754;
if(cljs.core.truth_(inst_39711)){
var statearr_39784_39828 = state_39754__$1;
(statearr_39784_39828[(1)] = (22));

} else {
var statearr_39785_39829 = state_39754__$1;
(statearr_39785_39829[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39755 === (11))){
var inst_39686 = (state_39754[(2)]);
var state_39754__$1 = state_39754;
var statearr_39786_39830 = state_39754__$1;
(statearr_39786_39830[(2)] = inst_39686);

(statearr_39786_39830[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39755 === (9))){
var inst_39688 = figwheel.client.heads_up.clear.call(null);
var state_39754__$1 = state_39754;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39754__$1,(12),inst_39688);
} else {
if((state_val_39755 === (5))){
var inst_39679 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_39754__$1 = state_39754;
var statearr_39787_39831 = state_39754__$1;
(statearr_39787_39831[(2)] = inst_39679);

(statearr_39787_39831[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39755 === (14))){
var inst_39704 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_39754__$1 = state_39754;
if(cljs.core.truth_(inst_39704)){
var statearr_39788_39832 = state_39754__$1;
(statearr_39788_39832[(1)] = (18));

} else {
var statearr_39789_39833 = state_39754__$1;
(statearr_39789_39833[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39755 === (26))){
var inst_39726 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_39754__$1 = state_39754;
if(cljs.core.truth_(inst_39726)){
var statearr_39790_39834 = state_39754__$1;
(statearr_39790_39834[(1)] = (30));

} else {
var statearr_39791_39835 = state_39754__$1;
(statearr_39791_39835[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39755 === (16))){
var inst_39698 = (state_39754[(2)]);
var inst_39699 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39700 = figwheel.client.heads_up.display_exception.call(null,inst_39699);
var state_39754__$1 = (function (){var statearr_39792 = state_39754;
(statearr_39792[(9)] = inst_39698);

return statearr_39792;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39754__$1,(17),inst_39700);
} else {
if((state_val_39755 === (30))){
var inst_39728 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39729 = figwheel.client.heads_up.display_warning.call(null,inst_39728);
var state_39754__$1 = state_39754;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39754__$1,(33),inst_39729);
} else {
if((state_val_39755 === (10))){
var inst_39692 = (state_39754[(2)]);
var state_39754__$1 = state_39754;
var statearr_39793_39836 = state_39754__$1;
(statearr_39793_39836[(2)] = inst_39692);

(statearr_39793_39836[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39755 === (18))){
var inst_39706 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39707 = figwheel.client.heads_up.display_exception.call(null,inst_39706);
var state_39754__$1 = state_39754;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39754__$1,(21),inst_39707);
} else {
if((state_val_39755 === (37))){
var inst_39737 = (state_39754[(2)]);
var state_39754__$1 = state_39754;
var statearr_39794_39837 = state_39754__$1;
(statearr_39794_39837[(2)] = inst_39737);

(statearr_39794_39837[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39755 === (8))){
var inst_39684 = figwheel.client.heads_up.flash_loaded.call(null);
var state_39754__$1 = state_39754;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39754__$1,(11),inst_39684);
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
});})(c__24323__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__24046__auto__,c__24323__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24047__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24047__auto____0 = (function (){
var statearr_39798 = [null,null,null,null,null,null,null,null,null,null];
(statearr_39798[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24047__auto__);

(statearr_39798[(1)] = (1));

return statearr_39798;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24047__auto____1 = (function (state_39754){
while(true){
var ret_value__24048__auto__ = (function (){try{while(true){
var result__24049__auto__ = switch__24046__auto__.call(null,state_39754);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24049__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24049__auto__;
}
break;
}
}catch (e39799){if((e39799 instanceof Object)){
var ex__24050__auto__ = e39799;
var statearr_39800_39838 = state_39754;
(statearr_39800_39838[(5)] = ex__24050__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39754);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39799;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39839 = state_39754;
state_39754 = G__39839;
continue;
} else {
return ret_value__24048__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24047__auto__ = function(state_39754){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24047__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24047__auto____1.call(this,state_39754);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24047__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24047__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24047__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24047__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24047__auto__;
})()
;})(switch__24046__auto__,c__24323__auto__,msg_hist,msg_names,msg))
})();
var state__24325__auto__ = (function (){var statearr_39801 = f__24324__auto__.call(null);
(statearr_39801[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24323__auto__);

return statearr_39801;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24325__auto__);
});})(c__24323__auto__,msg_hist,msg_names,msg))
);

return c__24323__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__24323__auto___39902 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24323__auto___39902,ch){
return (function (){
var f__24324__auto__ = (function (){var switch__24046__auto__ = ((function (c__24323__auto___39902,ch){
return (function (state_39885){
var state_val_39886 = (state_39885[(1)]);
if((state_val_39886 === (1))){
var state_39885__$1 = state_39885;
var statearr_39887_39903 = state_39885__$1;
(statearr_39887_39903[(2)] = null);

(statearr_39887_39903[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39886 === (2))){
var state_39885__$1 = state_39885;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39885__$1,(4),ch);
} else {
if((state_val_39886 === (3))){
var inst_39883 = (state_39885[(2)]);
var state_39885__$1 = state_39885;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39885__$1,inst_39883);
} else {
if((state_val_39886 === (4))){
var inst_39873 = (state_39885[(7)]);
var inst_39873__$1 = (state_39885[(2)]);
var state_39885__$1 = (function (){var statearr_39888 = state_39885;
(statearr_39888[(7)] = inst_39873__$1);

return statearr_39888;
})();
if(cljs.core.truth_(inst_39873__$1)){
var statearr_39889_39904 = state_39885__$1;
(statearr_39889_39904[(1)] = (5));

} else {
var statearr_39890_39905 = state_39885__$1;
(statearr_39890_39905[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39886 === (5))){
var inst_39873 = (state_39885[(7)]);
var inst_39875 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_39873);
var state_39885__$1 = state_39885;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39885__$1,(8),inst_39875);
} else {
if((state_val_39886 === (6))){
var state_39885__$1 = state_39885;
var statearr_39891_39906 = state_39885__$1;
(statearr_39891_39906[(2)] = null);

(statearr_39891_39906[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39886 === (7))){
var inst_39881 = (state_39885[(2)]);
var state_39885__$1 = state_39885;
var statearr_39892_39907 = state_39885__$1;
(statearr_39892_39907[(2)] = inst_39881);

(statearr_39892_39907[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39886 === (8))){
var inst_39877 = (state_39885[(2)]);
var state_39885__$1 = (function (){var statearr_39893 = state_39885;
(statearr_39893[(8)] = inst_39877);

return statearr_39893;
})();
var statearr_39894_39908 = state_39885__$1;
(statearr_39894_39908[(2)] = null);

(statearr_39894_39908[(1)] = (2));


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
});})(c__24323__auto___39902,ch))
;
return ((function (switch__24046__auto__,c__24323__auto___39902,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__24047__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__24047__auto____0 = (function (){
var statearr_39898 = [null,null,null,null,null,null,null,null,null];
(statearr_39898[(0)] = figwheel$client$heads_up_plugin_$_state_machine__24047__auto__);

(statearr_39898[(1)] = (1));

return statearr_39898;
});
var figwheel$client$heads_up_plugin_$_state_machine__24047__auto____1 = (function (state_39885){
while(true){
var ret_value__24048__auto__ = (function (){try{while(true){
var result__24049__auto__ = switch__24046__auto__.call(null,state_39885);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24049__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24049__auto__;
}
break;
}
}catch (e39899){if((e39899 instanceof Object)){
var ex__24050__auto__ = e39899;
var statearr_39900_39909 = state_39885;
(statearr_39900_39909[(5)] = ex__24050__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39885);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39899;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39910 = state_39885;
state_39885 = G__39910;
continue;
} else {
return ret_value__24048__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__24047__auto__ = function(state_39885){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__24047__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__24047__auto____1.call(this,state_39885);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__24047__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__24047__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__24047__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__24047__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__24047__auto__;
})()
;})(switch__24046__auto__,c__24323__auto___39902,ch))
})();
var state__24325__auto__ = (function (){var statearr_39901 = f__24324__auto__.call(null);
(statearr_39901[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24323__auto___39902);

return statearr_39901;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24325__auto__);
});})(c__24323__auto___39902,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__24323__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24323__auto__){
return (function (){
var f__24324__auto__ = (function (){var switch__24046__auto__ = ((function (c__24323__auto__){
return (function (state_39931){
var state_val_39932 = (state_39931[(1)]);
if((state_val_39932 === (1))){
var inst_39926 = cljs.core.async.timeout.call(null,(3000));
var state_39931__$1 = state_39931;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39931__$1,(2),inst_39926);
} else {
if((state_val_39932 === (2))){
var inst_39928 = (state_39931[(2)]);
var inst_39929 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_39931__$1 = (function (){var statearr_39933 = state_39931;
(statearr_39933[(7)] = inst_39928);

return statearr_39933;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39931__$1,inst_39929);
} else {
return null;
}
}
});})(c__24323__auto__))
;
return ((function (switch__24046__auto__,c__24323__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__24047__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__24047__auto____0 = (function (){
var statearr_39937 = [null,null,null,null,null,null,null,null];
(statearr_39937[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__24047__auto__);

(statearr_39937[(1)] = (1));

return statearr_39937;
});
var figwheel$client$enforce_project_plugin_$_state_machine__24047__auto____1 = (function (state_39931){
while(true){
var ret_value__24048__auto__ = (function (){try{while(true){
var result__24049__auto__ = switch__24046__auto__.call(null,state_39931);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24049__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24049__auto__;
}
break;
}
}catch (e39938){if((e39938 instanceof Object)){
var ex__24050__auto__ = e39938;
var statearr_39939_39941 = state_39931;
(statearr_39939_39941[(5)] = ex__24050__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39931);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39938;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39942 = state_39931;
state_39931 = G__39942;
continue;
} else {
return ret_value__24048__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__24047__auto__ = function(state_39931){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__24047__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__24047__auto____1.call(this,state_39931);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__24047__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__24047__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__24047__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__24047__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__24047__auto__;
})()
;})(switch__24046__auto__,c__24323__auto__))
})();
var state__24325__auto__ = (function (){var statearr_39940 = f__24324__auto__.call(null);
(statearr_39940[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24323__auto__);

return statearr_39940;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24325__auto__);
});})(c__24323__auto__))
);

return c__24323__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__4657__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__4657__auto__)){
var figwheel_version = temp__4657__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__24323__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24323__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__24324__auto__ = (function (){var switch__24046__auto__ = ((function (c__24323__auto__,figwheel_version,temp__4657__auto__){
return (function (state_39965){
var state_val_39966 = (state_39965[(1)]);
if((state_val_39966 === (1))){
var inst_39959 = cljs.core.async.timeout.call(null,(2000));
var state_39965__$1 = state_39965;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39965__$1,(2),inst_39959);
} else {
if((state_val_39966 === (2))){
var inst_39961 = (state_39965[(2)]);
var inst_39962 = [cljs.core.str("Figwheel Client Version \""),cljs.core.str(figwheel.client._figwheel_version_),cljs.core.str("\" is not equal to "),cljs.core.str("Figwheel Sidecar Version \""),cljs.core.str(figwheel_version),cljs.core.str("\""),cljs.core.str(".  Shutting down Websocket Connection!")].join('');
var inst_39963 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_39962);
var state_39965__$1 = (function (){var statearr_39967 = state_39965;
(statearr_39967[(7)] = inst_39961);

return statearr_39967;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39965__$1,inst_39963);
} else {
return null;
}
}
});})(c__24323__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__24046__auto__,c__24323__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24047__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24047__auto____0 = (function (){
var statearr_39971 = [null,null,null,null,null,null,null,null];
(statearr_39971[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24047__auto__);

(statearr_39971[(1)] = (1));

return statearr_39971;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24047__auto____1 = (function (state_39965){
while(true){
var ret_value__24048__auto__ = (function (){try{while(true){
var result__24049__auto__ = switch__24046__auto__.call(null,state_39965);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24049__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24049__auto__;
}
break;
}
}catch (e39972){if((e39972 instanceof Object)){
var ex__24050__auto__ = e39972;
var statearr_39973_39975 = state_39965;
(statearr_39973_39975[(5)] = ex__24050__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39965);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39972;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39976 = state_39965;
state_39965 = G__39976;
continue;
} else {
return ret_value__24048__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24047__auto__ = function(state_39965){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24047__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24047__auto____1.call(this,state_39965);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24047__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24047__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24047__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24047__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24047__auto__;
})()
;})(switch__24046__auto__,c__24323__auto__,figwheel_version,temp__4657__auto__))
})();
var state__24325__auto__ = (function (){var statearr_39974 = f__24324__auto__.call(null);
(statearr_39974[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24323__auto__);

return statearr_39974;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24325__auto__);
});})(c__24323__auto__,figwheel_version,temp__4657__auto__))
);

return c__24323__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__39977){
var map__39981 = p__39977;
var map__39981__$1 = ((((!((map__39981 == null)))?((((map__39981.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39981.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39981):map__39981);
var file = cljs.core.get.call(null,map__39981__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__39981__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__39981__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__39983 = "";
var G__39983__$1 = (cljs.core.truth_(file)?[cljs.core.str(G__39983),cljs.core.str("file "),cljs.core.str(file)].join(''):G__39983);
var G__39983__$2 = (cljs.core.truth_(line)?[cljs.core.str(G__39983__$1),cljs.core.str(" at line "),cljs.core.str(line)].join(''):G__39983__$1);
if(cljs.core.truth_((function (){var and__20443__auto__ = line;
if(cljs.core.truth_(and__20443__auto__)){
return column;
} else {
return and__20443__auto__;
}
})())){
return [cljs.core.str(G__39983__$2),cljs.core.str(", column "),cljs.core.str(column)].join('');
} else {
return G__39983__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__39984){
var map__39991 = p__39984;
var map__39991__$1 = ((((!((map__39991 == null)))?((((map__39991.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39991.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39991):map__39991);
var ed = map__39991__$1;
var formatted_exception = cljs.core.get.call(null,map__39991__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__39991__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__39991__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__39993_39997 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__39994_39998 = null;
var count__39995_39999 = (0);
var i__39996_40000 = (0);
while(true){
if((i__39996_40000 < count__39995_39999)){
var msg_40001 = cljs.core._nth.call(null,chunk__39994_39998,i__39996_40000);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_40001);

var G__40002 = seq__39993_39997;
var G__40003 = chunk__39994_39998;
var G__40004 = count__39995_39999;
var G__40005 = (i__39996_40000 + (1));
seq__39993_39997 = G__40002;
chunk__39994_39998 = G__40003;
count__39995_39999 = G__40004;
i__39996_40000 = G__40005;
continue;
} else {
var temp__4657__auto___40006 = cljs.core.seq.call(null,seq__39993_39997);
if(temp__4657__auto___40006){
var seq__39993_40007__$1 = temp__4657__auto___40006;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39993_40007__$1)){
var c__21266__auto___40008 = cljs.core.chunk_first.call(null,seq__39993_40007__$1);
var G__40009 = cljs.core.chunk_rest.call(null,seq__39993_40007__$1);
var G__40010 = c__21266__auto___40008;
var G__40011 = cljs.core.count.call(null,c__21266__auto___40008);
var G__40012 = (0);
seq__39993_39997 = G__40009;
chunk__39994_39998 = G__40010;
count__39995_39999 = G__40011;
i__39996_40000 = G__40012;
continue;
} else {
var msg_40013 = cljs.core.first.call(null,seq__39993_40007__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_40013);

var G__40014 = cljs.core.next.call(null,seq__39993_40007__$1);
var G__40015 = null;
var G__40016 = (0);
var G__40017 = (0);
seq__39993_39997 = G__40014;
chunk__39994_39998 = G__40015;
count__39995_39999 = G__40016;
i__39996_40000 = G__40017;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on "),cljs.core.str(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__40018){
var map__40021 = p__40018;
var map__40021__$1 = ((((!((map__40021 == null)))?((((map__40021.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40021.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40021):map__40021);
var w = map__40021__$1;
var message = cljs.core.get.call(null,map__40021__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message)),cljs.core.str(" in "),cljs.core.str(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/out/figwheel/client.cljs",33,1,323,323,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/out/figwheel/client.cljs",30,1,315,315,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__20443__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__20443__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__20443__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__40033 = cljs.core.seq.call(null,plugins);
var chunk__40034 = null;
var count__40035 = (0);
var i__40036 = (0);
while(true){
if((i__40036 < count__40035)){
var vec__40037 = cljs.core._nth.call(null,chunk__40034,i__40036);
var k = cljs.core.nth.call(null,vec__40037,(0),null);
var plugin = cljs.core.nth.call(null,vec__40037,(1),null);
if(cljs.core.truth_(plugin)){
var pl_40043 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__40033,chunk__40034,count__40035,i__40036,pl_40043,vec__40037,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_40043.call(null,msg_hist);
});})(seq__40033,chunk__40034,count__40035,i__40036,pl_40043,vec__40037,k,plugin))
);
} else {
}

var G__40044 = seq__40033;
var G__40045 = chunk__40034;
var G__40046 = count__40035;
var G__40047 = (i__40036 + (1));
seq__40033 = G__40044;
chunk__40034 = G__40045;
count__40035 = G__40046;
i__40036 = G__40047;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__40033);
if(temp__4657__auto__){
var seq__40033__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40033__$1)){
var c__21266__auto__ = cljs.core.chunk_first.call(null,seq__40033__$1);
var G__40048 = cljs.core.chunk_rest.call(null,seq__40033__$1);
var G__40049 = c__21266__auto__;
var G__40050 = cljs.core.count.call(null,c__21266__auto__);
var G__40051 = (0);
seq__40033 = G__40048;
chunk__40034 = G__40049;
count__40035 = G__40050;
i__40036 = G__40051;
continue;
} else {
var vec__40040 = cljs.core.first.call(null,seq__40033__$1);
var k = cljs.core.nth.call(null,vec__40040,(0),null);
var plugin = cljs.core.nth.call(null,vec__40040,(1),null);
if(cljs.core.truth_(plugin)){
var pl_40052 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__40033,chunk__40034,count__40035,i__40036,pl_40052,vec__40040,k,plugin,seq__40033__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_40052.call(null,msg_hist);
});})(seq__40033,chunk__40034,count__40035,i__40036,pl_40052,vec__40040,k,plugin,seq__40033__$1,temp__4657__auto__))
);
} else {
}

var G__40053 = cljs.core.next.call(null,seq__40033__$1);
var G__40054 = null;
var G__40055 = (0);
var G__40056 = (0);
seq__40033 = G__40053;
chunk__40034 = G__40054;
count__40035 = G__40055;
i__40036 = G__40056;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args40057 = [];
var len__21530__auto___40064 = arguments.length;
var i__21531__auto___40065 = (0);
while(true){
if((i__21531__auto___40065 < len__21530__auto___40064)){
args40057.push((arguments[i__21531__auto___40065]));

var G__40066 = (i__21531__auto___40065 + (1));
i__21531__auto___40065 = G__40066;
continue;
} else {
}
break;
}

var G__40059 = args40057.length;
switch (G__40059) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40057.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__40060_40068 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__40061_40069 = null;
var count__40062_40070 = (0);
var i__40063_40071 = (0);
while(true){
if((i__40063_40071 < count__40062_40070)){
var msg_40072 = cljs.core._nth.call(null,chunk__40061_40069,i__40063_40071);
figwheel.client.socket.handle_incoming_message.call(null,msg_40072);

var G__40073 = seq__40060_40068;
var G__40074 = chunk__40061_40069;
var G__40075 = count__40062_40070;
var G__40076 = (i__40063_40071 + (1));
seq__40060_40068 = G__40073;
chunk__40061_40069 = G__40074;
count__40062_40070 = G__40075;
i__40063_40071 = G__40076;
continue;
} else {
var temp__4657__auto___40077 = cljs.core.seq.call(null,seq__40060_40068);
if(temp__4657__auto___40077){
var seq__40060_40078__$1 = temp__4657__auto___40077;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40060_40078__$1)){
var c__21266__auto___40079 = cljs.core.chunk_first.call(null,seq__40060_40078__$1);
var G__40080 = cljs.core.chunk_rest.call(null,seq__40060_40078__$1);
var G__40081 = c__21266__auto___40079;
var G__40082 = cljs.core.count.call(null,c__21266__auto___40079);
var G__40083 = (0);
seq__40060_40068 = G__40080;
chunk__40061_40069 = G__40081;
count__40062_40070 = G__40082;
i__40063_40071 = G__40083;
continue;
} else {
var msg_40084 = cljs.core.first.call(null,seq__40060_40078__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_40084);

var G__40085 = cljs.core.next.call(null,seq__40060_40078__$1);
var G__40086 = null;
var G__40087 = (0);
var G__40088 = (0);
seq__40060_40068 = G__40085;
chunk__40061_40069 = G__40086;
count__40062_40070 = G__40087;
i__40063_40071 = G__40088;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__21537__auto__ = [];
var len__21530__auto___40093 = arguments.length;
var i__21531__auto___40094 = (0);
while(true){
if((i__21531__auto___40094 < len__21530__auto___40093)){
args__21537__auto__.push((arguments[i__21531__auto___40094]));

var G__40095 = (i__21531__auto___40094 + (1));
i__21531__auto___40094 = G__40095;
continue;
} else {
}
break;
}

var argseq__21538__auto__ = ((((0) < args__21537__auto__.length))?(new cljs.core.IndexedSeq(args__21537__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__21538__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__40090){
var map__40091 = p__40090;
var map__40091__$1 = ((((!((map__40091 == null)))?((((map__40091.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40091.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40091):map__40091);
var opts = map__40091__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq40089){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40089));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e40097){if((e40097 instanceof Error)){
var e = e40097;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e40097;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__40101){
var map__40102 = p__40101;
var map__40102__$1 = ((((!((map__40102 == null)))?((((map__40102.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40102.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40102):map__40102);
var msg_name = cljs.core.get.call(null,map__40102__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1605080731704