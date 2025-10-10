export const parse = (input) => {
  const data = {
    boss: {},
    player: {},
    effects: [],
    manaSpent: 0,
    isPlayersTurn: true
  };
  input.forEach((element) => {
    element = element.split(": ");
    if (element[0] === "Hit Points") data.boss.hp = parseInt(element[1]);
    else if (element[0] === "Damage") data.boss.dmg = parseInt(element[1]);
  });

  if(data.boss.hp < 50)
  {
    data.player.mana = 250;
    data.player.hp = 10;
  }
  else 
  {
    data.player.mana = 500;
    data.player.hp = 50;
  }

  return data;
};
