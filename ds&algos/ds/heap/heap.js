class Heap {
  constructor(arr) {
    this.heap = [null].concat(arr)
    this.buildHeap()
  }

  validHeap() {
    for (let i = 1; i < Math.floor(this.heap.length / 2); i++) {
      let el = this.heap[i];
      let leftChild = this.heap[i * 2];
      let rightChild = this.heap[(i * 2) + 1];
      if(leftChild && rightChild) {
        if(el < Math.max(leftChild, rightChild)) {
          return false;
        }
      } else if(leftChild) {
        if(el < leftChild) {
          return false;
        }
      } else if(rightChild) {
        if(el < rightChild) {
          return false;
        }
      }
    }
    return true;
  }

  getMax() {
    if(this.heap[1]) {
      return this.heap[1]
    } else {
      return "empty heap"
    }
  }

  extractMax() {
    let top = this.heap[1];
    this.swap(1, this.heap.length - 1);
    this.heap.pop();
    this.bubbleDown(1)
    return top;
  }

  insert(el) {
    this.heap.push(el)
    let parent = this.heap[Math.floor((this.heap.length / 2))]
    if(el > parent) {
      this.bubbleUp(this.heap.length - 1)
    } else {
      return el;
    }
  }

  bubbleUp(idx) {
    let el = this.heap[idx]
    let parent = this.heap[Math.floor(idx / 2)]
    let tmp;
    while(true) {
      el = this.heap[idx]
      parent = this.heap[Math.floor(idx / 2)]
      if(Math.floor(idx / 2) === 0) {
        break;
      } else if(el > parent) {
        tmp = this.heap[idx]
        this.heap[idx] = this.heap[Math.floor(idx / 2)];
        this.heap[Math.floor(idx / 2)] = tmp;
        idx = Math.floor(idx / 2)
      } else {
        break
      }
    }
  }

  buildHeap() {
    for (let i = (Math.floor((this.heap.length - 1) / 2)); i >= 1; i--) {
      let node = this.heap[i]
      this.maxHeapify(i)
    }
  }

  maxHeapify(idx) {
    let node = this.heap[idx]
    let leftChild = this.heap[idx * 2]
    let rightChild = this.heap[(idx * 2) + 1]
    if(leftChild && rightChild) {
      if(node < leftChild || node < rightChild) {
        let biggerNode = Math.max(leftChild, rightChild);
        if(biggerNode === leftChild) {
          this.swap(idx, idx * 2)
        } else if(biggerNode === rightChild) {
          this.swap(idx, ((idx * 2) + 1))
        }
      }
    } else if(rightChild) {
      if(node < rightChild) {
        this.swap(idx, ((idx * 2) + 1))
      }
    } else if(leftChild) {
      if(node < leftChild) {
        this.swap(idx, idx * 2)
      }
    }
  }

  swap(startIdx, endIdx) {
    let tmp = this.heap[startIdx];
    this.heap[startIdx] = this.heap[endIdx];
    this.heap[endIdx] = tmp;
    let node = this.heap[endIdx]
    let newLeftChild = this.heap[endIdx * 2]
    let newRightChild = this.heap[(endIdx * 2) + 1]

    if(newLeftChild || newRightChild) {
      this.bubbleDown(endIdx)
    }
  }

  bubbleDown(idx) {
    let currentEl = this.heap[idx];
    let leftChild = this.heap[idx * 2]
    let rightChild = this.heap[(idx * 2) + 1]

    while (leftChild || rightChild) {
      leftChild = this.heap[idx * 2]
      rightChild = this.heap[(idx * 2) + 1]
      if(leftChild && rightChild) {
        if(currentEl < leftChild || currentEl < rightChild) {
          let biggerNode = Math.max(leftChild, rightChild);
          if(biggerNode === leftChild) {
            let tmp = this.heap[idx];
            this.heap[idx] = this.heap[idx * 2];
            this.heap[idx * 2] = tmp;
            idx = idx * 2
          } else {
            let tmp = this.heap[idx];
            this.heap[idx] = this.heap[(idx * 2) + 1];
            this.heap[(idx * 2) + 1] = tmp;
            idx = (idx * 2) + 1
          }
        }
      } else if(leftChild) {
        if(currentEl < leftChild) {
          let tmp = this.heap[idx];
          this.heap[idx] = this.heap[idx * 2];
          this.heap[idx * 2] = tmp;
          idx = idx * 2
        } else {
          break;
        }
      } else if(rightChild) {
        if(currentEl < rightChild) {
          let tmp = this.heap[idx];
          this.heap[idx] = this.heap[(idx * 2) + 1];
          this.heap[(idx * 2) + 1] = tmp;
          idx = (idx * 2) + 1
        } else {
          break;
        }
      }
    }
  }
}

let heap = new Heap([5,12,64,1,37,90,91,97])

function heapSort(heap) {
  let arr = [];
  while(heap.heap.length > 1) {
    arr.push(heap.extractMax())
  }
  return arr;
}
