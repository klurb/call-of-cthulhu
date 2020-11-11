// Compiled by ClojureScript 1.9.229 {}
goog.provide('figwheel.connect');
goog.require('cljs.core');
goog.require('advenjure.ui.input');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
goog.require('cthulhu.core');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),true,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),(function() { 
var G__40106__delegate = function (x){
if(cljs.core.truth_(advenjure.ui.input.figwheel_cleanup)){
return cljs.core.apply.call(null,advenjure.ui.input.figwheel_cleanup,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :before-jsload hook 'advenjure.ui.input/figwheel-cleanup' is missing");
}
};
var G__40106 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__40107__i = 0, G__40107__a = new Array(arguments.length -  0);
while (G__40107__i < G__40107__a.length) {G__40107__a[G__40107__i] = arguments[G__40107__i + 0]; ++G__40107__i;}
  x = new cljs.core.IndexedSeq(G__40107__a,0);
} 
return G__40106__delegate.call(this,x);};
G__40106.cljs$lang$maxFixedArity = 0;
G__40106.cljs$lang$applyTo = (function (arglist__40108){
var x = cljs.core.seq(arglist__40108);
return G__40106__delegate(x);
});
G__40106.cljs$core$IFn$_invoke$arity$variadic = G__40106__delegate;
return G__40106;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));

//# sourceMappingURL=connect.js.map?rel=1605080731811