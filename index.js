function isPalindrome(word) {
  let rWord=word.split("").reverse().join("")
  if(word==rWord){
    return true;
  }
  else{
    return false;
  }

}
console.log(isPalindrome("racecar"))


/* 
  Add your pseudocode here
  declare isPalindrome function
  for our code if the word in the function is true it will return true
  else false
*/

/*
  Add written explanation of your solution here
  I began by declare a variable rWord
  use split("") to split the word a return them in a array
  the reverse the word which are split
  use join("") to join them together
  if they match with the original it will return true or false
  based on the output.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
