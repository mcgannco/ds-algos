//basically turn everything into a string, then map over string and use charcode to turn into number.
//then multiplty that number by another big number to get a super random hashed number
Number.prototype.hashed = function() {
    return this.valueOf() * 289478399;
};

Array.prototype.hashed = function () {
  let string = "["
  let stringed = this.toString();
  for (var i = 0; i < stringed.length; i++) {
    let el = stringed[i];
    if(i === stringed.length - 1) {
      string += el
      string += "]"
    } else {
      string += el
    }
  }
  var hash = 0, i, chr;
  if (this.length === 0) return hash;
  for (i = 0; i < string.length; i++) {
    chr   = string.charCodeAt(i);
    hash  = ((hash << 5) - hash) + chr;
    hash |= 0;
  }
  return hash.hashed();
};

String.prototype.hashed = function () {
  var hash = 0, i, chr;
  if (this.length === 0) return hash;
  for (i = 0; i < this.length; i++) {
    chr   = this.charCodeAt(i);
    hash  = ((hash << 5) - hash) + chr;
    hash |= 0;
  }
  return hash.hashed();
};

Object.prototype.hashed = function () {
  let that = this;
  var result = Object.keys(this).map(function(key) {
    return [key, that[key]];
  });
  return result.hashed()
};
//////////////////////////


class HashSet {
  constructor() {
    this.maxSize = 3;
    this.items = Array.apply(null, Array(this.maxSize)).map(function () {return []});
  }

  insert(el) {
    if(this.includes(el)) {
      return false;
    } else {
      if(this.size() === this.maxSize) {
        this.resize();
      }
      let newIdx = this.hashedIdx(el)
      this.items[newIdx].push(el)
    }
  }

  delete(el) {
    if(this.includes(el)) {
      let bucketIdx = this.hashedIdx(el)
      for (let i = 0; i < this.items[bucketIdx].length; i++) {
        if(this.items[bucketIdx][i] === el) {
          this.items[this.hashedIdx(el)].splice(i, 1);
        }
      }
    } else {
      return false;
    }
  }

  includes(el) {
    let hashedIdx = this.hashedIdx(el);
    let bucket = this.items[hashedIdx]
    let hashedEl = el.hashed();
    for (let i = 0; i < bucket.length; i++) {
      let hashedBucketItem = bucket[i].hashed();
      if(hashedBucketItem === hashedEl) {
        return true
      }
    }
    return false
  }

  hashedIdx(el) {
    let hashed = el.hashed();
    return Math.abs(hashed % this.maxSize);
  }

  size() {
    let filled = 0;
    for (let i = 0; i < this.items.length; i++) {
      let currentBucket = this.items[0];
      if(currentBucket.length) {
        for (let j = 0; j < currentBucket.length; j++) {
          filled += 1
        }
      }
    }
    return filled;
  }

  numBuckets() {
    return this.items.length
  }

  resize() {
    let tmp = this.items;
    this.maxSize *= 2;
    this.items = Array.apply(null, Array(this.maxSize)).map(function () {return []});
    for (let i = 0; i < tmp.length; i++) {
      let bucket = tmp[i];
      for (let j = 0; j < bucket.length; j++) {
        let item = bucket[j];
        let hashedIdx = this.hashedIdx(item)
        this.items[hashedIdx].push(item)
      }
    }
  }
}

let a = new HashSet();
