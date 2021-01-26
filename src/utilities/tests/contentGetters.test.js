
import chai from 'chai';
import {default as get} from "../contentGetters";
import {getMaterialSummary} from "../material";
var assert = chai.assert;

const sessionId = 4;
const partNo = 1;
const language = 'eng';

describe('getImgPreloads', function() {

    let params = {
        sessionId: 1,
        partNo: 1
    }
    let materialSummary = getMaterialSummary(params,language);
    let readerPages = get.extractFromData.getReaderPages(materialSummary);

    const imgPreloads = get.extractFromData.getImgPreloads(readerPages);

    it('should return an array', function() {

        assert.equal(Array.isArray(imgPreloads), true);
    });
    it('should only contain images', function() {

        const imgTest = imgPreloads.every( entry =>{
            return entry.type === 'img';
        })

        assert.equal(imgTest, true);
    });
    it("shouldn't contain duplicates", function(){

        const duplicateTest = function(){
            for(let i=0;i<=imgPreloads.length;i++){

                let testImg = imgPreloads[i];
                let preloadsCopy = imgPreloads;

                preloadsCopy.splice(i,1);

                if(preloadsCopy.includes(testImg)){
                    return false;
                }
                else{ return true }
            }
        }
        assert.equal(duplicateTest(),true);
    })
});
describe('getAudioPreloads', function() {

    let params = {
        sessionId: 1,
        partNo: 1
    }
    let materialSummary = getMaterialSummary(params,language);
    let readerPages = get.extractFromData.getReaderPages(materialSummary);

    const audioPreloads = get.extractFromData.getAudioPreloads(readerPages);

    it('should return an array', function() {

        assert.equal(Array.isArray(audioPreloads), true);
    });

    it('should only contain audio', function() {

        const audioTest = audioPreloads.every( entry =>{
            return entry.type === 'audio';
        })

        assert.equal(audioTest, true);
    });

    it("shouldn't contain duplicates", function(){

        const duplicateTest = function(){
            for(let i=0;i<=audioPreloads.length;i++){

                let testAudio = audioPreloads[i];
                let preloadsCopy = audioPreloads;

                preloadsCopy.splice(i,1);

                if(preloadsCopy.includes(testAudio)){
                    return false;
                }
                else{ return true }
            }
        }
        assert.equal(duplicateTest(),true);
    })
});
describe('getReaderPages',function(){

    let sessionSummary = get.sessionSummary(sessionId,language);
    let materialSummary = sessionSummary.material[0];

    let readerPages = get.extractFromData.getReaderPages(materialSummary,language);

    it('should return an array',function(){
        assert.equal(Array.isArray(readerPages),true);
    });
    it('each entry should have an "img" property',function(){

        let imgTest = readerPages.every( page =>{
            return page.hasOwnProperty('img');
        })

        assert.equal(imgTest,true);
    });
})


describe('materialBySessionAndPart', function() {

    it('should return an object', function() {

        let material = get.materialBySessionAndPart(sessionId,partNo,language);

        assert.equal(typeof material, "object");
    });
    //Properties
    it('should return a "contentId" property', function() {

        let material = get.materialBySessionAndPart(sessionId,partNo,language);

        assert.equal(material.hasOwnProperty('contentId'), true);
    });
    it('should return a "format" property', function() {

        let material = get.materialBySessionAndPart(sessionId,partNo,language);

        assert.equal(material.hasOwnProperty('format'), true);
    });
    it('should return a "type" property', function() {

        let material = get.materialBySessionAndPart(sessionId,partNo,language);

        assert.equal(material.hasOwnProperty('type'), true);
    });

    it('should return a "title" property', function() {

        let material = get.materialBySessionAndPart(sessionId,partNo,language);

        assert.equal(material.hasOwnProperty('title'), true);
    });
    it('should return a "description" property', function() {

        let material = get.materialBySessionAndPart(sessionId,partNo,language);

        assert.equal(material.hasOwnProperty('description'), true);
    });

    it('should return a "graphic" property', function() {

        let material = get.materialBySessionAndPart(sessionId,partNo,language);

        assert.equal(material.hasOwnProperty('graphic'), true);
    });

    it('should return a "pages" property', function() {

        let material = get.materialBySessionAndPart(sessionId,partNo,language);

        assert.equal(material.hasOwnProperty('pages'), true);
    });
    it('should return a "startPage" property', function() {

        let material = get.materialBySessionAndPart(sessionId,partNo,language);

        assert.equal(material.hasOwnProperty('startPage'), true);
    });
    it('should return a "endPage" property', function() {

        let material = get.materialBySessionAndPart(sessionId,partNo,language);

        assert.equal(material.hasOwnProperty('endPage'), true);
    });

    it('should return a "runTime" property', function() {

        let material = get.materialBySessionAndPart(sessionId,partNo,language);

        assert.equal(material.hasOwnProperty('runTime'), true);
    });

    it('should return a "sessionId" property', function() {

        let material = get.materialBySessionAndPart(sessionId,partNo,language);

        assert.equal(material.hasOwnProperty('sessionId'), true);
    });
    it('should return a "partNo" property', function() {

        let material = get.materialBySessionAndPart(sessionId,partNo,language);

        assert.equal(material.hasOwnProperty('partNo'), true);
    });
    it('should return a "ofParts" property', function() {

        let material = get.materialBySessionAndPart(sessionId,partNo,language);

        assert.equal(material.hasOwnProperty('ofParts'), true);
    });

    //Property Types
    it('"ofParts" property should be number', function() {

        let material = get.materialBySessionAndPart(sessionId,partNo,language);

        assert.equal(typeof material.ofParts, "number");
    });
    it('"pages" property should be number', function() {

        let material = get.materialBySessionAndPart(sessionId,partNo,language);

        console.log(material.pages);

        assert.equal(typeof material.pages, "number");
    });
    it('"startPage" property should be number', function() {

        let material = get.materialBySessionAndPart(sessionId,partNo,language);

        assert.equal(typeof material.startPage, "number");
    });
    it('"endPage" property should be number', function() {

        let material = get.materialBySessionAndPart(sessionId,partNo,language);

        console.log(material.endPage);

        assert.equal(typeof material.endPage, "number");
    });
    it('"sessionId" property should be number', function() {

        let material = get.materialBySessionAndPart(sessionId,partNo,language);

        assert.equal(typeof material.sessionId, "number");
    });
});
describe('readerContent',function(){

    let params = {
        sessionId: 1,
        partNo: 1
    }
    let materialSummary = getMaterialSummary(params,language);
    let content = get.readerContent(materialSummary,language);

    it('should return an object',function(){

        assert.equal(typeof content, "object");
    })

    it('should return an "imgPreloads" property',function(){

        let imgPreloadTest = content.hasOwnProperty('imgPreloads');

        assert.equal(imgPreloadTest, true);
    })
    it('"imgPreloads" property should be array',function(){

        assert.equal(Array.isArray(content.imgPreloads),true);
    })

    it('should return an "audioPreloads" property',function(){

        let audioPreloadTest = content.hasOwnProperty('audioPreloads');

        assert.equal(audioPreloadTest, true);
    })
    it('"audioPreloads" property should be array',function(){

        assert.equal(Array.isArray(content.audioPreloads),true);
    })

    it('should contain a "pages" property', function(){

        let pagesTest = content.hasOwnProperty('pages');

        assert.equal(pagesTest, true);
    });
    it('pages property should be array',function(){

        assert.equal(Array.isArray(content.pages),true);
    })
});


