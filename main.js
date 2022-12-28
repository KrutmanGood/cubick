let x = 0
let y = 0
let i = 0
let clicked = false

const cube = document.querySelector('.cube')
cube.style.transform = `rotateY(${0}deg) rotateX(${0}deg)`

const cords = ['0/0', '-90/180', '0/90', '0/270', '90/180', '0/180']

function rotation() {
    if (!clicked) {
        clicked = true
        
        const interval = setInterval(function () {
            if (i < 200) {
                y = y + 5
                x = x + 5
                i = i + 1
    
                cube.style.transform = `rotateY(${y}deg) rotateX(${x}deg)`
            } else {
                clearInterval(interval)
                i = 0
                x = 0
                y = 0
                clicked = false
    
                const number = random(0, 5)
    
                const correct = cords[number]
                const el = correct.split('/')
    
                cube.style.transform = `rotateY(${+el[0]}deg) rotateX(${+el[1]}deg)`
            }
        }, 5)
    } else {
        console.log('кликнул, не подождав')
    }
}

function random(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)

    return Math.floor(Math.random() * (max - min + 1)) + min
}