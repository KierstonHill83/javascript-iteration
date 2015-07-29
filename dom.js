document.getElementById("sum-all").addEventListener("click", function() {
    sumAllClick();
});
document.getElementById("count-selected").addEventListener("click", function() {
    countSelectedClick();
});
document.getElementById("average-all").addEventListener("click", function() {
  averageAllClick();
});
document.getElementById("average-selected").addEventListener("click", function() {
  averageSelectedClick();
});
document.getElementById("sum-selected").addEventListener("click", function() {
  sumSelectedClick();
});



function writeAnswer(answer){
 document.getElementById("sumAnswer").innerHTML = answer;
}



//problem 1
function sumAllClick () {
  var answer  = sum(sumPrices());
  writeAnswer("$" + answer);
}

function sumPrices () {
  var priceValue = document.getElementsByName("prices");
  var allPrices = priceValue[0].children;
  return allPrices;
}


//problem 2
function countSelectedClick () {
  var answer = countPrices(countSelectedPrices());
  writeAnswer(answer);
}

function countSelectedPrices () {
  var selectedPrices = [];
  var priceValue = document.getElementsByName("prices");
  selectedPrices = priceValue[0].selectedOptions;
  return selectedPrices;
}


//problem 3
function sumSelectedClick () {
var answer = sum(sumSelected());
writeAnswer("$" + answer);
}


function sumSelected(){
  var sumSelectedPrices = [];
  var priceValue = document.getElementsByName("prices");
  allPrices = priceValue[0].selectedOptions;
  return allPrices;
}


//problem 4
function averageAllClick () {
   var answer = average(averagePrice());
   writeAnswer("$" + answer);
}

function averagePrice () {
  var allPrices = [];
  var priceValue = document.getElementsByName("prices");
  allPrices = priceValue[0].children;
  return allPrices;
}


//problem 5
 function averageSelectedClick () {
  var answer = averageSelected(averageSelectedPrice());
  writeAnswer("$" + answer);
}



function averageSelectedPrice () {
  var allPrices = [];
  var priceValue = document.getElementsByName("prices");
  allPrices = priceValue[0].selectedOptions;
  return allPrices;
}




///NAMES


var listNames = document.getElementsByClassName("all-names")[0].value;
var allNamesClick = document.getElementById("all-names");
var firstNames = document.getElementById("first-names");
var lastNames = document.getElementById("last-names");
var namesWithLengths = document.getElementById("names-with-lengths");
var namesAnswer = document.getElementById("names-answer");
var eachName = listNames.split("\n");
var splitNameArray = splitNames(eachName);


//problem 6
function splitNames (array) {
 var splitNames = [];
 var newSplitName;
  for (var i = 0; i < array.length; i++) {
   newSplitName = array[i].split(" ");
   splitNames.push(newSplitName);
  }
  return splitNames;
}

allNamesClick.addEventListener("click", function () {
  namesAnswer.innerHTML = null;
  for (var i = 0; i < eachName.length; i++) {
    var li = document.createElement("LI");
    namesAnswer.appendChild(li);
    li.innerHTML = eachName[i];
  }
});


//problem 7
firstNames.addEventListener("click", function () {
  namesAnswer.innerHTML = null;
  for (var i = 0; i < splitNameArray.length; i++) {
    var li = document.createElement("LI");
    var firstN = getName(splitNameArray, 0);
    namesAnswer.appendChild(li);
    li.innerHTML = firstN[i];
  }
});

function getName (name, index) {
  var firstNameArray = [];
  var newFirstName;
  for(var i = 0; i < name.length; i++) {
    newFirstName = name[i][index];
    firstNameArray.push(newFirstName);
  }
  return firstNameArray;
}


//problem 8
lastNames.addEventListener("click", function () {
  namesAnswer.innerHTML = null;
  var lastN = getName(splitNameArray, 1);
  for (var i = 0; i < splitNameArray.length; i++) {
    var li = document.createElement("LI");
    namesAnswer.appendChild(li);
    li.innerHTML = lastN[i];
  }
});


//problem 9
namesWithLengths.addEventListener("click", function () {
  namesAnswer.innerHTML = null;
      for (var i = 0; i < splitNameArray.length; i++) {
        var count = 0;
        for (var j = 0; j < splitNameArray[i].length; j++) {
          count += splitNameArray[i][j].length;
        }
        var li = document.createElement("LI");
        namesAnswer.appendChild(li);
        li.innerHTML = eachName[i] + " - " + count;
      }
})


