// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__38019){
var map__38053 = p__38019;
var map__38053__$1 = ((((!((map__38053 == null)))?((((map__38053.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38053.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38053):map__38053);
var m = map__38053__$1;
var n = cljs.core.get.call(null,map__38053__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__38053__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__38064_38088 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__38065_38089 = null;
var count__38066_38090 = (0);
var i__38067_38091 = (0);
while(true){
if((i__38067_38091 < count__38066_38090)){
var f_38092 = cljs.core._nth.call(null,chunk__38065_38089,i__38067_38091);
cljs.core.println.call(null,"  ",f_38092);

var G__38093 = seq__38064_38088;
var G__38094 = chunk__38065_38089;
var G__38095 = count__38066_38090;
var G__38096 = (i__38067_38091 + (1));
seq__38064_38088 = G__38093;
chunk__38065_38089 = G__38094;
count__38066_38090 = G__38095;
i__38067_38091 = G__38096;
continue;
} else {
var temp__4657__auto___38100 = cljs.core.seq.call(null,seq__38064_38088);
if(temp__4657__auto___38100){
var seq__38064_38104__$1 = temp__4657__auto___38100;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38064_38104__$1)){
var c__21266__auto___38105 = cljs.core.chunk_first.call(null,seq__38064_38104__$1);
var G__38106 = cljs.core.chunk_rest.call(null,seq__38064_38104__$1);
var G__38107 = c__21266__auto___38105;
var G__38108 = cljs.core.count.call(null,c__21266__auto___38105);
var G__38109 = (0);
seq__38064_38088 = G__38106;
chunk__38065_38089 = G__38107;
count__38066_38090 = G__38108;
i__38067_38091 = G__38109;
continue;
} else {
var f_38110 = cljs.core.first.call(null,seq__38064_38104__$1);
cljs.core.println.call(null,"  ",f_38110);

var G__38111 = cljs.core.next.call(null,seq__38064_38104__$1);
var G__38112 = null;
var G__38113 = (0);
var G__38114 = (0);
seq__38064_38088 = G__38111;
chunk__38065_38089 = G__38112;
count__38066_38090 = G__38113;
i__38067_38091 = G__38114;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_38115 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__20455__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__20455__auto__)){
return or__20455__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_38115);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_38115)))?cljs.core.second.call(null,arglists_38115):arglists_38115));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__38068_38122 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__38069_38123 = null;
var count__38070_38124 = (0);
var i__38071_38125 = (0);
while(true){
if((i__38071_38125 < count__38070_38124)){
var vec__38072_38129 = cljs.core._nth.call(null,chunk__38069_38123,i__38071_38125);
var name_38130 = cljs.core.nth.call(null,vec__38072_38129,(0),null);
var map__38075_38131 = cljs.core.nth.call(null,vec__38072_38129,(1),null);
var map__38075_38132__$1 = ((((!((map__38075_38131 == null)))?((((map__38075_38131.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38075_38131.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38075_38131):map__38075_38131);
var doc_38133 = cljs.core.get.call(null,map__38075_38132__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_38134 = cljs.core.get.call(null,map__38075_38132__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_38130);

cljs.core.println.call(null," ",arglists_38134);

if(cljs.core.truth_(doc_38133)){
cljs.core.println.call(null," ",doc_38133);
} else {
}

var G__38138 = seq__38068_38122;
var G__38139 = chunk__38069_38123;
var G__38140 = count__38070_38124;
var G__38141 = (i__38071_38125 + (1));
seq__38068_38122 = G__38138;
chunk__38069_38123 = G__38139;
count__38070_38124 = G__38140;
i__38071_38125 = G__38141;
continue;
} else {
var temp__4657__auto___38148 = cljs.core.seq.call(null,seq__38068_38122);
if(temp__4657__auto___38148){
var seq__38068_38149__$1 = temp__4657__auto___38148;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38068_38149__$1)){
var c__21266__auto___38150 = cljs.core.chunk_first.call(null,seq__38068_38149__$1);
var G__38151 = cljs.core.chunk_rest.call(null,seq__38068_38149__$1);
var G__38152 = c__21266__auto___38150;
var G__38153 = cljs.core.count.call(null,c__21266__auto___38150);
var G__38154 = (0);
seq__38068_38122 = G__38151;
chunk__38069_38123 = G__38152;
count__38070_38124 = G__38153;
i__38071_38125 = G__38154;
continue;
} else {
var vec__38077_38155 = cljs.core.first.call(null,seq__38068_38149__$1);
var name_38156 = cljs.core.nth.call(null,vec__38077_38155,(0),null);
var map__38080_38157 = cljs.core.nth.call(null,vec__38077_38155,(1),null);
var map__38080_38158__$1 = ((((!((map__38080_38157 == null)))?((((map__38080_38157.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38080_38157.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38080_38157):map__38080_38157);
var doc_38159 = cljs.core.get.call(null,map__38080_38158__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_38160 = cljs.core.get.call(null,map__38080_38158__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_38156);

cljs.core.println.call(null," ",arglists_38160);

if(cljs.core.truth_(doc_38159)){
cljs.core.println.call(null," ",doc_38159);
} else {
}

var G__38167 = cljs.core.next.call(null,seq__38068_38149__$1);
var G__38168 = null;
var G__38169 = (0);
var G__38170 = (0);
seq__38068_38122 = G__38167;
chunk__38069_38123 = G__38168;
count__38070_38124 = G__38169;
i__38071_38125 = G__38170;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__38082 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__38083 = null;
var count__38084 = (0);
var i__38085 = (0);
while(true){
if((i__38085 < count__38084)){
var role = cljs.core._nth.call(null,chunk__38083,i__38085);
var temp__4657__auto___38171__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___38171__$1)){
var spec_38172 = temp__4657__auto___38171__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_38172));
} else {
}

var G__38173 = seq__38082;
var G__38174 = chunk__38083;
var G__38175 = count__38084;
var G__38176 = (i__38085 + (1));
seq__38082 = G__38173;
chunk__38083 = G__38174;
count__38084 = G__38175;
i__38085 = G__38176;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__38082);
if(temp__4657__auto____$1){
var seq__38082__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38082__$1)){
var c__21266__auto__ = cljs.core.chunk_first.call(null,seq__38082__$1);
var G__38177 = cljs.core.chunk_rest.call(null,seq__38082__$1);
var G__38178 = c__21266__auto__;
var G__38179 = cljs.core.count.call(null,c__21266__auto__);
var G__38180 = (0);
seq__38082 = G__38177;
chunk__38083 = G__38178;
count__38084 = G__38179;
i__38085 = G__38180;
continue;
} else {
var role = cljs.core.first.call(null,seq__38082__$1);
var temp__4657__auto___38181__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___38181__$2)){
var spec_38185 = temp__4657__auto___38181__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_38185));
} else {
}

var G__38186 = cljs.core.next.call(null,seq__38082__$1);
var G__38187 = null;
var G__38188 = (0);
var G__38189 = (0);
seq__38082 = G__38186;
chunk__38083 = G__38187;
count__38084 = G__38188;
i__38085 = G__38189;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1605080729332