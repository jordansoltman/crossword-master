import { hot } from 'react-hot-loader/root';
import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import NewCrossword from '../components/NewCrossword';
import Main from '../components/Main';
import { RootState } from '../reducers';

import './Application.scss';
import { UserInterfaceState } from '../reducers/userInterfaceReducer';
import { Screen, setScreen } from '../actions/userInterfaceActions';
import { newDocument } from '../actions/documentActions';



const Application = () => {

    const ui = useSelector<RootState, UserInterfaceState>((state) => state.userInterface);
    const dispatch = useDispatch();

    switch (ui.screen) {
        case Screen.MAIN:
            return <Main />;
        case Screen.WELCOME:
            return (
                <NewCrossword 
                    createCrossword={(width, height) => { 
                        dispatch(newDocument(width, height))
                        dispatch(setScreen(Screen.MAIN))
                    }} 
                />
            );
        default:
            return <div>ERROR</div>
    }
    return <Main />;
}
    

export default hot(Application);
