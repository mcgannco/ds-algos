function GraphNode(name) {
  this.name = name
  this.neighbors = new Set();
}

class Queue {
  constructor() {
    this.items = []
  }

  enqueue(el) {
    this.items.push(el)
  }

  dequeue(el) {
    if(this.items.length === 0) {
      return "queue is empty"
    } else {
      return this.items.shift();
    }
  }

  size() {
    return this.items.length
  }
}

let omar = new GraphNode("Omar")
let min = new GraphNode("Min")
let william = new GraphNode("William")
let ren = new GraphNode("Ren")
let jayden = new GraphNode("Jayden")
let noam = new GraphNode("Noam")
let sofia = new GraphNode("Sofia")
let adam = new GraphNode("Adam")
let amelia = new GraphNode("Ameila")
let nathan = new GraphNode("Nathan")
let lucas = new GraphNode("Lucas")
let miguel = new GraphNode("Miguel")
let liam = new GraphNode("Liam")

omar.neighbors.add(ren)
omar.neighbors.add(min)
min.neighbors.add(omar)
min.neighbors.add(william)
min.neighbors.add(jayden)
william.neighbors.add(min)
william.neighbors.add(noam)
ren.neighbors.add(omar)
ren.neighbors.add(jayden)
jayden.neighbors.add(ren)
jayden.neighbors.add(noam)
jayden.neighbors.add(min)
jayden.neighbors.add(amelia)
noam.neighbors.add(william)
noam.neighbors.add(jayden)
noam.neighbors.add(nathan)
sofia.neighbors.add(adam)
adam.neighbors.add(sofia)
adam.neighbors.add(amelia)
adam.neighbors.add(lucas)
adam.neighbors.add(miguel)
amelia.neighbors.add(adam)
amelia.neighbors.add(miguel)
amelia.neighbors.add(jayden)
nathan.neighbors.add(noam)
nathan.neighbors.add(miguel)
lucas.neighbors.add(adam)
miguel.neighbors.add(adam)
miguel.neighbors.add(amelia)
miguel.neighbors.add(nathan)
miguel.neighbors.add(liam)
liam.neighbors.add(miguel)

let graph = [omar, min, william, ren, jayden, noam, sofia, adam, amelia, nathan, lucas, miguel, liam]
var network = {
  'Min'     : ['William', 'Jayden', 'Omar'],
  'William' : ['Min', 'Noam'],
  'Jayden'  : ['Min', 'Amelia', 'Ren', 'Noam'],
  'Ren'     : ['Jayden', 'Omar'],
  'Amelia'  : ['Jayden', 'Adam', 'Miguel'],
  'Adam'    : ['Amelia', 'Miguel', 'Sofia', 'Lucas'],
  'Miguel'  : ['Amelia', 'Adam', 'Liam', 'Nathan'],
  'Noam'    : ['Nathan', 'Jayden', 'William'],
  'Omar'    : ['Ren', 'Min', 'Scott']
};

function reconstructPath(howWeReachedNodes, startNode, endNode) {
  let reversedShortestPath = [];
  var currentNode = endNode;
  while (currentNode !== null) {
    debugger
      reversedShortestPath.push(currentNode);
      currentNode = howWeReachedNodes[currentNode.name];
  }
  return reversedShortestPath.reverse();

}

function bfs(graph, startNode, endNode) {
  if(graph.indexOf(startNode) < 0) {
    return "Start Node Not In Graph"
  }

  if(!graph.indexOf(endNode) < 0) {
    return "End Node Not In Graph"
  }

  let nodesToVisit = new Queue();
  nodesToVisit.enqueue(startNode);

  let howWeReachedNodes = {};
  howWeReachedNodes[startNode.name] = null;
  while (nodesToVisit.size() > 0) {
    let currentNode = nodesToVisit.dequeue();
    if(currentNode === endNode) {
      return reconstructPath(howWeReachedNodes, startNode, endNode);
    }
    currentNode.neighbors.forEach(neighbor => {
      debugger
      if(!howWeReachedNodes.hasOwnProperty(neighbor.name)) {
        nodesToVisit.enqueue(neighbor);
        howWeReachedNodes[neighbor.name] = currentNode
      }
    })
  }
  return null;
}
