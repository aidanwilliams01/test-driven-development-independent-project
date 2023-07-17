export class GalacticAge {
  constructor(earthYears) {
    this.earthYears = earthYears;
  } 

  calculateGalacticAges() {
    this.galacticAges = {};
    this.galacticAges.mercuryYears = (this.earthYears / .24).toFixed(1);
    this.galacticAges.venusYears = (this.earthYears / .62).toFixed(1);
    this.galacticAges.marsYears = (this.earthYears / 1.88).toFixed(1);
    this.galacticAges.jupiterYears = (this.earthYears / 11.86).toFixed(1);
    return this.galacticAges;
  }

  yearsPassed(priorBirthday) {
    if (priorBirthday > this.earthYears) {
      this.galacticYearsPassed = 'Error: argument is greater than current age';
      return this.galacticYearsPassed;
    }
    else {
      this.galacticYearsPassed = {};
      this.galacticYearsPassed.earth = this.earthYears - priorBirthday;
      this.galacticYearsPassed.mercury = (this.galacticYearsPassed.earth / .24).toFixed(2);
      this.galacticYearsPassed.venus = (this.galacticYearsPassed.earth / .62).toFixed(2);
      this.galacticYearsPassed.mars = (this.galacticYearsPassed.earth / 1.88).toFixed(2);
      this.galacticYearsPassed.jupiter = (this.galacticYearsPassed.earth / 11.86).toFixed(2);
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
      this.galacticYearsYetToPass.earth = futureBirthday - this.earthYears;
      this.galacticYearsYetToPass.mercury = (this.galacticYearsYetToPass.earth / .24).toFixed(2);
      this.galacticYearsYetToPass.venus = (this.galacticYearsYetToPass.earth / .62).toFixed(2);
      this.galacticYearsYetToPass.mars = (this.galacticYearsYetToPass.earth / 1.88).toFixed(2);
      this.galacticYearsYetToPass.jupiter = (this.galacticYearsYetToPass.earth / 11.86).toFixed(2);
      return this.galacticYearsYetToPass;
    }
  }
}