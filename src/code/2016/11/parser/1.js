export const parse = (input) => {
  const data = { steps: 0, elevator: 1, floors: [] };
  let floor = 0;
  let id = 0;
  input.forEach((element) => {
    floor++;
    const obj = {
      id: floor,
      items: []
    }
    element = element.replace("The first floor contains a ", "")
      .replace("The second floor contains a ", "")
      .replace("The third floor contains a ", "")
      .replace("The fourth floor contains ", "")
      .replaceAll("-compatible", "")
      .replaceAll("a ", "")
      .replaceAll("and ", "")
      .replaceAll(".", "")
      .replaceAll(",", "")
      .replace("nothing relevant", "")
      .split(" ");

    if(element.length>1) {
      for(let i = 0; i < element.length; i+=2) {
        id++;
        obj.items.push({
          id,
          name: element[i],
          type: element[i+1]
        });
      }
    }
    data.floors.push(obj);
  });
  data.floors.sort((a,b) => b.id - a.id)
  return data;
};
