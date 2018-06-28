define(["require", "exports", "time", "url"], function (require, exports, TeaTime, Url) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Greeter = /** @class */ (function () {
        function Greeter() {
        }
        Greeter.startScreen = function () {
            setTimeout(function () {
                var x = new TeaTime.Time();
                var timeleft = x.calculateTimeLeft(new Date("June 30, 2018 15:37:25").getTime(), new Date().getTime());
                document.getElementById('countdownTimeOutput').innerHTML = "Only " + timeleft.days + " days " + timeleft.hours + " hours " + timeleft.minutes + " minutes and " + timeleft.seconds + " seconds left";
                Greeter.startScreen();
            }, 1000);
        };
        return Greeter;
    }());
    ;
    var querystring = window.location.search.substring(1);
    var w = new Url.Url();
    w.parseQueryString(querystring);
    // start the call
    Greeter.startScreen();
});
//# sourceMappingURL=app.js.map