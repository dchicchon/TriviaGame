$( document ).ready(function() {

    // Variables //
    var questions = [
        questionOne = {
            'q': '1. What type of galaxy is the most common in the universe?',
            'a' : {
                'one': 'Elliptical',
                'two': 'Blue',
                'three': 'Yellow',
                'four': 'Green'
            },
            'correct': 'one'
        },
        questionTwo = {
            'q': '2. What is the coldest place in the universe? (Hint: It’s a nebula.)',
            'a': {
                'Blue': false,
                'Yellow': false,
                'Green': true,
                'purple': false
            },
            'correct': 'one'
        },
        questionThree = {
            'q': '3. The hottest place in the universe is located in which constellation?',
            'a': {
                'Blue': false,
                'Yellow': false,
                'Green': false,
                'purple': true
            },
            'correct': 'one'
        },

        questionFour = {
            'q': '4. How old is the universe in years? (Plus or minus 1 billion years.)',
            'a': {
                'Blue': false,
                'Yellow': false,
                'Green': false,
                'purple': true
            },
            'correct': 'one'
        },

        questionFive = {
            'q': '5. What percent of the universe is dark matter? (Plus or minus 2%.)',
            'a': {
                'Blue': false,
                'Yellow': false,
                'Green': false,
                'purple': true
            },
            'correct': 'one'
                  
        },

        questionSix = {
            'q': '6. How many planets are in the Solar System?',
            'a': {
                'Blue': false,
                'Yellow': false,
                'Green': false,
                'purple': true
            },
            'correct': 'one'
                  
        },

        questionSeven = {
            'q': '7. What is the largest planet in our solar system?',
            'a': {
                'Blue': false,
                'Yellow': false,
                'Green': false,
                'purple': true
            },
            'correct': 'one'
        },

        questionEight = {
            'q': '8. What is the smallest planet in our solar system?',
            'a': {
                'Blue': false,
                'Yellow': false,
                'Green': false,
                'purple': true
            },
            'correct': 'one'         
        },

        questionNine = {
            'q': '9. What is the most common type of star found in the Milky Way?',
            'a': {
                'Blue': false,
                'Yellow': false,
                'Green': false,
                'purple': true
            },
            'correct': 'one'
                  
        },

        questionTen = {
            'q': '10. What is the largest type of star in the universe?',
            'a': {
                'Blue': false,
                'Yellow': false,
                'Green': false,
                'purple': true
            },
            'correct': 'one'   
        }
    ]

    var answers = []

    // Define Functions
    
    function timeUp() {
        alert('Your times up!')
    }
    
    function findAnswers() {
        for (i=0;i<questions;i++) {
            answers.push(questions[i].correct)
        }
    }

    findAnswers()
    console.log(answers)
    

    $('main').hide()
    var intro = $('<div class = "intro">')
    $(intro).append('<p>' + 'Welcome to Space Trivia! Here you will test your knowledge of the world beyond our own. You will have 5 minutes to complete ten questions. Good luck!'+ '</p>')
    $(intro).append('<button id = "start">Click to Start!</button>')
    $('section').append(intro)
    


    // This for loop goes through the list of questions

    $('#start').on('click',function() {
        $('section').hide()
        $('main').show()
        var min = 5;
        var sec = min * 60;
        var millisec = sec * 1000

        setTimeout(timeUp, millisec)
        
        for (i=0; i<questions.length; i++) {

            var questAnswerDiv = $("<div class = 'questAnswer'>");
            // Assigns the variable questionName to the question at element 0
            var questionName = questions[i].q;
    
            // At element id #question, we append a new element <h3> with the questionName.
    
            $(questAnswerDiv).append('<h3>'+questionName+ '</h3>')
    
            var answerName = Object.keys(questions[i].a)
    
            $(questAnswerDiv).append('<button class = "selection">'+ answerName[0].valueOf() + '</button>')
            $(questAnswerDiv).append('<button class = "selection">'+ answerName[1] + '</button>')
            $(questAnswerDiv).append('<button class = "selection">'+ answerName[2] + '</button>')
            $(questAnswerDiv).append('<button class = "selection">'+ answerName[3] + '</button>')

            $("main").append(questAnswerDiv);

            // Decisions based upon button selection and value //

            $('.selection').on('click', function() {
                console.log(questions[i].correct)
                
            })        
        }
    })
    
    

    // Music level property //
    $('#music').volume = 0.2
    

    

});