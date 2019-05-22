const queryString = require('query-string');

export class UrlProcessor {

    hasQueryString(url: string): boolean {
        if (url.length > 0 && url.indexOf('?') < 1) {
            return false;
        }
        var queryStringSection = url.substring(url.indexOf('?') + 1);
        if (queryStringSection == undefined) {
            return false;
        }
        return queryStringSection.length > 0;
    }

    parseQueryString(url: string): any {  
        var qs = queryString.parseUrl(url);
        return qs;
    };
};