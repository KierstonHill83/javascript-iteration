//problem 1
function sum(option) {
  var total = 0;
    for(var i = 0; i < option.length; i++) {
      total = total + parseInt(option[i].value);
    }
    return total;
}


//problem 2
function countPrices(options) {
  var total = parseInt(options.length);
  return total;
}


//problem 3
function sumSelected(options) {
  var total = 0;
    for (var i = 0; i < options.length; i++) {
      total = total + parseInt(options[i].value);
    }
    return total;
}


//problem 4
function average(options) {
  var total = 0;
    for(var i = 0; i < options.length; i++) {
      total = total + parseInt(options[i].value);
    }
    return (total / options.length).toFixed(2);
}


//problem 5
function averageSelected (options) {
  var total = 0;
    for (var i = 0; i < options.length; i++) {
      total = total + parseInt(options[i].value);
    }
    return (total / options.length).toFixed(2);
}

