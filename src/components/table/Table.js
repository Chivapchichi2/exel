import {ExelComponent} from '@core/ExelComponent';
import {$} from '@core/dom';
import {createTable} from '@/components/table/table.template';

export class Table extends ExelComponent {
  static className = 'exel__table';
  static element = 'div';
  static getContainer() {
    return $.create(this.element, this.className);
  }

  toHTML() {
    return createTable(20);
  }
}
