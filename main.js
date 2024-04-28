let robotChoices = ['Rock', 'Paper', 'Scissors'];

// ******** Creating Random Number for Robot
// let robot = Math.round(Math.random() * 2);


// ******** Implementing a choice for the robot
// let robot = robotChoices[Math.round(Math.random() * 2)];
// alert(robot);


const playGame = (humanChoice) => {
    let human = humanChoice;

    // Implementing a choice for the robot
    let robot = robotChoices[Math.round(Math.random() * 2)];
    
    alert(`The robot choice is: ${robot}`);
    alert(`The human choice is: ${human}`);

    if(human == "Rock"){
        if(robot == "Rock"){
            alert("Its a Tie");
        }else if(robot == "Paper"){
            alert("Robot Win");
            scoringFunction("Robot");

        }else if(robot == "Scissors"){
            alert("Human Win");
            scoringFunction("Human");

        }else{
            alert("Invalid choice for robot");
        }
    }
    if(human == "Paper"){
        if(robot == "Rock"){
            alert("Human Win");
            scoringFunction("Human");

        }else if(robot == "Paper"){
            alert("Its a Tie");
        }else if(robot == "Scissors"){
            alert("Robot Win");
            scoringFunction("Robot");

        }else{
            alert("Invalid choice for robot");
        }
    }
    if(human == "Scissors"){
        if(robot == "Rock"){
            alert("Robot Win");
            // Scoring Function
            scoringFunction("Robot");

        }else if(robot == "Paper"){
            alert("Human Win");
            // Scoring Function
            scoringFunction("Human");

        }else if(robot == "Scissors"){
            alert("Its a tie");
        }else{
            alert("Invalid choice for robot");
        }
    }
};

const scoringFunction = (winner) => {
    let humanScore = Number(document.querySelector("#human-score").innerHTML);
    let robotScore = Number(document.querySelector("#robot-score").innerHTML);
    // alert(`Human Score ${humanScore} and Robot Score ${robotScore}`);
    // alert(winner);
    if(winner == "Robot"){
        robotScore++;
        document.querySelector("#robot-score").innerHTML = robotScore;
    }else if(winner == "Human"){
        humanScore++;
        document.querySelector("#human-score").innerHTML = humanScore;
    }
};
