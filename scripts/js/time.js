define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var CountdownTime = /** @class */ (function () {
        function CountdownTime() {
        }
        return CountdownTime;
    }());
    exports.CountdownTime = CountdownTime;
    ;
    var TimeMachine = /** @class */ (function () {
        function TimeMachine() {
        }
        TimeMachine.prototype.calculateTimeLeft = function (eventDate, today) {
            var timeLeft = (eventDate - today);
            var result = new CountdownTime();
            result.timeleft = timeLeft;
            result.days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
            result.hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            result.minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
            result.seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
            return result;
        };
        TimeMachine.prototype.generateDaysLeftMessage = function (daysLeft) {
            return daysLeft == 1 ? daysLeft + " day" : daysLeft + " days";
        };
        TimeMachine.prototype.generateHoursLeftMessage = function (hoursLeft) {
            return hoursLeft == 1 ? hoursLeft + " hour" : hoursLeft + " hours";
        };
        TimeMachine.prototype.generateMinutesLeftMessage = function (minutesLeft) {
            return minutesLeft == 1 ? minutesLeft + " minute" : minutesLeft + " minutes";
        };
        TimeMachine.prototype.generateSecondsLeftMessage = function (secondsLeft) {
            return secondsLeft == 1 ? secondsLeft + " second" : secondsLeft + " seconds";
        };
        return TimeMachine;
    }());
    exports.TimeMachine = TimeMachine;
    ;
});
//# sourceMappingURL=time.js.map