// set time complexity:
// insert: constant
// lookup: constant
// delete: constant
// no insertion order and no duplicates


class IntSet {
  constructor(length) {
    this.length = length;
    this.items = Array.apply(null, Array(this.length)).map(function () {return []})
  }

  insert(item) {
    if (!this.isNumber(item)) {
      return false;
    }
    if(this.includes(parseInt(item))) {
      return false;
    } else {
      let idx = this.hashed(parseInt(item));
      this.items[idx].push(parseInt(item));
    }
  }

  isNumber(el) {
    return Number.isInteger(Number(el))
  }

  delete(item) {
    if(this.includes(item)) {
      for (let i = 0; i < this.items[this.hashed(item)].length; i++) {
        let el = this.items[this.hashed(item)][i];
        if(el === item) {
          this.items[this.hashed(item)].splice(i, 1);
        }
      }
    }
  }

  includes(el) {
    if(this.items[this.hashed(el)].indexOf(el) >= 0) {
      return true;
    } else {
      return false;
    }
  }

  numBuckets() {
    return this.items.length
  }

  size() {
    let filled = 0;
    for (let i = 0; i < this.items.length; i++) {
      let el = this.items[i];
      if(el.length) {
        filled += 1
      }
    }
    return filled;
  }

  hashed(item) {
    return Math.abs(item % this.numBuckets());
  }
}

class MaxIntSet {
  constructor(maxSize) {
    this.maxSize = maxSize;
    this.items = Array.apply(null, Array(this.maxSize + 1)).map(function () {return false;});
  }

  insert(item) {
    if(item < 0 || item > this.maxSize) {
      return false;
    }

    if(this.includes(item)) {
      return false
    } else {
      this.items[item] = true
    }
  }

  remove(item) {
    if(this.includes(item)) {
      this.items[item] = false
    }
  }

  includes(item) {
    if(this.items[item]) {
      return true
    } else {
      return false
    }
  }
}

class ResizingIntSet {
  constructor() {
    this.itemsLength = 5;
    this.items = Array.apply(null, Array(this.itemsLength)).map(function () {return []});
  }

  insert(item) {
    if (!this.isNumber(item)) {
      return false;
    }
    if(this.size() === this.itemsLength) {
      this.resizeItems()
    } else {
      if(this.includes(parseInt(item))) {
        return false;
      } else {
        let idx = this.hashed(parseInt(item));
        this.items[idx].push(parseInt(item));
      }
    }
  }

  resizeItems() {
    this.itemsLength*=2
    let tmp = this.items;
    this.items = Array.apply(null, Array(this.itemsLength)).map(function () {return []});
    for (let i = 0; i < tmp.length; i++) {
      let currentBucket = tmp[i];
      for (let i = 0; i < currentBucket.length; i++) {
        let element = currentBucket[i];
        let idx = this.hashed(parseInt(element));
        this.items[idx].push(parseInt(element));
      }
    }
  }

  isNumber(el) {
    return Number.isInteger(Number(el))
  }

  delete(item) {
    if(this.includes(item)) {
      for (let i = 0; i < this.items[this.hashed(item)].length; i++) {
        let el = this.items[this.hashed(item)][i];
        if(el === item) {
          this.items[this.hashed(item)].splice(i, 1);
        }
      }
    }
  }

  includes(el) {
    if(this.items[this.hashed(el)].indexOf(el) >= 0) {
      return true;
    } else {
      return false;
    }
  }

  numBuckets() {
    return this.items.length
  }

  size() {
    let filled = 0;
    for (let i = 0; i < this.items.length; i++) {
      let el = this.items[i];
      if(el.length) {
        filled += 1
      }
    }
    return filled;
  }

  hashed(item) {
    return Math.abs(item % this.numBuckets());
  }
}

let a = new ResizingIntSet();
