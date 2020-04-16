




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


function draw (){

    deuxD.drawImage(background,0,0);


    for( let i = 0; i < snake.length ; i++){
        deuxD.fillStyle = ( i == 0 )? "yellow" : "yellow";
        deuxD.fillRect(snake[i].x,snake[i].y,box,box);
        
        deuxD.strokeStyle = "white";
        deuxD.strokeRect(snake[i].x,snake[i].y,box,box);



    }
    
    deuxD.drawImage(fruitImage, food.x, food.y);

    // old head position
    
    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

 // which direction


    if( d == "LEFT") snakeX -= box;
    if( d == "UP") snakeY -= box;
    if( d == "RIGHT") snakeX += box;
    if( d == "DOWN") snakeY += box;


    // if the snake eats the food
    if(snakeX == food.x && snakeY == food.y){
        score++;
        eat.play();
        food = {
            x : Math.floor(Math.random()*17+1) * box,
            y : Math.floor(Math.random()*15+3) * box
        }
        // we don't remove the tail
    }else{





        /* enlever le volume du snacke */
        snake.pop();










    }

    // add new Head
    
    let newHead = {
        x : snakeX,
        y : snakeY
    }


    // game over
    
    if(snakeX  <  0 || snakeX > 18 * box || snakeY < 0  || snakeY > 18*box || collision(newHead,snake)){

        dead.play();
        checkscore(score);
        clearInterval(game);

        
        
    }
    
    
    
    snake.unshift(newHead);
    
   
    deuxD.fillStyle = "white";
    deuxD.font = "40px Changa one";
    deuxD.fillText(score,2*box,2*box);










}
let game = setInterval(draw,100); 



function checkscore(score){
    height.innerHTML=localStorage.getItem('highscore')

    if(localStorage.getItem('highscore') === null){
        //If there is no high score
        localStorage.setItem('highscore',score);
        console.log('1111')
        height.innerHTML=localStorage.getItem('highscore')
    } else {
        //If there is a high score
        if(score > localStorage.getItem('highscore')){
            localStorage.setItem('highscore',score);
            height.innerHTML=localStorage.getItem('highscore')

        }
        else{return console.log(false)}
    }

    $('#high_score').html('High Score: '+localStorage.highscore);
}




