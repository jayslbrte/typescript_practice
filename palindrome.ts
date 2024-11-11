
function isPalindrome(x:number):boolean{
 
    //if x is less 0 or if x ends in 0 AND not 0 itself , THEN x is not palindrome 
    if (x<0 || x% 10 === 0 && x !== 0){
        return false;
    }

    let reversed = 0
    let original = x

    while (original > reversed){
        reversed = reversed * 10 + original % 10;
        original = Math.floor(original/10)
    }

    return original === reversed || original === Math.floor(reversed/10)
}

const palindromeResult = isPalindrome(121)

console.log(palindromeResult)