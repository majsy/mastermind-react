import React from 'react';
import DecodeRow from './DecodeRow.jsx';
import SubmitButton from './SubmitButton.jsx';
import HintsRow from './HintsRow.jsx';

export default class Row extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            savedPegs: [],
            isSaved: false
        };
    }
    handleClick = () => {
        this.props.handleClick();
    }
    componentWillUpdate(nextProps) {
        if (this.props.row === this.props.index && nextProps.row !== this.props.index && !this.state.isSaved) {
            this.setState({isSaved: true, savedPegs: this.props.decodedPegs.slice(0)});
        }
    }
    render() {
        const pegs = this.state.isSaved ? this.state.savedPegs : this.props.decodedPegs;
        return (
            <div className="row">
                <DecodeRow decodedPegs={pegs}
                    isSaved={this.state.isSaved}
                    row={this.props.row}
                    index={this.props.index}
                />
                <SubmitButton index={this.props.index}
                    handleClick={this.handleClick}
                    decodedPegs={this.props.decodedPegs}
                    row={this.props.row} />
                <HintsRow />
            </div>
        )
    }
}