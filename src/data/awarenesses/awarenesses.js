//React
import React from "react";
import { Link } from "react-router-dom";

// Data Models
import { Awareness } from "../model/awareness";


import { MultiLingual } from "../model/multiLingual";
import { AwarenessExcerpt } from "../model/dramaCaption";
import { AwarenessVideo } from "../model/dramaVideo";

export const awarenesses = {

  h2oDrama: new Awareness(
    "h2oDrama",
    new MultiLingual(
      "H2O Drama (very short)",
      "Drama H2O (muy corto)",
      "Drame H2O (très court)"
    ),
    new MultiLingual(
      "Explore the creation of water molecules through an interactive drama involving students."
    ),
    "",
    new MultiLingual(
      [
        "Materials needed:, 8-10 inch cut-out letters", "2 Blue capital H’s and 1 White capital O", "Tape or clips or lanyards to attach each letter to one child.",
      ]
    ),
    new MultiLingual(
      [
        <div>
          <h2>H2O Drama (very short)</h2>
          
          <h3>Instructions:</h3>
          <ul>
            <li>Remind students about the conversation about atoms and molecules, which we had in reading the book, My Light. Give a brief explanation of what Hydrogen and Oxygen molecules are.</li>
            <li>The question of the moment is: How is water created?</li>
            <li>The answer is: Two Water molecules join up and bond with one Hydrogen molecule and they remain bonded friends, potentially forever! What would that look like?</li>
            <li>Version One:</li>
            <li>Three student volunteers stand up in the center of the circle, or the front of the classroom. Letters are handed out, with tape, clip or lanyard to allow the children to put them on.</li>
            <li>Instructions given - start traveling around the room (or the school yard area if you are outdoors). You three can move as quickly or slowly as you like. When I clap my hands, you must all join together, in one place, very quickly, and find a way to remain joined (by holding hands, holding elbows, linking your legs, be creative!)</li>
            <li>Once the 3 are joined, you congratulate them - Hydrogens! Oxygen!! You are amazing! You just created WATER! Water is : H2O!!!!!!!!!!</li>
            <li>Once you are joined up, you cannot let go. Now, continue around the room, or yard!</li>
            <li>Version Two:</li>
            <li>You may want to make letters for all of your students, or simply count them off - H, H, O until all of the students know their letter.</li>
            <li>Repeat the same drama, above, with everyone, at the same time! This may require smaller movements, if indoors, or to simply play this outdoors.</li>
          </ul>
        </div>
      ]
    ),
  )
};

console.log(awarenesses.h2oDrama);

let AwarenessesArray = [];

for (let awareness in awarenesses) {
  AwarenessesArray.push(awarenesses[awareness]);
}

console.log(AwarenessesArray)

export { AwarenessesArray };
