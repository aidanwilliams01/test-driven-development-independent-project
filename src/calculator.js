export class GalacticAge {
  constructor(earthYears) {
    this.earthYears = earthYears;
  } 

  calculateMercuryAge() {
    this.mercuryYears = this.earthYears / .24;
    return this.mercuryYears.toFixed(1);
  }

  calculateVenusAge() {
    this.venusYears = this.earthYears / .62;
    return this.venusYears.toFixed(1);
  }

  calculateMarsAge() {
    this.marsYears = this.earthYears / 1.88;
    return this.marsYears.toFixed(1);
  }

  calculateJupiterAge() {
    this.jupiterYears = this.earthYears / 11.86;
    return this.jupiterYears.toFixed(1);
  }

  yearsPassed(priorBirthday) {
    if (priorBirthday > this.earthYears) {
      return 'Error: argument is greater than current age';
    }
    else {
      const yearsPassed = {};
      yearsPassed.Earth = this.earthYears - priorBirthday;
      yearsPassed.Mercury = (yearsPassed.Earth / .24).toFixed(2);
      yearsPassed.Venus = (yearsPassed.Earth / .62).toFixed(2);
      yearsPassed.Mars = (yearsPassed.Earth / 1.88).toFixed(2);
      yearsPassed.Jupiter = (yearsPassed.Earth / 11.86).toFixed(2);
      return yearsPassed;
    }
  }

  yearsYetToPass(futureBirthday) {
    const yearsYetToPass = {};
    yearsYetToPass.Earth = futureBirthday - this.earthYears;
    yearsYetToPass.Mercury = (yearsYetToPass.Earth / .24).toFixed(2);
    yearsYetToPass.Venus = (yearsYetToPass.Earth / .62).toFixed(2);
    yearsYetToPass.Mars = (yearsYetToPass.Earth / 1.88).toFixed(2);
    yearsYetToPass.Jupiter = (yearsYetToPass.Earth / 11.86).toFixed(2);
    return yearsYetToPass;
  }
}