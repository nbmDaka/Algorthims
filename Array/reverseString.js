//Create a function that reverses a string;
//"Hi My name is Andrei" should be:
//"ierdnA si eman yM iH"

// My Solution

let result;
function reverse(str) {
    const backwards = [];
    for(let  i = str.length - 1; i >= 0; i--) {
        backwards.push(str[i]);
        result = backwards.join('');
    }
}


// ZTM solution

function reverseString(str) {
    //check input
    if(!str || str.length < 2 || typeof str !== 'string'){
        return 'hmm that is not good';
    }

    const backwards = [];
    const totalItems = str.length - 1;
    for (let i = totalItems; i >= 0; i--) {
        backwards.push(str[i]);
    }


    return backwards.join('')
}

function reverse2(str) {
    return str.split('').reverse().join('');
}

const reverse3 = str => [...str].reverse().join('');

const str  = ["H","e","l","l","o"];

var reverseString1 = function(s) {
    const array = s.join('')
    const backwards = [];
    const totalItems = array.length - 1;
    for (let i = totalItems; i >= 0; i--) {
        backwards.push(array[i]);
    }

    return backwards
};
console.log(reverseString1(str));
const s  = ["H","e","l","l","o"];


// Leetcode solution
var reverseString2 = function (s) {
    let left = 0;
    let right = s.length - 1;

    while(left < right) {
        let temp = s[left];
        s[left] = s[right];
        s[right] = temp;

        left++;
        right--;
    }
}
console.log(reverseString2(s));