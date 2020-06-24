const CODES = {
    A: 65,
    Z: 90
}

function createRow(i, col) {
    const resizer = `<div class="row-resizer" data-resize="row" ></div>`
    return `
             <div class="row" >
                    <div class="row-info" data-type = 'resizeble'>
                    ${i ? i :''}
                    ${resizer}
                    </div>
                    <div class="row-data">${col}</div>
                </div>
             `
}

function createCell(i) {
    return `
        <div class="cell" data-cell = '${i}' contenteditable></div>
    `
}

function createColumn(col,i) {
    return `
    <div class="column" data-cell = '${i}' data-type = 'resizeble'>
    ${col}
    <div class = "col-resizer" data-resize="col"></div>
    </div>
    `
}

const createTable = (countRows = 15) => {
    const colLength = CODES.Z - CODES.A + 1
    const rows = []

    const cols = new Array(colLength)
        .fill('')
        .map((el, i) => {
            return String.fromCharCode(CODES.A + i)
        }).map(createColumn)
        .join('')
    rows.push(createRow(null, cols))

    for (let i = 0; i < countRows; i++) {
        const cell = new Array(colLength)
            .fill('')
            .map((_,index) => createCell(index))
            .join('')
        rows.push(createRow(i + 1, cell))
    }

    return rows.join('')
}

export default createTable;