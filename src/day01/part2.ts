// Advent of Code - Day 1 - Part Two

export function part2(input: string): number {
  const calories = input.split(/\r?\n/);
  const caloriesPerElf = [];
  let countBlankLines = 0;
  let newElf = [];
  for (let i = 0; i < calories.length; i++) {
    if (calories[i] === "") {
      countBlankLines++;
      newElf = [];
    } else {
      newElf.push(calories[i]);
      caloriesPerElf[countBlankLines] = newElf;
    }
  }

  const totalCaloriesPerElf = caloriesPerElf.map((elf) => {
    const totalCalories = elf.reduce((acc, curr) => {
      const caloriesNumber = parseInt(curr);
      return acc + caloriesNumber;
    }, 0);
    return totalCalories;
  });

  const orderCaloriesByDesc = totalCaloriesPerElf.sort((a, b) => b - a);
  const sumFirstTree =
    orderCaloriesByDesc[0] + orderCaloriesByDesc[1] + orderCaloriesByDesc[2];
  return sumFirstTree;
}
