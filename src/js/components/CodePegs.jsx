import React from 'react';
import Peg from './Peg.jsx';

export default class CodePegs extends React.Component {
    selectPeg() {
        console.log('hej');
    }
    render() {
        let pegs = this.props.pegs.map((peg, color)=> {
            return <Peg key={color} className={`peg ${peg.color}`} />
        });
        return (
            <div>
                <ul>{pegs}</ul>
            </div>
        )
    }
}