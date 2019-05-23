const queryString = require('query-string');

export class UrlProcessor {

    hasQueryString(url: string): boolean {
        var parsedURL = queryString.parseUrl(url); 
        return parsedURL.query.e != undefined;  
    } 
};