export class CountdownTime {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
    timeleft: number;
};

export class TimeMachine {
    calculateTimeLeft(eventDate: any, today: any): CountdownTime {
        let timeLeft: number = (eventDate - today);
        let result = new CountdownTime();

        result.timeleft = timeLeft;
        result.days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        result.hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        result.minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        result.seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        return result;
    }

    generateDaysLeftMessage(daysLeft: number): string {
        return daysLeft == 1 ? `${daysLeft} day` : `${daysLeft} days`;
    }

    generateHoursLeftMessage(hoursLeft: number): string {
        return hoursLeft == 1 ? `${hoursLeft} hour` : `${hoursLeft} hours`;
    }

    generateMinutesLeftMessage(minutesLeft: number): string {
        return minutesLeft == 1 ? `${minutesLeft} minute` : `${minutesLeft} minutes`;
    }

    generateSecondsLeftMessage(secondsLeft: number): string {
        return secondsLeft == 1 ? `${secondsLeft} second` : `${secondsLeft} seconds`;
    }
};
