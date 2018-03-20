var triviaArray = [
    {
        question: "Who is Peter Parker?",
        answer: ["Spider-Man", "Iron Man", "Captain America", "Black Panther"],
        rightAnswer: "Spider-Man",
        image: "images/spiderman.png",
    },
    {
        question: "Who is Tony Starks girlfriend?",
        answer: ["Jane Foster", "Pepper Pots", "Jessica Jones", "Natalia Romanova"],
        rightAnswer: "Pepper Pots",
        image: "images/pepperpots.png",
    },
    {
        question: "When was Captain America first published?",
        answer: ["1956", "1967", "1941", "1904"],
        rightAnswer: "1941",
        image: "images/captainamerica.png",
    },
    {
        question: "Who is not a Marvel Comics villan?",
        answer: ["Red Skull", "Dr. Doom", "Thanos", "Deathstroke"],
        rightAnswer: "Deathstroke",
        image: "images/deathstroke.png",
    },

];

var questionNumber;
var answerNumber;
var correctAnswer;
var answerImage;
var randomQuestion;
var win = 0;
var loss = 0;

$('#start-button').click(gameStart)

function nextQuestion(){
    randomQuestion = triviaArray[Math.floor(Math.random() * triviaArray.length)];
    questionNumber = randomQuestion.question;
    answerNumber = randomQuestion.answer;
    correctAnswer = randomQuestion.rightAnswer;
    answerImage = randomQuestion.image;
    $('#wins').text(win);
    $('#loss').text(loss);

}

function gameStart(){
    $('#answers').empty();
    $('#navigation').empty();
    nextQuestion();
    $('#question').text(questionNumber);
    answers();
}

function removeFromArray(){
    var arrayIndexRandomQuestion = triviaArray.indexOf(randomQuestion);
    triviaArray.splice(arrayIndexRandomQuestion, 1)
    $('#next').click(gameStart);
}

function answers(){
    for (var index = 0; index < answerNumber.length; index++) {
        var buttonCreate = $('<button class = "answer-button btn btn-default btn-lg btn-block block-center col-md-6"> ')
        buttonCreate.text(answerNumber[index]);
        buttonCreate.attr("data-name", answerNumber[index]);
        $('#answers').append(buttonCreate);
    }
    $('.answer-button').click(function guessEval(){
        var userGuess = $(this).attr("data-name");
        var imageCreate = $('<img>');
        imageCreate.attr('src', answerImage);
        var nextButton = $('<button id = "next" class = "btn btn-default btn-lg btn-block block-center col-md-3">');
        nextButton.text("Next Question");
        if (userGuess === correctAnswer){
            $('#answers').empty();
            $('#question').text("You're Right!");
            $('#answers').append(imageCreate);
            $('#navigation').append(nextButton);
            win++;
            removeFromArray()
        } else {
            $('#answers').empty();
            $('#question').text("Sorry the answer is " + correctAnswer);
            $('#answers').append(imageCreate); 
            $('#navigation').append(nextButton);
            loss++;
            removeFromArray()
        }
         
    })
    
}




