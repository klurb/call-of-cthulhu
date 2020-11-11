// Compiled by ClojureScript 1.9.229 {}
goog.provide('advenjure.items');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('advenjure.gettext.core');

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
advenjure.items.Item = (function (names,description,__meta,__extmap,__hash){
this.names = names;
this.description = description;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
advenjure.items.Item.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__21077__auto__,k__21078__auto__){
var self__ = this;
var this__21077__auto____$1 = this;
return cljs.core._lookup.call(null,this__21077__auto____$1,k__21078__auto__,null);
});

advenjure.items.Item.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__21079__auto__,k21883,else__21080__auto__){
var self__ = this;
var this__21079__auto____$1 = this;
var G__21888 = (((k21883 instanceof cljs.core.Keyword))?k21883.fqn:null);
switch (G__21888) {
case "names":
return self__.names;

break;
case "description":
return self__.description;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k21883,else__21080__auto__);

}
});

advenjure.items.Item.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__21091__auto__,writer__21092__auto__,opts__21093__auto__){
var self__ = this;
var this__21091__auto____$1 = this;
var pr_pair__21094__auto__ = ((function (this__21091__auto____$1){
return (function (keyval__21095__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__21092__auto__,cljs.core.pr_writer,""," ","",opts__21093__auto__,keyval__21095__auto__);
});})(this__21091__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__21092__auto__,pr_pair__21094__auto__,"#advenjure.items.Item{",", ","}",opts__21093__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"names","names",-1943074658),self__.names],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"description","description",-1428560544),self__.description],null))], null),self__.__extmap));
});

advenjure.items.Item.prototype.cljs$core$IIterable$ = true;

advenjure.items.Item.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__21882){
var self__ = this;
var G__21882__$1 = this;
return (new cljs.core.RecordIter((0),G__21882__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"names","names",-1943074658),new cljs.core.Keyword(null,"description","description",-1428560544)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

advenjure.items.Item.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__21075__auto__){
var self__ = this;
var this__21075__auto____$1 = this;
return self__.__meta;
});

advenjure.items.Item.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__21071__auto__){
var self__ = this;
var this__21071__auto____$1 = this;
return (new advenjure.items.Item(self__.names,self__.description,self__.__meta,self__.__extmap,self__.__hash));
});

advenjure.items.Item.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__21081__auto__){
var self__ = this;
var this__21081__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

advenjure.items.Item.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__21072__auto__){
var self__ = this;
var this__21072__auto____$1 = this;
var h__20890__auto__ = self__.__hash;
if(!((h__20890__auto__ == null))){
return h__20890__auto__;
} else {
var h__20890__auto____$1 = cljs.core.hash_imap.call(null,this__21072__auto____$1);
self__.__hash = h__20890__auto____$1;

return h__20890__auto____$1;
}
});

advenjure.items.Item.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__21073__auto__,other__21074__auto__){
var self__ = this;
var this__21073__auto____$1 = this;
if(cljs.core.truth_((function (){var and__20443__auto__ = other__21074__auto__;
if(cljs.core.truth_(and__20443__auto__)){
var and__20443__auto____$1 = (this__21073__auto____$1.constructor === other__21074__auto__.constructor);
if(and__20443__auto____$1){
return cljs.core.equiv_map.call(null,this__21073__auto____$1,other__21074__auto__);
} else {
return and__20443__auto____$1;
}
} else {
return and__20443__auto__;
}
})())){
return true;
} else {
return false;
}
});

advenjure.items.Item.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__21086__auto__,k__21087__auto__){
var self__ = this;
var this__21086__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"description","description",-1428560544),null,new cljs.core.Keyword(null,"names","names",-1943074658),null], null), null),k__21087__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__21086__auto____$1),self__.__meta),k__21087__auto__);
} else {
return (new advenjure.items.Item(self__.names,self__.description,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__21087__auto__)),null));
}
});

advenjure.items.Item.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__21084__auto__,k__21085__auto__,G__21882){
var self__ = this;
var this__21084__auto____$1 = this;
var pred__21898 = cljs.core.keyword_identical_QMARK_;
var expr__21899 = k__21085__auto__;
if(cljs.core.truth_(pred__21898.call(null,new cljs.core.Keyword(null,"names","names",-1943074658),expr__21899))){
return (new advenjure.items.Item(G__21882,self__.description,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__21898.call(null,new cljs.core.Keyword(null,"description","description",-1428560544),expr__21899))){
return (new advenjure.items.Item(self__.names,G__21882,self__.__meta,self__.__extmap,null));
} else {
return (new advenjure.items.Item(self__.names,self__.description,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__21085__auto__,G__21882),null));
}
}
});

