import {MultiLingual} from "./model/multiLingual";

const pageText = {
  speechBubbles: {
    splash: {
      eng: [
        `Ready to hop aboard?`,
        "All aboard!",
        "So good to see you!",
        "Lots to do today!",
        `We've been waiting for you!`,
        "No time to waste!",
      ],
      spa: [
        `¿Listos para abordar?`,
        `¡Todos Abordo!`,
        `¡Mucho que hacer hoy!`,
        `¡Te hemos estado esperando!`,
        `¡No hay tiempo que perder!`,
      ],
    },
    library: [
      new MultiLingual(
        'Look how many cool books we can choose from!',
        '¡Tantas buenas opciones para elegir!',
        'Regardez combien de livres cool nous pouvons choisir!'
      ),
      new MultiLingual(
        `Which book should we read today?`,
        `¿Cuál quieres leer hoy?`
      )
    ],
    summary: {
      eng: [`That's one of my favorites!`, `That book is awesome! `],
      spa: [`¡Ese es uno de mis favoritos!`, `¡Ese es buenísimo!`],
    },
    congrats: {
      eng: [
        "I knew we could do it!",
        `I loved that book!`,
        `You're a great reader!`,
      ],
      spa: [
        "¡Sabía que lo podías hacer!",
        `¿Verdad que es bueno?`,
        `¡Lees muy bien!`,
      ],
    },
    getSpeech(type, language) {
      const options = this[type];
      const random = Math.floor(Math.random() * (options.length - 1));
      return options[random].get(language);
    },
  },
  buttons: {
    nav: {
      //Navigation
      menu: new MultiLingual(
        'Menu',
        'Menú',
        'Plan du Site'
      ),
      home: new MultiLingual(
        "Home",
        "Página Principal",
        "Page d'Accueil"
      ),
      guide: new MultiLingual(
        'Guide',
        'Guía',
        'Guide'
      ),
      sesssions: new MultiLingual(
        'Sessions',
        'Sesiones',
        'Sessions'
      ),
      library: new MultiLingual(
        'Library',
        'Biblioteca',
        'Bibliothèque'
      ),
      resources: new MultiLingual(
        'Resources',
        'Recursos',
        'Ressources'
      ),
      aboutGWE: new MultiLingual(
        "About GWE",
        "Sobre GWE",
        'À propos de GWE'
      ),
    },
    language: {
      // Language
      translate: new MultiLingual(
        "En Español",
        "Click for English"
      ),
    },
    landing: {
      // Landing Page
      jumpOnboard: new MultiLingual(
        "Jump Onboard",
        "Sube a bordo",
        'Sauter à bord'
      ),
      teachGuide: new MultiLingual(
        `Teacher's Guide`,
        'Guía del Maestro',
        'Guide de l’enseignement'
      ),
      startReading: new MultiLingual(
        "Start Reading",
        "Comienza a Leer",

      ),
    },
    read: {
      // Read Controls
      readToMe: new MultiLingual(
        'Read To Me',
        'Léeme',
        'Lisez-moi'
      ),
      aboutThisReader: new MultiLingual(
        'About This Reader',
        'Sobre el Lector',
        'À propos de ce lecteur/cette lectrice'
      ),
      nextMaterial: new MultiLingual(
        'Next Material',
      ),
      playNarration: new MultiLingual(
        "Play Narration",
        "Escuchar Narración",
      ),
    },
    completions: {
      continue: new MultiLingual(
        'Continue',
        'Continúa',
        'Continuer'
      ),
      continueSession: new MultiLingual(
        'Continue to Next Session',
        'Continuar a la siguiente sesión',
        'Passer à la prochaine session'
      ),
      readAgain: new MultiLingual(
        "Read it again",
        "Lee de Nuevo",
        'Lisez-le de nouveau'
      ),
      repeatSession: new MultiLingual(
        'Repeat Session',
        'Repetir esta sesión',
        'Répétez cette session'
      ),
      backSessions: new MultiLingual(
        'Back to Sessions',
        'Regresar a las sesiones',
        'Retour aux sessions'
      ),
      backLibrary: new MultiLingual(
        "Back to Library",
        "De Nuevo a la Biblioteca",
        'Retournez à la bibliothèque'
      ),
    },
    openPDF: new MultiLingual(
      'Open PDF',
      'Abrir PDF',
      'Ouvrir le PDF'
    ),
    gweSite: new MultiLingual(
      'Visit The GWE Website',
      '',
      'Visitez le site Web GWE'
    )
  },
  labels: {
    materialTypes: {
      books: new MultiLingual(
        'Books',
        'Libros',
        'Livres'
      ),
      discussions: new MultiLingual(
        'Discussions',
        'Pláticas',
        'Discussions'
      ),
      experiments: new MultiLingual(
        'Experiments',
        'Experimentos',
        'Expériences'
      )
    },
    readLabels: {
      // Read View Labels
      page: new MultiLingual(
        "Page",
        "Página",
        'Page'
      ),
      nextPage: new MultiLingual(
        'Next Page',
        'Página siguiente',
        'Page suivante'
      ),
      prevPage: new MultiLingual(
        'Previous Page',
        'Página anterior',
        'Page précédente'
      ),
      controlReader: new MultiLingual(
        'Control Reader',
        'Control de Lector',
        'Lecteur de contrôle'
      ),
      pageZoom: new MultiLingual(
        'Page Zoom',
        'Zoom de página',
        'Zoom sur la page'
      ),
      narration: new MultiLingual(
        "Narration",
        "Narración",
      ),
      runTime: new MultiLingual(
        "Run Time",
        "Duración",
        "Durée"
      ),
      loading: new MultiLingual(
        'Material Loading',
        'Material cargando',
        'Chargement du matériel'
      ),
      otherMaterial: {
        next: new MultiLingual(
          'Next Material',
          'Material Siguiente',
          'document suivant'
        ),
        prev: new MultiLingual(
          'Previous',
          'Material Anterior',
          'document précédent'
        )
      }
    },
    sessionInfo: {
      sessionNo(sessionNo, language) {
        switch(language){
          //case ('spa'): return `*ML* #${sessionNo}`
          case('spa'): return `Sesión #${sessionNo}`;
          case('fra'): return `Séance #${sessionNo}`;
          default: return `Session #${sessionNo}`;
        }
      },
      partOf(partNo, numParts, language) {
        switch (language){
          //case ('spa'): return `*ML* ${partNo} X ${numParts}`;
          case('spa'): return `Parte ${partNo} de ${numParts}`;
          case('fra'): return `Partie ${partNo} de ${numParts}`;
          default: return `Part ${partNo} of ${numParts}`;
        }
      },
    },
    resources: {
      kidsAction: new MultiLingual(
        `For Kid's Action`,
        'Para acción de los niños',
        'Pour l’action des enfants'
      ),
      learnMore: new MultiLingual(
        `To Learn More`,
        'Para aprender más',
        'Pour en savoir plus'
      ),
      types:{
        video: new MultiLingual(
          `Videos`,
          'Videos',
          'Vidéos'
        ),
        article: new MultiLingual(
          'Articles',
          'Artículos',
          'Articles'
        ),
        org: new MultiLingual(
          'Organizations',
          'Organizaciones',
          'Organisations'
        ),
        pub: new MultiLingual(
          'Publications',
          'Publicaciones',
          'Publications'
        ),
        info: new MultiLingual(
          'Information',
          'Información',
          'Information'
        ),
        people: new MultiLingual(
          'People',
          'Gente',
          'Personnes'
        ),
        bus: new MultiLingual(
          'Businesses',
          'Negocios',
          'Entreprises'
        ),
      },
      regions: {
        nm: new MultiLingual(
          'New Mexico',
          'Nuevo Mexico',
          'Nouveau Mexique'

          // todo: spanish & french NM translation
        ),
        usa: new MultiLingual(
          'U.S.A.'
          // todo: spanish & french USA translation?
        ),
        intl: new MultiLingual(
          'International',
          'Internacional',
          'International'
          // todo: spanish & french intl translation
        )
      }
    },
    experiments: {
      supplies: new MultiLingual(
        'Supplies',
        'Materiales',
        'Les besoins'
      ),
      fromText: new MultiLingual(
        'From The Text:',
        'Del Texto:',
        'Du texte: '
      ),
      instructions: new MultiLingual(
        'Instructions',
        'Instrucciones',
        'Instructions'
      ),
      or: new MultiLingual(
        'OR:',
        'Ó:',
        'OU:'
      ),
      videoTranscript: new MultiLingual(
        'Video Transcript',
        'Transcripción de video',
        'Transcription vidéo'
      )
    },
    languages: {
      eng: 'English',
      spa: 'Español',
      fra: 'Français'
    },
    teachersGuide: {
      sections: new MultiLingual(
        'Sections',
        'Secciones'
      )
    },


    // Reader Start
    readBy: new MultiLingual(
      "Read by",
      "Leído por",
      'Lire par'
    ),
    byAuthor(author, language) {
      switch (language){
        case "spa": return `Por ${author}`;
        case "fra": return `Par ${author}`;
        default: return `By ${author}`;
      }
    },

    // Sessions View Labels
    jumpToSession: new MultiLingual(
      'Jump To Session',
      'Brincar a Sesión',
      'Sautez à la session'
    ),
  },
  pageTitles: {
    guide: new MultiLingual(
      `Curriculum Guide for GWE Online Curriculum App`,
      '',
      `Guide du programme pour l'application du programme en ligne de GWE`
    ),
    library: new MultiLingual(
      "Learning Library",
      "Biblioteca Educativa",
      'Bibliothèque d’apprentissage'
    ),
    resources: new MultiLingual(
      'Resources',
      'Recursos',
      'Ressources'
    ),
    aboutGWE: new MultiLingual(
      'About GWE',
      'Sobre GWE',
      'À propos de GWE'
    )
  },
  messages: {
    materialComplete: new MultiLingual(
      'Congrats, you’ve completed this material!',
      '¡Felicidades, has completado este material!',
      'Félicitations, vous avez terminé ce document!'
    ),
    sessionComplete: new MultiLingual(
      'Session Complete!',
      '¡Sesión completa!',
      'Session terminée!'
    ),
    sessionCongrats: new MultiLingual(
      "Congrats, you've compeleted this session!",
      '¡Felicidades, has completado esta sesión!',
      'Félicitations, vous avez terminé cette session!'
    ),
    courseComplete: new MultiLingual(
      `Course Complete!`,
      '¡Curso completado!',
      'Cours terminé!'
    ),
    courseCongrats: new MultiLingual(
      `Congrats, you've completed this course!`,
      '¡Felicidades, has completado este curso!',
      'Félicitations, vous avez terminé ce cours!'
    ),
    bookComplete: new MultiLingual(
      "Congrats, you finished this book!",
      "¡Felicidades, terminaste el libro!",
    ),
    readAgain: new MultiLingual(
      "Read it again?",
      "¿Leerlo de nuevo?",
    ),
    narrComing: new MultiLingual(
      "Narration Coming Soon",
      "Narración Próximamente",
    ),
    spanishComing: `Próximamente Traducción en Español`
  },
};

export default pageText;
