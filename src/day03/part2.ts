// Advent of Code - Day 3 - Part Two
const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split(
  ""
);
export function part2(input: string): number {
  const arrayRucksacks = input.split("\n");
  delete arrayRucksacks[arrayRucksacks.length - 1]; // delete  a ultima celda (prettier hacia que se me cree)
  let arrayRucksacksPerGroup: string[][] = [];
  let aux: string[] = [];
  arrayRucksacks.forEach((rucksack, i) => {
    if ((i + 1) % 3 === 0 && i != 0) {
      aux.push(rucksack);
      arrayRucksacksPerGroup = [...arrayRucksacksPerGroup, aux];
      aux = [];
    } else {
      aux.push(rucksack);
    }
  });

  let arrayMatching: string[] = [];
  let auxArrayMatching: string[] = [];
  arrayRucksacksPerGroup.forEach((group) => {
    group[0].split("").forEach((chart) => {
      if (
        group[1].includes(chart) &&
        group[2].includes(chart) &&
        !auxArrayMatching.includes(chart)
      ) {
        auxArrayMatching.push(chart);
      }
    });
    arrayMatching = [...arrayMatching, ...auxArrayMatching];
    auxArrayMatching = [];
  });

  const total = arrayMatching.reduce((partialSum, chart) => {
    return partialSum + alphabet.indexOf(chart) + 1;
  }, 0);

  return total;
}
