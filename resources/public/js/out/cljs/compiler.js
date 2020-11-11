// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.compiler');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('cljs.tools.reader');
goog.require('cljs.env');
goog.require('cljs.analyzer');
goog.require('cljs.source_map');
goog.require('goog.string.StringBuffer');
goog.require('clojure.string');
cljs.compiler.js_reserved = cljs.analyzer.js_reserved;
cljs.compiler._STAR_recompiled_STAR_ = null;
cljs.compiler._STAR_inputs_STAR_ = null;
cljs.compiler._STAR_source_map_data_STAR_ = null;
cljs.compiler._STAR_lexical_renames_STAR_ = cljs.core.PersistentArrayMap.EMPTY;
cljs.compiler.cljs_reserved_file_names = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["deps.cljs",null], null), null);
cljs.compiler.ns_first_segments = (function cljs$compiler$ns_first_segments(){
var get_first_ns_segment = (function cljs$compiler$ns_first_segments_$_get_first_ns_segment(ns){
return cljs.core.first.call(null,clojure.string.split.call(null,[cljs.core.str(ns)].join(''),/\./));
});
return cljs.core.map.call(null,get_first_ns_segment,cljs.core.keys.call(null,new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_))));
});
cljs.compiler.shadow_depth = (function cljs$compiler$shadow_depth(s){
var map__28534 = s;
var map__28534__$1 = ((((!((map__28534 == null)))?((((map__28534.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28534.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28534):map__28534);
var name = cljs.core.get.call(null,map__28534__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__28534__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var d = (0);
var G__28537 = info;
var map__28538 = G__28537;
var map__28538__$1 = ((((!((map__28538 == null)))?((((map__28538.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28538.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28538):map__28538);
var shadow = cljs.core.get.call(null,map__28538__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
var d__$1 = d;
var G__28537__$1 = G__28537;
while(true){
var d__$2 = d__$1;
var map__28540 = G__28537__$1;
var map__28540__$1 = ((((!((map__28540 == null)))?((((map__28540.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28540.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28540):map__28540);
var shadow__$1 = cljs.core.get.call(null,map__28540__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
if(cljs.core.truth_(shadow__$1)){
var G__28542 = (d__$2 + (1));
var G__28543 = shadow__$1;
d__$1 = G__28542;
G__28537__$1 = G__28543;
continue;
} else {
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([[cljs.core.str(name)].join('')], true),cljs.compiler.ns_first_segments.call(null)))){
return (d__$2 + (1));
} else {
return d__$2;

}
}
break;
}
});
cljs.compiler.hash_scope = (function cljs$compiler$hash_scope(s){
return cljs.core.hash_combine.call(null,cljs.core._hash.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(s)),cljs.compiler.shadow_depth.call(null,s));
});
cljs.compiler.fn_self_name = (function cljs$compiler$fn_self_name(p__28544){
var map__28549 = p__28544;
var map__28549__$1 = ((((!((map__28549 == null)))?((((map__28549.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28549.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28549):map__28549);
var name_var = map__28549__$1;
var name = cljs.core.get.call(null,map__28549__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__28549__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var name__$1 = clojure.string.replace.call(null,[cljs.core.str(name)].join(''),"..","_DOT__DOT_");
var map__28551 = info;
var map__28551__$1 = ((((!((map__28551 == null)))?((((map__28551.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28551.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28551):map__28551);
var ns = cljs.core.get.call(null,map__28551__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var fn_scope = cljs.core.get.call(null,map__28551__$1,new cljs.core.Keyword(null,"fn-scope","fn-scope",-865664859));
var scoped_name = cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,"_$_",cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.str,new cljs.core.Keyword(null,"name","name",1843675177)),fn_scope),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name__$1], null))));
return cljs.core.symbol.call(null,cljs.compiler.munge.call(null,[cljs.core.str(clojure.string.replace.call(null,[cljs.core.str(ns)].join(''),".","$")),cljs.core.str("$"),cljs.core.str(scoped_name)].join('')));
});
cljs.compiler.munge_reserved = (function cljs$compiler$munge_reserved(reserved){
return (function (s){
if(!((cljs.core.get.call(null,reserved,s) == null))){
return [cljs.core.str(s),cljs.core.str("$")].join('');
} else {
return s;
}
});
});
cljs.compiler.munge = (function cljs$compiler$munge(var_args){
var args28553 = [];
var len__21530__auto___28556 = arguments.length;
var i__21531__auto___28557 = (0);
while(true){
if((i__21531__auto___28557 < len__21530__auto___28556)){
args28553.push((arguments[i__21531__auto___28557]));

var G__28558 = (i__21531__auto___28557 + (1));
i__21531__auto___28557 = G__28558;
continue;
} else {
}
break;
}

var G__28555 = args28553.length;
switch (G__28555) {
case 1:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28553.length)].join('')));

}
});

cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cljs.compiler.munge.call(null,s,cljs.compiler.js_reserved);
});

cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2 = (function (s,reserved){
if(cljs.analyzer.cljs_map_QMARK_.call(null,s)){
var name_var = s;
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(name_var);
var field = new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(name_var);
var info = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(name_var);
if(!((new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531).cljs$core$IFn$_invoke$arity$1(info) == null))){
return cljs.compiler.fn_self_name.call(null,s);
} else {
var depth = cljs.compiler.shadow_depth.call(null,s);
var code = cljs.compiler.hash_scope.call(null,s);
var renamed = cljs.core.get.call(null,cljs.compiler._STAR_lexical_renames_STAR_,code);
var name__$1 = ((field === true)?[cljs.core.str("self__."),cljs.core.str(name)].join(''):((!((renamed == null)))?renamed:name
));
var munged_name = cljs.compiler.munge.call(null,name__$1,reserved);
if((field === true) || ((depth === (0)))){
return munged_name;
} else {
return cljs.core.symbol.call(null,[cljs.core.str(munged_name),cljs.core.str("__$"),cljs.core.str(depth)].join(''));
}
}
} else {
var ss = clojure.string.replace.call(null,[cljs.core.str(s)].join(''),"..","_DOT__DOT_");
var ss__$1 = clojure.string.replace.call(null,ss,(new RegExp("\\/(.)")),".$1");
var rf = cljs.compiler.munge_reserved.call(null,reserved);
var ss__$2 = cljs.core.map.call(null,rf,clojure.string.split.call(null,ss__$1,/\./));
var ss__$3 = clojure.string.join.call(null,".",ss__$2);
var ms = cljs.core.munge.call(null,ss__$3);
if((s instanceof cljs.core.Symbol)){
return cljs.core.symbol.call(null,ms);
} else {
return ms;
}
}
});

cljs.compiler.munge.cljs$lang$maxFixedArity = 2;

cljs.compiler.comma_sep = (function cljs$compiler$comma_sep(xs){
return cljs.core.interpose.call(null,",",xs);
});
cljs.compiler.escape_char = (function cljs$compiler$escape_char(c){
var cp = goog.string.hashCode(c);
var G__28561 = cp;
switch (G__28561) {
case (34):
return "\\\"";

break;
case (92):
return "\\\\";

break;
case (8):
return "\\b";

break;
case (12):
return "\\f";

break;
case (10):
return "\\n";

break;
case (13):
return "\\r";

break;
case (9):
return "\\t";

break;
default:
if((((31) < cp)) && ((cp < (127)))){
return c;
} else {
var unpadded = cp.toString((16));
var pad = cljs.core.subs.call(null,"0000",unpadded.length);
return [cljs.core.str("\\u"),cljs.core.str(pad),cljs.core.str(unpadded)].join('');
}

}
});
cljs.compiler.escape_string = (function cljs$compiler$escape_string(s){
var sb = (new goog.string.StringBuffer());
var seq__28567_28571 = cljs.core.seq.call(null,s);
var chunk__28568_28572 = null;
var count__28569_28573 = (0);
var i__28570_28574 = (0);
while(true){
if((i__28570_28574 < count__28569_28573)){
var c_28575 = cljs.core._nth.call(null,chunk__28568_28572,i__28570_28574);
sb.append(cljs.compiler.escape_char.call(null,c_28575));

var G__28576 = seq__28567_28571;
var G__28577 = chunk__28568_28572;
var G__28578 = count__28569_28573;
var G__28579 = (i__28570_28574 + (1));
seq__28567_28571 = G__28576;
chunk__28568_28572 = G__28577;
count__28569_28573 = G__28578;
i__28570_28574 = G__28579;
continue;
} else {
var temp__4657__auto___28580 = cljs.core.seq.call(null,seq__28567_28571);
if(temp__4657__auto___28580){
var seq__28567_28581__$1 = temp__4657__auto___28580;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28567_28581__$1)){
var c__21266__auto___28582 = cljs.core.chunk_first.call(null,seq__28567_28581__$1);
var G__28583 = cljs.core.chunk_rest.call(null,seq__28567_28581__$1);
var G__28584 = c__21266__auto___28582;
var G__28585 = cljs.core.count.call(null,c__21266__auto___28582);
var G__28586 = (0);
seq__28567_28571 = G__28583;
chunk__28568_28572 = G__28584;
count__28569_28573 = G__28585;
i__28570_28574 = G__28586;
continue;
} else {
var c_28587 = cljs.core.first.call(null,seq__28567_28581__$1);
sb.append(cljs.compiler.escape_char.call(null,c_28587));

var G__28588 = cljs.core.next.call(null,seq__28567_28581__$1);
var G__28589 = null;
var G__28590 = (0);
var G__28591 = (0);
seq__28567_28571 = G__28588;
chunk__28568_28572 = G__28589;
count__28569_28573 = G__28590;
i__28570_28574 = G__28591;
continue;
}
} else {
}
}
break;
}

return sb.toString();
});
cljs.compiler.wrap_in_double_quotes = (function cljs$compiler$wrap_in_double_quotes(x){
return [cljs.core.str("\""),cljs.core.str(x),cljs.core.str("\"")].join('');
});
if(typeof cljs.compiler.emit_STAR_ !== 'undefined'){
} else {
cljs.compiler.emit_STAR_ = (function (){var method_table__21380__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__21381__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__21382__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__21383__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__21384__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.compiler","emit*"),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__21384__auto__,method_table__21380__auto__,prefer_table__21381__auto__,method_cache__21382__auto__,cached_hierarchy__21383__auto__));
})();
}
cljs.compiler.emit = (function cljs$compiler$emit(ast){
var val__25104__auto__ = cljs.env._STAR_compiler_STAR_;
if((val__25104__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = cljs.env.default_compiler_env.call(null);
} else {
}

try{if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
var map__28597_28602 = ast;
var map__28597_28603__$1 = ((((!((map__28597_28602 == null)))?((((map__28597_28602.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28597_28602.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28597_28602):map__28597_28602);
var env_28604 = cljs.core.get.call(null,map__28597_28603__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core.truth_(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env_28604))){
var map__28599_28605 = env_28604;
var map__28599_28606__$1 = ((((!((map__28599_28605 == null)))?((((map__28599_28605.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28599_28605.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28599_28605):map__28599_28605);
var line_28607 = cljs.core.get.call(null,map__28599_28606__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_28608 = cljs.core.get.call(null,map__28599_28606__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,((function (map__28599_28605,map__28599_28606__$1,line_28607,column_28608,map__28597_28602,map__28597_28603__$1,env_28604,val__25104__auto__){
return (function (m){
var minfo = (function (){var G__28601 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gcol","gcol",309250807),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"gline","gline",-1086242431),new cljs.core.Keyword(null,"gen-line","gen-line",589592125).cljs$core$IFn$_invoke$arity$1(m)], null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast),new cljs.core.Keyword(null,"var","var",-769682797))){
return cljs.core.assoc.call(null,G__28601,new cljs.core.Keyword(null,"name","name",1843675177),[cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(ast)))].join(''));
} else {
return G__28601;
}
})();
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-map","source-map",1706252311),(line_28607 - (1))], null),cljs.core.fnil.call(null,((function (minfo,map__28599_28605,map__28599_28606__$1,line_28607,column_28608,map__28597_28602,map__28597_28603__$1,env_28604,val__25104__auto__){
return (function (line__$1){
return cljs.core.update_in.call(null,line__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(column_28608)?(column_28608 - (1)):(0))], null),cljs.core.fnil.call(null,((function (minfo,map__28599_28605,map__28599_28606__$1,line_28607,column_28608,map__28597_28602,map__28597_28603__$1,env_28604,val__25104__auto__){
return (function (column__$1){
return cljs.core.conj.call(null,column__$1,minfo);
});})(minfo,map__28599_28605,map__28599_28606__$1,line_28607,column_28608,map__28597_28602,map__28597_28603__$1,env_28604,val__25104__auto__))
,cljs.core.PersistentVector.EMPTY));
});})(minfo,map__28599_28605,map__28599_28606__$1,line_28607,column_28608,map__28597_28602,map__28597_28603__$1,env_28604,val__25104__auto__))
,cljs.core.sorted_map.call(null)));
});})(map__28599_28605,map__28599_28606__$1,line_28607,column_28608,map__28597_28602,map__28597_28603__$1,env_28604,val__25104__auto__))
);
} else {
}
} else {
}

return cljs.compiler.emit_STAR_.call(null,ast);
}finally {if((val__25104__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = null;
} else {
}
}});
cljs.compiler.emits = (function cljs$compiler$emits(var_args){
var args__21537__auto__ = [];
var len__21530__auto___28615 = arguments.length;
var i__21531__auto___28616 = (0);
while(true){
if((i__21531__auto___28616 < len__21530__auto___28615)){
args__21537__auto__.push((arguments[i__21531__auto___28616]));

var G__28617 = (i__21531__auto___28616 + (1));
i__21531__auto___28616 = G__28617;
continue;
} else {
}
break;
}

var argseq__21538__auto__ = ((((0) < args__21537__auto__.length))?(new cljs.core.IndexedSeq(args__21537__auto__.slice((0)),(0),null)):null);
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(argseq__21538__auto__);
});

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
var seq__28611_28618 = cljs.core.seq.call(null,xs);
var chunk__28612_28619 = null;
var count__28613_28620 = (0);
var i__28614_28621 = (0);
while(true){
if((i__28614_28621 < count__28613_28620)){
var x_28622 = cljs.core._nth.call(null,chunk__28612_28619,i__28614_28621);
if((x_28622 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_.call(null,x_28622)){
cljs.compiler.emit.call(null,x_28622);
} else {
if(cljs.analyzer.cljs_seq_QMARK_.call(null,x_28622)){
cljs.core.apply.call(null,cljs.compiler.emits,x_28622);
} else {
if(goog.isFunction(x_28622)){
x_28622.call(null);
} else {
var s_28623 = cljs.core.print_str.call(null,x_28622);
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gen-col","gen-col",1901918303)], null),((function (seq__28611_28618,chunk__28612_28619,count__28613_28620,i__28614_28621,s_28623,x_28622){
return (function (p1__28609_SHARP_){
return (p1__28609_SHARP_ + cljs.core.count.call(null,s_28623));
});})(seq__28611_28618,chunk__28612_28619,count__28613_28620,i__28614_28621,s_28623,x_28622))
);
}

cljs.core.print.call(null,s_28623);

}
}
}
}

var G__28624 = seq__28611_28618;
var G__28625 = chunk__28612_28619;
var G__28626 = count__28613_28620;
var G__28627 = (i__28614_28621 + (1));
seq__28611_28618 = G__28624;
chunk__28612_28619 = G__28625;
count__28613_28620 = G__28626;
i__28614_28621 = G__28627;
continue;
} else {
var temp__4657__auto___28628 = cljs.core.seq.call(null,seq__28611_28618);
if(temp__4657__auto___28628){
var seq__28611_28629__$1 = temp__4657__auto___28628;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28611_28629__$1)){
var c__21266__auto___28630 = cljs.core.chunk_first.call(null,seq__28611_28629__$1);
var G__28631 = cljs.core.chunk_rest.call(null,seq__28611_28629__$1);
var G__28632 = c__21266__auto___28630;
var G__28633 = cljs.core.count.call(null,c__21266__auto___28630);
var G__28634 = (0);
seq__28611_28618 = G__28631;
chunk__28612_28619 = G__28632;
count__28613_28620 = G__28633;
i__28614_28621 = G__28634;
continue;
} else {
var x_28635 = cljs.core.first.call(null,seq__28611_28629__$1);
if((x_28635 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_.call(null,x_28635)){
cljs.compiler.emit.call(null,x_28635);
} else {
if(cljs.analyzer.cljs_seq_QMARK_.call(null,x_28635)){
cljs.core.apply.call(null,cljs.compiler.emits,x_28635);
} else {
if(goog.isFunction(x_28635)){
x_28635.call(null);
} else {
var s_28636 = cljs.core.print_str.call(null,x_28635);
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gen-col","gen-col",1901918303)], null),((function (seq__28611_28618,chunk__28612_28619,count__28613_28620,i__28614_28621,s_28636,x_28635,seq__28611_28629__$1,temp__4657__auto___28628){
return (function (p1__28609_SHARP_){
return (p1__28609_SHARP_ + cljs.core.count.call(null,s_28636));
});})(seq__28611_28618,chunk__28612_28619,count__28613_28620,i__28614_28621,s_28636,x_28635,seq__28611_28629__$1,temp__4657__auto___28628))
);
}

cljs.core.print.call(null,s_28636);

}
}
}
}

var G__28637 = cljs.core.next.call(null,seq__28611_28629__$1);
var G__28638 = null;
var G__28639 = (0);
var G__28640 = (0);
seq__28611_28618 = G__28637;
chunk__28612_28619 = G__28638;
count__28613_28620 = G__28639;
i__28614_28621 = G__28640;
continue;
}
} else {
}
}
break;
}

