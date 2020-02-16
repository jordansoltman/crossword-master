import { ActionCreator, Action } from 'redux';

export const NEW_DOCUMENT = 'NEW_DOCUMENT';

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

export interface SetCell extends Action {

}

export type DocumentAction = NewDocumentAction;