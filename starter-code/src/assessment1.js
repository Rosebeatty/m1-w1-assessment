
// Write a function that returns the product of 2 numbers
function product(x, y) {
  //
  var prod = x * y
  return prod

}

  product(5, 10);

// Write a function that returns whether a given number is even
function isEven(num) {
  //
    if(num % 2 === 0) {
      return true
    } else {
      return false
    }

}

  isEven(10); 

// Return the biggest of 2 numbers
function maxOfTwoNumbers(a, b) {
  //
  if (a > b) {
    return a
  }
return b
}

maxOfTwoNumbers(10, 20)

// Return the biggest of 3 numbers
function maxOfThreeNumbers(a, b, c) {
  if (a > b && a > c) {
    return a
  } else if
    (b > a && b > c ) {
      return b
    } else {
      return c
    }
  }

  maxOfThreeNumbers(10, 20, 30)


// Calculate the sum of an array of numbers
function sumArray(numbers) {
  var sum = 0;
   if (numbers[0] === 0) {
     return 0;
   }

   for (var i = 0; i < numbers.length; i++) {
       sum = sum + numbers[i];
   }
   return sum; 
};

sumArray([10, 20, 30])


// Return the biggest number of a non-empty array
function maxOfArray(numbers) {
  var maximum = 0;

  if (numbers[0] === 0) {
    return 0;
  }

  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] >= maximum) {
      maximum = numbers[i];
    }
}
return maximum;
}

maxOfArray([10, 20, 30])


// Return the longest string in an array
function longestString(stringsArr) {
   var longestString = "";
  for (var i = 0; i < stringsArr.length; i++) {
    if (stringsArr[i].length > longestString.length) {
      longestString = stringsArr[i]
    }
}
return longestString
}

longestString(["Jack", "Joe", "Tudor"])


// Return whether a word is in an array

function doesWordExist(wordsArr, word) {
  for (var i = 0; i < wordsArr.length; i++) {
    if (wordsArr[i] === word) {
      return true;
    }
}
return false;
}


// Finding the first non-duplicate word in an array
function findUnique(wordsArr) {
  
  if (wordsArr[0] = []) {
    return false;
  }

  for (var i = 0; i < wordsArr.length; i++) {
    for (var j = i +1; i < wordsArr.length; j++) {
      if(wordsArr[i]) {
        wordsArr.splice(i, 1);
        wordsArr.splice(j -1, 1);
      }

    }
}
return wordsArr[0];
}

// Get the fullName from the object { firstName: 'Tony', lastName: 'Stark'}
function getFullName(personObj) {
    var firstName = personObj.firstName
    var lastName = personObj.lastName
    var fullName = `${firstName} ${lastName}`
    return fullName;
}


// Return the biggest number in a two dimensional array
function maxTwoDimArray(matrix) {
  var maximum = 0;
  for (var i = 0; i < matrix.length; i++) {
    for (var j = 0; j < matrix.length; j++) {
      if (matrix[i][j] > maximum) {
        maximum = matrix[i][j];
      }
      }
  }
  return maximum;
}
