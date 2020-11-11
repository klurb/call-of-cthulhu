// Compiled by ClojureScript 1.9.229 {}
goog.provide('advenjure.rooms');
goog.require('cljs.core');
goog.require('advenjure.items');
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
advenjure.rooms.Room = (function (name,description,__meta,__extmap,__hash){
this.name = name;
this.description = description;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
advenjure.rooms.Room.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__21077__auto__,k__21078__auto__){
var self__ = this;
var this__21077__auto____$1 = this;
return cljs.core._lookup.call(null,this__21077__auto____$1,k__21078__auto__,null);
});

advenjure.rooms.Room.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__21079__auto__,k23297,else__21080__auto__){
var self__ = this;
var this__21079__auto____$1 = this;
var G__23300 = (((k23297 instanceof cljs.core.Keyword))?k23297.fqn:null);
switch (G__23300) {
case "name":
return self__.name;

break;
case "description":
return self__.description;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k23297,else__21080__auto__);

}
});

advenjure.rooms.Room.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__21091__auto__,writer__21092__auto__,opts__21093__auto__){
var self__ = this;
var this__21091__auto____$1 = this;
var pr_pair__21094__auto__ = ((function (this__21091__auto____$1){
return (function (keyval__21095__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__21092__auto__,cljs.core.pr_writer,""," ","",opts__21093__auto__,keyval__21095__auto__);
});})(this__21091__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__21092__auto__,pr_pair__21094__auto__,"#advenjure.rooms.Room{",", ","}",opts__21093__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"description","description",-1428560544),self__.description],null))], null),self__.__extmap));
});

advenjure.rooms.Room.prototype.cljs$core$IIterable$ = true;

advenjure.rooms.Room.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__23296){
var self__ = this;
var G__23296__$1 = this;
return (new cljs.core.RecordIter((0),G__23296__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"description","description",-1428560544)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

advenjure.rooms.Room.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__21075__auto__){
var self__ = this;
var this__21075__auto____$1 = this;
return self__.__meta;
});

advenjure.rooms.Room.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__21071__auto__){
var self__ = this;
var this__21071__auto____$1 = this;
return (new advenjure.rooms.Room(self__.name,self__.description,self__.__meta,self__.__extmap,self__.__hash));
});

advenjure.rooms.Room.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__21081__auto__){
var self__ = this;
var this__21081__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

advenjure.rooms.Room.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__21072__auto__){
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

advenjure.rooms.Room.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__21073__auto__,other__21074__auto__){
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

advenjure.rooms.Room.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__21086__auto__,k__21087__auto__){
var self__ = this;
var this__21086__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"description","description",-1428560544),null,new cljs.core.Keyword(null,"name","name",1843675177),null], null), null),k__21087__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__21086__auto____$1),self__.__meta),k__21087__auto__);
} else {
return (new advenjure.rooms.Room(self__.name,self__.description,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__21087__auto__)),null));
}
});

advenjure.rooms.Room.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__21084__auto__,k__21085__auto__,G__23296){
var self__ = this;
var this__21084__auto____$1 = this;
var pred__23313 = cljs.core.keyword_identical_QMARK_;
var expr__23314 = k__21085__auto__;
if(cljs.core.truth_(pred__23313.call(null,new cljs.core.Keyword(null,"name","name",1843675177),expr__23314))){
return (new advenjure.rooms.Room(G__23296,self__.description,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__23313.call(null,new cljs.core.Keyword(null,"description","description",-1428560544),expr__23314))){
return (new advenjure.rooms.Room(self__.name,G__23296,self__.__meta,self__.__extmap,null));
} else {
return (new advenjure.rooms.Room(self__.name,self__.description,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__21085__auto__,G__23296),null));
}
}
});

advenjure.rooms.Room.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__21089__auto__){
var self__ = this;
var this__21089__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"description","description",-1428560544),self__.description],null))], null),self__.__extmap));
});

advenjure.rooms.Room.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__21076__auto__,G__23296){
var self__ = this;
var this__21076__auto____$1 = this;
return (new advenjure.rooms.Room(self__.name,self__.description,G__23296,self__.__extmap,self__.__hash));
});

