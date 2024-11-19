import Player from './Player';
import RunState from './RunState';
import SitDownState from './SitDownState';
import StandUpState from './StandUpState';
import State from './State';

export default class WalkState extends State {
  constructor(player: Player) {
    super(player);
  }

  standUp(): void {
    this.player.setSpeed(0);
    this.player.talk('멈춰...');
    this.player.setState(new StandUpState(this.player));
  }

  sitDown(): void {
    this.player.setSpeed(0);
    this.player.talk('걷다가 앉으면 넘어질 수 있어요...');
    this.player.setState(new SitDownState(this.player));
  }

  walk(): void {
    this.player.talk('난 걷는 걸 좋아하지!');
  }

  run(): void {
    this.player.setSpeed(20);
    this.player.talk('걷다가 뛰면 더 빨리 갈 수 있지!');
    this.player.setState(new RunState(this.player));
  }

  getDescription(): string {
    return '걷는 중';
  }
}