advenjure.items.Item.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__21089__auto__){
var self__ = this;
var this__21089__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"names","names",-1943074658),self__.names],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"description","description",-1428560544),self__.description],null))], null),self__.__extmap));
});

advenjure.items.Item.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__21076__auto__,G__21882){
var self__ = this;
var this__21076__auto____$1 = this;
return (new advenjure.items.Item(self__.names,self__.description,G__21882,self__.__extmap,self__.__hash));
});

advenjure.items.Item.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__21082__auto__,entry__21083__auto__){
var self__ = this;
var this__21082__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__21083__auto__)){
return cljs.core._assoc.call(null,this__21082__auto____$1,cljs.core._nth.call(null,entry__21083__auto__,(0)),cljs.core._nth.call(null,entry__21083__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__21082__auto____$1,entry__21083__auto__);
}
});

advenjure.items.Item.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"names","names",-302543131,null),new cljs.core.Symbol(null,"description","description",211970983,null)], null);
});

advenjure.items.Item.cljs$lang$type = true;

advenjure.items.Item.cljs$lang$ctorPrSeq = (function (this__21111__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"advenjure.items/Item");
});

advenjure.items.Item.cljs$lang$ctorPrWriter = (function (this__21111__auto__,writer__21112__auto__){
return cljs.core._write.call(null,writer__21112__auto__,"advenjure.items/Item");
});

advenjure.items.__GT_Item = (function advenjure$items$__GT_Item(names,description){
return (new advenjure.items.Item(names,description,null,null,null));
});

advenjure.items.map__GT_Item = (function advenjure$items$map__GT_Item(G__21886){
return (new advenjure.items.Item(new cljs.core.Keyword(null,"names","names",-1943074658).cljs$core$IFn$_invoke$arity$1(G__21886),new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(G__21886),null,cljs.core.dissoc.call(null,G__21886,new cljs.core.Keyword(null,"names","names",-1943074658),new cljs.core.Keyword(null,"description","description",-1428560544)),null));
});

/**
 * If either closed, close or open keywords are in the item, set the defaults
 *   for an openable item.
 */
advenjure.items.open_defaults = (function advenjure$items$open_defaults(item){
if(cljs.core.truth_((function (){var or__20455__auto__ = new cljs.core.Keyword(null,"open","open",-1763596448).cljs$core$IFn$_invoke$arity$1(item);
if(cljs.core.truth_(or__20455__auto__)){
return or__20455__auto__;
} else {
var or__20455__auto____$1 = new cljs.core.Keyword(null,"close","close",1835149582).cljs$core$IFn$_invoke$arity$1(item);
if(cljs.core.truth_(or__20455__auto____$1)){
return or__20455__auto____$1;
} else {
return cljs.core.contains_QMARK_.call(null,item,new cljs.core.Keyword(null,"closed","closed",-919675359));
}
}
})())){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"open","open",-1763596448),true,new cljs.core.Keyword(null,"close","close",1835149582),true,new cljs.core.Keyword(null,"closed","closed",-919675359),true], null);
} else {
return null;
}
});
advenjure.items.unlock_defaults = (function advenjure$items$unlock_defaults(item){
if(cljs.core.truth_((function (){var or__20455__auto__ = new cljs.core.Keyword(null,"unlock","unlock",560395192).cljs$core$IFn$_invoke$arity$1(item);
if(cljs.core.truth_(or__20455__auto__)){
return or__20455__auto__;
} else {
return cljs.core.contains_QMARK_.call(null,item,new cljs.core.Keyword(null,"locked","locked",-1658763820));
}
})())){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"unlock","unlock",560395192),true,new cljs.core.Keyword(null,"locked","locked",-1658763820),true,new cljs.core.Keyword(null,"close","close",1835149582),true,new cljs.core.Keyword(null,"closed","closed",-919675359),true,new cljs.core.Keyword(null,"open","open",-1763596448),true], null);
} else {
return null;
}
});
advenjure.items.climb_defaults = (function advenjure$items$climb_defaults(item){
var temp__4655__auto__ = (function (){var or__20455__auto__ = new cljs.core.Keyword(null,"climb-up","climb-up",-91800383).cljs$core$IFn$_invoke$arity$1(item);
if(cljs.core.truth_(or__20455__auto__)){
return or__20455__auto__;
} else {
return new cljs.core.Keyword(null,"climb-down","climb-down",1994845284).cljs$core$IFn$_invoke$arity$1(item);
}
})();
if(cljs.core.truth_(temp__4655__auto__)){
var room = temp__4655__auto__;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"climb","climb",-1345384598),room,new cljs.core.Keyword(null,"climb-up","climb-up",-91800383),advenjure.gettext.core._.call(null,"Not up."),new cljs.core.Keyword(null,"climb-down","climb-down",1994845284),advenjure.gettext.core._.call(null,"Not down.")], null);
} else {
return null;
}
});
advenjure.items.use_with_defaults = (function advenjure$items$use_with_defaults(item){
if(cljs.core.truth_(new cljs.core.Keyword(null,"use-with","use-with",-716477584).cljs$core$IFn$_invoke$arity$1(item))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"use","use",-1846382424),advenjure.gettext.core._.call(null,"Use with what?")], null);
} else {
return null;
}
});
advenjure.items.talk_defaults = (function advenjure$items$talk_defaults(item){
if(cljs.core.truth_(new cljs.core.Keyword(null,"dialog","dialog",1415150135).cljs$core$IFn$_invoke$arity$1(item))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"talk","talk",309472888),true], null);
} else {
return null;
}
});
advenjure.items.make = (function advenjure$items$make(var_args){
var args21939 = [];
var len__21530__auto___21959 = arguments.length;
var i__21531__auto___21960 = (0);
while(true){
if((i__21531__auto___21960 < len__21530__auto___21959)){
args21939.push((arguments[i__21531__auto___21960]));

var G__21962 = (i__21531__auto___21960 + (1));
i__21531__auto___21960 = G__21962;
continue;
} else {
}
break;
}

var G__21947 = args21939.length;
switch (G__21947) {
case 1:
return advenjure.items.make.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var argseq__21549__auto__ = (new cljs.core.IndexedSeq(args21939.slice((2)),(0),null));
return advenjure.items.make.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__21549__auto__);

}
});

