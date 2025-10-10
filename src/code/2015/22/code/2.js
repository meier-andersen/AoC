export const run = (input) => {
  const queue = [input];
  const seen = new Map();

  while(queue.length > 0) {
    const curr = queue.shift();
    if(curr.boss.hp <= 0)  {
      return curr.manaSpent;
    }

    const newList = takeTurn(curr);
    newList.forEach(item => {
      const key = JSON.stringify(item);
      if(!seen.has(key)) {
        queue.push(item)
        seen.set(key, true);
      }
    })
    queue.sort((a, b) => a.manaSpent - b.manaSpent);
  }

  return -1;
};

const takeTurn = (state) => {
  if(state.isPlayersTurn)
  {
    state.player.hp--;
    if(state.player.hp <= 0)
      return [];
  }
  
  const armor = applyEffects(state);

  if(state.boss.hp <= 0)
    return([state]);

  if(state.isPlayersTurn) 
  {
    return playerTurn(state);
  } 
  else 
  {
    return bossTurn(state, armor);
  }
}

const applyEffects = state => {
  let armor = 0;
  state.effects.forEach(effect => {
    const currMagic = magics.find(x => x.id === effect.id);
    state.player.mana += currMagic.manaCharge;
    state.player.hp += currMagic.heal;
    state.boss.hp -= currMagic.dmg;
    armor += currMagic.armor;

    effect.time--;
  })

  state.effects = state.effects.filter(obj => obj.time !== 0);
  return armor;
}

const playerTurn = state => {
  const newStates = [];

  magics.forEach(magic => {
    if(state.effects.findIndex(x => x.id === magic.id) !== -1) 
      return;

    if(magic.mana > state.player.mana)
      return;

    const newState = JSON.parse(JSON.stringify(state))
    newState.manaSpent += magic.mana;
    newState.player.mana -= magic.mana;
    newState.isPlayersTurn = false;

    if(magic.effect === 0) 
    {
      newState.player.hp += magic.heal;
      newState.boss.hp -= magic.dmg;
    }
    else 
    {
      newState.effects.push({ id: magic.id, time: magic.effect});
    }

    newState.effects.sort((a, b) => a.id - b.id);
    newStates.push(newState);
  })

  return newStates;
}

const bossTurn = (state, armor) => {
  const dmg = state.boss.dmg - armor; 
  if(dmg < 1) 
    dmg = 1;

  state.player.hp -= dmg;

  if(state.player.hp <= 0)
    return [];

  state.isPlayersTurn = true;
  return [state];
}

const magics = [
  { id: 0, name: "Magic Missile", mana: 53, dmg: 4, heal: 0, armor: 0, manaCharge: 0, effect: 0 },
  { id: 1, name: "Drain", mana: 73, dmg: 2, heal: 2, armor: 0, manaCharge: 0, effect: 0 },
  { id: 2, name: "Shield", mana: 113, dmg: 0, heal: 0, armor: 7, manaCharge: 0, effect: 6 },
  { id: 3, name: "Poison", mana: 173, dmg: 3, heal: 0, armor: 0, manaCharge: 0, effect: 6 },
  { id: 4, name: "Recharge", mana: 229, dmg: 0, heal: 0, armor: 0, manaCharge: 101, effect: 5 }
];