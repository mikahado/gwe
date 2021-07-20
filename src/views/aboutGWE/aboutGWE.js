import React from "react";
import { Button } from "../../components/buttons/buttons";

import "./aboutGWE.css";
import {aboutData, tagline} from "./aboutData";
import pageText from "../../data/pageText";

let parse = require('html-react-parser');

export function AboutGWE(props) {
  return (
    <div>
      <div className={"aboutGWE"}>
        <h1 className={'pageTitle'}>{pageText.pageTitles.aboutGWE.get(props.language)}</h1>

        <div className={'pageBody p-2'}>

          {
            aboutData.map(section =>{
              return(
                <section>
                  <h2 className={'sectionHeader'}>{section.heading.get(props.language)}</h2>
                  <p>{parse(section.text.get(props.language))}</p>
                </section>
            )
            })
          }

          <section>
            <p>
              <strong>
                {tagline.get(props.language)}
              </strong>
            </p>
          </section>

          <div className={'d-flex justify-content-center'}>
            <Button
              iconType={"rightArrow"}
              text={"Visit The GWE Website"}
              extLink={`https://theglobalwarmingexpress.org/`}
            />
          </div>

        </div>

      </div>
    </div>
  );
}
