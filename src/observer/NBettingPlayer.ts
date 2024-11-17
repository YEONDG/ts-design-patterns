import Player from './Player';

export default class NBettingPlayer extends Player {
  constructor(name: string, private ns: Array<Number>) {
    super(name);
  }

  update(diceNumber: number): void {
    this._winning = this.ns.includes(diceNumber);
  }
}
