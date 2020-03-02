// ASSESSMENT 4: JavaScript Coding Practical Questions

// --------------------1) Create a function that takes in an array. Each time the function is run, remove the first item from the array and shuffle the remaining content. If the array is empty, return "The array is empty."



//This is a tricky one. Had to check google a bunch and I was REALLY hoping there was a built in method for shuffle. There isnt, sad day. Found out using a simple math.random() would be a really bad idea for a multitude of reasons. Link to said reasons and why we are going to go a little more the direction of a Fisher-Yates Algo. https://medium.com/@nitinpatel_20236/how-to-shuffle-correctly-shuffle-an-array-in-javascript-15ea3f84bfb


//Creating our function that will shuffle and shift.
const shuffleShift = ( array ) => {
    
//Removes the first zeroeth index element.

    array.shift()
    let tempArray = array
    
//If statement that will check if you are a ding-dong and trying to shift out something that doesnt exist in the array then print a custom message. 

    if ( tempArray.length == [] ) {
        //Custom message return if the array has nothing in it.
        return "The array is empty, dawg"
    //Start our else
    } else { 
        
        //Run our for loop to access the array backwards.
        
    for( let i = array.length - 1; i > 0; i--){
        //mafs
        let j = Math.floor(Math.random() * i)
        //declaring a temp array that will hold our first set of mafs.
        tempArray = array[i]
        //Declaring that array index is equal to our mafs.
        array[i] = array[j]
        //Delcaring our tempArray is the true smart guy here. 
        array[j] = tempArray
        }
    }
}


//Moved the variable array down to see it better
var collections = ["purple", "blue", "green", "yellow", "pink"]
shuffleShift(collections)
console.log(collections)
shuffleShift(collections)
console.log(collections)
shuffleShift(collections)
console.log(collections)
shuffleShift(collections)
console.log(collections)
shuffleShift(collections)
console.log(collections)

//Ran a whole bunch so we can see it get to an empty a array.
// ... and it shows a blank array instead. IDK WHAT IS GOING ON. I CANT MAKE THIS DISPLAY MY RETURN! :( HALP

// Expected output example1 (can be a different order): ["yellow", "blue", "pink", "green"]
// Expected output example2 (can be a different order): ["blue", "green", "pink"]
// Expected output example3 (can be a different order): ["pink", "green"]

// --------------------2) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

var cubeAndSum1 = [2, 3, 4]
// Expected output: 99
var cubeAndSum2 = [0, 5, 10]
// Expected output: 1125

//Im pretty sure I might be able to use the Math.pow here, but I'm too fuzzy on it still. Also, I'm actually TERRIBLE at math. Like. Very. Very. Very bad. Thanks homeschooling! :D Going to do it longform

const cubeEm = ( nums ) => {
// Creation of variable to hold our incomming data
    let output = 0
// Adding up the numbers using .map method, then just times it by 3. 
    nums.map( value => {
        output += value ** 3
    })
    //Returning our output for the magic to happen
    return output
}

console.log(cubeEm(cubeAndSum1))
console.log(cubeEm(cubeAndSum2))




// --------------------3) Create a function that takes an array of numbers and returns an array of the minimum and maximum numbers in that order.

var nums1 = [3, 56, 90, -8, 0, 23, 6]
// Expected output: [-8, 90]
var nums2 = [109, 5, 9, -59, 8, 24]
// Expected output: [-59, 109]

//Creation of function that will take an array of numbers and returns an array of the minimum and maximum numbers in that order.
const minMax = ( nums ) => {
    //Creation of variables to hold data for later.
    let minimum = nums[0]
    let maximum = nums[0]
    //LETS LOOP! :D
    for (let i = 0; i < nums.length; i++) {
        //trying my hand at some ternary stuff. wish me luck. im scared. Hopefully it wont... TURN ARRY ON ME LOL! Do you get it? Its a play on the word ternar..... ok, im sorry. 
        //First ternary to assign minimum
        minimum = (minimum > nums[i]) ? nums[i] : minimum
        //Second ternary to assign maximum. 
        maximum = (maximum < nums[i]) ? nums[i] : maximum
    }
    //Return our minimum and maximum 
    return [minimum, maximum]
}

//Console log time to see if it works!
console.log(minMax(nums1))
console.log(minMax(nums2))
// ternary is dope. 



// --------------------4) Create a function that takes in a string and returns a string with every other letter capitalized.

var testString1 = "albatross"
// Expected output: "aLbAtRoSs"
var testString2 = "jabberwocky"
// Expected output: "jAbBeRwOcKy"

//Creation of function that takes in a string and returns a string with every other letter capitalized.
const upEm = string => {
    let weirdCaps = ""
    for (let i = 0; i < string.length; i++){
        //Ternary that checks the character index. If it TERNS (haha, I did it again) out that the character at the index of the string has a decimal, lets uppercase that badboy using the toUpperCase method. BUT, if it doesnt TERN (hooo boy) out to be that way, lets do nathan about it.
        weirdCaps += (i%2 == 0) ? string[i]:string[i].toUpperCase()
    }
    //Return our final weirdcaps string when called.
    return weirdCaps
}

//Calling the function in a console.log.
console.log(upEm(testString1))
console.log(upEm(testString2))


// --------------------5) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator.

var arr1 = [3, 7, 10, 5, 4, 3, 3]
var arr2 = [7, 8, 2, 3, 1, 5, 4]
// Expected output: [3, 7, 10, 5, 4, 8, 2, 1]

//Creration of funciton that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator.
const dontDupeMeBro = (array1, array2) => {
    let newArray = new Set( [...array1, ...array2] )
    //Returning the new array.
    return [...newArray]
}

//Calling the function in a console.log

console.log(dontDupeMeBro(arr1,arr2))
