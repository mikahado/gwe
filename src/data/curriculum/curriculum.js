import { Curriculum } from "../model/Curriculum.js";
import { Session } from "../model/Session.js";
import { Material } from "../model/Material.js";
import books from "../books/books.js";
import discussions from "../discussions/discussions";
import { MultiLingual } from "../model/multiLingual";
import videos from "../videos/videos";
import {experiments} from "../experiments/experiments";
import {dramas} from "../dramas/dramas"
import {awarenesses} from "../awarenesses/awarenesses"
import pageText from "../pageText";

const sessionArray = [

  // 1
  new Session([new Material(books.commonGround)]),

  // 2
  new Session([new Material(videos.gweBackstory)]),

  // 3
  new Session([
    new Material(
      books.globalWarmingExpress,
      null,
      new MultiLingual(
        pageText.labels.sessionInfo.partOf(1,3,'eng'),
        pageText.labels.sessionInfo.partOf(1,3,'spa'),
        pageText.labels.sessionInfo.partOf(1,3,'fra'),
      ),
      1,
      51
    ),
  ]),

  // 4
  new Session([
    new Material(discussions.greenhouseDiscuss),
    new Material(experiments.blanketExp)
  ]),

  // 5
  new Session([
    new Material(books.myLight),
    new Material(dramas.photonDrama),
    
    // new Material(awarenesses.photonDrama),
    new Material(experiments.pinwheelExp),
    // new Material(awarenesses.breathingInTheSun),
    new Material(experiments.evapExp),
    new Material(experiments.cloudExp),
    new Material(discussions.myLightDiscuss),
  ]),
  // 6
  new Session([
    new Material(books.livingSunlight),
    new Material(discussions.livingSunlightDiscuss)
  ]),


  new Session([
    new Material(
      books.globalWarmingExpress,
      null,
      new MultiLingual(
        pageText.labels.sessionInfo.partOf(2,3,'eng'),
        pageText.labels.sessionInfo.partOf(2,3,'spa'),
        pageText.labels.sessionInfo.partOf(2,3,'fra'),
      ),
      52,
      94,
      new MultiLingual(
        "Join Marina, Joanna, and their animal friends as they continue their adventure to save the animal's homes.",
        "Únete a Marina, Joanna, y a sus amigos animales mientras continúan su aventura para rescatar los hogares de los animales. ",
        "Rejoignez Marina, Joanna et leurs amis les animaux alors qu'ils poursuivent leur aventure pour 	sauver les maisons de l'animal."
      )
    ),
  ]),

  // 8
  new Session([
    new Material(books.livingSunlight),
    // new Material(dramas.photosynthesisDance),
    new Material(discussions.livingSunlightDiscuss),
    // new Material(dramas.photosynthesisDrama),

    // experiement below not in GWE Session Structure? 
    new Material(experiments.heartbeatExp),
    new Material(experiments.photoSynthDramaExp)
  ]),

  //  9
  new Session([
    new Material(books.buriedSunlight),
    new Material(discussions.buriedSunlightDiscuss),
    new Material(experiments.squashPlantsExp),
    new Material(experiments.carGreenhouseExp),
    new Material(experiments.pizzaBoxExp)
  ]),

  new Session([
    new Material(books.riversOfSunlight),
    new Material(discussions.riversOfSunlightDiscuss),
    new Material(experiments.golfBallExp),
    new Material(experiments.waterCycleDramaExp),
    new Material(experiments.waterMathExp),
    new Material(experiments.waterReqExp),
    new Material(experiments.dirtyWaterExp),
    new Material(experiments.conveyorBeltExp)
  ]),

  new Session([
    new Material(
      books.globalWarmingExpress,
      null,
      new MultiLingual(
        pageText.labels.sessionInfo.partOf(3,3,'eng'),
        pageText.labels.sessionInfo.partOf(3,3,'spa'),
        pageText.labels.sessionInfo.partOf(3,3,'fra')
      ),
      95,
      126,
      new MultiLingual(
        "Join Marina, Joanna, and their animal friends on the final leg of their brave journey.",
        "Únete a Marina, Joanna, y a sus amigos animales en el último tramo de su valiente viaje.",
        "Rejoignez Marina, Joanna et leurs amis les animaux lors de la dernière étape de leur courageux voyage."
      )
    ),
  ]),

  new Session([
    new Material(books.commonGround),
    new Material(discussions.commonGroundDiscuss)
  ])
];

/*
const sessionArray = [];

Object.keys(sessions).forEach((sessionKey) => {
  sessionArray.push(sessions[sessionKey]);
});

 */

const curriculum = new Curriculum(sessionArray);

export default curriculum;
