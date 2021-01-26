import React from 'react';

import './closeButton.css';

class CloseButton extends React.Component{
    constructor(props){
        super(props);
        this.clickHandler = this.clickHandler.bind(this);
    }
    clickHandler(){
        if (this.props.type === 'summary'){
            this.props.closeCurrent();

        } else if (this.props.click){
            this.props.click();
        }
    }
    render(){
        return(
            <button className="closeButton" onClick={this.clickHandler} id={this.props.buttonId}>
                <p>x</p>
            </button>
        )
    }
}
export default CloseButton;