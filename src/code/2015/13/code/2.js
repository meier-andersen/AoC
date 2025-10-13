export const run = (input) => {

  const res = calculateBestHappiness(input.names, input.happiness);
	return res;
};

const calculateBestHappiness = (names, happiness) => {
  names.push("me");
	let bestHappinessChange = 0;

	permutator(names).forEach(order => {
		bestHappinessChange = Math.max(bestHappinessChange, calculateHappiness(order, happiness));
	});
	return bestHappinessChange;
}

function calculateHappiness(order, happiness) {
	let totalHappiness = 0;

	for (let i = 0; i < order.length; i++) {
		const currPerson = order[i];
    if(currPerson === "me")
      continue;

		const lastPerson = order[(i - 1 + order.length) % order.length];
		const nextPerson = order[(i + 1) % order.length];

    if(lastPerson !== "me")
		  totalHappiness += happiness[currPerson][lastPerson] 
    if(nextPerson !== "me") 
      totalHappiness += happiness[currPerson][nextPerson];
	}

	return totalHappiness;
}


//LIne stolen from reddit https://www.reddit.com/r/adventofcode/comments/3wm0oy/day_13_solutions/
function permutator(n){function t(n,r){for(var e,r=r||[],o=0;o<n.length;o++)e=n.splice(o,1),0===n.length&&c.push(r.concat(e)),t(n.slice(),r.concat(e)),n.splice(o,0,e[0]);return c}var c=[];return t(n)}

