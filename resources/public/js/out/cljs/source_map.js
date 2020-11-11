// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.source_map');
goog.require('cljs.core');
goog.require('goog.object');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.source_map.base64_vlq');
/**
 * Take a seq of source file names and return a map from
 * file number to integer index. For reverse source maps.
 */
cljs.source_map.indexed_sources = (function cljs$source_map$indexed_sources(sources){
return cljs.core.reduce.call(null,(function (m,p__21915){
var vec__21916 = p__21915;
var i = cljs.core.nth.call(null,vec__21916,(0),null);
var v = cljs.core.nth.call(null,vec__21916,(1),null);
return cljs.core.assoc.call(null,m,v,i);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.call(null,(function (a,b){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null);
}),sources));
});
/**
 * Take a seq of source file names and return a comparator
 * that can be used to construct a sorted map. For reverse
 * source maps.
 */
cljs.source_map.source_compare = (function cljs$source_map$source_compare(sources){
var sources__$1 = cljs.source_map.indexed_sources.call(null,sources);
return ((function (sources__$1){
return (function (a,b){
return cljs.core.compare.call(null,sources__$1.call(null,a),sources__$1.call(null,b));
});
;})(sources__$1))
});
/**
 * Take a source map segment represented as a vector
 * and return a map.
 */
cljs.source_map.seg__GT_map = (function cljs$source_map$seg__GT_map(seg,source_map){
var vec__21922 = seg;
var gcol = cljs.core.nth.call(null,vec__21922,(0),null);
var source = cljs.core.nth.call(null,vec__21922,(1),null);
var line = cljs.core.nth.call(null,vec__21922,(2),null);
var col = cljs.core.nth.call(null,vec__21922,(3),null);
var name = cljs.core.nth.call(null,vec__21922,(4),null);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol,new cljs.core.Keyword(null,"source","source",-433931539),(goog.object.get(source_map,"sources")[source]),new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"name","name",1843675177),(function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,seg));
if(cljs.core.truth_(temp__4657__auto__)){
var name__$1 = temp__4657__auto__;
return (goog.object.get(source_map,"names")[name__$1]);
} else {
return null;
}
})()], null);
});
/**
 * Combine a source map segment vector and a relative
 * source map segment vector and combine them to get
 * an absolute segment posititon information as a vector.
 */
cljs.source_map.seg_combine = (function cljs$source_map$seg_combine(seg,relseg){
var vec__21933 = seg;
var gcol = cljs.core.nth.call(null,vec__21933,(0),null);
var source = cljs.core.nth.call(null,vec__21933,(1),null);
var line = cljs.core.nth.call(null,vec__21933,(2),null);
var col = cljs.core.nth.call(null,vec__21933,(3),null);
var name = cljs.core.nth.call(null,vec__21933,(4),null);
var vec__21936 = relseg;
var rgcol = cljs.core.nth.call(null,vec__21936,(0),null);
var rsource = cljs.core.nth.call(null,vec__21936,(1),null);
var rline = cljs.core.nth.call(null,vec__21936,(2),null);
var rcol = cljs.core.nth.call(null,vec__21936,(3),null);
var rname = cljs.core.nth.call(null,vec__21936,(4),null);
var nseg = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(gcol + rgcol),((function (){var or__20455__auto__ = source;
if(cljs.core.truth_(or__20455__auto__)){
return or__20455__auto__;
} else {
return (0);
}
})() + rsource),((function (){var or__20455__auto__ = line;
if(cljs.core.truth_(or__20455__auto__)){
return or__20455__auto__;
} else {
return (0);
}
})() + rline),((function (){var or__20455__auto__ = col;
if(cljs.core.truth_(or__20455__auto__)){
return or__20455__auto__;
} else {
return (0);
}
})() + rcol),((function (){var or__20455__auto__ = name;
if(cljs.core.truth_(or__20455__auto__)){
return or__20455__auto__;
} else {
return (0);
}
})() + rname)], null);
if(cljs.core.truth_(name)){
return cljs.core.with_meta.call(null,nseg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),(name + rname)], null));
} else {
return nseg;
}
});
/**
 * Helper for decode-reverse. Take a reverse source map and
 *   update it with a segment map.
 */
