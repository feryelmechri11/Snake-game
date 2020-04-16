

const cvs = document.getElementById("can");
height.innerHTML=localStorage.getItem('highscore')


/* methode proprietè */

const deuxD = cvs.getContext("2d");


/* creation box */
const box = 32;

/* creation  image background et fruit  */

const background = new Image();
background.src = "b.jpg";
 const fruitImage = new Image();
fruitImage.src = "food.png";







/* audio file */


let dead = new Audio();
let eat = new Audio();
let up = new Audio();
let right = new Audio();
let left = new Audio();
let down = new Audio();

dead.src = "audio/dead.mp3";
eat.src = "audio/eat.mp3";
up.src = "audio/up.mp3";
right.src = "audio/right.mp3";
left.src = "audio/left.mp3";
down.src = "audio/down.mp3";











/* creation du snake */

let snake = [];

snake[0] = { x : 9 * box, y : 10 * box} ;
   
    



/* creation fruit */


let food = {
    x : Math.floor(Math.random()*17+1) * box,
    y : Math.floor(Math.random()*15+3) * box
}

/* creation score */

let score = 0;














//commander snake

let d;

document.addEventListener("keydown",direction);

function direction(event){
    let key = event.keyCode;
    if( key == 37 && d != "RIGHT"){
        left.play();
        d = "LEFT";

    }else if(key == 38 && d != "DOWN"){
        up.play();
        d = "UP";

    }else if(key == 39 && d != "LEFT"){
        right.play();
        d = "RIGHT";

    }else if(key == 40 && d != "UP"){
        down.play();
        d = "DOWN";
    }
}




// cheack collision function
function collision(head,array){
    for(let i = 0; i < array.length; i++){
        if(head.x == array[i].x && head.y == array[i].y){
            return true;
        }
    }
    return false;
}

// fonction pour canvas 

alert(" are you ready !")






