# google_mapddd

Typescript ReferenceError: exports is not defined

https://stackoverflow.com/questions/43042889/typescript-referenceerror-exports-is-not-defined

```html
 <!-- Few other Solutions for this issue -->

<!-- Add the following line before other references to Javascript. This is a nice little hack. -->

 <script>var exports = {};</script>

<!-- This issue occurs with the latest version of TypeScript, this error can be eliminated by referring to typescript version 2.1.6 -->

```




# How to use Typescript with native ES6 Promises  这个已经解决；


Alternative #1
Use the target and lib compiler options to compile directly to es5 without needing to install the es6-shim. (Tested with TypeScript 2.1.4). In the lib section, use either es2016 or es2015.promise.

```json
// tsconfig.json
{
    "compilerOptions": {
        "target": "es5",
        "lib": [
            "es2015.promise",
            "dom",
            "es5"
        ]
    },
    "include": [
        "src/**/*.ts"
    ],
    "exclude": [
        "node_modules"
    ]
}

```

It's unclear what lib option you are using. es2015.promise, es5, dom will probably give you the appropriate results.  搜索关键字：typescript es5 promise dom

```bash
npm install --save @types/es6-promise

```

### 跨域问题的解决

https://stackoverflow.com/questions/20035101/why-does-my-javascript-get-a-no-access-control-allow-origin-header-is-present


The easy way is to just add the extension in google chrome to allow access using CORS.

(https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi?hl=en-US)

Just enable this extension whenever you want allow access to no 'access-control-allow-origin' header request.


### 编译后的js常报undefine的错误

```js
class GoogleMap {
  
    //  为其赋一个初始值，防止在编译后的js上面，调用marker的方法时，marker会报undefine; 因为类型不会参与编译，所以我们去调用marker.push方法没用，会报undefine；
    // 所以除了给其一个初始值之外，还应给其一个初始的空对象； 这是一个关于底层理解的要点；
     markers:Array<any>=[];
     mapElement: JQuery;
     mapDom: Element;


```