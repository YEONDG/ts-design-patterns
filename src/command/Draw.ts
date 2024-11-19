export default class Draw {
  constructor(
    protected canvas: HTMLCanvasElement,
    protected fillColor = '#000000',
    protected strokeColor = '#000000'
  ) {}

  setFillColor(color: string): Draw {
    this.fillColor = color;
    return this;
  }

  setStrokeColor(color: string): Draw {
    this.strokeColor = color;
    return this;
  }
}
