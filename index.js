function objectPipe(cb) {
  return this instanceof Promise ? this.then(cb) : cb(this);
}

function primitivePipe(cb) {
    return cb(this.valueOf());
}

Object.prototype.$ = objectPipe;
String.prototype.$ = primitivePipe;
Number.prototype.$ = primitivePipe;
Boolean.prototype.$ = primitivePipe;
Symbol.prototype.$ = primitivePipe;

module.exports = {}
