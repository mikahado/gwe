import React, {useState,useEffect,useRef} from 'react';
import ReactDOM from 'react-dom';

// Utilities
import { default as get } from '../../utilities/contentGetters';

// Data
import pageText from '../../data/pageText';
import books from "../../data/books";

// Sub-Components
import Congrats from '../../components/congrats/congrats';
import Discuss from '../../components/discuss/discuss';
import {Button} from "../../components/button/button";
import Loading from "../../components/loading/loading";
import Translate from "../../components/translate/translate";

// Style Sheets
import './read.css';
import './readerControls.css';
import './readMediaQueries.css';

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
        <img src={props.src} id={`pageImg`} onLoad={handleLoad} className={`${props.className}`}/>
    )
}

export function Read(props){

    // STATES
    const [page,setPage] = useState(props.material.startPage);
    const [status,setStatus] = useState('stop');
    const [narrationState,setNarrationState] = useState('waiting');
    const [pageZoom,setPageZoom] = useState(0);

    // PROPS
    const {material,content,language, imgPreloads, audioPreloads,changeLanguage} = props;
    const {
        format,contentId,title,
        byAuthor,reader,readBy,readerPhoto,
        startPage,endPage
    } = material;

    // Current Media Load Monitors
    const [imgLoad,setImgLoad] = useState(1);
    const [audioLoad,setAudioLoad] = useState(audioPreloads.length ? 1 : 0);

    // FUNCTIONS

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

        function checkDimensions(){
            // Select Page & Containers
            const pageImg = document.getElementById('pageImg');
            const pageImgFrame = document.getElementById('pageImgFrame');
            const readerContent = document.getElementById('ReaderContent')

            // Determine Page Dimensions
            if (pageImg){
                if (pageImg.naturalWidth < pageImg.naturalHeight){
                    pageImgFrame.className = `pageImgFrame tall ${pageZoom ? 'zoom' : ' '}`;
                    readerContent.className = 'ReaderContent tallContent';
                } else {
                    pageImgFrame.className = `pageImgFrame wide ${pageZoom ? 'zoom' : ''}`;
                    readerContent.className = 'ReaderContent wideContent';
                }
            }
        }

        switch (type){
            case('img'):
                setImgLoad(0);

                if (format === 'book'){
                    checkDimensions();
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

    // Restart Book
    function readAgain(){
        //Set State
        this.changePage(1);
        //Remove Congrats Window
        const congrats = document.getElementById('complete');
        congrats.style.display = 'none';
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
                    <div className="pageCounter label" id={'pageCounterWrap'}>

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
                    <div className="progressSliderWrap label" id={'progressSliderWrap'}>
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
                <div className="ReaderProgress controlBox" id={'readerProgress'}>
                    {pageCounter()}
                    {pageSlider()}
                </div>
            )
        }

        return(
            <div className="ReaderControlBar" id='controlBar'>

                <div className="mobileTop">
                    {checkNarration()}
                    <Translate
                        language={language}
                        changeLanguage={changeLanguage}
                        //restartPage={handleRestart}
                    />
                    <Button type={'close'} link={'/library'} id={'mobileClose'}/>
                </div>

                {readerProgress()}
                <div className={'rightButtons'}>
                    {/*<Button link={'/library'} class={'closeButton'} buttonId={'standardClose'} text={'X'}/>*/}
                </div>


            </div>
        )
    }
    function ReaderPages( props ){

        //Functions
        function checkStart() {

            function ReaderStart(props) {

                function titleAuthor() {
                    if (format === 'book') {
                        return (
                            <div className="readerTitleAuthor label">
                                <h1 className="readerTitle">{title}</h1>
                                <hr/>
                                <h2 className="readerAuthor">{byAuthor}</h2>
                            </div>
                        )
                    } else if (format) {
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

                        } else{
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
                    <div className="ReaderStart controlBox">

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
            let start;
            if (material.startPage) {
                if (material.startPage === page) {
                    start = true;
                }

            } else {
                if (page === 1) {
                    start = true;
                } else {
                    return false;
                }
            }
            if (start){
                return <ReaderStart
                    material={material}
                    language={language}
                    page={page}
                    playNarration={props.playNarration}
                />
            }
        }
        function pageImage() {

            function handleCurrentImageLoad(){
                mediaLoaded('img');
            }

            switch (format) {

                case('book'):

                    return (
                        <PageImage
                            src={content[page - 1].img}
                            className={'pageImg'}
                            imgLoaded={handleCurrentImageLoad}
                        />
                    )
                    break;

                case('discussion'):
                        return (
                            <Discuss
                                status={status}
                                images={content[page - 1].img}
                                text={content[page - 1].text}
                                loaded={handleCurrentImageLoad}
                            />
                        )
                    break;
            }
        }
        function showPageText(props){

            function bookTranslations(){
                return books[ contentId ].translations[ page ].map( phrase =>{
                    return <p>{ phrase }</p>
                })
            }
            function discussionText(){
                const convertedText = [];

                // Cycle Through Each Line of Text
                content[page - 1].text.forEach( line =>{

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
                    // Add Newly Assembled Line
                    convertedText.push( <p>{ newLine }</p> );
                })
                //Return Assembled Page Text
                return <div className={'label discText'}>{ convertedText }</div>;
            }

            if(content[page-1].text){

                function getTextByFormat(){
                    if(format === 'book'){
                        if(books[contentId].translations){
                            return <div className={'translatedText label'}>{bookTranslations()}</div>

                        } else {
                            return <p className="label">{pageText.messages.spanishComing}</p>
                        }
                    }
                }
                return getTextByFormat()
            }
        }

        //Render
        return(
            <div className="ReaderPages" id="page">
                { checkStart() }

                <div className="readerPageAndTranslation">
                    <div id={'pageImgFrame'} className={`pageImgFrame wide ${pageZoom ? 'zoom' : ''}`}>
                        <Loading loading={imgLoad} />
                        {pageImage()}
                    </div>
                    {showPageText()}

                    {format ==='book' ?
                        <Button text={`${pageZoom ? '-' : '+'}`} class={'zoomButton'} id={'zoomButton'} click={zoomPage}/>
                        :''
                    }



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
                <button id="nextPage" onClick={ clickNext } className={className}>
                    <div className="nextPageSymbol"/>
                </button>
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
                <button id="prevPage" className={`${getClass()} ${className}`} onClick={ prevPage } >
                    <div className="prevPageSymbol"/>
                </button>
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




    return(
        <div className="Read">

            <Audio
                material={material}
                page={page}
                language={language}
                nextPage={nextPage}
                mediaLoaded={mediaLoaded}
                setNarrationState={setNarrationState}
            />

            <ReaderControlBar/>

            <div className="ReaderContent" id="ReaderContent" onClick={showControls}>

                {page > startPage ? pageArrow('<','default') : ''}

                <ReaderPages/>

                {pageArrow('>','default')}



                <div className={'mobileArrows'}>
                    {pageArrow('<',page,'mobile',changePage,)}
                    {pageArrow('>',page,'mobile',changePage,nextPage)}
                </div>

            </div>

            <Preloaders/>

            <Congrats
                language={language}
                changePage={changePage}
                sessionId={material.sessionId}
                partNo={material.partNo}
            />

        </div>
    )
}

