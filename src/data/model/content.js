export class Content {

    constructor(format,contentId,title,description,runTime) {
        this.format = format;
        this.contentId = contentId;
        this.title = title;
        this.description = description;
        this.runTime = runTime;
    }

    //Methods
    getNativeTitle(language, returnEnglish){

        if ( this.title[language] ){
            return this.title[language];
        }
        else if (returnEnglish){
            if (this.title.eng){
                return this.title.eng;
            } else{
                return this.title;
            }
        }
    }
    getNativeDescription(language, returnEnglish){

        if ( this.description[language] ){
            return this.description[language];
        }
        else if (returnEnglish){
            if (this.description.eng){
                return this.description.eng;
            } else{
                return this.description;
            }
        }
    }
}