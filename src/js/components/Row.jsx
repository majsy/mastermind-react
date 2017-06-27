import React from 'react';
import DecodeRow from './DecodeRow.jsx';
import SubmitButton from './SubmitButton.jsx';
import HintsRow from './HintsRow.jsx';

export default class Row extends React.Component {
    render() {
        return (
            <div>
                <h1>row</h1>
                <DecodeRow />
                <SubmitButton />
                <HintsRow />
            </div>
        )
    }
}