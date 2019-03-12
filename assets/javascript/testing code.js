// use this code if the countdown time is going to be in minutes and seconds (like 2:00)

var time = 160; // must be in total seconds - 160 equals 2:00 minutes

function decrement() {
    time--;
    var converted = timeConverter(time);
    $("#timer").text("Time Remaining: " + converted);
};

function timeConverter(t) {
    var minutes = Math.floor(t / 60);
    var seconds = t - (minutes * 60);
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    if (minutes === 0) {
        minutes = "00";
    }
    else if (minutes < 10) {
        minutes = "0" + minutes;
    }
    return minutes + ":" + seconds;
}

// use this code if the countdown is just a number (like 30)

var time = 30;  // 30 seconds

function decrement() {
    time--;
    $("#timer").text("Time Remaining: " + time);
};

// $("#timer").text("Time Remaining: 02:00");
        // var intervalId = setInterval(function () {
        //     time--;
        //     var converted = timeConverter(time);
        //     $("#timer").text("Time Remaining: " + converted);
        //     if (time === 0) {
        //         clearInterval(intervalId);
        //         results();
        //     }
        // }, 1000);
        // questions();

        // $("input[name=optionBtn]").off("click");