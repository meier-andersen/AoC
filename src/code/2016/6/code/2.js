export const run = (input) => {

  return findCode(input);;
};

const findCode = rows => {
  const cols = [];
  for(let i = 0; i < rows[0].length; i++) {
    cols.push([])
  }

  rows.forEach(row => {
    for(let i = 0; i < row.length; i++) 
    {
      const curr = row[i];

      const index = cols[i].findIndex(x => x.id === curr)
      if(index === -1)
        cols[i].push({id: curr, num: 1})
      else
        cols[i][index].num++;
      }
  })

  let res = "";
  cols.forEach(col => {
    col.sort((a,b) => a.num - b.num);
    res += col[0].id;
  })

  return res;
}