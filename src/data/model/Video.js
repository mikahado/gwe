import {Content} from "./content";

export class Video extends Content{

    constructor(contentId, title, description, runTime, src) {
        super(
            'video',
            contentId,
            title,
            description,
            runTime
            );

        this.src = src;
        this.graphic = `${process.env.PUBLIC_URL}/assets/videos/thumbnails/${this.contentId}.png`
    }
}