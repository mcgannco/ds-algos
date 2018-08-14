class Fibber {
  constructor() {
    this.memo = {};
  }

  fib(n) {

    // Edge case: negative index
    if (n < 0) {
      throw new Error('Index was negative. No such thing as a negative index in a series.');
    }

    // Base case: 0 or 1
    else if (n === 0 || n === 1) {
      return n;
    }

    // See if we've already calculated this
    if (this.memo.hasOwnProperty(n)) {
      return this.memo[n];
    }

    const result = this.fib(n - 1) + this.fib(n - 2);

    // Memoize
    this.memo[n] = result;

    return result;
  }
}

let a = new Fibber();
