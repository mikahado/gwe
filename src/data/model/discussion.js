import {ReadContent} from './readContent.js';
import {assembleDiscussionPages, assembleDiscussionPreloads} from "../../utilities/constructorHelpers";
import discussionDescriptions from "../discussions/discussionDescriptions";
import discussionPages from "../discussions/discussionPages";

export class Discussion extends ReadContent{

    constructor(
        contentId,
        title,
        runTime,
        narration,
        ){

        super(
            'discussion',
            contentId,
            title,
            discussionDescriptions[contentId],
            runTime,
            Object.keys(discussionPages[contentId]).length,
            narration,
            null,
            );

        // Calculated Data
        this.pageData = assembleDiscussionPages(this.contentId, this.endPage);
        this.graphic = `${process.env.PUBLIC_URL}/assets/discussion/${ this.contentId }/special.png`;

        this.preloads = {};
        this.preloads.img = assembleDiscussionPreloads(this.pageData,'img');
        this.preloads.audio = assembleDiscussionPreloads(this.pageData,'audio');
    }
}