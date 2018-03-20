var triviaArray = [
    {
        question: "Who is Peter Parker?",
        answer: ["Spider-Man", "Iron Man", "Captain America", "Black Panther"],
        rightAnswer: "Spider-Man",
        image: 
    },
    {
        question: "Who is Tony Starks girlfriend?",
        answer: ["Jane Foster", "Pepper Pots", "Jessica Jones", "Natalia Romanova"],
        rightAnswer: "Pepper Pots",
    },
    {
        question: "When was Captain America first published?",
        answer: ["1956", "1967", "1941", "1904"],
        rightAnswer: "1941",
    },
    {
        question: "Who is not a Marvel Comics villan?",
        answer: ["Red Skull", "Dr. Doom", "Thanos", "Deathstroke"],
        rightAnswer: "Deathstroke",
    },

];

var questionNumber;
var answerNumber;
var correctAnswer;

$('#start-button').click(game)

function nextQuestion(){
    var randomQuestion = triviaArray[Math.floor(Math.random() * triviaArray.length)];
    questionNumber = randomQuestion.question;
    answerNumber = randomQuestion.answer;
    correctAnswer = randomQuestion.rightAnswer;
}

function game(){
    $('#start-button').remove();
    nextQuestion();
    $('#question').text(questionNumber);
    answers();

}

function answers(){
    for (var index = 0; index < answerNumber.length; index++) {
        var buttonCreate = $('<button class= "answer-button btn btn-default btn-lg btn-block block-center col-md-6"> ')
        buttonCreate.text(answerNumber[index]);
        buttonCreate.attr("data-name", answerNumber[index]);
        $('#answers').append(buttonCreate);
    }
    $('.answer-button').click(function guessEval(){
        var userGuess = $(this).attr("data-name");
        if (userGuess === correctAnswer){
            console.log('you right');
            $('#answers').empty();
            $('#question').text("You're Right!");
        } else {console.log ('not even')}
    })
    
}




