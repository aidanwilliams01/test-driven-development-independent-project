export class GalacticAge {
  constructor(earthYears) {
    this.earthYears = earthYears;
  } 

  calculateMercuryAge() {
    this.mercuryYears = this.earthYears * .24;
    return this.mercuryYears;
  }

  calculateVenusAge() {
    
  }
}