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
            row: 0,
            codedPegs:[],
            decodedPegs:[],
            decodeHistory: []
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

        // this.state.codedPegs.map((peg) => console.log(peg.color));
        console.log(this.state.codedPegs);
    }
    setSelectedPegs = (color) => {
        let decodedPegs = this.state.decodedPegs;
        decodedPegs.push(color);

        if (decodedPegs.length > 4) {
            decodedPegs.splice(0, 1);
        }
        this.setState({decodedPegs: decodedPegs});
        console.log(this.state.decodedPegs);
    }
    submitPegs = () => {
        this.updateRow();
    }
    updateRow = () => {
        this.setState({row: this.state.row + 1});
        this.checkRow();
        // this.setState({decodedHistory: this.state.decodedPegs})
        this.setState({decodedPegs: []});
    }
    checkRow = () => {
        console.log(`check to see if: '${this.state.decodedPegs}' is correct`);
    }
    render() {
        return (
            <div className="main-container">
                <h1 className="title">Mastermind</h1>
                <div className="game-container">
                    <Board submitPegs={this.submitPegs}
                       decodedPegs={this.state.decodedPegs}
                       row={this.state.row}
                       pegs={this.state.pegs}
                    />
                    <CodePegs setSelectedPegs={this.setSelectedPegs}
                        pegs={this.state.pegs}
                    />
                </div>
            </div>
        )
    }
}