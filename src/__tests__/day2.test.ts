import { processOpcodes } from '../day2';
import { inputs } from '../inputs/day2.json';

describe('day 2', () => {
  it('properly processes opcodes', () => {
    expect(processOpcodes([1, 0, 0, 0, 99])).toStrictEqual([2, 0, 0, 0, 99]);
    expect(processOpcodes([2, 3, 0, 3, 99])).toStrictEqual([2, 3, 0, 6, 99]);
    expect(processOpcodes([2, 4, 4, 5, 99, 0])).toStrictEqual([
      2,
      4,
      4,
      5,
      99,
      9801
    ]);
    expect(processOpcodes([1, 1, 1, 4, 99, 5, 6, 0, 99])).toStrictEqual([
      30,
      1,
      1,
      4,
      2,
      5,
      6,
      0,
      99
    ]);
  });
  it('properly parses the inputs for opcodes', () => {
    const modifiedInputs = [...inputs];
    modifiedInputs[1] = 12;
    modifiedInputs[2] = 2;

    expect(processOpcodes(modifiedInputs)).toMatchInlineSnapshot(`
      Array [
        3267740,
        12,
        2,
        2,
        1,
        1,
        2,
        3,
        1,
        3,
        4,
        3,
        1,
        5,
        0,
        3,
        2,
        1,
        10,
        48,
        1,
        19,
        5,
        49,
        1,
        6,
        23,
        51,
        1,
        27,
        5,
        52,
        2,
        31,
        10,
        208,
        2,
        35,
        6,
        416,
        1,
        39,
        5,
        417,
        2,
        43,
        9,
        1251,
        1,
        47,
        6,
        1253,
        1,
        13,
        51,
        1258,
        2,
        9,
        55,
        3774,
        1,
        59,
        13,
        3779,
        1,
        6,
        63,
        3781,
        2,
        67,
        10,
        15124,
        1,
        9,
        71,
        15127,
        2,
        75,
        6,
        30254,
        1,
        79,
        5,
        30255,
        1,
        83,
        5,
        30256,
        2,
        9,
        87,
        90768,
        2,
        9,
        91,
        272304,
        1,
        95,
        10,
        272308,
        1,
        9,
        99,
        272311,
        2,
        103,
        6,
        544622,
        2,
        9,
        107,
        1633866,
        1,
        111,
        5,
        1633867,
        2,
        6,
        115,
        3267734,
        1,
        5,
        119,
        3267735,
        1,
        123,
        2,
        3267737,
        1,
        127,
        9,
        0,
        99,
        2,
        0,
        14,
        0,
      ]
    `);
  });
});