advenjure.rooms.Room.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__21082__auto__,entry__21083__auto__){
var self__ = this;
var this__21082__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__21083__auto__)){
return cljs.core._assoc.call(null,this__21082__auto____$1,cljs.core._nth.call(null,entry__21083__auto__,(0)),cljs.core._nth.call(null,entry__21083__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__21082__auto____$1,entry__21083__auto__);
}
});

advenjure.rooms.Room.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"description","description",211970983,null)], null);
});

advenjure.rooms.Room.cljs$lang$type = true;

advenjure.rooms.Room.cljs$lang$ctorPrSeq = (function (this__21111__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"advenjure.rooms/Room");
});

advenjure.rooms.Room.cljs$lang$ctorPrWriter = (function (this__21111__auto__,writer__21112__auto__){
return cljs.core._write.call(null,writer__21112__auto__,"advenjure.rooms/Room");
});

advenjure.rooms.__GT_Room = (function advenjure$rooms$__GT_Room(name,description){
return (new advenjure.rooms.Room(name,description,null,null,null));
});

advenjure.rooms.map__GT_Room = (function advenjure$rooms$map__GT_Room(G__23298){
return (new advenjure.rooms.Room(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(G__23298),new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(G__23298),null,cljs.core.dissoc.call(null,G__23298,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"description","description",-1428560544)),null));
});

advenjure.rooms.make = (function advenjure$rooms$make(var_args){
var args__21537__auto__ = [];
var len__21530__auto___23396 = arguments.length;
var i__21531__auto___23398 = (0);
while(true){
if((i__21531__auto___23398 < len__21530__auto___23396)){
args__21537__auto__.push((arguments[i__21531__auto___23398]));

var G__23402 = (i__21531__auto___23398 + (1));
i__21531__auto___23398 = G__23402;
continue;
} else {
}
break;
}

var argseq__21538__auto__ = ((((2) < args__21537__auto__.length))?(new cljs.core.IndexedSeq(args__21537__auto__.slice((2)),(0),null)):null);
return advenjure.rooms.make.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__21538__auto__);
});

advenjure.rooms.make.cljs$core$IFn$_invoke$arity$variadic = (function (name,description,p__23392){
var map__23393 = p__23392;
var map__23393__$1 = ((((!((map__23393 == null)))?((((map__23393.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23393.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23393):map__23393);
var extras = map__23393__$1;
return advenjure.rooms.map__GT_Room.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"description","description",-1428560544),description], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"items","items",1031954938),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"item-descriptions","item-descriptions",-708662132),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"visited","visited",-1610853875),false], null),extras));
});

advenjure.rooms.make.cljs$lang$maxFixedArity = (2);

advenjure.rooms.make.cljs$lang$applyTo = (function (seq23386){
var G__23387 = cljs.core.first.call(null,seq23386);
var seq23386__$1 = cljs.core.next.call(null,seq23386);
var G__23388 = cljs.core.first.call(null,seq23386__$1);
var seq23386__$2 = cljs.core.next.call(null,seq23386__$1);
return advenjure.rooms.make.cljs$core$IFn$_invoke$arity$variadic(G__23387,G__23388,seq23386__$2);
});

advenjure.rooms.names = (function advenjure$rooms$names(room){
return cljs.core.map.call(null,clojure.string.lower_case,cljs.core.concat.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(room)],null)),new cljs.core.Keyword(null,"synonyms","synonyms",1693474381).cljs$core$IFn$_invoke$arity$1(room)));
});
/**
 * Add the item to the room with an optional custom description.
 *   Returns the updated room.
 */
advenjure.rooms.add_item = (function advenjure$rooms$add_item(var_args){
var args23431 = [];
var len__21530__auto___23448 = arguments.length;
var i__21531__auto___23449 = (0);
while(true){
if((i__21531__auto___23449 < len__21530__auto___23448)){
args23431.push((arguments[i__21531__auto___23449]));

var G__23450 = (i__21531__auto___23449 + (1));
i__21531__auto___23449 = G__23450;
continue;
} else {
}
break;
}

var G__23440 = args23431.length;
switch (G__23440) {
case 2:
return advenjure.rooms.add_item.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return advenjure.rooms.add_item.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23431.length)].join('')));

}
});

