import { hot } from 'react-hot-loader/root';
import * as React from 'react';

import './Application.scss';

import NewCrossword from './NewCrossword';

const Application = () => (
    <NewCrossword />
);

export default hot(Application);
