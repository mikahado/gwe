import React, {useState} from 'react';

// Data
import pageText from '../../data/pageText';

// Sub-Components
import {Button} from "../../components/buttons/buttons";
import Loading from "../../components/loading/loading";
import Translate from "../../components/translate/translate";
import {Audio} from './audio/audio';
import {ReaderStart} from "./readerStart/readerStart";
import {Book} from './book/book';
import {Preloader} from "./preloader/preloader";
import Congrats from "../../components/congrats/congrats";

// Style Sheets
import './read.css';
import './readerControls.css';
import './discuss.css';
import './readMediaQueries.css';
import {InfoBubble} from "../../components/infoBubble/infoBubble";
import {PageArrow} from "./pageArrow/pageArrow";
import {ReadClose} from "./readClose/readClose";

// SUB-COMPONENTS
class Discuss extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            loading: true
        }
        this.loadsComplete=this.loadsComplete.bind(this);
        this.imagesLoaded=this.imagesLoaded.bind(this);
        this.imgLoaded=this.imgLoaded.bind(this);
        this.getImages=this.getImages.bind(this);
        this.characterGrid=this.characterGrid.bind(this);
    }
    loadsComplete(){

        if(this.state.loading){this.setState({loading: 0})}

        let loadedImgObjs = document.getElementById('discWrap').querySelectorAll('img');
        let loadedSrcArray = [];

        loadedImgObjs.forEach( obj =>{
            loadedSrcArray.push( obj.src);
        });

        this.props.loaded('img', loadedSrcArray);
    }

    imagesLoaded(parent){

        const images = [...parent.querySelectorAll('img')];

        for (let i=0; i<images.length; i++){

            const img = images[i];

            if(!img.complete){
                return false;
            }
        }
        this.loadsComplete();

    }
    imgLoaded(){
        this.setState({loading: !this.imagesLoaded(this.grid)});
    }

    getText(discussion,page){

        if(this.props.text){

            let nativeText = this.props.text.get(this.props.language, false);

            if(nativeText){

                const convertedText = [];

                let line = 0;

                // Cycle Through Each Line of Text
                this.props.text.get(this.props.language).forEach( lineData =>{

                    const newLine = [];

                    //Assemble Each Line of Text
                    for ( let i=0; i<lineData.length; i++ ){

                        //Create Speech Bubbles
                        if ( lineData[i].speech ){
                            newLine.push(
                                <span
                                    key={i}
                                    className='discussSpeechBubble'>
                                    { lineData[i].text }
                                </span>
                            )
                            // Return Plain Text
                        } else {
                            newLine.push( lineData[i] )
                        }
                    }
                    if(newLine.length){
                        convertedText.push( <p key={line}>{ newLine }</p> );
                    }
                    line++;
                })
                //Return Assembled Page Text
                if(convertedText.length) {
                    return <div className={'discText col-md'}>{convertedText}</div>;
                }
            }
        }
    }

    buildGrid( characterArr ){

        return characterArr.map( character =>{

            const characterData = character;

            return (
                <div className={`discGridCharacter of${characterArr.length}`} >
                    <img
                        src={ characterData.img }
                        onLoad={ this.imgLoaded }
                        id={'discGridImg'}
                        alt={`characterData.label`}
                    />
                    <p>{ characterData.label }</p>
                </div>
            )
        })
    }

    characterGrid( characterArr ){

        return (
            <div className='discGrid col-md' ref={element =>{this.grid = element}}>
                { this.buildGrid( characterArr ) }
            </div>
        )
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(!this.state.loading){
            this.loadsComplete();
        }
    }

    getImages(discussion,page){

        const images = this.props.images;

        if(Array.isArray(images)){

            if(typeof images[0] !== 'string'){
                return this.characterGrid( images);
            }
            else{
                return (
                        <div className={'discFullImgFrame col-lg'}>
                            <img
                                src={images[0]}
                                className={'discFullImg'}
                                onLoad={this.loadsComplete}
                                alt={''}
                            />
                        </div>
                );
            }
        }
    }
    render(){
        return(
            <div
                className={
                    `discWrap col d-flex justify-content-center ${
                        typeof this.props.images[0] === 'string' ? 'fullImg' : ''
                    }`}
                id={'discWrap'}
            >

                {this.getImages()}
                {this.getText()}

            </div>

        )
    }
}