advenjure.items.make.cljs$core$IFn$_invoke$arity$variadic = (function (names,description,p__21953){
var map__21954 = p__21953;
var map__21954__$1 = ((((!((map__21954 == null)))?((((map__21954.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21954.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21954):map__21954);
var extras = map__21954__$1;
var names__$1 = ((typeof names === 'string')?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [names], null):names);
return advenjure.items.map__GT_Item.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"names","names",-1943074658),names__$1,new cljs.core.Keyword(null,"description","description",-1428560544),description], null),advenjure.items.open_defaults.call(null,extras),advenjure.items.unlock_defaults.call(null,extras),advenjure.items.talk_defaults.call(null,extras),advenjure.items.climb_defaults.call(null,extras),advenjure.items.use_with_defaults.call(null,extras),extras));
});

advenjure.items.make.cljs$lang$applyTo = (function (seq21940){
var G__21941 = cljs.core.first.call(null,seq21940);
var seq21940__$1 = cljs.core.next.call(null,seq21940);
var G__21942 = cljs.core.first.call(null,seq21940__$1);
var seq21940__$2 = cljs.core.next.call(null,seq21940__$1);
return advenjure.items.make.cljs$core$IFn$_invoke$arity$variadic(G__21941,G__21942,seq21940__$2);
});

advenjure.items.make.cljs$core$IFn$_invoke$arity$1 = (function (names){
return advenjure.items.make.call(null,names,advenjure.gettext.core._.call(null,"There was nothing special about it."));
});

advenjure.items.make.cljs$lang$maxFixedArity = (2);

/**
 * Get the first name of the item.
 */
advenjure.items.iname = (function advenjure$items$iname(item){
return cljs.core.first.call(null,new cljs.core.Keyword(null,"names","names",-1943074658).cljs$core$IFn$_invoke$arity$1(item));
});
advenjure.items.print_list_item = (function advenjure$items$print_list_item(item){
return advenjure.gettext.core.p_.call(null,item,"a %s",advenjure.items.iname.call(null,item));
});
advenjure.items.ntabs = (function advenjure$items$ntabs(n){
return clojure.string.join.call(null,cljs.core.repeat.call(null,n,"  "));
});
advenjure.items.print_list = (function advenjure$items$print_list(var_args){
var args21986 = [];
var len__21530__auto___22019 = arguments.length;
var i__21531__auto___22020 = (0);
while(true){
if((i__21531__auto___22020 < len__21530__auto___22019)){
args21986.push((arguments[i__21531__auto___22020]));

var G__22021 = (i__21531__auto___22020 + (1));
i__21531__auto___22020 = G__22021;
continue;
} else {
}
break;
}

var G__21997 = args21986.length;
switch (G__21997) {
case 1:
return advenjure.items.print_list.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return advenjure.items.print_list.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21986.length)].join('')));

}
});

