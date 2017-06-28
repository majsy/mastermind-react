import React from 'react';
import Row from './Row.jsx';

export default class Board extends React.Component {
    constructor() {
        super();

        this.state = {
            rows: [
                {id:1},
                {id:2},
                {id:3},
                {id:4},
                {id:5},
                {id:6},
                {id:7},
                {id:8},
            ]
        }
    }
    render() {
        let rows = this.state.rows.map((data)=> {
            return <Row key={data.id} />
        })
        return (
            <div className="board">
                {rows}
            </div>
        )
    }
}