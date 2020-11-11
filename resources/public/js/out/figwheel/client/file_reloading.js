// Compiled by ClojureScript 1.9.229 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__20455__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__20455__auto__){
return or__20455__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__20455__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__20455__auto__)){
return or__20455__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__31650_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__31650_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__31719 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__31720 = null;
var count__31721 = (0);
var i__31722 = (0);
while(true){
if((i__31722 < count__31721)){
var n = cljs.core._nth.call(null,chunk__31720,i__31722);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__31747 = seq__31719;
var G__31748 = chunk__31720;
var G__31749 = count__31721;
var G__31750 = (i__31722 + (1));
seq__31719 = G__31747;
chunk__31720 = G__31748;
count__31721 = G__31749;
i__31722 = G__31750;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__31719);
if(temp__4657__auto__){
var seq__31719__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31719__$1)){
var c__21266__auto__ = cljs.core.chunk_first.call(null,seq__31719__$1);
var G__31757 = cljs.core.chunk_rest.call(null,seq__31719__$1);
var G__31758 = c__21266__auto__;
var G__31759 = cljs.core.count.call(null,c__21266__auto__);
var G__31760 = (0);
seq__31719 = G__31757;
chunk__31720 = G__31758;
count__31721 = G__31759;
i__31722 = G__31760;
continue;
} else {
var n = cljs.core.first.call(null,seq__31719__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__31768 = cljs.core.next.call(null,seq__31719__$1);
var G__31769 = null;
var G__31770 = (0);
var G__31771 = (0);
seq__31719 = G__31768;
chunk__31720 = G__31769;
count__31721 = G__31770;
i__31722 = G__31771;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__31909_31926 = cljs.core.seq.call(null,deps);
var chunk__31910_31927 = null;
var count__31911_31928 = (0);
var i__31912_31929 = (0);
while(true){
if((i__31912_31929 < count__31911_31928)){
var dep_31931 = cljs.core._nth.call(null,chunk__31910_31927,i__31912_31929);
topo_sort_helper_STAR_.call(null,dep_31931,(depth + (1)),state);

var G__31933 = seq__31909_31926;
var G__31934 = chunk__31910_31927;
var G__31935 = count__31911_31928;
var G__31936 = (i__31912_31929 + (1));
seq__31909_31926 = G__31933;
chunk__31910_31927 = G__31934;
count__31911_31928 = G__31935;
i__31912_31929 = G__31936;
continue;
} else {
var temp__4657__auto___31938 = cljs.core.seq.call(null,seq__31909_31926);
if(temp__4657__auto___31938){
var seq__31909_31939__$1 = temp__4657__auto___31938;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31909_31939__$1)){
var c__21266__auto___31940 = cljs.core.chunk_first.call(null,seq__31909_31939__$1);
var G__31942 = cljs.core.chunk_rest.call(null,seq__31909_31939__$1);
var G__31943 = c__21266__auto___31940;
var G__31944 = cljs.core.count.call(null,c__21266__auto___31940);
var G__31945 = (0);
seq__31909_31926 = G__31942;
chunk__31910_31927 = G__31943;
count__31911_31928 = G__31944;
i__31912_31929 = G__31945;
continue;
} else {
var dep_31946 = cljs.core.first.call(null,seq__31909_31939__$1);
topo_sort_helper_STAR_.call(null,dep_31946,(depth + (1)),state);

var G__31949 = cljs.core.next.call(null,seq__31909_31939__$1);
var G__31950 = null;
var G__31951 = (0);
var G__31952 = (0);
seq__31909_31926 = G__31949;
chunk__31910_31927 = G__31950;
count__31911_31928 = G__31951;
i__31912_31929 = G__31952;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__31916){
var vec__31920 = p__31916;
var seq__31921 = cljs.core.seq.call(null,vec__31920);
var first__31922 = cljs.core.first.call(null,seq__31921);
var seq__31921__$1 = cljs.core.next.call(null,seq__31921);
var x = first__31922;
var xs = seq__31921__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__31920,seq__31921,first__31922,seq__31921__$1,x,xs,get_deps__$1){
return (function (p1__31784_SHARP_){
return clojure.set.difference.call(null,p1__31784_SHARP_,x);
});})(vec__31920,seq__31921,first__31922,seq__31921__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__31985 = cljs.core.seq.call(null,provides);
var chunk__31986 = null;
var count__31987 = (0);
var i__31988 = (0);
while(true){
if((i__31988 < count__31987)){
var prov = cljs.core._nth.call(null,chunk__31986,i__31988);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__31989_32004 = cljs.core.seq.call(null,requires);
var chunk__31990_32005 = null;
var count__31991_32006 = (0);
var i__31992_32007 = (0);
while(true){
if((i__31992_32007 < count__31991_32006)){
var req_32008 = cljs.core._nth.call(null,chunk__31990_32005,i__31992_32007);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_32008,prov);

var G__32011 = seq__31989_32004;
var G__32012 = chunk__31990_32005;
var G__32013 = count__31991_32006;
var G__32014 = (i__31992_32007 + (1));
seq__31989_32004 = G__32011;
chunk__31990_32005 = G__32012;
count__31991_32006 = G__32013;
i__31992_32007 = G__32014;
continue;
} else {
var temp__4657__auto___32018 = cljs.core.seq.call(null,seq__31989_32004);
if(temp__4657__auto___32018){
var seq__31989_32020__$1 = temp__4657__auto___32018;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31989_32020__$1)){
var c__21266__auto___32022 = cljs.core.chunk_first.call(null,seq__31989_32020__$1);
var G__32023 = cljs.core.chunk_rest.call(null,seq__31989_32020__$1);
var G__32024 = c__21266__auto___32022;
var G__32025 = cljs.core.count.call(null,c__21266__auto___32022);
var G__32026 = (0);
seq__31989_32004 = G__32023;
chunk__31990_32005 = G__32024;
count__31991_32006 = G__32025;
i__31992_32007 = G__32026;
continue;
} else {
var req_32027 = cljs.core.first.call(null,seq__31989_32020__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_32027,prov);

var G__32028 = cljs.core.next.call(null,seq__31989_32020__$1);
var G__32029 = null;
var G__32030 = (0);
var G__32031 = (0);
seq__31989_32004 = G__32028;
chunk__31990_32005 = G__32029;
count__31991_32006 = G__32030;
i__31992_32007 = G__32031;
continue;
}
} else {
}
}
break;
}

var G__32034 = seq__31985;
var G__32035 = chunk__31986;
var G__32036 = count__31987;
var G__32037 = (i__31988 + (1));
seq__31985 = G__32034;
chunk__31986 = G__32035;
count__31987 = G__32036;
i__31988 = G__32037;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__31985);
if(temp__4657__auto__){
var seq__31985__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31985__$1)){
var c__21266__auto__ = cljs.core.chunk_first.call(null,seq__31985__$1);
var G__32039 = cljs.core.chunk_rest.call(null,seq__31985__$1);
var G__32040 = c__21266__auto__;
var G__32041 = cljs.core.count.call(null,c__21266__auto__);
var G__32042 = (0);
seq__31985 = G__32039;
chunk__31986 = G__32040;
count__31987 = G__32041;
i__31988 = G__32042;
continue;
} else {
var prov = cljs.core.first.call(null,seq__31985__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__31994_32048 = cljs.core.seq.call(null,requires);
var chunk__31995_32049 = null;
var count__31996_32050 = (0);
var i__31997_32051 = (0);
while(true){
if((i__31997_32051 < count__31996_32050)){
var req_32053 = cljs.core._nth.call(null,chunk__31995_32049,i__31997_32051);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_32053,prov);

var G__32054 = seq__31994_32048;
var G__32055 = chunk__31995_32049;
var G__32056 = count__31996_32050;
var G__32057 = (i__31997_32051 + (1));
seq__31994_32048 = G__32054;
chunk__31995_32049 = G__32055;
count__31996_32050 = G__32056;
i__31997_32051 = G__32057;
continue;
} else {
var temp__4657__auto___32060__$1 = cljs.core.seq.call(null,seq__31994_32048);
if(temp__4657__auto___32060__$1){
var seq__31994_32062__$1 = temp__4657__auto___32060__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31994_32062__$1)){
var c__21266__auto___32064 = cljs.core.chunk_first.call(null,seq__31994_32062__$1);
var G__32066 = cljs.core.chunk_rest.call(null,seq__31994_32062__$1);
var G__32067 = c__21266__auto___32064;
var G__32068 = cljs.core.count.call(null,c__21266__auto___32064);
var G__32069 = (0);
seq__31994_32048 = G__32066;
chunk__31995_32049 = G__32067;
count__31996_32050 = G__32068;
i__31997_32051 = G__32069;
continue;
} else {
var req_32073 = cljs.core.first.call(null,seq__31994_32062__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_32073,prov);

var G__32074 = cljs.core.next.call(null,seq__31994_32062__$1);
var G__32075 = null;
var G__32076 = (0);
var G__32077 = (0);
seq__31994_32048 = G__32074;
chunk__31995_32049 = G__32075;
count__31996_32050 = G__32076;
i__31997_32051 = G__32077;
continue;
}
} else {
}
}
break;
}

