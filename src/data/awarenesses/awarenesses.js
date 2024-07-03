//React
import React from 'react';
import {Link} from 'react-router-dom';

// Data Models
import {Awareness} from "../model/awareness";
import {Drama} from "../model/drama";

import {MultiLingual} from "../model/multiLingual";
import {DramaExcerpt} from "../model/dramaCaption";
import {DramaVideo} from "../model/dramaVideo";

// possible delete: 
import pinwheelInstructions from './GWE-PinwheelInstructions.pdf';
import pinwheelInstructionsSPA from './GWE-PinwheelInstructions(ESP).pdf';
import pinwheelInstructionsFRA from './GWE-PinwheelInstructions(FRA).pdf';
import pizzaBoxInstructions from './Pizza Box Solar Oven Directions.pdf';
import pizzaBoxInsructionsSPA from './GWE-PizzaBoxInstrESP.pdf';

import myLight3 from './MyLight3.jpg';

export const awarenesses = {

  blanketExp: new Awareness(
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
        `A globe of the earth`,
        `1 white/transparent cloth (a 3 ft by 4 ft portion of a bedsheet is fine)`,
        `1 kid-sized blanket (3 ft by 4 ft or so)`,
        `More of the same kind of blankets - 1 for every 2 kids in your group)`
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
    <div>
    <h2>Blanket and Earth Drama/Exercise</h2>
    <p>
    Get the globe. Let your kids put their hands on it, spin it. <br/>
    Ask them where on the globe of the earth they live. (they may know - or not) <br/>
    Ask them to point out the north pole. Does anyone know another name for it? (Arctic) <br/>
    Ask them to point out the south pole. Does anyone know another name for it? (Antarctica) <br/>
    Tell them you have 2 super cool questions– <br/>
    Can they point to which pole the Polar Bears live in? <br/>
    What about which pole the Penguins live in? <br/>
    Discuss. <br/>
    What about the Equator? What is that and where is it?
    </p>
    
    <hr/>
    
    <h2>When you are done familiarizing yourselves with the globe of the Earth, get out your supplies.</h2>
    <p>
    Take the small cloth and ask a student to drape it over the globe. Explain that this is a facsimile of the earth’s atmosphere. <br/> Ask the students what the atmosphere is. Discuss. <br/><br/>
    Remind them that, up until about 100 years ago, the atmosphere kept our planet just warm enough- not too hot and not too cold. Remind them that some people call it the Goldilocks effect. (explain) Tell them that without the atmosphere, we would be Super Cold and that even if they put 20 sleeping bags over themselves, they would freeze. <br/> So, we really need the atmosphere.
    </p>
    
    <hr/>
    
    <h2>However, can anyone guess what happened 100 years ago to start to change things?</h2>
    <p>
    Discuss the start of industry - the industrial revolution, then the start of gas burning engines and coal stoves in homes for heating, then the invention of the car. <br/>You can introduce the terms Greenhouse Gases and Fossil Fuels, but no need for a lot of detail -we will get to that.
    </p>
    
    <hr/>
    
    <h2>Now ask a student to remove the “atmosphere” and to replace it with the small blanket.</h2>
    <p>
    This, you tell them, is what has happened over the past 100 years. Instead of a nice thin atmosphere, we now have a thick blanket. <br/>Why? <br/>Because all of the greenhouse gases made by the smoke from the burning of fossil fuels, have mostly stayed in the atmosphere, we now have a thicker blanket.
    </p>
    
    <p>
    Close your eyes and think about when you are sleeping on a warm, spring night. You have a blanket over your sheet. But you start to get too hot! What do you do? Open your eyes– <br/>
    Yes! You kick off or take off your blanket. <br/>
    Well our Earth is now trying to take off the blanket because it’s too hot, but Earth doesn’t have any arms or legs! <br/>How would that feel if you were the Earth? <br/>
    Let’s try it! <br/>
    Ask for a volunteer. <br/>Tell the volunteer, once they come over, that you are going to put the blanket over their head for the count of 5. <br/>They can take the blanket off anytime, but we will try to count to 5 as they have it on. <br/>Ask if that’s ok. <br/>
    Put the blanket over the student’s head and ask everyone to count to 10. When done you or the student takes off the blanket. <br/>
    Ask them to explain how it felt – (stuffy, warm, dark, itchy)
    </p>
    
    <hr/>
    
    <h2>Now ask the student to try one more time.</h2>
    <p>
    This time, tell them that they will have the blanket on for 10 seconds. <br/>Ask if that’s ok. Tell them that this time they cannot take the blanket off. <br/>
    OK? <br/>
    Put the blanket on, everyone counts to 10 together, take the blanket off. <br/>
    How was that? (The answers might be - really hot! Kind of scary. Too stuffy. etc.)
    </p>
    
    <hr/>
    
    <h2>Now divide the group into pairs and let the kids try both versions for each other.</h2>
    <p>
    One puts the blanket on the other for 5 seconds and then repeats for 10 seconds. <br/>
    Expect some goofing around!
    </p>
    
    <hr/>
    
    <h2>When everyone is done, grab the easel paper and ask a kid or kids to scribe.</h2>
    <p>
    Ask, "What did that feel like?" And then ask, "What did you learn about the Earth from doing that exercise?" <br/>
    Tell the students that you all are going to spend a while learning more about the Greenhouse Effect, which is not too strong, and causing global warming. <br/>You will also be talking about what can be done and is being done to solve it. <br/>
    Make sure that all responses get recorded.
    </p>
    </div>
    
  ]


      ,
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
  evapExp: new Drama(
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
    new DramaExcerpt(
      myLight3,
      new MultiLingual(
        'In <u>My Light</u>, on the third (including title page) two-page spread, the right-hand page text says:  Each day I warm your land and water.  Tiny drops of warm water rise and form clouds.  This is a simplified picture and description of evaporation.',
        'En <u>Mi Luz</u>, en la tercera (incluyendo la página del título) extensión de dos páginas, la página de la derecha dice: Cada día yo caliento tu tierra y tu agua. Pequeñas gotas de agua tibia suben y forman nubes. Esta es una imagen y descripción simplificada de la evaporación.',
        `Dans le livre, <u>Ma lumière</u>, sur la troisième page de double page (y compris la page de titre), le texte de la page de droite dit : ''Chaque jour, je réchauffe votre terre et votre eau. De minuscules gouttes d'eau chaude montent et forment des nuages.'' Ceci est une image simplifiée et une description de l'évaporation. `
      )
    )
  ),
  //-------------------------------------------------------
  cloudExp: new Drama(
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
      new DramaVideo(
        "https://www.youtube.com/embed/wBW6q41gB_M?hl=en&amp;cc_lang_pref=en&amp;cc_load_policy=1&amp;cc=1",
        new MultiLingual(
          'Making Clouds'
        ),
        new MultiLingual(
          [
            `Welcome to today’s episode of Think with the Brainiac Baroness with me, Beverly Williams, the Brainiac Baroness. Today we will consider how are clouds made?`,
            `White, puffy clouds. How are they made? In Molly Bang’s book, <u>My Light</u>, the sun explains that it is her radiance which warms the land and water. The caption for this picture says, “Tiny drops of warm water rise and form clouds.” The energy of the sun shines on the water and turns it into water vapor which rises to the sky. What is that called when the water is turned to water vapor by the sun? If you guessed evaporation, you would be correct. What happens to the water vapor as it rises into the sky to turn into clouds? Hmmm...that’s a little harder. Let’s try to understand it this way. What is the tallest mountain you can think of? Well, let’s talk about Mount McKinley in Alaska. The peak is about four miles above sea level. When you get to the top of that mountain will you be hotter or colder than you were at the base of the mountain? Yes, that’s right, you would be colder. That’s because you are four miles higher. Let’s get back to water vapor as it rises into the air above the earth. Will it also get colder? Yes, it will. Is that what turns it into a cloud? Let’s watch this demonstration and find out.`,
            'I have two sixteen ounce canning jars, but any jar of any size would do. I have a cup of hot water and a bowl filled with ice. If you’re doing the demonstration with me at home, have an adult help you with the hot water. It doesn’t need to be boiling, but it should be hotter than you want to touch. Feel free to use a hot pot mitt to protect yourself from burns. I also have a box of matches, which you also need an adult to help you with. Fill both jars about a quarter of the way with water. Let’s make them even just for fun. The picture in Molly Bang’s My Light book helps us guess that if we cool the water vapor coming from the hot water, a cloud should form. So, let’s put ice in the lid so that we can cool the water vapor coming from the hot water. Let’s wait a little bit to see if a cloud forms. Is a cloud forming? What? No cloud? Hmmm.... What’s happening? In fact we are missing a key part to what happens in the sky to make clouds. Do you know what that is? If you guessed dust you would be correct. There are tiny bits of dust in the air all the time all around us. You can even see the dust sometimes floating in a shaft of light as that light comes into your house. Let’s light a match over the other jar to make some more dust in it. We’ll just drop a match in there and then we don’t have to worry about it. And then we’ll cool that jar of water with the lid filled with ice. Do we have a cloud forming in the jar with the dust from the match? It sure looks cloudier than the first jar. I think a cloud formed almost immediately. Let’s lift the lid off and see the cloud float to the sky. Can you see that?',
            'Clouds are made when tiny bits of water vapor condense, that is, get cold enough to turn back into water, on a slightly bigger piece of dust. That piece of dust is still so small that you and I can’t see it. That piece of dust is called an aerosol.',
            `And now you know how clouds are made. Thanks for taking the time to think with the Brainiac Baroness.`
          ],
          [
            `Bienvenidos al episodio de hoy de Piensa con la Baronesa Brillante conmigo, Beverly Williams, la Baronesa Brillante. Hoy consideraremos ¿Cómo se hacen las nubes?`,
            `Nubes blancas y esponjosas. ¿Como se hacen?  En el libro de Molly Bang, Mi Luz, el sol explica que es su resplandor lo que calienta la tierra y el agua. El título de esta imagen dice, "Pequeñas gotas de agua tibia se elevan y forman nubes". La energía del sol brilla sobre el agua y la convierte en vapor de agua que se eleva hacia el cielo. ¿Cómo se llama cuando el sol convierte el agua en vapor de agua? Si adivinaste evaporación, estarías en lo cierto. ¿Qué le sucede al vapor de agua cuando se eleva hacia el cielo para convertirse en nubes? Hmmm ... eso es un poco más difícil. Intentemos entenderlo de esta manera. ¿Cuál es la montaña más alta que se te ocurre? Bueno, hablemos de Mount McKinley en Alaska. La cima está a unas cuatro millas sobre el nivel del mar. Cuando llegues a la cima de esa montaña, ¿estarás más caliente o frío que en la base de la montaña? Sí, así es, estarías más frío. Eso es porque estás cuatro millas más alto. Volvamos al vapor de agua que se eleva al aire sobre la tierra. ¿También será más frío? Sí, lo será. ¿Es eso lo que lo convierte en una nube? Veamos esta demostración y averigüémoslo.`,
            `Tengo dos frascos de conservas de dieciséis onzas, pero cualquier frasco de cualquier tamaño serviría. Tengo una taza de agua caliente y un tazón lleno de hielo. Si vas a hacer la demostración conmigo en casa, pídele a un adulto que te ayude con el agua caliente. No es necesario que esté hirviendo, pero deberá estar más caliente de lo que quieres tocar. Si gustas puedes usar un guante para horno para protegerte de las quemaduras. También tengo una caja de cerillos, con la cual también necesitas un adulto que te ayude. Llena ambos frascos aproximadamente una cuarta parte con agua. Hagámoslo incluso solo por diversión. La imagen del libro Mi Luz de Molly Bang nos ayuda a adivinar que si enfriamos el vapor de agua que proviene del agua caliente, se debería formar una nube. Entonces, pongamos hielo en la tapa para que podamos enfriar el vapor de agua que sale del agua caliente. Esperemos un poco para ver si se forma una nube. ¿Se está formando una nube? ¿Qué? ¿No hay una nube? Hmmm ... ¿Qué está pasando? De hecho, nos falta una parte clave de lo que sucede en el cielo para formar nubes. ¿Sabes qué es eso? Si adivinaste el polvo, estarías en lo cierto. Hay pequeñas motas de polvo en el aire a nuestro alrededor todo el tiempo. Incluso, a veces se puede ver el polvo flotando en un rayo de luz cuando esa luz entra en tu casa. Encendamos un cerillo sobre el otro frasco para crear más polvo en él. Simplemente dejaremos caer un cerillo allí y luego no tendremos que preocuparnos por eso. Y entonces enfriaremos ese frasco de agua con la tapa llena de hielo. ¿Tenemos una nube formándose en el frasco con el polvo del fósforo? Seguro que se ve más nublado que el primer frasco. Creo que se formó una nube casi de inmediato. Levantemos la tapa y veamos la nube flotar hacia el cielo. ¿Puedes ver eso?`,
            `Las nubes se forman cuando pequeños pedazos de vapor de agua se condensan, es decir, se enfrían lo suficiente como para volver a convertirse en agua, en un pedazo de polvo un poco más grande. Ese pedazo de polvo todavía es tan pequeño que tú y yo no podemos verlo. Ese pedazo de polvo se llama aerosol.`,
            `Y ahora ya sabes cómo se forman las nubes. Gracias por tomarte el tiempo de pensar con la Baronesa Brillante.`,
          ],
          [
            `Bienvenue dans l'épisode d'aujourd'hui de Pensez avec la Brainiac Baroness avec moi, Beverly Williams, la Brainiac Baroness. Aujourd'hui, nous allons examiner comment sont faits les nuages?`,
            `Les nuages blancs et gonflés. Comment sont-ils fabriqués? Dans le livre de Molly Bang, Ma lumière, le soleil explique que c'est son rayonnement qui réchauffe la terre et l'eau. La légende de cette photo c'est - ''De minuscules gouttes d'eau chaude s'élèvent et forment des nuages.'' L'énergie du soleil brille sur l'eau et la transforme en vapeur d'eau qui monte vers le ciel. Comment appelle-t- on l'eau transformée en vapeur d'eau par le soleil? Si vous aviez deviné l'évaporation, vous auriez raison. Qu'arrive-t-il à la vapeur d'eau lorsqu'elle monte dans le ciel pour se transformer en nuages? Hum... c'est un peu plus dur. Essayons de le comprendre ainsi. Quelle est la plus haute montagne à laquelle vous pouvez penser? Eh bien, parlons du mont McKinley en Alaska. Le sommet est à environ quatre milles au-dessus du niveau de la mer. Lorsque vous arriverez au sommet de cette montagne, aurez-vous plus chaud ou plus froid qu'au pied de la montagne? Oui, c'est vrai, vous auriez plus froid. C'est parce que vous êtes six kilomètres plus haut. Revenons à la vapeur d'eau qui s'élève dans l'air au-dessus de la terre. Est-ce qu'il fera aussi plus froid? Oui, c'est vrai. Est-ce cela qui le transforme en nuage? Regardons cette démonstration et découvrons-le.`,
            `J'ai deux bocaux de seize onces, mais n'importe quel bocal de n'importe quelle taille ferait l'affaire. J'ai une tasse d'eau chaude et un bol rempli de glaçons. Si vous faites la démonstration avec moi à la maison, demandez à un adulte de vous aider avec l'eau chaude. Il n'a pas besoin de bouillir, mais il devrait être plus chaud que vous ne voulez le toucher. N'hésitez pas à utiliser un gant de cuisine pour vous protéger des brûlures. J'ai aussi une boîte d'allumettes, pour laquelle vous avez également besoin d'un adulte pour vous aider. Remplissez les deux pots d'eau au quart environ. Faisons-les même juste pour le plaisir. L'image du livre Ma lumière de Molly Bang nous aide à deviner que si nous refroidissons la vapeur d'eau provenant de l'eau chaude, un nuage devrait se former. Alors, mettons de la glace dans le couvercle pour que nous puissions refroidir la vapeur d'eau provenant de l'eau chaude. Attendons un peu pour voir si un nuage se forme. Un nuage se forme-t-il? Comment? Pas de nuage? Hmmm.... Que se passe-t-il? En fait, il nous manque un élément clé de ce qui se passe dans le ciel pour faire des nuages. Savez-vous ce que c'est? Si vous aviez deviné la poussière, vous auriez raison. Il y a de minuscules morceaux de poussière dans l'air tout le temps tout autour de nous. Vous pouvez même parfois voir la poussière flotter dans un rayon de lumière lorsque cette lumière entre dans votre maison. Allumons une allumette sur l'autre pot pour y faire un peu plus de poussière. Nous allons simplement laisser tomber un match là-bas et nous n'avons pas à nous en soucier. Et puis nous refroidirons ce pot d'eau avec le couvercle rempli de glace. Avons-nous un nuage qui se forme dans le bocal avec la poussière de l'allumette? Il a l'air plus nuageux que le premier pot. Je pense qu'un nuage s'est formé presque immédiatement. Levons le couvercle et voyons le nuage flotter vers le ciel. Vous voyez cela?`,
            `Les nuages se forment lorsque de minuscules morceaux de vapeur d'eau se condensent, c'est-à-dire qu'ils deviennent suffisamment froids pour se transformer en eau, sur un morceau de poussière légèrement plus gros. Ce morceau de poussière est encore si petit que vous et moi ne pouvons pas le voir. Ce morceau de poussière s'appelle un aérosol.`,
            `Et maintenant vous savez comment sont faits les nuages. Merci d'avoir pris le temps de penser avec la Brainiac Baroness.`,
          ]
        )
      )
    ],
    new DramaExcerpt(
      `${process.env.PUBLIC_URL}/assets/book/myLight/pages/3.jpg`,
      new MultiLingual(
        'In <u>My Light</u>, on the third (including title page) two-page spread, the right-hand page text says:  Each day I warm your land and water.  Tiny drops of warm water rise and form clouds.  This is a simplified picture and description of cloud formation.',
        'En <u>Mi Luz</u>, En la tercera (incluyendo la página del título) extensión de dos páginas, la página de la derecha dice: Cada día yo caliento tu tierra y tu agua. Pequeñas gotas de agua tibia suben y forman nubes. Esta es una imagen simplificada y descripción de la formación de nubes.',
        `Dans <u>Ma lumière</u>, sur la troisième page de double page (y compris la page de titre), le texte de la page de droite dit: ''Chaque jour, je réchauffe votre terre et votre eau. De minuscules gouttes d'eau chaude montent et forment des nuages.'' Il s'agit d'une image et d'une description simplifiées de la formation des nuages.`
      )
    )
  ),
  //-------------------------------------------------------
  pinwheelExp: new Drama(
    'pinwheelExp',
    new MultiLingual(
      'Turbine Experiment',
      'Experimento De Molinillo',
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
        [
          `galón de leche`,
          `tijeras`,
          `regla`,
          `perforadora`,
          `marcador permanente`,
          `palo para brocheta de bambú con punta`,
          `cinta adhesiva`,
          `papel borrador`,
        ],
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
        [
          `cuadro de plástico ya cortado de un galón para leche, con hoyos ya perforados y con líneas diagonales dibujadas.`,
          `palo para Brocheta de bambú con punta`,
          `tijeras`,
        ],
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
      [
        `Los molinillos son como turbinas pequeñas. Después de que los niños los han hecho, pueden probarlos en “viento”, soplándoles o corriendo mientras los sostienen, afuera, o creando un “campo de turbinas” afuera del salón de clases.`,
        `Después, puedes decirles que coloquen los molinillos debajo de una corriente de agua para simular la turbina de una presa hidroeléctrica.`,
        `Para instrucciones más detalladas de cómo construir los molinillos, selecciona el botón de "Abrir PDF" abajo.`,
      ],
      [
        'Les moulins à vent sont comme de petites turbines.',
        `Une fois que les enfants les ont fabriqués, ils peuvent les essayer dans le  ''vent'' en soufflant dessus ou en courant tout en les tenant, à l'extérieur, ou en créant un ''champ de turbines'' à l'extérieur de la classe.`,
        `Ensuite, vous pouvez leur demander de les placer sous l'eau courante pour simuler une turbine dans un barrage hydroélectrique.`,
      ]
    ),
    '',
    [
      new DramaExcerpt(
        `${process.env.PUBLIC_URL}/assets/book/myLight/pages/5.jpg`,
        new MultiLingual(
          'In <u>My Light</u>, on the fifth (including title page) two-page spread, the left-hand page talks about a dam and turbines and the right-hand page shows a picture of the turbine.',
          'En <u>Mi Luz</u>, en la quinta (incluyendo la página del título) extensión de dos páginas, la página de la izquierda habla sobre una presa y turbinas, y la página de la derecha muestra una imagen de la turbina.',
          `Dans le livre, <u>Ma lumiére</u>, sur la cinquième page de double page (y compris la page de titre), la page de gauche décrit un barrage et de turbines et la page de droite montre une image de la turbine.`
        )
      ),
      new DramaExcerpt(
        `${process.env.PUBLIC_URL}/assets/book/myLight/pages/7.jpg`,
        new MultiLingual(
          'The seventh two-page spread describes and shows wind turbines.',
          'La séptima extensión de dos páginas describe y muestra turbinas de viento.',
          `La septième page de double page décrit et montre les éoliennes.`
        )
      ),
      new DramaExcerpt(
        `${process.env.PUBLIC_URL}/assets/book/myLight/pages/11.jpg`,
        new MultiLingual(
          'The eleventh two-page spread describes and shows the turbines pushed by the steam made by heating water at coal-burning power plants.',
          'La onceava extensión de dos páginas describe y muestra las turbinas empujadas por el vapor que está formado por el calentamiento de agua en plantas de energía que queman carbón.',
          `La onzième page de double page décrit et montre les turbines poussées par la vapeur produite par le chauffage de l'eau dans les centrales électriques au charbon.`
        )
      ),
    ],
    new MultiLingual(
      pinwheelInstructions,
      pinwheelInstructionsSPA,
      pinwheelInstructionsFRA
    )
  ),
  //-------------------------------------------------------
  heartbeatExp: new Drama(
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
    new DramaExcerpt(
      `${process.env.PUBLIC_URL}/assets/book/livingSunlight/pages/2.jpg`,
      new MultiLingual(
        'In <u>Living Sunlight</u>, on the second (including title page) two-page spread, the right-hand page talks about feeling your heart.',
        `En <u>Luz Viviente</u>, en la segunda (incluyendo la página del título) extensión de dos páginas, la página de la derecha habla sobre sentir el latido de tu corazón.`,
        `Dans le livre La lumière vivante du soleil, sur la deuxième page de double page (y compris la page de titre), la page de droite parle de ressentir votre cœur.`
      )
    )
  ),
  //-------------------------------------------------------
  breathHoldExp: new Drama(
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
    new DramaExcerpt(
      `${process.env.PUBLIC_URL}/assets/book/livingSunlight/pages/12.jpg`,
      new MultiLingual(
        'In <u>Living Sunlight</u>, on the twelfth (including title page) two-page spread describes breathing in the oxygen plants make.',
        'En <u>Luz Viviente</u>, en la doceava (incluyendo la página del título) extensión de dos páginas, se describe lo que es respirar el oxígeno que producen las plantas.',
        'Dans le livre, La lumière vivante du soleil, sur la douzième page (y compris la page de titre), deux pages décrivent la respiration dans l\'oxygène que produisent les plantes. '
      )
    )

  ),
  //-------------------------------------------------------
  countBreathExp: new Drama(
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
      new DramaExcerpt(
        `${process.env.PUBLIC_URL}/assets/book/livingSunlight/pages/10.jpg`,
        new MultiLingual(
          '<u>Living Sunlight</u>, on the tenth (including title page) two-page spread, talks about how animals get their energy from the plants they eat.  Everything you do takes energy from food, even resting!',
          'En <u>Luz Viviente</u>, en la décima (incluyendo la página del título) extensión de 2 páginas, habla sobre cómo los animales obtienen su energía de las plantas que comen. ¡Todo lo que haces requiere energía que proviene de la comida, hasta descansar!',
          `Le livre, La lumière vivante du soleil, sur la dixième page de double page (y compris la page de titre), explique comment les animaux tirent leur énergie des plantes qu'ils mangent. Tout ce que vous faites prend de l'énergie à partir de la nourriture, même au repos!`
        )
      ),
      new DramaExcerpt(
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
  photoSynthDramaExp: new Drama(
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
      new DramaExcerpt(
        `${process.env.PUBLIC_URL}/assets/book/livingSunlight/pages/6.jpg`,
        new MultiLingual(
          '<u>Living Sunlight</u>, on the sixth, seventh, and eighth (including title page) two-page spreads pictures and describes photosynthesis.',
          '<u>Luz Viviente</u>, en las sexta, séptima, y octavas (incluyendo la página del título) extensiones de dos páginas se muestra y describe la fotosíntesis.',
          `Dans le livre, La lumière vivante du soleil, sur les sixième, septième et huitième (y compris la page de titre) les double page, des images et la description de la photosynthèse.`
        )
      ),
      new DramaExcerpt(
        [
          `${process.env.PUBLIC_URL}/assets/book/livingSunlight/pages/7.jpg`,
          `${process.env.PUBLIC_URL}/assets/book/livingSunlight/pages/8.jpg`
        ]
      )
    ]
  ),
  //-------------------------------------------------------
  squashPlantsExp: new Drama(
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
    new DramaExcerpt(
      `${process.env.PUBLIC_URL}/assets/book/buriedSunlight/pages/9.jpg`,
      new MultiLingual(
        'On the ninth two-page spread <u>Buried Sunlight</u> pictures and describes how plant matter piled up and got squashed to make fossil fuels.',
        'En la novena extensión de dos páginas, <u>Luz Enterrada</u> muestra y describe cómo la materia vegetal se apiló y aplastó para formar combustibles fósiles. ',
        `Sur la neuvième page de double page, L'ensoleillement enterré présente des images et décrit comment la matière végétale s'est empilée et a été écrasée pour produire des combustibles fossiles.`
      )
    )
  ),
  //-------------------------------------------------------
  carGreenhouseExp: new Drama(
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
    new DramaExcerpt(
      `${process.env.PUBLIC_URL}/assets/book/buriedSunlight/pages/13.jpg`,
      new MultiLingual(
        'What is a greenhouse?  On the thirteenth (including title page) two-page spread, <u>Buried Sunlight</u>  pictures and describes how the air around the Earth (called the blanket of gases around the Earth, or the atmosphere) helps control the Earth’s temperature.  A greenhouse does the same thing to grow food all year round rather than just during the summer (or growing seasons of your area).',
        '¿Qué es un invernadero? En la décimo tercera (incluyendo la página del título) extensión de dos páginas, <u>Luz Enterrada</u> muestra y describe cómo el aire que rodea la Tierra (llamada la capa de gases alrededor de la Tierra, o la atmósfera) ayuda a controlar la temperatura de la Tierra. Un invernadero hace lo mismo para producir alimento todo el año en vez de solamente durante el verano (o la temporada de cultivo de tu zona).',
        `Qu'est-ce qu'une serre ? Sur la treizième page de double page (y compris la page de titre), L'ensoleillement enterré décrit, avec les images, comment l'air autour de la Terre (appelée couverture de gaz autour de la Terre, ou atmosphère) aide à contrôler la température de la Terre. Une serre fait la même chose pour faire pousser de la nourriture toute l'année plutôt que juste pendant l'été (ou les saisons de croissance de votre région).`
      )
    )
  ),
  //-------------------------------------------------------
  pizzaBoxExp: new Drama(
    'pizzaBoxExp',
    new MultiLingual(
      'Pizza Box Solar Oven Experiment',
      `Experimento de Horno Solar Hecho con Caja de Pizza`,
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
      [
        `¡Usando la energía del sol para algo bueno! Haz un horno solar con una caja de pizza, para usar el efecto invernadero para calentar malvaviscos.`,
        `Ve los videos de abajo, o ve las instrucciones incluidas en PDF`,
      ],
      [
        `Utiliser l'énergie du soleil pour de bon!`,
        `Fabriquez un four solaire de boîte à pizza pour utiliser l'effet de serre pour chauffer des guimauves/pour faire des 's'mores'.`,
      ]
    ),
    new MultiLingual(
      [
        new DramaVideo(
          "https://www.youtube.com/embed/QrUCkS5682I",
          new MultiLingual(
            'Instructions for teachers to make the kits:',
            'Instrucciones para que los maestros hagan los kits:'
          )
        ),
        new DramaVideo(
          "https://www.youtube.com/embed/iXHvWVvaguI",
          new MultiLingual(
            'Instructions for children to make the solar oven from the pizza box kits:',
            'Instrucciones para que los niños hagan el horno solar con kits de caja de pizza:'
          )
        )
      ],
      '',
      [
        new DramaVideo(
          `https://www.youtube.com/embed/EnPkIljz9bg`,
          new MultiLingual(
            '',
            '',
            `Ce vidéo est en français`
          )
        ),
        new DramaVideo(
          "https://www.youtube.com/embed/QrUCkS5682I",
          new MultiLingual(
            '','','Pour les vidéos en anglais (1/2):'
          )
        ),
        new DramaVideo(
          "https://www.youtube.com/embed/iXHvWVvaguI",
          new MultiLingual(
            '','','Pour les vidéos en anglais (2/2):'
          )
        )
      ]
    ),
    '',
    new MultiLingual(
      pizzaBoxInstructions,
      pizzaBoxInsructionsSPA
    )
  ),
  //-------------------------------------------------------
  golfBallExp: new Drama(
    'golfBallExp',
    new MultiLingual(
      'Earth\'s Water Experiment',
      'Experimento del Agua de la Tierra',
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
      [
        `globo terráqueo estándar (aproximadamente 12 pulgadas de diámetro)`,
        `varias pelotas de golf`,
        `varias canicas azules`,
        `varias cuentas diminutas (del tamaño de semillas diminutas, y se pueden usar como sustituto semillas pequeñas)`,
      ],
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
      [
        `Para ayudar a los niños a entender esto mejor (y demostrar la proporción aproximada de la tierra al agua y al agua fresca.), haz las siguientes actividades:`,
        [
          `Ten un globo terráqueo estándar (aproximadamente 12 pulgadas de diámetro)`,
          `Ten varias pelotas de golf, varias canicas azules, y varias cuentas diminutas (del tamaño de semillas diminutas, y se pueden usar como sustituto semillas pequeñas)`,
          [
            `La pelota de golf representa el agua disponible (principalmente agua salada en los océanos)`,
            `La canica azul representa el agua fresca (principalmente atrapada en hielo en los polos)`,
            `Las cuentas (semillas) diminutas representan el agua fresca disponible para nosotros`,
          ]
        ]
      ],
      [
        `Pour aider les enfants à mieux comprendre cela (et montrer le rapport approximatif de la terre à l'eau à l'eau douce), faites les activités suivantes:`,
        `La balle de golf représente l'eau disponible (principalement l'eau salée dans les océans)`,
        `Le marbre bleu représente l'eau douce (principalement enfermée dans la glace aux pôles)`,
        `De minuscules perles (graines) représentent l'eau douce à notre disposition`,
      ]
    ),
    '',
    new DramaExcerpt(
      `${process.env.PUBLIC_URL}/assets/book/riversOfSunlight/pages/3.jpg`,
      new MultiLingual(
        'In <u>Rivers of Sunlight</u>, on the third (including title page) two-page spread, the text describes the amount of water available to us as salt water and as fresh water.',
        'En <u>Ríos de Luz</u>, en la tercera (incluyendo la página del título) extensión de dos páginas, el texto describe la cantidad de agua disponible para nosotros como agua salada y como agua fresca.',
        `Dans le livre Les rivières d'ensoleillement, sur la troisième page de double page (y compris la page de titre), le texte décrit la quantité d'eau à notre disposition sous forme d'eau salée et d'eau douce. `
      )
    )
  ),
  //-------------------------------------------------------
  waterCycleDramaExp: new Drama(
    'waterCycleDramaExp',
    new MultiLingual(
      'Water Cycle Drama',
      'Drama del Ciclo del Agua',
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
      [
        `Sol: gorro amarillo (puede ser un trozo de papel amarillo o un dibujo del sol)`,
        `Agua del océano: listón azul (u olas dibujadas en un pedazo de papel)`,
        `Vapor de agua: listón blanco/plateado (o papel de china blanco, o papel común cortado en tiras dejando 2 pulgadas en un extremo para sostenerlo)`,
        `Nube: gorro de cocinero (puede ser un pedazo de papel blanco o un dibujo de unas nubes)`,
        `Lluvia: gorro azul (puede ser un pedazo de papel azul o un dibujo de gotas de agua)`,
      ],
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
      [
        `Discute y actúa el ciclo del agua—ver la descripción de arriba.`,
        [
          `Actúa el ciclo de agua (luz solar, agua como océano, vapor de agua, nubes, lluvia)`,
          [
            `Sol: gorro amarillo (puede ser un trozo de papel amarillo o un dibujo del sol): levanta agua del mar salado por medio de la evaporación`,
            `Agua del océano: listón azul (u olas dibujadas en un pedazo de papel)`,
            `Vapor de agua: listón blanco/plateado (o papel de china blanca, o papel común cortado en tiras dejando 2 pulgadas en un extremo para sostenerlo). El agua del mar evaporada (o cualquier agua) se vuelve vapor de agua, un gas que flota hacia el cielo.`,
            `Nube: gorro de cocinero (puede ser un pedazo de papel blanco o un dibujo de unas nubes). Cuando el vapor de agua flota hacia el cielo, se enfría alrededor de motas de polvo para hacer nubes.`,
            `Lluvia: gorro azul (puede ser un pedazo de papel azul o un dibujo de gotas de aguas). Cuando suficiente vapor de agua se enfría alrededor de motas de polvo en las nubes, forma gotas de agua que caen a la tierra como lluvia (o nieve, si hace frio).`,

          ],
          `Los/Las maestros/as dibujan el ciclo del agua con ayuda de los niños--¡los niños también pueden dibujar!`,
        ]
      ],
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
      new DramaExcerpt(
        `${process.env.PUBLIC_URL}/assets/book/riversOfSunlight/pages/4.jpg`,
        new MultiLingual(
          "<u>Rivers of Sunlight</u>'s description of the water cycle - starts on the fourth (including title page) two-page spread of <u>Rivers of Sunlight</u> and goes to the seventh two-page spread",
          'La descripción del ciclo del agua en <u>Ríos de Luz</u>– empieza en la cuarta (incluyendo la página del título) extensión de dos páginas de <u>Ríos de Luz</u> y continúa hasta la séptima extensión de dos páginas.',
          `Description du cycle de l'eau de Les rivières d'ensoleillement- commence sur la quatrième (y compris la page de titre) de double page de Les rivières d'ensoleillement et va à la septième de double page`
        )
      ),
      new DramaExcerpt(
        [
          `${process.env.PUBLIC_URL}/assets/book/riversOfSunlight/pages/5.jpg`,
          `${process.env.PUBLIC_URL}/assets/book/riversOfSunlight/pages/6.jpg`
        ]
      ),
      new DramaExcerpt(
        [
          `${process.env.PUBLIC_URL}/assets/book/riversOfSunlight/pages/7.jpg`,
        ]
      )
    ]
  ),
  //-------------------------------------------------------
  waterMathExp: new Drama(
    'waterMathExp',
    new MultiLingual(
      'Water Math',
      'Matemáticas de Agua',
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
      [
        `¿Cuánta agua usas? ¡Hora de las matemáticas! Esto usa el uso promedio de varias actividades típicas (por ejemplo: un escusado de bajo flujo usa 1.5-2 galones, uno normal usa 5 galones, yo asumo 3 galones por descarga)`,
        `¿Cuántas veces descargas un escusado durante el día? Multiplica ese número por 3.`,
        `¿Cuántas veces te lavas los dientes y dejas el agua corriendo? Multiplica ese número por 2.`,
        `¿Cuántas veces al día te lavas los dientes y NO dejas el agua corriendo? Multiplica ese número por 1/2.`,
        `¿Cuántas veces te bañas al día? (Ayuda a los niños a averiguarlo si no se bañan a diario.) Multiplica ese número por 2.`,
        `¿Cuántas veces al día te lavas las manos? Multiplica ese número por 1.`,
        `Lavado de ropa: Supongamos que la ropa se lava una vez a la semana con una lavadora promedio (entre estándar y de alta eficiencia): agrega 4 galones por día a tu total.`,
        `Cocina/cocinar: alguien está lavando y cocinando comida y lavando los trastes todo lo cual requiere agua. Agrega 8 galones por día a tu total.`,
        `Agrega todos los números para conseguir el uso de agua promedio del alumno por día.`,
        `Haz una lluvia de ideas sobre cómo se puede reducir este uso del agua. El 20% del desperdicio de agua es una fuga en el hogar. Escusados de bajo flujo, llaves de bajo flujo, no dejes el agua corriendo, no le bajes al escusado si no es “necesario” (No lo uses para basura, “Si es amarillo, déjalo un ratillo. Si es marrón, dale un bajón.”), usa agua “gris” de la cocina para tus plantas. Platica sobre qué es el agua gris y cómo se puede usar.`,
      ],
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
  waterReqExp: new Drama(
    'waterReqExp',
    new MultiLingual(
      'Water Requirements',
      'Requisitos del Agua',
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
      [
        `Requisitos reveladores sobre algunas de las cosas que puedes estarte poniendo/comiendo/o usando en este momento (los estimados varían –te das una idea). Diles a los niños que hagan una lluvia de ideas sobre cómo se usa el agua para hacer cada uno de los siguientes objetos y por qué.`,
        [
          `Un par de zapatos: 2,257 galones`,
          `Unos pantalones de mezclilla: 2,636 galones`,
          `Una camiseta de algodón: 713 galones`,
          `Una barra de chocolate: 454 galones`,
          `Un trozo de carne de res: 4,000 galones`,
          `Una hamburguesa: 632 galones`,
          `Una pizza de puro queso: 321 galones`,
          `Una rebanada de queso: 40 galones`,
          `Medio litro de cerveza: 45 galones`,
          `Una taza de café: 35 galones`,
          `Una manzana: 22 galones`,
          `Una hogaza de pan: 13 galones`,
          `Una hoja de papel: 3 galones`,
          `Un teléfono celular: 240 galones`,
          `Un galón de gasolina: 13 galones`,
          `Un carro: 39,090 galones`,
        ]
      ],
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
  dirtyWaterExp: new Drama(
    'dirtyWaterExp',
    new MultiLingual(
      'Dirty Water Experiment',
      'Experimento de Agua Sucia',
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
      [
        `3 jarras transparentes`,
        `1 cucharadita de tierra`,
        `1 cucharada de sal`,
      ],
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
      [
        `Ten tres jarras transparentes—mientras los niños observan, llénalas con agua (o diles a los niños que las llenen) y ponlas sobre el piso/mesa enfrente de ellos.`,
        [
          `Pon una cucharadita de tierra adentro de una de las jarras`,
          `Pon una cucharada de sal en la siguiente jarra`,
          `Deja la tercera jarra con pura agua`,
          `Ofréceles a los niños un vaso de agua y pregúntales que de qué jarra prefieren tomar.`,
          `Después, mientras toman, pregúntales por qué eligieron esa jarra`,
          `¿Cómo se ensucia el agua?`,
          [
            <Link to={'/read/book/globalWarmingExpress/page=69'}>Lee <u>El Tren del Calentamiento Global</u>, de Marina Weber, capítulo titulado Las Arenas Petroliferas.</Link>,
            <Link to={'/read/book/globalWarmingExpress/page=86'}>Lee <u>El Tren del Calentamiento Global</u>, de Marina Weber capítulo titulado La Costa del Golfo.</Link>,
            <Link to={'/read/book/globalWarmingExpress/page=95'}>Lee <u>El Tren del Calentamiento Global</u>, de Marina Weber capítulo titulado Acorn Creek.</Link>,
          ],
        ],
        `¿De dónde obtenemos nuestra agua? De ríos y acuíferos.`,
        `El agua necesita estar limpia para poderla tomar.`,
        [
          `¿Qué es lo que tenemos que eliminar del agua para limpiarla? Haz una lista`,
          `¿Cómo la limpiamos?`,
          [
            `Esto se puede suplementar con una visita a una planta de tratamiento de agua`,
            `Esto se puede suplementar con una plática`,
          ]
        ]
      ],
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
          `Lisez le chapit L'express de réchauffement climatique, de Marina Weber, intitulé Les sables bitumineux.`,
          `Lisez le chapitre L'express de réchauffement climatique, de Marina Weber, intitulé Le Côte du Golfe.`,
          `Lisez le chapitre L'express de réchauffement climatique, de Marina Weber, intitulé Le ruisseau Acorn.`,
          `Quelle sont les sources de notre eau? Rivières et aquifères.`,
          `L'eau doit être propre pour être bue. Qu'y a-t-il dedans que nous devons nettoyer? Faites une liste.`,
          `Comment le nettoie-t-on ? Cela pourrait être étendu avec une visite à une usine de traitement de l'eau Cela pourrait être élargi avec la discussion`,
        ]
      ]
    )
  ),
  //-------------------------------------------------------
  conveyorBeltExp: new Drama(
    'conveyorBeltExp',
    new MultiLingual(
      'Water Conveyor Belt Experiment',
      'Experimento de Cinta Transportadora de Agua',
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
      [
        `Contenedor de un galón, transparente con boca grande (TIENE que ser transparente)`,
        `Agua a temperatura ambiente`,
        `Botellita de champú tamaño para viajar vacía`,
        `Bandeja de hielo o 4 vasitos desechables de papel`,
        `Colorante alimenticio rojo y azul`,
        `Método para calentar una cantidad pequeña de agua`,
        `Manera de congelar agua para volverla hielo`,
      ],
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
      [
        `Duración: Este experimento requiere congelar agua para hacer cubos de hielo. Requiere preparación por adelantado.`,
        `Llena cuatro de los espacios en la bandeja de hielo con agua (o llena los 4 vasos de papel a la mitad con agua)`,
        `Pinta el agua de azul con 10-20 gotas de colorante alimenticio azul`,
        `Congela durante toda la noche`,
        `Llena un recipiente transparente de un galón con agua y déjalo reposar durante unas horas para que alcance la temperatura ambiente.`,
        `Llena la botellita de champú tamaño para viajar con agua caliente (o con agua fría y caliéntala en el microondas por aproximadamente 30 segundos hasta que esté caliente, pero no tanto que no se pueda tocar)`,
        `Pinta el agua caliente de rojo con 10-20 gotas de colorante alimenticio rojo`,
        `Coloca los cubos de hielo azul en un recipiente transparente de un galón lleno de agua a temperatura ambiente`,
        `Coloca la botellita de champú (sin tapa) llena de agua caliente roja de lado, en un recipiente transparente de un galón lleno de agua a temperatura ambiente.`,
        `Una vez que los niños vean todas las partes, pídeles que adivinen y /o dibujen lo que creen que sucederá cuando se coloquen en el mismo recipiente. Después, deja que los niños observen lo que sucede y lo dibujen.`,
        `Cuando el agua en el ecuador se calienta, crea corrientes que viajan por la superficie de los océanos. Cuando el agua se enfría en los polos norte y sur, crea corrientes que viajan por el suelo de los océanos. Esta es una de las formas en que el sol mueve el agua alrededor de la tierra.`,
      ],
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
      new DramaExcerpt(
        `${process.env.PUBLIC_URL}/assets/book/riversOfSunlight/pages/11.jpg`,
        new MultiLingual(
          'Hot water rises and cold water sinks as described on the eleventh through fourteenth two-page spreads of <u>Rivers of Sunlight</u>.',
          'El agua caliente sube y el agua fría baja, tal como se describe de la onceava a la decimocuarta extensión de dos páginas en Ríos de Luz.',
          `L'eau chaude monte et l'eau froide descend comme décrit dans les onzième à quatorzième feuillets de double page de Les rivières d'ensoleillement.`
        )
      ),
      new DramaExcerpt(
        [
          `${process.env.PUBLIC_URL}/assets/book/riversOfSunlight/pages/12.jpg`,
          `${process.env.PUBLIC_URL}/assets/book/riversOfSunlight/pages/13.jpg`,
        ],
      ),
      new DramaExcerpt(
        [
          `${process.env.PUBLIC_URL}/assets/book/riversOfSunlight/pages/14.jpg`,
        ],
      )
    ]
  )
}

let AwarenessesArray = [];

for (let awareness in awarenesses){
  AwarenessesArray.push(awarenesses[awareness]);
}
export {AwarenessesArray};