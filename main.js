/******************
 * YOUR CODE HERE *
 ******************/
function addMeToEnd (arr) {
  arr.push('Colin');
  return arr;
}

function addMeToStart (arr) {
  arr.unshift('Colin');
  return arr;
}

function changeLast (arr, valueLast) {
  arr.pop();
  arr.push(valueLast);
  return arr;
}

function changeAllValuesTo (arr, valuesAll) {
  for(let i = 0; i < arr.length; i++) {
    arr[i] = valuesAll;
  }
  return arr;
}

function oddOrEven (arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0){
      arr.splice(i, 1, 'even');
    }else {
      arr.splice(i, 1, 'odd');
    }
  }
  return arr;
}

function changeNextThreeToValue (givenIndex, arr, givenValue) {
  // for (let i = 0; i < arr.length; i++) {
  return arr.splice(givenIndex, 3, givenValue, givenValue, givenValue);
  // }
}
/*********************************
 * OUR CODE BELOW; DO NOT TOUCH! *
 *********************************/


if (typeof addMeToEnd === 'undefined') {
  addMeToEnd = undefined;
}

if (typeof addMeToStart === 'undefined') {
  addMeToStart = undefined;
}

if (typeof changeLast === 'undefined') {
  changeLast = undefined;
}

if (typeof changeAllValuesTo === 'undefined') {
  changeAllValuesTo = undefined;
}

if (typeof oddOrEven === 'undefined') {
  oddOrEven = undefined;
}

if (typeof changeNextThreeToValue === 'undefined') {
  changeNextThreeToValue = undefined;
}


module.exports = {
  addMeToEnd,
  addMeToStart,
  changeLast,
  changeAllValuesTo,
  oddOrEven,
  changeNextThreeToValue,
}
