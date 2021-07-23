import React, { useEffect, useState } from "react";
import {useHistory, useLocation, } from 'react-router-dom';

// Data
import pageText from "../../data/pageText";

// Sub-Components
import { Button } from "../../components/buttons/buttons";
import Loading from "../../components/loading/loading";
import { Audio } from "./audio/audio";
import { ReaderStart } from "./readerStart/readerStart";
import { Book } from "./book/book";
import { Preloader } from "./preloader/preloader";
import Congrats from "../../components/congrats/congrats";
import { InfoBubble } from "../../components/infoBubble/infoBubble";
import { PageArrow } from "./pageArrow/pageArrow";
import { ReadClose } from "./readClose/readClose";
import { NextMaterial } from "./nextMaterial/nextMaterial";

// Style Sheets
import "./read.css";
import "./readerControls.css";
import "./discuss.css";
import "./readMediaQueries.css";
import { useParams } from "react-router-dom";
import {MaterialHeader} from "../../components/materialHeader/materialHeader";
import '../../components/table.css';
import {ZoomBook} from "./zoomBook/zoomBook";
import discussionCharacters from "../../data/discussions/discussionCharacters/discussionCharacters";

let parse = require('html-react-parser');

// SUB-COMPONENTS

export function DiscussionCharacter(props){
  return(
    <div className={`discGridCharacter of${props.gridSize} ${props.zoom ? 'zoom' : null}`}>
      <img
        src={props.characterData.img}
        //onLoad={this.imgLoaded}
        id={"discGridImg"}
        alt={props.characterData.label}
      />
      <p>{props.characterData.label}</p>
    </div>
  )
}
class Discuss extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
    this.loadsComplete = this.loadsComplete.bind(this);
    this.imagesLoaded = this.imagesLoaded.bind(this);
    this.imgLoaded = this.imgLoaded.bind(this);
    this.getImages = this.getImages.bind(this);
    this.characterGrid = this.characterGrid.bind(this);
  }
  loadsComplete() {
    if (this.state.loading) {
      this.setState({ loading: 0 });
    }

    let loadedImgObjs = document
      .getElementById("discWrap")
      .querySelectorAll("img");
    let loadedSrcArray = [];

    loadedImgObjs.forEach((obj) => {
      loadedSrcArray.push(obj.src);
    });

    this.props.loaded("img", loadedSrcArray);
  }

  imagesLoaded(parent) {
    const images = [...parent.querySelectorAll("img")];

    for (let i = 0; i < images.length; i++) {
      const img = images[i];

      if (!img.complete) {
        return false;
      }
    }
    this.loadsComplete();
  }
  imgLoaded() {
    this.setState({ loading: !this.imagesLoaded(this.grid) });
  }

  getText(discussion, page) {
    if (this.props.text) {
      let nativeText = this.props.text.get(this.props.language, false);

      if (nativeText) {
        const convertedText = [];

        let line = 0;

        // Cycle Through Each Line of Text
        this.props.text.get(this.props.language).forEach((lineData) => {
          const newLine = [];

          //Assemble Each Line of Text
          for (let i = 0; i < lineData.length; i++) {
            //Create Speech Bubbles
            if (lineData[i].speech) {
              newLine.push(
                <span key={i} className="discussSpeechBubble">
                  {lineData[i].text}
                </span>
              );
              // Return Plain Text
            } else {

              newLine.push( parse( lineData[i] ) );
            }
          }
          if (newLine.length) {
            convertedText.push(<p key={line}>{newLine}</p>);
          }
          line++;
        });
        //Return Assembled Page Text
        if (convertedText.length) {
          console.log(convertedText);
          return <div className={"discText col-md"}>{convertedText}</div>;
        }
      }
    }
  }

  buildGrid(characterArr) {
    return characterArr.map((character) => {
      const characterData = character;

      return (
        <div className={`discGridCharacter of${characterArr.length}`}>
          <img
            src={characterData.img}
            onLoad={this.imgLoaded}
            id={"discGridImg"}
            alt={`characterData.label`}
          />
          <p>{characterData.label}</p>
        </div>
      );
    });
  }

  characterGrid(characterArr) {
    return (
      <div
        className="discGrid col-md"
        ref={(element) => {
          this.grid = element;
        }}
      >
        {this.buildGrid(characterArr)}
      </div>
    );
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (!this.state.loading) {
      this.loadsComplete();
    }
  }

  getImages(discussion, page) {
    const images = this.props.images;

    if (!images.length){
      return null;
    } else if (Array.isArray(images)) {
      if (typeof images[0] !== "string") {
        return this.characterGrid(images);
      } else {
        return (
          <div className={"discFullImgFrame col-lg"}>
            <img
              src={images[0]}
              className={"discFullImg"}
              onLoad={this.loadsComplete}
              alt={""}
            />
          </div>
        );
      }
    }
  }
  render() {
    return (

        <div
          className={`discWrap d-flex flex-column flex-md-row justify-content-center ${
            typeof this.props.images[0] === "string" ? "fullImg" : ""
          }`}
          id={"discWrap"}
        >
          {this.getImages()}
          {this.getText()}
        </div>

    );
  }
}

