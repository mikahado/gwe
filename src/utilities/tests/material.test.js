// Required Utilities
import {default as get} from '../contentGetters';

//Testing Functions
import {
    getMaterialSummary,
} from "../material";

// Chai
import chai from 'chai';
const assert = chai.assert;

// Testing Variables
let params = {
    sessionId: 1,
    partNo: 1
}
let language = 'eng';

let materialSummary = getMaterialSummary(params,language);
let content = get.readerContent(materialSummary,language);