advenjure.rooms.add_item.cljs$core$IFn$_invoke$arity$2 = (function (room,item){
return cljs.core.update_in.call(null,room,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938)], null),cljs.core.conj,item);
});

advenjure.rooms.add_item.cljs$core$IFn$_invoke$arity$3 = (function (room,item,description){
return cljs.core.assoc_in.call(null,cljs.core.update_in.call(null,room,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938)], null),cljs.core.conj,item),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"item-descriptions","item-descriptions",-708662132),advenjure.items.iname.call(null,item)], null),description);
});

advenjure.rooms.add_item.cljs$lang$maxFixedArity = 3;

/**
 * Describes the room.
 *   If the room was not visited and there's an initial-description supplied use
 *   it, otherwise use the default description.
 *   The items contained in the room will be listed. If there are custom item
 *   descriptions defined use them instead of the default list description.
 */
advenjure.rooms.describe = (function advenjure$rooms$describe(room){
var room_descr = (cljs.core.truth_(new cljs.core.Keyword(null,"visited","visited",-1610853875).cljs$core$IFn$_invoke$arity$1(room))?new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(room):(function (){var or__20455__auto__ = new cljs.core.Keyword(null,"initial-description","initial-description",-1214943108).cljs$core$IFn$_invoke$arity$1(room);
if(cljs.core.truth_(or__20455__auto__)){
return or__20455__auto__;
} else {
return new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(room);
}
})());
var current_items = cljs.core.set.call(null,cljs.core.map.call(null,advenjure.items.iname,new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(room)));
var custom_items = cljs.core.filter.call(null,((function (room_descr,current_items){
return (function (p1__23456_SHARP_){
return current_items.call(null,cljs.core.first.call(null,p1__23456_SHARP_));
});})(room_descr,current_items))
,new cljs.core.Keyword(null,"item-descriptions","item-descriptions",-708662132).cljs$core$IFn$_invoke$arity$1(room));
var custom_descr = clojure.string.join.call(null," ",cljs.core.remove.call(null,clojure.string.blank_QMARK_,cljs.core.vals.call(null,custom_items)));
var custom_prefix = (cljs.core.truth_(cljs.core.not_empty.call(null,custom_descr))?" ":null);
var remain_items = cljs.core.filter.call(null,((function (room_descr,current_items,custom_items,custom_descr,custom_prefix){
return (function (p1__23457_SHARP_){
return (cljs.core.get.call(null,new cljs.core.Keyword(null,"item-descriptions","item-descriptions",-708662132).cljs$core$IFn$_invoke$arity$1(room),advenjure.items.iname.call(null,p1__23457_SHARP_)) == null);
});})(room_descr,current_items,custom_items,custom_descr,custom_prefix))
,new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(room));
var item_descr = cljs.core.reduce.call(null,((function (room_descr,current_items,custom_items,custom_descr,custom_prefix,remain_items){
return (function (p1__23458_SHARP_,p2__23459_SHARP_){
return [cljs.core.str(p1__23458_SHARP_),cljs.core.str(advenjure.gettext.core._.call(null,"\nThere was %s there.",advenjure.items.print_list_item.call(null,p2__23459_SHARP_))),cljs.core.str(advenjure.items.describe_container.call(null,p2__23459_SHARP_," "))].join('');
});})(room_descr,current_items,custom_items,custom_descr,custom_prefix,remain_items))
,"",remain_items);
if(cljs.core.truth_(cljs.core.not_empty.call(null,item_descr))){
return [cljs.core.str(room_descr),cljs.core.str(custom_prefix),cljs.core.str(custom_descr),cljs.core.str(item_descr)].join('');
} else {
return [cljs.core.str(room_descr),cljs.core.str(custom_prefix),cljs.core.str(custom_descr)].join('');
}
});
advenjure.rooms.matching_directions = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"southwest","southwest",-212094911),new cljs.core.Keyword(null,"down","down",1565245570),new cljs.core.Keyword(null,"west","west",708776677),new cljs.core.Keyword(null,"south","south",1586796293),new cljs.core.Keyword(null,"northwest","northwest",121027401),new cljs.core.Keyword(null,"east","east",1189821678),new cljs.core.Keyword(null,"up","up",-269712113),new cljs.core.Keyword(null,"southeast","southeast",565965044),new cljs.core.Keyword(null,"northeast","northeast",-393120937),new cljs.core.Keyword(null,"north","north",651323902)],[new cljs.core.Keyword(null,"northeast","northeast",-393120937),new cljs.core.Keyword(null,"up","up",-269712113),new cljs.core.Keyword(null,"east","east",1189821678),new cljs.core.Keyword(null,"north","north",651323902),new cljs.core.Keyword(null,"southeast","southeast",565965044),new cljs.core.Keyword(null,"west","west",708776677),new cljs.core.Keyword(null,"down","down",1565245570),new cljs.core.Keyword(null,"northwest","northwest",121027401),new cljs.core.Keyword(null,"southwest","southwest",-212094911),new cljs.core.Keyword(null,"south","south",1586796293)]);
advenjure.rooms.directions = cljs.core.set.call(null,cljs.core.vals.call(null,advenjure.rooms.matching_directions));
/**
 * Connect r1 with r2 in the given direction and make the corresponding
 *   connection in r2.
 */