function ReaderControlBar(props) {
  function NarrationControl() {
    function handlePlay() {
      props.narrationControl("play");
    }
    function handlePause() {
      props.narrationControl("pause");
    }
    function handleRestart() {
      props.narrationControl("restart");
    }
    function showButtons() {
      function playButton() {
        if (!props.narrationState) {
          return (
            <div className={"position-relative"}>
              <button className="playButton" id="play" onClick={handlePlay}>
                <div className="playSymbol" />
              </button>
              <InfoBubble
                message={"click for audio"}
                type={"up"}
                id={"playInfo"}
                infoOff={props.infoOff}
                clearAll={props.setInfoOff}
              />
            </div>
          );
        } else {
          return loadingButton();
        }
      }
      function pauseButton() {
        return (
          <button className="pauseButton" id="pause" onClick={handlePause}>
            <div className="pauseSymbol" />
            <div className="pauseSymbol" />
          </button>
        );
      }
      function replayButton() {
        return (
          <button className="replayButton" id="restart" onClick={handleRestart}>
            <div className="stopSymbol" />
          </button>
        );
      }
      function loadingButton() {
        return (
          <button
            className="loadingButton"
            id="restart"
            onClick={handleRestart}
          >
            <Loading class={"noBg"} />
          </button>
        );
      }

      if (props.status === "playing") {
        if (props.audioBubble) {
          setTimeout(props.hideAudioBubble, 3000);
        }

        return (
          <div className="narrControls position-relative">
            {!props.narrationState ? pauseButton() : loadingButton()}

            {replayButton()}

            <InfoBubble
              message={pageText.labels.readLabels.controlReader.get(props.language)}
              type={"up"}
              id={"playInfo"}
              visible={props.audioBubble}
            />
          </div>
        );
      } else if (props.status === "pause") {
        return (
          <div className="narrControls">
            {playButton()}
            {replayButton()}
          </div>
        );
      } else if (props.status === "stop") {
        if (props.page !== props.content.startPage) {
          return <div className="narrControls">{playButton()}</div>;
        }
      }
    }

    if (
      props.content.pageData[props.page - 1].audio &&
      props.content.narration.get(props.language, false)
    ) {
      return (
        <div className="NarrationControl controlBox" id="controls">
          <div className="narrControls">{showButtons()}</div>
        </div>
      );
    }
  }

  function readerProgress() {
    function pageCounter() {
      /*

            function inputPage(){
                const pageInput = document.getElementById('pageInput');

                if (pageInput.value > 0 && pageInput.value <= props.content.endPage){

                    pageInput.classList.remove('error');
                    props.changePage(Number(pageInput.value),true);

                } else {

                    //pageInput.classList.add('error');
                }
            }

             */

      return (
        <div
          className="pageCounter darkAccent label col-auto"
          id={"pageCounterWrap"}
        >
          <p>{`${pageText.labels.readLabels.page.get(props.language)} ${props.page} / ${
            props.content.endPage
          }`}</p>
        </div>
      );
    }

    function pageSlider() {
      function slidePage() {
        const progress = document.getElementById("progressSlider");

        props.changePage(Number(progress.value), true);
      }

      return (
        <div
          className="progressSliderWrap label col-lg"
          id={"progressSliderWrap"}
        >
          <input
            type="range"
            min={props.content.startPage}
            max={props.content.endPage}
            value={props.page}
            id="progressSlider"
            onChange={slidePage}
          />
        </div>
      );
    }

    return (
      <div className={"col-md-auto readerProgressWrap"}>
        <div className="ReaderProgress controlBox row" id={"readerProgress"}>
          {pageCounter()}
          {pageSlider()}
        </div>
      </div>
    );
  }

  return (
    <div className="ReaderControlBar row" id="controlBar">
      <div className="mobileTop col-auto no-gutters">
        <div className={"col-sm-auto no-gutters"}>{NarrationControl()}</div>

        <div className={"mobile-close col-auto"}>
          <Button type={"close"} link={"/library"} id={"mobileClose"} />
        </div>
      </div>

      {readerProgress()}

      <div className={"col-auto standard-close no-gutters"}>
        <ReadClose sessionInfo={props.sessionInfo} language={props.language} librarySection={props.content.format}/>
      </div>
    </div>
  );
}

