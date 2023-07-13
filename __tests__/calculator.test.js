import { GalacticAge } from "../src/calculator";

describe('GalacticAge', () => {
  
  let galacticAge;

  beforeEach(() => {
    galacticAge = new GalacticAge(10);
  });

  test('should correctly create a GalacticAge object with one property', () => {
    expect(galacticAge.earthYears).toEqual(10);
  });

  test('should correctly calculate Mercury age and return it', () => {
    expect(galacticAge.calculateMercuryAge()).toEqual(2.4);
  });

  test('should correctly calculate Venus age and return it', () => {
    expect(galacticAge.calculateVenusAge()).toEqual(6.2);
  });
})