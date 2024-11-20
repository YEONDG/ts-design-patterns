import Unit from './Unit';
import Item from './Item';
import Visitor from './Visitor';

export default class AvgVisitor implements Visitor {
  private sum = 0;
  private count = 0;

  getValue() {
    return this.sum / this.count;
  }

  visit(unit: Unit) {
    if (unit instanceof Item) {
      this.sum += unit.getValue();
      this.count++;
    } else {
      unit.accept(this);
    }
  }
}
