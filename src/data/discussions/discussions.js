import { Discussion } from "../model/discussion";
import { MultiLingual } from "../model/multiLingual";
import { RunTime } from "../model/RunTime";

const discussions = {
  greenhouseDiscuss: new Discussion(
    "greenhouseDiscuss",
    new MultiLingual("Greenhouse Gases Discussion"),
    new MultiLingual(new RunTime(5)),
    new MultiLingual(true, false, false)
  ),
  myLightDiscuss: new Discussion(
    "myLightDiscuss",
    new MultiLingual("My Light Discussion"),
    new MultiLingual(new RunTime(5)),
    new MultiLingual(true, false, false)
  ),
  livingSunlightDiscuss: new Discussion(
    "livingSunlightDiscuss",
    new MultiLingual("Living Sunlight Discussion"),
    new MultiLingual(new RunTime(5)),
    new MultiLingual(true, false, false)
  ),
  buriedSunlightDiscuss: new Discussion(
    "buriedSunlightDiscuss",
    new MultiLingual("Buried Sunlight Discussion"),
    new MultiLingual(new RunTime(5)),
    new MultiLingual(true, false, false)
  ),
  riversOfSunlightDiscuss: new Discussion(
    "riversOfSunlightDiscuss",
    new MultiLingual("Rivers Of Sunlight Discussion"),
    new MultiLingual(new RunTime(5)),
    new MultiLingual(true, false, false)
  ),
  commonGroundDiscuss: new Discussion(
    "commonGroundDiscuss",
    new MultiLingual("Common Ground Discussion"),
    new MultiLingual(new RunTime(5)),
    new MultiLingual(true, false, false)
  ),
};

export const discussionsArray = [];

for (let key in discussions){
  discussionsArray.push(discussions[key]);
}

export default discussions;
