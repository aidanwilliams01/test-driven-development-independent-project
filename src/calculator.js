export class GalacticAge {
  constructor(earthYears, mercuryYears, venusYears, marsYears, jupiterYears) {
    this.earthYears = earthYears;
    this.mercuryYears = mercuryYears;
    this.venusYears = venusYears;
    this.marsYears = marsYears;
    this.jupiterYears = jupiterYears;
  } 

  calculateMercuryAge() {
    this.mercuryYears = this.earthYears * .24;
    return this.mercuryYears;
  }
}