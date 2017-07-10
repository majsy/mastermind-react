import React from 'react';
import Row from './Row.jsx';
import ReloadButton from './ReloadButton.jsx';
import ResultContainer from './ResultContainer.jsx';

export default class Board extends React.Component {
    constructor() {
        super();

        this.state = {
            rows: [
                {id:0},
                {id:1},
                {id:2},
                {id:3},
                {id:4},
                {id:5},
                {id:6},
                {id:7}
            ]
        }
    }
    handleClick = () => {
        this.props.submitPegs();
    }

    reloadPage = () => {
        this.props.reloadPage();
    }
    render() {
        let rows = this.state.rows.map((row, i)=> {
            return <Row index={i} key={row.id}
                hints={this.props.hints}
                handleClick={this.handleClick}
                pegs={this.props.pegs}
                decodedPegs={this.props.decodedPegs}
                row={this.props.row} />
        })

        return (
            <div className="board-container">
                <div className="board">
                    {rows}
                </div>
                {this.props.resultIsVisible ? <ResultContainer codedPegs={this.props.codedPegs} /> : null }
                <ReloadButton reloadButtonIsVisible={this.props.reloadButtonIsVisible} reloadPage={this.reloadPage} />
            </div>
        )
    }
}