import React from 'react';

// Sub-Components
import SplashTrain from '../splashTrain/splashTrain';
import SplashBG from '../splashBG/splashBG';

// Style Sheet
import './splashGraphics.css';
import SplashLogo from "../splashLogo/splashLogo";


class SplashGraphics extends React.Component{
    constructor(props){
        super(props);
        this.state = {
        }
        this.newLoad=this.newLoad.bind(this);
        this.moveTrain = this.moveTrain.bind(this);
    }
    moveTrain(){
        const bg = document.getElementById('movingBGwrap');
    }
    newLoad(){
        this.setState({ loaded: this.state.loaded + 1 });
    }
    getPanes(){
        const panes = [];
        for ( let i = 1; i <= 11; i++){
            const img = new Image();
            img.src = `/.splitBG/${i}`;
            panes.push( img );
        }
        return panes.map( img => img);
    }
    componentDidMount(){
        this.getPanes();
    }
    render(){
        return(
            <div className="splashGraphics">

                <SplashBG/>
                <SplashTrain/>

                <SplashLogo/>

            </div>
        )
    }
}
export default SplashGraphics;