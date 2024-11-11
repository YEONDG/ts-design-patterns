import King from './King';

const king = King.getInstance();
king.sayHello();

const king2 = King.getInstance();
if (king === king2) {
  console.log('Same king!');
} else {
  console.log('Different king!');
}
