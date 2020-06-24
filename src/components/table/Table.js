import ExcelComponent from "../../core/ExcelComponent";
import createTable from './table.template';
import resizeHandler from './table.resize';
import shouldResize from './table.functions';
export default class Table extends ExcelComponent {
  constructor($root) {
    super($root, {
      listeners: ['mousedown']
    })
  }
  static className = 'excel__table';

  onMousedown = (evt) => {
    if (shouldResize(evt)) {
      resizeHandler(evt, this.$root);
    }
  }

  toHTML() {
    return createTable(100)
  }
}