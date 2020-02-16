import { Action, ActionCreator } from 'redux';

export const SET_SCREEN = 'SET_SCREEN';

export enum Screen {
    WELCOME = 'WELCOME',
    MAIN = 'MAIN'
}

export interface SetScreenAction extends Action {
    type: typeof SET_SCREEN,
    screen: Screen
}

export const setScreen: ActionCreator<SetScreenAction> = (screen: Screen) => ({
    type: SET_SCREEN,
    screen
});


export type UserInterfaceAction = SetScreenAction;