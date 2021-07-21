import { MultiLingual } from "./multiLingual.js";

export class RunTime {
  constructor(minutes, seconds) {
    this.minutes = minutes;
    this.seconds = seconds;
    this.string = new MultiLingual(
      `${minutes} minute${minutes > 1 ? "s" : ""}${
        seconds ? " , " + seconds + " seconds" : ""
      }`,
      `${minutes} minuto${minutes > 1 ? "s" : ""}${
        seconds ? " , " + seconds + " segundos" : ""
      }`,
      `${minutes} minute${minutes > 1 ? "s" : ""}${
        seconds ? " , " + seconds + " secondes" : ""
      }`
    );
  }
}
