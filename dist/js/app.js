"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const urlProcessor_1 = require("./urlProcessor");
function abc() {
    return 1 + 2 + 1;
}
window.onload = () => {
    console.log(abc());
    var urlP = new urlProcessor_1.UrlProcessor();
    var hqs = urlP.hasQueryString(window.location.href);
};
