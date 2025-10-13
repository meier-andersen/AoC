export const parse = (input) => {
  const data = {names: [], happiness: {}};
  input.forEach((element) => {
    element = element.replace(" would", "").replace("happiness units by sitting next to ", "").replace(".", "").split(" ");
    
    if(data.names.findIndex(x => x === element[0]) === -1)
    {
      data.names.push(element[0])
      data.happiness[element[0]] = {}
    }

    const score = element[1] == "gain" ? parseInt(element[2]) : -parseInt(element[2]);
    data.happiness[element[0]][element[3]] = score;

  });
  return data;
};
