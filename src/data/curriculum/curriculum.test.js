// Test Data
import curriculum from "./curriculum";

function testSessions(session){

    describe(`Session ${session.sessionInfo.sessionId}`, ()=>{

        // Check for required properties
        it('has a sessionInfo property', ()=>{

            expect( session.hasOwnProperty('sessionInfo') ).toBe(true);

        })
        it('has a material property', ()=>{

            expect( session.hasOwnProperty('material') ).toBe(true);

        })

        // Test properties
        describe('sessionInfo', ()=>{

            let sessionInfo = session.sessionInfo;

            it('has a sessionId property', ()=>{

                expect( sessionInfo.hasOwnProperty('sessionId') ).toBe(true);
            });
        });
        describe('material', ()=>{

            let material = session.material;

            it('is an array', ()=>{

                expect( Array.isArray(material) ).toBe(true);
            });

            material.forEach( material =>{ testMaterial(material) } );
        });
    });
}
function testMaterial(material){

    describe(`part ${material.sessionInfo.partNo} of ${material.sessionInfo.ofParts} | ${material.content.contentId}`, ()=>{

        it('has a content property', ()=>{

            expect(material.hasOwnProperty('content')).toBe(true);
        });

        if(material.content.format === 'discussion' || material.content.format === 'book'){

            testReadContent(material.content);
        }
    });
}
function testReadContent(content){

    describe('Read content', ()=>{

        it('has a pageData array property', ()=>{

            expect(Array.isArray(content.pageData)).toBe(true);
        });

        if (content.format === 'discussion'){ testDiscussionContent(content) }
    });

}
function testDiscussionContent(content){
}

describe("curriculum", () => {
    it("it has a 'sessions' array", () => {

        expect(curriculum.hasOwnProperty('sessions') ).toBe(true);

    });

    describe('sessions', ()=>{

        it('is an array', ()=>{
            expect(Array.isArray(curriculum.sessions)).toBe(true);
        });

        curriculum.sessions.forEach( session =>{
            testSessions(session);
        })

    })

});