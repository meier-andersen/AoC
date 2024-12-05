export const run = (input) => {
  let res = 0;
  let newList = [];

  input.pages.forEach((page) => {
    for (let i = 0; i < page.length; i++) {
      const currRules = input.rules.filter(
        (x) => x.num === page[i] && page.includes(x.before)
      );
      for (let j = 0; j < currRules.length; j++) {
        let index = page.findIndex((x) => x === currRules[j].before);
        if (i > index) {
          newList.push(page);
          return;
        }
      }
    }
  });

  newList.forEach((page) => {
    let stillRunning = true;
    while (stillRunning) {
      stillRunning = false;
      for (let i = 0; i < page.length; i++) {
        const currRules = input.rules.filter(
          (x) => x.num === page[i] && page.includes(x.before)
        );
        for (let j = 0; j < currRules.length; j++) {
          let index = page.findIndex((x) => x === currRules[j].before);
          if (i > index) {
            const [element] = page.splice(i, 1);
            if (index !== 0) page.splice(index - 1, 0, element);
            else page.unshift(element);
            stillRunning = true;
            break;
          }
        }
      }
    }
    res += page[Math.floor(page.length / 2)];
  });
  
  return res;
};
