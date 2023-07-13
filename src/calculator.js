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
}