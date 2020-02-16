import * as React from 'react';
import './NewCrossword.scss'
import { useDispatch } from 'react-redux';
import { newDocument } from '../actions/documentActions';

export default function NewCrossword(props: {
    createCrossword: (width: number, height: number) => void;
}) {

    const [width, setWidth] = React.useState(10);
    const [height, setHeight] = React.useState(10);

    const dispatch = useDispatch();

    function createCrossword() {
        props.createCrossword(width, height);
    }

    return (
        <div className="NewCrossword">
            <div className="NewCrossword-box">
                <div>Width: <input type="number" value={width} onChange={(ev) => setWidth(ev.target.valueAsNumber)} /></div>
                <div>Height: <input type="number" value={height} onChange={(ev) => setHeight(ev.target.valueAsNumber)} /></div>
                <div><button onClick={createCrossword}>Create</button></div>
            </div>
        </div>
    )
}