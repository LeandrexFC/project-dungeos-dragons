import Race from './Race';

class Dwarf extends Race {
  private _maxLifePoints: number;
  // static = atributo da classe e nao da instancia
  static _callInstance = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    // this = instancia
    this._maxLifePoints = 80;
    // Dwarf = Class
    Dwarf._callInstance += 1;
  }

  public get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return Dwarf._callInstance;
  }
}

// const litleDwarf = new Dwarf('', 0);
// const litleDwarf2 = new Dwarf('2', 1);

export default Dwarf;