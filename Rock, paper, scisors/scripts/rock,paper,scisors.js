var userChoice = ("rock, sissors, paper?");
var computersChoice = Math.random();
if(computersChoice < 0.34){
	computersChoice = "rock"
} else if(computersChoice <= 0,67) {
computersChoice = "paper"
} else {
computersChoice = "sissors"
}

choice1 = userChoice;
choice2 = computersChoice

function compare(choice1,choice2){
	if(choice1 === choice2){
		return("The result is a tie!")
	}
	if(choice1 === "rock"){
		if(choice2 === "scissors"){
			return("rock wins!")
		}else{
			return("paper wins!")
		}
	}
	if (choice1 === "paper"){
		if(choice2 === "rock"){
			return("paper wins!")
		}else{
			return("scissors wins!")
		}
	}
}
console.log(compare(choice1,choice2))

		
