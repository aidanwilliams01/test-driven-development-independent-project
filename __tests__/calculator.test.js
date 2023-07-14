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
    expect(galacticAge.calculateMercuryAge()).toEqual('41.7');
  });

  test('should correctly calculate Venus age and return it', () => {
    expect(galacticAge.calculateVenusAge()).toEqual('16.1');
  });

  test('should correctly calculate Mars age and return it', () => {
    expect(galacticAge.calculateMarsAge()).toEqual('5.3');
  });

  test('should correctly calculate Jupiter age and return it', () => {
    expect(galacticAge.calculateJupiterAge()).toEqual('0.8');
  });

  test('should return an object', () => {
    expect(galacticAge.yearsPassed()).toEqual({});
  });
})