// Advent of Code - Day 2 - Part Two

const pointsRound = {
  lose: 0,
  tie: 3,
  win: 6,
};

const rules = {
  A: {
    //piedra
    point: 1,
    win: "C",
    lose: "B",
    tie: "A",
  },
  B: {
    //papel
    point: 2,
    win: "A",
    lose: "C",
    tie: "B",
  },
  C: {
    //tijera
    point: 3,
    win: "B",
    lose: "A",
    tie: "C",
  },
};
export function part2(input: string): number {
  let totalPoints = 0;
  const arrayRounds = input.split("\n");
  delete arrayRounds[arrayRounds.length - 1]; // delete  a ultima celda (prettier hacia que se me cree)

  arrayRounds.forEach((round) => {
    let pointsPerMatch = 0;
    const match: string[] = round.split(" ");
    console.log(match);
    const matchRulesEnemy = rules[match[0] as keyof typeof rules];
    console.log(matchRulesEnemy);
    if (match[1] === "X") {
      pointsPerMatch +=
        pointsRound.lose +
        rules[matchRulesEnemy.win as keyof typeof rules].point;
    }

    if (match[1] === "Y") {
      pointsPerMatch +=
        pointsRound.tie +
        rules[matchRulesEnemy.tie as keyof typeof rules].point;
    }

    if (match[1] === "Z") {
      pointsPerMatch +=
        pointsRound.win +
        rules[matchRulesEnemy.lose as keyof typeof rules].point;
    }
    console.log(pointsPerMatch);
    totalPoints += pointsPerMatch;
  });
  return totalPoints;
}
