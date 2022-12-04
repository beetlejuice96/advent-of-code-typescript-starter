// Advent of Code - Day 4 - Part One

export function part1(input: string): number {
  // step0 : splitear el input para poder generar arrays por cada par.
  const groups = input.split("\n");
  delete groups[groups.length - 1]; // delete  a ultima celda (prettier hacia que se me cree)
  // step1 : splitear cada par y generar un array de todos los numeros intermedios en sus asignaciones ej : "1-4"=> [1,2,3,4]
  // step2 : recorrer el array nuevo y ver que elfo tiene todas las areas asingnadas del su companiero

  let totalParWithRepeatedArea = 0;

  groups.forEach((current) => {
    const par = current.split(",");
    const firstElf = arrayElf(par[0]);
    const secondElf = arrayElf(par[1]);
    const containsAllFirstElf = firstElf.every((element) => {
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
  console.log(initElf, lengthElf);
  const arrayNumberElf = [];
  for (let index = initElf; index <= lengthElf; index++) {
    arrayNumberElf.push(index);
  }
  return arrayNumberElf;
};
