import {Content} from "./content";

export class Experiment extends Content{
  constructor(contentId, title, description, runTime, supplies, body, videoSrc, excerpts, pdf) {
    super('experiment', contentId, title, description, runTime);

    this.suppliesList = supplies; // need to show alt supplies
    this.body = body;
    this.videoSrc = videoSrc;
    this.excerpts = excerpts;
    this.pdf = pdf;
  }
}