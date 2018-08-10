function GraphNode(label) {
  this.label = label;
  this.neighbors = new Set();
  this.color = null;
}

var a = new GraphNode("a");
var b = new GraphNode("b");
var c = new GraphNode("c");

a.neighbors.add(b);
b.neighbors.add(a);
c.neighbors.add(b);
b.neighbors.add(c);

// var graph = [a, b, c];
let colors = ["red", "blue", "green", "yellow"]
function colorGraph(graph, colors) {
  graph.forEach(node => {
    if (node.neighbors.has(node)) {
    throw new Error("Legal coloring impossible for node with loop: " + node.label);
  }

  var illegalColors = new Set();
  node.neighbors.forEach(neighbor => {
    debugger
    if(neighbor.color !== null) {
      illegalColors.add(neighbor.color)
    }
  })

  for (let i = 0; i < colors.length; i++) {
    let color = colors[i];
    debugger
    if(!illegalColors.has(color)) {
      node.color = color;
      break
    }
  }

  })
  return graph
}
