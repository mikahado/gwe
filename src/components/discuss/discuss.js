//React
import React, {useState} from 'react';

//Style Sheet
import './discuss.css';

// Data
import pageText from '../../data/pageText';
import discussions from '../../data/discussions';
import characters from "../../data/characters";
import {PageImage} from "../../views/read/read";

class Discuss extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            loading: true
        }
        this.imagesLoaded=this.imagesLoaded.bind(this);
        this.imgLoaded=this.imgLoaded.bind(this);
        this.getImages=this.getImages.bind(this);
        this.characterGrid=this.characterGrid.bind(this);
    }

    imagesLoaded(parent){

        const images = [...parent.querySelectorAll('img')];

        for (let i=0; i<images.length; i++){

            const img = images[i];

            if(!img.complete){
                return false;
            }
        }
        console.log('loaded');
        this.props.loaded();
    }

    getText(discussion,page){

        const convertedText = [];

        // Cycle Through Each Line of Text
        this.props.text.forEach( line =>{

            const newLine = [];

            //Assemble Each Line of Text
            for ( let i=0; i<line.length; i++ ){

                //Create Speech Bubbles
                if ( line[i].speech ){
                    newLine.push(
                        <span className='discussSpeechBubble'>{ line[i].text }</span>
                    )
                    // Return Plain Text
                } else {
                    newLine.push( line[i] )
                }
            }
            if(newLine.length){
                convertedText.push( <p>{ newLine }</p> );
            }
        })
        //Return Assembled Page Text
        if(convertedText.length) {
            return <div className={'discText'}>{convertedText}</div>;
        }
    }

    imgLoaded(){
        this.setState({loading: !this.imagesLoaded(this.grid)});
    }

    buildGrid( characterArr ){

        return characterArr.map( character =>{

            const characterData = character;
            console.log( characterData );

            return (
                <div className={`discGridCharacter of${characterArr.length}`} >
                    <img
                        src={ characterData.img }
                        onLoad={ this.imgLoaded }
                        id={'discGridImg'}
                    />
                    <p>{ characterData.label }</p>
                </div>
            )
        })
    }

    characterGrid( characterArr ){

        return (
            <div className='discGrid' ref={element =>{this.grid = element}}>
                { this.buildGrid( characterArr ) }
            </div>
        )
    }

    getImages(discussion,page){

        const images = this.props.images;

        if(Array.isArray(images)){

            if(typeof images[0] !== 'string'){
                return this.characterGrid( images);
            }
            else{
                return (
                    <div className={'discFullImgFrame'}>
                        <img src={images[0]} className={'discFullImg'} onLoad={this.props.loaded}/>
                    </div>
                );
            }
        }
    }
    render(){
        return(
            <div className={`discWrap ${typeof this.props.images[0] === 'string' ? 'fullImg' : ''}`}>

                { this.getImages() }
                {this.getText()}

            </div>

        )
    }
}
export default Discuss;