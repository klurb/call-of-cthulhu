// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args24376 = [];
var len__21530__auto___24385 = arguments.length;
var i__21531__auto___24386 = (0);
while(true){
if((i__21531__auto___24386 < len__21530__auto___24385)){
args24376.push((arguments[i__21531__auto___24386]));

var G__24389 = (i__21531__auto___24386 + (1));
i__21531__auto___24386 = G__24389;
continue;
} else {
}
break;
}

var G__24379 = args24376.length;
switch (G__24379) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24376.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async24380 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24380 = (function (f,blockable,meta24381){
this.f = f;
this.blockable = blockable;
this.meta24381 = meta24381;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24380.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24382,meta24381__$1){
var self__ = this;
var _24382__$1 = this;
return (new cljs.core.async.t_cljs$core$async24380(self__.f,self__.blockable,meta24381__$1));
});

cljs.core.async.t_cljs$core$async24380.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24382){
var self__ = this;
var _24382__$1 = this;
return self__.meta24381;
});

cljs.core.async.t_cljs$core$async24380.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async24380.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async24380.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async24380.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async24380.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta24381","meta24381",1011429741,null)], null);
});

cljs.core.async.t_cljs$core$async24380.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24380.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24380";

cljs.core.async.t_cljs$core$async24380.cljs$lang$ctorPrWriter = (function (this__21061__auto__,writer__21062__auto__,opt__21063__auto__){
return cljs.core._write.call(null,writer__21062__auto__,"cljs.core.async/t_cljs$core$async24380");
});

cljs.core.async.__GT_t_cljs$core$async24380 = (function cljs$core$async$__GT_t_cljs$core$async24380(f__$1,blockable__$1,meta24381){
return (new cljs.core.async.t_cljs$core$async24380(f__$1,blockable__$1,meta24381));
});

}

return (new cljs.core.async.t_cljs$core$async24380(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args24415 = [];
var len__21530__auto___24418 = arguments.length;
var i__21531__auto___24419 = (0);
while(true){
if((i__21531__auto___24419 < len__21530__auto___24418)){
args24415.push((arguments[i__21531__auto___24419]));

var G__24420 = (i__21531__auto___24419 + (1));
i__21531__auto___24419 = G__24420;
continue;
} else {
}
break;
}

var G__24417 = args24415.length;
switch (G__24417) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24415.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args24422 = [];
var len__21530__auto___24425 = arguments.length;
var i__21531__auto___24426 = (0);
while(true){
if((i__21531__auto___24426 < len__21530__auto___24425)){
args24422.push((arguments[i__21531__auto___24426]));

var G__24427 = (i__21531__auto___24426 + (1));
i__21531__auto___24426 = G__24427;
continue;
} else {
}
break;
}

var G__24424 = args24422.length;
switch (G__24424) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24422.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args24429 = [];
var len__21530__auto___24436 = arguments.length;
var i__21531__auto___24437 = (0);
while(true){
if((i__21531__auto___24437 < len__21530__auto___24436)){
args24429.push((arguments[i__21531__auto___24437]));

var G__24439 = (i__21531__auto___24437 + (1));
i__21531__auto___24437 = G__24439;
continue;
} else {
}
break;
}

var G__24431 = args24429.length;
switch (G__24431) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24429.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_24450 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_24450);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_24450,ret){
return (function (){
return fn1.call(null,val_24450);
});})(val_24450,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args24457 = [];
var len__21530__auto___24460 = arguments.length;
var i__21531__auto___24461 = (0);
while(true){
if((i__21531__auto___24461 < len__21530__auto___24460)){
args24457.push((arguments[i__21531__auto___24461]));

var G__24462 = (i__21531__auto___24461 + (1));
i__21531__auto___24461 = G__24462;
continue;
} else {
}
break;
}

var G__24459 = args24457.length;
switch (G__24459) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24457.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__21370__auto___24470 = n;
var x_24477 = (0);
while(true){
if((x_24477 < n__21370__auto___24470)){
(a[x_24477] = (0));

var G__24478 = (x_24477 + (1));
x_24477 = G__24478;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__24479 = (i + (1));
i = G__24479;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async24483 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24483 = (function (alt_flag,flag,meta24484){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta24484 = meta24484;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24483.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_24485,meta24484__$1){
var self__ = this;
var _24485__$1 = this;
return (new cljs.core.async.t_cljs$core$async24483(self__.alt_flag,self__.flag,meta24484__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async24483.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_24485){
var self__ = this;
var _24485__$1 = this;
return self__.meta24484;
});})(flag))
;

cljs.core.async.t_cljs$core$async24483.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async24483.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async24483.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async24483.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async24483.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta24484","meta24484",1160227628,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async24483.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24483.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24483";

cljs.core.async.t_cljs$core$async24483.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__21061__auto__,writer__21062__auto__,opt__21063__auto__){
return cljs.core._write.call(null,writer__21062__auto__,"cljs.core.async/t_cljs$core$async24483");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async24483 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async24483(alt_flag__$1,flag__$1,meta24484){
return (new cljs.core.async.t_cljs$core$async24483(alt_flag__$1,flag__$1,meta24484));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async24483(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async24491 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24491 = (function (alt_handler,flag,cb,meta24492){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta24492 = meta24492;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24491.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24493,meta24492__$1){
var self__ = this;
var _24493__$1 = this;
return (new cljs.core.async.t_cljs$core$async24491(self__.alt_handler,self__.flag,self__.cb,meta24492__$1));
});

cljs.core.async.t_cljs$core$async24491.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24493){
var self__ = this;
var _24493__$1 = this;
return self__.meta24492;
});

cljs.core.async.t_cljs$core$async24491.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async24491.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async24491.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async24491.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async24491.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta24492","meta24492",-1082040108,null)], null);
});

cljs.core.async.t_cljs$core$async24491.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24491.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24491";

cljs.core.async.t_cljs$core$async24491.cljs$lang$ctorPrWriter = (function (this__21061__auto__,writer__21062__auto__,opt__21063__auto__){
return cljs.core._write.call(null,writer__21062__auto__,"cljs.core.async/t_cljs$core$async24491");
});

cljs.core.async.__GT_t_cljs$core$async24491 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async24491(alt_handler__$1,flag__$1,cb__$1,meta24492){
return (new cljs.core.async.t_cljs$core$async24491(alt_handler__$1,flag__$1,cb__$1,meta24492));
});

}

