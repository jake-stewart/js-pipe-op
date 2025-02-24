# js-pipe-op

Adds a `$` method to all objects, inspired by the proposed [Pipeline Operator](https://github.com/tc39/proposal-pipeline-operator).

Promises are awaited before entering the pipe, so it works well for both synchronous and asynchronous code.

TypeScript definitions are included.

### Usage Example
```js
import "js-pipe-op";

const foo = "foo:1,bar:2"
    .split(",")
    .map(s => s.split(":"))
    .$(Object.fromEntries)
    .$(obj => obj.foo);
```

### Install
Run `npm install js-pipe-op`. Then import `js-pipe-op` somewhere in your code. If you import it at the root of your project, you only need to import it once.