return null;
});

cljs.compiler.emits.cljs$lang$maxFixedArity = (0);

cljs.compiler.emits.cljs$lang$applyTo = (function (seq28610){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28610));
});

cljs.compiler.emitln = (function cljs$compiler$emitln(var_args){
var args__21537__auto__ = [];
var len__21530__auto___28645 = arguments.length;
var i__21531__auto___28646 = (0);
while(true){
if((i__21531__auto___28646 < len__21530__auto___28645)){
args__21537__auto__.push((arguments[i__21531__auto___28646]));

var G__28647 = (i__21531__auto___28646 + (1));
i__21531__auto___28646 = G__28647;
continue;
} else {
}
break;
}

var argseq__21538__auto__ = ((((0) < args__21537__auto__.length))?(new cljs.core.IndexedSeq(args__21537__auto__.slice((0)),(0),null)):null);
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(argseq__21538__auto__);
});

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
cljs.core.apply.call(null,cljs.compiler.emits,xs);

cljs.core.println.call(null);

if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,(function (p__28642){
var map__28643 = p__28642;
var map__28643__$1 = ((((!((map__28643 == null)))?((((map__28643.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28643.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28643):map__28643);
var m = map__28643__$1;
var gen_line = cljs.core.get.call(null,map__28643__$1,new cljs.core.Keyword(null,"gen-line","gen-line",589592125));
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"gen-line","gen-line",589592125),(gen_line + (1)),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(0));
}));
} else {
}

return null;
});

cljs.compiler.emitln.cljs$lang$maxFixedArity = (0);

cljs.compiler.emitln.cljs$lang$applyTo = (function (seq28641){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28641));
});

cljs.compiler.emit_str = (function cljs$compiler$emit_str(expr){
var sb__21441__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_28650_28652 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_28651_28653 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_28650_28652,_STAR_print_fn_STAR_28651_28653,sb__21441__auto__){
return (function (x__21442__auto__){
return sb__21441__auto__.append(x__21442__auto__);
});})(_STAR_print_newline_STAR_28650_28652,_STAR_print_fn_STAR_28651_28653,sb__21441__auto__))
;

