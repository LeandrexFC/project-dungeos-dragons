import Race from './Race';

class Orc extends Race {
  private _maxLifePoints: number;
  // static = atributo da classe e nao da instancia
  static _callInstance = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    // this = instancia
    this._maxLifePoints = 74;
    // Dwarf = Class
    Orc._callInstance += 1;
  }

  public get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return Orc._callInstance;
  }
}

export default Orc;