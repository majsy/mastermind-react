import React from 'react';
import Hint from './Hint.jsx';

export default class HintsRow extends React.Component {
    render() {
        let hints = this.props.hints.map((hint, index) => {
            return <Hint key={index}
                 className={`hint ${hint}`}
            />
        });

        return (
            <div className="hints-row">{hints}</div>
        )
    }
}