const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

// Parte I
const dragonDamage = (strength) => {
  const damage = Math.floor(Math.random() * (strength - 15)) + 15;
  return damage;
}

const warriorDamage = (strength, weaponDmg) => {
  const damage = Math.floor((Math.random() * (strength * weaponDmg)) - strength) + strength;
  return damage;
}

const mageDamage = (intelligence, mana) => {
  if (mana > 15) {
    return { damage: Math.floor((Math.random() * intelligence)) + intelligence, mana: 15}
  }
  return {damage: 'Não possui mana suficiente', mana: 0}
}

// Parte II

const gameActions = {
  // Crie as HOFs neste objeto.
  warriorTurn: (warriorDamage) => {
    const strength = warrior.strength;
    const weaponDmg = warrior.weaponDmg;
    
    warrior.damage = warriorDamage(strength,weaponDmg);
    dragon.healthPoints -= warrior.damage; 
  },

  mageTurn: (mageDamage) => {
    const intelligence = mage.intelligence;
    const mana = mage.mana;
    
    mage.damage = mageDamage(intelligence,mana).damage;
    mage.mana -= mageDamage(intelligence,mana).mana;
    dragon.healthPoints -= mage.damage; 
  },

  dragonTurn: (dragonDamage) => {
    const strength = dragon.strength;
    const damage = dragonDamage(strength);
  
    dragon.damage = damage;
    warrior.healthPoints -= damage;
    mage.healthPoints -= damage;
  },

  refreshTurn: () => battleMembers
};

const turn = () => {
  gameActions.warriorTurn(warriorDamage);
  gameActions.mageTurn(mageDamage);
  gameActions.dragonTurn(dragonDamage);
  console.log(gameActions.refreshTurn());
}

const play = (turns) => {
  for (let index = 1; index <= turns; index += 1) {
    console.log(`${index}ª rodada`);
    turn();
  }
}

play(5);