cljs.source_map.update_reverse_result = (function cljs$source_map$update_reverse_result(result,segmap,gline){
var map__21961 = segmap;
var map__21961__$1 = ((((!((map__21961 == null)))?((((map__21961.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21961.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21961):map__21961);
var gcol = cljs.core.get.call(null,map__21961__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__21961__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__21961__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__21961__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__21961__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gline","gline",-1086242431),gline,new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [source], null),cljs.core.fnil.call(null,((function (map__21961,map__21961__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [line], null),cljs.core.fnil.call(null,((function (map__21961,map__21961__$1,gcol,source,line,col,name,d,d__$1){
return (function (m__$1){
return cljs.core.update_in.call(null,m__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [col], null),cljs.core.fnil.call(null,((function (map__21961,map__21961__$1,gcol,source,line,col,name,d,d__$1){
return (function (v){
return cljs.core.conj.call(null,v,d__$1);
});})(map__21961,map__21961__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__21961,map__21961__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});})(map__21961,map__21961__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a reverse source map
 *   mapping original ClojureScript source locations to the generated
 *   JavaScript.
 */
cljs.source_map.decode_reverse = (function cljs$source_map$decode_reverse(var_args){
var args21987 = [];
var len__21530__auto___22012 = arguments.length;
var i__21531__auto___22013 = (0);
while(true){
if((i__21531__auto___22013 < len__21530__auto___22012)){
args21987.push((arguments[i__21531__auto___22013]));

var G__22014 = (i__21531__auto___22013 + (1));
i__21531__auto___22013 = G__22014;
continue;
} else {
}
break;
}

var G__22001 = args21987.length;
switch (G__22001) {
case 1:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21987.length)].join('')));

}
});

cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$1 = (function (source_map){
return cljs.source_map.decode_reverse.call(null,goog.object.get(source_map,"mappings"),source_map);
});

cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2 = (function (mappings,source_map){
var sources = goog.object.get(source_map,"sources");
var relseg_init = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null);
var lines = cljs.core.seq.call(null,clojure.string.split.call(null,mappings,/;/));
var gline = (0);
var lines__$1 = lines;
var relseg = relseg_init;
var result = cljs.core.sorted_map_by.call(null,cljs.source_map.source_compare.call(null,sources));
while(true){
if(lines__$1){
var line = cljs.core.first.call(null,lines__$1);
var vec__22006 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__22023 = cljs.core.next.call(null,segs__$1);
var G__22024 = nrelseg;
var G__22025 = cljs.source_map.update_reverse_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__22023;
relseg__$1 = G__22024;
result__$1 = G__22025;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__22006,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__22006,(1),null);
var G__22026 = (gline + (1));
var G__22027 = cljs.core.next.call(null,lines__$1);
var G__22028 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__22029 = result__$1;
gline = G__22026;
lines__$1 = G__22027;
relseg = G__22028;
result = G__22029;
continue;
} else {
return result;
}
break;
}
});

cljs.source_map.decode_reverse.cljs$lang$maxFixedArity = 2;

/**
 * Helper for decode. Take a source map and update it based on a
 *   segment map.
 */
cljs.source_map.update_result = (function cljs$source_map$update_result(result,segmap,gline){
var map__22034 = segmap;
var map__22034__$1 = ((((!((map__22034 == null)))?((((map__22034.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22034.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22034):map__22034);
var gcol = cljs.core.get.call(null,map__22034__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__22034__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__22034__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__22034__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__22034__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"source","source",-433931539),source], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline], null),cljs.core.fnil.call(null,((function (map__22034,map__22034__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol], null),cljs.core.fnil.call(null,((function (map__22034,map__22034__$1,gcol,source,line,col,name,d,d__$1){
return (function (p1__22030_SHARP_){
return cljs.core.conj.call(null,p1__22030_SHARP_,d__$1);
});})(map__22034,map__22034__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__22034,map__22034__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a source map mapping
 *   generated JavaScript source locations to the original
 *   ClojureScript.
 */
cljs.source_map.decode = (function cljs$source_map$decode(var_args){
var args22046 = [];
var len__21530__auto___22057 = arguments.length;
var i__21531__auto___22058 = (0);
while(true){
if((i__21531__auto___22058 < len__21530__auto___22057)){
args22046.push((arguments[i__21531__auto___22058]));

var G__22059 = (i__21531__auto___22058 + (1));
i__21531__auto___22058 = G__22059;
continue;
} else {
}
break;
}

var G__22049 = args22046.length;
switch (G__22049) {
case 1:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22046.length)].join('')));

}
});

cljs.source_map.decode.cljs$core$IFn$_invoke$arity$1 = (function (source_map){
return cljs.source_map.decode.call(null,goog.object.get(source_map,"mappings"),source_map);
});

cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2 = (function (mappings,source_map){
var sources = goog.object.get(source_map,"sources");
var relseg_init = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null);
var lines = cljs.core.seq.call(null,clojure.string.split.call(null,mappings,/;/));
var gline = (0);
var lines__$1 = lines;
var relseg = relseg_init;
var result = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if(lines__$1){
var line = cljs.core.first.call(null,lines__$1);
var vec__22054 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__22064 = cljs.core.next.call(null,segs__$1);
var G__22065 = nrelseg;
var G__22066 = cljs.source_map.update_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__22064;
relseg__$1 = G__22065;
result__$1 = G__22066;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__22054,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__22054,(1),null);
var G__22067 = (gline + (1));
var G__22068 = cljs.core.next.call(null,lines__$1);
var G__22069 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__22070 = result__$1;
gline = G__22067;
lines__$1 = G__22068;
relseg = G__22069;
result = G__22070;
continue;
} else {
return result;
}
break;
}
});

cljs.source_map.decode.cljs$lang$maxFixedArity = 2;

/**
 * Take a nested sorted map encoding line and column information
 * for a file and return a vector of vectors of encoded segments.
 * Each vector represents a line, and the internal vectors are segments
 * representing the contents of the line.
 */
cljs.source_map.lines__GT_segs = (function cljs$source_map$lines__GT_segs(lines){
var relseg = cljs.core.atom.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null));
return cljs.core.reduce.call(null,((function (relseg){
return (function (segs,cols){
cljs.core.swap_BANG_.call(null,relseg,((function (relseg){
return (function (p__22087){
var vec__22088 = p__22087;
var _ = cljs.core.nth.call(null,vec__22088,(0),null);
var source = cljs.core.nth.call(null,vec__22088,(1),null);
var line = cljs.core.nth.call(null,vec__22088,(2),null);
var col = cljs.core.nth.call(null,vec__22088,(3),null);
var name = cljs.core.nth.call(null,vec__22088,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),source,line,col,name], null);
});})(relseg))
);

return cljs.core.conj.call(null,segs,cljs.core.reduce.call(null,((function (relseg){
return (function (cols__$1,p__22091){
var vec__22092 = p__22091;
var gcol = cljs.core.nth.call(null,vec__22092,(0),null);
var sidx = cljs.core.nth.call(null,vec__22092,(1),null);
var line = cljs.core.nth.call(null,vec__22092,(2),null);
var col = cljs.core.nth.call(null,vec__22092,(3),null);
var name = cljs.core.nth.call(null,vec__22092,(4),null);
var seg = vec__22092;
var offset = cljs.core.map.call(null,cljs.core._,seg,cljs.core.deref.call(null,relseg));
cljs.core.swap_BANG_.call(null,relseg,((function (offset,vec__22092,gcol,sidx,line,col,name,seg,relseg){
return (function (p__22095){
var vec__22096 = p__22095;
var _ = cljs.core.nth.call(null,vec__22096,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__22096,(1),null);
var ___$2 = cljs.core.nth.call(null,vec__22096,(2),null);
var ___$3 = cljs.core.nth.call(null,vec__22096,(3),null);
var lname = cljs.core.nth.call(null,vec__22096,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol,sidx,line,col,(function (){var or__20455__auto__ = name;
if(cljs.core.truth_(or__20455__auto__)){
return or__20455__auto__;
} else {
return lname;
}
})()], null);
});})(offset,vec__22092,gcol,sidx,line,col,name,seg,relseg))
);

return cljs.core.conj.call(null,cols__$1,cljs.source_map.base64_vlq.encode.call(null,offset));
});})(relseg))
,cljs.core.PersistentVector.EMPTY,cols));
});})(relseg))
,cljs.core.PersistentVector.EMPTY,lines);
});
/**
 * Take an internal source map representation represented as nested
 * sorted maps of file, line, column and return a source map v3 JSON
 * string.
 */
cljs.source_map.encode = (function cljs$source_map$encode(m,opts){
var lines = cljs.core.atom.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null));
var names__GT_idx = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var name_idx = cljs.core.atom.call(null,(0));
var preamble_lines = cljs.core.take.call(null,(function (){var or__20455__auto__ = new cljs.core.Keyword(null,"preamble-line-count","preamble-line-count",-659949744).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__20455__auto__)){
return or__20455__auto__;
} else {
return (0);
}
})(),cljs.core.repeat.call(null,cljs.core.PersistentVector.EMPTY));
var info__GT_segv = ((function (lines,names__GT_idx,name_idx,preamble_lines){
return (function (info,source_idx,line,col){
var segv = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gcol","gcol",309250807).cljs$core$IFn$_invoke$arity$1(info),source_idx,line,col], null);
var temp__4655__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info);
if(cljs.core.truth_(temp__4655__auto__)){
var name = temp__4655__auto__;
var idx = (function (){var temp__4655__auto____$1 = cljs.core.get.call(null,cljs.core.deref.call(null,names__GT_idx),name);
if(cljs.core.truth_(temp__4655__auto____$1)){
var idx = temp__4655__auto____$1;
return idx;
} else {
var cidx = cljs.core.deref.call(null,name_idx);
cljs.core.swap_BANG_.call(null,names__GT_idx,cljs.core.assoc,name,cidx);

cljs.core.swap_BANG_.call(null,name_idx,cljs.core.inc);

return cidx;
}
})();
return cljs.core.conj.call(null,segv,idx);
} else {
return segv;
}
});})(lines,names__GT_idx,name_idx,preamble_lines))
;
var encode_cols = ((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (infos,source_idx,line,col){
var seq__22201 = cljs.core.seq.call(null,infos);
var chunk__22202 = null;
var count__22203 = (0);
var i__22204 = (0);
while(true){
if((i__22204 < count__22203)){
var info = cljs.core._nth.call(null,chunk__22202,i__22204);
var segv_22289 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_22290 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_22291 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_22290 > (lc_22291 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__22201,chunk__22202,count__22203,i__22204,segv_22289,gline_22290,lc_22291,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_22290 - (lc_22291 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_22289], null));
});})(seq__22201,chunk__22202,count__22203,i__22204,segv_22289,gline_22290,lc_22291,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__22201,chunk__22202,count__22203,i__22204,segv_22289,gline_22290,lc_22291,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_22290], null),cljs.core.conj,segv_22289);
});})(seq__22201,chunk__22202,count__22203,i__22204,segv_22289,gline_22290,lc_22291,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}

var G__22295 = seq__22201;
var G__22296 = chunk__22202;
var G__22297 = count__22203;
var G__22298 = (i__22204 + (1));
seq__22201 = G__22295;
chunk__22202 = G__22296;
count__22203 = G__22297;
i__22204 = G__22298;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__22201);
if(temp__4657__auto__){
var seq__22201__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22201__$1)){
var c__21266__auto__ = cljs.core.chunk_first.call(null,seq__22201__$1);
var G__22302 = cljs.core.chunk_rest.call(null,seq__22201__$1);
var G__22303 = c__21266__auto__;
var G__22304 = cljs.core.count.call(null,c__21266__auto__);
var G__22305 = (0);
seq__22201 = G__22302;
chunk__22202 = G__22303;
count__22203 = G__22304;
i__22204 = G__22305;
continue;
} else {
var info = cljs.core.first.call(null,seq__22201__$1);
var segv_22310 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_22311 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_22312 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_22311 > (lc_22312 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__22201,chunk__22202,count__22203,i__22204,segv_22310,gline_22311,lc_22312,info,seq__22201__$1,temp__4657__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_22311 - (lc_22312 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_22310], null));
});})(seq__22201,chunk__22202,count__22203,i__22204,segv_22310,gline_22311,lc_22312,info,seq__22201__$1,temp__4657__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__22201,chunk__22202,count__22203,i__22204,segv_22310,gline_22311,lc_22312,info,seq__22201__$1,temp__4657__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_22311], null),cljs.core.conj,segv_22310);
});})(seq__22201,chunk__22202,count__22203,i__22204,segv_22310,gline_22311,lc_22312,info,seq__22201__$1,temp__4657__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}

