import Item from './Item';

export default class Bow implements Item {
  use(): string {
    return '화살을 멀리서 쐈다.';
  }
}
