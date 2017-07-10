import React from 'react';

export default class ReloadButton extends React.Component {
    handleClick = () => {
        this.props.reloadPage();
    }
 render() {
     let visible = this.props.reloadButtonIsVisible;

     return (
         <button className="reload-button" type="button" hidden={!visible} onClick={this.handleClick}>new game</button>
    )}
}