import { ActionCreator, Action } from 'redux';
import { Cell } from '../../types';

export const NEW_DOCUMENT = 'NEW_DOCUMENT';
export const SET_CELL = 'SET_CELL';

export interface NewDocumentAction extends Action {
    type: typeof NEW_DOCUMENT,
    width: number,
    height: number
}

export const newDocument: ActionCreator<NewDocumentAction> = (width: number, height: number) => ({
    type: NEW_DOCUMENT,
    width,
    height
});

export interface SetCellAction extends Action {
    type: typeof SET_CELL,
    index: number,
    cell: Cell
}

export const setCell: ActionCreator<SetCellAction> = (index: number, cell: Cell) => ({
    type: SET_CELL,
    index,
    cell
})

export type DocumentAction = NewDocumentAction | SetCellAction;