// Advent of Code - Day 3 - Part One

const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split(
  ""
);

export function part1(input: string): number {
  //step1: separar todas las mochilas en un array.
  const arrayRucksacks = input.split("\n");
  delete arrayRucksacks[arrayRucksacks.length - 1]; // delete  a ultima celda (prettier hacia que se me cree)

  //step2: separar los compartimientos de todas las mochilas.
  const arrayRucksacksWithCompartment = arrayRucksacks.map((rucksack) => {
    const compartmentOne = rucksack.slice(0, rucksack.length / 2);
    const compartmentTwo = rucksack.slice(rucksack.length / 2, rucksack.length);
    return {
      one: compartmentOne,
      two: compartmentTwo,
    };
  });

  //step3: buscar en cada mochila, que tipo de elemento se comparte entre sus compartimientos y guardarlos en otro array.
  let arrayChartMatch: string[] = [];
  arrayRucksacksWithCompartment.forEach((rucksacks) => {
    let matchsInRuckstack: string[] = [];
    rucksacks.one.split("").forEach((chart) => {
      if (rucksacks.two.includes(chart) && !matchsInRuckstack.includes(chart)) {
        matchsInRuckstack.push(chart);
      }
    });
    arrayChartMatch = [...arrayChartMatch, ...matchsInRuckstack];
    matchsInRuckstack = [];
  });
  //step4: matchear los elementos repetidos con su valor de prioridad.
  //step5: sumar todas las prioridades.
  const total = arrayChartMatch.reduce((partialSum, chart) => {
    return partialSum + alphabet.indexOf(chart) + 1;
  }, 0);

  return total;
}
