// Compiled by ClojureScript 1.9.229 {}
goog.provide('advenjure.text.en_past');
goog.require('cljs.core');
advenjure.text.en_past.starts_with_vowel = (function advenjure$text$en_past$starts_with_vowel(ctx){
var vowel_QMARK_ = cljs.core.set.call(null,"aeiouAEIOU");
return vowel_QMARK_.call(null,cljs.core.ffirst.call(null,new cljs.core.Keyword(null,"names","names",-1943074658).cljs$core$IFn$_invoke$arity$1(ctx)));
});
advenjure.text.en_past.dictionary = new cljs.core.PersistentArrayMap(null, 1, ["a %s",(function (p1__21722_SHARP_){
if(cljs.core.truth_(advenjure.text.en_past.starts_with_vowel.call(null,p1__21722_SHARP_))){
return "an %s";
} else {
return "a %s";
}
})], null);

//# sourceMappingURL=en_past.js.map?rel=1605080716284