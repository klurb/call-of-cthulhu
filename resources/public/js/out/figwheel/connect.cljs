(ns figwheel.connect (:require [advenjure.ui.input] [figwheel.client] [figwheel.client.utils] [cthulhu.core]))
(figwheel.client/start {:load-warninged-code true, :before-jsload (fn [& x] (if js/advenjure.ui.input.figwheel-cleanup (apply js/advenjure.ui.input.figwheel-cleanup x) (figwheel.client.utils/log :debug "Figwheel: :before-jsload hook 'advenjure.ui.input/figwheel-cleanup' is missing"))), :build-id "dev", :websocket-url "ws://localhost:3449/figwheel-ws"})

