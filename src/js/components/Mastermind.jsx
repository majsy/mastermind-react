import React from 'react';
import Board from './Board.jsx';
import CodePegs from './CodePegs.jsx';
import {PEG_COLORS} from "../common/peg-colors";
import {HINT_TYPES} from "../common/hint-types";

export default class Mastermind extends React.Component {
    constructor() {
        super();

        this.state = {
            pegs: PEG_COLORS,
            row: 0,
            codedPegs:[],
            decodedPegs:[],
            hints: []
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
        this.compareArrays();
        this.setState({row: this.state.row + 1, decodedPegs: [], hints: []});
    }
    compareArrays = () => {
        let codedPegs = this.state.codedPegs;
        let decodedPegs = this.state.decodedPegs;

        console.log("codedPegs ", codedPegs);
        console.log("DEcodedPegs ", decodedPegs);


        if (codedPegs.length === decodedPegs.length) {
            let hints = this.state.hints;

            const pegsInCorrectPosition = decodedPegs.filter((color, idx) => codedPegs[idx] === color);

            const pegsInWrongPosition = decodedPegs
                .filter(color => codedPegs.includes(color) && pegsInCorrectPosition.includes(color) === false);

            pegsInCorrectPosition
                .forEach(color => hints.push(HINT_TYPES.RIGHT_COLOR_RIGHT_POSITION));
            pegsInWrongPosition
                .forEach(color => hints.push(HINT_TYPES.RIGHT_COLOR_WRONG_POSITION));

            this.setState({hints: hints});
        }
    }
    render() {
        return (
            <div className="main-container">
                <h1 className="title">Mastermind</h1>
                <div className="game-container">
                    <Board
                        submitPegs={this.submitPegs}
                        decodedPegs={this.state.decodedPegs}
                        row={this.state.row}
                        pegs={this.state.pegs}
                        hints={this.state.hints}
                    />
                    <CodePegs setSelectedPegs={this.setSelectedPegs}
                        pegs={this.state.pegs}
                    />
                </div>
            </div>
        )
    }
}