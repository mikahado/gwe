import {Curriculum} from "../Curriculum";
import {Material} from "../Material";
import books from "../../books/books";
import discussions from "../../discussions/discussions";

let material1 = new Material(books.commonGround);
let material2 = new Material(discussions.commonGroundDiscuss);
let testCurriculum = new Curriculum([
    material1,
    material2
]);
describe('Curriculum Constructor', ()=>{
    it('calculate percentage of curriculum for each material', ()=>{
    })
})
