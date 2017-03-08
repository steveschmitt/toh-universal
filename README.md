# toh-universal
### Tour of Heroes sample app that runs server-side with Angular Universal

This app is adapted from the [Tour of Heroes](https://angular.io/resources/live-examples/toh-6/ts/eplnkr.html) app from the [Angular Tutorial](https://angular.io/docs/ts/latest/tutorial/)

This app can be run in three different ways.
1. Run with JIT
2. Run with AOT
3. Run with Universal

## Run with JIT (client-side module loading and compilation)
This is the same as shown in the [Tour of Heroes tutorial](https://angular.io/docs/ts/latest/tutorial/).  The **build** step just compiles TypeScript to JavaScript.  The **serve** steps starts lite-server with `src` as the root directory.  In the browser, the app starts by first loading SystemJS, which then loads the JavaScript, HTML, and CSS resources required by the app.
```
npm install
npm run clean
npm run build
npm run serve
```

## Run with AOT (ahead-of-time compilation)
This comes from the [AOT Cookbook](https://angular.io/docs/ts/latest/cookbook/aot-compiler.html#!#toh).  The **build:aot** step compiles the Angular modules into executable JavaScript in a single `build.js` file.  The **serve:aot** step starts lite-server with `aot` as the root directory.  In the browser, `build.js` starts the compiled app.
```
npm install
npm run clean
npm run build:aot
npm run serve:aot
```

## Run with Universal (server-side rendering)
The Universal version is actually two different compilations of the app.  The **build:aot** step is the same as the above, and compiles the app that will be run in the browser.  The **build:uni** step compiles the app to run on the server, and creates a `main.js` containing the server version of the app.  The **server:uni** step runs an [express](https://expressjs.com/) server with a special engine that delegates page rendering to the server-side Angular application.
```
npm install
npm run clean
npm run build:aot
npm run build:uni
npm run serve:uni
```
When the browser retrieves a page from the Universal server, the server uses the server-compiled app code to render the complete page, and sends the page back to the browser.  No Angular code is running in the browser.  When a link is clicked that routes to a different page, another request is sent to the server, which responds with the new rendered page.

Normally, this behavior would persist only until the actual Angular app is loaded.  Then the app would take over, and further routing would be handled within the app itself, without fetching pages from the server.  

For this demonstration, the app doesn't load right away so that the routing behavior can be examined.  Instead, the Universal version has a special "Load App" button at the bottom of the main view.  This loads the application on demand.  Normally, the loading would happen automatically as soon as the browser was able to parse the JavaScript, as in the AOT version above.  Here we have made it a manual operation so we can watch it happen.
