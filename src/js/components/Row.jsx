import React from 'react';
import DecodeRow from './DecodeRow.jsx';
import SubmitButton from './SubmitButton.jsx';
import HintsRow from './HintsRow.jsx';

export default class Row extends React.Component {
    handleClick = () => {
        this.props.handleClick();
    }
    render() {
        return (
            <div className="row">
                <DecodeRow />
                <SubmitButton index={this.props.index} handleClick={this.handleClick}
                      decodedPegs={this.props.decodedPegs} />
                <HintsRow />
            </div>
        )
    }
}