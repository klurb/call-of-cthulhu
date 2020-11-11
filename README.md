# Call of Cthulhu
Text adventure inspired by [H. P. Lovecraft](https://en.wikipedia.org/wiki/H._P._Lovecraft) short story [Call of Cthulhu](https://en.wikipedia.org/wiki/The_Call_of_Cthulhu)
The game uses the [advenjure](https://github.com/facundoolano/advenjure) engine.

A WIP version will be playable online (todo...) .

## Usage

Clone the respository and [Install leiningen](http://leiningen.org/#install) if necessary.
To run the game on the terminal:

```
lein run
```

To run the game on the browser, using figwheel for development:

```
lein figwheel dev
```

Then open `http://localhost:3449`.

To compile the optimized JavaScript to run in production:

```
lein cljsbuild once main
```

Then open `resources/public/index.html`.
