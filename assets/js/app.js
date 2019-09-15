//gloabal variables
wins = 0;
losses = 0;
var timer;
var score = 0;
var counter = 20;
var currentQuestion = 0;

var triviaQuestions = [
    {
        // <img src = "https://pmctvline2.files.wordpress.com/2018/08/jaleel-white.jpg?w=620" alt = "Jaleel White" style = "width:70px;height:70px;" >
            question: "Who is this former child star?",
            choices:["a.Jaleel White", "b. Orlando Bloom", "c.Angus Jones", "d. Mara Wilson"],
            correctAnswer: "a.Jaleel White"

            // question: "Who is this former child star?",
            // choices:["a.Jaleel White", "b. Orlando Bloom", "c.Angus Jones", "d. Mara Wilson"],
            // correctAnswer: "a.Jaleel White" 

            // question: "Who is this former child star?",
            // choices:["a.Jaleel White", "b. Orlando Bloom", "c.Angus Jones", "d. Mara Wilson"],
            // correctAnswer: "a.Dakota Fanning" 

            // question: "Who is this former child star?",
            // choices:["a.Jaleel White", "b. Orlando Bloom", "c.Angus Jones", "d. Mara Wilson"],
            // correctAnswer: "a.Angus Jones" 

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



}

];

function startGame() {
var questions= triviaQuestions(currentQuestion). question;
var choices = triviaQuestions(currentQuestion). choices; 

$("#time").html('Timer:' + counter); 
$("#game").html('<h2>' + question '</h2>'); 


}
