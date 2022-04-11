// const myFunc = (data) => {
//     return data
// }

// refactored
const myFunc = (data) => data

// Create a function that creates an object with 2 properties, test to
// makes sure that the objects properties are equal to your test
// function
const personObjFunc = () => {
    let person = {
        name: "Michael Bishop",
        age: 34
    }
    return person
}

// A function that will return items in an array with 6 or more
// characters
let myArray = ["abroad", "almost", "animal", "the", "func", "will", "not", "ret", "words", "under", "six", "custom", "actually", "approval"]
const myArrayFunc = (array) => {
    let result = array.filter(word => word.length >= 6)
    return result
}

// Convert a number to a string
let numToString = (num) => num.toString()
// let result = numToString(12345)
// console.log(numToString(1234))
// console.log(typeof result)

// Display the correct planet with the number order it is away from
// the sun
// (planet(3) //will return ‘Earth’)
const displayPlanet = (planetNum) => {
    let planet = ["Mercury", "Venus", "Earth", "Mars", "jupiter", "Saturn", "Uranus", "Neptune"]
    return planet[planetNum - 1]
}
// console.log((displayPlanet(3)))

const register = (studentArr) => {
    let studentPresent = 0
    for (let i = 0; i < studentArr.length; i++) {
        if (studentArr[i] == true) {
            studentPresent += 1
        }
    }
    return studentPresent
}
// console.log(register([true, true, true, false, true, true]))

// Square every digit and concatenate them 
const squareEverDigit = (num) => {
    let result = num.toString().split('').map(el => el * el).join('')
    return parseInt(result)
}
// console.log(squareEverDigit(34))

// Given a year return back the century it is in
const retCentury = (date) => {
    // let century = date.toString().slice(0,2)
    let century = date.toString()
    if (century.length == 4) {
        let result = century.slice(0, 2)
        return parseInt(result)
    } else if (century.length < 4) {
        let result =  century.slice(0, 1)
        return parseInt(result)
    }
}
// console.log(retCentury(1220))

// With an array of ones and zeroes, convert the equivalent binary value to an integer
const convertBinary = (binaryArr) => {
    const binaryString = binaryArr.join("")
    return parseInt(binaryString, 2)
}

// console.log(convertBinary([0,1,0,0]))

module.exports = {
    myFunc,
    personObjFunc,
    myArrayFunc,
    numToString,
    displayPlanet,
    register,
    squareEverDigit,
    retCentury,
    convertBinary
}