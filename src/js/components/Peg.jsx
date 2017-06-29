import React from 'react';


export default class Peg extends React.Component {
    handleClick = () => {
        this.props.handleClick(this.props.color);
    }
    render() {
        return <button className={this.props.className} onClick={this.handleClick}> </button>
    }
}