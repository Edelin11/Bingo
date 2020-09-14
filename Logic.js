// first we are going to get the values, the ball with the letter
let noMore = document.querySelector('h1');
let nextBall = document.getElementById('next-ball');
let output = document.getElementById('showNumbers');


let letter1 = document.getElementById('column-1');
let letter2 = document.getElementById('column-2');
let letter3 = document.getElementById('column-3');
let letter4 = document.getElementById('column-4');
let letter5 = document.getElementById('column-5');

let numberArray1 = arrayOfNumbers(1, 15);
function oneTo15 (){
    let randomIndex = getTheNumbers(0, numberArray1.length -1);
    let a = numberArray1[randomIndex];
    numberArray1.splice(randomIndex, 1);
    return a;
}  
let numberArray2 = arrayOfNumbers(16, 30);
function To30 (){
    let randomIndex = getTheNumbers(0, numberArray2.length -1);
    let a = numberArray2[randomIndex];
    numberArray2.splice(randomIndex, 1);
    return a;
}  
let numberArray3 = arrayOfNumbers(31, 45);
function To45 (){
    let randomIndex = getTheNumbers(0, numberArray3.length -1);
    let a = numberArray3[randomIndex];
    numberArray3.splice(randomIndex, 1);
    return a;
}  
let numberArray4 = arrayOfNumbers(46, 60);
function To60 (){
    let randomIndex = getTheNumbers(0, numberArray4.length -1);
    let a = numberArray4[randomIndex];
    numberArray4.splice(randomIndex, 1);
    return a;
}  
let numberArray5 = arrayOfNumbers(61, 75);
function To75 (){
    let randomIndex = getTheNumbers(0, numberArray5.length -1);
    let a = numberArray5[randomIndex];
    numberArray5.splice(randomIndex, 1);
    return a;
}  

var letra; // letter
function getTheNumbers(min, max){
    let step1 = max - min + 1;
    let step2 = Math.random()*step1;
    let result = Math.floor(step2)+min;
    return result; // the result will be passed to the function name when called
}
function arrayOfNumbers(start, end){ // numbers the random is generating to the array
    let myArray = [];
    for(let i = start; i<= end; i++){
        myArray.push(i);
    }
    return myArray;
}
let numberArray = arrayOfNumbers(1, 75); // min 1, max 75 different balls
let ballsLeft = document.getElementById('balls-left');
// setting how many balls you can get
var count = 27;
ballsLeft.textContent = count; //show initial cuantity of balls

function setBingoMax() {
    count = count - 1;
     return count;
}

function forRandomN(){
    let randomIndex = getTheNumbers(0, numberArray.length -1);
    let randomNumber = numberArray[randomIndex];
    numberArray.splice(randomIndex, 1);
    return randomNumber;
}

let output2 = document.getElementById('current-number');
nextBall.addEventListener('click', boton);

function boton (){
    let t = setBingoMax()+1;
    if(t <= 0){
        noMore.textContent = "no more balls "; 
        return;
    }ballsLeft.textContent = t-1; // balls left
    let rr = forRandomN();
    switch(true){
        case rr >=  1 && rr <=15: letra = 'B'; break;
        case rr >= 16 && rr <=30: letra = 'I'; break;
        case rr >= 31 && rr <=45: letra = 'N'; break;
        case rr >= 46 && rr <=60: letra = 'G'; break;
        case rr >= 61 && rr <=75: letra = 'O'; break;
    }
    output.textContent = letra + rr.toString();
    noMore.textContent += letra + rr.toString()+" ";  

    return output2.textContent = rr.toString();  
}

const totalB = ()=>{ 
    for(let i = 1; i <= 5; i++){
        letter1.innerHTML += `<div class="bingo__column bingo__item bingo__B">
        ${b = oneTo15()}
        </div>`  
    }
    for(let k = 1; k <= 5; k++){
        letter2.innerHTML += `<div class="bingo__column bingo__item bingo__B">
        ${i = To30()}
        </div>`
    }
    for(let i = 1; i <= 5; i++){
        letter3.innerHTML += `<div class="bingo__column bingo__item bingo__B">
        ${n = To45()}
        </div>`
    }
    for(let i = 1; i <= 5; i++){
        letter4.innerHTML += `<div class="bingo__column bingo__item bingo__B">
        ${g = To60()}
        </div>`
    }
    for(let i = 1; i <= 5; i++){
        letter5.innerHTML += `<div class="bingo__column bingo__item bingo__B">
        ${o = To75()}
        </div>`
    }
}
totalB();


// now i have to do the matching, with the given number and the bingo on the table
function toMatch(){
    // no yet... 
}