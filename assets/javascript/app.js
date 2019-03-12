var time = 2;

var question = "What is 1 + 1?";
var options = ["two", "three", "four", "five"];
var answer = options[0];

var userChoice;
var correct = 0;
var incorrect = 0;
var unanswered = 0;
var answered = false;

$(document).ready(function () {

    $("#startBtn").on("click", start);

    function start() {
        $("#startBtn").hide();
        $("#timer").text("Time Remaining: 02:00");
        var intervalId = setInterval(function () {
            time--;
            var converted = timeConverter(time);
            $("#timer").text("Time Remaining: " + converted);
            if (time === 0) {
                clearInterval(intervalId);
                results();
            }
        }, 1000);
        questions();
    };

    $(document).on("click", ".playAgainBtn", restart);

    function restart() {
        $(".playAgainBtn").hide();
        $("#result").hide();
        $("#question").show();
        $("#choices").empty();
        $("#choices").show();
        time = 2;
        // answered = false;
        start();
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
    };

    function questions() {
        $("#question").html("<h2>" + question + "</h2>");
        for (var i = 0; i < options.length; i++) {
            var b = $("<input type='radio' name='optionBtn' value=" + options[i] + ">" + options[i] + "</input>");
            $("#choices").append(b);
        };
        optionBtn();
    };

    function optionBtn() {
        $("input[name=optionBtn]").click(function () {
            $("input[name=optionBtn").attr("disabled", "disabled");
            userChoice = $(this).val();
            console.log("User Choice: " + userChoice);
            console.log("Answer: " + answer);
            console.log(answered);
            answered = true;

            if (userChoice === answer && answered === true) {
                correct++;
            }
            else if (userChoice !== answer && answered === true) {
                incorrect++;
            }

        })

        // if (answered === false) {
        //     unanswered++;
        // } 
        // answered = false;
    };


    function results() {
        $("#result").empty();
        $("#result").show();
        $("#timer").html("<h2> Time's up!</h2>");
        $("#question").hide();
        $("#choices").hide();
        $("#result").append("<p> Correct Answers = " + correct + "</p");
        $("#result").append("<p> Incorrect Answers = " + incorrect + "</p>");
        $("#result").append("<p> Unanswered = " + unanswered + "</p>");

        var playAgain = $("<button>");
        playAgain.addClass("playAgainBtn");
        playAgain.attr("data-name", "playAgainBtn");
        playAgain.text("Play Again");
        $("#playAgain").append(playAgain);
    }

})