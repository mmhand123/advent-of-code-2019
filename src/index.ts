import { inputs } from './inputs/day2.json';
import { processOpcodes } from './day2';

let cloned;

for (let noun = 0; noun < 100; noun++) {
  for (let verb = 0; verb < 100; verb++) {
    cloned = [...inputs];
    cloned[1] = noun;
    cloned[2] = verb;

    const processed = processOpcodes(cloned);

    if (processed[0] === 19690720) {
      console.log('found');
      console.log(100 * noun + verb);
      break;
    }
  }
}
