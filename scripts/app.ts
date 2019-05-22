import {UrlProcessor} from './urlProcessor'

function abc(){
    return 1+2+1;
}

window.onload = () => {
    console.log(abc());
    var urlP = new UrlProcessor();
    var hqs = urlP.hasQueryString(window.location.href);
}; 

