
import TeaTime  = require("time")

class Greeter {
    public static startScreen() {
        setTimeout(function () {
            let x = new TeaTime.Time();
            let timeleft: TeaTime.CountdownTime = x.calculateTimeLeft(new Date("June 30, 2018 15:37:25").getTime(), new Date().getTime());
            document.body.innerHTML = `Only ${timeleft.days} days ${timeleft.hours} hours ${timeleft.minutes} minutes and ${timeleft.seconds} seconds left`;
            Greeter.startScreen();
        }, 1000);
    }
};

// start the call
Greeter.startScreen();
