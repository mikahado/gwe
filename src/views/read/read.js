import React, {useState,useEffect,useRef} from 'react';
import ReactDOM from 'react-dom';

// Utilities
import { default as get } from '../../utilities/contentGetters';

// Data
import pageText from '../../data/pageText';
import books from "../../data/books";

// Sub-Components
import Congrats from '../../components/congrats/congrats';
//import Discuss from '../../components/discuss/discuss';
import {Button, ZoomButton} from "../../components/buttons/buttons";
import Loading from "../../components/loading/loading";
import Translate from "../../components/translate/translate";

// Style Sheets
import './read.css';
import './readerControls.css';
import './discuss.css';
import './readMediaQueries.css';

// SUB-COMPONENTS
function Book(props){

    //PROPS
    //Data
    const {content,material,page,language,imgLoad} = props;
    const {contentId} = material;
    //Methods
    const {mediaLoaded} = props;

    //STATES
    const [pageZoom,setPageZoom] = useState(0);
    const [skinnyWindow,setSkinnyWindow] = useState(0);

    //FUNCTIONS
    function checkDimensions(){

        const pageImgFrame = document.getElementById('pageImgFrame');

        if(pageImgFrame){

            const windowWidth = document.documentElement.clientWidth;
            const windowHeight = document.documentElement.clientHeight;

            const imgWidth = pageImgFrame.offsetWidth;
            const imgHeight = pageImgFrame.offsetHeight;

            const maxWidth = windowWidth * 0.85;
            const maxHeight = windowHeight * 0.85;

            if(imgWidth > maxWidth){
                setSkinnyWindow(1)
            }
            else if(imgHeight > maxHeight){
                setSkinnyWindow(0);
            }

        }
    }
    function handleCurrentImageLoad(){
        checkDimensions();
        mediaLoaded('img');
    }
    function handleTranslation(){

        if(language !== 'eng'){

            function compileTranslations(translationData){

                return translations[ page ].map( phrase =>{
                    return <p>{ phrase }</p>
                })
            }

            const translations = books[contentId].translations;

            if(translations){
                return(
                    <div className={'row'}>
                        <div className={'translation col'}>
                            {compileTranslations(translations)}
                        </div>
                    </div>

                )
            }
        }
    }
    function zoomPage(){

        if(pageZoom === 0){

            const page = document.getElementById('pageImgFrame');
            setPageZoom(1);
            page.classList.add('zoom');
            console.log('zoom');

        }
        else{

            const page = document.getElementById('pageImgFrame');
            page.classList.remove('zoom');
            setPageZoom(0);


        }
    }
    function handleZoom(){

        if(!skinnyWindow){
            return(
                <ZoomButton zoomFunction={zoomPage} zoomState={pageZoom}/>
            )
        }
    }

    //Life-Cycle
    useEffect( ()=> {

        function handleResize() {
            setTimeout(checkDimensions,1000);
        }

        window.addEventListener('resize', handleResize);
    })

    return(
        <div className="readerPage col-lg-auto d-flex flex-column align-items-center">

            <div className={'row d-flex flex-row align-items-center'}>

                <div
                    id={'pageImgFrame'}
                    className={
                        `pageImgFrame col 
                            ${pageZoom ? 'zoom' : ''}
                            ${skinnyWindow ? 'skinnyWindow' :''}
                            `}
                >

                    <Loading loading={imgLoad} />
                    <PageImage
                        src={content[page - 1].img}
                        className={'pageImg'}
                        imgLoaded={handleCurrentImageLoad}
                        page={page}
                    />

                </div>

                {handleZoom()}

            </div>

            {handleTranslation()}

        </div>
    )

}
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
        this.props.loaded('img');
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
        this.loadsComplete();

    }
    imgLoaded(){
        this.setState({loading: !this.imagesLoaded(this.grid)});
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
                        <div className={'discFullImgFrame'}>
                            <img src={images[0]} className={'discFullImg'} onLoad={this.loadsComplete}/>
                        </div>
                );
            }
        }
    }
    render(){
        return(
            <div
                className={
                    `discWrap col-lg-auto d-flex flex-column justify-content-center ${
                        typeof this.props.images[0] === 'string' ? 'fullImg' : ''
                    }`}
            >

                {this.getImages()}
                {this.getText()}

            </div>

        )
    }
}
function ReaderStart(props) {

    // Material Metadata
    const {format,title,byAuthor,readerPhoto,reader} = props.material;
    // Addl Props / State
    const {language,audioPreloads,narrationState} = props;
    // Methods
    const {narrationControl,nextPage} = props;

    function titleAuthor() {
        if (format === 'book') {
            return (
                <div className="readerTitleAuthor label">
                    <h1 className="readerTitle">{title}</h1>
                    <hr/>
                    <h2 className="readerAuthor">{byAuthor}</h2>
                </div>
            )
        }
        else if (format) {
            return (
                <div className="readerTitleAuthor label">

                    <h1 className="readerTitle">
                        {title}
                    </h1>

                </div>
            )
        }
    }

    function readBy() {

        function getReaderPhoto() {
            if (readerPhoto) {
                return (
                    <img
                        id="readerPhoto"
                        src={readerPhoto}
                        alt={`Narrator`}
                    />
                )
            }
        }

        if (reader) {
            if (format === 'book') {
                return (
                    <div className="readerReadBy label">

                        {getReaderPhoto(readerPhoto)}

                        <div className="readByName">
                            <h3>{pageText.labels.readBy[language]}</h3>
                            <hr/>
                            <h3>{reader}</h3>
                        </div>

                    </div>
                )
            }
        }
    }

    function playNarration() {

        narrationControl('play');
    }

    function showButton() {

        function getClick(){
            if(audioPreloads.length){
                return(playNarration);

            }
            else{
                return(nextPage);
            }
        }
        if (!narrationState) {
            return (
                <Button click={getClick()} text={'Start Material'} language={props.language} iconType={'rightArrow'}/>
            )
        } else {
            return (
                <div className={'label'} id={'readerStartLoading'}>
                    <p>Material Loading</p>
                    <div className={'readerStartLoadingWrap'}>
                        <Loading loading={1} circleClass={'noBG'}/>
                    </div>
                </div>
            )
        }
    }

    return (
        <div className="ReaderStart controlBox col-md-auto d-flex flex-column flex-sm-row flex-md-column">

            {titleAuthor(
                props.material.format,
                props.material.title,
                props.material.byAuthor)}

            {readBy(
                props.material.format,
                props.material.reader,
                props.material.readerPhoto,
                props.language)}

            {showButton()}

        </div>
    )
}
export function Audio(props){

    function handleAudioLoad(){
        props.setNarrationState(0);
        props.mediaLoaded('audio');
    }

    let waitTimer;

    function setWaiting(){
        console.log('waiting');
        props.setNarrationState('waiting');
    }
    function handleWait(){
        console.log('setting wait timer');
        waitTimer = setTimeout(setWaiting,3500);
    }
    function handleResume(){
        clearTimeout(waitTimer);
    }

    return(
        <audio
            id={'narrator'}
            src={`${process.env.PUBLIC_URL}/assets/${ props.material.format }/${ props.material.contentId }/audio/${ props.language }/${ props.page }.mp3`}
            onEnded={props.nextPage}
            onCanPlayThrough={handleAudioLoad}
            onWaiting={handleWait}
            onPlaying={handleResume}
        />
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
            className={`${props.className}`}/>
    )
}

