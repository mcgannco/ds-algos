class Stack {
  constructor() {
    this.items = [];
  }

  push(item) {
    this.items.push(item)
  }

  pop() {
    if(this.items.length) {
      this.items.pop()
    }
  }

  peek() {
    if(this.items.length) {
      return this.items[this.items.length - 1]
    }
  }
}

function bracket(str) {
  let open = {"(" : ")", "[" : "]", "{" : "}"}
  let stack = [];
  for (let i = 0; i < str.length; i++) {
    let el = str[i];
    if(el === "(" || el === "[" || el === "{") {
      stack.push(open[el])
    } else if (el === ")" || el === "]" || el === "}") {
      let stackItem = stack.pop();
      if(stackItem !== el) {
        return false
      }
    }
  }
  return stack.length === 0
}
