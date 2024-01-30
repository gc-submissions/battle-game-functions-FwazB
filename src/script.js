"use strict";

// TODO - write your code here.
const randomDamage = () => {
  return Math.floor(Math.random() * 11);
};
const chooseOption = (opt1, opt2) => {
  const randNum = Math.floor(Math.random() * 2);
  return randNum === 0 ? opt1 : opt2;
};
const attackPlayer = function (health) {
  return health - randomDamage();
};
const logHealth = (player, health) => {
  console.log(`${player} Health is ${health}`);
};
const logDeath = (winner, loser) => {
  console.log(`${winner} has defeated ${loser}`);
};
const isDead = (health) => {
  return health <= 0;
};
function fight(player1, player2, player1Health, player2Health) {
  while (true) {
    const attacker = chooseOption(player1, player2);

    if (attacker === player1) {
      player2Health = attackPlayer(player2Health);

      if (isDead(player2Health)) {
        logDeath(player1, player2);
        break;
      }
      logHealth(player2, player2Health);
    } else {
      player1Health = attackPlayer(player1Health);

      if (isDead(player1Health)) {
        logDeath(player2, player1);
        break;
      }
      logHealth(player1, player1Health);
    }
  }
}

fight("fawaz", "benji", 100, 100);
