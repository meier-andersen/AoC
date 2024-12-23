let graph;
let cliques;

export const run = (input) => {
  graph = {};
  cliques = [];

  buildGraph(input);
  generateCliques();
  return findRes();
};

const findRes = () => {
  let res;
  cliques.forEach((clique) => {
    if (!res || clique.length > res.length) res = clique;
  });
  res.sort();
  return res.join(",");
};

const generateCliques = () => {
  const nodes = Object.keys(graph);

  bronKerbosch([], nodes, []);
};

function bronKerbosch(r, p, x) {
  if (p.length === 0 && x.length === 0) {
    cliques.push([...r]);
    return;
  }

  const pivot = p.concat(x)[0];
  const neighbors = graph[pivot];

  for (const node of p.filter((n) => !neighbors.has(n))) {
    bronKerbosch(
      [...r, node],
      p.filter((n) => graph[node].has(n)),
      x.filter((n) => graph[node].has(n))
    );
    p = p.filter((n) => n !== node);
    x.push(node);
  }
}

const buildGraph = (line) => {
  line.forEach((elem) => {
    if (!graph[elem[0]]) {
      graph[elem[0]] = new Set();
    }
    graph[elem[0]].add(elem[1]);

    if (!graph[elem[1]]) {
      graph[elem[1]] = new Set();
    }
    graph[elem[1]].add(elem[0]);
  });

  return graph;
};
