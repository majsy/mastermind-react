import React from 'react';
import Peg from './Peg.jsx';

export default class CodePegs extends React.Component {
    selectPeg = (color) => {
        this.props.setSelectedPegs(color)
    }
    render() {
        let pegs = this.props.pegs.map((peg)=> {
            return <Peg key={peg.color} className={`peg peg-button ${peg.color}`}
                handleClick={this.selectPeg}
                color={peg.color}  />
        });
        return <div>{pegs}</div>
    }
}