try{cljs.compiler.emit.call(null,expr);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_28651_28653;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_28650_28652;
}
return [cljs.core.str(sb__21441__auto__)].join('');
});
if(typeof cljs.compiler.emit_constant !== 'undefined'){
} else {
cljs.compiler.emit_constant = (function (){var method_table__21380__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__21381__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__21382__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__21383__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__21384__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.compiler","emit-constant"),cljs.core.type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__21384__auto__,method_table__21380__auto__,prefer_table__21381__auto__,method_cache__21382__auto__,cached_hierarchy__21383__auto__));
})();
}
cljs.core._add_method.call(null,cljs.compiler.emit_constant,null,(function (x){
return cljs.compiler.emits.call(null,"null");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,Number,(function (x){
return cljs.compiler.emits.call(null,"(",x,")");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,String,(function (x){
return cljs.compiler.emits.call(null,cljs.compiler.wrap_in_double_quotes.call(null,cljs.compiler.escape_string.call(null,x)));
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,Boolean,(function (x){
return cljs.compiler.emits.call(null,(cljs.core.truth_(x)?"true":"false"));
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,RegExp,(function (x){
if(cljs.core._EQ_.call(null,"",[cljs.core.str(x)].join(''))){
return cljs.compiler.emits.call(null,"(new RegExp(\"\"))");
} else {
var vec__28654 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,[cljs.core.str(x)].join(''));
var _ = cljs.core.nth.call(null,vec__28654,(0),null);
var flags = cljs.core.nth.call(null,vec__28654,(1),null);
var pattern = cljs.core.nth.call(null,vec__28654,(2),null);
return cljs.compiler.emits.call(null,pattern);
}
}));
cljs.compiler.emits_keyword = (function cljs$compiler$emits_keyword(kw){
var ns = cljs.core.namespace.call(null,kw);
var name = cljs.core.name.call(null,kw);
cljs.compiler.emits.call(null,"new cljs.core.Keyword(");

cljs.compiler.emit_constant.call(null,ns);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,name);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,(cljs.core.truth_(ns)?[cljs.core.str(ns),cljs.core.str("/"),cljs.core.str(name)].join(''):name));

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,cljs.core.hash.call(null,kw));

return cljs.compiler.emits.call(null,")");
});
cljs.compiler.emits_symbol = (function cljs$compiler$emits_symbol(sym){
var ns = cljs.core.namespace.call(null,sym);
var name = cljs.core.name.call(null,sym);
var symstr = ((!((ns == null)))?[cljs.core.str(ns),cljs.core.str("/"),cljs.core.str(name)].join(''):name);
cljs.compiler.emits.call(null,"new cljs.core.Symbol(");

cljs.compiler.emit_constant.call(null,ns);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,name);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,symstr);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,cljs.core.hash.call(null,sym));

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,null);

return cljs.compiler.emits.call(null,")");
});
cljs.core._add_method.call(null,cljs.compiler.emit_constant,cljs.core.Keyword,(function (x){
if(cljs.core.truth_(new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_))))){
var value = x.call(null,new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
return cljs.compiler.emits.call(null,"cljs.core.",value);
} else {
return cljs.compiler.emits_keyword.call(null,x);
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,cljs.core.Symbol,(function (x){
if(cljs.core.truth_(new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_))))){
var value = x.call(null,new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
return cljs.compiler.emits.call(null,"cljs.core.",value);
} else {
return cljs.compiler.emits_symbol.call(null,x);
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,Date,(function (date){
return cljs.compiler.emits.call(null,"new Date(",date.getTime(),")");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,cljs.core.UUID,(function (uuid){
var uuid_str = uuid.toString();
return cljs.compiler.emits.call(null,"new cljs.core.UUID(\"",uuid_str,"\", ",cljs.core.hash.call(null,uuid_str),")");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"no-op","no-op",-93046065),(function (m){
return null;
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"var","var",-769682797),(function (p__28658){
var map__28659 = p__28658;
var map__28659__$1 = ((((!((map__28659 == null)))?((((map__28659.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28659.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28659):map__28659);
var arg = map__28659__$1;
var info = cljs.core.get.call(null,map__28659__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var env = cljs.core.get.call(null,map__28659__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var form = cljs.core.get.call(null,map__28659__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var var_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info);
var info__$1 = ((cljs.core._EQ_.call(null,cljs.core.namespace.call(null,var_name),"js"))?(function (){var js_module_name = cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-module-index","js-module-index",2072061931),cljs.core.name.call(null,var_name)], null));
var or__20455__auto__ = js_module_name;
if(cljs.core.truth_(or__20455__auto__)){
return or__20455__auto__;
} else {
return cljs.core.name.call(null,var_name);
}
})():info);
if(cljs.core.truth_(new cljs.core.Keyword(null,"binding-form?","binding-form?",1728940169).cljs$core$IFn$_invoke$arity$1(arg))){
return cljs.compiler.emits.call(null,cljs.compiler.munge.call(null,arg));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var env__28518__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__28518__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,(function (){var G__28661 = info__$1;
if(cljs.core.not_EQ_.call(null,form,new cljs.core.Symbol("js","-Infinity","js/-Infinity",958706333,null))){
return cljs.compiler.munge.call(null,G__28661);
} else {
return G__28661;
}
})());

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__28518__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"var-special","var-special",1131576802),(function (p__28662){
var map__28663 = p__28662;
var map__28663__$1 = ((((!((map__28663 == null)))?((((map__28663.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28663.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28663):map__28663);
var arg = map__28663__$1;
var env = cljs.core.get.call(null,map__28663__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var var$ = cljs.core.get.call(null,map__28663__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var sym = cljs.core.get.call(null,map__28663__$1,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var meta = cljs.core.get.call(null,map__28663__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
if(cljs.analyzer.ast_QMARK_.call(null,sym)){
} else {
throw (new Error("Assert failed: (ana/ast? sym)"));
}

if(cljs.analyzer.ast_QMARK_.call(null,meta)){
} else {
throw (new Error("Assert failed: (ana/ast? meta)"));
}

var map__28665 = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(var$);
var map__28665__$1 = ((((!((map__28665 == null)))?((((map__28665.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28665.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28665):map__28665);
var name = cljs.core.get.call(null,map__28665__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env__28518__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__28518__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"new cljs.core.Var(function(){return ",cljs.compiler.munge.call(null,name),";},",sym,",",meta,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__28518__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"meta","meta",1499536964),(function (p__28667){
var map__28668 = p__28667;
var map__28668__$1 = ((((!((map__28668 == null)))?((((map__28668.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28668.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28668):map__28668);
var expr = cljs.core.get.call(null,map__28668__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var meta = cljs.core.get.call(null,map__28668__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var env = cljs.core.get.call(null,map__28668__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__28518__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__28518__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"cljs.core.with_meta(",expr,",",meta,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__28518__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.array_map_threshold = (8);
cljs.compiler.distinct_keys_QMARK_ = (function cljs$compiler$distinct_keys_QMARK_(keys){
return (cljs.core.every_QMARK_.call(null,(function (p1__28670_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__28670_SHARP_),new cljs.core.Keyword(null,"constant","constant",-379609303));
}),keys)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,keys)),cljs.core.count.call(null,keys)));
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"map","map",1371690461),(function (p__28671){
var map__28672 = p__28671;
var map__28672__$1 = ((((!((map__28672 == null)))?((((map__28672.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28672.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28672):map__28672);
var env = cljs.core.get.call(null,map__28672__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var keys = cljs.core.get.call(null,map__28672__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.call(null,map__28672__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env__28518__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__28518__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if((cljs.core.count.call(null,keys) === (0))){
cljs.compiler.emits.call(null,"cljs.core.PersistentArrayMap.EMPTY");
} else {
if((cljs.core.count.call(null,keys) <= cljs.compiler.array_map_threshold)){
if(cljs.core.truth_(cljs.compiler.distinct_keys_QMARK_.call(null,keys))){
cljs.compiler.emits.call(null,"new cljs.core.PersistentArrayMap(null, ",cljs.core.count.call(null,keys),", [",cljs.compiler.comma_sep.call(null,cljs.core.interleave.call(null,keys,vals)),"], null)");
} else {
cljs.compiler.emits.call(null,"cljs.core.PersistentArrayMap.fromArray([",cljs.compiler.comma_sep.call(null,cljs.core.interleave.call(null,keys,vals)),"], true, false)");
}
} else {
cljs.compiler.emits.call(null,"cljs.core.PersistentHashMap.fromArrays([",cljs.compiler.comma_sep.call(null,keys),"],[",cljs.compiler.comma_sep.call(null,vals),"])");

}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__28518__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"list","list",765357683),(function (p__28674){
var map__28675 = p__28674;
var map__28675__$1 = ((((!((map__28675 == null)))?((((map__28675.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28675.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28675):map__28675);
var items = cljs.core.get.call(null,map__28675__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__28675__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__28518__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__28518__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.empty_QMARK_.call(null,items)){
cljs.compiler.emits.call(null,"cljs.core.List.EMPTY");
} else {
cljs.compiler.emits.call(null,"cljs.core.list(",cljs.compiler.comma_sep.call(null,items),")");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__28518__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"vector","vector",1902966158),(function (p__28677){
var map__28678 = p__28677;
var map__28678__$1 = ((((!((map__28678 == null)))?((((map__28678.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28678.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28678):map__28678);
var items = cljs.core.get.call(null,map__28678__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__28678__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__28518__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__28518__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.empty_QMARK_.call(null,items)){
cljs.compiler.emits.call(null,"cljs.core.PersistentVector.EMPTY");
} else {
var cnt_28680 = cljs.core.count.call(null,items);
if((cnt_28680 < (32))){
cljs.compiler.emits.call(null,"new cljs.core.PersistentVector(null, ",cnt_28680,", 5, cljs.core.PersistentVector.EMPTY_NODE, [",cljs.compiler.comma_sep.call(null,items),"], null)");
} else {
cljs.compiler.emits.call(null,"cljs.core.PersistentVector.fromArray([",cljs.compiler.comma_sep.call(null,items),"], true)");
}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__28518__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.distinct_constants_QMARK_ = (function cljs$compiler$distinct_constants_QMARK_(items){
return (cljs.core.every_QMARK_.call(null,(function (p1__28681_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__28681_SHARP_),new cljs.core.Keyword(null,"constant","constant",-379609303));
}),items)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,items)),cljs.core.count.call(null,items)));
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set","set",304602554),(function (p__28682){
var map__28683 = p__28682;
var map__28683__$1 = ((((!((map__28683 == null)))?((((map__28683.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28683.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28683):map__28683);
var items = cljs.core.get.call(null,map__28683__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__28683__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__28518__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__28518__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.empty_QMARK_.call(null,items)){
cljs.compiler.emits.call(null,"cljs.core.PersistentHashSet.EMPTY");
} else {
if(cljs.core.truth_(cljs.compiler.distinct_constants_QMARK_.call(null,items))){
cljs.compiler.emits.call(null,"new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, ",cljs.core.count.call(null,items),", [",cljs.compiler.comma_sep.call(null,cljs.core.interleave.call(null,items,cljs.core.repeat.call(null,"null"))),"], null), null)");
} else {
cljs.compiler.emits.call(null,"cljs.core.PersistentHashSet.fromArray([",cljs.compiler.comma_sep.call(null,items),"], true)");

}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__28518__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js-value","js-value",-758336661),(function (p__28685){
var map__28686 = p__28685;
var map__28686__$1 = ((((!((map__28686 == null)))?((((map__28686.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28686.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28686):map__28686);
var items = cljs.core.get.call(null,map__28686__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var js_type = cljs.core.get.call(null,map__28686__$1,new cljs.core.Keyword(null,"js-type","js-type",539386702));
var env = cljs.core.get.call(null,map__28686__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__28518__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__28518__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core._EQ_.call(null,js_type,new cljs.core.Keyword(null,"object","object",1474613949))){
cljs.compiler.emits.call(null,"({");

var temp__4657__auto___28704 = cljs.core.seq.call(null,items);
if(temp__4657__auto___28704){
var items_28705__$1 = temp__4657__auto___28704;
var vec__28688_28706 = items_28705__$1;
var seq__28689_28707 = cljs.core.seq.call(null,vec__28688_28706);
var first__28690_28708 = cljs.core.first.call(null,seq__28689_28707);
var seq__28689_28709__$1 = cljs.core.next.call(null,seq__28689_28707);
var vec__28691_28710 = first__28690_28708;
var k_28711 = cljs.core.nth.call(null,vec__28691_28710,(0),null);
var v_28712 = cljs.core.nth.call(null,vec__28691_28710,(1),null);
var r_28713 = seq__28689_28709__$1;
cljs.compiler.emits.call(null,"\"",cljs.core.name.call(null,k_28711),"\": ",v_28712);

var seq__28694_28714 = cljs.core.seq.call(null,r_28713);
var chunk__28695_28715 = null;
var count__28696_28716 = (0);
var i__28697_28717 = (0);
while(true){
if((i__28697_28717 < count__28696_28716)){
var vec__28698_28718 = cljs.core._nth.call(null,chunk__28695_28715,i__28697_28717);
var k_28719__$1 = cljs.core.nth.call(null,vec__28698_28718,(0),null);
var v_28720__$1 = cljs.core.nth.call(null,vec__28698_28718,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_28719__$1),"\": ",v_28720__$1);

var G__28721 = seq__28694_28714;
var G__28722 = chunk__28695_28715;
var G__28723 = count__28696_28716;
var G__28724 = (i__28697_28717 + (1));
seq__28694_28714 = G__28721;
chunk__28695_28715 = G__28722;
count__28696_28716 = G__28723;
i__28697_28717 = G__28724;
continue;
} else {
var temp__4657__auto___28725__$1 = cljs.core.seq.call(null,seq__28694_28714);
if(temp__4657__auto___28725__$1){
var seq__28694_28726__$1 = temp__4657__auto___28725__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28694_28726__$1)){
var c__21266__auto___28727 = cljs.core.chunk_first.call(null,seq__28694_28726__$1);
var G__28728 = cljs.core.chunk_rest.call(null,seq__28694_28726__$1);
var G__28729 = c__21266__auto___28727;
var G__28730 = cljs.core.count.call(null,c__21266__auto___28727);
var G__28731 = (0);
seq__28694_28714 = G__28728;
chunk__28695_28715 = G__28729;
count__28696_28716 = G__28730;
i__28697_28717 = G__28731;
continue;
} else {
var vec__28701_28732 = cljs.core.first.call(null,seq__28694_28726__$1);
var k_28733__$1 = cljs.core.nth.call(null,vec__28701_28732,(0),null);
var v_28734__$1 = cljs.core.nth.call(null,vec__28701_28732,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_28733__$1),"\": ",v_28734__$1);

var G__28735 = cljs.core.next.call(null,seq__28694_28726__$1);
var G__28736 = null;
var G__28737 = (0);
var G__28738 = (0);
seq__28694_28714 = G__28735;
chunk__28695_28715 = G__28736;
count__28696_28716 = G__28737;
i__28697_28717 = G__28738;
continue;
}
} else {
}
}
break;
}
} else {
}

cljs.compiler.emits.call(null,"})");
} else {
cljs.compiler.emits.call(null,"[",cljs.compiler.comma_sep.call(null,items),"]");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__28518__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"constant","constant",-379609303),(function (p__28739){
var map__28740 = p__28739;
var map__28740__$1 = ((((!((map__28740 == null)))?((((map__28740.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28740.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28740):map__28740);
var form = cljs.core.get.call(null,map__28740__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var env = cljs.core.get.call(null,map__28740__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var env__28518__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__28518__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_constant.call(null,form);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__28518__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}));
cljs.compiler.truthy_constant_QMARK_ = (function cljs$compiler$truthy_constant_QMARK_(p__28742){
var map__28745 = p__28742;
var map__28745__$1 = ((((!((map__28745 == null)))?((((map__28745.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28745.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28745):map__28745);
var op = cljs.core.get.call(null,map__28745__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__28745__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var and__20443__auto__ = cljs.core._EQ_.call(null,op,new cljs.core.Keyword(null,"constant","constant",-379609303));
if(and__20443__auto__){
var and__20443__auto____$1 = form;
if(cljs.core.truth_(and__20443__auto____$1)){
return !(((typeof form === 'string') && (cljs.core._EQ_.call(null,form,""))) || ((typeof form === 'number') && ((form === (0)))));
} else {
return and__20443__auto____$1;
}
} else {
return and__20443__auto__;
}
});
cljs.compiler.falsey_constant_QMARK_ = (function cljs$compiler$falsey_constant_QMARK_(p__28747){
var map__28750 = p__28747;
var map__28750__$1 = ((((!((map__28750 == null)))?((((map__28750.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28750.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28750):map__28750);
var op = cljs.core.get.call(null,map__28750__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__28750__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
return (cljs.core._EQ_.call(null,op,new cljs.core.Keyword(null,"constant","constant",-379609303))) && ((form === false) || ((form == null)));
});
cljs.compiler.safe_test_QMARK_ = (function cljs$compiler$safe_test_QMARK_(env,e){
var tag = cljs.analyzer.infer_tag.call(null,env,e);
var or__20455__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"seq","seq",-177272256,null),null,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null], null), null).call(null,tag);
if(cljs.core.truth_(or__20455__auto__)){
return or__20455__auto__;
} else {
return cljs.compiler.truthy_constant_QMARK_.call(null,e);
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"if","if",-458814265),(function (p__28752){
var map__28753 = p__28752;
var map__28753__$1 = ((((!((map__28753 == null)))?((((map__28753.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28753.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28753):map__28753);
var test = cljs.core.get.call(null,map__28753__$1,new cljs.core.Keyword(null,"test","test",577538877));
var then = cljs.core.get.call(null,map__28753__$1,new cljs.core.Keyword(null,"then","then",460598070));
var else$ = cljs.core.get.call(null,map__28753__$1,new cljs.core.Keyword(null,"else","else",-1508377146));
var env = cljs.core.get.call(null,map__28753__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var unchecked = cljs.core.get.call(null,map__28753__$1,new cljs.core.Keyword(null,"unchecked","unchecked",924418378));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
var checked = cljs.core.not.call(null,(function (){var or__20455__auto__ = unchecked;
if(cljs.core.truth_(or__20455__auto__)){
return or__20455__auto__;
} else {
return cljs.compiler.safe_test_QMARK_.call(null,env,test);
}
})());
if(cljs.core.truth_(cljs.compiler.truthy_constant_QMARK_.call(null,test))){
return cljs.compiler.emitln.call(null,then);
} else {
if(cljs.core.truth_(cljs.compiler.falsey_constant_QMARK_.call(null,test))){
return cljs.compiler.emitln.call(null,else$);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.call(null,"(",((checked)?"cljs.core.truth_":null),"(",test,")?",then,":",else$,")");
} else {
if(checked){
cljs.compiler.emitln.call(null,"if(cljs.core.truth_(",test,")){");
} else {
cljs.compiler.emitln.call(null,"if(",test,"){");
}

cljs.compiler.emitln.call(null,then,"} else {");

return cljs.compiler.emitln.call(null,else$,"}");
}

}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"case*","case*",716180697),(function (p__28755){
var map__28756 = p__28755;
var map__28756__$1 = ((((!((map__28756 == null)))?((((map__28756.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28756.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28756):map__28756);
var v = cljs.core.get.call(null,map__28756__$1,new cljs.core.Keyword(null,"v","v",21465059));
var tests = cljs.core.get.call(null,map__28756__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var thens = cljs.core.get.call(null,map__28756__$1,new cljs.core.Keyword(null,"thens","thens",226631442));
var default$ = cljs.core.get.call(null,map__28756__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var env = cljs.core.get.call(null,map__28756__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"expr","expr",745722291))){
cljs.compiler.emitln.call(null,"(function(){");
} else {
}

var gs = cljs.core.gensym.call(null,"caseval__");
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,"var ",gs,";");
} else {
}

cljs.compiler.emitln.call(null,"switch (",v,") {");

var seq__28758_28776 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),cljs.core.interleave.call(null,tests,thens)));
var chunk__28759_28777 = null;
var count__28760_28778 = (0);
var i__28761_28779 = (0);
while(true){
if((i__28761_28779 < count__28760_28778)){
var vec__28762_28780 = cljs.core._nth.call(null,chunk__28759_28777,i__28761_28779);
var ts_28781 = cljs.core.nth.call(null,vec__28762_28780,(0),null);
var then_28782 = cljs.core.nth.call(null,vec__28762_28780,(1),null);
var seq__28765_28783 = cljs.core.seq.call(null,ts_28781);
var chunk__28766_28784 = null;
var count__28767_28785 = (0);
var i__28768_28786 = (0);
while(true){
if((i__28768_28786 < count__28767_28785)){
var test_28787 = cljs.core._nth.call(null,chunk__28766_28784,i__28768_28786);
cljs.compiler.emitln.call(null,"case ",test_28787,":");

var G__28788 = seq__28765_28783;
var G__28789 = chunk__28766_28784;
var G__28790 = count__28767_28785;
var G__28791 = (i__28768_28786 + (1));
seq__28765_28783 = G__28788;
chunk__28766_28784 = G__28789;
count__28767_28785 = G__28790;
i__28768_28786 = G__28791;
continue;
} else {
var temp__4657__auto___28792 = cljs.core.seq.call(null,seq__28765_28783);
if(temp__4657__auto___28792){
var seq__28765_28793__$1 = temp__4657__auto___28792;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28765_28793__$1)){
var c__21266__auto___28794 = cljs.core.chunk_first.call(null,seq__28765_28793__$1);
var G__28795 = cljs.core.chunk_rest.call(null,seq__28765_28793__$1);
var G__28796 = c__21266__auto___28794;
var G__28797 = cljs.core.count.call(null,c__21266__auto___28794);
var G__28798 = (0);
seq__28765_28783 = G__28795;
chunk__28766_28784 = G__28796;
count__28767_28785 = G__28797;
i__28768_28786 = G__28798;
continue;
} else {
var test_28799 = cljs.core.first.call(null,seq__28765_28793__$1);
cljs.compiler.emitln.call(null,"case ",test_28799,":");

var G__28800 = cljs.core.next.call(null,seq__28765_28793__$1);
var G__28801 = null;
var G__28802 = (0);
var G__28803 = (0);
seq__28765_28783 = G__28800;
chunk__28766_28784 = G__28801;
count__28767_28785 = G__28802;
i__28768_28786 = G__28803;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_28782);
} else {
cljs.compiler.emitln.call(null,then_28782);
}

cljs.compiler.emitln.call(null,"break;");

var G__28804 = seq__28758_28776;
var G__28805 = chunk__28759_28777;
var G__28806 = count__28760_28778;
var G__28807 = (i__28761_28779 + (1));
seq__28758_28776 = G__28804;
chunk__28759_28777 = G__28805;
count__28760_28778 = G__28806;
i__28761_28779 = G__28807;
continue;
} else {
var temp__4657__auto___28808 = cljs.core.seq.call(null,seq__28758_28776);
if(temp__4657__auto___28808){
var seq__28758_28809__$1 = temp__4657__auto___28808;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28758_28809__$1)){
var c__21266__auto___28810 = cljs.core.chunk_first.call(null,seq__28758_28809__$1);
var G__28811 = cljs.core.chunk_rest.call(null,seq__28758_28809__$1);
var G__28812 = c__21266__auto___28810;
var G__28813 = cljs.core.count.call(null,c__21266__auto___28810);
var G__28814 = (0);
seq__28758_28776 = G__28811;
chunk__28759_28777 = G__28812;
count__28760_28778 = G__28813;
i__28761_28779 = G__28814;
continue;
} else {
var vec__28769_28815 = cljs.core.first.call(null,seq__28758_28809__$1);
var ts_28816 = cljs.core.nth.call(null,vec__28769_28815,(0),null);
var then_28817 = cljs.core.nth.call(null,vec__28769_28815,(1),null);
var seq__28772_28818 = cljs.core.seq.call(null,ts_28816);
var chunk__28773_28819 = null;
var count__28774_28820 = (0);
var i__28775_28821 = (0);
while(true){
if((i__28775_28821 < count__28774_28820)){
var test_28822 = cljs.core._nth.call(null,chunk__28773_28819,i__28775_28821);
cljs.compiler.emitln.call(null,"case ",test_28822,":");

var G__28823 = seq__28772_28818;
var G__28824 = chunk__28773_28819;
var G__28825 = count__28774_28820;
var G__28826 = (i__28775_28821 + (1));
seq__28772_28818 = G__28823;
chunk__28773_28819 = G__28824;
count__28774_28820 = G__28825;
i__28775_28821 = G__28826;
continue;
} else {
var temp__4657__auto___28827__$1 = cljs.core.seq.call(null,seq__28772_28818);
if(temp__4657__auto___28827__$1){
var seq__28772_28828__$1 = temp__4657__auto___28827__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28772_28828__$1)){
var c__21266__auto___28829 = cljs.core.chunk_first.call(null,seq__28772_28828__$1);
var G__28830 = cljs.core.chunk_rest.call(null,seq__28772_28828__$1);
var G__28831 = c__21266__auto___28829;
var G__28832 = cljs.core.count.call(null,c__21266__auto___28829);
var G__28833 = (0);
seq__28772_28818 = G__28830;
chunk__28773_28819 = G__28831;
count__28774_28820 = G__28832;
i__28775_28821 = G__28833;
continue;
} else {
var test_28834 = cljs.core.first.call(null,seq__28772_28828__$1);
cljs.compiler.emitln.call(null,"case ",test_28834,":");

var G__28835 = cljs.core.next.call(null,seq__28772_28828__$1);
var G__28836 = null;
var G__28837 = (0);
var G__28838 = (0);
seq__28772_28818 = G__28835;
chunk__28773_28819 = G__28836;
count__28774_28820 = G__28837;
i__28775_28821 = G__28838;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_28817);
} else {
cljs.compiler.emitln.call(null,then_28817);
}

cljs.compiler.emitln.call(null,"break;");

var G__28839 = cljs.core.next.call(null,seq__28758_28809__$1);
var G__28840 = null;
var G__28841 = (0);
var G__28842 = (0);
seq__28758_28776 = G__28839;
chunk__28759_28777 = G__28840;
count__28760_28778 = G__28841;
i__28761_28779 = G__28842;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(default$)){
cljs.compiler.emitln.call(null,"default:");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",default$);
} else {
cljs.compiler.emitln.call(null,default$);
}
} else {
}

cljs.compiler.emitln.call(null,"}");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.call(null,"return ",gs,";})()");
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"throw","throw",-1044625833),(function (p__28843){
var map__28844 = p__28843;
var map__28844__$1 = ((((!((map__28844 == null)))?((((map__28844.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28844.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28844):map__28844);
var throw$ = cljs.core.get.call(null,map__28844__$1,new cljs.core.Keyword(null,"throw","throw",-1044625833));
var env = cljs.core.get.call(null,map__28844__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emits.call(null,"(function(){throw ",throw$,"})()");
} else {
return cljs.compiler.emitln.call(null,"throw ",throw$,";");
}
}));
cljs.compiler.base_types = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 15, ["boolean",null,"object",null,"*",null,"string",null,"Object",null,"Number",null,"null",null,"Date",null,"number",null,"String",null,"RegExp",null,"...*",null,"Array",null,"array",null,"Boolean",null], null), null);
cljs.compiler.mapped_types = new cljs.core.PersistentArrayMap(null, 1, ["nil","null"], null);
cljs.compiler.resolve_type = (function cljs$compiler$resolve_type(env,t){
if(cljs.core.truth_(cljs.core.get.call(null,cljs.compiler.base_types,t))){
return t;
} else {
if(cljs.core.truth_(cljs.core.get.call(null,cljs.compiler.mapped_types,t))){
return cljs.core.get.call(null,cljs.compiler.mapped_types,t);
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"!"))){
return [cljs.core.str("!"),cljs.core.str(cljs$compiler$resolve_type.call(null,env,cljs.core.subs.call(null,t,(1))))].join('');
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"{"))){
return t;
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"function"))){
var idx = t.lastIndexOf(":");
var vec__28851 = ((!(((-1) === idx)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,t,(0),idx),cljs.core.subs.call(null,t,(idx + (1)),cljs.core.count.call(null,t))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,null], null));
var fstr = cljs.core.nth.call(null,vec__28851,(0),null);
var rstr = cljs.core.nth.call(null,vec__28851,(1),null);
var ret_t = (cljs.core.truth_(rstr)?cljs$compiler$resolve_type.call(null,env,rstr):null);
var axstr = cljs.core.subs.call(null,fstr,(9),(cljs.core.count.call(null,fstr) - (1)));
var args_ts = ((clojure.string.blank_QMARK_.call(null,axstr))?null:cljs.core.map.call(null,cljs.core.comp.call(null,((function (idx,vec__28851,fstr,rstr,ret_t,axstr){
return (function (p1__28846_SHARP_){
return cljs$compiler$resolve_type.call(null,env,p1__28846_SHARP_);
});})(idx,vec__28851,fstr,rstr,ret_t,axstr))
,clojure.string.trim),clojure.string.split.call(null,axstr,/,/)));
var G__28854 = [cljs.core.str("function("),cljs.core.str(clojure.string.join.call(null,",",args_ts)),cljs.core.str(")")].join('');
if(cljs.core.truth_(ret_t)){
return [cljs.core.str(G__28854),cljs.core.str(":"),cljs.core.str(ret_t)].join('');
} else {
return G__28854;
}
} else {
if(cljs.core.truth_(goog.string.endsWith(t,"="))){
return [cljs.core.str(cljs$compiler$resolve_type.call(null,env,cljs.core.subs.call(null,t,(0),(cljs.core.count.call(null,t) - (1))))),cljs.core.str("=")].join('');
} else {
return cljs.compiler.munge.call(null,[cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,env,cljs.core.symbol.call(null,t))))].join(''));

}
}
}
}
}
}
});
cljs.compiler.resolve_types = (function cljs$compiler$resolve_types(env,ts){
var ts__$1 = cljs.core.subs.call(null,clojure.string.trim.call(null,ts),(1),(cljs.core.count.call(null,ts) - (1)));
var xs = clojure.string.split.call(null,ts__$1,/\|/);
return [cljs.core.str("{"),cljs.core.str(clojure.string.join.call(null,"|",cljs.core.map.call(null,((function (ts__$1,xs){
return (function (p1__28855_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__28855_SHARP_);
});})(ts__$1,xs))
,xs))),cljs.core.str("}")].join('');
});
cljs.compiler.munge_param_return = (function cljs$compiler$munge_param_return(env,line){
if(cljs.core.truth_(cljs.core.re_find.call(null,/@param/,line))){
var vec__28862 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__28863 = cljs.core.seq.call(null,vec__28862);
var first__28864 = cljs.core.first.call(null,seq__28863);
var seq__28863__$1 = cljs.core.next.call(null,seq__28863);
var p = first__28864;
var first__28864__$1 = cljs.core.first.call(null,seq__28863__$1);
var seq__28863__$2 = cljs.core.next.call(null,seq__28863__$1);
var ts = first__28864__$1;
var first__28864__$2 = cljs.core.first.call(null,seq__28863__$2);
var seq__28863__$3 = cljs.core.next.call(null,seq__28863__$2);
var n = first__28864__$2;
var xs = seq__28863__$3;
if(cljs.core.truth_((function (){var and__20443__auto__ = cljs.core._EQ_.call(null,"@param",p);
if(and__20443__auto__){
var and__20443__auto____$1 = ts;
if(cljs.core.truth_(and__20443__auto____$1)){
return goog.string.startsWith(ts,"{");
} else {
return and__20443__auto____$1;
}
} else {
return and__20443__auto__;
}
})())){
return clojure.string.join.call(null," ",cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.compiler.resolve_types.call(null,env,ts),cljs.compiler.munge.call(null,n)], null),xs));
} else {
return line;
}
} else {
if(cljs.core.truth_(cljs.core.re_find.call(null,/@return/,line))){
var vec__28865 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__28866 = cljs.core.seq.call(null,vec__28865);
var first__28867 = cljs.core.first.call(null,seq__28866);
var seq__28866__$1 = cljs.core.next.call(null,seq__28866);
var p = first__28867;
var first__28867__$1 = cljs.core.first.call(null,seq__28866__$1);
var seq__28866__$2 = cljs.core.next.call(null,seq__28866__$1);
var ts = first__28867__$1;
var xs = seq__28866__$2;
if(cljs.core.truth_((function (){var and__20443__auto__ = cljs.core._EQ_.call(null,"@return",p);
if(and__20443__auto__){
var and__20443__auto____$1 = ts;
if(cljs.core.truth_(and__20443__auto____$1)){
return goog.string.startsWith(ts,"{");
} else {
return and__20443__auto____$1;
}
} else {
return and__20443__auto__;
}
})())){
return clojure.string.join.call(null," ",cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.compiler.resolve_types.call(null,env,ts)], null),xs));
} else {
return line;
}
} else {
return line;

}
}
});
cljs.compiler.checking_types_QMARK_ = (function cljs$compiler$checking_types_QMARK_(){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"warn","warn",-436710552),null,new cljs.core.Keyword(null,"error","error",-978969032),null], null), null).call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"closure-warnings","closure-warnings",1362834211),new cljs.core.Keyword(null,"check-types","check-types",-833794607)], null)));
});
/**
 * Emit a nicely formatted comment string.
 */
cljs.compiler.emit_comment = (function cljs$compiler$emit_comment(var_args){
var args28869 = [];
var len__21530__auto___28904 = arguments.length;
var i__21531__auto___28905 = (0);
while(true){
if((i__21531__auto___28905 < len__21530__auto___28904)){
args28869.push((arguments[i__21531__auto___28905]));

var G__28906 = (i__21531__auto___28905 + (1));
i__21531__auto___28905 = G__28906;
continue;
} else {
}
break;
}

var G__28871 = args28869.length;
switch (G__28871) {
case 2:
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28869.length)].join('')));

}
});

cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$2 = (function (doc,jsdoc){
return cljs.compiler.emit_comment.call(null,null,doc,jsdoc);
});

cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3 = (function (env,doc,jsdoc){
var docs = (cljs.core.truth_(doc)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [doc], null):null);
var docs__$1 = (cljs.core.truth_(jsdoc)?cljs.core.concat.call(null,docs,jsdoc):docs);
var docs__$2 = cljs.core.remove.call(null,cljs.core.nil_QMARK_,docs__$1);
var print_comment_lines = ((function (docs,docs__$1,docs__$2){
return (function cljs$compiler$print_comment_lines(e){
var vec__28893 = cljs.core.map.call(null,((function (docs,docs__$1,docs__$2){
return (function (p1__28868_SHARP_){
if(cljs.core.truth_(cljs.compiler.checking_types_QMARK_.call(null))){
return cljs.compiler.munge_param_return.call(null,env,p1__28868_SHARP_);
} else {
return p1__28868_SHARP_;
}
});})(docs,docs__$1,docs__$2))
,clojure.string.split_lines.call(null,e));
var seq__28894 = cljs.core.seq.call(null,vec__28893);
var first__28895 = cljs.core.first.call(null,seq__28894);
var seq__28894__$1 = cljs.core.next.call(null,seq__28894);
var x = first__28895;
var ys = seq__28894__$1;
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,x,"*/","* /"));

var seq__28896 = cljs.core.seq.call(null,ys);
var chunk__28897 = null;
var count__28898 = (0);
var i__28899 = (0);
while(true){
if((i__28899 < count__28898)){
var next_line = cljs.core._nth.call(null,chunk__28897,i__28899);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));

var G__28908 = seq__28896;
var G__28909 = chunk__28897;
var G__28910 = count__28898;
var G__28911 = (i__28899 + (1));
seq__28896 = G__28908;
chunk__28897 = G__28909;
count__28898 = G__28910;
i__28899 = G__28911;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__28896);
if(temp__4657__auto__){
var seq__28896__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28896__$1)){
var c__21266__auto__ = cljs.core.chunk_first.call(null,seq__28896__$1);
var G__28912 = cljs.core.chunk_rest.call(null,seq__28896__$1);
var G__28913 = c__21266__auto__;
var G__28914 = cljs.core.count.call(null,c__21266__auto__);
var G__28915 = (0);
seq__28896 = G__28912;
chunk__28897 = G__28913;
count__28898 = G__28914;
i__28899 = G__28915;
continue;
} else {
var next_line = cljs.core.first.call(null,seq__28896__$1);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));

var G__28916 = cljs.core.next.call(null,seq__28896__$1);
var G__28917 = null;
var G__28918 = (0);
var G__28919 = (0);
seq__28896 = G__28916;
chunk__28897 = G__28917;
count__28898 = G__28918;
i__28899 = G__28919;
continue;
}
} else {
return null;
}
}
break;
}
});})(docs,docs__$1,docs__$2))
;
if(cljs.core.seq.call(null,docs__$2)){
cljs.compiler.emitln.call(null,"/**");

var seq__28900_28920 = cljs.core.seq.call(null,docs__$2);
var chunk__28901_28921 = null;
var count__28902_28922 = (0);
var i__28903_28923 = (0);
while(true){
if((i__28903_28923 < count__28902_28922)){
var e_28924 = cljs.core._nth.call(null,chunk__28901_28921,i__28903_28923);
if(cljs.core.truth_(e_28924)){
print_comment_lines.call(null,e_28924);
} else {
}

var G__28925 = seq__28900_28920;
var G__28926 = chunk__28901_28921;
var G__28927 = count__28902_28922;
var G__28928 = (i__28903_28923 + (1));
seq__28900_28920 = G__28925;
chunk__28901_28921 = G__28926;
count__28902_28922 = G__28927;
i__28903_28923 = G__28928;
continue;
} else {
var temp__4657__auto___28929 = cljs.core.seq.call(null,seq__28900_28920);
if(temp__4657__auto___28929){
var seq__28900_28930__$1 = temp__4657__auto___28929;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28900_28930__$1)){
var c__21266__auto___28931 = cljs.core.chunk_first.call(null,seq__28900_28930__$1);
var G__28932 = cljs.core.chunk_rest.call(null,seq__28900_28930__$1);
var G__28933 = c__21266__auto___28931;
var G__28934 = cljs.core.count.call(null,c__21266__auto___28931);
var G__28935 = (0);
seq__28900_28920 = G__28932;
chunk__28901_28921 = G__28933;
count__28902_28922 = G__28934;
i__28903_28923 = G__28935;
continue;
} else {
var e_28936 = cljs.core.first.call(null,seq__28900_28930__$1);
if(cljs.core.truth_(e_28936)){
print_comment_lines.call(null,e_28936);
} else {
}

var G__28937 = cljs.core.next.call(null,seq__28900_28930__$1);
var G__28938 = null;
var G__28939 = (0);
var G__28940 = (0);
seq__28900_28920 = G__28937;
chunk__28901_28921 = G__28938;
count__28902_28922 = G__28939;
i__28903_28923 = G__28940;
continue;
}
} else {
}
}
break;
}

return cljs.compiler.emitln.call(null," */");
} else {
return null;
}
});

cljs.compiler.emit_comment.cljs$lang$maxFixedArity = 3;

cljs.compiler.valid_define_value_QMARK_ = (function cljs$compiler$valid_define_value_QMARK_(x){
return (typeof x === 'string') || (x === true) || (x === false) || (typeof x === 'number');
});
cljs.compiler.get_define = (function cljs$compiler$get_define(mname,jsdoc){
var opts = cljs.core.get.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.Keyword(null,"options","options",99638489));
var and__20443__auto__ = cljs.core.some.call(null,((function (opts){
return (function (p1__28942_SHARP_){
return goog.string.startsWith(p1__28942_SHARP_,"@define");
});})(opts))
,jsdoc);
if(cljs.core.truth_(and__20443__auto__)){
var and__20443__auto____$1 = opts;
if(cljs.core.truth_(and__20443__auto____$1)){
var and__20443__auto____$2 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"none","none",1333468478));
if(and__20443__auto____$2){
var define = cljs.core.get_in.call(null,opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"closure-defines","closure-defines",-1213856476),[cljs.core.str(mname)].join('')], null));
if(cljs.core.truth_(cljs.compiler.valid_define_value_QMARK_.call(null,define))){
return cljs.core.pr_str.call(null,define);
} else {
return null;
}
} else {
return and__20443__auto____$2;
}
} else {
return and__20443__auto____$1;
}
} else {
return and__20443__auto__;
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"def","def",-1043430536),(function (p__28943){
var map__28944 = p__28943;
var map__28944__$1 = ((((!((map__28944 == null)))?((((map__28944.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28944.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28944):map__28944);
var name = cljs.core.get.call(null,map__28944__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var var$ = cljs.core.get.call(null,map__28944__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var init = cljs.core.get.call(null,map__28944__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var env = cljs.core.get.call(null,map__28944__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var doc = cljs.core.get.call(null,map__28944__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var jsdoc = cljs.core.get.call(null,map__28944__$1,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516));
var export$ = cljs.core.get.call(null,map__28944__$1,new cljs.core.Keyword(null,"export","export",214356590));
var test = cljs.core.get.call(null,map__28944__$1,new cljs.core.Keyword(null,"test","test",577538877));
var var_ast = cljs.core.get.call(null,map__28944__$1,new cljs.core.Keyword(null,"var-ast","var-ast",1200379319));
if(cljs.core.truth_((function (){var or__20455__auto__ = init;
if(cljs.core.truth_(or__20455__auto__)){
return or__20455__auto__;
} else {
return new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(env);
}
})())){
var mname = cljs.compiler.munge.call(null,name);
cljs.compiler.emit_comment.call(null,env,doc,cljs.core.concat.call(null,jsdoc,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516).cljs$core$IFn$_invoke$arity$1(init)));

if(cljs.core.truth_(new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(env))){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,"return (");
} else {
}

cljs.compiler.emitln.call(null,"(function (){");
} else {
}

cljs.compiler.emits.call(null,var$);

if(cljs.core.truth_(init)){
cljs.compiler.emits.call(null," = ",(function (){var temp__4655__auto__ = cljs.compiler.get_define.call(null,mname,jsdoc);
if(cljs.core.truth_(temp__4655__auto__)){
var define = temp__4655__auto__;
return define;
} else {
return init;
}
})());
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,"; return (");

cljs.compiler.emits.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"var-special","var-special",1131576802),new cljs.core.Keyword(null,"env","env",-1815813235),cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291))], null),var_ast));

cljs.compiler.emitln.call(null,");})()");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,")");
} else {
}
} else {
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
} else {
cljs.compiler.emitln.call(null,";");
}

if(cljs.core.truth_(export$)){
cljs.compiler.emitln.call(null,"goog.exportSymbol('",cljs.compiler.munge.call(null,export$),"', ",mname,");");
} else {
}

if(cljs.core.truth_((function (){var and__20443__auto__ = cljs.analyzer._STAR_load_tests_STAR_;
if(cljs.core.truth_(and__20443__auto__)){
return test;
} else {
return and__20443__auto__;
}
})())){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,";");
} else {
}

return cljs.compiler.emitln.call(null,var$,".cljs$lang$test = ",test,";");
} else {
return null;
}
} else {
return null;
}
}));
cljs.compiler.emit_apply_to = (function cljs$compiler$emit_apply_to(p__28946){
var map__28967 = p__28946;
var map__28967__$1 = ((((!((map__28967 == null)))?((((map__28967.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28967.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28967):map__28967);
var name = cljs.core.get.call(null,map__28967__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__28967__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__28967__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var arglist = cljs.core.gensym.call(null,"arglist__");
var delegate_name = [cljs.core.str(cljs.compiler.munge.call(null,name)),cljs.core.str("__delegate")].join('');
cljs.compiler.emitln.call(null,"(function (",arglist,"){");

var seq__28969_28987 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,cljs.core.drop_last.call(null,(2),params)));
var chunk__28970_28988 = null;
var count__28971_28989 = (0);
var i__28972_28990 = (0);
while(true){
if((i__28972_28990 < count__28971_28989)){
var vec__28973_28991 = cljs.core._nth.call(null,chunk__28970_28988,i__28972_28990);
var i_28992 = cljs.core.nth.call(null,vec__28973_28991,(0),null);
var param_28993 = cljs.core.nth.call(null,vec__28973_28991,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_28993);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");

var G__28994 = seq__28969_28987;
var G__28995 = chunk__28970_28988;
var G__28996 = count__28971_28989;
var G__28997 = (i__28972_28990 + (1));
seq__28969_28987 = G__28994;
chunk__28970_28988 = G__28995;
count__28971_28989 = G__28996;
i__28972_28990 = G__28997;
continue;
} else {
var temp__4657__auto___28998 = cljs.core.seq.call(null,seq__28969_28987);
if(temp__4657__auto___28998){
var seq__28969_28999__$1 = temp__4657__auto___28998;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28969_28999__$1)){
var c__21266__auto___29000 = cljs.core.chunk_first.call(null,seq__28969_28999__$1);
var G__29001 = cljs.core.chunk_rest.call(null,seq__28969_28999__$1);
var G__29002 = c__21266__auto___29000;
var G__29003 = cljs.core.count.call(null,c__21266__auto___29000);
var G__29004 = (0);
seq__28969_28987 = G__29001;
chunk__28970_28988 = G__29002;
count__28971_28989 = G__29003;
i__28972_28990 = G__29004;
continue;
} else {
var vec__28976_29005 = cljs.core.first.call(null,seq__28969_28999__$1);
var i_29006 = cljs.core.nth.call(null,vec__28976_29005,(0),null);
var param_29007 = cljs.core.nth.call(null,vec__28976_29005,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_29007);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");

var G__29008 = cljs.core.next.call(null,seq__28969_28999__$1);
var G__29009 = null;
var G__29010 = (0);
var G__29011 = (0);
seq__28969_28987 = G__29008;
chunk__28970_28988 = G__29009;
count__28971_28989 = G__29010;
i__28972_28990 = G__29011;
continue;
}
} else {
}
}
break;
}

if(((1) < cljs.core.count.call(null,params))){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,cljs.core.butlast.call(null,params)));

cljs.compiler.emitln.call(null," = cljs.core.first(",arglist,");");

cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = cljs.core.rest(",arglist,");");

cljs.compiler.emits.call(null,"return ",delegate_name,"(");

var seq__28979_29012 = cljs.core.seq.call(null,params);
var chunk__28980_29013 = null;
var count__28981_29014 = (0);
var i__28982_29015 = (0);
while(true){
if((i__28982_29015 < count__28981_29014)){
var param_29016 = cljs.core._nth.call(null,chunk__28980_29013,i__28982_29015);
cljs.compiler.emit.call(null,param_29016);

if(cljs.core._EQ_.call(null,param_29016,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__29017 = seq__28979_29012;
var G__29018 = chunk__28980_29013;
var G__29019 = count__28981_29014;
var G__29020 = (i__28982_29015 + (1));
seq__28979_29012 = G__29017;
chunk__28980_29013 = G__29018;
count__28981_29014 = G__29019;
i__28982_29015 = G__29020;
continue;
} else {
var temp__4657__auto___29021 = cljs.core.seq.call(null,seq__28979_29012);
if(temp__4657__auto___29021){
var seq__28979_29022__$1 = temp__4657__auto___29021;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28979_29022__$1)){
var c__21266__auto___29023 = cljs.core.chunk_first.call(null,seq__28979_29022__$1);
var G__29024 = cljs.core.chunk_rest.call(null,seq__28979_29022__$1);
var G__29025 = c__21266__auto___29023;
var G__29026 = cljs.core.count.call(null,c__21266__auto___29023);
var G__29027 = (0);
seq__28979_29012 = G__29024;
chunk__28980_29013 = G__29025;
count__28981_29014 = G__29026;
i__28982_29015 = G__29027;
continue;
} else {
var param_29028 = cljs.core.first.call(null,seq__28979_29022__$1);
cljs.compiler.emit.call(null,param_29028);

if(cljs.core._EQ_.call(null,param_29028,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__29029 = cljs.core.next.call(null,seq__28979_29022__$1);
var G__29030 = null;
var G__29031 = (0);
var G__29032 = (0);
seq__28979_29012 = G__29029;
chunk__28980_29013 = G__29030;
count__28981_29014 = G__29031;
i__28982_29015 = G__29032;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,");");
} else {
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = cljs.core.seq(",arglist,");");

cljs.compiler.emits.call(null,"return ",delegate_name,"(");

var seq__28983_29033 = cljs.core.seq.call(null,params);
var chunk__28984_29034 = null;
var count__28985_29035 = (0);
var i__28986_29036 = (0);
while(true){
if((i__28986_29036 < count__28985_29035)){
var param_29037 = cljs.core._nth.call(null,chunk__28984_29034,i__28986_29036);
cljs.compiler.emit.call(null,param_29037);

if(cljs.core._EQ_.call(null,param_29037,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__29038 = seq__28983_29033;
var G__29039 = chunk__28984_29034;
var G__29040 = count__28985_29035;
var G__29041 = (i__28986_29036 + (1));
seq__28983_29033 = G__29038;
chunk__28984_29034 = G__29039;
count__28985_29035 = G__29040;
i__28986_29036 = G__29041;
continue;
} else {
var temp__4657__auto___29042 = cljs.core.seq.call(null,seq__28983_29033);
if(temp__4657__auto___29042){
var seq__28983_29043__$1 = temp__4657__auto___29042;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28983_29043__$1)){
var c__21266__auto___29044 = cljs.core.chunk_first.call(null,seq__28983_29043__$1);
var G__29045 = cljs.core.chunk_rest.call(null,seq__28983_29043__$1);
var G__29046 = c__21266__auto___29044;
var G__29047 = cljs.core.count.call(null,c__21266__auto___29044);
var G__29048 = (0);
seq__28983_29033 = G__29045;
chunk__28984_29034 = G__29046;
count__28985_29035 = G__29047;
i__28986_29036 = G__29048;
continue;
} else {
var param_29049 = cljs.core.first.call(null,seq__28983_29043__$1);
cljs.compiler.emit.call(null,param_29049);

if(cljs.core._EQ_.call(null,param_29049,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__29050 = cljs.core.next.call(null,seq__28983_29043__$1);
var G__29051 = null;
var G__29052 = (0);
var G__29053 = (0);
seq__28983_29033 = G__29050;
chunk__28984_29034 = G__29051;
count__28985_29035 = G__29052;
i__28986_29036 = G__29053;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,");");
}

return cljs.compiler.emits.call(null,"})");
});
cljs.compiler.emit_fn_params = (function cljs$compiler$emit_fn_params(params){
var seq__29058 = cljs.core.seq.call(null,params);
var chunk__29059 = null;
var count__29060 = (0);
var i__29061 = (0);
while(true){
if((i__29061 < count__29060)){
var param = cljs.core._nth.call(null,chunk__29059,i__29061);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__29062 = seq__29058;
var G__29063 = chunk__29059;
var G__29064 = count__29060;
var G__29065 = (i__29061 + (1));
seq__29058 = G__29062;
chunk__29059 = G__29063;
count__29060 = G__29064;
i__29061 = G__29065;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__29058);
if(temp__4657__auto__){
var seq__29058__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29058__$1)){
var c__21266__auto__ = cljs.core.chunk_first.call(null,seq__29058__$1);
var G__29066 = cljs.core.chunk_rest.call(null,seq__29058__$1);
var G__29067 = c__21266__auto__;
var G__29068 = cljs.core.count.call(null,c__21266__auto__);
var G__29069 = (0);
seq__29058 = G__29066;
chunk__29059 = G__29067;
count__29060 = G__29068;
i__29061 = G__29069;
continue;
} else {
var param = cljs.core.first.call(null,seq__29058__$1);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__29070 = cljs.core.next.call(null,seq__29058__$1);
var G__29071 = null;
var G__29072 = (0);
var G__29073 = (0);
seq__29058 = G__29070;
chunk__29059 = G__29071;
count__29060 = G__29072;
i__29061 = G__29073;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_fn_method = (function cljs$compiler$emit_fn_method(p__29074){
var map__29077 = p__29074;
var map__29077__$1 = ((((!((map__29077 == null)))?((((map__29077.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29077.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29077):map__29077);
var type = cljs.core.get.call(null,map__29077__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__29077__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var variadic = cljs.core.get.call(null,map__29077__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var params = cljs.core.get.call(null,map__29077__$1,new cljs.core.Keyword(null,"params","params",710516235));
var expr = cljs.core.get.call(null,map__29077__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__29077__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__29077__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var max_fixed_arity = cljs.core.get.call(null,map__29077__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var env__28518__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__28518__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"(function ",cljs.compiler.munge.call(null,name),"(");

cljs.compiler.emit_fn_params.call(null,params);

cljs.compiler.emitln.call(null,"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.call(null,"var self__ = this;");
} else {
}

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.call(null,"while(true){");
} else {
}

cljs.compiler.emits.call(null,expr);

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.call(null,"break;");

cljs.compiler.emitln.call(null,"}");
} else {
}

cljs.compiler.emits.call(null,"})");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__28518__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
});
/**
 * Emit code that copies function arguments into an array starting at an index.
 *   Returns name of var holding the array.
 */
cljs.compiler.emit_arguments_to_array = (function cljs$compiler$emit_arguments_to_array(startslice){
if(((startslice >= (0))) && (cljs.core.integer_QMARK_.call(null,startslice))){
} else {
throw (new Error("Assert failed: (and (>= startslice 0) (integer? startslice))"));
}

var mname = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
var i = [cljs.core.str(mname),cljs.core.str("__i")].join('');
var a = [cljs.core.str(mname),cljs.core.str("__a")].join('');
cljs.compiler.emitln.call(null,"var ",i," = 0, ",a," = new Array(arguments.length -  ",startslice,");");

cljs.compiler.emitln.call(null,"while (",i," < ",a,".length) {",a,"[",i,"] = arguments[",i," + ",startslice,"]; ++",i,";}");

return a;
});
cljs.compiler.emit_variadic_fn_method = (function cljs$compiler$emit_variadic_fn_method(p__29079){
var map__29090 = p__29079;
var map__29090__$1 = ((((!((map__29090 == null)))?((((map__29090.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29090.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29090):map__29090);
var f = map__29090__$1;
var type = cljs.core.get.call(null,map__29090__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__29090__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var variadic = cljs.core.get.call(null,map__29090__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var params = cljs.core.get.call(null,map__29090__$1,new cljs.core.Keyword(null,"params","params",710516235));
var expr = cljs.core.get.call(null,map__29090__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__29090__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__29090__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var max_fixed_arity = cljs.core.get.call(null,map__29090__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var env__28518__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__28518__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

var name_29100__$1 = (function (){var or__20455__auto__ = name;
if(cljs.core.truth_(or__20455__auto__)){
return or__20455__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_29101 = cljs.compiler.munge.call(null,name_29100__$1);
var delegate_name_29102 = [cljs.core.str(mname_29101),cljs.core.str("__delegate")].join('');
cljs.compiler.emitln.call(null,"(function() { ");

cljs.compiler.emits.call(null,"var ",delegate_name_29102," = function (");

var seq__29092_29103 = cljs.core.seq.call(null,params);
var chunk__29093_29104 = null;
var count__29094_29105 = (0);
var i__29095_29106 = (0);
while(true){
if((i__29095_29106 < count__29094_29105)){
var param_29107 = cljs.core._nth.call(null,chunk__29093_29104,i__29095_29106);
cljs.compiler.emit.call(null,param_29107);

if(cljs.core._EQ_.call(null,param_29107,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__29108 = seq__29092_29103;
var G__29109 = chunk__29093_29104;
var G__29110 = count__29094_29105;
var G__29111 = (i__29095_29106 + (1));
seq__29092_29103 = G__29108;
chunk__29093_29104 = G__29109;
count__29094_29105 = G__29110;
i__29095_29106 = G__29111;
continue;
} else {
var temp__4657__auto___29112 = cljs.core.seq.call(null,seq__29092_29103);
if(temp__4657__auto___29112){
var seq__29092_29113__$1 = temp__4657__auto___29112;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29092_29113__$1)){
var c__21266__auto___29114 = cljs.core.chunk_first.call(null,seq__29092_29113__$1);
var G__29115 = cljs.core.chunk_rest.call(null,seq__29092_29113__$1);
var G__29116 = c__21266__auto___29114;
var G__29117 = cljs.core.count.call(null,c__21266__auto___29114);
var G__29118 = (0);
seq__29092_29103 = G__29115;
chunk__29093_29104 = G__29116;
count__29094_29105 = G__29117;
i__29095_29106 = G__29118;
continue;
} else {
var param_29119 = cljs.core.first.call(null,seq__29092_29113__$1);
cljs.compiler.emit.call(null,param_29119);

if(cljs.core._EQ_.call(null,param_29119,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__29120 = cljs.core.next.call(null,seq__29092_29113__$1);
var G__29121 = null;
var G__29122 = (0);
var G__29123 = (0);
seq__29092_29103 = G__29120;
chunk__29093_29104 = G__29121;
count__29094_29105 = G__29122;
i__29095_29106 = G__29123;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"){");

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.call(null,"while(true){");
} else {
}

cljs.compiler.emits.call(null,expr);

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.call(null,"break;");

cljs.compiler.emitln.call(null,"}");
} else {
}

cljs.compiler.emitln.call(null,"};");

cljs.compiler.emitln.call(null,"var ",mname_29101," = function (",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,params),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):params)),"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.call(null,"var self__ = this;");
} else {
}

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",(cljs.core.count.call(null,params) - (1)),") {");

var a_29124 = cljs.compiler.emit_arguments_to_array.call(null,(cljs.core.count.call(null,params) - (1)));
cljs.compiler.emitln.call(null,"  ",cljs.core.last.call(null,params)," = new cljs.core.IndexedSeq(",a_29124,",0);");

cljs.compiler.emitln.call(null,"} ");
} else {
}

cljs.compiler.emits.call(null,"return ",delegate_name_29102,".call(this,");

var seq__29096_29125 = cljs.core.seq.call(null,params);
var chunk__29097_29126 = null;
var count__29098_29127 = (0);
var i__29099_29128 = (0);
while(true){
if((i__29099_29128 < count__29098_29127)){
var param_29129 = cljs.core._nth.call(null,chunk__29097_29126,i__29099_29128);
cljs.compiler.emit.call(null,param_29129);

if(cljs.core._EQ_.call(null,param_29129,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__29130 = seq__29096_29125;
var G__29131 = chunk__29097_29126;
var G__29132 = count__29098_29127;
var G__29133 = (i__29099_29128 + (1));
seq__29096_29125 = G__29130;
chunk__29097_29126 = G__29131;
count__29098_29127 = G__29132;
i__29099_29128 = G__29133;
continue;
} else {
var temp__4657__auto___29134 = cljs.core.seq.call(null,seq__29096_29125);
if(temp__4657__auto___29134){
var seq__29096_29135__$1 = temp__4657__auto___29134;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29096_29135__$1)){
var c__21266__auto___29136 = cljs.core.chunk_first.call(null,seq__29096_29135__$1);
var G__29137 = cljs.core.chunk_rest.call(null,seq__29096_29135__$1);
var G__29138 = c__21266__auto___29136;
var G__29139 = cljs.core.count.call(null,c__21266__auto___29136);
var G__29140 = (0);
seq__29096_29125 = G__29137;
chunk__29097_29126 = G__29138;
count__29098_29127 = G__29139;
i__29099_29128 = G__29140;
continue;
} else {
var param_29141 = cljs.core.first.call(null,seq__29096_29135__$1);
cljs.compiler.emit.call(null,param_29141);

if(cljs.core._EQ_.call(null,param_29141,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__29142 = cljs.core.next.call(null,seq__29096_29135__$1);
var G__29143 = null;
var G__29144 = (0);
var G__29145 = (0);
seq__29096_29125 = G__29142;
chunk__29097_29126 = G__29143;
count__29098_29127 = G__29144;
i__29099_29128 = G__29145;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.call(null,");");

cljs.compiler.emitln.call(null,"};");

cljs.compiler.emitln.call(null,mname_29101,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emits.call(null,mname_29101,".cljs$lang$applyTo = ");

cljs.compiler.emit_apply_to.call(null,cljs.core.assoc.call(null,f,new cljs.core.Keyword(null,"name","name",1843675177),name_29100__$1));

cljs.compiler.emitln.call(null,";");

cljs.compiler.emitln.call(null,mname_29101,".cljs$core$IFn$_invoke$arity$variadic = ",delegate_name_29102,";");

cljs.compiler.emitln.call(null,"return ",mname_29101,";");

cljs.compiler.emitln.call(null,"})()");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__28518__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p__29149){
var map__29150 = p__29149;
var map__29150__$1 = ((((!((map__29150 == null)))?((((map__29150.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29150.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29150):map__29150);
var name = cljs.core.get.call(null,map__29150__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.call(null,map__29150__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var methods$ = cljs.core.get.call(null,map__29150__$1,new cljs.core.Keyword(null,"methods","methods",453930866));
var max_fixed_arity = cljs.core.get.call(null,map__29150__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var variadic = cljs.core.get.call(null,map__29150__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var recur_frames = cljs.core.get.call(null,map__29150__$1,new cljs.core.Keyword(null,"recur-frames","recur-frames",-307205196));
var loop_lets = cljs.core.get.call(null,map__29150__$1,new cljs.core.Keyword(null,"loop-lets","loop-lets",2036794185));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var loop_locals = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.compiler.munge,cljs.core.concat.call(null,cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.filter.call(null,((function (map__29150,map__29150__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__29146_SHARP_){
var and__20443__auto__ = p1__29146_SHARP_;
if(cljs.core.truth_(and__20443__auto__)){
return cljs.core.deref.call(null,new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(p1__29146_SHARP_));
} else {
return and__20443__auto__;
}
});})(map__29150,map__29150__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,recur_frames)),cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"params","params",710516235),loop_lets))));
if(loop_locals){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emitln.call(null,"((function (",cljs.compiler.comma_sep.call(null,cljs.core.map.call(null,cljs.compiler.munge,loop_locals)),"){");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
} else {
cljs.compiler.emits.call(null,"return ");
}
} else {
}

if(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,methods$))){
if(cljs.core.truth_(variadic)){
cljs.compiler.emit_variadic_fn_method.call(null,cljs.core.assoc.call(null,cljs.core.first.call(null,methods$),new cljs.core.Keyword(null,"name","name",1843675177),name));
} else {
cljs.compiler.emit_fn_method.call(null,cljs.core.assoc.call(null,cljs.core.first.call(null,methods$),new cljs.core.Keyword(null,"name","name",1843675177),name));
}
} else {
var name_29185__$1 = (function (){var or__20455__auto__ = name;
if(cljs.core.truth_(or__20455__auto__)){
return or__20455__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_29186 = cljs.compiler.munge.call(null,name_29185__$1);
var maxparams_29187 = cljs.core.apply.call(null,cljs.core.max_key,cljs.core.count,cljs.core.map.call(null,new cljs.core.Keyword(null,"params","params",710516235),methods$));
var mmap_29188 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (name_29185__$1,mname_29186,maxparams_29187,loop_locals,map__29150,map__29150__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (method){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.compiler.munge.call(null,cljs.core.symbol.call(null,[cljs.core.str(mname_29186),cljs.core.str("__"),cljs.core.str(cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method)))].join(''))),method], null);
});})(name_29185__$1,mname_29186,maxparams_29187,loop_locals,map__29150,map__29150__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,methods$));
var ms_29189 = cljs.core.sort_by.call(null,((function (name_29185__$1,mname_29186,maxparams_29187,mmap_29188,loop_locals,map__29150,map__29150__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__29147_SHARP_){
return cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__29147_SHARP_)));
});})(name_29185__$1,mname_29186,maxparams_29187,mmap_29188,loop_locals,map__29150,map__29150__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,cljs.core.seq.call(null,mmap_29188));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emitln.call(null,"(function() {");

cljs.compiler.emitln.call(null,"var ",mname_29186," = null;");

var seq__29152_29190 = cljs.core.seq.call(null,ms_29189);
var chunk__29153_29191 = null;
var count__29154_29192 = (0);
var i__29155_29193 = (0);
while(true){
if((i__29155_29193 < count__29154_29192)){
var vec__29156_29194 = cljs.core._nth.call(null,chunk__29153_29191,i__29155_29193);
var n_29195 = cljs.core.nth.call(null,vec__29156_29194,(0),null);
var meth_29196 = cljs.core.nth.call(null,vec__29156_29194,(1),null);
cljs.compiler.emits.call(null,"var ",n_29195," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_29196))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_29196);
} else {
cljs.compiler.emit_fn_method.call(null,meth_29196);
}

cljs.compiler.emitln.call(null,";");

var G__29197 = seq__29152_29190;
var G__29198 = chunk__29153_29191;
var G__29199 = count__29154_29192;
var G__29200 = (i__29155_29193 + (1));
seq__29152_29190 = G__29197;
chunk__29153_29191 = G__29198;
count__29154_29192 = G__29199;
i__29155_29193 = G__29200;
continue;
} else {
var temp__4657__auto___29201 = cljs.core.seq.call(null,seq__29152_29190);
if(temp__4657__auto___29201){
var seq__29152_29202__$1 = temp__4657__auto___29201;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29152_29202__$1)){
var c__21266__auto___29203 = cljs.core.chunk_first.call(null,seq__29152_29202__$1);
var G__29204 = cljs.core.chunk_rest.call(null,seq__29152_29202__$1);
var G__29205 = c__21266__auto___29203;
var G__29206 = cljs.core.count.call(null,c__21266__auto___29203);
var G__29207 = (0);
seq__29152_29190 = G__29204;
chunk__29153_29191 = G__29205;
count__29154_29192 = G__29206;
i__29155_29193 = G__29207;
continue;
} else {
var vec__29159_29208 = cljs.core.first.call(null,seq__29152_29202__$1);
var n_29209 = cljs.core.nth.call(null,vec__29159_29208,(0),null);
var meth_29210 = cljs.core.nth.call(null,vec__29159_29208,(1),null);
cljs.compiler.emits.call(null,"var ",n_29209," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_29210))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_29210);
} else {
cljs.compiler.emit_fn_method.call(null,meth_29210);
}

cljs.compiler.emitln.call(null,";");

var G__29211 = cljs.core.next.call(null,seq__29152_29202__$1);
var G__29212 = null;
var G__29213 = (0);
var G__29214 = (0);
seq__29152_29190 = G__29211;
chunk__29153_29191 = G__29212;
count__29154_29192 = G__29213;
i__29155_29193 = G__29214;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,mname_29186," = function(",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,maxparams_29187),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):maxparams_29187)),"){");

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,maxparams_29187));

cljs.compiler.emitln.call(null," = var_args;");
} else {
}

cljs.compiler.emitln.call(null,"switch(arguments.length){");

var seq__29162_29215 = cljs.core.seq.call(null,ms_29189);
var chunk__29163_29216 = null;
var count__29164_29217 = (0);
var i__29165_29218 = (0);
while(true){
if((i__29165_29218 < count__29164_29217)){
var vec__29166_29219 = cljs.core._nth.call(null,chunk__29163_29216,i__29165_29218);
var n_29220 = cljs.core.nth.call(null,vec__29166_29219,(0),null);
var meth_29221 = cljs.core.nth.call(null,vec__29166_29219,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_29221))){
cljs.compiler.emitln.call(null,"default:");

var restarg_29222 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_29222," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_29223 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_29222," = new cljs.core.IndexedSeq(",a_29223,",0);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_29220,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_29187)),(((cljs.core.count.call(null,maxparams_29187) > (1)))?", ":null),restarg_29222,");");
} else {
var pcnt_29224 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_29221));
cljs.compiler.emitln.call(null,"case ",pcnt_29224,":");

cljs.compiler.emitln.call(null,"return ",n_29220,".call(this",(((pcnt_29224 === (0)))?null:cljs.core._conj.call(null,(function (){var x__21289__auto__ = cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_29224,maxparams_29187));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),",")),");");
}

var G__29225 = seq__29162_29215;
var G__29226 = chunk__29163_29216;
var G__29227 = count__29164_29217;
var G__29228 = (i__29165_29218 + (1));
seq__29162_29215 = G__29225;
chunk__29163_29216 = G__29226;
count__29164_29217 = G__29227;
i__29165_29218 = G__29228;
continue;
} else {
var temp__4657__auto___29229 = cljs.core.seq.call(null,seq__29162_29215);
if(temp__4657__auto___29229){
var seq__29162_29230__$1 = temp__4657__auto___29229;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29162_29230__$1)){
var c__21266__auto___29231 = cljs.core.chunk_first.call(null,seq__29162_29230__$1);
var G__29232 = cljs.core.chunk_rest.call(null,seq__29162_29230__$1);
var G__29233 = c__21266__auto___29231;
var G__29234 = cljs.core.count.call(null,c__21266__auto___29231);
var G__29235 = (0);
seq__29162_29215 = G__29232;
chunk__29163_29216 = G__29233;
count__29164_29217 = G__29234;
i__29165_29218 = G__29235;
continue;
} else {
var vec__29169_29236 = cljs.core.first.call(null,seq__29162_29230__$1);
var n_29237 = cljs.core.nth.call(null,vec__29169_29236,(0),null);
var meth_29238 = cljs.core.nth.call(null,vec__29169_29236,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_29238))){
cljs.compiler.emitln.call(null,"default:");

var restarg_29239 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_29239," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_29240 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_29239," = new cljs.core.IndexedSeq(",a_29240,",0);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_29237,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_29187)),(((cljs.core.count.call(null,maxparams_29187) > (1)))?", ":null),restarg_29239,");");
} else {
var pcnt_29241 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_29238));
cljs.compiler.emitln.call(null,"case ",pcnt_29241,":");

cljs.compiler.emitln.call(null,"return ",n_29237,".call(this",(((pcnt_29241 === (0)))?null:cljs.core._conj.call(null,(function (){var x__21289__auto__ = cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_29241,maxparams_29187));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),",")),");");
}

var G__29242 = cljs.core.next.call(null,seq__29162_29230__$1);
var G__29243 = null;
var G__29244 = (0);
var G__29245 = (0);
seq__29162_29215 = G__29242;
chunk__29163_29216 = G__29243;
count__29164_29217 = G__29244;
i__29165_29218 = G__29245;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"throw(new Error('Invalid arity: ' + arguments.length));");

cljs.compiler.emitln.call(null,"};");

if(cljs.core.truth_(variadic)){
cljs.compiler.emitln.call(null,mname_29186,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emitln.call(null,mname_29186,".cljs$lang$applyTo = ",cljs.core.some.call(null,((function (name_29185__$1,mname_29186,maxparams_29187,mmap_29188,ms_29189,loop_locals,map__29150,map__29150__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__29148_SHARP_){
var vec__29172 = p1__29148_SHARP_;
var n = cljs.core.nth.call(null,vec__29172,(0),null);
var m = cljs.core.nth.call(null,vec__29172,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(m))){
return n;
} else {
return null;
}
});})(name_29185__$1,mname_29186,maxparams_29187,mmap_29188,ms_29189,loop_locals,map__29150,map__29150__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,ms_29189),".cljs$lang$applyTo;");
} else {
}

var seq__29175_29246 = cljs.core.seq.call(null,ms_29189);
var chunk__29176_29247 = null;
var count__29177_29248 = (0);
var i__29178_29249 = (0);
while(true){
if((i__29178_29249 < count__29177_29248)){
var vec__29179_29250 = cljs.core._nth.call(null,chunk__29176_29247,i__29178_29249);
var n_29251 = cljs.core.nth.call(null,vec__29179_29250,(0),null);
var meth_29252 = cljs.core.nth.call(null,vec__29179_29250,(1),null);
var c_29253 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_29252));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_29252))){
cljs.compiler.emitln.call(null,mname_29186,".cljs$core$IFn$_invoke$arity$variadic = ",n_29251,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_29186,".cljs$core$IFn$_invoke$arity$",c_29253," = ",n_29251,";");
}

var G__29254 = seq__29175_29246;
var G__29255 = chunk__29176_29247;
var G__29256 = count__29177_29248;
var G__29257 = (i__29178_29249 + (1));
seq__29175_29246 = G__29254;
chunk__29176_29247 = G__29255;
count__29177_29248 = G__29256;
i__29178_29249 = G__29257;
continue;
} else {
var temp__4657__auto___29258 = cljs.core.seq.call(null,seq__29175_29246);
if(temp__4657__auto___29258){
var seq__29175_29259__$1 = temp__4657__auto___29258;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29175_29259__$1)){
var c__21266__auto___29260 = cljs.core.chunk_first.call(null,seq__29175_29259__$1);
var G__29261 = cljs.core.chunk_rest.call(null,seq__29175_29259__$1);
var G__29262 = c__21266__auto___29260;
var G__29263 = cljs.core.count.call(null,c__21266__auto___29260);
var G__29264 = (0);
seq__29175_29246 = G__29261;
chunk__29176_29247 = G__29262;
count__29177_29248 = G__29263;
i__29178_29249 = G__29264;
continue;
} else {
var vec__29182_29265 = cljs.core.first.call(null,seq__29175_29259__$1);
var n_29266 = cljs.core.nth.call(null,vec__29182_29265,(0),null);
var meth_29267 = cljs.core.nth.call(null,vec__29182_29265,(1),null);
var c_29268 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_29267));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_29267))){
cljs.compiler.emitln.call(null,mname_29186,".cljs$core$IFn$_invoke$arity$variadic = ",n_29266,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_29186,".cljs$core$IFn$_invoke$arity$",c_29268," = ",n_29266,";");
}

var G__29269 = cljs.core.next.call(null,seq__29175_29259__$1);
var G__29270 = null;
var G__29271 = (0);
var G__29272 = (0);
seq__29175_29246 = G__29269;
chunk__29176_29247 = G__29270;
count__29177_29248 = G__29271;
i__29178_29249 = G__29272;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"return ",mname_29186,";");

cljs.compiler.emitln.call(null,"})()");
}

if(loop_locals){
return cljs.compiler.emitln.call(null,";})(",cljs.compiler.comma_sep.call(null,loop_locals),"))");
} else {
return null;
}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"do","do",46310725),(function (p__29273){
var map__29274 = p__29273;
var map__29274__$1 = ((((!((map__29274 == null)))?((((map__29274.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29274.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29274):map__29274);
var statements = cljs.core.get.call(null,map__29274__$1,new cljs.core.Keyword(null,"statements","statements",600349855));
var ret = cljs.core.get.call(null,map__29274__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var env = cljs.core.get.call(null,map__29274__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_((function (){var and__20443__auto__ = statements;
if(cljs.core.truth_(and__20443__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context);
} else {
return and__20443__auto__;
}
})())){
cljs.compiler.emitln.call(null,"(function (){");
} else {
}

var seq__29276_29280 = cljs.core.seq.call(null,statements);
var chunk__29277_29281 = null;
var count__29278_29282 = (0);
var i__29279_29283 = (0);
while(true){
if((i__29279_29283 < count__29278_29282)){
var s_29284 = cljs.core._nth.call(null,chunk__29277_29281,i__29279_29283);
cljs.compiler.emitln.call(null,s_29284);

var G__29285 = seq__29276_29280;
var G__29286 = chunk__29277_29281;
var G__29287 = count__29278_29282;
var G__29288 = (i__29279_29283 + (1));
seq__29276_29280 = G__29285;
chunk__29277_29281 = G__29286;
count__29278_29282 = G__29287;
i__29279_29283 = G__29288;
continue;
} else {
var temp__4657__auto___29289 = cljs.core.seq.call(null,seq__29276_29280);
if(temp__4657__auto___29289){
var seq__29276_29290__$1 = temp__4657__auto___29289;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29276_29290__$1)){
var c__21266__auto___29291 = cljs.core.chunk_first.call(null,seq__29276_29290__$1);
var G__29292 = cljs.core.chunk_rest.call(null,seq__29276_29290__$1);
var G__29293 = c__21266__auto___29291;
var G__29294 = cljs.core.count.call(null,c__21266__auto___29291);
var G__29295 = (0);
seq__29276_29280 = G__29292;
chunk__29277_29281 = G__29293;
count__29278_29282 = G__29294;
i__29279_29283 = G__29295;
continue;
} else {
var s_29296 = cljs.core.first.call(null,seq__29276_29290__$1);
cljs.compiler.emitln.call(null,s_29296);

var G__29297 = cljs.core.next.call(null,seq__29276_29290__$1);
var G__29298 = null;
var G__29299 = (0);
var G__29300 = (0);
seq__29276_29280 = G__29297;
chunk__29277_29281 = G__29298;
count__29278_29282 = G__29299;
i__29279_29283 = G__29300;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emit.call(null,ret);

if(cljs.core.truth_((function (){var and__20443__auto__ = statements;
if(cljs.core.truth_(and__20443__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context);
} else {
return and__20443__auto__;
}
})())){
return cljs.compiler.emitln.call(null,"})()");
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"try","try",1380742522),(function (p__29301){
var map__29302 = p__29301;
var map__29302__$1 = ((((!((map__29302 == null)))?((((map__29302.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29302.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29302):map__29302);
var env = cljs.core.get.call(null,map__29302__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var try$ = cljs.core.get.call(null,map__29302__$1,new cljs.core.Keyword(null,"try","try",1380742522));
var catch$ = cljs.core.get.call(null,map__29302__$1,new cljs.core.Keyword(null,"catch","catch",1038065524));
var name = cljs.core.get.call(null,map__29302__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var finally$ = cljs.core.get.call(null,map__29302__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_((function (){var or__20455__auto__ = name;
if(cljs.core.truth_(or__20455__auto__)){
return or__20455__auto__;
} else {
return finally$;
}
})())){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

cljs.compiler.emits.call(null,"try{",try$,"}");

if(cljs.core.truth_(name)){
cljs.compiler.emits.call(null,"catch (",cljs.compiler.munge.call(null,name),"){",catch$,"}");
} else {
}

if(cljs.core.truth_(finally$)){
if(cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"constant","constant",-379609303),new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(finally$))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("finally block cannot contain constant"),cljs.core.str("\n"),cljs.core.str("(not= :constant (:op finally))")].join('')));
}

cljs.compiler.emits.call(null,"finally {",finally$,"}");
} else {
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.call(null,"})()");
} else {
return null;
}
} else {
return cljs.compiler.emits.call(null,try$);
}
}));
cljs.compiler.emit_let = (function cljs$compiler$emit_let(p__29304,is_loop){
var map__29316 = p__29304;
var map__29316__$1 = ((((!((map__29316 == null)))?((((map__29316.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29316.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29316):map__29316);
var bindings = cljs.core.get.call(null,map__29316__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var expr = cljs.core.get.call(null,map__29316__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__29316__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var _STAR_lexical_renames_STAR_29318_29327 = cljs.compiler._STAR_lexical_renames_STAR_;
cljs.compiler._STAR_lexical_renames_STAR_ = cljs.core.into.call(null,cljs.compiler._STAR_lexical_renames_STAR_,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),context))?cljs.core.map.call(null,((function (_STAR_lexical_renames_STAR_29318_29327,context,map__29316,map__29316__$1,bindings,expr,env){
return (function (binding){
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(binding);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.compiler.hash_scope.call(null,binding),cljs.core.gensym.call(null,[cljs.core.str(name),cljs.core.str("-")].join(''))],null));
});})(_STAR_lexical_renames_STAR_29318_29327,context,map__29316,map__29316__$1,bindings,expr,env))
,bindings):null));

try{var seq__29319_29328 = cljs.core.seq.call(null,bindings);
var chunk__29320_29329 = null;
var count__29321_29330 = (0);
var i__29322_29331 = (0);
while(true){
if((i__29322_29331 < count__29321_29330)){
var map__29323_29332 = cljs.core._nth.call(null,chunk__29320_29329,i__29322_29331);
var map__29323_29333__$1 = ((((!((map__29323_29332 == null)))?((((map__29323_29332.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29323_29332.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29323_29332):map__29323_29332);
var binding_29334 = map__29323_29333__$1;
var init_29335 = cljs.core.get.call(null,map__29323_29333__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_29334);

cljs.compiler.emitln.call(null," = ",init_29335,";");

var G__29336 = seq__29319_29328;
var G__29337 = chunk__29320_29329;
var G__29338 = count__29321_29330;
var G__29339 = (i__29322_29331 + (1));
seq__29319_29328 = G__29336;
chunk__29320_29329 = G__29337;
count__29321_29330 = G__29338;
i__29322_29331 = G__29339;
continue;
} else {
var temp__4657__auto___29340 = cljs.core.seq.call(null,seq__29319_29328);
if(temp__4657__auto___29340){
var seq__29319_29341__$1 = temp__4657__auto___29340;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29319_29341__$1)){
var c__21266__auto___29342 = cljs.core.chunk_first.call(null,seq__29319_29341__$1);
var G__29343 = cljs.core.chunk_rest.call(null,seq__29319_29341__$1);
var G__29344 = c__21266__auto___29342;
var G__29345 = cljs.core.count.call(null,c__21266__auto___29342);
var G__29346 = (0);
seq__29319_29328 = G__29343;
chunk__29320_29329 = G__29344;
count__29321_29330 = G__29345;
i__29322_29331 = G__29346;
continue;
} else {
var map__29325_29347 = cljs.core.first.call(null,seq__29319_29341__$1);
var map__29325_29348__$1 = ((((!((map__29325_29347 == null)))?((((map__29325_29347.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29325_29347.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29325_29347):map__29325_29347);
var binding_29349 = map__29325_29348__$1;
var init_29350 = cljs.core.get.call(null,map__29325_29348__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_29349);

cljs.compiler.emitln.call(null," = ",init_29350,";");

var G__29351 = cljs.core.next.call(null,seq__29319_29341__$1);
var G__29352 = null;
var G__29353 = (0);
var G__29354 = (0);
seq__29319_29328 = G__29351;
chunk__29320_29329 = G__29352;
count__29321_29330 = G__29353;
i__29322_29331 = G__29354;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(is_loop)){
cljs.compiler.emitln.call(null,"while(true){");
} else {
}

cljs.compiler.emits.call(null,expr);

if(cljs.core.truth_(is_loop)){
cljs.compiler.emitln.call(null,"break;");

cljs.compiler.emitln.call(null,"}");
} else {
}
}finally {cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR_29318_29327;
}
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.call(null,"})()");
} else {
return null;
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"let","let",-1282412701),(function (ast){
return cljs.compiler.emit_let.call(null,ast,false);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"loop","loop",-395552849),(function (ast){
return cljs.compiler.emit_let.call(null,ast,true);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"recur","recur",-437573268),(function (p__29355){
var map__29356 = p__29355;
var map__29356__$1 = ((((!((map__29356 == null)))?((((map__29356.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29356.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29356):map__29356);
var frame = cljs.core.get.call(null,map__29356__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var exprs = cljs.core.get.call(null,map__29356__$1,new cljs.core.Keyword(null,"exprs","exprs",1795829094));
var env = cljs.core.get.call(null,map__29356__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var temps = cljs.core.vec.call(null,cljs.core.take.call(null,cljs.core.count.call(null,exprs),cljs.core.repeatedly.call(null,cljs.core.gensym)));
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(frame);
var n__21370__auto___29358 = cljs.core.count.call(null,exprs);
var i_29359 = (0);
while(true){
if((i_29359 < n__21370__auto___29358)){
cljs.compiler.emitln.call(null,"var ",temps.call(null,i_29359)," = ",exprs.call(null,i_29359),";");

var G__29360 = (i_29359 + (1));
i_29359 = G__29360;
continue;
} else {
}
break;
}

var n__21370__auto___29361 = cljs.core.count.call(null,exprs);
var i_29362 = (0);
while(true){
if((i_29362 < n__21370__auto___29361)){
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,params.call(null,i_29362))," = ",temps.call(null,i_29362),";");

var G__29363 = (i_29362 + (1));
i_29362 = G__29363;
continue;
} else {
}
break;
}

return cljs.compiler.emitln.call(null,"continue;");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"letfn","letfn",-2121022354),(function (p__29364){
var map__29365 = p__29364;
var map__29365__$1 = ((((!((map__29365 == null)))?((((map__29365.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29365.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29365):map__29365);
var bindings = cljs.core.get.call(null,map__29365__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var expr = cljs.core.get.call(null,map__29365__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__29365__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var seq__29367_29375 = cljs.core.seq.call(null,bindings);
var chunk__29368_29376 = null;
var count__29369_29377 = (0);
var i__29370_29378 = (0);
while(true){
if((i__29370_29378 < count__29369_29377)){
var map__29371_29379 = cljs.core._nth.call(null,chunk__29368_29376,i__29370_29378);
var map__29371_29380__$1 = ((((!((map__29371_29379 == null)))?((((map__29371_29379.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29371_29379.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29371_29379):map__29371_29379);
var binding_29381 = map__29371_29380__$1;
var init_29382 = cljs.core.get.call(null,map__29371_29380__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_29381)," = ",init_29382,";");

var G__29383 = seq__29367_29375;
var G__29384 = chunk__29368_29376;
var G__29385 = count__29369_29377;
var G__29386 = (i__29370_29378 + (1));
seq__29367_29375 = G__29383;
chunk__29368_29376 = G__29384;
count__29369_29377 = G__29385;
i__29370_29378 = G__29386;
continue;
} else {
var temp__4657__auto___29387 = cljs.core.seq.call(null,seq__29367_29375);
if(temp__4657__auto___29387){
var seq__29367_29388__$1 = temp__4657__auto___29387;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29367_29388__$1)){
var c__21266__auto___29389 = cljs.core.chunk_first.call(null,seq__29367_29388__$1);
var G__29390 = cljs.core.chunk_rest.call(null,seq__29367_29388__$1);
var G__29391 = c__21266__auto___29389;
var G__29392 = cljs.core.count.call(null,c__21266__auto___29389);
var G__29393 = (0);
seq__29367_29375 = G__29390;
chunk__29368_29376 = G__29391;
count__29369_29377 = G__29392;
i__29370_29378 = G__29393;
continue;
} else {
var map__29373_29394 = cljs.core.first.call(null,seq__29367_29388__$1);
var map__29373_29395__$1 = ((((!((map__29373_29394 == null)))?((((map__29373_29394.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29373_29394.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29373_29394):map__29373_29394);
var binding_29396 = map__29373_29395__$1;
var init_29397 = cljs.core.get.call(null,map__29373_29395__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_29396)," = ",init_29397,";");

var G__29398 = cljs.core.next.call(null,seq__29367_29388__$1);
var G__29399 = null;
var G__29400 = (0);
var G__29401 = (0);
seq__29367_29375 = G__29398;
chunk__29368_29376 = G__29399;
count__29369_29377 = G__29400;
i__29370_29378 = G__29401;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.call(null,expr);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.call(null,"})()");
} else {
return null;
}
}));
cljs.compiler.protocol_prefix = (function cljs$compiler$protocol_prefix(psym){
return cljs.core.symbol.call(null,[cljs.core.str([cljs.core.str(psym)].join('').replace((new RegExp("\\.","g")),"$").replace("/","$")),cljs.core.str("$")].join(''));
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"invoke","invoke",1145927159),(function (p__29404){
var map__29405 = p__29404;
var map__29405__$1 = ((((!((map__29405 == null)))?((((map__29405.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29405.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29405):map__29405);
var expr = map__29405__$1;
var f = cljs.core.get.call(null,map__29405__$1,new cljs.core.Keyword(null,"f","f",-1597136552));
var args = cljs.core.get.call(null,map__29405__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__29405__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var info = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(f);
var fn_QMARK_ = (function (){var and__20443__auto__ = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(and__20443__auto__)){
var and__20443__auto____$1 = cljs.core.not.call(null,new cljs.core.Keyword(null,"dynamic","dynamic",704819571).cljs$core$IFn$_invoke$arity$1(info));
if(and__20443__auto____$1){
return new cljs.core.Keyword(null,"fn-var","fn-var",1086204730).cljs$core$IFn$_invoke$arity$1(info);
} else {
return and__20443__auto____$1;
}
} else {
return and__20443__auto__;
}
})();
var protocol = new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(info);
var tag = cljs.analyzer.infer_tag.call(null,env,cljs.core.first.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(expr)));
var proto_QMARK_ = (function (){var and__20443__auto__ = protocol;
if(cljs.core.truth_(and__20443__auto__)){
var and__20443__auto____$1 = tag;
if(cljs.core.truth_(and__20443__auto____$1)){
var or__20455__auto__ = (function (){var and__20443__auto____$2 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(and__20443__auto____$2)){
var and__20443__auto____$3 = protocol;
if(cljs.core.truth_(and__20443__auto____$3)){
return cljs.core._EQ_.call(null,tag,new cljs.core.Symbol(null,"not-native","not-native",-236392494,null));
} else {
return and__20443__auto____$3;
}
} else {
return and__20443__auto____$2;
}
})();
if(cljs.core.truth_(or__20455__auto__)){
return or__20455__auto__;
} else {
var and__20443__auto____$2 = (function (){var or__20455__auto____$1 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(or__20455__auto____$1)){
return or__20455__auto____$1;
} else {
return new cljs.core.Keyword(null,"protocol-inline","protocol-inline",1550487556).cljs$core$IFn$_invoke$arity$1(env);
}
})();
if(cljs.core.truth_(and__20443__auto____$2)){
var or__20455__auto____$1 = cljs.core._EQ_.call(null,protocol,tag);
if(or__20455__auto____$1){
return or__20455__auto____$1;
} else {
var and__20443__auto____$3 = !(cljs.core.set_QMARK_.call(null,tag));
if(and__20443__auto____$3){
var and__20443__auto____$4 = cljs.core.not.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, [new cljs.core.Symbol(null,"clj","clj",980036099,null),null,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null,new cljs.core.Symbol(null,"object","object",-1179821820,null),null,new cljs.core.Symbol(null,"any","any",-948528346,null),null,new cljs.core.Symbol(null,"number","number",-1084057331,null),null,new cljs.core.Symbol(null,"clj-or-nil","clj-or-nil",-2008798668,null),null,new cljs.core.Symbol(null,"array","array",-440182315,null),null,new cljs.core.Symbol(null,"string","string",-349010059,null),null,new cljs.core.Symbol(null,"function","function",-486723946,null),null,new cljs.core.Symbol(null,"clj-nil","clj-nil",1321798654,null),null], null), null).call(null,tag));
if(and__20443__auto____$4){
var temp__4657__auto__ = new cljs.core.Keyword(null,"protocols","protocols",-5615896).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_existing_var.call(null,env,cljs.core.symbol.call(null,cljs.core.name.call(null,tag))));
if(cljs.core.truth_(temp__4657__auto__)){
var ps = temp__4657__auto__;
return ps.call(null,protocol);
} else {
return null;
}
} else {
return and__20443__auto____$4;
}
} else {
return and__20443__auto____$3;
}
}
} else {
return and__20443__auto____$2;
}
}
} else {
return and__20443__auto____$1;
}
} else {
return and__20443__auto__;
}
})();
var opt_not_QMARK_ = (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info),new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null))) && (cljs.core._EQ_.call(null,cljs.analyzer.infer_tag.call(null,env,cljs.core.first.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(expr))),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null)));
var ns = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(info);
var js_QMARK_ = (cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"js","js",-886355190,null))) || (cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"Math","Math",2033287572,null)));
var goog_QMARK_ = (cljs.core.truth_(ns)?(function (){var or__20455__auto__ = cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"goog","goog",-70603925,null));
if(or__20455__auto__){
return or__20455__auto__;
} else {
var temp__4657__auto__ = [cljs.core.str(ns)].join('');
if(cljs.core.truth_(temp__4657__auto__)){
var ns_str = temp__4657__auto__;
return cljs.core._EQ_.call(null,cljs.core.get.call(null,clojure.string.split.call(null,ns_str,/\./),(0),null),"goog");
} else {
return null;
}
}
})():null);
var keyword_QMARK_ = (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(f),new cljs.core.Keyword(null,"constant","constant",-379609303))) && ((new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(f) instanceof cljs.core.Keyword));
var vec__29407 = (cljs.core.truth_(fn_QMARK_)?(function (){var arity = cljs.core.count.call(null,args);
var variadic_QMARK_ = new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(info);
var mps = new cljs.core.Keyword(null,"method-params","method-params",-980792179).cljs$core$IFn$_invoke$arity$1(info);
var mfa = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(info);
if((cljs.core.not.call(null,variadic_QMARK_)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,mps),(1)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
} else {
if(cljs.core.truth_((function (){var and__20443__auto__ = variadic_QMARK_;
if(cljs.core.truth_(and__20443__auto__)){
return (arity > mfa);
} else {
return and__20443__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__29405,map__29405__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str(cljs.compiler.munge.call(null,info__$1)),cljs.core.str(".cljs$core$IFn$_invoke$arity$variadic")].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__29405,map__29405__$1,expr,f,args,env){
return (function (p1__29402_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__29402_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__29405,map__29405__$1,expr,f,args,env))
);
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__29405,map__29405__$1,expr,f,args,env))
),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),mfa], null)], null);
} else {
var arities = cljs.core.map.call(null,cljs.core.count,mps);
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([arity], true),arities))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__29405,map__29405__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str(cljs.compiler.munge.call(null,info__$1)),cljs.core.str(".cljs$core$IFn$_invoke$arity$"),cljs.core.str(arity)].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__29405,map__29405__$1,expr,f,args,env){
return (function (p1__29403_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__29403_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__29405,map__29405__$1,expr,f,args,env))
);
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__29405,map__29405__$1,expr,f,args,env))
),null], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
}

}
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null));
var f__$1 = cljs.core.nth.call(null,vec__29407,(0),null);
var variadic_invoke = cljs.core.nth.call(null,vec__29407,(1),null);
var env__28518__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__28518__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(opt_not_QMARK_){
cljs.compiler.emits.call(null,"!(",cljs.core.first.call(null,args),")");
} else {
if(cljs.core.truth_(proto_QMARK_)){
var pimpl_29410 = [cljs.core.str(cljs.compiler.munge.call(null,cljs.compiler.protocol_prefix.call(null,protocol))),cljs.core.str(cljs.compiler.munge.call(null,cljs.core.name.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info)))),cljs.core.str("$arity$"),cljs.core.str(cljs.core.count.call(null,args))].join('');
cljs.compiler.emits.call(null,cljs.core.first.call(null,args),".",pimpl_29410,"(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",cljs.core.rest.call(null,args))),")");
} else {
if(keyword_QMARK_){
cljs.compiler.emits.call(null,f__$1,".cljs$core$IFn$_invoke$arity$",cljs.core.count.call(null,args),"(",cljs.compiler.comma_sep.call(null,args),")");
} else {
if(cljs.core.truth_(variadic_invoke)){
var mfa_29411 = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(variadic_invoke);
cljs.compiler.emits.call(null,f__$1,"(",cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,mfa_29411,args)),(((mfa_29411 === (0)))?null:","),"cljs.core.array_seq([",cljs.compiler.comma_sep.call(null,cljs.core.drop.call(null,mfa_29411,args)),"], 0))");
} else {
if(cljs.core.truth_((function (){var or__20455__auto__ = fn_QMARK_;
if(cljs.core.truth_(or__20455__auto__)){
return or__20455__auto__;
} else {
var or__20455__auto____$1 = js_QMARK_;
if(or__20455__auto____$1){
return or__20455__auto____$1;
} else {
return goog_QMARK_;
}
}
})())){
cljs.compiler.emits.call(null,f__$1,"(",cljs.compiler.comma_sep.call(null,args),")");
} else {
if(cljs.core.truth_((function (){var and__20443__auto__ = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(and__20443__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(f__$1),new cljs.core.Keyword(null,"var","var",-769682797));
} else {
return and__20443__auto__;
}
})())){
var fprop_29412 = [cljs.core.str(".cljs$core$IFn$_invoke$arity$"),cljs.core.str(cljs.core.count.call(null,args))].join('');
cljs.compiler.emits.call(null,"(",f__$1,fprop_29412," ? ",f__$1,fprop_29412,"(",cljs.compiler.comma_sep.call(null,args),") : ",f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),"))");
} else {
cljs.compiler.emits.call(null,f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),")");
}

}
}
}
}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__28518__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"new","new",-2085437848),(function (p__29413){
var map__29414 = p__29413;
var map__29414__$1 = ((((!((map__29414 == null)))?((((map__29414.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29414.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29414):map__29414);
var ctor = cljs.core.get.call(null,map__29414__$1,new cljs.core.Keyword(null,"ctor","ctor",1750864802));
var args = cljs.core.get.call(null,map__29414__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__29414__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__28518__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__28518__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"(new ",ctor,"(",cljs.compiler.comma_sep.call(null,args),"))");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__28518__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set!","set!",-1389817006),(function (p__29416){
var map__29417 = p__29416;
var map__29417__$1 = ((((!((map__29417 == null)))?((((map__29417.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29417.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29417):map__29417);
var target = cljs.core.get.call(null,map__29417__$1,new cljs.core.Keyword(null,"target","target",253001721));
var val = cljs.core.get.call(null,map__29417__$1,new cljs.core.Keyword(null,"val","val",128701612));
var env = cljs.core.get.call(null,map__29417__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__28518__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__28518__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,target," = ",val);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__28518__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.load_libs = (function cljs$compiler$load_libs(libs,seen,reloads){
var loaded_libs = cljs.compiler.munge.call(null,new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null));
var loaded_libs_temp = cljs.compiler.munge.call(null,cljs.core.gensym.call(null,new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null)));
if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs)))){
cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs_temp," = ",loaded_libs," || cljs.core.set();");

cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs," = cljs.core.set();");
} else {
}

var seq__29423_29427 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,seen)),cljs.core.distinct.call(null,cljs.core.vals.call(null,libs))));
var chunk__29424_29428 = null;
var count__29425_29429 = (0);
var i__29426_29430 = (0);
while(true){
if((i__29426_29430 < count__29425_29429)){
var lib_29431 = cljs.core._nth.call(null,chunk__29424_29428,i__29426_29430);
if(cljs.core.truth_((function (){var or__20455__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__20455__auto__)){
return or__20455__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_29431),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_29431),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__20455__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__20455__auto__)){
return or__20455__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_29431),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_29431),"', 'reload-all');");
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_29431),"');");

}
}

var G__29432 = seq__29423_29427;
var G__29433 = chunk__29424_29428;
var G__29434 = count__29425_29429;
var G__29435 = (i__29426_29430 + (1));
seq__29423_29427 = G__29432;
chunk__29424_29428 = G__29433;
count__29425_29429 = G__29434;
i__29426_29430 = G__29435;
continue;
} else {
var temp__4657__auto___29436 = cljs.core.seq.call(null,seq__29423_29427);
if(temp__4657__auto___29436){
var seq__29423_29437__$1 = temp__4657__auto___29436;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29423_29437__$1)){
var c__21266__auto___29438 = cljs.core.chunk_first.call(null,seq__29423_29437__$1);
var G__29439 = cljs.core.chunk_rest.call(null,seq__29423_29437__$1);
var G__29440 = c__21266__auto___29438;
var G__29441 = cljs.core.count.call(null,c__21266__auto___29438);
var G__29442 = (0);
seq__29423_29427 = G__29439;
chunk__29424_29428 = G__29440;
count__29425_29429 = G__29441;
i__29426_29430 = G__29442;
continue;
} else {
var lib_29443 = cljs.core.first.call(null,seq__29423_29437__$1);
if(cljs.core.truth_((function (){var or__20455__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__20455__auto__)){
return or__20455__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_29443),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_29443),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__20455__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__20455__auto__)){
return or__20455__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_29443),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_29443),"', 'reload-all');");
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_29443),"');");

}
}

var G__29444 = cljs.core.next.call(null,seq__29423_29437__$1);
var G__29445 = null;
var G__29446 = (0);
var G__29447 = (0);
seq__29423_29427 = G__29444;
chunk__29424_29428 = G__29445;
count__29425_29429 = G__29446;
i__29426_29430 = G__29447;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs)))){
return cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs," = cljs.core.into(",loaded_libs_temp,", ",loaded_libs,");");
} else {
return null;
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns","ns",441598760),(function (p__29448){
var map__29449 = p__29448;
var map__29449__$1 = ((((!((map__29449 == null)))?((((map__29449.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29449.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29449):map__29449);
var name = cljs.core.get.call(null,map__29449__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__29449__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__29449__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__29449__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__29449__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__29449__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
cljs.compiler.emitln.call(null,"goog.provide('",cljs.compiler.munge.call(null,name),"');");

if(cljs.core._EQ_.call(null,name,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null))){
} else {
cljs.compiler.emitln.call(null,"goog.require('cljs.core');");
}

cljs.compiler.load_libs.call(null,requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads));

return cljs.compiler.load_libs.call(null,uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads));
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"deftype*","deftype*",-677871637),(function (p__29451){
var map__29452 = p__29451;
var map__29452__$1 = ((((!((map__29452 == null)))?((((map__29452.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29452.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29452):map__29452);
var t = cljs.core.get.call(null,map__29452__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__29452__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__29452__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__29452__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__29452__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.map.call(null,cljs.compiler.munge,fields);
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__29454_29472 = cljs.core.seq.call(null,protocols);
var chunk__29455_29473 = null;
var count__29456_29474 = (0);
var i__29457_29475 = (0);
while(true){
if((i__29457_29475 < count__29456_29474)){
var protocol_29476 = cljs.core._nth.call(null,chunk__29455_29473,i__29457_29475);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str(protocol_29476)].join('')),"}");

var G__29477 = seq__29454_29472;
var G__29478 = chunk__29455_29473;
var G__29479 = count__29456_29474;
var G__29480 = (i__29457_29475 + (1));
seq__29454_29472 = G__29477;
chunk__29455_29473 = G__29478;
count__29456_29474 = G__29479;
i__29457_29475 = G__29480;
continue;
} else {
var temp__4657__auto___29481 = cljs.core.seq.call(null,seq__29454_29472);
if(temp__4657__auto___29481){
var seq__29454_29482__$1 = temp__4657__auto___29481;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29454_29482__$1)){
var c__21266__auto___29483 = cljs.core.chunk_first.call(null,seq__29454_29482__$1);
var G__29484 = cljs.core.chunk_rest.call(null,seq__29454_29482__$1);
var G__29485 = c__21266__auto___29483;
var G__29486 = cljs.core.count.call(null,c__21266__auto___29483);
var G__29487 = (0);
seq__29454_29472 = G__29484;
chunk__29455_29473 = G__29485;
count__29456_29474 = G__29486;
i__29457_29475 = G__29487;
continue;
} else {
var protocol_29488 = cljs.core.first.call(null,seq__29454_29482__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str(protocol_29488)].join('')),"}");

var G__29489 = cljs.core.next.call(null,seq__29454_29482__$1);
var G__29490 = null;
var G__29491 = (0);
var G__29492 = (0);
seq__29454_29472 = G__29489;
chunk__29455_29473 = G__29490;
count__29456_29474 = G__29491;
i__29457_29475 = G__29492;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__29458_29493 = cljs.core.seq.call(null,fields__$1);
var chunk__29459_29494 = null;
var count__29460_29495 = (0);
var i__29461_29496 = (0);
while(true){
if((i__29461_29496 < count__29460_29495)){
var fld_29497 = cljs.core._nth.call(null,chunk__29459_29494,i__29461_29496);
cljs.compiler.emitln.call(null,"this.",fld_29497," = ",fld_29497,";");

var G__29498 = seq__29458_29493;
var G__29499 = chunk__29459_29494;
var G__29500 = count__29460_29495;
var G__29501 = (i__29461_29496 + (1));
seq__29458_29493 = G__29498;
chunk__29459_29494 = G__29499;
count__29460_29495 = G__29500;
i__29461_29496 = G__29501;
continue;
} else {
var temp__4657__auto___29502 = cljs.core.seq.call(null,seq__29458_29493);
if(temp__4657__auto___29502){
var seq__29458_29503__$1 = temp__4657__auto___29502;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29458_29503__$1)){
var c__21266__auto___29504 = cljs.core.chunk_first.call(null,seq__29458_29503__$1);
var G__29505 = cljs.core.chunk_rest.call(null,seq__29458_29503__$1);
var G__29506 = c__21266__auto___29504;
var G__29507 = cljs.core.count.call(null,c__21266__auto___29504);
var G__29508 = (0);
seq__29458_29493 = G__29505;
chunk__29459_29494 = G__29506;
count__29460_29495 = G__29507;
i__29461_29496 = G__29508;
continue;
} else {
var fld_29509 = cljs.core.first.call(null,seq__29458_29503__$1);
cljs.compiler.emitln.call(null,"this.",fld_29509," = ",fld_29509,";");

var G__29510 = cljs.core.next.call(null,seq__29458_29503__$1);
var G__29511 = null;
var G__29512 = (0);
var G__29513 = (0);
seq__29458_29493 = G__29510;
chunk__29459_29494 = G__29511;
count__29460_29495 = G__29512;
i__29461_29496 = G__29513;
continue;
}
} else {
}
}
break;
}

var seq__29462_29514 = cljs.core.seq.call(null,pmasks);
var chunk__29463_29515 = null;
var count__29464_29516 = (0);
var i__29465_29517 = (0);
while(true){
if((i__29465_29517 < count__29464_29516)){
var vec__29466_29518 = cljs.core._nth.call(null,chunk__29463_29515,i__29465_29517);
var pno_29519 = cljs.core.nth.call(null,vec__29466_29518,(0),null);
var pmask_29520 = cljs.core.nth.call(null,vec__29466_29518,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_29519,"$ = ",pmask_29520,";");

var G__29521 = seq__29462_29514;
var G__29522 = chunk__29463_29515;
var G__29523 = count__29464_29516;
var G__29524 = (i__29465_29517 + (1));
seq__29462_29514 = G__29521;
chunk__29463_29515 = G__29522;
count__29464_29516 = G__29523;
i__29465_29517 = G__29524;
continue;
} else {
var temp__4657__auto___29525 = cljs.core.seq.call(null,seq__29462_29514);
if(temp__4657__auto___29525){
var seq__29462_29526__$1 = temp__4657__auto___29525;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29462_29526__$1)){
var c__21266__auto___29527 = cljs.core.chunk_first.call(null,seq__29462_29526__$1);
var G__29528 = cljs.core.chunk_rest.call(null,seq__29462_29526__$1);
var G__29529 = c__21266__auto___29527;
var G__29530 = cljs.core.count.call(null,c__21266__auto___29527);
var G__29531 = (0);
seq__29462_29514 = G__29528;
chunk__29463_29515 = G__29529;
count__29464_29516 = G__29530;
i__29465_29517 = G__29531;
continue;
} else {
var vec__29469_29532 = cljs.core.first.call(null,seq__29462_29526__$1);
var pno_29533 = cljs.core.nth.call(null,vec__29469_29532,(0),null);
var pmask_29534 = cljs.core.nth.call(null,vec__29469_29532,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_29533,"$ = ",pmask_29534,";");

var G__29535 = cljs.core.next.call(null,seq__29462_29526__$1);
var G__29536 = null;
var G__29537 = (0);
var G__29538 = (0);
seq__29462_29514 = G__29535;
chunk__29463_29515 = G__29536;
count__29464_29516 = G__29537;
i__29465_29517 = G__29538;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"})");

return cljs.compiler.emit.call(null,body);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"defrecord*","defrecord*",718069562),(function (p__29539){
var map__29540 = p__29539;
var map__29540__$1 = ((((!((map__29540 == null)))?((((map__29540.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29540.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29540):map__29540);
var t = cljs.core.get.call(null,map__29540__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__29540__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__29540__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__29540__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__29540__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.concat.call(null,cljs.core.map.call(null,cljs.compiler.munge,fields),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null)], null));
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__29542_29560 = cljs.core.seq.call(null,protocols);
var chunk__29543_29561 = null;
var count__29544_29562 = (0);
var i__29545_29563 = (0);
while(true){
if((i__29545_29563 < count__29544_29562)){
var protocol_29564 = cljs.core._nth.call(null,chunk__29543_29561,i__29545_29563);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str(protocol_29564)].join('')),"}");

var G__29565 = seq__29542_29560;
var G__29566 = chunk__29543_29561;
var G__29567 = count__29544_29562;
var G__29568 = (i__29545_29563 + (1));
seq__29542_29560 = G__29565;
chunk__29543_29561 = G__29566;
count__29544_29562 = G__29567;
i__29545_29563 = G__29568;
continue;
} else {
var temp__4657__auto___29569 = cljs.core.seq.call(null,seq__29542_29560);
if(temp__4657__auto___29569){
var seq__29542_29570__$1 = temp__4657__auto___29569;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29542_29570__$1)){
var c__21266__auto___29571 = cljs.core.chunk_first.call(null,seq__29542_29570__$1);
var G__29572 = cljs.core.chunk_rest.call(null,seq__29542_29570__$1);
var G__29573 = c__21266__auto___29571;
var G__29574 = cljs.core.count.call(null,c__21266__auto___29571);
var G__29575 = (0);
seq__29542_29560 = G__29572;
chunk__29543_29561 = G__29573;
count__29544_29562 = G__29574;
i__29545_29563 = G__29575;
continue;
} else {
var protocol_29576 = cljs.core.first.call(null,seq__29542_29570__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str(protocol_29576)].join('')),"}");

var G__29577 = cljs.core.next.call(null,seq__29542_29570__$1);
var G__29578 = null;
var G__29579 = (0);
var G__29580 = (0);
seq__29542_29560 = G__29577;
chunk__29543_29561 = G__29578;
count__29544_29562 = G__29579;
i__29545_29563 = G__29580;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__29546_29581 = cljs.core.seq.call(null,fields__$1);
var chunk__29547_29582 = null;
var count__29548_29583 = (0);
var i__29549_29584 = (0);
while(true){
if((i__29549_29584 < count__29548_29583)){
var fld_29585 = cljs.core._nth.call(null,chunk__29547_29582,i__29549_29584);
cljs.compiler.emitln.call(null,"this.",fld_29585," = ",fld_29585,";");

var G__29586 = seq__29546_29581;
var G__29587 = chunk__29547_29582;
var G__29588 = count__29548_29583;
var G__29589 = (i__29549_29584 + (1));
seq__29546_29581 = G__29586;
chunk__29547_29582 = G__29587;
count__29548_29583 = G__29588;
i__29549_29584 = G__29589;
continue;
} else {
var temp__4657__auto___29590 = cljs.core.seq.call(null,seq__29546_29581);
if(temp__4657__auto___29590){
var seq__29546_29591__$1 = temp__4657__auto___29590;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29546_29591__$1)){
var c__21266__auto___29592 = cljs.core.chunk_first.call(null,seq__29546_29591__$1);
var G__29593 = cljs.core.chunk_rest.call(null,seq__29546_29591__$1);
var G__29594 = c__21266__auto___29592;
var G__29595 = cljs.core.count.call(null,c__21266__auto___29592);
var G__29596 = (0);
seq__29546_29581 = G__29593;
chunk__29547_29582 = G__29594;
count__29548_29583 = G__29595;
i__29549_29584 = G__29596;
continue;
} else {
var fld_29597 = cljs.core.first.call(null,seq__29546_29591__$1);
cljs.compiler.emitln.call(null,"this.",fld_29597," = ",fld_29597,";");

var G__29598 = cljs.core.next.call(null,seq__29546_29591__$1);
var G__29599 = null;
var G__29600 = (0);
var G__29601 = (0);
seq__29546_29581 = G__29598;
chunk__29547_29582 = G__29599;
count__29548_29583 = G__29600;
i__29549_29584 = G__29601;
continue;
}
} else {
}
}
break;
}

var seq__29550_29602 = cljs.core.seq.call(null,pmasks);
var chunk__29551_29603 = null;
var count__29552_29604 = (0);
var i__29553_29605 = (0);
while(true){
if((i__29553_29605 < count__29552_29604)){
var vec__29554_29606 = cljs.core._nth.call(null,chunk__29551_29603,i__29553_29605);
var pno_29607 = cljs.core.nth.call(null,vec__29554_29606,(0),null);
var pmask_29608 = cljs.core.nth.call(null,vec__29554_29606,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_29607,"$ = ",pmask_29608,";");

var G__29609 = seq__29550_29602;
var G__29610 = chunk__29551_29603;
var G__29611 = count__29552_29604;
var G__29612 = (i__29553_29605 + (1));
seq__29550_29602 = G__29609;
chunk__29551_29603 = G__29610;
count__29552_29604 = G__29611;
i__29553_29605 = G__29612;
continue;
} else {
var temp__4657__auto___29613 = cljs.core.seq.call(null,seq__29550_29602);
if(temp__4657__auto___29613){
var seq__29550_29614__$1 = temp__4657__auto___29613;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29550_29614__$1)){
var c__21266__auto___29615 = cljs.core.chunk_first.call(null,seq__29550_29614__$1);
var G__29616 = cljs.core.chunk_rest.call(null,seq__29550_29614__$1);
var G__29617 = c__21266__auto___29615;
var G__29618 = cljs.core.count.call(null,c__21266__auto___29615);
var G__29619 = (0);
seq__29550_29602 = G__29616;
chunk__29551_29603 = G__29617;
count__29552_29604 = G__29618;
i__29553_29605 = G__29619;
continue;
} else {
var vec__29557_29620 = cljs.core.first.call(null,seq__29550_29614__$1);
var pno_29621 = cljs.core.nth.call(null,vec__29557_29620,(0),null);
var pmask_29622 = cljs.core.nth.call(null,vec__29557_29620,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_29621,"$ = ",pmask_29622,";");

var G__29623 = cljs.core.next.call(null,seq__29550_29614__$1);
var G__29624 = null;
var G__29625 = (0);
var G__29626 = (0);
seq__29550_29602 = G__29623;
chunk__29551_29603 = G__29624;
count__29552_29604 = G__29625;
i__29553_29605 = G__29626;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"})");

return cljs.compiler.emit.call(null,body);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"dot","dot",1442709401),(function (p__29627){
var map__29628 = p__29627;
var map__29628__$1 = ((((!((map__29628 == null)))?((((map__29628.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29628.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29628):map__29628);
var target = cljs.core.get.call(null,map__29628__$1,new cljs.core.Keyword(null,"target","target",253001721));
var field = cljs.core.get.call(null,map__29628__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var method = cljs.core.get.call(null,map__29628__$1,new cljs.core.Keyword(null,"method","method",55703592));
var args = cljs.core.get.call(null,map__29628__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__29628__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__28518__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__28518__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(field)){
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,field,cljs.core.PersistentHashSet.EMPTY));
} else {
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,method,cljs.core.PersistentHashSet.EMPTY),"(",cljs.compiler.comma_sep.call(null,args),")");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__28518__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js","js",1768080579),(function (p__29630){
var map__29631 = p__29630;
var map__29631__$1 = ((((!((map__29631 == null)))?((((map__29631.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29631.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29631):map__29631);
var op = cljs.core.get.call(null,map__29631__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var env = cljs.core.get.call(null,map__29631__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var code = cljs.core.get.call(null,map__29631__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var segs = cljs.core.get.call(null,map__29631__$1,new cljs.core.Keyword(null,"segs","segs",-1940299576));
var args = cljs.core.get.call(null,map__29631__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_((function (){var and__20443__auto__ = code;
if(cljs.core.truth_(and__20443__auto__)){
return goog.string.startsWith(clojure.string.trim.call(null,code),"/*");
} else {
return and__20443__auto__;
}
})())){
return cljs.compiler.emits.call(null,code);
} else {
var env__28518__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__28518__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(code)){
cljs.compiler.emits.call(null,code);
} else {
cljs.compiler.emits.call(null,cljs.core.interleave.call(null,cljs.core.concat.call(null,segs,cljs.core.repeat.call(null,null)),cljs.core.concat.call(null,args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null))));
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__28518__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}));
cljs.compiler.build_affecting_options = (function cljs$compiler$build_affecting_options(opts){
return cljs.core.select_keys.call(null,opts,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"static-fns","static-fns",-501950748),new cljs.core.Keyword(null,"optimize-constants","optimize-constants",232704518),new cljs.core.Keyword(null,"elide-asserts","elide-asserts",537063272),new cljs.core.Keyword(null,"target","target",253001721)], null));
});
cljs.compiler.emit_constants_table = (function cljs$compiler$emit_constants_table(table){
var seq__29645 = cljs.core.seq.call(null,table);
var chunk__29646 = null;
var count__29647 = (0);
var i__29648 = (0);
while(true){
if((i__29648 < count__29647)){
var vec__29649 = cljs.core._nth.call(null,chunk__29646,i__29648);
var sym = cljs.core.nth.call(null,vec__29649,(0),null);
var value = cljs.core.nth.call(null,vec__29649,(1),null);
var ns_29655 = cljs.core.namespace.call(null,sym);
var name_29656 = cljs.core.name.call(null,sym);
cljs.compiler.emits.call(null,"cljs.core.",value," = ");

if((sym instanceof cljs.core.Keyword)){
cljs.compiler.emits_keyword.call(null,sym);
} else {
if((sym instanceof cljs.core.Symbol)){
cljs.compiler.emits_symbol.call(null,sym);
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot emit constant for type "),cljs.core.str(cljs.core.type.call(null,sym))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"invalid-constant-type","invalid-constant-type",1294847471)], null));

}
}

cljs.compiler.emits.call(null,";\n");

var G__29657 = seq__29645;
var G__29658 = chunk__29646;
var G__29659 = count__29647;
var G__29660 = (i__29648 + (1));
seq__29645 = G__29657;
chunk__29646 = G__29658;
count__29647 = G__29659;
i__29648 = G__29660;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__29645);
if(temp__4657__auto__){
var seq__29645__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29645__$1)){
var c__21266__auto__ = cljs.core.chunk_first.call(null,seq__29645__$1);
var G__29661 = cljs.core.chunk_rest.call(null,seq__29645__$1);
var G__29662 = c__21266__auto__;
var G__29663 = cljs.core.count.call(null,c__21266__auto__);
var G__29664 = (0);
seq__29645 = G__29661;
chunk__29646 = G__29662;
count__29647 = G__29663;
i__29648 = G__29664;
continue;
} else {
var vec__29652 = cljs.core.first.call(null,seq__29645__$1);
var sym = cljs.core.nth.call(null,vec__29652,(0),null);
var value = cljs.core.nth.call(null,vec__29652,(1),null);
var ns_29665 = cljs.core.namespace.call(null,sym);
var name_29666 = cljs.core.name.call(null,sym);
cljs.compiler.emits.call(null,"cljs.core.",value," = ");

if((sym instanceof cljs.core.Keyword)){
cljs.compiler.emits_keyword.call(null,sym);
} else {
if((sym instanceof cljs.core.Symbol)){
cljs.compiler.emits_symbol.call(null,sym);
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot emit constant for type "),cljs.core.str(cljs.core.type.call(null,sym))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"invalid-constant-type","invalid-constant-type",1294847471)], null));

}
}

cljs.compiler.emits.call(null,";\n");

var G__29667 = cljs.core.next.call(null,seq__29645__$1);
var G__29668 = null;
var G__29669 = (0);
var G__29670 = (0);
seq__29645 = G__29667;
chunk__29646 = G__29668;
count__29647 = G__29669;
i__29648 = G__29670;
continue;
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=compiler.js.map?rel=1605080720092