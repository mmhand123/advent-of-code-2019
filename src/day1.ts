/**
 * Fuel required to launch a given module is based on its mass.
 * Specifically, to find the fuel required for a module, take its mass, divide by three, round down, and subtract 2.
 */
export function getFuelFromMass(mass: number): number {
  return Math.floor(mass / 3) - 2;
}

export function getFullFuelFromMass(mass: number): number {
  const converted = getFuelFromMass(mass);

  if (converted <= 0) {
    return 0;
  }

  return converted + getFullFuelFromMass(converted);
}
