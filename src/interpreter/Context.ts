export default class Context {
  private keywords: string[];

  private currentIndex = 0;

  constructor(script: string) {
    this.keywords = script.split(' ');
  }

  readNextKeyword(): string {
    this.currentIndex += 1;
    return this.getCurrentKeyword();
  }

  getCurrentKeyword(): string {
    if (this.keywords.length > this.currentIndex) {
      return this.keywords[this.currentIndex];
    } else {
      return null;
    }
  }
}