advenjure.items.print_list.cljs$core$IFn$_invoke$arity$1 = (function (items){
return advenjure.items.print_list.call(null,items,(1));
});

advenjure.items.print_list.cljs$core$IFn$_invoke$arity$2 = (function (items,level){
return [cljs.core.str("\n"),cljs.core.str(advenjure.items.ntabs.call(null,level)),cljs.core.str(clojure.string.join.call(null,[cljs.core.str("\n"),cljs.core.str(advenjure.items.ntabs.call(null,level))].join(''),(function (){var iter__21235__auto__ = (function advenjure$items$iter__22002(s__22003){
return (new cljs.core.LazySeq(null,(function (){
var s__22003__$1 = s__22003;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__22003__$1);
if(temp__4657__auto__){
var s__22003__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__22003__$2)){
var c__21233__auto__ = cljs.core.chunk_first.call(null,s__22003__$2);
var size__21234__auto__ = cljs.core.count.call(null,c__21233__auto__);
var b__22005 = cljs.core.chunk_buffer.call(null,size__21234__auto__);
if((function (){var i__22004 = (0);
while(true){
if((i__22004 < size__21234__auto__)){
var item = cljs.core._nth.call(null,c__21233__auto__,i__22004);
cljs.core.chunk_append.call(null,b__22005,[cljs.core.str(clojure.string.capitalize.call(null,advenjure.items.print_list_item.call(null,item))),cljs.core.str(advenjure.items.describe_container.call(null,item,". ",(level + (1))))].join(''));

var G__22036 = (i__22004 + (1));
i__22004 = G__22036;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22005),advenjure$items$iter__22002.call(null,cljs.core.chunk_rest.call(null,s__22003__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22005),null);
}
} else {
var item = cljs.core.first.call(null,s__22003__$2);
return cljs.core.cons.call(null,[cljs.core.str(clojure.string.capitalize.call(null,advenjure.items.print_list_item.call(null,item))),cljs.core.str(advenjure.items.describe_container.call(null,item,". ",(level + (1))))].join(''),advenjure$items$iter__22002.call(null,cljs.core.rest.call(null,s__22003__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__21235__auto__.call(null,items);
})()))].join('');
});

advenjure.items.print_list.cljs$lang$maxFixedArity = 2;

/**
 * Recursively lists the contents of the item. If a prefix is given, it will be
 *   appended to the resulting string.
 *   If the item is empty or closed, the message will say so.
 *   If the item is not a container, returns nil.
 */
advenjure.items.describe_container = (function advenjure$items$describe_container(var_args){
var args22044 = [];
var len__21530__auto___22050 = arguments.length;
var i__21531__auto___22051 = (0);
while(true){
if((i__21531__auto___22051 < len__21530__auto___22050)){
args22044.push((arguments[i__21531__auto___22051]));

var G__22052 = (i__21531__auto___22051 + (1));
i__21531__auto___22051 = G__22052;
continue;
} else {
}
break;
}

var G__22047 = args22044.length;
switch (G__22047) {
case 1:
return advenjure.items.describe_container.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return advenjure.items.describe_container.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return advenjure.items.describe_container.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22044.length)].join('')));

}
});

advenjure.items.describe_container.cljs$core$IFn$_invoke$arity$1 = (function (container){
return advenjure.items.describe_container.call(null,container,"",(1));
});

advenjure.items.describe_container.cljs$core$IFn$_invoke$arity$2 = (function (container,prefix){
return advenjure.items.describe_container.call(null,container,prefix,(1));
});

advenjure.items.describe_container.cljs$core$IFn$_invoke$arity$3 = (function (container,prefix,level){
var temp__4655__auto__ = new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(container);
if(cljs.core.truth_(temp__4655__auto__)){
var items = temp__4655__auto__;
var container_name = [cljs.core.str(prefix),cljs.core.str(advenjure.gettext.core.p_.call(null,container,"The %s",advenjure.items.iname.call(null,container)))].join('');
if(cljs.core.truth_(new cljs.core.Keyword(null,"closed","closed",-919675359).cljs$core$IFn$_invoke$arity$1(container))){
return advenjure.gettext.core.p_.call(null,container,"%s was closed.",container_name);
} else {
if(cljs.core.empty_QMARK_.call(null,items)){
return advenjure.gettext.core.p_.call(null,container,"%s was empty.",container_name);
} else {
if(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,items))){
return advenjure.gettext.core._.call(null,"%s contained %s",container_name,advenjure.items.print_list_item.call(null,cljs.core.first.call(null,items)));
} else {
if(cljs.core._EQ_.call(null,(2),cljs.core.count.call(null,items))){
return advenjure.gettext.core._.call(null,"%s contained %s and %s",container_name,advenjure.items.print_list_item.call(null,cljs.core.first.call(null,items)),advenjure.items.print_list_item.call(null,cljs.core.second.call(null,items)));
} else {
return advenjure.gettext.core._.call(null,"%s contained:%s",container_name,advenjure.items.print_list.call(null,items));

}
}
}
}
} else {
return null;
}
});

advenjure.items.describe_container.cljs$lang$maxFixedArity = 3;

/**
 * Return items inside a container only if not closed.
 */
advenjure.items.visible_items = (function advenjure$items$visible_items(container){
if(cljs.core.truth_(new cljs.core.Keyword(null,"closed","closed",-919675359).cljs$core$IFn$_invoke$arity$1(container))){
return cljs.core.PersistentHashSet.EMPTY;
} else {
return new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(container);
}
});
/**
 * Get the spec for the items with the given name, if it's in the given set,
 *   or is contained by one of its items. Returns a sequence (not a single item).
 */
advenjure.items.get_from = (function advenjure$items$get_from(item_set,item_name){
return cljs.core.concat.call(null,cljs.core.filter.call(null,(function (p1__22061_SHARP_){
return cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([item_name], true),new cljs.core.Keyword(null,"names","names",-1943074658).cljs$core$IFn$_invoke$arity$1(p1__22061_SHARP_));
}),item_set),cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__22062_SHARP_){
return advenjure$items$get_from.call(null,new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(p1__22062_SHARP_),item_name);
}),cljs.core.filter.call(null,(function (p1__22063_SHARP_){
return cljs.core.not_empty.call(null,advenjure.items.visible_items.call(null,p1__22063_SHARP_));
}),item_set))));
});
/**
 * Try to -recursively- remove the item from the given set. It takes a full
 *   item, not a name. Return the new state of the set, if the item is not found,
 *   return the set unmodified.
 */
