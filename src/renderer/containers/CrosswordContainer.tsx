import * as React from 'react';
import { useSelector } from 'react-redux';
import Crossword from '../components/Crossword';
import { RootState } from '../reducers';
import { DocumentState } from '../reducers/documentReducer';

export default function CrosswordContainer() {

    const document = useSelector<RootState, DocumentState>((state) => state.document.present);

    return <Crossword document={document!} />
}