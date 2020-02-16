import { combineReducers } from 'redux';

import { CounterState, counterReducer } from './counterReducer';
import { DocumentStateWithHistory, undoableDocumentReducer } from './documentReducer';
import { userInterfaceReducer, UserInterfaceState } from './userInterfaceReducer';

export interface RootState {
    document:  DocumentStateWithHistory;
    counter: CounterState;
    userInterface: UserInterfaceState;
}

export const rootReducer = combineReducers<RootState | undefined>({
    counter: counterReducer,
    document: undoableDocumentReducer,
    userInterface: userInterfaceReducer
});
