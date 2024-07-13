//React
import React from "react";
import { Link } from "react-router-dom";

// Data Models
import { Awareness } from "../model/awareness";


import { MultiLingual } from "../model/multiLingual";
import { AwarenessExcerpt } from "../model/dramaCaption";
import { AwarenessVideo } from "../model/dramaVideo";

// possible delete:
import pinwheelInstructions from "./GWE-PinwheelInstructions.pdf";
import pinwheelInstructionsSPA from "./GWE-PinwheelInstructions(ESP).pdf";
import pinwheelInstructionsFRA from "./GWE-PinwheelInstructions(FRA).pdf";
import pizzaBoxInstructions from "./Pizza Box Solar Oven Directions.pdf";
import pizzaBoxInsructionsSPA from "./GWE-PizzaBoxInstrESP.pdf";

import myLight3 from "./MyLight3.jpg";

export const awarenesses = {

  photonDramo: new Awareness(
    "photonDrama",
    new MultiLingual(
      "Photon Drama / Experiment",  
      "Drama de Fotones / Experimento",
      "Expérience de Photon"
    ),
    new MultiLingual(
      "Learn what happens when photons from the sun interact with the Earth."  // Update descriptions
    ),
    "",
    new MultiLingual(
      [
        `A sunny outdoor area or a large indoor space`,  // Update supplies
        `Beanbags or imaginary beanbags`,
        `Props for Sun, Earth, and other characters as needed`,
      ],
      [
        "Un área exterior soleada o un gran espacio interior",
        "Bolsitas de frijoles o bolsitas imaginarias",
        "Accesorios para el Sol, la Tierra y otros personajes según sea necesario",
      ],
      [
        `Un espace extérieur ensoleillé ou un grand espace intérieur`,
        `Des sacs de haricots ou des sacs imaginaires`,
        `Des accessoires pour le Soleil, la Terre et d'autres personnages si nécessaire`,
      ]
    ),
    new MultiLingual(
      [
        <div>
          <h2>Photon Drama Exercise</h2>
          <p>
            This is best played outdoors, as it involves running. If the drama needs to be staged indoors, and you would prefer that the students walk quickly instead of running, that is fine. Part of the idea is for the children to understand the feeling of the momentum created as the photons arrive to earth, hence the speed. Having said that, this drama can be repeated in slow motion, which can be fun and also illuminating for the students. All of the actions by all of the characters may be accompanied by sound or simply be silent—it is up to the students.
          </p>

          <h3>Characters needed</h3>
          <p>
            Ideally, this drama involves 10 or more children, however, it can be done with as few as 5 students, with the Sun doubling as Air or Wind, and with 2 children for each role.
          </p>
          <ul>
            <li>The Sun (1 student)</li>
            <li>Light waves (any number of students)</li>
            <li>The Earth (area of the ground or floor or rug, outlined by the students) which contains:</li>
            <li>Plants (any number, from very small to very large)</li>
            <li>Water (at least 3 students who can decide to be a river, lake, pond, or ocean)</li>
            <li>Air/Wind (at least 3 students)</li>
            <li>Animals, Birds, Insects (any number, including 4-legged, swimming, flying, and crawling (legless) - both underground, on the ground, and above the ground (in the sky, trees))</li>
            <li>People (2 students)</li>
            <li>The Moon (1-4 students)</li>
            <li>Space (any number of students)</li>
          </ul>

          <h3>Props needed</h3>
          <p>
            Beanbags or imaginary beanbags as Photons
          </p>

          <h2>Scene 1</h2>
          <ol>
            <li>The Sun is shining and her/his light is radiating out in all directions, while some of the Light Energy (Photons) are heading to the Earth.</li>
            <li>Action: Sun turns each student (light wave) around 3 times, then sends her/him towards Earth. Each Lightwave is so full of energy from the Photons they carry that they run to the Earth.</li>
            <li>The Earth is full of plants, water, and air/wind.</li>
            <li>The Photons reach the Earth and the plants, water, and wind.</li>
          </ol>
          <p>
            Action: Lightwave students carrying beanbags or imaginary beanbags arrive at each plant, the water, and the air/wind and they give them all of their beanbags, real or imaginary. This causes the plants to grow and grow, the water to flow, and the air to become wind and blow (everyone does their action). At the same time, the Light waves do one of two things: they sink into the Earth or they bounce off of Earth and head out towards Space and the Moon. All students are engaged by now: the Sun is still shining, symbolized by a “shining movement” of their choice. The Light waves are moving into the Earth (lying or sitting on the Earth) or out to space or to the Moon (where the Moon holds them still, in place). The plants, water, and air/wind are taking the Photons and using them to move (grow, flow, or blow).
          </p>
          <p>This is the End of Scene 1</p>

          <h2>Scene 2</h2>
          <p>
            Sun and Light waves get together again. Light waves collect their real or imaginary bean bags. Sun turns each one around and sends them off. Light waves run to the Earth, where assembled on Earth are: Plants, Animals, Insects, Birds, and People. As the Light waves arrive, they go to the plants, the plants grow, and the Animals, Birds, Insects, and People all go to the plants and eat them. Once they eat them, they have more energy and they go off to fly to trees, return back into the ground, run on the ground, rest, or, as People, do any number of things like reading a book, playing outside, cleaning their house, etc.
          </p>
          <p>
            As all of the above are happening, Light waves are either soaking into the Earth or running off to the Moon and into Space.
          </p>
          <p>Scenes 1 and 2 can be repeated, with students changing places as characters.</p>
        </div>,
      ]
    )
  )
};

let AwarenessesArray = [];

for (let awareness in awarenesses) {
  AwarenessesArray.push(awarenesses[awareness]);
}

console.log(AwarenessesArray)

export { AwarenessesArray };
