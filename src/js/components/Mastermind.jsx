import React from 'react';
import Board from './Board.jsx';
import CodePegs from './CodePegs.jsx';

export default class Mastermind extends React.Component {
    constructor() {
        super();

        this.state = {
            pegs: [
                {color: 'pink', id:0}, {color: 'blue', id:1}, {color: 'yellow', id:2},
                {color: 'red', id:3}, {color: 'orange', id:4}, {color: 'purple', id:5}
            ],
            codedPegs: []
        }
    }
    render() {
        let codedPegs = this.state.pegs.map((pegs)=> {
           return codedPegs.get()
        });
        return (
            <div>
                <h1 className="title">Mastermind</h1>
                <Board />
                <CodePegs />
            </div>
        )
    }
}