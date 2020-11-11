(defproject cthulhu "0.1.0-SNAPSHOT"
  :description "Call of Cthulhu"
  :url "https://github.com/klurb/call-of-cthulhu"
  :license {:name "Eclipse Public License 2.0"
            :url "http://www.eclipse.org/legal/epl-v20.html"}
  :plugins [[lein-cljsbuild "1.1.4"]
            [lein-figwheel "0.5.4-7"]]
  :dependencies [[org.clojure/clojure "1.8.0"]
                 [org.clojure/clojurescript "1.9.229"]
                 [advenjure "0.9.0"]]
  :cljsbuild
  {:builds
   {:main {:source-paths ["src"]
           :compiler {:output-to "resources/public/js/main.js"
                      :main cthulhu.core
                      :optimizations :simple
                      :pretty-print false
                      :optimize-constants true
                      :static-fns true}}

    :dev {:source-paths ["src"]
          :figwheel {:load-warninged-code true
                     :before-jsload "advenjure.ui.input/figwheel-cleanup"}

          :compiler {:output-to "resources/public/js/main.js"
                     :output-dir "resources/public/js/out"
                     :main cthulhu.core
                     :parallel-build true
                     :asset-path "js/out"
                     :optimizations :none
                     :source-map true
                     :pretty-print true}}}}


  :main ^:skip-aot cthulhu.core
  :target-path "target/%s"
  :profiles {:uberjar {:aot :all}})
