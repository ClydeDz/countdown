define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var UrlProcessor = /** @class */ (function () {
        function UrlProcessor() {
        }
        UrlProcessor.prototype.startUrlProcess = function () {
            var querystring = window.location.search.substring(1);
            this.parseQueryString(querystring);
        };
        ;
        UrlProcessor.prototype.hasQueryString = function (queryString) {
            var isQueryStringNullOrEmpty = this.isQueryStringNullOrEmpty(queryString);
            return !isQueryStringNullOrEmpty;
        };
        UrlProcessor.prototype.isQueryStringNullOrEmpty = function (queryString) {
            return queryString === "" || queryString === null;
        };
        ;
        UrlProcessor.prototype.parseQueryString = function (queryString) {
            // if the query string is NULL
            if (queryString == null) {
                queryString = window.location.search.substring(1);
            }
            var params = new Map();
            var queries = queryString.split("&");
            queries.forEach(function (indexQuery) {
                var indexPair = indexQuery.split("=");
                var queryKey = decodeURIComponent(indexPair[0]);
                var queryValue = decodeURIComponent(indexPair.length > 1 ? indexPair[1] : "");
                params[queryKey] = queryValue;
            });
            console.log(params);
            return params;
        };
        ;
        return UrlProcessor;
    }());
    exports.UrlProcessor = UrlProcessor;
    ;
});
//# sourceMappingURL=url.js.map