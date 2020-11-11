// Compiled by ClojureScript 1.9.229 {}
goog.provide('advenjure.ui.output');
goog.require('cljs.core');
goog.require('jquery');
goog.require('clojure.string');
advenjure.ui.output.echo = (function advenjure$ui$output$echo(text){
return $("#terminal").terminal().echo(text);
});
advenjure.ui.output.clear = (function advenjure$ui$output$clear(){
return $("#terminal").terminal().clear();
});
advenjure.ui.output.init = (function advenjure$ui$output$init(){
return $("#terminal").terminal((function (){
return null;
}),(function (){var obj22796 = {"prompt":"advenjure> ","greetings":false,"scrollOnEcho":true,"clear":false,"exit":false};
return obj22796;
})());
});
advenjure.ui.output.print = (function advenjure$ui$output$print(var_args){
var args__21537__auto__ = [];
var len__21530__auto___22806 = arguments.length;
var i__21531__auto___22807 = (0);
while(true){
if((i__21531__auto___22807 < len__21530__auto___22806)){
args__21537__auto__.push((arguments[i__21531__auto___22807]));

var G__22810 = (i__21531__auto___22807 + (1));
i__21531__auto___22807 = G__22810;
continue;
} else {
}
break;
}

var argseq__21538__auto__ = ((((0) < args__21537__auto__.length))?(new cljs.core.IndexedSeq(args__21537__auto__.slice((0)),(0),null)):null);
return advenjure.ui.output.print.cljs$core$IFn$_invoke$arity$variadic(argseq__21538__auto__);
});

advenjure.ui.output.print.cljs$core$IFn$_invoke$arity$variadic = (function (strs){
var joined = cljs.core.apply.call(null,cljs.core.str,(function (){var or__20455__auto__ = strs;
if(cljs.core.truth_(or__20455__auto__)){
return or__20455__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [" "], null);
}
})());
var previous = (function (){var or__20455__auto__ = (window["_term_buffer"]);
if(cljs.core.truth_(or__20455__auto__)){
return or__20455__auto__;
} else {
return "";
}
})();
return (window["_term_buffer"] = [cljs.core.str(previous),cljs.core.str(joined)].join(''));
});

advenjure.ui.output.print.cljs$lang$maxFixedArity = (0);

advenjure.ui.output.print.cljs$lang$applyTo = (function (seq22800){
return advenjure.ui.output.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22800));
});

advenjure.ui.output.print_line = (function advenjure$ui$output$print_line(var_args){
var args__21537__auto__ = [];
var len__21530__auto___22838 = arguments.length;
var i__21531__auto___22842 = (0);
while(true){
if((i__21531__auto___22842 < len__21530__auto___22838)){
args__21537__auto__.push((arguments[i__21531__auto___22842]));

var G__22843 = (i__21531__auto___22842 + (1));
i__21531__auto___22842 = G__22843;
continue;
} else {
}
break;
}

var argseq__21538__auto__ = ((((0) < args__21537__auto__.length))?(new cljs.core.IndexedSeq(args__21537__auto__.slice((0)),(0),null)):null);
return advenjure.ui.output.print_line.cljs$core$IFn$_invoke$arity$variadic(argseq__21538__auto__);
});

advenjure.ui.output.print_line.cljs$core$IFn$_invoke$arity$variadic = (function (strs){
var joined = cljs.core.apply.call(null,cljs.core.str,(function (){var or__20455__auto__ = strs;
if(cljs.core.truth_(or__20455__auto__)){
return or__20455__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [" "], null);
}
})());
var nonblank = ((clojure.string.blank_QMARK_.call(null,joined))?" ":joined);
var previous = (function (){var or__20455__auto__ = (window["_term_buffer"]);
if(cljs.core.truth_(or__20455__auto__)){
return or__20455__auto__;
} else {
return "";
}
})();
(window["_term_buffer"] = "");

advenjure.ui.output.echo.call(null,[cljs.core.str(previous),cljs.core.str(nonblank)].join(''));

return null;
});

advenjure.ui.output.print_line.cljs$lang$maxFixedArity = (0);

advenjure.ui.output.print_line.cljs$lang$applyTo = (function (seq22820){
return advenjure.ui.output.print_line.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22820));
});

advenjure.ui.output.write_file = (function advenjure$ui$output$write_file(file,value){
return (localStorage[file] = cljs.core.pr_str.call(null,value));
});

//# sourceMappingURL=output.js.map?rel=1605080716845