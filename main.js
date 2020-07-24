let displayArea = document.querySelector("#display-area")
let clearButton = document.querySelector("#clear-button")
let evalButton = document.querySelector("#eval-button")

function clearContentArea () {
      displayArea.textContent = ""
      return

}
function addToContentArea ()  {
    let target = event.target  
    displayArea.textContent += target.textContent
    return
}

function evalContentArea (event) {
    displayArea.textContent = eval(displayArea.textContent)
    return
}


clearButton.addEventListener("click", () => displayArea.textContent = "")
evalButton.addEventListener("click", evalContentArea)


for (let element of document.querySelectorAll(".add-content-button"))  {
     element.addEventListener("click", addToContentArea)

}