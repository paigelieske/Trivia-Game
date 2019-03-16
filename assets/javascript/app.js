$(document).ready(function () {

    var time = 5;

    var game = [{
        question: "Where do the Flintstones live?",
        options: ["Royal Woods", "Jump City", "Flint", "Bedrock"],
        answer: 3
    }, {
        question: "What is the capital of Indiana?",
        options: ["Boston", "Atlanta", "Indianapolis", "Springfield"],
        answer: 2
    }, {
        question: "Who shot Abraham Lincoln?",
        options: ["Donald Trump", "John Wilkes Booth", "Robert E. Lee", "Mary Todd Lincoln"],
        answer: 1
    }, {
        question: "Who wrote To Kill A Mockingbird",
        options: ["Harper Lee", "J.K. Rowling", "Truman Capote", "S.E. Hinton"],
        answer: 0
    }];

    var questionNum = 0;
    var userChoice;
    var correct = 0;
    var incorrect = 0;
    var unanswered = 0;
    var answered = false;
    var intervalId;

    $("#startBtn").on("click", start);

    function start() {
        $("#startBtn").hide();
        $("#timer").text("Time Remaining: " + time);
        timer();
    }

    function timer() {
        clearInterval(intervalId);
        intervalId = setInterval(function () {
            time--;
            $("#timer").text("Time Remaining: " + time);
            if (time === 0) {
                clearInterval(intervalId);
                answerPage();
            }
        }, 1000);
        questions();
    }

    function reset () {
        clearInterval(intervalId);
        $("#timer").empty();
        time = 5;
        $("#timer").text("Time Remaining: " + time);
        intervalId = setInterval(function () {
            time--
            $("#timer").text("Time Remaining: " + time);
            if (time === 0) {
                clearInterval(intervalId);
                answerPage();
            }
        },1000);
        questions();
    }
    // $(document).on("click", ".playAgainBtn", restart);

    // function restart() {
    //     $(".playAgainBtn").empty();
    //     $("#result").empty();
    //     $("#question").empty();
    //     $("#question").show();
    //     $("#choices").empty();
    //     $("#choices").show();
    //     time = 15;
    //     // answered = false;
    //     start();
    // };

    function questions() {
        $("#timer").show();
        $("#questionNum").show();
        $("#question").show();
        $("#choices").show();
        $("#choices").empty();
        $("#message").empty();
        $("#questionNum").html("#" + (questionNum + 1));
        $("#question").html('<h2>' + game[questionNum].question + '</h2>');
        for (var i = 0; i < 4; i++) {
            var b = $("<input type='radio' name='optionBtn' value=" + game[questionNum].options[i] + ">" + game[questionNum].options[i] + "</input>");
            b.attr({ "data-index": i });
            console.log(b);
            $("#choices").append(b);
        }
        optionBtn();
    }

    function optionBtn() {
        $("input[name=optionBtn]").click(function () {
            answered = true;
            $("input[name=optionBtn").attr("disabled", "disabled");
            userChoice = $(this).data("index");
            var correctAnswer = game[questionNum].answer
            console.log("User Choice: " + userChoice);
            console.log("Answer: " + correctAnswer);

            if (userChoice === correctAnswer && answered === true) {
                correct++;
                answerPage();
                answered = false; 
            }
            else if (userChoice !== correctAnswer && answered === true) {
                incorrect++;
                answerPage();
                answered = false;
            }
        })
    }

    function answerPage() {
        $("#timer").hide();
        $("#questionNum").hide();
        $("#question").hide();
        $("#choices").hide();
        $("#message").show()
        $("#correctAnswer").show();

        var correctAnswer = game[questionNum].answer
        var correctAnswerText = game[questionNum].options[game[questionNum].answer];

        if (userChoice === correctAnswer && answered === true) {
            $("#message").text("Correct!");
            answered = false;
        }
        else if (userChoice !== correctAnswer && answered === true) {
            $("#message").text("Incorrect! The answer was " + correctAnswerText + ".");
            answered = false;
        }
        else {
            $("#message").text("Time's up! The answer was " + correctAnswerText + ".");
            answered = false;
        }
        nextQuestion();
    }

    function nextQuestion() {
        if (questionNum === (game.length - 1)) {
            setTimeout(results, 2000)
        }
        else {
            questionNum++;
            setTimeout(reset, 2000);
        }
    }

    function results() {
        if (answered === false) {
            unanswered++;
        }
        answered = false;
        $("#timer").empty();
        $("questionNum").hide();
        $("#question").hide();
        $("#choices").hide();
        $("#message").hide();
        $("#correctAnswer").hide();
        $("#result").empty();
        $("#result").show();
        // $("#timer").show();
        // $("#timer").html("<h2> Game Over!</h2>");
        // $("#playAgain").empty();
        $("#result").html("<p> Game Over! </p>");
        $("#result").append("<p> Correct Answers = " + correct + "</p");
        $("#result").append("<p> Incorrect Answers = " + incorrect + "</p>");
        $("#result").append("<p> Unanswered = " + unanswered + "</p>");

        // var playAgain = $("<button>");
        // playAgain.addClass("playAgainBtn");
        // playAgain.attr("data-name", "playAgainBtn");
        // playAgain.text("Play Again");
        // $("#playAgain").append(playAgain);
    }
});