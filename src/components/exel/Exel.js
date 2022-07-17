import {$} from '@core/dom';

export class Exel {
  constructor(selector, options) {
    this.$el = $(selector);
    this.components = options.components || [];
  }

  getRoot() {
    const $root = $.create('main', 'exel');
    this.components = this.components.map((Component) => {
      const $el = Component.getContainer();
      const component = new Component($el);
      if (component.name) {
        window['c' + component.name] = component;
      }
      $el.html(component.toHTML());
      $root.append($el);
      return component;
    });
    return $root;
  }

  render() {
    this.$el.append(this.getRoot());

    this.components.forEach((component) => component.init());
  }
}
