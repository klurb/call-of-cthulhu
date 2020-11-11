// Compiled by ClojureScript 1.9.229 {}
goog.provide('advenjure.ui.input');
goog.require('cljs.core');
goog.require('advenjure.items');
goog.require('jquery.mousewheel');
goog.require('jquery');
goog.require('cljs.core.async');
goog.require('jquery.terminal');
goog.require('clojure.string');
goog.require('advenjure.utils');
goog.require('advenjure.rooms');
goog.require('cljs.reader');
advenjure.ui.input.term = (function advenjure$ui$input$term(){
return $("#terminal").terminal();
});
advenjure.ui.input.input_chan = cljs.core.atom.call(null,cljs.core.async.chan.call(null));
/**
 * Need to recreate input chan so previous game loop doesnt receive input anymore.
 */
advenjure.ui.input.figwheel_cleanup = (function advenjure$ui$input$figwheel_cleanup(){
cljs.core.println.call(null,"resetting input channel for figwheel cleanup");

cljs.core.async.close_BANG_.call(null,cljs.core.deref.call(null,advenjure.ui.input.input_chan));

return cljs.core.reset_BANG_.call(null,advenjure.ui.input.input_chan,cljs.core.async.chan.call(null));
});
advenjure.ui.input.exit = (function advenjure$ui$input$exit(){
return advenjure.ui.input.term.call(null).pause();
});
advenjure.ui.input.read_value = (function advenjure$ui$input$read_value(){
var key_chan = cljs.core.async.chan.call(null);
var c__24323__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24323__auto__,key_chan){
return (function (){
var f__24324__auto__ = (function (){var switch__24046__auto__ = ((function (c__24323__auto__,key_chan){
return (function (state_28270){
var state_val_28271 = (state_28270[(1)]);
if((state_val_28271 === (1))){
var inst_28262 = advenjure.ui.input.term.call(null);
var inst_28263 = inst_28262.pause();
var inst_28264 = (function (){return ((function (inst_28262,inst_28263,state_val_28271,c__24323__auto__,key_chan){
return (function (ev){
(window["onkeydown"] = null);

var c__24323__auto___28295__$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24323__auto___28295__$1,inst_28262,inst_28263,state_val_28271,c__24323__auto__,key_chan){
return (function (){
var f__24324__auto__ = (function (){var switch__24046__auto__ = ((function (c__24323__auto___28295__$1,inst_28262,inst_28263,state_val_28271,c__24323__auto__,key_chan){
return (function (state_28276){
var state_val_28277 = (state_28276[(1)]);
if((state_val_28277 === (1))){
var inst_28272 = (ev["key"]);
var state_28276__$1 = state_28276;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28276__$1,(2),key_chan,inst_28272);
} else {
if((state_val_28277 === (2))){
var inst_28274 = (state_28276[(2)]);
var state_28276__$1 = state_28276;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28276__$1,inst_28274);
} else {
return null;
}
}
});})(c__24323__auto___28295__$1,inst_28262,inst_28263,state_val_28271,c__24323__auto__,key_chan))
;
return ((function (switch__24046__auto__,c__24323__auto___28295__$1,inst_28262,inst_28263,state_val_28271,c__24323__auto__,key_chan){
return (function() {
var advenjure$ui$input$read_value_$_state_machine__24047__auto__ = null;
var advenjure$ui$input$read_value_$_state_machine__24047__auto____0 = (function (){
var statearr_28281 = [null,null,null,null,null,null,null];
(statearr_28281[(0)] = advenjure$ui$input$read_value_$_state_machine__24047__auto__);

(statearr_28281[(1)] = (1));

return statearr_28281;
});
var advenjure$ui$input$read_value_$_state_machine__24047__auto____1 = (function (state_28276){
while(true){
var ret_value__24048__auto__ = (function (){try{while(true){
var result__24049__auto__ = switch__24046__auto__.call(null,state_28276);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24049__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24049__auto__;
}
break;
}
}catch (e28282){if((e28282 instanceof Object)){
var ex__24050__auto__ = e28282;
var statearr_28283_28300 = state_28276;
(statearr_28283_28300[(5)] = ex__24050__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28276);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28282;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28301 = state_28276;
state_28276 = G__28301;
continue;
} else {
return ret_value__24048__auto__;
}
break;
}
});
advenjure$ui$input$read_value_$_state_machine__24047__auto__ = function(state_28276){
switch(arguments.length){
case 0:
return advenjure$ui$input$read_value_$_state_machine__24047__auto____0.call(this);
case 1:
return advenjure$ui$input$read_value_$_state_machine__24047__auto____1.call(this,state_28276);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
advenjure$ui$input$read_value_$_state_machine__24047__auto__.cljs$core$IFn$_invoke$arity$0 = advenjure$ui$input$read_value_$_state_machine__24047__auto____0;
advenjure$ui$input$read_value_$_state_machine__24047__auto__.cljs$core$IFn$_invoke$arity$1 = advenjure$ui$input$read_value_$_state_machine__24047__auto____1;
return advenjure$ui$input$read_value_$_state_machine__24047__auto__;
})()
;})(switch__24046__auto__,c__24323__auto___28295__$1,inst_28262,inst_28263,state_val_28271,c__24323__auto__,key_chan))
})();
var state__24325__auto__ = (function (){var statearr_28284 = f__24324__auto__.call(null);
(statearr_28284[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24323__auto___28295__$1);

return statearr_28284;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24325__auto__);
});})(c__24323__auto___28295__$1,inst_28262,inst_28263,state_val_28271,c__24323__auto__,key_chan))
);


return advenjure.ui.input.term.call(null).resume();
});
;})(inst_28262,inst_28263,state_val_28271,c__24323__auto__,key_chan))
})();
var inst_28265 = (window["onkeydown"] = inst_28264);
var state_28270__$1 = (function (){var statearr_28285 = state_28270;
(statearr_28285[(7)] = inst_28265);

(statearr_28285[(8)] = inst_28263);

return statearr_28285;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28270__$1,(2),key_chan);
} else {
if((state_val_28271 === (2))){
var inst_28267 = (state_28270[(2)]);
var inst_28268 = cljs.reader.read_string.call(null,inst_28267);
var state_28270__$1 = state_28270;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28270__$1,inst_28268);
} else {
return null;
}
}
});})(c__24323__auto__,key_chan))
;
return ((function (switch__24046__auto__,c__24323__auto__,key_chan){
return (function() {
var advenjure$ui$input$read_value_$_state_machine__24047__auto__ = null;
var advenjure$ui$input$read_value_$_state_machine__24047__auto____0 = (function (){
var statearr_28289 = [null,null,null,null,null,null,null,null,null];
(statearr_28289[(0)] = advenjure$ui$input$read_value_$_state_machine__24047__auto__);

(statearr_28289[(1)] = (1));

return statearr_28289;
});
var advenjure$ui$input$read_value_$_state_machine__24047__auto____1 = (function (state_28270){
while(true){
var ret_value__24048__auto__ = (function (){try{while(true){
var result__24049__auto__ = switch__24046__auto__.call(null,state_28270);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24049__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24049__auto__;
}
break;
}
}catch (e28290){if((e28290 instanceof Object)){
var ex__24050__auto__ = e28290;
var statearr_28291_28302 = state_28270;
(statearr_28291_28302[(5)] = ex__24050__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28270);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28290;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28303 = state_28270;
state_28270 = G__28303;
continue;
} else {
return ret_value__24048__auto__;
}
break;
}
});
advenjure$ui$input$read_value_$_state_machine__24047__auto__ = function(state_28270){
switch(arguments.length){
case 0:
return advenjure$ui$input$read_value_$_state_machine__24047__auto____0.call(this);
case 1:
return advenjure$ui$input$read_value_$_state_machine__24047__auto____1.call(this,state_28270);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
advenjure$ui$input$read_value_$_state_machine__24047__auto__.cljs$core$IFn$_invoke$arity$0 = advenjure$ui$input$read_value_$_state_machine__24047__auto____0;
advenjure$ui$input$read_value_$_state_machine__24047__auto__.cljs$core$IFn$_invoke$arity$1 = advenjure$ui$input$read_value_$_state_machine__24047__auto____1;
return advenjure$ui$input$read_value_$_state_machine__24047__auto__;
})()
;})(switch__24046__auto__,c__24323__auto__,key_chan))
})();
var state__24325__auto__ = (function (){var statearr_28292 = f__24324__auto__.call(null);
(statearr_28292[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24323__auto__);

return statearr_28292;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24325__auto__);
});})(c__24323__auto__,key_chan))
);

return c__24323__auto__;
});
advenjure.ui.input.read_key = advenjure.ui.input.read_value;
cljs.reader.register_tag_parser_BANG_.call(null,"advenjure.items.Item",advenjure.items.map__GT_Item);
cljs.reader.register_tag_parser_BANG_.call(null,"advenjure.rooms.Room",advenjure.rooms.map__GT_Room);
advenjure.ui.input.read_file = (function advenjure$ui$input$read_file(file){
return cljs.reader.read_string.call(null,(localStorage[file]));
});
/**
 * Write command to the input channel
 */
advenjure.ui.input.process_command = (function advenjure$ui$input$process_command(command,term){
var c__24323__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24323__auto__){
return (function (){
var f__24324__auto__ = (function (){var switch__24046__auto__ = ((function (c__24323__auto__){
return (function (state_28322){
var state_val_28323 = (state_28322[(1)]);
if((state_val_28323 === (1))){
var inst_28318 = cljs.core.deref.call(null,advenjure.ui.input.input_chan);
var state_28322__$1 = state_28322;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28322__$1,(2),inst_28318,command);
} else {
if((state_val_28323 === (2))){
var inst_28320 = (state_28322[(2)]);
var state_28322__$1 = state_28322;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28322__$1,inst_28320);
} else {
return null;
}
}
});})(c__24323__auto__))
;
return ((function (switch__24046__auto__,c__24323__auto__){
return (function() {
var advenjure$ui$input$process_command_$_state_machine__24047__auto__ = null;
var advenjure$ui$input$process_command_$_state_machine__24047__auto____0 = (function (){
var statearr_28328 = [null,null,null,null,null,null,null];
(statearr_28328[(0)] = advenjure$ui$input$process_command_$_state_machine__24047__auto__);

(statearr_28328[(1)] = (1));

return statearr_28328;
});
var advenjure$ui$input$process_command_$_state_machine__24047__auto____1 = (function (state_28322){
while(true){
var ret_value__24048__auto__ = (function (){try{while(true){
var result__24049__auto__ = switch__24046__auto__.call(null,state_28322);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24049__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24049__auto__;
}
break;
}
}catch (e28329){if((e28329 instanceof Object)){
var ex__24050__auto__ = e28329;
var statearr_28330_28332 = state_28322;
(statearr_28330_28332[(5)] = ex__24050__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28322);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28329;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28333 = state_28322;
state_28322 = G__28333;
continue;
} else {
return ret_value__24048__auto__;
}
break;
}
});
advenjure$ui$input$process_command_$_state_machine__24047__auto__ = function(state_28322){
switch(arguments.length){
case 0:
return advenjure$ui$input$process_command_$_state_machine__24047__auto____0.call(this);
case 1:
return advenjure$ui$input$process_command_$_state_machine__24047__auto____1.call(this,state_28322);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
advenjure$ui$input$process_command_$_state_machine__24047__auto__.cljs$core$IFn$_invoke$arity$0 = advenjure$ui$input$process_command_$_state_machine__24047__auto____0;
advenjure$ui$input$process_command_$_state_machine__24047__auto__.cljs$core$IFn$_invoke$arity$1 = advenjure$ui$input$process_command_$_state_machine__24047__auto____1;
return advenjure$ui$input$process_command_$_state_machine__24047__auto__;
})()
;})(switch__24046__auto__,c__24323__auto__))
})();
var state__24325__auto__ = (function (){var statearr_28331 = f__24324__auto__.call(null);
(statearr_28331[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24323__auto__);

return statearr_28331;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24325__auto__);
});})(c__24323__auto__))
);

return c__24323__auto__;
});
/**
 * 
 *   Compare the verb tokens with the complete input tokens and if they match,
 *   return the next verb token to be suggested. If no match returns nil.
 *   
 */
advenjure.ui.input.get_suggested_token = (function advenjure$ui$input$get_suggested_token(verb_tokens,input_tokens){
var G__28360 = verb_tokens;
var vec__28362 = G__28360;
var seq__28363 = cljs.core.seq.call(null,vec__28362);
var first__28364 = cljs.core.first.call(null,seq__28363);
var seq__28363__$1 = cljs.core.next.call(null,seq__28363);
var verb = first__28364;
var next_verbs = seq__28363__$1;
var G__28361 = input_tokens;
var vec__28365 = G__28361;
var seq__28366 = cljs.core.seq.call(null,vec__28365);
var first__28367 = cljs.core.first.call(null,seq__28366);
var seq__28366__$1 = cljs.core.next.call(null,seq__28366);
var input = first__28367;
var next_inputs = seq__28366__$1;
var G__28360__$1 = G__28360;
var G__28361__$1 = G__28361;
while(true){
var vec__28368 = G__28360__$1;
var seq__28369 = cljs.core.seq.call(null,vec__28368);
var first__28370 = cljs.core.first.call(null,seq__28369);
var seq__28369__$1 = cljs.core.next.call(null,seq__28369);
var verb__$1 = first__28370;
var next_verbs__$1 = seq__28369__$1;
var vec__28371 = G__28361__$1;
var seq__28372 = cljs.core.seq.call(null,vec__28371);
var first__28373 = cljs.core.first.call(null,seq__28372);
var seq__28372__$1 = cljs.core.next.call(null,seq__28372);
var input__$1 = first__28373;
var next_inputs__$1 = seq__28372__$1;
if((input__$1 == null)){
return [cljs.core.str(verb__$1),cljs.core.str(" ")].join('');
} else {
if((verb__$1 == null)){
return null;
} else {
if(cljs.core._EQ_.call(null,clojure.string.trim.call(null,input__$1),clojure.string.trim.call(null,verb__$1))){
var G__28374 = next_verbs__$1;
var G__28375 = next_inputs__$1;
G__28360__$1 = G__28374;
G__28361__$1 = G__28375;
continue;
} else {
if(clojure.string.starts_with_QMARK_.call(null,verb__$1,"(?<")){
var G__28376 = next_verbs__$1;
var G__28377 = next_inputs__$1;
G__28360__$1 = G__28376;
G__28361__$1 = G__28377;
continue;
} else {
return null;
}
}
}
}
break;
}
});
advenjure.ui.input.expand_suggestion = (function advenjure$ui$input$expand_suggestion(token,items,dirs){
if(clojure.string.includes_QMARK_.call(null,token,"?<item")){
return cljs.core.map.call(null,(function (p1__28378_SHARP_){
return [cljs.core.str(p1__28378_SHARP_),cljs.core.str(" ")].join('');
}),items);
} else {
if(clojure.string.includes_QMARK_.call(null,token,"?<dir")){
return cljs.core.map.call(null,(function (p1__28379_SHARP_){
return [cljs.core.str(p1__28379_SHARP_),cljs.core.str(" ")].join('');
}),dirs);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [token], null);

}
}
});
advenjure.ui.input.tokenize_verb = (function advenjure$ui$input$tokenize_verb(verb){
return clojure.string.split.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,verb,/\$/,""),/\^/,""),/ /);
});
/**
 * 
 *   Get the finished tokens (partial tokens are ingnored, since that part of the
 *   completion is handled by jquery terminal).
 *   Encodes/decodes item and dir names to avoid breaking them in separate tokens.
 *   
 */
