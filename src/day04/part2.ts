// Advent of Code - Day 4 - Part Two

export function part2(input: string): number {
  const groups = input.split("\n");
  delete groups[groups.length - 1];

  let totalParWithRepeatedArea = 0;

  groups.forEach((current) => {
    const par = current.split(",");
    const firstElf = arrayElf(par[0]);
    const secondElf = arrayElf(par[1]);
    const containsAllFirstElf = firstElf.some((element) => {
      return secondElf.includes(element);
    });
    const containsAllSecondElf = secondElf.every((element) => {
      return firstElf.includes(element);
    });
    if (containsAllFirstElf || containsAllSecondElf) {
      totalParWithRepeatedArea++;
    }
  });
  return totalParWithRepeatedArea;
}
const arrayElf = (sectionsElf: string) => {
  const lengthElf = parseInt(sectionsElf.split("-")[1]);
  const initElf = parseInt(sectionsElf.split("-")[0]);
  const arrayNumberElf = [];
  for (let index = initElf; index <= lengthElf; index++) {
    arrayNumberElf.push(index);
  }
  return arrayNumberElf;
};
