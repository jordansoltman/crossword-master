export enum CellType {
    LETTER = 'LETTER',
    BLANK = 'BLANK',
    BLOCK = 'BLOCK'
}

export interface LetterCell {
    type: CellType.LETTER,
    letter: string
}

export interface OtherCell {
    type: CellType.BLANK | CellType.BLOCK,
    notes?: string
}

export type Cell = LetterCell | OtherCell;

export type Document = {
    cells: Cell[],
    width: number,
    height: number
}