import React from 'react';


export default class Hint extends React.Component {
    render() {
        return (
            <div>
                <h2>{this.props.hint}</h2>
            </div>
        )
    }
}