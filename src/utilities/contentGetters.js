import { curriculum } from '../data/--old data--/curriculum';

// Media Content
import books from '../data/books/books';
import discussions from '../data/--old data--/discussions';
import videos from '../data/--old data--/videos';
import headshots from '../data/--old data--/headshots';

import pageText from '../data/pageText';
import React from "react";
import discussionCharacters from "../data/discussions/discussionCharacters/discussionCharacters";

const noGraphic = `${process.env.PUBLIC_URL}/assets/images/noMediaImage.png`;

const contentGetters = {
    srcByFormat( format ){
        switch( format ){
            case( 'book' ):
                return books;

            case( 'discussion'):
                return discussions;

            case( 'video'):
                return videos;

            default:
                break;
        }        
    },
    checkForLanguage( content, language, returnEnglish ){

        if ( typeof content === 'string' ){
            return content;
        }

        if ( content.hasOwnProperty(language)){
            return content[ language ];
        }

        else if ( returnEnglish ) {
            return content[ 'eng' ];
        }

        else {
            return 0;
        }
    },
    // EXTRACT FROM DATA
    extractFromData: {
        // General Info
        title( titleData, language ){
            const nativeTitle = contentGetters.checkForLanguage( titleData, language, true );
            return nativeTitle;
        },
        description( descriptionData, language ){
            const nativeDescription = contentGetters.checkForLanguage( descriptionData, language, true );
            return nativeDescription;
        },
        byAuthor(author,language){
            return pageText.labels.byAuthor(author,language);
        },
        graphic( content, format ){
            let image;
    
            switch( format ){
    
                case( 'book'):
                    image = `${process.env.PUBLIC_URL}/assets/book/${content.contentId}/pages1.jpg`;
                    break;
    
                case( 'discussion' ):
                    image = contentGetters.findByContentId.discussionSpecialImg(content.contentId);
                    break;
    
                case( 'video' ):
                    image = content.featImg;
                    break;

                default:
                    break;
            }
    
            if ( image ){
                return image;
            
            } else {
                return noGraphic;
            }
        },
        runTime( runTimeData, language ){
            if ( runTimeData ){
                const nativeRunTime = contentGetters.checkForLanguage( runTimeData, language, true );
                return nativeRunTime;
            }
        },
        // Book Info
        reader( readerData, language ){
    
            if ( readerData ){
                const nativeReader = contentGetters.checkForLanguage( readerData, language );
                return nativeReader;
            
            } else {
                return 0;
            }
        },
        readBy( readerStr, language ){
    
            if ( readerStr ){
                const nativeReadBy = pageText.labels.readBy[ language ];
    
                if ( nativeReadBy ){
                    return `${ nativeReadBy } ${ readerStr }`;
                
                } else {
                    return `${pageText.labels.readBy.eng} ${ readerStr }`;
                }
            } else {
                return 0;
            }
        },
        readerPhoto( readerName ){
    
            if ( readerName ){
                
                if ( headshots[ readerName ] ){
                    return headshots[ readerName ];
                }
            
            } else {
                return 0;
            }
        },
        // From Content Data
        getImgPreloads(readerPages){

            const preloads = []

            readerPages.forEach( pageData =>{

                if(!preloads.includes(pageData.img)){

                    if(Array.isArray(pageData.img)){

                        pageData.img.forEach( img =>{

                            if(!preloads.includes(img)){
                                preloads.push(<img src={img} alt={''}/>);
                            }
                        });
                    }
                    else{
                        preloads.push( <img src={pageData.img} alt={''}/>);
                    }
                }
            })
            return preloads;
        },
        getAudioPreloads(readerPages){

            const preloads = [];

            readerPages.forEach( pageData =>{

                if(pageData.audio){

                    if(!preloads.includes(pageData.audio)){
                        preloads.push( <audio src={pageData.audio}/>);
                    }

                }
            });
            return preloads;
        },
        getReaderPages(materialSummary,language,formatInput,contentIdInput){

            let pages = [];

            if(materialSummary.format === 'book' || formatInput === 'book'){

                let contentId, format, narration,endPage;

                if(materialSummary){
                    contentId = materialSummary.contentId;
                    format = materialSummary.format;
                    narration = materialSummary.narration;
                    endPage = materialSummary.endPage;
                }
                else if(formatInput === 'book'){

                    let book = books[contentIdInput];

                    contentId = contentIdInput;
                    format = formatInput;
                    narration = book.narration;
                    endPage = book.pages;
                }

                for(let page=1; page<=endPage; page++){
                    pages.push({
                        img: contentGetters.findByContentId.pageImg(
                            contentId,
                            page
                        ),
                        audio: narration !== undefined ?
                                contentGetters.findByContentId.audioSrc(
                                format,
                                contentId,
                                language,
                                page
                            )
                            :'',
                        text: language === 'spa' ? contentGetters.findByContentId.translations(
                            format,
                            contentId,
                            page
                        ):''
                    });
                }
            }
            else if(materialSummary.format === 'discussion'){

                pages.push({
                    img: [contentGetters.findByContentId.discussionSpecialImg(materialSummary.contentId)],
                    audio: contentGetters.findByContentId
                        .audioSrc(
                            materialSummary.format,
                            materialSummary.contentId,
                            language,
                            1
                        ),
                    text: contentGetters.findByContentId.discussionPageText(materialSummary.contentId,1,language),
                });

                for(let page=2; page<=materialSummary.endPage; page++){
                    pages.push({
                        img: contentGetters.findByContentId
                            .discussionPageImgs(
                                materialSummary.contentId,
                                page
                            ),
                        audio: contentGetters.findByContentId
                            .audioSrc(
                                materialSummary.format,
                                materialSummary.contentId,
                                language,
                                page
                            ),
                        text: contentGetters.findByContentId.discussionPageText(materialSummary.contentId,page,language),
                    })
                }
            }
            return pages;
        },
    },
    findByContentId: {
        // IN USE
        pageImg( contentId, page ){
            return `${process.env.PUBLIC_URL}/assets/book/${ contentId }/pages/${ page }.jpg`;
        },
        discussionPageImgs(contentId,page){

            function checkForCharacterImg(img){
                if(Object.keys(discussionCharacters).includes(img)){

                    return discussionCharacters[img];
                }
                else{return false};
            }

            let images = discussions[contentId].pages[page].images;

            if ( !images.length ){
                images = noGraphic;
            }

            const convertedImages = [];

            if(Array.isArray(images)){

                images.forEach( image =>{

                    if(image === 'SPECIAL'){
                        return(
                            convertedImages.push(
                                contentGetters.findByContentId
                                    .discussionSpecialImg(contentId)
                            )
                        );
                    }

                    const character = checkForCharacterImg(image);

                    if(character){
                        return convertedImages.push(character);
                    }
                    else {
                        convertedImages.push(image);
                    }
                });
            }
            else {
                const character = checkForCharacterImg(images);

                if(character){
                    return character;

                } else{
                    return images;
                }
            }

            return convertedImages;
        },
        discussionPageText(contentId,page,language){
            if(language === 'eng'){
                return discussions[contentId].pages[page].text;
            }
            else{
                return [pageText.messages.spanishComing]
            }

        },
        discussionText(contentId,page){
            return discussions[contentId].pages[page].text;
        },
        discussionSpecialImg(contentId){
            const src = `${process.env.PUBLIC_URL}/assets/discussion/${ contentId }/special.png`;
            return src;
        },
        audioSrc( format, contentId, language, page ){
            if(format !== 'discussion'){
                const src = `${process.env.PUBLIC_URL}/assets/${ format }/${ contentId }/audio/${ language }/${ page }.mp3`;
                return src;
            }
            else if(language==='eng'){
                const src = `${process.env.PUBLIC_URL}/assets/${ format }/${ contentId }/audio/${ language }/${ page }.mp3`;
                return src;
            }
        },
        videoSrc( contentId ){
            return contentGetters.srcByFormat('video')[contentId].src;
        },
        // NOT IN USE
        titleByContentId( format, contentId, language ){
        
            const titleData = this.srcByFormat( format )[ contentId ].title;
            return this.extractFromData.title( titleData, language );
        },
        descriptionByContentId( format, label, language ){
    
            const descriptionData = this.srcByFormat( format )[ label ].description;
            return this.extractFromData.description( descriptionData, language );
        },
        runTime( format, label, language ){
    
            const runTime = this.srcByFormat( format )[ label ].runTime;
    
            if ( runTime ){
                return contentGetters.checkForLanguage( runTime, language, true );
            }
        },
        graphicByContentId( contentId, format ){

            const content = this.srcByFormat( format )[ contentId ];
            const graphic = this.extractFromData.graphic( content, format );
            return graphic;

        },
        // Session Info
        sessionIndex( sessionLabel ){
            return curriculum.indexOf( curriculum.find( session =>{
                return session.label === sessionLabel;
            }) )
        },
        materialSession( materialLabel, format ){
            return this.srcByFormat( format )[ materialLabel ].sessionLabel;
        },
        partNo( sessionLabel, label, format ){
            
            const sessionIndex = this.sessionIndex( sessionLabel );
            
            const material = curriculum[ sessionIndex ].find( material =>{
                return(
                    material.label === label && 
                    material.format === format
                );
            })
    
            const partIndex = curriculum[ sessionIndex ].material.indexOf( material );
    
            return partIndex + 1;
        },
        ofParts( sessionLabel ){
            const sessionIndex = this.sessionIndex( sessionLabel );
    
            return curriculum[ sessionIndex ].material.length;
        },
        // Book & Discussion Info
        pages( format, label ){
            if ( format === 'book' || format === 'discussion' ){
                return this.srcByFormat( format)[ label ].pages;
            }
            else {
                return 0;
            }
        }, 
        translations( format, label, page ){
    
            const translations = contentGetters.srcByFormat( format )[ label ].translations;

            if(translations) {
                const pageTranslations = contentGetters.srcByFormat(format)[label].translations[page];

                if (pageTranslations) {
                    return pageTranslations;
                }
            }
            else{
                return pageText.messages.spanishComing;
            }
        },
        // Book Info
        author( format, label ){
            const author = this.srcByFormat( format )[ label ].author;
    
            return author;
        },
        byAuthor( format, label, language ){
            const author = this.author( format, label );
    
            return pageText.labels.byAuthor( author, language );
        },
    },
    // Summaries
    contentSummary( content, format, language ){
        
        // Attach General Info
        const contentSummary = {
            contentId: content.contentId,
            format: format,
            title: this.extractFromData.title( content.title ),
            description: this.extractFromData.description( content.description ),
            graphic: this.extractFromData.graphic( content, format ),
            runTime: this.extractFromData.runTime( content.runTime ),
            narration: content.narration,
        }

        // Arrach Format Specific Info
        switch( format ){

            case ('book'):
                // Attach Author Info
                contentSummary.author = content.author;
                contentSummary.byAuthor = this.extractFromData.byAuthor( content.author,language);
                // Attach Reader Info
                // Reader Name String:
                contentSummary.reader = this.extractFromData.reader( content.reader, language )
                // Native 'Read By (ReaderName) String`
                contentSummary.readBy = this.extractFromData.readBy( contentSummary.reader, language );
                contentSummary.readerPhoto = this.extractFromData.readerPhoto( contentSummary.reader, language );
                // Attach Page Count
                contentSummary.pages = content.pages;
                contentSummary.startPage = 1;
                contentSummary.endPage = content.pages;
                break;

            case('discussion'):
                // Attach Page Count
                contentSummary.pages = Object.keys(content.pages).length;
                break;

            default:
                break;
        }
        return contentSummary;
    },
    materialSummary( material, language ){

        const content = material.content;
        const format = material.format;

        const contentSummary = this.contentSummary( content, format, language );

        const materialSummary = contentSummary;

        // Attach Material / Session Info
        materialSummary.type = material.type;
        materialSummary.session = material.sessionLabel;
        materialSummary.partNo = material.partNo;
        materialSummary.ofParts = material.ofParts;
        
        // Check For Material-Specific Info
        if ( material.materialTitle ){
            materialSummary.title = material.materialTitle;
        }
        if ( material.materialDescription ){
            materialSummary.description = material.materialDescription;
        }
        if ( material.materialRunTime ){
            materialSummary.runTime = material.materialRunTime;
        }
        if (material.startPage ){
            materialSummary.startPage = material.startPage;
        }
        if ( material.endPage ){
            materialSummary.endPage = material.endPage;
        }

        // Attach Book / Discussion -Specific Info
        if(material.format === 'book' || material.format === 'discussion'){

            if(!material.startPage){
                materialSummary.startPage = 1;
            }
            if(!material.endPage){

                if(material.format === 'book'){
                    materialSummary.endPage = content.pages;

                }
                else if (material.format === 'discussion'){
                    materialSummary.endPage = contentSummary.pages;
                }
            }
        }

        // Attach Video Specific Info
        if(material.format === 'video'){
            materialSummary.videoSrc = contentGetters.findByContentId.videoSrc(materialSummary.contentId);
        }

        return materialSummary;
    },
    sessionSummary( sessionId, language ){

        const session = curriculum.find( session =>{
            return session.sessionId === sessionId;
        });

        const sessionSummary = {
            sessionId: session.sessionId,
            material: session.material.map( material =>{

                return this.materialSummary(
                    material,
                    language
                );
            })
        }
        sessionSummary.material.forEach( material =>{
            material.sessionId = sessionId
        })
        return sessionSummary;
    },
    // Misc
    readerContent(materialSummary,language,formatInput,contentIdInput){

        let content = {};

        if(materialSummary){
            content.pages = contentGetters.extractFromData.getReaderPages(materialSummary,language);
        }
        else if(formatInput === 'book'){
            content.pages = contentGetters.extractFromData.getReaderPages(
                '',
                language,
                formatInput,
                contentIdInput
            );
        }

        content.imgPreloads = contentGetters.extractFromData.getImgPreloads(content.pages);
        content.audioPreloads = contentGetters.extractFromData.getAudioPreloads(content.pages);

        return content;
    },
    contentByIdAndFormat( contentId, format, language ){

        const content = this.srcByFormat( format )[ contentId ];

        const contentSummary = this.contentSummary( content, format, language );

        return contentSummary;
    },
    // Get Material for Read View Based On Parameters
    materialBySessionAndPart( sessionId, partNo, language ){
        const session = this.sessionSummary( sessionId, language );
        const material = session.material.find( material => material.partNo === partNo );
        return material;
    },
    libraryIcons(){
        const icons = [];
        curriculum.forEach( session =>{

            const featMaterial = session.material[0];

            if ( featMaterial.content ){
                icons.push( {
                    sessionId: session.sessionId,
                    graphic: this.extractFromData.graphic( featMaterial.content, featMaterial.format )
                })
            } else {
                icons.push( {
                    label: session.sessionId,
                    image: noGraphic
                })
            }
        })
        return icons;
    },
    libraryBooks(){
        const libraryBooks = [];

        Object.keys(books).forEach( bookKey =>{
            libraryBooks.push( books[bookKey]);
        });

        return libraryBooks;
    }
}
export default contentGetters;