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
:bulb: UMD multipart libraries can be loaded on the fly in the browser with `System.js` or directly by appending scripts to the document:

&raquo; `document.body.appendChild(document.createElement("script")).src = "https://unpkg.com/typescript-multipart-library-template/dist/multipart-library.core.js";`
> window.MultipartLibrary -> `Object {core: Object}`

&raquo; `document.body.appendChild(document.createElement("script")).src = "https://unpkg.com/typescript-multipart-library-template/dist/multipart-library.extension.js";`
> window.MultipartLibrary -> `Object {core: Object, extension: Object}`
