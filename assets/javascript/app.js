// PSEUDOCODE
// I want a list of questions that I will go through based on a series of clicks and timers
// I want to display one question with its possible answers at one time.
// There will be 15 seconds to answer each question.
// If the 15 seconds are up without user input, the number of incorrect answers will increment and we will show the correct answer
// The user will have to click 'a' to continue on to the next question.
// If the user clicks on the correct answer before the time is up, I will display a success message and wait for the user to type 'a' to continue on to the next question
// Once all of the questions have been asked, we will be brought into a final score screen to show the user their score. I will also give them the option to play the game again if they would like
// Show Timer to User

// Stretch Goals
// Add a database that will keep track of a leaderboard for the users score. E.g. Enter your name!
// Have a larger list of space questions that will be randomized for each playthrough
// Add additional CSS that will include a custom space background instead of playing a gif in the background


$(document).ready(function () {


    // List of questions
    // Structure ===========
    // key of question = 1 Value
    // Key of answers = 4 Values
    // Key of correct answer = 1 Value
    var questions = [

        questionOne = {
            'q': '1. How many large groups of rings does Saturn have?',
            'a': ['Three', 'Seven', 'Nine', 'Five'],
            'correct': 'Three'
        },

        questionTwo = {
            'q': '2. How much of the Earth is covered in water?',
            'a': ['75%', '85%', '90%', '50%'],
            'correct': '75%'
        },

        questionThree = {
            'q': '3. What is the sun?',
            'a': ['Planet', 'Star', 'Comet', 'Nebula'],
            'correct': 'Star'
        },

        questionFour = {
            'q': '4. What is the furthest planet from the sun?',
            'a': ['Uranus', 'Neptune', 'Saturn', 'Jupiter'],
            'correct': 'Neptune'
        },

        questionFive = {
            'q': 'What is the hottest planet in the solar system?',
            'a': ['Mercury', 'Venus', 'Mars', 'Earth'],
            'correct': 'Mercury'
        },

        questionSix = {
            'q': '6. How many planets are in the Solar System?',
            'a': ['Eight', 'nine', 'ten', 'seven'],
            'correct': 'Eight'
        },

        questionSeven = {
            'q': '7. What is the largest planet in our solar system?',
            'a': ['Jupiter', 'Neptune', 'Mercury', 'Saturn'],
            'correct': 'Jupiter'
        },

        questionEight = {
            'q': '8. What is the smallest planet in our solar system?',
            'a': ['Mercury', 'Venus', 'Mars', 'Earth'],
            'correct': 'Mercury'
        },

        questionNine = {
            'q': '9. What is the most abundant element found in the universe?',
            'a': ['Helium', 'Carbon', 'Hydrogen', 'Uranium'],
            'correct': 'Hydrogen'

        },

        questionTen = {
            'q': '10. Which planet has the famous Big Red Dot?',
            'a': ['Mars', 'Jupiter', 'Saturn', 'Uranus'],
            'correct': 'Jupiter'
        }
    ]

    // Trivia API
    // $.ajax('https://opentdb.com/api.php?amount=20&category=17&difficulty=medium&type=multiple')
    //     .then(res => {
    //         console.log(res)
    //     })

    // Number of Incorrect Answers
    var incorrect = 0;

    // Number of Correct Answers
    var correct = 0;

    // Current Question Number
    var currentQuest = 0;


    // Define Functions

    // What does this function do? It looks a little gnarly. I should probably split this one up into multiple functions or just hardcode it.
    function askQuestion() {

        // This will empty the 'main' element on the page
        $('main').empty()

        // If the current question does not equal the questions array length, we will continue
        if (currentQuest != questions.length) {
            // Here we have our div for the answer to the question
            var questionAnswerDiv = $('<div class = questAnswer>')

            // Here we grab the answer at the index of the question
            var answer = questions[currentQuest].correct

            // Here we grab the question based on the value of currentQuest
            var quest = $('<h3>' + questions[currentQuest].q + '</h3>')
            // Timer
            function countdown() {
                timer--
                $(timerDiv).text(`Time: ${timer}`)
                console.log(timer)
                if (timer === 0) {
                    clearInterval(incrementer)
                    $('main').empty()
                    $('main').append('<p>Times up! The correct answer was ' + answer + '. Press "a" to continue.</p>')
                    currentQuest++
                    document.onkeyup = function (event) {
                        if (event.key === 'a') {
                            askQuestion()
                        }
                    }
                }

            }

            var timer = 15;


            // This is our countdown
            var incrementer = setInterval(countdown, 1000 * 1)

            // This is happening throughout the incrementer as a callback
            $(questionAnswerDiv).append(quest);
            var timerDiv = $(`<div id="timer">Time: ${timer}</div>`);
            $(questionAnswerDiv).append(timerDiv);
            var optionsDiv = $("<div id='options'></div>")
            // $(questionAnswerDiv).append(optionsDiv)
            // Set interval for 15 seconds with function countdown
            for (i = 0; i < questions[currentQuest].a.length; i++) {
                var option = $('<button class = "selection">' + questions[currentQuest].a[i] + '</button>')
                $(option).attr('data-value', questions[currentQuest].a[i])
                $(optionsDiv).append(option)
                // $(questionAnswerDiv).append(option)
            }
            $(questionAnswerDiv).append(optionsDiv)
            $('main').append(questionAnswerDiv)

            $('.selection').on('click', function () {

                // Whatever is selected, we store this in a variable
                var selected = $(this).attr("data-value")

                // This will occur if the user selects the right answer
                if (selected === answer) {

                    // Hide options after selection
                    $(optionsDiv).hide();
                    $(timerDiv).hide();

                    // Here we clear the timer
                    clearInterval(incrementer)
                    $(quest).append('<p = > You Guessed Correct! Click to continue</p>')
                    $(quest).append('<button class="selection" type="button" id="next">Next</button>')

                    correct = correct + 1
                    currentQuest++

                    $("#next").on('click', function () {
                        askQuestion()
                    })
                    // document.onkeyup = function (event) {
                    //     if (event.key === 'a') {
                    //         askQuestion()
                    //     }
                    // }
                }
                else {
                    // Hide options after selection
                    $(optionsDiv).hide();
                    $(timerDiv).hide();
                    clearInterval(incrementer)
                    $(quest).append('<p> You Guessed Incorrect! The answer was ' + answer + '.</p>')
                    incorrect = incorrect + 1
                    currentQuest++
                    $(quest).append('<button class="selection" type="button" id="next">Next</button>')

                    $("#next").on('click', function () {
                        askQuestion()
                    })
                    // document.onkeyup = function (event) {
                    //     if (event.key === 'a') {
                    //         askQuestion()
                    //     }
                    // }
                }
            })
        }
        else {
            $('main').append('<h3>You got ' + correct + ' out of ' + questions.length + ' questions correct.</h3>');
            $('main').append("<button class='selection' type='button' id='play-again'>Play Again?</button>");

            // Reset Function
            $("#play-again").on("click", function () {
                currentQuest = 0;
                correct = 0;
                incorrect = 0;
                askQuestion()
            })
        }
    }

    $('main').hide()
    var intro = $('<div class = "intro">')
    $(intro).append('<p>' + 'Welcome to Space Trivia! Here you will test your knowledge of the Universe that we inhabit. You will have 15 seconds answer each question presented to you. Good luck!' + '</p>')
    $(intro).append('<button id = "start">Click to Start!</button>')
    $('section').append(intro)


    // When this button is clicked, the game should start
    $('#start').on('click', function () {
        // Here we hide the section element
        $('section').hide()

        // We run the function askQuestion which will begin asking questions
        askQuestion()

        // Here we will now show the main div
        $('main').show()
    })


    // Music level property
    $('#music').volume = 0.2




});