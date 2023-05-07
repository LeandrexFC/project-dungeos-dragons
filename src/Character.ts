import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import Fighter from './Fighter';
import Race from './Races/Race';
import getRandomInt from './utils';
import { Elf } from './Races';

class Character implements Fighter {
  private _name: string;
  private _race: Race;
  private _archetype: Archetype;
  private _maxLifePoints: number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _dexterity: number;
  private _energy: Energy;

  constructor(name: string) {
    this._name = name;
    this._dexterity = getRandomInt(1, 10);
    this._race = new Elf('Elf', this._dexterity);
    this._archetype = new Mage(name);
    this._maxLifePoints = Math.floor(this._race.maxLifePoints / 2);
    this._lifePoints = this._maxLifePoints;
    this._strength = getRandomInt(1, 10);
    this._defense = getRandomInt(1, 10);
    this._energy = { type_: this._archetype.energyType,
      amount: getRandomInt(1, 10) };
  }

  public get race(): Race {
    return this._race;
  }

  public get archetype(): Archetype {
    return this._archetype;
  }

  public get lifePoints(): number {
    return this._lifePoints;
  }

  public get strength(): number {
    return this._strength;
  }
  
  public get defense(): number {
    return this._defense;
  }

  public get dexterity(): number {
    return this._dexterity;
  }

  public get energy(): Energy {
    return { ...this._energy };
  }

  receiveDamage(attackPoints: number): number {
    const damage = Math.max(attackPoints - this.defense, 0);
    const damageLifePoints = damage > 0 ? damage : 1;
    this._lifePoints -= damageLifePoints;
    
    if (this._lifePoints <= 0) {
      this._lifePoints = -1;
    }
    return this._lifePoints;
  }

  attack(enemy: Fighter): void {
    enemy.receiveDamage(this._strength);
  }

  levelUp(): void {
    const randomNum = getRandomInt(1, 10);
    const lifePointsIncrement = getRandomInt(1, 10);

    this._maxLifePoints += randomNum;
    if (this._maxLifePoints > this._race.maxLifePoints) {
      this._maxLifePoints = this._race.maxLifePoints;
    }

    this._strength += randomNum;
    this._dexterity += randomNum;
    this._defense += randomNum;
    
    this._energy = { type_: this._archetype.energyType, amount: 10 };
    
    this._lifePoints += lifePointsIncrement;
    if (this._lifePoints > this._maxLifePoints) {
      this._lifePoints = this._maxLifePoints;
    }
  }

  special(enemy: Fighter): void {
    const energy = this._energy;

    if (energy.amount >= 10) {
      enemy.receiveDamage(100);
    }
  }
}

export default Character;