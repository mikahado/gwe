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
        '¡Tantas buenas opciones para elegir!'
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
      ),
      home: new MultiLingual(
        "Home",
        "Inicio",
      ),
      guide: new MultiLingual(
        'Guide'
      ),
      sesssions: new MultiLingual(
        'Sessions'
      ),
      library: new MultiLingual(
        'Library',
        'Biblioteca'
      ),
      resources: new MultiLingual(
        'Resources'
      ),
      aboutGWE: new MultiLingual(
        "About GWE",
        "Sobre GWE",
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
        "Comienza a Aprender",
      ),
      teachGuide: new MultiLingual(
        `Teacher's Guide`
      ),
      startReading: new MultiLingual(
        "Start Reading",
        "Comienza a Leer",
      ),
    },
    read: {
      // Read Controls
      readToMe: new MultiLingual(
        'Read To Me'
      ),
      aboutThisReader: new MultiLingual(
        'About This Reader'
      ),
      nextMaterial: new MultiLingual(
        'Next Material'
      ),
      playNarration: new MultiLingual(
        "Play Narration",
        "Escuchar Narración",
      ),
    },
    completions: {
      continue: new MultiLingual(
        'Continue'
      ),
      continueSession: new MultiLingual(
        'Continue to Next Session'
      ),
      readAgain: new MultiLingual(
        "Read it again",
        "Lee de Nuevo",
      ),
      repeatSession: new MultiLingual(
        'Repeat Session'
      ),
      backSessions: new MultiLingual(
        'Back to Sessions'
      ),
      backLibrary: new MultiLingual(
        "Back to Library",
        "De Nuevo a la Biblioteca",
      ),
    }
  },
  labels: {
    materialTypes: {
      books: new MultiLingual(
        'Books'
      ),
      discussions: new MultiLingual(
        'Discussions'
      ),
      experiments: new MultiLingual(
        'Experiments'
      )
    },
    readLabels: {
      // Read View Labels
      page: new MultiLingual(
        "Page",
        "Página",
      ),
      nextPage: new MultiLingual(
        'Next Page',
      ),
      prevPage: new MultiLingual(
        'Previous Page'
      ),
      controlReader: new MultiLingual(
        'Control Reader'
      ),
      pageZoom: new MultiLingual(
        'Page Zoom'
      ),
      narration: new MultiLingual(
        "Narration",
        "Narración",
      ),
      runTime: new MultiLingual(
        "Run Time",
        "Duración",
      ),
    },
    sessionInfo: {
      sessionNo(sessionNo, language) {
        switch(language){
          //case ('spa'): return `*ML* #${sessionNo}`
          default: return `Sesssion #${sessionNo}`;
        }
      },
      partOf(partNo, numParts, language) {
        switch (language){
          //case ('spa'): return `*ML* ${partNo} X ${numParts}`;
          default: return `Part ${partNo} of ${numParts}`;
        }
      },
    },
    resources: {
      kidsAction: new MultiLingual(
        `For Kid's Action`
      ),
      learnMore: new MultiLingual(
        `To Learn More`
      ),
      videos: new MultiLingual(
        `Videos`
      ),
      articles: new MultiLingual(
        'Articles',
      ),
      orgs: new MultiLingual(
        'Organizations'
      ),
      pubs: new MultiLingual(
        'Publications'
      ),
      info: new MultiLingual(
        'Information'
      ),
      people: new MultiLingual(
        'People'
      ),
      bus: new MultiLingual(
        'Businesses'
      ),
    },
    experiments: {
      supplies: new MultiLingual(
        'Supplies',
        '',
        'Les besoins'
      ),
      fromText: new MultiLingual(
        'From The Text:',
        '',
        'Du texte: '
      ),
      instructions: new MultiLingual(
        'Instructions',
        '',
        'Instructions'
      ),
      or: new MultiLingual(
        'OR:',
        '',
        'OU:'
      )
    },
    languages: {
      eng: 'English',
      spa: 'Español',
      fra: 'Français'
    },

    // Reader Start
    readBy: new MultiLingual(
      "Read by",
      "Leído por",
    ),
    byAuthor(author, language) {
      switch (language){
        case "spa": return `Por ${author}`;
        case "fra": return `par ${author}`;
        default: return `By ${author}`;
      }
      return language === "eng" ? `By ${author}` : `Por ${author}`;
    },

    // Sessions View Labels
    jumpToSession: new MultiLingual(
      'Jump To Session'
    ),
  },
  pageTitles: {
    library: new MultiLingual(
      "Learning Library",
      "Biblioteca Educativa",
    ),
  },
  messages: {
    materialComplete: new MultiLingual(
      'Congrats, you’ve completed this material!'
    ),
    sessionComplete: new MultiLingual(
      'Session Complete!'
    ),
    sessionCongrats: new MultiLingual(
      "Congrats, you've compeleted this session!"
    ),
    courseComplete: new MultiLingual(
      `Course Complete!`
    ),
    courseCongrats: new MultiLingual(
      `Congrats, you've completed this course!`
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
