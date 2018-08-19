class StaticArray {
  constructor(capacity) {
    this.store = Array.apply(null, Array(capacity)).map(function () {return null});
  }

  length() {
    return this.store.length
  }

  get(idx) {
    if(this.validate(idx)) {
      return this.store[idx]
    } else {
      return "OVERFLOW ERROR"
    }
  }

  set(idx, val) {
    if(this.validate(idx)) {
      this.store[idx] = val
    } else {
      return "OVERFLOW ERROR"
    }
  }

  validate(i) {
    if((i < 0) || (i > this.store.length - 1)) {
      return false
    } else {
      return true
    }
  }

}

class DynamicArr {
  constructor(capacity = 5) {
    this.arr = new StaticArray(capacity);
    this.startIdx = 0;
    this.count = 0;
  }

  push(el) {
    if(this.count === this.arr.store.length) {
      this.resize()
    }
    this.arr.store[this.count] = el
    this.count++
  }

  pop() {
    if(this.count > 0) {
      this.arr.store[this.count - 1] = null;
      this.count --
    } else {
      return null;
    }
  }

  set(el,idx) {
    if(idx > this.count - 1 || idx < 0) {
      return null
    } else {
      this.arr.store[idx] = el
      return this.arr.store[idx];
    }
  }

  get(idx) {
    if(idx > this.count - 1 || idx < 0) {
      return null
    } else {
      return this.arr.store[idx]
    }
  }

  first() {
    if(this.count <= 0) {
      return null
    } else {
      return this.arr.store[this.startIdx]
    }
  }

  last() {
    if(this.count <= 0) {
      return null
    } else {
      return this.arr.store[this.count - 1]
    }
  }

  resize() {
    let tmp = this.arr;
    this.arr = new StaticArray(this.count * 2);
    for (let i = 0; i < tmp.store.length; i++) {
      let el = tmp.store[i];
      this.arr.store[i] = el;
    }
  }
}

let a = new DynamicArr()
