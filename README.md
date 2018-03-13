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

https://www.youtube.com/watch?time_continue=1&v=uDy_cvf4nDg
