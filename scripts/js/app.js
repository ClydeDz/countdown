var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define(["require", "exports", "time", "url", "jquery"], function (require, exports, Time, Url, $) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Constants = /** @class */ (function () {
        function Constants() {
        }
        Constants.eventNameKey = "e";
        Constants.eventDateTimeKey = "w";
        return Constants;
    }());
    var Greeter = /** @class */ (function (_super) {
        __extends(Greeter, _super);
        function Greeter() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Greeter.prototype.begin = function () {
            var querystring = window.location.search.substring(1);
            var url = new Url.UrlProcessor();
            if (url.hasQueryString(querystring)) {
                var queryStringArray = url.parseQueryString(querystring);
                this.hideInputControls();
                this.displayEventName(queryStringArray[Constants.eventNameKey]);
                Greeter.startCountdown(queryStringArray[Constants.eventDateTimeKey]);
            }
            else {
                this.showInputControls();
            }
        };
        Greeter.prototype.displayEventName = function (eventName) {
            document.getElementById('countdownTimeEventNameOutput').innerHTML = eventName;
        };
        Greeter.prototype.hideInputControls = function () {
            $('#inputBlock').hide();
            $('#outputBlock').show();
        };
        Greeter.prototype.showInputControls = function () {
            $('#inputBlock').show();
            $('#outputBlock').hide();
        };
        Greeter.prototype.redirectUser = function () {
            var url = new Url.UrlProcessor();
            var querystring = window.location.search.substring(1);
            if (!url.hasQueryString(querystring)) {
                window.location.assign(window.location.href + "?w=" + $('#eventDateTimeInput').val() + "&e=" + $('#eventNameInput').val());
            }
        };
        Greeter.prototype.getTimeLeftMessage = function (timeleft) {
            var time = new Time.TimeMachine();
            return time.generateDaysLeftMessage(timeleft.days) + " \n                " + time.generateDaysLeftMessage(timeleft.hours) + " \n                " + time.generateDaysLeftMessage(timeleft.minutes) + " and \n                " + time.generateDaysLeftMessage(timeleft.seconds);
        };
        Greeter.startCountdown = function (eventDate) {
            setTimeout(function () {
                var greeter = new Greeter();
                var time = new Time.TimeMachine();
                var timeleft = time.calculateTimeLeft(new Date(eventDate).getTime(), new Date().getTime());
                document.getElementById('countdownTimeOutput').innerHTML = greeter.getTimeLeftMessage(timeleft);
                Greeter.startCountdown(eventDate);
            }, 1000);
        };
        return Greeter;
    }(Constants));
    ;
    var greet = new Greeter();
    // Attach an event listener on the generate countdown button
    document.getElementById("generateCountdownBtn").addEventListener("click", function () {
        greet.redirectUser();
    });
    // Start the call
    greet.begin();
});
//# sourceMappingURL=app.js.map