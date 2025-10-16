export const parse = (input) => {
  const data = [];
  input.forEach((element) => {
    if(element.includes("value")) {
      element = element.replace("value ", "").replace("goes to bot ", "").split(" ");
      const id = parseInt(element[1]);
      const val = parseInt(element[0]);

      const index = data.findIndex(x => x.id === id);
      if(index === -1) {
        data.push({id, chips: [val]})
      }
      else {
        data[index].chips.push(val);
      }
    }
    else {
      element = element.replace("bot ", "").replace("gives low to ", "").replace("and high to ", "").split(" ");
      const id = parseInt(element[0]);
      const valLow = parseInt(element[2]);
      const valHigh = parseInt(element[4]);
      const insObj = {        
        low: {
          to: element[1],
          id: valLow
        },
        high: {
          to: element[3],
          id: valHigh
        }
      }

      const index = data.findIndex(x => x.id === id);
      if(index === -1) {
        data.push({id, chips: [], ins: insObj})
      }
      else {
        data[index].ins = insObj;
      }
    }
  });
  data.sort((a,b) => a.id - b.id);
  return data;
};
