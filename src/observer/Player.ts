export default abstract class Player {
  protected _winning: boolean = false;

  constructor(private _name: string) {}

  get name(): string {
    return this._name;
  }

  get winning(): boolean {
    return this._winning;
  }

  abstract update(diceNumber: number): void;
}
