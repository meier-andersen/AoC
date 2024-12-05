export const run = (input) => {
  let res = 0;

  input.pages.forEach((page) => {
    for (let i = 0; i < page.length; i++) {
      const currRules = input.rules.filter(
        (x) => x.num === page[i] && page.includes(x.before)
      );
      for (let j = 0; j < currRules.length; j++) {
        let index = page.findIndex((x) => x === currRules[j].before);
        if (i > index) return;
      }
    }
    res += page[Math.floor(page.length / 2)];
  });
  return res;
};
