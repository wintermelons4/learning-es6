var stdin = {
  _buffer: [],
  _resolvers: [],
  readline: function () {
    if (this._buffer.length === 0) {
      // Save scope in closure
      var parent = this;
      // We will create a Promise for the next input
      return new Promise(function (resolve, reject) {
        // We will save the resolve handle until input is available
        parent._resolvers.push(resolve);
      });
    } else {
      // We will return the first element in the buffer
      return this._buffer.shift();
    }
  },
  enqueue: function (input) {
    if (this._resolvers.length === 0) {
      // We will save this input onto the buffer
      this._buffer.push(input);
    } else {
      // We will fulfill the first waiting promise
      let resolver = this._resolvers.shift();
      resolver(input);
    }
  },
};

var inContainer = document.getElementById("in");
inContainer.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    stdin.enqueue(inContainer.value);
    inContainer.value = "";
  }
});
