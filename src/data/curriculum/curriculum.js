import { Curriculum } from "../model/Curriculum.js";
import { Session } from "../model/Session.js";
import { Material } from "../model/Material.js";
import books from "../books/books.js";
import discussions from "../discussions/discussions";
import { MultiLingual } from "../model/multiLingual";
import videos from "../videos/videos";
import {experiments} from "../experiments/experiments";
import pageText from "../pageText";

const sessionArray= [
  new Session([new Material(books.commonGround)]),

  new Session([new Material(videos.gweBackstory)]),

  new Session([
    new Material(
      books.globalWarmingExpress,
      null,
      new MultiLingual(
        pageText.labels.sessionInfo.partOf(1,3,'eng'),
        pageText.labels.sessionInfo.partOf(1,3,'spa'),
      ),
      1,
      52
    ),
  ]),

  new Session([
    new Material(discussions.greenhouseDiscuss),
    new Material(experiments.blanketExp)
  ]),

  new Session([
    new Material(books.myLight)
  ]),

  new Session([
    new Material(discussions.myLightDiscuss),
  ]),

  new Session([
    new Material(experiments.evapExp)
  ]),

  new Session([
    new Material(experiments.cloudExp)
  ]),

  new Session([
    new Material(experiments.pinwheelExp)
  ]),

  new Session([
    new Material(
      books.globalWarmingExpress,
      null,
      new MultiLingual(
        pageText.labels.sessionInfo.partOf(2,3,'eng'),
        pageText.labels.sessionInfo.partOf(2,3,'spa'),
      ),
      53,
      95,
      new MultiLingual(
        "Join Marina, Joanna, and their animal friends as they continue their adventure to save the animal's homes."
      )
    ),
  ]),

  new Session([
    new Material(books.livingSunlight)
  ]),

  new Session([
    new Material(discussions.livingSunlightDiscuss)
  ]),

  new Session([
    new Material(experiments.heartbeatExp)
  ]),

  new Session([
    new Material(experiments.breathHoldExp)
  ]),

  new Session([
    new Material(experiments.countBreathExp)
  ]),

  new Session([
    new Material(experiments.photoSynthDramaExp)
  ]),

  new Session([
    new Material(books.buriedSunlight)
  ]),

  new Session([
    new Material(discussions.buriedSunlightDiscuss),
  ]),

  new Session([
    new Material(experiments.squashPlantsExp)
  ]),

  new Session([
    new Material(experiments.carGreenhouseExp)
  ]),

  new Session([
    new Material(experiments.pizzaBoxExp)
  ]),

  new Session([
    new Material(
      books.globalWarmingExpress,
      null,
      new MultiLingual(
        pageText.labels.sessionInfo.partOf(3,3,'eng'),
        pageText.labels.sessionInfo.partOf(3,3,'spa'),
      ),
      96,
      127,
      new MultiLingual(
        "Join Marina, Joanna, and their animal friends on the final leg of their brave journey."
      )
    ),
  ]),

  new Session([
    new Material(books.riversOfSunlight),
  ]),

  new Session([
    new Material(discussions.riversOfSunlightDiscuss),
  ]),

  new Session([
    new Material(experiments.golfBallExp)
  ]),

  new Session([
    new Material(experiments.waterCycleDramaExp)
  ]),

  new Session([
    new Material(experiments.waterMathExp)
  ]),

  new Session([
    new Material(experiments.waterReqExp)
  ]),

  new Session([
    new Material(experiments.dirtyWaterExp)
  ]),

  new Session([
    new Material(experiments.conveyorBeltExp)
  ]),

  new Session([
    new Material(books.commonGround)
  ]),

  new Session([
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
