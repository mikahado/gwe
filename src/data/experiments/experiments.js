import React from 'react';
import {Link} from 'react-router-dom';

import {Experiment} from "../model/experiment";
import {MultiLingual} from "../model/multiLingual";

import myLight3 from './MyLight3.jpg';
import {ExperimentExcerpt} from "../model/experimentCaption";
import pinwheelInstructions from './GWE-PinwheelInstructions.pdf';
import {ExperimentVideo} from "../model/experimentVideo";

export const experiments = {

  blanketExp: new Experiment(
    'blanketExp',
    new MultiLingual(
      'Blanket Drama / Experiment',
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
      ]
    ),
    new MultiLingual(
      [
        'Describe how the air around the Earth, called the “atmosphere”, gives the earth a sheet to keep it warm.',
        'Measure the air temperature in your room.  Write it on the white board.',
        'At the same time, cover a child with the bedsheet (or have children cover themselves with sheets) and measure the temperature under the sheet after a few minutes.  Write the bedsheet and room temperatures on the white board.',
        'Explain how if there was no atmosphere, the Earth wouldn’t be warm enough for us to live on.',
        'Now, add the blanket to the sheet over the child and measure the temperature after a few minutes.',
        'Explain that now the atmosphere, the air, is filled with too many bad gases, pollution from factories and cars (and yes, cow burps!) and it’s like having a sheet and a blanket.  It’s getting too warm!  How do we remove a blanket?  That’s what we are trying to solve.'
      ]
    )
  ),
  //-------------------------------------------------------
  evapExp: new Experiment(
    'evapExp',
    new MultiLingual(
      'Evaporation Experiment'
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
      ]
    ),
    new MultiLingual(
      [
        'Before experiment:  with children’s input define evaporation.',
        'Describe the following experiment and have children write down what it looks like at the beginning.  Make a drawing of it.  Guess what it will look like at the end.',
        'Mix 1 teaspoon of salt with ½ cup warm water.',
        'Pour a tiny bit into a pie plate (clear glass is preferable) so that it just covers the bottom with a thin layer.',  'Place in the sunshine, preferably outside.  If it is windy, weigh with rock or wait for a less windy day.',
        'Check every half hour.',
        'What does it look like after two hours or so?  The water should be gone, but there should be a dusty layer of salt.  Why?  The sun evaporated the water, but left the salt behind.',
        'Advanced option:  include a dish with the same amount of fresh water as an experimental control.',
        'What does it look like after two hours or so?  In the salt water pan, the water should be gone, but there should be a dusty layer of salt.  Why?  The sun evaporated the water, but left the salt behind.  What does the fresh water pan look like?'
      ]
    ),
    '',
    new ExperimentExcerpt(
      myLight3,
      new MultiLingual(
        'In <u>My Light</u>, on the third (including title page) two-page spread, the right-hand page text says:  Each day I warm your land and water.  Tiny drops of warm water rise and form clouds.  This is a simplified picture and description of evaporation.'
      )
    )
  ),
  //-------------------------------------------------------
  cloudExp: new Experiment(
    'cloudExp',
    new MultiLingual(
      'Cloud Experiment'
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
      ]
    ),
    new MultiLingual(
      [
        'This experiment will help the children understand the process of making clouds in a little more detail.',
        'By GWE Mentor Beverly Williams, also known as The Brainiac Baroness--how clouds are made'
      ]
    ),
    "https://www.youtube.com/embed/wBW6q41gB_M",
    new ExperimentExcerpt(
      `${process.env.PUBLIC_URL}/assets/book/myLight/pages/3.jpg`,
      new MultiLingual(
        'In <u>My Light</u>, on the third (including title page) two-page spread, the right-hand page text says:  Each day I warm your land and water.  Tiny drops of warm water rise and form clouds.  This is a simplified picture and description of cloud formation.'
      )
    )
  ),
  //-------------------------------------------------------
  pinwheelExp: new Experiment(
    'pinwheelExp',
    new MultiLingual(
      'Pinwheel Experiment'
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
        ]
      ),
      new MultiLingual(
        [
          'Pre-cut and pre-hole-punched plastic square from milk jug with drawn diagonal lines',
          'Bamboo skewer with point',
          'Scissors'
        ]
      )
    ],
    new MultiLingual(
      [
        'Pinwheels are facsimiles of turbines. Once children have made them, they can try them out in “wind” by blowing on them or running while holding them, outside, or creating a “turbine field” outside the classroom.',
        'Then, you can have them place them under running water to simulate a turbine in a hydroelectric dam.',
        'For detailed instructions on building the pinwheels, click the "Open PDF" button below'
      ]
    ),
    '',
    [
      new ExperimentExcerpt(
        `${process.env.PUBLIC_URL}/assets/book/myLight/pages/5.jpg`,
        new MultiLingual(
          'In <u>My Light</u>, on the fifth (including title page) two-page spread, the left-hand page talks about a dam and turbines and the right-hand page shows a picture of the turbine.'
        )
      ),
      new ExperimentExcerpt(
        `${process.env.PUBLIC_URL}/assets/book/myLight/pages/7.jpg`,
        new MultiLingual(
          'The seventh two-page spread describes and shows wind turbines. The eleventh two-page spread describes and shows the turbines pushed by the steam made by heating water at coal-burning power plants.'
        )
      ),
      new ExperimentExcerpt(
        `${process.env.PUBLIC_URL}/assets/book/myLight/pages/11.jpg`,
        new MultiLingual(
          'The eleventh two-page spread describes and shows the turbines pushed by the steam made by heating water at coal-burning power plants.'
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
    ),
    new MultiLingual(
      [
        'How fast does your heart beat?',
        'Instruct the children to find their heartbeat using any finger but the thumb at the jugular vein on their neck or on their wrist.',
        'Have them count the number of beats for 15 seconds.',
        'Have them multiply by four to find their beats per minute.'
      ]
    ),
    '',
    new ExperimentExcerpt(
      `${process.env.PUBLIC_URL}/assets/book/livingSunlight/pages/2.jpg`,
      new MultiLingual(
        'In <u>Living Sunlight</u>, on the second (including title page) two-page spread, the right-hand page talks about feeling your heart.'
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
        `${process.env.PUBLIC_URL}/assets/book/livingSunlight/pages/11.jpg`,
        new MultiLingual(
          '<u>Living Sunlight</u>, on the eleventh (including title page) two-page spread, talks about how animals get their energy from the plants they eat.  Everything you do takes energy from food, even resting!'
        )
      ),
      new ExperimentExcerpt(
        `${process.env.PUBLIC_URL}/assets/book/livingSunlight/pages/12.jpg`,
        new MultiLingual(
          'The twelfth two-page spread explains that your body uses oxygen to turn those plant sugars into the energy you use to move.'
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
            'glucose, that is, sugar (more plant which means growth), and',
            'oxygen (O2)'
          ]
        ]
      ]
    ),
    '',
    [
      new ExperimentExcerpt(
        `${process.env.PUBLIC_URL}/assets/book/livingSunlight/pages/7.jpg`,
        new MultiLingual(
          '<u>Living Sunlight</u>, on the seventh, eighth, and ninth (including title page) two-page spreads pictures and describes photosynthesis.',
        )
      ),
      new ExperimentExcerpt(
        [
          `${process.env.PUBLIC_URL}/assets/book/livingSunlight/pages/8.jpg`,
          `${process.env.PUBLIC_URL}/assets/book/livingSunlight/pages/9.jpg`
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
        'Give the children organic material with the instruction to make a clump of plant (compost) material.',
        'What happens if the clump is covered by more and more compost?',
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
        'Procedure (this will take at least an hour and more data is gathered if able to be done for six hours):',
        'Discuss whether any of the children have ever heard of or seen a greenhouse.  Have them describe it for the other children. Guide them to describe what is happening in a greenhouse (and by extension what is happening on Earth with its atmosphere) to make it warm.',
        'A greenhouse is a house with glass walls and ceiling.  The glass lets most of the sunshine in, but when the sunshine tries to get out, some of it gets trapped.  This makes the inside of a greenhouse hotter than outside. The same thing happens with a car that has been left out in the sun for a few hours.  Because the windows let the sun in, but trap the sun, the inside of the car will be hotter than outside.',
        'Use a thermometer to test this out:',
        'If your family has a car, have the owner park car in sun in the morning, preferably away from any shade.',
        'Place thermometer inside car, taped to the headrest of the driver\'s seat.',
        'Place another thermometer taped to a stick next to the car',
        'Optional: place an ice cube in a cup (or a chocolate bar in its wrapper, or a piece of cheese on a plate, or cut, fresh flowers) near each thermometer',
        'Write down the time and the temperature reading of both thermometers on a piece of paper',
        'Over the course of a few hours, visit the car once per hour and write down the temperature reading of both thermometers next to the time of day.  (If you put an ice cube near the thermometers, note what happened to it when you read the temperature and write that down, too.)',
        'This is like our Earth.  The air around the Earth, called the atmosphere, lets the sunshine in and when the sunshine tries to get out, some of it gets trapped.  That makes the earth just warm enough.  When the atmosphere gets too many of the types of gases that trap sunshine, it gets too warm.  Gases that make the earth too warm are carbon dioxide (CO2) and methane (CH4).  Our car and factory exhaust, called pollution, are made of these gases.\n'
      ]
    ),
    '',
    new ExperimentExcerpt(
      `${process.env.PUBLIC_URL}/assets/book/buriedSunlight/pages/13.jpg`,
      new MultiLingual(
        'What is a greenhouse?  On the thirteenth (including title page) two-page spread, <u>Buried Sunlight</u>  pictures and describes how the air around the Earth (called the blanket of gases around the Earth, or the atmosphere) helps control the Earth’s temperature.  A green house does the same thing to grow food all year round rather than just during the summer (or growing seasons of your area).'
      )
    )
  ),
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
        'Using the sun’s energy for good! Make a pizza box solar oven to use the greenhouse effect to heat marshmallows.'
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
    ]
  ),
  golfBallExp: new Experiment(
    'golfBallExp',
    new MultiLingual(
      'Golf Ball Experiment'
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
          'Have several golf balls and several blue (preferably) marbles and several tiny beads (the size of tiny seeds and small seeds can be used as a substitute)',
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
          'Act out water cycle (need sunlight, water as ocean, water vapor, clouds, rain)',
          [
            'Sun: yellow hat (can be a yellow piece of paper or a drawing of sun):  lifts water from the salty sea through evaporation',
            'Ocean water:  blue ribbon (or waves drawn on a piece of paper)',
            'Water vapor:  white/silver ribbon (or white tissue paper or regular paper cut in strips leaving 2 inches at one end to hold):  Evaporated sea water (or any water) turns into water vapor, a gas which floats up into the sky',
            'Cloud: chef’s hat (can be a white piece of paper or a drawing of clouds):  when water vapor floats up into the sky, it cools around specks of dust to make clouds.',
            'Rain: blue hat (can be a blue piece of paper or a drawing of water drops):  when enough water vapor cools around specks of dust in the clouds, it makes water droplets which fall to the Earth as rain (or snow if cold).',
          ],
          'Teacher draw water cycle with help from children--children can draw, too!'
        ]

      ]
    ),
    '',
    [
      new ExperimentExcerpt(
        `${process.env.PUBLIC_URL}/assets/book/buriedSunlight/pages/4.jpg`,
        new MultiLingual("<u>Rivers of Sunlight</u>'s description of the water cycle - starts on the fourth (including title page) two-page spread of <u>Rivers of Sunlight</u> and goes to the seventh two-page spread")
      ),
      new ExperimentExcerpt(
        [
          `${process.env.PUBLIC_URL}/assets/book/buriedSunlight/pages/5.jpg`,
          `${process.env.PUBLIC_URL}/assets/book/buriedSunlight/pages/6.jpg`
        ]
      ),
      new ExperimentExcerpt(
        [
          `${process.env.PUBLIC_URL}/assets/book/buriedSunlight/pages/7.jpg`,
        ]
      )
    ]
  ),
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
        'Fill four ice cubes in an ice cube tray with water (or four dixie cups halfway with water)',
        'Make water blue with ten-twenty drops of blue food dye',
        'Freeze overnight',
        'Fill clear gallon container with water and let sit for a few hours to get it to room temperature',
        'Fill travel shampoo container with hot water (or cold water and microwave it for 30 seconds or so until hot, but not too hot to handle)',
        'Make hot water red with ten-twenty drops of red food dye',
        'Place blue ice cubes in clear gallon container filled with room temperature water',
        'Place shampoo container (without lid) filled with hot red water on its side in clear gallon container filled with room temperature water',
        'Watch and draw what happens ',
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