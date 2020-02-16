import { Reducer } from 'redux';
import { DocumentAction, NEW_DOCUMENT } from '../actions/documentActions';
import { Screen, UserInterfaceAction, SET_SCREEN } from '../actions/userInterfaceActions';

export interface UserInterfaceState {
    screen: Screen
}

const userInterfaceDefaultState: UserInterfaceState = {
    screen: Screen.WELCOME
}

export const userInterfaceReducer: Reducer<UserInterfaceState, UserInterfaceAction> = (
    state = userInterfaceDefaultState,
    action: UserInterfaceAction
) => {
    switch (action.type) {
        case SET_SCREEN:
            return {
                ...state,
                screen: action.screen
            }
        default:
            return state;
    }
}
