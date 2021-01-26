
import chai from 'chai';
import {curriculum} from "../curriculum";

var assert = chai.assert;

describe('curriculum', function() {

    it('should be an array', function() {

        assert.equal(typeof {curriculum},"object");
    });

    it('should have "format" on all entries', function() {

        const formatTest = curriculum.every( material =>{
            material.hasOwnProperty('format')
        });

        assert.equal(typeof {curriculum},"object",'all entries should contain "format" property');
    });

    it('should have "sessionId" on all entries', function() {

        const sessionIdTest = curriculum.every( material =>{
            material.hasOwnProperty('sessionId');
        });

        assert.equal(typeof {curriculum},"object",'all entries should contain "sessionId" property');
    });

});