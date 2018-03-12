# google_mapddd

Typescript ReferenceError: exports is not defined

https://stackoverflow.com/questions/43042889/typescript-referenceerror-exports-is-not-defined

```html
 <!-- Few other Solutions for this issue -->

<!-- Add the following line before other references to Javascript. This is a nice little hack. -->

 <script>var exports = {};</script>

<!-- This issue occurs with the latest version of TypeScript, this error can be eliminated by referring to typescript version 2.1.6 -->
```