var G__32080 = cljs.core.next.call(null,seq__31985__$1);
var G__32081 = null;
var G__32082 = (0);
var G__32083 = (0);
seq__31985 = G__32080;
chunk__31986 = G__32081;
count__31987 = G__32082;
i__31988 = G__32083;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__32093_32100 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__32094_32101 = null;
var count__32095_32102 = (0);
var i__32096_32103 = (0);
while(true){
if((i__32096_32103 < count__32095_32102)){
var ns_32108 = cljs.core._nth.call(null,chunk__32094_32101,i__32096_32103);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_32108);

var G__32110 = seq__32093_32100;
var G__32111 = chunk__32094_32101;
var G__32112 = count__32095_32102;
var G__32113 = (i__32096_32103 + (1));
seq__32093_32100 = G__32110;
chunk__32094_32101 = G__32111;
count__32095_32102 = G__32112;
i__32096_32103 = G__32113;
continue;
} else {
var temp__4657__auto___32115 = cljs.core.seq.call(null,seq__32093_32100);
if(temp__4657__auto___32115){
var seq__32093_32116__$1 = temp__4657__auto___32115;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32093_32116__$1)){
var c__21266__auto___32118 = cljs.core.chunk_first.call(null,seq__32093_32116__$1);
var G__32120 = cljs.core.chunk_rest.call(null,seq__32093_32116__$1);
var G__32121 = c__21266__auto___32118;
var G__32122 = cljs.core.count.call(null,c__21266__auto___32118);
var G__32123 = (0);
seq__32093_32100 = G__32120;
chunk__32094_32101 = G__32121;
count__32095_32102 = G__32122;
i__32096_32103 = G__32123;
continue;
} else {
var ns_32126 = cljs.core.first.call(null,seq__32093_32116__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_32126);

var G__32127 = cljs.core.next.call(null,seq__32093_32116__$1);
var G__32128 = null;
var G__32129 = (0);
var G__32130 = (0);
seq__32093_32100 = G__32127;
chunk__32094_32101 = G__32128;
count__32095_32102 = G__32129;
i__32096_32103 = G__32130;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__20455__auto__ = goog.require__;
if(cljs.core.truth_(or__20455__auto__)){
return or__20455__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__32136__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__32136 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32139__i = 0, G__32139__a = new Array(arguments.length -  0);
while (G__32139__i < G__32139__a.length) {G__32139__a[G__32139__i] = arguments[G__32139__i + 0]; ++G__32139__i;}
  args = new cljs.core.IndexedSeq(G__32139__a,0);
} 
return G__32136__delegate.call(this,args);};
G__32136.cljs$lang$maxFixedArity = 0;
G__32136.cljs$lang$applyTo = (function (arglist__32141){
var args = cljs.core.seq(arglist__32141);
return G__32136__delegate(args);
});
G__32136.cljs$core$IFn$_invoke$arity$variadic = G__32136__delegate;
return G__32136;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__32146 = cljs.core._EQ_;
var expr__32147 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__32146.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__32147))){
var path_parts = ((function (pred__32146,expr__32147){
return (function (p1__32145_SHARP_){
return clojure.string.split.call(null,p1__32145_SHARP_,/[\/\\]/);
});})(pred__32146,expr__32147))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__32146,expr__32147){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e32150){if((e32150 instanceof Error)){
var e = e32150;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e32150;

}
}})());
});
;})(path_parts,sep,root,pred__32146,expr__32147))
} else {
if(cljs.core.truth_(pred__32146.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__32147))){
return ((function (pred__32146,expr__32147){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred,pred__32146,expr__32147){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__32146,expr__32147))
);

return deferred.addErrback(((function (deferred,pred__32146,expr__32147){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__32146,expr__32147))
);
});
;})(pred__32146,expr__32147))
} else {
return ((function (pred__32146,expr__32147){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__32146,expr__32147))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__32168,callback){
var map__32172 = p__32168;
var map__32172__$1 = ((((!((map__32172 == null)))?((((map__32172.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32172.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32172):map__32172);
var file_msg = map__32172__$1;
var request_url = cljs.core.get.call(null,map__32172__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__32172,map__32172__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__32172,map__32172__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__24323__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24323__auto__){
return (function (){
var f__24324__auto__ = (function (){var switch__24046__auto__ = ((function (c__24323__auto__){
return (function (state_32224){
var state_val_32225 = (state_32224[(1)]);
if((state_val_32225 === (7))){
var inst_32220 = (state_32224[(2)]);
var state_32224__$1 = state_32224;
var statearr_32227_32260 = state_32224__$1;
(statearr_32227_32260[(2)] = inst_32220);

(statearr_32227_32260[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32225 === (1))){
var state_32224__$1 = state_32224;
var statearr_32229_32262 = state_32224__$1;
(statearr_32229_32262[(2)] = null);

(statearr_32229_32262[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32225 === (4))){
var inst_32203 = (state_32224[(7)]);
var inst_32203__$1 = (state_32224[(2)]);
var state_32224__$1 = (function (){var statearr_32230 = state_32224;
(statearr_32230[(7)] = inst_32203__$1);

return statearr_32230;
})();
if(cljs.core.truth_(inst_32203__$1)){
var statearr_32231_32266 = state_32224__$1;
(statearr_32231_32266[(1)] = (5));

} else {
var statearr_32232_32267 = state_32224__$1;
(statearr_32232_32267[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32225 === (6))){
var state_32224__$1 = state_32224;
var statearr_32234_32268 = state_32224__$1;
(statearr_32234_32268[(2)] = null);

(statearr_32234_32268[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32225 === (3))){
var inst_32222 = (state_32224[(2)]);
var state_32224__$1 = state_32224;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32224__$1,inst_32222);
} else {
if((state_val_32225 === (2))){
var state_32224__$1 = state_32224;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32224__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_32225 === (11))){
var inst_32216 = (state_32224[(2)]);
var state_32224__$1 = (function (){var statearr_32237 = state_32224;
(statearr_32237[(8)] = inst_32216);

return statearr_32237;
})();
var statearr_32238_32271 = state_32224__$1;
(statearr_32238_32271[(2)] = null);

(statearr_32238_32271[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32225 === (9))){
var inst_32207 = (state_32224[(9)]);
var inst_32209 = (state_32224[(10)]);
var inst_32211 = inst_32209.call(null,inst_32207);
var state_32224__$1 = state_32224;
var statearr_32241_32275 = state_32224__$1;
(statearr_32241_32275[(2)] = inst_32211);

(statearr_32241_32275[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32225 === (5))){
var inst_32203 = (state_32224[(7)]);
var inst_32205 = figwheel.client.file_reloading.blocking_load.call(null,inst_32203);
var state_32224__$1 = state_32224;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32224__$1,(8),inst_32205);
} else {
if((state_val_32225 === (10))){
var inst_32207 = (state_32224[(9)]);
var inst_32214 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_32207);
var state_32224__$1 = state_32224;
var statearr_32243_32278 = state_32224__$1;
(statearr_32243_32278[(2)] = inst_32214);

(statearr_32243_32278[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32225 === (8))){
var inst_32209 = (state_32224[(10)]);
var inst_32203 = (state_32224[(7)]);
var inst_32207 = (state_32224[(2)]);
var inst_32208 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_32209__$1 = cljs.core.get.call(null,inst_32208,inst_32203);
var state_32224__$1 = (function (){var statearr_32244 = state_32224;
(statearr_32244[(9)] = inst_32207);

(statearr_32244[(10)] = inst_32209__$1);

return statearr_32244;
})();
if(cljs.core.truth_(inst_32209__$1)){
var statearr_32245_32283 = state_32224__$1;
(statearr_32245_32283[(1)] = (9));

} else {
var statearr_32246_32285 = state_32224__$1;
(statearr_32246_32285[(1)] = (10));

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
});})(c__24323__auto__))
;
return ((function (switch__24046__auto__,c__24323__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__24047__auto__ = null;
var figwheel$client$file_reloading$state_machine__24047__auto____0 = (function (){
var statearr_32252 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32252[(0)] = figwheel$client$file_reloading$state_machine__24047__auto__);

(statearr_32252[(1)] = (1));

return statearr_32252;
});
var figwheel$client$file_reloading$state_machine__24047__auto____1 = (function (state_32224){
while(true){
var ret_value__24048__auto__ = (function (){try{while(true){
var result__24049__auto__ = switch__24046__auto__.call(null,state_32224);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24049__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24049__auto__;
}
break;
}
}catch (e32254){if((e32254 instanceof Object)){
var ex__24050__auto__ = e32254;
var statearr_32255_32291 = state_32224;
(statearr_32255_32291[(5)] = ex__24050__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32224);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32254;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32294 = state_32224;
state_32224 = G__32294;
continue;
} else {
return ret_value__24048__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__24047__auto__ = function(state_32224){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__24047__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__24047__auto____1.call(this,state_32224);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__24047__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__24047__auto____0;
figwheel$client$file_reloading$state_machine__24047__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__24047__auto____1;
return figwheel$client$file_reloading$state_machine__24047__auto__;
})()
;})(switch__24046__auto__,c__24323__auto__))
})();
var state__24325__auto__ = (function (){var statearr_32256 = f__24324__auto__.call(null);
(statearr_32256[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24323__auto__);

return statearr_32256;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24325__auto__);
});})(c__24323__auto__))
);

return c__24323__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__32295,callback){
var map__32299 = p__32295;
var map__32299__$1 = ((((!((map__32299 == null)))?((((map__32299.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32299.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32299):map__32299);
var file_msg = map__32299__$1;
var namespace = cljs.core.get.call(null,map__32299__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__32299,map__32299__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__32299,map__32299__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__32306){
var map__32312 = p__32306;
var map__32312__$1 = ((((!((map__32312 == null)))?((((map__32312.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32312.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32312):map__32312);
var file_msg = map__32312__$1;
var namespace = cljs.core.get.call(null,map__32312__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__20443__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__20443__auto__){
var or__20455__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__20455__auto__)){
return or__20455__auto__;
} else {
var or__20455__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__20455__auto____$1)){
return or__20455__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__20443__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__32322,callback){
var map__32325 = p__32322;
var map__32325__$1 = ((((!((map__32325 == null)))?((((map__32325.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32325.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32325):map__32325);
var file_msg = map__32325__$1;
var request_url = cljs.core.get.call(null,map__32325__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__32325__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__24323__auto___32455 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24323__auto___32455,out){
return (function (){
var f__24324__auto__ = (function (){var switch__24046__auto__ = ((function (c__24323__auto___32455,out){
return (function (state_32430){
var state_val_32431 = (state_32430[(1)]);
if((state_val_32431 === (1))){
var inst_32403 = cljs.core.seq.call(null,files);
var inst_32404 = cljs.core.first.call(null,inst_32403);
var inst_32405 = cljs.core.next.call(null,inst_32403);
var inst_32406 = files;
var state_32430__$1 = (function (){var statearr_32432 = state_32430;
(statearr_32432[(7)] = inst_32406);

(statearr_32432[(8)] = inst_32404);

(statearr_32432[(9)] = inst_32405);

return statearr_32432;
})();
var statearr_32433_32463 = state_32430__$1;
(statearr_32433_32463[(2)] = null);

(statearr_32433_32463[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32431 === (2))){
var inst_32406 = (state_32430[(7)]);
var inst_32412 = (state_32430[(10)]);
var inst_32411 = cljs.core.seq.call(null,inst_32406);
var inst_32412__$1 = cljs.core.first.call(null,inst_32411);
var inst_32413 = cljs.core.next.call(null,inst_32411);
var inst_32414 = (inst_32412__$1 == null);
var inst_32415 = cljs.core.not.call(null,inst_32414);
var state_32430__$1 = (function (){var statearr_32435 = state_32430;
(statearr_32435[(10)] = inst_32412__$1);

(statearr_32435[(11)] = inst_32413);

return statearr_32435;
})();
if(inst_32415){
var statearr_32436_32469 = state_32430__$1;
(statearr_32436_32469[(1)] = (4));

} else {
var statearr_32438_32472 = state_32430__$1;
(statearr_32438_32472[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32431 === (3))){
var inst_32428 = (state_32430[(2)]);
var state_32430__$1 = state_32430;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32430__$1,inst_32428);
} else {
if((state_val_32431 === (4))){
var inst_32412 = (state_32430[(10)]);
var inst_32417 = figwheel.client.file_reloading.reload_js_file.call(null,inst_32412);
var state_32430__$1 = state_32430;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32430__$1,(7),inst_32417);
} else {
if((state_val_32431 === (5))){
var inst_32424 = cljs.core.async.close_BANG_.call(null,out);
var state_32430__$1 = state_32430;
var statearr_32440_32476 = state_32430__$1;
(statearr_32440_32476[(2)] = inst_32424);

(statearr_32440_32476[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32431 === (6))){
var inst_32426 = (state_32430[(2)]);
var state_32430__$1 = state_32430;
var statearr_32441_32478 = state_32430__$1;
(statearr_32441_32478[(2)] = inst_32426);

(statearr_32441_32478[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32431 === (7))){
var inst_32413 = (state_32430[(11)]);
var inst_32419 = (state_32430[(2)]);
var inst_32421 = cljs.core.async.put_BANG_.call(null,out,inst_32419);
var inst_32406 = inst_32413;
var state_32430__$1 = (function (){var statearr_32442 = state_32430;
(statearr_32442[(12)] = inst_32421);

(statearr_32442[(7)] = inst_32406);

return statearr_32442;
})();
var statearr_32443_32484 = state_32430__$1;
(statearr_32443_32484[(2)] = null);

(statearr_32443_32484[(1)] = (2));


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
});})(c__24323__auto___32455,out))
;
return ((function (switch__24046__auto__,c__24323__auto___32455,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__24047__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__24047__auto____0 = (function (){
var statearr_32451 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32451[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__24047__auto__);

(statearr_32451[(1)] = (1));

return statearr_32451;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__24047__auto____1 = (function (state_32430){
while(true){
var ret_value__24048__auto__ = (function (){try{while(true){
var result__24049__auto__ = switch__24046__auto__.call(null,state_32430);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24049__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24049__auto__;
}
break;
}
}catch (e32452){if((e32452 instanceof Object)){
var ex__24050__auto__ = e32452;
var statearr_32453_32490 = state_32430;
(statearr_32453_32490[(5)] = ex__24050__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32430);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32452;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32494 = state_32430;
state_32430 = G__32494;
continue;
} else {
return ret_value__24048__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__24047__auto__ = function(state_32430){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__24047__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__24047__auto____1.call(this,state_32430);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__24047__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__24047__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__24047__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__24047__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__24047__auto__;
})()
;})(switch__24046__auto__,c__24323__auto___32455,out))
})();
var state__24325__auto__ = (function (){var statearr_32454 = f__24324__auto__.call(null);
(statearr_32454[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24323__auto___32455);

return statearr_32454;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24325__auto__);
});})(c__24323__auto___32455,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__32500,opts){
var map__32507 = p__32500;
var map__32507__$1 = ((((!((map__32507 == null)))?((((map__32507.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32507.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32507):map__32507);
var eval_body__$1 = cljs.core.get.call(null,map__32507__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__32507__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__20443__auto__ = eval_body__$1;
if(cljs.core.truth_(and__20443__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__20443__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e32510){var e = e32510;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__32518_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__32518_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__32542){
var vec__32543 = p__32542;
var k = cljs.core.nth.call(null,vec__32543,(0),null);
var v = cljs.core.nth.call(null,vec__32543,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__32546){
var vec__32547 = p__32546;
var k = cljs.core.nth.call(null,vec__32547,(0),null);
var v = cljs.core.nth.call(null,vec__32547,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__32564,p__32565){
var map__33220 = p__32564;
var map__33220__$1 = ((((!((map__33220 == null)))?((((map__33220.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33220.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33220):map__33220);
var opts = map__33220__$1;
var before_jsload = cljs.core.get.call(null,map__33220__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__33220__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__33220__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__33221 = p__32565;
var map__33221__$1 = ((((!((map__33221 == null)))?((((map__33221.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33221.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33221):map__33221);
var msg = map__33221__$1;
var files = cljs.core.get.call(null,map__33221__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__33221__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__33221__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__24323__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24323__auto__,map__33220,map__33220__$1,opts,before_jsload,on_jsload,reload_dependents,map__33221,map__33221__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__24324__auto__ = (function (){var switch__24046__auto__ = ((function (c__24323__auto__,map__33220,map__33220__$1,opts,before_jsload,on_jsload,reload_dependents,map__33221,map__33221__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_33396){
var state_val_33398 = (state_33396[(1)]);
if((state_val_33398 === (7))){
var inst_33243 = (state_33396[(7)]);
var inst_33240 = (state_33396[(8)]);
var inst_33241 = (state_33396[(9)]);
var inst_33242 = (state_33396[(10)]);
var inst_33248 = cljs.core._nth.call(null,inst_33241,inst_33243);
var inst_33249 = figwheel.client.file_reloading.eval_body.call(null,inst_33248,opts);
var inst_33250 = (inst_33243 + (1));
var tmp33399 = inst_33240;
var tmp33400 = inst_33241;
var tmp33401 = inst_33242;
var inst_33240__$1 = tmp33399;
var inst_33241__$1 = tmp33400;
var inst_33242__$1 = tmp33401;
var inst_33243__$1 = inst_33250;
var state_33396__$1 = (function (){var statearr_33406 = state_33396;
(statearr_33406[(11)] = inst_33249);

(statearr_33406[(7)] = inst_33243__$1);

(statearr_33406[(8)] = inst_33240__$1);

(statearr_33406[(9)] = inst_33241__$1);

(statearr_33406[(10)] = inst_33242__$1);

return statearr_33406;
})();
var statearr_33409_33623 = state_33396__$1;
(statearr_33409_33623[(2)] = null);

(statearr_33409_33623[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33398 === (20))){
var inst_33286 = (state_33396[(12)]);
var inst_33295 = figwheel.client.file_reloading.sort_files.call(null,inst_33286);
var state_33396__$1 = state_33396;
var statearr_33410_33630 = state_33396__$1;
(statearr_33410_33630[(2)] = inst_33295);

(statearr_33410_33630[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33398 === (27))){
var state_33396__$1 = state_33396;
var statearr_33412_33634 = state_33396__$1;
(statearr_33412_33634[(2)] = null);

(statearr_33412_33634[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33398 === (1))){
var inst_33231 = (state_33396[(13)]);
var inst_33228 = before_jsload.call(null,files);
var inst_33229 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_33230 = (function (){return ((function (inst_33231,inst_33228,inst_33229,state_val_33398,c__24323__auto__,map__33220,map__33220__$1,opts,before_jsload,on_jsload,reload_dependents,map__33221,map__33221__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__32557_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__32557_SHARP_);
});
;})(inst_33231,inst_33228,inst_33229,state_val_33398,c__24323__auto__,map__33220,map__33220__$1,opts,before_jsload,on_jsload,reload_dependents,map__33221,map__33221__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_33231__$1 = cljs.core.filter.call(null,inst_33230,files);
var inst_33232 = cljs.core.not_empty.call(null,inst_33231__$1);
var state_33396__$1 = (function (){var statearr_33414 = state_33396;
(statearr_33414[(14)] = inst_33229);

(statearr_33414[(15)] = inst_33228);

(statearr_33414[(13)] = inst_33231__$1);

return statearr_33414;
})();
if(cljs.core.truth_(inst_33232)){
var statearr_33415_33648 = state_33396__$1;
(statearr_33415_33648[(1)] = (2));

} else {
var statearr_33416_33650 = state_33396__$1;
(statearr_33416_33650[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33398 === (24))){
var state_33396__$1 = state_33396;
var statearr_33418_33653 = state_33396__$1;
(statearr_33418_33653[(2)] = null);

(statearr_33418_33653[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33398 === (39))){
var inst_33340 = (state_33396[(16)]);
var state_33396__$1 = state_33396;
var statearr_33422_33657 = state_33396__$1;
(statearr_33422_33657[(2)] = inst_33340);

(statearr_33422_33657[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33398 === (46))){
var inst_33387 = (state_33396[(2)]);
var state_33396__$1 = state_33396;
var statearr_33423_33662 = state_33396__$1;
(statearr_33423_33662[(2)] = inst_33387);

(statearr_33423_33662[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33398 === (4))){
var inst_33280 = (state_33396[(2)]);
var inst_33281 = cljs.core.List.EMPTY;
var inst_33282 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_33281);
var inst_33283 = (function (){return ((function (inst_33280,inst_33281,inst_33282,state_val_33398,c__24323__auto__,map__33220,map__33220__$1,opts,before_jsload,on_jsload,reload_dependents,map__33221,map__33221__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__32558_SHARP_){
var and__20443__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__32558_SHARP_);
if(cljs.core.truth_(and__20443__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__32558_SHARP_));
} else {
return and__20443__auto__;
}
});
;})(inst_33280,inst_33281,inst_33282,state_val_33398,c__24323__auto__,map__33220,map__33220__$1,opts,before_jsload,on_jsload,reload_dependents,map__33221,map__33221__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_33284 = cljs.core.filter.call(null,inst_33283,files);
var inst_33285 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_33286 = cljs.core.concat.call(null,inst_33284,inst_33285);
var state_33396__$1 = (function (){var statearr_33427 = state_33396;
(statearr_33427[(17)] = inst_33282);

(statearr_33427[(18)] = inst_33280);

(statearr_33427[(12)] = inst_33286);

return statearr_33427;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_33429_33679 = state_33396__$1;
(statearr_33429_33679[(1)] = (16));

} else {
var statearr_33430_33681 = state_33396__$1;
(statearr_33430_33681[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33398 === (15))){
var inst_33270 = (state_33396[(2)]);
var state_33396__$1 = state_33396;
var statearr_33431_33685 = state_33396__$1;
(statearr_33431_33685[(2)] = inst_33270);

(statearr_33431_33685[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33398 === (21))){
var inst_33297 = (state_33396[(19)]);
var inst_33297__$1 = (state_33396[(2)]);
var inst_33299 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_33297__$1);
var state_33396__$1 = (function (){var statearr_33433 = state_33396;
(statearr_33433[(19)] = inst_33297__$1);

return statearr_33433;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33396__$1,(22),inst_33299);
} else {
if((state_val_33398 === (31))){
var inst_33390 = (state_33396[(2)]);
var state_33396__$1 = state_33396;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33396__$1,inst_33390);
} else {
if((state_val_33398 === (32))){
var inst_33340 = (state_33396[(16)]);
var inst_33346 = inst_33340.cljs$lang$protocol_mask$partition0$;
var inst_33347 = (inst_33346 & (64));
var inst_33349 = inst_33340.cljs$core$ISeq$;
var inst_33350 = (inst_33347) || (inst_33349);
var state_33396__$1 = state_33396;
if(cljs.core.truth_(inst_33350)){
var statearr_33435_33702 = state_33396__$1;
(statearr_33435_33702[(1)] = (35));

} else {
var statearr_33437_33704 = state_33396__$1;
(statearr_33437_33704[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33398 === (40))){
var inst_33363 = (state_33396[(20)]);
var inst_33362 = (state_33396[(2)]);
var inst_33363__$1 = cljs.core.get.call(null,inst_33362,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_33366 = cljs.core.get.call(null,inst_33362,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_33368 = cljs.core.not_empty.call(null,inst_33363__$1);
var state_33396__$1 = (function (){var statearr_33440 = state_33396;
(statearr_33440[(21)] = inst_33366);

(statearr_33440[(20)] = inst_33363__$1);

return statearr_33440;
})();
if(cljs.core.truth_(inst_33368)){
var statearr_33442_33714 = state_33396__$1;
(statearr_33442_33714[(1)] = (41));

} else {
var statearr_33444_33715 = state_33396__$1;
(statearr_33444_33715[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33398 === (33))){
var state_33396__$1 = state_33396;
var statearr_33445_33719 = state_33396__$1;
(statearr_33445_33719[(2)] = false);

(statearr_33445_33719[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33398 === (13))){
var inst_33254 = (state_33396[(22)]);
var inst_33259 = cljs.core.chunk_first.call(null,inst_33254);
var inst_33260 = cljs.core.chunk_rest.call(null,inst_33254);
var inst_33261 = cljs.core.count.call(null,inst_33259);
var inst_33240 = inst_33260;
var inst_33241 = inst_33259;
var inst_33242 = inst_33261;
var inst_33243 = (0);
var state_33396__$1 = (function (){var statearr_33448 = state_33396;
(statearr_33448[(7)] = inst_33243);

(statearr_33448[(8)] = inst_33240);

(statearr_33448[(9)] = inst_33241);

(statearr_33448[(10)] = inst_33242);

return statearr_33448;
})();
var statearr_33449_33727 = state_33396__$1;
(statearr_33449_33727[(2)] = null);

(statearr_33449_33727[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33398 === (22))){
var inst_33302 = (state_33396[(23)]);
var inst_33306 = (state_33396[(24)]);
var inst_33297 = (state_33396[(19)]);
var inst_33301 = (state_33396[(25)]);
var inst_33301__$1 = (state_33396[(2)]);
var inst_33302__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_33301__$1);
var inst_33303 = (function (){var all_files = inst_33297;
var res_SINGLEQUOTE_ = inst_33301__$1;
var res = inst_33302__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_33302,inst_33306,inst_33297,inst_33301,inst_33301__$1,inst_33302__$1,state_val_33398,c__24323__auto__,map__33220,map__33220__$1,opts,before_jsload,on_jsload,reload_dependents,map__33221,map__33221__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__32561_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__32561_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_33302,inst_33306,inst_33297,inst_33301,inst_33301__$1,inst_33302__$1,state_val_33398,c__24323__auto__,map__33220,map__33220__$1,opts,before_jsload,on_jsload,reload_dependents,map__33221,map__33221__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_33304 = cljs.core.filter.call(null,inst_33303,inst_33301__$1);
var inst_33305 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_33306__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_33305);
var inst_33307 = cljs.core.not_empty.call(null,inst_33306__$1);
var state_33396__$1 = (function (){var statearr_33452 = state_33396;
(statearr_33452[(23)] = inst_33302__$1);

(statearr_33452[(24)] = inst_33306__$1);

(statearr_33452[(25)] = inst_33301__$1);

(statearr_33452[(26)] = inst_33304);

return statearr_33452;
})();
if(cljs.core.truth_(inst_33307)){
var statearr_33455_33730 = state_33396__$1;
(statearr_33455_33730[(1)] = (23));

} else {
var statearr_33456_33731 = state_33396__$1;
(statearr_33456_33731[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33398 === (36))){
var state_33396__$1 = state_33396;
var statearr_33458_33732 = state_33396__$1;
(statearr_33458_33732[(2)] = false);

(statearr_33458_33732[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33398 === (41))){
var inst_33363 = (state_33396[(20)]);
var inst_33370 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_33371 = cljs.core.map.call(null,inst_33370,inst_33363);
var inst_33372 = cljs.core.pr_str.call(null,inst_33371);
var inst_33373 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_33372)].join('');
var inst_33374 = figwheel.client.utils.log.call(null,inst_33373);
var state_33396__$1 = state_33396;
var statearr_33460_33733 = state_33396__$1;
(statearr_33460_33733[(2)] = inst_33374);

(statearr_33460_33733[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33398 === (43))){
var inst_33366 = (state_33396[(21)]);
var inst_33377 = (state_33396[(2)]);
var inst_33378 = cljs.core.not_empty.call(null,inst_33366);
var state_33396__$1 = (function (){var statearr_33462 = state_33396;
(statearr_33462[(27)] = inst_33377);

return statearr_33462;
})();
if(cljs.core.truth_(inst_33378)){
var statearr_33464_33735 = state_33396__$1;
(statearr_33464_33735[(1)] = (44));

} else {
var statearr_33465_33736 = state_33396__$1;
(statearr_33465_33736[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33398 === (29))){
var inst_33302 = (state_33396[(23)]);
var inst_33306 = (state_33396[(24)]);
var inst_33297 = (state_33396[(19)]);
var inst_33340 = (state_33396[(16)]);
var inst_33301 = (state_33396[(25)]);
var inst_33304 = (state_33396[(26)]);
var inst_33335 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_33339 = (function (){var all_files = inst_33297;
var res_SINGLEQUOTE_ = inst_33301;
var res = inst_33302;
var files_not_loaded = inst_33304;
var dependencies_that_loaded = inst_33306;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_33302,inst_33306,inst_33297,inst_33340,inst_33301,inst_33304,inst_33335,state_val_33398,c__24323__auto__,map__33220,map__33220__$1,opts,before_jsload,on_jsload,reload_dependents,map__33221,map__33221__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__33338){
var map__33467 = p__33338;
var map__33467__$1 = ((((!((map__33467 == null)))?((((map__33467.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33467.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33467):map__33467);
var namespace = cljs.core.get.call(null,map__33467__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_33302,inst_33306,inst_33297,inst_33340,inst_33301,inst_33304,inst_33335,state_val_33398,c__24323__auto__,map__33220,map__33220__$1,opts,before_jsload,on_jsload,reload_dependents,map__33221,map__33221__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_33340__$1 = cljs.core.group_by.call(null,inst_33339,inst_33304);
var inst_33342 = (inst_33340__$1 == null);
var inst_33343 = cljs.core.not.call(null,inst_33342);
var state_33396__$1 = (function (){var statearr_33474 = state_33396;
(statearr_33474[(28)] = inst_33335);

(statearr_33474[(16)] = inst_33340__$1);

return statearr_33474;
})();
if(inst_33343){
var statearr_33476_33744 = state_33396__$1;
(statearr_33476_33744[(1)] = (32));

} else {
var statearr_33479_33746 = state_33396__$1;
(statearr_33479_33746[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33398 === (44))){
var inst_33366 = (state_33396[(21)]);
var inst_33381 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_33366);
var inst_33382 = cljs.core.pr_str.call(null,inst_33381);
var inst_33383 = [cljs.core.str("not required: "),cljs.core.str(inst_33382)].join('');
var inst_33384 = figwheel.client.utils.log.call(null,inst_33383);
var state_33396__$1 = state_33396;
var statearr_33481_33748 = state_33396__$1;
(statearr_33481_33748[(2)] = inst_33384);

(statearr_33481_33748[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33398 === (6))){
var inst_33277 = (state_33396[(2)]);
var state_33396__$1 = state_33396;
var statearr_33483_33750 = state_33396__$1;
(statearr_33483_33750[(2)] = inst_33277);

(statearr_33483_33750[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33398 === (28))){
var inst_33304 = (state_33396[(26)]);
var inst_33332 = (state_33396[(2)]);
var inst_33333 = cljs.core.not_empty.call(null,inst_33304);
var state_33396__$1 = (function (){var statearr_33485 = state_33396;
(statearr_33485[(29)] = inst_33332);

return statearr_33485;
})();
if(cljs.core.truth_(inst_33333)){
var statearr_33487_33752 = state_33396__$1;
(statearr_33487_33752[(1)] = (29));

} else {
var statearr_33488_33753 = state_33396__$1;
(statearr_33488_33753[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33398 === (25))){
var inst_33302 = (state_33396[(23)]);
var inst_33319 = (state_33396[(2)]);
var inst_33320 = cljs.core.not_empty.call(null,inst_33302);
var state_33396__$1 = (function (){var statearr_33489 = state_33396;
(statearr_33489[(30)] = inst_33319);

return statearr_33489;
})();
if(cljs.core.truth_(inst_33320)){
var statearr_33491_33759 = state_33396__$1;
(statearr_33491_33759[(1)] = (26));

} else {
var statearr_33493_33761 = state_33396__$1;
(statearr_33493_33761[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33398 === (34))){
var inst_33357 = (state_33396[(2)]);
var state_33396__$1 = state_33396;
if(cljs.core.truth_(inst_33357)){
var statearr_33495_33764 = state_33396__$1;
(statearr_33495_33764[(1)] = (38));

} else {
var statearr_33496_33765 = state_33396__$1;
(statearr_33496_33765[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33398 === (17))){
var state_33396__$1 = state_33396;
var statearr_33497_33771 = state_33396__$1;
(statearr_33497_33771[(2)] = recompile_dependents);

(statearr_33497_33771[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33398 === (3))){
var state_33396__$1 = state_33396;
var statearr_33498_33778 = state_33396__$1;
(statearr_33498_33778[(2)] = null);

(statearr_33498_33778[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33398 === (12))){
var inst_33273 = (state_33396[(2)]);
var state_33396__$1 = state_33396;
var statearr_33500_33785 = state_33396__$1;
(statearr_33500_33785[(2)] = inst_33273);

(statearr_33500_33785[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33398 === (2))){
var inst_33231 = (state_33396[(13)]);
var inst_33239 = cljs.core.seq.call(null,inst_33231);
var inst_33240 = inst_33239;
var inst_33241 = null;
var inst_33242 = (0);
var inst_33243 = (0);
var state_33396__$1 = (function (){var statearr_33505 = state_33396;
(statearr_33505[(7)] = inst_33243);

(statearr_33505[(8)] = inst_33240);

(statearr_33505[(9)] = inst_33241);

(statearr_33505[(10)] = inst_33242);

return statearr_33505;
})();
var statearr_33507_33802 = state_33396__$1;
(statearr_33507_33802[(2)] = null);

(statearr_33507_33802[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33398 === (23))){
var inst_33302 = (state_33396[(23)]);
var inst_33306 = (state_33396[(24)]);
var inst_33297 = (state_33396[(19)]);
var inst_33301 = (state_33396[(25)]);
var inst_33304 = (state_33396[(26)]);
var inst_33309 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_33312 = (function (){var all_files = inst_33297;
var res_SINGLEQUOTE_ = inst_33301;
var res = inst_33302;
var files_not_loaded = inst_33304;
var dependencies_that_loaded = inst_33306;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_33302,inst_33306,inst_33297,inst_33301,inst_33304,inst_33309,state_val_33398,c__24323__auto__,map__33220,map__33220__$1,opts,before_jsload,on_jsload,reload_dependents,map__33221,map__33221__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__33310){
var map__33509 = p__33310;
var map__33509__$1 = ((((!((map__33509 == null)))?((((map__33509.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33509.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33509):map__33509);
var request_url = cljs.core.get.call(null,map__33509__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_33302,inst_33306,inst_33297,inst_33301,inst_33304,inst_33309,state_val_33398,c__24323__auto__,map__33220,map__33220__$1,opts,before_jsload,on_jsload,reload_dependents,map__33221,map__33221__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_33313 = cljs.core.reverse.call(null,inst_33306);
var inst_33314 = cljs.core.map.call(null,inst_33312,inst_33313);
var inst_33315 = cljs.core.pr_str.call(null,inst_33314);
var inst_33316 = figwheel.client.utils.log.call(null,inst_33315);
var state_33396__$1 = (function (){var statearr_33515 = state_33396;
(statearr_33515[(31)] = inst_33309);

return statearr_33515;
})();
var statearr_33516_33852 = state_33396__$1;
(statearr_33516_33852[(2)] = inst_33316);

(statearr_33516_33852[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33398 === (35))){
var state_33396__$1 = state_33396;
var statearr_33518_33857 = state_33396__$1;
(statearr_33518_33857[(2)] = true);

(statearr_33518_33857[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33398 === (19))){
var inst_33286 = (state_33396[(12)]);
var inst_33293 = figwheel.client.file_reloading.expand_files.call(null,inst_33286);
var state_33396__$1 = state_33396;
var statearr_33521_33864 = state_33396__$1;
(statearr_33521_33864[(2)] = inst_33293);

(statearr_33521_33864[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33398 === (11))){
var state_33396__$1 = state_33396;
var statearr_33522_33870 = state_33396__$1;
(statearr_33522_33870[(2)] = null);

(statearr_33522_33870[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33398 === (9))){
var inst_33275 = (state_33396[(2)]);
var state_33396__$1 = state_33396;
var statearr_33525_33872 = state_33396__$1;
(statearr_33525_33872[(2)] = inst_33275);

(statearr_33525_33872[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33398 === (5))){
var inst_33243 = (state_33396[(7)]);
var inst_33242 = (state_33396[(10)]);
var inst_33245 = (inst_33243 < inst_33242);
var inst_33246 = inst_33245;
var state_33396__$1 = state_33396;
if(cljs.core.truth_(inst_33246)){
var statearr_33528_33879 = state_33396__$1;
(statearr_33528_33879[(1)] = (7));

} else {
var statearr_33529_33882 = state_33396__$1;
(statearr_33529_33882[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33398 === (14))){
var inst_33254 = (state_33396[(22)]);
var inst_33264 = cljs.core.first.call(null,inst_33254);
var inst_33265 = figwheel.client.file_reloading.eval_body.call(null,inst_33264,opts);
var inst_33267 = cljs.core.next.call(null,inst_33254);
var inst_33240 = inst_33267;
var inst_33241 = null;
var inst_33242 = (0);
var inst_33243 = (0);
var state_33396__$1 = (function (){var statearr_33532 = state_33396;
(statearr_33532[(32)] = inst_33265);

(statearr_33532[(7)] = inst_33243);

(statearr_33532[(8)] = inst_33240);

(statearr_33532[(9)] = inst_33241);

(statearr_33532[(10)] = inst_33242);

return statearr_33532;
})();
var statearr_33534_33897 = state_33396__$1;
(statearr_33534_33897[(2)] = null);

(statearr_33534_33897[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33398 === (45))){
var state_33396__$1 = state_33396;
var statearr_33536_33901 = state_33396__$1;
(statearr_33536_33901[(2)] = null);

(statearr_33536_33901[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33398 === (26))){
var inst_33302 = (state_33396[(23)]);
var inst_33306 = (state_33396[(24)]);
var inst_33297 = (state_33396[(19)]);
var inst_33301 = (state_33396[(25)]);
var inst_33304 = (state_33396[(26)]);
var inst_33322 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_33324 = (function (){var all_files = inst_33297;
var res_SINGLEQUOTE_ = inst_33301;
var res = inst_33302;
var files_not_loaded = inst_33304;
var dependencies_that_loaded = inst_33306;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_33302,inst_33306,inst_33297,inst_33301,inst_33304,inst_33322,state_val_33398,c__24323__auto__,map__33220,map__33220__$1,opts,before_jsload,on_jsload,reload_dependents,map__33221,map__33221__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__33323){
var map__33539 = p__33323;
var map__33539__$1 = ((((!((map__33539 == null)))?((((map__33539.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33539.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33539):map__33539);
var namespace = cljs.core.get.call(null,map__33539__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__33539__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_33302,inst_33306,inst_33297,inst_33301,inst_33304,inst_33322,state_val_33398,c__24323__auto__,map__33220,map__33220__$1,opts,before_jsload,on_jsload,reload_dependents,map__33221,map__33221__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_33325 = cljs.core.map.call(null,inst_33324,inst_33302);
var inst_33326 = cljs.core.pr_str.call(null,inst_33325);
var inst_33327 = figwheel.client.utils.log.call(null,inst_33326);
var inst_33328 = (function (){var all_files = inst_33297;
var res_SINGLEQUOTE_ = inst_33301;
var res = inst_33302;
var files_not_loaded = inst_33304;
var dependencies_that_loaded = inst_33306;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_33302,inst_33306,inst_33297,inst_33301,inst_33304,inst_33322,inst_33324,inst_33325,inst_33326,inst_33327,state_val_33398,c__24323__auto__,map__33220,map__33220__$1,opts,before_jsload,on_jsload,reload_dependents,map__33221,map__33221__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_33302,inst_33306,inst_33297,inst_33301,inst_33304,inst_33322,inst_33324,inst_33325,inst_33326,inst_33327,state_val_33398,c__24323__auto__,map__33220,map__33220__$1,opts,before_jsload,on_jsload,reload_dependents,map__33221,map__33221__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_33329 = setTimeout(inst_33328,(10));
var state_33396__$1 = (function (){var statearr_33545 = state_33396;
(statearr_33545[(33)] = inst_33327);

(statearr_33545[(34)] = inst_33322);

return statearr_33545;
})();
var statearr_33546_33969 = state_33396__$1;
(statearr_33546_33969[(2)] = inst_33329);

(statearr_33546_33969[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33398 === (16))){
var state_33396__$1 = state_33396;
var statearr_33548_33972 = state_33396__$1;
(statearr_33548_33972[(2)] = reload_dependents);

(statearr_33548_33972[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33398 === (38))){
var inst_33340 = (state_33396[(16)]);
var inst_33359 = cljs.core.apply.call(null,cljs.core.hash_map,inst_33340);
var state_33396__$1 = state_33396;
var statearr_33549_33979 = state_33396__$1;
(statearr_33549_33979[(2)] = inst_33359);

(statearr_33549_33979[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33398 === (30))){
var state_33396__$1 = state_33396;
var statearr_33551_33981 = state_33396__$1;
(statearr_33551_33981[(2)] = null);

(statearr_33551_33981[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33398 === (10))){
var inst_33254 = (state_33396[(22)]);
var inst_33257 = cljs.core.chunked_seq_QMARK_.call(null,inst_33254);
var state_33396__$1 = state_33396;
if(inst_33257){
var statearr_33553_33984 = state_33396__$1;
(statearr_33553_33984[(1)] = (13));

} else {
var statearr_33555_33987 = state_33396__$1;
(statearr_33555_33987[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33398 === (18))){
var inst_33291 = (state_33396[(2)]);
var state_33396__$1 = state_33396;
if(cljs.core.truth_(inst_33291)){
var statearr_33556_33990 = state_33396__$1;
(statearr_33556_33990[(1)] = (19));

} else {
var statearr_33558_33991 = state_33396__$1;
(statearr_33558_33991[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33398 === (42))){
var state_33396__$1 = state_33396;
var statearr_33559_33997 = state_33396__$1;
(statearr_33559_33997[(2)] = null);

(statearr_33559_33997[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33398 === (37))){
var inst_33354 = (state_33396[(2)]);
var state_33396__$1 = state_33396;
var statearr_33561_34005 = state_33396__$1;
(statearr_33561_34005[(2)] = inst_33354);

(statearr_33561_34005[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33398 === (8))){
var inst_33254 = (state_33396[(22)]);
var inst_33240 = (state_33396[(8)]);
var inst_33254__$1 = cljs.core.seq.call(null,inst_33240);
var state_33396__$1 = (function (){var statearr_33563 = state_33396;
(statearr_33563[(22)] = inst_33254__$1);

return statearr_33563;
})();
if(inst_33254__$1){
var statearr_33564_34011 = state_33396__$1;
(statearr_33564_34011[(1)] = (10));

} else {
var statearr_33565_34015 = state_33396__$1;
(statearr_33565_34015[(1)] = (11));

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
});})(c__24323__auto__,map__33220,map__33220__$1,opts,before_jsload,on_jsload,reload_dependents,map__33221,map__33221__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__24046__auto__,c__24323__auto__,map__33220,map__33220__$1,opts,before_jsload,on_jsload,reload_dependents,map__33221,map__33221__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__24047__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__24047__auto____0 = (function (){
var statearr_33575 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33575[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__24047__auto__);

(statearr_33575[(1)] = (1));

return statearr_33575;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__24047__auto____1 = (function (state_33396){
while(true){
var ret_value__24048__auto__ = (function (){try{while(true){
var result__24049__auto__ = switch__24046__auto__.call(null,state_33396);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24049__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24049__auto__;
}
break;
}
}catch (e33577){if((e33577 instanceof Object)){
var ex__24050__auto__ = e33577;
var statearr_33578_34035 = state_33396;
(statearr_33578_34035[(5)] = ex__24050__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33396);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33577;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34039 = state_33396;
state_33396 = G__34039;
continue;
} else {
return ret_value__24048__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__24047__auto__ = function(state_33396){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__24047__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__24047__auto____1.call(this,state_33396);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__24047__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__24047__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__24047__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__24047__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__24047__auto__;
})()
;})(switch__24046__auto__,c__24323__auto__,map__33220,map__33220__$1,opts,before_jsload,on_jsload,reload_dependents,map__33221,map__33221__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__24325__auto__ = (function (){var statearr_33580 = f__24324__auto__.call(null);
(statearr_33580[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24323__auto__);

return statearr_33580;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24325__auto__);
});})(c__24323__auto__,map__33220,map__33220__$1,opts,before_jsload,on_jsload,reload_dependents,map__33221,map__33221__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__24323__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__34065,link){
var map__34069 = p__34065;
var map__34069__$1 = ((((!((map__34069 == null)))?((((map__34069.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34069.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34069):map__34069);
var file = cljs.core.get.call(null,map__34069__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__34069,map__34069__$1,file){
return (function (p1__34063_SHARP_,p2__34064_SHARP_){
if(cljs.core._EQ_.call(null,p1__34063_SHARP_,p2__34064_SHARP_)){
return p1__34063_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__34069,map__34069__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__34081){
var map__34082 = p__34081;
var map__34082__$1 = ((((!((map__34082 == null)))?((((map__34082.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34082.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34082):map__34082);
var match_length = cljs.core.get.call(null,map__34082__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__34082__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__34076_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__34076_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args34092 = [];
var len__21530__auto___34097 = arguments.length;
var i__21531__auto___34098 = (0);
while(true){
if((i__21531__auto___34098 < len__21530__auto___34097)){
args34092.push((arguments[i__21531__auto___34098]));

var G__34099 = (i__21531__auto___34098 + (1));
i__21531__auto___34098 = G__34099;
continue;
} else {
}
break;
}

var G__34094 = args34092.length;
switch (G__34094) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34092.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__34106_SHARP_,p2__34107_SHARP_){
return cljs.core.assoc.call(null,p1__34106_SHARP_,cljs.core.get.call(null,p2__34107_SHARP_,key),p2__34107_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__34110){
var map__34114 = p__34110;
var map__34114__$1 = ((((!((map__34114 == null)))?((((map__34114.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34114.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34114):map__34114);
var f_data = map__34114__$1;
var file = cljs.core.get.call(null,map__34114__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__34120,files_msg){
var map__34130 = p__34120;
var map__34130__$1 = ((((!((map__34130 == null)))?((((map__34130.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34130.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34130):map__34130);
var opts = map__34130__$1;
var on_cssload = cljs.core.get.call(null,map__34130__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__34132_34143 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__34133_34144 = null;
var count__34134_34145 = (0);
var i__34135_34146 = (0);
while(true){
if((i__34135_34146 < count__34134_34145)){
var f_34148 = cljs.core._nth.call(null,chunk__34133_34144,i__34135_34146);
figwheel.client.file_reloading.reload_css_file.call(null,f_34148);

var G__34149 = seq__34132_34143;
var G__34150 = chunk__34133_34144;
var G__34151 = count__34134_34145;
var G__34152 = (i__34135_34146 + (1));
seq__34132_34143 = G__34149;
chunk__34133_34144 = G__34150;
count__34134_34145 = G__34151;
i__34135_34146 = G__34152;
continue;
} else {
var temp__4657__auto___34154 = cljs.core.seq.call(null,seq__34132_34143);
if(temp__4657__auto___34154){
var seq__34132_34155__$1 = temp__4657__auto___34154;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34132_34155__$1)){
var c__21266__auto___34157 = cljs.core.chunk_first.call(null,seq__34132_34155__$1);
var G__34158 = cljs.core.chunk_rest.call(null,seq__34132_34155__$1);
var G__34159 = c__21266__auto___34157;
var G__34160 = cljs.core.count.call(null,c__21266__auto___34157);
var G__34161 = (0);
seq__34132_34143 = G__34158;
chunk__34133_34144 = G__34159;
count__34134_34145 = G__34160;
i__34135_34146 = G__34161;
continue;
} else {
var f_34163 = cljs.core.first.call(null,seq__34132_34155__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_34163);

var G__34164 = cljs.core.next.call(null,seq__34132_34155__$1);
var G__34165 = null;
var G__34166 = (0);
var G__34167 = (0);
seq__34132_34143 = G__34164;
chunk__34133_34144 = G__34165;
count__34134_34145 = G__34166;
i__34135_34146 = G__34167;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__34130,map__34130__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__34130,map__34130__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1605080727340