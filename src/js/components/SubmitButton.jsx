import React from 'react';

export default class SubmitButton extends React.Component {
    handleClick = () => {
        this.props.handleClick();
    }
    render() {
        let length =  this.props.decodedPegs.length;

        let enabled = false;

        if (length === 4 && this.props.index === this.props.row) {
            enabled = true;
        }

        return <button className="submit-button" type="button" onClick={this.handleClick}
            disabled={!enabled}><p>check</p></button>
    }
}