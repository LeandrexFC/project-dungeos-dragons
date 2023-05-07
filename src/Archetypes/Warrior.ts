import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Warrior extends Archetype {
  private _typeEnergy: EnergyType;
  static _callInstance = 0;

  constructor(name: string) {
    super(name);
    this._typeEnergy = 'stamina';
    Warrior._callInstance += 1;
  }

  public get energyType(): EnergyType {
    return this._typeEnergy;
  }

  static createdArchetypeInstances(): number {
    return Warrior._callInstance;
  }
}

export default Warrior;