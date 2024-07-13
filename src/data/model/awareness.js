import {Content} from "./content";

export class Awareness extends Content{
  constructor(contentId, title, description, runTime, supplies, body, videoSrc, excerpts, pdf) {
    super('awareness', contentId, title, description, runTime);

    this.suppliesList = supplies  // need to show alt supplies
    this.body = body;
    this.videoSrc = videoSrc;
    this.excerpts = excerpts;
    this.pdf = pdf;
  }
}