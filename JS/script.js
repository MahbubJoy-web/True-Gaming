// ================player-1
let PlayerOne = document.querySelector('.PlayerOne');
let playerOneInput = document.querySelector('.PlayerOneInput');
let playerOneButton = document.querySelector('.playerOneButton');

// ================player-2
let PlayerTwo = document.querySelector('.PlayerTwo');
let PlayerTwoInput = document.querySelector('.PlayerTwoInput');
let playerTwoButton = document.querySelector('.playerTwoButton');

// ===============common js
let error = document.querySelector('.ErrorText');
let winner = document.querySelector('.winner');
let Winnertext = document.querySelector('.Winner_text');
let Body = document.querySelector('body');

// ===========Chance Js
let Chance = 0
let  ChanceNumber = document.querySelector('.dynaNumber');
// ================= Functionality =================

let btn = () => {
    if (playerOneInput.value === '') {
        error.style.display = 'block';
        error.innerHTML = 'Please enter a number';
    } else {
        let number = parseInt(playerOneInput.value);
        if (number > 10 || number < -5) {
            error.style.display = 'block';
            error.innerHTML = 'Invalid Number';
        } else {
           PlayerOne.style.display='none'
           error.innerHTML=''
           PlayerTwo.style.display='block'
        }
    }
}
 let button=()=>{
    if(PlayerTwoInput.value==''){
        error.style.display = 'block';
        error.innerHTML = 'Please enter a number';
    }else{
        let koddo = parseInt(PlayerTwoInput.value);
        if(koddo>10 || koddo<-5){
            error.style.display = 'block';
            error.innerHTML = 'Invalid Number'; 
        }else{
            error.innerHTML=''
            if(playerOneInput.value==PlayerTwoInput.value){
                winner.style.display='block'
                Winnertext.innerHTML=' Player-2 Winner'
                Body.style.background='#000'
                PlayerTwo.style.display='none'
            }else{
                Chance++
                ChanceNumber.innerHTML=Chance
                if(Chance==5){
                    PlayerTwo.style.display='none'
                    Winnertext.innerHTML='Player-1 winner'
                    Body.style.background= 'Opacity:20%'
                    winner.style.display='block'
                }
            }
        }
    }
    PlayerTwoInput.value=''
 }

 let entwr=(item)=>{
    if(item.key=='Enter'){
        console.log(item.target.className)
        if(item.target.className =='playeroneinput'){
            btn()
        }
        else{
        button()
        }  
    }
}
