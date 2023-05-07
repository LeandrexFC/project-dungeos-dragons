import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Ranger extends Archetype {
  private _typeEnergy: EnergyType;
  static _callInstance = 0;

  constructor(name: string) {
    super(name);
    this._typeEnergy = 'stamina';
    Ranger._callInstance += 1;
  }

  public get energyType(): EnergyType {
    return this._typeEnergy;
  }

  static createdArchetypeInstances(): number {
    return Ranger._callInstance;
  }
}

export default Ranger;