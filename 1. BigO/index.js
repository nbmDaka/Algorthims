console.log('Thank you for using WebStorm 💙')


// What is good code?

// 1. Readable code
// 2. Scalable code ( Big O)

const nemo = ['n', 'o' ,'no' ,'nemo']

const everyone = ['everyone', 'is', 'a', 'nemo', 'everyone', 'is', 'a', 'friend']
const large = new Array(100000).fill('nemo');

function findNemo(array) {
    for (let i = 0; i < array.length; i++) {
        console.log('running');
        if (array[i] === 'nemo') {
            console.log('Found ' + i + ' nemo');
            break;
        }
    }
}
// findNemo(nemo);
// findNemo(everyone);
// findNemo(large);

// O(n) time complexity -> Linear time
// O(1) space complexity -> Constant space

function funChallenge(input) {
    let a = 10; // O(1)
    a = 50 + 3; // O(1)

    for (let i = 0; i < input.length; i++) { // O(n)
        anotherFunction(); // O(n)
        let stranger = true; // O(n)
        a++; // O(n)
    }
    return a; // O(1)
}

function anotherFunction() {

}
// Time complexity is O(3+4n)
// Time complexity is O(n)


function anotherFunChallenge(input) {
    let a = 5; // O(1)
    let b = 10; // O(1)
    let c = 50; // O(1)
    for (let i = 0; i < input; i++) { // O(n)
        let x = i + 1; // O(n)
        let y = i + 2; // O(n)
        let z = i + 3; // O(n)

    }
    for (let j = 0; j < input; j++) { // O(n)
        let p = j * 2; // O(n)
        let q = j * 2; // O(n)
    }
    let whoAmI = "I don't know"; // O(1)
}
// Big O = 4 + 7n = O(n)

// this function is O(n)

// -------------------------------------------------------RULE BOOK-------------------------------------------------------
// Rule 1: Worst Case
    // Rule 2: Remove Constants
        // Rule 3: Different terms for inputs
            // Rule 4: Drop Non Dominants








const boxes = [0, 1, 2, 3, 4, 5];

function logFirstTwoBoxes(boxes) {
    for(let i = 0; i < boxes.length; i++) {
        for(let j = 1; j < boxes.length; j++) {
            if(i === boxes.length - 1) {

            } else {
                console.log(boxes[i] + ' ' + boxes[j]);
            }
        }
    }
}

// logFirstTwoBoxes(boxes);

function printAllNumbersThenAllPairSums(numbers) {
    console.log("these are the numbers:");
    numbers.forEach(function(number) {
        console.log(number);
    });

    console.log("and these are their sums:");
    numbers.forEach(function(firstNumber) {
        numbers.forEach(function(secondNumber) {
            console.log(firstNumber + secondNumber);
        });
    });
}

printAllNumbersThenAllPairSums([1, 2, 3, 4, 5]); // O(n^2)



