"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const queryString = require('query-string');
class UrlProcessor {
    hasQueryString(url) {
        if (url.length > 0 && url.indexOf('?') < 1) {
            return false;
        }
        var queryStringSection = url.substring(url.indexOf('?') + 1);
        if (queryStringSection == undefined) {
            return false;
        }
        return queryStringSection.length > 0;
    }
    parseQueryString(url) {
        var qs = queryString.parseUrl(url);
        console.log(qs.length);
        return qs;
    }
    ;
}
exports.UrlProcessor = UrlProcessor;
;
