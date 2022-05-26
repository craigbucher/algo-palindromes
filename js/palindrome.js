exports.palindrome = function(word) {
    // ensure word is a string
    word = word.toString();
    // globally (/g) replace/remove chars not a-z, A-Z or 0-9	
    let tmpWord = word.replace(/[^a-zA-Z0-9]/g, '');
    // convert to lower case
    string = tmpWord.toLowerCase();
    // a single letter is technically a palindrome
    if (string.length === 1){	
      return true;	
    }
    // call the helper function to check if string is equal to its reverse	
    return (string === revString(string));	
};    
// helper function     
function revString(str){	
    strArr = str.split('');	
    arrRev = strArr.reverse();	
    return arrRev.join('');	
}

// console.log(exports.palindrome('nice'))