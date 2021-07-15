// React
import React, { useState, useEffect } from "react";

// Sub-Components
//import Translate from "../translate/translate";
import { Button } from "../buttons/buttons";

// Style Sheet
import "./topnav.css";

//Data
import pageText from "../../data/pageText";

//Icon
import icon from "./GWEicon.png";
import { Link } from "react-router-dom";

let navText = pageText.buttons.nav;

export function NavButton(props) {
  return (
    <Button
      text={props.text}
      link={props.link}
      extLink={props.extLink}
      class={`${props.class ? props.class : ""} ${
        props.linkPage === props.page ? "current" : ""
      }`}
    />
  );
}

function TopNav(props) {
  const [mobile, setMobile] = useState(false);
  let [expand, setExpand] = useState(0);
  let [languageSelect, setLangageSelect] = useState(false);

  function checkMobile() {
    let short = window.matchMedia(`(max-height: 500px)`).matches;
    let skinny = window.matchMedia(`(max-width: 1000px)`).matches;

    if (short || skinny) {
      setMobile(true);
      //setExpand(0);
    } else {
      setMobile(false);
    }
  }

  useEffect(() => {
    function handleResize() {
      setTimeout(checkMobile, 1000);
    }

    checkMobile();

    window.addEventListener("resize", handleResize);
  });

  function toggleMenu() {
    if (!expand) {
      setExpand(1);
    } else {
      setExpand(0);
    }
  }
  function toggleLanguageSelect(){
    console.log(languageSelect);
    setLangageSelect(languageSelect ? false : true);
  }
  function hideLanguageSelect(){
    setLangageSelect(false);
  }
  function showLanguageSelect(){
    setLangageSelect(true);
  }
  function handleLangChange(e){
    props.selectLanguage(e.target.id);
    setLangageSelect(false);
  }

  return (
    <nav
      className={`TopNav d-flex flex-row justify-content-between ${
        mobile ? "mobile" : ""
      } ${props.type ? props.type : ""}`}
      id="topNav"
    >
      <div className={"d-flex align-items-center"}>
        <div className={"d-none d-md-flex icon"}>
          <Link to={"/"}>
            <img src={icon} alt={"The Global Warming Express Logo"} />
          </Link>
        </div>

        <div
          className={'langDrop position-relative'}
          onMouseEnter={showLanguageSelect}
          onMouseLeave={hideLanguageSelect}
        >
          <Button
            text={pageText.labels.languages[props.language]}
            class={'current'}
            iconType={languageSelect ? 'upArrow' : 'downArrow' }
            click={toggleLanguageSelect}
          />
          {
            languageSelect ?
              <div className="langButtons d-flex flex-column">

                {
                  props.suppLangs.map( lang =>{
                    return lang !== props.language ?
                      <button id={lang} onClick={handleLangChange}>{pageText.labels.languages[lang]}</button>
                      :null
                  })
                }

              </div>
              :null
          }
        </div>

        {/*}
        <Translate
          language={props.language}
          changeLanguage={props.changeLanguage}
        />
        {*/}

      </div>

      <div className={"d-flex flex-column flex-sm-row"}>
        <div className={"position-relative"}>
          {mobile ? (
            <Button
              text={navText.menu.get(props.language)}
              iconType={!expand ? "downArrow" : "upArrow"}
              click={toggleMenu}
            />
          ) : (
            ""
          )}

          {expand || !mobile ? (
            <div className="navButtons d-flex flex-column flex-md-row">
              {
                mobile ?
                  <NavButton
                    text={navText.home.get(props.language)}
                    link={"/"}
                    linkPage={"splash"}
                    page={props.page}
                  />
                  : null
              }
              <NavButton
                text={navText.guide.get(props.language)}
                link={"/guide"}
                linkPage={"guide"}
                page={props.page}
              />

              <NavButton
                text={navText.sesssions.get(props.language)}
                link={"/map"}
                linkPage={"sessions"}
                page={props.page}
              />

              <NavButton
                text={navText.library.get(props.language)}
                link={"/library"}
                linkPage={"library"}
                page={props.page}
              />

              <NavButton
                text={navText.resources.get(props.language)}
                link={"/resources"}
                linkPage={"resources"}
                page={props.page}
              />

              <NavButton
                text={navText.aboutGWE.get(props.language)}
                link={"/aboutGWE"}
                linkPage={"aboutGWE"}
                page={props.page}
              />
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </nav>
  );
}

export default TopNav;
