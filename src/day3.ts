export function getManhattanDistance(line1: string[], line2: string[]): number {
  const converted1 = convertToCoordinates(line1);
  const converted2 = convertToCoordinates(line2);
  const overlaps: Set<number[]> = new Set();
  let shortestDistance: number = 0;

  converted2.forEach(coord => {
    if (converted1.has(coord)) {
      overlaps.add(coord.split(',').map(val => parseInt(val, 10)));
    }
  });

  overlaps.forEach(([x, y]) => {
    const distanceFromPort = Math.abs(0 - x + (0 - y));

    if (!shortestDistance || distanceFromPort < shortestDistance) {
      shortestDistance = distanceFromPort;
    }
  });

  return shortestDistance;
}

function convertToCoordinates(line: string[]): Set<string> {
  const converted: Set<string> = new Set();
  let x = 0;
  let y = 0;

  for (let direction of line) {
    const parsed = parseDirection(direction);
    const value = parsed.x ? parsed.x : parsed.y;
    const axis = parsed.x ? 'x' : 'y';
    let numPoints = Math.abs(value);
    const operation = value > 0 ? 'add' : 'subtract';

    while (numPoints) {
      if (operation === 'add') {
        if (axis === 'x') {
          x += 1;
        } else {
          y += 1;
        }
      } else {
        if (axis === 'x') {
          x -= 1;
        } else {
          y -= 1;
        }
      }

      converted.add(`${x},${y}`);

      numPoints--;
    }
  }

  return converted;
}

type Directions = 'U' | 'D' | 'L' | 'R';

function parseDirection(str: string): { x: number; y: number } {
  const direction: Directions = str[0] as Directions;
  const distance = parseInt(str.substr(1), 10);

  if (direction === 'U') {
    return { x: 0, y: distance };
  } else if (direction === 'D') {
    return { x: 0, y: -distance };
  } else if (direction === 'R') {
    return { x: distance, y: 0 };
  } else {
    return { x: -distance, y: 0 };
  }
}
