$( document ).ready(function() {

    
    // Variables //
    var questions = [
        questionOne = {
            'q': '1. What type of galaxy is the most common in the universe?',
            'a' : {
                'Elliptical': true,
                'two': false,
                'three': false,
                'four': false
            },
            'correct': 'Elliptical'
        },
        questionTwo = {
            'q': '2. What is the coldest place in the universe? (Hint: It’s a nebula.)',
            'a': {
                'The Boomerang Nebula': true,
                'two': false,
                'three': true,
                'purple': false
            },
            'correct': 'The Boomerang Nebula'
        },
        questionThree = {
            'q': '3. The hottest place in the universe is located in which constellation?',
            'a': {
                'Blue': false,
                'Yellow': false,
                'Green': false,
                'purple': true
            },
            'correct': 'The constellation Virgo'
        },

        questionFour = {
            'q': '4. How old is the universe in years? (Plus or minus 1 billion years.)',
            'a': {
                '13.8 billion years old': false,
                'Yellow': false,
                'Green': false,
                'purple': true
            },
            'correct': '13.8 billion years old'
        },

        questionFive = {
            'q': '5. What percent of the universe is dark matter? (Plus or minus 2%.)',
            'a': {
                '27%': false,
                'Yellow': false,
                'Green': false,
                'purple': true
            },
            'correct': '27%'
                  
        },

        questionSix = {
            'q': '6. How many planets are in the Solar System?',
            'a': {
                'Eight planets': false,
                'Yellow': false,
                'Green': false,
                'purple': true
            },
            'correct': 'Eight planets'
                  
        },

        questionSeven = {
            'q': '7. What is the largest planet in our solar system?',
            'a': {
                'Jupiter': false,
                'Yellow': false,
                'Green': false,
                'purple': true
            },
            'correct': 'Jupiter'
        },

        questionEight = {
            'q': '8. What is the smallest planet in our solar system?',
            'a': {
                'Mercury': false,
                'Yellow': false,
                'Green': false,
                'purple': true
            },
            'correct': 'Mercury'         
        },

        questionNine = {
            'q': '9. What is the most common type of star found in the Milky Way?',
            'a': {
                'Red dwarf stars': false,
                'Yellow': false,
                'Green': false,
                'purple': true
            },
            'correct': 'Red dwarf stars'
                  
        },

        questionTen = {
            'q': '10. What is the largest type of star in the universe?',
            'a': {
                'Red supergiant stars': false,
                'Yellow': false,
                'Green': false,
                'purple': true
            },
            'correct': 'Red supergiant stars'   
        }
    ]

    


    var answers = []

    for (k=0; k < questions.length; k++) {
        answers.push(questions[k].correct)
    }

    console.log(answers)

    // Define Functions

    function timeUp() {
        alert('Your times up!')
    }
    
    

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
    
            $(questAnswerDiv).append('<button class = "selection" value =' + questions[i].a +'>' + answerName[0] + '</button>')
            $(questAnswerDiv).append('<button class = "selection" value =' + questions[i].answerName + '>' + answerName[1] + '</button>')
            $(questAnswerDiv).append('<button class = "selection">'+ answerName[2] + '</button>')
            $(questAnswerDiv).append('<button class = "selection">'+ answerName[3] + '</button>')

            $("main").append(questAnswerDiv);

            // Decisions based upon button selection and value //

                  
        }
        $('.selection').on('click', function() {
            var selected = $(this).val()
            console.log(selected);

            if (questions[selected][$(this).text()]
        })  
    })
    
    

    // Music level property //
    $('#music').volume = 0.2
    

    

});