advenjure.ui.input.tokenize_input = (function advenjure$ui$input$tokenize_input(input,items,dirs){
var encode = (function (p1__28383_SHARP_,p2__28384_SHARP_){
return clojure.string.replace.call(null,p1__28383_SHARP_,cljs.core.re_pattern.call(null,p2__28384_SHARP_),clojure.string.replace.call(null,p2__28384_SHARP_,/ /,"%%W%%"));
});
var input__$1 = clojure.string.replace.call(null,input,/[\s|\u00A0]/," ");
var input__$2 = cljs.core.reduce.call(null,encode,input__$1,cljs.core.concat.call(null,items,dirs));
var tokens = clojure.string.split.call(null,input__$2,/ /);
var tokens__$1 = cljs.core.map.call(null,((function (encode,input__$1,input__$2,tokens){
return (function (p1__28385_SHARP_){
return clojure.string.replace.call(null,p1__28385_SHARP_,/%%W%%/," ");
});})(encode,input__$1,input__$2,tokens))
,tokens);
if(cljs.core._EQ_.call(null,cljs.core.last.call(null,input__$2)," ")){
return tokens__$1;
} else {
return cljs.core.butlast.call(null,tokens__$1);
}
});
advenjure.ui.input.get_full_input = (function advenjure$ui$input$get_full_input(){
return $(".prompt").next().text();
});
advenjure.ui.input.get_completion = (function advenjure$ui$input$get_completion(game_state,verb_map){
var verb_tokens = cljs.core.map.call(null,advenjure.ui.input.tokenize_verb,cljs.core.keys.call(null,verb_map));
var room = advenjure.utils.current_room.call(null,game_state);
var items = advenjure.items.all_item_names.call(null,cljs.core.concat.call(null,new cljs.core.Keyword(null,"inventory","inventory",860201871).cljs$core$IFn$_invoke$arity$1(game_state),new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(room),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [advenjure.utils.room_as_item.call(null,room)], null)));
var name_mappings = advenjure.rooms.visible_name_mappings.call(null,new cljs.core.Keyword(null,"room-map","room-map",978449264).cljs$core$IFn$_invoke$arity$1(game_state),new cljs.core.Keyword(null,"current-room","current-room",491649183).cljs$core$IFn$_invoke$arity$1(game_state));
var dirs = cljs.core.concat.call(null,cljs.core.keys.call(null,advenjure.utils.direction_mappings),cljs.core.keys.call(null,name_mappings));
return ((function (verb_tokens,room,items,name_mappings,dirs){
return (function (term,input,cb){
var input__$1 = advenjure.ui.input.get_full_input.call(null);
var input_tokens = advenjure.ui.input.tokenize_input.call(null,input__$1,items,dirs);
var suggested1 = cljs.core.remove.call(null,clojure.string.blank_QMARK_,cljs.core.distinct.call(null,cljs.core.map.call(null,((function (input__$1,input_tokens,verb_tokens,room,items,name_mappings,dirs){
return (function (p1__28389_SHARP_){
return advenjure.ui.input.get_suggested_token.call(null,p1__28389_SHARP_,input_tokens);
});})(input__$1,input_tokens,verb_tokens,room,items,name_mappings,dirs))
,verb_tokens)));
var suggested = cljs.core.distinct.call(null,cljs.core.mapcat.call(null,((function (input__$1,input_tokens,suggested1,verb_tokens,room,items,name_mappings,dirs){
return (function (p1__28390_SHARP_){
return advenjure.ui.input.expand_suggestion.call(null,p1__28390_SHARP_,items,dirs);
});})(input__$1,input_tokens,suggested1,verb_tokens,room,items,name_mappings,dirs))
,suggested1));
return cb.call(null,cljs.core.apply.call(null,cljs.core.array,suggested));
});
;})(verb_tokens,room,items,name_mappings,dirs))
});
advenjure.ui.input.set_interpreter = (function advenjure$ui$input$set_interpreter(gs){
var verb_map = cljs.core.get_in.call(null,gs,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"configuration","configuration",1431842520),new cljs.core.Keyword(null,"verb-map","verb-map",1285414746)], null));
var prompt_fn = cljs.core.get_in.call(null,gs,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"configuration","configuration",1431842520),new cljs.core.Keyword(null,"prompt","prompt",-78109487)], null));
var prompt = prompt_fn.call(null,gs);
if((advenjure.ui.input.term.call(null).level() > (1))){
advenjure.ui.input.term.call(null).pop();
} else {
}

