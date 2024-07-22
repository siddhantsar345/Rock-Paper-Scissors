let userscore=0;
let compscore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userscorePara=document.querySelector("#user-score");
const compscorePara=document.querySelector("#comp-score");

const genCompchoice=()=>{
    const options=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3); // The value would be between 0 to 2
    return options[randIdx];
} 

const drawGame=()=>{
    msg.innerText="Game was draw, play again.";
    msg.style.backgroundColor="#081b31"
}

const showWinner=(userWin,userChoice,compChoice) =>{
    if(userWin) {
        userscore++;
        userscorePara.innerText=userscore;
        msg.innerText=`You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }else{
        compscore++;
        compscorePara.innerText=compscore; 
        msg.innerText=`You lost. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
}
const playGame=(userChoice)=>{
    console.log("user choice =",userChoice);
    const compChoice=genCompchoice();
    console.log("Comp choice =",compChoice);

    if(userChoice === compChoice){
        drawGame();
    }else{
        let userWin=true;
        if(userChoice ==="rock"){
            userWin=compChoice === "paper" ? false :true;
        }else if(userChoice==="paper"){
            userWin=compChoice==="scissors" ? false : true;
        }else{
            userWin=compChoice==="rock" ? false : true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
}
choices.forEach((choice) =>{
    console.log(choice);
    choice.addEventListener("click",() =>{
        const userChoice= choice.getAttribute("id");
        playGame(userChoice);
    });
});