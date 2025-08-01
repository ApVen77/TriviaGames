$(document).ready(function () {
  //gloabal variables
  var counter = 20;
  var currentQuestion = 0;
  var score = 0;
  var timer;
  wins = 0;
  losses = 0;

  var quizQuestions = [
    {
      question: "Who is this former child star?",
      choices: [
        "a.Jaleel White",
        "b. Orlando Bloom",
        "c.Angus Jones",
        "d. Mara Wilson",
      ],
      correctAnswer: "a.Jaleel White",
      imageURL:
        "<img src= 'https://m.media-amazon.com/images/M/MV5BMjA4MDc0ODAxNV5BMl5BanBnXkFtZTcwMDU0NTU2OA@@._V1_FMjpg_UX1000_.jpg'>",
      correctImage:
        "https://cdn.cnn.com/cnnnext/dam/assets/170704145417-urkel-1-large-169.jpg",
    },
    {
      question: "Who is this former child star?",
      choices: [
        "a.Jaleel White",
        "b. Haley Joel Osmond",
        "c.Angus Jones",
        "d. Macaulay Culkin",
      ],
      correctAnswer: "b. Haley Joel Osmond",
      imageURL:
        "<img src= 'https://cdn.images.express.co.uk/img/dynamic/36/590x/secondary/HALEY-JOEL-OSMENT-1300753.jpg?quality=85&w=594&h=450&crop=1'/>",
    },
    {
      question: "Who is this former child star?",
      choices: [
        "a.Dakota Fanning",
        "b. Lark Voorhies",
        "c.Ashley Olsen",
        "d. Mara Wilson",
      ],
      correctAnswer: "d. Mara Wilson",
      imageURL:
        "<img src='https://media.npr.org/assets/img/2016/09/09/mara-wilson_custom-60d10cd01539d12c7647d757ca6820dd7a5d8531-s800-c85.jpg'/>",
    },

    {
      question: "Who is this former child star?",
      choices: [
        "a.Jonathan Nipnicki",
        "b. Michael Moore",
        "c.Macaulay Culkin",
        "d. Jonathan Taylor Thomas",
      ],
      correctAnswer: "a.Macaulay Culkin",
      imageURL:
        "<img src='https://timedotcom.files.wordpress.com/2019/08/macaulay-culkin-home-alone-photo.jpg?quality=85&w=594&h=450&crop=1'/>",
    },

    {
      question: "Who is this former child star?",
      choices: [
        "a.Jonathan Lipnicki",
        "b. Orlando Bloom",
        "c.Angus Jones",
        "d. Jonathan Taylor Thomas",
      ],
      correctAnswer: "a.Jonathan Lipnicki",
      imageURL:
        "<img src= 'https://i2-prod.mirror.co.uk/incoming/article9451005.ece/ALTERNATES/s615b/2016-Chiller-Theater-Expo.jpg'/>",
    },
    {
      question: "Who is this former child star?",
      choices: [
        "a.Jaleel White",
        "b. Orlando Bloom",
        "c.Angus Jones",
        "d. Mara Wilson",
      ],
      correctAnswer: "c.Angus Jones",
      imageURL:
        "<img src='http://d1nnx3nhddxmeh.cloudfront.net/wp-content/uploads/2017/10/26120356/TwoHalfMen27-e1509021067863.jpg'/>",
    },

    {
      question: "Who is this former child star?",
      choices: [
        "a.Raven Symone",
        "b. Orlando Bloom",
        "c.Lark Voodhes",
        "d. Mara Wilson",
      ],
      correctAnswer: "c. Lark Voodhes",
      imageURL: "<img src='images/lark.jpg'>",
    },
    {
      question: "Who is this former child star?",
      choices: [
        "a.Jonathan Taylor Thomas",
        "b. Jonathan Lipnicki",
        "c.Jonathan Jones",
        "d. Steven Thomas",
      ],
      correctAnswer: "a.Jonathan Taylor Thomas",
      imageURL:
        "<img src= 'https://media1.popsugar-assets.com/files/thumbor/A6iPYBzCXpzO9T2DF_w9e_KOiVI/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-:watermark-!popsugar-watermark.png,-5,-5,0!-/2017/06/12/877/n/1922398/6b75ec82593ef3b8a17572.07824095_rexfeatures_2818910m/i/2010-Jonathan-graduated-from-Columbia-University.jpg'/>",
    },
    {
      question: "Who is this former child star?",
      choices: [
        "a. Elle Fanning",
        "b. Mary-Kate Olsen",
        "c.Victoria Justice",
        "d. Dakota Fanning",
      ],
      correctAnswer: "d. Dakota Fanning",
      imageURL:
        "<img src= 'https://www.indiewire.com/wp-content/uploads/2015/04/dakota-fanning-by-daniel-bergeron.jpg?w=780'/>",
    },
  ];

  //load questions//
  function launchQuestions() {
    if (currentQuestion >= quizQuestions.length) {
      showFinalScore();
      return;
    }
    $("#message").empty();
    $("#game").html("<h2>" + quizQuestions[currentQuestion].question + "</h2>");
    $("#photo").html(quizQuestions[currentQuestion].imageURL);
    for (var i = 0; i < quizQuestions[currentQuestion].choices.length; i++) {
      var choices = $("<div>");
      choices.addClass("choice answer-button");
      choices.html(quizQuestions[currentQuestion].choices[i]);
      choices.attr("data-name", quizQuestions[currentQuestion].choices[i]);
      $("#game").append(choices);
    }
    startTimer();
  }

  function showFinalScore() {
    clearInterval(timer);
    $("#game").empty();
    $("#photo").empty();
    $("#message").empty();
    $("#time").empty();
    $("#final-correct").text(wins);
    $("#final-incorrect").text(losses);
    $("#final-score").text(wins * 10);
    $("#scoreboard").removeClass("d-none");
  }

  //switch to the next question//
  function startTimer() {
    counter = 20;
    $("#time").html("Time Remaining: " + counter);
    timer = setInterval(decrement, 1000);
  }

  function nextQuestion() {
    currentQuestion++;
    launchQuestions();
  }

  //setting the timer to count down//
  function decrement() {
    counter--;
    $("#time").html("Time Remaining: " + counter);
    if (counter === 0) {
      console.log("Times up");
      outOfTime();
    }
  }

  //When timer reaches zero//
  function outOfTime() {
    clearInterval(timer);
    $("#message").html("<h2>Out of Time</h2>");
    $("#message").append(
      "<h3> The Correct Answer is: " +
        quizQuestions[currentQuestion].correctAnswer
    );
    losses++;
    if (currentQuestion >= quizQuestions.length - 1) {
      setTimeout(showFinalScore, 2 * 1000);
    } else {
      setTimeout(nextQuestion, 2 * 1000);
    }
  }

  $(document).on("click", ".answer-button", function (e) {
    clearInterval(timer);
    clicked(e);
  });

  function clicked(event) {
    if (
      $(event.target).attr("data-name") ==
      quizQuestions[currentQuestion].correctAnswer
    ) {
      answerCorrectly();
    } else {
      answerIncorrectly();
    }
  }

  function answerCorrectly() {
    clearInterval(timer);
    wins++;
    $("#message").html("<h2>Correct!</h2>");
    setTimeout(function () {
      currentQuestion++;
      if (currentQuestion >= quizQuestions.length) {
        showFinalScore();
      } else {
        launchQuestions();
      }
    }, 2000);
  }

  function answerIncorrectly() {
    clearInterval(timer);
    losses++;
    $("#message").html("<h2>Incorrect</h2>");
    $("#message").append(
      "<p>Correct answer is : " +
        quizQuestions[currentQuestion].correctAnswer +
        "</p>"
    );
    setTimeout(function () {
      currentQuestion++;
      if (currentQuestion >= quizQuestions.length) {
        showFinalScore();
      } else {
        launchQuestions();
      }
    }, 2000);
  }
  $(document).on("click", ".startGame", function (e) {
    // clearInterval(timer);
    wins = 0;
    losses = 0;
    currentQuestion = 0;
    $("#scoreboard").addClass("d-none");
    launchQuestions();
  });

  $(document).on("click", ".play-again", function () {
    wins = 0;
    losses = 0;
    currentQuestion = 0;
    $("#scoreboard").addClass("d-none");
    launchQuestions();
  });
});
