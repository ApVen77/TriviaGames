$(document).ready(function() {
    //gloabal variables
    var counter = 20;
    var currentQuestion = 0;
    var score = 0;
    var timer;
    wins = 0;
    losses = 0;
  
    // var photo 
    // function childStars() {
    //     return {
  
    //         picture1: {
    //             //Jaleel White
    //             imageURL:
    //                 "https://pmctvline2.files.wordpress.com/2018/08/jaleel-white.jpg?w=620"
    //         },
    //         picture2: {
    //             //Haley Joel Osmond
    //             imageURL:
    //                 "https://cdn.images.express.co.uk/img/dynamic/36/590x/secondary/HALEY-JOEL-OSMENT-1300753.jpg"
    //         },
    //         picture3: {
    //             //Mara Wilson
    //             imageURL:
    //                 "https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/10/10/13/exley-ep1725-ldww-mara-0061.jpg?w968h681"
    //         },
  
    //         picture4: {
    //             //Macaulay Culkin
    //             imageURL:
    //                 "https://timedotcom.files.wordpress.com/2019/08/macaulay-culkin-home-alone-photo.jpg?quality=85&w=594&h=450&crop=1"
    //         },
  
    //         picture5: {
    //             //Jonathan Lipnicki
    //             imageURL:
    //                 "https://www.thesun.co.uk/wp-content/uploads/2016/12/nintchdbpict000287158449.jpg"
    //         },
  
    //         picture6: {
    //             //Angus Jones
    //             imageURL:
    //                 "http://d1nnx3nhddxmeh.cloudfront.net/wp-content/uploads/2017/10/26120356/TwoHalfMen27-e1509021067863.jpg"
    //         },
  
    //         picture7: {
    //             //Lark Voorhies
    //             imageURL:
    //                 "https://gazettereview.com/wp-content/uploads/2016/02/Lark-Voorhies.jpg"
    //         },
  
    //         picture8: {
    //             //Jonathan Taylor Thomas
    //             imageURL:
    //                 "https://media1.popsugar-assets.com/files/thumbor/A6iPYBzCXpzO9T2DF_w9e_KOiVI/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-:watermark-!popsugar-watermark.png,-5,-5,0!-/2017/06/12/877/n/1922398/6b75ec82593ef3b8a17572.07824095_rexfeatures_2818910m/i/2010-Jonathan-graduated-from-Columbia-University.jpg"
    //         },
  
    //         picture9: {
    //             //Dakota Fanning
    //             imageURL:
    //                 "https://www.indiewire.com/wp-content/uploads/2015/04/dakota-fanning-by-daniel-bergeron.jpg?w=780"
    //         }
  
    //     };
    // }
    // Trivia questions and responses and image u
    var quizQuestions = [
      {
        question: "Who is this former child star?",
        choices: [
          "a.Jaleel White",
          "b. Orlando Bloom",
          "c.Angus Jones",
          "d. Mara Wilson"
        ],
        correctAnswer: "a.Jaleel White",
        imageURL:
          "<img src= 'https://pmctvline2.files.wordpress.com/2018/08/jaleel-white.jpg?quality=85&w=594&h=450&crop=1'/>",
        correctImage:
          "https://cdn.cnn.com/cnnnext/dam/assets/170704145417-urkel-1-large-169.jpg"
      },
      {
        question: "Who is this former child star?",
        choices: [
          "a.Jaleel White",
          "b. Haley Joel Osmond",
          "c.Angus Jones",
          "d. Macaulay Culkin"
        ],
        correctAnswer: "b. Haley Joel Osmond",
        imageURL:
          "<img src= 'https://cdn.images.express.co.uk/img/dynamic/36/590x/secondary/HALEY-JOEL-OSMENT-1300753.jpg?quality=85&w=594&h=450&crop=1'/>"
      },
      {
        question: "Who is this former child star?",
        choices: [
          "a.Dakota Fanning",
          "b. Lark Voorhies",
          "c.Ashley Olsen",
          "d. Mara Wilson"
        ],
        correctAnswer: "d. Mara Wilson",
        imageURL:
          "<img src='https://media.npr.org/assets/img/2016/09/09/mara-wilson_custom-60d10cd01539d12c7647d757ca6820dd7a5d8531-s800-c85.jpg'/>"
      },
  
      {
        question: "Who is this former child star?",
        choices: [
          "a.Jonathan Nipnicki",
          "b. Michael Moore",
          "c.Macaulay Culkin",
          "d. Jonathan Taylor Thomas"
        ],
        correctAnswer: "a.Macaulay Culkin",
        imageURL:
          "<img src='https://timedotcom.files.wordpress.com/2019/08/macaulay-culkin-home-alone-photo.jpg?quality=85&w=594&h=450&crop=1'/>"
      },
  
      {
        question: "Who is this former child star?",
        choices: [
          "a.Jonathan Lipnicki",
          "b. Orlando Bloom",
          "c.Angus Jones",
          "d. Jonathan Taylor Thomas"
        ],
        correctAnswer: "a.Jonathan Lipnicki",
        imageURL:
          "<img src= 'https://i2-prod.mirror.co.uk/incoming/article9451005.ece/ALTERNATES/s615b/2016-Chiller-Theater-Expo.jpg'/>"
      },
      {
        question: "Who is this former child star?",
        choices: [
          "a.Jaleel White",
          "b. Orlando Bloom",
          "c.Angus Jones",
          "d. Mara Wilson"
        ],
        correctAnswer: "c.Angus Jones",
        imageURL:
          "<img src='http://d1nnx3nhddxmeh.cloudfront.net/wp-content/uploads/2017/10/26120356/TwoHalfMen27-e1509021067863.jpg'/>"
      },
  
      {
        question: "Who is this former child star?",
        choices: [
          "a.Raven Symone",
          "b. Orlando Bloom",
          "c.Lark Voodhes",
          "d. Mara Wilson"
        ],
        correctAnswer: "c. Lark Voodhes",
        imageURL:
          "<img src='https://gazettereview.com/wp-content/uploads/2016/02/Lark-Voorhies.jpg'/>"
      },
      {
        question: "Who is this former child star?",
        choices: [
          "a.Jonathan Taylor Thomas",
          "b. Jonathan Lipnicki",
          "c.Jonathan Jones",
          "d. Steven Thomas"
        ],
        correctAnswer: "a.Jonathan Taylor Thomas",
        imageURL:
          "<img src= 'https://media1.popsugar-assets.com/files/thumbor/A6iPYBzCXpzO9T2DF_w9e_KOiVI/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-:watermark-!popsugar-watermark.png,-5,-5,0!-/2017/06/12/877/n/1922398/6b75ec82593ef3b8a17572.07824095_rexfeatures_2818910m/i/2010-Jonathan-graduated-from-Columbia-University.jpg'/>"
      },
      {
        question: "Who is this former child star?",
        choices: [
          "a. Elle Fanning",
          "b. Mary-Kate Olsen",
          "c.Victoria Justice",
          "d. Dakota Fanning"
        ],
        correctAnswer: "d. Dakota Fanning",
        imageURL:
          "<img src= 'https://www.indiewire.com/wp-content/uploads/2015/04/dakota-fanning-by-daniel-bergeron.jpg?w=780'/>"
      }
    ];
  
    //load questions//
    function launchQuestions() {
      counter = 10;
      timer = setInterval(decrement, 2 * 1000);
  
      var question = quizQuestions[currentQuestion].question;
      var choices = quizQuestions[currentQuestion].choices;
      var childStars = quizQuestions[currentQuestion].imageURL;
      $("#message").empty();
      $("#time").html("Timer: " + counter);
      $("#photo").empty();
      $("#photo").append(childStars);
      $("#game").html("<h2>" + question + "</h2>");
      for (var i = 0; i < quizQuestions[currentQuestion].choices.length; i++) {
        $("#game").append(
          "<button class='answer-button' id='button' data-name ='" +
            quizQuestions[currentQuestion].choices[i] +
            "'>" +
            quizQuestions[currentQuestion].choices[i] +
            "</button>"
        );
      }
    }
  
    // load responses to questions//
    //   function launchChoices (choices) {
    //     var result= '';
    //      for (var i=0; i < choices.length; i++) {
    //          result += `<p class="choices" data-answer=>" ${choices[i]}">${choices[i]}</p>`;
  
    //      }
  
    //      return result;
    // }
  
    //switch to the next question//
    function nextQuestion() {
      currentQuestion++;
      launchQuestions();
    }
  
    //setting the timer to count down//
    function decrement() {
      counter--;
      $("#time").html("Timer: " + counter);
      if (counter === 0) {
        console.log("Times up");
        outOfTime();
      }
    }
  
    //When timer reaches zero//
    function outOfTime() {
      clearInterval(timer);
  
      // losses++;
      $("#time").html("Timer: " + counter);
      // nextQuestion();
  
      $("#message").html("<h2>Out of Time</h2>");
      $("#message").append(
        "<h3> The Correct Answer is: " +
          quizQuestions[currentQuestion].correctAnswer
      );
      // if you're answering the last question display results
      if (currentQuestion == quizQuestions.length - 1) {
        setTimeout(showResults, 2 * 1000);
      }
      // continue with the next question
      else {
        setTimeout(nextQuestion, 2 * 1000);
      }
    }
  
    $(document).on("click", ".answer-button", function(e) {
      // clearInterval(timer);
      clicked(e);
    });
  
    function clicked(event) {
      clearInterval(timer);
  
      if (
        $(event.target).attr("data-name") ==
        quizQuestions[currentQuestion].correctAnswer
      ) {
        answerCorrectly();
      //   $("#message").append(
      //     "<h3> The Correct Answer is: " +
      //       quizQuestions[currentQuestion].correctAnswer
      //   );
      } else {
        answerIncorrectly();
      //   $("#message").append(
      //     "<h3> The Correct Answer is: " +
      //       quizQuestions[currentQuestion].correctAnswer
      //   );
      }
    }
  
    function answerCorrectly() {
      clearInterval(timer);
      wins++;
  
      $("#game").append("Correct" + quizQuestions[currentQuestion].correctAnswer);
      if (currentQuestion == quizQuestions.length - 1) {
        setTimeout(showResults, 2 * 1000);
      }
      // continue with the next question
      else {
        setTimeout(nextQuestion, 2 * 1000);
      }
    }
    function answerIncorrectly(){
      clearInterval(timer);
      losses++;
      $("#message").html("Incorrect")
      $("#message").append("<p>Correct answer is : " + quizQuestions[currentQuestion].correctAnswer +"</p>");
      if (currentQuestion == quizQuestions.length - 1) {
        setTimeout(showResults, 2 * 1000);
      }
      // continue with the next question
      else {
        setTimeout(nextQuestion, 2 * 1000);
      }
    }
    $(document).on("click", ".startGame", function(e) {
      // clearInterval(timer);
      launchQuestions();
    });
  });
  