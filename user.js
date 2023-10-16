let showWindow = document.querySelector(".inner-rules-div");
let close = document.querySelector(".close");

    function showRules(){
        close.style.display = "block"
        showWindow.style.display = "block"
   }
   
   // close rules window
   function closeWindow(){
       showWindow.style.display = "none";
       close.style.display = "none"
   }
function displayImages(){
    
    const params = new URLSearchParams(window.location.search);
    const userChoiceImage = params.get("user");
    const compChoiceImage = params.get("computer");

    switch(userChoiceImage){
        case "rock":
            break;
        case "paper":
            break;
        case "scissor":
            break;
    }

    switch(compChoiceImage){
        case 1:
            break;
        case 2:
            break;
        case 3:
            break;
    }
    document.getElementById("userChoice").src = userChoiceImage + ".png";
    document.getElementById("comChoice").src = compChoiceImage + ".png";

}
const userscore =localStorage.getItem("userScore");
const compscore =localStorage.getItem("compScore");

if (userscore !== null && compscore !== null) {
    document.getElementById("user-score").textContent = userscore;
    document.getElementById("comp-score").textContent = compscore;
}

