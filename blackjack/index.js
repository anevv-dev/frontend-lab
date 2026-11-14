let player = {
    name: "Vena",
    chips: 500
}
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")


playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard() {

    let randomNumber = Math.floor(Math.random() * 13) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }

}

function startGame() {
    isAlive = true
    let randomCard = getRandomCard()

    const firstCard = getRandomCard()
    const secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()

}

function renderGame() {
    cardsEl.textContent = "Cards: " + cards[0] + " " + cards[1]
    sumEl.textContent = "Sum: " + sum

    if (sum <= 20) {
        message = "Do you want to draw a new card? 🙃"
    } else if (sum === 21) {
        message = "Woohoo!! You've got a Blackjack! 🎉"
        hasBlackJack = true
    } else {
        message = "You're out of the game! 😭"
        isAlive = true
    }

    messageEl.textContent = message
}

function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }
}





// Objects in Javascript

// let person = {
//     name: "Vena",
//     age: 25,
//     country: "Nigeria"
// }


// function logData() {
//     console.log(person.name + " is " + person.age + " years old and lives in " + person.country)
// }

// logData()

// if condition practice: create a conditional statement (if/else/else if) that logs the
// discount a person will get for a train ticket based on their age.

// let age = 15
// let trainPrice = ""

// if (age < 6) {
//     trainPrice = "You get a FREE ticket!"
// } else if (age < 18) {
//     trainPrice = "You get a child discount ticket!"
// } else if (age < 27) {
//     trainPrice = "You get a student discount ticket!"
// } else if (age < 66) {
//     trainPrice = "You get a full ticket price!"
// } else {
//     trainPrice = " You get a senior citizen discount!"
// }
// console.log(trainPrice)


// FOR LOOP AND (PUSH,POP,SHIFT,UNSHIFT) PRACTICE

// let largeCountries = ["Tuvalu", "India", "USA", "Indonesia", "Monaco"];

//pop() removes the last element from an array and returns that element.
// This method changes the length of the array.
// largeCountries.pop();

//push() adds one or more elements to the end of an array and returns the new length of the array.
// largeCountries.push("Pakistan");

//shift() removes the first element from an array and returns that removed element.
// largeCountries.shift();

//unshift() adds one or more elements to the beginning of an array and returns the new length of the array.
// largeCountries.unshift("China");



// for (let i = 0; i < largeCountries.length; i++) {
//     // Show the country inside box number i
//     console.log(largeCountries[i]);
// }



// LOGICAL "AND" OPERATOR

// let dayOfMonth = 31
// let weekday = "Friday"

// if (dayOfMonth === 13 && weekday === "Friday") {
//     console.log("Spooky Day!😱")
// } else {
//     console.log("Just a normal day.")
// }


// ROCK PAPER, SCISSORS GAME

// let hands = ["rock", "paper", "scissors"]

//create a function that returns a random item from the array of hands.

// function getRandomHand() {
//     let randomIndex = Math.floor(Math.random() * hands.length)
//     return hands[randomIndex]
// }

// console.log(getRandomHand());

// FOR LOOP PRACTICE
// start counting from 0, while i is less than 6, increase i by 2
// for (let i = 0; i < 6; i += 2) {
// console.log(i)
// }

// This is a for loop that logs out all the cards in the cards array.
// It starts at index 0 and continues until it reaches the last index of the array,
//  logging each card to the console. Even if there's a new card added to the array,
// the for loop will still log it out because it checks the length of the array each time it runs.

// let cards = [7, 3, 9]
// for (let i = 0; i < cards.length; i++) {
//     console.log(cards[i])
// }

//let sentence = ["Hello ", "my ", "name ", "is ", "Vena"]
//let greetingEl = document.getElementById("greeting-el")

//for (let i = 0; i < sentence.length; i++) {
//    greetingEl.textContent += sentence[i] + " "
//}
