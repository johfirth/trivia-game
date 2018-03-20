var trivia = {
    questions: {   
        one: 'Who is Peter Parker?',


    },
    answers: {
        one: ['Spider-Man','Iron Man','Captain America', 'Black Panther'],
    },

    correct: {
        one: 'Spider-Man',

    }
};

var questionNumber = trivia.questions.one;
var answerNumber = trivia.answers.one;
var correctAnswer = trivia.correct.one;
var userGuess;


function game(){
    $('#question').text(questionNumber);

}

function answers(){
    for (var index = 0; index < answerNumber.length; index++) {
        var buttonCreate = $('<button class= "answer-button btn btn-default btn-lg btn-block block-center col-md-6"> ')
        buttonCreate.text(answerNumber[index]);
        buttonCreate.attr("data-name", answerNumber[index]);
        $('#answers').append(buttonCreate);
    }
}

function reset(){
    $('#answers').empty()
}



function guessEval () {
    userGuess = $(this).attr("data-name");
    if (userGuess === correctAnswer ) {
        console.log ('you got it')
    } if (userGuess !== correctAnswer) {
        console.log('you aint got it')
    }
}


$(document).click(".answer-button", guessEval);