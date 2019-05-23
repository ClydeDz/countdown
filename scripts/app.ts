import {UrlProcessor} from './urlProcessor';

function abc(){
    return 8+2+1;
}

window.onload = () => {
    console.log(abc());
    var urlProcessor = new UrlProcessor();
    if(urlProcessor.hasQueryString(window.location.href)){
      console.log("QS detected");
    }
    else{
        console.log("no QS detected");
    }
}; 

