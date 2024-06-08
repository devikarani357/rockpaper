let userscore=0;
let computerscore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#ash")

//computer choice should be generate randomly
const computerchoice=()=>{
    const options=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
}

const showwinner=(userwin)=>{
    if(userwin){
        msg.innerHTML="You Win!";
        msg.style.backgroundColor="green";
    }
    else
    {
        msg.innerHTML="You Lose!";
        msg.style.backgroundColor="red";
    }
        

};

const drawgame=()=>{
    msg.innerHTML="Game was Draw.Play Again!";
    msg.style.backgroundColor="yellow";
};

const playgame=(userchoice)=>{
    console.log("user choice=",userchoice);

    const computergame=computerchoice();
    console.log("computer choice=",computergame);

    if(userchoice===computergame)
    {
            drawgame();
    }
    else{
        let userwin=true;
        if(userchoice==="rock"){
            //scissors,paper
           userwin= computergame==="paper"?false:true;
        }
        else if(userchoice==="paper"){
            //rock,scissors
            userwin=computergame==="rock"?true:false;
        }
        else{
            //paper,rock
            userwin=computergame==="paper"?true:false;
        }

        showwinner(userwin);

    }
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
      const userchoice=choice.getAttribute("id");
      playgame(userchoice);
    })
})