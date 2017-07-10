import React from 'react';
import Peg from './Peg.jsx';

export default class ResultContainer extends React.Component {
    render() {
        let codedPegs = this.props.codedPegs.map((color, i)=> {
            return <Peg key={i} className={`peg ${color}`} />
        });

        return (
            <div className="result-container">
                <h2 className="heading-02">Solution:</h2>
                {codedPegs}
            </div>
        )
    }
}
