let fighters = ["🪲", "🐢", "🦂", "🦍", "🐳", "🦑", "🐘", "🐼", "🐒", "🦄", "🐥", "🐝", "🐍"
]
let stageEl = document.getElementById("stage")
let fightButton = document.getElementById('fightButton')

fightButton.addEventListener("click", function () {
    let randomIndex1 = Math.floor(Math.random() * fighters.length)
    let fighter1 = fighters[randomIndex1]

    let randomIndex2 = Math.floor(Math.random() * fighters.length)
    let fighter2 = fighters[randomIndex2]


    stageEl.textContent = fighter1 + " vs " + fighter2
})


