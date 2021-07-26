import guide from './GWE Curriculum .pdf';
import React from 'react';
import {MultiLingual} from "../../data/model/multiLingual";

export const guideText = [
  {
    heading: new MultiLingual(
      'Intro',
      'Introducción',
      'Introduction'
    ),
    body: new MultiLingual(
      [
        <p>Welcome to the Global W.E./Global Warming Express Online Curriculum Guide</p>,
        <p>As you can see, the Online Curriculum includes books (written and spoken) and discussions about the books (also written and spoken). Each class or lesson is called a Session. Why Session? The word session is a little less like lesson or class. Although we may be joining your class or lesson, and although we cover a good deal of science, history and geography, we’d like your students to associate this content with a break from academics.</p>,
        <p>Here are some tips for playing the books and the discussions:</p>
      ],
      [
        <p>Bienvenido/a la Guía Curricular en línea de Global W.E. (Global Warming Express)</p>,
        <p>Como puedes ver, el Currículo en Línea incluye libros (escritos y hablados) y platicas sobre los libros (también leídas y habladas). Cada clase o lección es llamada Sesión, ¿Por qué Sesión? La palabra sesión es un poco menos como lección o clase. Aunque tal vez seamos parte de tu lección o clase, y aunque cubrimos gran parte de ciencias, historia y geografía, nos gustaría que tus estudiantes asociaran este contenido con un descanso de lo académico.</p>,
        <p>A continuación veras consejos para tocar los libros y las pláticas.</p>
      ],
      [
        <p>Bienvenue dans le guide du programme en ligne Global W.E./Global Warming Express ( L'express de réchauffement climatique)</p>,
        <p>Comme vous pouvez le voir, le programme en ligne comprend des livres (écrits et orales) et des discussions sur les livres (également écrits et orales). Chaque classe ou leçon est appelée une session.  Le mot session est un peu moins comme 'leçon' ou 'classe'. Bien que nous puissions rejoindre votre classe ou votre leçon, et bien que nous discutons une bonne partie des sciences, de l'histoire et de la géographie, nous aimerions que vos étudiants associent ce contenu à une pause académique.</p>,
        <p>Voici quelques conseils pour jouer les livres et les discussions:</p>,
      ]
    ),
  },
  {
    heading: new MultiLingual(
      'The Sunlight Series Books',
      'La Serie de Libros sobre La Luz Solar',
      `Les livres de la série Sunlight`
    ),
    body: new MultiLingual(
      [
        <li>Play each book twice.</li>,
        <li>
          Play once, straight through, with the narrator reading aloud
          and the students following by listening or reading along.
        </li>,
        <li>
          For the second time, try not playing the narration and simply
          let the students take turns reading. This will take longer, but
          it will give the students a chance to practice their skills with
          reading aloud. It also will enable the students to review the
          material and to understand it more kinesthetically, while they
          read it, themselves.
        </li>,
        <li>
          Pause the reading often. Focus on the illustrations and bring
          in questions about the images. A good deal of explanation can
          occur when you and the students are investigating the pictures.
          The same goes for the text. Pause to explain new words and new
          concepts. Allow the students to try to explain, first, and you
          can embellish their explanations (no matter how short ot how
          incorrect) into explanation of the material. Keep them engaged
          with questions, throughout.
        </li>,
        <li>
          Note: For <u>The Sunlight Series</u> books, be sure to
          introduce the word “photon” and its explanation. Once the
          students really understand what photons are, challenge them to
          find the photons in each book. They will soon see that the
          photons fill each book!
        </li>,
        <li>
          For the <u>Rivers of Sunlight</u> book, which deals with the
          ocean, if your students do not have experience of the ocean, try
          sharing one or both of the BBC’s excellent <i>Blue Planet</i>{' '}
          and <i>Blue Planet II</i> films before you read the book!
        </li>
      ],
      [
        <li>Toca cada libro dos veces.</li>,
        <li>Ponlo la primera vez, de principio a fin, con la narradora leyendo en voz alta mientras los estudiantes siguen escuchando o leyendo.</li>,
        <li>La segunda vez, trata de no poner la narración y simplemente deja que los estudiantes tomen turnos leyendo. Esto tardará más, pero les dará a los estudiantes oportunidad de practicar la lectura en voz alta. También les permitirá repasar el material y entenderlo de manera más cenestésicamente, mientras lo leen por sí mismos.</li>,
        <li>Pausa la lectura frecuentemente. Enfócate en las ilustraciones e invita preguntas sobre las imágenes. Gran parte de la explicación puede suceder cuando los estudiantes y tú están investigando las imágenes. Igualmente con el texto. Pausa para explicar nuevas palabras y nuevos conceptos. Permite que los estudiantes intenten explicar primero, y puedes suplementar su explicación (no importa que tan cortas o correctas sean) para explicación del material. Mantenlos participando con preguntas a lo largo de la lectura.</li>,
        <li>Nota: Para los libros de la Serie sobre la Luz Solar, asegúrate de presentar la palabra “fotón” y su explicación. Una vez que los estudiantes realmente entiendan lo que son los fotones, rétalos a encontrar los fotones en cada libro. ¡Pronto verán que los fotones llenan cada libro!</li>,
        <li>Para el libro Ríos de Luz, que trata del océano, si tus estudiantes no conocen el océano, intenta compartir una o ambas excelentes películas de la BBC, Blue Planet (Planeta Azul) o Blue Planet II, ¡antes de leer el libro!</li>,
      ],
      [
        <li>Jouez chaque livre deux fois. Jouez une fois, d'un bout à l'autre, avec le narrateur lisant à haute voix et les élèves suivant en écoutant ou en lisant en même temps. Pour la deuxième fois, ne jouez pas la narration et laissez simplement les élèves lire à tour de rôle. Cela prendra plus de temps, mais cela donnera aux élèves une chance de mettre en pratique leurs compétences en lecture à haute voix. Cela permettra également aux étudiants de revoir le matériel et de le comprendre de manière plus kinesthésique, pendant qu'ils le lisent eux-mêmes.</li>,
        <li>Mettez souvent la lecture en pause. Concentrez-vous sur les illustrations et posez des questions sur les images. Il y aura beaucoup de discussions lorsque vous et les élèves étudiez les images et le texte. Faites une pause pour expliquer de nouveaux mots et de nouveaux concepts. Permettez aux élèves d'essayer d'expliquer, d'abord, et vous pouvez embellir leurs explications (peu importe qu'elles soient brèves ou incorrectes) en une explication du matériel. Gardez-les engagés avec des questions, tout au long.</li>,
        <li>Remarquez: Pour les livres de la série Sunlight, assurez-vous d'introduire le mot ''photon'' et son explication. Une fois que les élèves ont vraiment compris ce que sont les photons, mettez-les au défi de trouver les photons dans chaque livre. Ils verront bientôt que les photons remplissent chaque livre! Pour le livre Les rivières d'ensoleillement, qui traite de l'océan, si vos élèves n'ont pas d'expérience de l'océan, vous pouvez partager un ou les deux excellents films Blue Planet et Blue Planet II de la BBC avant de lire le livre!</li>,
      ]
    ),
  },
  {
    heading: new MultiLingual(
      'The Global Warming Express Book',
      'El Libro del Tren del Calentamiento Global',
      `Le livre L'express du rechauffement climatique`
    ),
    body: new MultiLingual(
      [
        <li>Play each section twice</li>,
        <li>
          Play once, straight through, with the narrator reading aloud
          and the students following by listening or reading along.
        </li>,
        <li>
          For the second time, try not playing the narration and simply
          let the students take turns reading. This will take longer, but
          it will give the students a chance to practice their skills with
          reading aloud. It also will enable the students to review the
          material and to understand it more kinesthetically, while they
          read it, themselves.
        </li>,
        <li>
          This book obviously lends itself to having the students take
          different roles for the out-loud reading.
        </li>,
        <li>
          You might want to ask the students to read the book in
          sections, or all at once, at home. Many students are drawn to
          the book, as it was written by a kid their age, and they like to
          read it on their own.
        </li>,
        <li>
          Letting the students take their time in discussions about the
          book help them to not only learn the science within it, but
          inspires them to think about their own creative processes. We
          have found that this book has inspired students to draw, paint,
          collage, create arts and crafts, write and perform songs, dances
          and plays, and to make their own short films about their
          response to the book.
        </li>
      ],
      [
        <li>Toca cada sección dos veces</li>,
        <li>Ponlo la primera vez, de principio a fin, con la narradora leyendo en voz alta mientras los estudiantes siguen escuchando o leyendo.</li>,
        <li>La segunda vez, trata de no poner la narración y simplemente deja que los estudiantes tomen turnos leyendo. Esto tardará más, pero les dará a los estudiantes oportunidad de practicar la lectura en voz alta. También les permitirá repasar el material y entenderlo de manera más cenestésicamente, mientras lo leen por sí mismos.</li>,
        <li>Este libro obviamente se presta para asignar a cada estudiante un papel diferente para la lectura en voz alta.</li>,
        <li>Tal vez quieras pedirles a los estudiantes que lean el libro en secciones, o todo de una vez, en casa. Muchos estudiantes se interesan en el libro, ya que fue escrito por alguien de su edad, y les gusta leerlo por si mismos.</li>,
        <li>Dejar que los estudiantes tomen su tiempo en discusiones sobre el libro, les ayuda no solo a aprender la ciencia que contiene, sino que también los inspira a pensar sobre sus propios procesos creativos. Hemos encontrado que este libro ha inspirado a estudiantes a dibujar, pintar, hacer collages, crear manualidades artísticas, escribir y presentar canciones, crear bailes y obras de teatro, y ha hacer sus propios cortometrajes sobre su reacción al libro.</li>,
      ],
      [
        <li>Jouer chaque section deux fois. Jouez une fois, d'un bout à l'autre, avec le narrateur lisant à haute voix et les élèves suivant en écoutant ou en lisant en même temps. Pour la deuxième fois,  ne jouez pas la narration et laissez simplement les élèves lire à tour de rôle. Cela prendra plus de temps, mais cela donnera aux élèves une chance de mettre en pratique leurs compétences en lecture à haute voix. Cela permettra également aux étudiants de revoir le matériel et de le comprendre de manière plus kinesthésique, pendant qu'ils le lisent eux-mêmes.</li>,
        <li>Ce livre est écrit évidemment pour que les élèves jouent différents rôles pour la lecture à voix haute. Vous pouvez demander aux élèves de lire le livre par sections, ou en une seule fois, à la maison. De nombreux élèves sont attirés par le livre, car il a été écrit par un enfant de leur âge, et ils aiment le lire par eux-mêmes. Laisser les élèves prendre leur temps dans les discussions sur le livre les aide non seulement à apprendre la science qu'il contient, mais les incite à réfléchir à leurs propres processus créatifs. Nous avons découvert que ce livre a inspiré les élèves à dessiner, peindre, faire des collages, créer des objets d'art et de l'artisanat, écrire et interpréter des chansons, des danses et des pièces de théâtre, et à réaliser leurs propres courts métrages sur leur réaction au livre.</li>,
      ]
    ),
  },
  {
    heading: new MultiLingual(
      'The Discussions',
      'Las Pláticas',
      `Les discussions`
    ),
    body: new MultiLingual(
      [
        <li>Play each Discussion twice.</li>,
        <li>
          Play once, straight through, with the narrator reading aloud
          and the students following by listening or reading along.
        </li>,
        <li>
          For the second time, try not playing the narration and simply
          let the students take turns reading. This will take longer, but
          it will give the students a chance to practice their skills with
          reading aloud. It also will enable the students to review the
          material and to understand it more kinesthetically, while they
          read it, themselves.
        </li>,
        <li>
          Pause the reading often, in order to explain new words and new
          concepts. Allow the students to try to explain, first, and then
          you can embellish their explanations (no matter how short ot how
          incorrect) into explanation of the material. Keep them engaged
          with questions, throughout.
        </li>,
        <li>
          The Discussions also lend themselves to creating a play out of
          them. Allow the students to take different characters and to
          voice them. The students may even want to create their own plays
          based upon these portrayals.
        </li>,
        <li>
          Note that, in the <i>Greenhouse Gas Discussion</i>, there is an
          experiential aspect for the students. If you are teaching in a
          live classroom, consider bringing in sheets and large beach
          towels or blankets. (For a detailed explanation of how you might
          run this experience, refer to Session 1 in the GWE Curriculum,
          also on the website)
        </li>,
        <li>
          Note that Photons make their appearance, again, in one of the
          Discussions. You can challenge your students to find that image!
        </li>
      ],
      [
        <li>Toca cada Plática dos veces</li>,
        <li>Pon cada plática la primera vez, de principio a fin, con la narradora leyendo en voz alta mientras los estudiantes siguen escuchando o leyendo.</li>,
        <li>La segunda vez, trata de no poner la narración y simplemente deja que los estudiantes tomen turnos leyendo. Esto tardará más, pero les dará a los estudiantes oportunidad de practicar la lectura en voz alta. También les permitirá repasar el material y entenderlo de manera más cenestésicamente, mientras lo leen por sí mismos.</li>,
        <li>Pausa la lectura frecuentemente para explicar nuevas palabras y nuevos conceptos. Permite que los estudiantes intenten explicar primero, y puedes suplementar su explicación (no importa que tan cortas o correctas sean) para explicación del material. Mantenlos participando con preguntas a lo largo de la lectura.</li>,
        <li>Las Pláticas también se prestan para hacer una obra de teatro con ellas. Permite que los estudiantes hagan diferente papeles y les den voz. Inclusive es posible que los estudiantes quieran crear sus propias obras de teatro basadas en sus representaciones.</li>,
        <li>Nota que, en la Plática sobre los Gases de Efecto Invernadero, hay un aspecto experiencial para los estudiantes. SI estas ensenando en un salón presencial, considera traer sabanas y cobijas o toallas grandes para playa. (Para una explicación detallada de como puedes conducir esta dinámica, consulta la Sesión 1 en el plan de estudios de GWE, también en la página de internet)</li>,
        <li>Nota que los fotones vuelven a aparecer en una de las Pláticas. ¡Puedes retar a tus estudiantes a encontrar esa imagen!</li>,
      ],
      [
        <li>Jouez chaque discussion deux fois. Jouez une fois, d'un bout à l'autre, avec le narrateur lisant à haute voix et les élèves suivant en écoutant ou en lisant en même temps. Pour la deuxième fois, ne jouez pas la narration et laissez simplement les élèves lire à tour de rôle. Cela prendra plus de temps, mais cela donnera aux élèves une chance de mettre en pratique leurs compétences en lecture à haute voix. Cela permettra également aux étudiants de revoir le matériel et de le comprendre de manière plus kinesthésique, pendant qu'ils le lisent eux-mêmes. Arrêtez souvent la lecture, afin d'expliquer de nouveaux mots et de nouveaux concepts. Permettez aux élèves d'essayer d'expliquer, d'abord, puis vous pouvez embellir leurs explications (peu importe qu'elles soient brèves ou incorrectes) en une explication du matériel. Gardez-les engagés avec des questions, tout au long.</li>,
        <li>Les Discussions sont écrites pour faire une pièce de théâtre. Permettre aux élèves de prendre différents personnages et de les exprimer. Les élèves peuvent même créer leurs propres pièces basées sur ces représentations. Notez que, dans la discussion sur les gaz à effet de serre, il y a un aspect participatif pour les étudiants. Si vous enseignez dans une salle de classe en direct, pensez à apporter des draps et de grandes serviettes de plage ou des couvertures. (Pour une explication détaillée de la façon dont vous pourriez mener cette expérience, reportez-vous à la session 1 du programme GWE, également sur le site Web).  A noter que les Photons sont, encore une fois, dans l'une des Discussions. Vous pouvez mettre vos élèves au défi de trouver cette image!</li>,
      ]
    )
  },
  {
    heading: new MultiLingual(
      'Experiments',
      'Experimentos',
      `Expériences`
    ),
    body: new MultiLingual(
      [
        <p>These experiments, really activities, are useful to help the children understand the material better. Do as many as you can!</p>
      ],
      [<p>Estos experimentos, realmente actividades, son útiles para ayudar a los niños a entender mejor el material. ¡Haz cuantos puedas!</p>],
      [
        <p>Ces expériences, en réalité des activités, sont utiles pour aider les enfants à mieux comprendre la matière. Faites-en autant que vous le pouvez!</p>
      ]
    )
  },
  {
    heading: new MultiLingual(
      'Be Creative!',
      '¡Se Creativo/a!',
      `Sois créatif!`
    ),
    body: new MultiLingual(
      [
        <p>
          All of the materials we use lend themselves to students’
          imaginations. While you present the GWE Online Curriculum App,
          it’s best to take your time. Intersperse your teaching with
          activities, both indoors and outdoors, games, play and creative
          outlets, such as song, dance, puppet shows, plays, drawing,
          painting, murals and movies. We have found that any facts may be
          taught by means of Creative Drama. Creative Drama grounds the
          material in the students’ kinesthetic awareness by being
          experienced through their bodies.
        </p>,
        <p>
          For ideas about indoor and outdoor experiences and experiments,
          take a look at the <a href={guide} target={'_blank'} rel={'noopener  noreferrer'} className={'textLink'}> GWE After School Curriculum  </a>, also on the website.
        </p>
      ],
      [
        <p>Todos los materiales que usamos se prestan a las imaginaciones de los estudiantes. Mientras presentas el App del Currículo de GWE en Línea, es mejor tomarse su tiempo. Intercala tu enseñanza con actividades, tanto adentro como afuera, con juegos, oportunidades de juego y creatividad como canto, baile, marionetas, obras de teatro, dibujos, pinturas, murales y películas. Hemos encontrado que cualquier información puede ensenarse mediante las Artes Dramáticas Creativas. Las Artes Dramáticas Creativas basan el material en la conciencia cenestésica de los estudiantes al ser experimentado con sus cuerpos.</p>,
        <p>Para ideas sobre dinámicas en el interior y al aire libre, visita el <a href={guide} target={'_blank'} rel={'noopener  noreferrer'} className={'textLink'}>Currículo GWE de Después de Clases</a>, también en la página de internet.</p>,
      ],
      [
        <p>Tous les matériaux que nous utilisons stimuilent l'imagination des élèves. Pendant que vous présentez l'application GWE Online Curriculum, il est préférable de prendre votre temps. Entrecoupez votre enseignement avec des activités, à la fois à l'intérieur et à l'extérieur, des jeux, des jeux et des sorties créatives, telles que la chanson, la danse, les spectacles de marionnettes, les pièces de théâtre, le dessin, la peinture, les peintures murales et les films. Nous avons découvert que tous les faits peuvent être enseignés au moyen du théâtre créatif. Creative Drama fonde le matériel dans la conscience kinesthésique des étudiants en étant vécu à travers leur corps.</p>,
        <p>Pour des idées d'expériences et d'expériences à l'intérieur et à l'extérieur, consultez le programme <a href={guide} target={'_blank'} rel={'noopener  noreferrer'} className={'textLink'}>GWE programme parascolaire</a>, également sur le site Web.</p>
        ]
    )
  },
  {
    heading: new MultiLingual(
      'Common Ground',
      'Terreno Común',
      `Terrain d'entente`
),
    body: new MultiLingual(
      [
        <p>You will notice that we begin and end with this book. Why do we
          choose to do this? We tend to see the simple message of the book
          as an all-encompassing theme of the materials involved.</p>,
        <p>Be sure to let the students do the reading of <u>Common Ground</u>\, the second time it is presented.</p>
      ],
      [
        <p>Notarás que comenzaremos y terminaremos con este libro. ¿Por qué decidimos hacerlo así? Tendemos a ver el mensaje sencillo del libro como un tema general de los materiales incluidos.</p>,
        <p>Asegúrate de dejar que los estudiantes hagan la lectura de Terreno Común, la segunda vez que se presente.</p>,
      ],
      [
        <p>Vous remarquerez que nous commençons et terminons par ce livre.  Nous avons tendance à voir le simple message du livre comme un thème global des matériaux impliqués. Assurez-vous de laisser les élèves faire la lecture de Terre d'étente, la deuxième fois qu'il est présenté. Une note sur les livres ''Les enfants adorent les vrais livres!'' Des exemplaires papier des livres Common Ground et Sunlight Series sont disponibles auprès de Scholastic Books (en anglais). Le Global Warming Express peut être trouvé sur de nombreux sites Web de distributeurs en ligne. Nous aimons les questions et les commentaires! Pour l'un ou l'autre, écrivez simplement à : info@theglobalwarmingexpress.org</p>
      ]
    )
  },
  {
    heading: new MultiLingual(
      'A note about the books',
      'Una nota sobre los libros',
      `Une note sur les livres`
    ),
    body: new MultiLingual(
      [
        <p>'Kids love real books!'</p>,
        <p>Hard copies of <u>Common Ground</u> and the <u>Sunlight Series</u> books are available through Scholastic Books.</p>,
        <p><u>The Global Warming Express</u> can be found on many online
          distributor websites.</p>,
        <p>We love questions and comments! For either, simply write to:</p>,
        <p><a
          href={'mailto:info@theglobalwarmingexpress.org'}
          target={'_blank'}
          rel={'noopener  noreferrer'}
          className={'textLink'}
        > info@theglobalwarmingexpress.org </a></p>,
        <p>We promise to get back to you!</p>,
        <p><strong>If you are interested in bringing the Global Warming Express
          outdoor after-school program to you school, write to us at the
          same address.</strong></p>,
        <p>Thank you for jumping on board <strong>The Global Warming Express!</strong></p>,
      ],
      [
        <p>¡Los niños aman los libros!</p>,
        <p>Copias impresas de los libros Terreno Común y de la Serie sobre La Luz Solar son disponibles en inglés por medio de Scholastic Books.</p>,
        <p>El Tren del Calentamiento Global se puede encontrar en inglés en varias páginas de distribuidores en línea.</p>,
        <p>¡Nos encantan las preguntas y los comentarios! Para hacer ambos, simplemente escribe a:</p>,
        <p><a
          href={'mailto:info@theglobalwarmingexpress.org'}
          target={'_blank'}
          rel={'noopener  noreferrer'}
          className={'textLink'}
        > info@theglobalwarmingexpress.org </a></p>,
        <p>¡Prometemos contestarte!</p>,
        <p>Si estas interesado/a en traer el programa al aire libre de después de clases de Global Warming Express a tu escuela, escríbenos a la misma dirección.</p>,
        <p>¡Gracias por brincar a bordo del Tren del Calentamiento Global!</p>,
      ],
      [
        <p>Les enfants adorent les vrais livres! Des exemplaires papier des livres Common Ground et Sunlight Series sont disponibles auprès de Scholastic Books (en anglais). Le Global Warming Express peut être trouvé sur de nombreux sites Web de distributeurs en ligne. Nous aimons les questions et les commentaires! Pour l'un ou l'autre, écrivez simplement à :</p>,
        <p><a
          href={'mailto:info@theglobalwarmingexpress.org'}
          target={'_blank'}
          rel={'noopener  noreferrer'}
          className={'textLink'}
        > info@theglobalwarmingexpress.org </a></p>
      ]
    )
  }
  ]