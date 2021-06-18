import { Video } from "../model/Video";
import { MultiLingual } from "../model/multiLingual";
import { RunTime } from "../model/RunTime";

const videos = {
  gweBackstory: new Video(
    "gweBackstory",
    new MultiLingual("The History of the Global Warming Express"),
    new MultiLingual("Learn the history of The Global Warming Express."),
    new MultiLingual(new RunTime(1, 6)),
    "https://www.youtube.com/embed/kwP-su2F9Cc"
  ),
};

export default videos;
