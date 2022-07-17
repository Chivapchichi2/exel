import {ExelComponent} from '@core/ExelComponent';
import {$} from '@core/dom';

export class Header extends ExelComponent {
  static className = 'exel__header';
  static element = 'header';
  static getContainer() {
    return $.create(this.element, this.className);
  }

  toHTML() {
    return (
      '   <input type="text" class="input" value="New Table">\n' +
      '      <ul>\n' +
      '        <li>\n' +
      '          <div class="button">\n' +
      '            <i class="material-icons">delete</i>\n' +
      '          </div>\n' +
      '        </li>\n' +
      '        <li>\n' +
      '          <div class="button">\n' +
      '            <i class="material-icons">exit_to_app</i>\n' +
      '          </div>\n' +
      '        </li>\n' +
      '      </ul>'
    );
  }
}
