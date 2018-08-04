"use strict";

class Stream {
  
  constructor() {
    this._buffer = [];
    this._waiting = [];
    // Should this be a different type of stream?
    this.listener = null;
  }
  
  // write? publish?
  push(message) {
    if (this._waiting.length !== 0) {
      let callback = this._waiting.shift();
      callback(message);
    } else if (this.listener !== null) {
      this.listener(message);
    } else {
      this._buffer.push(message);
    }
  }
  
  // read? receive?
  fetch() {
    if (this._buffer.length === 0) {
      let parent = this;
      return new Promise(function (resolve, reject) {
        parent._waiting.push(resolve);
      });
    } else {
      return this._buffer.shift();
    }
  }
  
}
