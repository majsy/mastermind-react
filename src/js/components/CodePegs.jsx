import React from 'react';
import Peg from './Peg.jsx';

export default class CodePegs extends React.Component {
    selectPeg = (color) => {
        this.props.setSelectedPegs(color)
    }
    render() {
        let pegs = this.props.pegs.map((color)=> {
            return <Peg key={color} className={`peg peg-button ${color}`}
                handleClick={this.selectPeg}
                color={color}  />
        });
        return <div>{pegs}</div>
    }
}