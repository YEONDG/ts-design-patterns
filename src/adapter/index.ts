import Animal from './Animal';
import Cat from './Cat';
import Dog from './Dog';
import Tiger from './Tiger';
import TigerAdapter from './TigerAdapter';

const list = Array<Animal>();

list.push(new Dog('백구'));
list.push(new Cat('나비'));
list.push(new Cat('냐옹'));

// const tiger = new Tiger();
// tiger.name = '티거';
// list.push(tiger);

list.push(new TigerAdapter('티거'));

list.forEach((animal) => {
  animal.sound();
});
