import React from 'react';
import Peg from './Peg.jsx';

export default class DecodeRow extends React.Component {
    render() {
        return (
            <div className="decode-row">
                <h2>decode row</h2>
                <Peg />
            </div>
        )
    }
}