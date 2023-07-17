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
      this.galacticYearsPassed = 'Error: argument is greater than current age';
      return this.galacticYearsPassed;
    }
    else {
      this.galacticYearsPassed = {};
      this.galacticYearsPassed.Earth = this.earthYears - priorBirthday;
      this.galacticYearsPassed.Mercury = (this.galacticYearsPassed.Earth / .24).toFixed(2);
      this.galacticYearsPassed.Venus = (this.galacticYearsPassed.Earth / .62).toFixed(2);
      this.galacticYearsPassed.Mars = (this.galacticYearsPassed.Earth / 1.88).toFixed(2);
      this.galacticYearsPassed.Jupiter = (this.galacticYearsPassed.Earth / 11.86).toFixed(2);
      return this.galacticYearsPassed;
    }
  }

  yearsYetToPass(futureBirthday) {
    if (futureBirthday < this.earthYears) {
      this.galacticYearsYetToPass = 'Error: argument is less than current age';
      return this.galacticYearsYetToPass;
    }
    else {
      this.galacticYearsYetToPass = {};
      this.galacticYearsYetToPass.Earth = futureBirthday - this.earthYears;
      this.galacticYearsYetToPass.Mercury = (this.galacticYearsYetToPass.Earth / .24).toFixed(2);
      this.galacticYearsYetToPass.Venus = (this.galacticYearsYetToPass.Earth / .62).toFixed(2);
      this.galacticYearsYetToPass.Mars = (this.galacticYearsYetToPass.Earth / 1.88).toFixed(2);
      this.galacticYearsYetToPass.Jupiter = (this.galacticYearsYetToPass.Earth / 11.86).toFixed(2);
      return this.galacticYearsYetToPass;
    }
  }
}