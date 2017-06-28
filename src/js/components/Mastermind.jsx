import React from 'react';
import Board from './Board.jsx';
import CodePegs from './CodePegs.jsx';

export default class Mastermind extends React.Component {
    constructor() {
        super();

        this.state = {
            pegs: [
                {color: 'yellow'},
                {color: 'orange'},
                {color: 'red'},
                {color: 'pink'},
                {color: 'blue'},
                {color: 'green'}
            ],
            codedPegs:[],
            decodedPegs:[]
        };
    }
    componentDidMount() {
        this.setCodedPegs();
    }
    setCodedPegs = (pegs) => {
        pegs = this.state.pegs;
        let codedPegs;

        for (let i = 0; i < 4; i++) {
            let codedPeg = pegs[Math.floor(Math.random() * pegs.length)];
            codedPegs = this.state.codedPegs.push(codedPeg);
        }

        this.setState({codedPegs: codedPegs});

        console.log(this.state.codedPegs);
    }
    render() {
        return (
            <div className="main-container">
                <h1 className="title">Mastermind</h1>
                <div className="game-container">
                    <Board codedPegs={this.state.codedPegs} />
                    <CodePegs pegs={this.state.pegs} decodedPegs={this.state.decodedPegs} />
                </div>
            </div>
        )
    }
}