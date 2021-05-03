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
            <div className='splashTrain' id={'splashTrain'}>

                <img src={Train} className='trainBody' alt={''}/>
                <img src={wheel} className='trainWheel one' alt={''}/>
                <img src={wheel} className='trainWheel two' alt={''}/>
                <img src={wheel} className='trainWheel three' alt={''}/>
                <img src={wheel} className='trainWheel four' alt={''}/>
                <img src={wheel} className='trainWheel five' alt={''}/>
                <img src={wheel} className='trainWheel six' alt={''}/>
                <SplashBubbles/>
                
            </div>
        )
    }
}
export default SplashTrain;