var G__22316 = cljs.core.next.call(null,seq__22201__$1);
var G__22317 = null;
var G__22318 = (0);
var G__22319 = (0);
seq__22201 = G__22316;
chunk__22202 = G__22317;
count__22203 = G__22318;
i__22204 = G__22319;
continue;
}
} else {
return null;
}
}
break;
}
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
;
var seq__22205_22320 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,m));
var chunk__22206_22321 = null;
var count__22207_22322 = (0);
var i__22208_22323 = (0);
while(true){
if((i__22208_22323 < count__22207_22322)){
var vec__22209_22328 = cljs.core._nth.call(null,chunk__22206_22321,i__22208_22323);
var source_idx_22329 = cljs.core.nth.call(null,vec__22209_22328,(0),null);
var vec__22212_22330 = cljs.core.nth.call(null,vec__22209_22328,(1),null);
var __22331 = cljs.core.nth.call(null,vec__22212_22330,(0),null);
var lines_22332__$1 = cljs.core.nth.call(null,vec__22212_22330,(1),null);
var seq__22215_22333 = cljs.core.seq.call(null,lines_22332__$1);
var chunk__22216_22334 = null;
var count__22217_22335 = (0);
var i__22218_22336 = (0);
while(true){
if((i__22218_22336 < count__22217_22335)){
var vec__22219_22343 = cljs.core._nth.call(null,chunk__22216_22334,i__22218_22336);
var line_22344 = cljs.core.nth.call(null,vec__22219_22343,(0),null);
var cols_22345 = cljs.core.nth.call(null,vec__22219_22343,(1),null);
var seq__22222_22349 = cljs.core.seq.call(null,cols_22345);
var chunk__22223_22350 = null;
var count__22224_22351 = (0);
var i__22225_22352 = (0);
while(true){
if((i__22225_22352 < count__22224_22351)){
var vec__22226_22356 = cljs.core._nth.call(null,chunk__22223_22350,i__22225_22352);
var col_22357 = cljs.core.nth.call(null,vec__22226_22356,(0),null);
var infos_22358 = cljs.core.nth.call(null,vec__22226_22356,(1),null);
encode_cols.call(null,infos_22358,source_idx_22329,line_22344,col_22357);

var G__22363 = seq__22222_22349;
var G__22364 = chunk__22223_22350;
var G__22365 = count__22224_22351;
var G__22366 = (i__22225_22352 + (1));
seq__22222_22349 = G__22363;
chunk__22223_22350 = G__22364;
count__22224_22351 = G__22365;
i__22225_22352 = G__22366;
continue;
} else {
var temp__4657__auto___22367 = cljs.core.seq.call(null,seq__22222_22349);
if(temp__4657__auto___22367){
var seq__22222_22368__$1 = temp__4657__auto___22367;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22222_22368__$1)){
var c__21266__auto___22369 = cljs.core.chunk_first.call(null,seq__22222_22368__$1);
var G__22370 = cljs.core.chunk_rest.call(null,seq__22222_22368__$1);
var G__22371 = c__21266__auto___22369;
var G__22372 = cljs.core.count.call(null,c__21266__auto___22369);
var G__22373 = (0);
seq__22222_22349 = G__22370;
chunk__22223_22350 = G__22371;
count__22224_22351 = G__22372;
i__22225_22352 = G__22373;
continue;
} else {
var vec__22229_22383 = cljs.core.first.call(null,seq__22222_22368__$1);
var col_22384 = cljs.core.nth.call(null,vec__22229_22383,(0),null);
var infos_22385 = cljs.core.nth.call(null,vec__22229_22383,(1),null);
encode_cols.call(null,infos_22385,source_idx_22329,line_22344,col_22384);

var G__22389 = cljs.core.next.call(null,seq__22222_22368__$1);
var G__22390 = null;
var G__22391 = (0);
var G__22392 = (0);
seq__22222_22349 = G__22389;
chunk__22223_22350 = G__22390;
count__22224_22351 = G__22391;
i__22225_22352 = G__22392;
continue;
}
} else {
}
}
break;
}

var G__22397 = seq__22215_22333;
var G__22398 = chunk__22216_22334;
var G__22399 = count__22217_22335;
var G__22400 = (i__22218_22336 + (1));
seq__22215_22333 = G__22397;
chunk__22216_22334 = G__22398;
count__22217_22335 = G__22399;
i__22218_22336 = G__22400;
continue;
} else {
var temp__4657__auto___22401 = cljs.core.seq.call(null,seq__22215_22333);
if(temp__4657__auto___22401){
var seq__22215_22402__$1 = temp__4657__auto___22401;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22215_22402__$1)){
var c__21266__auto___22404 = cljs.core.chunk_first.call(null,seq__22215_22402__$1);
var G__22409 = cljs.core.chunk_rest.call(null,seq__22215_22402__$1);
var G__22410 = c__21266__auto___22404;
var G__22411 = cljs.core.count.call(null,c__21266__auto___22404);
var G__22412 = (0);
seq__22215_22333 = G__22409;
chunk__22216_22334 = G__22410;
count__22217_22335 = G__22411;
i__22218_22336 = G__22412;
continue;
} else {
var vec__22232_22416 = cljs.core.first.call(null,seq__22215_22402__$1);
var line_22417 = cljs.core.nth.call(null,vec__22232_22416,(0),null);
var cols_22418 = cljs.core.nth.call(null,vec__22232_22416,(1),null);
var seq__22235_22426 = cljs.core.seq.call(null,cols_22418);
var chunk__22236_22427 = null;
var count__22237_22428 = (0);
var i__22238_22429 = (0);
while(true){
if((i__22238_22429 < count__22237_22428)){
var vec__22239_22434 = cljs.core._nth.call(null,chunk__22236_22427,i__22238_22429);
var col_22435 = cljs.core.nth.call(null,vec__22239_22434,(0),null);
var infos_22436 = cljs.core.nth.call(null,vec__22239_22434,(1),null);
encode_cols.call(null,infos_22436,source_idx_22329,line_22417,col_22435);

var G__22444 = seq__22235_22426;
var G__22445 = chunk__22236_22427;
var G__22447 = count__22237_22428;
var G__22448 = (i__22238_22429 + (1));
seq__22235_22426 = G__22444;
chunk__22236_22427 = G__22445;
count__22237_22428 = G__22447;
i__22238_22429 = G__22448;
continue;
} else {
var temp__4657__auto___22455__$1 = cljs.core.seq.call(null,seq__22235_22426);
if(temp__4657__auto___22455__$1){
var seq__22235_22461__$1 = temp__4657__auto___22455__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22235_22461__$1)){
var c__21266__auto___22462 = cljs.core.chunk_first.call(null,seq__22235_22461__$1);
var G__22463 = cljs.core.chunk_rest.call(null,seq__22235_22461__$1);
var G__22464 = c__21266__auto___22462;
var G__22465 = cljs.core.count.call(null,c__21266__auto___22462);
var G__22466 = (0);
seq__22235_22426 = G__22463;
chunk__22236_22427 = G__22464;
count__22237_22428 = G__22465;
i__22238_22429 = G__22466;
continue;
} else {
var vec__22242_22470 = cljs.core.first.call(null,seq__22235_22461__$1);
var col_22471 = cljs.core.nth.call(null,vec__22242_22470,(0),null);
var infos_22472 = cljs.core.nth.call(null,vec__22242_22470,(1),null);
encode_cols.call(null,infos_22472,source_idx_22329,line_22417,col_22471);

var G__22473 = cljs.core.next.call(null,seq__22235_22461__$1);
var G__22474 = null;
var G__22475 = (0);
var G__22476 = (0);
seq__22235_22426 = G__22473;
chunk__22236_22427 = G__22474;
count__22237_22428 = G__22475;
i__22238_22429 = G__22476;
continue;
}
} else {
}
}
break;
}

var G__22481 = cljs.core.next.call(null,seq__22215_22402__$1);
var G__22482 = null;
var G__22483 = (0);
var G__22484 = (0);
seq__22215_22333 = G__22481;
chunk__22216_22334 = G__22482;
count__22217_22335 = G__22483;
i__22218_22336 = G__22484;
continue;
}
} else {
}
}
break;
}

