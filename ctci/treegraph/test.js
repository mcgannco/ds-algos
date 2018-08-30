class Node {
  constructor(val) {
    this.val = val;
    this.edges = {}
  }
}

class Graph {
  constructor() {
    this.nodes = {}
  }

  addEdge(node, edge) {
    if(this.nodes[node.val] === undefined) {
      return "node doesnt exist"
    } else if(this.nodes[node.val].edges[edge.val]) {
      return `edge ${node}-${edge} already exists`;
    } else {
      this.nodes[node.val].edges[edge.val] = edge
    }
  }

  addNode(val) {
    if(this.nodes[val] != undefined) {
      return "node already exists"
    } else {
      this.nodes[val] = new Node(val)
    }
  }

  findEdges(node) {
    if(this.nodes[node.val] === undefined) {
      return "node doesnt exist"
    } else {
      return this.nodes[node.val].edges[node.val]
    }
  }

  hasEdge(node, edge) {
    if(this.nodes[node.val] === undefined) {
      return "node doesnt exist"
    } else {
      if(this.nodes[node.val].edges[edge.val]) {
        return true
      } else {
        return false
      }
    }
  }

  hasNode(node) {
    return this.nodes[node.val] != undefined
  }

  removeEdge(node, edge) {
    if(!this.hasNode(node)) {
      return "node doesnt exist"
    } else {
      delete this.nodes[node.val].edges[edge.val]
    }
  }

  removeNode(node) {
    if(!this.hasNode(node)) {
      return "node doesnt exist"
    } else {
      delete this.nodes[node.val]
      for (let i = 0; i < Object.keys(this.nodes).length; i++) {
        let currNode =  this.nodes[Object.keys(this.nodes)[i]]
        if(currNode.edges[node.val]) {
          delete currNode.edges[node.val]
        }
      }
    }
  }

  findNodeWithNoChildren() {
    for (let i = 0; i < Object.keys(this.nodes).length; i++) {
      let arr = Object.keys(this.nodes)
      let node = this.nodes[arr[i]];
      if(Object.keys(node.edges).length < 1) {
        return node
      }
    }
    return undefined;
  }
}

let a = new Graph()
a.addNode(1)
a.addNode(2)
a.addNode(3)
a.addNode(4)

a.addEdge(a.nodes[1], a.nodes[2])
a.addEdge(a.nodes[1], a.nodes[3])
a.addEdge(a.nodes[2], a.nodes[4])

let b = new Graph()
b.addNode(1)
b.addNode(2)
b.addNode(3)
b.addNode(4)
b.addEdge(b.nodes[1], b.nodes[2])
b.addEdge(b.nodes[2], b.nodes[4])
b.addEdge(b.nodes[4], b.nodes[3])
b.addEdge(b.nodes[3], b.nodes[1])
////////////////////////////////////////////////////////////////////////////////////////////////////////////
//problem 1 RouteBetwee nodes
// time complexity O(n) worst case have to visit every node
// space complexity O(n)

function isRoute(node1, node2, graph) {
  toVisit = [];
  let visited = {}
  toVisit.push(node1)

  while (toVisit.length) {
    let currentNode = toVisit.shift();
    if(!visited[currentNode.val]) {
      visited[currentNode.val] = true;
    }
    if(currentNode.val === node2.val) {
      return true
    } else {
      let currentNodeEdges = Object.keys(currentNode.edges)
      for (let i = 0; i < currentNodeEdges.length; i++) {
        let newNode = currentNode.edges[currentNodeEdges[i]]
        if(!visited[newNode.val]) {
          toVisit.push(newNode)
        }
      }
    }
  }
  return false
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////
//problem 7
// time complexity => O(n)
// space complexity => O(n)

function buildOrder(projects, dep) {
  let graph = new Graph()
  for (let i = 0; i < projects.length; i++) {
    let project = projects[i];
    graph.addNode(project)
  }

  for (let j = 0; j < dep.length; j++) {
    let dependency = dep[j];
    graph.addEdge(graph.nodes[dependency[1]], graph.nodes[dependency[0]])
  }

  let answer = [];
  let currNode = graph.findNodeWithNoChildren();
  while (currNode !== undefined) {
    answer.push(currNode);
    graph.removeNode(currNode);
    currNode = graph.findNodeWithNoChildren();
  }

  if(answer.length === projects.length) {
    return answer
  } else {
    return "not possible"
  }
}

var projects = ['a', 'b', 'c', 'd', 'e', 'f'];
var dependencies = [['a', 'd'], ['f', 'b'], ['b', 'd'], ['f', 'a'], ['d', 'c']];
