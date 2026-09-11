// let firstCard = 10
// let secondCard = 4
// let cards = [firstCard, secondCard]
// let sum = firstCard + secondCard
// let hasBlackJack = false
// let isAlive = true
// let message = ""
// let messageEl = document.getElementById("message-el")
// let sumEl = document.getElementById("sum-el")
// let cardsEl = document.getElementById("cards-el")

// function startGame() {
//     renderGame()
// }
// function renderGame() {

//     cardsEl.textContent = "Cards: " + cards[0] + " " + cards[1]
//     sumEl.textContent = "Sum: " + sum

//     if (sum <= 20) {
//         message = "Do you want to draw a new card? 🙃"
//     } else if (sum === 21) {
//         message = "Woohoo!! You've got a Blackjack! 🎉"
//         hasBlackJack = true
//     } else {
//         message = "You're out of the game! 😭"
//         isAlive = false
//     }

//     messageEl.textContent = message
// }

// function newCard() {
//     cardsEl.textContent = "Cards: " + firstCard + " " + secondCard

// }

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

// if condition practice

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
// largeCountries.pop();
// largeCountries.shift();
// largeCountries.unshift("China");
// largeCountries.push("Pakistan");


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

// function getRandomHand() {
//     let randomIndex = Math.floor(Math.random() * hands.length)
//     return hands[randomIndex]
// }

// console.log(getRandomHand());


