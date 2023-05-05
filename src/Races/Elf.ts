import Race from './Race';

class Elf extends Race {
  private _maxLifePoints: number;
  // static = atributo da classe e nao da instancia
  static _callInstance = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    // this = instancia
    this._maxLifePoints = 99;
    // Dwarf = Class
    Elf._callInstance += 1;
  }

  public get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return Elf._callInstance;
  }
}

export default Elf;