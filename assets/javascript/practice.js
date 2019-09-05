// Learn how to use setTimeout
// Learn how to use setInterval

// What are their uses?

// setTimeout takes in two parameters: 1. A function to execute. 2. The time delay before the function is executed. This function executes once

// setInterval takes in two parameters: 1. A function to execute. 2. The time delay before the function is executed. This function is repeated indefinitely until the function clearInterval is used.

// Create a timer!
let question = 1
let timer = 15
let incrementer = setInterval(countdown, 1000 * 1)

function countdown() {
    console.log(timer)
    timer--
    // Once the timer hits 0, we clear the interval and let the user know that their time is up
    if (timer === 0) {
        clearInterval(incrementer)
        console.log("Time is up!")
        question++
        return
    }
}

