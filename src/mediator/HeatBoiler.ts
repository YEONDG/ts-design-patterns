import Mediator from './Mediator';
import Participant from './Participant';

export default class HeatBoiler extends Participant {
  private bOff = true;

  constructor(mediator: Mediator) {
    super(mediator);
  }

  on(): void {
    if (!this.bOff) return;
    this.bOff = false;
    this.mediator.participantChanged(this);
  }

  off(): void {
    if (this.bOff) return;
    this.bOff = true;
    this.mediator.participantChanged(this);
  }

  isRunning(): boolean {
    return !this.bOff;
  }

  displayState(dom: HTMLElement): void {
    dom.innerHTML = this.bOff ? '보일러 꺼짐' : '보일러 가동';

    if (this.isRunning()) dom.classList.add('hilighting');
    else dom.classList.remove('hilighting');
  }
}
