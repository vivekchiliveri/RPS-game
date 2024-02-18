let userscore= 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score");




const genCompchoice = () =>{
const options=  ["rock","paper","scissors"];
 const random = Math.floor(Math.random() * 3);   
 return options[random];
 

};
const drawgame = () =>{
    console.log("game was draw");
    msg.innerText = `game was draw. Play again!`;
msg.style.backgroundColor = "blue";

};
const showWinner=(userwin, _userChoice,_compchoice) =>{
    if (userwin) {
        userscore++;
        userscorepara.innerText = userscore;
        msg.innerText = `. hurrah! you won.`;
msg.style.backgroundColor = "green";
    }
    else {
        compscore++;
        compscorepara.innerText = compscore;
        msg.innerText = ` you lost!`;
msg.style.backgroundColor = "red";
    }
};
const playgame = (userchoice) => {

    const compchoice = genCompchoice();
    
    if(userchoice === compchoice) {

        drawgame();

    } else {
        let userwin = true;
    
    if(userchoice === "rock"){
        userwin = compchoice === "paper" ? false : true ;
    }
    else if(userchoice = "paper"){
        userwin = compchoice === "scissors" ? false : true;


    }
    else{
        userwin = compchoice === "rock" ? false : true;
    }
    showWinner(userwin, userchoice, compchoice);
}
};


choices.forEach((choice) =>  {

choice.addEventListener("click",() => {
    const userChoice = choice.getAttribute("id");
    playgame(userChoice);

});
});