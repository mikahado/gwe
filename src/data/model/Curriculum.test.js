import {Curriculum} from "./Curriculum";
import {Material} from "./Material";
import books from "../books/books";
import discussions from "../discussions/discussions";
import {Session} from "./Session";

let material1 = new Material(books.commonGround);
let material2 = new Material(discussions.commonGroundDiscuss);
let session1 = new Session([material1,material2])
let testCurriculum = new Curriculum([session1]);

describe('Curriculum Constructor', ()=>{
    it('calculates percentage of curriculum for each material', ()=>{

        let part2 = testCurriculum.sessions[0].material[1];

        expect(part2.curricPercent).toBe(1.5)
    });

    it('assigns a material ID', ()=>{

        let part2 = testCurriculum.sessions[0].material[1];
        let materialId = part2.sessionInfo.materialId;

        expect(materialId).toBe('1b')
    });

})
