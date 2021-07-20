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
      'Drama de Cobija / Experimento',
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
      [
        '1 sábana (o cobija ligera)',
        '1 cobija más pesada',
        'ó: 1 sábana y 1 cobija por estudiante',
        'por lo menos 2 termómetros para medir la temperatura ambiente',
      ],
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
      [
        `Describe como el aire que rodea la Tierra, llamado “atmósfera”, le da a la Tierra una cobertura para mantenerla cálida.`,
        `Mide la temperatura ambiente del cuarto. Escríbela en el pizarrón.`,
        `Al mismo tiempo, cubre a él/la niño/a con una sábana (o que los niños se cubran a si mismos con sábanas) y mide la temperatura ambiente debajo de la sábana después de unos minutos.  Escribe la temperatura de la sábana junto a la temperatura del cuarto.`,
        `Explica que, si no hubiera atmósfera, la Tierra no tendría la temperatura necesaria para que nosotros viviéramos en ella.`,
        `Ahora, agrega la cobija sobre la sábana que cubre a él/la niño/a y mide la temperatura después de unos minutos.`,
        `Explica que ahora la atmósfera, el aire, está lleno de demasiados gases malos, contaminación de fábricas y carros (¡y sí, eructos de vaca!) y es como si tuviera una sábana y una cobija. ¡Se está poniendo demasiado caliente! ¿Cómo le quitamos la cobija? Eso es lo que estamos intentando resolver.`,
      ],
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
      'Experimento De Evaporación',
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
      [
        `agua`,
        `sal`,
        `cuchara de medir`,
        `taza de medir`,
        `cuchara`,
        `un plato no profundo ó un molde para pay`,
        `luz del sol`,
      ],
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
      [
        `Antes del experimento: Con la contribución de los niños, define la evaporación. Escribe la definición de los niños en el pizarrón.`,
        `Describe el experimento que sigue y dile a los niños que escriban lo que parece al principio. Dibújenlo. Adivinen como se verá al final del experimento y escriban una descripción o dibújenlo.`,
        `Mezcla una cucharadita de sal con ½ taza de agua tibia.`,
        `Vierte un poco del agua en el molde para pay (vidrio transparente es preferible) para que solo cubra el fondo con una capa delgada.`,
        `Colócalo bajo la luz del sol, preferiblemente afuera. Si hay demasiado viento, coloca una piedra o espera un día con menos viento.`,
        `Revísalo cada media hora.`,
        `¿Cómo se ve después de aproximadamente 2 horas? El agua ya no debería estar ahí, pero debería haber una capa polvorosa de sal. ¿Porqué? El sol evaporó el agua, pero la sal se quedó ahí.`,
        `Opción Avanzada: incluye un plato con la misma cantidad de agua fresca, preferiblemente agua destilada, como un control experimental, y diles a los niños que predigan, y dibujen lo que pasará. Colócalo afuera, al lado del agua con sal y obsérvalo cada vez que observes el agua salada. Si tu agua es especialmente dura y no tienes agua destilada, te puedes saltar esta parte del experimento porque los minerales que tiene el agua dura también dejarán una capa polvorosa.`,
      ],
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
        'En <u>Mi Luz</u>, en la tercera (incluyendo la página del título) extensión de dos páginas, la página de la derecha dice: Cada día yo caliento tu tierra y tu agua. Pequeñas gotas de agua tibia suben y forman nubes. Esta es una imagen y descripción simplificada de la evaporación.',
        `Dans le livre, <u>Ma lumière</u>, sur la troisième page de double page (y compris la page de titre), le texte de la page de droite dit : ''Chaque jour, je réchauffe votre terre et votre eau. De minuscules gouttes d'eau chaude montent et forment des nuages.'' Ceci est une image simplifiée et une description de l'évaporation. `
      )
    )
  ),
  //-------------------------------------------------------
  cloudExp: new Experiment(
    'cloudExp',
    new MultiLingual(
      'Cloud Experiment',
      'Experimento de Nube',
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
      [
        `frasco de 12oz con tapa`,
        `agua`,
        `alguna forma de calentar el agua`,
        `hielo`,
        `cerillos`,
      ],
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
      [
        `Este experimento les ayudará a los niños a entender el proceso de la formación de nubes de manera más detallada.`,
        `Escrito por Beverly Williams, mentora de GWE, también conocida como “The Brainiac Baroness”—cómo se hacen las nubes.`,
      ],
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
        'En <u>Mi Luz</u>, En la tercera (incluyendo la página del título) extensión de dos páginas, la página de la derecha dice: Cada día yo caliento tu tierra y tu agua. Pequeñas gotas de agua tibia suben y forman nubes. Esta es una imagen simplificada y descripción de la formación de nubes.',
        `Dans <u>Ma lumière</u>, sur la troisième page de double page (y compris la page de titre), le texte de la page de droite dit: <i>''Chaque jour, je réchauffe votre terre et votre eau. De minuscules gouttes d'eau chaude montent et forment des nuages.''</i> Il s'agit d'une image et d'une description simplifiées de la formation des nuages.`
      )
    )
  ),
  //-------------------------------------------------------
  pinwheelExp: new Experiment(
    'pinwheelExp',
    new MultiLingual(
      'Pinwheel Experiment',
      '',
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
    new MultiLingual(
      pinwheelInstructions
    )
  ),
  //-------------------------------------------------------
  heartbeatExp: new Experiment(
    'heartbeatExp',
    new MultiLingual('Heartbeat Experiment', 'Experimento del Latido del Corazón',`Expérience de battement de coeur`),
    new MultiLingual('Learn your heartbeats per minute'),
    '',
    new MultiLingual(
      [
        'Stopwatch (or a stopwatch on a cellphone)'
      ],
      [
        'cronómetro (o un cronómetro de un teléfono celular)'
      ],
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
      [
        `¿Qué tan rápido late tu corazón?`,
        `Diles a los niños que encuentren el latido de su corazón, usando cualquier dedo menos el pulgar, en la vena yugular en su cuello o en su muñeca.`,
        `Pídeles que cuenten el número de latidos durante 15 segundos.`,
        `Diles que multipliquen el número de latidos que contaron por 4 para encontrar sus latidos por minuto.`,
      ],
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
        `En <u>Luz Viviente</u>, en la segunda (incluyendo la página del título) extensión de dos páginas, la página de la derecha habla sobre sentir el latido de tu corazón.`,
        `Dans le livre La lumière vivante du soleil, sur la deuxième page de double page (y compris la page de titre), la page de droite parle de ressentir votre cœur.`
      )
    )
  ),
  //-------------------------------------------------------
  breathHoldExp: new Experiment(
    'breathHoldExp',
    new MultiLingual(
      'Breath Holding Experiment',
      'Experimento De Aguantar La Respiración',
      `Expérience de retenue du souffle`
    ),
    new MultiLingual(
      'Learn why you need to breath'
    ),
    '',
    new MultiLingual(
      [
        'Stopwatch (or a stopwatch on a cellphone'
      ],
      [
        'cronómetro (o un cronómetro de un teléfono celular)'
      ],
      [
        `Un chronomètre (ou un chronomètre sur un téléphone portable`
      ]
    ),
    new MultiLingual(
      [
        'How long can you hold your breath?',
        'Try holding your breath.',
        'What’s the longest you can hold your breath?  Time it!',
        'What does it feel like?  How does it feel to breathe again?',
        'Why can’t you hold your breath longer?  That’s because you need oxygen from plants to live.  Some of what you breathe out, that is, exhale, is carbon dioxide (Living Sunlight, on the thirteenth two-page spread).  Plants use that to make the oxygen you breathe in!'
      ],
      [
        `¿Cuánto tiempo puedes aguantar la respiración?`,
        `Intenta aguantar la respiración.`,
        `¿Qué es lo más que puedes aguantar la respiración? ¡Mídelo!`,
        `¿Cómo se siente? ¿Qué se siente respirar de nuevo?`,
        `¿Por qué no puedes aguantar la respiración por más tiempo? Es porque necesitas el oxígeno de las plantas para vivir. Algo de lo que exhalas es dióxido de carbono (Luz Viviente, en la décimo tercera extensión de dos páginas). ¡Las plantas lo usan para hacer el oxígeno que tú respiras!`,
      ],
      [
        `Pour combien de temps pouvez-vous retenir votre souffle? Essayez de retenir votre souffle.`,
        `Quelle est la durée maximale pendant laquelle vous pouvez retenir votre souffle?`,
        `C'était comment? C'est comment de respirer à nouveau?`,
        `Pourquoi ne pouvez-vous pas retenir votre respiration plus longtemps?`,
        `C'est parce que vous avez besoin de l'oxygène des plantes pour vivre. Une partie de ce que vous expirez  est du dioxyde de carbone (La lumière vivante du soleil sur la treizième page de double page). Les plantes l'utilisent pour fabriquer l'oxygène que vous respirez!`,
      ]
    ),
    '',
    new ExperimentExcerpt(
      `${process.env.PUBLIC_URL}/assets/book/livingSunlight/pages/12.jpg`,
      new MultiLingual(
        'In <u>Living Sunlight</u>, on the twelfth (including title page) two-page spread describes breathing in the oxygen plants make.',
        'En <u>Luz Viviente</u>, en la doceava (incluyendo la página del título) extensión de dos páginas, se describe lo que es respirar el oxígeno que producen las plantas.',
        'Dans le livre, <i>La lumière vivante du soleil</i>, sur la douzième page (y compris la page de titre), deux pages décrivent la respiration dans l\'oxygène que produisent les plantes. '
      )
    )

  ),
  //-------------------------------------------------------
  countBreathExp: new Experiment(
    'countBreathExp',
    new MultiLingual(
      'Breath Counting Experiment',
      'Experimento de Contar la Respiración',
      `Expérience de comptage de respiration`
    ),
    new MultiLingual(
      'Learn how exercising uses more energy'
    ),
    '',
    new MultiLingual(
      [
        'Stopwatch (or a stopwatch on a cell phone)'
      ],
      [
        `cronómetro (o un cronómetro de un teléfono celular)`
      ],
      [
        `Chronomètre (ou un chronomètre sur un téléphone portable)`
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
      ],
      [
        `¿Cuántas respiraciones tomas y que tan rápido late tu corazón cuando descansas? ¿Cuántas respiraciones tomas y que tan rápido late tu corazón después de hacer saltos de tijera por un minuto?`,
        `Midamos tu energía de una manera sencilla, midiendo cuantas respiraciones tomas en 30 segundos. Usa el mismo cronómetro para contar cuantas respiraciones tomas mientras estas sentado/a sin moverte (esta vez no aguantes la respiración).`,
        `Ahora, durante un minuto, corre en tu lugar o aún mejor, haz saltos de tijera.`,
        `Cuando termines el minuto de ejercicio, cuenta tu respiración por 30 segundos y compáralo con tu número descansando. Debería ser un número mucho mayor.`,
        `Eso es porque requiere más energía hacer ejercicio que descansar. ¡La comida que consumes le da a tu cuerpo energía para hacer ejercicio, descansar, y hasta crecer!`,
        `Repítelo midiendo tu latido durante 15 segundos descansando, y después de un minuto de ejercicio.`,
      ],
      [
        `Mesurez le nombre de respirations que vous prenez en 30 secondes.`,
        `Utilisez le chronomètre pour compter le nombre de respirations que vous prenez en restant assis (ne retenez pas votre souffle cette fois).`,
        `Maintenant, faites une minute complète de course sur place, ou sautez des étoiles. Lorsque la minute d'exercice est terminée, comptez vos respirations pendant 30 secondes et comparez avec votre nombre de repos.  C'est beaucoup plus.`,
        `C'est parce qu'il faut plus d'énergie pour faire de l'exercice que pour se reposer. La nourriture que vous mangez donne à votre corps de l'énergie pour faire de l'exercice, se reposer et même grandir!`,
        `Répétez en mesurant votre fréquence cardiaque pendant 15 secondes au repos et après une minute d'exercice.`,
      ]
    ),
    '',
    [
      new ExperimentExcerpt(
        `${process.env.PUBLIC_URL}/assets/book/livingSunlight/pages/10.jpg`,
        new MultiLingual(
          '<u>Living Sunlight</u>, on the tenth (including title page) two-page spread, talks about how animals get their energy from the plants they eat.  Everything you do takes energy from food, even resting!',
          'En <u>Luz Viviente</u>, en la décima (incluyendo la página del título) extensión de 2 páginas, habla sobre cómo los animales obtienen su energía de las plantas que comen. ¡Todo lo que haces requiere energía que proviene de la comida, hasta descansar!',
          `Le livre, La lumière vivante du soleil, sur la dixième page de double page (y compris la page de titre), explique comment les animaux tirent leur énergie des plantes qu'ils mangent. Tout ce que vous faites prend de l'énergie à partir de la nourriture, même au repos!`
        )
      ),
      new ExperimentExcerpt(
        [
          `${process.env.PUBLIC_URL}/assets/book/livingSunlight/pages/11.jpg`,
          `${process.env.PUBLIC_URL}/assets/book/livingSunlight/pages/12.jpg`
        ],
        new MultiLingual(
          'The eleventh and twelfth two-page spread explains that your body uses oxygen to turn those plant sugars into the energy you use to move.',
          'Las onceavas y doceavas extensiones de dos páginas, explican que tu cuerpo usa oxígeno para convertir los azúcares de esas plantas en energía que usas para moverte.',
          `Les onzième et douzième page de double page expliquent que votre corps utilise de l'oxygène pour transformer ces sucres végétaux en énergie que vous utilisez pour vous déplacer.`
        )
      )
    ]
  ),
  //-------------------------------------------------------
  photoSynthDramaExp: new Experiment(
    'photoSynthDramaExp',
    new MultiLingual(
      'Photosynthesis Drama',
      'Drama de Fotosíntesis',
      `Drame sur la photosynthèse`
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
      ],
      [
        `Sol: sombrero amarillo (puede ser un papel amarillo o el dibujo de un sol)`,
        `Lluvia/arcoíris: sombrero azul (puede ser un papel azul o un dibujo de gotas de agua)`,
        `Nube: sombrero de chef (puede ser un papel blanco o el dibujo de unas nubes)`,
        `Suelo: sombrero del emoji de popó (puede ser un papel café o el dibujo de un emoji de popó)`,
        `CO2: diadema o paliacate color negro para la cabeza (puede ser un papel negro o CO2 y dióxido de carbono, escrito en un papel)`,
        `O2: diadema o paliacate color dorado para la cabeza (puede ser un papel dorado u O2 y oxígeno escrito en un papel)`,
        `Clorofila: sombrero verde (puede ser un papel verde)`,
        `Planta: planta mágica falsa (puede ser el dibujo de una planta)`,
      ],
      [
        `Soleil : chapeau jaune (peut être un morceau de papier jaune ou un dessin du soleil)`,
        `pluie / eau : chapeau bleu (peut être un morceau de papier bleu ou un dessin de gouttes d'eau)`,
        `Nuage: toque de chef (peut être un morceau de papier blanc ou un dessin de nuages)`,
        `Sol: chapeau d'emoji de crotte/caca (peut être un morceau de papier marron ou un dessin d'emoji)`,
        `CO2 : bandeau noir (peut être un morceau de papier noir ou CO2 et dioxyde de carbone, écrit sur un papier) O2: bandeau doré (peut être un morceau de papier violet ou O2 et oxygène écrit sur un papier)`,
        `Chlorophylle : chapeau vert (peut être un morceau de papier vert)`,
        `Plante: fausse plante magique (peut être un morceau de papier avec une plante dessinée dessus)`,
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
      ],
      [
        `Después de leer esto a los niños, ayúdales a entenderlo pidiéndoles que lo actúen.`,
        `Preguntas posibles que hacerles antes de la dramatización:`,
        [
          `¿Qué sucede cuando crecen las plantas? Las respuestas posibles incluyen:`,
          [
            `La semilla en la tierra más agua y sol (y dióxido de carbono, CO2, y clorofila) es igual a...`,
            `El crecimiento de las plantas como resultado de...`,
            `Fotosíntesis`,
            `Forma glucosa (más planta) y oxígeno (O2)`,
          ],
          `Llega a “fotosíntesis”—intenta que los niños la definan y trabájalo hasta llegar a la mejor definición con varios pasos.`,
          `Habla sobre ¿de dónde obtenemos el CO2 (dióxido de carbón)? Está en el aire porque lo exhalamos y se produce (un derivado de la combustión incompleta que es la quema) cuando quemamos carbón, madera, y gas.`,
        ],
        'Vamos a actuar estos pasos con diferentes niños actuando los diferentes roles de las partes de la fotosíntesis.',
        [
          `Se puede comenzar con una planta bebé en vez de una semilla.`,
          `Sería divertido que las diferentes piezas tuvieran diferentes voces.`,
          `La planta puede decir qué necesita (suelo, sol, agua/lluvia, CO2, clorofila que hace verde a la planta)`,
          `¿Qué es lo que produce la planta con todas estas partes?:`,
          [
            `glucosa, es decir, azúcar (más planta, que significa crecimiento y comida rica para nosotros), y`,
            `oxígeno (O2)`,
          ]
        ]
      ],
      [
        `Après avoir lu ceci aux enfants, aidez-les à le comprendre en les faisant jouer! Questions possibles à poser avant le drame: Que se passe-t-il lorsque les plantes poussent?`,
        `Les réponses possibles incluent:`,
        `Les graines dans la terre et de l'eau et le soleil (et le dioxyde de carbone, le CO2 et la chlorophylle) sont égaux`,
        `La croissance des plantes à la suite de ... Photosynthèse`,
        `Produit du glucose (plus de plante) et de l'oxygène (O2)`,
        `Accédez à la ''photosynthèse'' - demandez aux enfants de créér la meilleure définition avec de nombreuses étapes`,
        `Parler d'où nous obtenons le CO2 (dioxyde de carbone)? Il est dans l'air parce que nous en exhalons et il est fabriqué (un sous-produit d'une combustion incomplète, c'est-à-dire de la combustion) lorsque nous brûlons du charbon, du bois et du gaz.`,
        `Mettons en scène ces étapes avec différents enfants jouant les différentes parties de la photosynthèse dans les voix différents.`,
        `On peut commencer avec une petite plante au lieu de graines`,
        `La plante peut dire ce dont elle a besoin (du sol,du  soleil, de l'eau/de la pluie, du CO2, de la chlorophylle qui rend la plante verte)`,
        `Que fait la plante avec toutes ces pièces : du glucose, c'est-à-dire du sucre (plus de plantes, ce qui signifie croissance et nourriture délicieuse pour nous), et`,
        `l'oxygène (O2)`,
      ]
    ),
    '',
    [
      new ExperimentExcerpt(
        `${process.env.PUBLIC_URL}/assets/book/livingSunlight/pages/6.jpg`,
        new MultiLingual(
          '<u>Living Sunlight</u>, on the sixth, seventh, and eighth (including title page) two-page spreads pictures and describes photosynthesis.',
          '<u>Luz Viviente</u>, en las sexta, séptima, y octavas (incluyendo la página del título) extensiones de dos páginas se muestra y describe la fotosíntesis.',
          `Dans le livre, <i>La lumière vivante du soleil</i>, sur les sixième, septième et huitième (y compris la page de titre) les double page, des images et la description de la photosynthèse.`
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
      'Squashed Plants Experiment',
      'Experimento de Plantas Aplastadas',
      `Expérience sur les plantes écrasées`
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
      ],
      [
        `hojas`,
        `hojas muertas`,
        `cáscaras de naranja`,
        `ladrillos (o piedras grandes)`,
      ],
      [
        `feuilles`,
        `mortes feuilles`,
        `écorces d'orange`,
        `briques (ou gros rochers)`
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
      ],
      [
        `Que los niños intenten esto en grupos de 2-4.`,
        `Dales materia orgánica a los niños (hojas, cáscaras de manzanas y naranjas, etc.) con la instrucción de hacer un grumo de materia vegetal (composta).`,
        `¿Qué pasa si el grumo es cubierto por el peso de más y más composta?`,
        `Dale un ladrillo a cada grupo. Pídeles a los niños que presionen el ladrillo suavemente sobre el grumo de materia vegetal. Que tomen turnos presionando lo más fuerte que puedan durante cinco minutos.`,
        `Quita el ladrillo. ¿Cómo se ve ahora la materia vegetal?`,
        `Discute: ¿Qué tan duro y por cuánto tiempo tendrías que presionar la materia vegetal para formar carbón, petróleo, o gas?`,
      ],
      [
        `Demandez aux enfants d'essayer cela en groupes de 2-4.`,
        `Donnez aux enfants de la matière organique (feuilles, pelures d'orange et de pomme, etc.) avec l'instruction de faire une motte de matière végétale (compost).`,
        `Que se passe-t-il si la touffe est recouverte par le poids de plus en plus de compost? Donnez une brique à chaque groupe. Demandez aux enfants d'appuyer doucement la brique sur la touffe de matériel végétal. À tour de rôle, appuyez aussi fort que possible pendant cinq minutes.`,
        `Retirez la brique. A quoi ressemble le matériel végétal maintenant?`,
        `Discuter: À quel point et pendant combien de temps auriez-vous à presser la matière végétale pour produire du charbon, du pétrole ou du gaz?`,
      ]
    ),
    '',
    new ExperimentExcerpt(
      `${process.env.PUBLIC_URL}/assets/book/buriedSunlight/pages/9.jpg`,
      new MultiLingual(
        'On the ninth two-page spread <u>Buried Sunlight</u> pictures and describes how plant matter piled up and got squashed to make fossil fuels.',
        'En la novena extensión de dos páginas, <u>Luz Enterrada</u> muestra y describe cómo la materia vegetal se apiló y aplastó para formar combustibles fósiles. ',
        `Sur la neuvième page de double page, <i>L'ensoleillement enterré</i> présente des images et décrit comment la matière végétale s'est empilée et a été écrasée pour produire des combustibles fossiles.`
      )
    )
  ),
  //-------------------------------------------------------
  carGreenhouseExp: new Experiment(
    'carGreenhouseExp',
    new MultiLingual(
      'Car Greenhouse Experiment',
      'Experimento Carro Invernadero',
      `Expérience de serre de voiture`
    ),
    new MultiLingual(
      'Learn how a greenhouse works'
    ),
    '',
    new MultiLingual(
      [
        'thermometer (2 thermometers are better)',
        'car or greenhouse'
      ],
      [
        `termómetro (es mejor 2 termómetros)`,
        `carro o invernadero`,
      ],
      [
        `2 thermomètres`,
        `Une voiture ou une serre`
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
      ],
      [
        `Duración: ¡La clase entera! Es mejor preparar el experimento al principio de tu clase y revisarlo al final de tu clase. Si puedes ejecutar este experimento todo el día, entonces revisa en intervalos regulares, como cada media hora o cada hora a lo largo del día.`,
        `Habla sobre si alguno de los niños ha oído hablar de, o visto un, invernadero en alguna ocasión. Pídeles que lo describan para los otros niños. Guíalos a describir qué es lo que sucede en un invernadero (y por extensión qué está sucediendo en la Tierra con su atmósfera) para mantenerlo cálido.`,
        `Un invernadero es una casa con paredes y techo de vidrio. El vidrio permite que entre la mayoría de la luz solar. Algo de la luz solar es absorbida por las plantas y el suelo, y algo se refleja por las plantas y el suelo de vuelta a los vidrios. Cuando la luz solar trata de salir por el vidrio una parte se refleja de nuevo hacia el suelo, atrapándola a ella y a su calor. Esto hace que el interior de un invernadero sea más caliente que el exterior. Lo mismo pasa con un carro que se ha dejado expuesto al sol por algunas horas.  Porque las ventanas dejan entrar el sol, pero lo atrapan, el interior del carro estará más caliente que el exterior.`,
        `Usa un termómetro para comprobar esto:`,
        `Si tu familia tiene un carro, pide al dueño que lo estacione en el sol por la mañana, de preferencia alejado de cualquier sombra.`,
        `Pon el termómetro dentro del carro, pegado con cinta adhesiva al reposacabezas del asiento del conductor.`,
        `Pon otro termómetro pegado con cinta adhesiva a un palo colocado junto al carro.`,
        `Opcional: pon un cubo de hielo en un vaso (o una barra de chocolate envuelto, o un trozo de queso en un plato, o flores frescas recién cortadas) cerca de cada termómetro.`,
        `Apunta la hora y la lectura de temperatura de los termómetros en un papel.`,
        `A lo largo de algunas horas, visita el carro cada hora o media hora, y apunta le lectura de temperatura de ambos termómetros junto a la hora del día. (Si pones un cubo de hielo cerca de los termómetros, anota qué le pasó cuando leíste la temperatura, y anota eso también.)`,
        `Esto es como nuestra Tierra. El aire alrededor de la tierra, llamado atmósfera, permite que entre la luz solar. Algo de esa luz es absorbida por la Tierra y algo es reflejada de nuevo hacia la atmósfera. Cuando la luz reflejada trata de salir de la atmósfera, una parte se queda atrapada al ser reflejada de nuevo a la Tierra por la atmósfera. Eso hace que la Tierra esté justo lo suficientemente cálida. Cuando la atmósfera tiene demasiados de los tipos de gases que atrapan la luz solar, se pone demasiado cálida. Los gases que hacen que la tierra esté demasiado cálida son el dióxido de carbono (CO2) y el metano (CH4). Nuestra emisión de los carros y fábricas, llamada contaminación, está formada por estos gases.`,
      ],
      [
        `Durée : toute la classe!`,
        `Il est préférable de mettre en place cette expérience au début de votre classe et de vérifier à la fin de votre classe. Si vous pouvez effectuer cette expérience toute la journée, vérifiez à intervalles réguliers, par exemple toutes les demi-heures ou toutes les heures de la journée.`,
        `Discutez si l'un des enfants a déjà entendu parler ou vu une serre. Demandez-lui de le décrire pour les autres enfants. Guidez-les pour décrire ce qui se passe dans une serre (et par extension ce qui se passe sur Terre avec son atmosphère) pour la réchauffer.`,
        `Une serre est une maison avec des murs et un plafond en verre. Le verre laisse entrer la majeure partie du soleil. Une partie du soleil est absorbée par les plantes et le sol et une partie est réfléchie par les plantes et le sol vers le verre. Lorsque le soleil essaie de sortir à travers le verre, une partie est à nouveau réfléchie vers le sol, le piégeant ainsi que sa chaleur. Cela rend l'intérieur d'une serre plus chaud que l'extérieur.`,
        `La même chose se produit avec une voiture qui a été laissée au soleil pendant quelques heures. Parce que les vitres laissent entrer le soleil, mais emprisonnent le soleil, l'intérieur de la voiture sera plus chaud qu'à l'extérieur.`,
        `Utilisez un thermomètre pour tester ceci : Si votre famille a une voiture, demandez au propriétaire de garer la voiture au soleil le matin, de préférence à l'abri de l'ombre.`,
        `Placez le thermomètre à l'intérieur de la voiture, scotché à l'appui-tête du siège du conducteur.`,
        `Placez un autre thermomètre collé sur un bâton à côté de la voiture`,
        `Facultatif : placez un glaçon dans une tasse (ou une barre de chocolat dans son emballage, ou un morceau de fromage dans une assiette, ou des fleurs fraîches coupées) près de chaque thermomètre`,
        `Notez l'heure et la température des deux thermomètres sur une feuille de papier`,
        `Au cours de quelques heures, visitez la voiture une fois par demi-heure ou heure et notez la lecture de la température des deux thermomètres à côté de l'heure de la journée. (Si vous placez un glaçon près des thermomètres, notez ce qui lui est arrivé lorsque vous lisez la température et notez-le également.)`,
        `C'est comme notre Terre. L'air autour de la Terre, appelé atmosphère, laisse entrer le soleil. Une partie de ce soleil est absorbée par la Terre et une autre est réfléchie vers l'atmosphère. Lorsque le soleil réfléchi essaie de sortir de l'atmosphère, une partie est piégée en étant réfléchie vers la Terre par l'atmosphère. Cela rend la terre juste assez chaude. Lorsque l'atmosphère reçoit trop de types de gaz qui piègent le soleil, elle devient trop chaude. Les gaz qui rendent la terre trop chaude sont le dioxyde de carbone (CO2) et le méthane (CH4). Les gaz d'échappement de nos voitures et de nos usines, appelés pollution, sont constitués de ces gaz.`,
      ]
    ),
    '',
    new ExperimentExcerpt(
      `${process.env.PUBLIC_URL}/assets/book/buriedSunlight/pages/13.jpg`,
      new MultiLingual(
        'What is a greenhouse?  On the thirteenth (including title page) two-page spread, <u>Buried Sunlight</u>  pictures and describes how the air around the Earth (called the blanket of gases around the Earth, or the atmosphere) helps control the Earth’s temperature.  A greenhouse does the same thing to grow food all year round rather than just during the summer (or growing seasons of your area).',
        '¿Qué es un invernadero? En la décimo tercera (incluyendo la página del título) extensión de dos páginas, <u>Luz Enterrada</u> muestra y describe cómo el aire que rodea la Tierra (llamada la capa de gases alrededor de la Tierra, o la atmósfera) ayuda a controlar la temperatura de la Tierra. Un invernadero hace lo mismo para producir alimento todo el año en vez de solamente durante el verano (o la temporada de cultivo de tu zona).',
        `Qu'est-ce qu'une serre ? Sur la treizième page de double page (y compris la page de titre), <i>L'ensoleillement enterré</i> décrit, avec les images, comment l'air autour de la Terre (appelée couverture de gaz autour de la Terre, ou atmosphère) aide à contrôler la température de la Terre. Une serre fait la même chose pour faire pousser de la nourriture toute l'année plutôt que juste pendant l'été (ou les saisons de croissance de votre région).`
      )
    )
  ),
  //-------------------------------------------------------
  pizzaBoxExp: new Experiment(
    'pizzaBoxExp',
    new MultiLingual(
      'Pizza Box Solar Oven Experiment',
      ``,
      `Expérience de four solaire de boîte à pizza`
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
      ],
      '',
      [
        `Utiliser l'énergie du soleil pour de bon!`,
        `Fabriquez un four solaire de boîte à pizza pour utiliser l'effet de serre pour chauffer des guimauves/pour faire des 's'mores'.`,
      ]
    ),
    new MultiLingual(
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
      [
        new ExperimentVideo(
          `https://www.youtube.com/embed/EnPkIljz9bg`,
          new MultiLingual(
            '',
            '',
            `Ce vidéo est en français`
          )
        ),
        new ExperimentVideo(
          "https://www.youtube.com/embed/QrUCkS5682I",
          new MultiLingual(
            '','','Pour les vidéos en anglais (1/2):'
          )
        ),
        new ExperimentVideo(
          "https://www.youtube.com/embed/iXHvWVvaguI",
          new MultiLingual(
            '','','Pour les vidéos en anglais (2/2):'
          )
        )
      ]
    ),
    '',
    new MultiLingual(
      pizzaBoxInstructions
    )
  ),
  //-------------------------------------------------------
  golfBallExp: new Experiment(
    'golfBallExp',
    new MultiLingual(
      'Earth\'s Water Experiment',
      '',
      `Expérience sur l'eau de la Terre`
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
      ],
      '',
      [
        `Un globe standard (environ 12 pouces de diamètre)`,
        `Plusieurs balles de golf`,
        `Plusieurs billes bleues`,
        `Plusieurs petites perles (la taille des petites graines) ou (des petites graines peut être utilisée comme substitut)`,
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
      ],
      '',
      [
        `Pour aider les enfants à mieux comprendre cela (et montrer le rapport approximatif de la terre à l'eau à l'eau douce), faites les activités suivantes:`,
        `La balle de golf représente l'eau disponible (principalement l'eau salée dans les océans)`,
        `Le marbre bleu représente l'eau douce (principalement enfermée dans la glace aux pôles)`,
        `De minuscules perles (graines) représentent l'eau douce à notre disposition`,
      ]
    ),
    '',
    new ExperimentExcerpt(
      `${process.env.PUBLIC_URL}/assets/book/riversOfSunlight/pages/3.jpg`,
      new MultiLingual(
        'In <u>Rivers of Sunlight</u>, on the third (including title page) two-page spread, the text describes the amount of water available to us as salt water and as fresh water.',
        '',
        `Dans le livre Les rivières d'ensoleillement, sur la troisième page de double page (y compris la page de titre), le texte décrit la quantité d'eau à notre disposition sous forme d'eau salée et d'eau douce. `
      )
    )
  ),
  //-------------------------------------------------------
  waterCycleDramaExp: new Experiment(
    'waterCycleDramaExp',
    new MultiLingual(
      'Water Cycle Drama',
      '',
      `Drame du cycle de l'eau`
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
      ],
      '',
      [
        `Le soleil: chapeau jaune (peut être un morceau de papier jaune ou un dessin du soleil)`,
        `L'eau de mer: ruban bleu (ou vagues dessinées sur une feuille de papier)`,
        `L vapeur d'eau : ruban blanc/argent (ou papier de soie blanc ou papier ordinaire coupé en bandes laissant 2 pouces à une extrémité pour tenir)`,
        `Un nuage: toque de chef (peut être un morceau de papier blanc ou un dessin de nuages)`,
        `La pluie : chapeau bleu (peut être un morceau de papier bleu ou un dessin de gouttes d'eau)`,
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
      ],
      '',
      [
        `Discuter et mettre en scène le cycle de l'eau - voir la description ci-dessus`,
        `Mettre en scène le cycle de l'eau (la lumière du soleil, l'eau comme l'océan, la vapeur d'eau, des nuages, la pluie)`,
        `Soleil : chapeau jaune (peut être un morceau de papier jaune ou un dessin du soleil): soulève l'eau de la mer salée par évaporation`,
        `Eau de mer : ruban bleu (ou vagues dessinées sur une feuille de papier)`,
        `Vapeur d'eau : ruban blanc/argent (ou papier de soie blanc ou papier ordinaire coupé en bandes laissant 2 pouces à une extrémité pour tenir).`,
        `L'eau de mer évaporée (ou n'importe quelle eau) se transforme en vapeur d'eau, un gaz qui flotte dans le ciel`,
        `Nuage : toque de chef (peut être une feuille de papier blanc ou un dessin de nuages). Lorsque la vapeur d'eau monte dans le ciel, elle se refroidit autour des grains de poussière pour former des nuages.`,
        `Pluie : chapeau bleu (peut être un morceau de papier bleu ou un dessin de gouttes d'eau). Lorsqu'une quantité suffisante de vapeur d'eau se refroidit autour des grains de poussière dans les nuages, elle produit des gouttelettes d'eau qui tombent sur la Terre sous forme de pluie (ou de neige si elle est froide).`,
        `Les enseignants dessinent le cycle de l'eau avec l'aide des enfants - les enfants aussi peuvent dessiner!`,
        ]
    ),
    '',
    [
      new ExperimentExcerpt(
        `${process.env.PUBLIC_URL}/assets/book/riversOfSunlight/pages/4.jpg`,
        new MultiLingual(
          "<u>Rivers of Sunlight</u>'s description of the water cycle - starts on the fourth (including title page) two-page spread of <u>Rivers of Sunlight</u> and goes to the seventh two-page spread",
          '',
          `Description du cycle de l'eau de <i>Les rivières d'ensoleillement</i>- commence sur la quatrième (y compris la page de titre) de double page de <i>Les rivières d'ensoleillement</i> et va à la septième de double page`
  )
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
      'Water Math',
      '',
      `Mathématiques de l'eau`
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
      ],
      '',
      [
        `Combien d'eau utilisez-vous?  Cela utilise la consommation d'eau moyenne de diverses activités typiques (par exemple: les toilettes à faible débit utilisent 6 à 7 litres, la normale utilise 19 litres, je suppose 11 litres par chasse)`,
        `Combien de fois tirez-vous la chasse d'eau des toilettes pendant la journée? Multipliez le nombre par 3.`,
        `Combien de fois vous brossez-vous les dents et laissez-vous couler l'eau? Multipliez le nombre par 2.`,
        `Combien de fois par jour vous brossez-vous les dents sans laisser couler l'eau? Multipliez le nombre par .5`,
        `Combien de minutes par jour prenez-vous une douche? (Aidez les enfants à comprendre cela s'ils ne se douchent pas tous les jours.) Multipliez le nombre par 2.`,
        `Combien de fois par jour vous lavez-vous les mains? Multiplier le nombre par 1.`,
        `Blanchisserie. Supposons que les vêtements soient lavés une fois par semaine avec une machine moyenne (entre l'efficacité standard et élevée): ajoutez 16 litres par jour`,
        `à votre total cuisine/cuisine: quelqu'un lave et cuisine des aliments et nettoie la vaisselle qui utilise de l'eau. Ajoutez 32 litres par jour à votre total.`,
        `Additionnez tous les chiffres pour la consommation d'eau quotidienne moyenne de l'élève`,
        `Réfléchissez à la manière dont cette utilisation d'eau peut être réduite. 20% d'eau gaspillée est une fuite dans la maison. Toilettes à faible débit, robinets à faible débit, ne laissez pas l'eau couler, ne tirez pas la chasse d'eau si vous n'en avez pas ''besoin'' (pas de chasse d'eau pour les ordures,) (''C'est jaune, c'est bon.  C'est noir, au revoir!), utilisez de l'eau 'grise' de la cuisine pour vos plantes. Discutez de ce qu'est l'eau grise et de la façon dont elle peut être utilisée.`,
      ]
    )
  ),
  //-------------------------------------------------------
  waterReqExp: new Experiment(
    'waterReqExp',
    new MultiLingual(
      'Water Requirements',
      '',
      `Les besoins en eau`
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
      ],
      '',
      [
        `Besoins en eau révélateurs pour certaines des choses que vous pourriez porter/manger/utiliser en ce moment (les estimations varient - vous voyez l'idée).`,
        `Demandez à vos enfants de réfléchir à l'eau nécessaire pour fabriquer chaque article et pourquoi.`,
        [
          `Une paire de chaussures: 8 544 litres`,
          `Une paire de jeans: 9 978 litres`,
          `Un t-shirt en coton: 2 700 litres`,
          `Une barre de chocolat: 1 719 litres`,
          `Un morceau de bœuf: 15 000 litres`,
          `Un hamburger: 2 392 litres`,
          `Une pizza au fromage nature: 1 215 litres`,
          `Une tranche de fromage: 151 litres`,
          `Une pinte de bière: 170 litres`,
          `Une tasse de café: 132 litres`,
          `Une pomme: 83 litres`,
          `Une miche de pain: 49 litres`,
          `Une feuille de papier: 11 litres`,
          `Un téléphone portable: 908 litres`,
          `Un gallon d'essence: 49 litres`,
          `Une voiture: 147 972 litres`
          ]
      ]
    )
  ),
  //-------------------------------------------------------
  dirtyWaterExp: new Experiment(
    'dirtyWaterExp',
    new MultiLingual(
      'Dirty Water Experiment',
      '',
      `Expérience de l'eau sale`
    ),
    new MultiLingual(
      'Learn how water gets dirty',
    ),
    '',
    new MultiLingual(
      [
        '3 clear pitchers',
        '1 tablespoon of dirt',
        '1 tablespoon of salt',
      ],
      '',
      [
        `3 pichets transparents`,
        `1 cuillère à soupe de saleté`,
        `1 cuillère à soupe de sel`,
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
      ],
      '',
      [
        `Remplissez d'eau les trois pichets transparents - avec les enfants qui regardent`,
        `Placez-les sur la table devant eux`,
        `Mettez une cuillère à soupe de terre dans un pichet`,
        `Placez une cuillère à soupe de sel dans le pichet suivant`,
        `Laissez un troisième pichet d'eau pure`,
        `Offrez un verre aux enfants et demandez dans quel pichet verser.`,
        `Puis, en buvant, demandez pourquoi ils ont choisi cette eau`,
        [
          `Comment l'eau se salit-elle?`,
          `Lisez le chapitre <i>L'express de réchauffement climatique</i>, de Marina Weber, intitulé Les sables bitumineux.`,
          `Lisez le chapitre <i>L'express de réchauffement climatique</i>, de Marina Weber, intitulé Le Côte du Golfe.`,
          `Lisez le chapitre <i>L'express de réchauffement climatique</i>, de Marina Weber, intitulé Le ruisseau Acorn.`,
          `Quelle sont les sources de notre eau? Rivières et aquifères.`,
          `L'eau doit être propre pour être bue. Qu'y a-t-il dedans que nous devons nettoyer? Faites une liste.`,
          `Comment le nettoie-t-on ? Cela pourrait être étendu avec une visite à une usine de traitement de l'eau Cela pourrait être élargi avec la discussion`,
        ]
      ]
    )
  ),
  //-------------------------------------------------------
  conveyorBeltExp: new Experiment(
    'conveyorBeltExp',
    new MultiLingual(
      'Water Conveyor Belt Experiment',
      '',
      `Expérience de tapis roulant d'eau`
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
      ],
      '',
      [
        `Un conteneur de 4 litres transparent à large ouverture (DOIT être transparent)`,
        `De l'eau à température ambiante`,
        `Un conteneur de shampoing de voyage vide`,
        `Un bac à glaçons ou quatre tasses dixie`,
        `Du colorant alimentaire rouge et bleu`,
        `Méthode de chauffage d'une petite quantité d'eau`,
        `Façon de congeler l'eau en glace`,
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
      ],
      '',
      [
        `Cette expérience nécessite de congeler de l'eau en glaçons. Préparation avancée requise.`,
        [
          `Remplissez quatre glaçons dans un bac à glaçons avec de l'eau (ou quatre tasses dixie à moitié avec de l'eau)`,
          `Faites de l'eau bleue avec dix-vingt gouttes de colorant alimentaire bleu`,
          `Congelez pendant la nuit`,
          `Remplissez un récipient transparent de 4 litres avec de l'eau et laissez reposer pendant quelques heures pour le ramener à la température ambiante`,
          `Remplissez le contenant de shampoing de voyage avec de l'eau chaude (ou de l'eau froide et passez-le au micro-ondes pendant environ 30 secondes jusqu'à ce qu'il soit chaud, mais pas trop chaud pour être manipulé)`,
          `Faites de l'eau chaude rouge avec dix-vingt gouttes de colorant alimentaire rouge`,
          `Placer les glaçons bleus dans un contenant d'un gallon transparent rempli d'eau à température ambiante Placez le récipient de shampooing (sans couvercle) rempli d'eau rouge chaude sur le côté dans un récipient transparent d'un gallon rempli d'eau à température ambiante`,
          `Une fois que vos enfants ont vu toutes les pièces, demandez-leur de deviner et/ou de dessiner ce qu'ils pensent qu'il se passera lorsque vous les aurez mis dans le même récipient. Ensuite, demandez aux enfants de regarder ce qui se passe et de le dessiner.`,
          `Lorsque l'eau à l'équateur se réchauffe, elle crée des courants qui se déplacent à la surface des océans. Lorsque l'eau se refroidit aux pôles Nord et Sud, elle crée des courants qui se déplacent sur le fond des océans. C'est l'une des façons dont le soleil déplace l'eau autour de la terre.`,
        ]
      ]
    ),
    '',
    [
      new ExperimentExcerpt(
        `${process.env.PUBLIC_URL}/assets/book/riversOfSunlight/pages/11.jpg`,
        new MultiLingual(
          'Hot water rises and cold water sinks as described on the eleventh through fourteenth two-page spreads of <u>Rivers of Sunlight</u>.',
          '',
          `L'eau chaude monte et l'eau froide descend comme décrit dans les onzième à quatorzième feuillets de double page de Les rivières d'ensoleillement.`
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