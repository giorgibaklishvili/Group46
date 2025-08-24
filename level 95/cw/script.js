const result = document.getElementById("result")


function calculate() {
    result.value = eval(result.value)
}

function display(symbol) {
    result.value += symbol
}

function clearDisplay() {
    result.value = ""
}