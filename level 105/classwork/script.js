const btn1 = getElementedByID("btn1")
const btn2 = getElementedByID("btn2")
const btn3 = getElementedByID("btn3")
const btn4 = getElementedByID("btn4")

btn1.AddEventListener("click", function(e){
    e.preventDefault()
    text1.style.dysplays="block"
    btn1.innerHTML = "-"
    btn2.innerHTML = "+"
    btn3.innerHTML = "+"
    btn4.innerHTML = "+"

})
btn2.AddEventListener("click", function(e){
    e.preventDefault()
    text2.style.dysplays="block"
    text1.style.dysplays="none"
    text3.style.dysplays="none"
    text4.style.dysplays="none"
    btn2.innerHTML = "-"
    btn1.innerHTML = "+"
    btn3.innerHTML = "+"
    btn4.innerHTML = "+"
})
btn3.AddEventListener("click", function(e){
    e.preventDefault()
    text3.style.dysplays="block"
    text2.style.dysplays="none"
    text4.style.dysplays="none"
    text1style.dysplays="none"
    btn3.innerHTML = "-"
    btn1.innerHTML = "+"
    btn2.innerHTML = "+"
    btn4.innerHTML = "+"
})
btn4.AddEventListener("click", function(e){
    e.preventDefault()
    text4.style.dysplays="block"
    text1.style.dysplays="none"
    text2.style.dysplays="none"
    text3.style.dysplays="none"
    btn4.innerHTML = "-"
    btn1.innerHTML = "+"
    btn2.innerHTML = "+"
    btn3.innerHTML = "+"
})
