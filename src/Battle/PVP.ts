import Character from '../Character';
import Battle from './Battle';

class PVP extends Battle {
  constructor(character1: Character, protected character2: Character) {
    super(character1);
  }

  fight(): number {
    // while
    this.player.attack(this.character2);

    if (this.character2.lifePoints === -1) {
      return super.fight();
    } 
    this.character2.attack(this.player);
    if (this.player.lifePoints === -1) {
      return super.fight();
    }
  }
}

export default PVP;