import { ItemName } from './Factory';
import ItemFactory from './ItemFactory';

const factory = new ItemFactory();

const domOutput = document.querySelector('textarea');
const buttons = document.querySelectorAll('button');

buttons.forEach((button) =>
  button.addEventListener('click', (e) => {
    const itemName = (e.target as HTMLButtonElement).innerText;

    const item = factory.create(itemName as ItemName);
    if (item) {
      domOutput.value += `\n${item.use()}`;
    } else {
      domOutput.value += `\n${itemName}은(는) 생성할 수 없습니다.`;
    }

    domOutput.scrollTop = domOutput.scrollHeight;
  })
);
