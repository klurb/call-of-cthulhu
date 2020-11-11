// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.core$macros');
goog.require('cljs.core');
goog.require('cljs.compiler');
goog.require('cljs.core');
goog.require('cljs.env');
goog.require('cljs.analyzer');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('clojure.walk');
/**
 * Threads the expr through the forms. Inserts x as the
 *   second item in the first form, making a list of it if it is not a
 *   list already. If there are more forms, inserts the first form as the
 *   second item in second form, etc.
 */
cljs.core$macros.__GT_ = (function cljs$core$macros$__GT_(var_args){
var args__21537__auto__ = [];
var len__21530__auto___29705 = arguments.length;
var i__21531__auto___29706 = (0);
while(true){
if((i__21531__auto___29706 < len__21530__auto___29705)){
args__21537__auto__.push((arguments[i__21531__auto___29706]));

var G__29707 = (i__21531__auto___29706 + (1));
i__21531__auto___29706 = G__29707;
continue;
} else {
}
break;
}

var argseq__21538__auto__ = ((((3) < args__21537__auto__.length))?(new cljs.core.IndexedSeq(args__21537__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__21538__auto__);
});

cljs.core$macros.__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,forms){
var x__$1 = x;
var forms__$1 = forms;
while(true){
if(cljs.core.truth_(forms__$1)){
var form = cljs.core.first.call(null,forms__$1);
var threaded = ((cljs.core.seq_QMARK_.call(null,form))?cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__21289__auto__ = cljs.core.first.call(null,form);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = x__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),cljs.core.next.call(null,form)))),cljs.core.meta.call(null,form)):(function (){var x__21289__auto__ = form;
return cljs.core._conj.call(null,(function (){var x__21289__auto____$1 = x__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto____$1);
})(),x__21289__auto__);
})());
var G__29708 = threaded;
var G__29709 = cljs.core.next.call(null,forms__$1);
x__$1 = G__29708;
forms__$1 = G__29709;
continue;
} else {
return x__$1;
}
break;
}
});

cljs.core$macros.__GT_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.__GT_.cljs$lang$applyTo = (function (seq29701){
var G__29702 = cljs.core.first.call(null,seq29701);
var seq29701__$1 = cljs.core.next.call(null,seq29701);
var G__29703 = cljs.core.first.call(null,seq29701__$1);
var seq29701__$2 = cljs.core.next.call(null,seq29701__$1);
var G__29704 = cljs.core.first.call(null,seq29701__$2);
var seq29701__$3 = cljs.core.next.call(null,seq29701__$2);
return cljs.core$macros.__GT_.cljs$core$IFn$_invoke$arity$variadic(G__29702,G__29703,G__29704,seq29701__$3);
});


cljs.core$macros.__GT_.cljs$lang$macro = true;
/**
 * Threads the expr through the forms. Inserts x as the
 *   last item in the first form, making a list of it if it is not a
 *   list already. If there are more forms, inserts the first form as the
 *   last item in second form, etc.
 */
cljs.core$macros.__GT__GT_ = (function cljs$core$macros$__GT__GT_(var_args){
var args__21537__auto__ = [];
var len__21530__auto___29721 = arguments.length;
var i__21531__auto___29723 = (0);
while(true){
if((i__21531__auto___29723 < len__21530__auto___29721)){
args__21537__auto__.push((arguments[i__21531__auto___29723]));

var G__29725 = (i__21531__auto___29723 + (1));
i__21531__auto___29723 = G__29725;
continue;
} else {
}
break;
}

var argseq__21538__auto__ = ((((3) < args__21537__auto__.length))?(new cljs.core.IndexedSeq(args__21537__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.__GT__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__21538__auto__);
});

cljs.core$macros.__GT__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,forms){
var x__$1 = x;
var forms__$1 = forms;
while(true){
if(cljs.core.truth_(forms__$1)){
var form = cljs.core.first.call(null,forms__$1);
var threaded = ((cljs.core.seq_QMARK_.call(null,form))?cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__21289__auto__ = cljs.core.first.call(null,form);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),cljs.core.next.call(null,form),(function (){var x__21289__auto__ = x__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})()))),cljs.core.meta.call(null,form)):(function (){var x__21289__auto__ = form;
return cljs.core._conj.call(null,(function (){var x__21289__auto____$1 = x__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto____$1);
})(),x__21289__auto__);
})());
var G__29726 = threaded;
var G__29727 = cljs.core.next.call(null,forms__$1);
x__$1 = G__29726;
forms__$1 = G__29727;
continue;
} else {
return x__$1;
}
break;
}
});

cljs.core$macros.__GT__GT_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.__GT__GT_.cljs$lang$applyTo = (function (seq29715){
var G__29716 = cljs.core.first.call(null,seq29715);
var seq29715__$1 = cljs.core.next.call(null,seq29715);
var G__29717 = cljs.core.first.call(null,seq29715__$1);
var seq29715__$2 = cljs.core.next.call(null,seq29715__$1);
var G__29718 = cljs.core.first.call(null,seq29715__$2);
var seq29715__$3 = cljs.core.next.call(null,seq29715__$2);
return cljs.core$macros.__GT__GT_.cljs$core$IFn$_invoke$arity$variadic(G__29716,G__29717,G__29718,seq29715__$3);
});


cljs.core$macros.__GT__GT_.cljs$lang$macro = true;
/**
 * form => fieldName-symbol or (instanceMethodName-symbol args*)
 * 
 *   Expands into a member access (.) of the first member on the first
 *   argument, followed by the next member on the result, etc. For
 *   instance:
 * 
 *   (.. System (getProperties) (get "os.name"))
 * 
 *   expands to:
 * 
 *   (. (. System (getProperties)) (get "os.name"))
 * 
 *   but is easier to write, read, and understand.
 */
cljs.core$macros._DOT__DOT_ = (function cljs$core$macros$_DOT__DOT_(var_args){
var args29728 = [];
var len__21530__auto___29736 = arguments.length;
var i__21531__auto___29737 = (0);
while(true){
if((i__21531__auto___29737 < len__21530__auto___29736)){
args29728.push((arguments[i__21531__auto___29737]));

var G__29738 = (i__21531__auto___29737 + (1));
i__21531__auto___29737 = G__29738;
continue;
} else {
}
break;
}

var G__29735 = args29728.length;
switch (G__29735) {
case 4:
return cljs.core$macros._DOT__DOT_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__21549__auto__ = (new cljs.core.IndexedSeq(args29728.slice((4)),(0),null));
return cljs.core$macros._DOT__DOT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__21549__auto__);

}
});

cljs.core$macros._DOT__DOT_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,form){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__21289__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
});

cljs.core$macros._DOT__DOT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,form,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"..","..",-300507420,null)),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__21289__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),more)));
});

cljs.core$macros._DOT__DOT_.cljs$lang$applyTo = (function (seq29729){
var G__29730 = cljs.core.first.call(null,seq29729);
var seq29729__$1 = cljs.core.next.call(null,seq29729);
var G__29731 = cljs.core.first.call(null,seq29729__$1);
var seq29729__$2 = cljs.core.next.call(null,seq29729__$1);
var G__29732 = cljs.core.first.call(null,seq29729__$2);
var seq29729__$3 = cljs.core.next.call(null,seq29729__$2);
var G__29733 = cljs.core.first.call(null,seq29729__$3);
var seq29729__$4 = cljs.core.next.call(null,seq29729__$3);
return cljs.core$macros._DOT__DOT_.cljs$core$IFn$_invoke$arity$variadic(G__29730,G__29731,G__29732,G__29733,seq29729__$4);
});

cljs.core$macros._DOT__DOT_.cljs$lang$maxFixedArity = (4);


cljs.core$macros._DOT__DOT_.cljs$lang$macro = true;
/**
 * Ignores body, yields nil
 */
cljs.core$macros.comment = (function cljs$core$macros$comment(var_args){
var args__21537__auto__ = [];
var len__21530__auto___29743 = arguments.length;
var i__21531__auto___29744 = (0);
while(true){
if((i__21531__auto___29744 < len__21530__auto___29743)){
args__21537__auto__.push((arguments[i__21531__auto___29744]));

var G__29745 = (i__21531__auto___29744 + (1));
i__21531__auto___29744 = G__29745;
continue;
} else {
}
break;
}

var argseq__21538__auto__ = ((((2) < args__21537__auto__.length))?(new cljs.core.IndexedSeq(args__21537__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.comment.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__21538__auto__);
});

cljs.core$macros.comment.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return null;
});

cljs.core$macros.comment.cljs$lang$maxFixedArity = (2);

cljs.core$macros.comment.cljs$lang$applyTo = (function (seq29740){
var G__29741 = cljs.core.first.call(null,seq29740);
var seq29740__$1 = cljs.core.next.call(null,seq29740);
var G__29742 = cljs.core.first.call(null,seq29740__$1);
var seq29740__$2 = cljs.core.next.call(null,seq29740__$1);
return cljs.core$macros.comment.cljs$core$IFn$_invoke$arity$variadic(G__29741,G__29742,seq29740__$2);
});


cljs.core$macros.comment.cljs$lang$macro = true;
/**
 * Takes a set of test/expr pairs. It evaluates each test one at a
 *   time.  If a test returns logical true, cond evaluates and returns
 *   the value of the corresponding expr and doesn't evaluate any of the
 *   other tests or exprs. (cond) returns nil.
 */
cljs.core$macros.cond = (function cljs$core$macros$cond(var_args){
var args__21537__auto__ = [];
var len__21530__auto___29749 = arguments.length;
var i__21531__auto___29750 = (0);
while(true){
if((i__21531__auto___29750 < len__21530__auto___29749)){
args__21537__auto__.push((arguments[i__21531__auto___29750]));

var G__29751 = (i__21531__auto___29750 + (1));
i__21531__auto___29750 = G__29751;
continue;
} else {
}
break;
}

var argseq__21538__auto__ = ((((2) < args__21537__auto__.length))?(new cljs.core.IndexedSeq(args__21537__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.cond.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__21538__auto__);
});

cljs.core$macros.cond.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,clauses){
if(cljs.core.truth_(clauses)){
return cljs.core._conj.call(null,(function (){var x__21289__auto__ = cljs.core.first.call(null,clauses);
return cljs.core._conj.call(null,(function (){var x__21289__auto____$1 = ((cljs.core.next.call(null,clauses))?cljs.core.second.call(null,clauses):(function(){throw (new Error("cond requires an even number of forms"))})());
return cljs.core._conj.call(null,(function (){var x__21289__auto____$2 = cljs.core.cons.call(null,new cljs.core.Symbol("cljs.core","cond","cljs.core/cond",2005388338,null),cljs.core.next.call(null,cljs.core.next.call(null,clauses)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto____$2);
})(),x__21289__auto____$1);
})(),x__21289__auto__);
})(),new cljs.core.Symbol(null,"if","if",1181717262,null));
} else {
return null;
}
});

cljs.core$macros.cond.cljs$lang$maxFixedArity = (2);

cljs.core$macros.cond.cljs$lang$applyTo = (function (seq29746){
var G__29747 = cljs.core.first.call(null,seq29746);
var seq29746__$1 = cljs.core.next.call(null,seq29746);
var G__29748 = cljs.core.first.call(null,seq29746__$1);
var seq29746__$2 = cljs.core.next.call(null,seq29746__$1);
return cljs.core$macros.cond.cljs$core$IFn$_invoke$arity$variadic(G__29747,G__29748,seq29746__$2);
});


cljs.core$macros.cond.cljs$lang$macro = true;
/**
 * defs the supplied var names with no bindings, useful for making forward declarations.
 */
cljs.core$macros.declare = (function cljs$core$macros$declare(var_args){
var args__21537__auto__ = [];
var len__21530__auto___29756 = arguments.length;
var i__21531__auto___29757 = (0);
while(true){
if((i__21531__auto___29757 < len__21530__auto___29756)){
args__21537__auto__.push((arguments[i__21531__auto___29757]));

var G__29758 = (i__21531__auto___29757 + (1));
i__21531__auto___29757 = G__29758;
continue;
} else {
}
break;
}

var argseq__21538__auto__ = ((((2) < args__21537__auto__.length))?(new cljs.core.IndexedSeq(args__21537__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.declare.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__21538__auto__);
});

cljs.core$macros.declare.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,names){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),cljs.core.map.call(null,(function (p1__29752_SHARP_){
return cljs.core._conj.call(null,(function (){var x__21289__auto__ = cljs.core.vary_meta.call(null,p1__29752_SHARP_,cljs.core.assoc,new cljs.core.Keyword(null,"declared","declared",92336021),true);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),new cljs.core.Symbol(null,"def","def",597100991,null));
}),names))));
});

cljs.core$macros.declare.cljs$lang$maxFixedArity = (2);

cljs.core$macros.declare.cljs$lang$applyTo = (function (seq29753){
var G__29754 = cljs.core.first.call(null,seq29753);
var seq29753__$1 = cljs.core.next.call(null,seq29753);
var G__29755 = cljs.core.first.call(null,seq29753__$1);
var seq29753__$2 = cljs.core.next.call(null,seq29753__$1);
return cljs.core$macros.declare.cljs$core$IFn$_invoke$arity$variadic(G__29754,G__29755,seq29753__$2);
});


cljs.core$macros.declare.cljs$lang$macro = true;
/**
 * Evaluates x then calls all of the methods and functions with the
 *   value of x supplied at the front of the given arguments.  The forms
 *   are evaluated in order.  Returns x.
 * 
 *   (doto (new java.util.HashMap) (.put "a" 1) (.put "b" 2))
 */
cljs.core$macros.doto = (function cljs$core$macros$doto(var_args){
var args__21537__auto__ = [];
var len__21530__auto___29763 = arguments.length;
var i__21531__auto___29764 = (0);
while(true){
if((i__21531__auto___29764 < len__21530__auto___29763)){
args__21537__auto__.push((arguments[i__21531__auto___29764]));

var G__29765 = (i__21531__auto___29764 + (1));
i__21531__auto___29764 = G__29765;
continue;
} else {
}
break;
}

var argseq__21538__auto__ = ((((3) < args__21537__auto__.length))?(new cljs.core.IndexedSeq(args__21537__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.doto.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__21538__auto__);
});

cljs.core$macros.doto.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,forms){
var gx = cljs.core.gensym.call(null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__21289__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__21289__auto__ = gx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),cljs.core.map.call(null,((function (gx){
return (function (f){
if(cljs.core.seq_QMARK_.call(null,f)){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__21289__auto__ = cljs.core.first.call(null,f);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = gx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),cljs.core.next.call(null,f))));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__21289__auto__ = f;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = gx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
}
});})(gx))
,forms),(function (){var x__21289__auto__ = gx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
});

cljs.core$macros.doto.cljs$lang$maxFixedArity = (3);

cljs.core$macros.doto.cljs$lang$applyTo = (function (seq29759){
var G__29760 = cljs.core.first.call(null,seq29759);
var seq29759__$1 = cljs.core.next.call(null,seq29759);
var G__29761 = cljs.core.first.call(null,seq29759__$1);
var seq29759__$2 = cljs.core.next.call(null,seq29759__$1);
var G__29762 = cljs.core.first.call(null,seq29759__$2);
var seq29759__$3 = cljs.core.next.call(null,seq29759__$2);
return cljs.core$macros.doto.cljs$core$IFn$_invoke$arity$variadic(G__29760,G__29761,G__29762,seq29759__$3);
});


cljs.core$macros.doto.cljs$lang$macro = true;
cljs.core$macros.parse_impls = (function cljs$core$macros$parse_impls(specs){
var ret = cljs.core.PersistentArrayMap.EMPTY;
var s = specs;
while(true){
if(cljs.core.seq.call(null,s)){
var G__29766 = cljs.core.assoc.call(null,ret,cljs.core.first.call(null,s),cljs.core.take_while.call(null,cljs.core.seq_QMARK_,cljs.core.next.call(null,s)));
var G__29767 = cljs.core.drop_while.call(null,cljs.core.seq_QMARK_,cljs.core.next.call(null,s));
ret = G__29766;
s = G__29767;
continue;
} else {
return ret;
}
break;
}
});
cljs.core$macros.emit_extend_protocol = (function cljs$core$macros$emit_extend_protocol(p,specs){
var impls = cljs.core$macros.parse_impls.call(null,specs);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),cljs.core.map.call(null,((function (impls){
return (function (p__29772){
var vec__29773 = p__29772;
var t = cljs.core.nth.call(null,vec__29773,(0),null);
var fs = cljs.core.nth.call(null,vec__29773,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","extend-type","cljs.core$macros/extend-type",1713295201,null)),(function (){var x__21289__auto__ = t;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = p;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),fs)));
});})(impls))
,impls))));
});
/**
 * Useful when you want to provide several implementations of the same
 *   protocol all at once. Takes a single protocol and the implementation
 *   of that protocol for one or more types. Expands into calls to
 *   extend-type:
 * 
 *   (extend-protocol Protocol
 *     AType
 *       (foo [x] ...)
 *       (bar [x y] ...)
 *     BType
 *       (foo [x] ...)
 *       (bar [x y] ...)
 *     AClass
 *       (foo [x] ...)
 *       (bar [x y] ...)
 *     nil
 *       (foo [x] ...)
 *       (bar [x y] ...))
 * 
 *   expands into:
 * 
 *   (do
 *    (clojure.core/extend-type AType Protocol
 *      (foo [x] ...)
 *      (bar [x y] ...))
 *    (clojure.core/extend-type BType Protocol
 *      (foo [x] ...)
 *      (bar [x y] ...))
 *    (clojure.core/extend-type AClass Protocol
 *      (foo [x] ...)
 *      (bar [x y] ...))
 *    (clojure.core/extend-type nil Protocol
 *      (foo [x] ...)
 *      (bar [x y] ...)))
 */
cljs.core$macros.extend_protocol = (function cljs$core$macros$extend_protocol(var_args){
var args__21537__auto__ = [];
var len__21530__auto___29780 = arguments.length;
var i__21531__auto___29781 = (0);
while(true){
if((i__21531__auto___29781 < len__21530__auto___29780)){
args__21537__auto__.push((arguments[i__21531__auto___29781]));

var G__29782 = (i__21531__auto___29781 + (1));
i__21531__auto___29781 = G__29782;
continue;
} else {
}
break;
}

var argseq__21538__auto__ = ((((3) < args__21537__auto__.length))?(new cljs.core.IndexedSeq(args__21537__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.extend_protocol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__21538__auto__);
});

cljs.core$macros.extend_protocol.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p,specs){
return cljs.core$macros.emit_extend_protocol.call(null,p,specs);
});

cljs.core$macros.extend_protocol.cljs$lang$maxFixedArity = (3);

cljs.core$macros.extend_protocol.cljs$lang$applyTo = (function (seq29776){
var G__29777 = cljs.core.first.call(null,seq29776);
var seq29776__$1 = cljs.core.next.call(null,seq29776);
var G__29778 = cljs.core.first.call(null,seq29776__$1);
var seq29776__$2 = cljs.core.next.call(null,seq29776__$1);
var G__29779 = cljs.core.first.call(null,seq29776__$2);
var seq29776__$3 = cljs.core.next.call(null,seq29776__$2);
return cljs.core$macros.extend_protocol.cljs$core$IFn$_invoke$arity$variadic(G__29777,G__29778,G__29779,seq29776__$3);
});


cljs.core$macros.extend_protocol.cljs$lang$macro = true;
cljs.core$macros.maybe_destructured = (function cljs$core$macros$maybe_destructured(params,body){
if(cljs.core.every_QMARK_.call(null,cljs.core.symbol_QMARK_,params)){
return cljs.core.cons.call(null,params,body);
} else {
var params__$1 = params;
var new_params = cljs.core.with_meta.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.meta.call(null,params__$1));
var lets = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.truth_(params__$1)){
if((cljs.core.first.call(null,params__$1) instanceof cljs.core.Symbol)){
var G__29783 = cljs.core.next.call(null,params__$1);
var G__29784 = cljs.core.conj.call(null,new_params,cljs.core.first.call(null,params__$1));
var G__29785 = lets;
params__$1 = G__29783;
new_params = G__29784;
lets = G__29785;
continue;
} else {
var gparam = cljs.core.gensym.call(null,"p__");
var G__29786 = cljs.core.next.call(null,params__$1);
var G__29787 = cljs.core.conj.call(null,new_params,gparam);
var G__29788 = cljs.core.conj.call(null,cljs.core.conj.call(null,lets,cljs.core.first.call(null,params__$1)),gparam);
params__$1 = G__29786;
new_params = G__29787;
lets = G__29788;
continue;
}
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__21289__auto__ = new_params;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__21289__auto__ = lets;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
}
break;
}
}
});
/**
 * params => positional-params* , or positional-params* & next-param
 *   positional-param => binding-form
 *   next-param => binding-form
 *   name => symbol
 * 
 *   Defines a function
 */
cljs.core$macros.fn = (function cljs$core$macros$fn(var_args){
var args__21537__auto__ = [];
var len__21530__auto___29795 = arguments.length;
var i__21531__auto___29796 = (0);
while(true){
if((i__21531__auto___29796 < len__21530__auto___29795)){
args__21537__auto__.push((arguments[i__21531__auto___29796]));

var G__29797 = (i__21531__auto___29796 + (1));
i__21531__auto___29796 = G__29797;
continue;
} else {
}
break;
}

var argseq__21538__auto__ = ((((2) < args__21537__auto__.length))?(new cljs.core.IndexedSeq(args__21537__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.fn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__21538__auto__);
});

cljs.core$macros.fn.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,sigs){
var name = (((cljs.core.first.call(null,sigs) instanceof cljs.core.Symbol))?cljs.core.first.call(null,sigs):null);
var sigs__$1 = (cljs.core.truth_(name)?cljs.core.next.call(null,sigs):sigs);
var sigs__$2 = ((cljs.core.vector_QMARK_.call(null,cljs.core.first.call(null,sigs__$1)))?(function (){var x__21289__auto__ = sigs__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})():((cljs.core.seq_QMARK_.call(null,cljs.core.first.call(null,sigs__$1)))?sigs__$1:(function(){throw (new Error(((cljs.core.seq.call(null,sigs__$1))?[cljs.core.str("Parameter declaration "),cljs.core.str(cljs.core.first.call(null,sigs__$1)),cljs.core.str(" should be a vector")].join(''):[cljs.core.str("Parameter declaration missing")].join(''))))})()));
var psig = ((function (name,sigs__$1,sigs__$2){
return (function (sig){
if(!(cljs.core.seq_QMARK_.call(null,sig))){
throw (new Error([cljs.core.str("Invalid signature "),cljs.core.str(sig),cljs.core.str(" should be a list")].join('')));
} else {
}

var vec__29792 = sig;
var seq__29793 = cljs.core.seq.call(null,vec__29792);
var first__29794 = cljs.core.first.call(null,seq__29793);
var seq__29793__$1 = cljs.core.next.call(null,seq__29793);
var params = first__29794;
var body = seq__29793__$1;
var _ = ((!(cljs.core.vector_QMARK_.call(null,params)))?(function(){throw (new Error(((cljs.core.seq_QMARK_.call(null,cljs.core.first.call(null,sigs__$2)))?[cljs.core.str("Parameter declaration "),cljs.core.str(params),cljs.core.str(" should be a vector")].join(''):[cljs.core.str("Invalid signature "),cljs.core.str(sig),cljs.core.str(" should be a list")].join(''))))})():null);
var conds = (((cljs.core.next.call(null,body)) && (cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))))?cljs.core.first.call(null,body):null);
var body__$1 = (cljs.core.truth_(conds)?cljs.core.next.call(null,body):body);
var conds__$1 = (function (){var or__20455__auto__ = conds;
if(cljs.core.truth_(or__20455__auto__)){
return or__20455__auto__;
} else {
return cljs.core.meta.call(null,params);
}
})();
var pre = new cljs.core.Keyword(null,"pre","pre",2118456869).cljs$core$IFn$_invoke$arity$1(conds__$1);
var post = new cljs.core.Keyword(null,"post","post",269697687).cljs$core$IFn$_invoke$arity$1(conds__$1);
var body__$2 = (cljs.core.truth_(post)?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__21289__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"%","%",-950237169,null)),(function (){var x__21289__auto__ = ((((1) < cljs.core.count.call(null,body__$1)))?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),body__$1))):cljs.core.first.call(null,body__$1));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),cljs.core.map.call(null,((function (vec__29792,seq__29793,first__29794,seq__29793__$1,params,body,_,conds,body__$1,conds__$1,pre,post,name,sigs__$1,sigs__$2){
return (function (c){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","assert","cljs.core$macros/assert",1333198789,null)),(function (){var x__21289__auto__ = c;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
});})(vec__29792,seq__29793,first__29794,seq__29793__$1,params,body,_,conds,body__$1,conds__$1,pre,post,name,sigs__$1,sigs__$2))
,post),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"%","%",-950237169,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})()))):body__$1);
var body__$3 = (cljs.core.truth_(pre)?cljs.core.concat.call(null,cljs.core.map.call(null,((function (vec__29792,seq__29793,first__29794,seq__29793__$1,params,body,_,conds,body__$1,conds__$1,pre,post,body__$2,name,sigs__$1,sigs__$2){
return (function (c){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","assert","cljs.core$macros/assert",1333198789,null)),(function (){var x__21289__auto__ = c;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
});})(vec__29792,seq__29793,first__29794,seq__29793__$1,params,body,_,conds,body__$1,conds__$1,pre,post,body__$2,name,sigs__$1,sigs__$2))
,pre),body__$2):body__$2);
return cljs.core$macros.maybe_destructured.call(null,params,body__$3);
});})(name,sigs__$1,sigs__$2))
;
var new_sigs = cljs.core.map.call(null,psig,sigs__$2);
return cljs.core.with_meta.call(null,(cljs.core.truth_(name)?cljs.core.list_STAR_.call(null,new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),name,new_sigs):cljs.core.cons.call(null,new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new_sigs)),cljs.core.meta.call(null,_AMPERSAND_form));
});

cljs.core$macros.fn.cljs$lang$maxFixedArity = (2);

cljs.core$macros.fn.cljs$lang$applyTo = (function (seq29789){
var G__29790 = cljs.core.first.call(null,seq29789);
var seq29789__$1 = cljs.core.next.call(null,seq29789);
var G__29791 = cljs.core.first.call(null,seq29789__$1);
var seq29789__$2 = cljs.core.next.call(null,seq29789__$1);
return cljs.core$macros.fn.cljs$core$IFn$_invoke$arity$variadic(G__29790,G__29791,seq29789__$2);
});


cljs.core$macros.fn.cljs$lang$macro = true;
/**
 * same as defn, yielding non-public def
 */
cljs.core$macros.defn_ = (function cljs$core$macros$defn_(var_args){
var args__21537__auto__ = [];
var len__21530__auto___29802 = arguments.length;
var i__21531__auto___29803 = (0);
while(true){
if((i__21531__auto___29803 < len__21530__auto___29802)){
args__21537__auto__.push((arguments[i__21531__auto___29803]));

var G__29804 = (i__21531__auto___29803 + (1));
i__21531__auto___29803 = G__29804;
continue;
} else {
}
break;
}

var argseq__21538__auto__ = ((((3) < args__21537__auto__.length))?(new cljs.core.IndexedSeq(args__21537__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.defn_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__21538__auto__);
});

cljs.core$macros.defn_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,decls){
return cljs.core.list_STAR_.call(null,new cljs.core.Symbol("cljs.core$macros","defn","cljs.core$macros/defn",-728332354,null),cljs.core.with_meta.call(null,name,cljs.core.assoc.call(null,cljs.core.meta.call(null,name),new cljs.core.Keyword(null,"private","private",-558947994),true)),decls);
});

cljs.core$macros.defn_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.defn_.cljs$lang$applyTo = (function (seq29798){
var G__29799 = cljs.core.first.call(null,seq29798);
var seq29798__$1 = cljs.core.next.call(null,seq29798);
var G__29800 = cljs.core.first.call(null,seq29798__$1);
var seq29798__$2 = cljs.core.next.call(null,seq29798__$1);
var G__29801 = cljs.core.first.call(null,seq29798__$2);
var seq29798__$3 = cljs.core.next.call(null,seq29798__$2);
return cljs.core$macros.defn_.cljs$core$IFn$_invoke$arity$variadic(G__29799,G__29800,G__29801,seq29798__$3);
});


cljs.core$macros.defn_.cljs$lang$macro = true;
/**
 * bindings => binding-form test
 * 
 *   If test is true, evaluates then with binding-form bound to the value of
 *   test, if not, yields else
 */
cljs.core$macros.if_let = (function cljs$core$macros$if_let(var_args){
var args29806 = [];
var len__21530__auto___29815 = arguments.length;
var i__21531__auto___29816 = (0);
while(true){
if((i__21531__auto___29816 < len__21530__auto___29815)){
args29806.push((arguments[i__21531__auto___29816]));

var G__29817 = (i__21531__auto___29816 + (1));
i__21531__auto___29816 = G__29817;
continue;
} else {
}
break;
}

var G__29814 = args29806.length;
switch (G__29814) {
case 4:
return cljs.core$macros.if_let.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__21549__auto__ = (new cljs.core.IndexedSeq(args29806.slice((5)),(0),null));
return cljs.core$macros.if_let.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__21549__auto__);

}
});

cljs.core$macros.if_let.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,then){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-let","cljs.core$macros/if-let",1291543946,null)),(function (){var x__21289__auto__ = bindings;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = then;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
});

cljs.core$macros.if_let.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,then,else$,oldform){
if(cljs.core.vector_QMARK_.call(null,bindings)){
} else {
throw cljs.core.ex_info.call(null,"if-let requires a vector for its binding",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core.empty_QMARK_.call(null,oldform)){
} else {
throw cljs.core.ex_info.call(null,"if-let requires 1 or 2 forms after binding vector",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core._EQ_.call(null,(2),cljs.core.count.call(null,bindings))){
} else {
throw cljs.core.ex_info.call(null,"if-let requires exactly 2 forms in binding vector",cljs.core.PersistentArrayMap.EMPTY);
}


var form = bindings.call(null,(0));
var tst = bindings.call(null,(1));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__21289__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__29805__auto__","temp__29805__auto__",-1225122205,null)),(function (){var x__21289__auto__ = tst;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__29805__auto__","temp__29805__auto__",-1225122205,null)),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__21289__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__21289__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__29805__auto__","temp__29805__auto__",-1225122205,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = then;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = else$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
});

cljs.core$macros.if_let.cljs$lang$applyTo = (function (seq29807){
var G__29808 = cljs.core.first.call(null,seq29807);
var seq29807__$1 = cljs.core.next.call(null,seq29807);
var G__29809 = cljs.core.first.call(null,seq29807__$1);
var seq29807__$2 = cljs.core.next.call(null,seq29807__$1);
var G__29810 = cljs.core.first.call(null,seq29807__$2);
var seq29807__$3 = cljs.core.next.call(null,seq29807__$2);
var G__29811 = cljs.core.first.call(null,seq29807__$3);
var seq29807__$4 = cljs.core.next.call(null,seq29807__$3);
var G__29812 = cljs.core.first.call(null,seq29807__$4);
var seq29807__$5 = cljs.core.next.call(null,seq29807__$4);
return cljs.core$macros.if_let.cljs$core$IFn$_invoke$arity$variadic(G__29808,G__29809,G__29810,G__29811,G__29812,seq29807__$5);
});

cljs.core$macros.if_let.cljs$lang$maxFixedArity = (5);


cljs.core$macros.if_let.cljs$lang$macro = true;
/**
 * Evaluates test. If logical false, evaluates and returns then expr,
 *   otherwise else expr, if supplied, else nil.
 */
cljs.core$macros.if_not = (function cljs$core$macros$if_not(var_args){
var args29819 = [];
var len__21530__auto___29822 = arguments.length;
var i__21531__auto___29823 = (0);
while(true){
if((i__21531__auto___29823 < len__21530__auto___29822)){
args29819.push((arguments[i__21531__auto___29823]));

var G__29824 = (i__21531__auto___29823 + (1));
i__21531__auto___29823 = G__29824;
continue;
} else {
}
break;
}

var G__29821 = args29819.length;
switch (G__29821) {
case 4:
return cljs.core$macros.if_not.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core$macros.if_not.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str((args29819.length - (2)))].join('')));

}
});

cljs.core$macros.if_not.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,test,then){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null)),(function (){var x__21289__auto__ = test;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = then;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
});

cljs.core$macros.if_not.cljs$core$IFn$_invoke$arity$5 = (function (_AMPERSAND_form,_AMPERSAND_env,test,then,else$){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null)),(function (){var x__21289__auto__ = test;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = then;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = else$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
});

cljs.core$macros.if_not.cljs$lang$maxFixedArity = 5;


cljs.core$macros.if_not.cljs$lang$macro = true;
/**
 * fnspec ==> (fname [params*] exprs) or (fname ([params*] exprs)+)
 * 
 *   Takes a vector of function specs and a body, and generates a set of
 *   bindings of functions to their names. All of the names are available
 *   in all of the definitions of the functions, as well as the body.
 */
cljs.core$macros.letfn = (function cljs$core$macros$letfn(var_args){
var args__21537__auto__ = [];
var len__21530__auto___29831 = arguments.length;
var i__21531__auto___29832 = (0);
while(true){
if((i__21531__auto___29832 < len__21530__auto___29831)){
args__21537__auto__.push((arguments[i__21531__auto___29832]));

var G__29833 = (i__21531__auto___29832 + (1));
i__21531__auto___29832 = G__29833;
continue;
} else {
}
break;
}

var argseq__21538__auto__ = ((((3) < args__21537__auto__.length))?(new cljs.core.IndexedSeq(args__21537__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.letfn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__21538__auto__);
});

cljs.core$macros.letfn.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,fnspecs,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"letfn*","letfn*",-110097810,null)),(function (){var x__21289__auto__ = cljs.core.vec.call(null,cljs.core.interleave.call(null,cljs.core.map.call(null,cljs.core.first,fnspecs),cljs.core.map.call(null,(function (p1__29826_SHARP_){
return cljs.core.cons.call(null,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null),p1__29826_SHARP_);
}),fnspecs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),body)));
});

cljs.core$macros.letfn.cljs$lang$maxFixedArity = (3);

cljs.core$macros.letfn.cljs$lang$applyTo = (function (seq29827){
var G__29828 = cljs.core.first.call(null,seq29827);
var seq29827__$1 = cljs.core.next.call(null,seq29827);
var G__29829 = cljs.core.first.call(null,seq29827__$1);
var seq29827__$2 = cljs.core.next.call(null,seq29827__$1);
var G__29830 = cljs.core.first.call(null,seq29827__$2);
var seq29827__$3 = cljs.core.next.call(null,seq29827__$2);
return cljs.core$macros.letfn.cljs$core$IFn$_invoke$arity$variadic(G__29828,G__29829,G__29830,seq29827__$3);
});


cljs.core$macros.letfn.cljs$lang$macro = true;
/**
 * Expands into code that creates a fn that expects to be passed an
 *   object and any args and calls the named instance method on the
 *   object passing the args. Use when you want to treat a Java method as
 *   a first-class fn. name may be type-hinted with the method receiver's
 *   type in order to avoid reflective calls.
 */
cljs.core$macros.memfn = (function cljs$core$macros$memfn(var_args){
var args__21537__auto__ = [];
var len__21530__auto___29838 = arguments.length;
var i__21531__auto___29839 = (0);
while(true){
if((i__21531__auto___29839 < len__21530__auto___29838)){
args__21537__auto__.push((arguments[i__21531__auto___29839]));

var G__29840 = (i__21531__auto___29839 + (1));
i__21531__auto___29839 = G__29840;
continue;
} else {
}
break;
}

var argseq__21538__auto__ = ((((3) < args__21537__auto__.length))?(new cljs.core.IndexedSeq(args__21537__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.memfn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__21538__auto__);
});

cljs.core$macros.memfn.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,args){
var t = cljs.core.with_meta.call(null,cljs.core.gensym.call(null,"target"),cljs.core.meta.call(null,name));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__21289__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__21289__auto__ = t;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),args))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__21289__auto__ = t;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__21289__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),args)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
});

cljs.core$macros.memfn.cljs$lang$maxFixedArity = (3);

cljs.core$macros.memfn.cljs$lang$applyTo = (function (seq29834){
var G__29835 = cljs.core.first.call(null,seq29834);
var seq29834__$1 = cljs.core.next.call(null,seq29834);
var G__29836 = cljs.core.first.call(null,seq29834__$1);
var seq29834__$2 = cljs.core.next.call(null,seq29834__$1);
var G__29837 = cljs.core.first.call(null,seq29834__$2);
var seq29834__$3 = cljs.core.next.call(null,seq29834__$2);
return cljs.core$macros.memfn.cljs$core$IFn$_invoke$arity$variadic(G__29835,G__29836,G__29837,seq29834__$3);
});


cljs.core$macros.memfn.cljs$lang$macro = true;
/**
 * Evaluates test. If logical true, evaluates body in an implicit do.
 */
cljs.core$macros.when = (function cljs$core$macros$when(var_args){
var args__21537__auto__ = [];
var len__21530__auto___29845 = arguments.length;
var i__21531__auto___29846 = (0);
while(true){
if((i__21531__auto___29846 < len__21530__auto___29845)){
args__21537__auto__.push((arguments[i__21531__auto___29846]));

var G__29847 = (i__21531__auto___29846 + (1));
i__21531__auto___29846 = G__29847;
continue;
} else {
}
break;
}

var argseq__21538__auto__ = ((((3) < args__21537__auto__.length))?(new cljs.core.IndexedSeq(args__21537__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__21538__auto__);
});

cljs.core$macros.when.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,test,body){
return cljs.core._conj.call(null,(function (){var x__21289__auto__ = test;
return cljs.core._conj.call(null,(function (){var x__21289__auto____$1 = cljs.core.cons.call(null,new cljs.core.Symbol(null,"do","do",1686842252,null),body);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto____$1);
})(),x__21289__auto__);
})(),new cljs.core.Symbol(null,"if","if",1181717262,null));
});

cljs.core$macros.when.cljs$lang$maxFixedArity = (3);

cljs.core$macros.when.cljs$lang$applyTo = (function (seq29841){
var G__29842 = cljs.core.first.call(null,seq29841);
var seq29841__$1 = cljs.core.next.call(null,seq29841);
var G__29843 = cljs.core.first.call(null,seq29841__$1);
var seq29841__$2 = cljs.core.next.call(null,seq29841__$1);
var G__29844 = cljs.core.first.call(null,seq29841__$2);
var seq29841__$3 = cljs.core.next.call(null,seq29841__$2);
return cljs.core$macros.when.cljs$core$IFn$_invoke$arity$variadic(G__29842,G__29843,G__29844,seq29841__$3);
});


cljs.core$macros.when.cljs$lang$macro = true;
/**
 * bindings => x xs
 * 
 *   Roughly the same as (when (seq xs) (let [x (first xs)] body)) but xs is evaluated only once
 */
cljs.core$macros.when_first = (function cljs$core$macros$when_first(var_args){
var args__21537__auto__ = [];
var len__21530__auto___29856 = arguments.length;
var i__21531__auto___29857 = (0);
while(true){
if((i__21531__auto___29857 < len__21530__auto___29856)){
args__21537__auto__.push((arguments[i__21531__auto___29857]));

var G__29858 = (i__21531__auto___29857 + (1));
i__21531__auto___29857 = G__29858;
continue;
} else {
}
break;
}

var argseq__21538__auto__ = ((((3) < args__21537__auto__.length))?(new cljs.core.IndexedSeq(args__21537__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.when_first.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__21538__auto__);
});

cljs.core$macros.when_first.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
if(cljs.core.vector_QMARK_.call(null,bindings)){
} else {
throw cljs.core.ex_info.call(null,"when-first requires a vector for its binding",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core._EQ_.call(null,(2),cljs.core.count.call(null,bindings))){
} else {
throw cljs.core.ex_info.call(null,"when-first requires exactly 2 forms in binding vector",cljs.core.PersistentArrayMap.EMPTY);
}


var vec__29853 = bindings;
var x = cljs.core.nth.call(null,vec__29853,(0),null);
var xs = cljs.core.nth.call(null,vec__29853,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-let","cljs.core$macros/when-let",-2004472648,null)),(function (){var x__21289__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"xs__29848__auto__","xs__29848__auto__",312896563,null)),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__21289__auto__ = xs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__21289__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__21289__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"xs__29848__auto__","xs__29848__auto__",312896563,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
});

cljs.core$macros.when_first.cljs$lang$maxFixedArity = (3);

cljs.core$macros.when_first.cljs$lang$applyTo = (function (seq29849){
var G__29850 = cljs.core.first.call(null,seq29849);
var seq29849__$1 = cljs.core.next.call(null,seq29849);
var G__29851 = cljs.core.first.call(null,seq29849__$1);
var seq29849__$2 = cljs.core.next.call(null,seq29849__$1);
var G__29852 = cljs.core.first.call(null,seq29849__$2);
var seq29849__$3 = cljs.core.next.call(null,seq29849__$2);
return cljs.core$macros.when_first.cljs$core$IFn$_invoke$arity$variadic(G__29850,G__29851,G__29852,seq29849__$3);
});


cljs.core$macros.when_first.cljs$lang$macro = true;
/**
 * bindings => binding-form test
 * 
 *   When test is true, evaluates body with binding-form bound to the value of test
 */
cljs.core$macros.when_let = (function cljs$core$macros$when_let(var_args){
var args__21537__auto__ = [];
var len__21530__auto___29864 = arguments.length;
var i__21531__auto___29865 = (0);
while(true){
if((i__21531__auto___29865 < len__21530__auto___29864)){
args__21537__auto__.push((arguments[i__21531__auto___29865]));

var G__29866 = (i__21531__auto___29865 + (1));
i__21531__auto___29865 = G__29866;
continue;
} else {
}
break;
}

var argseq__21538__auto__ = ((((3) < args__21537__auto__.length))?(new cljs.core.IndexedSeq(args__21537__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.when_let.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__21538__auto__);
});

cljs.core$macros.when_let.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
if(cljs.core.vector_QMARK_.call(null,bindings)){
} else {
throw cljs.core.ex_info.call(null,"when-let requires a vector for its binding",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core._EQ_.call(null,(2),cljs.core.count.call(null,bindings))){
} else {
throw cljs.core.ex_info.call(null,"when-let requires exactly 2 forms in binding vector",cljs.core.PersistentArrayMap.EMPTY);
}


var form = bindings.call(null,(0));
var tst = bindings.call(null,(1));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__21289__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__29859__auto__","temp__29859__auto__",578634739,null)),(function (){var x__21289__auto__ = tst;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__29859__auto__","temp__29859__auto__",578634739,null)),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__21289__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__21289__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__29859__auto__","temp__29859__auto__",578634739,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
});

cljs.core$macros.when_let.cljs$lang$maxFixedArity = (3);

cljs.core$macros.when_let.cljs$lang$applyTo = (function (seq29860){
var G__29861 = cljs.core.first.call(null,seq29860);
var seq29860__$1 = cljs.core.next.call(null,seq29860);
var G__29862 = cljs.core.first.call(null,seq29860__$1);
var seq29860__$2 = cljs.core.next.call(null,seq29860__$1);
var G__29863 = cljs.core.first.call(null,seq29860__$2);
var seq29860__$3 = cljs.core.next.call(null,seq29860__$2);
return cljs.core$macros.when_let.cljs$core$IFn$_invoke$arity$variadic(G__29861,G__29862,G__29863,seq29860__$3);
});


cljs.core$macros.when_let.cljs$lang$macro = true;
/**
 * Evaluates test. If logical false, evaluates body in an implicit do.
 */
cljs.core$macros.when_not = (function cljs$core$macros$when_not(var_args){
var args__21537__auto__ = [];
var len__21530__auto___29871 = arguments.length;
var i__21531__auto___29872 = (0);
while(true){
if((i__21531__auto___29872 < len__21530__auto___29871)){
args__21537__auto__.push((arguments[i__21531__auto___29872]));

var G__29873 = (i__21531__auto___29872 + (1));
i__21531__auto___29872 = G__29873;
continue;
} else {
}
break;
}

var argseq__21538__auto__ = ((((3) < args__21537__auto__.length))?(new cljs.core.IndexedSeq(args__21537__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.when_not.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__21538__auto__);
});

cljs.core$macros.when_not.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,test,body){
return cljs.core._conj.call(null,(function (){var x__21289__auto__ = test;
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__21289__auto____$1 = cljs.core.cons.call(null,new cljs.core.Symbol(null,"do","do",1686842252,null),body);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto____$1);
})(),null),x__21289__auto__);
})(),new cljs.core.Symbol(null,"if","if",1181717262,null));
});

cljs.core$macros.when_not.cljs$lang$maxFixedArity = (3);

cljs.core$macros.when_not.cljs$lang$applyTo = (function (seq29867){
var G__29868 = cljs.core.first.call(null,seq29867);
var seq29867__$1 = cljs.core.next.call(null,seq29867);
var G__29869 = cljs.core.first.call(null,seq29867__$1);
var seq29867__$2 = cljs.core.next.call(null,seq29867__$1);
var G__29870 = cljs.core.first.call(null,seq29867__$2);
var seq29867__$3 = cljs.core.next.call(null,seq29867__$2);
return cljs.core$macros.when_not.cljs$core$IFn$_invoke$arity$variadic(G__29868,G__29869,G__29870,seq29867__$3);
});


cljs.core$macros.when_not.cljs$lang$macro = true;
/**
 * Repeatedly executes body while test expression is true. Presumes
 *   some side-effect will cause test to become false/nil. Returns nil
 */
cljs.core$macros.while$ = (function cljs$core$macros$while(var_args){
var args__21537__auto__ = [];
var len__21530__auto___29878 = arguments.length;
var i__21531__auto___29879 = (0);
while(true){
if((i__21531__auto___29879 < len__21530__auto___29878)){
args__21537__auto__.push((arguments[i__21531__auto___29879]));

var G__29880 = (i__21531__auto___29879 + (1));
i__21531__auto___29879 = G__29880;
continue;
} else {
}
break;
}

var argseq__21538__auto__ = ((((3) < args__21537__auto__.length))?(new cljs.core.IndexedSeq(args__21537__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.while$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__21538__auto__);
});

cljs.core$macros.while$.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,test,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__21289__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),(function (){var x__21289__auto__ = test;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),body,(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
});

cljs.core$macros.while$.cljs$lang$maxFixedArity = (3);

cljs.core$macros.while$.cljs$lang$applyTo = (function (seq29874){
var G__29875 = cljs.core.first.call(null,seq29874);
var seq29874__$1 = cljs.core.next.call(null,seq29874);
var G__29876 = cljs.core.first.call(null,seq29874__$1);
var seq29874__$2 = cljs.core.next.call(null,seq29874__$1);
var G__29877 = cljs.core.first.call(null,seq29874__$2);
var seq29874__$3 = cljs.core.next.call(null,seq29874__$2);
return cljs.core$macros.while$.cljs$core$IFn$_invoke$arity$variadic(G__29875,G__29876,G__29877,seq29874__$3);
});


cljs.core$macros.while$.cljs$lang$macro = true;
/**
 * Takes an expression and a set of test/form pairs. Threads expr (via ->)
 *   through each form for which the corresponding test
 *   expression is true. Note that, unlike cond branching, cond-> threading does
 *   not short circuit after the first true test expression.
 */
cljs.core$macros.cond__GT_ = (function cljs$core$macros$cond__GT_(var_args){
var args__21537__auto__ = [];
var len__21530__auto___29889 = arguments.length;
var i__21531__auto___29890 = (0);
while(true){
if((i__21531__auto___29890 < len__21530__auto___29889)){
args__21537__auto__.push((arguments[i__21531__auto___29890]));

var G__29891 = (i__21531__auto___29890 + (1));
i__21531__auto___29890 = G__29891;
continue;
} else {
}
break;
}

var argseq__21538__auto__ = ((((3) < args__21537__auto__.length))?(new cljs.core.IndexedSeq(args__21537__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.cond__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__21538__auto__);
});

cljs.core$macros.cond__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,clauses){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,clauses))){
} else {
throw (new Error("Assert failed: (even? (count clauses))"));
}

var g = cljs.core.gensym.call(null);
var pstep = ((function (g){
return (function (p__29885){
var vec__29886 = p__29885;
var test = cljs.core.nth.call(null,vec__29886,(0),null);
var step = cljs.core.nth.call(null,vec__29886,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__21289__auto__ = test;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","->","cljs.core$macros/->",-1519455206,null)),(function (){var x__21289__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = step;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
});})(g))
;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__21289__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__21289__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),cljs.core.interleave.call(null,cljs.core.repeat.call(null,g),cljs.core.map.call(null,pstep,cljs.core.partition.call(null,(2),clauses)))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
});

cljs.core$macros.cond__GT_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.cond__GT_.cljs$lang$applyTo = (function (seq29881){
var G__29882 = cljs.core.first.call(null,seq29881);
var seq29881__$1 = cljs.core.next.call(null,seq29881);
var G__29883 = cljs.core.first.call(null,seq29881__$1);
var seq29881__$2 = cljs.core.next.call(null,seq29881__$1);
var G__29884 = cljs.core.first.call(null,seq29881__$2);
var seq29881__$3 = cljs.core.next.call(null,seq29881__$2);
return cljs.core$macros.cond__GT_.cljs$core$IFn$_invoke$arity$variadic(G__29882,G__29883,G__29884,seq29881__$3);
});


cljs.core$macros.cond__GT_.cljs$lang$macro = true;
/**
 * Takes an expression and a set of test/form pairs. Threads expr (via ->>)
 *   through each form for which the corresponding test expression
 *   is true.  Note that, unlike cond branching, cond->> threading does not short circuit
 *   after the first true test expression.
 */
cljs.core$macros.cond__GT__GT_ = (function cljs$core$macros$cond__GT__GT_(var_args){
var args__21537__auto__ = [];
var len__21530__auto___29900 = arguments.length;
var i__21531__auto___29901 = (0);
while(true){
if((i__21531__auto___29901 < len__21530__auto___29900)){
args__21537__auto__.push((arguments[i__21531__auto___29901]));

var G__29902 = (i__21531__auto___29901 + (1));
i__21531__auto___29901 = G__29902;
continue;
} else {
}
break;
}

var argseq__21538__auto__ = ((((3) < args__21537__auto__.length))?(new cljs.core.IndexedSeq(args__21537__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.cond__GT__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__21538__auto__);
});

cljs.core$macros.cond__GT__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,clauses){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,clauses))){
} else {
throw (new Error("Assert failed: (even? (count clauses))"));
}

var g = cljs.core.gensym.call(null);
var pstep = ((function (g){
return (function (p__29896){
var vec__29897 = p__29896;
var test = cljs.core.nth.call(null,vec__29897,(0),null);
var step = cljs.core.nth.call(null,vec__29897,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__21289__auto__ = test;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","->>","cljs.core$macros/->>",-1353108561,null)),(function (){var x__21289__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = step;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
});})(g))
;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__21289__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__21289__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),cljs.core.interleave.call(null,cljs.core.repeat.call(null,g),cljs.core.map.call(null,pstep,cljs.core.partition.call(null,(2),clauses)))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
});

cljs.core$macros.cond__GT__GT_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.cond__GT__GT_.cljs$lang$applyTo = (function (seq29892){
var G__29893 = cljs.core.first.call(null,seq29892);
var seq29892__$1 = cljs.core.next.call(null,seq29892);
var G__29894 = cljs.core.first.call(null,seq29892__$1);
var seq29892__$2 = cljs.core.next.call(null,seq29892__$1);
var G__29895 = cljs.core.first.call(null,seq29892__$2);
var seq29892__$3 = cljs.core.next.call(null,seq29892__$2);
return cljs.core$macros.cond__GT__GT_.cljs$core$IFn$_invoke$arity$variadic(G__29893,G__29894,G__29895,seq29892__$3);
});


cljs.core$macros.cond__GT__GT_.cljs$lang$macro = true;
/**
 * Binds name to expr, evaluates the first form in the lexical context
 *   of that binding, then binds name to that result, repeating for each
 *   successive form, returning the result of the last form.
 */
cljs.core$macros.as__GT_ = (function cljs$core$macros$as__GT_(var_args){
var args__21537__auto__ = [];
var len__21530__auto___29908 = arguments.length;
var i__21531__auto___29909 = (0);
while(true){
if((i__21531__auto___29909 < len__21530__auto___29908)){
args__21537__auto__.push((arguments[i__21531__auto___29909]));

var G__29910 = (i__21531__auto___29909 + (1));
i__21531__auto___29909 = G__29910;
continue;
} else {
}
break;
}

var argseq__21538__auto__ = ((((4) < args__21537__auto__.length))?(new cljs.core.IndexedSeq(args__21537__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.as__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__21538__auto__);
});

cljs.core$macros.as__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,name,forms){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__21289__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__21289__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),cljs.core.interleave.call(null,cljs.core.repeat.call(null,name),forms)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
});

cljs.core$macros.as__GT_.cljs$lang$maxFixedArity = (4);

cljs.core$macros.as__GT_.cljs$lang$applyTo = (function (seq29903){
var G__29904 = cljs.core.first.call(null,seq29903);
var seq29903__$1 = cljs.core.next.call(null,seq29903);
var G__29905 = cljs.core.first.call(null,seq29903__$1);
var seq29903__$2 = cljs.core.next.call(null,seq29903__$1);
var G__29906 = cljs.core.first.call(null,seq29903__$2);
var seq29903__$3 = cljs.core.next.call(null,seq29903__$2);
var G__29907 = cljs.core.first.call(null,seq29903__$3);
var seq29903__$4 = cljs.core.next.call(null,seq29903__$3);
return cljs.core$macros.as__GT_.cljs$core$IFn$_invoke$arity$variadic(G__29904,G__29905,G__29906,G__29907,seq29903__$4);
});


cljs.core$macros.as__GT_.cljs$lang$macro = true;
/**
 * When expr is not nil, threads it into the first form (via ->),
 *   and when that result is not nil, through the next etc
 */
cljs.core$macros.some__GT_ = (function cljs$core$macros$some__GT_(var_args){
var args__21537__auto__ = [];
var len__21530__auto___29915 = arguments.length;
var i__21531__auto___29916 = (0);
while(true){
if((i__21531__auto___29916 < len__21530__auto___29915)){
args__21537__auto__.push((arguments[i__21531__auto___29916]));

var G__29917 = (i__21531__auto___29916 + (1));
i__21531__auto___29916 = G__29917;
continue;
} else {
}
break;
}

var argseq__21538__auto__ = ((((3) < args__21537__auto__.length))?(new cljs.core.IndexedSeq(args__21537__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.some__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__21538__auto__);
});

cljs.core$macros.some__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,forms){
var g = cljs.core.gensym.call(null);
var pstep = ((function (g){
return (function (step){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__21289__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","->","cljs.core$macros/->",-1519455206,null)),(function (){var x__21289__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = step;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
});})(g))
;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__21289__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__21289__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),cljs.core.interleave.call(null,cljs.core.repeat.call(null,g),cljs.core.map.call(null,pstep,forms))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
});

cljs.core$macros.some__GT_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.some__GT_.cljs$lang$applyTo = (function (seq29911){
var G__29912 = cljs.core.first.call(null,seq29911);
var seq29911__$1 = cljs.core.next.call(null,seq29911);
var G__29913 = cljs.core.first.call(null,seq29911__$1);
var seq29911__$2 = cljs.core.next.call(null,seq29911__$1);
var G__29914 = cljs.core.first.call(null,seq29911__$2);
var seq29911__$3 = cljs.core.next.call(null,seq29911__$2);
return cljs.core$macros.some__GT_.cljs$core$IFn$_invoke$arity$variadic(G__29912,G__29913,G__29914,seq29911__$3);
});


cljs.core$macros.some__GT_.cljs$lang$macro = true;
/**
 * When expr is not nil, threads it into the first form (via ->>),
 *   and when that result is not nil, through the next etc
 */
cljs.core$macros.some__GT__GT_ = (function cljs$core$macros$some__GT__GT_(var_args){
var args__21537__auto__ = [];
var len__21530__auto___29922 = arguments.length;
var i__21531__auto___29923 = (0);
while(true){
if((i__21531__auto___29923 < len__21530__auto___29922)){
args__21537__auto__.push((arguments[i__21531__auto___29923]));

var G__29924 = (i__21531__auto___29923 + (1));
i__21531__auto___29923 = G__29924;
continue;
} else {
}
break;
}

var argseq__21538__auto__ = ((((3) < args__21537__auto__.length))?(new cljs.core.IndexedSeq(args__21537__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.some__GT__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__21538__auto__);
});

cljs.core$macros.some__GT__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,forms){
var g = cljs.core.gensym.call(null);
var pstep = ((function (g){
return (function (step){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__21289__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","->>","cljs.core$macros/->>",-1353108561,null)),(function (){var x__21289__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = step;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
});})(g))
;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__21289__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__21289__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),cljs.core.interleave.call(null,cljs.core.repeat.call(null,g),cljs.core.map.call(null,pstep,forms))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
});

cljs.core$macros.some__GT__GT_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.some__GT__GT_.cljs$lang$applyTo = (function (seq29918){
var G__29919 = cljs.core.first.call(null,seq29918);
var seq29918__$1 = cljs.core.next.call(null,seq29918);
var G__29920 = cljs.core.first.call(null,seq29918__$1);
var seq29918__$2 = cljs.core.next.call(null,seq29918__$1);
var G__29921 = cljs.core.first.call(null,seq29918__$2);
var seq29918__$3 = cljs.core.next.call(null,seq29918__$2);
return cljs.core$macros.some__GT__GT_.cljs$core$IFn$_invoke$arity$variadic(G__29919,G__29920,G__29921,seq29918__$3);
});


cljs.core$macros.some__GT__GT_.cljs$lang$macro = true;
/**
 * bindings => binding-form test
 * 
 *    If test is not nil, evaluates then with binding-form bound to the
 *    value of test, if not, yields else
 */
cljs.core$macros.if_some = (function cljs$core$macros$if_some(var_args){
var args29926 = [];
var len__21530__auto___29935 = arguments.length;
var i__21531__auto___29936 = (0);
while(true){
if((i__21531__auto___29936 < len__21530__auto___29935)){
args29926.push((arguments[i__21531__auto___29936]));

var G__29937 = (i__21531__auto___29936 + (1));
i__21531__auto___29936 = G__29937;
continue;
} else {
}
break;
}

var G__29934 = args29926.length;
switch (G__29934) {
case 4:
return cljs.core$macros.if_some.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__21549__auto__ = (new cljs.core.IndexedSeq(args29926.slice((5)),(0),null));
return cljs.core$macros.if_some.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__21549__auto__);

}
});

cljs.core$macros.if_some.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,then){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-some","cljs.core$macros/if-some",1405341529,null)),(function (){var x__21289__auto__ = bindings;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = then;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
});

cljs.core$macros.if_some.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,then,else$,oldform){
if(cljs.core.vector_QMARK_.call(null,bindings)){
} else {
throw cljs.core.ex_info.call(null,"if-some requires a vector for its binding",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core.empty_QMARK_.call(null,oldform)){
} else {
throw cljs.core.ex_info.call(null,"if-some requires 1 or 2 forms after binding vector",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core._EQ_.call(null,(2),cljs.core.count.call(null,bindings))){
} else {
throw cljs.core.ex_info.call(null,"if-some requires exactly 2 forms in binding vector",cljs.core.PersistentArrayMap.EMPTY);
}


var form = bindings.call(null,(0));
var tst = bindings.call(null,(1));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__21289__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__29925__auto__","temp__29925__auto__",549493889,null)),(function (){var x__21289__auto__ = tst;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__29925__auto__","temp__29925__auto__",549493889,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = else$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__21289__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__21289__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__29925__auto__","temp__29925__auto__",549493889,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = then;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
});

cljs.core$macros.if_some.cljs$lang$applyTo = (function (seq29927){
var G__29928 = cljs.core.first.call(null,seq29927);
var seq29927__$1 = cljs.core.next.call(null,seq29927);
var G__29929 = cljs.core.first.call(null,seq29927__$1);
var seq29927__$2 = cljs.core.next.call(null,seq29927__$1);
var G__29930 = cljs.core.first.call(null,seq29927__$2);
var seq29927__$3 = cljs.core.next.call(null,seq29927__$2);
var G__29931 = cljs.core.first.call(null,seq29927__$3);
var seq29927__$4 = cljs.core.next.call(null,seq29927__$3);
var G__29932 = cljs.core.first.call(null,seq29927__$4);
var seq29927__$5 = cljs.core.next.call(null,seq29927__$4);
return cljs.core$macros.if_some.cljs$core$IFn$_invoke$arity$variadic(G__29928,G__29929,G__29930,G__29931,G__29932,seq29927__$5);
});

cljs.core$macros.if_some.cljs$lang$maxFixedArity = (5);


cljs.core$macros.if_some.cljs$lang$macro = true;
/**
 * bindings => binding-form test
 * 
 *    When test is not nil, evaluates body with binding-form bound to the
 *    value of test
 */
cljs.core$macros.when_some = (function cljs$core$macros$when_some(var_args){
var args__21537__auto__ = [];
var len__21530__auto___29949 = arguments.length;
var i__21531__auto___29950 = (0);
while(true){
if((i__21531__auto___29950 < len__21530__auto___29949)){
args__21537__auto__.push((arguments[i__21531__auto___29950]));

var G__29951 = (i__21531__auto___29950 + (1));
i__21531__auto___29950 = G__29951;
continue;
} else {
}
break;
}

var argseq__21538__auto__ = ((((3) < args__21537__auto__.length))?(new cljs.core.IndexedSeq(args__21537__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.when_some.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__21538__auto__);
});

cljs.core$macros.when_some.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
if(cljs.core.vector_QMARK_.call(null,bindings)){
} else {
throw cljs.core.ex_info.call(null,"when-some requires a vector for its binding",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core._EQ_.call(null,(2),cljs.core.count.call(null,bindings))){
} else {
throw cljs.core.ex_info.call(null,"when-some requires exactly 2 forms in binding vector",cljs.core.PersistentArrayMap.EMPTY);
}


var form = bindings.call(null,(0));
var tst = bindings.call(null,(1));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__21289__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__29939__auto__","temp__29939__auto__",-2086815219,null)),(function (){var x__21289__auto__ = tst;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__29939__auto__","temp__29939__auto__",-2086815219,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__21289__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__21289__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__29939__auto__","temp__29939__auto__",-2086815219,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
});

cljs.core$macros.when_some.cljs$lang$maxFixedArity = (3);

cljs.core$macros.when_some.cljs$lang$applyTo = (function (seq29940){
var G__29941 = cljs.core.first.call(null,seq29940);
var seq29940__$1 = cljs.core.next.call(null,seq29940);
var G__29942 = cljs.core.first.call(null,seq29940__$1);
var seq29940__$2 = cljs.core.next.call(null,seq29940__$1);
var G__29943 = cljs.core.first.call(null,seq29940__$2);
var seq29940__$3 = cljs.core.next.call(null,seq29940__$2);
return cljs.core$macros.when_some.cljs$core$IFn$_invoke$arity$variadic(G__29941,G__29942,G__29943,seq29940__$3);
});


cljs.core$macros.when_some.cljs$lang$macro = true;
/**
 * A good fdecl looks like (([a] ...) ([a b] ...)) near the end of defn.
 */
cljs.core$macros.assert_valid_fdecl = (function cljs$core$macros$assert_valid_fdecl(fdecl){
if(cljs.core.empty_QMARK_.call(null,fdecl)){
throw (new Error("Parameter declaration missing"));
} else {
}

var argdecls = cljs.core.map.call(null,(function (p1__29952_SHARP_){
if(cljs.core.seq_QMARK_.call(null,p1__29952_SHARP_)){
return cljs.core.first.call(null,p1__29952_SHARP_);
} else {
throw (new Error(((cljs.core.seq_QMARK_.call(null,cljs.core.first.call(null,fdecl)))?[cljs.core.str("Invalid signature \""),cljs.core.str(p1__29952_SHARP_),cljs.core.str("\" should be a list")].join(''):[cljs.core.str("Parameter declaration \""),cljs.core.str(p1__29952_SHARP_),cljs.core.str("\" should be a vector")].join(''))));
}
}),fdecl);
var bad_args = cljs.core.seq.call(null,cljs.core.remove.call(null,((function (argdecls){
return (function (p1__29953_SHARP_){
return cljs.core.vector_QMARK_.call(null,p1__29953_SHARP_);
});})(argdecls))
,argdecls));
if(bad_args){
throw (new Error([cljs.core.str("Parameter declaration \""),cljs.core.str(cljs.core.first.call(null,bad_args)),cljs.core.str("\" should be a vector")].join('')));
} else {
return null;
}
});
cljs.core$macros.sigs = (function cljs$core$macros$sigs(fdecl){
cljs.core$macros.assert_valid_fdecl.call(null,fdecl);

var asig = (function (fdecl__$1){
var arglist = cljs.core.first.call(null,fdecl__$1);
var arglist__$1 = ((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"&form","&form",1482799337,null),cljs.core.first.call(null,arglist)))?cljs.core.subvec.call(null,arglist,(2),cljs.core.count.call(null,arglist)):arglist);
var body = cljs.core.next.call(null,fdecl__$1);
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
if(cljs.core.next.call(null,body)){
return cljs.core.with_meta.call(null,arglist__$1,cljs.core.conj.call(null,(cljs.core.truth_(cljs.core.meta.call(null,arglist__$1))?cljs.core.meta.call(null,arglist__$1):cljs.core.PersistentArrayMap.EMPTY),cljs.core.first.call(null,body)));
} else {
return arglist__$1;
}
} else {
return arglist__$1;
}
});
if(cljs.core.seq_QMARK_.call(null,cljs.core.first.call(null,fdecl))){
var ret = cljs.core.PersistentVector.EMPTY;
var fdecls = fdecl;
while(true){
if(cljs.core.truth_(fdecls)){
var G__29954 = cljs.core.conj.call(null,ret,asig.call(null,cljs.core.first.call(null,fdecls)));
var G__29955 = cljs.core.next.call(null,fdecls);
ret = G__29954;
fdecls = G__29955;
continue;
} else {
return cljs.core.seq.call(null,ret);
}
break;
}
} else {
var x__21289__auto__ = asig.call(null,fdecl);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
}
});
/**
 * defs name to have the root value of init iff the named var has no root value,
 *   else init is unevaluated
 */
cljs.core$macros.defonce = (function cljs$core$macros$defonce(_AMPERSAND_form,_AMPERSAND_env,x,init){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-not","cljs.core$macros/when-not",-764302244,null)),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","exists?","cljs.core$macros/exists?",-1828590389,null)),(function (){var x__21289__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"def","def",597100991,null)),(function (){var x__21289__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = init;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
});

cljs.core$macros.defonce.cljs$lang$macro = true;
cljs.core$macros.destructure = (function cljs$core$macros$destructure(bindings){
var bents = cljs.core.partition.call(null,(2),bindings);
var pb = ((function (bents){
return (function cljs$core$macros$destructure_$_pb(bvec,b,v){
var pvec = ((function (bents){
return (function (bvec__$1,b__$1,val){
var gvec = cljs.core.gensym.call(null,"vec__");
var gseq = cljs.core.gensym.call(null,"seq__");
var gfirst = cljs.core.gensym.call(null,"first__");
var has_rest = cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null], null), null),b__$1);
var ret = (function (){var ret = cljs.core.conj.call(null,bvec__$1,gvec,val);
if(cljs.core.truth_(has_rest)){
return cljs.core.conj.call(null,ret,gseq,cljs.core._conj.call(null,(function (){var x__21289__auto__ = gvec;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)));
} else {
return ret;
}
})();
var n = (0);
var bs = b__$1;
var seen_rest_QMARK_ = false;
while(true){
if(cljs.core.seq.call(null,bs)){
var firstb = cljs.core.first.call(null,bs);
if(cljs.core._EQ_.call(null,firstb,new cljs.core.Symbol(null,"&","&",-2144855648,null))){
var G__29965 = cljs$core$macros$destructure_$_pb.call(null,ret,cljs.core.second.call(null,bs),gseq);
var G__29966 = n;
var G__29967 = cljs.core.nnext.call(null,bs);
var G__29968 = true;
ret = G__29965;
n = G__29966;
bs = G__29967;
seen_rest_QMARK_ = G__29968;
continue;
} else {
if(cljs.core._EQ_.call(null,firstb,new cljs.core.Keyword(null,"as","as",1148689641))){
return cljs$core$macros$destructure_$_pb.call(null,ret,cljs.core.second.call(null,bs),gvec);
} else {
if(seen_rest_QMARK_){
throw (new Error("Unsupported binding form, only :as can follow & parameter"));
} else {
var G__29969 = cljs$core$macros$destructure_$_pb.call(null,(cljs.core.truth_(has_rest)?cljs.core.conj.call(null,ret,gfirst,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null)),(function (){var x__21289__auto__ = gseq;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})()))),gseq,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","next","cljs.core/next",-1291438473,null)),(function (){var x__21289__auto__ = gseq;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())))):ret),firstb,(cljs.core.truth_(has_rest)?gfirst:cljs.core._conj.call(null,(function (){var x__21289__auto__ = gvec;
return cljs.core._conj.call(null,(function (){var x__21289__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,null),x__21289__auto____$1);
})(),x__21289__auto__);
})(),new cljs.core.Symbol("cljs.core","nth","cljs.core/nth",1961052085,null))));
var G__29970 = (n + (1));
var G__29971 = cljs.core.next.call(null,bs);
var G__29972 = seen_rest_QMARK_;
ret = G__29969;
n = G__29970;
bs = G__29971;
seen_rest_QMARK_ = G__29972;
continue;
}

}
}
} else {
return ret;
}
break;
}
});})(bents))
;
var pmap = ((function (pvec,bents){
return (function (bvec__$1,b__$1,v__$1){
var gmap = cljs.core.gensym.call(null,"map__");
var defaults = new cljs.core.Keyword(null,"or","or",235744169).cljs$core$IFn$_invoke$arity$1(b__$1);
var ret = ((function (gmap,defaults,pvec,bents){
return (function (ret){
if(cljs.core.truth_(new cljs.core.Keyword(null,"as","as",1148689641).cljs$core$IFn$_invoke$arity$1(b__$1))){
return cljs.core.conj.call(null,ret,new cljs.core.Keyword(null,"as","as",1148689641).cljs$core$IFn$_invoke$arity$1(b__$1),gmap);
} else {
return ret;
}
});})(gmap,defaults,pvec,bents))
.call(null,cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.conj.call(null,bvec__$1,gmap),v__$1),gmap),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","implements?","cljs.core$macros/implements?",-94762250,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","ISeq","cljs.core/ISeq",230133392,null)),(function (){var x__21289__auto__ = gmap;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","hash-map","cljs.core/hash-map",303385767,null)),(function (){var x__21289__auto__ = gmap;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = gmap;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())))));
var bes = (function (){var transforms = cljs.core.reduce.call(null,((function (ret,gmap,defaults,pvec,bents){
return (function (transforms,mk){
if((mk instanceof cljs.core.Keyword)){
var mkns = cljs.core.namespace.call(null,mk);
var mkn = cljs.core.name.call(null,mk);
if(cljs.core._EQ_.call(null,mkn,"keys")){
return cljs.core.assoc.call(null,transforms,mk,((function (mkns,mkn,ret,gmap,defaults,pvec,bents){
return (function (p1__29956_SHARP_){
return cljs.core.keyword.call(null,(function (){var or__20455__auto__ = mkns;
if(cljs.core.truth_(or__20455__auto__)){
return or__20455__auto__;
} else {
return cljs.core.namespace.call(null,p1__29956_SHARP_);
}
})(),cljs.core.name.call(null,p1__29956_SHARP_));
});})(mkns,mkn,ret,gmap,defaults,pvec,bents))
);
} else {
if(cljs.core._EQ_.call(null,mkn,"syms")){
return cljs.core.assoc.call(null,transforms,mk,((function (mkns,mkn,ret,gmap,defaults,pvec,bents){
return (function (p1__29957_SHARP_){
return cljs.core._conj.call(null,(function (){var x__21289__auto__ = cljs.core.symbol.call(null,(function (){var or__20455__auto__ = mkns;
if(cljs.core.truth_(or__20455__auto__)){
return or__20455__auto__;
} else {
return cljs.core.namespace.call(null,p1__29957_SHARP_);
}
})(),cljs.core.name.call(null,p1__29957_SHARP_));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),new cljs.core.Symbol(null,"quote","quote",1377916282,null));
});})(mkns,mkn,ret,gmap,defaults,pvec,bents))
);
} else {
if(cljs.core._EQ_.call(null,mkn,"strs")){
return cljs.core.assoc.call(null,transforms,mk,cljs.core.str);
} else {
return transforms;

}
}
}
} else {
return transforms;
}
});})(ret,gmap,defaults,pvec,bents))
,cljs.core.PersistentArrayMap.EMPTY,cljs.core.keys.call(null,b__$1));
return cljs.core.reduce.call(null,((function (transforms,ret,gmap,defaults,pvec,bents){
return (function (bes,entry){
return cljs.core.reduce.call(null,((function (transforms,ret,gmap,defaults,pvec,bents){
return (function (p1__29958_SHARP_,p2__29959_SHARP_){
return cljs.core.assoc.call(null,p1__29958_SHARP_,p2__29959_SHARP_,cljs.core.val.call(null,entry).call(null,p2__29959_SHARP_));
});})(transforms,ret,gmap,defaults,pvec,bents))
,cljs.core.dissoc.call(null,bes,cljs.core.key.call(null,entry)),cljs.core.key.call(null,entry).call(null,bes));
});})(transforms,ret,gmap,defaults,pvec,bents))
,cljs.core.dissoc.call(null,b__$1,new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Keyword(null,"or","or",235744169)),transforms);
})();
while(true){
if(cljs.core.seq.call(null,bes)){
var bb = cljs.core.key.call(null,cljs.core.first.call(null,bes));
var bk = cljs.core.val.call(null,cljs.core.first.call(null,bes));
var local = ((((!((bb == null)))?((((bb.cljs$lang$protocol_mask$partition1$ & (4096))) || (bb.cljs$core$INamed$))?true:false):false))?cljs.core.with_meta.call(null,cljs.core.symbol.call(null,null,cljs.core.name.call(null,bb)),cljs.core.meta.call(null,bb)):bb);
var bv = ((cljs.core.contains_QMARK_.call(null,defaults,local))?cljs.core._conj.call(null,(function (){var x__21289__auto__ = gmap;
return cljs.core._conj.call(null,(function (){var x__21289__auto____$1 = bk;
return cljs.core._conj.call(null,(function (){var x__21289__auto____$2 = defaults.call(null,local);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto____$2);
})(),x__21289__auto____$1);
})(),x__21289__auto__);
})(),new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null)):cljs.core._conj.call(null,(function (){var x__21289__auto__ = gmap;
return cljs.core._conj.call(null,(function (){var x__21289__auto____$1 = bk;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto____$1);
})(),x__21289__auto__);
})(),new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null)));
var G__29973 = ((((bb instanceof cljs.core.Keyword)) || ((bb instanceof cljs.core.Symbol)))?cljs.core.conj.call(null,ret,local,bv):cljs$core$macros$destructure_$_pb.call(null,ret,bb,bv));
var G__29974 = cljs.core.next.call(null,bes);
ret = G__29973;
bes = G__29974;
continue;
} else {
return ret;
}
break;
}
});})(pvec,bents))
;
if((b instanceof cljs.core.Symbol)){
return cljs.core.conj.call(null,cljs.core.conj.call(null,bvec,(cljs.core.truth_(cljs.core.namespace.call(null,b))?cljs.core.symbol.call(null,cljs.core.name.call(null,b)):b)),v);
} else {
if((b instanceof cljs.core.Keyword)){
return cljs.core.conj.call(null,cljs.core.conj.call(null,bvec,cljs.core.symbol.call(null,cljs.core.name.call(null,b))),v);
} else {
if(cljs.core.vector_QMARK_.call(null,b)){
return pvec.call(null,bvec,b,v);
} else {
if(cljs.core.map_QMARK_.call(null,b)){
return pmap.call(null,bvec,b,v);
} else {
throw (new Error([cljs.core.str("Unsupported binding form: "),cljs.core.str(b)].join('')));

}
}
}
}
});})(bents))
;
var process_entry = ((function (bents,pb){
return (function (bvec,b){
return pb.call(null,bvec,cljs.core.first.call(null,b),cljs.core.second.call(null,b));
});})(bents,pb))
;
if(cljs.core.every_QMARK_.call(null,cljs.core.symbol_QMARK_,cljs.core.map.call(null,cljs.core.first,bents))){
return bindings;
} else {
var temp__4655__auto__ = cljs.core.seq.call(null,cljs.core.filter.call(null,((function (bents,pb,process_entry){
return (function (p1__29960_SHARP_){
return (cljs.core.first.call(null,p1__29960_SHARP_) instanceof cljs.core.Keyword);
});})(bents,pb,process_entry))
,bents));
if(temp__4655__auto__){
var kwbs = temp__4655__auto__;
throw (new Error([cljs.core.str("Unsupported binding key: "),cljs.core.str(cljs.core.ffirst.call(null,kwbs))].join('')));
} else {
return cljs.core.reduce.call(null,process_entry,cljs.core.PersistentVector.EMPTY,bents);
}
}
});
/**
 * Defines a var using `goog.define`. Passed default value must be
 *   string, number or boolean.
 * 
 *   Default value can be overridden at compile time using the
 *   compiler option `:closure-defines`.
 * 
 *   Example:
 *  (ns your-app.core)
 *  (goog-define DEBUG! false)
 *  ;; can be overridden with
 *  :closure-defines {"your_app.core.DEBUG_BANG_" true}
 *  or
 *  :closure-defines {'your-app.core/DEBUG! true}
 */
cljs.core$macros.goog_define = (function cljs$core$macros$goog_define(_AMPERSAND_form,_AMPERSAND_env,sym,default$){
if((typeof default$ === 'string') || (typeof default$ === 'number') || (default$ === true) || (default$ === false)){
} else {
throw cljs.core.ex_info.call(null,"goog-define requires a string, number or boolean as default value",cljs.core.PersistentArrayMap.EMPTY);
}


var defname = cljs.compiler.munge.call(null,[cljs.core.str(cljs.core._STAR_ns_STAR_),cljs.core.str("/"),cljs.core.str(sym)].join(''));
var type = ((typeof default$ === 'string')?"string":((typeof default$ === 'number')?"number":(((default$ === true) || (default$ === false))?"boolean":null)));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","declare","cljs.core$macros/declare",1172642527,null)),(function (){var x__21289__auto__ = cljs.core.symbol.call(null,sym);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),(function (){var x__21289__auto__ = [cljs.core.str("/** @define {"),cljs.core.str(type),cljs.core.str("} */")].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("goog","define","goog/define",-352722538,null)),(function (){var x__21289__auto__ = defname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = default$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
});

cljs.core$macros.goog_define.cljs$lang$macro = true;
/**
 * binding => binding-form init-expr
 * 
 *   Evaluates the exprs in a lexical context in which the symbols in
 *   the binding-forms are bound to their respective init-exprs or parts
 *   therein.
 */
cljs.core$macros.let$ = (function cljs$core$macros$let(var_args){
var args__21537__auto__ = [];
var len__21530__auto___29979 = arguments.length;
var i__21531__auto___29980 = (0);
while(true){
if((i__21531__auto___29980 < len__21530__auto___29979)){
args__21537__auto__.push((arguments[i__21531__auto___29980]));

var G__29981 = (i__21531__auto___29980 + (1));
i__21531__auto___29980 = G__29981;
continue;
} else {
}
break;
}

var argseq__21538__auto__ = ((((3) < args__21537__auto__.length))?(new cljs.core.IndexedSeq(args__21537__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.let$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__21538__auto__);
});

cljs.core$macros.let$.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
if(cljs.core.vector_QMARK_.call(null,bindings)){
} else {
throw cljs.core.ex_info.call(null,"let requires a vector for its binding",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,bindings))){
} else {
throw cljs.core.ex_info.call(null,"let requires an even number of forms in binding vector",cljs.core.PersistentArrayMap.EMPTY);
}


return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"let*","let*",1920721458,null)),(function (){var x__21289__auto__ = cljs.core$macros.destructure.call(null,bindings);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),body)));
});

cljs.core$macros.let$.cljs$lang$maxFixedArity = (3);

cljs.core$macros.let$.cljs$lang$applyTo = (function (seq29975){
var G__29976 = cljs.core.first.call(null,seq29975);
var seq29975__$1 = cljs.core.next.call(null,seq29975);
var G__29977 = cljs.core.first.call(null,seq29975__$1);
var seq29975__$2 = cljs.core.next.call(null,seq29975__$1);
var G__29978 = cljs.core.first.call(null,seq29975__$2);
var seq29975__$3 = cljs.core.next.call(null,seq29975__$2);
return cljs.core$macros.let$.cljs$core$IFn$_invoke$arity$variadic(G__29976,G__29977,G__29978,seq29975__$3);
});


cljs.core$macros.let$.cljs$lang$macro = true;
/**
 * Evaluates the exprs in a lexical context in which the symbols in
 *   the binding-forms are bound to their respective init-exprs or parts
 *   therein. Acts as a recur target.
 */
cljs.core$macros.loop = (function cljs$core$macros$loop(var_args){
var args__21537__auto__ = [];
var len__21530__auto___29990 = arguments.length;
var i__21531__auto___29991 = (0);
while(true){
if((i__21531__auto___29991 < len__21530__auto___29990)){
args__21537__auto__.push((arguments[i__21531__auto___29991]));

var G__29992 = (i__21531__auto___29991 + (1));
i__21531__auto___29991 = G__29992;
continue;
} else {
}
break;
}

var argseq__21538__auto__ = ((((3) < args__21537__auto__.length))?(new cljs.core.IndexedSeq(args__21537__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.loop.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__21538__auto__);
});

cljs.core$macros.loop.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
if(cljs.core.vector_QMARK_.call(null,bindings)){
} else {
throw cljs.core.ex_info.call(null,"loop requires a vector for its binding",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,bindings))){
} else {
throw cljs.core.ex_info.call(null,"loop requires an even number of forms in binding vector",cljs.core.PersistentArrayMap.EMPTY);
}


var db = cljs.core$macros.destructure.call(null,bindings);
if(cljs.core._EQ_.call(null,db,bindings)){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"loop*","loop*",615029416,null)),(function (){var x__21289__auto__ = bindings;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),body)));
} else {
var vs = cljs.core.take_nth.call(null,(2),cljs.core.drop.call(null,(1),bindings));
var bs = cljs.core.take_nth.call(null,(2),bindings);
var gs = cljs.core.map.call(null,((function (vs,bs,db){
return (function (b){
if((b instanceof cljs.core.Symbol)){
return b;
} else {
return cljs.core.gensym.call(null);
}
});})(vs,bs,db))
,bs);
var bfs = cljs.core.reduce.call(null,((function (vs,bs,gs,db){
return (function (ret,p__29986){
var vec__29987 = p__29986;
var b = cljs.core.nth.call(null,vec__29987,(0),null);
var v = cljs.core.nth.call(null,vec__29987,(1),null);
var g = cljs.core.nth.call(null,vec__29987,(2),null);
if((b instanceof cljs.core.Symbol)){
return cljs.core.conj.call(null,ret,g,v);
} else {
return cljs.core.conj.call(null,ret,g,v,b,g);
}
});})(vs,bs,gs,db))
,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,cljs.core.vector,bs,vs,gs));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__21289__auto__ = bfs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"loop*","loop*",615029416,null)),(function (){var x__21289__auto__ = cljs.core.vec.call(null,cljs.core.interleave.call(null,gs,gs));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__21289__auto__ = cljs.core.vec.call(null,cljs.core.interleave.call(null,bs,gs));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
}
});

cljs.core$macros.loop.cljs$lang$maxFixedArity = (3);

cljs.core$macros.loop.cljs$lang$applyTo = (function (seq29982){
var G__29983 = cljs.core.first.call(null,seq29982);
var seq29982__$1 = cljs.core.next.call(null,seq29982);
var G__29984 = cljs.core.first.call(null,seq29982__$1);
var seq29982__$2 = cljs.core.next.call(null,seq29982__$1);
var G__29985 = cljs.core.first.call(null,seq29982__$2);
var seq29982__$3 = cljs.core.next.call(null,seq29982__$2);
return cljs.core$macros.loop.cljs$core$IFn$_invoke$arity$variadic(G__29983,G__29984,G__29985,seq29982__$3);
});


cljs.core$macros.loop.cljs$lang$macro = true;
/**
 * protocol fqn -> [partition number, bit]
 */
cljs.core$macros.fast_path_protocols = cljs.core.zipmap.call(null,cljs.core.map.call(null,(function (p1__29993_SHARP_){
return cljs.core.symbol.call(null,"cljs.core",[cljs.core.str(p1__29993_SHARP_)].join(''));
}),cljs.core.PersistentVector.fromArray([new cljs.core.Symbol(null,"IFn","IFn",-244881638,null),new cljs.core.Symbol(null,"ICounted","ICounted",-1705786327,null),new cljs.core.Symbol(null,"IEmptyableCollection","IEmptyableCollection",1477271438,null),new cljs.core.Symbol(null,"ICollection","ICollection",-686709190,null),new cljs.core.Symbol(null,"IIndexed","IIndexed",-574812826,null),new cljs.core.Symbol(null,"ASeq","ASeq",266390234,null),new cljs.core.Symbol(null,"ISeq","ISeq",1517365813,null),new cljs.core.Symbol(null,"INext","INext",562211849,null),new cljs.core.Symbol(null,"ILookup","ILookup",784647298,null),new cljs.core.Symbol(null,"IAssociative","IAssociative",-1306431882,null),new cljs.core.Symbol(null,"IMap","IMap",992876629,null),new cljs.core.Symbol(null,"IMapEntry","IMapEntry",-943754199,null),new cljs.core.Symbol(null,"ISet","ISet",-1398072657,null),new cljs.core.Symbol(null,"IStack","IStack",1136769449,null),new cljs.core.Symbol(null,"IVector","IVector",-1120721434,null),new cljs.core.Symbol(null,"IDeref","IDeref",1738423197,null),new cljs.core.Symbol(null,"IDerefWithTimeout","IDerefWithTimeout",2140974319,null),new cljs.core.Symbol(null,"IMeta","IMeta",1095313672,null),new cljs.core.Symbol(null,"IWithMeta","IWithMeta",-509493158,null),new cljs.core.Symbol(null,"IReduce","IReduce",-440384974,null),new cljs.core.Symbol(null,"IKVReduce","IKVReduce",-870856862,null),new cljs.core.Symbol(null,"IEquiv","IEquiv",-1912850869,null),new cljs.core.Symbol(null,"IHash","IHash",-1495374645,null),new cljs.core.Symbol(null,"ISeqable","ISeqable",1349682102,null),new cljs.core.Symbol(null,"ISequential","ISequential",-1626174217,null),new cljs.core.Symbol(null,"IList","IList",1682281311,null),new cljs.core.Symbol(null,"IRecord","IRecord",-903221169,null),new cljs.core.Symbol(null,"IReversible","IReversible",-723048599,null),new cljs.core.Symbol(null,"ISorted","ISorted",-253627362,null),new cljs.core.Symbol(null,"IPrintWithWriter","IPrintWithWriter",-1205316154,null),new cljs.core.Symbol(null,"IWriter","IWriter",-1681087107,null),new cljs.core.Symbol(null,"IPrintWithWriter","IPrintWithWriter",-1205316154,null),new cljs.core.Symbol(null,"IPending","IPending",1229113039,null),new cljs.core.Symbol(null,"IWatchable","IWatchable",-1929659016,null),new cljs.core.Symbol(null,"IEditableCollection","IEditableCollection",-906687187,null),new cljs.core.Symbol(null,"ITransientCollection","ITransientCollection",252832402,null),new cljs.core.Symbol(null,"ITransientAssociative","ITransientAssociative",-1612754624,null),new cljs.core.Symbol(null,"ITransientMap","ITransientMap",298423651,null),new cljs.core.Symbol(null,"ITransientVector","ITransientVector",1978793164,null),new cljs.core.Symbol(null,"ITransientSet","ITransientSet",-575559912,null),new cljs.core.Symbol(null,"IMultiFn","IMultiFn",-1848282794,null),new cljs.core.Symbol(null,"IChunkedSeq","IChunkedSeq",-1299765705,null),new cljs.core.Symbol(null,"IChunkedNext","IChunkedNext",1193289532,null),new cljs.core.Symbol(null,"IComparable","IComparable",1834481627,null),new cljs.core.Symbol(null,"INamed","INamed",357992946,null),new cljs.core.Symbol(null,"ICloneable","ICloneable",1882653160,null),new cljs.core.Symbol(null,"IAtom","IAtom",-1411134312,null),new cljs.core.Symbol(null,"IReset","IReset",-1893729426,null),new cljs.core.Symbol(null,"ISwap","ISwap",484378193,null)], true)),cljs.core.iterate.call(null,(function (p__29994){
var vec__29995 = p__29994;
var p = cljs.core.nth.call(null,vec__29995,(0),null);
var b = cljs.core.nth.call(null,vec__29995,(1),null);
if(((2147483648) === b)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(p + (1)),(1)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,((2) * b)], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null)));
/**
 * total number of partitions
 */
cljs.core$macros.fast_path_protocol_partitions_count = (function (){var c = cljs.core.count.call(null,cljs.core$macros.fast_path_protocols);
var m = cljs.core.mod.call(null,c,(32));
if((m === (0))){
return cljs.core.quot.call(null,c,(32));
} else {
return (cljs.core.quot.call(null,c,(32)) + (1));
}
})();
cljs.core$macros.str = (function cljs$core$macros$str(var_args){
var args__21537__auto__ = [];
var len__21530__auto___30001 = arguments.length;
var i__21531__auto___30002 = (0);
while(true){
if((i__21531__auto___30002 < len__21530__auto___30001)){
args__21537__auto__.push((arguments[i__21531__auto___30002]));

var G__30003 = (i__21531__auto___30002 + (1));
i__21531__auto___30002 = G__30003;
continue;
} else {
}
break;
}

var argseq__21538__auto__ = ((((2) < args__21537__auto__.length))?(new cljs.core.IndexedSeq(args__21537__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.str.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__21538__auto__);
});

cljs.core$macros.str.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
var strs = cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,",",cljs.core.repeat.call(null,cljs.core.count.call(null,xs),"cljs.core.str(~{})")));
return cljs.core.list_STAR_.call(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),[cljs.core.str("["),cljs.core.str(strs),cljs.core.str("].join('')")].join(''),xs);
});

cljs.core$macros.str.cljs$lang$maxFixedArity = (2);

cljs.core$macros.str.cljs$lang$applyTo = (function (seq29998){
var G__29999 = cljs.core.first.call(null,seq29998);
var seq29998__$1 = cljs.core.next.call(null,seq29998);
var G__30000 = cljs.core.first.call(null,seq29998__$1);
var seq29998__$2 = cljs.core.next.call(null,seq29998__$1);
return cljs.core$macros.str.cljs$core$IFn$_invoke$arity$variadic(G__29999,G__30000,seq29998__$2);
});


cljs.core$macros.str.cljs$lang$macro = true;
cljs.core$macros.bool_expr = (function cljs$core$macros$bool_expr(e){
return cljs.core.vary_meta.call(null,e,cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null));
});
cljs.core$macros.simple_test_expr_QMARK_ = (function cljs$core$macros$simple_test_expr_QMARK_(env,ast){
var and__20443__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"js","js",1768080579),null,new cljs.core.Keyword(null,"constant","constant",-379609303),null,new cljs.core.Keyword(null,"var","var",-769682797),null,new cljs.core.Keyword(null,"invoke","invoke",1145927159),null,new cljs.core.Keyword(null,"dot","dot",1442709401),null], null), null).call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast));
if(cljs.core.truth_(and__20443__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"seq","seq",-177272256,null),null,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null], null), null).call(null,cljs.analyzer.infer_tag.call(null,env,ast));
} else {
return and__20443__auto__;
}
});
/**
 * Evaluates exprs one at a time, from left to right. If a form
 *   returns logical false (nil or false), and returns that value and
 *   doesn't evaluate any of the other expressions, otherwise it returns
 *   the value of the last expr. (and) returns true.
 */
cljs.core$macros.and = (function cljs$core$macros$and(var_args){
var args30007 = [];
var len__21530__auto___30014 = arguments.length;
var i__21531__auto___30015 = (0);
while(true){
if((i__21531__auto___30015 < len__21530__auto___30014)){
args30007.push((arguments[i__21531__auto___30015]));

var G__30016 = (i__21531__auto___30015 + (1));
i__21531__auto___30015 = G__30016;
continue;
} else {
}
break;
}

var G__30013 = args30007.length;
switch (G__30013) {
case 2:
return cljs.core$macros.and.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core$macros.and.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__21549__auto__ = (new cljs.core.IndexedSeq(args30007.slice((3)),(0),null));
return cljs.core$macros.and.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__21549__auto__);

}
});

cljs.core$macros.and.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return true;
});

cljs.core$macros.and.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.and.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,next){
var forms = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null),next);
if(cljs.core.every_QMARK_.call(null,((function (forms){
return (function (p1__30004_SHARP_){
return cljs.core$macros.simple_test_expr_QMARK_.call(null,_AMPERSAND_env,p1__30004_SHARP_);
});})(forms))
,cljs.core.map.call(null,((function (forms){
return (function (p1__30005_SHARP_){
return cljs.analyzer.analyze.call(null,_AMPERSAND_env,p1__30005_SHARP_);
});})(forms))
,forms))){
var and_str = cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," && ",cljs.core.repeat.call(null,cljs.core.count.call(null,forms),"(~{})")));
return cljs.core$macros.bool_expr.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),(function (){var x__21289__auto__ = and_str;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),forms))));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__21289__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"and__30006__auto__","and__30006__auto__",1367619898,null)),(function (){var x__21289__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"and__30006__auto__","and__30006__auto__",1367619898,null)),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),next)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"and__30006__auto__","and__30006__auto__",1367619898,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
}
});

cljs.core$macros.and.cljs$lang$applyTo = (function (seq30008){
var G__30009 = cljs.core.first.call(null,seq30008);
var seq30008__$1 = cljs.core.next.call(null,seq30008);
var G__30010 = cljs.core.first.call(null,seq30008__$1);
var seq30008__$2 = cljs.core.next.call(null,seq30008__$1);
var G__30011 = cljs.core.first.call(null,seq30008__$2);
var seq30008__$3 = cljs.core.next.call(null,seq30008__$2);
return cljs.core$macros.and.cljs$core$IFn$_invoke$arity$variadic(G__30009,G__30010,G__30011,seq30008__$3);
});

cljs.core$macros.and.cljs$lang$maxFixedArity = (3);


cljs.core$macros.and.cljs$lang$macro = true;
/**
 * Evaluates exprs one at a time, from left to right. If a form
 *   returns a logical true value, or returns that value and doesn't
 *   evaluate any of the other expressions, otherwise it returns the
 *   value of the last expression. (or) returns nil.
 */
cljs.core$macros.or = (function cljs$core$macros$or(var_args){
var args30021 = [];
var len__21530__auto___30028 = arguments.length;
var i__21531__auto___30029 = (0);
while(true){
if((i__21531__auto___30029 < len__21530__auto___30028)){
args30021.push((arguments[i__21531__auto___30029]));

var G__30030 = (i__21531__auto___30029 + (1));
i__21531__auto___30029 = G__30030;
continue;
} else {
}
break;
}

var G__30027 = args30021.length;
switch (G__30027) {
case 2:
return cljs.core$macros.or.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core$macros.or.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__21549__auto__ = (new cljs.core.IndexedSeq(args30021.slice((3)),(0),null));
return cljs.core$macros.or.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__21549__auto__);

}
});

cljs.core$macros.or.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return null;
});

cljs.core$macros.or.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.or.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,next){
var forms = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null),next);
if(cljs.core.every_QMARK_.call(null,((function (forms){
return (function (p1__30018_SHARP_){
return cljs.core$macros.simple_test_expr_QMARK_.call(null,_AMPERSAND_env,p1__30018_SHARP_);
});})(forms))
,cljs.core.map.call(null,((function (forms){
return (function (p1__30019_SHARP_){
return cljs.analyzer.analyze.call(null,_AMPERSAND_env,p1__30019_SHARP_);
});})(forms))
,forms))){
var or_str = cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," || ",cljs.core.repeat.call(null,cljs.core.count.call(null,forms),"(~{})")));
return cljs.core$macros.bool_expr.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),(function (){var x__21289__auto__ = or_str;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),forms))));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__21289__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"or__30020__auto__","or__30020__auto__",-1702462608,null)),(function (){var x__21289__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"or__30020__auto__","or__30020__auto__",-1702462608,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"or__30020__auto__","or__30020__auto__",-1702462608,null)),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","or","cljs.core$macros/or",1346243648,null)),next)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
}
});

cljs.core$macros.or.cljs$lang$applyTo = (function (seq30022){
var G__30023 = cljs.core.first.call(null,seq30022);
var seq30022__$1 = cljs.core.next.call(null,seq30022);
var G__30024 = cljs.core.first.call(null,seq30022__$1);
var seq30022__$2 = cljs.core.next.call(null,seq30022__$1);
var G__30025 = cljs.core.first.call(null,seq30022__$2);
var seq30022__$3 = cljs.core.next.call(null,seq30022__$2);
return cljs.core$macros.or.cljs$core$IFn$_invoke$arity$variadic(G__30023,G__30024,G__30025,seq30022__$3);
});

cljs.core$macros.or.cljs$lang$maxFixedArity = (3);


cljs.core$macros.or.cljs$lang$macro = true;
cljs.core$macros.nil_QMARK_ = (function cljs$core$macros$nil_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","coercive-=","cljs.core$macros/coercive-=",-1655776086,null)),(function (){var x__21289__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
});

cljs.core$macros.nil_QMARK_.cljs$lang$macro = true;
cljs.core$macros.coercive_not = (function cljs$core$macros$coercive_not(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__21289__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),"(!~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.coercive_not.cljs$lang$macro = true;
cljs.core$macros.coercive_not_EQ_ = (function cljs$core$macros$coercive_not_EQ_(_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__21289__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__21289__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto____$1);
})(),x__21289__auto__);
})(),"(~{} != ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.coercive_not_EQ_.cljs$lang$macro = true;
cljs.core$macros.coercive__EQ_ = (function cljs$core$macros$coercive__EQ_(_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__21289__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__21289__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto____$1);
})(),x__21289__auto__);
})(),"(~{} == ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.coercive__EQ_.cljs$lang$macro = true;
cljs.core$macros.coercive_boolean = (function cljs$core$macros$coercive_boolean(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.with_meta.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__21289__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),"~{}"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null)], null));
});

cljs.core$macros.coercive_boolean.cljs$lang$macro = true;
cljs.core$macros.truth_ = (function cljs$core$macros$truth_(_AMPERSAND_form,_AMPERSAND_env,x){
if((x instanceof cljs.core.Symbol)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("x is substituted twice"),cljs.core.str("\n"),cljs.core.str("(core/symbol? x)")].join('')));
}

return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__21289__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__21289__auto____$1 = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto____$1);
})(),x__21289__auto__);
})(),"(~{} != null && ~{} !== false)"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.truth_.cljs$lang$macro = true;
cljs.core$macros.js_arguments = (function cljs$core$macros$js_arguments(_AMPERSAND_form,_AMPERSAND_env){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,"arguments"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.js_arguments.cljs$lang$macro = true;
cljs.core$macros.js_delete = (function cljs$core$macros$js_delete(_AMPERSAND_form,_AMPERSAND_env,obj,key){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__21289__auto__ = obj;
return cljs.core._conj.call(null,(function (){var x__21289__auto____$1 = key;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto____$1);
})(),x__21289__auto__);
})(),"delete ~{}[~{}]"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.js_delete.cljs$lang$macro = true;
cljs.core$macros.js_in = (function cljs$core$macros$js_in(_AMPERSAND_form,_AMPERSAND_env,key,obj){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__21289__auto__ = key;
return cljs.core._conj.call(null,(function (){var x__21289__auto____$1 = obj;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto____$1);
})(),x__21289__auto__);
})(),"~{} in ~{}"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.js_in.cljs$lang$macro = true;
/**
 * Emit JavaScript "debugger;" statement
 */
cljs.core$macros.js_debugger = (function cljs$core$macros$js_debugger(_AMPERSAND_form,_AMPERSAND_env){
return cljs.core._conj.call(null,(function (){var x__21289__auto__ = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,"debugger"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,null),x__21289__auto__);
})(),new cljs.core.Symbol(null,"do","do",1686842252,null));
});

cljs.core$macros.js_debugger.cljs$lang$macro = true;
/**
 * Emit a top-level JavaScript multi-line comment. New lines will create a
 *   new comment line. Comment block will be preceded and followed by a newline
 */
cljs.core$macros.js_comment = (function cljs$core$macros$js_comment(_AMPERSAND_form,_AMPERSAND_env,comment){
var vec__30036 = clojure.string.split.call(null,comment,/\n/);
var seq__30037 = cljs.core.seq.call(null,vec__30036);
var first__30038 = cljs.core.first.call(null,seq__30037);
var seq__30037__$1 = cljs.core.next.call(null,seq__30037);
var x = first__30038;
var ys = seq__30037__$1;
return cljs.core._conj.call(null,(function (){var x__21289__auto__ = [cljs.core.str("\n/**\n"),cljs.core.str([cljs.core.str(" * "),cljs.core.str(x),cljs.core.str("\n")].join('')),cljs.core.str(cljs.core.reduce.call(null,cljs.core.str,"",cljs.core.map.call(null,((function (vec__30036,seq__30037,first__30038,seq__30037__$1,x,ys){
return (function (p1__30032_SHARP_){
return [cljs.core.str(" * "),cljs.core.str(clojure.string.replace.call(null,p1__30032_SHARP_,/^   /,"")),cljs.core.str("\n")].join('');
});})(vec__30036,seq__30037,first__30038,seq__30037__$1,x,ys))
,ys))),cljs.core.str(" */\n")].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.js_comment.cljs$lang$macro = true;
/**
 * EXPERIMENTAL: Subject to change. Unsafely cast a value to a different type.
 */
cljs.core$macros.unsafe_cast = (function cljs$core$macros$unsafe_cast(_AMPERSAND_form,_AMPERSAND_env,t,x){
var cast_expr = [cljs.core.str("~{} = /** @type {"),cljs.core.str(t),cljs.core.str("} */ (~{})")].join('');
return cljs.core._conj.call(null,(function (){var x__21289__auto__ = cast_expr;
return cljs.core._conj.call(null,(function (){var x__21289__auto____$1 = x;
return cljs.core._conj.call(null,(function (){var x__21289__auto____$2 = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto____$2);
})(),x__21289__auto____$1);
})(),x__21289__auto__);
})(),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.unsafe_cast.cljs$lang$macro = true;
/**
 * Emit an inline JavaScript comment.
 */
cljs.core$macros.js_inline_comment = (function cljs$core$macros$js_inline_comment(_AMPERSAND_form,_AMPERSAND_env,comment){
return cljs.core._conj.call(null,(function (){var x__21289__auto__ = [cljs.core.str("/**"),cljs.core.str(comment),cljs.core.str("*/")].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.js_inline_comment.cljs$lang$macro = true;
cljs.core$macros.true_QMARK_ = (function cljs$core$macros$true_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__21289__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),"~{} === true"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.true_QMARK_.cljs$lang$macro = true;
cljs.core$macros.false_QMARK_ = (function cljs$core$macros$false_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__21289__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),"~{} === false"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.false_QMARK_.cljs$lang$macro = true;
cljs.core$macros.string_QMARK_ = (function cljs$core$macros$string_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__21289__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),"typeof ~{} === 'string'"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.string_QMARK_.cljs$lang$macro = true;
/**
 * Return true if argument exists, analogous to usage of typeof operator
 * in JavaScript.
 */
cljs.core$macros.exists_QMARK_ = (function cljs$core$macros$exists_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__21289__auto__ = cljs.core.vary_meta.call(null,x,cljs.core.assoc,new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017),true);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),"typeof ~{} !== 'undefined'"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.exists_QMARK_.cljs$lang$macro = true;
/**
 * Return true if argument is identical to the JavaScript undefined value.
 */
cljs.core$macros.undefined_QMARK_ = (function cljs$core$macros$undefined_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__21289__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),"(void 0 === ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.undefined_QMARK_.cljs$lang$macro = true;
cljs.core$macros.identical_QMARK_ = (function cljs$core$macros$identical_QMARK_(_AMPERSAND_form,_AMPERSAND_env,a,b){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__21289__auto__ = a;
return cljs.core._conj.call(null,(function (){var x__21289__auto____$1 = b;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto____$1);
})(),x__21289__auto__);
})(),"(~{} === ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.identical_QMARK_.cljs$lang$macro = true;
cljs.core$macros.instance_QMARK_ = (function cljs$core$macros$instance_QMARK_(_AMPERSAND_form,_AMPERSAND_env,c,x){
return cljs.core$macros.bool_expr.call(null,(((c instanceof cljs.core.Symbol))?cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__21289__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__21289__auto____$1 = c;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto____$1);
})(),x__21289__auto__);
})(),"(~{} instanceof ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)):cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__21289__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__30039__auto__","c__30039__auto__",-1037498309,null)),(function (){var x__21289__auto__ = c;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__30040__auto__","x__30040__auto__",-1331360036,null)),(function (){var x__21289__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"(~{} instanceof ~{})"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__30040__auto__","x__30040__auto__",-1331360036,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__30039__auto__","c__30039__auto__",-1037498309,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())))));
});

cljs.core$macros.instance_QMARK_.cljs$lang$macro = true;
cljs.core$macros.number_QMARK_ = (function cljs$core$macros$number_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__21289__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),"typeof ~{} === 'number'"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.number_QMARK_.cljs$lang$macro = true;
cljs.core$macros.symbol_QMARK_ = (function cljs$core$macros$symbol_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","instance?","cljs.core$macros/instance?",1829750179,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","Symbol","cljs.core/Symbol",292989338,null)),(function (){var x__21289__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})()))));
});

cljs.core$macros.symbol_QMARK_.cljs$lang$macro = true;
cljs.core$macros.keyword_QMARK_ = (function cljs$core$macros$keyword_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","instance?","cljs.core$macros/instance?",1829750179,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","Keyword","cljs.core/Keyword",-451434488,null)),(function (){var x__21289__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})()))));
});

cljs.core$macros.keyword_QMARK_.cljs$lang$macro = true;
cljs.core$macros.aget = (function cljs$core$macros$aget(var_args){
var args30041 = [];
var len__21530__auto___30049 = arguments.length;
var i__21531__auto___30050 = (0);
while(true){
if((i__21531__auto___30050 < len__21530__auto___30049)){
args30041.push((arguments[i__21531__auto___30050]));

var G__30051 = (i__21531__auto___30050 + (1));
i__21531__auto___30050 = G__30051;
continue;
} else {
}
break;
}

var G__30048 = args30041.length;
switch (G__30048) {
case 4:
return cljs.core$macros.aget.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__21549__auto__ = (new cljs.core.IndexedSeq(args30041.slice((4)),(0),null));
return cljs.core$macros.aget.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__21549__auto__);

}
});

cljs.core$macros.aget.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,a,i){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__21289__auto__ = a;
return cljs.core._conj.call(null,(function (){var x__21289__auto____$1 = i;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto____$1);
})(),x__21289__auto__);
})(),"(~{}[~{}])"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.aget.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,a,i,idxs){
var astr = cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,cljs.core.count.call(null,idxs),"[~{}]"));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),(function (){var x__21289__auto__ = [cljs.core.str("(~{}[~{}]"),cljs.core.str(astr),cljs.core.str(")")].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = a;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = i;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),idxs)));
});

cljs.core$macros.aget.cljs$lang$applyTo = (function (seq30042){
var G__30043 = cljs.core.first.call(null,seq30042);
var seq30042__$1 = cljs.core.next.call(null,seq30042);
var G__30044 = cljs.core.first.call(null,seq30042__$1);
var seq30042__$2 = cljs.core.next.call(null,seq30042__$1);
var G__30045 = cljs.core.first.call(null,seq30042__$2);
var seq30042__$3 = cljs.core.next.call(null,seq30042__$2);
var G__30046 = cljs.core.first.call(null,seq30042__$3);
var seq30042__$4 = cljs.core.next.call(null,seq30042__$3);
return cljs.core$macros.aget.cljs$core$IFn$_invoke$arity$variadic(G__30043,G__30044,G__30045,G__30046,seq30042__$4);
});

cljs.core$macros.aget.cljs$lang$maxFixedArity = (4);


cljs.core$macros.aget.cljs$lang$macro = true;
cljs.core$macros.aset = (function cljs$core$macros$aset(var_args){
var args30053 = [];
var len__21530__auto___30062 = arguments.length;
var i__21531__auto___30063 = (0);
while(true){
if((i__21531__auto___30063 < len__21530__auto___30062)){
args30053.push((arguments[i__21531__auto___30063]));

var G__30064 = (i__21531__auto___30063 + (1));
i__21531__auto___30063 = G__30064;
continue;
} else {
}
break;
}

var G__30061 = args30053.length;
switch (G__30061) {
case 5:
return cljs.core$macros.aset.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
var argseq__21549__auto__ = (new cljs.core.IndexedSeq(args30053.slice((5)),(0),null));
return cljs.core$macros.aset.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__21549__auto__);

}
});

cljs.core$macros.aset.cljs$core$IFn$_invoke$arity$5 = (function (_AMPERSAND_form,_AMPERSAND_env,a,i,v){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__21289__auto__ = a;
return cljs.core._conj.call(null,(function (){var x__21289__auto____$1 = i;
return cljs.core._conj.call(null,(function (){var x__21289__auto____$2 = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto____$2);
})(),x__21289__auto____$1);
})(),x__21289__auto__);
})(),"(~{}[~{}] = ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.aset.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,a,idx,idx2,idxv){
var n = (cljs.core.count.call(null,idxv) - (1));
var astr = cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,n,"[~{}]"));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),(function (){var x__21289__auto__ = [cljs.core.str("(~{}[~{}][~{}]"),cljs.core.str(astr),cljs.core.str(" = ~{})")].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = a;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = idx2;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),idxv)));
});

cljs.core$macros.aset.cljs$lang$applyTo = (function (seq30054){
var G__30055 = cljs.core.first.call(null,seq30054);
var seq30054__$1 = cljs.core.next.call(null,seq30054);
var G__30056 = cljs.core.first.call(null,seq30054__$1);
var seq30054__$2 = cljs.core.next.call(null,seq30054__$1);
var G__30057 = cljs.core.first.call(null,seq30054__$2);
var seq30054__$3 = cljs.core.next.call(null,seq30054__$2);
var G__30058 = cljs.core.first.call(null,seq30054__$3);
var seq30054__$4 = cljs.core.next.call(null,seq30054__$3);
var G__30059 = cljs.core.first.call(null,seq30054__$4);
var seq30054__$5 = cljs.core.next.call(null,seq30054__$4);
return cljs.core$macros.aset.cljs$core$IFn$_invoke$arity$variadic(G__30055,G__30056,G__30057,G__30058,G__30059,seq30054__$5);
});

cljs.core$macros.aset.cljs$lang$maxFixedArity = (5);


cljs.core$macros.aset.cljs$lang$macro = true;
cljs.core$macros._PLUS_ = (function cljs$core$macros$_PLUS_(var_args){
var args30066 = [];
var len__21530__auto___30074 = arguments.length;
var i__21531__auto___30075 = (0);
while(true){
if((i__21531__auto___30075 < len__21530__auto___30074)){
args30066.push((arguments[i__21531__auto___30075]));

var G__30076 = (i__21531__auto___30075 + (1));
i__21531__auto___30075 = G__30076;
continue;
} else {
}
break;
}

var G__30073 = args30066.length;
switch (G__30073) {
case 2:
return cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__21549__auto__ = (new cljs.core.IndexedSeq(args30066.slice((4)),(0),null));
return cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__21549__auto__);

}
});

cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return (0);
});

cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__21289__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__21289__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto____$1);
})(),x__21289__auto__);
})(),"(~{} + ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","+","cljs.core$macros/+",-18260342,null)),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","+","cljs.core$macros/+",-18260342,null)),(function (){var x__21289__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),more)));
});

cljs.core$macros._PLUS_.cljs$lang$applyTo = (function (seq30067){
var G__30068 = cljs.core.first.call(null,seq30067);
var seq30067__$1 = cljs.core.next.call(null,seq30067);
var G__30069 = cljs.core.first.call(null,seq30067__$1);
var seq30067__$2 = cljs.core.next.call(null,seq30067__$1);
var G__30070 = cljs.core.first.call(null,seq30067__$2);
var seq30067__$3 = cljs.core.next.call(null,seq30067__$2);
var G__30071 = cljs.core.first.call(null,seq30067__$3);
var seq30067__$4 = cljs.core.next.call(null,seq30067__$3);
return cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$variadic(G__30068,G__30069,G__30070,G__30071,seq30067__$4);
});

cljs.core$macros._PLUS_.cljs$lang$maxFixedArity = (4);


cljs.core$macros._PLUS_.cljs$lang$macro = true;
cljs.core$macros.byte$ = (function cljs$core$macros$byte(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.byte$.cljs$lang$macro = true;
cljs.core$macros.short$ = (function cljs$core$macros$short(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.short$.cljs$lang$macro = true;
cljs.core$macros.float$ = (function cljs$core$macros$float(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.float$.cljs$lang$macro = true;
cljs.core$macros.double$ = (function cljs$core$macros$double(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.double$.cljs$lang$macro = true;
cljs.core$macros.unchecked_byte = (function cljs$core$macros$unchecked_byte(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.unchecked_byte.cljs$lang$macro = true;
cljs.core$macros.unchecked_char = (function cljs$core$macros$unchecked_char(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.unchecked_char.cljs$lang$macro = true;
cljs.core$macros.unchecked_short = (function cljs$core$macros$unchecked_short(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.unchecked_short.cljs$lang$macro = true;
cljs.core$macros.unchecked_float = (function cljs$core$macros$unchecked_float(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.unchecked_float.cljs$lang$macro = true;
cljs.core$macros.unchecked_double = (function cljs$core$macros$unchecked_double(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.unchecked_double.cljs$lang$macro = true;
cljs.core$macros.unchecked_add = (function cljs$core$macros$unchecked_add(var_args){
var args__21537__auto__ = [];
var len__21530__auto___30081 = arguments.length;
var i__21531__auto___30082 = (0);
while(true){
if((i__21531__auto___30082 < len__21530__auto___30081)){
args__21537__auto__.push((arguments[i__21531__auto___30082]));

var G__30083 = (i__21531__auto___30082 + (1));
i__21531__auto___30082 = G__30083;
continue;
} else {
}
break;
}

var argseq__21538__auto__ = ((((2) < args__21537__auto__.length))?(new cljs.core.IndexedSeq(args__21537__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_add.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__21538__auto__);
});

cljs.core$macros.unchecked_add.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","+","cljs.core$macros/+",-18260342,null)),xs)));
});

cljs.core$macros.unchecked_add.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_add.cljs$lang$applyTo = (function (seq30078){
var G__30079 = cljs.core.first.call(null,seq30078);
var seq30078__$1 = cljs.core.next.call(null,seq30078);
var G__30080 = cljs.core.first.call(null,seq30078__$1);
var seq30078__$2 = cljs.core.next.call(null,seq30078__$1);
return cljs.core$macros.unchecked_add.cljs$core$IFn$_invoke$arity$variadic(G__30079,G__30080,seq30078__$2);
});


cljs.core$macros.unchecked_add.cljs$lang$macro = true;
cljs.core$macros.unchecked_add_int = (function cljs$core$macros$unchecked_add_int(var_args){
var args__21537__auto__ = [];
var len__21530__auto___30087 = arguments.length;
var i__21531__auto___30088 = (0);
while(true){
if((i__21531__auto___30088 < len__21530__auto___30087)){
args__21537__auto__.push((arguments[i__21531__auto___30088]));

var G__30089 = (i__21531__auto___30088 + (1));
i__21531__auto___30088 = G__30089;
continue;
} else {
}
break;
}

var argseq__21538__auto__ = ((((2) < args__21537__auto__.length))?(new cljs.core.IndexedSeq(args__21537__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_add_int.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__21538__auto__);
});

cljs.core$macros.unchecked_add_int.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","+","cljs.core$macros/+",-18260342,null)),xs)));
});

cljs.core$macros.unchecked_add_int.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_add_int.cljs$lang$applyTo = (function (seq30084){
var G__30085 = cljs.core.first.call(null,seq30084);
var seq30084__$1 = cljs.core.next.call(null,seq30084);
var G__30086 = cljs.core.first.call(null,seq30084__$1);
var seq30084__$2 = cljs.core.next.call(null,seq30084__$1);
return cljs.core$macros.unchecked_add_int.cljs$core$IFn$_invoke$arity$variadic(G__30085,G__30086,seq30084__$2);
});


cljs.core$macros.unchecked_add_int.cljs$lang$macro = true;
cljs.core$macros.unchecked_dec = (function cljs$core$macros$unchecked_dec(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","dec","cljs.core$macros/dec",-247694061,null)),(function (){var x__21289__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
});

cljs.core$macros.unchecked_dec.cljs$lang$macro = true;
cljs.core$macros.unchecked_dec_int = (function cljs$core$macros$unchecked_dec_int(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","dec","cljs.core$macros/dec",-247694061,null)),(function (){var x__21289__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
});

cljs.core$macros.unchecked_dec_int.cljs$lang$macro = true;
cljs.core$macros.unchecked_divide_int = (function cljs$core$macros$unchecked_divide_int(var_args){
var args__21537__auto__ = [];
var len__21530__auto___30093 = arguments.length;
var i__21531__auto___30094 = (0);
while(true){
if((i__21531__auto___30094 < len__21530__auto___30093)){
args__21537__auto__.push((arguments[i__21531__auto___30094]));

var G__30095 = (i__21531__auto___30094 + (1));
i__21531__auto___30094 = G__30095;
continue;
} else {
}
break;
}

var argseq__21538__auto__ = ((((2) < args__21537__auto__.length))?(new cljs.core.IndexedSeq(args__21537__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_divide_int.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__21538__auto__);
});

cljs.core$macros.unchecked_divide_int.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","/","cljs.core$macros//",-893374331,null)),xs)));
});

cljs.core$macros.unchecked_divide_int.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_divide_int.cljs$lang$applyTo = (function (seq30090){
var G__30091 = cljs.core.first.call(null,seq30090);
var seq30090__$1 = cljs.core.next.call(null,seq30090);
var G__30092 = cljs.core.first.call(null,seq30090__$1);
var seq30090__$2 = cljs.core.next.call(null,seq30090__$1);
return cljs.core$macros.unchecked_divide_int.cljs$core$IFn$_invoke$arity$variadic(G__30091,G__30092,seq30090__$2);
});


cljs.core$macros.unchecked_divide_int.cljs$lang$macro = true;
cljs.core$macros.unchecked_inc = (function cljs$core$macros$unchecked_inc(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","inc","cljs.core$macros/inc",876629257,null)),(function (){var x__21289__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
});

cljs.core$macros.unchecked_inc.cljs$lang$macro = true;
cljs.core$macros.unchecked_inc_int = (function cljs$core$macros$unchecked_inc_int(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","inc","cljs.core$macros/inc",876629257,null)),(function (){var x__21289__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
});

cljs.core$macros.unchecked_inc_int.cljs$lang$macro = true;
cljs.core$macros.unchecked_multiply = (function cljs$core$macros$unchecked_multiply(var_args){
var args__21537__auto__ = [];
var len__21530__auto___30099 = arguments.length;
var i__21531__auto___30100 = (0);
while(true){
if((i__21531__auto___30100 < len__21530__auto___30099)){
args__21537__auto__.push((arguments[i__21531__auto___30100]));

var G__30101 = (i__21531__auto___30100 + (1));
i__21531__auto___30100 = G__30101;
continue;
} else {
}
break;
}

var argseq__21538__auto__ = ((((2) < args__21537__auto__.length))?(new cljs.core.IndexedSeq(args__21537__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_multiply.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__21538__auto__);
});

cljs.core$macros.unchecked_multiply.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","*","cljs.core$macros/*",946321529,null)),xs)));
});

cljs.core$macros.unchecked_multiply.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_multiply.cljs$lang$applyTo = (function (seq30096){
var G__30097 = cljs.core.first.call(null,seq30096);
var seq30096__$1 = cljs.core.next.call(null,seq30096);
var G__30098 = cljs.core.first.call(null,seq30096__$1);
var seq30096__$2 = cljs.core.next.call(null,seq30096__$1);
return cljs.core$macros.unchecked_multiply.cljs$core$IFn$_invoke$arity$variadic(G__30097,G__30098,seq30096__$2);
});


cljs.core$macros.unchecked_multiply.cljs$lang$macro = true;
cljs.core$macros.unchecked_multiply_int = (function cljs$core$macros$unchecked_multiply_int(var_args){
var args__21537__auto__ = [];
var len__21530__auto___30105 = arguments.length;
var i__21531__auto___30106 = (0);
while(true){
if((i__21531__auto___30106 < len__21530__auto___30105)){
args__21537__auto__.push((arguments[i__21531__auto___30106]));

var G__30107 = (i__21531__auto___30106 + (1));
i__21531__auto___30106 = G__30107;
continue;
} else {
}
break;
}

var argseq__21538__auto__ = ((((2) < args__21537__auto__.length))?(new cljs.core.IndexedSeq(args__21537__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_multiply_int.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__21538__auto__);
});

cljs.core$macros.unchecked_multiply_int.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","*","cljs.core$macros/*",946321529,null)),xs)));
});

cljs.core$macros.unchecked_multiply_int.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_multiply_int.cljs$lang$applyTo = (function (seq30102){
var G__30103 = cljs.core.first.call(null,seq30102);
var seq30102__$1 = cljs.core.next.call(null,seq30102);
var G__30104 = cljs.core.first.call(null,seq30102__$1);
var seq30102__$2 = cljs.core.next.call(null,seq30102__$1);
return cljs.core$macros.unchecked_multiply_int.cljs$core$IFn$_invoke$arity$variadic(G__30103,G__30104,seq30102__$2);
});


cljs.core$macros.unchecked_multiply_int.cljs$lang$macro = true;
cljs.core$macros.unchecked_negate = (function cljs$core$macros$unchecked_negate(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),(function (){var x__21289__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
});

cljs.core$macros.unchecked_negate.cljs$lang$macro = true;
cljs.core$macros.unchecked_negate_int = (function cljs$core$macros$unchecked_negate_int(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),(function (){var x__21289__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
});

cljs.core$macros.unchecked_negate_int.cljs$lang$macro = true;
cljs.core$macros.unchecked_remainder_int = (function cljs$core$macros$unchecked_remainder_int(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","mod","cljs.core$macros/mod",2132457375,null)),(function (){var x__21289__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
});

cljs.core$macros.unchecked_remainder_int.cljs$lang$macro = true;
cljs.core$macros.unchecked_subtract = (function cljs$core$macros$unchecked_subtract(var_args){
var args__21537__auto__ = [];
var len__21530__auto___30111 = arguments.length;
var i__21531__auto___30112 = (0);
while(true){
if((i__21531__auto___30112 < len__21530__auto___30111)){
args__21537__auto__.push((arguments[i__21531__auto___30112]));

var G__30113 = (i__21531__auto___30112 + (1));
i__21531__auto___30112 = G__30113;
continue;
} else {
}
break;
}

var argseq__21538__auto__ = ((((2) < args__21537__auto__.length))?(new cljs.core.IndexedSeq(args__21537__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_subtract.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__21538__auto__);
});

cljs.core$macros.unchecked_subtract.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),xs)));
});

cljs.core$macros.unchecked_subtract.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_subtract.cljs$lang$applyTo = (function (seq30108){
var G__30109 = cljs.core.first.call(null,seq30108);
var seq30108__$1 = cljs.core.next.call(null,seq30108);
var G__30110 = cljs.core.first.call(null,seq30108__$1);
var seq30108__$2 = cljs.core.next.call(null,seq30108__$1);
return cljs.core$macros.unchecked_subtract.cljs$core$IFn$_invoke$arity$variadic(G__30109,G__30110,seq30108__$2);
});


cljs.core$macros.unchecked_subtract.cljs$lang$macro = true;
cljs.core$macros.unchecked_subtract_int = (function cljs$core$macros$unchecked_subtract_int(var_args){
var args__21537__auto__ = [];
var len__21530__auto___30117 = arguments.length;
var i__21531__auto___30118 = (0);
while(true){
if((i__21531__auto___30118 < len__21530__auto___30117)){
args__21537__auto__.push((arguments[i__21531__auto___30118]));

var G__30119 = (i__21531__auto___30118 + (1));
i__21531__auto___30118 = G__30119;
continue;
} else {
}
break;
}

var argseq__21538__auto__ = ((((2) < args__21537__auto__.length))?(new cljs.core.IndexedSeq(args__21537__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_subtract_int.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__21538__auto__);
});

cljs.core$macros.unchecked_subtract_int.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),xs)));
});

cljs.core$macros.unchecked_subtract_int.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_subtract_int.cljs$lang$applyTo = (function (seq30114){
var G__30115 = cljs.core.first.call(null,seq30114);
var seq30114__$1 = cljs.core.next.call(null,seq30114);
var G__30116 = cljs.core.first.call(null,seq30114__$1);
var seq30114__$2 = cljs.core.next.call(null,seq30114__$1);
return cljs.core$macros.unchecked_subtract_int.cljs$core$IFn$_invoke$arity$variadic(G__30115,G__30116,seq30114__$2);
});


cljs.core$macros.unchecked_subtract_int.cljs$lang$macro = true;
cljs.core$macros._ = (function cljs$core$macros$_(var_args){
var args30120 = [];
var len__21530__auto___30128 = arguments.length;
var i__21531__auto___30129 = (0);
while(true){
if((i__21531__auto___30129 < len__21530__auto___30128)){
args30120.push((arguments[i__21531__auto___30129]));

var G__30130 = (i__21531__auto___30129 + (1));
i__21531__auto___30129 = G__30130;
continue;
} else {
}
break;
}

var G__30127 = args30120.length;
switch (G__30127) {
case 3:
return cljs.core$macros._.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__21549__auto__ = (new cljs.core.IndexedSeq(args30120.slice((4)),(0),null));
return cljs.core$macros._.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__21549__auto__);

}
});

cljs.core$macros._.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__21289__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),"(- ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros._.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__21289__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__21289__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto____$1);
})(),x__21289__auto__);
})(),"(~{} - ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros._.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),(function (){var x__21289__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),more)));
});

cljs.core$macros._.cljs$lang$applyTo = (function (seq30121){
var G__30122 = cljs.core.first.call(null,seq30121);
var seq30121__$1 = cljs.core.next.call(null,seq30121);
var G__30123 = cljs.core.first.call(null,seq30121__$1);
var seq30121__$2 = cljs.core.next.call(null,seq30121__$1);
var G__30124 = cljs.core.first.call(null,seq30121__$2);
var seq30121__$3 = cljs.core.next.call(null,seq30121__$2);
var G__30125 = cljs.core.first.call(null,seq30121__$3);
var seq30121__$4 = cljs.core.next.call(null,seq30121__$3);
return cljs.core$macros._.cljs$core$IFn$_invoke$arity$variadic(G__30122,G__30123,G__30124,G__30125,seq30121__$4);
});

cljs.core$macros._.cljs$lang$maxFixedArity = (4);


cljs.core$macros._.cljs$lang$macro = true;
cljs.core$macros._STAR_ = (function cljs$core$macros$_STAR_(var_args){
var args30132 = [];
var len__21530__auto___30140 = arguments.length;
var i__21531__auto___30141 = (0);
while(true){
if((i__21531__auto___30141 < len__21530__auto___30140)){
args30132.push((arguments[i__21531__auto___30141]));

var G__30142 = (i__21531__auto___30141 + (1));
i__21531__auto___30141 = G__30142;
continue;
} else {
}
break;
}

var G__30139 = args30132.length;
switch (G__30139) {
case 2:
return cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__21549__auto__ = (new cljs.core.IndexedSeq(args30132.slice((4)),(0),null));
return cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__21549__auto__);

}
});

cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return (1);
});

cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__21289__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__21289__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto____$1);
})(),x__21289__auto__);
})(),"(~{} * ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","*","cljs.core$macros/*",946321529,null)),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","*","cljs.core$macros/*",946321529,null)),(function (){var x__21289__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),more)));
});

cljs.core$macros._STAR_.cljs$lang$applyTo = (function (seq30133){
var G__30134 = cljs.core.first.call(null,seq30133);
var seq30133__$1 = cljs.core.next.call(null,seq30133);
var G__30135 = cljs.core.first.call(null,seq30133__$1);
var seq30133__$2 = cljs.core.next.call(null,seq30133__$1);
var G__30136 = cljs.core.first.call(null,seq30133__$2);
var seq30133__$3 = cljs.core.next.call(null,seq30133__$2);
var G__30137 = cljs.core.first.call(null,seq30133__$3);
var seq30133__$4 = cljs.core.next.call(null,seq30133__$3);
return cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$variadic(G__30134,G__30135,G__30136,G__30137,seq30133__$4);
});

cljs.core$macros._STAR_.cljs$lang$maxFixedArity = (4);


cljs.core$macros._STAR_.cljs$lang$macro = true;
cljs.core$macros._SLASH_ = (function cljs$core$macros$_SLASH_(var_args){
var args30144 = [];
var len__21530__auto___30152 = arguments.length;
var i__21531__auto___30153 = (0);
while(true){
if((i__21531__auto___30153 < len__21530__auto___30152)){
args30144.push((arguments[i__21531__auto___30153]));

var G__30154 = (i__21531__auto___30153 + (1));
i__21531__auto___30153 = G__30154;
continue;
} else {
}
break;
}

var G__30151 = args30144.length;
switch (G__30151) {
case 3:
return cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__21549__auto__ = (new cljs.core.IndexedSeq(args30144.slice((4)),(0),null));
return cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__21549__auto__);

}
});

cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","/","cljs.core$macros//",-893374331,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,(1)),(function (){var x__21289__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
});

cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__21289__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__21289__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto____$1);
})(),x__21289__auto__);
})(),"(~{} / ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","/","cljs.core$macros//",-893374331,null)),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","/","cljs.core$macros//",-893374331,null)),(function (){var x__21289__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),more)));
});

cljs.core$macros._SLASH_.cljs$lang$applyTo = (function (seq30145){
var G__30146 = cljs.core.first.call(null,seq30145);
var seq30145__$1 = cljs.core.next.call(null,seq30145);
var G__30147 = cljs.core.first.call(null,seq30145__$1);
var seq30145__$2 = cljs.core.next.call(null,seq30145__$1);
var G__30148 = cljs.core.first.call(null,seq30145__$2);
var seq30145__$3 = cljs.core.next.call(null,seq30145__$2);
var G__30149 = cljs.core.first.call(null,seq30145__$3);
var seq30145__$4 = cljs.core.next.call(null,seq30145__$3);
return cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$variadic(G__30146,G__30147,G__30148,G__30149,seq30145__$4);
});

cljs.core$macros._SLASH_.cljs$lang$maxFixedArity = (4);


cljs.core$macros._SLASH_.cljs$lang$macro = true;
cljs.core$macros.divide = (function cljs$core$macros$divide(var_args){
var args30156 = [];
var len__21530__auto___30164 = arguments.length;
var i__21531__auto___30165 = (0);
while(true){
if((i__21531__auto___30165 < len__21530__auto___30164)){
args30156.push((arguments[i__21531__auto___30165]));

var G__30166 = (i__21531__auto___30165 + (1));
i__21531__auto___30165 = G__30166;
continue;
} else {
}
break;
}

var G__30163 = args30156.length;
switch (G__30163) {
case 3:
return cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__21549__auto__ = (new cljs.core.IndexedSeq(args30156.slice((4)),(0),null));
return cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__21549__auto__);

}
});

cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","/","cljs.core$macros//",-893374331,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,(1)),(function (){var x__21289__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
});

cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__21289__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__21289__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto____$1);
})(),x__21289__auto__);
})(),"(~{} / ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","/","cljs.core$macros//",-893374331,null)),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","/","cljs.core$macros//",-893374331,null)),(function (){var x__21289__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),more)));
});

cljs.core$macros.divide.cljs$lang$applyTo = (function (seq30157){
var G__30158 = cljs.core.first.call(null,seq30157);
var seq30157__$1 = cljs.core.next.call(null,seq30157);
var G__30159 = cljs.core.first.call(null,seq30157__$1);
var seq30157__$2 = cljs.core.next.call(null,seq30157__$1);
var G__30160 = cljs.core.first.call(null,seq30157__$2);
var seq30157__$3 = cljs.core.next.call(null,seq30157__$2);
var G__30161 = cljs.core.first.call(null,seq30157__$3);
var seq30157__$4 = cljs.core.next.call(null,seq30157__$3);
return cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$variadic(G__30158,G__30159,G__30160,G__30161,seq30157__$4);
});

cljs.core$macros.divide.cljs$lang$maxFixedArity = (4);


cljs.core$macros.divide.cljs$lang$macro = true;
cljs.core$macros._LT_ = (function cljs$core$macros$_LT_(var_args){
var args30168 = [];
var len__21530__auto___30176 = arguments.length;
var i__21531__auto___30177 = (0);
while(true){
if((i__21531__auto___30177 < len__21530__auto___30176)){
args30168.push((arguments[i__21531__auto___30177]));

var G__30178 = (i__21531__auto___30177 + (1));
i__21531__auto___30177 = G__30178;
continue;
} else {
}
break;
}

var G__30175 = args30168.length;
switch (G__30175) {
case 3:
return cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__21549__auto__ = (new cljs.core.IndexedSeq(args30168.slice((4)),(0),null));
return cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__21549__auto__);

}
});

cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return true;
});

cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__21289__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__21289__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto____$1);
})(),x__21289__auto__);
})(),"(~{} < ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__21289__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__21289__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),more)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
});

cljs.core$macros._LT_.cljs$lang$applyTo = (function (seq30169){
var G__30170 = cljs.core.first.call(null,seq30169);
var seq30169__$1 = cljs.core.next.call(null,seq30169);
var G__30171 = cljs.core.first.call(null,seq30169__$1);
var seq30169__$2 = cljs.core.next.call(null,seq30169__$1);
var G__30172 = cljs.core.first.call(null,seq30169__$2);
var seq30169__$3 = cljs.core.next.call(null,seq30169__$2);
var G__30173 = cljs.core.first.call(null,seq30169__$3);
var seq30169__$4 = cljs.core.next.call(null,seq30169__$3);
return cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$variadic(G__30170,G__30171,G__30172,G__30173,seq30169__$4);
});

cljs.core$macros._LT_.cljs$lang$maxFixedArity = (4);


cljs.core$macros._LT_.cljs$lang$macro = true;
cljs.core$macros._LT__EQ_ = (function cljs$core$macros$_LT__EQ_(var_args){
var args30180 = [];
var len__21530__auto___30188 = arguments.length;
var i__21531__auto___30189 = (0);
while(true){
if((i__21531__auto___30189 < len__21530__auto___30188)){
args30180.push((arguments[i__21531__auto___30189]));

var G__30190 = (i__21531__auto___30189 + (1));
i__21531__auto___30189 = G__30190;
continue;
} else {
}
break;
}

var G__30187 = args30180.length;
switch (G__30187) {
case 3:
return cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__21549__auto__ = (new cljs.core.IndexedSeq(args30180.slice((4)),(0),null));
return cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__21549__auto__);

}
});

cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return true;
});

cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__21289__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__21289__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto____$1);
})(),x__21289__auto__);
})(),"(~{} <= ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<=","cljs.core$macros/<=",1865244377,null)),(function (){var x__21289__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<=","cljs.core$macros/<=",1865244377,null)),(function (){var x__21289__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),more)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
});

cljs.core$macros._LT__EQ_.cljs$lang$applyTo = (function (seq30181){
var G__30182 = cljs.core.first.call(null,seq30181);
var seq30181__$1 = cljs.core.next.call(null,seq30181);
var G__30183 = cljs.core.first.call(null,seq30181__$1);
var seq30181__$2 = cljs.core.next.call(null,seq30181__$1);
var G__30184 = cljs.core.first.call(null,seq30181__$2);
var seq30181__$3 = cljs.core.next.call(null,seq30181__$2);
var G__30185 = cljs.core.first.call(null,seq30181__$3);
var seq30181__$4 = cljs.core.next.call(null,seq30181__$3);
return cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$variadic(G__30182,G__30183,G__30184,G__30185,seq30181__$4);
});

cljs.core$macros._LT__EQ_.cljs$lang$maxFixedArity = (4);


cljs.core$macros._LT__EQ_.cljs$lang$macro = true;
cljs.core$macros._GT_ = (function cljs$core$macros$_GT_(var_args){
var args30192 = [];
var len__21530__auto___30200 = arguments.length;
var i__21531__auto___30201 = (0);
while(true){
if((i__21531__auto___30201 < len__21530__auto___30200)){
args30192.push((arguments[i__21531__auto___30201]));

var G__30202 = (i__21531__auto___30201 + (1));
i__21531__auto___30201 = G__30202;
continue;
} else {
}
break;
}

var G__30199 = args30192.length;
switch (G__30199) {
case 3:
return cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__21549__auto__ = (new cljs.core.IndexedSeq(args30192.slice((4)),(0),null));
return cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__21549__auto__);

}
});

cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return true;
});

cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__21289__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__21289__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto____$1);
})(),x__21289__auto__);
})(),"(~{} > ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros",">","cljs.core$macros/>",1703297853,null)),(function (){var x__21289__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros",">","cljs.core$macros/>",1703297853,null)),(function (){var x__21289__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),more)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
});

cljs.core$macros._GT_.cljs$lang$applyTo = (function (seq30193){
var G__30194 = cljs.core.first.call(null,seq30193);
var seq30193__$1 = cljs.core.next.call(null,seq30193);
var G__30195 = cljs.core.first.call(null,seq30193__$1);
var seq30193__$2 = cljs.core.next.call(null,seq30193__$1);
var G__30196 = cljs.core.first.call(null,seq30193__$2);
var seq30193__$3 = cljs.core.next.call(null,seq30193__$2);
var G__30197 = cljs.core.first.call(null,seq30193__$3);
var seq30193__$4 = cljs.core.next.call(null,seq30193__$3);
return cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$variadic(G__30194,G__30195,G__30196,G__30197,seq30193__$4);
});

cljs.core$macros._GT_.cljs$lang$maxFixedArity = (4);


cljs.core$macros._GT_.cljs$lang$macro = true;
cljs.core$macros._GT__EQ_ = (function cljs$core$macros$_GT__EQ_(var_args){
var args30204 = [];
var len__21530__auto___30212 = arguments.length;
var i__21531__auto___30213 = (0);
while(true){
if((i__21531__auto___30213 < len__21530__auto___30212)){
args30204.push((arguments[i__21531__auto___30213]));

var G__30214 = (i__21531__auto___30213 + (1));
i__21531__auto___30213 = G__30214;
continue;
} else {
}
break;
}

var G__30211 = args30204.length;
switch (G__30211) {
case 3:
return cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__21549__auto__ = (new cljs.core.IndexedSeq(args30204.slice((4)),(0),null));
return cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__21549__auto__);

}
});

cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return true;
});

cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__21289__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__21289__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto____$1);
})(),x__21289__auto__);
})(),"(~{} >= ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros",">=","cljs.core$macros/>=",527849062,null)),(function (){var x__21289__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros",">=","cljs.core$macros/>=",527849062,null)),(function (){var x__21289__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),more)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
});

cljs.core$macros._GT__EQ_.cljs$lang$applyTo = (function (seq30205){
var G__30206 = cljs.core.first.call(null,seq30205);
var seq30205__$1 = cljs.core.next.call(null,seq30205);
var G__30207 = cljs.core.first.call(null,seq30205__$1);
var seq30205__$2 = cljs.core.next.call(null,seq30205__$1);
var G__30208 = cljs.core.first.call(null,seq30205__$2);
var seq30205__$3 = cljs.core.next.call(null,seq30205__$2);
var G__30209 = cljs.core.first.call(null,seq30205__$3);
var seq30205__$4 = cljs.core.next.call(null,seq30205__$3);
return cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$variadic(G__30206,G__30207,G__30208,G__30209,seq30205__$4);
});

cljs.core$macros._GT__EQ_.cljs$lang$maxFixedArity = (4);


cljs.core$macros._GT__EQ_.cljs$lang$macro = true;
cljs.core$macros._EQ__EQ_ = (function cljs$core$macros$_EQ__EQ_(var_args){
var args30216 = [];
var len__21530__auto___30224 = arguments.length;
var i__21531__auto___30225 = (0);
while(true){
if((i__21531__auto___30225 < len__21530__auto___30224)){
args30216.push((arguments[i__21531__auto___30225]));

var G__30226 = (i__21531__auto___30225 + (1));
i__21531__auto___30225 = G__30226;
continue;
} else {
}
break;
}

var G__30223 = args30216.length;
switch (G__30223) {
case 3:
return cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__21549__auto__ = (new cljs.core.IndexedSeq(args30216.slice((4)),(0),null));
return cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__21549__auto__);

}
});

cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return true;
});

cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__21289__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__21289__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto____$1);
})(),x__21289__auto__);
})(),"(~{} === ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","==","cljs.core$macros/==",-818551413,null)),(function (){var x__21289__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","==","cljs.core$macros/==",-818551413,null)),(function (){var x__21289__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),more)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
});

cljs.core$macros._EQ__EQ_.cljs$lang$applyTo = (function (seq30217){
var G__30218 = cljs.core.first.call(null,seq30217);
var seq30217__$1 = cljs.core.next.call(null,seq30217);
var G__30219 = cljs.core.first.call(null,seq30217__$1);
var seq30217__$2 = cljs.core.next.call(null,seq30217__$1);
var G__30220 = cljs.core.first.call(null,seq30217__$2);
var seq30217__$3 = cljs.core.next.call(null,seq30217__$2);
var G__30221 = cljs.core.first.call(null,seq30217__$3);
var seq30217__$4 = cljs.core.next.call(null,seq30217__$3);
return cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$variadic(G__30218,G__30219,G__30220,G__30221,seq30217__$4);
});

cljs.core$macros._EQ__EQ_.cljs$lang$maxFixedArity = (4);


cljs.core$macros._EQ__EQ_.cljs$lang$macro = true;
cljs.core$macros.dec = (function cljs$core$macros$dec(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),(function (){var x__21289__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(1)))));
});

cljs.core$macros.dec.cljs$lang$macro = true;
cljs.core$macros.inc = (function cljs$core$macros$inc(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","+","cljs.core$macros/+",-18260342,null)),(function (){var x__21289__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(1)))));
});

cljs.core$macros.inc.cljs$lang$macro = true;
cljs.core$macros.zero_QMARK_ = (function cljs$core$macros$zero_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","==","cljs.core$macros/==",-818551413,null)),(function (){var x__21289__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)))));
});

cljs.core$macros.zero_QMARK_.cljs$lang$macro = true;
cljs.core$macros.pos_QMARK_ = (function cljs$core$macros$pos_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros",">","cljs.core$macros/>",1703297853,null)),(function (){var x__21289__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)))));
});

cljs.core$macros.pos_QMARK_.cljs$lang$macro = true;
cljs.core$macros.neg_QMARK_ = (function cljs$core$macros$neg_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__21289__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)))));
});

cljs.core$macros.neg_QMARK_.cljs$lang$macro = true;
cljs.core$macros.max = (function cljs$core$macros$max(var_args){
var args30230 = [];
var len__21530__auto___30238 = arguments.length;
var i__21531__auto___30239 = (0);
while(true){
if((i__21531__auto___30239 < len__21530__auto___30238)){
args30230.push((arguments[i__21531__auto___30239]));

var G__30240 = (i__21531__auto___30239 + (1));
i__21531__auto___30239 = G__30240;
continue;
} else {
}
break;
}

var G__30237 = args30230.length;
switch (G__30237) {
case 3:
return cljs.core$macros.max.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.max.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__21549__auto__ = (new cljs.core.IndexedSeq(args30230.slice((4)),(0),null));
return cljs.core$macros.max.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__21549__auto__);

}
});

cljs.core$macros.max.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.max.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__21289__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__30228__auto__","x__30228__auto__",899577115,null)),(function (){var x__21289__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"y__30229__auto__","y__30229__auto__",-172049027,null)),(function (){var x__21289__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"((~{} > ~{}) ? ~{} : ~{})"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__30228__auto__","x__30228__auto__",899577115,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"y__30229__auto__","y__30229__auto__",-172049027,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__30228__auto__","x__30228__auto__",899577115,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"y__30229__auto__","y__30229__auto__",-172049027,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
});

cljs.core$macros.max.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","max","cljs.core$macros/max",1176150699,null)),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","max","cljs.core$macros/max",1176150699,null)),(function (){var x__21289__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),more)));
});

cljs.core$macros.max.cljs$lang$applyTo = (function (seq30231){
var G__30232 = cljs.core.first.call(null,seq30231);
var seq30231__$1 = cljs.core.next.call(null,seq30231);
var G__30233 = cljs.core.first.call(null,seq30231__$1);
var seq30231__$2 = cljs.core.next.call(null,seq30231__$1);
var G__30234 = cljs.core.first.call(null,seq30231__$2);
var seq30231__$3 = cljs.core.next.call(null,seq30231__$2);
var G__30235 = cljs.core.first.call(null,seq30231__$3);
var seq30231__$4 = cljs.core.next.call(null,seq30231__$3);
return cljs.core$macros.max.cljs$core$IFn$_invoke$arity$variadic(G__30232,G__30233,G__30234,G__30235,seq30231__$4);
});

cljs.core$macros.max.cljs$lang$maxFixedArity = (4);


cljs.core$macros.max.cljs$lang$macro = true;
cljs.core$macros.min = (function cljs$core$macros$min(var_args){
var args30244 = [];
var len__21530__auto___30252 = arguments.length;
var i__21531__auto___30253 = (0);
while(true){
if((i__21531__auto___30253 < len__21530__auto___30252)){
args30244.push((arguments[i__21531__auto___30253]));

var G__30254 = (i__21531__auto___30253 + (1));
i__21531__auto___30253 = G__30254;
continue;
} else {
}
break;
}

var G__30251 = args30244.length;
switch (G__30251) {
case 3:
return cljs.core$macros.min.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.min.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__21549__auto__ = (new cljs.core.IndexedSeq(args30244.slice((4)),(0),null));
return cljs.core$macros.min.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__21549__auto__);

}
});

cljs.core$macros.min.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.min.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__21289__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__30242__auto__","x__30242__auto__",-1309735558,null)),(function (){var x__21289__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"y__30243__auto__","y__30243__auto__",870645200,null)),(function (){var x__21289__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"((~{} < ~{}) ? ~{} : ~{})"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__30242__auto__","x__30242__auto__",-1309735558,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"y__30243__auto__","y__30243__auto__",870645200,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__30242__auto__","x__30242__auto__",-1309735558,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"y__30243__auto__","y__30243__auto__",870645200,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
});

cljs.core$macros.min.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","min","cljs.core$macros/min",1499775161,null)),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","min","cljs.core$macros/min",1499775161,null)),(function (){var x__21289__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),more)));
});

cljs.core$macros.min.cljs$lang$applyTo = (function (seq30245){
var G__30246 = cljs.core.first.call(null,seq30245);
var seq30245__$1 = cljs.core.next.call(null,seq30245);
var G__30247 = cljs.core.first.call(null,seq30245__$1);
var seq30245__$2 = cljs.core.next.call(null,seq30245__$1);
var G__30248 = cljs.core.first.call(null,seq30245__$2);
var seq30245__$3 = cljs.core.next.call(null,seq30245__$2);
var G__30249 = cljs.core.first.call(null,seq30245__$3);
var seq30245__$4 = cljs.core.next.call(null,seq30245__$3);
return cljs.core$macros.min.cljs$core$IFn$_invoke$arity$variadic(G__30246,G__30247,G__30248,G__30249,seq30245__$4);
});

cljs.core$macros.min.cljs$lang$maxFixedArity = (4);


cljs.core$macros.min.cljs$lang$macro = true;
cljs.core$macros.js_mod = (function cljs$core$macros$js_mod(_AMPERSAND_form,_AMPERSAND_env,num,div){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__21289__auto__ = num;
return cljs.core._conj.call(null,(function (){var x__21289__auto____$1 = div;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto____$1);
})(),x__21289__auto__);
})(),"(~{} % ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.js_mod.cljs$lang$macro = true;
cljs.core$macros.bit_not = (function cljs$core$macros$bit_not(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__21289__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),"(~ ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_not.cljs$lang$macro = true;
cljs.core$macros.bit_and = (function cljs$core$macros$bit_and(var_args){
var args30256 = [];
var len__21530__auto___30264 = arguments.length;
var i__21531__auto___30265 = (0);
while(true){
if((i__21531__auto___30265 < len__21530__auto___30264)){
args30256.push((arguments[i__21531__auto___30265]));

var G__30266 = (i__21531__auto___30265 + (1));
i__21531__auto___30265 = G__30266;
continue;
} else {
}
break;
}

var G__30263 = args30256.length;
switch (G__30263) {
case 4:
return cljs.core$macros.bit_and.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__21549__auto__ = (new cljs.core.IndexedSeq(args30256.slice((4)),(0),null));
return cljs.core$macros.bit_and.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__21549__auto__);

}
});

cljs.core$macros.bit_and.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__21289__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__21289__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto____$1);
})(),x__21289__auto__);
})(),"(~{} & ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_and.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-and","cljs.core$macros/bit-and",-1069060797,null)),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-and","cljs.core$macros/bit-and",-1069060797,null)),(function (){var x__21289__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),more)));
});

cljs.core$macros.bit_and.cljs$lang$applyTo = (function (seq30257){
var G__30258 = cljs.core.first.call(null,seq30257);
var seq30257__$1 = cljs.core.next.call(null,seq30257);
var G__30259 = cljs.core.first.call(null,seq30257__$1);
var seq30257__$2 = cljs.core.next.call(null,seq30257__$1);
var G__30260 = cljs.core.first.call(null,seq30257__$2);
var seq30257__$3 = cljs.core.next.call(null,seq30257__$2);
var G__30261 = cljs.core.first.call(null,seq30257__$3);
var seq30257__$4 = cljs.core.next.call(null,seq30257__$3);
return cljs.core$macros.bit_and.cljs$core$IFn$_invoke$arity$variadic(G__30258,G__30259,G__30260,G__30261,seq30257__$4);
});

cljs.core$macros.bit_and.cljs$lang$maxFixedArity = (4);


cljs.core$macros.bit_and.cljs$lang$macro = true;
cljs.core$macros.unsafe_bit_and = (function cljs$core$macros$unsafe_bit_and(var_args){
var args30268 = [];
var len__21530__auto___30276 = arguments.length;
var i__21531__auto___30277 = (0);
while(true){
if((i__21531__auto___30277 < len__21530__auto___30276)){
args30268.push((arguments[i__21531__auto___30277]));

var G__30278 = (i__21531__auto___30277 + (1));
i__21531__auto___30277 = G__30278;
continue;
} else {
}
break;
}

var G__30275 = args30268.length;
switch (G__30275) {
case 4:
return cljs.core$macros.unsafe_bit_and.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__21549__auto__ = (new cljs.core.IndexedSeq(args30268.slice((4)),(0),null));
return cljs.core$macros.unsafe_bit_and.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__21549__auto__);

}
});

cljs.core$macros.unsafe_bit_and.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__21289__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__21289__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto____$1);
})(),x__21289__auto__);
})(),"(~{} & ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.unsafe_bit_and.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unsafe-bit-and","cljs.core$macros/unsafe-bit-and",1803731600,null)),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unsafe-bit-and","cljs.core$macros/unsafe-bit-and",1803731600,null)),(function (){var x__21289__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),more)));
});

cljs.core$macros.unsafe_bit_and.cljs$lang$applyTo = (function (seq30269){
var G__30270 = cljs.core.first.call(null,seq30269);
var seq30269__$1 = cljs.core.next.call(null,seq30269);
var G__30271 = cljs.core.first.call(null,seq30269__$1);
var seq30269__$2 = cljs.core.next.call(null,seq30269__$1);
var G__30272 = cljs.core.first.call(null,seq30269__$2);
var seq30269__$3 = cljs.core.next.call(null,seq30269__$2);
var G__30273 = cljs.core.first.call(null,seq30269__$3);
var seq30269__$4 = cljs.core.next.call(null,seq30269__$3);
return cljs.core$macros.unsafe_bit_and.cljs$core$IFn$_invoke$arity$variadic(G__30270,G__30271,G__30272,G__30273,seq30269__$4);
});

cljs.core$macros.unsafe_bit_and.cljs$lang$maxFixedArity = (4);


cljs.core$macros.unsafe_bit_and.cljs$lang$macro = true;
cljs.core$macros.bit_or = (function cljs$core$macros$bit_or(var_args){
var args30280 = [];
var len__21530__auto___30288 = arguments.length;
var i__21531__auto___30289 = (0);
while(true){
if((i__21531__auto___30289 < len__21530__auto___30288)){
args30280.push((arguments[i__21531__auto___30289]));

var G__30290 = (i__21531__auto___30289 + (1));
i__21531__auto___30289 = G__30290;
continue;
} else {
}
break;
}

var G__30287 = args30280.length;
switch (G__30287) {
case 4:
return cljs.core$macros.bit_or.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__21549__auto__ = (new cljs.core.IndexedSeq(args30280.slice((4)),(0),null));
return cljs.core$macros.bit_or.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__21549__auto__);

}
});

cljs.core$macros.bit_or.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__21289__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__21289__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto____$1);
})(),x__21289__auto__);
})(),"(~{} | ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_or.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-or","cljs.core$macros/bit-or",1463236165,null)),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-or","cljs.core$macros/bit-or",1463236165,null)),(function (){var x__21289__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),more)));
});

cljs.core$macros.bit_or.cljs$lang$applyTo = (function (seq30281){
var G__30282 = cljs.core.first.call(null,seq30281);
var seq30281__$1 = cljs.core.next.call(null,seq30281);
var G__30283 = cljs.core.first.call(null,seq30281__$1);
var seq30281__$2 = cljs.core.next.call(null,seq30281__$1);
var G__30284 = cljs.core.first.call(null,seq30281__$2);
var seq30281__$3 = cljs.core.next.call(null,seq30281__$2);
var G__30285 = cljs.core.first.call(null,seq30281__$3);
var seq30281__$4 = cljs.core.next.call(null,seq30281__$3);
return cljs.core$macros.bit_or.cljs$core$IFn$_invoke$arity$variadic(G__30282,G__30283,G__30284,G__30285,seq30281__$4);
});

cljs.core$macros.bit_or.cljs$lang$maxFixedArity = (4);


cljs.core$macros.bit_or.cljs$lang$macro = true;
cljs.core$macros.int$ = (function cljs$core$macros$int(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-or","cljs.core$macros/bit-or",1463236165,null)),(function (){var x__21289__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)))));
});

cljs.core$macros.int$.cljs$lang$macro = true;
cljs.core$macros.bit_xor = (function cljs$core$macros$bit_xor(var_args){
var args30292 = [];
var len__21530__auto___30300 = arguments.length;
var i__21531__auto___30301 = (0);
while(true){
if((i__21531__auto___30301 < len__21530__auto___30300)){
args30292.push((arguments[i__21531__auto___30301]));

var G__30302 = (i__21531__auto___30301 + (1));
i__21531__auto___30301 = G__30302;
continue;
} else {
}
break;
}

var G__30299 = args30292.length;
switch (G__30299) {
case 4:
return cljs.core$macros.bit_xor.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__21549__auto__ = (new cljs.core.IndexedSeq(args30292.slice((4)),(0),null));
return cljs.core$macros.bit_xor.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__21549__auto__);

}
});

cljs.core$macros.bit_xor.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__21289__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__21289__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto____$1);
})(),x__21289__auto__);
})(),"(~{} ^ ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_xor.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-xor","cljs.core$macros/bit-xor",1284619191,null)),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-xor","cljs.core$macros/bit-xor",1284619191,null)),(function (){var x__21289__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),more)));
});

cljs.core$macros.bit_xor.cljs$lang$applyTo = (function (seq30293){
var G__30294 = cljs.core.first.call(null,seq30293);
var seq30293__$1 = cljs.core.next.call(null,seq30293);
var G__30295 = cljs.core.first.call(null,seq30293__$1);
var seq30293__$2 = cljs.core.next.call(null,seq30293__$1);
var G__30296 = cljs.core.first.call(null,seq30293__$2);
var seq30293__$3 = cljs.core.next.call(null,seq30293__$2);
var G__30297 = cljs.core.first.call(null,seq30293__$3);
var seq30293__$4 = cljs.core.next.call(null,seq30293__$3);
return cljs.core$macros.bit_xor.cljs$core$IFn$_invoke$arity$variadic(G__30294,G__30295,G__30296,G__30297,seq30293__$4);
});

cljs.core$macros.bit_xor.cljs$lang$maxFixedArity = (4);


cljs.core$macros.bit_xor.cljs$lang$macro = true;
cljs.core$macros.bit_and_not = (function cljs$core$macros$bit_and_not(var_args){
var args30304 = [];
var len__21530__auto___30312 = arguments.length;
var i__21531__auto___30313 = (0);
while(true){
if((i__21531__auto___30313 < len__21530__auto___30312)){
args30304.push((arguments[i__21531__auto___30313]));

var G__30314 = (i__21531__auto___30313 + (1));
i__21531__auto___30313 = G__30314;
continue;
} else {
}
break;
}

var G__30311 = args30304.length;
switch (G__30311) {
case 4:
return cljs.core$macros.bit_and_not.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__21549__auto__ = (new cljs.core.IndexedSeq(args30304.slice((4)),(0),null));
return cljs.core$macros.bit_and_not.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__21549__auto__);

}
});

cljs.core$macros.bit_and_not.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__21289__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__21289__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto____$1);
})(),x__21289__auto__);
})(),"(~{} & ~~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_and_not.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-and-not","cljs.core$macros/bit-and-not",-537076037,null)),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-and-not","cljs.core$macros/bit-and-not",-537076037,null)),(function (){var x__21289__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),more)));
});

cljs.core$macros.bit_and_not.cljs$lang$applyTo = (function (seq30305){
var G__30306 = cljs.core.first.call(null,seq30305);
var seq30305__$1 = cljs.core.next.call(null,seq30305);
var G__30307 = cljs.core.first.call(null,seq30305__$1);
var seq30305__$2 = cljs.core.next.call(null,seq30305__$1);
var G__30308 = cljs.core.first.call(null,seq30305__$2);
var seq30305__$3 = cljs.core.next.call(null,seq30305__$2);
var G__30309 = cljs.core.first.call(null,seq30305__$3);
var seq30305__$4 = cljs.core.next.call(null,seq30305__$3);
return cljs.core$macros.bit_and_not.cljs$core$IFn$_invoke$arity$variadic(G__30306,G__30307,G__30308,G__30309,seq30305__$4);
});

cljs.core$macros.bit_and_not.cljs$lang$maxFixedArity = (4);


cljs.core$macros.bit_and_not.cljs$lang$macro = true;
cljs.core$macros.bit_clear = (function cljs$core$macros$bit_clear(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__21289__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__21289__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto____$1);
})(),x__21289__auto__);
})(),"(~{} & ~(1 << ~{}))"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_clear.cljs$lang$macro = true;
cljs.core$macros.bit_flip = (function cljs$core$macros$bit_flip(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__21289__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__21289__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto____$1);
})(),x__21289__auto__);
})(),"(~{} ^ (1 << ~{}))"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_flip.cljs$lang$macro = true;
cljs.core$macros.bit_test = (function cljs$core$macros$bit_test(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__21289__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__21289__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto____$1);
})(),x__21289__auto__);
})(),"((~{} & (1 << ~{})) != 0)"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.bit_test.cljs$lang$macro = true;
cljs.core$macros.bit_shift_left = (function cljs$core$macros$bit_shift_left(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__21289__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__21289__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto____$1);
})(),x__21289__auto__);
})(),"(~{} << ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_shift_left.cljs$lang$macro = true;
cljs.core$macros.bit_shift_right = (function cljs$core$macros$bit_shift_right(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__21289__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__21289__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto____$1);
})(),x__21289__auto__);
})(),"(~{} >> ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_shift_right.cljs$lang$macro = true;
cljs.core$macros.bit_shift_right_zero_fill = (function cljs$core$macros$bit_shift_right_zero_fill(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__21289__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__21289__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto____$1);
})(),x__21289__auto__);
})(),"(~{} >>> ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_shift_right_zero_fill.cljs$lang$macro = true;
cljs.core$macros.unsigned_bit_shift_right = (function cljs$core$macros$unsigned_bit_shift_right(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__21289__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__21289__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto____$1);
})(),x__21289__auto__);
})(),"(~{} >>> ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.unsigned_bit_shift_right.cljs$lang$macro = true;
cljs.core$macros.bit_set = (function cljs$core$macros$bit_set(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__21289__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__21289__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto____$1);
})(),x__21289__auto__);
})(),"(~{} | (1 << ~{}))"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_set.cljs$lang$macro = true;
cljs.core$macros.mask = (function cljs$core$macros$mask(_AMPERSAND_form,_AMPERSAND_env,hash,shift){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__21289__auto__ = hash;
return cljs.core._conj.call(null,(function (){var x__21289__auto____$1 = shift;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto____$1);
})(),x__21289__auto__);
})(),"((~{} >>> ~{}) & 0x01f)"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.mask.cljs$lang$macro = true;
cljs.core$macros.bitpos = (function cljs$core$macros$bitpos(_AMPERSAND_form,_AMPERSAND_env,hash,shift){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","mask","cljs.core$macros/mask",1575319768,null)),(function (){var x__21289__auto__ = hash;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = shift;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),"(1 << ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bitpos.cljs$lang$macro = true;
cljs.core$macros.caching_hash = (function cljs$core$macros$caching_hash(_AMPERSAND_form,_AMPERSAND_env,coll,hash_fn,hash_key){
if((hash_key instanceof cljs.core.Symbol)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("hash-key is substituted twice"),cljs.core.str("\n"),cljs.core.str("(clojure.core/symbol? hash-key)")].join('')));
}

return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__21289__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"h__30316__auto__","h__30316__auto__",843440849,null)),(function (){var x__21289__auto__ = hash_key;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null)),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"h__30316__auto__","h__30316__auto__",843440849,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"h__30316__auto__","h__30316__auto__",843440849,null)),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__21289__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"h__30316__auto__","h__30316__auto__",843440849,null)),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__21289__auto__ = hash_fn;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = coll;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__21289__auto__ = hash_key;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"h__30316__auto__","h__30316__auto__",843440849,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"h__30316__auto__","h__30316__auto__",843440849,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
});

cljs.core$macros.caching_hash.cljs$lang$macro = true;
cljs.core$macros.do_curried = (function cljs$core$macros$do_curried(name,doc,meta,args,body){
var cargs = cljs.core.vec.call(null,cljs.core.butlast.call(null,args));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","defn","cljs.core$macros/defn",-728332354,null)),(function (){var x__21289__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = doc;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = meta;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__21289__auto__ = cargs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__21289__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__30317__auto__","x__30317__auto__",-417746509,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__21289__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),cargs,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__30317__auto__","x__30317__auto__",-417746509,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__21289__auto__ = args;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
});
/**
 * Builds another arity of the fn that returns a fn awaiting the last
 *   param
 */
cljs.core$macros.defcurried = (function cljs$core$macros$defcurried(var_args){
var args__21537__auto__ = [];
var len__21530__auto___30325 = arguments.length;
var i__21531__auto___30326 = (0);
while(true){
if((i__21531__auto___30326 < len__21530__auto___30325)){
args__21537__auto__.push((arguments[i__21531__auto___30326]));

var G__30327 = (i__21531__auto___30326 + (1));
i__21531__auto___30326 = G__30327;
continue;
} else {
}
break;
}

var argseq__21538__auto__ = ((((6) < args__21537__auto__.length))?(new cljs.core.IndexedSeq(args__21537__auto__.slice((6)),(0),null)):null);
return cljs.core$macros.defcurried.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),argseq__21538__auto__);
});

cljs.core$macros.defcurried.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,doc,meta,args,body){
return cljs.core$macros.do_curried.call(null,name,doc,meta,args,body);
});

cljs.core$macros.defcurried.cljs$lang$maxFixedArity = (6);

cljs.core$macros.defcurried.cljs$lang$applyTo = (function (seq30318){
var G__30319 = cljs.core.first.call(null,seq30318);
var seq30318__$1 = cljs.core.next.call(null,seq30318);
var G__30320 = cljs.core.first.call(null,seq30318__$1);
var seq30318__$2 = cljs.core.next.call(null,seq30318__$1);
var G__30321 = cljs.core.first.call(null,seq30318__$2);
var seq30318__$3 = cljs.core.next.call(null,seq30318__$2);
var G__30322 = cljs.core.first.call(null,seq30318__$3);
var seq30318__$4 = cljs.core.next.call(null,seq30318__$3);
var G__30323 = cljs.core.first.call(null,seq30318__$4);
var seq30318__$5 = cljs.core.next.call(null,seq30318__$4);
var G__30324 = cljs.core.first.call(null,seq30318__$5);
var seq30318__$6 = cljs.core.next.call(null,seq30318__$5);
return cljs.core$macros.defcurried.cljs$core$IFn$_invoke$arity$variadic(G__30319,G__30320,G__30321,G__30322,G__30323,G__30324,seq30318__$6);
});


cljs.core$macros.defcurried.cljs$lang$macro = true;
cljs.core$macros.do_rfn = (function cljs$core$macros$do_rfn(f1,k,fkv){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__21289__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__21289__auto__ = f1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = clojure.walk.postwalk.call(null,(function (p1__30328_SHARP_){
if(cljs.core.sequential_QMARK_.call(null,p1__30328_SHARP_)){
return ((cljs.core.vector_QMARK_.call(null,p1__30328_SHARP_))?cljs.core.vec:cljs.core.identity).call(null,cljs.core.remove.call(null,cljs.core.PersistentHashSet.fromArray([k], true),p1__30328_SHARP_));
} else {
return p1__30328_SHARP_;
}
}),fkv);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = fkv;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
});
/**
 * Builds 3-arity reducing fn given names of wrapped fn and key, and k/v impl.
 */
cljs.core$macros.rfn = (function cljs$core$macros$rfn(_AMPERSAND_form,_AMPERSAND_env,p__30329,fkv){
var vec__30333 = p__30329;
var f1 = cljs.core.nth.call(null,vec__30333,(0),null);
var k = cljs.core.nth.call(null,vec__30333,(1),null);
return cljs.core$macros.do_rfn.call(null,f1,k,fkv);
});

cljs.core$macros.rfn.cljs$lang$macro = true;
cljs.core$macros.protocol_prefix = (function cljs$core$macros$protocol_prefix(psym){
return [cljs.core.str([cljs.core.str(psym)].join('').replace((new RegExp("\\.","g")),"$").replace("/","$")),cljs.core.str("$")].join('');
});
cljs.core$macros.base_type = new cljs.core.PersistentArrayMap(null, 8, [null,"null",new cljs.core.Symbol(null,"object","object",-1179821820,null),"object",new cljs.core.Symbol(null,"string","string",-349010059,null),"string",new cljs.core.Symbol(null,"number","number",-1084057331,null),"number",new cljs.core.Symbol(null,"array","array",-440182315,null),"array",new cljs.core.Symbol(null,"function","function",-486723946,null),"function",new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),"boolean",new cljs.core.Symbol(null,"default","default",-347290801,null),"_"], null);
cljs.core$macros.js_base_type = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Symbol("js","Boolean","js/Boolean",1661145260,null),"boolean",new cljs.core.Symbol("js","String","js/String",-2070054036,null),"string",new cljs.core.Symbol("js","Array","js/Array",-423508366,null),"array",new cljs.core.Symbol("js","Object","js/Object",61215323,null),"object",new cljs.core.Symbol("js","Number","js/Number",-508133572,null),"number",new cljs.core.Symbol("js","Function","js/Function",-749892063,null),"function"], null);
/**
 * reify is a macro with the following structure:
 * 
 *  (reify options* specs*)
 * 
 *   Currently there are no options.
 * 
 *   Each spec consists of the protocol name followed by zero
 *   or more method bodies:
 * 
 *   protocol
 *   (methodName [args+] body)*
 * 
 *   Methods should be supplied for all methods of the desired
 *   protocol(s). You can also define overrides for Object methods. Note that
 *   the first parameter must be supplied to correspond to the target object
 *   ('this' in JavaScript parlance). Note also that recur calls
 *   to the method head should *not* pass the target object, it will be supplied
 *   automatically and can not be substituted.
 * 
 *   recur works to method heads The method bodies of reify are lexical
 *   closures, and can refer to the surrounding local scope:
 * 
 *   (str (let [f "foo"]
 *     (reify Object
 *       (toString [this] f))))
 *   == "foo"
 * 
 *   (seq (let [f "foo"]
 *     (reify ISeqable
 *       (-seq [this] (-seq f)))))
 *   == (\f \o \o))
 * 
 *   reify always implements IMeta and IWithMeta and transfers meta
 *   data of the form to the created object.
 * 
 *   (meta ^{:k :v} (reify Object (toString [this] "foo")))
 *   == {:k :v}
 */
cljs.core$macros.reify = (function cljs$core$macros$reify(var_args){
var args__21537__auto__ = [];
var len__21530__auto___30339 = arguments.length;
var i__21531__auto___30340 = (0);
while(true){
if((i__21531__auto___30340 < len__21530__auto___30339)){
args__21537__auto__.push((arguments[i__21531__auto___30340]));

var G__30341 = (i__21531__auto___30340 + (1));
i__21531__auto___30340 = G__30341;
continue;
} else {
}
break;
}

var argseq__21538__auto__ = ((((2) < args__21537__auto__.length))?(new cljs.core.IndexedSeq(args__21537__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.reify.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__21538__auto__);
});

cljs.core$macros.reify.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,impls){
var t = cljs.core.with_meta.call(null,cljs.core.gensym.call(null,[cljs.core.str("t_"),cljs.core.str(clojure.string.replace.call(null,[cljs.core.str(cljs.core.munge.call(null,cljs.analyzer._STAR_cljs_ns_STAR_))].join(''),".","$"))].join('')),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"anonymous","anonymous",447897231),true], null));
var meta_sym = cljs.core.gensym.call(null,"meta");
var this_sym = cljs.core.gensym.call(null,"_");
var locals = cljs.core.keys.call(null,new cljs.core.Keyword(null,"locals","locals",535295783).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env));
var ns = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env));
var munge = cljs.compiler.munge;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-not","cljs.core$macros/when-not",-764302244,null)),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","exists?","cljs.core$macros/exists?",-1828590389,null)),(function (){var x__21289__auto__ = cljs.core.symbol.call(null,[cljs.core.str(ns)].join(''),[cljs.core.str(t)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","deftype","cljs.core$macros/deftype",1799045688,null)),(function (){var x__21289__auto__ = t;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,locals,(function (){var x__21289__auto__ = meta_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","IWithMeta","cljs.core/IWithMeta",-1981666051,null)),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-with-meta","-with-meta",-1610713823,null)),(function (){var x__21289__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__21289__auto__ = this_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = meta_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__21289__auto__ = t;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),locals,(function (){var x__21289__auto__ = meta_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","IMeta","cljs.core/IMeta",-1459057517,null)),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-meta","-meta",494863156,null)),(function (){var x__21289__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__21289__auto__ = this_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = meta_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),impls)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__21289__auto__ = t;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),locals,(function (){var x__21289__auto__ = cljs.analyzer.elide_reader_meta.call(null,cljs.core.meta.call(null,_AMPERSAND_form));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
});

cljs.core$macros.reify.cljs$lang$maxFixedArity = (2);

cljs.core$macros.reify.cljs$lang$applyTo = (function (seq30336){
var G__30337 = cljs.core.first.call(null,seq30336);
var seq30336__$1 = cljs.core.next.call(null,seq30336);
var G__30338 = cljs.core.first.call(null,seq30336__$1);
var seq30336__$2 = cljs.core.next.call(null,seq30336__$1);
return cljs.core$macros.reify.cljs$core$IFn$_invoke$arity$variadic(G__30337,G__30338,seq30336__$2);
});


cljs.core$macros.reify.cljs$lang$macro = true;
/**
 * Identical to reify but mutates its first argument.
 */
cljs.core$macros.specify_BANG_ = (function cljs$core$macros$specify_BANG_(var_args){
var args__21537__auto__ = [];
var len__21530__auto___30346 = arguments.length;
var i__21531__auto___30347 = (0);
while(true){
if((i__21531__auto___30347 < len__21530__auto___30346)){
args__21537__auto__.push((arguments[i__21531__auto___30347]));

var G__30348 = (i__21531__auto___30347 + (1));
i__21531__auto___30347 = G__30348;
continue;
} else {
}
break;
}

var argseq__21538__auto__ = ((((3) < args__21537__auto__.length))?(new cljs.core.IndexedSeq(args__21537__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.specify_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__21538__auto__);
});

cljs.core$macros.specify_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,impls){
var x = cljs.core.with_meta.call(null,cljs.core.gensym.call(null,"x"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"extend","extend",1836484006),new cljs.core.Keyword(null,"instance","instance",-2121349050)], null));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__21289__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__21289__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","extend-type","cljs.core$macros/extend-type",1713295201,null)),(function (){var x__21289__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),impls)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
});

cljs.core$macros.specify_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.specify_BANG_.cljs$lang$applyTo = (function (seq30342){
var G__30343 = cljs.core.first.call(null,seq30342);
var seq30342__$1 = cljs.core.next.call(null,seq30342);
var G__30344 = cljs.core.first.call(null,seq30342__$1);
var seq30342__$2 = cljs.core.next.call(null,seq30342__$1);
var G__30345 = cljs.core.first.call(null,seq30342__$2);
var seq30342__$3 = cljs.core.next.call(null,seq30342__$2);
return cljs.core$macros.specify_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__30343,G__30344,G__30345,seq30342__$3);
});


cljs.core$macros.specify_BANG_.cljs$lang$macro = true;
/**
 * Identical to specify! but does not mutate its first argument. The first
 *   argument must be an ICloneable instance.
 */
cljs.core$macros.specify = (function cljs$core$macros$specify(var_args){
var args__21537__auto__ = [];
var len__21530__auto___30353 = arguments.length;
var i__21531__auto___30354 = (0);
while(true){
if((i__21531__auto___30354 < len__21530__auto___30353)){
args__21537__auto__.push((arguments[i__21531__auto___30354]));

var G__30355 = (i__21531__auto___30354 + (1));
i__21531__auto___30354 = G__30355;
continue;
} else {
}
break;
}

var argseq__21538__auto__ = ((((3) < args__21537__auto__.length))?(new cljs.core.IndexedSeq(args__21537__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.specify.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__21538__auto__);
});

cljs.core$macros.specify.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,impls){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","specify!","cljs.core/specify!",-585401629,null)),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","clone","cljs.core/clone",1417120092,null)),(function (){var x__21289__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),impls)));
});

cljs.core$macros.specify.cljs$lang$maxFixedArity = (3);

cljs.core$macros.specify.cljs$lang$applyTo = (function (seq30349){
var G__30350 = cljs.core.first.call(null,seq30349);
var seq30349__$1 = cljs.core.next.call(null,seq30349);
var G__30351 = cljs.core.first.call(null,seq30349__$1);
var seq30349__$2 = cljs.core.next.call(null,seq30349__$1);
var G__30352 = cljs.core.first.call(null,seq30349__$2);
var seq30349__$3 = cljs.core.next.call(null,seq30349__$2);
return cljs.core$macros.specify.cljs$core$IFn$_invoke$arity$variadic(G__30350,G__30351,G__30352,seq30349__$3);
});


cljs.core$macros.specify.cljs$lang$macro = true;
cljs.core$macros.js_this = (function cljs$core$macros$js_this(_AMPERSAND_form,_AMPERSAND_env){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,"this"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.js_this.cljs$lang$macro = true;
/**
 * Defines a scope where JavaScript's implicit "this" is bound to the name provided.
 */
cljs.core$macros.this_as = (function cljs$core$macros$this_as(var_args){
var args__21537__auto__ = [];
var len__21530__auto___30360 = arguments.length;
var i__21531__auto___30361 = (0);
while(true){
if((i__21531__auto___30361 < len__21530__auto___30360)){
args__21537__auto__.push((arguments[i__21531__auto___30361]));

var G__30362 = (i__21531__auto___30361 + (1));
i__21531__auto___30361 = G__30362;
continue;
} else {
}
break;
}

var argseq__21538__auto__ = ((((3) < args__21537__auto__.length))?(new cljs.core.IndexedSeq(args__21537__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.this_as.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__21538__auto__);
});

cljs.core$macros.this_as.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__21289__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__21289__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","js-this","cljs.core$macros/js-this",353597180,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),body)));
});

cljs.core$macros.this_as.cljs$lang$maxFixedArity = (3);

cljs.core$macros.this_as.cljs$lang$applyTo = (function (seq30356){
var G__30357 = cljs.core.first.call(null,seq30356);
var seq30356__$1 = cljs.core.next.call(null,seq30356);
var G__30358 = cljs.core.first.call(null,seq30356__$1);
var seq30356__$2 = cljs.core.next.call(null,seq30356__$1);
var G__30359 = cljs.core.first.call(null,seq30356__$2);
var seq30356__$3 = cljs.core.next.call(null,seq30356__$2);
return cljs.core$macros.this_as.cljs$core$IFn$_invoke$arity$variadic(G__30357,G__30358,G__30359,seq30356__$3);
});


cljs.core$macros.this_as.cljs$lang$macro = true;
cljs.core$macros.to_property = (function cljs$core$macros$to_property(sym){
return cljs.core.symbol.call(null,[cljs.core.str("-"),cljs.core.str(sym)].join(''));
});
cljs.core$macros.warn_and_update_protocol = (function cljs$core$macros$warn_and_update_protocol(p,type,env){
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"Object","Object",61210754,null),p)){
return null;
} else {
var temp__4655__auto__ = cljs.analyzer.resolve_existing_var.call(null,cljs.core.dissoc.call(null,env,new cljs.core.Keyword(null,"locals","locals",535295783)),p);
if(cljs.core.truth_(temp__4655__auto__)){
var var$ = temp__4655__auto__;
if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol-symbol","protocol-symbol",1279552198).cljs$core$IFn$_invoke$arity$1(var$))){
} else {
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"invalid-protocol-symbol","invalid-protocol-symbol",86246948),env,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"protocol","protocol",652470118),p], null));
}

if(cljs.core.truth_((function (){var and__20443__auto__ = new cljs.core.Keyword(null,"protocol-deprecated","protocol-deprecated",103233497).cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_warnings_STAR_);
if(cljs.core.truth_(and__20443__auto__)){
var and__20443__auto____$1 = new cljs.core.Keyword(null,"deprecated","deprecated",1498275348).cljs$core$IFn$_invoke$arity$1(var$);
if(cljs.core.truth_(and__20443__auto____$1)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"deprecation-nowarn","deprecation-nowarn",-1762828044).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,p)));
} else {
return and__20443__auto____$1;
}
} else {
return and__20443__auto__;
}
})())){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"protocol-deprecated","protocol-deprecated",103233497),env,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"protocol","protocol",652470118),p], null));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol-symbol","protocol-symbol",1279552198).cljs$core$IFn$_invoke$arity$1(var$))){
return cljs.core.swap_BANG_.call(null,cljs.env._STAR_compiler_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927)], null),((function (var$,temp__4655__auto__){
return (function (ns){
return cljs.core.update_in.call(null,ns,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(var$),new cljs.core.Keyword(null,"defs","defs",1398449717),cljs.core.symbol.call(null,cljs.core.name.call(null,p)),new cljs.core.Keyword(null,"impls","impls",-1314014853)], null),cljs.core.conj,type);
});})(var$,temp__4655__auto__))
);
} else {
return null;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"undeclared","undeclared",1446667347).cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_warnings_STAR_))){
return cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"undeclared-protocol-symbol","undeclared-protocol-symbol",462882867),env,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"protocol","protocol",652470118),p], null));
} else {
return null;
}
}
}
});
cljs.core$macros.resolve_var = (function cljs$core$macros$resolve_var(env,sym){
var ret = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,env,new cljs.core.Keyword(null,"locals","locals",535295783)),sym));
if(cljs.core.truth_(ret)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Can't resolve: "),cljs.core.str(sym)].join('')),cljs.core.str("\n"),cljs.core.str("ret")].join('')));
}

return ret;
});
cljs.core$macros.__GT_impl_map = (function cljs$core$macros$__GT_impl_map(impls){
var ret = cljs.core.PersistentArrayMap.EMPTY;
var s = impls;
while(true){
if(cljs.core.seq.call(null,s)){
var G__30363 = cljs.core.assoc.call(null,ret,cljs.core.first.call(null,s),cljs.core.take_while.call(null,cljs.core.seq_QMARK_,cljs.core.next.call(null,s)));
var G__30364 = cljs.core.drop_while.call(null,cljs.core.seq_QMARK_,cljs.core.next.call(null,s));
ret = G__30363;
s = G__30364;
continue;
} else {
return ret;
}
break;
}
});
cljs.core$macros.base_assign_impls = (function cljs$core$macros$base_assign_impls(env,resolve,tsym,type,p__30365){
var vec__30373 = p__30365;
var p = cljs.core.nth.call(null,vec__30373,(0),null);
var sigs = cljs.core.nth.call(null,vec__30373,(1),null);
cljs.core$macros.warn_and_update_protocol.call(null,p,tsym,env);

var psym = resolve.call(null,p);
var pfn_prefix = cljs.core.subs.call(null,[cljs.core.str(psym)].join(''),(0),([cljs.core.str(psym)].join('').indexOf("/") + (1)));
return cljs.core.cons.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aset","cljs.core$macros/aset",-693176374,null)),(function (){var x__21289__auto__ = psym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = type;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true)))),cljs.core.map.call(null,((function (psym,pfn_prefix,vec__30373,p,sigs){
return (function (p__30376){
var vec__30377 = p__30376;
var seq__30378 = cljs.core.seq.call(null,vec__30377);
var first__30379 = cljs.core.first.call(null,seq__30378);
var seq__30378__$1 = cljs.core.next.call(null,seq__30378);
var f = first__30379;
var meths = seq__30378__$1;
var form = vec__30377;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aset","cljs.core$macros/aset",-693176374,null)),(function (){var x__21289__auto__ = cljs.core.symbol.call(null,[cljs.core.str(pfn_prefix),cljs.core.str(f)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = type;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),meths))),cljs.core.meta.call(null,form));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
});})(psym,pfn_prefix,vec__30373,p,sigs))
,sigs));
});
if(typeof cljs.core$macros.extend_prefix !== 'undefined'){
} else {
cljs.core$macros.extend_prefix = (function (){var method_table__21380__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__21381__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__21382__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__21383__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__21384__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.core$macros","extend-prefix"),((function (method_table__21380__auto__,prefer_table__21381__auto__,method_cache__21382__auto__,cached_hierarchy__21383__auto__,hierarchy__21384__auto__){
return (function (tsym,sym){
return new cljs.core.Keyword(null,"extend","extend",1836484006).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,tsym));
});})(method_table__21380__auto__,prefer_table__21381__auto__,method_cache__21382__auto__,cached_hierarchy__21383__auto__,hierarchy__21384__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__21384__auto__,method_table__21380__auto__,prefer_table__21381__auto__,method_cache__21382__auto__,cached_hierarchy__21383__auto__));
})();
}
cljs.core._add_method.call(null,cljs.core$macros.extend_prefix,new cljs.core.Keyword(null,"instance","instance",-2121349050),(function (tsym,sym){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"..","..",-300507420,null)),(function (){var x__21289__auto__ = tsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core$macros.to_property.call(null,sym);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
}));
cljs.core._add_method.call(null,cljs.core$macros.extend_prefix,new cljs.core.Keyword(null,"default","default",-1987822328),(function (tsym,sym){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"..","..",-300507420,null)),(function (){var x__21289__auto__ = tsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-prototype","-prototype",-450831903,null)),(function (){var x__21289__auto__ = cljs.core$macros.to_property.call(null,sym);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
}));
cljs.core$macros.adapt_obj_params = (function cljs$core$macros$adapt_obj_params(type,p__30380){
var vec__30387 = p__30380;
var seq__30388 = cljs.core.seq.call(null,vec__30387);
var first__30389 = cljs.core.first.call(null,seq__30388);
var seq__30388__$1 = cljs.core.next.call(null,seq__30388);
var vec__30390 = first__30389;
var seq__30391 = cljs.core.seq.call(null,vec__30390);
var first__30392 = cljs.core.first.call(null,seq__30391);
var seq__30391__$1 = cljs.core.next.call(null,seq__30391);
var this$ = first__30392;
var args = seq__30391__$1;
var sig = vec__30390;
var body = seq__30388__$1;
var x__21289__auto__ = cljs.core.vec.call(null,args);
return cljs.core._conj.call(null,(function (){var x__21289__auto____$1 = cljs.core.list_STAR_.call(null,new cljs.core.Symbol(null,"this-as","this-as",-848995740,null),cljs.core.vary_meta.call(null,this$,cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),type),body);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto____$1);
})(),x__21289__auto__);
});
cljs.core$macros.adapt_ifn_params = (function cljs$core$macros$adapt_ifn_params(type,p__30393){
var vec__30400 = p__30393;
var seq__30401 = cljs.core.seq.call(null,vec__30400);
var first__30402 = cljs.core.first.call(null,seq__30401);
var seq__30401__$1 = cljs.core.next.call(null,seq__30401);
var vec__30403 = first__30402;
var seq__30404 = cljs.core.seq.call(null,vec__30403);
var first__30405 = cljs.core.first.call(null,seq__30404);
var seq__30404__$1 = cljs.core.next.call(null,seq__30404);
var this$ = first__30405;
var args = seq__30404__$1;
var sig = vec__30403;
var body = seq__30401__$1;
var self_sym = cljs.core.with_meta.call(null,new cljs.core.Symbol(null,"self__","self__",-153190816,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),type], null));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__21289__auto__ = cljs.core.vec.call(null,cljs.core.cons.call(null,self_sym,args));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","this-as","cljs.core$macros/this-as",-799075148,null)),(function (){var x__21289__auto__ = self_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__21289__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__21289__auto__ = this$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = self_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
});
cljs.core$macros.adapt_ifn_invoke_params = (function cljs$core$macros$adapt_ifn_invoke_params(type,p__30406){
var vec__30413 = p__30406;
var seq__30414 = cljs.core.seq.call(null,vec__30413);
var first__30415 = cljs.core.first.call(null,seq__30414);
var seq__30414__$1 = cljs.core.next.call(null,seq__30414);
var vec__30416 = first__30415;
var seq__30417 = cljs.core.seq.call(null,vec__30416);
var first__30418 = cljs.core.first.call(null,seq__30417);
var seq__30417__$1 = cljs.core.next.call(null,seq__30417);
var this$ = first__30418;
var args = seq__30417__$1;
var sig = vec__30416;
var body = seq__30414__$1;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__21289__auto__ = cljs.core.vec.call(null,args);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","this-as","cljs.core$macros/this-as",-799075148,null)),(function (){var x__21289__auto__ = cljs.core.vary_meta.call(null,this$,cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),type);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
});
cljs.core$macros.adapt_proto_params = (function cljs$core$macros$adapt_proto_params(type,p__30419){
var vec__30426 = p__30419;
var seq__30427 = cljs.core.seq.call(null,vec__30426);
var first__30428 = cljs.core.first.call(null,seq__30427);
var seq__30427__$1 = cljs.core.next.call(null,seq__30427);
var vec__30429 = first__30428;
var seq__30430 = cljs.core.seq.call(null,vec__30429);
var first__30431 = cljs.core.first.call(null,seq__30430);
var seq__30430__$1 = cljs.core.next.call(null,seq__30430);
var this$ = first__30431;
var args = seq__30430__$1;
var sig = vec__30429;
var body = seq__30427__$1;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__21289__auto__ = cljs.core.vec.call(null,cljs.core.cons.call(null,cljs.core.vary_meta.call(null,this$,cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),type),args));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","this-as","cljs.core$macros/this-as",-799075148,null)),(function (){var x__21289__auto__ = this$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
});
cljs.core$macros.add_obj_methods = (function cljs$core$macros$add_obj_methods(type,type_sym,sigs){
return cljs.core.map.call(null,(function (p__30440){
var vec__30441 = p__30440;
var seq__30442 = cljs.core.seq.call(null,vec__30441);
var first__30443 = cljs.core.first.call(null,seq__30442);
var seq__30442__$1 = cljs.core.next.call(null,seq__30442);
var f = first__30443;
var meths = seq__30442__$1;
var form = vec__30441;
var vec__30444 = ((cljs.core.vector_QMARK_.call(null,cljs.core.first.call(null,meths)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rest.call(null,form)], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,meths], null));
var f__$1 = cljs.core.nth.call(null,vec__30444,(0),null);
var meths__$1 = cljs.core.nth.call(null,vec__30444,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__21289__auto__ = cljs.core$macros.extend_prefix.call(null,type_sym,f__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),cljs.core.map.call(null,((function (vec__30444,f__$1,meths__$1,vec__30441,seq__30442,first__30443,seq__30442__$1,f,meths,form){
return (function (p1__30432_SHARP_){
return cljs.core$macros.adapt_obj_params.call(null,type,p1__30432_SHARP_);
});})(vec__30444,f__$1,meths__$1,vec__30441,seq__30442,first__30443,seq__30442__$1,f,meths,form))
,meths__$1)))),cljs.core.meta.call(null,form));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
}),sigs);
});
cljs.core$macros.ifn_invoke_methods = (function cljs$core$macros$ifn_invoke_methods(type,type_sym,p__30448){
var vec__30452 = p__30448;
var seq__30453 = cljs.core.seq.call(null,vec__30452);
var first__30454 = cljs.core.first.call(null,seq__30453);
var seq__30453__$1 = cljs.core.next.call(null,seq__30453);
var f = first__30454;
var meths = seq__30453__$1;
var form = vec__30452;
return cljs.core.map.call(null,((function (vec__30452,seq__30453,first__30454,seq__30453__$1,f,meths,form){
return (function (meth){
var arity = cljs.core.count.call(null,cljs.core.first.call(null,meth));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__21289__auto__ = cljs.core$macros.extend_prefix.call(null,type_sym,cljs.core.symbol.call(null,[cljs.core.str("cljs$core$IFn$_invoke$arity$"),cljs.core.str(arity)].join('')));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__21289__auto__ = meth;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})()))),cljs.core.meta.call(null,form));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
});})(vec__30452,seq__30453,first__30454,seq__30453__$1,f,meths,form))
,cljs.core.map.call(null,((function (vec__30452,seq__30453,first__30454,seq__30453__$1,f,meths,form){
return (function (p1__30447_SHARP_){
return cljs.core$macros.adapt_ifn_invoke_params.call(null,type,p1__30447_SHARP_);
});})(vec__30452,seq__30453,first__30454,seq__30453__$1,f,meths,form))
,meths));
});
cljs.core$macros.add_ifn_methods = (function cljs$core$macros$add_ifn_methods(type,type_sym,p__30456){
var vec__30460 = p__30456;
var seq__30461 = cljs.core.seq.call(null,vec__30460);
var first__30462 = cljs.core.first.call(null,seq__30461);
var seq__30461__$1 = cljs.core.next.call(null,seq__30461);
var f = first__30462;
var meths = seq__30461__$1;
var form = vec__30460;
var meths__$1 = cljs.core.map.call(null,((function (vec__30460,seq__30461,first__30462,seq__30461__$1,f,meths,form){
return (function (p1__30455_SHARP_){
return cljs.core$macros.adapt_ifn_params.call(null,type,p1__30455_SHARP_);
});})(vec__30460,seq__30461,first__30462,seq__30461__$1,f,meths,form))
,meths);
var this_sym = cljs.core.with_meta.call(null,new cljs.core.Symbol(null,"self__","self__",-153190816,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),type], null));
var argsym = cljs.core.gensym.call(null,"args");
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__21289__auto__ = cljs.core$macros.extend_prefix.call(null,type_sym,new cljs.core.Symbol(null,"call","call",1120531661,null));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),meths__$1))),cljs.core.meta.call(null,form));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})()))),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__21289__auto__ = cljs.core$macros.extend_prefix.call(null,type_sym,new cljs.core.Symbol(null,"apply","apply",-1334050276,null));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__21289__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this_sym,argsym], null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","this-as","cljs.core$macros/this-as",-799075148,null)),(function (){var x__21289__auto__ = this_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".apply",".apply",-1176201338,null)),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-call",".-call",1760541695,null)),(function (){var x__21289__auto__ = this_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = this_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".concat",".concat",1180408684,null)),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),(function (){var x__21289__auto__ = this_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","aclone","cljs.core/aclone",-758078968,null)),(function (){var x__21289__auto__ = argsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})()))),cljs.core.meta.call(null,form));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())))], null),cljs.core$macros.ifn_invoke_methods.call(null,type,type_sym,form));
});
cljs.core$macros.add_proto_methods_STAR_ = (function cljs$core$macros$add_proto_methods_STAR_(pprefix,type,type_sym,p__30463){
var vec__30471 = p__30463;
var seq__30472 = cljs.core.seq.call(null,vec__30471);
var first__30473 = cljs.core.first.call(null,seq__30472);
var seq__30472__$1 = cljs.core.next.call(null,seq__30472);
var f = first__30473;
var meths = seq__30472__$1;
var form = vec__30471;
var pf = [cljs.core.str(pprefix),cljs.core.str(cljs.core.name.call(null,f))].join('');
if(cljs.core.vector_QMARK_.call(null,cljs.core.first.call(null,meths))){
var meth = meths;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__21289__auto__ = cljs.core$macros.extend_prefix.call(null,type_sym,[cljs.core.str(pf),cljs.core.str("$arity$"),cljs.core.str(cljs.core.count.call(null,cljs.core.first.call(null,meth)))].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),cljs.core$macros.adapt_proto_params.call(null,type,meth)))),cljs.core.meta.call(null,form));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())))], null);
} else {
return cljs.core.map.call(null,((function (pf,vec__30471,seq__30472,first__30473,seq__30472__$1,f,meths,form){
return (function (p__30474){
var vec__30475 = p__30474;
var seq__30476 = cljs.core.seq.call(null,vec__30475);
var first__30477 = cljs.core.first.call(null,seq__30476);
var seq__30476__$1 = cljs.core.next.call(null,seq__30476);
var sig = first__30477;
var body = seq__30476__$1;
var meth = vec__30475;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__21289__auto__ = cljs.core$macros.extend_prefix.call(null,type_sym,[cljs.core.str(pf),cljs.core.str("$arity$"),cljs.core.str(cljs.core.count.call(null,sig))].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__21289__auto__ = cljs.core$macros.adapt_proto_params.call(null,type,meth);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})()))),cljs.core.meta.call(null,form));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
});})(pf,vec__30471,seq__30472,first__30473,seq__30472__$1,f,meths,form))
,meths);
}
});
cljs.core$macros.proto_assign_impls = (function cljs$core$macros$proto_assign_impls(env,resolve,type_sym,type,p__30478){
var vec__30482 = p__30478;
var p = cljs.core.nth.call(null,vec__30482,(0),null);
var sigs = cljs.core.nth.call(null,vec__30482,(1),null);
cljs.core$macros.warn_and_update_protocol.call(null,p,type,env);

var psym = resolve.call(null,p);
var pprefix = cljs.core$macros.protocol_prefix.call(null,psym);
var skip_flag = cljs.core.set.call(null,new cljs.core.Keyword(null,"skip-protocol-flag","skip-protocol-flag",-1426798630).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,type_sym)));
if(cljs.core._EQ_.call(null,p,new cljs.core.Symbol(null,"Object","Object",61210754,null))){
return cljs.core$macros.add_obj_methods.call(null,type,type_sym,sigs);
} else {
return cljs.core.concat.call(null,(cljs.core.truth_(skip_flag.call(null,psym))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__21289__auto__ = cljs.core$macros.extend_prefix.call(null,type_sym,pprefix);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))))], null)),cljs.core.mapcat.call(null,((function (psym,pprefix,skip_flag,vec__30482,p,sigs){
return (function (sig){
if(cljs.core._EQ_.call(null,psym,new cljs.core.Symbol("cljs.core","IFn","cljs.core/IFn",-920223129,null))){
return cljs.core$macros.add_ifn_methods.call(null,type,type_sym,sig);
} else {
return cljs.core$macros.add_proto_methods_STAR_.call(null,pprefix,type,type_sym,sig);
}
});})(psym,pprefix,skip_flag,vec__30482,p,sigs))
,sigs));
}
});
cljs.core$macros.validate_impl_sigs = (function cljs$core$macros$validate_impl_sigs(env,p,method){
if(cljs.core._EQ_.call(null,p,new cljs.core.Symbol(null,"Object","Object",61210754,null))){
return null;
} else {
var var$ = cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,env,new cljs.core.Keyword(null,"locals","locals",535295783)),p);
var minfo = new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"protocol-info","protocol-info",1471745843).cljs$core$IFn$_invoke$arity$1(var$));
var method_name = cljs.core.first.call(null,method);
var __GT_name = cljs.core.comp.call(null,cljs.core.symbol,cljs.core.name);
var vec__30488 = ((cljs.core.vector_QMARK_.call(null,cljs.core.second.call(null,method)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [__GT_name.call(null,method_name),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.second.call(null,method)], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [__GT_name.call(null,method_name),cljs.core.map.call(null,cljs.core.first,cljs.core.rest.call(null,method))], null));
var fname = cljs.core.nth.call(null,vec__30488,(0),null);
var sigs = cljs.core.nth.call(null,vec__30488,(1),null);
var decmeths = cljs.core.get.call(null,minfo,fname,new cljs.core.Keyword("cljs.core$macros","not-found","cljs.core$macros/not-found",-1226326556));
if(cljs.core._EQ_.call(null,decmeths,new cljs.core.Keyword("cljs.core$macros","not-found","cljs.core$macros/not-found",-1226326556))){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"protocol-invalid-method","protocol-invalid-method",522647516),env,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"protocol","protocol",652470118),p,new cljs.core.Keyword(null,"fname","fname",1500291491),fname,new cljs.core.Keyword(null,"no-such-method","no-such-method",1087422840),true], null));
} else {
}

if(cljs.core.truth_(cljs.core.namespace.call(null,method_name))){
var method_var_30491 = cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,env,new cljs.core.Keyword(null,"locals","locals",535295783)),method_name,cljs.analyzer.confirm_var_exist_warning);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(var$),new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(method_var_30491))){
} else {
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"protocol-invalid-method","protocol-invalid-method",522647516),env,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"protocol","protocol",652470118),p,new cljs.core.Keyword(null,"fname","fname",1500291491),method_name,new cljs.core.Keyword(null,"no-such-method","no-such-method",1087422840),true], null));
}
} else {
}

var sigs__$1 = sigs;
var seen = cljs.core.PersistentHashSet.EMPTY;
while(true){
if(cljs.core.seq.call(null,sigs__$1)){
var sig = cljs.core.first.call(null,sigs__$1);
var c = cljs.core.count.call(null,sig);
if(cljs.core.contains_QMARK_.call(null,seen,c)){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"protocol-duped-method","protocol-duped-method",15128166),env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"protocol","protocol",652470118),p,new cljs.core.Keyword(null,"fname","fname",1500291491),fname], null));
} else {
}

if((cljs.core.not_EQ_.call(null,decmeths,new cljs.core.Keyword("cljs.core$macros","not-found","cljs.core$macros/not-found",-1226326556))) && (cljs.core.not.call(null,cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([c], true),cljs.core.map.call(null,cljs.core.count,decmeths))))){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"protocol-invalid-method","protocol-invalid-method",522647516),env,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"protocol","protocol",652470118),p,new cljs.core.Keyword(null,"fname","fname",1500291491),fname,new cljs.core.Keyword(null,"invalid-arity","invalid-arity",1335461949),c], null));
} else {
}

var G__30492 = cljs.core.next.call(null,sigs__$1);
var G__30493 = cljs.core.conj.call(null,seen,c);
sigs__$1 = G__30492;
seen = G__30493;
continue;
} else {
return null;
}
break;
}
}
});
cljs.core$macros.validate_impls = (function cljs$core$macros$validate_impls(env,impls){
var protos = cljs.core.PersistentHashSet.EMPTY;
var impls__$1 = impls;
while(true){
if(cljs.core.seq.call(null,impls__$1)){
var proto = cljs.core.first.call(null,impls__$1);
var methods$ = cljs.core.take_while.call(null,cljs.core.seq_QMARK_,cljs.core.next.call(null,impls__$1));
var impls__$2 = cljs.core.drop_while.call(null,cljs.core.seq_QMARK_,cljs.core.next.call(null,impls__$1));
if(cljs.core.contains_QMARK_.call(null,protos,proto)){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"protocol-multiple-impls","protocol-multiple-impls",794179260),env,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"protocol","protocol",652470118),proto], null));
} else {
}

var seen_30500 = cljs.core.PersistentHashSet.EMPTY;
var methods_30501__$1 = methods$;
while(true){
if(cljs.core.seq.call(null,methods_30501__$1)){
var vec__30497_30502 = cljs.core.first.call(null,methods_30501__$1);
var fname_30503 = cljs.core.nth.call(null,vec__30497_30502,(0),null);
var method_30504 = vec__30497_30502;
if(cljs.core.contains_QMARK_.call(null,seen_30500,fname_30503)){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"extend-type-invalid-method-shape","extend-type-invalid-method-shape",1424103549),env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"protocol","protocol",652470118),proto,new cljs.core.Keyword(null,"method","method",55703592),fname_30503], null));
} else {
}

cljs.core$macros.validate_impl_sigs.call(null,env,proto,method_30504);

var G__30505 = cljs.core.conj.call(null,seen_30500,fname_30503);
var G__30506 = cljs.core.next.call(null,methods_30501__$1);
seen_30500 = G__30505;
methods_30501__$1 = G__30506;
continue;
} else {
}
break;
}

var G__30507 = cljs.core.conj.call(null,protos,proto);
var G__30508 = impls__$2;
protos = G__30507;
impls__$1 = G__30508;
continue;
} else {
return null;
}
break;
}
});
cljs.core$macros.type_hint_first_arg = (function cljs$core$macros$type_hint_first_arg(type_sym,argv){
return cljs.core.assoc.call(null,argv,(0),cljs.core.vary_meta.call(null,argv.call(null,(0)),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),type_sym));
});
cljs.core$macros.type_hint_single_arity_sig = (function cljs$core$macros$type_hint_single_arity_sig(type_sym,sig){
return cljs.core.list_STAR_.call(null,cljs.core.first.call(null,sig),cljs.core$macros.type_hint_first_arg.call(null,type_sym,cljs.core.second.call(null,sig)),cljs.core.nnext.call(null,sig));
});
cljs.core$macros.type_hint_multi_arity_sig = (function cljs$core$macros$type_hint_multi_arity_sig(type_sym,sig){
return cljs.core.list_STAR_.call(null,cljs.core$macros.type_hint_first_arg.call(null,type_sym,cljs.core.first.call(null,sig)),cljs.core.next.call(null,sig));
});
cljs.core$macros.type_hint_multi_arity_sigs = (function cljs$core$macros$type_hint_multi_arity_sigs(type_sym,sigs){
return cljs.core.list_STAR_.call(null,cljs.core.first.call(null,sigs),cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core$macros.type_hint_multi_arity_sig,type_sym),cljs.core.rest.call(null,sigs)));
});
cljs.core$macros.type_hint_sigs = (function cljs$core$macros$type_hint_sigs(type_sym,sig){
if(cljs.core.vector_QMARK_.call(null,cljs.core.second.call(null,sig))){
return cljs.core$macros.type_hint_single_arity_sig.call(null,type_sym,sig);
} else {
return cljs.core$macros.type_hint_multi_arity_sigs.call(null,type_sym,sig);
}
});
cljs.core$macros.type_hint_impl_map = (function cljs$core$macros$type_hint_impl_map(type_sym,impl_map){
return cljs.core.reduce_kv.call(null,(function (m,proto,sigs){
return cljs.core.assoc.call(null,m,proto,cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core$macros.type_hint_sigs,type_sym),sigs));
}),cljs.core.PersistentArrayMap.EMPTY,impl_map);
});
/**
 * Extend a type to a series of protocols. Useful when you are
 *   supplying the definitions explicitly inline. Propagates the
 *   type as a type hint on the first argument of all fns.
 * 
 *   type-sym may be
 * 
 * * default, meaning the definitions will apply for any value,
 *   unless an extend-type exists for one of the more specific
 *   cases below.
 * * nil, meaning the definitions will apply for the nil value.
 * * any of object, boolean, number, string, array, or function,
 *   indicating the definitions will apply for values of the
 *   associated base JavaScript types. Note that, for example,
 *   string should be used instead of js/String.
 * * a JavaScript type not covered by the previous list, such
 *   as js/RegExp.
 * * a type defined by deftype or defrecord.
 * 
 *   (extend-type MyType
 *  ICounted
 *  (-count [c] ...)
 *  Foo
 *  (bar [x y] ...)
 *  (baz ([x] ...) ([x y & zs] ...))
 */
cljs.core$macros.extend_type = (function cljs$core$macros$extend_type(var_args){
var args__21537__auto__ = [];
var len__21530__auto___30517 = arguments.length;
var i__21531__auto___30518 = (0);
while(true){
if((i__21531__auto___30518 < len__21530__auto___30517)){
args__21537__auto__.push((arguments[i__21531__auto___30518]));

var G__30519 = (i__21531__auto___30518 + (1));
i__21531__auto___30518 = G__30519;
continue;
} else {
}
break;
}

var argseq__21538__auto__ = ((((3) < args__21537__auto__.length))?(new cljs.core.IndexedSeq(args__21537__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.extend_type.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__21538__auto__);
});

cljs.core$macros.extend_type.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,type_sym,impls){
var env = _AMPERSAND_env;
var _ = cljs.core$macros.validate_impls.call(null,env,impls);
var resolve = cljs.core.partial.call(null,cljs.core$macros.resolve_var,env);
var impl_map = cljs.core$macros.__GT_impl_map.call(null,impls);
var impl_map__$1 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null,new cljs.core.Symbol(null,"number","number",-1084057331,null),null], null), null).call(null,type_sym))?cljs.core$macros.type_hint_impl_map.call(null,type_sym,impl_map):impl_map);
var vec__30514 = (function (){var temp__4655__auto__ = cljs.core$macros.base_type.call(null,type_sym);
if(cljs.core.truth_(temp__4655__auto__)){
var type = temp__4655__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core$macros.base_assign_impls], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [resolve.call(null,type_sym),cljs.core$macros.proto_assign_impls], null);
}
})();
var type = cljs.core.nth.call(null,vec__30514,(0),null);
var assign_impls = cljs.core.nth.call(null,vec__30514,(1),null);
if(cljs.core.truth_((function (){var and__20443__auto__ = new cljs.core.Keyword(null,"extending-base-js-type","extending-base-js-type",432787264).cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_warnings_STAR_);
if(cljs.core.truth_(and__20443__auto__)){
return cljs.core$macros.js_base_type.call(null,type_sym);
} else {
return and__20443__auto__;
}
})())){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"extending-base-js-type","extending-base-js-type",432787264),env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"current-symbol","current-symbol",-932381075),type_sym,new cljs.core.Keyword(null,"suggested-symbol","suggested-symbol",-1329631875),cljs.core$macros.js_base_type.call(null,type_sym)], null));
} else {
}

return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),cljs.core.mapcat.call(null,((function (env,_,resolve,impl_map,impl_map__$1,vec__30514,type,assign_impls){
return (function (p1__30509_SHARP_){
return assign_impls.call(null,env,resolve,type_sym,type,p1__30509_SHARP_);
});})(env,_,resolve,impl_map,impl_map__$1,vec__30514,type,assign_impls))
,impl_map__$1))));
});

cljs.core$macros.extend_type.cljs$lang$maxFixedArity = (3);

cljs.core$macros.extend_type.cljs$lang$applyTo = (function (seq30510){
var G__30511 = cljs.core.first.call(null,seq30510);
var seq30510__$1 = cljs.core.next.call(null,seq30510);
var G__30512 = cljs.core.first.call(null,seq30510__$1);
var seq30510__$2 = cljs.core.next.call(null,seq30510__$1);
var G__30513 = cljs.core.first.call(null,seq30510__$2);
var seq30510__$3 = cljs.core.next.call(null,seq30510__$2);
return cljs.core$macros.extend_type.cljs$core$IFn$_invoke$arity$variadic(G__30511,G__30512,G__30513,seq30510__$3);
});


cljs.core$macros.extend_type.cljs$lang$macro = true;
cljs.core$macros.prepare_protocol_masks = (function cljs$core$macros$prepare_protocol_masks(env,impls){
var resolve = cljs.core.partial.call(null,cljs.core$macros.resolve_var,env);
var impl_map = cljs.core$macros.__GT_impl_map.call(null,impls);
var fpp_pbs = cljs.core.seq.call(null,cljs.core.keep.call(null,cljs.core$macros.fast_path_protocols,cljs.core.map.call(null,resolve,cljs.core.keys.call(null,impl_map))));
if(fpp_pbs){
var fpps = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.call(null,cljs.core.partial.call(null,cljs.core.contains_QMARK_,cljs.core$macros.fast_path_protocols),cljs.core.map.call(null,resolve,cljs.core.keys.call(null,impl_map))));
var parts = (function (){var parts = cljs.core.group_by.call(null,cljs.core.first,fpp_pbs);
var parts__$1 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,cljs.core.juxt.call(null,cljs.core.key,cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,cljs.core.peek),cljs.core.val)),parts));
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,cljs.core.juxt.call(null,cljs.core.key,cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.reduce,cljs.core.bit_or),cljs.core.val)),parts__$1));
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fpps,cljs.core.reduce.call(null,((function (fpps,parts,resolve,impl_map,fpp_pbs){
return (function (ps,p){
return cljs.core.update_in.call(null,ps,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p], null),cljs.core.fnil.call(null,cljs.core.identity,(0)));
});})(fpps,parts,resolve,impl_map,fpp_pbs))
,parts,cljs.core.range.call(null,cljs.core$macros.fast_path_protocol_partitions_count))], null);
} else {
return null;
}
});
cljs.core$macros.annotate_specs = (function cljs$core$macros$annotate_specs(annots,v,p__30521){
var vec__30525 = p__30521;
var f = cljs.core.nth.call(null,vec__30525,(0),null);
var sigs = cljs.core.nth.call(null,vec__30525,(1),null);
return cljs.core.conj.call(null,v,cljs.core.vary_meta.call(null,cljs.core.cons.call(null,f,cljs.core.map.call(null,((function (vec__30525,f,sigs){
return (function (p1__30520_SHARP_){
return cljs.core.cons.call(null,cljs.core.second.call(null,p1__30520_SHARP_),cljs.core.nnext.call(null,p1__30520_SHARP_));
});})(vec__30525,f,sigs))
,sigs)),cljs.core.merge,annots));
});
cljs.core$macros.dt__GT_et = (function cljs$core$macros$dt__GT_et(var_args){
var args30528 = [];
var len__21530__auto___30531 = arguments.length;
var i__21531__auto___30532 = (0);
while(true){
if((i__21531__auto___30532 < len__21530__auto___30531)){
args30528.push((arguments[i__21531__auto___30532]));

var G__30533 = (i__21531__auto___30532 + (1));
i__21531__auto___30532 = G__30533;
continue;
} else {
}
break;
}

var G__30530 = args30528.length;
switch (G__30530) {
case 3:
return cljs.core$macros.dt__GT_et.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.dt__GT_et.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30528.length)].join('')));

}
});

cljs.core$macros.dt__GT_et.cljs$core$IFn$_invoke$arity$3 = (function (type,specs,fields){
return cljs.core$macros.dt__GT_et.call(null,type,specs,fields,false);
});

cljs.core$macros.dt__GT_et.cljs$core$IFn$_invoke$arity$4 = (function (type,specs,fields,inline){
var annots = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("cljs.analyzer","type","cljs.analyzer/type",478749742),type,new cljs.core.Keyword("cljs.analyzer","protocol-impl","cljs.analyzer/protocol-impl",-1523935409),true,new cljs.core.Keyword("cljs.analyzer","protocol-inline","cljs.analyzer/protocol-inline",-1611519026),inline], null);
var ret = cljs.core.PersistentVector.EMPTY;
var specs__$1 = specs;
while(true){
if(cljs.core.seq.call(null,specs__$1)){
var p = cljs.core.first.call(null,specs__$1);
var ret__$1 = cljs.core.into.call(null,cljs.core.conj.call(null,ret,p),cljs.core.reduce.call(null,cljs.core.partial.call(null,cljs.core$macros.annotate_specs,annots),cljs.core.PersistentVector.EMPTY,cljs.core.group_by.call(null,cljs.core.first,cljs.core.take_while.call(null,cljs.core.seq_QMARK_,cljs.core.next.call(null,specs__$1)))));
var specs__$2 = cljs.core.drop_while.call(null,cljs.core.seq_QMARK_,cljs.core.next.call(null,specs__$1));
var G__30535 = ret__$1;
var G__30536 = specs__$2;
ret = G__30535;
specs__$1 = G__30536;
continue;
} else {
return ret;
}
break;
}
});

cljs.core$macros.dt__GT_et.cljs$lang$maxFixedArity = 4;

cljs.core$macros.collect_protocols = (function cljs$core$macros$collect_protocols(impls,env){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,(function (p1__30537_SHARP_){
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,env,new cljs.core.Keyword(null,"locals","locals",535295783)),p1__30537_SHARP_));
}),cljs.core.filter.call(null,cljs.core.symbol_QMARK_,impls)));
});
cljs.core$macros.build_positional_factory = (function cljs$core$macros$build_positional_factory(rsym,rname,fields){
var fn_name = cljs.core.with_meta.call(null,cljs.core.symbol.call(null,[cljs.core.str(new cljs.core.Symbol(null,"->","->",-2139605430,null)),cljs.core.str(rsym)].join('')),cljs.core.assoc.call(null,cljs.core.meta.call(null,rsym),new cljs.core.Keyword(null,"factory","factory",63933746),new cljs.core.Keyword(null,"positional","positional",-203580463)));
var field_values = (cljs.core.truth_(new cljs.core.Keyword(null,"internal-ctor","internal-ctor",937392560).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,rsym)))?cljs.core.conj.call(null,fields,null,null,null):fields);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","defn","cljs.core$macros/defn",-728332354,null)),(function (){var x__21289__auto__ = fn_name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,fields))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__21289__auto__ = rname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),field_values)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
});
cljs.core$macros.validate_fields = (function cljs$core$macros$validate_fields(case$,name,fields){
if(cljs.core.vector_QMARK_.call(null,fields)){
return null;
} else {
throw (new Error([cljs.core.str(case$),cljs.core.str(" "),cljs.core.str(name),cljs.core.str(", no fields vector given.")].join('')));
}
});
/**
 * (deftype name [fields*]  options* specs*)
 * 
 *   Currently there are no options.
 * 
 *   Each spec consists of a protocol or interface name followed by zero
 *   or more method bodies:
 * 
 *   protocol-or-Object
 *   (methodName [args*] body)*
 * 
 *   The type will have the (by default, immutable) fields named by
 *   fields, which can have type hints. Protocols and methods
 *   are optional. The only methods that can be supplied are those
 *   declared in the protocols/interfaces.  Note that method bodies are
 *   not closures, the local environment includes only the named fields,
 *   and those fields can be accessed directly. Fields can be qualified
 *   with the metadata :mutable true at which point (set! afield aval) will be
 *   supported in method bodies. Note well that mutable fields are extremely
 *   difficult to use correctly, and are present only to facilitate the building
 *   of higherlevel constructs, such as ClojureScript's reference types, in
 *   ClojureScript itself. They are for experts only - if the semantics and
 *   implications of :mutable are not immediately apparent to you, you should not
 *   be using them.
 * 
 *   Method definitions take the form:
 * 
 *   (methodname [args*] body)
 * 
 *   The argument and return types can be hinted on the arg and
 *   methodname symbols. If not supplied, they will be inferred, so type
 *   hints should be reserved for disambiguation.
 * 
 *   Methods should be supplied for all methods of the desired
 *   protocol(s). You can also define overrides for methods of Object. Note that
 *   a parameter must be supplied to correspond to the target object
 *   ('this' in JavaScript parlance). Note also that recur calls to the method
 *   head should *not* pass the target object, it will be supplied
 *   automatically and can not be substituted.
 * 
 *   In the method bodies, the (unqualified) name can be used to name the
 *   class (for calls to new, instance? etc).
 * 
 *   One constructor will be defined, taking the designated fields.  Note
 *   that the field names __meta and __extmap are currently reserved and
 *   should not be used when defining your own types.
 * 
 *   Given (deftype TypeName ...), a factory function called ->TypeName
 *   will be defined, taking positional parameters for the fields
 */
cljs.core$macros.deftype = (function cljs$core$macros$deftype(var_args){
var args__21537__auto__ = [];
var len__21530__auto___30549 = arguments.length;
var i__21531__auto___30550 = (0);
while(true){
if((i__21531__auto___30550 < len__21530__auto___30549)){
args__21537__auto__.push((arguments[i__21531__auto___30550]));

var G__30551 = (i__21531__auto___30550 + (1));
i__21531__auto___30550 = G__30551;
continue;
} else {
}
break;
}

var argseq__21538__auto__ = ((((4) < args__21537__auto__.length))?(new cljs.core.IndexedSeq(args__21537__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.deftype.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__21538__auto__);
});

cljs.core$macros.deftype.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,t,fields,impls){
cljs.core$macros.validate_fields.call(null,"deftype",t,fields);

var env = _AMPERSAND_env;
var r = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,env,new cljs.core.Keyword(null,"locals","locals",535295783)),t));
var vec__30546 = cljs.core$macros.prepare_protocol_masks.call(null,env,impls);
var fpps = cljs.core.nth.call(null,vec__30546,(0),null);
var pmasks = cljs.core.nth.call(null,vec__30546,(1),null);
var protocols = cljs.core$macros.collect_protocols.call(null,impls,env);
var t__$1 = cljs.core.vary_meta.call(null,t,cljs.core.assoc,new cljs.core.Keyword(null,"protocols","protocols",-5615896),protocols,new cljs.core.Keyword(null,"skip-protocol-flag","skip-protocol-flag",-1426798630),fpps);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"deftype*","deftype*",962659890,null)),(function (){var x__21289__auto__ = t__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = fields;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = pmasks;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = ((cljs.core.seq.call(null,impls))?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","extend-type","cljs.core$macros/extend-type",1713295201,null)),(function (){var x__21289__auto__ = t__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),cljs.core$macros.dt__GT_et.call(null,t__$1,impls,fields)))):null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-getBasis",".-getBasis",-1306451468,null)),(function (){var x__21289__auto__ = t__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__21289__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),(function (){var x__21289__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,fields))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-cljs$lang$type",".-cljs$lang$type",-1029307724,null)),(function (){var x__21289__auto__ = t__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-cljs$lang$ctorStr",".-cljs$lang$ctorStr",-1820706991,null)),(function (){var x__21289__auto__ = t__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = [cljs.core.str(r)].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-cljs$lang$ctorPrWriter",".-cljs$lang$ctorPrWriter",255834464,null)),(function (){var x__21289__auto__ = t__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__21289__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__30538__auto__","this__30538__auto__",-1312839265,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__30539__auto__","writer__30539__auto__",1256826565,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"opt__30540__auto__","opt__30540__auto__",295688918,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-write","cljs.core/-write",527220517,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__30539__auto__","writer__30539__auto__",1256826565,null)),(function (){var x__21289__auto__ = [cljs.core.str(r)].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core$macros.build_positional_factory.call(null,t__$1,r,fields);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = t__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
});

cljs.core$macros.deftype.cljs$lang$maxFixedArity = (4);

cljs.core$macros.deftype.cljs$lang$applyTo = (function (seq30541){
var G__30542 = cljs.core.first.call(null,seq30541);
var seq30541__$1 = cljs.core.next.call(null,seq30541);
var G__30543 = cljs.core.first.call(null,seq30541__$1);
var seq30541__$2 = cljs.core.next.call(null,seq30541__$1);
var G__30544 = cljs.core.first.call(null,seq30541__$2);
var seq30541__$3 = cljs.core.next.call(null,seq30541__$2);
var G__30545 = cljs.core.first.call(null,seq30541__$3);
var seq30541__$4 = cljs.core.next.call(null,seq30541__$3);
return cljs.core$macros.deftype.cljs$core$IFn$_invoke$arity$variadic(G__30542,G__30543,G__30544,G__30545,seq30541__$4);
});


cljs.core$macros.deftype.cljs$lang$macro = true;
/**
 * Do not use this directly - use defrecord
 */
cljs.core$macros.emit_defrecord = (function cljs$core$macros$emit_defrecord(env,tagname,rname,fields,impls){
var hinted_fields = fields;
var fields__$1 = cljs.core.vec.call(null,cljs.core.map.call(null,((function (hinted_fields){
return (function (p1__30552_SHARP_){
return cljs.core.with_meta.call(null,p1__30552_SHARP_,null);
});})(hinted_fields))
,fields));
var base_fields = fields__$1;
var pr_open = [cljs.core.str("#"),cljs.core.str(cljs.core.namespace.call(null,rname)),cljs.core.str("."),cljs.core.str(cljs.core.name.call(null,rname)),cljs.core.str("{")].join('');
var fields__$2 = cljs.core.conj.call(null,fields__$1,new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),cljs.core.with_meta.call(null,new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)));
var gs = cljs.core.gensym.call(null);
var ksym = cljs.core.gensym.call(null,"k");
var impls__$1 = cljs.core.concat.call(null,impls,new cljs.core.PersistentVector(null, 28, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"IRecord","IRecord",-903221169,null),new cljs.core.Symbol(null,"ICloneable","ICloneable",1882653160,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-clone","-clone",227130084,null)),(function (){var x__21289__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__30553__auto__","this__30553__auto__",-558925093,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__21289__auto__ = tagname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),fields__$2)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})()))),new cljs.core.Symbol(null,"IHash","IHash",-1495374645,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-hash","-hash",-630070274,null)),(function (){var x__21289__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__30554__auto__","this__30554__auto__",-1788465528,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","caching-hash","cljs.core$macros/caching-hash",-1892393069,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__30554__auto__","this__30554__auto__",-1788465528,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"hash-imap","hash-imap",-1047446478,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})()))),new cljs.core.Symbol(null,"IEquiv","IEquiv",-1912850869,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-equiv","-equiv",320124272,null)),(function (){var x__21289__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__30555__auto__","this__30555__auto__",-1803567312,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"other__30556__auto__","other__30556__auto__",-2105589711,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"other__30556__auto__","other__30556__auto__",-2105589711,null)),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","identical?","cljs.core$macros/identical?",815580547,null)),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-constructor",".-constructor",279801701,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__30555__auto__","this__30555__auto__",-1803567312,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-constructor",".-constructor",279801701,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"other__30556__auto__","other__30556__auto__",-2105589711,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","equiv-map","cljs.core/equiv-map",-1185609892,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__30555__auto__","this__30555__auto__",-1803567312,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"other__30556__auto__","other__30556__auto__",-2105589711,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true),cljs.core._conj.call(null,cljs.core.List.EMPTY,false))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})()))),new cljs.core.Symbol(null,"IMeta","IMeta",1095313672,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-meta","-meta",494863156,null)),(function (){var x__21289__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__30557__auto__","this__30557__auto__",-1158942629,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__meta","__meta",-946752628,null))))),new cljs.core.Symbol(null,"IWithMeta","IWithMeta",-509493158,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-with-meta","-with-meta",-1610713823,null)),(function (){var x__21289__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__30558__auto__","this__30558__auto__",335116689,null)),(function (){var x__21289__auto__ = gs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__21289__auto__ = tagname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),cljs.core.replace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),gs], null),fields__$2))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})()))),new cljs.core.Symbol(null,"ILookup","ILookup",784647298,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-lookup","-lookup",-1438393944,null)),(function (){var x__21289__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__30559__auto__","this__30559__auto__",-78951967,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__30560__auto__","k__30560__auto__",300845865,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-lookup","cljs.core/-lookup",-1845674443,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__30559__auto__","this__30559__auto__",-78951967,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__30560__auto__","k__30560__auto__",300845865,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})()))),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-lookup","-lookup",-1438393944,null)),(function (){var x__21289__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__30561__auto__","this__30561__auto__",-176584093,null)),(function (){var x__21289__auto__ = ksym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"else__30562__auto__","else__30562__auto__",-827112431,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","case","cljs.core$macros/case",-2131866965,null)),(function (){var x__21289__auto__ = ksym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),cljs.core.mapcat.call(null,((function (gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2){
return (function (f){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,f),f], null);
});})(gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2))
,base_fields),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null)),(function (){var x__21289__auto__ = ksym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"else__30562__auto__","else__30562__auto__",-827112431,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})()))),new cljs.core.Symbol(null,"ICounted","ICounted",-1705786327,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-count","-count",416049189,null)),(function (){var x__21289__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__30563__auto__","this__30563__auto__",605886127,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","+","cljs.core$macros/+",-18260342,null)),(function (){var x__21289__auto__ = cljs.core.count.call(null,base_fields);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})()))),new cljs.core.Symbol(null,"ICollection","ICollection",-686709190,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-conj","-conj",1373798691,null)),(function (){var x__21289__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__30564__auto__","this__30564__auto__",795940606,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"entry__30565__auto__","entry__30565__auto__",-82775492,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"entry__30565__auto__","entry__30565__auto__",-82775492,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-assoc","cljs.core/-assoc",-814539323,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__30564__auto__","this__30564__auto__",795940606,null)),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-nth","cljs.core/-nth",504234802,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"entry__30565__auto__","entry__30565__auto__",-82775492,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-nth","cljs.core/-nth",504234802,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"entry__30565__auto__","entry__30565__auto__",-82775492,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,(1)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","reduce","cljs.core/reduce",2025430439,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-conj","cljs.core/-conj",2040622670,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__30564__auto__","this__30564__auto__",795940606,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"entry__30565__auto__","entry__30565__auto__",-82775492,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})()))),new cljs.core.Symbol(null,"IAssociative","IAssociative",-1306431882,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-assoc","-assoc",-416089758,null)),(function (){var x__21289__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__30566__auto__","this__30566__auto__",-320531520,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__30567__auto__","k__30567__auto__",-1512869985,null)),(function (){var x__21289__auto__ = gs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","condp","cljs.core$macros/condp",431619047,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","keyword-identical?","cljs.core/keyword-identical?",1598491177,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__30567__auto__","k__30567__auto__",-1512869985,null)),cljs.core.mapcat.call(null,((function (gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2){
return (function (fld){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,fld),cljs.core.list_STAR_.call(null,new cljs.core.Symbol(null,"new","new",-444906321,null),tagname,cljs.core.replace.call(null,cljs.core.PersistentArrayMap.fromArray([fld,gs,new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null),null], true, false),fields__$2))], null);
});})(gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2))
,base_fields),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__21289__auto__ = tagname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),cljs.core.remove.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null),null,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),null], null), null),fields__$2),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","assoc","cljs.core/assoc",322326297,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__30567__auto__","k__30567__auto__",-1512869985,null)),(function (){var x__21289__auto__ = gs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})()))),new cljs.core.Symbol(null,"IMap","IMap",992876629,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-dissoc","-dissoc",1638079447,null)),(function (){var x__21289__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__30568__auto__","this__30568__auto__",1963129230,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__30569__auto__","k__30569__auto__",227407246,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null)),(function (){var x__21289__auto__ = cljs.core.apply.call(null,cljs.core.hash_set,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.keyword,base_fields)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__30569__auto__","k__30569__auto__",227407246,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","dissoc","cljs.core/dissoc",-432349815,null)),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","with-meta","cljs.core/with-meta",749126446,null)),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","into","cljs.core/into",1879938733,null)),(function (){var x__21289__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__30568__auto__","this__30568__auto__",1963129230,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__meta","__meta",-946752628,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__30569__auto__","k__30569__auto__",227407246,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__21289__auto__ = tagname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),cljs.core.remove.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null),null,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),null], null), null),fields__$2),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not-empty","cljs.core/not-empty",540057011,null)),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","dissoc","cljs.core/dissoc",-432349815,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__30569__auto__","k__30569__auto__",227407246,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})()))),new cljs.core.Symbol(null,"ISeqable","ISeqable",1349682102,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-seq","-seq",1019896831,null)),(function (){var x__21289__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__30571__auto__","this__30571__auto__",1631415138,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","concat","cljs.core/concat",-1133584918,null)),(function (){var x__21289__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,((function (gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2){
return (function (p1__30570_SHARP_){
return cljs.core._conj.call(null,(function (){var x__21289__auto__ = cljs.core.keyword.call(null,p1__30570_SHARP_);
return cljs.core._conj.call(null,(function (){var x__21289__auto____$1 = p1__30570_SHARP_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto____$1);
})(),x__21289__auto__);
})(),new cljs.core.Symbol("cljs.core$macros","vector","cljs.core$macros/vector",912237829,null));
});})(gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2))
,base_fields)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})()))),new cljs.core.Symbol(null,"IIterable","IIterable",577191430,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-iterator","-iterator",310937281,null)),(function (){var x__21289__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__21289__auto__ = gs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"RecordIter.","RecordIter.",-265283060,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)),(function (){var x__21289__auto__ = gs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.count.call(null,base_fields);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.keyword,base_fields)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-iterator","cljs.core/-iterator",1833427494,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})()))),new cljs.core.Symbol(null,"IPrintWithWriter","IPrintWithWriter",-1205316154,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-pr-writer","-pr-writer",-445354136,null)),(function (){var x__21289__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__30573__auto__","this__30573__auto__",-1452367679,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__30574__auto__","writer__30574__auto__",-383852764,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"opts__30575__auto__","opts__30575__auto__",289674063,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__21289__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"pr-pair__30576__auto__","pr-pair__30576__auto__",-2034180476,null)),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__21289__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"keyval__30577__auto__","keyval__30577__auto__",788643878,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","pr-sequential-writer","cljs.core/pr-sequential-writer",-1101677821,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__30574__auto__","writer__30574__auto__",-383852764,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","pr-writer","cljs.core/pr-writer",133956070,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,""),cljs.core._conj.call(null,cljs.core.List.EMPTY," "),cljs.core._conj.call(null,cljs.core.List.EMPTY,""),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"opts__30575__auto__","opts__30575__auto__",289674063,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"keyval__30577__auto__","keyval__30577__auto__",788643878,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","pr-sequential-writer","cljs.core/pr-sequential-writer",-1101677821,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__30574__auto__","writer__30574__auto__",-383852764,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"pr-pair__30576__auto__","pr-pair__30576__auto__",-2034180476,null)),(function (){var x__21289__auto__ = pr_open;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,", "),cljs.core._conj.call(null,cljs.core.List.EMPTY,"}"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"opts__30575__auto__","opts__30575__auto__",289674063,null)),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","concat","cljs.core/concat",-1133584918,null)),(function (){var x__21289__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,((function (gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2){
return (function (p1__30572_SHARP_){
return cljs.core._conj.call(null,(function (){var x__21289__auto__ = cljs.core.keyword.call(null,p1__30572_SHARP_);
return cljs.core._conj.call(null,(function (){var x__21289__auto____$1 = p1__30572_SHARP_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto____$1);
})(),x__21289__auto__);
})(),new cljs.core.Symbol("cljs.core$macros","vector","cljs.core$macros/vector",912237829,null));
});})(gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2))
,base_fields)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())))], null));
var vec__30581 = cljs.core$macros.prepare_protocol_masks.call(null,env,impls__$1);
var fpps = cljs.core.nth.call(null,vec__30581,(0),null);
var pmasks = cljs.core.nth.call(null,vec__30581,(1),null);
var protocols = cljs.core$macros.collect_protocols.call(null,impls__$1,env);
var tagname__$1 = cljs.core.vary_meta.call(null,tagname,cljs.core.assoc,new cljs.core.Keyword(null,"protocols","protocols",-5615896),protocols,new cljs.core.Keyword(null,"skip-protocol-flag","skip-protocol-flag",-1426798630),fpps);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"defrecord*","defrecord*",-1936366207,null)),(function (){var x__21289__auto__ = tagname__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = hinted_fields;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = pmasks;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","extend-type","cljs.core$macros/extend-type",1713295201,null)),(function (){var x__21289__auto__ = tagname__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),cljs.core$macros.dt__GT_et.call(null,tagname__$1,impls__$1,fields__$2,true))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
});
cljs.core$macros.build_map_factory = (function cljs$core$macros$build_map_factory(rsym,rname,fields){
var fn_name = cljs.core.with_meta.call(null,cljs.core.symbol.call(null,[cljs.core.str(new cljs.core.Symbol(null,"map->","map->",-999714600,null)),cljs.core.str(rsym)].join('')),cljs.core.assoc.call(null,cljs.core.meta.call(null,rsym),new cljs.core.Keyword(null,"factory","factory",63933746),new cljs.core.Keyword(null,"map","map",1371690461)));
var ms = cljs.core.gensym.call(null);
var ks = cljs.core.map.call(null,cljs.core.keyword,fields);
var getters = cljs.core.map.call(null,((function (fn_name,ms,ks){
return (function (k){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__21289__auto__ = k;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = ms;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
});})(fn_name,ms,ks))
,ks);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","defn","cljs.core$macros/defn",-728332354,null)),(function (){var x__21289__auto__ = fn_name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__21289__auto__ = ms;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__21289__auto__ = rname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),getters,cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","dissoc","cljs.core/dissoc",-432349815,null)),(function (){var x__21289__auto__ = ms;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),ks)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
});
/**
 * (defrecord name [fields*]  options* specs*)
 * 
 *   Currently there are no options.
 * 
 *   Each spec consists of a protocol or interface name followed by zero
 *   or more method bodies:
 * 
 *   protocol-or-Object
 *   (methodName [args*] body)*
 * 
 *   The record will have the (immutable) fields named by
 *   fields, which can have type hints. Protocols and methods
 *   are optional. The only methods that can be supplied are those
 *   declared in the protocols.  Note that method bodies are
 *   not closures, the local environment includes only the named fields,
 *   and those fields can be accessed directly.
 * 
 *   Method definitions take the form:
 * 
 *   (methodname [args*] body)
 * 
 *   The argument and return types can be hinted on the arg and
 *   methodname symbols. If not supplied, they will be inferred, so type
 *   hints should be reserved for disambiguation.
 * 
 *   Methods should be supplied for all methods of the desired
 *   protocol(s). You can also define overrides for
 *   methods of Object. Note that a parameter must be supplied to
 *   correspond to the target object ('this' in JavaScript parlance). Note also
 *   that recur calls to the method head should *not* pass the target object, it
 *   will be supplied automatically and can not be substituted.
 * 
 *   In the method bodies, the (unqualified) name can be used to name the
 *   class (for calls to new, instance? etc).
 * 
 *   The type will have implementations of several ClojureScript
 *   protocol generated automatically: IMeta/IWithMeta (metadata support) and
 *   IMap, etc.
 * 
 *   In addition, defrecord will define type-and-value-based =,
 *   and will define ClojureScript IHash and IEquiv.
 * 
 *   Two constructors will be defined, one taking the designated fields
 *   followed by a metadata map (nil for none) and an extension field
 *   map (nil for none), and one taking only the fields (using nil for
 *   meta and extension fields). Note that the field names __meta
 *   and __extmap are currently reserved and should not be used when
 *   defining your own records.
 * 
 *   Given (defrecord TypeName ...), two factory functions will be
 *   defined: ->TypeName, taking positional parameters for the fields,
 *   and map->TypeName, taking a map of keywords to field values.
 */
cljs.core$macros.defrecord = (function cljs$core$macros$defrecord(var_args){
var args__21537__auto__ = [];
var len__21530__auto___30591 = arguments.length;
var i__21531__auto___30592 = (0);
while(true){
if((i__21531__auto___30592 < len__21530__auto___30591)){
args__21537__auto__.push((arguments[i__21531__auto___30592]));

var G__30593 = (i__21531__auto___30592 + (1));
i__21531__auto___30592 = G__30593;
continue;
} else {
}
break;
}

var argseq__21538__auto__ = ((((4) < args__21537__auto__.length))?(new cljs.core.IndexedSeq(args__21537__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.defrecord.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__21538__auto__);
});

cljs.core$macros.defrecord.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,rsym,fields,impls){
cljs.core$macros.validate_fields.call(null,"defrecord",rsym,fields);

var rsym__$1 = cljs.core.vary_meta.call(null,rsym,cljs.core.assoc,new cljs.core.Keyword(null,"internal-ctor","internal-ctor",937392560),true);
var r = cljs.core.vary_meta.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,_AMPERSAND_env,new cljs.core.Keyword(null,"locals","locals",535295783)),rsym__$1)),cljs.core.assoc,new cljs.core.Keyword(null,"internal-ctor","internal-ctor",937392560),true);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__21289__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core$macros.emit_defrecord.call(null,_AMPERSAND_env,rsym__$1,r,fields,impls);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-getBasis",".-getBasis",-1306451468,null)),(function (){var x__21289__auto__ = r;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__21289__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),(function (){var x__21289__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,fields))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-cljs$lang$type",".-cljs$lang$type",-1029307724,null)),(function (){var x__21289__auto__ = r;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-cljs$lang$ctorPrSeq",".-cljs$lang$ctorPrSeq",41132414,null)),(function (){var x__21289__auto__ = r;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__21289__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__30584__auto__","this__30584__auto__",-989885436,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","list","cljs.core/list",-1331406371,null)),(function (){var x__21289__auto__ = [cljs.core.str(r)].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-cljs$lang$ctorPrWriter",".-cljs$lang$ctorPrWriter",255834464,null)),(function (){var x__21289__auto__ = r;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__21289__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__30584__auto__","this__30584__auto__",-989885436,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__30585__auto__","writer__30585__auto__",-2131889765,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-write","cljs.core/-write",527220517,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__30585__auto__","writer__30585__auto__",-2131889765,null)),(function (){var x__21289__auto__ = [cljs.core.str(r)].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core$macros.build_positional_factory.call(null,rsym__$1,r,fields);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core$macros.build_map_factory.call(null,rsym__$1,r,fields);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = r;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
});

cljs.core$macros.defrecord.cljs$lang$maxFixedArity = (4);

cljs.core$macros.defrecord.cljs$lang$applyTo = (function (seq30586){
var G__30587 = cljs.core.first.call(null,seq30586);
var seq30586__$1 = cljs.core.next.call(null,seq30586);
var G__30588 = cljs.core.first.call(null,seq30586__$1);
var seq30586__$2 = cljs.core.next.call(null,seq30586__$1);
var G__30589 = cljs.core.first.call(null,seq30586__$2);
var seq30586__$3 = cljs.core.next.call(null,seq30586__$2);
var G__30590 = cljs.core.first.call(null,seq30586__$3);
var seq30586__$4 = cljs.core.next.call(null,seq30586__$3);
return cljs.core$macros.defrecord.cljs$core$IFn$_invoke$arity$variadic(G__30587,G__30588,G__30589,G__30590,seq30586__$4);
});


cljs.core$macros.defrecord.cljs$lang$macro = true;
/**
 * A protocol is a named set of named methods and their signatures:
 * 
 *   (defprotocol AProtocolName
 *  ;optional doc string
 *  "A doc string for AProtocol abstraction"
 * 
 *   ;method signatures
 *  (bar [this a b] "bar docs")
 *  (baz [this a] [this a b] [this a b c] "baz docs"))
 * 
 *   No implementations are provided. Docs can be specified for the
 *   protocol overall and for each method. The above yields a set of
 *   polymorphic functions and a protocol object. All are
 *   namespace-qualified by the ns enclosing the definition The resulting
 *   functions dispatch on the type of their first argument, which is
 *   required and corresponds to the implicit target object ('this' in
 *   JavaScript parlance). defprotocol is dynamic, has no special compile-time
 *   effect, and defines no new types.
 * 
 *   (defprotocol P
 *  (foo [this])
 *  (bar-me [this] [this y]))
 * 
 *   (deftype Foo [a b c]
 *  P
 *  (foo [this] a)
 *  (bar-me [this] b)
 *  (bar-me [this y] (+ c y)))
 * 
 *   (bar-me (Foo. 1 2 3) 42)
 *   => 45
 * 
 *   (foo
 *  (let [x 42]
 *    (reify P
 *      (foo [this] 17)
 *      (bar-me [this] x)
 *      (bar-me [this y] x))))
 *   => 17
 */
cljs.core$macros.defprotocol = (function cljs$core$macros$defprotocol(var_args){
var args__21537__auto__ = [];
var len__21530__auto___30621 = arguments.length;
var i__21531__auto___30622 = (0);
while(true){
if((i__21531__auto___30622 < len__21530__auto___30621)){
args__21537__auto__.push((arguments[i__21531__auto___30622]));

var G__30623 = (i__21531__auto___30622 + (1));
i__21531__auto___30622 = G__30623;
continue;
} else {
}
break;
}

var argseq__21538__auto__ = ((((3) < args__21537__auto__.length))?(new cljs.core.IndexedSeq(args__21537__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.defprotocol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__21538__auto__);
});

cljs.core$macros.defprotocol.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,psym,doc_PLUS_methods){
var p = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,_AMPERSAND_env,new cljs.core.Keyword(null,"locals","locals",535295783)),psym));
var vec__30600 = ((typeof cljs.core.first.call(null,doc_PLUS_methods) === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,doc_PLUS_methods),cljs.core.next.call(null,doc_PLUS_methods)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,doc_PLUS_methods], null));
var doc = cljs.core.nth.call(null,vec__30600,(0),null);
var methods$ = cljs.core.nth.call(null,vec__30600,(1),null);
var psym__$1 = cljs.core.vary_meta.call(null,psym,cljs.core.assoc,new cljs.core.Keyword(null,"doc","doc",1913296891),doc,new cljs.core.Keyword(null,"protocol-symbol","protocol-symbol",1279552198),true);
var ns_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env));
var fqn = ((function (p,vec__30600,doc,methods$,psym__$1,ns_name){
return (function (n){
return cljs.core.symbol.call(null,[cljs.core.str(ns_name),cljs.core.str("."),cljs.core.str(n)].join(''));
});})(p,vec__30600,doc,methods$,psym__$1,ns_name))
;
var prefix = cljs.core$macros.protocol_prefix.call(null,p);
var _ = (function (){var seq__30603 = cljs.core.seq.call(null,methods$);
var chunk__30604 = null;
var count__30605 = (0);
var i__30606 = (0);
while(true){
if((i__30606 < count__30605)){
var vec__30607 = cljs.core._nth.call(null,chunk__30604,i__30606);
var seq__30608 = cljs.core.seq.call(null,vec__30607);
var first__30609 = cljs.core.first.call(null,seq__30608);
var seq__30608__$1 = cljs.core.next.call(null,seq__30608);
var mname = first__30609;
var arities = seq__30608__$1;
if(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(0),null], null), null),cljs.core.map.call(null,cljs.core.count,cljs.core.filter.call(null,cljs.core.vector_QMARK_,arities))))){
throw (new Error([cljs.core.str("Invalid protocol, "),cljs.core.str(psym__$1),cljs.core.str(" defines method "),cljs.core.str(mname),cljs.core.str(" with arity 0")].join('')));
} else {
}

var G__30624 = seq__30603;
var G__30625 = chunk__30604;
var G__30626 = count__30605;
var G__30627 = (i__30606 + (1));
seq__30603 = G__30624;
chunk__30604 = G__30625;
count__30605 = G__30626;
i__30606 = G__30627;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__30603);
if(temp__4657__auto__){
var seq__30603__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30603__$1)){
var c__21266__auto__ = cljs.core.chunk_first.call(null,seq__30603__$1);
var G__30628 = cljs.core.chunk_rest.call(null,seq__30603__$1);
var G__30629 = c__21266__auto__;
var G__30630 = cljs.core.count.call(null,c__21266__auto__);
var G__30631 = (0);
seq__30603 = G__30628;
chunk__30604 = G__30629;
count__30605 = G__30630;
i__30606 = G__30631;
continue;
} else {
var vec__30610 = cljs.core.first.call(null,seq__30603__$1);
var seq__30611 = cljs.core.seq.call(null,vec__30610);
var first__30612 = cljs.core.first.call(null,seq__30611);
var seq__30611__$1 = cljs.core.next.call(null,seq__30611);
var mname = first__30612;
var arities = seq__30611__$1;
if(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(0),null], null), null),cljs.core.map.call(null,cljs.core.count,cljs.core.filter.call(null,cljs.core.vector_QMARK_,arities))))){
throw (new Error([cljs.core.str("Invalid protocol, "),cljs.core.str(psym__$1),cljs.core.str(" defines method "),cljs.core.str(mname),cljs.core.str(" with arity 0")].join('')));
} else {
}

var G__30632 = cljs.core.next.call(null,seq__30603__$1);
var G__30633 = null;
var G__30634 = (0);
var G__30635 = (0);
seq__30603 = G__30632;
chunk__30604 = G__30633;
count__30605 = G__30634;
i__30606 = G__30635;
continue;
}
} else {
return null;
}
}
break;
}
})();
var expand_sig = ((function (p,vec__30600,doc,methods$,psym__$1,ns_name,fqn,prefix,_){
return (function (fname,slot,sig){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__21289__auto__ = sig;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null)),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__21289__auto__ = cljs.core.first.call(null,sig);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null)),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__21289__auto__ = cljs.core.first.call(null,sig);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.symbol.call(null,[cljs.core.str("-"),cljs.core.str(slot)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__21289__auto__ = cljs.core.first.call(null,sig);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = slot;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),sig)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__21289__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__30594__auto__","x__30594__auto__",1511513663,null)),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__21289__auto__ = cljs.core.first.call(null,sig);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__21289__auto__ = cljs.core.first.call(null,sig);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"m__30595__auto__","m__30595__auto__",-165316410,null)),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aget","cljs.core$macros/aget",1976136178,null)),(function (){var x__21289__auto__ = fqn.call(null,fname);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("goog","typeOf","goog/typeOf",539097255,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__30594__auto__","x__30594__auto__",1511513663,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null)),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"m__30595__auto__","m__30595__auto__",-165316410,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"m__30595__auto__","m__30595__auto__",-165316410,null)),sig)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__21289__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"m__30595__auto__","m__30595__auto__",-165316410,null)),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aget","cljs.core$macros/aget",1976136178,null)),(function (){var x__21289__auto__ = fqn.call(null,fname);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,"_"))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null)),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"m__30595__auto__","m__30595__auto__",-165316410,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"m__30595__auto__","m__30595__auto__",-165316410,null)),sig)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","missing-protocol","cljs.core/missing-protocol",531539732,null)),(function (){var x__21289__auto__ = [cljs.core.str(psym__$1),cljs.core.str("."),cljs.core.str(fname)].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.first.call(null,sig);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
});})(p,vec__30600,doc,methods$,psym__$1,ns_name,fqn,prefix,_))
;
var psym__$2 = cljs.core.vary_meta.call(null,cljs.core.vary_meta.call(null,psym__$1,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516)], null),cljs.core.conj,"@interface"),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"protocol-info","protocol-info",1471745843),new cljs.core.Keyword(null,"methods","methods",453930866)], null),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (p,vec__30600,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig){
return (function (p__30613){
var vec__30614 = p__30613;
var seq__30615 = cljs.core.seq.call(null,vec__30614);
var first__30616 = cljs.core.first.call(null,seq__30615);
var seq__30615__$1 = cljs.core.next.call(null,seq__30615);
var fname = first__30616;
var sigs = seq__30615__$1;
var doc__$1 = (function (){var doc__$1 = cljs.core.last.call(null,sigs);
if(typeof doc__$1 === 'string'){
return doc__$1;
} else {
return null;
}
})();
var sigs__$1 = cljs.core.take_while.call(null,cljs.core.vector_QMARK_,sigs);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vary_meta.call(null,fname,cljs.core.assoc,new cljs.core.Keyword(null,"doc","doc",1913296891),doc__$1),cljs.core.vec.call(null,sigs__$1)], null);
});})(p,vec__30600,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig))
,methods$)));
var method = ((function (p,vec__30600,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig,psym__$2){
return (function (p__30617){
var vec__30618 = p__30617;
var seq__30619 = cljs.core.seq.call(null,vec__30618);
var first__30620 = cljs.core.first.call(null,seq__30619);
var seq__30619__$1 = cljs.core.next.call(null,seq__30619);
var fname = first__30620;
var sigs = seq__30619__$1;
var doc__$1 = (function (){var doc__$1 = cljs.core.last.call(null,sigs);
if(typeof doc__$1 === 'string'){
return doc__$1;
} else {
return null;
}
})();
var sigs__$1 = cljs.core.take_while.call(null,cljs.core.vector_QMARK_,sigs);
var amp = (cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null], null), null),cljs.core.apply.call(null,cljs.core.concat,sigs__$1)))?cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"protocol-with-variadic-method","protocol-with-variadic-method",-693368178),_AMPERSAND_env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"protocol","protocol",652470118),psym__$2,new cljs.core.Keyword(null,"name","name",1843675177),fname], null)):null);
var slot = cljs.core.symbol.call(null,[cljs.core.str(prefix),cljs.core.str(cljs.core.name.call(null,fname))].join(''));
var fname__$1 = cljs.core.vary_meta.call(null,fname,cljs.core.assoc,new cljs.core.Keyword(null,"protocol","protocol",652470118),p,new cljs.core.Keyword(null,"doc","doc",1913296891),doc__$1);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","defn","cljs.core$macros/defn",-728332354,null)),(function (){var x__21289__auto__ = fname__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),cljs.core.map.call(null,((function (doc__$1,sigs__$1,amp,slot,fname__$1,vec__30618,seq__30619,first__30620,seq__30619__$1,fname,sigs,p,vec__30600,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig,psym__$2){
return (function (sig){
return expand_sig.call(null,fname__$1,cljs.core.symbol.call(null,[cljs.core.str(slot),cljs.core.str("$arity$"),cljs.core.str(cljs.core.count.call(null,sig))].join('')),sig);
});})(doc__$1,sigs__$1,amp,slot,fname__$1,vec__30618,seq__30619,first__30620,seq__30619__$1,fname,sigs,p,vec__30600,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig,psym__$2))
,sigs__$1))));
});})(p,vec__30600,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig,psym__$2))
;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"*unchecked-if*","*unchecked-if*",1542408350,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"def","def",597100991,null)),(function (){var x__21289__auto__ = psym__$2;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"function(){}"))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),cljs.core.map.call(null,method,methods$),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"*unchecked-if*","*unchecked-if*",1542408350,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,false))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
});

cljs.core$macros.defprotocol.cljs$lang$maxFixedArity = (3);

cljs.core$macros.defprotocol.cljs$lang$applyTo = (function (seq30596){
var G__30597 = cljs.core.first.call(null,seq30596);
var seq30596__$1 = cljs.core.next.call(null,seq30596);
var G__30598 = cljs.core.first.call(null,seq30596__$1);
var seq30596__$2 = cljs.core.next.call(null,seq30596__$1);
var G__30599 = cljs.core.first.call(null,seq30596__$2);
var seq30596__$3 = cljs.core.next.call(null,seq30596__$2);
return cljs.core$macros.defprotocol.cljs$core$IFn$_invoke$arity$variadic(G__30597,G__30598,G__30599,seq30596__$3);
});


cljs.core$macros.defprotocol.cljs$lang$macro = true;
/**
 * EXPERIMENTAL
 */
cljs.core$macros.implements_QMARK_ = (function cljs$core$macros$implements_QMARK_(_AMPERSAND_form,_AMPERSAND_env,psym,x){
var p = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,_AMPERSAND_env,new cljs.core.Keyword(null,"locals","locals",535295783)),psym));
var prefix = cljs.core$macros.protocol_prefix.call(null,p);
var xsym = cljs.core$macros.bool_expr.call(null,cljs.core.gensym.call(null));
var vec__30639 = cljs.core$macros.fast_path_protocols.call(null,p);
var part = cljs.core.nth.call(null,vec__30639,(0),null);
var bit = cljs.core.nth.call(null,vec__30639,(1),null);
var msym = cljs.core.symbol.call(null,[cljs.core.str("-cljs$lang$protocol_mask$partition"),cljs.core.str(part),cljs.core.str("$")].join(''));
if(!((x instanceof cljs.core.Symbol))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__21289__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__21289__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__21289__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","or","cljs.core$macros/or",1346243648,null)),(function (){var x__21289__auto__ = (cljs.core.truth_(bit)?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unsafe-bit-and","cljs.core$macros/unsafe-bit-and",1803731600,null)),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__21289__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = msym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = bit;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})()))):false);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core$macros.bool_expr.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__21289__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.symbol.call(null,[cljs.core.str("-"),cljs.core.str(prefix)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true),cljs.core._conj.call(null,cljs.core.List.EMPTY,false))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,false))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null)),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__21289__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","or","cljs.core$macros/or",1346243648,null)),(function (){var x__21289__auto__ = (cljs.core.truth_(bit)?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unsafe-bit-and","cljs.core$macros/unsafe-bit-and",1803731600,null)),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__21289__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = msym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = bit;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})()))):false);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core$macros.bool_expr.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__21289__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.symbol.call(null,[cljs.core.str("-"),cljs.core.str(prefix)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true),cljs.core._conj.call(null,cljs.core.List.EMPTY,false))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,false))));
}
});

cljs.core$macros.implements_QMARK_.cljs$lang$macro = true;
/**
 * Returns true if x satisfies the protocol
 */
cljs.core$macros.satisfies_QMARK_ = (function cljs$core$macros$satisfies_QMARK_(_AMPERSAND_form,_AMPERSAND_env,psym,x){
var p = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,_AMPERSAND_env,new cljs.core.Keyword(null,"locals","locals",535295783)),psym));
var prefix = cljs.core$macros.protocol_prefix.call(null,p);
var xsym = cljs.core$macros.bool_expr.call(null,cljs.core.gensym.call(null));
var vec__30645 = cljs.core$macros.fast_path_protocols.call(null,p);
var part = cljs.core.nth.call(null,vec__30645,(0),null);
var bit = cljs.core.nth.call(null,vec__30645,(1),null);
var msym = cljs.core.symbol.call(null,[cljs.core.str("-cljs$lang$protocol_mask$partition"),cljs.core.str(part),cljs.core.str("$")].join(''));
if(!((x instanceof cljs.core.Symbol))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__21289__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__21289__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null)),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__21289__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","or","cljs.core$macros/or",1346243648,null)),(function (){var x__21289__auto__ = (cljs.core.truth_(bit)?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unsafe-bit-and","cljs.core$macros/unsafe-bit-and",1803731600,null)),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__21289__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = msym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = bit;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})()))):false);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core$macros.bool_expr.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__21289__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.symbol.call(null,[cljs.core.str("-"),cljs.core.str(prefix)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","coercive-not","cljs.core$macros/coercive-not",115999987,null)),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__21289__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = msym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","native-satisfies?","cljs.core/native-satisfies?",1482305036,null)),(function (){var x__21289__auto__ = psym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,false))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","native-satisfies?","cljs.core/native-satisfies?",1482305036,null)),(function (){var x__21289__auto__ = psym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null)),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__21289__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","or","cljs.core$macros/or",1346243648,null)),(function (){var x__21289__auto__ = (cljs.core.truth_(bit)?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unsafe-bit-and","cljs.core$macros/unsafe-bit-and",1803731600,null)),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__21289__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = msym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = bit;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})()))):false);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core$macros.bool_expr.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__21289__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.symbol.call(null,[cljs.core.str("-"),cljs.core.str(prefix)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","coercive-not","cljs.core$macros/coercive-not",115999987,null)),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__21289__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = msym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","native-satisfies?","cljs.core/native-satisfies?",1482305036,null)),(function (){var x__21289__auto__ = psym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,false))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","native-satisfies?","cljs.core/native-satisfies?",1482305036,null)),(function (){var x__21289__auto__ = psym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
}
});

cljs.core$macros.satisfies_QMARK_.cljs$lang$macro = true;
/**
 * Takes a body of expressions that returns an ISeq or nil, and yields
 *   a ISeqable object that will invoke the body only the first time seq
 *   is called, and will cache the result and return it on all subsequent
 *   seq calls.
 */
cljs.core$macros.lazy_seq = (function cljs$core$macros$lazy_seq(var_args){
var args__21537__auto__ = [];
var len__21530__auto___30651 = arguments.length;
var i__21531__auto___30652 = (0);
while(true){
if((i__21531__auto___30652 < len__21530__auto___30651)){
args__21537__auto__.push((arguments[i__21531__auto___30652]));

var G__30653 = (i__21531__auto___30652 + (1));
i__21531__auto___30652 = G__30653;
continue;
} else {
}
break;
}

var argseq__21538__auto__ = ((((2) < args__21537__auto__.length))?(new cljs.core.IndexedSeq(args__21537__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.lazy_seq.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__21538__auto__);
});

cljs.core$macros.lazy_seq.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","LazySeq","cljs.core/LazySeq",1986389673,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__21289__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
});

cljs.core$macros.lazy_seq.cljs$lang$maxFixedArity = (2);

cljs.core$macros.lazy_seq.cljs$lang$applyTo = (function (seq30648){
var G__30649 = cljs.core.first.call(null,seq30648);
var seq30648__$1 = cljs.core.next.call(null,seq30648);
var G__30650 = cljs.core.first.call(null,seq30648__$1);
var seq30648__$2 = cljs.core.next.call(null,seq30648__$1);
return cljs.core$macros.lazy_seq.cljs$core$IFn$_invoke$arity$variadic(G__30649,G__30650,seq30648__$2);
});


cljs.core$macros.lazy_seq.cljs$lang$macro = true;
/**
 * Takes a body of expressions and yields a Delay object that will
 *   invoke the body only the first time it is forced (with force or deref/@), and
 *   will cache the result and return it on all subsequent force
 *   calls.
 */
cljs.core$macros.delay = (function cljs$core$macros$delay(var_args){
var args__21537__auto__ = [];
var len__21530__auto___30657 = arguments.length;
var i__21531__auto___30658 = (0);
while(true){
if((i__21531__auto___30658 < len__21530__auto___30657)){
args__21537__auto__.push((arguments[i__21531__auto___30658]));

var G__30659 = (i__21531__auto___30658 + (1));
i__21531__auto___30658 = G__30659;
continue;
} else {
}
break;
}

var argseq__21538__auto__ = ((((2) < args__21537__auto__.length))?(new cljs.core.IndexedSeq(args__21537__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.delay.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__21538__auto__);
});

cljs.core$macros.delay.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","Delay","cljs.core/Delay",-21574999,null)),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__21289__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
});

cljs.core$macros.delay.cljs$lang$maxFixedArity = (2);

cljs.core$macros.delay.cljs$lang$applyTo = (function (seq30654){
var G__30655 = cljs.core.first.call(null,seq30654);
var seq30654__$1 = cljs.core.next.call(null,seq30654);
var G__30656 = cljs.core.first.call(null,seq30654__$1);
var seq30654__$2 = cljs.core.next.call(null,seq30654__$1);
return cljs.core$macros.delay.cljs$core$IFn$_invoke$arity$variadic(G__30655,G__30656,seq30654__$2);
});


cljs.core$macros.delay.cljs$lang$macro = true;
/**
 * binding => var-symbol temp-value-expr
 * 
 *   Temporarily redefines vars while executing the body.  The
 *   temp-value-exprs will be evaluated and each resulting value will
 *   replace in parallel the root value of its var.  After the body is
 *   executed, the root values of all the vars will be set back to their
 *   old values. Useful for mocking out functions during testing.
 */
cljs.core$macros.with_redefs = (function cljs$core$macros$with_redefs(var_args){
var args__21537__auto__ = [];
var len__21530__auto___30668 = arguments.length;
var i__21531__auto___30669 = (0);
while(true){
if((i__21531__auto___30669 < len__21530__auto___30668)){
args__21537__auto__.push((arguments[i__21531__auto___30669]));

var G__30670 = (i__21531__auto___30669 + (1));
i__21531__auto___30669 = G__30670;
continue;
} else {
}
break;
}

var argseq__21538__auto__ = ((((3) < args__21537__auto__.length))?(new cljs.core.IndexedSeq(args__21537__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.with_redefs.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__21538__auto__);
});

cljs.core$macros.with_redefs.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
var names = cljs.core.take_nth.call(null,(2),bindings);
var vals = cljs.core.take_nth.call(null,(2),cljs.core.drop.call(null,(1),bindings));
var tempnames = cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.gensym,cljs.core.name),names);
var binds = cljs.core.map.call(null,cljs.core.vector,names,vals);
var resets = cljs.core.reverse.call(null,cljs.core.map.call(null,cljs.core.vector,names,tempnames));
var bind_value = ((function (names,vals,tempnames,binds,resets){
return (function (p__30664){
var vec__30665 = p__30664;
var k = cljs.core.nth.call(null,vec__30665,(0),null);
var v = cljs.core.nth.call(null,vec__30665,(1),null);
return cljs.core._conj.call(null,(function (){var x__21289__auto__ = k;
return cljs.core._conj.call(null,(function (){var x__21289__auto____$1 = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto____$1);
})(),x__21289__auto__);
})(),new cljs.core.Symbol(null,"set!","set!",250714521,null));
});})(names,vals,tempnames,binds,resets))
;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__21289__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.interleave.call(null,tempnames,names)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),cljs.core.map.call(null,bind_value,binds),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"try","try",-1273693247,null)),body,(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"finally","finally",-1065347064,null)),cljs.core.map.call(null,bind_value,resets))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
});

cljs.core$macros.with_redefs.cljs$lang$maxFixedArity = (3);

cljs.core$macros.with_redefs.cljs$lang$applyTo = (function (seq30660){
var G__30661 = cljs.core.first.call(null,seq30660);
var seq30660__$1 = cljs.core.next.call(null,seq30660);
var G__30662 = cljs.core.first.call(null,seq30660__$1);
var seq30660__$2 = cljs.core.next.call(null,seq30660__$1);
var G__30663 = cljs.core.first.call(null,seq30660__$2);
var seq30660__$3 = cljs.core.next.call(null,seq30660__$2);
return cljs.core$macros.with_redefs.cljs$core$IFn$_invoke$arity$variadic(G__30661,G__30662,G__30663,seq30660__$3);
});


cljs.core$macros.with_redefs.cljs$lang$macro = true;
/**
 * binding => var-symbol init-expr
 * 
 *   Creates new bindings for the (already-existing) vars, with the
 *   supplied initial values, executes the exprs in an implicit do, then
 *   re-establishes the bindings that existed before.  The new bindings
 *   are made in parallel (unlike let); all init-exprs are evaluated
 *   before the vars are bound to their new values.
 */
cljs.core$macros.binding = (function cljs$core$macros$binding(var_args){
var args__21537__auto__ = [];
var len__21530__auto___30675 = arguments.length;
var i__21531__auto___30676 = (0);
while(true){
if((i__21531__auto___30676 < len__21530__auto___30675)){
args__21537__auto__.push((arguments[i__21531__auto___30676]));

var G__30677 = (i__21531__auto___30676 + (1));
i__21531__auto___30676 = G__30677;
continue;
} else {
}
break;
}

var argseq__21538__auto__ = ((((3) < args__21537__auto__.length))?(new cljs.core.IndexedSeq(args__21537__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.binding.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__21538__auto__);
});

cljs.core$macros.binding.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
var names = cljs.core.take_nth.call(null,(2),bindings);
cljs.analyzer.confirm_bindings.call(null,_AMPERSAND_env,names);

return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","with-redefs","cljs.core$macros/with-redefs",1489217801,null)),(function (){var x__21289__auto__ = bindings;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),body)));
});

cljs.core$macros.binding.cljs$lang$maxFixedArity = (3);

cljs.core$macros.binding.cljs$lang$applyTo = (function (seq30671){
var G__30672 = cljs.core.first.call(null,seq30671);
var seq30671__$1 = cljs.core.next.call(null,seq30671);
var G__30673 = cljs.core.first.call(null,seq30671__$1);
var seq30671__$2 = cljs.core.next.call(null,seq30671__$1);
var G__30674 = cljs.core.first.call(null,seq30671__$2);
var seq30671__$3 = cljs.core.next.call(null,seq30671__$2);
return cljs.core$macros.binding.cljs$core$IFn$_invoke$arity$variadic(G__30672,G__30673,G__30674,seq30671__$3);
});


cljs.core$macros.binding.cljs$lang$macro = true;
/**
 * Takes a binary predicate, an expression, and a set of clauses.
 *   Each clause can take the form of either:
 * 
 *   test-expr result-expr
 * 
 *   test-expr :>> result-fn
 * 
 *   Note :>> is an ordinary keyword.
 * 
 *   For each clause, (pred test-expr expr) is evaluated. If it returns
 *   logical true, the clause is a match. If a binary clause matches, the
 *   result-expr is returned, if a ternary clause matches, its result-fn,
 *   which must be a unary function, is called with the result of the
 *   predicate as its argument, the result of that call being the return
 *   value of condp. A single default expression can follow the clauses,
 *   and its value will be returned if no clause matches. If no default
 *   expression is provided and no clause matches, an
 *   IllegalArgumentException is thrown.
 */
cljs.core$macros.condp = (function cljs$core$macros$condp(var_args){
var args__21537__auto__ = [];
var len__21530__auto___30696 = arguments.length;
var i__21531__auto___30697 = (0);
while(true){
if((i__21531__auto___30697 < len__21530__auto___30696)){
args__21537__auto__.push((arguments[i__21531__auto___30697]));

var G__30698 = (i__21531__auto___30697 + (1));
i__21531__auto___30697 = G__30698;
continue;
} else {
}
break;
}

var argseq__21538__auto__ = ((((4) < args__21537__auto__.length))?(new cljs.core.IndexedSeq(args__21537__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.condp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__21538__auto__);
});

cljs.core$macros.condp.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,pred,expr,clauses){
var gpred = cljs.core.gensym.call(null,"pred__");
var gexpr = cljs.core.gensym.call(null,"expr__");
var emit = ((function (gpred,gexpr){
return (function cljs$core$macros$emit(pred__$1,expr__$1,args){
var vec__30690 = cljs.core.split_at.call(null,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,">>",">>",-277509267),cljs.core.second.call(null,args)))?(3):(2)),args);
var vec__30693 = cljs.core.nth.call(null,vec__30690,(0),null);
var a = cljs.core.nth.call(null,vec__30693,(0),null);
var b = cljs.core.nth.call(null,vec__30693,(1),null);
var c = cljs.core.nth.call(null,vec__30693,(2),null);
var clause = vec__30693;
var more = cljs.core.nth.call(null,vec__30690,(1),null);
var n = cljs.core.count.call(null,clause);
if(cljs.core._EQ_.call(null,(0),n)){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null)),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"No matching clause: "),(function (){var x__21289__auto__ = expr__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
} else {
if(cljs.core._EQ_.call(null,(1),n)){
return a;
} else {
if(cljs.core._EQ_.call(null,(2),n)){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__21289__auto__ = pred__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = a;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = expr__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = b;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs$core$macros$emit.call(null,pred__$1,expr__$1,more);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-let","cljs.core$macros/if-let",1291543946,null)),(function (){var x__21289__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"p__30678__auto__","p__30678__auto__",220295099,null)),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__21289__auto__ = pred__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = a;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = expr__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__21289__auto__ = c;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"p__30678__auto__","p__30678__auto__",220295099,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs$core$macros$emit.call(null,pred__$1,expr__$1,more);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));

}
}
}
});})(gpred,gexpr))
;
var gres = cljs.core.gensym.call(null,"res__");
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__21289__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__21289__auto__ = gpred;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = pred;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = gexpr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = emit.call(null,gpred,gexpr,clauses);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
});

cljs.core$macros.condp.cljs$lang$maxFixedArity = (4);

cljs.core$macros.condp.cljs$lang$applyTo = (function (seq30679){
var G__30680 = cljs.core.first.call(null,seq30679);
var seq30679__$1 = cljs.core.next.call(null,seq30679);
var G__30681 = cljs.core.first.call(null,seq30679__$1);
var seq30679__$2 = cljs.core.next.call(null,seq30679__$1);
var G__30682 = cljs.core.first.call(null,seq30679__$2);
var seq30679__$3 = cljs.core.next.call(null,seq30679__$2);
var G__30683 = cljs.core.first.call(null,seq30679__$3);
var seq30679__$4 = cljs.core.next.call(null,seq30679__$3);
return cljs.core$macros.condp.cljs$core$IFn$_invoke$arity$variadic(G__30680,G__30681,G__30682,G__30683,seq30679__$4);
});


cljs.core$macros.condp.cljs$lang$macro = true;
cljs.core$macros.assoc_test = (function cljs$core$macros$assoc_test(m,test,expr,env){
if(cljs.core.contains_QMARK_.call(null,m,test)){
throw (new Error([cljs.core.str("Duplicate case test constant '"),cljs.core.str(test),cljs.core.str("'"),cljs.core.str((cljs.core.truth_(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env))?[cljs.core.str(" on line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env)),cljs.core.str(" "),cljs.core.str(cljs.analyzer._STAR_cljs_file_STAR_)].join(''):null))].join('')));
} else {
return cljs.core.assoc.call(null,m,test,expr);
}
});
cljs.core$macros.const_QMARK_ = (function cljs$core$macros$const_QMARK_(env,x){
var m = (function (){var and__20443__auto__ = cljs.core.list_QMARK_.call(null,x);
if(and__20443__auto__){
return cljs.analyzer.resolve_var.call(null,env,cljs.core.last.call(null,x));
} else {
return and__20443__auto__;
}
})();
if(cljs.core.truth_(m)){
return cljs.core.get.call(null,m,new cljs.core.Keyword(null,"const","const",1709929842));
} else {
return null;
}
});
/**
 * Takes an expression, and a set of clauses.
 * 
 *   Each clause can take the form of either:
 * 
 *   test-constant result-expr
 * 
 *   (test-constant1 ... test-constantN)  result-expr
 * 
 *   The test-constants are not evaluated. They must be compile-time
 *   literals, and need not be quoted.  If the expression is equal to a
 *   test-constant, the corresponding result-expr is returned. A single
 *   default expression can follow the clauses, and its value will be
 *   returned if no clause matches. If no default expression is provided
 *   and no clause matches, an Error is thrown.
 * 
 *   Unlike cond and condp, case does a constant-time dispatch, the
 *   clauses are not considered sequentially.  All manner of constant
 *   expressions are acceptable in case, including numbers, strings,
 *   symbols, keywords, and (ClojureScript) composites thereof. Note that since
 *   lists are used to group multiple constants that map to the same
 *   expression, a vector can be used to match a list if needed. The
 *   test-constants need not be all of the same type.
 */
cljs.core$macros.case$ = (function cljs$core$macros$case(var_args){
var args__21537__auto__ = [];
var len__21530__auto___30719 = arguments.length;
var i__21531__auto___30720 = (0);
while(true){
if((i__21531__auto___30720 < len__21530__auto___30719)){
args__21537__auto__.push((arguments[i__21531__auto___30720]));

var G__30721 = (i__21531__auto___30720 + (1));
i__21531__auto___30720 = G__30721;
continue;
} else {
}
break;
}

var argseq__21538__auto__ = ((((3) < args__21537__auto__.length))?(new cljs.core.IndexedSeq(args__21537__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.case$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__21538__auto__);
});

cljs.core$macros.case$.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,e,clauses){
var default$ = ((cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,clauses)))?cljs.core.last.call(null,clauses):cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null)),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"No matching clause: "),(function (){var x__21289__auto__ = e;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})()))));
var env = _AMPERSAND_env;
var pairs = cljs.core.reduce.call(null,((function (default$,env){
return (function (m,p__30707){
var vec__30708 = p__30707;
var test = cljs.core.nth.call(null,vec__30708,(0),null);
var expr = cljs.core.nth.call(null,vec__30708,(1),null);
if(cljs.core.seq_QMARK_.call(null,test)){
return cljs.core.reduce.call(null,((function (vec__30708,test,expr,default$,env){
return (function (m__$1,test__$1){
var test__$2 = (((test__$1 instanceof cljs.core.Symbol))?cljs.core._conj.call(null,(function (){var x__21289__auto__ = test__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),new cljs.core.Symbol(null,"quote","quote",1377916282,null)):test__$1);
return cljs.core$macros.assoc_test.call(null,m__$1,test__$2,expr,env);
});})(vec__30708,test,expr,default$,env))
,m,test);
} else {
if((test instanceof cljs.core.Symbol)){
return cljs.core$macros.assoc_test.call(null,m,cljs.core._conj.call(null,(function (){var x__21289__auto__ = test;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),new cljs.core.Symbol(null,"quote","quote",1377916282,null)),expr,env);
} else {
return cljs.core$macros.assoc_test.call(null,m,test,expr,env);

}
}
});})(default$,env))
,cljs.core.PersistentArrayMap.EMPTY,cljs.core.partition.call(null,(2),clauses));
var esym = cljs.core.gensym.call(null);
var tests = cljs.core.keys.call(null,pairs);
if(cljs.core.every_QMARK_.call(null,cljs.core.some_fn.call(null,cljs.core.number_QMARK_,cljs.core.string_QMARK_,cljs.core.fnil.call(null,cljs.core.char_QMARK_,new cljs.core.Keyword(null,"nonchar","nonchar",-421759703)),((function (default$,env,pairs,esym,tests){
return (function (p1__30699_SHARP_){
return cljs.core$macros.const_QMARK_.call(null,env,p1__30699_SHARP_);
});})(default$,env,pairs,esym,tests))
),tests)){
var no_default = ((cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,clauses)))?cljs.core.butlast.call(null,clauses):clauses);
var tests__$1 = cljs.core.mapv.call(null,((function (no_default,default$,env,pairs,esym,tests){
return (function (p1__30700_SHARP_){
if(cljs.core.seq_QMARK_.call(null,p1__30700_SHARP_)){
return cljs.core.vec.call(null,p1__30700_SHARP_);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30700_SHARP_], null);
}
});})(no_default,default$,env,pairs,esym,tests))
,cljs.core.take_nth.call(null,(2),no_default));
var thens = cljs.core.vec.call(null,cljs.core.take_nth.call(null,(2),cljs.core.drop.call(null,(1),no_default)));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__21289__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__21289__auto__ = esym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = e;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"case*","case*",-1938255072,null)),(function (){var x__21289__auto__ = esym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = tests__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = thens;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = default$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
} else {
if(cljs.core.every_QMARK_.call(null,cljs.core.keyword_QMARK_,tests)){
var tests__$1 = cljs.core.mapv.call(null,((function (default$,env,pairs,esym,tests){
return (function (p1__30702_SHARP_){
if(cljs.core.seq_QMARK_.call(null,p1__30702_SHARP_)){
return cljs.core.vec.call(null,p1__30702_SHARP_);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30702_SHARP_], null);
}
});})(default$,env,pairs,esym,tests))
,cljs.core.vec.call(null,cljs.core.map.call(null,((function (default$,env,pairs,esym,tests){
return (function (p1__30701_SHARP_){
return [cljs.core.str(p1__30701_SHARP_)].join('').substring((1));
});})(default$,env,pairs,esym,tests))
,tests)));
var thens = cljs.core.vec.call(null,cljs.core.vals.call(null,pairs));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__21289__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__21289__auto__ = esym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","keyword?","cljs.core$macros/keyword?",1362730141,null)),(function (){var x__21289__auto__ = e;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-fqn",".-fqn",1246113027,null)),(function (){var x__21289__auto__ = e;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"case*","case*",-1938255072,null)),(function (){var x__21289__auto__ = esym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = tests__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = thens;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = default$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__21289__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__21289__auto__ = esym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = e;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","cond","cljs.core$macros/cond",1626318471,null)),cljs.core.mapcat.call(null,((function (default$,env,pairs,esym,tests){
return (function (p__30715){
var vec__30716 = p__30715;
var m = cljs.core.nth.call(null,vec__30716,(0),null);
var c = cljs.core.nth.call(null,vec__30716,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null)),(function (){var x__21289__auto__ = m;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = esym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = c;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
});})(default$,env,pairs,esym,tests))
,pairs),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"else","else",-1508377146)),(function (){var x__21289__auto__ = default$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));

}
}
});

cljs.core$macros.case$.cljs$lang$maxFixedArity = (3);

cljs.core$macros.case$.cljs$lang$applyTo = (function (seq30703){
var G__30704 = cljs.core.first.call(null,seq30703);
var seq30703__$1 = cljs.core.next.call(null,seq30703);
var G__30705 = cljs.core.first.call(null,seq30703__$1);
var seq30703__$2 = cljs.core.next.call(null,seq30703__$1);
var G__30706 = cljs.core.first.call(null,seq30703__$2);
var seq30703__$3 = cljs.core.next.call(null,seq30703__$2);
return cljs.core$macros.case$.cljs$core$IFn$_invoke$arity$variadic(G__30704,G__30705,G__30706,seq30703__$3);
});


cljs.core$macros.case$.cljs$lang$macro = true;
/**
 * Evaluates expr and throws an exception if it does not evaluate to
 *   logical true.
 */
cljs.core$macros.assert = (function cljs$core$macros$assert(var_args){
var args30722 = [];
var len__21530__auto___30725 = arguments.length;
var i__21531__auto___30726 = (0);
while(true){
if((i__21531__auto___30726 < len__21530__auto___30725)){
args30722.push((arguments[i__21531__auto___30726]));

var G__30727 = (i__21531__auto___30726 + (1));
i__21531__auto___30726 = G__30727;
continue;
} else {
}
break;
}

var G__30724 = args30722.length;
switch (G__30724) {
case 3:
return cljs.core$macros.assert.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.assert.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str((args30722.length - (2)))].join('')));

}
});

cljs.core$macros.assert.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
if(cljs.core.truth_(cljs.core._STAR_assert_STAR_)){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-not","cljs.core$macros/when-not",-764302244,null)),(function (){var x__21289__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null)),(function (){var x__21289__auto__ = [cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,x))].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
} else {
return null;
}
});

cljs.core$macros.assert.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,message){
if(cljs.core.truth_(cljs.core._STAR_assert_STAR_)){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-not","cljs.core$macros/when-not",-764302244,null)),(function (){var x__21289__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null)),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"Assert failed: "),(function (){var x__21289__auto__ = message;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,"\n"),(function (){var x__21289__auto__ = cljs.core.pr_str.call(null,x);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
} else {
return null;
}
});

cljs.core$macros.assert.cljs$lang$maxFixedArity = 4;


cljs.core$macros.assert.cljs$lang$macro = true;
/**
 * List comprehension. Takes a vector of one or more
 * binding-form/collection-expr pairs, each followed by zero or more
 * modifiers, and yields a lazy sequence of evaluations of expr.
 * Collections are iterated in a nested fashion, rightmost fastest,
 * and nested coll-exprs can refer to bindings created in prior
 * binding-forms.  Supported modifiers are: :let [binding-form expr ...],
 * :while test, :when test.
 * 
 *   (take 100 (for [x (range 100000000) y (range 1000000) :while (< y x)]  [x y]))
 */
cljs.core$macros.for$ = (function cljs$core$macros$for(_AMPERSAND_form,_AMPERSAND_env,seq_exprs,body_expr){
if(cljs.core.vector_QMARK_.call(null,seq_exprs)){
} else {
throw cljs.core.ex_info.call(null,"for requires a vector for its binding",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,seq_exprs))){
} else {
throw cljs.core.ex_info.call(null,"for requires an even number of forms in binding vector",cljs.core.PersistentArrayMap.EMPTY);
}


var to_groups = (function (seq_exprs__$1){
return cljs.core.reduce.call(null,(function (groups,p__40109){
var vec__40110 = p__40109;
var k = cljs.core.nth.call(null,vec__40110,(0),null);
var v = cljs.core.nth.call(null,vec__40110,(1),null);
if((k instanceof cljs.core.Keyword)){
return cljs.core.conj.call(null,cljs.core.pop.call(null,groups),cljs.core.conj.call(null,cljs.core.peek.call(null,groups),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null)));
} else {
return cljs.core.conj.call(null,groups,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
}
}),cljs.core.PersistentVector.EMPTY,cljs.core.partition.call(null,(2),seq_exprs__$1));
});
var err = ((function (to_groups){
return (function() { 
var G__40190__delegate = function (msg){
throw cljs.core.ex_info.call(null,cljs.core.apply.call(null,cljs.core.str,msg),cljs.core.PersistentArrayMap.EMPTY);
};
var G__40190 = function (var_args){
var msg = null;
if (arguments.length > 0) {
var G__40191__i = 0, G__40191__a = new Array(arguments.length -  0);
while (G__40191__i < G__40191__a.length) {G__40191__a[G__40191__i] = arguments[G__40191__i + 0]; ++G__40191__i;}
  msg = new cljs.core.IndexedSeq(G__40191__a,0);
} 
return G__40190__delegate.call(this,msg);};
G__40190.cljs$lang$maxFixedArity = 0;
G__40190.cljs$lang$applyTo = (function (arglist__40192){
var msg = cljs.core.seq(arglist__40192);
return G__40190__delegate(msg);
});
G__40190.cljs$core$IFn$_invoke$arity$variadic = G__40190__delegate;
return G__40190;
})()
;})(to_groups))
;
var emit_bind = ((function (to_groups,err){
return (function cljs$core$macros$for_$_emit_bind(p__40113){
var vec__40152 = p__40113;
var seq__40153 = cljs.core.seq.call(null,vec__40152);
var first__40154 = cljs.core.first.call(null,seq__40153);
var seq__40153__$1 = cljs.core.next.call(null,seq__40153);
var vec__40155 = first__40154;
var seq__40156 = cljs.core.seq.call(null,vec__40155);
var first__40157 = cljs.core.first.call(null,seq__40156);
var seq__40156__$1 = cljs.core.next.call(null,seq__40156);
var bind = first__40157;
var first__40157__$1 = cljs.core.first.call(null,seq__40156__$1);
var seq__40156__$2 = cljs.core.next.call(null,seq__40156__$1);
var expr = first__40157__$1;
var mod_pairs = seq__40156__$2;
var vec__40158 = seq__40153__$1;
var vec__40161 = cljs.core.nth.call(null,vec__40158,(0),null);
var _ = cljs.core.nth.call(null,vec__40161,(0),null);
var next_expr = cljs.core.nth.call(null,vec__40161,(1),null);
var next_groups = vec__40158;
var giter = cljs.core.gensym.call(null,"iter__");
var gxs = cljs.core.gensym.call(null,"s__");
var do_mod = ((function (giter,gxs,vec__40152,seq__40153,first__40154,seq__40153__$1,vec__40155,seq__40156,first__40157,seq__40156__$1,bind,first__40157__$1,seq__40156__$2,expr,mod_pairs,vec__40158,vec__40161,_,next_expr,next_groups,to_groups,err){
return (function cljs$core$macros$for_$_emit_bind_$_do_mod(p__40164){
var vec__40171 = p__40164;
var seq__40172 = cljs.core.seq.call(null,vec__40171);
var first__40173 = cljs.core.first.call(null,seq__40172);
var seq__40172__$1 = cljs.core.next.call(null,seq__40172);
var vec__40174 = first__40173;
var k = cljs.core.nth.call(null,vec__40174,(0),null);
var v = cljs.core.nth.call(null,vec__40174,(1),null);
var pair = vec__40174;
var etc = seq__40172__$1;
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"let","let",-1282412701))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__21289__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs$core$macros$for_$_emit_bind_$_do_mod.call(null,etc);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
} else {
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"while","while",963117786))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),(function (){var x__21289__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs$core$macros$for_$_emit_bind_$_do_mod.call(null,etc);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
} else {
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"when","when",-576417306))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__21289__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs$core$macros$for_$_emit_bind_$_do_mod.call(null,etc);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","rest","cljs.core/rest",-285075455,null)),(function (){var x__21289__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
} else {
if((k instanceof cljs.core.Keyword)){
return err.call(null,"Invalid 'for' keyword ",k);
} else {
if(next_groups){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__21289__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"iterys__30729__auto__","iterys__30729__auto__",1635239100,null)),(function (){var x__21289__auto__ = cljs$core$macros$for_$_emit_bind.call(null,next_groups);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"fs__30730__auto__","fs__30730__auto__",-25494865,null)),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"iterys__30729__auto__","iterys__30729__auto__",1635239100,null)),(function (){var x__21289__auto__ = next_expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"fs__30730__auto__","fs__30730__auto__",-25494865,null)),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","concat","cljs.core/concat",-1133584918,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"fs__30730__auto__","fs__30730__auto__",-25494865,null)),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__21289__auto__ = giter;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","rest","cljs.core/rest",-285075455,null)),(function (){var x__21289__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","rest","cljs.core/rest",-285075455,null)),(function (){var x__21289__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","cons","cljs.core/cons",96507417,null)),(function (){var x__21289__auto__ = body_expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__21289__auto__ = giter;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","rest","cljs.core/rest",-285075455,null)),(function (){var x__21289__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));

}
}
}
}
}
});})(giter,gxs,vec__40152,seq__40153,first__40154,seq__40153__$1,vec__40155,seq__40156,first__40157,seq__40156__$1,bind,first__40157__$1,seq__40156__$2,expr,mod_pairs,vec__40158,vec__40161,_,next_expr,next_groups,to_groups,err))
;
if(next_groups){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__21289__auto__ = giter;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__21289__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","lazy-seq","cljs.core$macros/lazy-seq",806482650,null)),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__21289__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__21289__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-first","cljs.core$macros/when-first",-840670160,null)),(function (){var x__21289__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__21289__auto__ = bind;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = do_mod.call(null,mod_pairs);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
} else {
var gi = cljs.core.gensym.call(null,"i__");
var gb = cljs.core.gensym.call(null,"b__");
var do_cmod = ((function (gi,gb,giter,gxs,do_mod,vec__40152,seq__40153,first__40154,seq__40153__$1,vec__40155,seq__40156,first__40157,seq__40156__$1,bind,first__40157__$1,seq__40156__$2,expr,mod_pairs,vec__40158,vec__40161,_,next_expr,next_groups,to_groups,err){
return (function cljs$core$macros$for_$_emit_bind_$_do_cmod(p__40177){
var vec__40184 = p__40177;
var seq__40185 = cljs.core.seq.call(null,vec__40184);
var first__40186 = cljs.core.first.call(null,seq__40185);
var seq__40185__$1 = cljs.core.next.call(null,seq__40185);
var vec__40187 = first__40186;
var k = cljs.core.nth.call(null,vec__40187,(0),null);
var v = cljs.core.nth.call(null,vec__40187,(1),null);
var pair = vec__40187;
var etc = seq__40185__$1;
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"let","let",-1282412701))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__21289__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs$core$macros$for_$_emit_bind_$_do_cmod.call(null,etc);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
} else {
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"while","while",963117786))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),(function (){var x__21289__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs$core$macros$for_$_emit_bind_$_do_cmod.call(null,etc);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
} else {
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"when","when",-576417306))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__21289__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs$core$macros$for_$_emit_bind_$_do_cmod.call(null,etc);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unchecked-inc","cljs.core$macros/unchecked-inc",-1615365330,null)),(function (){var x__21289__auto__ = gi;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
} else {
if((k instanceof cljs.core.Keyword)){
return err.call(null,"Invalid 'for' keyword ",k);
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-append","cljs.core/chunk-append",-243671470,null)),(function (){var x__21289__auto__ = gb;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = body_expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unchecked-inc","cljs.core$macros/unchecked-inc",-1615365330,null)),(function (){var x__21289__auto__ = gi;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));

}
}
}
}
});})(gi,gb,giter,gxs,do_mod,vec__40152,seq__40153,first__40154,seq__40153__$1,vec__40155,seq__40156,first__40157,seq__40156__$1,bind,first__40157__$1,seq__40156__$2,expr,mod_pairs,vec__40158,vec__40161,_,next_expr,next_groups,to_groups,err))
;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__21289__auto__ = giter;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__21289__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","lazy-seq","cljs.core$macros/lazy-seq",806482650,null)),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__21289__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__21289__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-let","cljs.core$macros/when-let",-2004472648,null)),(function (){var x__21289__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__21289__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__21289__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunked-seq?","cljs.core/chunked-seq?",-712922369,null)),(function (){var x__21289__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__21289__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__30731__auto__","c__30731__auto__",-234655127,null)),(function (){var x__21289__auto__ = cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-first","cljs.core/chunk-first",-1157877305,null)),(function (){var x__21289__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})()))),cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"file","file",-1269645878)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"/Users/mathieubollore/code/call-of-cthulhu/resources/public/js/out/cljs/core.cljc"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",212345235)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2314),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",2078222095)),cljs.core._conj.call(null,cljs.core.List.EMPTY,52),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",1837326455)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2314),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",1425389514)),cljs.core._conj.call(null,cljs.core.List.EMPTY,82),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"tag","tag",-1290361223)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not-native","cljs.core/not-native",-1716909265,null)))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"size__30732__auto__","size__30732__auto__",-1284820264,null)),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__30731__auto__","c__30731__auto__",-234655127,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = gb;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-buffer","cljs.core/chunk-buffer",14093626,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"size__30732__auto__","size__30732__auto__",-1284820264,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","coercive-boolean","cljs.core$macros/coercive-boolean",-450758280,null)),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__21289__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__21289__auto__ = gi;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__21289__auto__ = gi;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"size__30732__auto__","size__30732__auto__",-1284820264,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__21289__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__21289__auto__ = bind;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-nth","cljs.core/-nth",504234802,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__30731__auto__","c__30731__auto__",-234655127,null)),(function (){var x__21289__auto__ = gi;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = do_cmod.call(null,mod_pairs);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-cons","cljs.core/chunk-cons",-250075688,null)),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk","cljs.core/chunk",847936424,null)),(function (){var x__21289__auto__ = gb;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__21289__auto__ = giter;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-rest","cljs.core/chunk-rest",-398161143,null)),(function (){var x__21289__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-cons","cljs.core/chunk-cons",-250075688,null)),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk","cljs.core/chunk",847936424,null)),(function (){var x__21289__auto__ = gb;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__21289__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__21289__auto__ = bind;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null)),(function (){var x__21289__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = do_mod.call(null,mod_pairs);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
}
});})(to_groups,err))
;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__21289__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"iter__30733__auto__","iter__30733__auto__",1542029899,null)),(function (){var x__21289__auto__ = emit_bind.call(null,to_groups.call(null,seq_exprs));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"iter__30733__auto__","iter__30733__auto__",1542029899,null)),(function (){var x__21289__auto__ = cljs.core.second.call(null,seq_exprs);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
});

cljs.core$macros.for$.cljs$lang$macro = true;
/**
 * Repeatedly executes body (presumably for side-effects) with
 *   bindings and filtering as provided by "for".  Does not retain
 *   the head of the sequence. Returns nil.
 */
cljs.core$macros.doseq = (function cljs$core$macros$doseq(var_args){
var args__21537__auto__ = [];
var len__21530__auto___40198 = arguments.length;
var i__21531__auto___40199 = (0);
while(true){
if((i__21531__auto___40199 < len__21530__auto___40198)){
args__21537__auto__.push((arguments[i__21531__auto___40199]));

var G__40200 = (i__21531__auto___40199 + (1));
i__21531__auto___40199 = G__40200;
continue;
} else {
}
break;
}

var argseq__21538__auto__ = ((((3) < args__21537__auto__.length))?(new cljs.core.IndexedSeq(args__21537__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.doseq.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__21538__auto__);
});

cljs.core$macros.doseq.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,seq_exprs,body){
if(cljs.core.vector_QMARK_.call(null,seq_exprs)){
} else {
throw cljs.core.ex_info.call(null,"doseq requires a vector for its binding",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,seq_exprs))){
} else {
throw cljs.core.ex_info.call(null,"doseq requires an even number of forms in binding vector",cljs.core.PersistentArrayMap.EMPTY);
}


var err = (function() { 
var G__40201__delegate = function (msg){
throw cljs.core.ex_info.call(null,cljs.core.apply.call(null,cljs.core.str,msg),cljs.core.PersistentArrayMap.EMPTY);
};
var G__40201 = function (var_args){
var msg = null;
if (arguments.length > 0) {
var G__40202__i = 0, G__40202__a = new Array(arguments.length -  0);
while (G__40202__i < G__40202__a.length) {G__40202__a[G__40202__i] = arguments[G__40202__i + 0]; ++G__40202__i;}
  msg = new cljs.core.IndexedSeq(G__40202__a,0);
} 
return G__40201__delegate.call(this,msg);};
G__40201.cljs$lang$maxFixedArity = 0;
G__40201.cljs$lang$applyTo = (function (arglist__40203){
var msg = cljs.core.seq(arglist__40203);
return G__40201__delegate(msg);
});
G__40201.cljs$core$IFn$_invoke$arity$variadic = G__40201__delegate;
return G__40201;
})()
;
var step = ((function (err){
return (function cljs$core$macros$step(recform,exprs){
if(cljs.core.not.call(null,exprs)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),body)))], null);
} else {
var k = cljs.core.first.call(null,exprs);
var v = cljs.core.second.call(null,exprs);
var seqsym = cljs.core.gensym.call(null,"seq__");
var recform__$1 = (((k instanceof cljs.core.Keyword))?recform:cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","next","cljs.core/next",-1291438473,null)),(function (){var x__21289__auto__ = seqsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0))))));
var steppair = cljs$core$macros$step.call(null,recform__$1,cljs.core.nnext.call(null,exprs));
var needrec = steppair.call(null,(0));
var subform = steppair.call(null,(1));
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"let","let",-1282412701))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [needrec,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__21289__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = subform;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())))], null);
} else {
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"while","while",963117786))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),(function (){var x__21289__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = subform;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(cljs.core.truth_(needrec)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [recform__$1], null):null))))], null);
} else {
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"when","when",-576417306))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__21289__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__21289__auto__ = subform;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(cljs.core.truth_(needrec)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [recform__$1], null):null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = recform__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())))], null);
} else {
if((k instanceof cljs.core.Keyword)){
return err.call(null,"Invalid 'doseq' keyword",k);
} else {
var chunksym = cljs.core.with_meta.call(null,cljs.core.gensym.call(null,"chunk__"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"not-native","not-native",-236392494,null)], null));
var countsym = cljs.core.gensym.call(null,"count__");
var isym = cljs.core.gensym.call(null,"i__");
var recform_chunk = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__21289__auto__ = seqsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = chunksym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = countsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unchecked-inc","cljs.core$macros/unchecked-inc",-1615365330,null)),(function (){var x__21289__auto__ = isym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
var steppair_chunk = cljs$core$macros$step.call(null,recform_chunk,cljs.core.nnext.call(null,exprs));
var subform_chunk = steppair_chunk.call(null,(1));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__21289__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__21289__auto__ = seqsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__21289__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = chunksym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__21289__auto__ = countsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)),(function (){var x__21289__auto__ = isym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","coercive-boolean","cljs.core$macros/coercive-boolean",-450758280,null)),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__21289__auto__ = isym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = countsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__21289__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__21289__auto__ = k;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-nth","cljs.core/-nth",504234802,null)),(function (){var x__21289__auto__ = chunksym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = isym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = subform_chunk;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(cljs.core.truth_(needrec)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [recform_chunk], null):null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-let","cljs.core$macros/when-let",-2004472648,null)),(function (){var x__21289__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__21289__auto__ = seqsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__21289__auto__ = seqsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunked-seq?","cljs.core/chunked-seq?",-712922369,null)),(function (){var x__21289__auto__ = seqsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__21289__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__40193__auto__","c__40193__auto__",-297912814,null)),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-first","cljs.core/chunk-first",-1157877305,null)),(function (){var x__21289__auto__ = seqsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-rest","cljs.core/chunk-rest",-398161143,null)),(function (){var x__21289__auto__ = seqsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__40193__auto__","c__40193__auto__",-297912814,null)),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__40193__auto__","c__40193__auto__",-297912814,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__21289__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__21289__auto__ = k;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null)),(function (){var x__21289__auto__ = seqsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = subform;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(cljs.core.truth_(needrec)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [recform__$1], null):null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())))], null);

}
}
}
}
}
});})(err))
;
return cljs.core.nth.call(null,step.call(null,null,cljs.core.seq.call(null,seq_exprs)),(1));
});

cljs.core$macros.doseq.cljs$lang$maxFixedArity = (3);

cljs.core$macros.doseq.cljs$lang$applyTo = (function (seq40194){
var G__40195 = cljs.core.first.call(null,seq40194);
var seq40194__$1 = cljs.core.next.call(null,seq40194);
var G__40196 = cljs.core.first.call(null,seq40194__$1);
var seq40194__$2 = cljs.core.next.call(null,seq40194__$1);
var G__40197 = cljs.core.first.call(null,seq40194__$2);
var seq40194__$3 = cljs.core.next.call(null,seq40194__$2);
return cljs.core$macros.doseq.cljs$core$IFn$_invoke$arity$variadic(G__40195,G__40196,G__40197,seq40194__$3);
});


cljs.core$macros.doseq.cljs$lang$macro = true;
cljs.core$macros.array = (function cljs$core$macros$array(var_args){
var args__21537__auto__ = [];
var len__21530__auto___40207 = arguments.length;
var i__21531__auto___40208 = (0);
while(true){
if((i__21531__auto___40208 < len__21530__auto___40207)){
args__21537__auto__.push((arguments[i__21531__auto___40208]));

var G__40209 = (i__21531__auto___40208 + (1));
i__21531__auto___40208 = G__40209;
continue;
} else {
}
break;
}

var argseq__21538__auto__ = ((((2) < args__21537__auto__.length))?(new cljs.core.IndexedSeq(args__21537__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.array.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__21538__auto__);
});

cljs.core$macros.array.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,rest){
var xs_str = cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,",",cljs.core.take.call(null,cljs.core.count.call(null,rest),cljs.core.repeat.call(null,"~{}"))));
return cljs.core.vary_meta.call(null,cljs.core.list_STAR_.call(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),[cljs.core.str("["),cljs.core.str(xs_str),cljs.core.str("]")].join(''),rest),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"array","array",-440182315,null));
});

cljs.core$macros.array.cljs$lang$maxFixedArity = (2);

cljs.core$macros.array.cljs$lang$applyTo = (function (seq40204){
var G__40205 = cljs.core.first.call(null,seq40204);
var seq40204__$1 = cljs.core.next.call(null,seq40204);
var G__40206 = cljs.core.first.call(null,seq40204__$1);
var seq40204__$2 = cljs.core.next.call(null,seq40204__$1);
return cljs.core$macros.array.cljs$core$IFn$_invoke$arity$variadic(G__40205,G__40206,seq40204__$2);
});


cljs.core$macros.array.cljs$lang$macro = true;
cljs.core$macros.make_array = (function cljs$core$macros$make_array(var_args){
var args40213 = [];
var len__21530__auto___40221 = arguments.length;
var i__21531__auto___40222 = (0);
while(true){
if((i__21531__auto___40222 < len__21530__auto___40221)){
args40213.push((arguments[i__21531__auto___40222]));

var G__40223 = (i__21531__auto___40222 + (1));
i__21531__auto___40222 = G__40223;
continue;
} else {
}
break;
}

var G__40220 = args40213.length;
switch (G__40220) {
case 3:
return cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__21549__auto__ = (new cljs.core.IndexedSeq(args40213.slice((4)),(0),null));
return cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__21549__auto__);

}
});

cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,size){
return cljs.core.vary_meta.call(null,((typeof size === 'number')?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),cljs.core.take.call(null,size,cljs.core.repeat.call(null,null))))):cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Array.","js/Array.",1235645307,null)),(function (){var x__21289__auto__ = size;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())))),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"array","array",-440182315,null));
});

cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,type,size){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","make-array","cljs.core/make-array",-1802166799,null)),(function (){var x__21289__auto__ = size;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
});

cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,type,size,more_sizes){
return cljs.core.vary_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__21289__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"dims__40210__auto__","dims__40210__auto__",1326813533,null)),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","list","cljs.core$macros/list",-1408486806,null)),more_sizes)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"dimarray__40211__auto__","dimarray__40211__auto__",1111813935,null)),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","make-array","cljs.core/make-array",-1802166799,null)),(function (){var x__21289__auto__ = size;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","dotimes","cljs.core$macros/dotimes",-1407597661,null)),(function (){var x__21289__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"i__40212__auto__","i__40212__auto__",1107860087,null)),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"dimarray__40211__auto__","dimarray__40211__auto__",1111813935,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aset","cljs.core$macros/aset",-693176374,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"dimarray__40211__auto__","dimarray__40211__auto__",1111813935,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"i__40212__auto__","i__40212__auto__",1107860087,null)),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","make-array","cljs.core/make-array",-1802166799,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"dims__40210__auto__","dims__40210__auto__",1326813533,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"dimarray__40211__auto__","dimarray__40211__auto__",1111813935,null))))),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"array","array",-440182315,null));
});

cljs.core$macros.make_array.cljs$lang$applyTo = (function (seq40214){
var G__40215 = cljs.core.first.call(null,seq40214);
var seq40214__$1 = cljs.core.next.call(null,seq40214);
var G__40216 = cljs.core.first.call(null,seq40214__$1);
var seq40214__$2 = cljs.core.next.call(null,seq40214__$1);
var G__40217 = cljs.core.first.call(null,seq40214__$2);
var seq40214__$3 = cljs.core.next.call(null,seq40214__$2);
var G__40218 = cljs.core.first.call(null,seq40214__$3);
var seq40214__$4 = cljs.core.next.call(null,seq40214__$3);
return cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$variadic(G__40215,G__40216,G__40217,G__40218,seq40214__$4);
});

cljs.core$macros.make_array.cljs$lang$maxFixedArity = (4);


cljs.core$macros.make_array.cljs$lang$macro = true;
cljs.core$macros.list = (function cljs$core$macros$list(var_args){
var args40226 = [];
var len__21530__auto___40233 = arguments.length;
var i__21531__auto___40234 = (0);
while(true){
if((i__21531__auto___40234 < len__21530__auto___40233)){
args40226.push((arguments[i__21531__auto___40234]));

var G__40235 = (i__21531__auto___40234 + (1));
i__21531__auto___40234 = G__40235;
continue;
} else {
}
break;
}

var G__40232 = args40226.length;
switch (G__40232) {
case 2:
return cljs.core$macros.list.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__21549__auto__ = (new cljs.core.IndexedSeq(args40226.slice((3)),(0),null));
return cljs.core$macros.list.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__21549__auto__);

}
});

cljs.core$macros.list.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.list(new cljs.core.Symbol(null,".-EMPTY",".-EMPTY",-471586691,null),new cljs.core.Symbol("cljs.core","List","cljs.core/List",1708954352,null));
});

cljs.core$macros.list.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,xs){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"constant","constant",-379609303),new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.analyze.call(null,_AMPERSAND_env,x)))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-conj","cljs.core/-conj",2040622670,null)),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","list","cljs.core$macros/list",-1408486806,null)),xs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__21289__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__40225__auto__","x__40225__auto__",2137610584,null)),(function (){var x__21289__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-conj","cljs.core/-conj",2040622670,null)),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","list","cljs.core$macros/list",-1408486806,null)),xs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__40225__auto__","x__40225__auto__",2137610584,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
}
});

cljs.core$macros.list.cljs$lang$applyTo = (function (seq40227){
var G__40228 = cljs.core.first.call(null,seq40227);
var seq40227__$1 = cljs.core.next.call(null,seq40227);
var G__40229 = cljs.core.first.call(null,seq40227__$1);
var seq40227__$2 = cljs.core.next.call(null,seq40227__$1);
var G__40230 = cljs.core.first.call(null,seq40227__$2);
var seq40227__$3 = cljs.core.next.call(null,seq40227__$2);
return cljs.core$macros.list.cljs$core$IFn$_invoke$arity$variadic(G__40228,G__40229,G__40230,seq40227__$3);
});

cljs.core$macros.list.cljs$lang$maxFixedArity = (3);


cljs.core$macros.list.cljs$lang$macro = true;
cljs.core$macros.vector = (function cljs$core$macros$vector(var_args){
var args40237 = [];
var len__21530__auto___40243 = arguments.length;
var i__21531__auto___40244 = (0);
while(true){
if((i__21531__auto___40244 < len__21530__auto___40243)){
args40237.push((arguments[i__21531__auto___40244]));

var G__40245 = (i__21531__auto___40244 + (1));
i__21531__auto___40244 = G__40245;
continue;
} else {
}
break;
}

var G__40242 = args40237.length;
switch (G__40242) {
case 2:
return cljs.core$macros.vector.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__21549__auto__ = (new cljs.core.IndexedSeq(args40237.slice((2)),(0),null));
return cljs.core$macros.vector.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__21549__auto__);

}
});

cljs.core$macros.vector.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.list(new cljs.core.Symbol(null,".-EMPTY",".-EMPTY",-471586691,null),new cljs.core.Symbol("cljs.core","PersistentVector","cljs.core/PersistentVector",-1211028272,null));
});

cljs.core$macros.vector.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
var cnt = cljs.core.count.call(null,xs);
if((cnt < (32))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentVector.","cljs.core/PersistentVector.",-1074647876,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__21289__auto__ = cnt;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(5)),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-EMPTY-NODE",".-EMPTY-NODE",-1333332641,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentVector","cljs.core/PersistentVector",-1211028272,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),xs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
} else {
return cljs.core.vary_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".fromArray",".fromArray",1053499311,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentVector","cljs.core/PersistentVector",-1211028272,null)),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),xs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true)))),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core","PersistentVector","cljs.core/PersistentVector",-1211028272,null));
}
});

cljs.core$macros.vector.cljs$lang$applyTo = (function (seq40238){
var G__40239 = cljs.core.first.call(null,seq40238);
var seq40238__$1 = cljs.core.next.call(null,seq40238);
var G__40240 = cljs.core.first.call(null,seq40238__$1);
var seq40238__$2 = cljs.core.next.call(null,seq40238__$1);
return cljs.core$macros.vector.cljs$core$IFn$_invoke$arity$variadic(G__40239,G__40240,seq40238__$2);
});

cljs.core$macros.vector.cljs$lang$maxFixedArity = (2);


cljs.core$macros.vector.cljs$lang$macro = true;
cljs.core$macros.array_map = (function cljs$core$macros$array_map(var_args){
var args40249 = [];
var len__21530__auto___40255 = arguments.length;
var i__21531__auto___40256 = (0);
while(true){
if((i__21531__auto___40256 < len__21530__auto___40255)){
args40249.push((arguments[i__21531__auto___40256]));

var G__40257 = (i__21531__auto___40256 + (1));
i__21531__auto___40256 = G__40257;
continue;
} else {
}
break;
}

var G__40254 = args40249.length;
switch (G__40254) {
case 2:
return cljs.core$macros.array_map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__21549__auto__ = (new cljs.core.IndexedSeq(args40249.slice((2)),(0),null));
return cljs.core$macros.array_map.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__21549__auto__);

}
});

cljs.core$macros.array_map.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.list(new cljs.core.Symbol(null,".-EMPTY",".-EMPTY",-471586691,null),new cljs.core.Symbol("cljs.core","PersistentArrayMap","cljs.core/PersistentArrayMap",1025194468,null));
});

cljs.core$macros.array_map.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,kvs){
var keys = cljs.core.map.call(null,cljs.core.first,cljs.core.partition.call(null,(2),kvs));
if((cljs.core.every_QMARK_.call(null,((function (keys){
return (function (p1__40247_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__40247_SHARP_),new cljs.core.Keyword(null,"constant","constant",-379609303));
});})(keys))
,cljs.core.map.call(null,((function (keys){
return (function (p1__40248_SHARP_){
return cljs.analyzer.analyze.call(null,_AMPERSAND_env,p1__40248_SHARP_);
});})(keys))
,keys))) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,keys)),cljs.core.count.call(null,keys)))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentArrayMap.","cljs.core/PersistentArrayMap.",-471979341,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__21289__auto__ = (cljs.core.count.call(null,kvs) / (2));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),kvs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".fromArray",".fromArray",1053499311,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentArrayMap","cljs.core/PersistentArrayMap",1025194468,null)),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),kvs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true),cljs.core._conj.call(null,cljs.core.List.EMPTY,false))));
}
});

cljs.core$macros.array_map.cljs$lang$applyTo = (function (seq40250){
var G__40251 = cljs.core.first.call(null,seq40250);
var seq40250__$1 = cljs.core.next.call(null,seq40250);
var G__40252 = cljs.core.first.call(null,seq40250__$1);
var seq40250__$2 = cljs.core.next.call(null,seq40250__$1);
return cljs.core$macros.array_map.cljs$core$IFn$_invoke$arity$variadic(G__40251,G__40252,seq40250__$2);
});

cljs.core$macros.array_map.cljs$lang$maxFixedArity = (2);


cljs.core$macros.array_map.cljs$lang$macro = true;
cljs.core$macros.hash_map = (function cljs$core$macros$hash_map(var_args){
var args40259 = [];
var len__21530__auto___40265 = arguments.length;
var i__21531__auto___40266 = (0);
while(true){
if((i__21531__auto___40266 < len__21530__auto___40265)){
args40259.push((arguments[i__21531__auto___40266]));

var G__40267 = (i__21531__auto___40266 + (1));
i__21531__auto___40266 = G__40267;
continue;
} else {
}
break;
}

var G__40264 = args40259.length;
switch (G__40264) {
case 2:
return cljs.core$macros.hash_map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__21549__auto__ = (new cljs.core.IndexedSeq(args40259.slice((2)),(0),null));
return cljs.core$macros.hash_map.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__21549__auto__);

}
});

cljs.core$macros.hash_map.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-EMPTY",".-EMPTY",-471586691,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentHashMap","cljs.core/PersistentHashMap",-454120575,null)))));
});

cljs.core$macros.hash_map.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,kvs){
var pairs = cljs.core.partition.call(null,(2),kvs);
var ks = cljs.core.map.call(null,cljs.core.first,pairs);
var vs = cljs.core.map.call(null,cljs.core.second,pairs);
return cljs.core.vary_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".fromArrays",".fromArrays",1110244209,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentHashMap","cljs.core/PersistentHashMap",-454120575,null)),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),ks)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),vs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})()))),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core","PersistentHashMap","cljs.core/PersistentHashMap",-454120575,null));
});

cljs.core$macros.hash_map.cljs$lang$applyTo = (function (seq40260){
var G__40261 = cljs.core.first.call(null,seq40260);
var seq40260__$1 = cljs.core.next.call(null,seq40260);
var G__40262 = cljs.core.first.call(null,seq40260__$1);
var seq40260__$2 = cljs.core.next.call(null,seq40260__$1);
return cljs.core$macros.hash_map.cljs$core$IFn$_invoke$arity$variadic(G__40261,G__40262,seq40260__$2);
});

cljs.core$macros.hash_map.cljs$lang$maxFixedArity = (2);


cljs.core$macros.hash_map.cljs$lang$macro = true;
cljs.core$macros.hash_set = (function cljs$core$macros$hash_set(var_args){
var args40271 = [];
var len__21530__auto___40277 = arguments.length;
var i__21531__auto___40278 = (0);
while(true){
if((i__21531__auto___40278 < len__21530__auto___40277)){
args40271.push((arguments[i__21531__auto___40278]));

var G__40279 = (i__21531__auto___40278 + (1));
i__21531__auto___40278 = G__40279;
continue;
} else {
}
break;
}

var G__40276 = args40271.length;
switch (G__40276) {
case 2:
return cljs.core$macros.hash_set.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__21549__auto__ = (new cljs.core.IndexedSeq(args40271.slice((2)),(0),null));
return cljs.core$macros.hash_set.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__21549__auto__);

}
});

cljs.core$macros.hash_set.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-EMPTY",".-EMPTY",-471586691,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentHashSet","cljs.core/PersistentHashSet",-967232330,null)))));
});

cljs.core$macros.hash_set.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
if(((cljs.core.count.call(null,xs) <= (8))) && (cljs.core.every_QMARK_.call(null,(function (p1__40269_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__40269_SHARP_),new cljs.core.Keyword(null,"constant","constant",-379609303));
}),cljs.core.map.call(null,(function (p1__40270_SHARP_){
return cljs.analyzer.analyze.call(null,_AMPERSAND_env,p1__40270_SHARP_);
}),xs))) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,xs)),cljs.core.count.call(null,xs)))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentHashSet.","cljs.core/PersistentHashSet.",300313251,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentArrayMap.","cljs.core/PersistentArrayMap.",-471979341,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__21289__auto__ = cljs.core.count.call(null,xs);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),cljs.core.interleave.call(null,xs,cljs.core.repeat.call(null,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
} else {
return cljs.core.vary_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".fromArray",".fromArray",1053499311,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentHashSet","cljs.core/PersistentHashSet",-967232330,null)),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),xs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true)))),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core","PersistentHashSet","cljs.core/PersistentHashSet",-967232330,null));
}
});

cljs.core$macros.hash_set.cljs$lang$applyTo = (function (seq40272){
var G__40273 = cljs.core.first.call(null,seq40272);
var seq40272__$1 = cljs.core.next.call(null,seq40272);
var G__40274 = cljs.core.first.call(null,seq40272__$1);
var seq40272__$2 = cljs.core.next.call(null,seq40272__$1);
return cljs.core$macros.hash_set.cljs$core$IFn$_invoke$arity$variadic(G__40273,G__40274,seq40272__$2);
});

cljs.core$macros.hash_set.cljs$lang$maxFixedArity = (2);


cljs.core$macros.hash_set.cljs$lang$macro = true;
cljs.core$macros.js_obj_STAR_ = (function cljs$core$macros$js_obj_STAR_(kvs){
var kvs_str = cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,",",cljs.core.take.call(null,cljs.core.count.call(null,kvs),cljs.core.repeat.call(null,"~{}:~{}"))));
return cljs.core.vary_meta.call(null,cljs.core.list_STAR_.call(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),[cljs.core.str("{"),cljs.core.str(kvs_str),cljs.core.str("}")].join(''),cljs.core.apply.call(null,cljs.core.concat,kvs)),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"object","object",-1179821820,null));
});
cljs.core$macros.js_obj = (function cljs$core$macros$js_obj(var_args){
var args__21537__auto__ = [];
var len__21530__auto___40296 = arguments.length;
var i__21531__auto___40297 = (0);
while(true){
if((i__21531__auto___40297 < len__21530__auto___40296)){
args__21537__auto__.push((arguments[i__21531__auto___40297]));

var G__40298 = (i__21531__auto___40297 + (1));
i__21531__auto___40297 = G__40298;
continue;
} else {
}
break;
}

var argseq__21538__auto__ = ((((2) < args__21537__auto__.length))?(new cljs.core.IndexedSeq(args__21537__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.js_obj.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__21538__auto__);
});

cljs.core$macros.js_obj.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,rest){
var sym_or_str_QMARK_ = (function (x){
return ((x instanceof cljs.core.Symbol)) || (typeof x === 'string');
});
var filter_on_keys = ((function (sym_or_str_QMARK_){
return (function (f,coll){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,((function (sym_or_str_QMARK_){
return (function (p__40284){
var vec__40285 = p__40284;
var k = cljs.core.nth.call(null,vec__40285,(0),null);
var _ = cljs.core.nth.call(null,vec__40285,(1),null);
return f.call(null,k);
});})(sym_or_str_QMARK_))
,coll));
});})(sym_or_str_QMARK_))
;
var kvs = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,(2),rest)));
var sym_pairs = filter_on_keys.call(null,cljs.core.symbol_QMARK_,kvs);
var expr__GT_local = cljs.core.zipmap.call(null,cljs.core.filter.call(null,cljs.core.complement.call(null,sym_or_str_QMARK_),cljs.core.keys.call(null,kvs)),cljs.core.repeatedly.call(null,cljs.core.gensym));
var obj = cljs.core.gensym.call(null,"obj");
if(cljs.core.empty_QMARK_.call(null,rest)){
return cljs.core$macros.js_obj_STAR_.call(null,cljs.core.List.EMPTY);
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__21289__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.apply.call(null,cljs.core.concat,clojure.set.map_invert.call(null,expr__GT_local)),(function (){var x__21289__auto__ = obj;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core$macros.js_obj_STAR_.call(null,filter_on_keys.call(null,cljs.core.string_QMARK_,kvs));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),cljs.core.map.call(null,((function (sym_or_str_QMARK_,filter_on_keys,kvs,sym_pairs,expr__GT_local,obj){
return (function (p__40288){
var vec__40289 = p__40288;
var k = cljs.core.nth.call(null,vec__40289,(0),null);
var v = cljs.core.nth.call(null,vec__40289,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aset","cljs.core$macros/aset",-693176374,null)),(function (){var x__21289__auto__ = obj;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = k;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
});})(sym_or_str_QMARK_,filter_on_keys,kvs,sym_pairs,expr__GT_local,obj))
,sym_pairs),cljs.core.map.call(null,((function (sym_or_str_QMARK_,filter_on_keys,kvs,sym_pairs,expr__GT_local,obj){
return (function (p__40292){
var vec__40293 = p__40292;
var k = cljs.core.nth.call(null,vec__40293,(0),null);
var v = cljs.core.nth.call(null,vec__40293,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aset","cljs.core$macros/aset",-693176374,null)),(function (){var x__21289__auto__ = obj;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.get.call(null,kvs,k);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
});})(sym_or_str_QMARK_,filter_on_keys,kvs,sym_pairs,expr__GT_local,obj))
,expr__GT_local),(function (){var x__21289__auto__ = obj;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
}
});

cljs.core$macros.js_obj.cljs$lang$maxFixedArity = (2);

cljs.core$macros.js_obj.cljs$lang$applyTo = (function (seq40281){
var G__40282 = cljs.core.first.call(null,seq40281);
var seq40281__$1 = cljs.core.next.call(null,seq40281);
var G__40283 = cljs.core.first.call(null,seq40281__$1);
var seq40281__$2 = cljs.core.next.call(null,seq40281__$1);
return cljs.core$macros.js_obj.cljs$core$IFn$_invoke$arity$variadic(G__40282,G__40283,seq40281__$2);
});


cljs.core$macros.js_obj.cljs$lang$macro = true;
cljs.core$macros.alength = (function cljs$core$macros$alength(_AMPERSAND_form,_AMPERSAND_env,a){
return cljs.core.vary_meta.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__21289__auto__ = a;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),"~{}.length"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"number","number",-1084057331,null));
});

cljs.core$macros.alength.cljs$lang$macro = true;
/**
 * Maps an expression across an array a, using an index named idx, and
 *   return value named ret, initialized to a clone of a, then setting
 *   each element of ret to the evaluation of expr, returning the new
 *   array ret.
 */
cljs.core$macros.amap = (function cljs$core$macros$amap(_AMPERSAND_form,_AMPERSAND_env,a,idx,ret,expr){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__21289__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"a__40299__auto__","a__40299__auto__",-1415928313,null)),(function (){var x__21289__auto__ = a;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = ret;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","aclone","cljs.core/aclone",-758078968,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"a__40299__auto__","a__40299__auto__",-1415928313,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__21289__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__21289__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__21289__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"a__40299__auto__","a__40299__auto__",-1415928313,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aset","cljs.core$macros/aset",-693176374,null)),(function (){var x__21289__auto__ = ret;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","inc","cljs.core$macros/inc",876629257,null)),(function (){var x__21289__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = ret;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
});

cljs.core$macros.amap.cljs$lang$macro = true;
/**
 * Reduces an expression across an array a, using an index named idx,
 *   and return value named ret, initialized to init, setting ret to the
 *   evaluation of expr at each step, returning ret.
 */
cljs.core$macros.areduce = (function cljs$core$macros$areduce(_AMPERSAND_form,_AMPERSAND_env,a,idx,ret,init,expr){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__21289__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"a__40300__auto__","a__40300__auto__",32823884,null)),(function (){var x__21289__auto__ = a;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__21289__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__21289__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)),(function (){var x__21289__auto__ = ret;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = init;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__21289__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"a__40300__auto__","a__40300__auto__",32823884,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","inc","cljs.core$macros/inc",876629257,null)),(function (){var x__21289__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = ret;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
});

cljs.core$macros.areduce.cljs$lang$macro = true;
/**
 * bindings => name n
 * 
 *   Repeatedly executes body (presumably for side-effects) with name
 *   bound to integers from 0 through n-1.
 */
cljs.core$macros.dotimes = (function cljs$core$macros$dotimes(var_args){
var args__21537__auto__ = [];
var len__21530__auto___40306 = arguments.length;
var i__21531__auto___40307 = (0);
while(true){
if((i__21531__auto___40307 < len__21530__auto___40306)){
args__21537__auto__.push((arguments[i__21531__auto___40307]));

var G__40308 = (i__21531__auto___40307 + (1));
i__21531__auto___40307 = G__40308;
continue;
} else {
}
break;
}

var argseq__21538__auto__ = ((((3) < args__21537__auto__.length))?(new cljs.core.IndexedSeq(args__21537__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.dotimes.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__21538__auto__);
});

cljs.core$macros.dotimes.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
var i = cljs.core.first.call(null,bindings);
var n = cljs.core.second.call(null,bindings);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__21289__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"n__40301__auto__","n__40301__auto__",-1092913766,null)),(function (){var x__21289__auto__ = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__21289__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__21289__auto__ = i;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__21289__auto__ = i;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"n__40301__auto__","n__40301__auto__",-1092913766,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),body,(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","inc","cljs.core$macros/inc",876629257,null)),(function (){var x__21289__auto__ = i;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
});

cljs.core$macros.dotimes.cljs$lang$maxFixedArity = (3);

cljs.core$macros.dotimes.cljs$lang$applyTo = (function (seq40302){
var G__40303 = cljs.core.first.call(null,seq40302);
var seq40302__$1 = cljs.core.next.call(null,seq40302);
var G__40304 = cljs.core.first.call(null,seq40302__$1);
var seq40302__$2 = cljs.core.next.call(null,seq40302__$1);
var G__40305 = cljs.core.first.call(null,seq40302__$2);
var seq40302__$3 = cljs.core.next.call(null,seq40302__$2);
return cljs.core$macros.dotimes.cljs$core$IFn$_invoke$arity$variadic(G__40303,G__40304,G__40305,seq40302__$3);
});


cljs.core$macros.dotimes.cljs$lang$macro = true;
/**
 * Throws an exception if the given option map contains keys not listed
 *   as valid, else returns nil.
 */
cljs.core$macros.check_valid_options = (function cljs$core$macros$check_valid_options(var_args){
var args__21537__auto__ = [];
var len__21530__auto___40312 = arguments.length;
var i__21531__auto___40313 = (0);
while(true){
if((i__21531__auto___40313 < len__21530__auto___40312)){
args__21537__auto__.push((arguments[i__21531__auto___40313]));

var G__40314 = (i__21531__auto___40313 + (1));
i__21531__auto___40313 = G__40314;
continue;
} else {
}
break;
}

var argseq__21538__auto__ = ((((1) < args__21537__auto__.length))?(new cljs.core.IndexedSeq(args__21537__auto__.slice((1)),(0),null)):null);
return cljs.core$macros.check_valid_options.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21538__auto__);
});

cljs.core$macros.check_valid_options.cljs$core$IFn$_invoke$arity$variadic = (function (options,valid_keys){
if(cljs.core.seq.call(null,cljs.core.apply.call(null,cljs.core.disj,cljs.core.apply.call(null,cljs.core.hash_set,cljs.core.keys.call(null,options)),valid_keys))){
throw cljs.core.apply.call(null,cljs.core.str,"Only these options are valid: ",cljs.core.first.call(null,valid_keys),cljs.core.map.call(null,(function (p1__40309_SHARP_){
return [cljs.core.str(", "),cljs.core.str(p1__40309_SHARP_)].join('');
}),cljs.core.rest.call(null,valid_keys)));
} else {
return null;
}
});

cljs.core$macros.check_valid_options.cljs$lang$maxFixedArity = (1);

cljs.core$macros.check_valid_options.cljs$lang$applyTo = (function (seq40310){
var G__40311 = cljs.core.first.call(null,seq40310);
var seq40310__$1 = cljs.core.next.call(null,seq40310);
return cljs.core$macros.check_valid_options.cljs$core$IFn$_invoke$arity$variadic(G__40311,seq40310__$1);
});

/**
 * Creates a new multimethod with the associated dispatch function.
 *   The docstring and attribute-map are optional.
 * 
 *   Options are key-value pairs and may be one of:
 *  :default    the default dispatch value, defaults to :default
 *  :hierarchy  the isa? hierarchy to use for dispatching
 *              defaults to the global hierarchy
 */
cljs.core$macros.defmulti = (function cljs$core$macros$defmulti(var_args){
var args__21537__auto__ = [];
var len__21530__auto___40324 = arguments.length;
var i__21531__auto___40325 = (0);
while(true){
if((i__21531__auto___40325 < len__21530__auto___40324)){
args__21537__auto__.push((arguments[i__21531__auto___40325]));

var G__40326 = (i__21531__auto___40325 + (1));
i__21531__auto___40325 = G__40326;
continue;
} else {
}
break;
}

var argseq__21538__auto__ = ((((3) < args__21537__auto__.length))?(new cljs.core.IndexedSeq(args__21537__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.defmulti.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__21538__auto__);
});

cljs.core$macros.defmulti.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,mm_name,options){
var docstring = ((typeof cljs.core.first.call(null,options) === 'string')?cljs.core.first.call(null,options):null);
var options__$1 = ((typeof cljs.core.first.call(null,options) === 'string')?cljs.core.next.call(null,options):options);
var m = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,options__$1)))?cljs.core.first.call(null,options__$1):cljs.core.PersistentArrayMap.EMPTY);
var options__$2 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,options__$1)))?cljs.core.next.call(null,options__$1):options__$1);
var dispatch_fn = cljs.core.first.call(null,options__$2);
var options__$3 = cljs.core.next.call(null,options__$2);
var m__$1 = (cljs.core.truth_(docstring)?cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"doc","doc",1913296891),docstring):m);
var m__$2 = (cljs.core.truth_(cljs.core.meta.call(null,mm_name))?cljs.core.conj.call(null,cljs.core.meta.call(null,mm_name),m__$1):m__$1);
var mm_ns = [cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env)))].join('');
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,options__$3),(1))){
throw (new Error("The syntax for defmulti has changed. Example: (defmulti name dispatch-fn :default dispatch-value)"));
} else {
}

var options__$4 = cljs.core.apply.call(null,cljs.core.hash_map,options__$3);
var default$ = cljs.core.get.call(null,options__$4,new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"default","default",-1987822328));
cljs.core$macros.check_valid_options.call(null,options__$4,new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341));

return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","defonce","cljs.core$macros/defonce",-1096231613,null)),(function (){var x__21289__auto__ = cljs.core.with_meta.call(null,mm_name,m__$2);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__21289__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"method-table__40315__auto__","method-table__40315__auto__",-844547448,null)),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","atom","cljs.core/atom",1943839529,null)),(function (){var x__21289__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"prefer-table__40316__auto__","prefer-table__40316__auto__",-250584247,null)),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","atom","cljs.core/atom",1943839529,null)),(function (){var x__21289__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"method-cache__40317__auto__","method-cache__40317__auto__",185240688,null)),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","atom","cljs.core/atom",1943839529,null)),(function (){var x__21289__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"cached-hierarchy__40318__auto__","cached-hierarchy__40318__auto__",-974197045,null)),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","atom","cljs.core/atom",1943839529,null)),(function (){var x__21289__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"hierarchy__40319__auto__","hierarchy__40319__auto__",1639636927,null)),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null)),(function (){var x__21289__auto__ = options__$4;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341)),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","get-global-hierarchy","cljs.core/get-global-hierarchy",48052871,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","MultiFn.","cljs.core/MultiFn.",1073941573,null)),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","symbol","cljs.core/symbol",195265748,null)),(function (){var x__21289__auto__ = mm_ns;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.name.call(null,mm_name);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = dispatch_fn;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = default$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"hierarchy__40319__auto__","hierarchy__40319__auto__",1639636927,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"method-table__40315__auto__","method-table__40315__auto__",-844547448,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"prefer-table__40316__auto__","prefer-table__40316__auto__",-250584247,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"method-cache__40317__auto__","method-cache__40317__auto__",185240688,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"cached-hierarchy__40318__auto__","cached-hierarchy__40318__auto__",-974197045,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
});

cljs.core$macros.defmulti.cljs$lang$maxFixedArity = (3);

cljs.core$macros.defmulti.cljs$lang$applyTo = (function (seq40320){
var G__40321 = cljs.core.first.call(null,seq40320);
var seq40320__$1 = cljs.core.next.call(null,seq40320);
var G__40322 = cljs.core.first.call(null,seq40320__$1);
var seq40320__$2 = cljs.core.next.call(null,seq40320__$1);
var G__40323 = cljs.core.first.call(null,seq40320__$2);
var seq40320__$3 = cljs.core.next.call(null,seq40320__$2);
return cljs.core$macros.defmulti.cljs$core$IFn$_invoke$arity$variadic(G__40321,G__40322,G__40323,seq40320__$3);
});


cljs.core$macros.defmulti.cljs$lang$macro = true;
/**
 * Creates and installs a new method of multimethod associated with dispatch-value. 
 */
cljs.core$macros.defmethod = (function cljs$core$macros$defmethod(var_args){
var args__21537__auto__ = [];
var len__21530__auto___40332 = arguments.length;
var i__21531__auto___40333 = (0);
while(true){
if((i__21531__auto___40333 < len__21530__auto___40332)){
args__21537__auto__.push((arguments[i__21531__auto___40333]));

var G__40334 = (i__21531__auto___40333 + (1));
i__21531__auto___40333 = G__40334;
continue;
} else {
}
break;
}

var argseq__21538__auto__ = ((((4) < args__21537__auto__.length))?(new cljs.core.IndexedSeq(args__21537__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.defmethod.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__21538__auto__);
});

cljs.core$macros.defmethod.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,multifn,dispatch_val,fn_tail){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-add-method","cljs.core/-add-method",571092113,null)),(function (){var x__21289__auto__ = cljs.core.with_meta.call(null,multifn,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core","MultiFn","cljs.core/MultiFn",1487419554,null)], null));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = dispatch_val;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),fn_tail)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
});

cljs.core$macros.defmethod.cljs$lang$maxFixedArity = (4);

cljs.core$macros.defmethod.cljs$lang$applyTo = (function (seq40327){
var G__40328 = cljs.core.first.call(null,seq40327);
var seq40327__$1 = cljs.core.next.call(null,seq40327);
var G__40329 = cljs.core.first.call(null,seq40327__$1);
var seq40327__$2 = cljs.core.next.call(null,seq40327__$1);
var G__40330 = cljs.core.first.call(null,seq40327__$2);
var seq40327__$3 = cljs.core.next.call(null,seq40327__$2);
var G__40331 = cljs.core.first.call(null,seq40327__$3);
var seq40327__$4 = cljs.core.next.call(null,seq40327__$3);
return cljs.core$macros.defmethod.cljs$core$IFn$_invoke$arity$variadic(G__40328,G__40329,G__40330,G__40331,seq40327__$4);
});


cljs.core$macros.defmethod.cljs$lang$macro = true;
/**
 * Evaluates expr and prints the time it took. Returns the value of expr.
 */
cljs.core$macros.time = (function cljs$core$macros$time(_AMPERSAND_form,_AMPERSAND_env,expr){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__21289__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"start__40335__auto__","start__40335__auto__",-527825018,null)),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","system-time","cljs.core/system-time",1562011930,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ret__40336__auto__","ret__40336__auto__",-2007190992,null)),(function (){var x__21289__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","prn","cljs.core/prn",1725204552,null)),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"Elapsed time: "),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".toFixed",".toFixed",-895046938,null)),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","system-time","cljs.core/system-time",1562011930,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"start__40335__auto__","start__40335__auto__",-527825018,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(6)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY," msecs"))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ret__40336__auto__","ret__40336__auto__",-2007190992,null)))));
});

cljs.core$macros.time.cljs$lang$macro = true;
/**
 * Runs expr iterations times in the context of a let expression with
 *   the given bindings, then prints out the bindings and the expr
 *   followed by number of iterations and total time. The optional
 *   argument print-fn, defaulting to println, sets function used to
 *   print the result. expr's string representation will be produced
 *   using pr-str in any case.
 */
cljs.core$macros.simple_benchmark = (function cljs$core$macros$simple_benchmark(var_args){
var args__21537__auto__ = [];
var len__21530__auto___40351 = arguments.length;
var i__21531__auto___40352 = (0);
while(true){
if((i__21531__auto___40352 < len__21530__auto___40351)){
args__21537__auto__.push((arguments[i__21531__auto___40352]));

var G__40353 = (i__21531__auto___40352 + (1));
i__21531__auto___40352 = G__40353;
continue;
} else {
}
break;
}

var argseq__21538__auto__ = ((((5) < args__21537__auto__.length))?(new cljs.core.IndexedSeq(args__21537__auto__.slice((5)),(0),null)):null);
return cljs.core$macros.simple_benchmark.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__21538__auto__);
});

cljs.core$macros.simple_benchmark.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,expr,iterations,p__40348){
var map__40349 = p__40348;
var map__40349__$1 = ((((!((map__40349 == null)))?((((map__40349.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40349.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40349):map__40349);
var print_fn = cljs.core.get.call(null,map__40349__$1,new cljs.core.Keyword(null,"print-fn","print-fn",-1720960489),new cljs.core.Symbol(null,"println","println",-733595439,null));
var bs_str = cljs.core.pr_str.call(null,bindings);
var expr_str = cljs.core.pr_str.call(null,expr);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__21289__auto__ = bindings;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__21289__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"start__40337__auto__","start__40337__auto__",-998855071,null)),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".getTime",".getTime",-1048557777,null)),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Date.","js/Date.",384205255,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ret__40338__auto__","ret__40338__auto__",-429259377,null)),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","dotimes","cljs.core$macros/dotimes",-1407597661,null)),(function (){var x__21289__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"___40339__auto__","___40339__auto__",1216768406,null)),(function (){var x__21289__auto__ = iterations;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"end__40340__auto__","end__40340__auto__",-1153587871,null)),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".getTime",".getTime",-1048557777,null)),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Date.","js/Date.",384205255,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"elapsed__40341__auto__","elapsed__40341__auto__",1859602479,null)),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"end__40340__auto__","end__40340__auto__",-1153587871,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"start__40337__auto__","start__40337__auto__",-998855071,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__21289__auto__ = print_fn;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","str","cljs.core$macros/str",-2019499702,null)),(function (){var x__21289__auto__ = bs_str;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,", "),(function (){var x__21289__auto__ = expr_str;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,", "),(function (){var x__21289__auto__ = iterations;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY," runs, "),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"elapsed__40341__auto__","elapsed__40341__auto__",1859602479,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY," msecs"))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
});

cljs.core$macros.simple_benchmark.cljs$lang$maxFixedArity = (5);

cljs.core$macros.simple_benchmark.cljs$lang$applyTo = (function (seq40342){
var G__40343 = cljs.core.first.call(null,seq40342);
var seq40342__$1 = cljs.core.next.call(null,seq40342);
var G__40344 = cljs.core.first.call(null,seq40342__$1);
var seq40342__$2 = cljs.core.next.call(null,seq40342__$1);
var G__40345 = cljs.core.first.call(null,seq40342__$2);
var seq40342__$3 = cljs.core.next.call(null,seq40342__$2);
var G__40346 = cljs.core.first.call(null,seq40342__$3);
var seq40342__$4 = cljs.core.next.call(null,seq40342__$3);
var G__40347 = cljs.core.first.call(null,seq40342__$4);
var seq40342__$5 = cljs.core.next.call(null,seq40342__$4);
return cljs.core$macros.simple_benchmark.cljs$core$IFn$_invoke$arity$variadic(G__40343,G__40344,G__40345,G__40346,G__40347,seq40342__$5);
});


cljs.core$macros.simple_benchmark.cljs$lang$macro = true;
cljs.core$macros.cs = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.gensym,cljs.core.str,cljs.core.char$),cljs.core.range.call(null,(97),(118))));
cljs.core$macros.gen_apply_to_helper = (function cljs$core$macros$gen_apply_to_helper(var_args){
var args40354 = [];
var len__21530__auto___40357 = arguments.length;
var i__21531__auto___40358 = (0);
while(true){
if((i__21531__auto___40358 < len__21530__auto___40357)){
args40354.push((arguments[i__21531__auto___40358]));

var G__40359 = (i__21531__auto___40358 + (1));
i__21531__auto___40358 = G__40359;
continue;
} else {
}
break;
}

var G__40356 = args40354.length;
switch (G__40356) {
case 0:
return cljs.core$macros.gen_apply_to_helper.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core$macros.gen_apply_to_helper.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40354.length)].join('')));

}
});

cljs.core$macros.gen_apply_to_helper.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core$macros.gen_apply_to_helper.call(null,(1));
});

cljs.core$macros.gen_apply_to_helper.cljs$core$IFn$_invoke$arity$1 = (function (n){
var prop = cljs.core.symbol.call(null,[cljs.core.str("-cljs$core$IFn$_invoke$arity$"),cljs.core.str(n)].join(''));
var f = cljs.core.symbol.call(null,[cljs.core.str("cljs$core$IFn$_invoke$arity$"),cljs.core.str(n)].join(''));
if((n <= (20))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__21289__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__21289__auto__ = cljs.core$macros.cs.call(null,(n - (1)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-first","cljs.core/-first",545297391,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args","args",-1338879193,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args","args",-1338879193,null)),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-rest","cljs.core/-rest",-1829241664,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args","args",-1338879193,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","==","cljs.core$macros/==",-818551413,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"argc","argc",187692008,null)),(function (){var x__21289__auto__ = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"f","f",43394975,null)),(function (){var x__21289__auto__ = prop;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"f","f",43394975,null)),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__21289__auto__ = f;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),cljs.core.take.call(null,n,cljs.core$macros.cs))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"f","f",43394975,null)),cljs.core.take.call(null,n,cljs.core$macros.cs))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core$macros.gen_apply_to_helper.call(null,(n + (1)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"Only up to 20 arguments supported on functions"))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
}
});

cljs.core$macros.gen_apply_to_helper.cljs$lang$maxFixedArity = 1;

cljs.core$macros.gen_apply_to = (function cljs$core$macros$gen_apply_to(_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"*unchecked-if*","*unchecked-if*",1542408350,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","defn","cljs.core$macros/defn",-728332354,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"apply-to","apply-to",-1858571928,null)),(function (){var x__21289__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"f","f",43394975,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"argc","argc",187692008,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args","args",-1338879193,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__21289__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args","args",-1338879193,null)),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args","args",-1338879193,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","zero?","cljs.core$macros/zero?",-65998367,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"argc","argc",187692008,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"f","f",43394975,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core$macros.gen_apply_to_helper.call(null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"*unchecked-if*","*unchecked-if*",1542408350,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,false))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
});

cljs.core$macros.gen_apply_to.cljs$lang$macro = true;
/**
 * Evaluates exprs in a context in which *print-fn* is bound to .append
 *   on a fresh StringBuffer.  Returns the string created by any nested
 *   printing calls.
 */
cljs.core$macros.with_out_str = (function cljs$core$macros$with_out_str(var_args){
var args__21537__auto__ = [];
var len__21530__auto___40366 = arguments.length;
var i__21531__auto___40367 = (0);
while(true){
if((i__21531__auto___40367 < len__21530__auto___40366)){
args__21537__auto__.push((arguments[i__21531__auto___40367]));

var G__40368 = (i__21531__auto___40367 + (1));
i__21531__auto___40367 = G__40368;
continue;
} else {
}
break;
}

var argseq__21538__auto__ = ((((2) < args__21537__auto__.length))?(new cljs.core.IndexedSeq(args__21537__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.with_out_str.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__21538__auto__);
});

cljs.core$macros.with_out_str.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__21289__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"sb__40361__auto__","sb__40361__auto__",-593921395,null)),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","goog.string.StringBuffer.","js/goog.string.StringBuffer.",-1043451650,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","binding","cljs.core$macros/binding",1855847304,null)),(function (){var x__21289__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","*print-newline*","cljs.core/*print-newline*",6231625,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","*print-fn*","cljs.core/*print-fn*",1342365176,null)),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__21289__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__40362__auto__","x__40362__auto__",-102504858,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".append",".append",1595439852,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"sb__40361__auto__","sb__40361__auto__",-593921395,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__40362__auto__","x__40362__auto__",-102504858,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"sb__40361__auto__","sb__40361__auto__",-593921395,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
});

cljs.core$macros.with_out_str.cljs$lang$maxFixedArity = (2);

cljs.core$macros.with_out_str.cljs$lang$applyTo = (function (seq40363){
var G__40364 = cljs.core.first.call(null,seq40363);
var seq40363__$1 = cljs.core.next.call(null,seq40363);
var G__40365 = cljs.core.first.call(null,seq40363__$1);
var seq40363__$2 = cljs.core.next.call(null,seq40363__$1);
return cljs.core$macros.with_out_str.cljs$core$IFn$_invoke$arity$variadic(G__40364,G__40365,seq40363__$2);
});


cljs.core$macros.with_out_str.cljs$lang$macro = true;
/**
 * Expands to code which yields a lazy sequence of the concatenation
 *   of the supplied colls.  Each coll expr is not evaluated until it is
 *   needed.
 * 
 *   (lazy-cat xs ys zs) === (concat (lazy-seq xs) (lazy-seq ys) (lazy-seq zs))
 */
cljs.core$macros.lazy_cat = (function cljs$core$macros$lazy_cat(var_args){
var args__21537__auto__ = [];
var len__21530__auto___40373 = arguments.length;
var i__21531__auto___40374 = (0);
while(true){
if((i__21531__auto___40374 < len__21530__auto___40373)){
args__21537__auto__.push((arguments[i__21531__auto___40374]));

var G__40375 = (i__21531__auto___40374 + (1));
i__21531__auto___40374 = G__40375;
continue;
} else {
}
break;
}

var argseq__21538__auto__ = ((((2) < args__21537__auto__.length))?(new cljs.core.IndexedSeq(args__21537__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.lazy_cat.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__21538__auto__);
});

cljs.core$macros.lazy_cat.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,colls){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","concat","cljs.core/concat",-1133584918,null)),cljs.core.map.call(null,(function (p1__40369_SHARP_){
return cljs.core._conj.call(null,(function (){var x__21289__auto__ = p1__40369_SHARP_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),new cljs.core.Symbol("cljs.core$macros","lazy-seq","cljs.core$macros/lazy-seq",806482650,null));
}),colls))));
});

cljs.core$macros.lazy_cat.cljs$lang$maxFixedArity = (2);

cljs.core$macros.lazy_cat.cljs$lang$applyTo = (function (seq40370){
var G__40371 = cljs.core.first.call(null,seq40370);
var seq40370__$1 = cljs.core.next.call(null,seq40370);
var G__40372 = cljs.core.first.call(null,seq40370__$1);
var seq40370__$2 = cljs.core.next.call(null,seq40370__$1);
return cljs.core$macros.lazy_cat.cljs$core$IFn$_invoke$arity$variadic(G__40371,G__40372,seq40370__$2);
});


cljs.core$macros.lazy_cat.cljs$lang$macro = true;
cljs.core$macros.js_str = (function cljs$core$macros$js_str(_AMPERSAND_form,_AMPERSAND_env,s){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__21289__auto__ = s;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),"''+~{}"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.js_str.cljs$lang$macro = true;
cljs.core$macros.es6_iterable = (function cljs$core$macros$es6_iterable(_AMPERSAND_form,_AMPERSAND_env,ty){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aset","cljs.core$macros/aset",-693176374,null)),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-prototype",".-prototype",-1562038608,null)),(function (){var x__21289__auto__ = ty;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","ITER_SYMBOL","cljs.core/ITER_SYMBOL",-2091399233,null)),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__21289__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","this-as","cljs.core$macros/this-as",-799075148,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__40376__auto__","this__40376__auto__",-1008579939,null)),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","es6-iterator","cljs.core/es6-iterator",856007913,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__40376__auto__","this__40376__auto__",-1008579939,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
});

cljs.core$macros.es6_iterable.cljs$lang$macro = true;
/**
 * Returns a map of the intern mappings for the namespace.
 */
cljs.core$macros.ns_interns = (function cljs$core$macros$ns_interns(_AMPERSAND_form,_AMPERSAND_env,p__40377){
var vec__40389 = p__40377;
var quote = cljs.core.nth.call(null,vec__40389,(0),null);
var ns = cljs.core.nth.call(null,vec__40389,(1),null);
if((cljs.core._EQ_.call(null,quote,new cljs.core.Symbol(null,"quote","quote",1377916282,null))) && ((ns instanceof cljs.core.Symbol))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Argument to ns-interns must be a quoted symbol"),cljs.core.str("\n"),cljs.core.str("(core/and (= quote (quote quote)) (core/symbol? ns))")].join('')));
}

return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","into","cljs.core/into",1879938733,null)),(function (){var x__21289__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,((function (vec__40389,quote,ns){
return (function (p__40396){
var vec__40397 = p__40396;
var sym = cljs.core.nth.call(null,vec__40397,(0),null);
var _ = cljs.core.nth.call(null,vec__40397,(1),null);
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","symbol","cljs.core/symbol",195265748,null)),(function (){var x__21289__auto__ = cljs.core.name.call(null,sym);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"var","var",870848730,null)),(function (){var x__21289__auto__ = cljs.core.symbol.call(null,cljs.core.name.call(null,ns),cljs.core.name.call(null,sym));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})()))));
});})(vec__40389,quote,ns))
,cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns,new cljs.core.Keyword(null,"defs","defs",1398449717)], null)))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
});

cljs.core$macros.ns_interns.cljs$lang$macro = true;
/**
 * Removes the mappings for the symbol from the namespace.
 */
cljs.core$macros.ns_unmap = (function cljs$core$macros$ns_unmap(_AMPERSAND_form,_AMPERSAND_env,p__40400,p__40401){
var vec__40408 = p__40400;
var quote0 = cljs.core.nth.call(null,vec__40408,(0),null);
var ns = cljs.core.nth.call(null,vec__40408,(1),null);
var vec__40411 = p__40401;
var quote1 = cljs.core.nth.call(null,vec__40411,(0),null);
var sym = cljs.core.nth.call(null,vec__40411,(1),null);
if((cljs.core._EQ_.call(null,quote0,new cljs.core.Symbol(null,"quote","quote",1377916282,null))) && ((ns instanceof cljs.core.Symbol)) && (cljs.core._EQ_.call(null,quote1,new cljs.core.Symbol(null,"quote","quote",1377916282,null))) && ((sym instanceof cljs.core.Symbol))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Arguments to ns-unmap must be quoted symbols"),cljs.core.str("\n"),cljs.core.str("(core/and (= quote0 (quote quote)) (core/symbol? ns) (= quote1 (quote quote)) (core/symbol? sym))")].join('')));
}

cljs.core.swap_BANG_.call(null,cljs.env._STAR_compiler_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns,new cljs.core.Keyword(null,"defs","defs",1398449717)], null),cljs.core.dissoc,sym);

return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","js-delete","cljs.core$macros/js-delete",387769082,null)),(function (){var x__21289__auto__ = cljs.compiler.munge.call(null,ns);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.compiler.munge.call(null,[cljs.core.str(sym)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
});

cljs.core$macros.ns_unmap.cljs$lang$macro = true;
/**
 * Non-atomically swaps the value of the volatile as if:
 * (apply f current-value-of-vol args). Returns the value that
 * was swapped in.
 */
cljs.core$macros.vswap_BANG_ = (function cljs$core$macros$vswap_BANG_(var_args){
var args__21537__auto__ = [];
var len__21530__auto___40419 = arguments.length;
var i__21531__auto___40420 = (0);
while(true){
if((i__21531__auto___40420 < len__21530__auto___40419)){
args__21537__auto__.push((arguments[i__21531__auto___40420]));

var G__40421 = (i__21531__auto___40420 + (1));
i__21531__auto___40420 = G__40421;
continue;
} else {
}
break;
}

var argseq__21538__auto__ = ((((4) < args__21537__auto__.length))?(new cljs.core.IndexedSeq(args__21537__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.vswap_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__21538__auto__);
});

cljs.core$macros.vswap_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,vol,f,args){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-vreset!","cljs.core/-vreset!",-1186516972,null)),(function (){var x__21289__auto__ = vol;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__21289__auto__ = f;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-deref","cljs.core/-deref",-1260480154,null)),(function (){var x__21289__auto__ = vol;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),args)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
});

cljs.core$macros.vswap_BANG_.cljs$lang$maxFixedArity = (4);

cljs.core$macros.vswap_BANG_.cljs$lang$applyTo = (function (seq40414){
var G__40415 = cljs.core.first.call(null,seq40414);
var seq40414__$1 = cljs.core.next.call(null,seq40414);
var G__40416 = cljs.core.first.call(null,seq40414__$1);
var seq40414__$2 = cljs.core.next.call(null,seq40414__$1);
var G__40417 = cljs.core.first.call(null,seq40414__$2);
var seq40414__$3 = cljs.core.next.call(null,seq40414__$2);
var G__40418 = cljs.core.first.call(null,seq40414__$3);
var seq40414__$4 = cljs.core.next.call(null,seq40414__$3);
return cljs.core$macros.vswap_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__40415,G__40416,G__40417,G__40418,seq40414__$4);
});


cljs.core$macros.vswap_BANG_.cljs$lang$macro = true;
cljs.core$macros.locking = (function cljs$core$macros$locking(var_args){
var args__21537__auto__ = [];
var len__21530__auto___40426 = arguments.length;
var i__21531__auto___40427 = (0);
while(true){
if((i__21531__auto___40427 < len__21530__auto___40426)){
args__21537__auto__.push((arguments[i__21531__auto___40427]));

var G__40428 = (i__21531__auto___40427 + (1));
i__21531__auto___40427 = G__40428;
continue;
} else {
}
break;
}

var argseq__21538__auto__ = ((((3) < args__21537__auto__.length))?(new cljs.core.IndexedSeq(args__21537__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.locking.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__21538__auto__);
});

cljs.core$macros.locking.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,forms){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),forms)));
});

cljs.core$macros.locking.cljs$lang$maxFixedArity = (3);

cljs.core$macros.locking.cljs$lang$applyTo = (function (seq40422){
var G__40423 = cljs.core.first.call(null,seq40422);
var seq40422__$1 = cljs.core.next.call(null,seq40422);
var G__40424 = cljs.core.first.call(null,seq40422__$1);
var seq40422__$2 = cljs.core.next.call(null,seq40422__$1);
var G__40425 = cljs.core.first.call(null,seq40422__$2);
var seq40422__$3 = cljs.core.next.call(null,seq40422__$2);
return cljs.core$macros.locking.cljs$core$IFn$_invoke$arity$variadic(G__40423,G__40424,G__40425,seq40422__$3);
});


cljs.core$macros.locking.cljs$lang$macro = true;
cljs.core$macros.load_file_STAR_ = (function cljs$core$macros$load_file_STAR_(_AMPERSAND_form,_AMPERSAND_env,f){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","goog","js/goog",-70605150,null)),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"nodeGlobalRequire","nodeGlobalRequire",167018599,null)),(function (){var x__21289__auto__ = f;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
});

cljs.core$macros.load_file_STAR_.cljs$lang$macro = true;
/**
 * If form represents a macro form, returns its expansion,
 *   else returns form.
 */
cljs.core$macros.macroexpand_1 = (function cljs$core$macros$macroexpand_1(_AMPERSAND_form,_AMPERSAND_env,quoted){
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,quoted),new cljs.core.Symbol(null,"quote","quote",1377916282,null))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Argument to macroexpand-1 must be quoted"),cljs.core.str("\n"),cljs.core.str("(core/= (core/first quoted) (quote quote))")].join('')));
}

var form = cljs.core.second.call(null,quoted);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),(function (){var x__21289__auto__ = cljs.analyzer.macroexpand_1.call(null,_AMPERSAND_env,form);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
});

cljs.core$macros.macroexpand_1.cljs$lang$macro = true;
/**
 * Repeatedly calls macroexpand-1 on form until it no longer
 *   represents a macro form, then returns it.  Note neither
 *   macroexpand-1 nor macroexpand expand macros in subforms.
 */
cljs.core$macros.macroexpand = (function cljs$core$macros$macroexpand(_AMPERSAND_form,_AMPERSAND_env,quoted){
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,quoted),new cljs.core.Symbol(null,"quote","quote",1377916282,null))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Argument to macroexpand must be quoted"),cljs.core.str("\n"),cljs.core.str("(core/= (core/first quoted) (quote quote))")].join('')));
}

var form = cljs.core.second.call(null,quoted);
var env = _AMPERSAND_env;
var form__$1 = form;
var form_SINGLEQUOTE_ = cljs.analyzer.macroexpand_1.call(null,env,form__$1);
while(true){
if(!((form__$1 === form_SINGLEQUOTE_))){
var G__40429 = form_SINGLEQUOTE_;
var G__40430 = cljs.analyzer.macroexpand_1.call(null,env,form_SINGLEQUOTE_);
form__$1 = G__40429;
form_SINGLEQUOTE_ = G__40430;
continue;
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),(function (){var x__21289__auto__ = form_SINGLEQUOTE_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
}
break;
}
});

cljs.core$macros.macroexpand.cljs$lang$macro = true;
cljs.core$macros.multi_arity_fn_QMARK_ = (function cljs$core$macros$multi_arity_fn_QMARK_(fdecl){
return ((1) < cljs.core.count.call(null,fdecl));
});
cljs.core$macros.variadic_fn_QMARK_ = (function cljs$core$macros$variadic_fn_QMARK_(fdecl){
var and__20443__auto__ = cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,fdecl));
if(and__20443__auto__){
return cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null], null), null),cljs.core.ffirst.call(null,fdecl));
} else {
return and__20443__auto__;
}
});
cljs.core$macros.variadic_fn_STAR_ = (function cljs$core$macros$variadic_fn_STAR_(var_args){
var args40431 = [];
var len__21530__auto___40438 = arguments.length;
var i__21531__auto___40439 = (0);
while(true){
if((i__21531__auto___40439 < len__21530__auto___40438)){
args40431.push((arguments[i__21531__auto___40439]));

var G__40440 = (i__21531__auto___40439 + (1));
i__21531__auto___40439 = G__40440;
continue;
} else {
}
break;
}

var G__40433 = args40431.length;
switch (G__40433) {
case 2:
return cljs.core$macros.variadic_fn_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core$macros.variadic_fn_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40431.length)].join('')));

}
});

cljs.core$macros.variadic_fn_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (sym,method){
return cljs.core$macros.variadic_fn_STAR_.call(null,sym,method,true);
});

cljs.core$macros.variadic_fn_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (sym,p__40434,solo){
var vec__40435 = p__40434;
var seq__40436 = cljs.core.seq.call(null,vec__40435);
var first__40437 = cljs.core.first.call(null,seq__40436);
var seq__40436__$1 = cljs.core.next.call(null,seq__40436);
var arglist = first__40437;
var body = seq__40436__$1;
var method = vec__40435;
var sig = cljs.core.remove.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null], null), null),arglist);
var restarg = cljs.core.gensym.call(null,"seq");
var get_delegate = ((function (sig,restarg,vec__40435,seq__40436,first__40437,seq__40436__$1,arglist,body,method){
return (function cljs$core$macros$get_delegate(){
return new cljs.core.Symbol(null,"cljs$core$IFn$_invoke$arity$variadic","cljs$core$IFn$_invoke$arity$variadic",-378825034,null);
});})(sig,restarg,vec__40435,seq__40436,first__40437,seq__40436__$1,arglist,body,method))
;
var get_delegate_prop = ((function (sig,restarg,vec__40435,seq__40436,first__40437,seq__40436__$1,arglist,body,method){
return (function cljs$core$macros$get_delegate_prop(){
return cljs.core.symbol.call(null,[cljs.core.str("-"),cljs.core.str(get_delegate.call(null))].join(''));
});})(sig,restarg,vec__40435,seq__40436,first__40437,seq__40436__$1,arglist,body,method))
;
var param_bind = ((function (sig,restarg,vec__40435,seq__40436,first__40437,seq__40436__$1,arglist,body,method){
return (function cljs$core$macros$param_bind(param){
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__21289__auto__ = param;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__21289__auto__ = cljs.core.with_meta.call(null,new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null),cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"file","file",-1269645878)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"/Users/mathieubollore/code/call-of-cthulhu/resources/public/js/out/cljs/core.cljc"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",212345235)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2764),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",2078222095)),cljs.core._conj.call(null,cljs.core.List.EMPTY,49),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",1837326455)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2764),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",1425389514)),cljs.core._conj.call(null,cljs.core.List.EMPTY,54),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = restarg;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = restarg;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__21289__auto__ = cljs.core.with_meta.call(null,new cljs.core.Symbol("cljs.core","next","cljs.core/next",-1291438473,null),cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"file","file",-1269645878)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"/Users/mathieubollore/code/call-of-cthulhu/resources/public/js/out/cljs/core.cljc"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",212345235)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2765),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",2078222095)),cljs.core._conj.call(null,cljs.core.List.EMPTY,51),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",1837326455)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2765),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",1425389514)),cljs.core._conj.call(null,cljs.core.List.EMPTY,55),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = restarg;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})()))));
});})(sig,restarg,vec__40435,seq__40436,first__40437,seq__40436__$1,arglist,body,method))
;
var apply_to = ((function (sig,restarg,vec__40435,seq__40436,first__40437,seq__40436__$1,arglist,body,method){
return (function cljs$core$macros$apply_to(){
if(((1) < cljs.core.count.call(null,sig))){
var params = cljs.core.repeatedly.call(null,(cljs.core.count.call(null,sig) - (1)),cljs.core.gensym);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__21289__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__21289__auto__ = restarg;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__21289__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.mapcat.call(null,param_bind,params)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__21289__auto__ = sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__21289__auto__ = get_delegate.call(null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),params,(function (){var x__21289__auto__ = restarg;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__21289__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__21289__auto__ = restarg;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__21289__auto__ = sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__21289__auto__ = get_delegate.call(null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__21289__auto__ = restarg;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
}
});})(sig,restarg,vec__40435,seq__40436,first__40437,seq__40436__$1,arglist,body,method))
;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__21289__auto__ = sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = get_delegate_prop.call(null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__21289__auto__ = cljs.core.vec.call(null,sig);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(cljs.core.truth_(solo)?cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__21289__auto__ = sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-cljs$lang$maxFixedArity","-cljs$lang$maxFixedArity",-1481434279,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = (cljs.core.count.call(null,sig) - (1));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())))):null),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__21289__auto__ = sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-cljs$lang$applyTo","-cljs$lang$applyTo",-225535181,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = apply_to.call(null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
});

cljs.core$macros.variadic_fn_STAR_.cljs$lang$maxFixedArity = 3;

cljs.core$macros.copy_arguments = (function cljs$core$macros$copy_arguments(_AMPERSAND_form,_AMPERSAND_env,dest){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__21289__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"len__40442__auto__","len__40442__auto__",-699421296,null)),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","js-arguments","cljs.core$macros/js-arguments",390128540,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__21289__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"i__40443__auto__","i__40443__auto__",1850521737,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"i__40443__auto__","i__40443__auto__",1850521737,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"len__40442__auto__","len__40442__auto__",-699421296,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".push",".push",-1497267248,null)),(function (){var x__21289__auto__ = dest;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aget","cljs.core$macros/aget",1976136178,null)),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","js-arguments","cljs.core$macros/js-arguments",390128540,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"i__40443__auto__","i__40443__auto__",1850521737,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","inc","cljs.core$macros/inc",876629257,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"i__40443__auto__","i__40443__auto__",1850521737,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
});

cljs.core$macros.copy_arguments.cljs$lang$macro = true;
cljs.core$macros.variadic_fn = (function cljs$core$macros$variadic_fn(name,meta,p__40446,emit_var_QMARK_){
var vec__40453 = p__40446;
var vec__40456 = cljs.core.nth.call(null,vec__40453,(0),null);
var seq__40457 = cljs.core.seq.call(null,vec__40456);
var first__40458 = cljs.core.first.call(null,seq__40457);
var seq__40457__$1 = cljs.core.next.call(null,seq__40457);
var arglist = first__40458;
var body = seq__40457__$1;
var method = vec__40456;
var fdecl = vec__40453;
var dest_args = ((function (vec__40453,vec__40456,seq__40457,first__40458,seq__40457__$1,arglist,body,method,fdecl){
return (function cljs$core$macros$variadic_fn_$_dest_args(c){
return cljs.core.map.call(null,((function (vec__40453,vec__40456,seq__40457,first__40458,seq__40457__$1,arglist,body,method,fdecl){
return (function (n){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aget","cljs.core$macros/aget",1976136178,null)),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","js-arguments","cljs.core$macros/js-arguments",390128540,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
});})(vec__40453,vec__40456,seq__40457,first__40458,seq__40457__$1,arglist,body,method,fdecl))
,cljs.core.range.call(null,c));
});})(vec__40453,vec__40456,seq__40457,first__40458,seq__40457__$1,arglist,body,method,fdecl))
;
var rname = cljs.core.symbol.call(null,[cljs.core.str(cljs.analyzer._STAR_cljs_ns_STAR_)].join(''),[cljs.core.str(name)].join(''));
var sig = cljs.core.remove.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null], null), null),arglist);
var c_1 = (cljs.core.count.call(null,sig) - (1));
var meta__$1 = cljs.core.assoc.call(null,meta,new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",882626057),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),c_1,new cljs.core.Keyword(null,"method-params","method-params",-980792179),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sig], null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),(function (){var x__21289__auto__ = arglist;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.doall.call(null,cljs.core.map.call(null,meta,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arglist], null)))], null));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"def","def",597100991,null)),(function (){var x__21289__auto__ = cljs.core.with_meta.call(null,name,meta__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__21289__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"var_args","var_args",1214280389,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__21289__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args__40444__auto__","args__40444__auto__",2132974366,null)),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","copy-arguments","cljs.core$macros/copy-arguments",-1675962356,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args__40444__auto__","args__40444__auto__",2132974366,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__21289__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"argseq__40445__auto__","argseq__40445__auto__",-1078129503,null)),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__21289__auto__ = c_1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args__40444__auto__","args__40444__auto__",2132974366,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__21289__auto__ = cljs.core.with_meta.call(null,new cljs.core.Symbol("cljs.core","IndexedSeq","cljs.core/IndexedSeq",-228688698,null),cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"file","file",-1269645878)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"/Users/mathieubollore/code/call-of-cthulhu/resources/public/js/out/cljs/core.cljc"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",212345235)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2812),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",2078222095)),cljs.core._conj.call(null,cljs.core.List.EMPTY,55),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",1837326455)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2812),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",1425389514)),cljs.core._conj.call(null,cljs.core.List.EMPTY,75),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".slice",".slice",1874048374,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args__40444__auto__","args__40444__auto__",2132974366,null)),(function (){var x__21289__auto__ = c_1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__21289__auto__ = rname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"cljs$core$IFn$_invoke$arity$variadic","cljs$core$IFn$_invoke$arity$variadic",-378825034,null)),dest_args.call(null,c_1),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"argseq__40445__auto__","argseq__40445__auto__",-1078129503,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core$macros.variadic_fn_STAR_.call(null,rname,method);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = (cljs.core.truth_(emit_var_QMARK_)?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"var","var",870848730,null)),(function (){var x__21289__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})()))):null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
});
cljs.core$macros.multi_arity_fn = (function cljs$core$macros$multi_arity_fn(name,meta,fdecl,emit_var_QMARK_){
var dest_args = (function cljs$core$macros$multi_arity_fn_$_dest_args(c){
return cljs.core.map.call(null,(function (n){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aget","cljs.core$macros/aget",1976136178,null)),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","js-arguments","cljs.core$macros/js-arguments",390128540,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
}),cljs.core.range.call(null,c));
});
var fixed_arity = (function cljs$core$macros$multi_arity_fn_$_fixed_arity(rname,sig){
var c = cljs.core.count.call(null,sig);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__21289__auto__ = rname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__21289__auto__ = cljs.core.symbol.call(null,[cljs.core.str("cljs$core$IFn$_invoke$arity$"),cljs.core.str(c)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),dest_args.call(null,c))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())))], null);
});
var fn_method = (function cljs$core$macros$multi_arity_fn_$_fn_method(p__40483){
var vec__40487 = p__40483;
var seq__40488 = cljs.core.seq.call(null,vec__40487);
var first__40489 = cljs.core.first.call(null,seq__40488);
var seq__40488__$1 = cljs.core.next.call(null,seq__40488);
var sig = first__40489;
var body = seq__40488__$1;
var method = vec__40487;
if(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null], null), null),sig))){
return cljs.core$macros.variadic_fn_STAR_.call(null,name,method,false);
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__21289__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.symbol.call(null,[cljs.core.str("-cljs$core$IFn$_invoke$arity$"),cljs.core.str(cljs.core.count.call(null,sig))].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__21289__auto__ = method;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
}
});
var rname = cljs.core.symbol.call(null,[cljs.core.str(cljs.analyzer._STAR_cljs_ns_STAR_)].join(''),[cljs.core.str(name)].join(''));
var arglists = cljs.core.map.call(null,cljs.core.first,fdecl);
var varsig_QMARK_ = ((function (rname,arglists){
return (function (p1__40459_SHARP_){
return cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null], null), null),p1__40459_SHARP_);
});})(rname,arglists))
;
var variadic = cljs.core.boolean$.call(null,cljs.core.some.call(null,varsig_QMARK_,arglists));
var sigs = cljs.core.remove.call(null,varsig_QMARK_,arglists);
var maxfa = cljs.core.apply.call(null,cljs.core.max,cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.count,sigs),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.count.call(null,cljs.core.first.call(null,cljs.core.filter.call(null,varsig_QMARK_,arglists))) - (2))], null)));
var meta__$1 = cljs.core.assoc.call(null,meta,new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",882626057),variadic,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),maxfa,new cljs.core.Keyword(null,"method-params","method-params",-980792179),sigs,new cljs.core.Keyword(null,"arglists","arglists",1661989754),arglists,new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.doall.call(null,cljs.core.map.call(null,meta,arglists))], null));
var args_sym = cljs.core.gensym.call(null,"args");
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"def","def",597100991,null)),(function (){var x__21289__auto__ = cljs.core.with_meta.call(null,name,meta__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__21289__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"var_args","var_args",1214280389,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__21289__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__21289__auto__ = args_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","copy-arguments","cljs.core$macros/copy-arguments",-1675962356,null)),(function (){var x__21289__auto__ = args_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","case","cljs.core$macros/case",-2131866965,null)),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),(function (){var x__21289__auto__ = args_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),cljs.core.mapcat.call(null,((function (rname,arglists,varsig_QMARK_,variadic,sigs,maxfa,meta__$1,args_sym){
return (function (p1__40460_SHARP_){
return fixed_arity.call(null,rname,p1__40460_SHARP_);
});})(rname,arglists,varsig_QMARK_,variadic,sigs,maxfa,meta__$1,args_sym))
,sigs),(function (){var x__21289__auto__ = ((variadic)?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__21289__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"argseq__40461__auto__","argseq__40461__auto__",-2074483836,null)),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__21289__auto__ = cljs.core.with_meta.call(null,new cljs.core.Symbol("cljs.core","IndexedSeq","cljs.core/IndexedSeq",-228688698,null),cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"file","file",-1269645878)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"/Users/mathieubollore/code/call-of-cthulhu/resources/public/js/out/cljs/core.cljc"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",212345235)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2870),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",2078222095)),cljs.core._conj.call(null,cljs.core.List.EMPTY,58),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",1837326455)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2870),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",1425389514)),cljs.core._conj.call(null,cljs.core.List.EMPTY,78),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".slice",".slice",1874048374,null)),(function (){var x__21289__auto__ = args_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = maxfa;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__21289__auto__ = rname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"cljs$core$IFn$_invoke$arity$variadic","cljs$core$IFn$_invoke$arity$variadic",-378825034,null)),dest_args.call(null,maxfa),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"argseq__40461__auto__","argseq__40461__auto__",-2074483836,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})()))):(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(meta__$1))?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null)),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","str","cljs.core$macros/str",-2019499702,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"Invalid arity: "),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),(function (){var x__21289__auto__ = args_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(2)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})()))):cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null)),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","str","cljs.core$macros/str",-2019499702,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"Invalid arity: "),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),(function (){var x__21289__auto__ = args_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),cljs.core.map.call(null,fn_method,fdecl),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__21289__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__21289__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-cljs$lang$maxFixedArity","-cljs$lang$maxFixedArity",-1481434279,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = maxfa;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),(function (){var x__21289__auto__ = (cljs.core.truth_(emit_var_QMARK_)?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"var","var",870848730,null)),(function (){var x__21289__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})()))):null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})())));
});
/**
 * Same as (def name (core/fn [params* ] exprs*)) or (def
 *  name (core/fn ([params* ] exprs*)+)) with any doc-string or attrs added
 *  to the var metadata. prepost-map defines a map with optional keys
 *  :pre and :post that contain collections of pre or post conditions.
 * @param {...*} var_args
 */
cljs.core$macros.defn = (function() { 
var cljs$core$macros$defn__delegate = function (_AMPERSAND_form,_AMPERSAND_env,name,fdecl){
if((name instanceof cljs.core.Symbol)){
} else {
throw (new Error("First argument to defn must be a symbol"));
}

var m = ((typeof cljs.core.first.call(null,fdecl) === 'string')?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),cljs.core.first.call(null,fdecl)], null):cljs.core.PersistentArrayMap.EMPTY);
var fdecl__$1 = ((typeof cljs.core.first.call(null,fdecl) === 'string')?cljs.core.next.call(null,fdecl):fdecl);
var m__$1 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,fdecl__$1)))?cljs.core.conj.call(null,m,cljs.core.first.call(null,fdecl__$1)):m);
var fdecl__$2 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,fdecl__$1)))?cljs.core.next.call(null,fdecl__$1):fdecl__$1);
var fdecl__$3 = ((cljs.core.vector_QMARK_.call(null,cljs.core.first.call(null,fdecl__$2)))?(function (){var x__21289__auto__ = fdecl__$2;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})():fdecl__$2);
var m__$2 = ((cljs.core.map_QMARK_.call(null,cljs.core.last.call(null,fdecl__$3)))?cljs.core.conj.call(null,m__$1,cljs.core.last.call(null,fdecl__$3)):m__$1);
var fdecl__$4 = ((cljs.core.map_QMARK_.call(null,cljs.core.last.call(null,fdecl__$3)))?cljs.core.butlast.call(null,fdecl__$3):fdecl__$3);
var m__$3 = cljs.core.conj.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core._conj.call(null,(function (){var x__21289__auto__ = cljs.core$macros.sigs.call(null,fdecl__$4);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})(),new cljs.core.Symbol(null,"quote","quote",1377916282,null))], null),m__$2);
var m__$4 = cljs.core.conj.call(null,(cljs.core.truth_(cljs.core.meta.call(null,name))?cljs.core.meta.call(null,name):cljs.core.PersistentArrayMap.EMPTY),m__$3);
if(cljs.core.truth_(cljs.core$macros.multi_arity_fn_QMARK_.call(null,fdecl__$4))){
return cljs.core$macros.multi_arity_fn.call(null,name,(cljs.core.truth_(cljs.compiler.checking_types_QMARK_.call(null))?cljs.core.update_in.call(null,m__$4,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516)], null),cljs.core.conj,"@param {...*} var_args"):m__$4),fdecl__$4,new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env));
} else {
if(cljs.core.truth_(cljs.core$macros.variadic_fn_QMARK_.call(null,fdecl__$4))){
return cljs.core$macros.variadic_fn.call(null,name,(cljs.core.truth_(cljs.compiler.checking_types_QMARK_.call(null))?cljs.core.update_in.call(null,m__$4,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516)], null),cljs.core.conj,"@param {...*} var_args"):m__$4),fdecl__$4,new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env));
} else {
return cljs.core._conj.call(null,(function (){var x__21289__auto__ = cljs.core.with_meta.call(null,name,m__$4);
return cljs.core._conj.call(null,(function (){var x__21289__auto____$1 = cljs.core.cons.call(null,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null),fdecl__$4);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto____$1);
})(),x__21289__auto__);
})(),new cljs.core.Symbol(null,"def","def",597100991,null));

}
}
};
var cljs$core$macros$defn = function (_AMPERSAND_form,_AMPERSAND_env,name,var_args){
var fdecl = null;
if (arguments.length > 3) {
var G__40490__i = 0, G__40490__a = new Array(arguments.length -  3);
while (G__40490__i < G__40490__a.length) {G__40490__a[G__40490__i] = arguments[G__40490__i + 3]; ++G__40490__i;}
  fdecl = new cljs.core.IndexedSeq(G__40490__a,0);
} 
return cljs$core$macros$defn__delegate.call(this,_AMPERSAND_form,_AMPERSAND_env,name,fdecl);};
cljs$core$macros$defn.cljs$lang$maxFixedArity = 3;
cljs$core$macros$defn.cljs$lang$applyTo = (function (arglist__40491){
var _AMPERSAND_form = cljs.core.first(arglist__40491);
arglist__40491 = cljs.core.next(arglist__40491);
var _AMPERSAND_env = cljs.core.first(arglist__40491);
arglist__40491 = cljs.core.next(arglist__40491);
var name = cljs.core.first(arglist__40491);
var fdecl = cljs.core.rest(arglist__40491);
return cljs$core$macros$defn__delegate(_AMPERSAND_form,_AMPERSAND_env,name,fdecl);
});
cljs$core$macros$defn.cljs$core$IFn$_invoke$arity$variadic = cljs$core$macros$defn__delegate;
return cljs$core$macros$defn;
})()
;
cljs.core$macros.defn.cljs$lang$macro = true;
/**
 * Like defn, but the resulting function name is declared as a
 *   macro and will be used as a macro by the compiler when it is
 *   called.
 */
cljs.core$macros.defmacro = (function cljs$core$macros$defmacro(var_args){
var args__21537__auto__ = [];
var len__21530__auto___40496 = arguments.length;
var i__21531__auto___40497 = (0);
while(true){
if((i__21531__auto___40497 < len__21530__auto___40496)){
args__21537__auto__.push((arguments[i__21531__auto___40497]));

var G__40498 = (i__21531__auto___40497 + (1));
i__21531__auto___40497 = G__40498;
continue;
} else {
}
break;
}

var argseq__21538__auto__ = ((((3) < args__21537__auto__.length))?(new cljs.core.IndexedSeq(args__21537__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.defmacro.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__21538__auto__);
});

cljs.core$macros.defmacro.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,args){
var prefix = (function (){var p = (function (){var x__21289__auto__ = cljs.core.vary_meta.call(null,name,cljs.core.assoc,new cljs.core.Keyword(null,"macro","macro",-867863404),true);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})();
var args__$1 = args;
while(true){
var f = cljs.core.first.call(null,args__$1);
if(typeof f === 'string'){
var G__40499 = cljs.core.cons.call(null,f,p);
var G__40500 = cljs.core.next.call(null,args__$1);
p = G__40499;
args__$1 = G__40500;
continue;
} else {
if(cljs.core.map_QMARK_.call(null,f)){
var G__40501 = cljs.core.cons.call(null,f,p);
var G__40502 = cljs.core.next.call(null,args__$1);
p = G__40501;
args__$1 = G__40502;
continue;
} else {
return p;
}
}
break;
}
})();
var fdecl = (function (){var fd = args;
while(true){
if(typeof cljs.core.first.call(null,fd) === 'string'){
var G__40503 = cljs.core.next.call(null,fd);
fd = G__40503;
continue;
} else {
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,fd))){
var G__40504 = cljs.core.next.call(null,fd);
fd = G__40504;
continue;
} else {
return fd;
}
}
break;
}
})();
var fdecl__$1 = ((cljs.core.vector_QMARK_.call(null,cljs.core.first.call(null,fdecl)))?(function (){var x__21289__auto__ = fdecl;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto__);
})():fdecl);
var add_implicit_args = ((function (prefix,fdecl,fdecl__$1){
return (function (fd){
var args__$1 = cljs.core.first.call(null,fd);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"&form","&form",1482799337,null),cljs.core.cons.call(null,new cljs.core.Symbol(null,"&env","&env",-919163083,null),args__$1))),cljs.core.next.call(null,fd));
});})(prefix,fdecl,fdecl__$1))
;
var add_args = ((function (prefix,fdecl,fdecl__$1,add_implicit_args){
return (function (acc,ds){
while(true){
if((ds == null)){
return acc;
} else {
var d = cljs.core.first.call(null,ds);
if(cljs.core.map_QMARK_.call(null,d)){
return cljs.core.conj.call(null,acc,d);
} else {
var G__40505 = cljs.core.conj.call(null,acc,add_implicit_args.call(null,d));
var G__40506 = cljs.core.next.call(null,ds);
acc = G__40505;
ds = G__40506;
continue;
}
}
break;
}
});})(prefix,fdecl,fdecl__$1,add_implicit_args))
;
var fdecl__$2 = cljs.core.seq.call(null,add_args.call(null,cljs.core.PersistentVector.EMPTY,fdecl__$1));
var decl = (function (){var p = prefix;
var d = fdecl__$2;
while(true){
if(cljs.core.truth_(p)){
var G__40507 = cljs.core.next.call(null,p);
var G__40508 = cljs.core.cons.call(null,cljs.core.first.call(null,p),d);
p = G__40507;
d = G__40508;
continue;
} else {
return d;
}
break;
}
})();
return cljs.core._conj.call(null,(function (){var x__21289__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol("cljs.core$macros","defn","cljs.core$macros/defn",-728332354,null),decl);
return cljs.core._conj.call(null,(function (){var x__21289__auto____$1 = cljs.core._conj.call(null,(function (){var x__21289__auto____$1 = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__21289__auto____$1 = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto____$1);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-cljs$lang$macro","-cljs$lang$macro",443600924,null)))));
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,true),x__21289__auto____$1);
})(),new cljs.core.Symbol(null,"set!","set!",250714521,null));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21289__auto____$1);
})(),x__21289__auto__);
})(),new cljs.core.Symbol(null,"do","do",1686842252,null));
});

cljs.core$macros.defmacro.cljs$lang$maxFixedArity = (3);

cljs.core$macros.defmacro.cljs$lang$applyTo = (function (seq40492){
var G__40493 = cljs.core.first.call(null,seq40492);
var seq40492__$1 = cljs.core.next.call(null,seq40492);
var G__40494 = cljs.core.first.call(null,seq40492__$1);
var seq40492__$2 = cljs.core.next.call(null,seq40492__$1);
var G__40495 = cljs.core.first.call(null,seq40492__$2);
var seq40492__$3 = cljs.core.next.call(null,seq40492__$2);
return cljs.core$macros.defmacro.cljs$core$IFn$_invoke$arity$variadic(G__40493,G__40494,G__40495,seq40492__$3);
});

cljs.core$macros.defmacro.cljs$lang$macro = true;

//# sourceMappingURL=core$macros.js.map?rel=1605080749765