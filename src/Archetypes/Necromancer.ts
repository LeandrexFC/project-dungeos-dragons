import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Necromancer extends Archetype {
  private _typeEnergy: EnergyType;
  static _callInstance = 0;

  constructor(name: string) {
    super(name);
    this._typeEnergy = 'mana';
    Necromancer._callInstance += 1;
  }

  public get energyType(): EnergyType {
    return this._typeEnergy;
  }

  static createdArchetypeInstances(): number {
    return Necromancer._callInstance;
  }
}

export default Necromancer;