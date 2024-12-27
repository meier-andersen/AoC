export const parse = (input) => {
  const data = {};
  input.forEach((element) => {
    element = element.split(": ");
    if (element[0] === "Hit Points") data.hp = parseInt(element[1]);
    if (element[0] === "Damage") data.dmg = parseInt(element[1]);
    else data.arm = parseInt(element[1]);
  });
  return data;
};