var G__22485 = seq__22205_22320;
var G__22486 = chunk__22206_22321;
var G__22487 = count__22207_22322;
var G__22488 = (i__22208_22323 + (1));
seq__22205_22320 = G__22485;
chunk__22206_22321 = G__22486;
count__22207_22322 = G__22487;
i__22208_22323 = G__22488;
continue;
} else {
var temp__4657__auto___22489 = cljs.core.seq.call(null,seq__22205_22320);
if(temp__4657__auto___22489){
var seq__22205_22490__$1 = temp__4657__auto___22489;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22205_22490__$1)){
var c__21266__auto___22491 = cljs.core.chunk_first.call(null,seq__22205_22490__$1);
var G__22492 = cljs.core.chunk_rest.call(null,seq__22205_22490__$1);
var G__22493 = c__21266__auto___22491;
var G__22494 = cljs.core.count.call(null,c__21266__auto___22491);
var G__22495 = (0);
seq__22205_22320 = G__22492;
chunk__22206_22321 = G__22493;
count__22207_22322 = G__22494;
i__22208_22323 = G__22495;
continue;
} else {
var vec__22245_22496 = cljs.core.first.call(null,seq__22205_22490__$1);
var source_idx_22497 = cljs.core.nth.call(null,vec__22245_22496,(0),null);
var vec__22248_22498 = cljs.core.nth.call(null,vec__22245_22496,(1),null);
var __22499 = cljs.core.nth.call(null,vec__22248_22498,(0),null);
var lines_22500__$1 = cljs.core.nth.call(null,vec__22248_22498,(1),null);
var seq__22254_22501 = cljs.core.seq.call(null,lines_22500__$1);
var chunk__22255_22502 = null;
var count__22256_22503 = (0);
var i__22257_22504 = (0);
while(true){
if((i__22257_22504 < count__22256_22503)){
var vec__22258_22505 = cljs.core._nth.call(null,chunk__22255_22502,i__22257_22504);
var line_22506 = cljs.core.nth.call(null,vec__22258_22505,(0),null);
var cols_22507 = cljs.core.nth.call(null,vec__22258_22505,(1),null);
var seq__22261_22508 = cljs.core.seq.call(null,cols_22507);
var chunk__22262_22509 = null;
var count__22263_22510 = (0);
var i__22264_22511 = (0);
while(true){
if((i__22264_22511 < count__22263_22510)){
var vec__22265_22512 = cljs.core._nth.call(null,chunk__22262_22509,i__22264_22511);
var col_22513 = cljs.core.nth.call(null,vec__22265_22512,(0),null);
var infos_22514 = cljs.core.nth.call(null,vec__22265_22512,(1),null);
encode_cols.call(null,infos_22514,source_idx_22497,line_22506,col_22513);

var G__22515 = seq__22261_22508;
var G__22516 = chunk__22262_22509;
var G__22517 = count__22263_22510;
var G__22518 = (i__22264_22511 + (1));
seq__22261_22508 = G__22515;
chunk__22262_22509 = G__22516;
count__22263_22510 = G__22517;
i__22264_22511 = G__22518;
continue;
} else {
var temp__4657__auto___22519__$1 = cljs.core.seq.call(null,seq__22261_22508);
if(temp__4657__auto___22519__$1){
var seq__22261_22520__$1 = temp__4657__auto___22519__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22261_22520__$1)){
var c__21266__auto___22521 = cljs.core.chunk_first.call(null,seq__22261_22520__$1);
var G__22522 = cljs.core.chunk_rest.call(null,seq__22261_22520__$1);
var G__22523 = c__21266__auto___22521;
var G__22524 = cljs.core.count.call(null,c__21266__auto___22521);
var G__22525 = (0);
seq__22261_22508 = G__22522;
chunk__22262_22509 = G__22523;
count__22263_22510 = G__22524;
i__22264_22511 = G__22525;
continue;
} else {
var vec__22268_22526 = cljs.core.first.call(null,seq__22261_22520__$1);
var col_22527 = cljs.core.nth.call(null,vec__22268_22526,(0),null);
var infos_22528 = cljs.core.nth.call(null,vec__22268_22526,(1),null);
encode_cols.call(null,infos_22528,source_idx_22497,line_22506,col_22527);

var G__22529 = cljs.core.next.call(null,seq__22261_22520__$1);
var G__22530 = null;
var G__22531 = (0);
var G__22532 = (0);
seq__22261_22508 = G__22529;
chunk__22262_22509 = G__22530;
count__22263_22510 = G__22531;
i__22264_22511 = G__22532;
continue;
}
} else {
}
}
break;
}

var G__22533 = seq__22254_22501;
var G__22534 = chunk__22255_22502;
var G__22535 = count__22256_22503;
var G__22536 = (i__22257_22504 + (1));
seq__22254_22501 = G__22533;
chunk__22255_22502 = G__22534;
count__22256_22503 = G__22535;
i__22257_22504 = G__22536;
continue;
} else {
var temp__4657__auto___22538__$1 = cljs.core.seq.call(null,seq__22254_22501);
if(temp__4657__auto___22538__$1){
var seq__22254_22539__$1 = temp__4657__auto___22538__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22254_22539__$1)){
var c__21266__auto___22541 = cljs.core.chunk_first.call(null,seq__22254_22539__$1);
var G__22542 = cljs.core.chunk_rest.call(null,seq__22254_22539__$1);
var G__22543 = c__21266__auto___22541;
var G__22544 = cljs.core.count.call(null,c__21266__auto___22541);
var G__22545 = (0);
seq__22254_22501 = G__22542;
chunk__22255_22502 = G__22543;
count__22256_22503 = G__22544;
i__22257_22504 = G__22545;
continue;
} else {
var vec__22271_22546 = cljs.core.first.call(null,seq__22254_22539__$1);
var line_22547 = cljs.core.nth.call(null,vec__22271_22546,(0),null);
var cols_22548 = cljs.core.nth.call(null,vec__22271_22546,(1),null);
var seq__22274_22549 = cljs.core.seq.call(null,cols_22548);
var chunk__22275_22550 = null;
var count__22276_22551 = (0);
var i__22277_22552 = (0);
while(true){
if((i__22277_22552 < count__22276_22551)){
var vec__22278_22553 = cljs.core._nth.call(null,chunk__22275_22550,i__22277_22552);
var col_22554 = cljs.core.nth.call(null,vec__22278_22553,(0),null);
var infos_22555 = cljs.core.nth.call(null,vec__22278_22553,(1),null);
encode_cols.call(null,infos_22555,source_idx_22497,line_22547,col_22554);

var G__22556 = seq__22274_22549;
var G__22557 = chunk__22275_22550;
var G__22558 = count__22276_22551;
var G__22559 = (i__22277_22552 + (1));
seq__22274_22549 = G__22556;
chunk__22275_22550 = G__22557;
count__22276_22551 = G__22558;
i__22277_22552 = G__22559;
continue;
} else {
var temp__4657__auto___22560__$2 = cljs.core.seq.call(null,seq__22274_22549);
if(temp__4657__auto___22560__$2){
var seq__22274_22561__$1 = temp__4657__auto___22560__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22274_22561__$1)){
var c__21266__auto___22562 = cljs.core.chunk_first.call(null,seq__22274_22561__$1);
var G__22563 = cljs.core.chunk_rest.call(null,seq__22274_22561__$1);
var G__22564 = c__21266__auto___22562;
var G__22565 = cljs.core.count.call(null,c__21266__auto___22562);
var G__22566 = (0);
seq__22274_22549 = G__22563;
chunk__22275_22550 = G__22564;
count__22276_22551 = G__22565;
i__22277_22552 = G__22566;
continue;
} else {
var vec__22284_22567 = cljs.core.first.call(null,seq__22274_22561__$1);
var col_22568 = cljs.core.nth.call(null,vec__22284_22567,(0),null);
var infos_22569 = cljs.core.nth.call(null,vec__22284_22567,(1),null);
encode_cols.call(null,infos_22569,source_idx_22497,line_22547,col_22568);

var G__22570 = cljs.core.next.call(null,seq__22274_22561__$1);
var G__22571 = null;
var G__22572 = (0);
var G__22573 = (0);
seq__22274_22549 = G__22570;
chunk__22275_22550 = G__22571;
count__22276_22551 = G__22572;
i__22277_22552 = G__22573;
continue;
}
} else {
}
}
break;
}

