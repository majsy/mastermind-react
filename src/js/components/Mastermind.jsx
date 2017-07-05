import React from 'react';
import Board from './Board.jsx';
import CodePegs from './CodePegs.jsx';

export default class Mastermind extends React.Component {
    constructor() {
        super();

        this.state = {
            pegs: ['yellow', 'orange', 'red', 'pink', 'blue', 'green'],
            row: 0,
            codedPegs:[],
            decodedPegs:[],
            hints: false
        };
    }
    componentDidMount() {
        this.setCodedPegs();
    }
    setCodedPegs = (pegs) => {
        pegs = this.state.pegs;
        let codedPegs = [];

        for (let i = 0; i < 4; i++) {
            let codedPeg = pegs[Math.floor(Math.random() * pegs.length)];
            codedPegs.push(codedPeg);
        }
        this.setState({codedPegs: codedPegs});

        console.log(codedPegs);
    }
    setSelectedPegs = (color) => {
        let decodedPegs = this.state.decodedPegs;
        decodedPegs.push(color);

        if (decodedPegs.length > 4) {
            decodedPegs.splice(0, 1);
        }

        this.setState({decodedPegs: decodedPegs});
        console.log(decodedPegs);
    }
    submitPegs = () => {
        this.updateRow();
    }
    updateRow = () => {
        this.setState({row: this.state.row + 1});
        this.compareArrays();
        this.setState({decodedPegs: []});
    }
    compareArrays = () => {
        let codedPegs = this.state.codedPegs;
        let decodedPegs = this.state.decodedPegs;

        console.log("codedPegs ", codedPegs);
        console.log("DEcodedPegs ", decodedPegs);

        if (codedPegs.length === decodedPegs.length) {

            decodedPegs.forEach((color, i) => {
                if (codedPegs.includes(decodedPegs[i])) {
                    let decodedPegIndex = decodedPegs.indexOf(decodedPegs[i]);

                    codedPegs.forEach((color, i) => {
                        let codedPegIndex = codedPegs.indexOf(codedPegs[i]);
                        if (decodedPegIndex === codedPegIndex) {
                            console.log('matched peg index:' + decodedPegIndex);
                        }
                    })
                } else {
                    console.log('no match!');
                }
            });
        }
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