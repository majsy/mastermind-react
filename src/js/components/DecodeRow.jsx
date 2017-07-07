import React from 'react';
import Peg from './Peg.jsx';

export default class DecodeRow extends React.Component {
    render() {
        let decodedPegs = this.props.decodedPegs.map((color, index) => {
            if (this.props.index === this.props.row || this.props.pegIsSaved) {
                return (
                    <Peg key={index}
                         className={`peg ${color}`}
                         color={color}  />
                )
            }
        })
        return (
            <div className="decode-row">
                <div>{decodedPegs}</div>
            </div>
        )
    }
}