export function Read(props){

    // STATES
    const [page,setPage] = useState(props.material.startPage);
    const [status,setStatus] = useState('stop');
    const [narrationState,setNarrationState] = useState('waiting');

    // PROPS
    const {material,content,language, imgPreloads, audioPreloads,changeLanguage} = props;
    const {format,contentId,startPage,endPage} = material;

    // Current Media Load Monitors
    const [imgLoad,setImgLoad] = useState(1);
    const [audioLoad,setAudioLoad] = useState(audioPreloads.length ? 1 : 0);

    // FUNCTIONS

    // Page Control
    function changePage(newPage,stop){

        if(stop){
            console.log(stop);
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
    function nextPage(e,stop){

        //Check For Completed Book
        if (page >= material.endPage){
            openCompleteWindow();
        }

        else {
            changePage(page + 1,stop);
        }
    }

    // Audio Narration
    function loadNarration( page ){

        console.log(`load Narration`);

        const audio = document.getElementById('narrator');

            audio.src = `${process.env.PUBLIC_URL}/assets/${ format }/${ contentId }/audio/${ language }/${ page }.mp3`;
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
            }
        }
    }

    // Media Loads
    function mediaLoaded(type){

        console.log(`media loaded - ${type}`);

        const audio = document.getElementById('narrator');

        switch (type){
            case('img'):
                setImgLoad(0);

                if (format === 'book'){

                }

                if(!audioPreloads.length){
                    setNarrationState(0);
                }

                if(audioLoad){
                    loadNarration(page);
                }

                break;

            case('audio'):
                console.log(`Narration Ready State - ${audio.readyState}`);
                setAudioLoad(0);
                break;
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
            }
        }
    }

    //Component Handlers
    function handlePage() {

        switch (format) {

            case('book'):
                return(
                    <Book
                        material={material}
                        content={content}
                        page={page}
                        language={language}
                        imgLoad={imgLoad}
                        //Functions
                        mediaLoaded={mediaLoaded}
                    />
                )
                break;

            case('discussion'):
                return (
                    <Discuss
                        status={status}
                        images={content[page - 1].img}
                        text={content[page - 1].text}
                        loaded={mediaLoaded}
                    />
                )
                break;
        }
    }
    function handleStart() {

        if (material.startPage === page) {
            return <ReaderStart
                material={material}
                language={language}
                audioPreloads={audioPreloads}
                narrationControl={narrationControl}
                nextPage={nextPage}
            />

        }
    }

    // DOM Functions
    function showControls(){

        const controls = document.getElementById('controlBar');

        if(controls){

            if(controls.style.opacity === '1'){
                console.log('controls visible');
                controls.style.opacity = 0;
            }
            else {
                controls.style.opacity = 1;
                setTimeout(function(){controls.style.opacity = 0;}, 3000);
            }
        }
    }
    function clearPageInput(){
        const pageInput = document.getElementById('pageInput');
        pageInput.value = '';
    }
    function openCompleteWindow(){
        const congrats = document.getElementById('complete');
        congrats.style.display = 'inline-flex';
    }

    //SUB-COMPONENTS
    function ReaderControlBar(props){

        function checkNarration(){

            function handlePlay(){
                narrationControl('play');
            }
            function handlePause(){
                narrationControl('pause');
            }
            function handleRestart(){
                narrationControl('restart');
            }
            function showButtons(){

                function playButton(){
                    if(!narrationState){
                        return(
                            <button className="playButton" id="play" onClick={handlePlay}>
                                <div className="playSymbol"/>
                            </button>
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

                if(status==='playing'){
                    return(
                        <div className="narrControls">
                            {!narrationState ? pauseButton() : loadingButton()}
                            {replayButton()}
                        </div>
                    )

                }
                else if (status==='pause'){
                    return (
                        <div className="narrControls">
                            {playButton()}
                            {replayButton()}
                        </div>
                    )
                }
                else if(status==='stop'){
                    return(
                        <div className="narrControls">
                            {playButton()}
                        </div>
                    )
                }
            }

            function NarrationControl(){

                return(
                    <div className="NarrationControl controlBox" id="controls" >

                        <div className="narrControls">
                            {showButtons()}
                        </div>

                    </div>
                )
            }

            if(content[page - 1].audio){

                console.log('Narrator');
                return (
                    <NarrationControl/>
                )
            }
        }

        function readerProgress(){

            function pageCounter(){

                function inputPage(){
                    const pageInput = document.getElementById('pageInput');

                    if (pageInput.value > 0 && pageInput.value <= endPage){

                        pageInput.style.backgroundColor = "aliceBlue"
                        changePage(Number(pageInput.value),true);

                    } else {
                        pageInput.style.backgroundColor = "hsl(0,70%,70%)"
                    }
                }

                return(
                    <div className="pageCounter label col-auto" id={'pageCounterWrap'}>

                        <label htmlFor="pageInput">
                            { pageText.labels.page[language] } #:
                        </label>

                        <input type="number"
                               id="pageInput"
                               name="pageInput"
                               placeholder={page}
                               onChange={inputPage}
                        />

                        <label htmlFor="pageInput" id="totalPages">
                            /{endPage}
                        </label>

                    </div>
                )
            }

            function pageSlider(){

                function slidePage(){

                    const progress = document.getElementById('progressSlider');

                    changePage(Number(progress.value),true);
                }

                return(
                    <div className="progressSliderWrap label col-lg" id={'progressSliderWrap'}>
                        <input type="range"
                               min={startPage}
                               max={endPage}
                               value={page}
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
                            {checkNarration()}
                        </div>

                        <div className={'col-auto no-gutters  justify-content-center'}>
                            <Translate
                                language={language}
                                changeLanguage={changeLanguage}
                                //restartPage={handleRestart}
                            />
                        </div>

                        <div className={'mobile-close col-auto'}>

                            <Button type={'close'} link={'/library'} id={'mobileClose'}/>

                        </div>

                    </div>

                    {readerProgress()}

                    <div className={'col-auto standard-close no-gutters'}>

                        <Button type={'close'} link={'/library'} id={'mobileClose'}/>

                    </div>

            </div>

        )
    }
    function pageArrow(type,className){

        function nextArrow(){

            function clickNext(e){
                nextPage(e,true);
            }

            return(
                <div className={'col-s-1'}>
                    <button id="nextPage" onClick={ clickNext } className={className}>
                        <div className="nextPageSymbol"/>
                    </button>
                </div>
            )
        }
        function preArrow(){

            function prevPage(){
                if ( page > startPage ){
                    changePage(page - 1,true);
                }
            }
            function getClass(){

                if (page === startPage){
                    return 'disabled';
                } else {
                    return null;
                }
            }

            return(
                <div className={'col-s-1'}>
                    <button id="prevPage" className={`${getClass()} ${className}`} onClick={ prevPage } >
                        <div className="prevPageSymbol"/>
                    </button>
                </div>
            )
        }

        if (type==='>'){
            return nextArrow();
        } else {
            return preArrow();
        }
    }
    function Preloaders(props){

        return(
            <div className={'preLoaders'}>

                {imgPreloads}

                {audioPreloads[page]}

            </div>
        )
    }


    return(
        <div className={'row'}>

            <div className="Read col d-flex flex-column align-items-center justify-content-center">

                <ReaderControlBar/>

                <div
                    id="ReaderContent"
                    className="ReaderContent row d-flex flex-row justify-content-center align-items-center"
                    onClick={showControls}
                >

                    {handleStart()}
                    {handlePage()}

                </div>

                {/*

                <ReaderContent
                    //States
                    page={page}
                    status={status}
                    imgLoad={imgLoad}
                    //Props
                    material={material}
                    content={content}
                    language={language}
                    audioPreloads={audioPreloads}
                    //Methods
                    narrationControl={narrationControl}
                    nextPage={nextPage}
                    mediaLoaded={mediaLoaded}
                    showControls={showControls}
                />
                */}

                <div className={'pageArrows row'}>

                    <div className={'col'}>
                        {page > startPage ? pageArrow('<','default') : ''}
                    </div>

                    <div className={'col'}>
                        {pageArrow('>','default')}
                    </div>

                </div>

                {/*
                <div className={'mobileArrows row'}>
                    {pageArrow('<',page,'mobile',changePage,)}
                    <div className={'col'}/>
                    {pageArrow('>',page,'mobile',changePage,nextPage)}
                </div>
                */}

                <div className={'misc'}>

                    <Preloaders/>

                    <Congrats
                        language={language}
                        changePage={changePage}
                        sessionId={material.sessionId}
                        partNo={material.partNo}
                    />

                    <Audio
                        material={material}
                        page={page}
                        language={language}
                        nextPage={nextPage}
                        mediaLoaded={mediaLoaded}
                        setNarrationState={setNarrationState}
                    />

                </div>

            </div>

        </div>
    )
}

