import ThreeDUIFactory from './3DUIFactory';
import FlatUIFactory from './FlatUIFactory';
import UIFactory from './UIFactory';

let factory: UIFactory;

const flatMode = true;

if (flatMode) {
  factory = new FlatUIFactory();
} else {
  factory = new ThreeDUIFactory();
}

const domButton = document.querySelector('.button') as HTMLElement;
const domCheckBox = document.querySelector('.checkbox') as HTMLElement;
const domTextEdit = document.querySelector('.textedit') as HTMLElement;

factory.createButton(domButton, 'BUTTON');
factory.createCheckBox(domCheckBox, 'CheckBox', true);
factory.createTextEdit(domTextEdit, 'DesignPattern');
