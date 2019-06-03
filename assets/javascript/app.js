$( document ).ready(function() {

    
    // Variables //
    var questions = [
        questionOne = {
            'q': '1. What type of galaxy is the most common in the universe?',
            'a' : ['eliptical', 'red', 'green', 'blue'],
            'correct': 'Elliptical' 
        },

        questionTwo = {
            'q': '2. What is the coldest place in the universe? (Hint: It’s a nebula.)',
            'a': ['The Boomerang Nebula','blue','red','green'],
            'correct': 'The Boomerang Nebula'
        },
        questionThree = {
            'q': '3. The hottest place in the universe is located in which constellation?',
            'a': [],
            'correct': 'The constellation Virgo'
        },

        questionFour = {
            'q': '4. How old is the universe in years? (Plus or minus 1 billion years.)',
            'a': ['a','b','c','d'],
            'correct': 'a'
        },

        questionFive = {
            'q': '5. What percent of the universe is dark matter? (Plus or minus 2%.)',
            'a': ['a','b','c','d'],
            'correct': 'b'
        },

        questionSix = {
            'q': '6. How many planets are in the Solar System?',
            'a': ['Eight','nine','ten','seven'],
            'correct': 'Eight'
        },

        questionSeven = {
            'q': '7. What is the largest planet in our solar system?',
            'a': ['Jupiter','Neptune','Mercury','Saturn'],
            'correct': 'Jupiter'
        },

        questionEight = {
            'q': '8. What is the smallest planet in our solar system?',
            'a': ['Mercury','Venus','Mars','Earth'],
            'correct': 'Mercury'         
        },

        questionNine = {
            'q': '9. What is the most common type of star found in the Milky Way?',
            'a': ['a','b','c','d'],
            'correct': 'c'
                  
        },

        questionTen = {
            'q': '10. What is the largest type of star in the universe?',
            'a': ['a','b','c','d'],
            'correct': 'd'   
        }
    ]

    // Define Functions

    function timeUp() {
        alert('Your times up!')
    }

    // function setDecrement() {
    //     var timeSecs = min * 60
    // }
    
    
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

        // var seconds = setInterval(setDecrement,1000)
        // console.log(seconds)
        // var timer = $('<div id = timer>'+seconds+'</div>')
        // $('body').append(timer)
        
        for (i=0; i<questions.length; i++) {

            var questAnswerDiv = $("<div class = 'questAnswer'>");
            // Assigns the variable questionName to the question at element 0
            var questionName = questions[i].q;
            console.log(questionName)
    
            // At element id #question, we append a new element <h3> with the questionName.
    
            $(questAnswerDiv).append('<h3>'+questionName+ '</h3>')

            var optionOne = $('<button class = "selection">' + questions[i].a[0] + '</button>')
            $(optionOne).attr('data-value',questions[i].a[0])
            var optionTwo = $('<button class = "selection">' + questions[i].a[1] + '</button>')
            $(optionTwo).attr('data-value',questions[i].a[1])
            var optionThree = $('<button class = "selection">' + questions[i].a[2] + '</button>')
            $(optionThree).attr('data-value',questions[i].a[2])
            var optionFour = $('<button class = "selection">' + questions[i].a[3] + '</button>')
            $(optionFour).attr('data-value',questions[i].a[3])
            $(questAnswerDiv).append(optionOne,optionTwo,optionThree,optionFour)
            

            $("main").append(questAnswerDiv);

            
        }

        // Decisions based upon button selection and value //

        $('.selection').on('click', function() {
            var selected = $(this).attr("data-value")
            console.log(selected);
        }) 

    })
    
    

    // Music level property //
    $('#music').volume = 0.2
    

    

});