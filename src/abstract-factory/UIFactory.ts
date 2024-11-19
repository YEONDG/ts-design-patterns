import Button from './Button';
import CheckBox from './CheckBox';
import TextEdit from './TextEdit';

export default abstract class UIFactory {
  abstract createButton(dom: HTMLElement, caption: string): Button;
  abstract createCheckBox(
    dom: HTMLElement,
    label: string,
    caption: boolean
  ): CheckBox;
  abstract createTextEdit(dom: HTMLElement, text: string): TextEdit;
}
