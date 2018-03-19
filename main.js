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



function game(){
    $('#question').text(questionNumber);

}

function answers(){
    for (var index = 0; index < answerNumber.length; index++) {
        var buttonCreate = $('<button id = "answer-buttons" class= "btn btn-default btn-lg btn-block block-center col-md-6"> ')
        var buttonAnswer = answerNumber[index];
        buttonCreate.text(buttonAnswer);
        buttonCreate.attr("data-name", buttonAnswer)
        $('#answers').append(buttonCreate);
    }
}

function reset(){
    $('#answers').empty()
}

$(document).click("#answer-buttons", guessEval)


function guessEval () {
    var userGuess = $(this).attr("data-name")
    if (userGuess === correctAnswer ) {
        console.log ('you got it')
    } else {
        console.log('you aint got it')
    }
}


