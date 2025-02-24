declare global {
  interface Object {
    /**
     * The `$` method from `js-pipe-op` is added to the base object prototype, making it accessible to all objects. This method takes a function as an argument and invokes it with `this` as the first parameter. The result of the function call is then returned. Essentially, the `$` method functions like the pipeline operator.
     *
     * See: [proposal-pipeline-operator](https://github.com/tc39/proposal-pipeline-operator)
     * 
     * If `this` is a `Promise`, then the callback receives the awaited value.
     */
    $<T, Y>(this: Promise<T>, callback: (val: T) => Promise<Y> | Y): Promise<Y>;
    $<T, Y>(this: T, callback: (val: T) => Y): Y;
  }
}

export {};
