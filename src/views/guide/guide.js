import React from "react";
import "./guide.css";
import {guideText} from "./guideText";
import {Button} from "../../components/buttons/buttons";
import pageText from "../../data/pageText";

export function Guide(props) {

  function sectionLinkClickHandler(e){
    let string = e.target.id.slice(7);
    console.log(string);
    let element = document.getElementById(string);
    element.scrollIntoView(true);
  }
  return (
    <div className={"guide container"}>
      <div className={'row'}>
        <div className={'col'}>
          <h1 className={'pageTitle'}>{pageText.pageTitles.guide.get(props.language)}</h1>
        </div>
      </div>
      <div className={"row"}>

        <div className={'col-md-auto guideSections d-flex flex-column align-items-center'}>
            <h2 className={'pageTitle'}>Sections</h2>
            {
              guideText.map(section => {
                return (
                  section.heading ?
                    <button
                      id={`Link - ${section.heading.get(props.language)}`}
                      onClick={sectionLinkClickHandler}
                      className={'sectionButton'}
                    >{section.heading.get(props.language)}</button>
                    : null
                )
              })
            }
        </div>

        <div className={"col-md"}>
          <div className={'pageBody p-2'}>
            {
              guideText.map( section =>{
                return(
                  <section id={section.heading.get(props.language)}>
                    {
                      section.heading ?
                        <h1 className={'sectionHeader'}>{section.heading.get(props.language)}</h1>
                        :null
                    }
                    {
                      section.body.get(props.language).map( paragraph =>{
                        return paragraph
                      })
                    }
                  </section>
                )
              })
            }
            <div className={'d-flex justify-content-center'}>
              <Button text={'Jump Onboard'} link={'/map'} iconType={'rightArrow'} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
