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

//031219 updates

var time = 120;

var game = [{
    question :  "Where do the Flintstones live?",
    options : ["Royal Woods", "Jump City", "Flint", "Bedrock"],
    answer : 3
},{ 
    question: "What is the capital of Indiana?",
    options : ["Boston", "Atlanta", "Indianapolis", "Springfield"],
    answer : 2
},{
    question: "Who shot Abraham Lincoln?",
    options : ["Donald Trump", "John Wilkes Booth", "Robert E. Lee", "Mary Todd Lincoln"],
    answer : 1
}, {
    question: "Who wrote To Kill A Mockingbird",
    options : ["Harper Lee", "J.K.Rowling", "Truman Capote", "S.E.Hinton"],
    answer : 0
}];

var userChoice;
var correct = 0;
var incorrect = 0;
var unanswered = 0;
var answered = false;
var questionNum = 0;

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
	// $('#message').empty();
	// $('#correctedAnswer').empty();
		// answered = true;
	
	//sets up new questions & answerList
	$("#questionNum").html("#"+ (questionNum+1));
	$('#question').html('<h2>' + game[questionNum].question + '</h2>');
	for(var i = 0; i < 4; i++) {
        var b = $("<input type='radio' name='optionBtn' value=" + game[questionNum].options[i] + ">" + options[i] + "</input>");
        $("#choices").append(b);
        // var choices = $('<div>');
        // $("#choices").append()
		// $("#choices").text(game[questionNum].options[i]);
		// $("#choices").attr("data-index", i );
		// $("#choices").addClass('thisChoice');
		// $('.answerList').append(choices);
	}
	// countdown();
	// //clicking an answer will pause the time and setup answerPage
	// $('.thisChoice').on('click',function(){
	// 	userSelect = $(this).data('index');
	// 	clearInterval(time);
	// 	answerPage();
	// });
}
        
        for (var i = 0; i < question.length; i++) {
            $("#question").append("<h2>" + question[i] + "</h2>");
        };
        for (var i = 0; i < options1.length; i++) {
            var b = $("<input type='radio' name='optionBtn' value=" + options1[i] + ">" + options1[i] + "</input>");
            $("#choices").append(b);
        }
        // for (var i = 0; i < options2.length; i++) {
        //     var b = $("<input type='radio' name='optionBtn' value=" + options2[i] + ">" + options2[i] + "</input>");
        //     $("#choices").append(b);
        // }
        // for (var i = 0; i < options3.length; i++) {
        //     var b = $("<input type='radio' name='optionBtn' value=" + options3[i] + ">" + options3[i] + "</input>");
        //     $("#choices").append(b);
        // };
        // optionBtn();
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