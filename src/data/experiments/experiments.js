import React from 'react';
import {Link} from 'react-router-dom';

import {Experiment} from "../model/experiment";
import {MultiLingual} from "../model/multiLingual";

import myLight3 from './MyLight3.jpg';
import {ExperimentExcerpt} from "../model/experimentCaption";
import pinwheelInstructions from './GWE-PinwheelInstructions.pdf';
import pizzaBoxInstructions from './Pizza Box Solar Oven Directions.pdf';
import {ExperimentVideo} from "../model/experimentVideo";

export const experiments = {

  blanketExp: new Experiment(
    'blanketExp',
    new MultiLingual(
      'Blanket Drama / Experiment',
      '',
      'Expérience de couverture'
    ),
    new MultiLingual(
      "Learn what happens when the earth is covered in greenhouse gases."
    ),
    '',
    new MultiLingual(
      [
        '1 Bedsheet (or light blanket)',
        '1 heavier blanket',
        'OR: 1 sheet & 1 blanket per student',
        'At least 2 thermometers for measuring room temperature'
      ],
      '',
      [
        `1 drap (ou couverture légère)`,
        `1 couverture plus lourde`,
        `OU: 1 drap & 1 couverture par élève`,
        `Au moins 2 thermomètres pour mesurer la température ambiante`,
]
    ),
    new MultiLingual(
      [
        'Describe how the air around the Earth, called the “atmosphere”, gives the earth a sheet to keep it warm.',
        'Measure the air temperature in your room.  Write it on the white board.',
        'At the same time, cover a child with the bedsheet (or have children cover themselves with sheets) and measure the temperature under the sheet after a few minutes.  Write the bedsheet temperature next to the room temperature.',
        'Explain how if there was no atmosphere, the Earth wouldn’t be warm enough for us to live on.',
        'Now, add the blanket to the sheet over the child and measure the temperature after a few minutes.',
        'Explain that now the atmosphere, the air, is filled with too many bad gases, pollution from factories and cars (and yes, cow burps!) and it’s like having a sheet and a blanket.  It’s getting too warm!  How do we remove a blanket?  That’s what we are trying to solve.'
      ],
      '',
      [
        `Décrivez comment l'air autour de la Terre, appelé 'atmosphère', donne à la Terre une couche pour la garder au chaud.`,
        `Mesurez la température de l'air dans votre pièce. Écrivez-le au tableau blanc.`,
        `Couvrez un enfant avec le drap (ou demandez aux enfants de se couvrir avec des draps) et mesurez la température sous le drap après quelques minutes.`,
        `Écrivez la température du drap à côté de la température de la pièce.`,
        `Expliquez comment s'il n'y avait pas d'atmosphère, la Terre ne serait pas assez chaude pour que nous puissions vivre.`,
        `Maintenant, ajoutez la couverture au drap sur un enfant et mesurez la température après quelques minutes.`,
        `Expliquez que maintenant l'atmosphère, l'air, est remplie de trop de mauvais gaz, de la pollution des usines et des voitures (et oui, des rots de vache !) et c'est comme avoir`, `un drap et une couverture. Il fait trop chaud !`,
        `Comment retirer une couverture? C'est ce que nous essayons de résoudre.`,
      ]
    )
  ),
  //-------------------------------------------------------
  evapExp: new Experiment(
    'evapExp',
    new MultiLingual(
      'Evaporation Experiment',
      '',
      `Expérience d'évaporation`
),
    new MultiLingual(
      "See what the sun's rays do to the Earth's water"
    ),
    '',
    new MultiLingual(
      [
        'Water',
        'Salt',
        'Measuring Spoon',
        'Measuring Cup',
        'Spoon',
        'Shallow dish or pie plate',
        'sunshine'
      ],
      '',
      [
        `L'eau`,
        `Le sel`,
        `Une cuillère à mesurer`,
        `Une tasse à mesurer`,
        `Une cuillère Plat creux ou assiette à tarte`,
        `De l'ensoleillement`,
      ]
    ),
    new MultiLingual(
      [
        'Before experiment:  with children’s input define evaporation. Write children’s definition of evaporation on white board',
        'Describe the following experiment and have children write down what it looks like at the beginning.  Make a drawing of it.  Guess what it will look like at the end and write it down or draw it.',
        'Mix 1 teaspoon of salt with ½ cup warm water.',
        'Pour a tiny bit into a pie plate (clear glass is preferable) so that it just covers the bottom with a thin layer.',  'Place in the sunshine, preferably outside.  If it is windy, weigh with rock or wait for a less windy day.',
        'Check every half hour.',
        'What does it look like after two hours or so?  The water should be gone, but there should be a dusty layer of salt.  Why?  The sun evaporated the water, but left the salt behind.',
        'Advanced option:  include a dish with the same amount of fresh water, preferably distilled water, as an experimental control and have the children predict, draw what will happen. Place next to the salted water outside and observe every time you observe the salted water. If your water is especially hard and you don’t have distilled water, skip this part of the experiment because the minerals in hard water will leave a dust as well.',
      ],
      '',
      [
        `Avant l'expérience: `,
        ` Avec la contribution des enfants, définissez l'évaporation.`,
        ` Écrivez la définition de l'évaporation pour les enfants sur un tableau blanc`,
        ` Décrivez l'expérience suivante et demandez aux enfants d'écrire à quoi elle ressemble au début.`,
        ` Faites-en un dessin.`,
        ` Devinez à quoi cela ressemblera à la fin et écrivez-le ou dessinez-le.`,
        ` Mélanger 1 cuillère à café de sel avec ½ tasse d'eau tiède.`,
        ` Versez un tout petit peu dans une assiette à tarte (le verre clair est préférable) de manière à ce qu'il recouvre juste le fond d'une fine couche.`,
        ` Placer au soleil, de préférence à l'extérieur. S'il y a du vent, pesez avec de la pierre ou attendez un jour moins venteux.`,
        ` Vérifiez toutes les demi-heures. A quoi cela ressemble-t-il au bout de deux heures environ ? L'eau devrait avoir disparu, mais il devrait y avoir une couche poudreuse de sel. Pourquoi? Le soleil a évaporé l'eau, mais a laissé le sel derrière lui.`,
        ` Option avancée:`,
        [
          `Mettez un plat avec la même quantité d'eau douce, de préférence de l'eau distillée, comme témoin expérimental et faire prédire et dessiner par les enfants ce qui va se passer.`,
          `Placez à côté de l'eau salée à l'extérieur et observez chaque fois que vous observez l'eau salée. (Si l'eau est particulièrement dure et que vous n'avez pas d'eau distillée, omettez cette partie de l'expérience car les minéraux contenus dans l'eau dure laisseront également une couche poudreuse.)`,
        ]
]
    ),
    '',
    new ExperimentExcerpt(
      myLight3,
      new MultiLingual(
        'In <u>My Light</u>, on the third (including title page) two-page spread, the right-hand page text says:  Each day I warm your land and water.  Tiny drops of warm water rise and form clouds.  This is a simplified picture and description of evaporation.',
        '',
        `Dans le livre, <u>Ma lumière</u>, sur la troisième page de double page (y compris la page de titre), le texte de la page de droite dit : ''Chaque jour, je réchauffe votre terre et votre eau. De minuscules gouttes d'eau chaude montent et forment des nuages.'' Ceci est une image simplifiée et une description de l'évaporation. `
      )
    )
  ),
  //-------------------------------------------------------
  cloudExp: new Experiment(
    'cloudExp',
    new MultiLingual(
      'Cloud Experiment',
      '',
      `Expérience d'un nuage`
    ),
    new MultiLingual(
      'Learn how clouds are formed'
    ),
    '',
    new MultiLingual(
      [
        '12oz jar with lid',
        'water',
        'some way to make water hot',
        'ice',
        'matches'
      ],
      '',
      [
        `un pot de 360 ml. avec couvercle`,
        `de l'eau`,
        `un moyen de faire de l'eau chaude`,
        `de la glace`,
        `des allumettes`,
      ]
    ),
    new MultiLingual(
      [
        'This experiment will help the children understand the process of making clouds in a little more detail.',
        'By GWE Mentor Beverly Williams, also known as The Brainiac Baroness--how clouds are made',
      ],
      '',
      ['Regardez le vidéo - (c\'est en anglais).']
    ),
    [
      new ExperimentVideo(
        "https://www.youtube.com/embed/wBW6q41gB_M?hl=en&amp;cc_lang_pref=en&amp;cc_load_policy=1&amp;cc=1",
        new MultiLingual(
          'Making Clouds'
        ),
        [
          `Welcome to today’s episode of Think with the Brainiac Baroness with me, Beverly Williams, the Brainiac Baroness. Today we will consider how are clouds made?`,
          `White, puffy clouds. How are they made? In Molly Bang’s book, <u>My Light</u>, the sun explains that it is her radiance which warms the land and water. The caption for this picture says, “Tiny drops of warm water rise and form clouds.” The energy of the sun shines on the water and turns it into water vapor which rises to the sky. What is that called when the water is turned to water vapor by the sun? If you guessed evaporation, you would be correct. What happens to the water vapor as it rises into the sky to turn into clouds? Hmmm...that’s a little harder. Let’s try to understand it this way. What is the tallest mountain you can think of? Well, let’s talk about Mount McKinley in Alaska. The peak is about four miles above sea level. When you get to the top of that mountain will you be hotter or colder than you were at the base of the mountain? Yes, that’s right, you would be colder. That’s because you are four miles higher. Let’s get back to water vapor as it rises into the air above the earth. Will it also get colder? Yes, it will. Is that what turns it into a cloud? Let’s watch this demonstration and find out.`,
          'I have two sixteen ounce canning jars, but any jar of any size would do. I have a cup of hot water and a bowl filled with ice. If you’re doing the demonstration with me at home, have an adult help you with the hot water. It doesn’t need to be boiling, but it should be hotter than you want to touch. Feel free to use a hot pot mitt to protect yourself from burns. I also have a box of matches, which you also need an adult to help you with. Fill both jars about a quarter of the way with water. Let’s make them even just for fun. The picture in Molly Bang’s My Light book helps us guess that if we cool the water vapor coming from the hot water, a cloud should form. So, let’s put ice in the lid so that we can cool the water vapor coming from the hot water. Let’s wait a little bit to see if a cloud forms. Is a cloud forming? What? No cloud? Hmmm.... What’s happening? In fact we are missing a key part to what happens in the sky to make clouds. Do you know what that is? If you guessed dust you would be correct. There are tiny bits of dust in the air all the time all around us. You can even see the dust sometimes floating in a shaft of light as that light comes into your house. Let’s light a match over the other jar to make some more dust in it. We’ll just drop a match in there and then we don’t have to worry about it. And then we’ll cool that jar of water with the lid filled with ice. Do we have a cloud forming in the jar with the dust from the match? It sure looks cloudier than the first jar. I think a cloud formed almost immediately. Let’s lift the lid off and see the cloud float to the sky. Can you see that?',
          'Clouds are made when tiny bits of water vapor condense, that is, get cold enough to turn back into water, on a slightly bigger piece of dust. That piece of dust is still so small that you and I can’t see it. That piece of dust is called an aerosol.',
          `And now you know how clouds are made. Thanks for taking the time to think with the Brainiac Baroness.`
        ]
      )
    ],
    new ExperimentExcerpt(
      `${process.env.PUBLIC_URL}/assets/book/myLight/pages/3.jpg`,
      new MultiLingual(
        'In <u>My Light</u>, on the third (including title page) two-page spread, the right-hand page text says:  Each day I warm your land and water.  Tiny drops of warm water rise and form clouds.  This is a simplified picture and description of cloud formation.',
        '',
        `Dans <u>Ma lumière</u>, sur la troisième page de double page (y compris la page de titre), le texte de la page de droite dit: <i>''Chaque jour, je réchauffe votre terre et votre eau. De minuscules gouttes d'eau chaude montent et forment des nuages.''</i> Il s'agit d'une image et d'une description simplifiées de la formation des nuages.`
      )
    )
  ),
  //-------------------------------------------------------
  pinwheelExp: new Experiment(
    'pinwheelExp',
    new MultiLingual(
      'Expérience de moulinet'
    ),
    new MultiLingual(
      'Build a miniature turbine'
    ),
    '',
    [
      new MultiLingual(
        [
          'Milk jug',
          'scissors',
          'ruler',
          'hole punch',
          'sharpie',
          'bamboo skewer with point',
          'tape',
          'scrap paper'
        ],
        '',
        [
          `Pot à lait`,
          `des ciseaux`,
          `une règle`,
          `une perforatrice`,
          `un sharpie`,
          `une brochette de bambou avec pointe`,
          `du papier brouillon`
        ]
      ),
      new MultiLingual(
        [
          'Pre-cut and pre-hole-punched plastic square from milk jug with drawn diagonal lines',
          'Bamboo skewer with point',
          'Scissors'
        ],
        '',
        [
          `Un carré en plastique prédécoupé et prépercé`,
          `avec des lignes diagonales dessinées`,
          `Une brochette de bambou avec pointe`,
          `Des ciseaux`
        ]
      )
    ],
    new MultiLingual(
      [
        'Pinwheels are like little turbines. Once children have made them, they can try them out in “wind” by blowing on them or running while holding them, outside, or creating a “turbine field” outside the classroom.',
        'Then, you can have them place them under running water to simulate a turbine in a hydroelectric dam.',
        'For detailed instructions on building the pinwheels, click the "Open PDF" button below'
      ],
      '',
      [
        'Les moulins à vent sont comme de petites turbines.',
        `Une fois que les enfants les ont fabriqués, ils peuvent les essayer dans le  ''vent'' en soufflant dessus ou en courant tout en les tenant, à l'extérieur, ou en créant un ''champ de turbines'' à l'extérieur de la classe.`,
        `Ensuite, vous pouvez leur demander de les placer sous l'eau courante pour simuler une turbine dans un barrage hydroélectrique.`,
      ]
    ),
    '',
    [
      new ExperimentExcerpt(
        `${process.env.PUBLIC_URL}/assets/book/myLight/pages/5.jpg`,
        new MultiLingual(
          'In <u>My Light</u>, on the fifth (including title page) two-page spread, the left-hand page talks about a dam and turbines and the right-hand page shows a picture of the turbine.',
          '',
          `Dans le livre, <u>Ma lumiére</u>, sur la cinquième page de double page (y compris la page de titre), la page de gauche décrit un barrage et de turbines et la page de droite montre une image de la turbine.`
        )
      ),
      new ExperimentExcerpt(
        `${process.env.PUBLIC_URL}/assets/book/myLight/pages/7.jpg`,
        new MultiLingual(
          'The seventh two-page spread describes and shows wind turbines.',
          '',
          `La septième page de double page décrit et montre les éoliennes.`
        )
      ),
      new ExperimentExcerpt(
        `${process.env.PUBLIC_URL}/assets/book/myLight/pages/11.jpg`,
        new MultiLingual(
          'The eleventh two-page spread describes and shows the turbines pushed by the steam made by heating water at coal-burning power plants.',
          '',
          `La onzième page de double page décrit et montre les turbines poussées par la vapeur produite par le chauffage de l'eau dans les centrales électriques au charbon.`
        )
      ),
    ],
    pinwheelInstructions
  ),
  //-------------------------------------------------------
  heartbeatExp: new Experiment(
    'heartbeatExp',
    new MultiLingual('Heartbeat Experiment'),
    new MultiLingual('Learn your heartbeats per minute'),
    '',
    new MultiLingual(
      [
        'Stopwatch (or a stopwatch on a cellphone)'
      ],
      '',
      [
        `Un chronomètre (ou un chronomètre sur un téléphone portable)-`
      ]
    ),
    new MultiLingual(
      [
        'How fast does your heart beat?',
        'Instruct the children to find their heartbeat using any finger but the thumb at the jugular vein on their neck or on their wrist.',
        'Have them count the number of beats for 15 seconds.',
        'Have them multiply by four to find their beats per minute.'
      ],
      '',
      [
        `À quelle vitesse votre cœur bat-il?`,
        `Demandez aux enfants de trouver leur rythme cardiaque en utilisant n'importe quel doigt, sauf le pouce au niveau de la veine jugulaire de leur cou ou de leur poignet. (Tournez votre main comme si vous alliez serrer la main. Suivez une ligne droite à partir de votre pouce jusqu'à ce que vous sentiez un endroit où il y a un petit creux. Vous sentirez votre cœur battre un peu plus fort ici.)`,
        `Demandez-leur de compter le nombre de battements pendant 15 secondes.`,
        `Demandez-leur de multiplier par quatre pour trouver les battements par minute.`,
      ]
    ),
    '',
    new ExperimentExcerpt(
      `${process.env.PUBLIC_URL}/assets/book/livingSunlight/pages/2.jpg`,
      new MultiLingual(
        'In <u>Living Sunlight</u>, on the second (including title page) two-page spread, the right-hand page talks about feeling your heart.',
        '',
        `Dans le livre La lumière vivante du soleil, sur la deuxième page de double page (y compris la page de titre), la page de droite parle de ressentir votre cœur.`
      )
    )

  ),
  //-------------------------------------------------------
  breathHoldExp: new Experiment(
    'breathHoldExp',
    new MultiLingual(
      'Breath Holding Experiment'
    ),
    new MultiLingual(
      'Learn why you need to breath'
    ),
    '',
    new MultiLingual(
      [
        'Stopwatch (or a stopwatch on a cellphone'
      ]
    ),
    new MultiLingual(
      [
        'How long can you hold your breath?',
        'Try holding your breath.',
        'What’s the longest you can hold your breath?  Time it!',
        'What does it feel like?  How does it feel to breathe again?',
        'Why can’t you hold your breath longer?  That’s because you need oxygen from plants to live.  Some of what you breathe out, that is, exhale, is carbon dioxide (Living Sunlight, on the thirteenth two-page spread).  Plants use that to make the oxygen you breathe in!'
      ]
    ),
    '',
    new ExperimentExcerpt(
      `${process.env.PUBLIC_URL}/assets/book/livingSunlight/pages/12.jpg`,
      new MultiLingual(
        'In <u>Living Sunlight</u>, on the twelfth (including title page) two-page spread describes breathing in the oxygen plants make.'
      )
    )

  ),
  //-------------------------------------------------------
  countBreathExp: new Experiment(
    'countBreathExp',
    new MultiLingual(
      'Breath Counting Experiment'
    ),
    new MultiLingual(
      'Learn how exercising uses more energy'
    ),
    '',
    new MultiLingual(
      [
        'Stopwatch (or a stopwatch on a cell phone)'
      ]
    ),
    new MultiLingual(
      [
        'How many breaths do you take and how fast does your heart beat at rest?  How many breaths do you take and how fast does your heart beat after doing jumping jacks for one minute?',
        'Let’s measure your energy in a simple way by measuring how many breaths you take in 30 seconds. Use that same stopwatch to count how many breaths you take while sitting still (don’t hold your breath this time).',
        'Now do one full minute of running in place, or better yet, jumping jacks.',
        'When the minute of exercise is done, count your breaths for 30 seconds and compare with your resting number. It should be way more.',
        'That’s because it takes more energy to exercise than to rest.  The food you eat gives your body energy to exercise, rest and even grow!',
        'Repeat by measuring your heart rate for 15 seconds at rest and after one minute of exercise.'
      ]
    ),
    '',
    [
      new ExperimentExcerpt(
        `${process.env.PUBLIC_URL}/assets/book/livingSunlight/pages/10.jpg`,
        new MultiLingual(
          '<u>Living Sunlight</u>, on the tenth (including title page) two-page spread, talks about how animals get their energy from the plants they eat.  Everything you do takes energy from food, even resting!'
        )
      ),
      new ExperimentExcerpt(
        [
          `${process.env.PUBLIC_URL}/assets/book/livingSunlight/pages/11.jpg`,
          `${process.env.PUBLIC_URL}/assets/book/livingSunlight/pages/12.jpg`
        ],
        new MultiLingual(
          'The eleventh and twelfth two-page spread explains that your body uses oxygen to turn those plant sugars into the energy you use to move.'
        )
      )
    ]
  ),
  //-------------------------------------------------------
  photoSynthDramaExp: new Experiment(
    'photoSynthDramaExp',
    new MultiLingual(
      'Photosynthesis Drama'
    ),
    new MultiLingual(
      'Learn the process of photosynthesis'
    ),
    '',
    new MultiLingual(
      [
        'Sun: yellow hat (can be a yellow piece of paper or a drawing of sun)',
        'rain/water: blue hat (can be a blue piece of paper or a drawing of water drops)',
        'Cloud: chef’s hat (can be a white piece of paper or a drawing of clouds)',
        'Soil: poop emoji hat (can be a brown piece of paper or a drawing of poop emoji)',
        'CO2: black headband (can be a black piece of paper or CO2 and carbon dioxide, written on a paper)',
        'O2: gold headband (can be a purple piece of paper or O2 and oxygen written on a paper)',
        'Chlorophyll: green hat (can be a green piece of paper)',
        'Plant: magic fake plant (can be a piece of paper with a plant drawn on it)'
      ]
    ),
    new MultiLingual(
      [
        'After reading this to the children, help them understand it by having them act it out!',
        'Possible questions to ask before drama:',
        [
          'What happens when plants grow?  Possible answers include:',
          [
            'Seed in dirt plus water and sun (and carbon dioxide, CO2, and chlorophyll) equals',
            'Plant growth as a result of...',
            'Photosynthesis',
            'Makes glucose (more plant) and oxygen (O2)'
          ],
          'Get to “photosynthesis”--try to have children define it and work it to best definition with many steps',
          'Talk about where we get CO2 (carbon dioxide)?  It’s in the air because we breathe it out and it is made (a byproduct of incomplete combustion, that is burning) when we burn coal, wood, and gas.',
        ],
        'Let’s act out those steps with different children acting out the different parts of photosynthesis',
        [
          'Can start with baby plant instead of seed',
          'Fun if different pieces had different voices',
          'The plant can say what she needs (soil, sun, water/rain, CO2, chlorophyll which makes the plant green)',
          'What does the plant make with all these pieces:',
          [
            'glucose, that is, sugar (more plant which means growth and yummy food for us), and',
            'oxygen (O2)'
          ]
        ]
      ]
    ),
    '',
    [
      new ExperimentExcerpt(
        `${process.env.PUBLIC_URL}/assets/book/livingSunlight/pages/6.jpg`,
        new MultiLingual(
          '<u>Living Sunlight</u>, on the sixth, seventh, and eighth (including title page) two-page spreads pictures and describes photosynthesis.',
        )
      ),
      new ExperimentExcerpt(
        [
          `${process.env.PUBLIC_URL}/assets/book/livingSunlight/pages/7.jpg`,
          `${process.env.PUBLIC_URL}/assets/book/livingSunlight/pages/8.jpg`
        ]
      )
    ]
  ),
  //-------------------------------------------------------
  squashPlantsExp: new Experiment(
    'squashPlantsExp',
    new MultiLingual(
      'Squashed Plants Experiment'
    ),
    new MultiLingual(
      'Learn where fossil fuels come from'
    ),
    '',
    new MultiLingual(
      [
        'leaves',
        'dead leaves',
        'orange peels',
        'bricks (or large rocks)'
      ]
    ),
    new MultiLingual(
      [
        'Have the children try this in groups of 2-4.',
        'Give the children organic material (leaves, orange and apple peels, etc.) with the instruction to make a clump of plant (compost) material.',
        'What happens if the clump is covered by the weight of more and more compost?',
        'Give each group a brick. Have children gently press the brick on the clump of plant material. Take turns pressing as hard as they can for five minutes.',
        'Remove brick.  What does the plant material look like now?',
        'Discuss:  How hard and for how long would you have to press the plant material to make coal, oil, or gas?'
      ]
    ),
    '',
    new ExperimentExcerpt(
      `${process.env.PUBLIC_URL}/assets/book/buriedSunlight/pages/9.jpg`,
      new MultiLingual(
        'On the ninth two-page spread <u>Buried Sunlight</u> pictures and describes how plant matter piled up and got squashed to make fossil fuels.'
      )
    )
  ),
  //-------------------------------------------------------
  carGreenhouseExp: new Experiment(
    'carGreenhouseExp',
    new MultiLingual(
      'Car Greenhouse Experiment'
    ),
    new MultiLingual(
      'Learn how a greenhouse works'
    ),
    '',
    new MultiLingual(
      [
        'thermometer (2 thermometers are better)',
        'car or greenhouse'
      ]
    ),
    new MultiLingual(
      [
        'Timeframe: the entire class! It is best to set up this experiment at the beginning of your class and check at the end of your class. If you can run this experiment all day, then check at regular intervals, such as every half-hour or hour throughout your day.',
        'Discuss whether any of the children have ever heard of or seen a greenhouse.  Have them describe it for the other children. Guide them to describe what is happening in a greenhouse (and by extension what is happening on Earth with its atmosphere) to make it warm.',
        'A greenhouse is a house with glass walls and ceiling.  The glass lets most of the sunshine in. Some of the sunshine is absorbed by the plants and soil and some is reflected by the plants and soil back toward the glass. When the sunshine tries to get out through the glass, some of it gets reflected back toward the soil again, trapping it and its heat.  This makes the inside of a greenhouse hotter than outside. The same thing happens with a car that has been left out in the sun for a few hours.  Because the windows let the sun in, but trap the sun, the inside of the car will be hotter than outside.',
        'Use a thermometer to test this out:',
        'If your family has a car, have the owner park car in sun in the morning, preferably away from any shade.',
        'Place thermometer inside car, taped to the headrest of the driver\'s seat.',
        'Place another thermometer taped to a stick next to the car',
        'Optional: place an ice cube in a cup (or a chocolate bar in its wrapper, or a piece of cheese on a plate, or cut, fresh flowers) near each thermometer',
        'Write down the time and the temperature reading of both thermometers on a piece of paper',
        'Over the course of a few hours, visit the car once per half-hour or hour and write down the temperature reading of both thermometers next to the time of day.  (If you put an ice cube near the thermometers, note what happened to it when you read the temperature and write that down, too.)',
        'This is like our Earth. The air around the Earth, called the atmosphere, lets the sunshine in. Some of that sunshine is absorbed by the Earth and some is reflected back toward the atmosphere. When the reflected sunshine tries to get out of the atmosphere, some of it gets trapped by being reflected back to the Earth by the atmosphere. That makes the earth just warm enough. When the atmosphere gets too many of the types of gases that trap sunshine, it gets too warm. Gases that make the earth too warm are carbon dioxide (CO2) and methane (CH4). Our car and factory exhaust, called pollution, are made of these gases.'
      ]
    ),
    '',
    new ExperimentExcerpt(
      `${process.env.PUBLIC_URL}/assets/book/buriedSunlight/pages/13.jpg`,
      new MultiLingual(
        'What is a greenhouse?  On the thirteenth (including title page) two-page spread, <u>Buried Sunlight</u>  pictures and describes how the air around the Earth (called the blanket of gases around the Earth, or the atmosphere) helps control the Earth’s temperature.  A greenhouse does the same thing to grow food all year round rather than just during the summer (or growing seasons of your area).'
      )
    )
  ),
  //-------------------------------------------------------
  pizzaBoxExp: new Experiment(
    'pizzaBoxExp',
    new MultiLingual(
      'Pizza Box Solar Oven Experiment'
    ),
    new MultiLingual(
      'Learn how the sun\'s rays work'
    ),
    '',
    '',
    new MultiLingual(
      [
        'Using the sun’s energy for good! Make a pizza box solar oven to use the greenhouse effect to heat marshmallows.',
        'See the videos below, or see included PDF instructions'
      ]
    ),
    [
      new ExperimentVideo(
        "https://www.youtube.com/embed/QrUCkS5682I",
        new MultiLingual(
          'Instructions for teachers to make the kits:',
        )
      ),
      new ExperimentVideo(
        "https://www.youtube.com/embed/iXHvWVvaguI",
        new MultiLingual(
          'Instructions for children to make the solar oven from the pizza box kits:'
        )
      )
    ],
    '',
    pizzaBoxInstructions
  ),
  //-------------------------------------------------------
  golfBallExp: new Experiment(
    'golfBallExp',
    new MultiLingual(
      'Earth\'s Water Experiment'
    ),
    new MultiLingual(
      'Learn about the earth\'s salt water and fresh water'
    ),
    '',
    new MultiLingual(
      [
        'standard globe (about 12 inches diameter)',
        'several golfballs',
        'several blue marbles',
        'several tiny beads (the size of tiny seeds and small seeds can be used as a substitute)'
      ]
    ),
    new MultiLingual(
      [
        'To help the children to understand this better (and show the approximate ratio of earth to water to freshwater), do the following activities:',
        [
          'Have a standard globe (about 12 inches diameter)',
          'Have several golf balls and several blue marbles and several tiny beads (the size of tiny seeds and small seeds can be used as a substitute)',
          [
            'Golf ball represents available water (mostly salty water in oceans)',
            'Blue marble represents fresh water (mostly locked in ice at the poles)',
            'Tiny beads (seeds) represent fresh water available to us'
          ]
        ]
      ]
    ),
    '',
    new ExperimentExcerpt(
      `${process.env.PUBLIC_URL}/assets/book/riversOfSunlight/pages/3.jpg`,
      new MultiLingual(
        'In <u>Rivers of Sunlight</u>, on the third (including title page) two-page spread, the text describes the amount of water available to us as salt water and as fresh water.'
      )
    )
  ),
  //-------------------------------------------------------
  waterCycleDramaExp: new Experiment(
    'waterCycleDramaExp',
    new MultiLingual(
      'Water Cycle Drama'
    ),
    new MultiLingual(
      'Learn about the water cycle'
    ),
    '',
    new MultiLingual(
      [
        'Sun: yellow hat (can be a yellow piece of paper or a drawing of sun)',
        'Ocean water:  blue ribbon (or waves drawn on a piece of paper)',
        'Water vapor:  white/silver ribbon (or white tissue paper or regular paper cut in strips leaving 2 inches at one end to hold)',
        'Cloud: chef’s hat (can be a white piece of paper or a drawing of clouds)',
        'Rain: blue hat (can be a blue piece of paper or a drawing of water drops)'
      ]
    ),
    new MultiLingual(
      [
        'Discuss and act out the water cycle--see description above',
        [
          'Act out water cycle (sunlight, water as ocean, water vapor, clouds, rain)',
          [
            'Sun: yellow hat (can be a yellow piece of paper or a drawing of sun):  lifts water from the salty sea through evaporation',
            'Ocean water:  blue ribbon (or waves drawn on a piece of paper)',
            'Water vapor:  white/silver ribbon (or white tissue paper or regular paper cut in strips leaving 2 inches at one end to hold).  Evaporated sea water (or any water) turns into water vapor, a gas which floats up into the sky',
            'Cloud: chef’s hat (can be a white piece of paper or a drawing of clouds).  When water vapor floats up into the sky, it cools around specks of dust to make clouds.',
            'Rain: blue hat (can be a blue piece of paper or a drawing of water drops).  When enough water vapor cools around specks of dust in the clouds, it makes water droplets which fall to the Earth as rain (or snow if cold).',
          ],
          'Teachers draw water cycle with help from children--children can draw, too!'
        ]

      ]
    ),
    '',
    [
      new ExperimentExcerpt(
        `${process.env.PUBLIC_URL}/assets/book/riversOfSunlight/pages/4.jpg`,
        new MultiLingual("<u>Rivers of Sunlight</u>'s description of the water cycle - starts on the fourth (including title page) two-page spread of <u>Rivers of Sunlight</u> and goes to the seventh two-page spread")
      ),
      new ExperimentExcerpt(
        [
          `${process.env.PUBLIC_URL}/assets/book/riversOfSunlight/pages/5.jpg`,
          `${process.env.PUBLIC_URL}/assets/book/riversOfSunlight/pages/6.jpg`
        ]
      ),
      new ExperimentExcerpt(
        [
          `${process.env.PUBLIC_URL}/assets/book/riversOfSunlight/pages/7.jpg`,
        ]
      )
    ]
  ),
  //-------------------------------------------------------
  waterMathExp: new Experiment(
    'waterMathExp',
    new MultiLingual(
      'Water Math'
    ),
    new MultiLingual(
      'Learn how much water you use'
    ),
    '',
    '',
    new MultiLingual(
      [
        'How much water do you use?  Math time!  This uses average water usage of various typical activities (for example:  low flow toilet uses 1.5-2 gallons, normal uses 5 gallons, I assume 3 gallons per flush)',
        [
          'How many times do you flush a toilet during the day?  Multiply number by 3.',
          'How many times do you brush your teeth and leave the water running?  Multiply number by 2.',
          'How many times a day do you brush your teeth and NOT leave the water running?  Multiply number by 1/2.',
          'How many minutes a day do you shower? (Help children figure this out if they don’t shower daily.)  Multiply number by 2.',
          'How many times a day do you wash your hands?  Multiply number by 1.',
          'Laundry.  Let’s assume clothes washed once per week with an average (between standard and high efficiency) machine:  add 4 gallons a day to your total',
          'kitchen/cooking:  someone is washing and cooking food and cleaning the dishes which all use water.  Add 8 gallons per day to your total.',
          'Add all the numbers together for student’s average daily water use',
          'Brainstorm how this water use can be reduced.  20% water waste is leakage in the house.  Low flow toilets, low flow faucets, don’t let water run, don’t flush toilet if you don’t “need” to (no flushing for trash, “If yellow, be mellow.  If brown flush it down.”), use “gray” water from kitchen for your plants.  Discuss what gray water is and how it can be used.'
        ]
      ]
    )
  ),
  //-------------------------------------------------------
  waterReqExp: new Experiment(
    'waterReqExp',
    new MultiLingual(
      'Water Requirements'
    ),
    new MultiLingual(
      'Eye-opening water requirements for everyday items'
    ),
    '',
    '',
    new MultiLingual(
      [
        'Eye-opening water requirements for some of the things you might be wearing/eating/using right now (estimates vary--you get the idea).  Have your children brainstorm what water is needed to make each item and why.',
        [
          'One pair of shoes: 2,257 gallons',
          'One pair of jeans: 2,636 gallons',
          'One cotton T-shirt:  713 gallons',
          'One chocolate bar: 454 gallons',
          'One piece of beef: 4,000 gallons',
          'One hamburger: 632 gallons',
          'One plain-cheese pizza: 321 gallons',
          'One slice of cheese: 40 gallons',
          'One pint of beer: 45 gallons',
          'One cup of coffee: 35 gallons',
          'One apple: 22 gallons',
          'One loaf of bread: 13 gallons',
          'One sheet of paper: 3 gallons',
          'One cell phone:  240 gallons',
          'One gallon of gasoline: 13 gallons',
          'One car:  39,090 gallons'
        ]
      ]
    )
  ),
  //-------------------------------------------------------
  dirtyWaterExp: new Experiment(
    'dirtyWaterExp',
    new MultiLingual(
      'Dirty Water Experiment'
    ),
    new MultiLingual(
      'Learn how water gets dirty'
    ),
    '',
    new MultiLingual(
      [
        '3 clear pitchers',
        '1 tablespoon of dirt',
        '1 tablespoon of salt',
      ]
    ),
    new MultiLingual(
      [
        'Have three clear pitchers--with children watching, fill with water (or have children fill) and place on floor/table in front of them',
        [
          'Place one tablespoon of dirt in one pitcher',
          'Place one tablespoon of salt in next pitcher',
          'Leave third pitcher pure water',
          'Offer a drink to the children and ask which pitcher to pour from.',
          'Then, while drinking ask why they chose that water',
          'How does water get dirty? ',
          [
            <Link to={'/read/book/globalWarmingExpress/page=70'}>Read <u>The Global Warming Express</u>, by Marina Weber chapter entitled The Tar Sands.</Link>,
            <Link to={'/read/book/globalWarmingExpress/page=87'}>Read <u>The Global Warming Express</u>, by Marina Weber chapter entitled The Gulf Coast.</Link>,
            <Link to={'/read/book/globalWarmingExpress/page=95'}>Read <u>The Global Warming Express</u>, by Marina Weber chapter entitled Acorn Creek.</Link>,
          ]
        ],
        'Where do we get our water?  Rivers and aquifers.',
        'Water needs to be clean to drink.',
        [
          'What is in it that we need to clean out?  Make a list',
          'How do we clean it?',
          [
            'This could be expanded with a visit to a water treatment plant ',
            'This could be expanded with discussion'
          ]
        ]
      ]
    )
  ),
  //-------------------------------------------------------
  conveyorBeltExp: new Experiment(
    'conveyorBeltExp',
    new MultiLingual(
      'Water Conveyor Belt Experiment'
    ),
    new MultiLingual(
      'Learn about water currents'
    ),
    '',
    new MultiLingual(
      [
        'Clear gallon container with wide mouth (MUST be clear)',
        'Room temperature water',
        'Empty travel shampoo container',
        'Ice cube tray or four dixie cups',
        'Red and blue food coloring',
        'Method of heating a small amount of water',
        'Way to freeze water into ice'
      ]
    ),
    new MultiLingual(
      [
        'Timeframe: this experiment requires freezing water into ice cubes. Advanced preparation required.',
        'Fill four ice cubes in an ice cube tray with water (or four dixie cups halfway with water)',
        'Make water blue with ten-twenty drops of blue food dye',
        'Freeze overnight',
        'Fill clear gallon container with water and let sit for a few hours to get it to room temperature',
        'Fill travel shampoo container with hot water (or cold water and microwave it for 30 seconds or so until hot, but not too hot to handle)',
        'Make hot water red with ten-twenty drops of red food dye',
        'Place blue ice cubes in clear gallon container filled with room temperature water',
        'Place shampoo container (without lid) filled with hot red water on its side in clear gallon container filled with room temperature water',
        'Once your children see all the pieces, have them guess and/or draw what they think will happen when you put them in the same container. Then, have the children watch what happens and draw it.',
        'When the water at the equator heats up it creates currents that travel on the surface of the oceans.  When the water gets cold at the North and South poles, it creates currents that travel on the floors of the oceans.  This is one of the ways that the sun moves water around the earth.'
      ]
    ),
    '',
    [
      new ExperimentExcerpt(
        `${process.env.PUBLIC_URL}/assets/book/riversOfSunlight/pages/11.jpg`,
        new MultiLingual(
          'Hot water rises and cold water sinks as described on the eleventh through fourteenth two-page spreads of <u>Rivers of Sunlight</u>.'
        )
      ),
      new ExperimentExcerpt(
        [
          `${process.env.PUBLIC_URL}/assets/book/riversOfSunlight/pages/12.jpg`,
          `${process.env.PUBLIC_URL}/assets/book/riversOfSunlight/pages/13.jpg`,
        ],
      ),
      new ExperimentExcerpt(
        [
          `${process.env.PUBLIC_URL}/assets/book/riversOfSunlight/pages/14.jpg`,
        ],
      )
    ]
  )
}

let experimentsArray = [];
for (let experiment in experiments){
  experimentsArray.push(experiments[experiment]);
}
export {experimentsArray};