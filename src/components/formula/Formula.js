import {ExelComponent} from '@core/ExelComponent';
import {$} from '@core/dom';

export class Formula extends ExelComponent {
  static className = 'exel__formula';
  static element = 'div';
  static getContainer() {
    return $.create(this.element, this.className);
  }

  constructor($root) {
    super($root, {
      name: 'Formula',
      listeners: ['input', 'click'],
    });
  }

  toHTML() {
    return (
      '<div class="info">fx</div>\n' +
      '<div class="input" contenteditable="true" spellcheck="false"></div>'
    );
  }

  onInput(event) {
    console.log('Formula: onInput', event);
  }

  onClick(event) {
    console.log('Formula: onClick', event);
  }
}
