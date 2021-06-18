import React from "react";
import { Button } from "../../components/buttons/buttons";

import "./aboutGWE.css";

export function AboutGWE(props) {
  return (
    <div>
      <div className={"aboutGWE"}>
        <h1>About GWE</h1>

        <section>
          <h2>What Is The GWE?</h2>
          <p>
            The Global W.E./Global Warming Express, founded in 2012, is the name
            of an acclaimed Arts and Science Climate Education and Advocacy
            organization and program by the same name, for 9-12 year olds,
            focusing on kids' leadership and community engagement. This free
            program, offered to public schools, has expanded from in Santa Fe,
            NM across the state, and now, across the nation. The GWE
            organization has a Kids' Board of Directors called the Global
            Warming Emergency which makes decisions alongside its regular
            non-profit Board.
          </p>
        </section>

        <section>
          <h3>How Did The GWE begin?</h3>
          <p>
            A nine-year-old girl, Marina Weber-Stevens, founded the GWE after
            she learned about climate change and endangered species in third
            grade. Marina wrote a book called <u>The Global Warming Express</u>{" "}
            to send to President Obama, and she enlisted the help of her
            classmate, Joanna Whysner, to illustrate it. The book made it to
            President Obama and is now read by kids nationwide!{" "}
          </p>
        </section>

        <section>
          <h3>What Does The GWE Do Today?</h3>
          <p>
            Our programming is designed to inspire kids with wonder and
            knowledge, as well as the facility to achieve any goal they define
            and strive towards. Students in each program meet with GWE Mentors
            weekly, to learn science, climate science, resilient solutions,
            public speaking, letter writing, performing arts, visual arts and
            civic engagement. They set and accomplish advocacy, activism,
            resilience and outreach goals for their homes, schools, communities,
            state and beyond. The GWE kids regularly contribute to city, county
            and state-level legislative meetings. Their initiatives have helped
            to create and improve public policy and practices in resilience in
            New Mexico.{" "}
          </p>
        </section>

        <section>
          <p>
            <strong>
              Learn. Dream. Do. Inspire- The Global W.E./Global Warming Express
              kids change the world!
            </strong>
          </p>
        </section>

        <Button
          iconType={"rightArrow"}
          text={"Visit The GWE Website"}
          extLink={`https://theglobalwarmingexpress.org/`}
        />
      </div>
    </div>
  );
}
