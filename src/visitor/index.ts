import AvgVisitor from './AvgVisitor';
import Item from './Item';
import ItemList from './ItemList';
import SumVisitor from './SumVisitor';

const list1 = new ItemList();
list1.add(new Item(100));
list1.add(new Item(200));
list1.add(new Item(300));

const list2 = new ItemList();
list2.add(new Item(400));
list2.add(new Item(500));

list1.add(list2);

const list3 = new ItemList();
list3.add(new Item(25));
list2.add(list3);

const sum = new SumVisitor();
list1.accept(sum);
console.log(`합계: ${sum.getValue()}`);

const avg = new AvgVisitor();
list1.accept(avg);
console.log(`평균: ${avg.getValue()}`);
