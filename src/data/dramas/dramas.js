// React
import React from "react";
import { Link } from "react-router-dom";

// Data Models (Update imports to match Drama)
import { Drama } from "../model/drama"; // Adjust import to Drama
import { MultiLingual } from "../model/multiLingual"; // Adjust imports as needed

export const dramas = {
  photonDrama: new Drama(
    "photonDrama",
    new MultiLingual(
      "Photon Drama", // Update titles for dramas
      "Drama de Fotones",
      "Expérience de Photon"
    ),
    new MultiLingual(
      "Learn what happens when photons from the sun interact with the Earth." // Update descriptions
    ),
    "",
    new MultiLingual(
      [
        `A sunny outdoor area or a large indoor space`, // Update supplies
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
    new MultiLingual([
      <div>
        <h2>Photon Drama Exercise</h2>
        <p>
          This is best played outdoors, as it involves running. If the drama
          needs to be staged indoors, and you would prefer that the students
          walk quickly instead of running, that is fine. Part of the idea is for
          the children to understand the feeling of the momentum created as the
          photons arrive to earth, hence the speed. Having said that, this drama
          can be repeated in slow motion, which can be fun and also illuminating
          for the students. All of the actions by all of the characters may be
          accompanied by sound or simply be silent—it is up to the students.
        </p>

        <h3>Characters needed</h3>
        <p>
          Ideally, this drama involves 10 or more children, however, it can be
          done with as few as 5 students, with the Sun doubling as Air or Wind,
          and with 2 children for each role.
        </p>
        <ul>
          <li>The Sun (1 student)</li>
          <li>Light waves (any number of students)</li>
          <li>
            The Earth (area of the ground or floor or rug, outlined by the
            students) which contains:
          </li>
          <li>Plants (any number, from very small to very large)</li>
          <li>
            Water (at least 3 students who can decide to be a river, lake, pond,
            or ocean)
          </li>
          <li>Air/Wind (at least 3 students)</li>
          <li>
            Animals, Birds, Insects (any number, including 4-legged, swimming,
            flying, and crawling (legless) - both underground, on the ground,
            and above the ground (in the sky, trees))
          </li>
          <li>People (2 students)</li>
          <li>The Moon (1-4 students)</li>
          <li>Space (any number of students)</li>
        </ul>

        <h3>Props needed</h3>
        <p>Beanbags or imaginary beanbags as Photons</p>

        <h2>Scene 1</h2>
        <ol>
          <li>
            The Sun is shining and her/his light is radiating out in all
            directions, while some of the Light Energy (Photons) are heading to
            the Earth.
          </li>
          <li>
            Action: Sun turns each student (light wave) around 3 times, then
            sends her/him towards Earth. Each Lightwave is so full of energy
            from the Photons they carry that they run to the Earth.
          </li>
          <li>The Earth is full of plants, water, and air/wind.</li>
          <li>The Photons reach the Earth and the plants, water, and wind.</li>
        </ol>
        <p>
          Action: Lightwave students carrying beanbags or imaginary beanbags
          arrive at each plant, the water, and the air/wind and they give them
          all of their beanbags, real or imaginary. This causes the plants to
          grow and grow, the water to flow, and the air to become wind and blow
          (everyone does their action). At the same time, the Light waves do one
          of two things: they sink into the Earth or they bounce off of Earth
          and head out towards Space and the Moon. All students are engaged by
          now: the Sun is still shining, symbolized by a “shining movement” of
          their choice. The Light waves are moving into the Earth (lying or
          sitting on the Earth) or out to space or to the Moon (where the Moon
          holds them still, in place). The plants, water, and air/wind are
          taking the Photons and using them to move (grow, flow, or blow).
        </p>
        <p>This is the End of Scene 1</p>

        <h2>Scene 2</h2>
        <p>
          Sun and Light waves get together again. Light waves collect their real
          or imaginary bean bags. Sun turns each one around and sends them off.
          Light waves run to the Earth, where assembled on Earth are: Plants,
          Animals, Insects, Birds, and People. As the Light waves arrive, they
          go to the plants, the plants grow, and the Animals, Birds, Insects,
          and People all go to the plants and eat them. Once they eat them, they
          have more energy and they go off to fly to trees, return back into the
          ground, run on the ground, rest, or, as People, do any number of
          things like reading a book, playing outside, cleaning their house,
          etc.
        </p>
        <p>
          As all of the above are happening, Light waves are either soaking into
          the Earth or running off to the Moon and into Space.
        </p>
        <p>
          Scenes 1 and 2 can be repeated, with students changing places as
          characters.
        </p>
      </div>,
    ])
  ),
  // -------- next lesson goes here
  photosynthesisDance: new Drama(
    "photosynthesisDance",
    new MultiLingual(
      "Photosynthesis Dance",
      "Danza de la Fotosíntesis",
      "Danse de la Photosynthèse"
    ),
    new MultiLingual(
      "Learn how plants create energy through a fun and interactive dance."
    ),
    "",
    new MultiLingual(
      [
        "A space where children can move freely",
        "Optional: Music to accompany the dance",
      ],
      [
        "Un espacio donde los niños puedan moverse libremente",
        "Opcional: Música para acompañar la danza",
      ],
      [
        "Un espace où les enfants peuvent bouger librement",
        "Optionnel: Musique pour accompagner la danse",
      ]
    ),
    new MultiLingual([
      <div>
        <h2>Photosynthesis Dance (by Tiffany Cunningham)</h2>
        <ol>
          <li>Raise one arm to the sun when you say "photo" (light).</li>
          <li>
            As you say "synthesis," take the other arm to circle in front of the
            body (swoosh it to feel the air, representing carbon dioxide gas).
          </li>
          <li>
            As you complete the word, let the circling arm gesture to the ground
            (water through roots) and then raise it up to meet the arm that is
            reaching for the sun.
          </li>
          <li>
            After this, open the arms to the sides to represent the growth and
            life of the plant, explaining that this is how plants produce or
            create energy needed for their life functions.
          </li>
          <li>
            Deep inhale, thanking the plants for the oxygen they release and the
            food we eat.
          </li>
          <li>
            Invite children to try out the movement. They may want to adapt this
            movement or create their own and turn it into a dance.
          </li>
        </ol>
      </div>,
    ])
  ),

  // ------

  photosynthesisDrama: new Drama(
    "photosynthesisDrama",
    new MultiLingual(
      "Photosynthesis Drama!",
      "Drama de la Fotosíntesis!",
      "Drame de la Photosynthèse!"
    ),
    new MultiLingual(
      "Explore the process of photosynthesis through a dramatic presentation involving various characters and props."
    ),
    "",
    new MultiLingual([
      "Drawing of the Sun made of paper with safety pins to attach to shirt of Narrator(s)",
      "Letters H and O and C made of paper with safety pins to attach to shirts of children",
      "Paper or wood or metal straws for plants",
      "Gloves for plants to wear (representing Chlorophyll)",
      "Packets (use the ones from Session 1)",
      "Leaves and stems – real ones if possible, otherwise, made of green paper",
      "Sugar packets (preferably raw sugar packets)",
      "Bucket(s) for holding plants’ props",
      "Sign (can be long mural-length or just a poster board) that says Photosynthesis and is decorated with drawings of flowers and plants",
    ]),
    new MultiLingual([
      <div>
        <h2>Characters:</h2>
        <ul>
          <li>Sun Narrator or Narrators (if you want to share the reading)</li>
          <li>Plants</li>
          <li>Hydrogen - 1</li>
          <li>Oxygen - 2 people, a few groups of them</li>
          <li>Carbon - 1 person, but a few of them</li>
          <li>Sun’s energy (photons)</li>
        </ul>

        <h2>Drama:</h2>

        <p>
          <strong>
            Scene opens with H and O characters lying on the ground.
          </strong>{" "}
          (They have energy packets in their pockets)
        </p>

        <p>
          <strong>Narrator – (on stage right)</strong>
          "All living things, including you, pulse with my light and keep it
          round and round on the Earth. How do you do this? Your secret starts
          with plants. Green plants."
        </p>

        <p>
          Plants arrive on to the stage, carrying straws and gloves, packets and
          sugar packets, leaves and stems in their buckets.
        </p>

        <p>
          <strong>Narrator:</strong>
          "Plants suck up water - H2O - from the Earth."
        </p>

        <p>
          The Plants suck up “water” by having the H and 2 O’s, all rise up
          slowly, in a clump, as the Plants sip from straws. H2Os then stand
          behind Plants, still in a clump.
        </p>

        <p>
          <strong>Narrator:</strong>
          "In daylight, green plants catch my energy with their chlorophyll.
          Then…"
        </p>

        <p>Photons enter from stage left, running in.</p>

        <p>
          The plants put on their chlorophyll gloves as Photons begin to fly
          around the stage. Plants reach out to try to catch the Photons flying
          by, until they finally succeed. Plants hold Photons by the wrists.
        </p>

        <p>
          <strong>Narrator:</strong>
          "KAZAP! Plants use my energy to break apart water - break the H2O into
          H and O2, - hydrogen and oxygen."
        </p>

        <p>
          Plants release the wrists of the Photons, and together, they turn
          around to take the H2O characters, who are still in a clump, and
          carefully separate them. H’s and O’s hand the energy packets to the
          plants. Then, the H’s stand alone and the two O’s stand to one side.
        </p>

        <p>
          <strong>Narrator:</strong>
          "But as plants break apart the water, they trap my energy into little
          packets."
        </p>

        <p>
          <strong>Narrator:</strong>
          "Meanwhile, plants are breathing (Yes, plants breathe!)"
        </p>

        <p>Plants begin to breathe, deeply and loudly.</p>

        <p>
          <strong>Narrator:</strong>
          "They breathe out oxygen (O2) they broke off from the water and they
          breathe in carbon dioxide - CO2 - from the air."
        </p>

        <p>
          Oxygen characters sit in front of Plants, when Plants breathe OUT,
          they rise up and run around the stage, then return to sit in front of
          Plants until they breathe OUT again.
        </p>

        <p>
          As Plants breathe IN, Carbon molecules and more Oxygen molecules
          arrive (from stage right) (they can join wrists, or put arms around
          each others’ shoulders, or find other ways to be “joined”. As a joined
          group, they sit in front of the Plants and, when the Plants breathe
          IN, they rise up, then sit down again, until Plants breathe IN again.
        </p>

        <p>
          Thus, we have Two Oxygens and also a clump (or clumps) of Two Oxygens
          and One Carbon alternately sitting and standing in front of each
          Plant, as Plant breathes. The two Oxygens run away and return with
          each out-breath.
        </p>

        <p>
          <strong>Narrator:</strong>
          "Now Plants use the packets of my energy and the Carbon Dioxide from
          the air to build – CHUNKA CHUNKA CHUNKA … SUGAR!"
        </p>

        <p>
          Plants take the energy packets out of their pockets and the Carbon and
          Oxygen clumps stand up. They take the energy packets and toss them to
          each other, faster and faster, as the Narrator says "CHUNKA CHUNKA
          CHUNKA".
        </p>

        <p>
          When Narrator says “Sugar!” Plants and CO2 group stops tossing energy
          packets (they can just let them fall to the ground), CO2 groups sit
          near the Plants. Plants take Sugar packets out of their pockets and
          hold them up, in Victory, as though they just won a prize (every other
          character claps and Plants bow). Then, Plants pretend to eat the sugar
          and then put the packets back into their pockets, taking out the green
          leaves, which they put on their heads and stems, which they hold in
          their hands.
        </p>

        <p>
          All the molecules still onstage applaud and cheer. They keep cheering
          while Narrator says:
        </p>

        <p>
          <strong>Narrator:</strong>
          "And with this sugar, plants build all their parts. All the leaves and
          stems and juices, all the seeds and fruit and flowers of all the
          plants on earth are built with sugar made from air and water using my
          light energy."
        </p>

        <p>"This is Photosynthesis - making life with Sunlight, my light."</p>

        <p>
          At this moment, 1 or 2 students walk from stage right to left, in
          front of Narrator Sun, with Photosynthesis sign.
        </p>

        <p>
          <strong>Narrator:</strong>
          "This is my gift of Energy to you."
        </p>

        <p>THE END</p>
      </div>,
    ])
  ),

  // -------

  h2oDrama: new Drama(
    "h2oDrama",
    new MultiLingual(
      "H2O Drama",
      "Drama H2O",
      "Drame H2O"
    ),
    new MultiLingual(
      "Explore the creation of water molecules through an interactive drama involving students."
    ),
    "",
    new MultiLingual([
      "Materials needed:, 8-10 inch cut-out letters",
      "2 Blue capital H’s and 1 White capital O",
      "Tape or clips or lanyards to attach each letter to one child.",
    ]),
    new MultiLingual([
      <div>
        <h2>H2O Drama (very short)</h2>

        <h3>Instructions:</h3>
        <ul>
          <li>
            Remind students about the conversation about atoms and molecules,
            which we had in reading the book, My Light. Give a brief explanation
            of what Hydrogen and Oxygen molecules are.
          </li>
          <li>The question of the moment is: How is water created?</li>
          <li>
            The answer is: Two Water molecules join up and bond with one
            Hydrogen molecule and they remain bonded friends, potentially
            forever! What would that look like?
          </li>
          <li>Version One:</li>
          <li>
            Three student volunteers stand up in the center of the circle, or
            the front of the classroom. Letters are handed out, with tape, clip
            or lanyard to allow the children to put them on.
          </li>
          <li>
            Instructions given - start traveling around the room (or the school
            yard area if you are outdoors). You three can move as quickly or
            slowly as you like. When I clap my hands, you must all join
            together, in one place, very quickly, and find a way to remain
            joined (by holding hands, holding elbows, linking your legs, be
            creative!)
          </li>
          <li>
            Once the 3 are joined, you congratulate them - Hydrogens! Oxygen!!
            You are amazing! You just created WATER! Water is : H2O!!!!!!!!!!
          </li>
          <li>
            Once you are joined up, you cannot let go. Now, continue around the
            room, or yard!
          </li>
          <li>Version Two:</li>
          <li>
            You may want to make letters for all of your students, or simply
            count them off - H, H, O until all of the students know their
            letter.
          </li>
          <li>
            Repeat the same drama, above, with everyone, at the same time! This
            may require smaller movements, if indoors, or to simply play this
            outdoors.
          </li>
        </ul>
      </div>,
    ])
  ),

  // ------

  waterCycleDrama: new Drama(
    "waterCycleDrama",
    new MultiLingual(
      "Water Cycle Drama",
      "Drama del Ciclo del Agua",
      "Drame du Cycle de l'Eau"
    ),
    new MultiLingual(
      "Explore the water cycle through an engaging and interactive drama performance."
    ),
    "",
    new MultiLingual(
      [
        "Globe",
        "4 salt and 4 H2O children on the ocean.", 
        "8 atmosphere children surrounding the globe with linked arms.",  
      ],
      [
        "Globo",
        "4 niños de sal y 4 niños de H2O en el océano.",
        "8 niños de la atmósfera rodean el globo con los brazos enlazados.",
      ]
    ),
    new MultiLingual([
      <div>
  <p>Evaporation:</p>
  <ul>
    <li>The H2O children start to RISE UP as they bump into each other.</li>
    <li>The Salts remain below in the ocean.</li>
    <li>The H2Os rise up and float to join</li>
    <li>8 atmosphere children surrounding the globe with linked arms.</li>
    <li>2 H2O children stay with the atmosphere while 2 rise higher into the cold atmosphere.</li>
    <li>Suddenly, the high H2Os are joined by 1 dust particle!</li>
    <li>More dust particles join, making the H2O cloud heavier.</li>
    <li>The cloud moves gently and feels heavier as more atmosphere children join.</li>
    <li>Finally, enough dust particles join to make the cloud FALL DOWN!</li>
    <li>Heavy water droplets fall from the sky.</li>
    <li>All children fall to earth as water.</li>
  </ul>
</div>
    ],
  [<div>
    <p>Evolución:</p>
    <ul>
      <li>Los niños de H2O comienzan a SUBIR mientras chocan entre sí.</li>
      <li>Las sales permanecen abajo en el océano.</li>
      <li>Los H2Os suben y flotan para unirse</li>
      <li>8 niños de la atmósfera rodean el globo con los brazos enlazados.</li>
      <li>2 niños de H2O se quedan con la atmósfera mientras 2 suben más alto hacia la atmósfera fría.</li>
      <li>¡De repente, los H2O altos son acompañados por 1 partícula de polvo!</li>
      <li>Más partículas de polvo se unen, haciendo más pesada la nube de H2O.</li>
      <li>La nube se mueve suavemente y se siente más pesada mientras más niños de la atmósfera se unen.</li>
      <li>¡Finalmente, suficientes partículas de polvo se unen para hacer que la nube CAIGA!</li>
      <li>Gotas pesadas de agua caen del cielo.</li>
      <li>Todos los niños caen a la tierra como agua.</li>
    </ul>
  </div>
  ])
  ),

  // -----
  coalTurbineDrama: new Drama(
    "coalTurbineDrama",
    new MultiLingual("Coal Turbine Drama"),
    new MultiLingual("Creative Drama for My Light-Coal Fired Power Plant."),
    "",
    new MultiLingual([
      "4 children become pieces of coal (4)",
      "8 children become the tunnel for the coal to travel through (8)",
      "4 coal children move through the tunnel",
    ]),
    new MultiLingual([
      <div>
        <h2>
          Creative Drama for My Light-Coal Fired Power Plant (for 16 children)
        </h2>

        <h3>Phase One:</h3>
        <ul>
          <li>4 children become pieces of coal</li>
          <li>8 children become the tunnel for the coal to travel through</li>
          <li>
            4 coal children move through the tunnel and arrive in the:
            <ul>
              <li>
                Fire! (4 others become the fire - all in one clump, jumping up
                and down, fire “burns” the coal children)
              </li>
              <li>
                While the 8 tunnel children become water (H2O) and flow past the
                fire and coal children
              </li>
              <li>
                As the 8 H2O children travel around the room, they become steam
                and rise on their toes to continue to travel
              </li>
              <li>
                While they travel, the 8 other children become a turbine (all
                turning around quickly in place, in a circle)
              </li>
              <li>
                The 8 H2O children move in and out of the turbine and into a
                generator (8 turbine children become a generator - the circle
                becomes all children standing shoulder to shoulder)
              </li>
              <li>
                The 8 H2O children become steam and circulate around the
                generator
              </li>
              <li>
                As the steam children arrive at the generator, the generator and
                the steam dissolve to become: Electricity!
              </li>
            </ul>
          </li>
        </ul>

        <h3>Phase Two:</h3>
        <ul>
          <li>
            All children become electricity, jumping up and down and they move
            forward in a line to Sfe, ABQ, and Las Cruces.
          </li>
        </ul>
      </div>,
    ])
  ),

  damDrama: new Drama(
    "damDrama",
    new MultiLingual("Dam Drama"),
    new MultiLingual("Create a dam with children."),
    "",
    new MultiLingual([
      "4 children become water (H20)",
      "8 children become a dam",
      "4 children become a tunnel",
    ]),
    new MultiLingual([
      <div>
        <h2>Dam Drama (for 16 children)</h2>

        <h3>Phase One:</h3>
        <ul>
          <li>Create a dam with children</li>
          <li>4 children become water (H2O) (4)</li>
          <li>
            8 children become a dam by linking arms while standing in a line
            (12)
          </li>
          <li>H2O children flow toward the dam and are stopped</li>
          <li>H2O children flow backwards to the tunnel (16)</li>
          <li>
            The tunnel is created by 4 children holding their arms out while
            standing in a line that is perpendicular to the dam children
          </li>
          <li>
            H2O children flow through the tunnel children (tunnel children can
            make the tunnel "grow" by moving the first child to become the last,
            etc.) (8)
          </li>
          <li>
            As the H2O children reach the end of the tunnel, the 8 dam children
            become turbines (turning around quickly in place) and the H2O
            children move in and around them while they turn (12)
          </li>
          <li>The 4 H2O children flow from the turbine to the generator</li>
          <li>Generator is created by the 4 tunnel children (12)</li>
          <li>
            The 4 tunnel children become one unit turning around (they stand
            side-by-side in a group and turn as a group, while the H2O children
            surround them and flow the other way) (8)
          </li>
        </ul>

        <h3>Phase Two:</h3>
        <ul>
          <li>Electricity! to be created</li>
          <li>
            8 electricity children flow out of the generator and H2O area, to be
            joined at the end of the line by all other children, creating a long
            line of electricity flowing out to Las Cruces, ABQ, Sfe... (16)
          </li>
        </ul>
      </div>,
    ])
  ),

  myLightWindTurbine: new Drama(
    "myLightWindTurbine",
    new MultiLingual("My Light Wind Turbine"),
    new MultiLingual("Create a wind turbine with children."),
    "",
    new MultiLingual([
      "4 children are warm air",
      "8 children are cool air",
      "4 children are electricity",
    ]),
    new MultiLingual([
      <div>
        <h2>Creative Drama for My Light-Wind Turbine (for 16 children)</h2>

        <h3>Phase One:</h3>
        <ul>
          <li>4 children are warm air - they rise on toes and run (4)</li>
          <li>4 children are cool air - they crawl on knees (4)</li>
          <li>
            All 8 children combine in a clump and move forward as Wind! (8)
          </li>
          <li>
            Wind group approaches 4 children, who become blown by the wind (12)
          </li>
          <li>
            In a moment, the 4 children being blown become wind turbines,
            turning their arms as they turn around and round, while the wind
            children surround them and blow (12)
          </li>
          <li>
            Suddenly, next to the wind turbine, electricity arrives! 4 children
            join outside of the wind turbines and inside the wind children. The
            electricity jumps up and down in place (16)
          </li>
        </ul>

        <h3>Phase Two:</h3>
        <ul>
          <li>
            All children become electricity! - flowing in a jumping up and down
            line out to ABQ, Las Cruces, and SFe
          </li>
        </ul>
      </div>,
    ])
  ),
};

let dramasArray = [];
for (let drama in dramas) {
  dramasArray.push(dramas[drama]);
}

export { dramasArray };
