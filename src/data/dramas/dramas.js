//React
import React from "react";
import { Link } from "react-router-dom";

// Data Models
import { Drama } from "../model/drama";
import { MultiLingual } from "../model/multiLingual";


export const dramas = {
  photonDrama: new Drama(
    "photonDrama",
    new MultiLingual("Photon / Drama"),
    new MultiLingual(
      "Learn what happens when the earth is covered in greenhouse gases."
    ),
    "",
    new MultiLingual([
      `A globe of the earth`,
      `1 white/transparent cloth (a 3 ft by 4 ft portion of a bedsheet is fine)`,
      `1 kid-sized blanket (3 ft by 4 ft or so)`,
      `More of the same kind of blankets - 1 for every 2 kids in your group)`,
    ]),
    new MultiLingual([
      <div>
        <h2>Blanket and Earth Drama/Exercise</h2>
        <p>
          Get the globe. Let your kids put their hands on it, spin it. <br />
          Ask them where on the globe of the earth they live. (they may know -
          or not) <br />
          Ask them to point out the north pole. Does anyone know another name
          for it? (Arctic) <br />
          Ask them to point out the south pole. Does anyone know another name
          for it? (Antarctica) <br />
          Tell them you have 2 super cool questions– <br />
          Can they point to which pole the Polar Bears live in? <br />
          What about which pole the Penguins live in? <br />
          Discuss. <br />
          What about the Equator? What is that and where is it?
        </p>

        <hr />

        <h2>
          When you are done familiarizing yourselves with the globe of the
          Earth, get out your supplies.
        </h2>
        <p>
          Take the small cloth and ask a student to drape it over the globe.
          Explain that this is a facsimile of the earth’s atmosphere. <br /> Ask
          the students what the atmosphere is. Discuss. <br />
          <br />
          Remind them that, up until about 100 years ago, the atmosphere kept
          our planet just warm enough- not too hot and not too cold. Remind them
          that some people call it the Goldilocks effect. (explain) Tell them
          that without the atmosphere, we would be Super Cold and that even if
          they put 20 sleeping bags over themselves, they would freeze. <br />{" "}
          So, we really need the atmosphere.
        </p>

        <hr />

        <h2>
          However, can anyone guess what happened 100 years ago to start to
          change things?
        </h2>
        <p>
          Discuss the start of industry - the industrial revolution, then the
          start of gas burning engines and coal stoves in homes for heating,
          then the invention of the car. <br />
          You can introduce the terms Greenhouse Gases and Fossil Fuels, but no
          need for a lot of detail -we will get to that.
        </p>

        <hr />

        <h2>
          Now ask a student to remove the “atmosphere” and to replace it with
          the small blanket.
        </h2>
        <p>
          This, you tell them, is what has happened over the past 100 years.
          Instead of a nice thin atmosphere, we now have a thick blanket. <br />
          Why? <br />
          Because all of the greenhouse gases made by the smoke from the burning
          of fossil fuels, have mostly stayed in the atmosphere, we now have a
          thicker blanket.
        </p>

        <p>
          Close your eyes and think about when you are sleeping on a warm,
          spring night. You have a blanket over your sheet. But you start to get
          too hot! What do you do? Open your eyes– <br />
          Yes! You kick off or take off your blanket. <br />
          Well our Earth is now trying to take off the blanket because it’s too
          hot, but Earth doesn’t have any arms or legs! <br />
          How would that feel if you were the Earth? <br />
          Let’s try it! <br />
          Ask for a volunteer. <br />
          Tell the volunteer, once they come over, that you are going to put the
          blanket over their head for the count of 5. <br />
          They can take the blanket off anytime, but we will try to count to 5
          as they have it on. <br />
          Ask if that’s ok. <br />
          Put the blanket over the student’s head and ask everyone to count to
          10. When done you or the student takes off the blanket. <br />
          Ask them to explain how it felt – (stuffy, warm, dark, itchy)
        </p>

        <hr />

        <h2>Now ask the student to try one more time.</h2>
        <p>
          This time, tell them that they will have the blanket on for 10
          seconds. <br />
          Ask if that’s ok. Tell them that this time they cannot take the
          blanket off. <br />
          OK? <br />
          Put the blanket on, everyone counts to 10 together, take the blanket
          off. <br />
          How was that? (The answers might be - really hot! Kind of scary. Too
          stuffy. etc.)
        </p>

        <hr />

        <h2>
          Now divide the group into pairs and let the kids try both versions for
          each other.
        </h2>
        <p>
          One puts the blanket on the other for 5 seconds and then repeats for
          10 seconds. <br />
          Expect some goofing around!
        </p>

        <hr />

        <h2>
          When everyone is done, grab the easel paper and ask a kid or kids to
          scribe.
        </h2>
        <p>
          Ask, "What did that feel like?" And then ask, "What did you learn
          about the Earth from doing that exercise?" <br />
          Tell the students that you all are going to spend a while learning
          more about the Greenhouse Effect, which is not too strong, and causing
          global warming. <br />
          You will also be talking about what can be done and is being done to
          solve it. <br />
          Make sure that all responses get recorded.
        </p>
      </div>,
    ])
  )
};

let dramasArray = [];
for (let drama in dramas) {
  dramasArray.push(dramas[drama]);
}
export { dramasArray };
