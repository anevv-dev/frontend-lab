let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}




let name = "Linda"
let greeting = "Hi there"

// Create a function that logs out "Hi there, Linda!" when called

function greetLinda() {
    console.log(greeting + ", " + name + "!")
}

greetLinda()


let myPoints = 3

// Create two functions, add3Points() and remove1Point(), and have them
// add/remove points to/from the myPoints variable

function add3Points() {
    myPoints += 3
}

function remove1Points() {
    myPoints -= 1
}

add3Points()
add3Points()
add3Points()

// Call the functions to that the line below logs out 10
console.log(myPoints)


// When the user clicks the purchase button, render out
// "Something went wrong, please try again" in the paragraph
// that has the id="error".

let errorParagraph = document.getElementById("error")
console.log(errorParagraph)

function purchase() {
    console.log("button clicked")
    errorParagraph.textContent = "Something went wrong, please try again"
}


let num1 = 8
let num2 = 2
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2

// Create four functions: add(), subtract(), divide(), multiply()
// Call the correct function when the user clicks on one of the buttons
// Perform the given calculation using num1 and num2
// Render the result of the calculation in the paragraph with id="sum-el"

// E.g. if the user clicks on the "Plus" button, you should render
// "Sum: 10" (since 8 + 2 = 10) inside the paragraph with id="sum-el"

let sumEl = document.getElementById(sum - el)

function add() {

    // console.log("Numbers added") (this is to test if it works)
    let result = num1 + num2
    sumEl.textContent = "Sum is: " + result
}

function subtract() {

    // console.log("Numbers added") (this is to test if it works)
    let result = num1 - num2
    sumEl.textContent = "Sum is: " + result
}