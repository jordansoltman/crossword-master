import { Reducer } from 'redux';
import undoable, { StateWithHistory } from 'redux-undo';
import { Document, Cell, CellType } from '../../types';
import { DocumentAction, NEW_DOCUMENT } from '../actions/documentActions';



const documentReducer: Reducer<DocumentState, DocumentAction> = (
    state = null,
    action: DocumentAction
) => {
    switch (action.type) {
        case NEW_DOCUMENT:
            return {
                width: action.width,
                height: action.height,
                cells: (new Array<Cell>(action.width * action.height)).fill({type: CellType.BLANK })
            };
            break;
        default:
            return state;
            break;
    }
}

export const undoableDocumentReducer = undoable(documentReducer);

export type DocumentState = Document | null;

export type DocumentStateWithHistory = StateWithHistory<DocumentState>;