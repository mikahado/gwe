import React from 'react';

// Sub-Components
import SplashBubbles from '../splashBubbles/splashBubbles';

// Style Sheet
import './splashGraphics.css';

// Image
import BG from './splashBGscroll.png';
import Train from './newTrain.png';
import Wheel from './wheel.png';

class SplashGraphics extends React.Component{
    render(){
        return(
            <div className="splashGraphics">

                <div className="splashBG">
                    <img src={ BG } id='splashImg1'/>
                </div>

                <div className='splashTrain'>
                    <img src={Train} className='trainBody'/>
                    <img src={Wheel} className='trainWheel one'/>
                    <img src={Wheel} className='trainWheel two'/>
                    <img src={Wheel} className='trainWheel three'/>
                    <img src={Wheel} className='trainWheel four'/>
                    <img src={Wheel} className='trainWheel five'/>
                    <img src={Wheel} className='trainWheel six'/>
                    <SplashBubbles/>
                </div>

                

            </div>

        )
    }
}
export default SplashGraphics;