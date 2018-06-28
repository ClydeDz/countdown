define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Url = /** @class */ (function () {
        function Url() {
        }
        Url.prototype.parseQueryString = function (queryString) {
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
        return Url;
    }());
    exports.Url = Url;
    ;
});
//# sourceMappingURL=url.js.map