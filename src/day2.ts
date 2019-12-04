interface Operations {
  1: 'add';
  2: 'multiply';
  99: 'exit';
}

export function processOpcodes(initialCodes: number[]): number[] {
  const cloned = [...initialCodes];
  const operations: Operations = {
    1: 'add',
    2: 'multiply',
    99: 'exit'
  };
  let currentIndex = 0;
  let processing = true;

  while (processing) {
    const opCode: 1 | 2 | 99 = cloned[currentIndex] as 1 | 2 | 99;
    const operation = operations[opCode];
    const firstIndex = cloned[currentIndex + 1];
    const secondIndex = cloned[currentIndex + 2];
    const destinationIndex = cloned[currentIndex + 3];

    if (operation === 'exit') {
      processing = false;
      break;
    }

    const firstValue = cloned[firstIndex];
    const secondValue = cloned[secondIndex];
    let finalValue: number = 0;

    if (operation === 'add') {
      finalValue = firstValue + secondValue;
    } else if (operation === 'multiply') {
      finalValue = firstValue * secondValue;
    }

    cloned[destinationIndex] = finalValue;

    currentIndex += 4;
  }

  return cloned;
}
