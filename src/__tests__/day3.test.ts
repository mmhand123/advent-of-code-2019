import { getManhattanDistance } from "../day3";
import { inputs } from "../inputs/day3.json";

describe("day3", () => {
  it("properly calculates the manhattan distance", () => {
    expect(
      getManhattanDistance(["R8", "U5", "L5", "D3"], ["U7", "R6", "D4", "L4"])
    ).toBe(6);
    expect(
      getManhattanDistance(
        ["R75", "D30", "R83", "U83", "L12", "D49", "R71", "U7", "L72"],
        ["U62", "R66", "U55", "R34", "D71", "R55", "D58", "R83"]
      )
    ).toBe(146);
    expect(
      getManhattanDistance(
        [
          "R98",
          "U47",
          "R26",
          "D63",
          "R33",
          "U87",
          "L62",
          "D20",
          "R33",
          "U53",
          "R51"
        ],
        ["U98", "R91", "D20", "R16", "D67", "R40", "U7", "R15", "U6", "R7"]
      )
    ).toBe(135);
  });
  it("properly calculates the manhattan distance from the inputs", () => {
    expect(
      getManhattanDistance(inputs.line1, inputs.line2)
    ).toMatchInlineSnapshot(`8015`);
  });
});