return advenjure.ui.input.term.call(null).push(advenjure.ui.input.process_command,(function (){var obj28396 = {"prompt":prompt,"completion":advenjure.ui.input.get_completion.call(null,gs,verb_map)};
return obj28396;
})());
});
/**
 * Wait for input to be written in the input channel
 */
advenjure.ui.input.get_input = (function advenjure$ui$input$get_input(state){
var c__24323__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24323__auto__){
return (function (){
var f__24324__auto__ = (function (){var switch__24046__auto__ = ((function (c__24323__auto__){
return (function (state_28424){
var state_val_28425 = (state_28424[(1)]);
if((state_val_28425 === (1))){
var inst_28417 = advenjure.ui.input.set_interpreter.call(null,state);
var inst_28418 = advenjure.ui.input.term.call(null);
var inst_28419 = inst_28418.echo(" ");
var inst_28420 = cljs.core.deref.call(null,advenjure.ui.input.input_chan);
var state_28424__$1 = (function (){var statearr_28427 = state_28424;
(statearr_28427[(7)] = inst_28417);

(statearr_28427[(8)] = inst_28419);

return statearr_28427;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28424__$1,(2),inst_28420);
} else {
if((state_val_28425 === (2))){
var inst_28422 = (state_28424[(2)]);
var state_28424__$1 = state_28424;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28424__$1,inst_28422);
} else {
return null;
}
}
});})(c__24323__auto__))
;
return ((function (switch__24046__auto__,c__24323__auto__){
return (function() {
var advenjure$ui$input$get_input_$_state_machine__24047__auto__ = null;
var advenjure$ui$input$get_input_$_state_machine__24047__auto____0 = (function (){
var statearr_28432 = [null,null,null,null,null,null,null,null,null];
(statearr_28432[(0)] = advenjure$ui$input$get_input_$_state_machine__24047__auto__);

(statearr_28432[(1)] = (1));

return statearr_28432;
});
var advenjure$ui$input$get_input_$_state_machine__24047__auto____1 = (function (state_28424){
while(true){
var ret_value__24048__auto__ = (function (){try{while(true){
var result__24049__auto__ = switch__24046__auto__.call(null,state_28424);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24049__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24049__auto__;
}
break;
}
}catch (e28433){if((e28433 instanceof Object)){
var ex__24050__auto__ = e28433;
var statearr_28434_28440 = state_28424;
(statearr_28434_28440[(5)] = ex__24050__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28424);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28433;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28441 = state_28424;
state_28424 = G__28441;
continue;
} else {
return ret_value__24048__auto__;
}
break;
}
});
advenjure$ui$input$get_input_$_state_machine__24047__auto__ = function(state_28424){
switch(arguments.length){
case 0:
return advenjure$ui$input$get_input_$_state_machine__24047__auto____0.call(this);
case 1:
return advenjure$ui$input$get_input_$_state_machine__24047__auto____1.call(this,state_28424);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
advenjure$ui$input$get_input_$_state_machine__24047__auto__.cljs$core$IFn$_invoke$arity$0 = advenjure$ui$input$get_input_$_state_machine__24047__auto____0;
advenjure$ui$input$get_input_$_state_machine__24047__auto__.cljs$core$IFn$_invoke$arity$1 = advenjure$ui$input$get_input_$_state_machine__24047__auto____1;
return advenjure$ui$input$get_input_$_state_machine__24047__auto__;
})()
;})(switch__24046__auto__,c__24323__auto__))
})();
var state__24325__auto__ = (function (){var statearr_28435 = f__24324__auto__.call(null);
(statearr_28435[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24323__auto__);

return statearr_28435;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24325__auto__);
});})(c__24323__auto__))
);

return c__24323__auto__;
});
/**
 * Ask the user to enter a value
 */
advenjure.ui.input.prompt_value = (function advenjure$ui$input$prompt_value(prompt){
var c__24323__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24323__auto__){
return (function (){
var f__24324__auto__ = (function (){var switch__24046__auto__ = ((function (c__24323__auto__){
return (function (state_28470){
var state_val_28471 = (state_28470[(1)]);
if((state_val_28471 === (1))){
var inst_28464 = advenjure.ui.input.term.call(null);
var inst_28465 = inst_28464.set_prompt(prompt);
var inst_28466 = cljs.core.deref.call(null,advenjure.ui.input.input_chan);
var state_28470__$1 = (function (){var statearr_28472 = state_28470;
(statearr_28472[(7)] = inst_28465);

return statearr_28472;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28470__$1,(2),inst_28466);
} else {
if((state_val_28471 === (2))){
var inst_28468 = (state_28470[(2)]);
var state_28470__$1 = state_28470;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28470__$1,inst_28468);
} else {
return null;
}
}
});})(c__24323__auto__))
;
return ((function (switch__24046__auto__,c__24323__auto__){
return (function() {
var advenjure$ui$input$prompt_value_$_state_machine__24047__auto__ = null;
var advenjure$ui$input$prompt_value_$_state_machine__24047__auto____0 = (function (){
var statearr_28476 = [null,null,null,null,null,null,null,null];
(statearr_28476[(0)] = advenjure$ui$input$prompt_value_$_state_machine__24047__auto__);

(statearr_28476[(1)] = (1));

return statearr_28476;
});
var advenjure$ui$input$prompt_value_$_state_machine__24047__auto____1 = (function (state_28470){
while(true){
var ret_value__24048__auto__ = (function (){try{while(true){
var result__24049__auto__ = switch__24046__auto__.call(null,state_28470);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24049__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24049__auto__;
}
break;
}
}catch (e28477){if((e28477 instanceof Object)){
var ex__24050__auto__ = e28477;
var statearr_28478_28483 = state_28470;
(statearr_28478_28483[(5)] = ex__24050__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28470);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28477;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28486 = state_28470;
state_28470 = G__28486;
continue;
} else {
return ret_value__24048__auto__;
}
break;
}
});
advenjure$ui$input$prompt_value_$_state_machine__24047__auto__ = function(state_28470){
switch(arguments.length){
case 0:
return advenjure$ui$input$prompt_value_$_state_machine__24047__auto____0.call(this);
case 1:
return advenjure$ui$input$prompt_value_$_state_machine__24047__auto____1.call(this,state_28470);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
advenjure$ui$input$prompt_value_$_state_machine__24047__auto__.cljs$core$IFn$_invoke$arity$0 = advenjure$ui$input$prompt_value_$_state_machine__24047__auto____0;
advenjure$ui$input$prompt_value_$_state_machine__24047__auto__.cljs$core$IFn$_invoke$arity$1 = advenjure$ui$input$prompt_value_$_state_machine__24047__auto____1;
return advenjure$ui$input$prompt_value_$_state_machine__24047__auto__;
})()
;})(switch__24046__auto__,c__24323__auto__))
})();
var state__24325__auto__ = (function (){var statearr_28479 = f__24324__auto__.call(null);
(statearr_28479[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24323__auto__);

return statearr_28479;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24325__auto__);
});})(c__24323__auto__))
);

return c__24323__auto__;
});

//# sourceMappingURL=input.js.map?rel=1605080719089