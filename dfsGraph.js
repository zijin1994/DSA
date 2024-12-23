// Implement a function `dfs` that accepts two arguments: the adjacency list
// representing a directed acyclic graph and a starting vertex (source).
// The function should print the vertices in preorder depth-first
// traversal order.

function dfs(adjList, source) {
    // implementation goes here
    let result = [];
    let stack = [source];
    
    while (stack.length > 0) {
        let currentVertex = stack.pop();
        result.push(currentVertex);

        let neighbors = adjList.get(currentVertex);

        for (let idx = neighbors.length - 1; idx >= 0; idx --) {
            stack.push(neighbors[idx]);
        }
    }

    

    return result;
  }

  function dfs(adjList, source) {
    // implementation goes here
    let result = [];

    function helper(adjList, currentVertex) {

        result.push(currentVertex);
        let neighbors = adjList.get(currentVertex);
        for(let neighbor of neighbors) {
            helper(adjList, neighbor);
        }
    }

    helper(adjList, source);

    return result;
  }
    
  const adjList = new Map();
  adjList.set(1, []);
  adjList.set(2, [1, 3, 4]);
  adjList.set(3, [5]);
  adjList.set(4, [6]);
  adjList.set(5, []);
  adjList.set(6, []);
  adjList.set(7, [6]);
  
  console.log(dfs(adjList, 2)); // 2, 4, 6, 3, 5, 1 or 2, 1, 3, 5, 4, 6
  
  // Note that the output can vary based on the order in
  // which you process neighbors. These two outputs are
  // the most likely, but other valid orders exist.