export function PageImage(props) {
  function handleLoad() {
    if (props.imgLoaded) {
      props.imgLoaded();
    }
  }
  return (
    <img
      src={props.src}
      id={`pageImg`}
      onLoad={handleLoad}
      className={`${props.className}`}
      alt={""}
    />
  );
}

export function Translation(props) {

  function processText(line){
    if (Array.isArray(line)) {
      if (line.length === 1) {
        return <p style={{
          backgroundColor: 'var(--light-blue)',
          marginBottom: '0.5rem',
          padding: '0.5rem',
          borderRadius: '1rem',
          width: '100%',
          textAlign: 'center'
        }}>{parse(line[0])}</p>

      } else {
        let compiled = '';
        line.forEach( segment =>{
          if (segment.hasOwnProperty('text')){
            compiled += `<span class="discussSpeechBubble">${segment.text}</span>`
          } else {
            compiled += segment
          }
        })
        return <p style={{
          backgroundColor: 'var(--light-blue)',
          marginBottom: '0.5rem',
          padding: '0.5rem',
          borderRadius: '1rem',
          width: '100%',
          textAlign: 'center'
        }}>{parse(compiled)}</p>
      }
    } else if (line.hasOwnProperty('speech')){
      return <span>{line}</span>
    } else if (typeof line === 'string'){
      return <p style ={{
        backgroundColor: 'var(--light-blue)',
        marginBottom: '0.5rem',
        padding: '0.5rem',
        borderRadius: '1rem',
        width: '100%',
        textAlign: 'center'
      }}>{parse(line)}</p>
    }
  }

  return (
    props.textData ?
      <div className={'w-100'}>
        {props.textData.map( line =>{
          return(processText(line)
          )
        })}
      </div>
      : null
  )
}

