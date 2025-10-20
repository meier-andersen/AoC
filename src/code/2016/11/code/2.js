export const run = (input) => {
  const f1 = input.floors.find(x => x.id === 1);
  f1.items.push({ id: 11, name: 'elerium',    type: 'generator' });
  f1.items.push({ id: 12, name: 'elerium',    type: 'microchip' });
  f1.items.push({ id: 13, name: 'dilithium',    type: 'generator' });
  f1.items.push({ id: 14, name: 'dilithium',    type: 'microchip' });
  const res = runSimulation(input);
  return res;
};

const runSimulation = start => {
  let queue = [start];

  printFloors(start);

  const seen = new Set();
  seen.add(buildKey(start));

  let head = 0; 
  while(head < queue.length) {
    const curr = queue[head++];

    const newSteps = getLegalSteps(curr);
    for (const newState of newSteps) {
      if (isWin(newState)) {
        return newState.steps;
      }

      const key = buildKey(newState);
      if (!seen.has(key)) {
        seen.add(key);
        queue.push(newState);
      }
    }
  }

  return -1;
}

const isWin = state => {
  const f1 = state.floors.find(f => f.id === 1);
  const f2 = state.floors.find(f => f.id === 2);
  const f3 = state.floors.find(f => f.id === 3);
  return f1.items.length === 0 && f2.items.length === 0 && f3.items.length === 0;
}

const buildKey = state => {
  const floorsById = [...state.floors].sort((a,b) => a.id - b.id);
  let out = `E${state.elevator},`;
  for (const f of floorsById) {
    out += `${f.id}:`;
    const items = [...f.items].sort((a,b) => a.id - b.id || a.type.localeCompare(b.type));
    for (const it of items) out += `${it.id}${it.type[0]}-`; 
    out += ",";
  }
  return out;
}

const getLegalSteps = curr => {
  let newStates = [];

  //move up
  if(curr.elevator < 4) {
    newStates = newStates.concat(moveUp(curr));
  }
  //move down
  if(curr.elevator > 1) {
    if (!isLowerEmpty(curr, curr.elevator)) {
      newStates = newStates.concat(moveDown(curr));
    }
  }
  return newStates;
}

const moveUp = curr => {
  const newStates = [];
  const currFloor = curr.floors.find(x => x.id === curr.elevator);

  const candidates = [];
  for(let first = 0; first < currFloor.items.length; first++) {
    const firstItem = currFloor.items[first];
    for(let second = first; second < currFloor.items.length; second++) {
      const secondItem = first === second ? null : currFloor.items[second];
      candidates.push([firstItem, secondItem]);
    }
  }


  for (const candidate of candidates) {
    const obj = doStep(curr, candidate, curr.elevator+1);
    if(obj)
      newStates.push(obj);    
  }

  return newStates;
}

const moveDown = curr => {
  const newStates = [];
  const currFloor = curr.floors.find(x => x.id === curr.elevator);

  const candidates = [];
  for(let first = 0; first < currFloor.items.length; first++) {
    const firstItem = currFloor.items[first];
    for(let second = first; second < currFloor.items.length; second++) {
      const secondItem = first === second ? null : currFloor.items[second];
      candidates.push([firstItem, secondItem]);
    }
  }

  for (const candidate of candidates) {
    const obj = doStep(curr, candidate, curr.elevator-1);
    if(obj)
      newStates.push(obj);    
  }

  return newStates;
}

const doStep = (curr, candidate, elevator) => {
  const firstItem = candidate[0];
  const secondItem = candidate[1];
  const newState = JSON.parse(JSON.stringify(curr));

  newState.elevator = elevator;
  newState.steps++;
  const originalFloor = newState.floors.find(x => x.id === curr.elevator);
  originalFloor.items = originalFloor.items.filter(x => x.id !== firstItem.id && x.id !== secondItem?.id);
  
  const newFloor = newState.floors.find(x => x.id === newState.elevator);
  newFloor.items.push(firstItem);
  if(secondItem)
    newFloor.items.push(secondItem);
  
  if(isFloorLegal(originalFloor) && isFloorLegal(newFloor)) {
    newState.floors.forEach(floor => {
      floor.items.sort((a, b) => a.id - b.id)
    });
    return newState;
  }

  return null;
}

const isLowerEmpty = (state, fromId) => {
  return state.floors.every(f => f.id >= fromId || f.items.length === 0);
}

const isFloorLegal = floor => {
  //If no generators = safe
  if(!floor.items.find(x => x.type === "generator"))
    return true;

  for(let i = 0; i < floor.items.length; i++) {
    if(floor.items[i].type === "microchip") {
      if(!floor.items.find(x => x.type === "generator" && x.name === floor.items[i].name)) {
        return false;
      }
    }
  }

  //All microchips has a generator
  return true;
}

const printFloors = state => {
  console.log("------------------------------");
  console.log(`steps: ${state.steps}`)
  console.log(`elevator: ${state.elevator}`);
  state.floors.forEach(floor => {
    let str = `F${floor.id}: `;

    floor.items.forEach(item => {
      str += `${item.name[0]}${item.name[1]}${item.type[0]} `;
    })

    console.log(str);
  })
}