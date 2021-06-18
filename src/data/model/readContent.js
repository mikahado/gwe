import { Content } from "./content.js";

export class ReadContent extends Content {
  constructor(
    format,
    contentId,
    title,
    description,
    runTime,
    endPage,
    narration,
    reader
  ) {
    super(format, contentId, title, description);

    // Data From Parameters
    this.runTime = runTime;
    this.narration = narration;
    this.reader = reader;

    // Calculated Data
    this.startPage = 1;
    //this.bookMark = 1;
    this.endPage = endPage;
  }
}
