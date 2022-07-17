import {ExelComponent} from '@core/ExelComponent';
import {$} from '@core/dom';

export class Toolbar extends ExelComponent {
  static className = 'exel__toolbar';
  static element = 'ul';
  static getContainer() {
    return $.create(this.element, this.className);
  }

  constructor($root) {
    super($root, {
      name: 'Toolbar',
      listeners: ['click'],
    });
  }

  toHTML() {
    return (
      '<li>\n' +
      '        <div class="button">\n' +
      '          <i class="material-icons">format_align_left</i>\n' +
      '        </div>\n' +
      '      </li>\n' +
      '      <li>\n' +
      '        <div class="button">\n' +
      '          <i class="material-icons">format_align_center</i>\n' +
      '        </div>\n' +
      '      </li>\n' +
      '      <li>\n' +
      '        <div class="button">\n' +
      '          <i class="material-icons">format_align_right</i>\n' +
      '        </div>\n' +
      '      </li>\n' +
      '      <li>\n' +
      '        <div class="button">\n' +
      '          <i class="material-icons">format_bold</i>\n' +
      '        </div>\n' +
      '      </li>\n' +
      '      <li>\n' +
      '        <div class="button">\n' +
      '          <i class="material-icons">format_italic</i>\n' +
      '        </div>\n' +
      '      </li>\n' +
      '      <li>\n' +
      '        <div class="button">\n' +
      '          <i class="material-icons">format_underline</i>\n' +
      '        </div>\n' +
      '      </li>'
    );
  }

  onClick(event) {
    console.log('Formula: onClick', event.target);
  }
}
