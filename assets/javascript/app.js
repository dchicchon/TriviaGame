$( document ).ready(function() {

    
    // Variables //
    var questions = [
        questionOne = {
            'q': '1. How many large groups of rings does Saturn have?',
            'a': ['Four', 'Seven', 'Nine', 'Five'],
            'correct': 'Four' 
        }, 

        questionTwo = {
            'q': '2. How much of the Earth is covered in water?',
            'a': ['75%','85%','90%','50%'],
            'correct': '75%'
        },

        questionThree = {
            'q': '3. What is the sun?',
            'a': ['Planet','Star','Comet','Nebula'],
            'correct': 'Star'
        },

        questionFour = {
            'q': '4. What is the furthest planet from the sun?',
            'a': ['Uranus','Neptune','Saturn','Jupiter'],
            'correct': 'Neptune'
        },

        questionFive = {
            'q': 'What is the hottest planet in the solar system?',
            'a': ['Mercury','Venus','Mars','Earth'],
            'correct': 'Mercury'
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
            'q': '9. What is the most abundant element found in the universe?',
            'a': ['Helium','Carbon','Hydrogen','Uranium'],
            'correct': 'Hydrogen'
                  
        },

        questionTen = {
            'q': '10. Which planet has the famous Big Red Dot?',
            'a': ['Mars','Jupiter','Saturn','Uranus'],
            'correct': 'Jupiter'   
        }
    ]
    var incorrect = 0;
    var correct = 0;
    var currentQuest = 0;
    

    // Define Functions

    function timeUp() {
        alert('Your times up! The correct answer was: "' + questions[currentQuest].correct+ '"')
        currentQuest++
        console.log(currentQuest)
        askQuestion()
    }

    function setDecrement() {
        
    }

    function askQuestion() {
        $('main').empty()
        
        if (currentQuest != questions.length) {
            var seconds = 15

            setInterval(timeUp, seconds*1000)

            


            

            var questionAnswerDiv = $('<div class = questAnswer>')
            var answer = questions[currentQuest].correct
            var quest = $('<h3>'+questions[currentQuest].q+'</h3>')
            
            for (i=0;i<questions[currentQuest].a.length;i++) {
                var option = $('<button class = "selection">'+questions[currentQuest].a[i]+'</button>')
                $(option).attr('data-value',questions[currentQuest].a[i])
                $(quest).append(option)
            }

            $(questionAnswerDiv).append(quest)
            $('main').append(questionAnswerDiv)

            $('.selection').on('click', function() {
                var selected = $(this).attr("data-value")
                if(selected === answer) {
                    $(quest).append('<p> You Guessed Correct! Press "a" to continue. </p>')
                    correct = correct + 1
                    currentQuest++
                    document.onkeyup = function(event) {
                        if (event.key === 'a') {
                            askQuestion()
                        }
                    }
                }
                else {
                    $(quest).append('<p> You Guessed Incorrect! The answer was '+ answer +'. Press "a" to continue</p>')
                    incorrect = incorrect + 1
                    currentQuest++
                    document.onkeyup = function(event) {
                        if (event.key === 'a') {
                            askQuestion()
                        }
                    }
                    
                    
                }
            })
        }
        else {
            $('main').append('<h3>Thank you for taking the quiz! You got '+ correct+' out of '+ questions.length+' questions correct.</h3>')
        } 
    }
    
    $('main').hide()
    var intro = $('<div class = "intro">')
    $(intro).append('<p>' + 'Welcome to Space Trivia! Here you will test your knowledge of the world beyond our own. You will have 5 minutes to complete ten questions. Good luck!'+ '</p>')
    $(intro).append('<button id = "start">Click to Start!</button>')
    $('section').append(intro)
    

    // This for loop goes through the list of questions

    $('#start').on('click',function() {
        $('section').hide()
        askQuestion()
        $('main').show()
        var min = 5;
        var sec = min * 60;
        

        

        

        // var seconds = setInterval(setDecrement,1000)
        // console.log(seconds)
        // var timer = $('<div id = timer>'+seconds+'</div>')
        // $('body').append(timer)

        
        // for (i=0; i<questions.length; i++) {

        //     var questAnswerDiv = $("<div class = 'questAnswer'>");
        //     // Assigns the variable questionName to the question at element 0
        //     var questionName = questions[i].q;
        //     console.log(questionName)
    
        //     // At element id #question, we append a new element <h3> with the questionName.
    
        //     $(questAnswerDiv).append('<h3>'+questionName+ '</h3>')

        //     $(questAnswerDiv).attr('data-value',questions[i].correct)
            
            
        //     var optionOne = $('<button type = radio class = "selection">' + questions[i].a[0] + '</button>')
        //     $(optionOne).attr('data-value',questions[i].a[0])
        //     $(optionOne).attr('data-index',i)
            
        //     var optionTwo = $('<button class = "selection">' + questions[i].a[1] + '</button>')
        //     $(optionTwo).attr('data-value',questions[i].a[1])
        //     $(optionTwo).attr('data-index',i)

        //     var optionThree = $('<button class = "selection">' + questions[i].a[2] + '</button>')
        //     $(optionThree).attr('data-value',questions[i].a[2])
        //     $(optionThree).attr('data-index',i)

        //     var optionFour = $('<button class = "selection">' + questions[i].a[3] + '</button>')
        //     $(optionFour).attr('data-value',questions[i].a[3])
        //     $(optionFour).attr('data-index',i)

        //     $(questAnswerDiv).append(optionOne,optionTwo,optionThree,optionFour)

        //     $("main").append(questAnswerDiv);
        // }

        // Decisions based upon button selection and value //

        // $('.selection').on('click', function() {
        //     var selected = $(this).attr("data-value")
        //     var index = $(this).attr('data-index')
        //     if(selected === questions[index].correct) {
        //         console.log('correct!')
        //     }
        //     else {
        //         console.log('wrong answer!')
        //     }
        //     console.log(selected);
        //     console.log(questions[index].correct)
            
            
        // }) 
    })
    
    

    // Music level property //
    $('#music').volume = 0.2
    

    

});