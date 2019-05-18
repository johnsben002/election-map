var createPolitician = function (name, partyColor){

  var politician = {};
  politician.name = name;
  politician.electionResults = null;
  politician.totalVotes = 0;
  politician.partyColor = partyColor;

  //method for tallying up votes

  politician.tallyUpTotalVotes = function(){

    this.totalVotes = 0;

    for (var i = 0; i < this.electionResults.length; i++){
        this.totalVotes = this.totalVotes + this.electionResults[i];
    }

};

  return politician;
}

var linda = createPolitician("Linda Carlisle",[245, 141, 136]);
var robert = createPolitician("Robert Braxton",[132, 17, 11]);

console.log("Linda's color is: " + linda.partyColor);
console.log("Robert's color is: " + robert.partyColor);

//election results
linda.electionResults = [5, 1, 7, 2, 33, 6, 4, 2, 1, 14, 8, 3, 1, 11, 11, 0, 5, 3, 3, 3, 7, 4, 8, 9, 3, 7, 2, 2, 4, 2, 8, 3, 15, 15, 2, 12, 0, 4, 13, 1, 3, 2, 8, 21, 3, 2, 11, 1, 3, 7, 2];
robert.electionResults = [4, 2, 4, 4, 22, 3, 3, 1, 2, 15, 8, 1, 3, 9, 0, 6, 1, 5, 5, 1, 3, 7, 8, 1, 3, 3, 1, 3, 2, 2, 6, 2, 14, 0, 1, 6, 7, 3, 7, 3, 6, 1, 3, 17, 3, 1, 2, 11, 2, 3, 1];

//updates to election results

//florida
linda.electionResults[9] = 1;
robert.electionResults[9] = 28;

//california
linda.electionResults[4] = 17;
robert.electionResults[4] = 38;

//texas
linda.electionResults[43] = 11;
robert.electionResults[43] = 27;

console.log(linda.electionResults);
console.log(robert.electionResults);

//setting state results
setStateResults = function(state){
  theStates[state].winner = null;
  if (linda.electionResults[state] > robert.electionResults[state]) {
    theStates[state].winner = linda;
  } else if (linda.electionResults[state] < robert.electionResults[state]) {
    theStates[state].winner = robert;
  }

  //adding party color to the winner of each state
  var stateWinner = theStates[state].winner;
  if (stateWinner !== null) {
    theStates[state].rgbColor = stateWinner.partyColor;
  } else {
    theStates[state].rgbColor = [11,32,57];
  }

  //populating state results table
  var stateInfoTable = document.getElementById('stateResults');
  var header = stateInfoTable.children[0];
  var body = stateInfoTable.children[1];
  var stateName = header.children[0].children[0];
  var abbrev = header.children[0].children[1];
  var candidate1Name = body.children[0].children[0];
  var candidate2Name = body.children[1].children[0];
  var candidate1Results = body.children[0].children[1];
  var candidate2Results = body.children[1].children[1];
  var winnersName = body.children[2].children[1];

  stateName.innerText = theStates[state].nameFull;
  abbrev.innerText = "(" + theStates[state].nameAbbrev + ")";
  candidate1Name.innerText = linda.name;
  candidate2Name.innerText = robert.name;
  candidate1Results.innerText = linda.electionResults[state];
  candidate2Results.innerText = robert.electionResults[state];
  if (theStates[state].winner === null){
    winnersName.innerText = "DRAW";
  } else {
    winnersName.innerText = theStates[state].winner.name;
  }
}

//tallying up the votes
linda.tallyUpTotalVotes();
robert.tallyUpTotalVotes();

console.log(linda.name + ": " + linda.totalVotes);
console.log(robert.name + ": " + robert.totalVotes);


//declaring a winner
var winner = "???";

if (linda.totalVotes > robert.totalVotes){
  winner = linda.name;
} else if (linda.totalVotes < robert.totalVotes){
  winner = robert.name;
} else{
  winner = "DRAW.";
}


console.log("AND THE WINNER IS..... " + winner + "!!!");

//populating country results table

var countryInfoTable = document.getElementById('countryResults');
var row = countryInfoTable.children[0].children[0];

row.children[0].innerText = linda.name;
row.children[1].innerText = linda.totalVotes;
row.children[2].innerText = robert.name;
row.children[3].innerText = robert.totalVotes;
row.children[5].innerText = winner;
