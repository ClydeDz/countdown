import * as assert from 'assert';
import {UrlProcessor} from './../scripts/urlProcessor';

describe('UrlProcessor', function () {
    describe('hasQueryString', function () {
        var urlProcessor = new UrlProcessor();

        it('should handle valid query string formats', function () {             
            var actual = urlProcessor.hasQueryString("www.example.com?e=bar");
            assert.equal(actual, true, 'should be true'); 
            actual = urlProcessor.hasQueryString("www.example.com?foo=bar&e=xyz");
            assert.equal(actual, true, 'should be true'); 
        });  
        it('should handle invalid query string formats', function () {             
            var actual = urlProcessor.hasQueryString("www.example.com?");
            assert.equal(actual, false, 'should be false'); 
            actual = urlProcessor.hasQueryString("www.example.com?n=bar");
            assert.equal(actual, false, 'should be false'); 
            actual = urlProcessor.hasQueryString("www.example.com");
            assert.equal(actual, false, 'should be false'); 
            actual = urlProcessor.hasQueryString("");
            assert.equal(actual, false, 'should be false'); 
        }); 
    }); 
});
