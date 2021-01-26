import React from 'react';

// Style Sheet
import './loading.css'

// Icon
import loadIcon from './loadIcon.png';

class Loading extends React.Component{
    render(){
        return(
            <div id='loading'
                 className={
                     `loadingWrap ${
                         this.props.loading === 0 ? "loaded": "loading" 
                     } ${this.props.class}`}
            >
                <div className={`loadCircle ${this.props.circleClass}`}>
                    <img
                        src={loadIcon}
                        alt="loading"
                    />
                </div>
            </div>
        )
    }
}

export default Loading;