import Mediator from './Mediator';
import Participant from './Participant';

export default class Door extends Participant {
  private bClosed = true;

  constructor(mediator: Mediator) {
    super(mediator);
  }

  open(): void {
    if (!this.bClosed) return;
    this.bClosed = false;
    this.mediator.participantChanged(this);
  }

  close(): void {
    if (this.bClosed) return;
    this.bClosed = true;
    this.mediator.participantChanged(this);
  }

  isClosed(): boolean {
    return this.bClosed;
  }

  displayState(dom: HTMLElement): void {
    dom.innerHTML = this.isClosed() ? '문 Closed' : '문 Open';

    if (this.bClosed) dom.classList.remove('hilighting');
    else dom.classList.add('hilighting');
  }
}
