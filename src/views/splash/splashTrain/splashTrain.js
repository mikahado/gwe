import React from 'react';

//Images
import Train from './newTrain.png';
import wheel from './wheel.png';
import SplashBubbles from './splashBubbles/splashBubbles';

// Style Sheet
import './splashTrain.css';

class SplashTrain extends React.Component{
    render(){
        return (
            <div className='splashTrain'>

                <img src={Train} className='trainBody'/>
                <img src={wheel} className='trainWheel one'/>
                <img src={wheel} className='trainWheel two'/>
                <img src={wheel} className='trainWheel three'/>
                <img src={wheel} className='trainWheel four'/>
                <img src={wheel} className='trainWheel five'/>
                <img src={wheel} className='trainWheel six'/>
                <SplashBubbles/>
                
            </div>
        )
    }
}
export default SplashTrain;