advenjure.items.remove_from = (function advenjure$items$remove_from(item_set,item_spec){
if(cljs.core.contains_QMARK_.call(null,item_set,item_spec)){
return cljs.core.disj.call(null,item_set,item_spec);
} else {
return cljs.core.set.call(null,cljs.core.map.call(null,(function (item){
var temp__4655__auto__ = new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(item);
if(cljs.core.truth_(temp__4655__auto__)){
var inner = temp__4655__auto__;
return cljs.core.assoc.call(null,item,new cljs.core.Keyword(null,"items","items",1031954938),advenjure$items$remove_from.call(null,inner,item_spec));
} else {
return item;
}
}),item_set));
}
});
/**
 * Look for the old-item in the given set, remove it and put the new-item in the same place.
 *   Return the new state of the set.
 */
advenjure.items.replace_from = (function advenjure$items$replace_from(item_set,old_item,new_item){
if(cljs.core.contains_QMARK_.call(null,item_set,old_item)){
return cljs.core.conj.call(null,cljs.core.disj.call(null,item_set,old_item),new_item);
} else {
return cljs.core.set.call(null,cljs.core.map.call(null,(function (item){
var temp__4655__auto__ = new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(item);
if(cljs.core.truth_(temp__4655__auto__)){
var inner = temp__4655__auto__;
return cljs.core.assoc.call(null,item,new cljs.core.Keyword(null,"items","items",1031954938),advenjure$items$replace_from.call(null,inner,old_item,new_item));
} else {
return item;
}
}),item_set));
}
});
advenjure.items.all_items = (function advenjure$items$all_items(item_set){
return cljs.core.concat.call(null,item_set,cljs.core.mapcat.call(null,(function (p1__22101_SHARP_){
return advenjure$items$all_items.call(null,advenjure.items.visible_items.call(null,p1__22101_SHARP_));
}),item_set));
});
advenjure.items.all_item_names = cljs.core.comp.call(null,(function (p1__22102_SHARP_){
return cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"names","names",-1943074658),p1__22102_SHARP_);
}),advenjure.items.all_items);

//# sourceMappingURL=items.js.map?rel=1605080716638