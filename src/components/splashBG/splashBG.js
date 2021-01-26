import React from 'react';

// Style Sheet
import './splashBG.css';

// Images
import BG from './splashBGscrollCrop.jpg';

const imageContext = require.context('./splitBG', true);

class SplashBG extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            bgPosition: 0,
        }
        this.addImg = this.addImg.bind(this);
    }
    loadImages(){
        const images = [];

        for ( let i = 1; i <= 2; i++){
            let imgSrc = imageContext(`./${i}.jpg`);
            images.push(imgSrc);
        }
        this.setState({images: images});
    }
    placeImages(){

        if (this.state.images.length > 1){
            return this.state.images.map( img =>{
                return(
                    <div className='imgWrap'>
                        <img 
                            src={ img }
                            className='imgTile'
                        />
                    </div>
                )
            })
        }
    }
    moveTrain(){
        const BGwrap = document.getElementById('movingBGwrap');
        BGwrap.classList.add('animate');
    }
    addImg(){
        const images = this.state.images;

        const lastTile  = this.state.lastTile + 1;

        if (lastTile < 11){
            let newImg = imageContext(`./${this.state.lastTile + 1}.jpg`);
            images.push(newImg);
    
            this.setState({images: images});
        }
    }
    moveBG(){
        
        let current = 0;
        const bg = document.getElementById('movingBGwrap');

        

        setInterval( function(){
            bg.style.backgroundPosition = `${current}% 0`;

            current += 0.1;
        }, 10)
        
    }
    componentDidMount(){
        //this.moveBG() ;
    }
    render(){
        return(
            <div className="splashBG" id='splashBG'>

                <div 
                    className='movingBG'
                    id='movingBGwrap'
                    onLoad={this.moveTrain }
                >
                    <img src={ BG } className='sizer'/>
                </div>

            </div>
        )
    }
}
export default SplashBG;