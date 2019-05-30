$( document ).ready(function() {

    // Variables //
    var questions = [
        questionOne = {
            'q': 'What is my favorite color?',
            'a' : {
                'Blue': true,
                'Yellow': false,
                'Green': false,
                'Purple': false
            }
        },
        questionTwo = {
            'q': 'What is your favorite color?',
            'a': {
                'Blue': false,
                'Yellow': false,
                'Green': true,
                'purple': false
            }
        },
        questionThree = {
            'q': 'What is her favorite color?',
            'a': {
                'Blue': false,
                'Yellow': false,
                'Green': false,
                'purple': true
            }
        }
    ]
    for (i=0; i<questions.length; i++) {
        var questionName = questions[i].q
        $('#question').append('<h3>'+questionName+ '</h3>')
        $('#question').text(questionName)
        var answerName = Object.keys(questions[i].a)
        $('#answerOne').text(answerName[0])
        $('#answerTwo').text(answerName[1])
        $('#answerThree').text(answerName[2])
        $('#answerFour').text(answerName[3])
    }

    

});