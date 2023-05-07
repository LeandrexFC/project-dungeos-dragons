import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Mage extends Archetype {
  private _typeEnergy: EnergyType;
  static _callInstance = 0;

  constructor(name: string) {
    super(name);
    this._typeEnergy = 'mana';
    Mage._callInstance += 1;
  }

  public get energyType(): EnergyType {
    return this._typeEnergy;
  }

  static createdArchetypeInstances(): number {
    return Mage._callInstance;
  }
}

export default Mage;