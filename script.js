let showWindow = document.querySelector(".inner-rules-div");
let close = document.querySelector(".close");
let rock = document.querySelector(".rock");
let paper = document.querySelector(".paper");
let scissor = document.querySelector(".scissor");

// display rules window
function showRules(){
     close.style.display = "block"
     showWindow.style.display = "block"
}

// close rules window
function closeWindow(){
    showWindow.style.display = "none";
    close.style.display = "none"
}


let userScore = parseInt(localStorage.getItem('userScore')) || 0;
let compScore = parseInt(localStorage.getItem('compScore')) || 0;

const userScoreElement = document.querySelector("#userScore");
const computerScoreElement = document.querySelector("#compScore");

function updateScore(){
    userScoreElement.textContent = userScore;
    computerScoreElement.textContent = compScore;
}
updateScore();


// event listeners on rock, paper, scissor
rock.addEventListener('click', function() {
    scoreResult("rock")
});
paper.addEventListener('click', function(){
    scoreResult("paper")
});
scissor.addEventListener('click', function(){
    scoreResult("scissor")
});

function scoreResult(userChoice){
    let compChoice = generateCompChoice();
   
     switch(userChoice){
        case "rock":
            switch(compChoice){
                case "rock":
                    scoreResult()
                    redirectPage("tieup.html");
                    break;
                case "paper":
                    compScore++;
                    scoreResult()
                    redirectPage("computer.html");
                    updateScore(compScore)
                    break;
                case "scissor":
                    userScore++;
                    scoreResult()
                    redirectPage("user.html");
                    updateScore(userScore)
                    break;
            }
            // scoreResult("rock")
            break;

            case "paper":
                switch(compChoice){
                    case "paper":
                        scoreResult()
                        redirectPage("tieup.html");
                        break;
                    case "rock":
                        userScore++;
                        scoreResult()
                        redirectPage("user.html");
                        updateScore(userScore)
                    case "scissor":
                        compScore++;
                        scoreResult()
                        redirectPage("computer.html");
                        updateScore(compScore)
                        break;
                }
                // scoreResult("paper")
                break;

            case "scissor":
                switch(compChoice){
                    case "scissor":
                        scoreResult()
                        redirectPage("tieup.html");
                        break;
                    case "rock":
                        compScore++;
                        scoreResult()
                        redirectPage("computer.html");
                        updateScore(compScore)
                        break;
                    case "paper":
                        userScore++;
                        scoreResult()
                        redirectPage("user.html");
                        updateScore(userScore)
                        break;
                }
                // scoreResult("scissor")
                break;
           }         


// updateScore();

localStorage.setItem('userScore', userScore);
localStorage.setItem('compScore', compScore);
}

// determine choice
function displayChoice(userChoiceImage){
    
    //generate computer random choice
    let compChoiceImage = generateCompChoice();
    var result = "";
      switch(userChoiceImage){
        case "rock":
            if(compChoiceImage==="scissor"){
                result = "user.html";
                scoreResult("rock")
            }
            else if(compChoiceImage==="paper"){
                result = "computer.html";
                scoreResult("paper")
            }
            else if(compChoiceImage==="rock"){
                result = "tieup.html";
            }
            break;

            case "paper":
                if(compChoiceImage==="scissor"){
                    result = "computer.html";
                    scoreResult("scissor")
                }
                else if(compChoiceImage==="rock"){
                    result = "user.html";
                    scoreResult("paper")
                }
                else if(compChoiceImage==="paper"){
                    result = "tieup.html"
                }
                break;

                case "scissor":
                    if(compChoiceImage==="rock"){
                        result = "computer.html";
                        scoreResult("rock")    
                    }
                    else if(compChoiceImage==="paper"){
                        result = "user.html";
                        scoreResult("scissor")   
                    }
                    else if(compChoiceImage==="scissor"){
                        result = "tieup.html"
                    }
                    break;
      } 
 
    //redirect page
      window.location.href = result + "?user="+userChoiceImage + "&computer="+compChoiceImage;  
      
}

//  generate computer choice
function generateCompChoice(){
    let choices = ["rock", "paper", "scissor"];
    let random = Math.floor(Math.random()*choices.length);

    switch(random){
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissor";
        
    }

}