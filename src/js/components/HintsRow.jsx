import React from 'react';
import Hint from './Hint.jsx';

export default class HintsRow extends React.Component {
    render() {
        return (
            <div className="hints-row">
                {this.props.hints.map(hint => <Hint hint={hint} />)}
            </div>
        )
    }
}