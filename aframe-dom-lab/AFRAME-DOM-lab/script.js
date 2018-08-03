let face = document.querySelector('#face')
let leftEye = document.querySelector('#leftEye')
let rightEye = document.querySelector('#rightEye')
let antenna1 = document.querySelector('#antenna1')
let antenna2 = document.querySelector('#antenna2')
let hello = document.querySelector('#hello')
let mouth = document.querySelector('#mouth')

face.addEventListener ("click", e => {
    leftEye.setAttribute ("color","yellow")
    rightEye.setAttribute ("color","yellow")
})

antenna1.addEventListener ("click", e => {
    antenna1.setAttribute("rotation", "0 0 0")
    antenna1.setAttribute("color","purple")
})
antenna2.addEventListener ("click", e => {
    antenna2.setAttribute("rotation", "0 0 0")
    antenna2.setAttribute("color","purple")
})
mouth.addEventListener ("click", e => {
    hello.setAttribute("visible","true")
    hello.setAttribute("value","hello, my name is robot")
})