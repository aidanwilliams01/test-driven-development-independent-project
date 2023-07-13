import { GalacticAge } from "../src/calculator";

describe('GalacticAge', () => {
  
  test('should correctly create a GalacticAge object with five properties', () => {
    const galacticAge = new GalacticAge(0, 0, 0, 0, 0);
    expect(galacticAge.earthYears).toEqual(0);
    expect(galacticAge.mercuryYears).toEqual(0);
    expect(galacticAge.venusYears).toEqual(0);
    expect(galacticAge.marsYears).toEqual(0);
    expect(galacticAge.jupiterYears).toEqual(0);
  });

  test('should correctly calculate Mercury age and return it', () => {
    const galacticAge = new GalacticAge(10);
    expect(galacticAge.calculateMercuryAge()).toEqual(2.4)
  });
})