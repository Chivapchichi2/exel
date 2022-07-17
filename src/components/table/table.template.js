const CODES = {
  A: 65,
  Z: 90,
};

function toCell(content = '') {
  return `<div class="cell" ${
    content ? '' : 'contenteditable="true"'
  }>${content}</div>`;
}

function toColumn(content) {
  return `<div class="column">${content}</div>`;
}

function toChar(_, index) {
  return String.fromCharCode(CODES.A + index);
}

function createRow(content, info = '') {
  return `
    <div class="row">
        <div class="row-info">${info}</div>
        <div class="row-data">${content}</div>
    </div>
  `;
}

export function createTable(rowsCount = 15) {
  const colsCount = CODES.Z - CODES.A + 1;
  const rows = [];

  const mainColumn = new Array(colsCount)
    .fill('')
    .map(toChar)
    .map(toColumn)
    .join('');

  const column = new Array(colsCount).fill('').map(toCell).join('');

  rows.push(createRow(mainColumn));

  for (let i = 0; i < rowsCount; i++) {
    rows.push(createRow(column, `${i + 1}`));
  }
  return rows.join('');
}
