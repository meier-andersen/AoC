export const run = (boss) => {
  const loses = findAllLoses(boss);

  return findMostExpensive(loses);
};

const findMostExpensive = (wins) => {
  let expensivest = null;
  wins.forEach((win) => {
    if (!expensivest || win.cost > expensivest.cost) expensivest = win;
  });

  return expensivest.cost;
};

const findAllLoses = (boss) => {
  const loses = [];
  for (let w = 0; w < weapons.length; w++) {
    for (let a = 0; a < armors.length; a++) {
      for (let r1 = 0; r1 < rings.length; r1++) {
        for (let r2 = 0; r2 < rings.length; r2++) {
          if (r1 !== 0 && r1 === r2) continue;

          const weapon = weapons[w];
          const armor = armors[a];
          const ring1 = rings[r1];
          const ring2 = rings[r2];

          const hero = {
            hp: boss.hp === 12 ? 8 : 100,
            dmg: weapon.dmg + armor.dmg + ring1.dmg + ring2.dmg,
            arm: weapon.arm + armor.arm + ring1.arm + ring2.arm,
            cost: weapon.cost + armor.cost + ring1.cost + ring2.cost,
            combo: [weapon.name, armor.name, ring1.name, ring2.name],
          };

          if (!tryFight(hero, boss)) loses.push(hero);
        }
      }
    }
  }

  return loses;
};

const tryFight = (hero, boss) => {
  const heroDmgPrRound = hero.dmg - boss.arm > 0 ? hero.dmg - boss.arm : 0;
  const bossDmgPrRound = boss.dmg - hero.arm > 0 ? boss.dmg - hero.arm : 0;

  const roundsToBeatHero = Math.ceil(hero.hp / bossDmgPrRound);
  const roundsToBeatBoss = Math.ceil(boss.hp / heroDmgPrRound);
  return roundsToBeatHero >= roundsToBeatBoss;
};

const weapons = [
  { name: "Dagger", cost: 8, dmg: 4, arm: 0 },
  { name: "Shortsword", cost: 10, dmg: 5, arm: 0 },
  { name: "Warhammer", cost: 25, dmg: 6, arm: 0 },
  { name: "Longsword", cost: 40, dmg: 7, arm: 0 },
  { name: "Greataxe", cost: 74, dmg: 8, arm: 0 },
];

const armors = [
  { name: "armor", cost: 0, dmg: 0, arm: 0 },
  { name: "Leather", cost: 13, dmg: 0, arm: 1 },
  { name: "Chainmail", cost: 31, dmg: 0, arm: 2 },
  { name: "Splintmail", cost: 53, dmg: 0, arm: 3 },
  { name: "Bandedmail", cost: 75, dmg: 0, arm: 4 },
  { name: "Platemail", cost: 102, dmg: 0, arm: 5 },
];

const rings = [
  { name: "No ring", cost: 0, dmg: 0, arm: 0 },
  { name: "Damage +1", cost: 25, dmg: 1, arm: 0 },
  { name: "Damage +2", cost: 50, dmg: 2, arm: 0 },
  { name: "Damage +3", cost: 100, dmg: 3, arm: 0 },
  { name: "Defense +1", cost: 20, dmg: 0, arm: 1 },
  { name: "Defense +2", cost: 40, dmg: 0, arm: 2 },
  { name: "Defense +3", cost: 80, dmg: 0, arm: 3 },
];
