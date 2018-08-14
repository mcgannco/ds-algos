// class Stack {
//   constructor() {
//     this.items = [];
//   }
//
//   push(item) {
//     this.items.push(item)
//   }
//
//   pop() {
//     if(this.items.length) {
//       this.items.pop()
//     }
//   }
//
//   peek() {
//     if(this.items.length) {
//       return this.items[this.items.length - 1]
//     }
//   }
// }

function paren(str, pos) {
  let openParens = 0;
  for (let i = pos + 1; i < str.length; i++) {
    let char = str[i];
    if(char === "(") {
      openParens += 1
    } else if (char === ")") {
      if(openParens === 0) {
        return i
      } else {
        openParens --
      }
    }
  }
  return "invalid strnig"
}
