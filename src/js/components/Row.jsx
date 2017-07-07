import React from 'react';
import DecodeRow from './DecodeRow.jsx';
import SubmitButton from './SubmitButton.jsx';
import HintsRow from './HintsRow.jsx';

export default class Row extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            savedPegs: [],
            pegIsSaved: false,
            savedHints: [],
            hintIsSaved: false,
        };
    }
    handleClick = () => {
        this.props.handleClick();
    }
    componentWillUpdate(nextProps) {
        if (this.props.row === this.props.index && nextProps.row !== this.props.index && !this.state.pegIsSaved) {
            this.setState({pegIsSaved: true, savedPegs: this.props.decodedPegs.slice(0)});

            if (!this.state.hintIsSaved) {
                this.setState({hintIsSaved: true, savedHints: this.props.hints.slice(0)});
            }
        }
    }
    render() {
        const pegs = this.state.pegIsSaved ? this.state.savedPegs : this.props.decodedPegs;
        const hints = this.state.hintIsSaved ? this.state.savedHints : this.props.hints;

        return (
            <div className="row">
                <DecodeRow decodedPegs={pegs}
                    pegIsSaved={this.state.pegIsSaved}
                    row={this.props.row}
                    index={this.props.index}
                />
                <SubmitButton index={this.props.index}
                    handleClick={this.handleClick}
                    decodedPegs={this.props.decodedPegs}
                    row={this.props.row} />
                <HintsRow hints={hints}
                    hintIsSaved={this.state.hintIsSaved}
                    index={this.props.index}
                    row={this.props.row}
                />
            </div>
        )
    }
}