import React from 'react';

//Style Sheet
import './sessionListItem.css';
import {Button} from "../../../components/buttons/buttons";
import curriculum from "../../../data/curriculum/curriculum";

class SessionListItem extends React.Component{
    constructor(props){
        super(props);
        this.setBook = this.setBook.bind(this);
    }
    setBook(){

        this.props.changeSession(this.props.currentMaterial);

    }
    render() {

        const image = new Image();
        image.src = this.props.image;

        let wideThumb = image.naturalWidth > image.naturalHeight;

        return (
            <div id={'sessionWrap'}
                 className='sessionWrap lightText position-relative d-flex flex-column justify-content-center align-items-center'>

                <div className={'sessionGrid'}>

                    <div className={'d-flex flex-column justify-content-center align-items-center'}>

                        <h2 className='mediaTitle'>Session #{this.props.sessionId}</h2>

                        <div className={'d-flex sessionActions'}>

                            <Button
                                iconType={'rightArrow'}
                                link={`/s${ this.props.currentMaterial[0] }/p${ this.props.currentMaterial[1] }`}
                            />

                            <Button
                                iconType={'info'}
                                click={this.setBook}
                            />

                        </div>

                    </div>

                    <button
                        className={`sessionListItem ${wideThumb ? 'wideThumb' : ''}`}
                        onClick={this.setBook}

                        id={'mediaEntry'}
                    >
                        <img src={this.props.image} alt={'Session Graphic'}/>
                    </button>

                </div>

                <Button
                    click={this.props.nextSession}
                    iconType={'pointerRight'}
                    class={`changeSession forward ${
                        this.props.currentSession === curriculum.sessions.length ? 'disabled' : ''
                    }`}
                />

                <Button
                    click={this.props.backSession}
                    iconType={'pointerLeft'}
                    class={`changeSession back ${
                        this.props.currentSession === 1 ? 'disabled' : ''
                    }`}
                />

            </div>
        )
    }
}

export default SessionListItem;