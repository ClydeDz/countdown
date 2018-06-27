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
    var Time = /** @class */ (function () {
        function Time() {
        }
        Time.prototype.calculateTimeLeft = function (eventDate, today) {
            var timeLeft = (eventDate - today);
            var result = new CountdownTime();
            result.timeleft = timeLeft;
            result.days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
            result.hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            result.minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
            result.seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
            return result;
        };
        ;
        return Time;
    }());
    exports.Time = Time;
    ;
});
//# sourceMappingURL=time.js.map