function ReaderControlBar(props){

    function NarrationControl(){

        function handlePlay(){
            props.narrationControl('play');
        }
        function handlePause(){
            props.narrationControl('pause');
        }
        function handleRestart(){
            props.narrationControl('restart');
        }
        function showButtons(){

            function playButton(){
                if(!props.narrationState){
                    return(
                        <div className={'position-relative'}>
                            <button className="playButton" id="play" onClick={handlePlay}>
                                <div className="playSymbol"/>
                            </button>
                            <InfoBubble
                                message={'click for audio'}
                                type={'up'}
                                id={'playInfo'}
                                infoOff={props.infoOff}
                                clearAll={props.setInfoOff}
                            />
                        </div>
                    )
                }
                else{
                    return loadingButton();
                }
            }
            function pauseButton(){
                return(
                    <button className="pauseButton" id="pause"
                            onClick={handlePause}
                    >
                        <div className="pauseSymbol"/>
                        <div className="pauseSymbol"/>
                    </button>
                )
            }
            function replayButton(){
                return(
                    <button className="replayButton" id="restart" onClick={handleRestart} >
                        <div className="stopSymbol"/>
                    </button>
                )

            }
            function loadingButton(){
                return(
                    <button className="loadingButton" id="restart" onClick={handleRestart} >
                        <Loading class={'noBg'}/>
                    </button>
                )
            }

            if(props.status==='playing'){

                if(props.audioBubble){
                    setTimeout(props.hideAudioBubble, 3000);
                }

                return(
                    <div className="narrControls position-relative">

                        {!props.narrationState ? pauseButton() : loadingButton()}

                        {replayButton()}

                        <InfoBubble
                            message={'Control Reader'}
                            type={'up'}
                            id={'playInfo'}
                            visible={props.audioBubble}
                        />

                    </div>
                )

            }
            else if (props.status==='pause'){
                return (
                    <div className="narrControls">
                        {playButton()}
                        {replayButton()}
                    </div>
                )
            }
            else if(props.status==='stop'){
                return(
                    <div className="narrControls">
                        {playButton()}
                    </div>
                )
            }
        }

        if(props.content.pageData[props.page - 1].audio && props.content.narration.get(props.language, false)){

            return (
                <div className="NarrationControl controlBox" id="controls" >

                    <div className="narrControls">
                        {showButtons()}
                    </div>

                </div>
            )
        }
    }

    function readerProgress(){

        function pageCounter(){

            function inputPage(){
                const pageInput = document.getElementById('pageInput');

                console.log(Number(pageInput.value));

                if (pageInput.value > 0 && pageInput.value <= props.content.endPage){

                    pageInput.classList.remove('error');
                    props.changePage(Number(pageInput.value),true);

                } else {

                    //pageInput.classList.add('error');
                }
            }

            return(
                <div className="pageCounter darkAccent label col-auto" id={'pageCounterWrap'}>

                    <p>{`${pageText.labels.page[props.language]} ${props.page} / ${props.content.endPage}`}</p>

                </div>
            )
        }

        function pageSlider(){

            function slidePage(){

                const progress = document.getElementById('progressSlider');

                props.changePage(Number(progress.value),true);
            }

            return(
                <div className="progressSliderWrap label col-lg" id={'progressSliderWrap'}>

                    <input type="range"
                           min={props.content.startPage}
                           max={props.content.endPage}
                           value={props.page}
                           id="progressSlider"
                           onChange={slidePage }
                    />

                </div>
            )
        }

        return(
            <div className={'col-md-auto readerProgressWrap'}>

                <div className="ReaderProgress controlBox row" id={'readerProgress'}>

                    {pageCounter()}
                    {pageSlider()}

                </div>

            </div>

        )
    }

    return(
        <div className="ReaderControlBar row" id='controlBar'>

            <div className="mobileTop col-auto no-gutters">

                <div className={'col-sm-auto no-gutters'}>
                    {NarrationControl()}
                </div>

                <div className={'col-auto no-gutters  justify-content-center'}>

                    <Translate
                        language={props.language}
                        changeLanguage={props.changeLanguage}
                    />

                </div>

                <div className={'mobile-close col-auto'}>

                    <Button type={'close'} link={'/library'} id={'mobileClose'}/>

                </div>

            </div>

            {readerProgress()}

            <div className={'col-auto standard-close no-gutters'}>

                <ReadClose
                    sessionInfo={props.sessionInfo}
                    language={props.language}
                />

            </div>

        </div>

    )
}

