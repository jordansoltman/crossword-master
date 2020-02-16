import * as React from 'react';
import { Document } from '../../types';
import './Crossword.scss';
import CrosswordCell from './CrosswordCell';

export default function Crossword(props: {
    document: Document
}) {
    const { width, height } = props.document;
    const rows = [];

    for (let i = 0; i < height; i += 1) {
        const row = [];
        for (let j = 0; j < width; j += 1) {
            row.push(<CrosswordCell key={`${i}-${j}`} />);
        }
        rows.push(row);
    }

    return (
        <div className="Crossword">
            {rows.map((row, idx) => {
                return (
                    // eslint-disable-next-line react/no-array-index-key
                    <div key={idx} className="Crossword-row">
                        {row}
                    </div>
                )
            })}
        </div>
    );
}