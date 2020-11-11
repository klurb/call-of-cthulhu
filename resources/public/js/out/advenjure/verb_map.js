// Compiled by ClojureScript 1.9.229 {}
goog.provide('advenjure.verb_map');
goog.require('cljs.core');
goog.require('advenjure.verbs');
goog.require('advenjure.utils');
goog.require('xregexp');
goog.require('advenjure.gettext.core');
/**
 * Adds the given function as the handler for every verb in the list.
 */
advenjure.verb_map.add_verb = (function advenjure$verb_map$add_verb(verb_map,verbs,handler){
return cljs.core.merge.call(null,verb_map,cljs.core.zipmap.call(null,verbs,cljs.core.repeat.call(null,handler)));
});
/**
 * Allow commands like 'north' and 'n' instead of 'go north'
 */
advenjure.verb_map.add_go_shortcuts = (function advenjure$verb_map$add_go_shortcuts(vmap){
var new_map = vmap;
var G__36853 = cljs.core.keys.call(null,advenjure.utils.direction_mappings);
var vec__36854 = G__36853;
var seq__36855 = cljs.core.seq.call(null,vec__36854);
var first__36856 = cljs.core.first.call(null,seq__36855);
var seq__36855__$1 = cljs.core.next.call(null,seq__36855);
var dir = first__36856;
var remain = seq__36855__$1;
var new_map__$1 = new_map;
var G__36853__$1 = G__36853;
while(true){
var new_map__$2 = new_map__$1;
var vec__36857 = G__36853__$1;
var seq__36858 = cljs.core.seq.call(null,vec__36857);
var first__36859 = cljs.core.first.call(null,seq__36858);
var seq__36858__$1 = cljs.core.next.call(null,seq__36858);
var dir__$1 = first__36859;
var remain__$1 = seq__36858__$1;
if((dir__$1 == null)){
return new_map__$2;
} else {
var regexp = [cljs.core.str("^"),cljs.core.str(dir__$1),cljs.core.str("$")].join('');
var G__36866 = advenjure.verb_map.add_verb.call(null,new_map__$2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [regexp], null),((function (new_map__$1,G__36853__$1,regexp,new_map__$2,vec__36857,seq__36858,first__36859,seq__36858__$1,dir__$1,remain__$1,new_map,G__36853,vec__36854,seq__36855,first__36856,seq__36855__$1,dir,remain){
return (function (p1__36839_SHARP_){
return advenjure.verbs.go.call(null,p1__36839_SHARP_,dir__$1);
});})(new_map__$1,G__36853__$1,regexp,new_map__$2,vec__36857,seq__36858,first__36859,seq__36858__$1,dir__$1,remain__$1,new_map,G__36853,vec__36854,seq__36855,first__36856,seq__36855__$1,dir,remain))
);
var G__36867 = remain__$1;
new_map__$1 = G__36866;
G__36853__$1 = G__36867;
continue;
}
break;
}
});
advenjure.verb_map.default_map = advenjure.verb_map.add_verb.call(null,advenjure.verb_map.add_verb.call(null,advenjure.verb_map.add_verb.call(null,advenjure.verb_map.add_verb.call(null,advenjure.verb_map.add_verb.call(null,advenjure.verb_map.add_verb.call(null,advenjure.verb_map.add_verb.call(null,advenjure.verb_map.add_verb.call(null,advenjure.verb_map.add_verb.call(null,advenjure.verb_map.add_verb.call(null,advenjure.verb_map.add_verb.call(null,advenjure.verb_map.add_verb.call(null,advenjure.verb_map.add_verb.call(null,advenjure.verb_map.add_verb.call(null,advenjure.verb_map.add_verb.call(null,advenjure.verb_map.add_verb.call(null,advenjure.verb_map.add_verb.call(null,advenjure.verb_map.add_verb.call(null,advenjure.verb_map.add_verb.call(null,advenjure.verb_map.add_verb.call(null,advenjure.verb_map.add_verb.call(null,advenjure.verb_map.add_verb.call(null,advenjure.verb_map.add_verb.call(null,advenjure.verb_map.add_verb.call(null,advenjure.verb_map.add_verb.call(null,advenjure.verb_map.add_verb.call(null,advenjure.verb_map.add_verb.call(null,advenjure.verb_map.add_verb.call(null,advenjure.verb_map.add_verb.call(null,advenjure.verb_map.add_go_shortcuts.call(null,cljs.core.PersistentArrayMap.EMPTY),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [advenjure.gettext.core._.call(null,"^go (?!back$)(?<dir>.*)"),advenjure.gettext.core._.call(null,"^go to (?<dir>.*)"),advenjure.gettext.core._.call(null,"^go$")], null),advenjure.verbs.go),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [advenjure.gettext.core._.call(null,"^go back$"),advenjure.gettext.core._.call(null,"^back$"),advenjure.gettext.core._.call(null,"^b$")], null),advenjure.verbs.go_back),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [advenjure.gettext.core._.call(null,"^look to (?<dir>.*)$"),advenjure.gettext.core._.call(null,"^look toward (?<dir>.*)$"),advenjure.gettext.core._.call(null,"^look to$"),advenjure.gettext.core._.call(null,"^look toward$")], null),advenjure.verbs.look_to),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [advenjure.gettext.core._.call(null,"^look$"),advenjure.gettext.core._.call(null,"^look around$"),advenjure.gettext.core._.call(null,"^l$")], null),advenjure.verbs.look),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [advenjure.gettext.core._.call(null,"^look at (?<item>.*)"),advenjure.gettext.core._.call(null,"^look at$"),advenjure.gettext.core._.call(null,"^describe (?<item>.*)"),advenjure.gettext.core._.call(null,"^describe$")], null),advenjure.verbs.look_at),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [advenjure.gettext.core._.call(null,"^take all$"),advenjure.gettext.core._.call(null,"^take everything$"),advenjure.gettext.core._.call(null,"^get all$"),advenjure.gettext.core._.call(null,"^get everything$")], null),advenjure.verbs.take_all),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [advenjure.gettext.core._.call(null,"^look in (?<item>.*)"),advenjure.gettext.core._.call(null,"^look in$"),advenjure.gettext.core._.call(null,"^look inside (?<item>.*)"),advenjure.gettext.core._.call(null,"^look inside$")], null),advenjure.verbs.look_inside),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [advenjure.gettext.core._.call(null,"^take (?!all|everything$)(?<item>.*)"),advenjure.gettext.core._.call(null,"^take$"),advenjure.gettext.core._.call(null,"^get (?!all|everything$)(?<item>.*)"),advenjure.gettext.core._.call(null,"^get$"),advenjure.gettext.core._.call(null,"^pick (?<item>.*)"),advenjure.gettext.core._.call(null,"^pick$"),advenjure.gettext.core._.call(null,"^pick up (?<item>.*)"),advenjure.gettext.core._.call(null,"^pick (?<item>.*) up$"),advenjure.gettext.core._.call(null,"^pick up$")], null),advenjure.verbs.take_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [advenjure.gettext.core._.call(null,"^move (?<item>.*)"),advenjure.gettext.core._.call(null,"^move$")], null),advenjure.verbs.move),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [advenjure.gettext.core._.call(null,"^pull (?<item>.*)"),advenjure.gettext.core._.call(null,"^pull$")], null),advenjure.verbs.pull),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [advenjure.gettext.core._.call(null,"^push (?<item>.*)"),advenjure.gettext.core._.call(null,"^push$")], null),advenjure.verbs.push),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [advenjure.gettext.core._.call(null,"^inventory$"),advenjure.gettext.core._.call(null,"^i$")], null),advenjure.verbs.inventory),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [advenjure.gettext.core._.call(null,"^read (?<item>.*)"),advenjure.gettext.core._.call(null,"^read$")], null),advenjure.verbs.read_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [advenjure.gettext.core._.call(null,"^open (?<item>.*)"),advenjure.gettext.core._.call(null,"^open$")], null),advenjure.verbs.open),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [advenjure.gettext.core._.call(null,"^close (?<item>.*)"),advenjure.gettext.core._.call(null,"^close$")], null),advenjure.verbs.close),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [advenjure.gettext.core._.call(null,"^use (?<item>.*)$"),advenjure.gettext.core._.call(null,"^use$")], null),advenjure.verbs.use_),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [advenjure.gettext.core._.call(null,"^use (?<item1>.*) with (?<item2>.*)"),advenjure.gettext.core._.call(null,"^use (?<item1>.*) with$"),advenjure.gettext.core._.call(null,"^use (?<item1>.*) on (?<item2>.*)"),advenjure.gettext.core._.call(null,"^use (?<item>.*) on")], null),advenjure.verbs.use_with),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [advenjure.gettext.core._.call(null,"^climb (?<item>.*)"),advenjure.gettext.core._.call(null,"^climb$")], null),advenjure.verbs.climb),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [advenjure.gettext.core._.call(null,"^climb up (?<item>.*)"),advenjure.gettext.core._.call(null,"^climb (?<item>.*) up$"),advenjure.gettext.core._.call(null,"^climb up$")], null),advenjure.verbs.climb_up),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [advenjure.gettext.core._.call(null,"^climb down (?<item>.*)"),advenjure.gettext.core._.call(null,"^climb (?<item>.*) down$"),advenjure.gettext.core._.call(null,"^climb down$")], null),advenjure.verbs.climb_down),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [advenjure.gettext.core._.call(null,"^enter (?<item>.*)"),advenjure.gettext.core._.call(null,"^enter$")], null),advenjure.verbs.enter),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [advenjure.gettext.core._.call(null,"^unlock (?<item1>.*) with (?<item2>.*)"),advenjure.gettext.core._.call(null,"^unlock (?<item>.*)"),advenjure.gettext.core._.call(null,"^unlock (?<item1>.*) with$"),advenjure.gettext.core._.call(null,"^unlock$")], null),advenjure.verbs.unlock),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [advenjure.gettext.core._.call(null,"^open (?<item1>.*) with (?<item2>.*)"),advenjure.gettext.core._.call(null,"^open (?<item>.*) with")], null),advenjure.verbs.open_with),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [advenjure.gettext.core._.call(null,"^talk with (?<item>.*)"),advenjure.gettext.core._.call(null,"^talk to (?<item>.*)"),advenjure.gettext.core._.call(null,"^talk (?<item>.*)")], null),advenjure.verbs.talk),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [advenjure.gettext.core._.call(null,"^save$")], null),advenjure.verbs.save),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [advenjure.gettext.core._.call(null,"^restore$"),advenjure.gettext.core._.call(null,"^load$")], null),advenjure.verbs.restore),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [advenjure.gettext.core._.call(null,"^exit$")], null),advenjure.verbs.exit),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [advenjure.gettext.core._.call(null,"^help$"),advenjure.gettext.core._.call(null,"^info$")], null),advenjure.verbs.help),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [advenjure.gettext.core._.call(null,"^get up$"),advenjure.gettext.core._.call(null,"^stand up$"),advenjure.gettext.core._.call(null,"^stand$")], null),advenjure.verbs.stand);
advenjure.verb_map.sort_verbs = (function advenjure$verb_map$sort_verbs(verb_map){
return cljs.core.reverse.call(null,cljs.core.sort_by.call(null,cljs.core.count,cljs.core.keys.call(null,verb_map)));
});
advenjure.verb_map.msort_verbs = cljs.core.memoize.call(null,advenjure.verb_map.sort_verbs);
advenjure.verb_map.regexp = XRegExp;
advenjure.verb_map.match_verb = (function advenjure$verb_map$match_verb(text,verb){
var vec__36910 = cljs.core.re_find.call(null,advenjure.verb_map.regexp.call(null,verb),text);
var seq__36911 = cljs.core.seq.call(null,vec__36910);
var first__36912 = cljs.core.first.call(null,seq__36911);
var seq__36911__$1 = cljs.core.next.call(null,seq__36911);
var head = first__36912;
var tokens = seq__36911__$1;
var full = vec__36910;
if((!((full == null))) && (!(cljs.core.coll_QMARK_.call(null,full)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [verb,cljs.core.List.EMPTY], null);
} else {
if(cljs.core.truth_(cljs.core.not_empty.call(null,head))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [verb,tokens], null);
} else {
return null;
}
}
});
/**
 * Return [verb tokens] if there's a proper verb at the beginning of text.
 */
advenjure.verb_map.find_verb = (function advenjure$verb_map$find_verb(verb_map,text){
return cljs.core.some.call(null,cljs.core.partial.call(null,advenjure.verb_map.match_verb,text),advenjure.verb_map.msort_verbs.call(null,verb_map));
});

//# sourceMappingURL=verb_map.js.map?rel=1605080728739