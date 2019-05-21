
import Time = require("time");
import Url  = require("url");
import $    = require("jquery");

class Constants {
    static readonly eventNameKey = "e";
    static readonly eventDateTimeKey = "w";
}

class Greeter extends Constants {

    begin() {
        let querystring = window.location.search.substring(1);
        let url = new Url.UrlProcessor();

        if (url.hasQueryString(querystring)) {
            let queryStringArray = url.parseQueryString(querystring);
            this.hideInputControls();
            this.displayEventName(queryStringArray[Constants.eventNameKey]);
            Greeter.startCountdown(queryStringArray[Constants.eventDateTimeKey]);
        }
        else {
            this.showInputControls();
        }
    }

    displayEventName(eventName: string) {
        document.getElementById('countdownTimeEventNameOutput').innerHTML = eventName;
    }

    hideInputControls() {
        $('#inputBlock').hide();
        $('#outputBlock').show();
    }

    showInputControls() {
        $('#inputBlock').show();
        $('#outputBlock').hide();
    }

    redirectUser() {
        let url = new Url.UrlProcessor();
        let querystring = window.location.search.substring(1);

        if (!url.hasQueryString(querystring)) {
            window.location.assign(window.location.href + "?w=" + $('#eventDateTimeInput').val() + "&e=" + $('#eventNameInput').val());
        }        
    }

    getTimeLeftMessage(timeleft: Time.CountdownTime): string {
        let time = new Time.TimeMachine();
        return `${time.generateDaysLeftMessage(timeleft.days)} 
                ${time.generateDaysLeftMessage(timeleft.hours)} 
                ${time.generateDaysLeftMessage(timeleft.minutes)} and 
                ${time.generateDaysLeftMessage(timeleft.seconds)}`;
    }

    static startCountdown(eventDate: string) {
        setTimeout(function () {
            let greeter = new Greeter();
            let time = new Time.TimeMachine();
            let timeleft = time.calculateTimeLeft(new Date(eventDate).getTime(), new Date().getTime());
            document.getElementById('countdownTimeOutput').innerHTML = greeter.getTimeLeftMessage(timeleft);
            Greeter.startCountdown(eventDate);
        }, 1000);
    }
    
};

let greet = new Greeter();

// Attach an event listener on the generate countdown button
document.getElementById("generateCountdownBtn").addEventListener("click", function () {
    greet.redirectUser();
});

// Start the call
greet.begin();

