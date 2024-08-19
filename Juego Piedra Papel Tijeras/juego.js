const btnRock = document.getElementById('rock');
const btnPaper = document.getElementById('paper');
const btnTijera = document.getElementById('tijera');
const resultText = document.getElementById('textOption')

const rock = 0;
const paper = 1;
const tijera = 2;

const tie = 0;
const win = 1;
const lose = 2;

btnRock.addEventListener('click' , ()=>{
    play (rock)
})

btnPaper.addEventListener('click' , ()=>{
    play(paper)
})
btnTijera.addEventListener('click' , ()=>{
    play(tijera)
})

function play (userOption){
    let COM = Math.floor(Math.random() * 3);
    const Result = calcResult (userOption, COM);

    switch(Result){
        case tie:
            resultText.innerHTML = 'Has empatado'
            break;
        case win:
            resultText.innerHTML = 'Ganaste!!!';
            break;
        case lose:
            resultText.innerHTML = 'Has perdido...';
    }
    
    
}

function calcResult(userOption, COM){
    if(userOption === COM){
        return tie;
    }else if(userOption === paper){
        if(COM === rock) return win;
        if(COM === tijera) return lose;
    }else if(userOption === tijera){
        if(COM === rock) return lose;
        if(COM === paper) return win;
    }else if(userOption === rock){
        if(COM === paper) return lose;
        if(COM === tijera) return win;
    }
}