export function PageImage(props){

    function handleLoad(){
        if(props.imgLoaded){
            props.imgLoaded();
        }
    }
    return(
        <img
            src={props.src}
            id={`pageImg`}
            onLoad={handleLoad}
            className={`${props.className}`}
            alt={''}
        />
    )
}

export function Read(props){

    //PROPS
    const content = props.content;
    const { startPage } = content;

    // STATES
    const [page,setPage] = useState(props.content.startPage);
    const [status,setStatus] = useState('stop');
    const [narrationState,setNarrationState] = useState('waiting');
    const [audioBubble,setAudioBubble] = useState(1);

    // Current Media Load Monitors
    const [imgLoad,setImgLoad] = useState(1);
    const [audioLoad,setAudioLoad] = useState(props.content.preloads.audio.length ? 1 : 0);

    const [cachedImgs,setCachedImgs] = useState([]);
    const [cachedAudio,setCachedAudio] = useState([]);
    const [preloadingImg, setPreloadingImg] = useState('');
    const [preloadingAudio, setPreloadingAudio] = useState('');

    // FUNCTIONS

    // Page Control
    function changePage(newPage,stop){

        if(newPage !== page){

            if(stop){
                // Stop Narration
                const audio = document.getElementById('narrator');
                if(audio){
                    audio.pause();
                }
                setStatus('stop');
            }

            // SET STATES
            setPage(newPage);
            setImgLoad(1);
            setAudioLoad(1);

            //MISC
            //loadNarration(newPage);
            clearPageInput();
        }
    }
    function nextPage(e,stop){

        //Check For Completed Book
        if (page >= props.content.endPage){
            openCompleteWindow();
        }

        else {
            changePage(page + 1,stop);
        }
    }

    // Audio Narration
    function loadNarration( page ){

        const audio = document.getElementById('narrator');

            //audio.src = props.content.pageData[page - 1]
            audio.load();

    }
    function narrationControl(action){

        const audio = document.getElementById('narrator');

        if(audio){

            let playPromise = audio.play();

            switch (action){

                case('play'):

                    if (playPromise !== undefined){

                        playPromise.then( ()=>{

                            console.log('play');
                            if ( status !== 'playing' ){

                                //setTimeout(function(){setStatus('playing')},5000)
                                setStatus('playing');
                            }
                        }
                        ).catch(error =>console.log(error));
                    }
                    break;

                case('pause'):

                    audio.pause();
                    setStatus('pause');
                    break;

                case('restart'):

                    audio.pause();
                    loadNarration(page);
                    setStatus('stop');
                    break;

                default: break;
            }
        }
    }

    // Media Loads
    function mediaLoaded(type,src){

        switch (type){
            case('img'):
                setImgLoad(0);

                if (props.content.format === 'book'){
                    let updatedImgCache = cachedImgs;
                    updatedImgCache.push(src);
                    setCachedImgs(updatedImgCache);

                    preload('img');
                }

                if (props.content.format === 'discussion'){
                    let updatedImgCache = cachedImgs;

                    src.forEach( src =>{
                        updatedImgCache.push( src );
                    })
                    setCachedImgs(updatedImgCache);

                    preload('img');
                }

                if(!props.content.preloads.audio.length){
                    setNarrationState(0);
                }

                if(audioLoad){
                    loadNarration(page);
                }

                break;

            case('audio'):
                setAudioLoad(0);

                let updatedAudioCache = cachedAudio;
                updatedAudioCache.push(src);
                setCachedAudio(updatedAudioCache);

                preload('audio');

                break;
            default: break;
        }

        if (status === 'playing'){

            switch (type){

                case('img'):
                    if(!audioLoad){
                        narrationControl('play');
                    }
                    break;

                case('audio'):

                    if(!imgLoad){
                        narrationControl('play');
                    }
                    break;
                default: break;
            }
        }
    }
    function preloadCached(type,src){

        let updatedCache = type === 'img' ? cachedImgs : cachedAudio;
        let setter = type === 'img' ? setCachedImgs : setCachedAudio;
        let currentPreloadSetter = type === 'img' ? setPreloadingImg : setPreloadingAudio;

        updatedCache.push(src);
        setter(updatedCache);
        currentPreloadSetter('');
        preload(type);
    }
    function preload(type){

        const preloads = props.content.preloads[type];
        const cached = type === 'img' ? cachedImgs : cachedAudio;
        const setter = type === 'img' ? setPreloadingImg : setPreloadingAudio;

        if (cached.length < preloads.length){

            let i = 0;
            while(i < preloads.length){

                let check = type === 'img' ? preloads[i] : preloads[i].get(props.language);

                if (!cached.includes(check)) {

                    return setter(check);

                }
                i++;
            }
        }
    }

    //Component Handlers
    function handlePage() {

        switch (props.content.format) {

            case('book'):
                return(
                    <Book
                        pageImg={props.content.pageData[page - 1].img}
                        content={props.content}
                        page={page}
                        language={props.language}
                        imgLoad={imgLoad}
                        //Functions
                        mediaLoaded={mediaLoaded}
                    />
                )

            case('discussion'):
                return (
                    <Discuss
                        status={status}
                        images={props.content.pageData[page - 1].img}
                        text={props.content.pageData[page - 1].text}
                        loaded={mediaLoaded}
                        language={props.language}
                    />
                )
            default: break;
        }
    }

    // DOM Functions
    function clearPageInput(){
        /*
        const pageInput = document.getElementById('pageInput');
        pageInput.value = page;
        pageInput.classList.remove('error');
         */
    }
    function openCompleteWindow(){
        const congrats = document.getElementById('complete');
        congrats.style.display = 'inline-flex';
    }
    function hideAudioBubble(){
        setAudioBubble(0);
    }

    return(
        <div className={'row no-gutters'}>

            <div className="Read col d-flex flex-column align-items-center justify-content-center">

                <ReaderControlBar
                    narrationState={narrationState}
                    page={page}
                    status={status}
                    content={props.content}
                    language={props.language}
                    sessionInfo={props.sessionInfo}
                    //Methods
                    narrationControl={narrationControl}
                    changePage={changePage}
                    changeLanguage={props.changeLanguage}
                    audioBubble={audioBubble}
                    hideAudioBubble={hideAudioBubble}
                />

                <div
                    id="ReaderContent"
                    className="ReaderContent row d-flex flex-row justify-content-center align-items-center"
                >

                    <ReaderStart
                        content={props.content}
                        language={props.language}
                        page={page}
                        //Methods
                        narrationControl={narrationControl}
                        nextPage={nextPage}
                        setAudioBubble={setAudioBubble}
                    />

                    {handlePage()}

                </div>

                <div className={'pageArrows row'}>

                    <div className={'col'}>

                        <PageArrow
                            type={'<'}
                            className={'default'}
                            page={page}
                            startPage={startPage}
                            //Methods
                            changePage={changePage}
                        />

                    </div>

                    <div className={'col'}>

                        <PageArrow
                            type={'>'}
                            className={'default'}
                            page={page}
                            //Methods
                            nextPage={nextPage}
                        />

                    </div>

                </div>

                <div className={'misc'}>

                    <Preloader
                        preloads={props.content.preloads}
                        preloadingImg={preloadingImg}
                        preloadingAudio={preloadingAudio}
                        page={page}
                        //Methods
                        setCachedImgs={setCachedImgs}
                        preloadCached={preloadCached}
                    />

                    <Congrats
                        language={props.language}
                        changePage={changePage}
                        sessionInfo={props.sessionInfo}
                    />

                    <Audio
                        src={props.content.pageData[page - 1].audio.get(props.language)}
                        language={props.language}
                        nextPage={nextPage}
                        mediaLoaded={mediaLoaded}
                        setNarrationState={setNarrationState}
                    />

                </div>

            </div>

        </div>
    )
}




