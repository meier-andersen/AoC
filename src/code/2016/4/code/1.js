export const run = (input) => {
  return findRes(input);
};

const findRes = rooms => {
  let res = 0;

  rooms.forEach(room => {
    if(isRealRoom(room.name, room.sum))
      res += room.sector;
  })

  return res;
}

const isRealRoom = (name, sum) => {
  const letters = [];

  for(let i = 0; i < name.length; i++) 
  {
    const curr = name[i];
    if(curr === "-")
      continue;

    const index = letters.findIndex(x => x.id === curr)
    if(index === -1)
      letters.push({id: curr, num: 1})
    else
      letters[index].num++;

  }

  letters.sort((a, b) => {
    if (b.num !== a.num) return b.num - a.num;
    return a.id.localeCompare(b.id);
  });

  let res = "";
  for(let i = 0; i < 5; i++) 
  {
    res += letters[i].id;
  }
  
  return res === sum;
}