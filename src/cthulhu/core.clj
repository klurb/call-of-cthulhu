(ns cthulhu.core
    (:require [cthulhu.game :refer [run-game]])
    (:gen-class))

(defn -main [& args] (run-game))
