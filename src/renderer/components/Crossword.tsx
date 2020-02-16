import * as React from 'react';
import { useDispatch } from 'react-redux';
import CrosswordCell from './CrosswordCell';
import { setCell } from '../actions/documentActions';
import { Document, CellType, Cell } from '../../types';

import './Crossword.scss';

interface CellDetail {
    cell: Cell,
    number: false | number,
    minimumSpaceWarning: boolean
}

export default function Crossword(props: {
    document: Document,
    minimumSpaceWarning: number | null
}) {
    const { width, height } = props.document;
    const rows = [];

    let number = 0;

    const cells = props.document.cells.map<CellDetail>((cell, index) => {
        return {
            cell,
            number: false,
            minimumSpaceWarning: false
        }
    })
    
    // Check the minimum space warning
    if (props.minimumSpaceWarning !== null) {
        cells.forEach((cell, index) => {

            const x = index % width;
            const y = Math.floor(index / width);

            /** 
             * First determine if this is an edge cell that should have a number by looking and seeing if it's
             * along an edge, or along a block cell
             */
            let topBlocked = false;
            let leftBlocked = false;
            let isNumberCell = false;

            if (cell.cell.type !== CellType.BLOCK) {

                // It's along a top edge, or a left edge
                if (index < width) { topBlocked = true; }
                if (index % width === 0) { leftBlocked = true; }

                // Or if it's blocked on top or to the left by a BLOCK
                if (!topBlocked && props.document.cells[index - width].type === CellType.BLOCK) { topBlocked = true; }
                if (!leftBlocked && props.document.cells[index - 1].type === CellType.BLOCK) { leftBlocked = true; }

                if (topBlocked || leftBlocked) { isNumberCell = true; }

            }

            /* eslint-disable no-param-reassign */
            if (isNumberCell) {

                number += 1;
                cell.number = number;

                let acrossWarning = false;
                let downWarning = false;

                if (x + props.minimumSpaceWarning! > width && leftBlocked) {
                    acrossWarning = true;
                }

                if (y + props.minimumSpaceWarning! > height && topBlocked) {
                    downWarning = true;
                }

                for (let i = 0; i < props.minimumSpaceWarning!; i += 1) {
                    const downCell = cells[index + (width * i)];
                    const rightCell = cells[index + i];
                    if (topBlocked && (!downCell || (downCell && downCell.cell.type === CellType.BLOCK))) {
                        downWarning = true;
                    }
                    if (leftBlocked && (!rightCell || (rightCell && rightCell.cell.type === CellType.BLOCK))) {
                        acrossWarning = true;
                    }
                }

                if (acrossWarning) {
                    for (let i = 0; i < props.minimumSpaceWarning!; i += 1) {
                        const adjacentCell = cells[index + i];
                        if (!adjacentCell || adjacentCell.cell.type === CellType.BLOCK) break;
                        adjacentCell.minimumSpaceWarning = true;
                    }
                }

                if (downWarning) {
                    for (let i = 0; i < props.minimumSpaceWarning!; i += 1) {
                        const adjacentCell = cells[index + (width * i)];
                        if (!adjacentCell || adjacentCell.cell.type === CellType.BLOCK) break;
                        adjacentCell.minimumSpaceWarning = true;
                    }
                }


            }
            /* eslint-enable no-param-reassign */

        })
    }
    

    // FIXME: remove
    const dispatch = useDispatch();

    for (let i = 0; i < height; i += 1) {
        const row = [];
        for (let j = 0; j < width; j += 1) {
            const cellIndex = i * width + j;
            const cell = cells[cellIndex];
            row.push(
                <CrosswordCell
                    warning={cell.minimumSpaceWarning}
                    number={cell.number !== false ? cell.number : undefined}
                    cell={cell.cell}
                    key={`${i}-${j}`} 
                    onClick={() => {
                        dispatch(setCell(cellIndex, { type: CellType.BLOCK }));
                        dispatch(setCell(width * height - cellIndex - 1, { type: CellType.BLOCK }))
                    }}
                />
            );
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