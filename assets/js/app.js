//gloabal variables
var counter = 20;
var currentQuestion = 0;
var score = 0;
var timer;
wins = 0;
losses = 0;

//images
function childStars() {
    return {

        picture1: {
            //Jaleel White
            imageURL:
                "https://pmctvline2.files.wordpress.com/2018/08/jaleel-white.jpg?w=620"
        },
        picture2: {
            //Haley Joel Osmond
            imageURL:
                "https://cdn.images.express.co.uk/img/dynamic/36/590x/secondary/HALEY-JOEL-OSMENT-1300753.jpg"
        },
        picture3: {
            //Mara Wilson
            imageURL:
                "https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/10/10/13/exley-ep1725-ldww-mara-0061.jpg?w968h681"
        },

        picture4: {
            //Macaulay Culkin 
            imageURL:
                "https://timedotcom.files.wordpress.com/2019/08/macaulay-culkin-home-alone-photo.jpg?quality=85&w=594&h=450&crop=1"
        },

        picture5: {
            //Haley Joel Osmond
            imageURL:
                "https://www.thesun.co.uk/wp-content/uploads/2016/12/nintchdbpict000287158449.jpg"
        },


        picture6: {
            //Angus Jones
            imageURL:
                "http://d1nnx3nhddxmeh.cloudfront.net/wp-content/uploads/2017/10/26120356/TwoHalfMen27-e1509021067863.jpg"
        },


        picture7: {
            //Lark Voorhies 
            imageURL:
                "https://gazettereview.com/wp-content/uploads/2016/02/Lark-Voorhies.jpg"
        },


        picture8: {
            //Jonathan Taylor Thomas
            imageURL:
                "https://media1.popsugar-assets.com/files/thumbor/A6iPYBzCXpzO9T2DF_w9e_KOiVI/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-:watermark-!popsugar-watermark.png,-5,-5,0!-/2017/06/12/877/n/1922398/6b75ec82593ef3b8a17572.07824095_rexfeatures_2818910m/i/2010-Jonathan-graduated-from-Columbia-University.jpg"
        },

        picture9: {
            //Dakota Fanning
            imageURL:
                "https://www.indiewire.com/wp-content/uploads/2015/04/dakota-fanning-by-daniel-bergeron.jpg?w=780"
        }

    };
    }
    //Trivia questions and responses and image u
    var quizQuestions = [
    {
        question: "Who is this former child star?",
        choices: ["a.Jaleel White", "b. Orlando Bloom", "c.Angus Jones", "d. Mara Wilson"],
        correctAnswer: "a.Jaleel White"
        
    },
    {
        question: "Who is this former child star?",
        choices: ["a.Jaleel White", "b. Orlando Bloom", "c.Angus Jones", "d. Mara Wilson"],
        correctAnswer: "a.Jaleel White"
    },
    {
        question: "Who is this former child star?",
        choices: ["a.Jaleel White", "b. Orlando Bloom", "c.Angus Jones", "d. Mara Wilson"],
        correctAnswer: "a.Dakota Fanning"
    },

        {question: "Who is this former child star?",
        choices:["a.Jaleel White", "b. Orlando Bloom", "c.Angus Jones", "d. Mara Wilson"],
        correctAnswer: "a.Angus Jones" }

        // question: "Who is this former child star?",
        // choices:["a.Jaleel White", "b. Orlando Bloom", "c.Angus Jones", "d. Mara Wilson"],
        // correctAnswer: "a.Jaleel White" 

        // question: "Who is this former child star?",
        // choices:["a.Jaleel White", "b. Orlando Bloom", "c.Angus Jones", "d. Mara Wilson"],
        // correctAnswer: "a.Jaleel White" 

        // question: "Who is this former child star?",
        // choices:["a.Jaleel White", "b. Orlando Bloom", "c.Angus Jones", "d. Mara Wilson"],
        // correctAnswer: "a.Jaleel White" 

        // question: "Who is this former child star?",
        // choices:["a.Jaleel White", "b. Orlando Bloom", "c.Angus Jones", "d. Mara Wilson"],
        // correctAnswer: "a.Jaleel White" 

        // question: "Who is this former child star?",
        // choices:["a.Jaleel White", "b. Orlando Bloom", "c.Angus Jones", "d. Mara Wilson"],
        // correctAnswer: "a.Jaleel White" 

        // question: "Who is this former child star?",
        // choices:["a.Jaleel White", "b. Orlando Bloom", "c.Angus Jones", "d. Mara Wilson"],
        // correctAnswer: "a.Jaleel White" 



    

];

//switch to the next question//
function nextQuestion() {
currentQuestion++;
launchQuestions();
}

//setting the timer to count down//
function decrement(){
    counter--;
    if (counter===0) {
        outOfTime
    }
}

//When timer reaches zero//
function outOfTime() {
    clearInterval(timer); 
    lost++; 
}
function winnerWinner(){
if(question===choices) {
    //?????????////
}

}


//load questions//
function launchQuestions() {
    counter = 20;
    timer = setInterval(decrement,1000); 

    var question = quizQuestions[currentQuestion].question;
    var choices = quizQuestions[currentQuestion].choices;
    // var childStars=quizQuestions[currentQuestion].picture1;

    $("#time").html('Timer: ' + counter);
    $("#game").html('<h2>' + question + '</h2>');
    $(launchChoices(choices)

    //******How can I add image? */

    );
}

//load responses to questions//
// function launchChoices(choices) {
//     var result= '';
//      for (var i=0; i < choices.length; i++) {
//          result += '<p class='choices "data-answer=" ${choices[i]}">${choices[i]}</p>;
//      }
     
//      return result; 
// }

launchQuestions(); 