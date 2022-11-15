const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let slider = document.getElementById('myRange')

canvas.width = 650;
canvas.height = 500;


class Player {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    update() {
        this.x = slider.value

    }
    draw() {
        ctx.fillRect(this.x-50, this.y, 100, 25 )
    
    }
}

class Ball {
    constructor() {

    }

    update() {

    }

    draw() {

    }
}

const player = new Player(325, 450)

function animate() {
    ctx.clearRect(0,0,canvas.width, canvas.height)
    player.update()
    player.draw()
    
    requestAnimationFrame(animate)
}

animate();

function hej(){
    console.log('janne');
}