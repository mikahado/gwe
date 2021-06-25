import React from "react";
import "./guide.css";
import {guideText} from "./guideText";
import { Button } from "../../components/buttons/buttons";

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
          <h1 className={'pageTitle'}>Curriculum Guide for GWE Online Curriculum App</h1>
        </div>
      </div>
      <div className={"row"}>

        <div className={'col-md-auto guideSections d-flex flex-column align-items-center'}>
            <h2 className={'pageTitle'}>Sections</h2>
            {
              guideText.map(section => {
                return (
                  section.heading ?
                    <Button
                      id={`Link - ${section.heading}`}
                      click={sectionLinkClickHandler}
                      class={'sectionButton'}
                      text={section.heading}
                    />
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
                  <section id={section.heading}>
                    {
                      section.heading ?
                        <h1 className={'sectionHeader'}>{section.heading}</h1>
                        :null
                    }
                    {
                      section.body.map( paragraph =>{
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
