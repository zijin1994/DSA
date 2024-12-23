// Implement a function `dfs` that accepts two arguments: an adjacency
// list representing an undirected graph, and a starting vertex (source).
// The function should print the vertices in preorder depth-first
// traversal order.

function dfs(adjList, source) {
    // implementation goes here
    let result = [];
    let visited = new Set();

    function helper(adjList, vertex) {
        result.push(vertex);
        visited.add(vertex);
        let neighbors = adjList.get(vertex);

        for (let neighbor of neighbors) {
            if (!visited.has(neighbor)) {
                helper(adjList, neighbor);
            }
        }
    }

    helper(adjList, source);

    return result;
  }

  function dfs(adjList, source) {
    let result = [];
    let visited = new Set();

    let stack = [source];
    while (stack.length > 0) {
        let vertex = stack.pop();
        result.push(vertex);
        visited.add(vertex);

        let neighbors = adjList.get(vertex);

        for (let neighbor of neighbors) {
            if (!visited.has(neighbor)) {
                stack.push(neighbor);
            }
        }
    }

    return result;
  }
  
  const adjList = new Map();
  adjList.set(1, [2]);
  adjList.set(2, [1, 3]);
  adjList.set(3, [2]);
  
  console.log(dfs(adjList, 1)); // 1, 2, 3