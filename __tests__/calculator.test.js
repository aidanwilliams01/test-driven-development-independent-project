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
    expect(typeof galacticAge.yearsPassed()).toEqual('object');
  });

  test('should return an object containing years passed since a previous birthday for all planets', () => {
    galacticAge = new GalacticAge(56);
    expect(galacticAge.yearsPassed(43).Earth).toEqual(13);
    expect(galacticAge.yearsPassed(43).Mercury).toEqual('54.17');
    expect(galacticAge.yearsPassed(43).Venus).toEqual('20.97');
    expect(galacticAge.yearsPassed(43).Mars).toEqual('6.91');
    expect(galacticAge.yearsPassed(43).Jupiter).toEqual('1.10');
  });

  test('returns an error message if argument is greater than Earth age', () => {
    galacticAge = new GalacticAge(56);
    expect(galacticAge.yearsPassed(60)).toEqual('Error: argument is greater than current age');
  });

  test('should return an object containing years until a future birthday for all planets', () => {
    galacticAge = new GalacticAge(56);
    expect(galacticAge.yearsYetToPass(61).Earth).toEqual(5);
    expect(galacticAge.yearsYetToPass(61).Mercury).toEqual('20.83');
    expect(galacticAge.yearsYetToPass(61).Venus).toEqual('8.06');
    expect(galacticAge.yearsYetToPass(61).Mars).toEqual('2.65');
    expect(galacticAge.yearsYetToPass(43).Jupiter).toEqual('0.42');
  });
})