return (new cljs.core.async.t_cljs$core$async24491(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__24498_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24498_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__24499_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24499_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__20455__auto__ = wport;
if(cljs.core.truth_(or__20455__auto__)){
return or__20455__auto__;
} else {
return port;
}
})()], null));
} else {
var G__24506 = (i + (1));
i = G__24506;
continue;
}
} else {
return null;
}
break;
}
})();
var or__20455__auto__ = ret;
if(cljs.core.truth_(or__20455__auto__)){
return or__20455__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__20443__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__20443__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__20443__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__21537__auto__ = [];
var len__21530__auto___24514 = arguments.length;
var i__21531__auto___24515 = (0);
while(true){
if((i__21531__auto___24515 < len__21530__auto___24514)){
args__21537__auto__.push((arguments[i__21531__auto___24515]));

var G__24516 = (i__21531__auto___24515 + (1));
i__21531__auto___24515 = G__24516;
continue;
} else {
}
break;
}

var argseq__21538__auto__ = ((((1) < args__21537__auto__.length))?(new cljs.core.IndexedSeq(args__21537__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21538__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__24511){
var map__24512 = p__24511;
var map__24512__$1 = ((((!((map__24512 == null)))?((((map__24512.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24512.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24512):map__24512);
var opts = map__24512__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq24509){
var G__24510 = cljs.core.first.call(null,seq24509);
var seq24509__$1 = cljs.core.next.call(null,seq24509);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__24510,seq24509__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args24520 = [];
var len__21530__auto___24575 = arguments.length;
var i__21531__auto___24576 = (0);
while(true){
if((i__21531__auto___24576 < len__21530__auto___24575)){
args24520.push((arguments[i__21531__auto___24576]));

var G__24577 = (i__21531__auto___24576 + (1));
i__21531__auto___24576 = G__24577;
continue;
} else {
}
break;
}

var G__24523 = args24520.length;
switch (G__24523) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24520.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__24323__auto___24579 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24323__auto___24579){
return (function (){
var f__24324__auto__ = (function (){var switch__24046__auto__ = ((function (c__24323__auto___24579){
return (function (state_24549){
var state_val_24550 = (state_24549[(1)]);
if((state_val_24550 === (7))){
var inst_24545 = (state_24549[(2)]);
var state_24549__$1 = state_24549;
var statearr_24551_24580 = state_24549__$1;
(statearr_24551_24580[(2)] = inst_24545);

(statearr_24551_24580[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24550 === (1))){
var state_24549__$1 = state_24549;
var statearr_24552_24583 = state_24549__$1;
(statearr_24552_24583[(2)] = null);

(statearr_24552_24583[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24550 === (4))){
var inst_24528 = (state_24549[(7)]);
var inst_24528__$1 = (state_24549[(2)]);
var inst_24529 = (inst_24528__$1 == null);
var state_24549__$1 = (function (){var statearr_24554 = state_24549;
(statearr_24554[(7)] = inst_24528__$1);

return statearr_24554;
})();
if(cljs.core.truth_(inst_24529)){
var statearr_24555_24584 = state_24549__$1;
(statearr_24555_24584[(1)] = (5));

} else {
var statearr_24556_24585 = state_24549__$1;
(statearr_24556_24585[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24550 === (13))){
var state_24549__$1 = state_24549;
var statearr_24558_24588 = state_24549__$1;
(statearr_24558_24588[(2)] = null);

(statearr_24558_24588[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24550 === (6))){
var inst_24528 = (state_24549[(7)]);
var state_24549__$1 = state_24549;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24549__$1,(11),to,inst_24528);
} else {
if((state_val_24550 === (3))){
var inst_24547 = (state_24549[(2)]);
var state_24549__$1 = state_24549;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24549__$1,inst_24547);
} else {
if((state_val_24550 === (12))){
var state_24549__$1 = state_24549;
var statearr_24559_24589 = state_24549__$1;
(statearr_24559_24589[(2)] = null);

(statearr_24559_24589[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24550 === (2))){
var state_24549__$1 = state_24549;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24549__$1,(4),from);
} else {
if((state_val_24550 === (11))){
var inst_24538 = (state_24549[(2)]);
var state_24549__$1 = state_24549;
if(cljs.core.truth_(inst_24538)){
var statearr_24560_24590 = state_24549__$1;
(statearr_24560_24590[(1)] = (12));

} else {
var statearr_24561_24591 = state_24549__$1;
(statearr_24561_24591[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24550 === (9))){
var state_24549__$1 = state_24549;
var statearr_24562_24592 = state_24549__$1;
(statearr_24562_24592[(2)] = null);

(statearr_24562_24592[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24550 === (5))){
var state_24549__$1 = state_24549;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24563_24593 = state_24549__$1;
(statearr_24563_24593[(1)] = (8));

} else {
var statearr_24564_24595 = state_24549__$1;
(statearr_24564_24595[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24550 === (14))){
var inst_24543 = (state_24549[(2)]);
var state_24549__$1 = state_24549;
var statearr_24565_24597 = state_24549__$1;
(statearr_24565_24597[(2)] = inst_24543);

(statearr_24565_24597[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24550 === (10))){
var inst_24535 = (state_24549[(2)]);
var state_24549__$1 = state_24549;
var statearr_24566_24600 = state_24549__$1;
(statearr_24566_24600[(2)] = inst_24535);

(statearr_24566_24600[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24550 === (8))){
var inst_24532 = cljs.core.async.close_BANG_.call(null,to);
var state_24549__$1 = state_24549;
var statearr_24567_24601 = state_24549__$1;
(statearr_24567_24601[(2)] = inst_24532);

(statearr_24567_24601[(1)] = (10));


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
});})(c__24323__auto___24579))
;
return ((function (switch__24046__auto__,c__24323__auto___24579){
return (function() {
var cljs$core$async$state_machine__24047__auto__ = null;
var cljs$core$async$state_machine__24047__auto____0 = (function (){
var statearr_24571 = [null,null,null,null,null,null,null,null];
(statearr_24571[(0)] = cljs$core$async$state_machine__24047__auto__);

(statearr_24571[(1)] = (1));

return statearr_24571;
});
var cljs$core$async$state_machine__24047__auto____1 = (function (state_24549){
while(true){
var ret_value__24048__auto__ = (function (){try{while(true){
var result__24049__auto__ = switch__24046__auto__.call(null,state_24549);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24049__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24049__auto__;
}
break;
}
}catch (e24572){if((e24572 instanceof Object)){
var ex__24050__auto__ = e24572;
var statearr_24573_24602 = state_24549;
(statearr_24573_24602[(5)] = ex__24050__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24549);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24572;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24603 = state_24549;
state_24549 = G__24603;
continue;
} else {
return ret_value__24048__auto__;
}
break;
}
});
cljs$core$async$state_machine__24047__auto__ = function(state_24549){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24047__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24047__auto____1.call(this,state_24549);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24047__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24047__auto____0;
cljs$core$async$state_machine__24047__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24047__auto____1;
return cljs$core$async$state_machine__24047__auto__;
})()
;})(switch__24046__auto__,c__24323__auto___24579))
})();
var state__24325__auto__ = (function (){var statearr_24574 = f__24324__auto__.call(null);
(statearr_24574[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24323__auto___24579);

return statearr_24574;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24325__auto__);
});})(c__24323__auto___24579))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__24799){
var vec__24800 = p__24799;
var v = cljs.core.nth.call(null,vec__24800,(0),null);
var p = cljs.core.nth.call(null,vec__24800,(1),null);
var job = vec__24800;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__24323__auto___24992 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24323__auto___24992,res,vec__24800,v,p,job,jobs,results){
return (function (){
var f__24324__auto__ = (function (){var switch__24046__auto__ = ((function (c__24323__auto___24992,res,vec__24800,v,p,job,jobs,results){
return (function (state_24807){
var state_val_24808 = (state_24807[(1)]);
if((state_val_24808 === (1))){
var state_24807__$1 = state_24807;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24807__$1,(2),res,v);
} else {
if((state_val_24808 === (2))){
var inst_24804 = (state_24807[(2)]);
var inst_24805 = cljs.core.async.close_BANG_.call(null,res);
var state_24807__$1 = (function (){var statearr_24809 = state_24807;
(statearr_24809[(7)] = inst_24804);

return statearr_24809;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24807__$1,inst_24805);
} else {
return null;
}
}
});})(c__24323__auto___24992,res,vec__24800,v,p,job,jobs,results))
;
return ((function (switch__24046__auto__,c__24323__auto___24992,res,vec__24800,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24047__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24047__auto____0 = (function (){
var statearr_24813 = [null,null,null,null,null,null,null,null];
(statearr_24813[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24047__auto__);

(statearr_24813[(1)] = (1));

return statearr_24813;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24047__auto____1 = (function (state_24807){
while(true){
var ret_value__24048__auto__ = (function (){try{while(true){
var result__24049__auto__ = switch__24046__auto__.call(null,state_24807);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24049__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24049__auto__;
}
break;
}
}catch (e24814){if((e24814 instanceof Object)){
var ex__24050__auto__ = e24814;
var statearr_24815_24997 = state_24807;
(statearr_24815_24997[(5)] = ex__24050__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24807);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24814;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24998 = state_24807;
state_24807 = G__24998;
continue;
} else {
return ret_value__24048__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24047__auto__ = function(state_24807){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24047__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24047__auto____1.call(this,state_24807);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24047__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24047__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24047__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24047__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24047__auto__;
})()
;})(switch__24046__auto__,c__24323__auto___24992,res,vec__24800,v,p,job,jobs,results))
})();
var state__24325__auto__ = (function (){var statearr_24816 = f__24324__auto__.call(null);
(statearr_24816[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24323__auto___24992);

return statearr_24816;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24325__auto__);
});})(c__24323__auto___24992,res,vec__24800,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__24817){
var vec__24818 = p__24817;
var v = cljs.core.nth.call(null,vec__24818,(0),null);
var p = cljs.core.nth.call(null,vec__24818,(1),null);
var job = vec__24818;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__21370__auto___25003 = n;
var __25004 = (0);
while(true){
if((__25004 < n__21370__auto___25003)){
var G__24821_25005 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__24821_25005) {
case "compute":
var c__24323__auto___25007 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__25004,c__24323__auto___25007,G__24821_25005,n__21370__auto___25003,jobs,results,process,async){
return (function (){
var f__24324__auto__ = (function (){var switch__24046__auto__ = ((function (__25004,c__24323__auto___25007,G__24821_25005,n__21370__auto___25003,jobs,results,process,async){
return (function (state_24834){
var state_val_24835 = (state_24834[(1)]);
if((state_val_24835 === (1))){
var state_24834__$1 = state_24834;
var statearr_24836_25008 = state_24834__$1;
(statearr_24836_25008[(2)] = null);

(statearr_24836_25008[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24835 === (2))){
var state_24834__$1 = state_24834;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24834__$1,(4),jobs);
} else {
if((state_val_24835 === (3))){
var inst_24832 = (state_24834[(2)]);
var state_24834__$1 = state_24834;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24834__$1,inst_24832);
} else {
if((state_val_24835 === (4))){
var inst_24824 = (state_24834[(2)]);
var inst_24825 = process.call(null,inst_24824);
var state_24834__$1 = state_24834;
if(cljs.core.truth_(inst_24825)){
var statearr_24838_25010 = state_24834__$1;
(statearr_24838_25010[(1)] = (5));

} else {
var statearr_24840_25011 = state_24834__$1;
(statearr_24840_25011[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24835 === (5))){
var state_24834__$1 = state_24834;
var statearr_24841_25013 = state_24834__$1;
(statearr_24841_25013[(2)] = null);

(statearr_24841_25013[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24835 === (6))){
var state_24834__$1 = state_24834;
var statearr_24842_25015 = state_24834__$1;
(statearr_24842_25015[(2)] = null);

(statearr_24842_25015[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24835 === (7))){
var inst_24830 = (state_24834[(2)]);
var state_24834__$1 = state_24834;
var statearr_24843_25019 = state_24834__$1;
(statearr_24843_25019[(2)] = inst_24830);

(statearr_24843_25019[(1)] = (3));


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
});})(__25004,c__24323__auto___25007,G__24821_25005,n__21370__auto___25003,jobs,results,process,async))
;
return ((function (__25004,switch__24046__auto__,c__24323__auto___25007,G__24821_25005,n__21370__auto___25003,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24047__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24047__auto____0 = (function (){
var statearr_24848 = [null,null,null,null,null,null,null];
(statearr_24848[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24047__auto__);

(statearr_24848[(1)] = (1));

return statearr_24848;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24047__auto____1 = (function (state_24834){
while(true){
var ret_value__24048__auto__ = (function (){try{while(true){
var result__24049__auto__ = switch__24046__auto__.call(null,state_24834);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24049__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24049__auto__;
}
break;
}
}catch (e24849){if((e24849 instanceof Object)){
var ex__24050__auto__ = e24849;
var statearr_24850_25024 = state_24834;
(statearr_24850_25024[(5)] = ex__24050__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24834);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24849;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25025 = state_24834;
state_24834 = G__25025;
continue;
} else {
return ret_value__24048__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24047__auto__ = function(state_24834){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24047__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24047__auto____1.call(this,state_24834);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24047__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24047__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24047__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24047__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24047__auto__;
})()
;})(__25004,switch__24046__auto__,c__24323__auto___25007,G__24821_25005,n__21370__auto___25003,jobs,results,process,async))
})();
var state__24325__auto__ = (function (){var statearr_24851 = f__24324__auto__.call(null);
(statearr_24851[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24323__auto___25007);

return statearr_24851;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24325__auto__);
});})(__25004,c__24323__auto___25007,G__24821_25005,n__21370__auto___25003,jobs,results,process,async))
);


break;
case "async":
var c__24323__auto___25026 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__25004,c__24323__auto___25026,G__24821_25005,n__21370__auto___25003,jobs,results,process,async){
return (function (){
var f__24324__auto__ = (function (){var switch__24046__auto__ = ((function (__25004,c__24323__auto___25026,G__24821_25005,n__21370__auto___25003,jobs,results,process,async){
return (function (state_24864){
var state_val_24865 = (state_24864[(1)]);
if((state_val_24865 === (1))){
var state_24864__$1 = state_24864;
var statearr_24866_25028 = state_24864__$1;
(statearr_24866_25028[(2)] = null);

(statearr_24866_25028[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24865 === (2))){
var state_24864__$1 = state_24864;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24864__$1,(4),jobs);
} else {
if((state_val_24865 === (3))){
var inst_24862 = (state_24864[(2)]);
var state_24864__$1 = state_24864;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24864__$1,inst_24862);
} else {
if((state_val_24865 === (4))){
var inst_24854 = (state_24864[(2)]);
var inst_24855 = async.call(null,inst_24854);
var state_24864__$1 = state_24864;
if(cljs.core.truth_(inst_24855)){
var statearr_24868_25031 = state_24864__$1;
(statearr_24868_25031[(1)] = (5));

} else {
var statearr_24869_25034 = state_24864__$1;
(statearr_24869_25034[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24865 === (5))){
var state_24864__$1 = state_24864;
var statearr_24871_25036 = state_24864__$1;
(statearr_24871_25036[(2)] = null);

(statearr_24871_25036[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24865 === (6))){
var state_24864__$1 = state_24864;
var statearr_24872_25038 = state_24864__$1;
(statearr_24872_25038[(2)] = null);

(statearr_24872_25038[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24865 === (7))){
var inst_24860 = (state_24864[(2)]);
var state_24864__$1 = state_24864;
var statearr_24873_25039 = state_24864__$1;
(statearr_24873_25039[(2)] = inst_24860);

(statearr_24873_25039[(1)] = (3));


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
});})(__25004,c__24323__auto___25026,G__24821_25005,n__21370__auto___25003,jobs,results,process,async))
;
return ((function (__25004,switch__24046__auto__,c__24323__auto___25026,G__24821_25005,n__21370__auto___25003,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24047__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24047__auto____0 = (function (){
var statearr_24878 = [null,null,null,null,null,null,null];
(statearr_24878[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24047__auto__);

(statearr_24878[(1)] = (1));

return statearr_24878;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24047__auto____1 = (function (state_24864){
while(true){
var ret_value__24048__auto__ = (function (){try{while(true){
var result__24049__auto__ = switch__24046__auto__.call(null,state_24864);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24049__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24049__auto__;
}
break;
}
}catch (e24879){if((e24879 instanceof Object)){
var ex__24050__auto__ = e24879;
var statearr_24880_25040 = state_24864;
(statearr_24880_25040[(5)] = ex__24050__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24864);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24879;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25041 = state_24864;
state_24864 = G__25041;
continue;
} else {
return ret_value__24048__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24047__auto__ = function(state_24864){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24047__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24047__auto____1.call(this,state_24864);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24047__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24047__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24047__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24047__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24047__auto__;
})()
;})(__25004,switch__24046__auto__,c__24323__auto___25026,G__24821_25005,n__21370__auto___25003,jobs,results,process,async))
})();
var state__24325__auto__ = (function (){var statearr_24881 = f__24324__auto__.call(null);
(statearr_24881[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24323__auto___25026);

return statearr_24881;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24325__auto__);
});})(__25004,c__24323__auto___25026,G__24821_25005,n__21370__auto___25003,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__25042 = (__25004 + (1));
__25004 = G__25042;
continue;
} else {
}
break;
}

var c__24323__auto___25043 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24323__auto___25043,jobs,results,process,async){
return (function (){
var f__24324__auto__ = (function (){var switch__24046__auto__ = ((function (c__24323__auto___25043,jobs,results,process,async){
return (function (state_24903){
var state_val_24904 = (state_24903[(1)]);
if((state_val_24904 === (1))){
var state_24903__$1 = state_24903;
var statearr_24905_25044 = state_24903__$1;
(statearr_24905_25044[(2)] = null);

(statearr_24905_25044[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24904 === (2))){
var state_24903__$1 = state_24903;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24903__$1,(4),from);
} else {
if((state_val_24904 === (3))){
var inst_24901 = (state_24903[(2)]);
var state_24903__$1 = state_24903;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24903__$1,inst_24901);
} else {
if((state_val_24904 === (4))){
var inst_24884 = (state_24903[(7)]);
var inst_24884__$1 = (state_24903[(2)]);
var inst_24885 = (inst_24884__$1 == null);
var state_24903__$1 = (function (){var statearr_24906 = state_24903;
(statearr_24906[(7)] = inst_24884__$1);

return statearr_24906;
})();
if(cljs.core.truth_(inst_24885)){
var statearr_24907_25045 = state_24903__$1;
(statearr_24907_25045[(1)] = (5));

} else {
var statearr_24908_25046 = state_24903__$1;
(statearr_24908_25046[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24904 === (5))){
var inst_24887 = cljs.core.async.close_BANG_.call(null,jobs);
var state_24903__$1 = state_24903;
var statearr_24909_25047 = state_24903__$1;
(statearr_24909_25047[(2)] = inst_24887);

(statearr_24909_25047[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24904 === (6))){
var inst_24889 = (state_24903[(8)]);
var inst_24884 = (state_24903[(7)]);
var inst_24889__$1 = cljs.core.async.chan.call(null,(1));
var inst_24890 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_24891 = [inst_24884,inst_24889__$1];
var inst_24892 = (new cljs.core.PersistentVector(null,2,(5),inst_24890,inst_24891,null));
var state_24903__$1 = (function (){var statearr_24910 = state_24903;
(statearr_24910[(8)] = inst_24889__$1);

return statearr_24910;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24903__$1,(8),jobs,inst_24892);
} else {
if((state_val_24904 === (7))){
var inst_24899 = (state_24903[(2)]);
var state_24903__$1 = state_24903;
var statearr_24911_25048 = state_24903__$1;
(statearr_24911_25048[(2)] = inst_24899);

(statearr_24911_25048[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24904 === (8))){
var inst_24889 = (state_24903[(8)]);
var inst_24894 = (state_24903[(2)]);
var state_24903__$1 = (function (){var statearr_24912 = state_24903;
(statearr_24912[(9)] = inst_24894);

return statearr_24912;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24903__$1,(9),results,inst_24889);
} else {
if((state_val_24904 === (9))){
var inst_24896 = (state_24903[(2)]);
var state_24903__$1 = (function (){var statearr_24913 = state_24903;
(statearr_24913[(10)] = inst_24896);

return statearr_24913;
})();
var statearr_24914_25049 = state_24903__$1;
(statearr_24914_25049[(2)] = null);

(statearr_24914_25049[(1)] = (2));


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
});})(c__24323__auto___25043,jobs,results,process,async))
;
return ((function (switch__24046__auto__,c__24323__auto___25043,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24047__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24047__auto____0 = (function (){
var statearr_24918 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24918[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24047__auto__);

(statearr_24918[(1)] = (1));

return statearr_24918;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24047__auto____1 = (function (state_24903){
while(true){
var ret_value__24048__auto__ = (function (){try{while(true){
var result__24049__auto__ = switch__24046__auto__.call(null,state_24903);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24049__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24049__auto__;
}
break;
}
}catch (e24919){if((e24919 instanceof Object)){
var ex__24050__auto__ = e24919;
var statearr_24920_25050 = state_24903;
(statearr_24920_25050[(5)] = ex__24050__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24903);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24919;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25051 = state_24903;
state_24903 = G__25051;
continue;
} else {
return ret_value__24048__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24047__auto__ = function(state_24903){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24047__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24047__auto____1.call(this,state_24903);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24047__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24047__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24047__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24047__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24047__auto__;
})()
;})(switch__24046__auto__,c__24323__auto___25043,jobs,results,process,async))
})();
var state__24325__auto__ = (function (){var statearr_24921 = f__24324__auto__.call(null);
(statearr_24921[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24323__auto___25043);

return statearr_24921;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24325__auto__);
});})(c__24323__auto___25043,jobs,results,process,async))
);


var c__24323__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24323__auto__,jobs,results,process,async){
return (function (){
var f__24324__auto__ = (function (){var switch__24046__auto__ = ((function (c__24323__auto__,jobs,results,process,async){
return (function (state_24959){
var state_val_24960 = (state_24959[(1)]);
if((state_val_24960 === (7))){
var inst_24955 = (state_24959[(2)]);
var state_24959__$1 = state_24959;
var statearr_24961_25052 = state_24959__$1;
(statearr_24961_25052[(2)] = inst_24955);

(statearr_24961_25052[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24960 === (20))){
var state_24959__$1 = state_24959;
var statearr_24962_25053 = state_24959__$1;
(statearr_24962_25053[(2)] = null);

(statearr_24962_25053[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24960 === (1))){
var state_24959__$1 = state_24959;
var statearr_24963_25054 = state_24959__$1;
(statearr_24963_25054[(2)] = null);

(statearr_24963_25054[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24960 === (4))){
var inst_24924 = (state_24959[(7)]);
var inst_24924__$1 = (state_24959[(2)]);
var inst_24925 = (inst_24924__$1 == null);
var state_24959__$1 = (function (){var statearr_24964 = state_24959;
(statearr_24964[(7)] = inst_24924__$1);

return statearr_24964;
})();
if(cljs.core.truth_(inst_24925)){
var statearr_24965_25055 = state_24959__$1;
(statearr_24965_25055[(1)] = (5));

} else {
var statearr_24966_25056 = state_24959__$1;
(statearr_24966_25056[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24960 === (15))){
var inst_24937 = (state_24959[(8)]);
var state_24959__$1 = state_24959;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24959__$1,(18),to,inst_24937);
} else {
if((state_val_24960 === (21))){
var inst_24950 = (state_24959[(2)]);
var state_24959__$1 = state_24959;
var statearr_24967_25057 = state_24959__$1;
(statearr_24967_25057[(2)] = inst_24950);

(statearr_24967_25057[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24960 === (13))){
var inst_24952 = (state_24959[(2)]);
var state_24959__$1 = (function (){var statearr_24968 = state_24959;
(statearr_24968[(9)] = inst_24952);

return statearr_24968;
})();
var statearr_24969_25058 = state_24959__$1;
(statearr_24969_25058[(2)] = null);

(statearr_24969_25058[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24960 === (6))){
var inst_24924 = (state_24959[(7)]);
var state_24959__$1 = state_24959;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24959__$1,(11),inst_24924);
} else {
if((state_val_24960 === (17))){
var inst_24945 = (state_24959[(2)]);
var state_24959__$1 = state_24959;
if(cljs.core.truth_(inst_24945)){
var statearr_24970_25059 = state_24959__$1;
(statearr_24970_25059[(1)] = (19));

} else {
var statearr_24971_25060 = state_24959__$1;
(statearr_24971_25060[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24960 === (3))){
var inst_24957 = (state_24959[(2)]);
var state_24959__$1 = state_24959;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24959__$1,inst_24957);
} else {
if((state_val_24960 === (12))){
var inst_24934 = (state_24959[(10)]);
var state_24959__$1 = state_24959;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24959__$1,(14),inst_24934);
} else {
if((state_val_24960 === (2))){
var state_24959__$1 = state_24959;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24959__$1,(4),results);
} else {
if((state_val_24960 === (19))){
var state_24959__$1 = state_24959;
var statearr_24972_25061 = state_24959__$1;
(statearr_24972_25061[(2)] = null);

(statearr_24972_25061[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24960 === (11))){
var inst_24934 = (state_24959[(2)]);
var state_24959__$1 = (function (){var statearr_24973 = state_24959;
(statearr_24973[(10)] = inst_24934);

return statearr_24973;
})();
var statearr_24974_25062 = state_24959__$1;
(statearr_24974_25062[(2)] = null);

(statearr_24974_25062[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24960 === (9))){
var state_24959__$1 = state_24959;
var statearr_24975_25063 = state_24959__$1;
(statearr_24975_25063[(2)] = null);

(statearr_24975_25063[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24960 === (5))){
var state_24959__$1 = state_24959;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24976_25064 = state_24959__$1;
(statearr_24976_25064[(1)] = (8));

} else {
var statearr_24977_25065 = state_24959__$1;
(statearr_24977_25065[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24960 === (14))){
var inst_24939 = (state_24959[(11)]);
var inst_24937 = (state_24959[(8)]);
var inst_24937__$1 = (state_24959[(2)]);
var inst_24938 = (inst_24937__$1 == null);
var inst_24939__$1 = cljs.core.not.call(null,inst_24938);
var state_24959__$1 = (function (){var statearr_24978 = state_24959;
(statearr_24978[(11)] = inst_24939__$1);

(statearr_24978[(8)] = inst_24937__$1);

return statearr_24978;
})();
if(inst_24939__$1){
var statearr_24979_25066 = state_24959__$1;
(statearr_24979_25066[(1)] = (15));

} else {
var statearr_24980_25067 = state_24959__$1;
(statearr_24980_25067[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24960 === (16))){
var inst_24939 = (state_24959[(11)]);
var state_24959__$1 = state_24959;
var statearr_24981_25068 = state_24959__$1;
(statearr_24981_25068[(2)] = inst_24939);

(statearr_24981_25068[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24960 === (10))){
var inst_24931 = (state_24959[(2)]);
var state_24959__$1 = state_24959;
var statearr_24982_25069 = state_24959__$1;
(statearr_24982_25069[(2)] = inst_24931);

(statearr_24982_25069[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24960 === (18))){
var inst_24942 = (state_24959[(2)]);
var state_24959__$1 = state_24959;
var statearr_24983_25070 = state_24959__$1;
(statearr_24983_25070[(2)] = inst_24942);

(statearr_24983_25070[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24960 === (8))){
var inst_24928 = cljs.core.async.close_BANG_.call(null,to);
var state_24959__$1 = state_24959;
var statearr_24984_25071 = state_24959__$1;
(statearr_24984_25071[(2)] = inst_24928);

(statearr_24984_25071[(1)] = (10));


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
});})(c__24323__auto__,jobs,results,process,async))
;
return ((function (switch__24046__auto__,c__24323__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24047__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24047__auto____0 = (function (){
var statearr_24988 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24988[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24047__auto__);

(statearr_24988[(1)] = (1));

return statearr_24988;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24047__auto____1 = (function (state_24959){
while(true){
var ret_value__24048__auto__ = (function (){try{while(true){
var result__24049__auto__ = switch__24046__auto__.call(null,state_24959);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24049__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24049__auto__;
}
break;
}
}catch (e24989){if((e24989 instanceof Object)){
var ex__24050__auto__ = e24989;
var statearr_24990_25072 = state_24959;
(statearr_24990_25072[(5)] = ex__24050__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24959);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24989;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25073 = state_24959;
state_24959 = G__25073;
continue;
} else {
return ret_value__24048__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24047__auto__ = function(state_24959){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24047__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24047__auto____1.call(this,state_24959);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24047__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24047__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24047__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24047__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24047__auto__;
})()
;})(switch__24046__auto__,c__24323__auto__,jobs,results,process,async))
})();
var state__24325__auto__ = (function (){var statearr_24991 = f__24324__auto__.call(null);
(statearr_24991[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24323__auto__);

return statearr_24991;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24325__auto__);
});})(c__24323__auto__,jobs,results,process,async))
);

return c__24323__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args25074 = [];
var len__21530__auto___25077 = arguments.length;
var i__21531__auto___25078 = (0);
while(true){
if((i__21531__auto___25078 < len__21530__auto___25077)){
args25074.push((arguments[i__21531__auto___25078]));

var G__25079 = (i__21531__auto___25078 + (1));
i__21531__auto___25078 = G__25079;
continue;
} else {
}
break;
}

var G__25076 = args25074.length;
switch (G__25076) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25074.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args25083 = [];
var len__21530__auto___25095 = arguments.length;
var i__21531__auto___25096 = (0);
while(true){
if((i__21531__auto___25096 < len__21530__auto___25095)){
args25083.push((arguments[i__21531__auto___25096]));

var G__25098 = (i__21531__auto___25096 + (1));
i__21531__auto___25096 = G__25098;
continue;
} else {
}
break;
}

var G__25089 = args25083.length;
switch (G__25089) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25083.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args25116 = [];
var len__21530__auto___25197 = arguments.length;
var i__21531__auto___25200 = (0);
while(true){
if((i__21531__auto___25200 < len__21530__auto___25197)){
args25116.push((arguments[i__21531__auto___25200]));

var G__25201 = (i__21531__auto___25200 + (1));
i__21531__auto___25200 = G__25201;
continue;
} else {
}
break;
}

var G__25118 = args25116.length;
switch (G__25118) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25116.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__24323__auto___25213 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24323__auto___25213,tc,fc){
return (function (){
var f__24324__auto__ = (function (){var switch__24046__auto__ = ((function (c__24323__auto___25213,tc,fc){
return (function (state_25149){
var state_val_25150 = (state_25149[(1)]);
if((state_val_25150 === (7))){
var inst_25145 = (state_25149[(2)]);
var state_25149__$1 = state_25149;
var statearr_25153_25216 = state_25149__$1;
(statearr_25153_25216[(2)] = inst_25145);

(statearr_25153_25216[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25150 === (1))){
var state_25149__$1 = state_25149;
var statearr_25156_25217 = state_25149__$1;
(statearr_25156_25217[(2)] = null);

(statearr_25156_25217[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25150 === (4))){
var inst_25125 = (state_25149[(7)]);
var inst_25125__$1 = (state_25149[(2)]);
var inst_25126 = (inst_25125__$1 == null);
var state_25149__$1 = (function (){var statearr_25157 = state_25149;
(statearr_25157[(7)] = inst_25125__$1);

return statearr_25157;
})();
if(cljs.core.truth_(inst_25126)){
var statearr_25159_25218 = state_25149__$1;
(statearr_25159_25218[(1)] = (5));

} else {
var statearr_25160_25219 = state_25149__$1;
(statearr_25160_25219[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25150 === (13))){
var state_25149__$1 = state_25149;
var statearr_25161_25220 = state_25149__$1;
(statearr_25161_25220[(2)] = null);

(statearr_25161_25220[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25150 === (6))){
var inst_25125 = (state_25149[(7)]);
var inst_25131 = p.call(null,inst_25125);
var state_25149__$1 = state_25149;
if(cljs.core.truth_(inst_25131)){
var statearr_25164_25221 = state_25149__$1;
(statearr_25164_25221[(1)] = (9));

} else {
var statearr_25165_25222 = state_25149__$1;
(statearr_25165_25222[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25150 === (3))){
var inst_25147 = (state_25149[(2)]);
var state_25149__$1 = state_25149;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25149__$1,inst_25147);
} else {
if((state_val_25150 === (12))){
var state_25149__$1 = state_25149;
var statearr_25168_25223 = state_25149__$1;
(statearr_25168_25223[(2)] = null);

(statearr_25168_25223[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25150 === (2))){
var state_25149__$1 = state_25149;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25149__$1,(4),ch);
} else {
if((state_val_25150 === (11))){
var inst_25125 = (state_25149[(7)]);
var inst_25135 = (state_25149[(2)]);
var state_25149__$1 = state_25149;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25149__$1,(8),inst_25135,inst_25125);
} else {
if((state_val_25150 === (9))){
var state_25149__$1 = state_25149;
var statearr_25170_25226 = state_25149__$1;
(statearr_25170_25226[(2)] = tc);

(statearr_25170_25226[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25150 === (5))){
var inst_25128 = cljs.core.async.close_BANG_.call(null,tc);
var inst_25129 = cljs.core.async.close_BANG_.call(null,fc);
var state_25149__$1 = (function (){var statearr_25171 = state_25149;
(statearr_25171[(8)] = inst_25128);

return statearr_25171;
})();
var statearr_25172_25229 = state_25149__$1;
(statearr_25172_25229[(2)] = inst_25129);

(statearr_25172_25229[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25150 === (14))){
var inst_25142 = (state_25149[(2)]);
var state_25149__$1 = state_25149;
var statearr_25175_25231 = state_25149__$1;
(statearr_25175_25231[(2)] = inst_25142);

(statearr_25175_25231[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25150 === (10))){
var state_25149__$1 = state_25149;
var statearr_25178_25232 = state_25149__$1;
(statearr_25178_25232[(2)] = fc);

(statearr_25178_25232[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25150 === (8))){
var inst_25137 = (state_25149[(2)]);
var state_25149__$1 = state_25149;
if(cljs.core.truth_(inst_25137)){
var statearr_25179_25233 = state_25149__$1;
(statearr_25179_25233[(1)] = (12));

} else {
var statearr_25180_25235 = state_25149__$1;
(statearr_25180_25235[(1)] = (13));

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
});})(c__24323__auto___25213,tc,fc))
;
return ((function (switch__24046__auto__,c__24323__auto___25213,tc,fc){
return (function() {
var cljs$core$async$state_machine__24047__auto__ = null;
var cljs$core$async$state_machine__24047__auto____0 = (function (){
var statearr_25187 = [null,null,null,null,null,null,null,null,null];
(statearr_25187[(0)] = cljs$core$async$state_machine__24047__auto__);

(statearr_25187[(1)] = (1));

return statearr_25187;
});
var cljs$core$async$state_machine__24047__auto____1 = (function (state_25149){
while(true){
var ret_value__24048__auto__ = (function (){try{while(true){
var result__24049__auto__ = switch__24046__auto__.call(null,state_25149);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24049__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24049__auto__;
}
break;
}
}catch (e25190){if((e25190 instanceof Object)){
var ex__24050__auto__ = e25190;
var statearr_25191_25239 = state_25149;
(statearr_25191_25239[(5)] = ex__24050__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25149);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25190;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25240 = state_25149;
state_25149 = G__25240;
continue;
} else {
return ret_value__24048__auto__;
}
break;
}
});
cljs$core$async$state_machine__24047__auto__ = function(state_25149){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24047__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24047__auto____1.call(this,state_25149);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24047__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24047__auto____0;
cljs$core$async$state_machine__24047__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24047__auto____1;
return cljs$core$async$state_machine__24047__auto__;
})()
;})(switch__24046__auto__,c__24323__auto___25213,tc,fc))
})();
var state__24325__auto__ = (function (){var statearr_25194 = f__24324__auto__.call(null);
(statearr_25194[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24323__auto___25213);

return statearr_25194;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24325__auto__);
});})(c__24323__auto___25213,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__24323__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24323__auto__){
return (function (){
var f__24324__auto__ = (function (){var switch__24046__auto__ = ((function (c__24323__auto__){
return (function (state_25308){
var state_val_25309 = (state_25308[(1)]);
if((state_val_25309 === (7))){
var inst_25304 = (state_25308[(2)]);
var state_25308__$1 = state_25308;
var statearr_25312_25341 = state_25308__$1;
(statearr_25312_25341[(2)] = inst_25304);

(statearr_25312_25341[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25309 === (1))){
var inst_25288 = init;
var state_25308__$1 = (function (){var statearr_25313 = state_25308;
(statearr_25313[(7)] = inst_25288);

return statearr_25313;
})();
var statearr_25314_25343 = state_25308__$1;
(statearr_25314_25343[(2)] = null);

(statearr_25314_25343[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25309 === (4))){
var inst_25291 = (state_25308[(8)]);
var inst_25291__$1 = (state_25308[(2)]);
var inst_25292 = (inst_25291__$1 == null);
var state_25308__$1 = (function (){var statearr_25315 = state_25308;
(statearr_25315[(8)] = inst_25291__$1);

return statearr_25315;
})();
if(cljs.core.truth_(inst_25292)){
var statearr_25316_25344 = state_25308__$1;
(statearr_25316_25344[(1)] = (5));

} else {
var statearr_25317_25346 = state_25308__$1;
(statearr_25317_25346[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25309 === (6))){
var inst_25291 = (state_25308[(8)]);
var inst_25288 = (state_25308[(7)]);
var inst_25295 = (state_25308[(9)]);
var inst_25295__$1 = f.call(null,inst_25288,inst_25291);
var inst_25296 = cljs.core.reduced_QMARK_.call(null,inst_25295__$1);
var state_25308__$1 = (function (){var statearr_25318 = state_25308;
(statearr_25318[(9)] = inst_25295__$1);

return statearr_25318;
})();
if(inst_25296){
var statearr_25319_25349 = state_25308__$1;
(statearr_25319_25349[(1)] = (8));

} else {
var statearr_25320_25354 = state_25308__$1;
(statearr_25320_25354[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25309 === (3))){
var inst_25306 = (state_25308[(2)]);
var state_25308__$1 = state_25308;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25308__$1,inst_25306);
} else {
if((state_val_25309 === (2))){
var state_25308__$1 = state_25308;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25308__$1,(4),ch);
} else {
if((state_val_25309 === (9))){
var inst_25295 = (state_25308[(9)]);
var inst_25288 = inst_25295;
var state_25308__$1 = (function (){var statearr_25323 = state_25308;
(statearr_25323[(7)] = inst_25288);

return statearr_25323;
})();
var statearr_25324_25365 = state_25308__$1;
(statearr_25324_25365[(2)] = null);

(statearr_25324_25365[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25309 === (5))){
var inst_25288 = (state_25308[(7)]);
var state_25308__$1 = state_25308;
var statearr_25325_25369 = state_25308__$1;
(statearr_25325_25369[(2)] = inst_25288);

(statearr_25325_25369[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25309 === (10))){
var inst_25302 = (state_25308[(2)]);
var state_25308__$1 = state_25308;
var statearr_25326_25371 = state_25308__$1;
(statearr_25326_25371[(2)] = inst_25302);

(statearr_25326_25371[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25309 === (8))){
var inst_25295 = (state_25308[(9)]);
var inst_25298 = cljs.core.deref.call(null,inst_25295);
var state_25308__$1 = state_25308;
var statearr_25327_25372 = state_25308__$1;
(statearr_25327_25372[(2)] = inst_25298);

(statearr_25327_25372[(1)] = (10));


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
});})(c__24323__auto__))
;
return ((function (switch__24046__auto__,c__24323__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__24047__auto__ = null;
var cljs$core$async$reduce_$_state_machine__24047__auto____0 = (function (){
var statearr_25332 = [null,null,null,null,null,null,null,null,null,null];
(statearr_25332[(0)] = cljs$core$async$reduce_$_state_machine__24047__auto__);

(statearr_25332[(1)] = (1));

return statearr_25332;
});
var cljs$core$async$reduce_$_state_machine__24047__auto____1 = (function (state_25308){
while(true){
var ret_value__24048__auto__ = (function (){try{while(true){
var result__24049__auto__ = switch__24046__auto__.call(null,state_25308);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24049__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24049__auto__;
}
break;
}
}catch (e25333){if((e25333 instanceof Object)){
var ex__24050__auto__ = e25333;
var statearr_25335_25382 = state_25308;
(statearr_25335_25382[(5)] = ex__24050__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25308);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25333;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25390 = state_25308;
state_25308 = G__25390;
continue;
} else {
return ret_value__24048__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__24047__auto__ = function(state_25308){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__24047__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__24047__auto____1.call(this,state_25308);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__24047__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__24047__auto____0;
cljs$core$async$reduce_$_state_machine__24047__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__24047__auto____1;
return cljs$core$async$reduce_$_state_machine__24047__auto__;
})()
;})(switch__24046__auto__,c__24323__auto__))
})();
var state__24325__auto__ = (function (){var statearr_25336 = f__24324__auto__.call(null);
(statearr_25336[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24323__auto__);

return statearr_25336;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24325__auto__);
});})(c__24323__auto__))
);

return c__24323__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args25396 = [];
var len__21530__auto___25473 = arguments.length;
var i__21531__auto___25474 = (0);
while(true){
if((i__21531__auto___25474 < len__21530__auto___25473)){
args25396.push((arguments[i__21531__auto___25474]));

var G__25475 = (i__21531__auto___25474 + (1));
i__21531__auto___25474 = G__25475;
continue;
} else {
}
break;
}

var G__25405 = args25396.length;
switch (G__25405) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25396.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__24323__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24323__auto__){
return (function (){
var f__24324__auto__ = (function (){var switch__24046__auto__ = ((function (c__24323__auto__){
return (function (state_25435){
var state_val_25436 = (state_25435[(1)]);
if((state_val_25436 === (7))){
var inst_25416 = (state_25435[(2)]);
var state_25435__$1 = state_25435;
var statearr_25443_25480 = state_25435__$1;
(statearr_25443_25480[(2)] = inst_25416);

(statearr_25443_25480[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25436 === (1))){
var inst_25410 = cljs.core.seq.call(null,coll);
var inst_25411 = inst_25410;
var state_25435__$1 = (function (){var statearr_25444 = state_25435;
(statearr_25444[(7)] = inst_25411);

return statearr_25444;
})();
var statearr_25445_25481 = state_25435__$1;
(statearr_25445_25481[(2)] = null);

(statearr_25445_25481[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25436 === (4))){
var inst_25411 = (state_25435[(7)]);
var inst_25414 = cljs.core.first.call(null,inst_25411);
var state_25435__$1 = state_25435;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25435__$1,(7),ch,inst_25414);
} else {
if((state_val_25436 === (13))){
var inst_25429 = (state_25435[(2)]);
var state_25435__$1 = state_25435;
var statearr_25449_25485 = state_25435__$1;
(statearr_25449_25485[(2)] = inst_25429);

(statearr_25449_25485[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25436 === (6))){
var inst_25419 = (state_25435[(2)]);
var state_25435__$1 = state_25435;
if(cljs.core.truth_(inst_25419)){
var statearr_25450_25486 = state_25435__$1;
(statearr_25450_25486[(1)] = (8));

} else {
var statearr_25451_25487 = state_25435__$1;
(statearr_25451_25487[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25436 === (3))){
var inst_25433 = (state_25435[(2)]);
var state_25435__$1 = state_25435;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25435__$1,inst_25433);
} else {
if((state_val_25436 === (12))){
var state_25435__$1 = state_25435;
var statearr_25452_25491 = state_25435__$1;
(statearr_25452_25491[(2)] = null);

(statearr_25452_25491[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25436 === (2))){
var inst_25411 = (state_25435[(7)]);
var state_25435__$1 = state_25435;
if(cljs.core.truth_(inst_25411)){
var statearr_25457_25492 = state_25435__$1;
(statearr_25457_25492[(1)] = (4));

} else {
var statearr_25458_25493 = state_25435__$1;
(statearr_25458_25493[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25436 === (11))){
var inst_25426 = cljs.core.async.close_BANG_.call(null,ch);
var state_25435__$1 = state_25435;
var statearr_25459_25494 = state_25435__$1;
(statearr_25459_25494[(2)] = inst_25426);

(statearr_25459_25494[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25436 === (9))){
var state_25435__$1 = state_25435;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25460_25495 = state_25435__$1;
(statearr_25460_25495[(1)] = (11));

} else {
var statearr_25461_25496 = state_25435__$1;
(statearr_25461_25496[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25436 === (5))){
var inst_25411 = (state_25435[(7)]);
var state_25435__$1 = state_25435;
var statearr_25462_25497 = state_25435__$1;
(statearr_25462_25497[(2)] = inst_25411);

(statearr_25462_25497[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25436 === (10))){
var inst_25431 = (state_25435[(2)]);
var state_25435__$1 = state_25435;
var statearr_25463_25498 = state_25435__$1;
(statearr_25463_25498[(2)] = inst_25431);

(statearr_25463_25498[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25436 === (8))){
var inst_25411 = (state_25435[(7)]);
var inst_25422 = cljs.core.next.call(null,inst_25411);
var inst_25411__$1 = inst_25422;
var state_25435__$1 = (function (){var statearr_25464 = state_25435;
(statearr_25464[(7)] = inst_25411__$1);

return statearr_25464;
})();
var statearr_25465_25499 = state_25435__$1;
(statearr_25465_25499[(2)] = null);

(statearr_25465_25499[(1)] = (2));


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
});})(c__24323__auto__))
;
return ((function (switch__24046__auto__,c__24323__auto__){
return (function() {
var cljs$core$async$state_machine__24047__auto__ = null;
var cljs$core$async$state_machine__24047__auto____0 = (function (){
var statearr_25469 = [null,null,null,null,null,null,null,null];
(statearr_25469[(0)] = cljs$core$async$state_machine__24047__auto__);

(statearr_25469[(1)] = (1));

return statearr_25469;
});
var cljs$core$async$state_machine__24047__auto____1 = (function (state_25435){
while(true){
var ret_value__24048__auto__ = (function (){try{while(true){
var result__24049__auto__ = switch__24046__auto__.call(null,state_25435);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24049__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24049__auto__;
}
break;
}
}catch (e25470){if((e25470 instanceof Object)){
var ex__24050__auto__ = e25470;
var statearr_25471_25500 = state_25435;
(statearr_25471_25500[(5)] = ex__24050__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25435);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25470;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25501 = state_25435;
state_25435 = G__25501;
continue;
} else {
return ret_value__24048__auto__;
}
break;
}
});
cljs$core$async$state_machine__24047__auto__ = function(state_25435){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24047__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24047__auto____1.call(this,state_25435);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24047__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24047__auto____0;
cljs$core$async$state_machine__24047__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24047__auto____1;
return cljs$core$async$state_machine__24047__auto__;
})()
;})(switch__24046__auto__,c__24323__auto__))
})();
var state__24325__auto__ = (function (){var statearr_25472 = f__24324__auto__.call(null);
(statearr_25472[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24323__auto__);

return statearr_25472;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24325__auto__);
});})(c__24323__auto__))
);

return c__24323__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__21118__auto__ = (((_ == null))?null:_);
var m__21119__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__21118__auto__)]);
if(!((m__21119__auto__ == null))){
return m__21119__auto__.call(null,_);
} else {
var m__21119__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__21119__auto____$1 == null))){
return m__21119__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__21118__auto__ = (((m == null))?null:m);
var m__21119__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__21118__auto__)]);
if(!((m__21119__auto__ == null))){
return m__21119__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__21119__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__21119__auto____$1 == null))){
return m__21119__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__21118__auto__ = (((m == null))?null:m);
var m__21119__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__21118__auto__)]);
if(!((m__21119__auto__ == null))){
return m__21119__auto__.call(null,m,ch);
} else {
var m__21119__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__21119__auto____$1 == null))){
return m__21119__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__21118__auto__ = (((m == null))?null:m);
var m__21119__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__21118__auto__)]);
if(!((m__21119__auto__ == null))){
return m__21119__auto__.call(null,m);
} else {
var m__21119__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__21119__auto____$1 == null))){
return m__21119__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async25760 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25760 = (function (mult,ch,cs,meta25761){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta25761 = meta25761;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25760.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_25762,meta25761__$1){
var self__ = this;
var _25762__$1 = this;
return (new cljs.core.async.t_cljs$core$async25760(self__.mult,self__.ch,self__.cs,meta25761__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async25760.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_25762){
var self__ = this;
var _25762__$1 = this;
return self__.meta25761;
});})(cs))
;

cljs.core.async.t_cljs$core$async25760.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async25760.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async25760.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async25760.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async25760.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async25760.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async25760.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta25761","meta25761",2145589768,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async25760.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25760.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25760";

cljs.core.async.t_cljs$core$async25760.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__21061__auto__,writer__21062__auto__,opt__21063__auto__){
return cljs.core._write.call(null,writer__21062__auto__,"cljs.core.async/t_cljs$core$async25760");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async25760 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async25760(mult__$1,ch__$1,cs__$1,meta25761){
return (new cljs.core.async.t_cljs$core$async25760(mult__$1,ch__$1,cs__$1,meta25761));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async25760(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__24323__auto___26011 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24323__auto___26011,cs,m,dchan,dctr,done){
return (function (){
var f__24324__auto__ = (function (){var switch__24046__auto__ = ((function (c__24323__auto___26011,cs,m,dchan,dctr,done){
return (function (state_25900){
var state_val_25901 = (state_25900[(1)]);
if((state_val_25901 === (7))){
var inst_25893 = (state_25900[(2)]);
var state_25900__$1 = state_25900;
var statearr_25902_26012 = state_25900__$1;
(statearr_25902_26012[(2)] = inst_25893);

(statearr_25902_26012[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25901 === (20))){
var inst_25796 = (state_25900[(7)]);
var inst_25808 = cljs.core.first.call(null,inst_25796);
var inst_25809 = cljs.core.nth.call(null,inst_25808,(0),null);
var inst_25810 = cljs.core.nth.call(null,inst_25808,(1),null);
var state_25900__$1 = (function (){var statearr_25903 = state_25900;
(statearr_25903[(8)] = inst_25809);

return statearr_25903;
})();
if(cljs.core.truth_(inst_25810)){
var statearr_25904_26014 = state_25900__$1;
(statearr_25904_26014[(1)] = (22));

} else {
var statearr_25905_26015 = state_25900__$1;
(statearr_25905_26015[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25901 === (27))){
var inst_25840 = (state_25900[(9)]);
var inst_25838 = (state_25900[(10)]);
var inst_25765 = (state_25900[(11)]);
var inst_25845 = (state_25900[(12)]);
var inst_25845__$1 = cljs.core._nth.call(null,inst_25838,inst_25840);
var inst_25846 = cljs.core.async.put_BANG_.call(null,inst_25845__$1,inst_25765,done);
var state_25900__$1 = (function (){var statearr_25906 = state_25900;
(statearr_25906[(12)] = inst_25845__$1);

return statearr_25906;
})();
if(cljs.core.truth_(inst_25846)){
var statearr_25907_26020 = state_25900__$1;
(statearr_25907_26020[(1)] = (30));

} else {
var statearr_25908_26022 = state_25900__$1;
(statearr_25908_26022[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25901 === (1))){
var state_25900__$1 = state_25900;
var statearr_25909_26024 = state_25900__$1;
(statearr_25909_26024[(2)] = null);

(statearr_25909_26024[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25901 === (24))){
var inst_25796 = (state_25900[(7)]);
var inst_25815 = (state_25900[(2)]);
var inst_25816 = cljs.core.next.call(null,inst_25796);
var inst_25774 = inst_25816;
var inst_25775 = null;
var inst_25776 = (0);
var inst_25777 = (0);
var state_25900__$1 = (function (){var statearr_25910 = state_25900;
(statearr_25910[(13)] = inst_25777);

(statearr_25910[(14)] = inst_25775);

(statearr_25910[(15)] = inst_25774);

(statearr_25910[(16)] = inst_25815);

(statearr_25910[(17)] = inst_25776);

return statearr_25910;
})();
var statearr_25911_26026 = state_25900__$1;
(statearr_25911_26026[(2)] = null);

(statearr_25911_26026[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25901 === (39))){
var state_25900__$1 = state_25900;
var statearr_25915_26027 = state_25900__$1;
(statearr_25915_26027[(2)] = null);

(statearr_25915_26027[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25901 === (4))){
var inst_25765 = (state_25900[(11)]);
var inst_25765__$1 = (state_25900[(2)]);
var inst_25766 = (inst_25765__$1 == null);
var state_25900__$1 = (function (){var statearr_25916 = state_25900;
(statearr_25916[(11)] = inst_25765__$1);

return statearr_25916;
})();
if(cljs.core.truth_(inst_25766)){
var statearr_25917_26028 = state_25900__$1;
(statearr_25917_26028[(1)] = (5));

} else {
var statearr_25918_26029 = state_25900__$1;
(statearr_25918_26029[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25901 === (15))){
var inst_25777 = (state_25900[(13)]);
var inst_25775 = (state_25900[(14)]);
var inst_25774 = (state_25900[(15)]);
var inst_25776 = (state_25900[(17)]);
var inst_25792 = (state_25900[(2)]);
var inst_25793 = (inst_25777 + (1));
var tmp25912 = inst_25775;
var tmp25913 = inst_25774;
var tmp25914 = inst_25776;
var inst_25774__$1 = tmp25913;
var inst_25775__$1 = tmp25912;
var inst_25776__$1 = tmp25914;
var inst_25777__$1 = inst_25793;
var state_25900__$1 = (function (){var statearr_25919 = state_25900;
(statearr_25919[(13)] = inst_25777__$1);

(statearr_25919[(14)] = inst_25775__$1);

(statearr_25919[(18)] = inst_25792);

(statearr_25919[(15)] = inst_25774__$1);

(statearr_25919[(17)] = inst_25776__$1);

return statearr_25919;
})();
var statearr_25920_26038 = state_25900__$1;
(statearr_25920_26038[(2)] = null);

(statearr_25920_26038[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25901 === (21))){
var inst_25819 = (state_25900[(2)]);
var state_25900__$1 = state_25900;
var statearr_25924_26043 = state_25900__$1;
(statearr_25924_26043[(2)] = inst_25819);

(statearr_25924_26043[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25901 === (31))){
var inst_25845 = (state_25900[(12)]);
var inst_25849 = done.call(null,null);
var inst_25850 = cljs.core.async.untap_STAR_.call(null,m,inst_25845);
var state_25900__$1 = (function (){var statearr_25925 = state_25900;
(statearr_25925[(19)] = inst_25849);

return statearr_25925;
})();
var statearr_25926_26048 = state_25900__$1;
(statearr_25926_26048[(2)] = inst_25850);

(statearr_25926_26048[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25901 === (32))){
var inst_25839 = (state_25900[(20)]);
var inst_25840 = (state_25900[(9)]);
var inst_25838 = (state_25900[(10)]);
var inst_25837 = (state_25900[(21)]);
var inst_25852 = (state_25900[(2)]);
var inst_25853 = (inst_25840 + (1));
var tmp25921 = inst_25839;
var tmp25922 = inst_25838;
var tmp25923 = inst_25837;
var inst_25837__$1 = tmp25923;
var inst_25838__$1 = tmp25922;
var inst_25839__$1 = tmp25921;
var inst_25840__$1 = inst_25853;
var state_25900__$1 = (function (){var statearr_25927 = state_25900;
(statearr_25927[(20)] = inst_25839__$1);

(statearr_25927[(9)] = inst_25840__$1);

(statearr_25927[(10)] = inst_25838__$1);

(statearr_25927[(22)] = inst_25852);

(statearr_25927[(21)] = inst_25837__$1);

return statearr_25927;
})();
var statearr_25928_26057 = state_25900__$1;
(statearr_25928_26057[(2)] = null);

(statearr_25928_26057[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25901 === (40))){
var inst_25865 = (state_25900[(23)]);
var inst_25869 = done.call(null,null);
var inst_25870 = cljs.core.async.untap_STAR_.call(null,m,inst_25865);
var state_25900__$1 = (function (){var statearr_25930 = state_25900;
(statearr_25930[(24)] = inst_25869);

return statearr_25930;
})();
var statearr_25931_26061 = state_25900__$1;
(statearr_25931_26061[(2)] = inst_25870);

(statearr_25931_26061[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25901 === (33))){
var inst_25856 = (state_25900[(25)]);
var inst_25858 = cljs.core.chunked_seq_QMARK_.call(null,inst_25856);
var state_25900__$1 = state_25900;
if(inst_25858){
var statearr_25933_26062 = state_25900__$1;
(statearr_25933_26062[(1)] = (36));

} else {
var statearr_25934_26063 = state_25900__$1;
(statearr_25934_26063[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25901 === (13))){
var inst_25786 = (state_25900[(26)]);
var inst_25789 = cljs.core.async.close_BANG_.call(null,inst_25786);
var state_25900__$1 = state_25900;
var statearr_25935_26064 = state_25900__$1;
(statearr_25935_26064[(2)] = inst_25789);

(statearr_25935_26064[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25901 === (22))){
var inst_25809 = (state_25900[(8)]);
var inst_25812 = cljs.core.async.close_BANG_.call(null,inst_25809);
var state_25900__$1 = state_25900;
var statearr_25937_26066 = state_25900__$1;
(statearr_25937_26066[(2)] = inst_25812);

(statearr_25937_26066[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25901 === (36))){
var inst_25856 = (state_25900[(25)]);
var inst_25860 = cljs.core.chunk_first.call(null,inst_25856);
var inst_25861 = cljs.core.chunk_rest.call(null,inst_25856);
var inst_25862 = cljs.core.count.call(null,inst_25860);
var inst_25837 = inst_25861;
var inst_25838 = inst_25860;
var inst_25839 = inst_25862;
var inst_25840 = (0);
var state_25900__$1 = (function (){var statearr_25938 = state_25900;
(statearr_25938[(20)] = inst_25839);

(statearr_25938[(9)] = inst_25840);

(statearr_25938[(10)] = inst_25838);

(statearr_25938[(21)] = inst_25837);

return statearr_25938;
})();
var statearr_25939_26067 = state_25900__$1;
(statearr_25939_26067[(2)] = null);

(statearr_25939_26067[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25901 === (41))){
var inst_25856 = (state_25900[(25)]);
var inst_25872 = (state_25900[(2)]);
var inst_25873 = cljs.core.next.call(null,inst_25856);
var inst_25837 = inst_25873;
var inst_25838 = null;
var inst_25839 = (0);
var inst_25840 = (0);
var state_25900__$1 = (function (){var statearr_25940 = state_25900;
(statearr_25940[(20)] = inst_25839);

(statearr_25940[(27)] = inst_25872);

(statearr_25940[(9)] = inst_25840);

(statearr_25940[(10)] = inst_25838);

(statearr_25940[(21)] = inst_25837);

return statearr_25940;
})();
var statearr_25941_26068 = state_25900__$1;
(statearr_25941_26068[(2)] = null);

(statearr_25941_26068[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25901 === (43))){
var state_25900__$1 = state_25900;
var statearr_25943_26069 = state_25900__$1;
(statearr_25943_26069[(2)] = null);

(statearr_25943_26069[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25901 === (29))){
var inst_25881 = (state_25900[(2)]);
var state_25900__$1 = state_25900;
var statearr_25945_26071 = state_25900__$1;
(statearr_25945_26071[(2)] = inst_25881);

(statearr_25945_26071[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25901 === (44))){
var inst_25890 = (state_25900[(2)]);
var state_25900__$1 = (function (){var statearr_25946 = state_25900;
(statearr_25946[(28)] = inst_25890);

return statearr_25946;
})();
var statearr_25948_26073 = state_25900__$1;
(statearr_25948_26073[(2)] = null);

(statearr_25948_26073[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25901 === (6))){
var inst_25829 = (state_25900[(29)]);
var inst_25828 = cljs.core.deref.call(null,cs);
var inst_25829__$1 = cljs.core.keys.call(null,inst_25828);
var inst_25830 = cljs.core.count.call(null,inst_25829__$1);
var inst_25831 = cljs.core.reset_BANG_.call(null,dctr,inst_25830);
var inst_25836 = cljs.core.seq.call(null,inst_25829__$1);
var inst_25837 = inst_25836;
var inst_25838 = null;
var inst_25839 = (0);
var inst_25840 = (0);
var state_25900__$1 = (function (){var statearr_25950 = state_25900;
(statearr_25950[(20)] = inst_25839);

(statearr_25950[(9)] = inst_25840);

(statearr_25950[(10)] = inst_25838);

(statearr_25950[(29)] = inst_25829__$1);

(statearr_25950[(30)] = inst_25831);

(statearr_25950[(21)] = inst_25837);

return statearr_25950;
})();
var statearr_25951_26078 = state_25900__$1;
(statearr_25951_26078[(2)] = null);

(statearr_25951_26078[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25901 === (28))){
var inst_25856 = (state_25900[(25)]);
var inst_25837 = (state_25900[(21)]);
var inst_25856__$1 = cljs.core.seq.call(null,inst_25837);
var state_25900__$1 = (function (){var statearr_25952 = state_25900;
(statearr_25952[(25)] = inst_25856__$1);

return statearr_25952;
})();
if(inst_25856__$1){
var statearr_25953_26080 = state_25900__$1;
(statearr_25953_26080[(1)] = (33));

} else {
var statearr_25954_26081 = state_25900__$1;
(statearr_25954_26081[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25901 === (25))){
var inst_25839 = (state_25900[(20)]);
var inst_25840 = (state_25900[(9)]);
var inst_25842 = (inst_25840 < inst_25839);
var inst_25843 = inst_25842;
var state_25900__$1 = state_25900;
if(cljs.core.truth_(inst_25843)){
var statearr_25955_26082 = state_25900__$1;
(statearr_25955_26082[(1)] = (27));

} else {
var statearr_25956_26083 = state_25900__$1;
(statearr_25956_26083[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25901 === (34))){
var state_25900__$1 = state_25900;
var statearr_25957_26084 = state_25900__$1;
(statearr_25957_26084[(2)] = null);

(statearr_25957_26084[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25901 === (17))){
var state_25900__$1 = state_25900;
var statearr_25958_26085 = state_25900__$1;
(statearr_25958_26085[(2)] = null);

(statearr_25958_26085[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25901 === (3))){
var inst_25895 = (state_25900[(2)]);
var state_25900__$1 = state_25900;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25900__$1,inst_25895);
} else {
if((state_val_25901 === (12))){
var inst_25824 = (state_25900[(2)]);
var state_25900__$1 = state_25900;
var statearr_25959_26086 = state_25900__$1;
(statearr_25959_26086[(2)] = inst_25824);

(statearr_25959_26086[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25901 === (2))){
var state_25900__$1 = state_25900;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25900__$1,(4),ch);
} else {
if((state_val_25901 === (23))){
var state_25900__$1 = state_25900;
var statearr_25960_26089 = state_25900__$1;
(statearr_25960_26089[(2)] = null);

(statearr_25960_26089[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25901 === (35))){
var inst_25879 = (state_25900[(2)]);
var state_25900__$1 = state_25900;
var statearr_25961_26091 = state_25900__$1;
(statearr_25961_26091[(2)] = inst_25879);

(statearr_25961_26091[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25901 === (19))){
var inst_25796 = (state_25900[(7)]);
var inst_25800 = cljs.core.chunk_first.call(null,inst_25796);
var inst_25801 = cljs.core.chunk_rest.call(null,inst_25796);
var inst_25802 = cljs.core.count.call(null,inst_25800);
var inst_25774 = inst_25801;
var inst_25775 = inst_25800;
var inst_25776 = inst_25802;
var inst_25777 = (0);
var state_25900__$1 = (function (){var statearr_25962 = state_25900;
(statearr_25962[(13)] = inst_25777);

(statearr_25962[(14)] = inst_25775);

(statearr_25962[(15)] = inst_25774);

(statearr_25962[(17)] = inst_25776);

return statearr_25962;
})();
var statearr_25963_26096 = state_25900__$1;
(statearr_25963_26096[(2)] = null);

(statearr_25963_26096[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25901 === (11))){
var inst_25796 = (state_25900[(7)]);
var inst_25774 = (state_25900[(15)]);
var inst_25796__$1 = cljs.core.seq.call(null,inst_25774);
var state_25900__$1 = (function (){var statearr_25964 = state_25900;
(statearr_25964[(7)] = inst_25796__$1);

return statearr_25964;
})();
if(inst_25796__$1){
var statearr_25965_26097 = state_25900__$1;
(statearr_25965_26097[(1)] = (16));

} else {
var statearr_25966_26099 = state_25900__$1;
(statearr_25966_26099[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25901 === (9))){
var inst_25826 = (state_25900[(2)]);
var state_25900__$1 = state_25900;
var statearr_25967_26101 = state_25900__$1;
(statearr_25967_26101[(2)] = inst_25826);

(statearr_25967_26101[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25901 === (5))){
var inst_25772 = cljs.core.deref.call(null,cs);
var inst_25773 = cljs.core.seq.call(null,inst_25772);
var inst_25774 = inst_25773;
var inst_25775 = null;
var inst_25776 = (0);
var inst_25777 = (0);
var state_25900__$1 = (function (){var statearr_25968 = state_25900;
(statearr_25968[(13)] = inst_25777);

(statearr_25968[(14)] = inst_25775);

(statearr_25968[(15)] = inst_25774);

(statearr_25968[(17)] = inst_25776);

return statearr_25968;
})();
var statearr_25969_26106 = state_25900__$1;
(statearr_25969_26106[(2)] = null);

(statearr_25969_26106[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25901 === (14))){
var state_25900__$1 = state_25900;
var statearr_25970_26108 = state_25900__$1;
(statearr_25970_26108[(2)] = null);

(statearr_25970_26108[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25901 === (45))){
var inst_25887 = (state_25900[(2)]);
var state_25900__$1 = state_25900;
var statearr_25971_26109 = state_25900__$1;
(statearr_25971_26109[(2)] = inst_25887);

(statearr_25971_26109[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25901 === (26))){
var inst_25829 = (state_25900[(29)]);
var inst_25883 = (state_25900[(2)]);
var inst_25884 = cljs.core.seq.call(null,inst_25829);
var state_25900__$1 = (function (){var statearr_25972 = state_25900;
(statearr_25972[(31)] = inst_25883);

return statearr_25972;
})();
if(inst_25884){
var statearr_25973_26110 = state_25900__$1;
(statearr_25973_26110[(1)] = (42));

} else {
var statearr_25974_26111 = state_25900__$1;
(statearr_25974_26111[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25901 === (16))){
var inst_25796 = (state_25900[(7)]);
var inst_25798 = cljs.core.chunked_seq_QMARK_.call(null,inst_25796);
var state_25900__$1 = state_25900;
if(inst_25798){
var statearr_25975_26112 = state_25900__$1;
(statearr_25975_26112[(1)] = (19));

} else {
var statearr_25976_26113 = state_25900__$1;
(statearr_25976_26113[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25901 === (38))){
var inst_25876 = (state_25900[(2)]);
var state_25900__$1 = state_25900;
var statearr_25977_26114 = state_25900__$1;
(statearr_25977_26114[(2)] = inst_25876);

(statearr_25977_26114[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25901 === (30))){
var state_25900__$1 = state_25900;
var statearr_25978_26115 = state_25900__$1;
(statearr_25978_26115[(2)] = null);

(statearr_25978_26115[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25901 === (10))){
var inst_25777 = (state_25900[(13)]);
var inst_25775 = (state_25900[(14)]);
var inst_25785 = cljs.core._nth.call(null,inst_25775,inst_25777);
var inst_25786 = cljs.core.nth.call(null,inst_25785,(0),null);
var inst_25787 = cljs.core.nth.call(null,inst_25785,(1),null);
var state_25900__$1 = (function (){var statearr_25980 = state_25900;
(statearr_25980[(26)] = inst_25786);

return statearr_25980;
})();
if(cljs.core.truth_(inst_25787)){
var statearr_25981_26116 = state_25900__$1;
(statearr_25981_26116[(1)] = (13));

} else {
var statearr_25982_26117 = state_25900__$1;
(statearr_25982_26117[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25901 === (18))){
var inst_25822 = (state_25900[(2)]);
var state_25900__$1 = state_25900;
var statearr_25984_26118 = state_25900__$1;
(statearr_25984_26118[(2)] = inst_25822);

(statearr_25984_26118[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25901 === (42))){
var state_25900__$1 = state_25900;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25900__$1,(45),dchan);
} else {
if((state_val_25901 === (37))){
var inst_25865 = (state_25900[(23)]);
var inst_25765 = (state_25900[(11)]);
var inst_25856 = (state_25900[(25)]);
var inst_25865__$1 = cljs.core.first.call(null,inst_25856);
var inst_25866 = cljs.core.async.put_BANG_.call(null,inst_25865__$1,inst_25765,done);
var state_25900__$1 = (function (){var statearr_25985 = state_25900;
(statearr_25985[(23)] = inst_25865__$1);

return statearr_25985;
})();
if(cljs.core.truth_(inst_25866)){
var statearr_25986_26119 = state_25900__$1;
(statearr_25986_26119[(1)] = (39));

} else {
var statearr_25987_26120 = state_25900__$1;
(statearr_25987_26120[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25901 === (8))){
var inst_25777 = (state_25900[(13)]);
var inst_25776 = (state_25900[(17)]);
var inst_25779 = (inst_25777 < inst_25776);
var inst_25780 = inst_25779;
var state_25900__$1 = state_25900;
if(cljs.core.truth_(inst_25780)){
var statearr_25989_26121 = state_25900__$1;
(statearr_25989_26121[(1)] = (10));

} else {
var statearr_25990_26122 = state_25900__$1;
(statearr_25990_26122[(1)] = (11));

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
});})(c__24323__auto___26011,cs,m,dchan,dctr,done))
;
return ((function (switch__24046__auto__,c__24323__auto___26011,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__24047__auto__ = null;
var cljs$core$async$mult_$_state_machine__24047__auto____0 = (function (){
var statearr_26000 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26000[(0)] = cljs$core$async$mult_$_state_machine__24047__auto__);

(statearr_26000[(1)] = (1));

return statearr_26000;
});
var cljs$core$async$mult_$_state_machine__24047__auto____1 = (function (state_25900){
while(true){
var ret_value__24048__auto__ = (function (){try{while(true){
var result__24049__auto__ = switch__24046__auto__.call(null,state_25900);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24049__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24049__auto__;
}
break;
}
}catch (e26003){if((e26003 instanceof Object)){
var ex__24050__auto__ = e26003;
var statearr_26004_26126 = state_25900;
(statearr_26004_26126[(5)] = ex__24050__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25900);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26003;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26127 = state_25900;
state_25900 = G__26127;
continue;
} else {
return ret_value__24048__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__24047__auto__ = function(state_25900){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__24047__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__24047__auto____1.call(this,state_25900);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__24047__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__24047__auto____0;
cljs$core$async$mult_$_state_machine__24047__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__24047__auto____1;
return cljs$core$async$mult_$_state_machine__24047__auto__;
})()
;})(switch__24046__auto__,c__24323__auto___26011,cs,m,dchan,dctr,done))
})();
var state__24325__auto__ = (function (){var statearr_26007 = f__24324__auto__.call(null);
(statearr_26007[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24323__auto___26011);

return statearr_26007;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24325__auto__);
});})(c__24323__auto___26011,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args26128 = [];
var len__21530__auto___26135 = arguments.length;
var i__21531__auto___26136 = (0);
while(true){
if((i__21531__auto___26136 < len__21530__auto___26135)){
args26128.push((arguments[i__21531__auto___26136]));

var G__26137 = (i__21531__auto___26136 + (1));
i__21531__auto___26136 = G__26137;
continue;
} else {
}
break;
}

var G__26130 = args26128.length;
switch (G__26130) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26128.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__21118__auto__ = (((m == null))?null:m);
var m__21119__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__21118__auto__)]);
if(!((m__21119__auto__ == null))){
return m__21119__auto__.call(null,m,ch);
} else {
var m__21119__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__21119__auto____$1 == null))){
return m__21119__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__21118__auto__ = (((m == null))?null:m);
var m__21119__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__21118__auto__)]);
if(!((m__21119__auto__ == null))){
return m__21119__auto__.call(null,m,ch);
} else {
var m__21119__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__21119__auto____$1 == null))){
return m__21119__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__21118__auto__ = (((m == null))?null:m);
var m__21119__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__21118__auto__)]);
if(!((m__21119__auto__ == null))){
return m__21119__auto__.call(null,m);
} else {
var m__21119__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__21119__auto____$1 == null))){
return m__21119__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__21118__auto__ = (((m == null))?null:m);
var m__21119__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__21118__auto__)]);
if(!((m__21119__auto__ == null))){
return m__21119__auto__.call(null,m,state_map);
} else {
var m__21119__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__21119__auto____$1 == null))){
return m__21119__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__21118__auto__ = (((m == null))?null:m);
var m__21119__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__21118__auto__)]);
if(!((m__21119__auto__ == null))){
return m__21119__auto__.call(null,m,mode);
} else {
var m__21119__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__21119__auto____$1 == null))){
return m__21119__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__21537__auto__ = [];
var len__21530__auto___26160 = arguments.length;
var i__21531__auto___26161 = (0);
while(true){
if((i__21531__auto___26161 < len__21530__auto___26160)){
args__21537__auto__.push((arguments[i__21531__auto___26161]));

var G__26164 = (i__21531__auto___26161 + (1));
i__21531__auto___26161 = G__26164;
continue;
} else {
}
break;
}

var argseq__21538__auto__ = ((((3) < args__21537__auto__.length))?(new cljs.core.IndexedSeq(args__21537__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__21538__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__26154){
var map__26155 = p__26154;
var map__26155__$1 = ((((!((map__26155 == null)))?((((map__26155.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26155.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26155):map__26155);
var opts = map__26155__$1;
var statearr_26157_26169 = state;
(statearr_26157_26169[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__26155,map__26155__$1,opts){
return (function (val){
var statearr_26158_26174 = state;
(statearr_26158_26174[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__26155,map__26155__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_26159_26177 = state;
(statearr_26159_26177[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq26146){
var G__26147 = cljs.core.first.call(null,seq26146);
var seq26146__$1 = cljs.core.next.call(null,seq26146);
var G__26148 = cljs.core.first.call(null,seq26146__$1);
var seq26146__$2 = cljs.core.next.call(null,seq26146__$1);
var G__26149 = cljs.core.first.call(null,seq26146__$2);
var seq26146__$3 = cljs.core.next.call(null,seq26146__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__26147,G__26148,G__26149,seq26146__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async26347 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26347 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta26348){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta26348 = meta26348;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26347.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_26349,meta26348__$1){
var self__ = this;
var _26349__$1 = this;
return (new cljs.core.async.t_cljs$core$async26347(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta26348__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26347.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_26349){
var self__ = this;
var _26349__$1 = this;
return self__.meta26348;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26347.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async26347.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26347.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async26347.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26347.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26347.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26347.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26347.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26347.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta26348","meta26348",-1214340103,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26347.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26347.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26347";

cljs.core.async.t_cljs$core$async26347.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__21061__auto__,writer__21062__auto__,opt__21063__auto__){
return cljs.core._write.call(null,writer__21062__auto__,"cljs.core.async/t_cljs$core$async26347");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async26347 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async26347(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta26348){
return (new cljs.core.async.t_cljs$core$async26347(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta26348));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async26347(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__24323__auto___26534 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24323__auto___26534,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__24324__auto__ = (function (){var switch__24046__auto__ = ((function (c__24323__auto___26534,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_26457){
var state_val_26458 = (state_26457[(1)]);
if((state_val_26458 === (7))){
var inst_26369 = (state_26457[(2)]);
var state_26457__$1 = state_26457;
var statearr_26459_26535 = state_26457__$1;
(statearr_26459_26535[(2)] = inst_26369);

(statearr_26459_26535[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26458 === (20))){
var inst_26381 = (state_26457[(7)]);
var state_26457__$1 = state_26457;
var statearr_26460_26536 = state_26457__$1;
(statearr_26460_26536[(2)] = inst_26381);

(statearr_26460_26536[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26458 === (27))){
var state_26457__$1 = state_26457;
var statearr_26461_26537 = state_26457__$1;
(statearr_26461_26537[(2)] = null);

(statearr_26461_26537[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26458 === (1))){
var inst_26357 = (state_26457[(8)]);
var inst_26357__$1 = calc_state.call(null);
var inst_26359 = (inst_26357__$1 == null);
var inst_26360 = cljs.core.not.call(null,inst_26359);
var state_26457__$1 = (function (){var statearr_26462 = state_26457;
(statearr_26462[(8)] = inst_26357__$1);

return statearr_26462;
})();
if(inst_26360){
var statearr_26463_26538 = state_26457__$1;
(statearr_26463_26538[(1)] = (2));

} else {
var statearr_26464_26539 = state_26457__$1;
(statearr_26464_26539[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26458 === (24))){
var inst_26407 = (state_26457[(9)]);
var inst_26416 = (state_26457[(10)]);
var inst_26431 = (state_26457[(11)]);
var inst_26431__$1 = inst_26407.call(null,inst_26416);
var state_26457__$1 = (function (){var statearr_26465 = state_26457;
(statearr_26465[(11)] = inst_26431__$1);

return statearr_26465;
})();
if(cljs.core.truth_(inst_26431__$1)){
var statearr_26466_26540 = state_26457__$1;
(statearr_26466_26540[(1)] = (29));

} else {
var statearr_26467_26541 = state_26457__$1;
(statearr_26467_26541[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26458 === (4))){
var inst_26372 = (state_26457[(2)]);
var state_26457__$1 = state_26457;
if(cljs.core.truth_(inst_26372)){
var statearr_26468_26542 = state_26457__$1;
(statearr_26468_26542[(1)] = (8));

} else {
var statearr_26469_26544 = state_26457__$1;
(statearr_26469_26544[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26458 === (15))){
var inst_26398 = (state_26457[(2)]);
var state_26457__$1 = state_26457;
if(cljs.core.truth_(inst_26398)){
var statearr_26470_26548 = state_26457__$1;
(statearr_26470_26548[(1)] = (19));

} else {
var statearr_26471_26549 = state_26457__$1;
(statearr_26471_26549[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26458 === (21))){
var inst_26405 = (state_26457[(12)]);
var inst_26405__$1 = (state_26457[(2)]);
var inst_26407 = cljs.core.get.call(null,inst_26405__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_26408 = cljs.core.get.call(null,inst_26405__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_26409 = cljs.core.get.call(null,inst_26405__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_26457__$1 = (function (){var statearr_26472 = state_26457;
(statearr_26472[(13)] = inst_26408);

(statearr_26472[(9)] = inst_26407);

(statearr_26472[(12)] = inst_26405__$1);

return statearr_26472;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_26457__$1,(22),inst_26409);
} else {
if((state_val_26458 === (31))){
var inst_26439 = (state_26457[(2)]);
var state_26457__$1 = state_26457;
if(cljs.core.truth_(inst_26439)){
var statearr_26473_26556 = state_26457__$1;
(statearr_26473_26556[(1)] = (32));

} else {
var statearr_26474_26558 = state_26457__$1;
(statearr_26474_26558[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26458 === (32))){
var inst_26415 = (state_26457[(14)]);
var state_26457__$1 = state_26457;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26457__$1,(35),out,inst_26415);
} else {
if((state_val_26458 === (33))){
var inst_26405 = (state_26457[(12)]);
var inst_26381 = inst_26405;
var state_26457__$1 = (function (){var statearr_26475 = state_26457;
(statearr_26475[(7)] = inst_26381);

return statearr_26475;
})();
var statearr_26476_26559 = state_26457__$1;
(statearr_26476_26559[(2)] = null);

(statearr_26476_26559[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26458 === (13))){
var inst_26381 = (state_26457[(7)]);
var inst_26388 = inst_26381.cljs$lang$protocol_mask$partition0$;
var inst_26389 = (inst_26388 & (64));
var inst_26390 = inst_26381.cljs$core$ISeq$;
var inst_26391 = (inst_26389) || (inst_26390);
var state_26457__$1 = state_26457;
if(cljs.core.truth_(inst_26391)){
var statearr_26477_26560 = state_26457__$1;
(statearr_26477_26560[(1)] = (16));

} else {
var statearr_26478_26561 = state_26457__$1;
(statearr_26478_26561[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26458 === (22))){
var inst_26416 = (state_26457[(10)]);
var inst_26415 = (state_26457[(14)]);
var inst_26414 = (state_26457[(2)]);
var inst_26415__$1 = cljs.core.nth.call(null,inst_26414,(0),null);
var inst_26416__$1 = cljs.core.nth.call(null,inst_26414,(1),null);
var inst_26418 = (inst_26415__$1 == null);
var inst_26419 = cljs.core._EQ_.call(null,inst_26416__$1,change);
var inst_26420 = (inst_26418) || (inst_26419);
var state_26457__$1 = (function (){var statearr_26479 = state_26457;
(statearr_26479[(10)] = inst_26416__$1);

(statearr_26479[(14)] = inst_26415__$1);

return statearr_26479;
})();
if(cljs.core.truth_(inst_26420)){
var statearr_26480_26562 = state_26457__$1;
(statearr_26480_26562[(1)] = (23));

} else {
var statearr_26481_26563 = state_26457__$1;
(statearr_26481_26563[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26458 === (36))){
var inst_26405 = (state_26457[(12)]);
var inst_26381 = inst_26405;
var state_26457__$1 = (function (){var statearr_26482 = state_26457;
(statearr_26482[(7)] = inst_26381);

return statearr_26482;
})();
var statearr_26483_26570 = state_26457__$1;
(statearr_26483_26570[(2)] = null);

(statearr_26483_26570[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26458 === (29))){
var inst_26431 = (state_26457[(11)]);
var state_26457__$1 = state_26457;
var statearr_26484_26572 = state_26457__$1;
(statearr_26484_26572[(2)] = inst_26431);

(statearr_26484_26572[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26458 === (6))){
var state_26457__$1 = state_26457;
var statearr_26485_26573 = state_26457__$1;
(statearr_26485_26573[(2)] = false);

(statearr_26485_26573[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26458 === (28))){
var inst_26427 = (state_26457[(2)]);
var inst_26428 = calc_state.call(null);
var inst_26381 = inst_26428;
var state_26457__$1 = (function (){var statearr_26486 = state_26457;
(statearr_26486[(7)] = inst_26381);

(statearr_26486[(15)] = inst_26427);

return statearr_26486;
})();
var statearr_26487_26574 = state_26457__$1;
(statearr_26487_26574[(2)] = null);

(statearr_26487_26574[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26458 === (25))){
var inst_26453 = (state_26457[(2)]);
var state_26457__$1 = state_26457;
var statearr_26488_26575 = state_26457__$1;
(statearr_26488_26575[(2)] = inst_26453);

(statearr_26488_26575[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26458 === (34))){
var inst_26451 = (state_26457[(2)]);
var state_26457__$1 = state_26457;
var statearr_26489_26576 = state_26457__$1;
(statearr_26489_26576[(2)] = inst_26451);

(statearr_26489_26576[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26458 === (17))){
var state_26457__$1 = state_26457;
var statearr_26490_26577 = state_26457__$1;
(statearr_26490_26577[(2)] = false);

(statearr_26490_26577[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26458 === (3))){
var state_26457__$1 = state_26457;
var statearr_26491_26578 = state_26457__$1;
(statearr_26491_26578[(2)] = false);

(statearr_26491_26578[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26458 === (12))){
var inst_26455 = (state_26457[(2)]);
var state_26457__$1 = state_26457;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26457__$1,inst_26455);
} else {
if((state_val_26458 === (2))){
var inst_26357 = (state_26457[(8)]);
var inst_26362 = inst_26357.cljs$lang$protocol_mask$partition0$;
var inst_26363 = (inst_26362 & (64));
var inst_26364 = inst_26357.cljs$core$ISeq$;
var inst_26365 = (inst_26363) || (inst_26364);
var state_26457__$1 = state_26457;
if(cljs.core.truth_(inst_26365)){
var statearr_26492_26579 = state_26457__$1;
(statearr_26492_26579[(1)] = (5));

} else {
var statearr_26493_26580 = state_26457__$1;
(statearr_26493_26580[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26458 === (23))){
var inst_26415 = (state_26457[(14)]);
var inst_26422 = (inst_26415 == null);
var state_26457__$1 = state_26457;
if(cljs.core.truth_(inst_26422)){
var statearr_26494_26581 = state_26457__$1;
(statearr_26494_26581[(1)] = (26));

} else {
var statearr_26495_26582 = state_26457__$1;
(statearr_26495_26582[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26458 === (35))){
var inst_26442 = (state_26457[(2)]);
var state_26457__$1 = state_26457;
if(cljs.core.truth_(inst_26442)){
var statearr_26496_26583 = state_26457__$1;
(statearr_26496_26583[(1)] = (36));

} else {
var statearr_26497_26584 = state_26457__$1;
(statearr_26497_26584[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26458 === (19))){
var inst_26381 = (state_26457[(7)]);
var inst_26402 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26381);
var state_26457__$1 = state_26457;
var statearr_26500_26585 = state_26457__$1;
(statearr_26500_26585[(2)] = inst_26402);

(statearr_26500_26585[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26458 === (11))){
var inst_26381 = (state_26457[(7)]);
var inst_26385 = (inst_26381 == null);
var inst_26386 = cljs.core.not.call(null,inst_26385);
var state_26457__$1 = state_26457;
if(inst_26386){
var statearr_26501_26590 = state_26457__$1;
(statearr_26501_26590[(1)] = (13));

} else {
var statearr_26502_26592 = state_26457__$1;
(statearr_26502_26592[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26458 === (9))){
var inst_26357 = (state_26457[(8)]);
var state_26457__$1 = state_26457;
var statearr_26503_26593 = state_26457__$1;
(statearr_26503_26593[(2)] = inst_26357);

(statearr_26503_26593[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26458 === (5))){
var state_26457__$1 = state_26457;
var statearr_26504_26594 = state_26457__$1;
(statearr_26504_26594[(2)] = true);

(statearr_26504_26594[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26458 === (14))){
var state_26457__$1 = state_26457;
var statearr_26507_26595 = state_26457__$1;
(statearr_26507_26595[(2)] = false);

(statearr_26507_26595[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26458 === (26))){
var inst_26416 = (state_26457[(10)]);
var inst_26424 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_26416);
var state_26457__$1 = state_26457;
var statearr_26508_26599 = state_26457__$1;
(statearr_26508_26599[(2)] = inst_26424);

(statearr_26508_26599[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26458 === (16))){
var state_26457__$1 = state_26457;
var statearr_26509_26601 = state_26457__$1;
(statearr_26509_26601[(2)] = true);

(statearr_26509_26601[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26458 === (38))){
var inst_26447 = (state_26457[(2)]);
var state_26457__$1 = state_26457;
var statearr_26510_26607 = state_26457__$1;
(statearr_26510_26607[(2)] = inst_26447);

(statearr_26510_26607[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26458 === (30))){
var inst_26408 = (state_26457[(13)]);
var inst_26407 = (state_26457[(9)]);
var inst_26416 = (state_26457[(10)]);
var inst_26434 = cljs.core.empty_QMARK_.call(null,inst_26407);
var inst_26435 = inst_26408.call(null,inst_26416);
var inst_26436 = cljs.core.not.call(null,inst_26435);
var inst_26437 = (inst_26434) && (inst_26436);
var state_26457__$1 = state_26457;
var statearr_26511_26612 = state_26457__$1;
(statearr_26511_26612[(2)] = inst_26437);

(statearr_26511_26612[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26458 === (10))){
var inst_26357 = (state_26457[(8)]);
var inst_26377 = (state_26457[(2)]);
var inst_26378 = cljs.core.get.call(null,inst_26377,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_26379 = cljs.core.get.call(null,inst_26377,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_26380 = cljs.core.get.call(null,inst_26377,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_26381 = inst_26357;
var state_26457__$1 = (function (){var statearr_26512 = state_26457;
(statearr_26512[(16)] = inst_26379);

(statearr_26512[(17)] = inst_26378);

(statearr_26512[(7)] = inst_26381);

(statearr_26512[(18)] = inst_26380);

return statearr_26512;
})();
var statearr_26513_26617 = state_26457__$1;
(statearr_26513_26617[(2)] = null);

(statearr_26513_26617[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26458 === (18))){
var inst_26395 = (state_26457[(2)]);
var state_26457__$1 = state_26457;
var statearr_26514_26622 = state_26457__$1;
(statearr_26514_26622[(2)] = inst_26395);

(statearr_26514_26622[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26458 === (37))){
var state_26457__$1 = state_26457;
var statearr_26515_26623 = state_26457__$1;
(statearr_26515_26623[(2)] = null);

(statearr_26515_26623[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26458 === (8))){
var inst_26357 = (state_26457[(8)]);
var inst_26374 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26357);
var state_26457__$1 = state_26457;
var statearr_26516_26624 = state_26457__$1;
(statearr_26516_26624[(2)] = inst_26374);

(statearr_26516_26624[(1)] = (10));


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
});})(c__24323__auto___26534,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__24046__auto__,c__24323__auto___26534,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__24047__auto__ = null;
var cljs$core$async$mix_$_state_machine__24047__auto____0 = (function (){
var statearr_26520 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26520[(0)] = cljs$core$async$mix_$_state_machine__24047__auto__);

(statearr_26520[(1)] = (1));

return statearr_26520;
});
var cljs$core$async$mix_$_state_machine__24047__auto____1 = (function (state_26457){
while(true){
var ret_value__24048__auto__ = (function (){try{while(true){
var result__24049__auto__ = switch__24046__auto__.call(null,state_26457);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24049__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24049__auto__;
}
break;
}
}catch (e26521){if((e26521 instanceof Object)){
var ex__24050__auto__ = e26521;
var statearr_26522_26625 = state_26457;
(statearr_26522_26625[(5)] = ex__24050__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26457);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26521;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26626 = state_26457;
state_26457 = G__26626;
continue;
} else {
return ret_value__24048__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__24047__auto__ = function(state_26457){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__24047__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__24047__auto____1.call(this,state_26457);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__24047__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__24047__auto____0;
cljs$core$async$mix_$_state_machine__24047__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__24047__auto____1;
return cljs$core$async$mix_$_state_machine__24047__auto__;
})()
;})(switch__24046__auto__,c__24323__auto___26534,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__24325__auto__ = (function (){var statearr_26523 = f__24324__auto__.call(null);
(statearr_26523[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24323__auto___26534);

return statearr_26523;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24325__auto__);
});})(c__24323__auto___26534,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__21118__auto__ = (((p == null))?null:p);
var m__21119__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__21118__auto__)]);
if(!((m__21119__auto__ == null))){
return m__21119__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__21119__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__21119__auto____$1 == null))){
return m__21119__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__21118__auto__ = (((p == null))?null:p);
var m__21119__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__21118__auto__)]);
if(!((m__21119__auto__ == null))){
return m__21119__auto__.call(null,p,v,ch);
} else {
var m__21119__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__21119__auto____$1 == null))){
return m__21119__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args26633 = [];
var len__21530__auto___26638 = arguments.length;
var i__21531__auto___26639 = (0);
while(true){
if((i__21531__auto___26639 < len__21530__auto___26638)){
args26633.push((arguments[i__21531__auto___26639]));

var G__26640 = (i__21531__auto___26639 + (1));
i__21531__auto___26639 = G__26640;
continue;
} else {
}
break;
}

var G__26637 = args26633.length;
switch (G__26637) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26633.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__21118__auto__ = (((p == null))?null:p);
var m__21119__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__21118__auto__)]);
if(!((m__21119__auto__ == null))){
return m__21119__auto__.call(null,p);
} else {
var m__21119__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__21119__auto____$1 == null))){
return m__21119__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__21118__auto__ = (((p == null))?null:p);
var m__21119__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__21118__auto__)]);
if(!((m__21119__auto__ == null))){
return m__21119__auto__.call(null,p,v);
} else {
var m__21119__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__21119__auto____$1 == null))){
return m__21119__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args26643 = [];
var len__21530__auto___26771 = arguments.length;
var i__21531__auto___26772 = (0);
while(true){
if((i__21531__auto___26772 < len__21530__auto___26771)){
args26643.push((arguments[i__21531__auto___26772]));

var G__26773 = (i__21531__auto___26772 + (1));
i__21531__auto___26772 = G__26773;
continue;
} else {
}
break;
}

var G__26645 = args26643.length;
switch (G__26645) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26643.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__20455__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__20455__auto__)){
return or__20455__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__20455__auto__,mults){
return (function (p1__26642_SHARP_){
if(cljs.core.truth_(p1__26642_SHARP_.call(null,topic))){
return p1__26642_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__26642_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__20455__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async26646 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26646 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta26647){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta26647 = meta26647;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26646.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_26648,meta26647__$1){
var self__ = this;
var _26648__$1 = this;
return (new cljs.core.async.t_cljs$core$async26646(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta26647__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26646.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_26648){
var self__ = this;
var _26648__$1 = this;
return self__.meta26647;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26646.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async26646.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26646.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async26646.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26646.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26646.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26646.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26646.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta26647","meta26647",525291880,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26646.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26646.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26646";

cljs.core.async.t_cljs$core$async26646.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__21061__auto__,writer__21062__auto__,opt__21063__auto__){
return cljs.core._write.call(null,writer__21062__auto__,"cljs.core.async/t_cljs$core$async26646");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async26646 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async26646(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta26647){
return (new cljs.core.async.t_cljs$core$async26646(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta26647));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async26646(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__24323__auto___26780 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24323__auto___26780,mults,ensure_mult,p){
return (function (){
var f__24324__auto__ = (function (){var switch__24046__auto__ = ((function (c__24323__auto___26780,mults,ensure_mult,p){
return (function (state_26720){
var state_val_26721 = (state_26720[(1)]);
if((state_val_26721 === (7))){
var inst_26716 = (state_26720[(2)]);
var state_26720__$1 = state_26720;
var statearr_26722_26781 = state_26720__$1;
(statearr_26722_26781[(2)] = inst_26716);

(statearr_26722_26781[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26721 === (20))){
var state_26720__$1 = state_26720;
var statearr_26723_26782 = state_26720__$1;
(statearr_26723_26782[(2)] = null);

(statearr_26723_26782[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26721 === (1))){
var state_26720__$1 = state_26720;
var statearr_26724_26783 = state_26720__$1;
(statearr_26724_26783[(2)] = null);

(statearr_26724_26783[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26721 === (24))){
var inst_26699 = (state_26720[(7)]);
var inst_26708 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_26699);
var state_26720__$1 = state_26720;
var statearr_26725_26784 = state_26720__$1;
(statearr_26725_26784[(2)] = inst_26708);

(statearr_26725_26784[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26721 === (4))){
var inst_26651 = (state_26720[(8)]);
var inst_26651__$1 = (state_26720[(2)]);
var inst_26652 = (inst_26651__$1 == null);
var state_26720__$1 = (function (){var statearr_26726 = state_26720;
(statearr_26726[(8)] = inst_26651__$1);

return statearr_26726;
})();
if(cljs.core.truth_(inst_26652)){
var statearr_26727_26785 = state_26720__$1;
(statearr_26727_26785[(1)] = (5));

} else {
var statearr_26728_26786 = state_26720__$1;
(statearr_26728_26786[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26721 === (15))){
var inst_26693 = (state_26720[(2)]);
var state_26720__$1 = state_26720;
var statearr_26729_26787 = state_26720__$1;
(statearr_26729_26787[(2)] = inst_26693);

(statearr_26729_26787[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26721 === (21))){
var inst_26713 = (state_26720[(2)]);
var state_26720__$1 = (function (){var statearr_26730 = state_26720;
(statearr_26730[(9)] = inst_26713);

return statearr_26730;
})();
var statearr_26731_26788 = state_26720__$1;
(statearr_26731_26788[(2)] = null);

(statearr_26731_26788[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26721 === (13))){
var inst_26675 = (state_26720[(10)]);
var inst_26677 = cljs.core.chunked_seq_QMARK_.call(null,inst_26675);
var state_26720__$1 = state_26720;
if(inst_26677){
var statearr_26732_26789 = state_26720__$1;
(statearr_26732_26789[(1)] = (16));

} else {
var statearr_26733_26790 = state_26720__$1;
(statearr_26733_26790[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26721 === (22))){
var inst_26705 = (state_26720[(2)]);
var state_26720__$1 = state_26720;
if(cljs.core.truth_(inst_26705)){
var statearr_26734_26793 = state_26720__$1;
(statearr_26734_26793[(1)] = (23));

} else {
var statearr_26735_26794 = state_26720__$1;
(statearr_26735_26794[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26721 === (6))){
var inst_26651 = (state_26720[(8)]);
var inst_26701 = (state_26720[(11)]);
var inst_26699 = (state_26720[(7)]);
var inst_26699__$1 = topic_fn.call(null,inst_26651);
var inst_26700 = cljs.core.deref.call(null,mults);
var inst_26701__$1 = cljs.core.get.call(null,inst_26700,inst_26699__$1);
var state_26720__$1 = (function (){var statearr_26736 = state_26720;
(statearr_26736[(11)] = inst_26701__$1);

(statearr_26736[(7)] = inst_26699__$1);

return statearr_26736;
})();
if(cljs.core.truth_(inst_26701__$1)){
var statearr_26737_26795 = state_26720__$1;
(statearr_26737_26795[(1)] = (19));

} else {
var statearr_26738_26796 = state_26720__$1;
(statearr_26738_26796[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26721 === (25))){
var inst_26710 = (state_26720[(2)]);
var state_26720__$1 = state_26720;
var statearr_26740_26797 = state_26720__$1;
(statearr_26740_26797[(2)] = inst_26710);

(statearr_26740_26797[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26721 === (17))){
var inst_26675 = (state_26720[(10)]);
var inst_26684 = cljs.core.first.call(null,inst_26675);
var inst_26685 = cljs.core.async.muxch_STAR_.call(null,inst_26684);
var inst_26686 = cljs.core.async.close_BANG_.call(null,inst_26685);
var inst_26687 = cljs.core.next.call(null,inst_26675);
var inst_26661 = inst_26687;
var inst_26662 = null;
var inst_26663 = (0);
var inst_26664 = (0);
var state_26720__$1 = (function (){var statearr_26741 = state_26720;
(statearr_26741[(12)] = inst_26664);

(statearr_26741[(13)] = inst_26686);

(statearr_26741[(14)] = inst_26661);

(statearr_26741[(15)] = inst_26663);

(statearr_26741[(16)] = inst_26662);

return statearr_26741;
})();
var statearr_26742_26798 = state_26720__$1;
(statearr_26742_26798[(2)] = null);

(statearr_26742_26798[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26721 === (3))){
var inst_26718 = (state_26720[(2)]);
var state_26720__$1 = state_26720;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26720__$1,inst_26718);
} else {
if((state_val_26721 === (12))){
var inst_26695 = (state_26720[(2)]);
var state_26720__$1 = state_26720;
var statearr_26743_26799 = state_26720__$1;
(statearr_26743_26799[(2)] = inst_26695);

(statearr_26743_26799[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26721 === (2))){
var state_26720__$1 = state_26720;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26720__$1,(4),ch);
} else {
if((state_val_26721 === (23))){
var state_26720__$1 = state_26720;
var statearr_26744_26800 = state_26720__$1;
(statearr_26744_26800[(2)] = null);

(statearr_26744_26800[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26721 === (19))){
var inst_26651 = (state_26720[(8)]);
var inst_26701 = (state_26720[(11)]);
var inst_26703 = cljs.core.async.muxch_STAR_.call(null,inst_26701);
var state_26720__$1 = state_26720;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26720__$1,(22),inst_26703,inst_26651);
} else {
if((state_val_26721 === (11))){
var inst_26661 = (state_26720[(14)]);
var inst_26675 = (state_26720[(10)]);
var inst_26675__$1 = cljs.core.seq.call(null,inst_26661);
var state_26720__$1 = (function (){var statearr_26745 = state_26720;
(statearr_26745[(10)] = inst_26675__$1);

return statearr_26745;
})();
if(inst_26675__$1){
var statearr_26746_26801 = state_26720__$1;
(statearr_26746_26801[(1)] = (13));

} else {
var statearr_26747_26802 = state_26720__$1;
(statearr_26747_26802[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26721 === (9))){
var inst_26697 = (state_26720[(2)]);
var state_26720__$1 = state_26720;
var statearr_26748_26803 = state_26720__$1;
(statearr_26748_26803[(2)] = inst_26697);

(statearr_26748_26803[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26721 === (5))){
var inst_26658 = cljs.core.deref.call(null,mults);
var inst_26659 = cljs.core.vals.call(null,inst_26658);
var inst_26660 = cljs.core.seq.call(null,inst_26659);
var inst_26661 = inst_26660;
var inst_26662 = null;
var inst_26663 = (0);
var inst_26664 = (0);
var state_26720__$1 = (function (){var statearr_26749 = state_26720;
(statearr_26749[(12)] = inst_26664);

(statearr_26749[(14)] = inst_26661);

(statearr_26749[(15)] = inst_26663);

(statearr_26749[(16)] = inst_26662);

return statearr_26749;
})();
var statearr_26750_26804 = state_26720__$1;
(statearr_26750_26804[(2)] = null);

(statearr_26750_26804[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26721 === (14))){
var state_26720__$1 = state_26720;
var statearr_26754_26805 = state_26720__$1;
(statearr_26754_26805[(2)] = null);

(statearr_26754_26805[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26721 === (16))){
var inst_26675 = (state_26720[(10)]);
var inst_26679 = cljs.core.chunk_first.call(null,inst_26675);
var inst_26680 = cljs.core.chunk_rest.call(null,inst_26675);
var inst_26681 = cljs.core.count.call(null,inst_26679);
var inst_26661 = inst_26680;
var inst_26662 = inst_26679;
var inst_26663 = inst_26681;
var inst_26664 = (0);
var state_26720__$1 = (function (){var statearr_26755 = state_26720;
(statearr_26755[(12)] = inst_26664);

(statearr_26755[(14)] = inst_26661);

(statearr_26755[(15)] = inst_26663);

(statearr_26755[(16)] = inst_26662);

return statearr_26755;
})();
var statearr_26756_26814 = state_26720__$1;
(statearr_26756_26814[(2)] = null);

(statearr_26756_26814[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26721 === (10))){
var inst_26664 = (state_26720[(12)]);
var inst_26661 = (state_26720[(14)]);
var inst_26663 = (state_26720[(15)]);
var inst_26662 = (state_26720[(16)]);
var inst_26669 = cljs.core._nth.call(null,inst_26662,inst_26664);
var inst_26670 = cljs.core.async.muxch_STAR_.call(null,inst_26669);
var inst_26671 = cljs.core.async.close_BANG_.call(null,inst_26670);
var inst_26672 = (inst_26664 + (1));
var tmp26751 = inst_26661;
var tmp26752 = inst_26663;
var tmp26753 = inst_26662;
var inst_26661__$1 = tmp26751;
var inst_26662__$1 = tmp26753;
var inst_26663__$1 = tmp26752;
var inst_26664__$1 = inst_26672;
var state_26720__$1 = (function (){var statearr_26757 = state_26720;
(statearr_26757[(12)] = inst_26664__$1);

(statearr_26757[(14)] = inst_26661__$1);

(statearr_26757[(17)] = inst_26671);

(statearr_26757[(15)] = inst_26663__$1);

(statearr_26757[(16)] = inst_26662__$1);

return statearr_26757;
})();
var statearr_26758_26815 = state_26720__$1;
(statearr_26758_26815[(2)] = null);

(statearr_26758_26815[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26721 === (18))){
var inst_26690 = (state_26720[(2)]);
var state_26720__$1 = state_26720;
var statearr_26759_26817 = state_26720__$1;
(statearr_26759_26817[(2)] = inst_26690);

(statearr_26759_26817[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26721 === (8))){
var inst_26664 = (state_26720[(12)]);
var inst_26663 = (state_26720[(15)]);
var inst_26666 = (inst_26664 < inst_26663);
var inst_26667 = inst_26666;
var state_26720__$1 = state_26720;
if(cljs.core.truth_(inst_26667)){
var statearr_26761_26819 = state_26720__$1;
(statearr_26761_26819[(1)] = (10));

} else {
var statearr_26762_26820 = state_26720__$1;
(statearr_26762_26820[(1)] = (11));

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
});})(c__24323__auto___26780,mults,ensure_mult,p))
;
return ((function (switch__24046__auto__,c__24323__auto___26780,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__24047__auto__ = null;
var cljs$core$async$state_machine__24047__auto____0 = (function (){
var statearr_26766 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26766[(0)] = cljs$core$async$state_machine__24047__auto__);

(statearr_26766[(1)] = (1));

return statearr_26766;
});
var cljs$core$async$state_machine__24047__auto____1 = (function (state_26720){
while(true){
var ret_value__24048__auto__ = (function (){try{while(true){
var result__24049__auto__ = switch__24046__auto__.call(null,state_26720);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24049__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24049__auto__;
}
break;
}
}catch (e26767){if((e26767 instanceof Object)){
var ex__24050__auto__ = e26767;
var statearr_26768_26827 = state_26720;
(statearr_26768_26827[(5)] = ex__24050__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26720);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26767;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26828 = state_26720;
state_26720 = G__26828;
continue;
} else {
return ret_value__24048__auto__;
}
break;
}
});
cljs$core$async$state_machine__24047__auto__ = function(state_26720){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24047__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24047__auto____1.call(this,state_26720);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24047__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24047__auto____0;
cljs$core$async$state_machine__24047__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24047__auto____1;
return cljs$core$async$state_machine__24047__auto__;
})()
;})(switch__24046__auto__,c__24323__auto___26780,mults,ensure_mult,p))
})();
var state__24325__auto__ = (function (){var statearr_26770 = f__24324__auto__.call(null);
(statearr_26770[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24323__auto___26780);

return statearr_26770;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24325__auto__);
});})(c__24323__auto___26780,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args26829 = [];
var len__21530__auto___26832 = arguments.length;
var i__21531__auto___26833 = (0);
while(true){
if((i__21531__auto___26833 < len__21530__auto___26832)){
args26829.push((arguments[i__21531__auto___26833]));

var G__26834 = (i__21531__auto___26833 + (1));
i__21531__auto___26833 = G__26834;
continue;
} else {
}
break;
}

var G__26831 = args26829.length;
switch (G__26831) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26829.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args26836 = [];
var len__21530__auto___26839 = arguments.length;
var i__21531__auto___26840 = (0);
while(true){
if((i__21531__auto___26840 < len__21530__auto___26839)){
args26836.push((arguments[i__21531__auto___26840]));

var G__26842 = (i__21531__auto___26840 + (1));
i__21531__auto___26840 = G__26842;
continue;
} else {
}
break;
}

var G__26838 = args26836.length;
switch (G__26838) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26836.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args26846 = [];
var len__21530__auto___26925 = arguments.length;
var i__21531__auto___26926 = (0);
while(true){
if((i__21531__auto___26926 < len__21530__auto___26925)){
args26846.push((arguments[i__21531__auto___26926]));

var G__26927 = (i__21531__auto___26926 + (1));
i__21531__auto___26926 = G__26927;
continue;
} else {
}
break;
}

var G__26848 = args26846.length;
switch (G__26848) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26846.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__24323__auto___26929 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24323__auto___26929,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__24324__auto__ = (function (){var switch__24046__auto__ = ((function (c__24323__auto___26929,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_26895){
var state_val_26896 = (state_26895[(1)]);
if((state_val_26896 === (7))){
var state_26895__$1 = state_26895;
var statearr_26897_26933 = state_26895__$1;
(statearr_26897_26933[(2)] = null);

(statearr_26897_26933[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26896 === (1))){
var state_26895__$1 = state_26895;
var statearr_26898_26934 = state_26895__$1;
(statearr_26898_26934[(2)] = null);

(statearr_26898_26934[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26896 === (4))){
var inst_26859 = (state_26895[(7)]);
var inst_26861 = (inst_26859 < cnt);
var state_26895__$1 = state_26895;
if(cljs.core.truth_(inst_26861)){
var statearr_26899_26935 = state_26895__$1;
(statearr_26899_26935[(1)] = (6));

} else {
var statearr_26900_26936 = state_26895__$1;
(statearr_26900_26936[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26896 === (15))){
var inst_26891 = (state_26895[(2)]);
var state_26895__$1 = state_26895;
var statearr_26901_26937 = state_26895__$1;
(statearr_26901_26937[(2)] = inst_26891);

(statearr_26901_26937[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26896 === (13))){
var inst_26884 = cljs.core.async.close_BANG_.call(null,out);
var state_26895__$1 = state_26895;
var statearr_26902_26953 = state_26895__$1;
(statearr_26902_26953[(2)] = inst_26884);

(statearr_26902_26953[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26896 === (6))){
var state_26895__$1 = state_26895;
var statearr_26903_26956 = state_26895__$1;
(statearr_26903_26956[(2)] = null);

(statearr_26903_26956[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26896 === (3))){
var inst_26893 = (state_26895[(2)]);
var state_26895__$1 = state_26895;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26895__$1,inst_26893);
} else {
if((state_val_26896 === (12))){
var inst_26881 = (state_26895[(8)]);
var inst_26881__$1 = (state_26895[(2)]);
var inst_26882 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_26881__$1);
var state_26895__$1 = (function (){var statearr_26904 = state_26895;
(statearr_26904[(8)] = inst_26881__$1);

return statearr_26904;
})();
if(cljs.core.truth_(inst_26882)){
var statearr_26905_26965 = state_26895__$1;
(statearr_26905_26965[(1)] = (13));

} else {
var statearr_26906_26966 = state_26895__$1;
(statearr_26906_26966[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26896 === (2))){
var inst_26858 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_26859 = (0);
var state_26895__$1 = (function (){var statearr_26907 = state_26895;
(statearr_26907[(7)] = inst_26859);

(statearr_26907[(9)] = inst_26858);

return statearr_26907;
})();
var statearr_26908_26967 = state_26895__$1;
(statearr_26908_26967[(2)] = null);

(statearr_26908_26967[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26896 === (11))){
var inst_26859 = (state_26895[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_26895,(10),Object,null,(9));
var inst_26868 = chs__$1.call(null,inst_26859);
var inst_26869 = done.call(null,inst_26859);
var inst_26870 = cljs.core.async.take_BANG_.call(null,inst_26868,inst_26869);
var state_26895__$1 = state_26895;
var statearr_26909_26968 = state_26895__$1;
(statearr_26909_26968[(2)] = inst_26870);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26895__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26896 === (9))){
var inst_26859 = (state_26895[(7)]);
var inst_26872 = (state_26895[(2)]);
var inst_26873 = (inst_26859 + (1));
var inst_26859__$1 = inst_26873;
var state_26895__$1 = (function (){var statearr_26910 = state_26895;
(statearr_26910[(7)] = inst_26859__$1);

(statearr_26910[(10)] = inst_26872);

return statearr_26910;
})();
var statearr_26911_26969 = state_26895__$1;
(statearr_26911_26969[(2)] = null);

(statearr_26911_26969[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26896 === (5))){
var inst_26879 = (state_26895[(2)]);
var state_26895__$1 = (function (){var statearr_26912 = state_26895;
(statearr_26912[(11)] = inst_26879);

return statearr_26912;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26895__$1,(12),dchan);
} else {
if((state_val_26896 === (14))){
var inst_26881 = (state_26895[(8)]);
var inst_26886 = cljs.core.apply.call(null,f,inst_26881);
var state_26895__$1 = state_26895;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26895__$1,(16),out,inst_26886);
} else {
if((state_val_26896 === (16))){
var inst_26888 = (state_26895[(2)]);
var state_26895__$1 = (function (){var statearr_26913 = state_26895;
(statearr_26913[(12)] = inst_26888);

return statearr_26913;
})();
var statearr_26914_26970 = state_26895__$1;
(statearr_26914_26970[(2)] = null);

(statearr_26914_26970[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26896 === (10))){
var inst_26863 = (state_26895[(2)]);
var inst_26864 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_26895__$1 = (function (){var statearr_26915 = state_26895;
(statearr_26915[(13)] = inst_26863);

return statearr_26915;
})();
var statearr_26916_26971 = state_26895__$1;
(statearr_26916_26971[(2)] = inst_26864);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26895__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26896 === (8))){
var inst_26877 = (state_26895[(2)]);
var state_26895__$1 = state_26895;
var statearr_26917_26972 = state_26895__$1;
(statearr_26917_26972[(2)] = inst_26877);

(statearr_26917_26972[(1)] = (5));


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
});})(c__24323__auto___26929,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__24046__auto__,c__24323__auto___26929,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__24047__auto__ = null;
var cljs$core$async$state_machine__24047__auto____0 = (function (){
var statearr_26921 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26921[(0)] = cljs$core$async$state_machine__24047__auto__);

(statearr_26921[(1)] = (1));

return statearr_26921;
});
var cljs$core$async$state_machine__24047__auto____1 = (function (state_26895){
while(true){
var ret_value__24048__auto__ = (function (){try{while(true){
var result__24049__auto__ = switch__24046__auto__.call(null,state_26895);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24049__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24049__auto__;
}
break;
}
}catch (e26922){if((e26922 instanceof Object)){
var ex__24050__auto__ = e26922;
var statearr_26923_26973 = state_26895;
(statearr_26923_26973[(5)] = ex__24050__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26895);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26922;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26974 = state_26895;
state_26895 = G__26974;
continue;
} else {
return ret_value__24048__auto__;
}
break;
}
});
cljs$core$async$state_machine__24047__auto__ = function(state_26895){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24047__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24047__auto____1.call(this,state_26895);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24047__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24047__auto____0;
cljs$core$async$state_machine__24047__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24047__auto____1;
return cljs$core$async$state_machine__24047__auto__;
})()
;})(switch__24046__auto__,c__24323__auto___26929,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__24325__auto__ = (function (){var statearr_26924 = f__24324__auto__.call(null);
(statearr_26924[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24323__auto___26929);

return statearr_26924;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24325__auto__);
});})(c__24323__auto___26929,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args26976 = [];
var len__21530__auto___27041 = arguments.length;
var i__21531__auto___27042 = (0);
while(true){
if((i__21531__auto___27042 < len__21530__auto___27041)){
args26976.push((arguments[i__21531__auto___27042]));

var G__27043 = (i__21531__auto___27042 + (1));
i__21531__auto___27042 = G__27043;
continue;
} else {
}
break;
}

var G__26978 = args26976.length;
switch (G__26978) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26976.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24323__auto___27045 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24323__auto___27045,out){
return (function (){
var f__24324__auto__ = (function (){var switch__24046__auto__ = ((function (c__24323__auto___27045,out){
return (function (state_27010){
var state_val_27011 = (state_27010[(1)]);
if((state_val_27011 === (7))){
var inst_26990 = (state_27010[(7)]);
var inst_26989 = (state_27010[(8)]);
var inst_26989__$1 = (state_27010[(2)]);
var inst_26990__$1 = cljs.core.nth.call(null,inst_26989__$1,(0),null);
var inst_26991 = cljs.core.nth.call(null,inst_26989__$1,(1),null);
var inst_26992 = (inst_26990__$1 == null);
var state_27010__$1 = (function (){var statearr_27013 = state_27010;
(statearr_27013[(9)] = inst_26991);

(statearr_27013[(7)] = inst_26990__$1);

(statearr_27013[(8)] = inst_26989__$1);

return statearr_27013;
})();
if(cljs.core.truth_(inst_26992)){
var statearr_27014_27048 = state_27010__$1;
(statearr_27014_27048[(1)] = (8));

} else {
var statearr_27015_27049 = state_27010__$1;
(statearr_27015_27049[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27011 === (1))){
var inst_26979 = cljs.core.vec.call(null,chs);
var inst_26980 = inst_26979;
var state_27010__$1 = (function (){var statearr_27016 = state_27010;
(statearr_27016[(10)] = inst_26980);

return statearr_27016;
})();
var statearr_27017_27050 = state_27010__$1;
(statearr_27017_27050[(2)] = null);

(statearr_27017_27050[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27011 === (4))){
var inst_26980 = (state_27010[(10)]);
var state_27010__$1 = state_27010;
return cljs.core.async.ioc_alts_BANG_.call(null,state_27010__$1,(7),inst_26980);
} else {
if((state_val_27011 === (6))){
var inst_27006 = (state_27010[(2)]);
var state_27010__$1 = state_27010;
var statearr_27018_27051 = state_27010__$1;
(statearr_27018_27051[(2)] = inst_27006);

(statearr_27018_27051[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27011 === (3))){
var inst_27008 = (state_27010[(2)]);
var state_27010__$1 = state_27010;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27010__$1,inst_27008);
} else {
if((state_val_27011 === (2))){
var inst_26980 = (state_27010[(10)]);
var inst_26982 = cljs.core.count.call(null,inst_26980);
var inst_26983 = (inst_26982 > (0));
var state_27010__$1 = state_27010;
if(cljs.core.truth_(inst_26983)){
var statearr_27020_27055 = state_27010__$1;
(statearr_27020_27055[(1)] = (4));

} else {
var statearr_27021_27056 = state_27010__$1;
(statearr_27021_27056[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27011 === (11))){
var inst_26980 = (state_27010[(10)]);
var inst_26999 = (state_27010[(2)]);
var tmp27019 = inst_26980;
var inst_26980__$1 = tmp27019;
var state_27010__$1 = (function (){var statearr_27023 = state_27010;
(statearr_27023[(11)] = inst_26999);

(statearr_27023[(10)] = inst_26980__$1);

return statearr_27023;
})();
var statearr_27024_27060 = state_27010__$1;
(statearr_27024_27060[(2)] = null);

(statearr_27024_27060[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27011 === (9))){
var inst_26990 = (state_27010[(7)]);
var state_27010__$1 = state_27010;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27010__$1,(11),out,inst_26990);
} else {
if((state_val_27011 === (5))){
var inst_27004 = cljs.core.async.close_BANG_.call(null,out);
var state_27010__$1 = state_27010;
var statearr_27026_27061 = state_27010__$1;
(statearr_27026_27061[(2)] = inst_27004);

(statearr_27026_27061[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27011 === (10))){
var inst_27002 = (state_27010[(2)]);
var state_27010__$1 = state_27010;
var statearr_27027_27062 = state_27010__$1;
(statearr_27027_27062[(2)] = inst_27002);

(statearr_27027_27062[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27011 === (8))){
var inst_26991 = (state_27010[(9)]);
var inst_26990 = (state_27010[(7)]);
var inst_26989 = (state_27010[(8)]);
var inst_26980 = (state_27010[(10)]);
var inst_26994 = (function (){var cs = inst_26980;
var vec__26985 = inst_26989;
var v = inst_26990;
var c = inst_26991;
return ((function (cs,vec__26985,v,c,inst_26991,inst_26990,inst_26989,inst_26980,state_val_27011,c__24323__auto___27045,out){
return (function (p1__26975_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__26975_SHARP_);
});
;})(cs,vec__26985,v,c,inst_26991,inst_26990,inst_26989,inst_26980,state_val_27011,c__24323__auto___27045,out))
})();
var inst_26995 = cljs.core.filterv.call(null,inst_26994,inst_26980);
var inst_26980__$1 = inst_26995;
var state_27010__$1 = (function (){var statearr_27032 = state_27010;
(statearr_27032[(10)] = inst_26980__$1);

return statearr_27032;
})();
var statearr_27033_27063 = state_27010__$1;
(statearr_27033_27063[(2)] = null);

(statearr_27033_27063[(1)] = (2));


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
});})(c__24323__auto___27045,out))
;
return ((function (switch__24046__auto__,c__24323__auto___27045,out){
return (function() {
var cljs$core$async$state_machine__24047__auto__ = null;
var cljs$core$async$state_machine__24047__auto____0 = (function (){
var statearr_27037 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27037[(0)] = cljs$core$async$state_machine__24047__auto__);

(statearr_27037[(1)] = (1));

return statearr_27037;
});
var cljs$core$async$state_machine__24047__auto____1 = (function (state_27010){
while(true){
var ret_value__24048__auto__ = (function (){try{while(true){
var result__24049__auto__ = switch__24046__auto__.call(null,state_27010);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24049__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24049__auto__;
}
break;
}
}catch (e27038){if((e27038 instanceof Object)){
var ex__24050__auto__ = e27038;
var statearr_27039_27068 = state_27010;
(statearr_27039_27068[(5)] = ex__24050__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27010);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27038;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27070 = state_27010;
state_27010 = G__27070;
continue;
} else {
return ret_value__24048__auto__;
}
break;
}
});
cljs$core$async$state_machine__24047__auto__ = function(state_27010){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24047__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24047__auto____1.call(this,state_27010);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24047__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24047__auto____0;
cljs$core$async$state_machine__24047__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24047__auto____1;
return cljs$core$async$state_machine__24047__auto__;
})()
;})(switch__24046__auto__,c__24323__auto___27045,out))
})();
var state__24325__auto__ = (function (){var statearr_27040 = f__24324__auto__.call(null);
(statearr_27040[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24323__auto___27045);

return statearr_27040;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24325__auto__);
});})(c__24323__auto___27045,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args27071 = [];
var len__21530__auto___27137 = arguments.length;
var i__21531__auto___27138 = (0);
while(true){
if((i__21531__auto___27138 < len__21530__auto___27137)){
args27071.push((arguments[i__21531__auto___27138]));

var G__27139 = (i__21531__auto___27138 + (1));
i__21531__auto___27138 = G__27139;
continue;
} else {
}
break;
}

var G__27077 = args27071.length;
switch (G__27077) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27071.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24323__auto___27141 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24323__auto___27141,out){
return (function (){
var f__24324__auto__ = (function (){var switch__24046__auto__ = ((function (c__24323__auto___27141,out){
return (function (state_27101){
var state_val_27102 = (state_27101[(1)]);
if((state_val_27102 === (7))){
var inst_27083 = (state_27101[(7)]);
var inst_27083__$1 = (state_27101[(2)]);
var inst_27084 = (inst_27083__$1 == null);
var inst_27085 = cljs.core.not.call(null,inst_27084);
var state_27101__$1 = (function (){var statearr_27103 = state_27101;
(statearr_27103[(7)] = inst_27083__$1);

return statearr_27103;
})();
if(inst_27085){
var statearr_27104_27142 = state_27101__$1;
(statearr_27104_27142[(1)] = (8));

} else {
var statearr_27106_27143 = state_27101__$1;
(statearr_27106_27143[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27102 === (1))){
var inst_27078 = (0);
var state_27101__$1 = (function (){var statearr_27110 = state_27101;
(statearr_27110[(8)] = inst_27078);

return statearr_27110;
})();
var statearr_27111_27144 = state_27101__$1;
(statearr_27111_27144[(2)] = null);

(statearr_27111_27144[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27102 === (4))){
var state_27101__$1 = state_27101;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27101__$1,(7),ch);
} else {
if((state_val_27102 === (6))){
var inst_27096 = (state_27101[(2)]);
var state_27101__$1 = state_27101;
var statearr_27115_27150 = state_27101__$1;
(statearr_27115_27150[(2)] = inst_27096);

(statearr_27115_27150[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27102 === (3))){
var inst_27098 = (state_27101[(2)]);
var inst_27099 = cljs.core.async.close_BANG_.call(null,out);
var state_27101__$1 = (function (){var statearr_27116 = state_27101;
(statearr_27116[(9)] = inst_27098);

return statearr_27116;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27101__$1,inst_27099);
} else {
if((state_val_27102 === (2))){
var inst_27078 = (state_27101[(8)]);
var inst_27080 = (inst_27078 < n);
var state_27101__$1 = state_27101;
if(cljs.core.truth_(inst_27080)){
var statearr_27117_27152 = state_27101__$1;
(statearr_27117_27152[(1)] = (4));

} else {
var statearr_27118_27153 = state_27101__$1;
(statearr_27118_27153[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27102 === (11))){
var inst_27078 = (state_27101[(8)]);
var inst_27088 = (state_27101[(2)]);
var inst_27089 = (inst_27078 + (1));
var inst_27078__$1 = inst_27089;
var state_27101__$1 = (function (){var statearr_27122 = state_27101;
(statearr_27122[(10)] = inst_27088);

(statearr_27122[(8)] = inst_27078__$1);

return statearr_27122;
})();
var statearr_27123_27154 = state_27101__$1;
(statearr_27123_27154[(2)] = null);

(statearr_27123_27154[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27102 === (9))){
var state_27101__$1 = state_27101;
var statearr_27124_27155 = state_27101__$1;
(statearr_27124_27155[(2)] = null);

(statearr_27124_27155[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27102 === (5))){
var state_27101__$1 = state_27101;
var statearr_27128_27156 = state_27101__$1;
(statearr_27128_27156[(2)] = null);

(statearr_27128_27156[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27102 === (10))){
var inst_27093 = (state_27101[(2)]);
var state_27101__$1 = state_27101;
var statearr_27129_27157 = state_27101__$1;
(statearr_27129_27157[(2)] = inst_27093);

(statearr_27129_27157[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27102 === (8))){
var inst_27083 = (state_27101[(7)]);
var state_27101__$1 = state_27101;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27101__$1,(11),out,inst_27083);
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
});})(c__24323__auto___27141,out))
;
return ((function (switch__24046__auto__,c__24323__auto___27141,out){
return (function() {
var cljs$core$async$state_machine__24047__auto__ = null;
var cljs$core$async$state_machine__24047__auto____0 = (function (){
var statearr_27133 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27133[(0)] = cljs$core$async$state_machine__24047__auto__);

(statearr_27133[(1)] = (1));

return statearr_27133;
});
var cljs$core$async$state_machine__24047__auto____1 = (function (state_27101){
while(true){
var ret_value__24048__auto__ = (function (){try{while(true){
var result__24049__auto__ = switch__24046__auto__.call(null,state_27101);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24049__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24049__auto__;
}
break;
}
}catch (e27134){if((e27134 instanceof Object)){
var ex__24050__auto__ = e27134;
var statearr_27135_27163 = state_27101;
(statearr_27135_27163[(5)] = ex__24050__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27101);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27134;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27169 = state_27101;
state_27101 = G__27169;
continue;
} else {
return ret_value__24048__auto__;
}
break;
}
});
cljs$core$async$state_machine__24047__auto__ = function(state_27101){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24047__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24047__auto____1.call(this,state_27101);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24047__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24047__auto____0;
cljs$core$async$state_machine__24047__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24047__auto____1;
return cljs$core$async$state_machine__24047__auto__;
})()
;})(switch__24046__auto__,c__24323__auto___27141,out))
})();
var state__24325__auto__ = (function (){var statearr_27136 = f__24324__auto__.call(null);
(statearr_27136[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24323__auto___27141);

return statearr_27136;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24325__auto__);
});})(c__24323__auto___27141,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async27177 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27177 = (function (map_LT_,f,ch,meta27178){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta27178 = meta27178;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27177.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27179,meta27178__$1){
var self__ = this;
var _27179__$1 = this;
return (new cljs.core.async.t_cljs$core$async27177(self__.map_LT_,self__.f,self__.ch,meta27178__$1));
});

cljs.core.async.t_cljs$core$async27177.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27179){
var self__ = this;
var _27179__$1 = this;
return self__.meta27178;
});

cljs.core.async.t_cljs$core$async27177.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async27177.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async27177.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async27177.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async27177.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async27180 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27180 = (function (map_LT_,f,ch,meta27178,_,fn1,meta27181){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta27178 = meta27178;
this._ = _;
this.fn1 = fn1;
this.meta27181 = meta27181;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27180.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_27182,meta27181__$1){
var self__ = this;
var _27182__$1 = this;
return (new cljs.core.async.t_cljs$core$async27180(self__.map_LT_,self__.f,self__.ch,self__.meta27178,self__._,self__.fn1,meta27181__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async27180.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_27182){
var self__ = this;
var _27182__$1 = this;
return self__.meta27181;
});})(___$1))
;

cljs.core.async.t_cljs$core$async27180.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async27180.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async27180.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async27180.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__27170_SHARP_){
return f1.call(null,(((p1__27170_SHARP_ == null))?null:self__.f.call(null,p1__27170_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async27180.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27178","meta27178",628936103,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async27177","cljs.core.async/t_cljs$core$async27177",-55927617,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta27181","meta27181",34856236,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async27180.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27180.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27180";

cljs.core.async.t_cljs$core$async27180.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__21061__auto__,writer__21062__auto__,opt__21063__auto__){
return cljs.core._write.call(null,writer__21062__auto__,"cljs.core.async/t_cljs$core$async27180");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async27180 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async27180(map_LT___$1,f__$1,ch__$1,meta27178__$1,___$2,fn1__$1,meta27181){
return (new cljs.core.async.t_cljs$core$async27180(map_LT___$1,f__$1,ch__$1,meta27178__$1,___$2,fn1__$1,meta27181));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async27180(self__.map_LT_,self__.f,self__.ch,self__.meta27178,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__20443__auto__ = ret;
if(cljs.core.truth_(and__20443__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__20443__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async27177.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async27177.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async27177.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27178","meta27178",628936103,null)], null);
});

cljs.core.async.t_cljs$core$async27177.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27177.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27177";

cljs.core.async.t_cljs$core$async27177.cljs$lang$ctorPrWriter = (function (this__21061__auto__,writer__21062__auto__,opt__21063__auto__){
return cljs.core._write.call(null,writer__21062__auto__,"cljs.core.async/t_cljs$core$async27177");
});

cljs.core.async.__GT_t_cljs$core$async27177 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async27177(map_LT___$1,f__$1,ch__$1,meta27178){
return (new cljs.core.async.t_cljs$core$async27177(map_LT___$1,f__$1,ch__$1,meta27178));
});

}

return (new cljs.core.async.t_cljs$core$async27177(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async27205 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27205 = (function (map_GT_,f,ch,meta27206){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta27206 = meta27206;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27205.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27207,meta27206__$1){
var self__ = this;
var _27207__$1 = this;
return (new cljs.core.async.t_cljs$core$async27205(self__.map_GT_,self__.f,self__.ch,meta27206__$1));
});

cljs.core.async.t_cljs$core$async27205.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27207){
var self__ = this;
var _27207__$1 = this;
return self__.meta27206;
});

cljs.core.async.t_cljs$core$async27205.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async27205.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async27205.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async27205.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async27205.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async27205.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async27205.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27206","meta27206",90061492,null)], null);
});

cljs.core.async.t_cljs$core$async27205.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27205.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27205";

cljs.core.async.t_cljs$core$async27205.cljs$lang$ctorPrWriter = (function (this__21061__auto__,writer__21062__auto__,opt__21063__auto__){
return cljs.core._write.call(null,writer__21062__auto__,"cljs.core.async/t_cljs$core$async27205");
});

cljs.core.async.__GT_t_cljs$core$async27205 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async27205(map_GT___$1,f__$1,ch__$1,meta27206){
return (new cljs.core.async.t_cljs$core$async27205(map_GT___$1,f__$1,ch__$1,meta27206));
});

}

return (new cljs.core.async.t_cljs$core$async27205(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async27224 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27224 = (function (filter_GT_,p,ch,meta27225){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta27225 = meta27225;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27224.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27226,meta27225__$1){
var self__ = this;
var _27226__$1 = this;
return (new cljs.core.async.t_cljs$core$async27224(self__.filter_GT_,self__.p,self__.ch,meta27225__$1));
});

cljs.core.async.t_cljs$core$async27224.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27226){
var self__ = this;
var _27226__$1 = this;
return self__.meta27225;
});

cljs.core.async.t_cljs$core$async27224.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async27224.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async27224.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async27224.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async27224.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async27224.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async27224.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async27224.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27225","meta27225",1983261716,null)], null);
});

cljs.core.async.t_cljs$core$async27224.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27224.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27224";

cljs.core.async.t_cljs$core$async27224.cljs$lang$ctorPrWriter = (function (this__21061__auto__,writer__21062__auto__,opt__21063__auto__){
return cljs.core._write.call(null,writer__21062__auto__,"cljs.core.async/t_cljs$core$async27224");
});

cljs.core.async.__GT_t_cljs$core$async27224 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async27224(filter_GT___$1,p__$1,ch__$1,meta27225){
return (new cljs.core.async.t_cljs$core$async27224(filter_GT___$1,p__$1,ch__$1,meta27225));
});

}

return (new cljs.core.async.t_cljs$core$async27224(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args27239 = [];
var len__21530__auto___27291 = arguments.length;
var i__21531__auto___27292 = (0);
while(true){
if((i__21531__auto___27292 < len__21530__auto___27291)){
args27239.push((arguments[i__21531__auto___27292]));

var G__27293 = (i__21531__auto___27292 + (1));
i__21531__auto___27292 = G__27293;
continue;
} else {
}
break;
}

var G__27241 = args27239.length;
switch (G__27241) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27239.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24323__auto___27303 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24323__auto___27303,out){
return (function (){
var f__24324__auto__ = (function (){var switch__24046__auto__ = ((function (c__24323__auto___27303,out){
return (function (state_27262){
var state_val_27263 = (state_27262[(1)]);
if((state_val_27263 === (7))){
var inst_27258 = (state_27262[(2)]);
var state_27262__$1 = state_27262;
var statearr_27264_27312 = state_27262__$1;
(statearr_27264_27312[(2)] = inst_27258);

(statearr_27264_27312[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27263 === (1))){
var state_27262__$1 = state_27262;
var statearr_27265_27313 = state_27262__$1;
(statearr_27265_27313[(2)] = null);

(statearr_27265_27313[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27263 === (4))){
var inst_27244 = (state_27262[(7)]);
var inst_27244__$1 = (state_27262[(2)]);
var inst_27245 = (inst_27244__$1 == null);
var state_27262__$1 = (function (){var statearr_27266 = state_27262;
(statearr_27266[(7)] = inst_27244__$1);

return statearr_27266;
})();
if(cljs.core.truth_(inst_27245)){
var statearr_27267_27318 = state_27262__$1;
(statearr_27267_27318[(1)] = (5));

} else {
var statearr_27268_27320 = state_27262__$1;
(statearr_27268_27320[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27263 === (6))){
var inst_27244 = (state_27262[(7)]);
var inst_27249 = p.call(null,inst_27244);
var state_27262__$1 = state_27262;
if(cljs.core.truth_(inst_27249)){
var statearr_27269_27324 = state_27262__$1;
(statearr_27269_27324[(1)] = (8));

} else {
var statearr_27270_27325 = state_27262__$1;
(statearr_27270_27325[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27263 === (3))){
var inst_27260 = (state_27262[(2)]);
var state_27262__$1 = state_27262;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27262__$1,inst_27260);
} else {
if((state_val_27263 === (2))){
var state_27262__$1 = state_27262;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27262__$1,(4),ch);
} else {
if((state_val_27263 === (11))){
var inst_27252 = (state_27262[(2)]);
var state_27262__$1 = state_27262;
var statearr_27271_27334 = state_27262__$1;
(statearr_27271_27334[(2)] = inst_27252);

(statearr_27271_27334[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27263 === (9))){
var state_27262__$1 = state_27262;
var statearr_27272_27335 = state_27262__$1;
(statearr_27272_27335[(2)] = null);

(statearr_27272_27335[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27263 === (5))){
var inst_27247 = cljs.core.async.close_BANG_.call(null,out);
var state_27262__$1 = state_27262;
var statearr_27273_27343 = state_27262__$1;
(statearr_27273_27343[(2)] = inst_27247);

(statearr_27273_27343[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27263 === (10))){
var inst_27255 = (state_27262[(2)]);
var state_27262__$1 = (function (){var statearr_27274 = state_27262;
(statearr_27274[(8)] = inst_27255);

return statearr_27274;
})();
var statearr_27275_27351 = state_27262__$1;
(statearr_27275_27351[(2)] = null);

(statearr_27275_27351[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27263 === (8))){
var inst_27244 = (state_27262[(7)]);
var state_27262__$1 = state_27262;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27262__$1,(11),out,inst_27244);
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
});})(c__24323__auto___27303,out))
;
return ((function (switch__24046__auto__,c__24323__auto___27303,out){
return (function() {
var cljs$core$async$state_machine__24047__auto__ = null;
var cljs$core$async$state_machine__24047__auto____0 = (function (){
var statearr_27287 = [null,null,null,null,null,null,null,null,null];
(statearr_27287[(0)] = cljs$core$async$state_machine__24047__auto__);

(statearr_27287[(1)] = (1));

return statearr_27287;
});
var cljs$core$async$state_machine__24047__auto____1 = (function (state_27262){
while(true){
var ret_value__24048__auto__ = (function (){try{while(true){
var result__24049__auto__ = switch__24046__auto__.call(null,state_27262);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24049__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24049__auto__;
}
break;
}
}catch (e27288){if((e27288 instanceof Object)){
var ex__24050__auto__ = e27288;
var statearr_27289_27358 = state_27262;
(statearr_27289_27358[(5)] = ex__24050__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27262);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27288;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27359 = state_27262;
state_27262 = G__27359;
continue;
} else {
return ret_value__24048__auto__;
}
break;
}
});
cljs$core$async$state_machine__24047__auto__ = function(state_27262){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24047__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24047__auto____1.call(this,state_27262);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24047__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24047__auto____0;
cljs$core$async$state_machine__24047__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24047__auto____1;
return cljs$core$async$state_machine__24047__auto__;
})()
;})(switch__24046__auto__,c__24323__auto___27303,out))
})();
var state__24325__auto__ = (function (){var statearr_27290 = f__24324__auto__.call(null);
(statearr_27290[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24323__auto___27303);

return statearr_27290;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24325__auto__);
});})(c__24323__auto___27303,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args27368 = [];
var len__21530__auto___27375 = arguments.length;
var i__21531__auto___27376 = (0);
while(true){
if((i__21531__auto___27376 < len__21530__auto___27375)){
args27368.push((arguments[i__21531__auto___27376]));

var G__27377 = (i__21531__auto___27376 + (1));
i__21531__auto___27376 = G__27377;
continue;
} else {
}
break;
}

var G__27370 = args27368.length;
switch (G__27370) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27368.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__24323__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24323__auto__){
return (function (){
var f__24324__auto__ = (function (){var switch__24046__auto__ = ((function (c__24323__auto__){
return (function (state_27593){
var state_val_27594 = (state_27593[(1)]);
if((state_val_27594 === (7))){
var inst_27588 = (state_27593[(2)]);
var state_27593__$1 = state_27593;
var statearr_27596_27645 = state_27593__$1;
(statearr_27596_27645[(2)] = inst_27588);

(statearr_27596_27645[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27594 === (20))){
var inst_27558 = (state_27593[(7)]);
var inst_27569 = (state_27593[(2)]);
var inst_27570 = cljs.core.next.call(null,inst_27558);
var inst_27544 = inst_27570;
var inst_27545 = null;
var inst_27546 = (0);
var inst_27547 = (0);
var state_27593__$1 = (function (){var statearr_27597 = state_27593;
(statearr_27597[(8)] = inst_27544);

(statearr_27597[(9)] = inst_27547);

(statearr_27597[(10)] = inst_27546);

(statearr_27597[(11)] = inst_27569);

(statearr_27597[(12)] = inst_27545);

return statearr_27597;
})();
var statearr_27598_27646 = state_27593__$1;
(statearr_27598_27646[(2)] = null);

(statearr_27598_27646[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27594 === (1))){
var state_27593__$1 = state_27593;
var statearr_27599_27647 = state_27593__$1;
(statearr_27599_27647[(2)] = null);

(statearr_27599_27647[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27594 === (4))){
var inst_27533 = (state_27593[(13)]);
var inst_27533__$1 = (state_27593[(2)]);
var inst_27534 = (inst_27533__$1 == null);
var state_27593__$1 = (function (){var statearr_27600 = state_27593;
(statearr_27600[(13)] = inst_27533__$1);

return statearr_27600;
})();
if(cljs.core.truth_(inst_27534)){
var statearr_27601_27648 = state_27593__$1;
(statearr_27601_27648[(1)] = (5));

} else {
var statearr_27602_27649 = state_27593__$1;
(statearr_27602_27649[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27594 === (15))){
var state_27593__$1 = state_27593;
var statearr_27606_27650 = state_27593__$1;
(statearr_27606_27650[(2)] = null);

(statearr_27606_27650[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27594 === (21))){
var state_27593__$1 = state_27593;
var statearr_27607_27651 = state_27593__$1;
(statearr_27607_27651[(2)] = null);

(statearr_27607_27651[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27594 === (13))){
var inst_27544 = (state_27593[(8)]);
var inst_27547 = (state_27593[(9)]);
var inst_27546 = (state_27593[(10)]);
var inst_27545 = (state_27593[(12)]);
var inst_27554 = (state_27593[(2)]);
var inst_27555 = (inst_27547 + (1));
var tmp27603 = inst_27544;
var tmp27604 = inst_27546;
var tmp27605 = inst_27545;
var inst_27544__$1 = tmp27603;
var inst_27545__$1 = tmp27605;
var inst_27546__$1 = tmp27604;
var inst_27547__$1 = inst_27555;
var state_27593__$1 = (function (){var statearr_27608 = state_27593;
(statearr_27608[(8)] = inst_27544__$1);

(statearr_27608[(9)] = inst_27547__$1);

(statearr_27608[(10)] = inst_27546__$1);

(statearr_27608[(14)] = inst_27554);

(statearr_27608[(12)] = inst_27545__$1);

return statearr_27608;
})();
var statearr_27609_27652 = state_27593__$1;
(statearr_27609_27652[(2)] = null);

(statearr_27609_27652[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27594 === (22))){
var state_27593__$1 = state_27593;
var statearr_27610_27653 = state_27593__$1;
(statearr_27610_27653[(2)] = null);

(statearr_27610_27653[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27594 === (6))){
var inst_27533 = (state_27593[(13)]);
var inst_27542 = f.call(null,inst_27533);
var inst_27543 = cljs.core.seq.call(null,inst_27542);
var inst_27544 = inst_27543;
var inst_27545 = null;
var inst_27546 = (0);
var inst_27547 = (0);
var state_27593__$1 = (function (){var statearr_27611 = state_27593;
(statearr_27611[(8)] = inst_27544);

(statearr_27611[(9)] = inst_27547);

(statearr_27611[(10)] = inst_27546);

(statearr_27611[(12)] = inst_27545);

return statearr_27611;
})();
var statearr_27612_27654 = state_27593__$1;
(statearr_27612_27654[(2)] = null);

(statearr_27612_27654[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27594 === (17))){
var inst_27558 = (state_27593[(7)]);
var inst_27562 = cljs.core.chunk_first.call(null,inst_27558);
var inst_27563 = cljs.core.chunk_rest.call(null,inst_27558);
var inst_27564 = cljs.core.count.call(null,inst_27562);
var inst_27544 = inst_27563;
var inst_27545 = inst_27562;
var inst_27546 = inst_27564;
var inst_27547 = (0);
var state_27593__$1 = (function (){var statearr_27613 = state_27593;
(statearr_27613[(8)] = inst_27544);

(statearr_27613[(9)] = inst_27547);

(statearr_27613[(10)] = inst_27546);

(statearr_27613[(12)] = inst_27545);

return statearr_27613;
})();
var statearr_27614_27655 = state_27593__$1;
(statearr_27614_27655[(2)] = null);

(statearr_27614_27655[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27594 === (3))){
var inst_27590 = (state_27593[(2)]);
var state_27593__$1 = state_27593;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27593__$1,inst_27590);
} else {
if((state_val_27594 === (12))){
var inst_27578 = (state_27593[(2)]);
var state_27593__$1 = state_27593;
var statearr_27615_27656 = state_27593__$1;
(statearr_27615_27656[(2)] = inst_27578);

(statearr_27615_27656[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27594 === (2))){
var state_27593__$1 = state_27593;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27593__$1,(4),in$);
} else {
if((state_val_27594 === (23))){
var inst_27586 = (state_27593[(2)]);
var state_27593__$1 = state_27593;
var statearr_27616_27662 = state_27593__$1;
(statearr_27616_27662[(2)] = inst_27586);

(statearr_27616_27662[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27594 === (19))){
var inst_27573 = (state_27593[(2)]);
var state_27593__$1 = state_27593;
var statearr_27617_27663 = state_27593__$1;
(statearr_27617_27663[(2)] = inst_27573);

(statearr_27617_27663[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27594 === (11))){
var inst_27558 = (state_27593[(7)]);
var inst_27544 = (state_27593[(8)]);
var inst_27558__$1 = cljs.core.seq.call(null,inst_27544);
var state_27593__$1 = (function (){var statearr_27618 = state_27593;
(statearr_27618[(7)] = inst_27558__$1);

return statearr_27618;
})();
if(inst_27558__$1){
var statearr_27619_27668 = state_27593__$1;
(statearr_27619_27668[(1)] = (14));

} else {
var statearr_27620_27669 = state_27593__$1;
(statearr_27620_27669[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27594 === (9))){
var inst_27580 = (state_27593[(2)]);
var inst_27581 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_27593__$1 = (function (){var statearr_27621 = state_27593;
(statearr_27621[(15)] = inst_27580);

return statearr_27621;
})();
if(cljs.core.truth_(inst_27581)){
var statearr_27622_27670 = state_27593__$1;
(statearr_27622_27670[(1)] = (21));

} else {
var statearr_27623_27671 = state_27593__$1;
(statearr_27623_27671[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27594 === (5))){
var inst_27536 = cljs.core.async.close_BANG_.call(null,out);
var state_27593__$1 = state_27593;
var statearr_27624_27672 = state_27593__$1;
(statearr_27624_27672[(2)] = inst_27536);

(statearr_27624_27672[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27594 === (14))){
var inst_27558 = (state_27593[(7)]);
var inst_27560 = cljs.core.chunked_seq_QMARK_.call(null,inst_27558);
var state_27593__$1 = state_27593;
if(inst_27560){
var statearr_27625_27673 = state_27593__$1;
(statearr_27625_27673[(1)] = (17));

} else {
var statearr_27626_27674 = state_27593__$1;
(statearr_27626_27674[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27594 === (16))){
var inst_27576 = (state_27593[(2)]);
var state_27593__$1 = state_27593;
var statearr_27627_27675 = state_27593__$1;
(statearr_27627_27675[(2)] = inst_27576);

(statearr_27627_27675[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27594 === (10))){
var inst_27547 = (state_27593[(9)]);
var inst_27545 = (state_27593[(12)]);
var inst_27552 = cljs.core._nth.call(null,inst_27545,inst_27547);
var state_27593__$1 = state_27593;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27593__$1,(13),out,inst_27552);
} else {
if((state_val_27594 === (18))){
var inst_27558 = (state_27593[(7)]);
var inst_27567 = cljs.core.first.call(null,inst_27558);
var state_27593__$1 = state_27593;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27593__$1,(20),out,inst_27567);
} else {
if((state_val_27594 === (8))){
var inst_27547 = (state_27593[(9)]);
var inst_27546 = (state_27593[(10)]);
var inst_27549 = (inst_27547 < inst_27546);
var inst_27550 = inst_27549;
var state_27593__$1 = state_27593;
if(cljs.core.truth_(inst_27550)){
var statearr_27628_27679 = state_27593__$1;
(statearr_27628_27679[(1)] = (10));

} else {
var statearr_27629_27680 = state_27593__$1;
(statearr_27629_27680[(1)] = (11));

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
});})(c__24323__auto__))
;
return ((function (switch__24046__auto__,c__24323__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__24047__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__24047__auto____0 = (function (){
var statearr_27633 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27633[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__24047__auto__);

(statearr_27633[(1)] = (1));

return statearr_27633;
});
var cljs$core$async$mapcat_STAR__$_state_machine__24047__auto____1 = (function (state_27593){
while(true){
var ret_value__24048__auto__ = (function (){try{while(true){
var result__24049__auto__ = switch__24046__auto__.call(null,state_27593);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24049__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24049__auto__;
}
break;
}
}catch (e27636){if((e27636 instanceof Object)){
var ex__24050__auto__ = e27636;
var statearr_27638_27690 = state_27593;
(statearr_27638_27690[(5)] = ex__24050__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27593);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27636;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27691 = state_27593;
state_27593 = G__27691;
continue;
} else {
return ret_value__24048__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__24047__auto__ = function(state_27593){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__24047__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__24047__auto____1.call(this,state_27593);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__24047__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__24047__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__24047__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__24047__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__24047__auto__;
})()
;})(switch__24046__auto__,c__24323__auto__))
})();
var state__24325__auto__ = (function (){var statearr_27642 = f__24324__auto__.call(null);
(statearr_27642[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24323__auto__);

return statearr_27642;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24325__auto__);
});})(c__24323__auto__))
);

return c__24323__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args27697 = [];
var len__21530__auto___27703 = arguments.length;
var i__21531__auto___27704 = (0);
while(true){
if((i__21531__auto___27704 < len__21530__auto___27703)){
args27697.push((arguments[i__21531__auto___27704]));

var G__27705 = (i__21531__auto___27704 + (1));
i__21531__auto___27704 = G__27705;
continue;
} else {
}
break;
}

var G__27699 = args27697.length;
switch (G__27699) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27697.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args27707 = [];
var len__21530__auto___27710 = arguments.length;
var i__21531__auto___27711 = (0);
while(true){
if((i__21531__auto___27711 < len__21530__auto___27710)){
args27707.push((arguments[i__21531__auto___27711]));

var G__27712 = (i__21531__auto___27711 + (1));
i__21531__auto___27711 = G__27712;
continue;
} else {
}
break;
}

var G__27709 = args27707.length;
switch (G__27709) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27707.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args27720 = [];
var len__21530__auto___27797 = arguments.length;
var i__21531__auto___27798 = (0);
while(true){
if((i__21531__auto___27798 < len__21530__auto___27797)){
args27720.push((arguments[i__21531__auto___27798]));

var G__27799 = (i__21531__auto___27798 + (1));
i__21531__auto___27798 = G__27799;
continue;
} else {
}
break;
}

var G__27725 = args27720.length;
switch (G__27725) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27720.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24323__auto___27810 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24323__auto___27810,out){
return (function (){
var f__24324__auto__ = (function (){var switch__24046__auto__ = ((function (c__24323__auto___27810,out){
return (function (state_27752){
var state_val_27753 = (state_27752[(1)]);
if((state_val_27753 === (7))){
var inst_27747 = (state_27752[(2)]);
var state_27752__$1 = state_27752;
var statearr_27761_27811 = state_27752__$1;
(statearr_27761_27811[(2)] = inst_27747);

(statearr_27761_27811[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27753 === (1))){
var inst_27729 = null;
var state_27752__$1 = (function (){var statearr_27762 = state_27752;
(statearr_27762[(7)] = inst_27729);

return statearr_27762;
})();
var statearr_27763_27812 = state_27752__$1;
(statearr_27763_27812[(2)] = null);

(statearr_27763_27812[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27753 === (4))){
var inst_27732 = (state_27752[(8)]);
var inst_27732__$1 = (state_27752[(2)]);
var inst_27733 = (inst_27732__$1 == null);
var inst_27734 = cljs.core.not.call(null,inst_27733);
var state_27752__$1 = (function (){var statearr_27765 = state_27752;
(statearr_27765[(8)] = inst_27732__$1);

return statearr_27765;
})();
if(inst_27734){
var statearr_27766_27813 = state_27752__$1;
(statearr_27766_27813[(1)] = (5));

} else {
var statearr_27767_27814 = state_27752__$1;
(statearr_27767_27814[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27753 === (6))){
var state_27752__$1 = state_27752;
var statearr_27768_27815 = state_27752__$1;
(statearr_27768_27815[(2)] = null);

(statearr_27768_27815[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27753 === (3))){
var inst_27749 = (state_27752[(2)]);
var inst_27750 = cljs.core.async.close_BANG_.call(null,out);
var state_27752__$1 = (function (){var statearr_27769 = state_27752;
(statearr_27769[(9)] = inst_27749);

return statearr_27769;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27752__$1,inst_27750);
} else {
if((state_val_27753 === (2))){
var state_27752__$1 = state_27752;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27752__$1,(4),ch);
} else {
if((state_val_27753 === (11))){
var inst_27732 = (state_27752[(8)]);
var inst_27741 = (state_27752[(2)]);
var inst_27729 = inst_27732;
var state_27752__$1 = (function (){var statearr_27770 = state_27752;
(statearr_27770[(10)] = inst_27741);

(statearr_27770[(7)] = inst_27729);

return statearr_27770;
})();
var statearr_27771_27818 = state_27752__$1;
(statearr_27771_27818[(2)] = null);

(statearr_27771_27818[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27753 === (9))){
var inst_27732 = (state_27752[(8)]);
var state_27752__$1 = state_27752;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27752__$1,(11),out,inst_27732);
} else {
if((state_val_27753 === (5))){
var inst_27729 = (state_27752[(7)]);
var inst_27732 = (state_27752[(8)]);
var inst_27736 = cljs.core._EQ_.call(null,inst_27732,inst_27729);
var state_27752__$1 = state_27752;
if(inst_27736){
var statearr_27773_27819 = state_27752__$1;
(statearr_27773_27819[(1)] = (8));

} else {
var statearr_27774_27820 = state_27752__$1;
(statearr_27774_27820[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27753 === (10))){
var inst_27744 = (state_27752[(2)]);
var state_27752__$1 = state_27752;
var statearr_27775_27821 = state_27752__$1;
(statearr_27775_27821[(2)] = inst_27744);

(statearr_27775_27821[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27753 === (8))){
var inst_27729 = (state_27752[(7)]);
var tmp27772 = inst_27729;
var inst_27729__$1 = tmp27772;
var state_27752__$1 = (function (){var statearr_27776 = state_27752;
(statearr_27776[(7)] = inst_27729__$1);

return statearr_27776;
})();
var statearr_27777_27822 = state_27752__$1;
(statearr_27777_27822[(2)] = null);

(statearr_27777_27822[(1)] = (2));


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
});})(c__24323__auto___27810,out))
;
return ((function (switch__24046__auto__,c__24323__auto___27810,out){
return (function() {
var cljs$core$async$state_machine__24047__auto__ = null;
var cljs$core$async$state_machine__24047__auto____0 = (function (){
var statearr_27792 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27792[(0)] = cljs$core$async$state_machine__24047__auto__);

(statearr_27792[(1)] = (1));

return statearr_27792;
});
var cljs$core$async$state_machine__24047__auto____1 = (function (state_27752){
while(true){
var ret_value__24048__auto__ = (function (){try{while(true){
var result__24049__auto__ = switch__24046__auto__.call(null,state_27752);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24049__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24049__auto__;
}
break;
}
}catch (e27793){if((e27793 instanceof Object)){
var ex__24050__auto__ = e27793;
var statearr_27795_27824 = state_27752;
(statearr_27795_27824[(5)] = ex__24050__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27752);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27793;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27829 = state_27752;
state_27752 = G__27829;
continue;
} else {
return ret_value__24048__auto__;
}
break;
}
});
cljs$core$async$state_machine__24047__auto__ = function(state_27752){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24047__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24047__auto____1.call(this,state_27752);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24047__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24047__auto____0;
cljs$core$async$state_machine__24047__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24047__auto____1;
return cljs$core$async$state_machine__24047__auto__;
})()
;})(switch__24046__auto__,c__24323__auto___27810,out))
})();
var state__24325__auto__ = (function (){var statearr_27796 = f__24324__auto__.call(null);
(statearr_27796[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24323__auto___27810);

return statearr_27796;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24325__auto__);
});})(c__24323__auto___27810,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args27836 = [];
var len__21530__auto___27941 = arguments.length;
var i__21531__auto___27942 = (0);
while(true){
if((i__21531__auto___27942 < len__21530__auto___27941)){
args27836.push((arguments[i__21531__auto___27942]));

var G__27944 = (i__21531__auto___27942 + (1));
i__21531__auto___27942 = G__27944;
continue;
} else {
}
break;
}

var G__27848 = args27836.length;
switch (G__27848) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27836.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24323__auto___27949 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24323__auto___27949,out){
return (function (){
var f__24324__auto__ = (function (){var switch__24046__auto__ = ((function (c__24323__auto___27949,out){
return (function (state_27886){
var state_val_27887 = (state_27886[(1)]);
if((state_val_27887 === (7))){
var inst_27882 = (state_27886[(2)]);
var state_27886__$1 = state_27886;
var statearr_27888_27950 = state_27886__$1;
(statearr_27888_27950[(2)] = inst_27882);

(statearr_27888_27950[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27887 === (1))){
var inst_27849 = (new Array(n));
var inst_27850 = inst_27849;
var inst_27851 = (0);
var state_27886__$1 = (function (){var statearr_27889 = state_27886;
(statearr_27889[(7)] = inst_27851);

(statearr_27889[(8)] = inst_27850);

return statearr_27889;
})();
var statearr_27890_27951 = state_27886__$1;
(statearr_27890_27951[(2)] = null);

(statearr_27890_27951[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27887 === (4))){
var inst_27854 = (state_27886[(9)]);
var inst_27854__$1 = (state_27886[(2)]);
var inst_27855 = (inst_27854__$1 == null);
var inst_27856 = cljs.core.not.call(null,inst_27855);
var state_27886__$1 = (function (){var statearr_27891 = state_27886;
(statearr_27891[(9)] = inst_27854__$1);

return statearr_27891;
})();
if(inst_27856){
var statearr_27892_27952 = state_27886__$1;
(statearr_27892_27952[(1)] = (5));

} else {
var statearr_27893_27953 = state_27886__$1;
(statearr_27893_27953[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27887 === (15))){
var inst_27876 = (state_27886[(2)]);
var state_27886__$1 = state_27886;
var statearr_27898_27954 = state_27886__$1;
(statearr_27898_27954[(2)] = inst_27876);

(statearr_27898_27954[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27887 === (13))){
var state_27886__$1 = state_27886;
var statearr_27899_27961 = state_27886__$1;
(statearr_27899_27961[(2)] = null);

(statearr_27899_27961[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27887 === (6))){
var inst_27851 = (state_27886[(7)]);
var inst_27872 = (inst_27851 > (0));
var state_27886__$1 = state_27886;
if(cljs.core.truth_(inst_27872)){
var statearr_27900_27963 = state_27886__$1;
(statearr_27900_27963[(1)] = (12));

} else {
var statearr_27901_27967 = state_27886__$1;
(statearr_27901_27967[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27887 === (3))){
var inst_27884 = (state_27886[(2)]);
var state_27886__$1 = state_27886;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27886__$1,inst_27884);
} else {
if((state_val_27887 === (12))){
var inst_27850 = (state_27886[(8)]);
var inst_27874 = cljs.core.vec.call(null,inst_27850);
var state_27886__$1 = state_27886;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27886__$1,(15),out,inst_27874);
} else {
if((state_val_27887 === (2))){
var state_27886__$1 = state_27886;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27886__$1,(4),ch);
} else {
if((state_val_27887 === (11))){
var inst_27866 = (state_27886[(2)]);
var inst_27867 = (new Array(n));
var inst_27850 = inst_27867;
var inst_27851 = (0);
var state_27886__$1 = (function (){var statearr_27905 = state_27886;
(statearr_27905[(7)] = inst_27851);

(statearr_27905[(8)] = inst_27850);

(statearr_27905[(10)] = inst_27866);

return statearr_27905;
})();
var statearr_27906_27980 = state_27886__$1;
(statearr_27906_27980[(2)] = null);

(statearr_27906_27980[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27887 === (9))){
var inst_27850 = (state_27886[(8)]);
var inst_27864 = cljs.core.vec.call(null,inst_27850);
var state_27886__$1 = state_27886;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27886__$1,(11),out,inst_27864);
} else {
if((state_val_27887 === (5))){
var inst_27851 = (state_27886[(7)]);
var inst_27850 = (state_27886[(8)]);
var inst_27854 = (state_27886[(9)]);
var inst_27859 = (state_27886[(11)]);
var inst_27858 = (inst_27850[inst_27851] = inst_27854);
var inst_27859__$1 = (inst_27851 + (1));
var inst_27860 = (inst_27859__$1 < n);
var state_27886__$1 = (function (){var statearr_27911 = state_27886;
(statearr_27911[(12)] = inst_27858);

(statearr_27911[(11)] = inst_27859__$1);

return statearr_27911;
})();
if(cljs.core.truth_(inst_27860)){
var statearr_27913_27984 = state_27886__$1;
(statearr_27913_27984[(1)] = (8));

} else {
var statearr_27914_27985 = state_27886__$1;
(statearr_27914_27985[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27887 === (14))){
var inst_27879 = (state_27886[(2)]);
var inst_27880 = cljs.core.async.close_BANG_.call(null,out);
var state_27886__$1 = (function (){var statearr_27918 = state_27886;
(statearr_27918[(13)] = inst_27879);

return statearr_27918;
})();
var statearr_27919_27986 = state_27886__$1;
(statearr_27919_27986[(2)] = inst_27880);

(statearr_27919_27986[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27887 === (10))){
var inst_27870 = (state_27886[(2)]);
var state_27886__$1 = state_27886;
var statearr_27924_27987 = state_27886__$1;
(statearr_27924_27987[(2)] = inst_27870);

(statearr_27924_27987[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27887 === (8))){
var inst_27850 = (state_27886[(8)]);
var inst_27859 = (state_27886[(11)]);
var tmp27916 = inst_27850;
var inst_27850__$1 = tmp27916;
var inst_27851 = inst_27859;
var state_27886__$1 = (function (){var statearr_27925 = state_27886;
(statearr_27925[(7)] = inst_27851);

(statearr_27925[(8)] = inst_27850__$1);

return statearr_27925;
})();
var statearr_27926_27990 = state_27886__$1;
(statearr_27926_27990[(2)] = null);

(statearr_27926_27990[(1)] = (2));


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
});})(c__24323__auto___27949,out))
;
return ((function (switch__24046__auto__,c__24323__auto___27949,out){
return (function() {
var cljs$core$async$state_machine__24047__auto__ = null;
var cljs$core$async$state_machine__24047__auto____0 = (function (){
var statearr_27937 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27937[(0)] = cljs$core$async$state_machine__24047__auto__);

(statearr_27937[(1)] = (1));

return statearr_27937;
});
var cljs$core$async$state_machine__24047__auto____1 = (function (state_27886){
while(true){
var ret_value__24048__auto__ = (function (){try{while(true){
var result__24049__auto__ = switch__24046__auto__.call(null,state_27886);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24049__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24049__auto__;
}
break;
}
}catch (e27938){if((e27938 instanceof Object)){
var ex__24050__auto__ = e27938;
var statearr_27939_27991 = state_27886;
(statearr_27939_27991[(5)] = ex__24050__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27886);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27938;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27992 = state_27886;
state_27886 = G__27992;
continue;
} else {
return ret_value__24048__auto__;
}
break;
}
});
cljs$core$async$state_machine__24047__auto__ = function(state_27886){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24047__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24047__auto____1.call(this,state_27886);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24047__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24047__auto____0;
cljs$core$async$state_machine__24047__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24047__auto____1;
return cljs$core$async$state_machine__24047__auto__;
})()
;})(switch__24046__auto__,c__24323__auto___27949,out))
})();
var state__24325__auto__ = (function (){var statearr_27940 = f__24324__auto__.call(null);
(statearr_27940[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24323__auto___27949);

return statearr_27940;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24325__auto__);
});})(c__24323__auto___27949,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args27993 = [];
var len__21530__auto___28087 = arguments.length;
var i__21531__auto___28088 = (0);
while(true){
if((i__21531__auto___28088 < len__21530__auto___28087)){
args27993.push((arguments[i__21531__auto___28088]));

var G__28089 = (i__21531__auto___28088 + (1));
i__21531__auto___28088 = G__28089;
continue;
} else {
}
break;
}

var G__27995 = args27993.length;
switch (G__27995) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27993.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24323__auto___28095 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24323__auto___28095,out){
return (function (){
var f__24324__auto__ = (function (){var switch__24046__auto__ = ((function (c__24323__auto___28095,out){
return (function (state_28037){
var state_val_28038 = (state_28037[(1)]);
if((state_val_28038 === (7))){
var inst_28033 = (state_28037[(2)]);
var state_28037__$1 = state_28037;
var statearr_28039_28100 = state_28037__$1;
(statearr_28039_28100[(2)] = inst_28033);

(statearr_28039_28100[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28038 === (1))){
var inst_27996 = [];
var inst_27997 = inst_27996;
var inst_27998 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_28037__$1 = (function (){var statearr_28040 = state_28037;
(statearr_28040[(7)] = inst_27998);

(statearr_28040[(8)] = inst_27997);

return statearr_28040;
})();
var statearr_28041_28105 = state_28037__$1;
(statearr_28041_28105[(2)] = null);

(statearr_28041_28105[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28038 === (4))){
var inst_28001 = (state_28037[(9)]);
var inst_28001__$1 = (state_28037[(2)]);
var inst_28002 = (inst_28001__$1 == null);
var inst_28003 = cljs.core.not.call(null,inst_28002);
var state_28037__$1 = (function (){var statearr_28042 = state_28037;
(statearr_28042[(9)] = inst_28001__$1);

return statearr_28042;
})();
if(inst_28003){
var statearr_28043_28106 = state_28037__$1;
(statearr_28043_28106[(1)] = (5));

} else {
var statearr_28044_28107 = state_28037__$1;
(statearr_28044_28107[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28038 === (15))){
var inst_28027 = (state_28037[(2)]);
var state_28037__$1 = state_28037;
var statearr_28045_28108 = state_28037__$1;
(statearr_28045_28108[(2)] = inst_28027);

(statearr_28045_28108[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28038 === (13))){
var state_28037__$1 = state_28037;
var statearr_28050_28111 = state_28037__$1;
(statearr_28050_28111[(2)] = null);

(statearr_28050_28111[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28038 === (6))){
var inst_27997 = (state_28037[(8)]);
var inst_28022 = inst_27997.length;
var inst_28023 = (inst_28022 > (0));
var state_28037__$1 = state_28037;
if(cljs.core.truth_(inst_28023)){
var statearr_28054_28117 = state_28037__$1;
(statearr_28054_28117[(1)] = (12));

} else {
var statearr_28055_28120 = state_28037__$1;
(statearr_28055_28120[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28038 === (3))){
var inst_28035 = (state_28037[(2)]);
var state_28037__$1 = state_28037;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28037__$1,inst_28035);
} else {
if((state_val_28038 === (12))){
var inst_27997 = (state_28037[(8)]);
var inst_28025 = cljs.core.vec.call(null,inst_27997);
var state_28037__$1 = state_28037;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28037__$1,(15),out,inst_28025);
} else {
if((state_val_28038 === (2))){
var state_28037__$1 = state_28037;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28037__$1,(4),ch);
} else {
if((state_val_28038 === (11))){
var inst_28005 = (state_28037[(10)]);
var inst_28001 = (state_28037[(9)]);
var inst_28015 = (state_28037[(2)]);
var inst_28016 = [];
var inst_28017 = inst_28016.push(inst_28001);
var inst_27997 = inst_28016;
var inst_27998 = inst_28005;
var state_28037__$1 = (function (){var statearr_28059 = state_28037;
(statearr_28059[(7)] = inst_27998);

(statearr_28059[(8)] = inst_27997);

(statearr_28059[(11)] = inst_28017);

(statearr_28059[(12)] = inst_28015);

return statearr_28059;
})();
var statearr_28060_28135 = state_28037__$1;
(statearr_28060_28135[(2)] = null);

(statearr_28060_28135[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28038 === (9))){
var inst_27997 = (state_28037[(8)]);
var inst_28013 = cljs.core.vec.call(null,inst_27997);
var state_28037__$1 = state_28037;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28037__$1,(11),out,inst_28013);
} else {
if((state_val_28038 === (5))){
var inst_27998 = (state_28037[(7)]);
var inst_28005 = (state_28037[(10)]);
var inst_28001 = (state_28037[(9)]);
var inst_28005__$1 = f.call(null,inst_28001);
var inst_28006 = cljs.core._EQ_.call(null,inst_28005__$1,inst_27998);
var inst_28007 = cljs.core.keyword_identical_QMARK_.call(null,inst_27998,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_28008 = (inst_28006) || (inst_28007);
var state_28037__$1 = (function (){var statearr_28068 = state_28037;
(statearr_28068[(10)] = inst_28005__$1);

return statearr_28068;
})();
if(cljs.core.truth_(inst_28008)){
var statearr_28069_28137 = state_28037__$1;
(statearr_28069_28137[(1)] = (8));

} else {
var statearr_28070_28138 = state_28037__$1;
(statearr_28070_28138[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28038 === (14))){
var inst_28030 = (state_28037[(2)]);
var inst_28031 = cljs.core.async.close_BANG_.call(null,out);
var state_28037__$1 = (function (){var statearr_28072 = state_28037;
(statearr_28072[(13)] = inst_28030);

return statearr_28072;
})();
var statearr_28076_28140 = state_28037__$1;
(statearr_28076_28140[(2)] = inst_28031);

(statearr_28076_28140[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28038 === (10))){
var inst_28020 = (state_28037[(2)]);
var state_28037__$1 = state_28037;
var statearr_28077_28141 = state_28037__$1;
(statearr_28077_28141[(2)] = inst_28020);

(statearr_28077_28141[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28038 === (8))){
var inst_27997 = (state_28037[(8)]);
var inst_28005 = (state_28037[(10)]);
var inst_28001 = (state_28037[(9)]);
var inst_28010 = inst_27997.push(inst_28001);
var tmp28071 = inst_27997;
var inst_27997__$1 = tmp28071;
var inst_27998 = inst_28005;
var state_28037__$1 = (function (){var statearr_28078 = state_28037;
(statearr_28078[(7)] = inst_27998);

(statearr_28078[(8)] = inst_27997__$1);

(statearr_28078[(14)] = inst_28010);

return statearr_28078;
})();
var statearr_28079_28142 = state_28037__$1;
(statearr_28079_28142[(2)] = null);

(statearr_28079_28142[(1)] = (2));


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
});})(c__24323__auto___28095,out))
;
return ((function (switch__24046__auto__,c__24323__auto___28095,out){
return (function() {
var cljs$core$async$state_machine__24047__auto__ = null;
var cljs$core$async$state_machine__24047__auto____0 = (function (){
var statearr_28083 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28083[(0)] = cljs$core$async$state_machine__24047__auto__);

(statearr_28083[(1)] = (1));

return statearr_28083;
});
var cljs$core$async$state_machine__24047__auto____1 = (function (state_28037){
while(true){
var ret_value__24048__auto__ = (function (){try{while(true){
var result__24049__auto__ = switch__24046__auto__.call(null,state_28037);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24049__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24049__auto__;
}
break;
}
}catch (e28084){if((e28084 instanceof Object)){
var ex__24050__auto__ = e28084;
var statearr_28085_28143 = state_28037;
(statearr_28085_28143[(5)] = ex__24050__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28037);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28084;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28144 = state_28037;
state_28037 = G__28144;
continue;
} else {
return ret_value__24048__auto__;
}
break;
}
});
cljs$core$async$state_machine__24047__auto__ = function(state_28037){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24047__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24047__auto____1.call(this,state_28037);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24047__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24047__auto____0;
cljs$core$async$state_machine__24047__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24047__auto____1;
return cljs$core$async$state_machine__24047__auto__;
})()
;})(switch__24046__auto__,c__24323__auto___28095,out))
})();
var state__24325__auto__ = (function (){var statearr_28086 = f__24324__auto__.call(null);
(statearr_28086[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24323__auto___28095);

return statearr_28086;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24325__auto__);
});})(c__24323__auto___28095,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1605080718791