export function Read(props) {
  let params = useParams();

  let history = useHistory();
  let location = useLocation();

  //PROPS
  const content = props.content;
  const { startPage } = content;

  // STATES
  const [page, setPage] = useState(parseInt(params.page) || content.bookMark || startPage);
  const [status, setStatus] = useState("stop");
  const [narrationState, setNarrationState] = useState("waiting");
  const [audioBubble, setAudioBubble] = useState(1);

  // Current Media Load Monitors
  const [imgLoad, setImgLoad] = useState(1);
  const [audioLoad, setAudioLoad] = useState(
    props.content.preloads.audio.length ? 1 : 0
  );

  const [cachedImgs, setCachedImgs] = useState([]);
  const [cachedAudio, setCachedAudio] = useState([]);
  const [preloadingImg, setPreloadingImg] = useState("");
  const [preloadingAudio, setPreloadingAudio] = useState("");

  const [pageZoom, setPageZoom] = useState(false);
  const [skinnyFrame, setSkinnyFrame] = useState(0);


  // FUNCTIONS

  // Page Control
  function changePage(newPage, stop) {
    if (newPage !== page) {
      if (stop) {
        // Stop Narration
        const audio = document.getElementById("narrator");
        if (audio) {
          audio.pause();
        }
        setStatus("stop");
      }

      // SET STATES
      setPage(newPage);
      setImgLoad(1);
      setAudioLoad(1);

      content.bookMark = newPage === content.endPage ? 1 : newPage;

      let path = location.pathname;
      let pageString = path.indexOf('/page=');
      if (pageString !== -1){
        path = path.slice(0, pageString);
      }
      history.push(path + `/page=` + newPage);

      /*
            if (!content.bookMark || newPage > content.bookMark){
                content.bookMark = newPage;
            }
             */

      //MISC
      //loadNarration(newPage);
      clearPageInput();
    }
  }
  function nextPage(e, stop) {
    //Check For Completed Book
    if (page >= props.content.endPage) {
      openCompleteWindow();
    } else {
      changePage(page + 1, stop);
    }
  }

  // Audio Narration
  function loadNarration(page) {
    const audio = document.getElementById("narrator");

    //audio.src = props.content.pageData[page - 1]
    audio.load();
  }
  function narrationControl(action) {
    const audio = document.getElementById("narrator");

    if (audio) {
      let playPromise = audio.play();

      switch (action) {
        case "play":
          console.log("play");

          if (playPromise !== undefined) {
            playPromise
              .then(() => {
                if (status !== "playing") {
                  //setTimeout(function(){setStatus('playing')},5000)
                  setStatus("playing");
                }
              })
              .catch((error) => console.log(error));
          }
          break;

        case "pause":
          audio.pause();
          setStatus("pause");
          break;

        case "restart":
          audio.pause();
          loadNarration(page);
          setStatus("stop");
          break;

        default:
          break;
      }
    }
  }

  // Media Loads
  function mediaLoaded(type, src) {
    switch (type) {
      case "img":
        setImgLoad(0);

        if (props.content.format === "book") {
          let updatedImgCache = cachedImgs;
          updatedImgCache.push(src);
          setCachedImgs(updatedImgCache);

          preload("img");
        }

        if (props.content.format === "discussion") {
          let updatedImgCache = cachedImgs;

          src.forEach((src) => {
            updatedImgCache.push(src);
          });
          setCachedImgs(updatedImgCache);

          preload("img");
        }

        if (!props.content.preloads.audio.length) {
          setNarrationState(0);
        }

        if (audioLoad) {
          loadNarration(page);
        }

        break;

      case "audio":
        setAudioLoad(0);

        let updatedAudioCache = cachedAudio;
        updatedAudioCache.push(src);
        setCachedAudio(updatedAudioCache);

        preload("audio");

        break;
      default:
        break;
    }

    if (status === "playing") {
      switch (type) {
        case "img":
          if (!audioLoad) {
            narrationControl("play");
          }
          break;

        case "audio":
          if (!imgLoad) {
            narrationControl("play");
          }
          break;
        default:
          break;
      }
    }
  }
  function preloadCached(type, src) {
    let updatedCache = type === "img" ? cachedImgs : cachedAudio;
    let setter = type === "img" ? setCachedImgs : setCachedAudio;
    let currentPreloadSetter =
      type === "img" ? setPreloadingImg : setPreloadingAudio;

    updatedCache.push(src);
    setter(updatedCache);
    currentPreloadSetter("");
    preload(type);
  }
  function preload(type) {
    const preloads = props.content.preloads[type];
    const cached = type === "img" ? cachedImgs : cachedAudio;
    const setter = type === "img" ? setPreloadingImg : setPreloadingAudio;

    if (cached.length < preloads.length) {
      let i = 0;
      while (i < preloads.length) {
        let check =
          type === "img" ? preloads[i] : preloads[i].get(props.language);

        if (!cached.includes(check)) {
          return setter(check);
        }
        i++;
      }
    }
  }

  // DOM Functions
  function clearPageInput() {
    /*
        const pageInput = document.getElementById('pageInput');
        pageInput.value = page;
        pageInput.classList.remove('error');
         */
  }
  function openCompleteWindow() {
    const congrats = document.getElementById("complete");
    congrats.style.display = "inline-flex";
  }
  function hideAudioBubble() {
    setAudioBubble(0);
  }
  function openScroll(){
    let content = document.getElementsByClassName('readContentWrap')[0];
    if(content){
      content.scrollIntoView(true);
    }
  }
  function textScroll(){
    let text = document.getElementById('sideTrans');
    if (text){
      console.log(text);
      text.scrollTo(0,0);
    }
  }

  // Layout
  function checkDimensions() {

    const imgWrap = document.getElementById('imgWrap');
    const pageImg = document.getElementById('pageImg');

    if (imgWrap) {

      const frameWidth = imgWrap.offsetWidth;
      const frameHeight = imgWrap.offsetHeight;

      if (pageImg){

        const imgWidth = pageImg.offsetWidth;
        const imgHeight = pageImg.offsetHeight;

        if (imgWidth > frameWidth){
          //setSizeHeight(false);
          //pageImg.classList.add('sizeWidth');
        } else {
          pageImg.classList.remove('sizeWidth');
        }

      }
    }
  }
  function getFlow(){
    if (layout.isMobile) {
      return 'column';
    } else if (props.content.format === 'discussion'){
      return 'row';
    } else if (!layout.singlePage){
      return 'column'
    }
  }
  function toggleZoom(){
    setPageZoom(!pageZoom)
    setLayout(buildLayout());
  }
  function buildLayout(){

    let newLayout = {};

    const windowWidth = document.documentElement.clientWidth;
    const windowHeight = document.documentElement.clientHeight;
    const pageImg = new Image();
    pageImg.src = props.content.pageData[page - 1].img;

    //if (pageImg.naturalHeight > 0) {

      newLayout.isMobile = windowWidth < 1000 //!(windowWidth > 1000 || windowHeight > 1000);
      newLayout.isPortrait = windowHeight > windowWidth;
      newLayout.readerStart = page === props.content.startPage;
      newLayout.singlePage = function(){
        if (props.content.format === 'discussion'){
          return true;
        } else {
          return pageImg.naturalHeight > pageImg.naturalWidth;
        }
      }()
      newLayout.sideTrans = function(){
        if (newLayout.singlePage && !newLayout.readerStart && !newLayout.isPortrait && !pageZoom){
          if (props.content.format === 'discussion'){
            return true;
          } else if (props.content.pageData[page - 1].translation.get(props.language)){
            return true;
          }
        }
        return newLayout.singlePage && !newLayout.readerStart && !newLayout.isPortrait && !pageZoom && (props.content.pageData[page - 1].translation.get(props.language) || props.content.pageData[page - 1].text.get(props.language));
      }()
      newLayout.bottomArrows = (newLayout.isMobile && newLayout.isPortrait) || pageZoom;
      newLayout.sizeHeight = true;
    //}
    return newLayout;
  }
  function updateLayout(){
    setLayout(buildLayout())
  }
  const [layout, setLayout] = useState(buildLayout());

  //Discussion
  function processDiscussionImages(imgData){
    if (Array.isArray(imgData)){
      if (imgData.length === 1){
        if (typeof imgData === 'string'){
          return <img id={'pageImg'} src={imgData[0]} onLoad={checkDimensions}/>
        } else if (imgData.hasOwnProperty('label')){
          return (
            <DiscussionCharacter
              characterData={imgData}
              gridSize={1}
              zoom={pageZoom}
            />
          )
        }
        return <img id={'pageImg'} src={imgData[0]} onLoad={checkDimensions}/>
      } else if(imgData.length > 1) {
        if ( imgData[0].hasOwnProperty('label') ){
          return imgData.map( charData =>{
            return (
              <DiscussionCharacter
                characterData={charData}
                gridSize={imgData.length}
                zoom={pageZoom}
              />
            )
          })
        }
      }
    }
  }

  useEffect( ()=>{

    function handleResize() {
      setTimeout(updateLayout, 1000);
    }

    setLayout(buildLayout());
    openScroll();
    window.addEventListener("resize", handleResize);
  }, []);
  useEffect(() => {
    checkDimensions();
    textScroll();
    let testLayout = buildLayout();

    for (let key in testLayout){
      if (layout[key] !== testLayout[key]){
        updateLayout();
      }
    }
  });

  if (props.page === props.content.startPage && pageZoom ){
    setPageZoom(0);
  }

  const renderedComponents = {
    pageArrow: [
      (
        <PageArrow
          type={"<"}
          className={"default"}
          page={page}
          startPage={startPage}
          language={props.language}
          //Methods
          changePage={changePage}
        />
      ),
      (
        <PageArrow
          type={">"}
          className={"default"}
          page={page}
          language={props.language}
          //Methods
          nextPage={nextPage}
        />
      )
    ],
    readerStart: (
      <ReaderStart
        content={props.content}
        sessionInfo={props.sessionInfo}
        language={props.language}
        page={page}
        //Methods
        narrationControl={narrationControl}
        nextPage={nextPage}
        setAudioBubble={setAudioBubble}
        //narrationState={narrationState}
      />
    )
  }

  let text = function(){
    if(props.content.format === 'book'){
      if (props.content.pageData[page - 1].translation){
        return
      }
    } else if (props.format === 'discussion') {
      if (props.content.pageData[page - 1].text) {
        return props.content.pageData[page - 1].text.get(props.language)
      }
    }
  }

  let translation = <Translation textData={props.content.pageData[page - 1].text.get(props.language)}/>

  return (
    <div className="Read m-0 p-0 d-flex flex-column align-items-center justify-content-center">
      {<ReaderControlBar
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
      />}

      <MaterialHeader sessionInfo={props.sessionInfo} content={content} language={props.language}/>

      <div style={{
        //border: '0.5rem solid red',
        minHeight: '100vh'
      }} className={'container-fluid readContentWrap'}>

        <div style={{
          //border: '0.5rem solid orange',
          height: !layout.isPortrait && !pageZoom ? '85vh' : 'fit-content'
        }} className={'row d-flex align-items-center'}>

          <div className={`col-auto d-${ layout.bottomArrows ? 'none' : 'flex'}` }>
            {renderedComponents.pageArrow[0]}
          </div>

          <div style={{
            borderColor: 'yellow',
            height: '100%'
          }} className={'col'}>

            <div className={`row flex-${getFlow()} justify-content-center align-items-center`} style={{
              //display: "grid",
              //gridTemplateColumns: '1fr 1fr',
              borderColor: 'green',
              height: '100%',
              width: '100%'
            }}>

              {
                props.content.pageData[page - 1].img && props.content.pageData[page - 1].img.length ?

                  <div id={'imgWrap'} className={`${pageZoom || props.content.format === 'discussion' ? 'sizeWidth' : null} col d-flex align-items-center justify-content-center position-relative flex-wrap`}>
                    {
                      props.content.format === 'discussion' ?
                        processDiscussionImages(props.content.pageData[page - 1].img)
                        :
                        <img id={'pageImg'} src={props.content.pageData[page - 1].img} onLoad={checkDimensions}/>
                    }

                    <ZoomBook
                      visible={layout.singlePage && !layout.readerStart && !layout.isPortrait}
                      zoomFunction={toggleZoom}
                      zoomState={pageZoom}
                      language={props.language}
                    />
                  </div>

                  : null
              }



              {
                layout.readerStart && !layout.isPortrait ?
                  <div className={`col d-flex align-items-center justify-content-center`}>
                    {renderedComponents.readerStart}
                  </div>
                  : null
              }

              {
                layout.sideTrans ?
                  <div id={'sideTrans'} className={`col d-flex`} style={{
                    height: '100%',
                    overflow: 'auto'
                  }}>
                    {translation}
                  </div>
                  : null
              }

            </div>
          </div>

          <div className={`col-auto position-relative h-100 d-${ layout.bottomArrows ? 'none' : 'flex'} align-items-center`}>

            {renderedComponents.pageArrow[1]}

          </div>

        </div>

        <div className={`h-100 w-100 d-${layout.readerStart || layout.sideTrans ? 'none' : 'flex' } justify-content-center align-items-center mt-3`}>
          {translation}
        </div>

        <div className={`d-${layout.readerStart && layout.isPortrait ? 'flex' : 'none' } justify-content-center pt-3`}>
          {renderedComponents.readerStart}
        </div>

        <div className={`d-${layout.bottomArrows ? 'flex' : 'none'} justify-content-between`} style={{
          position: 'sticky',
          bottom: '1rem'
        }}>
          {renderedComponents.pageArrow[0]}{renderedComponents.pageArrow[1]}
        </div>

      </div>

      <div className={"misc row"}>
        <div className={"col"}>
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
            page={page}
            startPage={content.startPage}
            narrationControl={narrationControl}
          />
        </div>
      </div>


    </div>
  )
}

