// Big O notation is a concept computer science barrows from math.
// It's a construct that helps us suck away all the minutia and
// just look at the big picture with respect to algorithm performance.
// We use it when we want to know if one algorithm is orders of magnitude
// better or worse than another algorithm. Think 30ms versus 30 seconds.
//
// Here's an example equation:
//
//    3x^2 + x + 1
//
// If we plug in 5 for x, the first term becomes 75, the second term
// becomes 5, and the final term stays at 1.
//
// The insight is that the first term of 5x^2 is where the bulk of
// the value of this function is created.
//
// Big O ignores the little parts of a function and just concentrates
// on the big parts. So the Big O of 3x^2 + x + 1 is O(n^2).
//
// Here the O is absorbing all the other fluff of the equation, including
// the coefficient on the largest term.
//
// Given that our equation is O(n^2) we can say for n terms, it's going
// to take us n*n time to go through our inputs.

// [1,2,3] => [4,4,4]
//
// What is the Big O of this function?
//
// We have to realize that input is going to be an array and we have
// one loop which will touch each element of the array once. Therefore,
// the Big O of this function is O(n)
function crossAdd(input) {
  let answer = [];
  for (let i = 0; i < input.length; i++) {
    let goingUp = input[i];
    let goingDown = input[input.length - 1 - i];
    answer.push(goingUp + goingDown);
  }
  return answer;
}


// What is the Big O of this function?
//
// If the needle is the first thing in the haystack, we're looking at
// instant return here. But we need to look at it in broad strokes.
// We have one loop that potentially toches every element in the haystack
// array. The conditional doesn't affect the Big O computation time.
// So this function is O(n).
function find(needle, haystack) {
  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle) { return true; }
  }
}

// What is the Big O of this function?
//
// Since we have to loop over the array twice you might think
// our Big O would be O(2n). The thing is Big O is pretty aggressive
// about removing things like coefficients from the analysis.
// This function would still be O(n).
function find(needle, haystack) {
  let answer = 0;

  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle) { answer += 1; }
  }

  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle) { answer -= 1; }
  }

  return answer;
}

// What is the Big O of this function?
//
// Since we have a nested loop, that means we're touching every
// element in the array twice. So our Big O is O(n^2). The trick
// with determining Big O is to look for loops. 😉
function makeTuples(inputs) {
  var answer = [];
  for (var i = 0; i < input.length; i++) {
    for (var j = 0; j < array.length; j++) {
      answer.push([input[i], input[j]]);
    }
  }
  return answer;
}
