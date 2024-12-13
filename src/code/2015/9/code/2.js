export const run = (cities) => {
  const queue = [];

  cities.forEach((city) => {
    queue.push({ dist: 0, visited: [city.name] });
  });

  let res = null;
  while (queue.length > 0) {
    let curr = queue.shift();
    const city = cities.find((x) => x.name === curr.visited[curr.visited.length - 1]);
    const missing = city.dist.filter((x) => !curr.visited.includes(x.name));
    missing.forEach((missing) => {
      const dist = curr.dist + missing.dist;
      const visited = [...curr.visited];
      visited.push(missing.name);

      if (visited.length === cities.length) {
        if (!res || res < dist) res = dist;
      } else {
        queue.push({
          dist,
          visited,
        });
      }
    });
  }
  return res;
};
