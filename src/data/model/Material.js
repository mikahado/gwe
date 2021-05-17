export class Material{

    constructor(contentObj,altTitle,subtitle,altStartPage,altEndPage,altDescription) {

        this.content = Object.create(contentObj);

        if (altTitle){
            this.content.title = altTitle;
        }
        if (subtitle){
            this.content.subtitle = subtitle;
        }
        if (altStartPage){
            this.content.startPage = altStartPage;
            //this.content.bookMark = altStartPage;
        }
        if (altEndPage){
            this.content.endPage = altEndPage;
        }
        if (altDescription){
            this.content.description = altDescription;
        }
    }
}