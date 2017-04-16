# typescript-multipart-library-template

[![Build status](https://travis-ci.org/AlexVangelov/typescript-multipart-library-template.svg)](https://travis-ci.org/AlexVangelov/typescript-multipart-library-template)

Typescript multi-part library template.

  * Typescript `^2.2.2`
  * Node.js library output with typings (`tsc`)
  * Browser multi-library output with no dependencies (`webpack@2`).
  * Tests (`Karma` + `Jasmine` + `PhantomJs`) with console friendly output.
  * `CodeCoverage` for Typescript.
  * `Travis` continuous integration.
  * `npm publish` ready configuration.

```
    yarn install
-----------------------------------------------------------
    npm run build # Node.js /lib output
    npm run dist  # Generate /dist browser libraries
    npm test      # Run tests and generate /coverage report
    npm start     # Typescript watch
```
The tricky part with UMD multipart libraries is that namespace modules can be loaded on the fly in the browser.

Extensions can be loaded with `System.js` or directly by appending scripts to the document:

&raquo; `document.body.appendChild(document.createElement("script")).src = "https://unpkg.com/typescript-multipart-library-template/dist/multipart-library.core.js";`
> window.MultipartLibrary -> `Object {core: Object}`

&raquo; `document.body.appendChild(document.createElement("script")).src = "https://unpkg.com/typescript-multipart-library-template/dist/multipart-library.extension.js";`
> window.MultipartLibrary -> `Object {core: Object, extension: Object}`

```
$ npm run dist

> typescript-multipart-library-template@1.0.0 dist
> webpack --progress --profile --bail --optimize-minimize

 10% building modules 0/2 modules 2 active ...brary-template/src/extension/index.ts
[at-loader] Using typescript@2.2.2 from typescript and "tsconfig.json"

1281ms building modules
3ms sealing
0ms optimizing
0ms basic module optimization
1ms module optimization
2ms advanced module optimization
3ms basic chunk optimization
0ms chunk optimization
0ms advanced chunk optimization
1ms module and chunk tree optimization
1ms module reviving
1ms module order optimization
1ms module id optimization
1ms chunk reviving
2ms chunk order optimization
4ms chunk id optimization
4ms hashing
0ms module assets processing
10ms chunk assets processing
1ms additional chunk assets processing
0ms recording
243ms additional asset processing
68ms chunk asset optimization
 94% asset optimization
[at-loader] Checking started in a separate process...

[at-loader] Ok, 0.311 sec.
313ms asset optimization
8ms emitting
Hash: 327182878769d296c414
Version: webpack 2.4.1
Time: 2008ms
                             Asset       Size  Chunks             Chunk Names
    multipart-library.extension.js  695 bytes       0  [emitted]  extension
         multipart-library.core.js    1.94 kB       1  [emitted]  core
multipart-library.extension.js.map    3.46 kB       0  [emitted]  extension
     multipart-library.core.js.map    16.8 kB       1  [emitted]  core
   [0] ./core/index.ts 368 bytes {1} [built]
        factory:42ms building:1237ms = 1279ms
   [1] ./extension/index.ts 689 bytes {0} [built]
        factory:42ms building:1272ms = 1314ms
```
```
$ npm t

> typescript-multipart-library-template@1.0.0 test /home/alex/nodespace/typescript-multipart-library-template
> karma start


START:
16 04 2017 12:47:00.006:INFO [compiler.karma-typescript]: Compiling project using Typescript 2.2.2
16 04 2017 12:47:01.940:INFO [compiler.karma-typescript]: Compiled 8 files in 1883 ms.
16 04 2017 12:47:02.585:INFO [bundler.karma-typescript]: Bundled imports for 5 file(s) in 142 ms.
16 04 2017 12:47:02.635:INFO [karma]: Karma v1.6.0 server started at http://0.0.0.0:9876/
16 04 2017 12:47:02.637:INFO [launcher]: Launching browser PhantomJS with unlimited concurrency
16 04 2017 12:47:02.644:INFO [launcher]: Starting browser PhantomJS
16 04 2017 12:47:02.910:INFO [PhantomJS 2.1.1 (Linux 0.0.0)]: Connected on socket 9Hx-b2EC0Dg2hml9AAAA with id 13769902
  Core
    ✔ init
  Extension
    ✔ doSomethingAsync
    ✔ doSomethingAsync callback

Finished in 0.053 secs / 0.004 secs @ 12:47:03 GMT-0400 (EDT)

SUMMARY:
✔ 3 tests completed

=============================== Coverage summary ===============================
Statements   : 100% ( 18/18 )
Branches     : 100% ( 2/2 )
Functions    : 100% ( 12/12 )
Lines        : 100% ( 15/15 )
================================================================================
```