var G__22574 = cljs.core.next.call(null,seq__22254_22539__$1);
var G__22575 = null;
var G__22576 = (0);
var G__22577 = (0);
seq__22254_22501 = G__22574;
chunk__22255_22502 = G__22575;
count__22256_22503 = G__22576;
i__22257_22504 = G__22577;
continue;
}
} else {
}
}
break;
}

var G__22578 = cljs.core.next.call(null,seq__22205_22490__$1);
var G__22579 = null;
var G__22580 = (0);
var G__22581 = (0);
seq__22205_22320 = G__22578;
chunk__22206_22321 = G__22579;
count__22207_22322 = G__22580;
i__22208_22323 = G__22581;
continue;
}
} else {
}
}
break;
}

var source_map_file_contents = (function (){var G__22287 = ({"version": (3), "file": new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(opts), "sources": (function (){var paths = cljs.core.keys.call(null,m);
var f = cljs.core.comp.call(null,((new cljs.core.Keyword(null,"source-map-timestamp","source-map-timestamp",1973015633).cljs$core$IFn$_invoke$arity$1(opts) === true)?((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__22103_SHARP_){
return [cljs.core.str(p1__22103_SHARP_),cljs.core.str("?rel="),cljs.core.str((new Date()).valueOf())].join('');
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
:cljs.core.identity),((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__22104_SHARP_){
return cljs.core.last.call(null,clojure.string.split.call(null,p1__22104_SHARP_,/\//));
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
);
return cljs.core.into_array.call(null,cljs.core.map.call(null,f,paths));
})(), "lineCount": new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(opts), "mappings": clojure.string.join.call(null,";",cljs.core.map.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__22105_SHARP_){
return clojure.string.join.call(null,",",p1__22105_SHARP_);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,cljs.source_map.lines__GT_segs.call(null,cljs.core.concat.call(null,preamble_lines,cljs.core.deref.call(null,lines))))), "names": cljs.core.into_array.call(null,cljs.core.map.call(null,clojure.set.map_invert.call(null,cljs.core.deref.call(null,names__GT_idx)),cljs.core.range.call(null,cljs.core.count.call(null,cljs.core.deref.call(null,names__GT_idx)))))});
if(cljs.core.truth_(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts))){
var G__22288 = G__22287;
goog.object.set(G__22288,"sourcesContent",cljs.core.into_array.call(null,new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts)));

return G__22288;
} else {
return G__22287;
}
})();
return JSON.stringify(source_map_file_contents);
});
/**
 * Merge an internal source map representation of a single
 * ClojureScript file mapping original to generated with a
 * second source map mapping original JS to generated JS.
 * The is to support source maps that work through multiple
 * compilation steps like Google Closure optimization passes.
 */
cljs.source_map.merge_source_maps = (function cljs$source_map$merge_source_maps(cljs_map,js_map){
var line_map_seq = cljs.core.seq.call(null,cljs_map);
var new_lines = cljs.core.sorted_map.call(null);
while(true){
if(line_map_seq){
var vec__22596 = cljs.core.first.call(null,line_map_seq);
var line = cljs.core.nth.call(null,vec__22596,(0),null);
var col_map = cljs.core.nth.call(null,vec__22596,(1),null);
var new_cols = (function (){var col_map_seq = cljs.core.seq.call(null,col_map);
var new_cols = cljs.core.sorted_map.call(null);
while(true){
if(col_map_seq){
var vec__22599 = cljs.core.first.call(null,col_map_seq);
var col = cljs.core.nth.call(null,vec__22599,(0),null);
var infos = cljs.core.nth.call(null,vec__22599,(1),null);
var G__22610 = cljs.core.next.call(null,col_map_seq);
var G__22611 = cljs.core.assoc.call(null,new_cols,col,cljs.core.reduce.call(null,((function (col_map_seq,new_cols,line_map_seq,new_lines,vec__22599,col,infos,vec__22596,line,col_map){
return (function (v,p__22602){
var map__22603 = p__22602;
var map__22603__$1 = ((((!((map__22603 == null)))?((((map__22603.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22603.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22603):map__22603);
var gline = cljs.core.get.call(null,map__22603__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol = cljs.core.get.call(null,map__22603__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
return cljs.core.into.call(null,v,cljs.core.get_in.call(null,js_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline,gcol], null)));
});})(col_map_seq,new_cols,line_map_seq,new_lines,vec__22599,col,infos,vec__22596,line,col_map))
,cljs.core.PersistentVector.EMPTY,infos));
col_map_seq = G__22610;
new_cols = G__22611;
continue;
} else {
return new_cols;
}
break;
}
})();
var G__22617 = cljs.core.next.call(null,line_map_seq);
var G__22618 = cljs.core.assoc.call(null,new_lines,line,new_cols);
line_map_seq = G__22617;
new_lines = G__22618;
continue;
} else {
return new_lines;
}
break;
}
});
/**
 * Given a ClojureScript to JavaScript source map, invert it. Useful when
 * mapping JavaScript stack traces when environment support is unavailable.
 */
cljs.source_map.invert_reverse_map = (function cljs$source_map$invert_reverse_map(reverse_map){
var inverted = cljs.core.atom.call(null,cljs.core.sorted_map.call(null));
var seq__22693_22760 = cljs.core.seq.call(null,reverse_map);
var chunk__22694_22761 = null;
var count__22695_22762 = (0);
var i__22696_22763 = (0);
while(true){
if((i__22696_22763 < count__22695_22762)){
var vec__22697_22764 = cljs.core._nth.call(null,chunk__22694_22761,i__22696_22763);
var line_22765 = cljs.core.nth.call(null,vec__22697_22764,(0),null);
var columns_22766 = cljs.core.nth.call(null,vec__22697_22764,(1),null);
var seq__22700_22769 = cljs.core.seq.call(null,columns_22766);
var chunk__22701_22770 = null;
var count__22702_22771 = (0);
var i__22703_22772 = (0);
while(true){
if((i__22703_22772 < count__22702_22771)){
var vec__22704_22777 = cljs.core._nth.call(null,chunk__22701_22770,i__22703_22772);
var column_22778 = cljs.core.nth.call(null,vec__22704_22777,(0),null);
var column_info_22779 = cljs.core.nth.call(null,vec__22704_22777,(1),null);
var seq__22707_22780 = cljs.core.seq.call(null,column_info_22779);
var chunk__22708_22781 = null;
var count__22709_22782 = (0);
var i__22710_22783 = (0);
while(true){
if((i__22710_22783 < count__22709_22782)){
var map__22711_22785 = cljs.core._nth.call(null,chunk__22708_22781,i__22710_22783);
var map__22711_22786__$1 = ((((!((map__22711_22785 == null)))?((((map__22711_22785.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22711_22785.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22711_22785):map__22711_22785);
var gline_22787 = cljs.core.get.call(null,map__22711_22786__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_22788 = cljs.core.get.call(null,map__22711_22786__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_22789 = cljs.core.get.call(null,map__22711_22786__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_22787], null),cljs.core.fnil.call(null,((function (seq__22707_22780,chunk__22708_22781,count__22709_22782,i__22710_22783,seq__22700_22769,chunk__22701_22770,count__22702_22771,i__22703_22772,seq__22693_22760,chunk__22694_22761,count__22695_22762,i__22696_22763,map__22711_22785,map__22711_22786__$1,gline_22787,gcol_22788,name_22789,vec__22704_22777,column_22778,column_info_22779,vec__22697_22764,line_22765,columns_22766,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_22788], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_22765,new cljs.core.Keyword(null,"col","col",-1959363084),column_22778,new cljs.core.Keyword(null,"name","name",1843675177),name_22789], null));
});})(seq__22707_22780,chunk__22708_22781,count__22709_22782,i__22710_22783,seq__22700_22769,chunk__22701_22770,count__22702_22771,i__22703_22772,seq__22693_22760,chunk__22694_22761,count__22695_22762,i__22696_22763,map__22711_22785,map__22711_22786__$1,gline_22787,gcol_22788,name_22789,vec__22704_22777,column_22778,column_info_22779,vec__22697_22764,line_22765,columns_22766,inverted))
,cljs.core.sorted_map.call(null)));

var G__22801 = seq__22707_22780;
var G__22802 = chunk__22708_22781;
var G__22803 = count__22709_22782;
var G__22804 = (i__22710_22783 + (1));
seq__22707_22780 = G__22801;
chunk__22708_22781 = G__22802;
count__22709_22782 = G__22803;
i__22710_22783 = G__22804;
continue;
} else {
var temp__4657__auto___22805 = cljs.core.seq.call(null,seq__22707_22780);
if(temp__4657__auto___22805){
var seq__22707_22808__$1 = temp__4657__auto___22805;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22707_22808__$1)){
var c__21266__auto___22809 = cljs.core.chunk_first.call(null,seq__22707_22808__$1);
var G__22811 = cljs.core.chunk_rest.call(null,seq__22707_22808__$1);
var G__22812 = c__21266__auto___22809;
var G__22813 = cljs.core.count.call(null,c__21266__auto___22809);
var G__22814 = (0);
seq__22707_22780 = G__22811;
chunk__22708_22781 = G__22812;
count__22709_22782 = G__22813;
i__22710_22783 = G__22814;
continue;
} else {
var map__22713_22815 = cljs.core.first.call(null,seq__22707_22808__$1);
var map__22713_22816__$1 = ((((!((map__22713_22815 == null)))?((((map__22713_22815.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22713_22815.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22713_22815):map__22713_22815);
var gline_22817 = cljs.core.get.call(null,map__22713_22816__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_22818 = cljs.core.get.call(null,map__22713_22816__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_22819 = cljs.core.get.call(null,map__22713_22816__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_22817], null),cljs.core.fnil.call(null,((function (seq__22707_22780,chunk__22708_22781,count__22709_22782,i__22710_22783,seq__22700_22769,chunk__22701_22770,count__22702_22771,i__22703_22772,seq__22693_22760,chunk__22694_22761,count__22695_22762,i__22696_22763,map__22713_22815,map__22713_22816__$1,gline_22817,gcol_22818,name_22819,seq__22707_22808__$1,temp__4657__auto___22805,vec__22704_22777,column_22778,column_info_22779,vec__22697_22764,line_22765,columns_22766,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_22818], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_22765,new cljs.core.Keyword(null,"col","col",-1959363084),column_22778,new cljs.core.Keyword(null,"name","name",1843675177),name_22819], null));
});})(seq__22707_22780,chunk__22708_22781,count__22709_22782,i__22710_22783,seq__22700_22769,chunk__22701_22770,count__22702_22771,i__22703_22772,seq__22693_22760,chunk__22694_22761,count__22695_22762,i__22696_22763,map__22713_22815,map__22713_22816__$1,gline_22817,gcol_22818,name_22819,seq__22707_22808__$1,temp__4657__auto___22805,vec__22704_22777,column_22778,column_info_22779,vec__22697_22764,line_22765,columns_22766,inverted))
,cljs.core.sorted_map.call(null)));

var G__22821 = cljs.core.next.call(null,seq__22707_22808__$1);
var G__22822 = null;
var G__22823 = (0);
var G__22824 = (0);
seq__22707_22780 = G__22821;
chunk__22708_22781 = G__22822;
count__22709_22782 = G__22823;
i__22710_22783 = G__22824;
continue;
}
} else {
}
}
break;
}

var G__22825 = seq__22700_22769;
var G__22826 = chunk__22701_22770;
var G__22827 = count__22702_22771;
var G__22828 = (i__22703_22772 + (1));
seq__22700_22769 = G__22825;
chunk__22701_22770 = G__22826;
count__22702_22771 = G__22827;
i__22703_22772 = G__22828;
continue;
} else {
var temp__4657__auto___22829 = cljs.core.seq.call(null,seq__22700_22769);
if(temp__4657__auto___22829){
var seq__22700_22830__$1 = temp__4657__auto___22829;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22700_22830__$1)){
var c__21266__auto___22833 = cljs.core.chunk_first.call(null,seq__22700_22830__$1);
var G__22834 = cljs.core.chunk_rest.call(null,seq__22700_22830__$1);
var G__22835 = c__21266__auto___22833;
var G__22836 = cljs.core.count.call(null,c__21266__auto___22833);
var G__22837 = (0);
seq__22700_22769 = G__22834;
chunk__22701_22770 = G__22835;
count__22702_22771 = G__22836;
i__22703_22772 = G__22837;
continue;
} else {
var vec__22718_22839 = cljs.core.first.call(null,seq__22700_22830__$1);
var column_22840 = cljs.core.nth.call(null,vec__22718_22839,(0),null);
var column_info_22841 = cljs.core.nth.call(null,vec__22718_22839,(1),null);
var seq__22721_22844 = cljs.core.seq.call(null,column_info_22841);
var chunk__22722_22845 = null;
var count__22723_22846 = (0);
var i__22724_22847 = (0);
while(true){
if((i__22724_22847 < count__22723_22846)){
var map__22725_22848 = cljs.core._nth.call(null,chunk__22722_22845,i__22724_22847);
var map__22725_22849__$1 = ((((!((map__22725_22848 == null)))?((((map__22725_22848.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22725_22848.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22725_22848):map__22725_22848);
var gline_22850 = cljs.core.get.call(null,map__22725_22849__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_22851 = cljs.core.get.call(null,map__22725_22849__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_22852 = cljs.core.get.call(null,map__22725_22849__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_22850], null),cljs.core.fnil.call(null,((function (seq__22721_22844,chunk__22722_22845,count__22723_22846,i__22724_22847,seq__22700_22769,chunk__22701_22770,count__22702_22771,i__22703_22772,seq__22693_22760,chunk__22694_22761,count__22695_22762,i__22696_22763,map__22725_22848,map__22725_22849__$1,gline_22850,gcol_22851,name_22852,vec__22718_22839,column_22840,column_info_22841,seq__22700_22830__$1,temp__4657__auto___22829,vec__22697_22764,line_22765,columns_22766,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_22851], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_22765,new cljs.core.Keyword(null,"col","col",-1959363084),column_22840,new cljs.core.Keyword(null,"name","name",1843675177),name_22852], null));
});})(seq__22721_22844,chunk__22722_22845,count__22723_22846,i__22724_22847,seq__22700_22769,chunk__22701_22770,count__22702_22771,i__22703_22772,seq__22693_22760,chunk__22694_22761,count__22695_22762,i__22696_22763,map__22725_22848,map__22725_22849__$1,gline_22850,gcol_22851,name_22852,vec__22718_22839,column_22840,column_info_22841,seq__22700_22830__$1,temp__4657__auto___22829,vec__22697_22764,line_22765,columns_22766,inverted))
,cljs.core.sorted_map.call(null)));

var G__22855 = seq__22721_22844;
var G__22856 = chunk__22722_22845;
var G__22857 = count__22723_22846;
var G__22858 = (i__22724_22847 + (1));
seq__22721_22844 = G__22855;
chunk__22722_22845 = G__22856;
count__22723_22846 = G__22857;
i__22724_22847 = G__22858;
continue;
} else {
var temp__4657__auto___22862__$1 = cljs.core.seq.call(null,seq__22721_22844);
if(temp__4657__auto___22862__$1){
var seq__22721_22867__$1 = temp__4657__auto___22862__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22721_22867__$1)){
var c__21266__auto___22868 = cljs.core.chunk_first.call(null,seq__22721_22867__$1);
var G__22869 = cljs.core.chunk_rest.call(null,seq__22721_22867__$1);
var G__22870 = c__21266__auto___22868;
var G__22871 = cljs.core.count.call(null,c__21266__auto___22868);
var G__22872 = (0);
seq__22721_22844 = G__22869;
chunk__22722_22845 = G__22870;
count__22723_22846 = G__22871;
i__22724_22847 = G__22872;
continue;
} else {
var map__22727_22877 = cljs.core.first.call(null,seq__22721_22867__$1);
var map__22727_22878__$1 = ((((!((map__22727_22877 == null)))?((((map__22727_22877.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22727_22877.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22727_22877):map__22727_22877);
var gline_22879 = cljs.core.get.call(null,map__22727_22878__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_22880 = cljs.core.get.call(null,map__22727_22878__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_22881 = cljs.core.get.call(null,map__22727_22878__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_22879], null),cljs.core.fnil.call(null,((function (seq__22721_22844,chunk__22722_22845,count__22723_22846,i__22724_22847,seq__22700_22769,chunk__22701_22770,count__22702_22771,i__22703_22772,seq__22693_22760,chunk__22694_22761,count__22695_22762,i__22696_22763,map__22727_22877,map__22727_22878__$1,gline_22879,gcol_22880,name_22881,seq__22721_22867__$1,temp__4657__auto___22862__$1,vec__22718_22839,column_22840,column_info_22841,seq__22700_22830__$1,temp__4657__auto___22829,vec__22697_22764,line_22765,columns_22766,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_22880], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_22765,new cljs.core.Keyword(null,"col","col",-1959363084),column_22840,new cljs.core.Keyword(null,"name","name",1843675177),name_22881], null));
});})(seq__22721_22844,chunk__22722_22845,count__22723_22846,i__22724_22847,seq__22700_22769,chunk__22701_22770,count__22702_22771,i__22703_22772,seq__22693_22760,chunk__22694_22761,count__22695_22762,i__22696_22763,map__22727_22877,map__22727_22878__$1,gline_22879,gcol_22880,name_22881,seq__22721_22867__$1,temp__4657__auto___22862__$1,vec__22718_22839,column_22840,column_info_22841,seq__22700_22830__$1,temp__4657__auto___22829,vec__22697_22764,line_22765,columns_22766,inverted))
,cljs.core.sorted_map.call(null)));

var G__22893 = cljs.core.next.call(null,seq__22721_22867__$1);
var G__22894 = null;
var G__22895 = (0);
var G__22896 = (0);
seq__22721_22844 = G__22893;
chunk__22722_22845 = G__22894;
count__22723_22846 = G__22895;
i__22724_22847 = G__22896;
continue;
}
} else {
}
}
break;
}

var G__22897 = cljs.core.next.call(null,seq__22700_22830__$1);
var G__22898 = null;
var G__22899 = (0);
var G__22900 = (0);
seq__22700_22769 = G__22897;
chunk__22701_22770 = G__22898;
count__22702_22771 = G__22899;
i__22703_22772 = G__22900;
continue;
}
} else {
}
}
break;
}

