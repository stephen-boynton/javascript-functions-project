// 1.
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// Then, write and example of using the function.

function max(x, y){
    if (x > y) {
      return x;
    } else if (x < y) {
      return y;
    } else if (x === y) {
      return "They are equal"
    }
}

console.log(max(3,2));
console.log(max(1,7));
console.log(max(10,10));

// 2.
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// Then, write and example of using the function.

function maxOfThree(x, y, z){
    if (x > y && x > z) {
      return x;
    } else if (y > x && y > z) {
      return y;
    } else if (z > y && z > x) {
      return z;
    }
}

console.log(maxOfThree(7,5,4));
console.log(maxOfThree(1,3,2));
console.log(maxOfThree(1,7,100000000));


// 3.
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// Then, write and example of using the function.

function isVowel(char){
    if (char === "a" || char ===  "e" || char ===  "i" || char ===  "o" || char === "u") {
      return true;
    } else {
      return false;
    }
}

console.log(isVowel("a"));
console.log(isVowel("b"));
console.log(isVowel("u"));



// 4.
// Write a function called `sum` that takes two parameters and returns the sum of those 2 numbers.
// Then, write and example of using the function.

function sum (x,y) {
  return x + y;
};

console.log(sum(1,2));
console.log(sum(10000,2000003));



// 5.
// Write a function named `avg` that takes 3 parameters and returns the average of those 3 numbers.
// Then, write and example of using the function.

function avg(x, y, z) {
  let total = x + y + z;
  return total/3;
}

console.log(avg(1, 2, 70));
console.log(avg(1, 2, 3));


// 6.
// Write a function called `getLength` that takes one parameter (a string) and returns the length
// Then, write and example of using the function.

function getLength(str) {
  return str.length;
}

console.log(getLength("Hamilton "));
console.log(getLength("the Musical "));
console.log(getLength("is great."));


// 7.
// Write a function called `greaterThan` that takes two parameters
// and returns `true` if the second parameter is greater than the first.
// Otherwise the function should return `false`.
// Then, write and example of using the function.

function greaterThan(a, b) {
  if (b > a) {
    return true;
  } else {
    return false;
  }
}

console.log(greaterThan(10, 20));
console.log(greaterThan(100, 20));

// 8.
// Write a function called `greet` that takes a
// single parameter and returns a string that
// is formated like "Hello, Name!" where *Name*
// is the parameter that was passed in.
// Then, write and example of using the function.

function greet(name) {
  return "Hello, " + name + "!";
}

console.log(greet("Stephen"))
console.log(greet("King George III"))

// 9.
// Write a function called `madlib` that takes 4 or more parameters (words).
// The function should insert the words into a pre-defined sentence.
// Finally the function should return that sentence.
// Note: When I say words and sentence I mean strings. For example:
// words: "quick", "fox", "fence"
// sentence: "quick brown fox jumps over the fence"
// Then, write and example of using the function.

function madlib(adjective, noun, verb, adverb) {
  return "The " + adjective + " " + noun + " " + verb + " " + adverb + " before Queen and country!";
};

console.log(madlib("green", "frog", "leaps", "stunningly"));
console.log(madlib("sad", "elephant", "passes wind", "loudly"));
