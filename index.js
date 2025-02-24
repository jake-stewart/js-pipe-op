Object.prototype.$ = function(cb) {
  return this instanceof Promise ? this.then(cb) : cb(this);
}

module.exports = {}
