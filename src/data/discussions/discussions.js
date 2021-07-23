import { Discussion } from "../model/discussion";
import { MultiLingual } from "../model/multiLingual";
import { RunTime } from "../model/RunTime";

const discussions = {
  greenhouseDiscuss: new Discussion(
    "greenhouseDiscuss",
    new MultiLingual(
      "Greenhouse Gases Discussion",
      'Plática sobre Gases de Invernadero',
      `Les histoires des gas à l'effet serre pour les discussions`
    ),
    new MultiLingual(new RunTime(5)),
    new MultiLingual(true, false, false)
  ),
  myLightDiscuss: new Discussion(
    "myLightDiscuss",
    new MultiLingual(
      "My Light Discussion",
      'Plática sobre Mi Luz',
      `Les discussions de la lumiére`
    ),
    new MultiLingual(new RunTime(5)),
    new MultiLingual(true, false, false)
  ),
  livingSunlightDiscuss: new Discussion(
    "livingSunlightDiscuss",
    new MultiLingual(
      "Living Sunlight Discussion",
      'Plática sobre Luz Viviente',
      'Discussion: La lumière vivante du soleil'
    ),
    new MultiLingual(new RunTime(5)),
    new MultiLingual(true, false, false)
  ),
  buriedSunlightDiscuss: new Discussion(
    "buriedSunlightDiscuss",
    new MultiLingual(
      "Buried Sunlight Discussion",
      'Plática sobre Luz Enterrada',
      'Discussion sur la lumière du soleil enterrée'
    ),
    new MultiLingual(new RunTime(5)),
    new MultiLingual(true, false, false)
  ),
  riversOfSunlightDiscuss: new Discussion(
    "riversOfSunlightDiscuss",
    new MultiLingual(
      "Rivers Of Sunlight Discussion",
      'Plática sobre Ríos de Luz',
      'Discussion sur les rivières de la lumière du soleil'
    ),
    new MultiLingual(new RunTime(5)),
    new MultiLingual(true, false, false)
  ),
  commonGroundDiscuss: new Discussion(
    "commonGroundDiscuss",
    new MultiLingual(
      "Common Ground Discussion",
      '',
      `Discussion de terrain d'entente`
),
    new MultiLingual(new RunTime(5)),
    new MultiLingual(true, false, false)
  ),
};

export const discussionsArray = [];

for (let key in discussions){
  discussionsArray.push(discussions[key]);
}

export default discussions;