var G__22901 = seq__22693_22760;
var G__22902 = chunk__22694_22761;
var G__22903 = count__22695_22762;
var G__22904 = (i__22696_22763 + (1));
seq__22693_22760 = G__22901;
chunk__22694_22761 = G__22902;
count__22695_22762 = G__22903;
i__22696_22763 = G__22904;
continue;
} else {
var temp__4657__auto___22905 = cljs.core.seq.call(null,seq__22693_22760);
if(temp__4657__auto___22905){
var seq__22693_22906__$1 = temp__4657__auto___22905;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22693_22906__$1)){
var c__21266__auto___22907 = cljs.core.chunk_first.call(null,seq__22693_22906__$1);
var G__22908 = cljs.core.chunk_rest.call(null,seq__22693_22906__$1);
var G__22909 = c__21266__auto___22907;
var G__22910 = cljs.core.count.call(null,c__21266__auto___22907);
var G__22911 = (0);
seq__22693_22760 = G__22908;
chunk__22694_22761 = G__22909;
count__22695_22762 = G__22910;
i__22696_22763 = G__22911;
continue;
} else {
var vec__22729_22912 = cljs.core.first.call(null,seq__22693_22906__$1);
var line_22913 = cljs.core.nth.call(null,vec__22729_22912,(0),null);
var columns_22914 = cljs.core.nth.call(null,vec__22729_22912,(1),null);
var seq__22732_22915 = cljs.core.seq.call(null,columns_22914);
var chunk__22733_22916 = null;
var count__22734_22917 = (0);
var i__22735_22918 = (0);
while(true){
if((i__22735_22918 < count__22734_22917)){
var vec__22736_22919 = cljs.core._nth.call(null,chunk__22733_22916,i__22735_22918);
var column_22920 = cljs.core.nth.call(null,vec__22736_22919,(0),null);
var column_info_22921 = cljs.core.nth.call(null,vec__22736_22919,(1),null);
var seq__22739_22922 = cljs.core.seq.call(null,column_info_22921);
var chunk__22740_22923 = null;
var count__22741_22924 = (0);
var i__22742_22925 = (0);
while(true){
if((i__22742_22925 < count__22741_22924)){
var map__22743_22928 = cljs.core._nth.call(null,chunk__22740_22923,i__22742_22925);
var map__22743_22929__$1 = ((((!((map__22743_22928 == null)))?((((map__22743_22928.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22743_22928.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22743_22928):map__22743_22928);
var gline_22930 = cljs.core.get.call(null,map__22743_22929__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_22931 = cljs.core.get.call(null,map__22743_22929__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_22932 = cljs.core.get.call(null,map__22743_22929__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_22930], null),cljs.core.fnil.call(null,((function (seq__22739_22922,chunk__22740_22923,count__22741_22924,i__22742_22925,seq__22732_22915,chunk__22733_22916,count__22734_22917,i__22735_22918,seq__22693_22760,chunk__22694_22761,count__22695_22762,i__22696_22763,map__22743_22928,map__22743_22929__$1,gline_22930,gcol_22931,name_22932,vec__22736_22919,column_22920,column_info_22921,vec__22729_22912,line_22913,columns_22914,seq__22693_22906__$1,temp__4657__auto___22905,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_22931], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_22913,new cljs.core.Keyword(null,"col","col",-1959363084),column_22920,new cljs.core.Keyword(null,"name","name",1843675177),name_22932], null));
});})(seq__22739_22922,chunk__22740_22923,count__22741_22924,i__22742_22925,seq__22732_22915,chunk__22733_22916,count__22734_22917,i__22735_22918,seq__22693_22760,chunk__22694_22761,count__22695_22762,i__22696_22763,map__22743_22928,map__22743_22929__$1,gline_22930,gcol_22931,name_22932,vec__22736_22919,column_22920,column_info_22921,vec__22729_22912,line_22913,columns_22914,seq__22693_22906__$1,temp__4657__auto___22905,inverted))
,cljs.core.sorted_map.call(null)));

var G__22943 = seq__22739_22922;
var G__22944 = chunk__22740_22923;
var G__22945 = count__22741_22924;
var G__22946 = (i__22742_22925 + (1));
seq__22739_22922 = G__22943;
chunk__22740_22923 = G__22944;
count__22741_22924 = G__22945;
i__22742_22925 = G__22946;
continue;
} else {
var temp__4657__auto___22950__$1 = cljs.core.seq.call(null,seq__22739_22922);
if(temp__4657__auto___22950__$1){
var seq__22739_22951__$1 = temp__4657__auto___22950__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22739_22951__$1)){
var c__21266__auto___22952 = cljs.core.chunk_first.call(null,seq__22739_22951__$1);
var G__22956 = cljs.core.chunk_rest.call(null,seq__22739_22951__$1);
var G__22957 = c__21266__auto___22952;
var G__22958 = cljs.core.count.call(null,c__21266__auto___22952);
var G__22959 = (0);
seq__22739_22922 = G__22956;
chunk__22740_22923 = G__22957;
count__22741_22924 = G__22958;
i__22742_22925 = G__22959;
continue;
} else {
var map__22745_22962 = cljs.core.first.call(null,seq__22739_22951__$1);
var map__22745_22963__$1 = ((((!((map__22745_22962 == null)))?((((map__22745_22962.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22745_22962.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22745_22962):map__22745_22962);
var gline_22964 = cljs.core.get.call(null,map__22745_22963__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_22965 = cljs.core.get.call(null,map__22745_22963__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_22966 = cljs.core.get.call(null,map__22745_22963__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_22964], null),cljs.core.fnil.call(null,((function (seq__22739_22922,chunk__22740_22923,count__22741_22924,i__22742_22925,seq__22732_22915,chunk__22733_22916,count__22734_22917,i__22735_22918,seq__22693_22760,chunk__22694_22761,count__22695_22762,i__22696_22763,map__22745_22962,map__22745_22963__$1,gline_22964,gcol_22965,name_22966,seq__22739_22951__$1,temp__4657__auto___22950__$1,vec__22736_22919,column_22920,column_info_22921,vec__22729_22912,line_22913,columns_22914,seq__22693_22906__$1,temp__4657__auto___22905,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_22965], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_22913,new cljs.core.Keyword(null,"col","col",-1959363084),column_22920,new cljs.core.Keyword(null,"name","name",1843675177),name_22966], null));
});})(seq__22739_22922,chunk__22740_22923,count__22741_22924,i__22742_22925,seq__22732_22915,chunk__22733_22916,count__22734_22917,i__22735_22918,seq__22693_22760,chunk__22694_22761,count__22695_22762,i__22696_22763,map__22745_22962,map__22745_22963__$1,gline_22964,gcol_22965,name_22966,seq__22739_22951__$1,temp__4657__auto___22950__$1,vec__22736_22919,column_22920,column_info_22921,vec__22729_22912,line_22913,columns_22914,seq__22693_22906__$1,temp__4657__auto___22905,inverted))
,cljs.core.sorted_map.call(null)));

var G__22993 = cljs.core.next.call(null,seq__22739_22951__$1);
var G__22994 = null;
var G__22995 = (0);
var G__22996 = (0);
seq__22739_22922 = G__22993;
chunk__22740_22923 = G__22994;
count__22741_22924 = G__22995;
i__22742_22925 = G__22996;
continue;
}
} else {
}
}
break;
}

