export const run = (input) => {
  return findRes(input);
};

const findRes = rooms => {

  for(let i = 0; i < rooms.length; i++) 
  {
    const room = rooms[i];
    if(!isRealRoom(room.name, room.sum))
      continue;

    const roomName = deciphertName(room.name, room.sector);
    if(roomName === "northpole object storage" || roomName === "very encrypted name")
      return room.sector;
  }

  return -1;
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

const deciphertName = (name, sector) => {
  sector = ((sector % 26) + 26) % 26;
  let res = "";
  for(let i = 0; i < name.length; i++) 
  {
    const char = name[i];
    if(char === "-") {
      res += " ";
      continue;
    }

    const code = ((char.charCodeAt(0) - 97 + sector) % 26) + 97;
    res += String.fromCharCode(code);
  }

  return res;
}