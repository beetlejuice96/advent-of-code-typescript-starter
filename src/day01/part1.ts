// Advent of Code - Day 1 - Part One

export function part1(input: string): number {
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

  const elfWithMostCaloriesTwo = Math.max(...totalCaloriesPerElf);

  return elfWithMostCaloriesTwo;
}