var G__23001 = seq__22732_22915;
var G__23002 = chunk__22733_22916;
var G__23003 = count__22734_22917;
var G__23004 = (i__22735_22918 + (1));
seq__22732_22915 = G__23001;
chunk__22733_22916 = G__23002;
count__22734_22917 = G__23003;
i__22735_22918 = G__23004;
continue;
} else {
var temp__4657__auto___23008__$1 = cljs.core.seq.call(null,seq__22732_22915);
if(temp__4657__auto___23008__$1){
var seq__22732_23015__$1 = temp__4657__auto___23008__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22732_23015__$1)){
var c__21266__auto___23017 = cljs.core.chunk_first.call(null,seq__22732_23015__$1);
var G__23019 = cljs.core.chunk_rest.call(null,seq__22732_23015__$1);
var G__23020 = c__21266__auto___23017;
var G__23021 = cljs.core.count.call(null,c__21266__auto___23017);
var G__23022 = (0);
seq__22732_22915 = G__23019;
chunk__22733_22916 = G__23020;
count__22734_22917 = G__23021;
i__22735_22918 = G__23022;
continue;
} else {
var vec__22747_23028 = cljs.core.first.call(null,seq__22732_23015__$1);
var column_23029 = cljs.core.nth.call(null,vec__22747_23028,(0),null);
var column_info_23030 = cljs.core.nth.call(null,vec__22747_23028,(1),null);
var seq__22750_23035 = cljs.core.seq.call(null,column_info_23030);
var chunk__22751_23036 = null;
var count__22752_23037 = (0);
var i__22753_23038 = (0);
while(true){
if((i__22753_23038 < count__22752_23037)){
var map__22754_23042 = cljs.core._nth.call(null,chunk__22751_23036,i__22753_23038);
var map__22754_23043__$1 = ((((!((map__22754_23042 == null)))?((((map__22754_23042.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22754_23042.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22754_23042):map__22754_23042);
var gline_23044 = cljs.core.get.call(null,map__22754_23043__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_23045 = cljs.core.get.call(null,map__22754_23043__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_23046 = cljs.core.get.call(null,map__22754_23043__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_23044], null),cljs.core.fnil.call(null,((function (seq__22750_23035,chunk__22751_23036,count__22752_23037,i__22753_23038,seq__22732_22915,chunk__22733_22916,count__22734_22917,i__22735_22918,seq__22693_22760,chunk__22694_22761,count__22695_22762,i__22696_22763,map__22754_23042,map__22754_23043__$1,gline_23044,gcol_23045,name_23046,vec__22747_23028,column_23029,column_info_23030,seq__22732_23015__$1,temp__4657__auto___23008__$1,vec__22729_22912,line_22913,columns_22914,seq__22693_22906__$1,temp__4657__auto___22905,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_23045], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_22913,new cljs.core.Keyword(null,"col","col",-1959363084),column_23029,new cljs.core.Keyword(null,"name","name",1843675177),name_23046], null));
});})(seq__22750_23035,chunk__22751_23036,count__22752_23037,i__22753_23038,seq__22732_22915,chunk__22733_22916,count__22734_22917,i__22735_22918,seq__22693_22760,chunk__22694_22761,count__22695_22762,i__22696_22763,map__22754_23042,map__22754_23043__$1,gline_23044,gcol_23045,name_23046,vec__22747_23028,column_23029,column_info_23030,seq__22732_23015__$1,temp__4657__auto___23008__$1,vec__22729_22912,line_22913,columns_22914,seq__22693_22906__$1,temp__4657__auto___22905,inverted))
,cljs.core.sorted_map.call(null)));

var G__23084 = seq__22750_23035;
var G__23085 = chunk__22751_23036;
var G__23086 = count__22752_23037;
var G__23087 = (i__22753_23038 + (1));
seq__22750_23035 = G__23084;
chunk__22751_23036 = G__23085;
count__22752_23037 = G__23086;
i__22753_23038 = G__23087;
continue;
} else {
var temp__4657__auto___23092__$2 = cljs.core.seq.call(null,seq__22750_23035);
if(temp__4657__auto___23092__$2){
var seq__22750_23093__$1 = temp__4657__auto___23092__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22750_23093__$1)){
var c__21266__auto___23094 = cljs.core.chunk_first.call(null,seq__22750_23093__$1);
var G__23095 = cljs.core.chunk_rest.call(null,seq__22750_23093__$1);
var G__23096 = c__21266__auto___23094;
var G__23097 = cljs.core.count.call(null,c__21266__auto___23094);
var G__23098 = (0);
seq__22750_23035 = G__23095;
chunk__22751_23036 = G__23096;
count__22752_23037 = G__23097;
i__22753_23038 = G__23098;
continue;
} else {
var map__22757_23116 = cljs.core.first.call(null,seq__22750_23093__$1);
var map__22757_23117__$1 = ((((!((map__22757_23116 == null)))?((((map__22757_23116.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22757_23116.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22757_23116):map__22757_23116);
var gline_23118 = cljs.core.get.call(null,map__22757_23117__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_23119 = cljs.core.get.call(null,map__22757_23117__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_23120 = cljs.core.get.call(null,map__22757_23117__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_23118], null),cljs.core.fnil.call(null,((function (seq__22750_23035,chunk__22751_23036,count__22752_23037,i__22753_23038,seq__22732_22915,chunk__22733_22916,count__22734_22917,i__22735_22918,seq__22693_22760,chunk__22694_22761,count__22695_22762,i__22696_22763,map__22757_23116,map__22757_23117__$1,gline_23118,gcol_23119,name_23120,seq__22750_23093__$1,temp__4657__auto___23092__$2,vec__22747_23028,column_23029,column_info_23030,seq__22732_23015__$1,temp__4657__auto___23008__$1,vec__22729_22912,line_22913,columns_22914,seq__22693_22906__$1,temp__4657__auto___22905,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_23119], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_22913,new cljs.core.Keyword(null,"col","col",-1959363084),column_23029,new cljs.core.Keyword(null,"name","name",1843675177),name_23120], null));
});})(seq__22750_23035,chunk__22751_23036,count__22752_23037,i__22753_23038,seq__22732_22915,chunk__22733_22916,count__22734_22917,i__22735_22918,seq__22693_22760,chunk__22694_22761,count__22695_22762,i__22696_22763,map__22757_23116,map__22757_23117__$1,gline_23118,gcol_23119,name_23120,seq__22750_23093__$1,temp__4657__auto___23092__$2,vec__22747_23028,column_23029,column_info_23030,seq__22732_23015__$1,temp__4657__auto___23008__$1,vec__22729_22912,line_22913,columns_22914,seq__22693_22906__$1,temp__4657__auto___22905,inverted))
,cljs.core.sorted_map.call(null)));

var G__23155 = cljs.core.next.call(null,seq__22750_23093__$1);
var G__23156 = null;
var G__23157 = (0);
var G__23158 = (0);
seq__22750_23035 = G__23155;
chunk__22751_23036 = G__23156;
count__22752_23037 = G__23157;
i__22753_23038 = G__23158;
continue;
}
} else {
}
}
break;
}

var G__23165 = cljs.core.next.call(null,seq__22732_23015__$1);
var G__23166 = null;
var G__23167 = (0);
var G__23168 = (0);
seq__22732_22915 = G__23165;
chunk__22733_22916 = G__23166;
count__22734_22917 = G__23167;
i__22735_22918 = G__23168;
continue;
}
} else {
}
}
break;
}

var G__23173 = cljs.core.next.call(null,seq__22693_22906__$1);
var G__23174 = null;
var G__23175 = (0);
var G__23176 = (0);
seq__22693_22760 = G__23173;
chunk__22694_22761 = G__23174;
count__22695_22762 = G__23175;
i__22696_22763 = G__23176;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref.call(null,inverted);
});

//# sourceMappingURL=source_map.js.map?rel=1605080716922