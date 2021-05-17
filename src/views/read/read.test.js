// React Testing
import React from "react";
import ReactDOM from "react-dom";
import {HashRouter as Router} from "react-router-dom";
import {act} from "react-dom/test-utils";
import {fireEvent} from "@testing-library/react";

//Components
import {Read} from "./read";

//Data
import curriculum from "../../data/curriculum/curriculum";
import books from "../../data/books/books";
import translationsSpa from "../../data/books/translationsSpa";
import pageText from "../../data/pageText";

// Set Up / Tear Down
let container;
beforeEach( ()=>{
    container = document.createElement("div");
    document.body.appendChild(container);
})
afterEach(()=>{
    if(container){
        document.body.removeChild(container);
        container = null;
    }
})

// Testing Variables / State / Functions
let language = 'spa';
function changeLanguage(){
    language = language === 'eng' ? 'spa' : 'eng';
}
window.HTMLMediaElement.prototype.pause = () => {};

// Dom Functions
function clickNextPage(){
    const button = document.getElementById('nextPage');

    act(() => {

        button.dispatchEvent(
            new MouseEvent(
                "click",
                { bubbles: true }
            )
        );
    });
}

// Cycles Through All Read-View Material
function testReadCurriculum(){

    describe("Readable Session Material", ()=>{

        // Loop through all sessions
        curriculum.sessions.forEach( session =>{

            // Loop through all material in each session
            session.material.forEach( material =>{

                let content = material.content;

                // Only test "read"-able material (Not Videos)
                if(content.format === 'book' || content.format === 'discussion'){

                    testReadMaterial(material);
                }
            });
        });
    });
}

// Tests for Read-View Material (Books & Discussions)
function testReadMaterial(material){

    let content = material.content;
    let contentId = content.contentId;

    // Run tests on each material
    describe(`s-${material.sessionInfo.sessionId}:p-${material.sessionInfo.partNo} | ${contentId}`, ()=>{

        it('renders', ()=>{

            act(() => {
                ReactDOM.render(
                    <Router>
                        <Read
                            content={content}
                            language={language}
                        />
                    </Router>,
                    container);
            });

            let rendered = container.firstChild.firstChild.classList.contains('Read');

            expect(rendered).toBe(true);

        })

        describe('Congrats Window', ()=>{
            it('opens after turning last page', ()=>{

                act(() => {
                    ReactDOM.render(
                        <Router>
                            <Read
                                content={content}
                                language={language}
                                sessionInfo={material.sessionInfo}
                            />
                        </Router>,
                        container);
                });

                for(let i = 0; i <= content.endPage; i++){ clickNextPage(); }

                const congrats = document.getElementById('complete');
                expect(congrats.style.display).toBe(`inline-flex`);
            });
        });

        // Book-Specific Tests
        if (content.format === 'book'){

            testReadBookMaterial(material);
        }
    });
}

// Tests Specific to Book Material
function testReadBookMaterial(material){

    let content = material.content;

    describe('Next Page Button', ()=>{

        test("changes page image", () => {

            act(() => {
                ReactDOM.render(
                    <Router>
                        <Read
                            content={content}
                            language={language}
                            sessionInfo={material.sessionInfo}
                        />
                    </Router>,
                    container);
            });

            clickNextPage();

            const img = document.getElementById('pageImg');

            expect(img.src).toBe(`http://localhost/assets/${content.format}/${content.contentId}/pages/${content.startPage + 1}.jpg`);
        });
    });

    describe('Page Input', ()=>{
        it('changes page with number input', ()=>{

            let content = material.content;

            act(() => {
                ReactDOM.render(
                    <Router>
                        <Read
                            content={content}
                            language={language}
                            sessionInfo={material.sessionInfo}
                        />
                    </Router>,
                    container);
            });

            const pageInput = document.getElementById('pageInput');
            const pageImg = document.getElementById('pageImg');

            for (let i=1; i<10; i++){
                act(() => {
                    fireEvent.change(pageInput, {target: {value: i}});
                });

                expect(pageImg.src).toBe(`http://localhost/assets/${content.format}/${content.contentId}/pages/${i}.jpg`);
            }
        })
    });

    describe('Spanish Translation', ()=>{

        if (translationsSpa.hasOwnProperty(content.contentId)){

            it('shows translated text', ()=>{

                // Render Read component
                act(() => {
                    ReactDOM.render(
                        <Router>
                            <Read
                                content={content}
                                language={language}
                                sessionInfo={material.sessionInfo}
                                changeLanguage={changeLanguage}
                            />
                        </Router>,
                        container);
                });

                // Confirm Spanish mode
                if (language !== 'spa'){

                    let button = document.getElementById('translateButton');

                    act(() => {

                        button.dispatchEvent(
                            new MouseEvent(
                                "click",
                                { bubbles: true }
                            )
                        );
                    });
                }

                let pageData = content.pageData;

                // Iterate through each page of book
                for (let i=0; i<pageData.length; i++){

                    const actualText = document.getElementById('translation').children;

                    const expectedText = content.pageData[i].translation.get('spa');

                    // Iterate through each line of text
                    for ( let j=0; j<expectedText.length; j++){

                        expect( expectedText[j] ).toBe( actualText[j].textContent );
                    }

                    clickNextPage();
                }
            });

        } else {

            it('shows "Spanish Coming Soon" message', ()=>{

                // Render Read component
                act(() => {
                    ReactDOM.render(
                        <Router>
                            <Read
                                content={content}
                                language={language}
                                sessionInfo={material.sessionInfo}
                                changeLanguage={changeLanguage}
                            />
                        </Router>,
                        container);
                });

                // Confirm Spanish mode
                if (language !== 'spa'){

                    let button = document.getElementById('translateButton');

                    act(() => {

                        button.dispatchEvent(
                            new MouseEvent(
                                "click",
                                { bubbles: true }
                            )
                        );
                    });
                }

                let pageData = content.pageData;

                // Iterate through each page of book
                for (let i=0; i<pageData.length; i++){

                    const actualText = document.getElementById('translation').firstChild.textContent;

                    const expectedText = pageText.messages.spanishComing;

                    expect( actualText ).toBe( expectedText );

                    clickNextPage();
                }
            });
        }
    });
}

describe("Read View", testReadCurriculum );