advenjure.rooms.connect = (function advenjure$rooms$connect(room_map,r1,direction,r2){
return cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,room_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r1,direction], null),r2),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r2,cljs.core.get.call(null,advenjure.rooms.matching_directions,direction)], null),r1);
});
/**
 * Connect r1 with r2 without the corresponding connection in r2. Note that
 *   r2 can be a condition function or string to make a conditional connection.
 */
advenjure.rooms.one_way_connect = (function advenjure$rooms$one_way_connect(room_map,r1,direction,r2){
return cljs.core.assoc_in.call(null,room_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r1,direction], null),r2);
});
/**
 * Check if the given room has a connection to a room with the given kw. If it
 *   does, return the direction.
 */
advenjure.rooms.connection_dir = (function advenjure$rooms$connection_dir(room_spec,roomkw){
return cljs.core.some.call(null,(function (p1__23510_SHARP_){
var and__20443__auto__ = cljs.core._EQ_.call(null,p1__23510_SHARP_.call(null,room_spec),roomkw);
if(and__20443__auto__){
return p1__23510_SHARP_;
} else {
return and__20443__auto__;
}
}),advenjure.rooms.directions);
});
/**
 * Given a room-map and a current room kw return a map of room name (including
 *   synonyms) to room keyword, considering only accesible and visited rooms.
 */
advenjure.rooms.visible_name_mappings = (function advenjure$rooms$visible_name_mappings(room_map,current){
return cljs.core.apply.call(null,cljs.core.merge,cljs.core.map.call(null,(function (p1__23520_SHARP_){
return cljs.core.zipmap.call(null,advenjure.rooms.names.call(null,p1__23520_SHARP_.call(null,room_map)),cljs.core.repeat.call(null,p1__23520_SHARP_));
}),cljs.core.filter.call(null,(function (p1__23519_SHARP_){
var or__20455__auto__ = cljs.core.get_in.call(null,room_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23519_SHARP_,new cljs.core.Keyword(null,"known","known",1655795903)], null));
if(cljs.core.truth_(or__20455__auto__)){
return or__20455__auto__;
} else {
return cljs.core.get_in.call(null,room_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23519_SHARP_,new cljs.core.Keyword(null,"visited","visited",-1610853875)], null));
}
}),cljs.core.map.call(null,cljs.core.second,cljs.core.filter.call(null,cljs.core.comp.call(null,advenjure.rooms.directions,cljs.core.first),current.call(null,room_map))))));
});

//# sourceMappingURL=rooms.js.map?rel=1605080717047