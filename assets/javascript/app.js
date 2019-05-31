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
        },

        questionFour = {
            'q': 'Where is the ocean',
            'a': {
                'Blue': false,
                'Yellow': false,
                'Green': false,
                'purple': true
            }
                  
        }
    ]

    // This for loop goes through the list of questions
    for (i=0; i<questions.length; i++) {

        var questAnswerDiv = $("<div class = 'questAnswer'>");
        // Assigns the variable questionName to the question at element 0
        var questionName = questions[i].q;

        // At element id #question, we append a new element <h3> with the questionName.

        $(questAnswerDiv).append('<h3>'+questionName+ '</h3>')
        
        var answerName = Object.keys(questions[i].a)
        $(questAnswerDiv).append('<p>'+ answerName[0] + '</p>')
        $(questAnswerDiv).append('<p>'+ answerName[1] + '</p>')
        $(questAnswerDiv).append('<p>'+ answerName[2] + '</p>')
        $(questAnswerDiv).append('<p>'+ answerName[3] + '</p>')

        $("main").append(questAnswerDiv);
        
    }

    

});