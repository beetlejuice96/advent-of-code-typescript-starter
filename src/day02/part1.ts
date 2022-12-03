// Advent of Code - Day 2 - Part One
const myPoints = {
  X: 1,
  Y: 2,
  Z: 3,
};

const pointsRound = {
  lose: 0,
  tie: 3,
  win: 6,
};

const rules = {
  A: {
    point: 1,
    win: "Z",
    lose: "Y",
    tie: "X",
  },
  B: {
    point: 2,
    win: "X",
    lose: "Z",
    tie: "Y",
  },
  C: {
    point: 3,
    win: "Y",
    lose: "X",
    tie: "Z",
  },
};

export function part1(input: string): number {
  let totalPoints = 0;
  const arrayRounds = input.split("\n");
  delete arrayRounds[arrayRounds.length - 1]; // delete  a ultima celda (prettier hacia que se me cree)

  arrayRounds.forEach((round) => {
    let pointsPerMatch = 0;
    const match: string[] = round.split(" ");
    const matchRulesEnemy = rules[match[0] as keyof typeof rules];
    if (matchRulesEnemy.lose === match[1]) {
      pointsPerMatch += pointsRound.win;
    }
    if (matchRulesEnemy.tie === match[1]) {
      pointsPerMatch += pointsRound.tie;
    }
    totalPoints += pointsPerMatch + myPoints[match[1] as keyof typeof myPoints];
  });

  return totalPoints;
}
