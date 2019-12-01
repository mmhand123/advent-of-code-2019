import { getFuelFromMass, getFullFuelFromMass } from "../day1";
import { inputs } from "../inputs/day1.json";

describe("day1", () => {
  it("returns the correct fuel needed from mass", () => {
    expect(getFuelFromMass(12)).toBe(2);
    expect(getFuelFromMass(14)).toBe(2);
    expect(getFuelFromMass(1969)).toBe(654);
    expect(getFuelFromMass(100756)).toBe(33583);
  });
  it("gets the correct total fuel for all the inputs", () => {
    expect(
      inputs.reduce((agg, input) => (agg += getFuelFromMass(input)), 0)
    ).toMatchInlineSnapshot(`3437969`);
  });
  it("takes into account that fuel needs fuel too", () => {
    expect(getFullFuelFromMass(14)).toBe(2);
    expect(getFullFuelFromMass(1969)).toBe(966);
    expect(getFullFuelFromMass(100756)).toBe(50346);
  });
  it("gets the correct total fuel taking into account that fuel needs fuel", () => {
    expect(
      inputs.reduce((agg, input) => (agg += getFullFuelFromMass(input)), 0)
    ).toMatchInlineSnapshot(`5154075`);
  });
});
