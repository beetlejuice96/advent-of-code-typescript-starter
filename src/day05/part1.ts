// Advent of Code - Day 5 - Part One

interface IInstruction {
  move: number;
  from: number;
  to: number;
}
const SPACE_PER_POSITION = 4;

export function part1(input: string): number {
  const stacks = stringToArraysOfStacks(input);
  const instructions = stringToInstructions(input);
  instructions.forEach((instruction) => {
    const stackFrom = stacks[instruction.from - 1];
    const cantelementsToMove = instruction.move;
    const stackTo = stacks[instruction.to - 1];
    for (let index = 0; index < cantelementsToMove; index++) {
      const element = stackFrom.pop();
      if (element) stackTo.push(element);
    }
    stacks[instruction.from - 1] = stackFrom;
    stacks[instruction.to - 1] = stackTo;
  });
  const result = stacks.map((stack) => {
    return stack[stack.length - 1];
  });
  console.log("result", result);
  return 0;
}

const stringToArraysOfStacks = (input: string): Array<Array<string>> => {
  const table = input.split(/\r?\n/);
  const cut = table.findIndex((element) => element === "");
  const onlyStacks = table.slice(0, cut - 1);
  const arrayStacks: Array<Array<string>> = [
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
  ];
  onlyStacks.forEach((row) => {
    let currentStack = 0;
    for (
      let index = 0;
      index < row.length;
      index = index + SPACE_PER_POSITION
    ) {
      const cracks = row.slice(index, index + SPACE_PER_POSITION);
      if (cracks[0] !== " ") arrayStacks[currentStack].push(cracks);
      currentStack++;
    }
  });
  return arrayStacks.map((stack) => stack.reverse());
};

const stringToInstructions = (input: string) => {
  const table = input.split(/\r?\n/);
  const cut = table.findIndex((element) => element === "");
  const onlyInstructions = table.slice(cut + 1);
  const instructions: IInstruction[] = onlyInstructions.map((row) => {
    const stringToArray = row.split(" ");
    return {
      move: parseInt(stringToArray[1]),
      from: parseInt(stringToArray[3]),
      to: parseInt(stringToArray[5]),
    };
  });
  delete instructions[instructions.length - 1];
  delete instructions[instructions.length - 1];

  return instructions;
};
