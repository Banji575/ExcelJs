const CODES = {
    A: 65,
    Z: 90
}

function createRow(i, col) {
    return `
             <div class="row">
                    <div class="row-info">${i ? i :''}</div>
                    <div class="row-data">${col}</div>
                </div>
             `
}

function createCell() {
    return `
        <div class="cell" contenteditable></div>
    `
}

function createColumn(col) {
    return `
    <div class="column">${col}</div>
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
            .map(() => createCell())
            .join('')
        rows.push(createRow(i + 1, cell))
    }

    return rows.join('')
}

export default createTable;