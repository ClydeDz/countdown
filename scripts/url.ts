
export class UrlProcessor {
    startUrlProcess() {
        let querystring = window.location.search.substring(1);
        this.parseQueryString(querystring);
    };

    hasQueryString(queryString: string): boolean {
        let isQueryStringNullOrEmpty = this.isQueryStringNullOrEmpty(queryString);
        return !isQueryStringNullOrEmpty;
    }

    isQueryStringNullOrEmpty(queryString: string): boolean {
        return queryString === "" || queryString === null; 
    };

    parseQueryString(queryString: string): Map<string, string> {

        // if the query string is NULL
        if (queryString == null) {
            queryString = window.location.search.substring(1);
        }

        var params = new Map<string, string>();
        var queries = queryString.split("&");

        queries.forEach((indexQuery: string) => {
            var indexPair = indexQuery.split("=");
            var queryKey = decodeURIComponent(indexPair[0]);
            var queryValue = decodeURIComponent(indexPair.length > 1 ? indexPair[1] : "");
            params[queryKey] = queryValue;
        });

        console.log(params);
        return params;
    };
};
