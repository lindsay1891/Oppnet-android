let box = document.querySelector('#box')
let balloon = document.querySelector('#balloon1')
let house = document.querySelector('#houseBalloons')


box.addEventListener("click", e => {
    var pos1 = Math.floor(Math.random() * 10)
    var pos2 = Math.floor(Math.random() * 6) + 6
    var pos3 = Math.floor(Math.random() * 6) - 12
    var position = `${pos1} ${pos2} ${pos3}`
    console.log(position)
    balloon.setAttribute("color", "green")
    house.innerHTML += `<a-sphere color="red" position="${position}" radius=".5"></a-sphere>`
})
