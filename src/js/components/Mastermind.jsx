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
            hints: [],
            reloadButtonIsVisible: false,
            resultIsVisible: false
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
    }
    
    setSelectedPegs = (color) => {
        let decodedPegs = this.state.decodedPegs;
        decodedPegs.push(color);

        if (decodedPegs.length > 4) {
            decodedPegs.splice(0, 1);
        }

        this.setState({decodedPegs: decodedPegs});
    }
    submitPegs = () => {
        this.updateRow();
    }
    updateRow() {
        this.compareArrays();
        this.setState({row: this.state.row + 1, decodedPegs: [], hints: []});
    }

    getColorCount(pegSet) {
        return pegSet.reduce((acc, peg) => {
            if (acc[peg] === undefined) {
                acc[peg] = 0;
            }
            acc[peg]++;

            return acc;
        }, {});
    }

    compareArrays() {
        let codedPegs = this.state.codedPegs;
        let decodedPegs = this.state.decodedPegs;
        let hints = this.state.hints;

        const decodedColorCount = this.getColorCount(decodedPegs);
        const codedColorCount = this.getColorCount(codedPegs);

        if (codedPegs.length === decodedPegs.length) {
            for (let i = 0; i < decodedPegs.length; i++) {
                const decodedColor = decodedPegs[i];
                const codedColor = codedPegs[i];

                if (decodedColor === codedColor) {
                    hints.push(HINT_TYPES.RIGHT_COLOR_RIGHT_POSITION);
                    decodedColorCount[decodedColor]--;
                    codedColorCount[decodedColor]--;
                }
            }

            Object.keys(decodedColorCount).forEach(color => {
                const count = decodedColorCount[color];
                const colorMatches = Math.min(count, (codedColorCount[color] || 0));

                for (let i = 0; i < colorMatches; i++) {
                    hints.push(HINT_TYPES.RIGHT_COLOR_WRONG_POSITION);
                }
            });
            this.setState({hints: hints});
        }
        this.endGame();
    }
    endGame() {
        let hints = this.state.hints;
        let row = this.state.row;
        let decodedPegs = this.state.decodedPegs;

        if (hints.includes(HINT_TYPES.RIGHT_COLOR_RIGHT_POSITION) && hints.length === 4
            && !hints.includes(HINT_TYPES.RIGHT_COLOR_WRONG_POSITION)) {
            alert('YOU WON!');
            this.displayResult();

        } else if (row === 7 && decodedPegs.length === 4) {
            alert('GAME OVER.');
            this.displayResult();

        } else {
            return;
        }
    }

    displayResult() {
        this.setState({resultIsVisible: true});
        this.setState({reloadButtonIsVisible: true});

    }
    reloadPage() {
        window.location.reload(true);
    }
    render() {
        return (
            <div className="main-container">
                <h1 className="heading-01">Mastermind</h1>
                <div className="game-container">
                    <Board
                        submitPegs={this.submitPegs}
                        codedPegs={this.state.codedPegs}
                        decodedPegs={this.state.decodedPegs}
                        row={this.state.row}
                        pegs={this.state.pegs}
                        hints={this.state.hints}
                        reloadButtonIsVisible={this.state.reloadButtonIsVisible}
                        reloadPage={this.reloadPage}
                        resultIsVisible={this.state.resultIsVisible}
                    />
                    <CodePegs setSelectedPegs={this.setSelectedPegs}
                        pegs={this.state.pegs}
                    />
                </div>
            </div>
        )
    }
}