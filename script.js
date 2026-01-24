function isPalindrome(word){
    let reversed = word.split("").reverse().join("")

    if( word === reversed){
        return "Palindrome";
    }else{
        return "Not Palindrome"
    }
}
console.log(isPalindrome("add"));