/*
      <div
        id="ReaderContent"
        className="ReaderContent justify-content-center align-items-center no-gutters"
      >
        <div className={"d-none d-lg-flex justify-content-end"}>
          <PageArrow
            type={"<"}
            className={"default"}
            page={page}
            startPage={startPage}
            language={props.language}
            //Methods
            changePage={changePage}
          />
        </div>

        <div className={"d-flex flex-column flex-lg-row align-items-center justify-content-around"} >
          <ReaderStart
            content={props.content}
            sessionInfo={props.sessionInfo}
            language={props.language}
            page={page}
            //Methods
            narrationControl={narrationControl}
            nextPage={nextPage}
            setAudioBubble={setAudioBubble}
            //narrationState={narrationState}
          />

          {handlePage()}
        </div>

        <div className={"d-none d-lg-block"}>
          <PageArrow
            type={">"}
            className={"default"}
            page={page}
            language={props.language}
            //Methods
            nextPage={nextPage}
          />
        </div>
      </div>

      <div className={"pageArrows row"}>
        <div className={"col d-flex d-lg-none"}>
          <PageArrow
            type={"<"}
            className={"default"}
            page={page}
            startPage={startPage}
            language={props.language}
            //Methods
            changePage={changePage}
          />
        </div>

        <div className={"col"}>
          {props.sessionInfo ? (
            <NextMaterial sessionInfo={props.sessionInfo} />
          ) : (
            ""
          )}
        </div>

        <div className={"col d-flex d-lg-none"}>
          <PageArrow
            type={">"}
            className={"default"}
            page={page}
            language={props.language}
            //Methods
            nextPage={nextPage}
          />
        </div>
      </div>

      <div className={"row"}>
        <div className={"col"}></div>
      </div>

      <div className={"misc row"}>
        <div className={"col"}>
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
            page={page}
            startPage={content.startPage}
            narrationControl={narrationControl}
          />
        </div>
      </div>
      */
