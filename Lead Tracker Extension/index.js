

let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const deleteBtn = document.getElementById("delete-btn")
const tabBtn = document.getElementById("tab-btn")
const ulEl = document.getElementById("ul-el")

// Initialize myLeads from localStorage or use an empty array
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))


if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
}


tabBtn.addEventListener("click", function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads)
    })
})

function render(leads) {
    let listItems = ""
    for (let i = 0; i < leads.length; i++) {
        // listItems += "<li><a target='blank' href='#' >" + myLeads[i] + "</a ></li >"
        listItems += `
            <li>
                <a target='blank' href='${leads[i]}' >
                   ${leads[i]}
                </a >
            </li>`

    }
    ulEl.innerHTML = listItems
}

inputBtn.addEventListener("click", function () {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)
})


//creating a new element
//setting the text content of the new element
//appending the new element to the ul
// const li = document.createElement("li")
// li.textContent = myLeads[i]
// ulEl.append(li)



deleteBtn.addEventListener("click", function () {
    const confirmDelete = confirm("Are you sure you want to delete all leads?")
    if (confirmDelete) {
        localStorage.clear()
        myLeads = []
        render(myLeads)
    }

})



