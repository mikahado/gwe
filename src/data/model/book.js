// Data Models
import { ReadContent } from "./readContent.js";
import { MultiLingual } from "./multiLingual";

// Data
import bookDescriptions from "../books/bookDescriptions.js";
import pageText from "../pageText";

// Functions
import {
  assembleBookPreloads,
  assembleBookPages,
} from "../../utilities/constructorHelpers.js";

export class Book extends ReadContent {
  constructor(
    /*Super Parameters: */
    contentId,
    title,
    runTime,
    endPage,
    narration,
    reader,
    /*Unique Parameters: */
    author
  ) {
    super(
      "book",
      contentId,
      title,
      bookDescriptions[contentId],
      runTime,
      endPage,
      narration,
      reader
    );

    //Data From Parameters
    this.author = author;

    // Calculated Data
    this.pageData = assembleBookPages(this.contentId, this.endPage);
    this.graphic = this.pageData[0].img;

    this.byAuthor = new MultiLingual(
      pageText.labels.byAuthor(this.author, "eng"),
      pageText.labels.byAuthor(this.author, "spa")
    );

    this.preloads = {};
    this.preloads.img = assembleBookPreloads(this.pageData, "img");
    this.preloads.audio = assembleBookPreloads(this.pageData, "audio");
  }
}
