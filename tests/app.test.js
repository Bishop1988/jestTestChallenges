const { test, expect } = require("@jest/globals");
const challenges = require("../app");

const {
  myFunc,
  personObjFunc,
  myArrayFunc,
  numToString,
  displayPlanet,
  register,
  squareEverDigit,
  retCentury,
  convertBinary
} = challenges;

// To make sure what is returned is not ‘null’
test("Should make sure data returned is not null", () => {
  expect(myFunc(true)).not.toBe(null);
});

// A value that is truthy
test("Should check if a value is truthy", () => {
  expect(myFunc("truthy val")).toBeTruthy();
});

// A value that is not falsy
test("Should check if returned value is not falsy", () => {
  expect(myFunc("truthy val")).not.toBeFalsy();
});

// Create a function that creates an object with 2 properties, test to
// makes sure that the objects properties are equal to your test
// function
describe("object contains properties", () => {
  const expected = {
    name: "Michael Bishop",
    age: 34,
  };

  test("Should check objects properties", () => {
    expect(personObjFunc()).toEqual(expected);
  });
});

// A function that will return items in an array with 6 or more
// characters
describe("array 6 characters or more in length", () => {
  let myArray = ["abroad", "almost", "the"];

  test("Check that array items are 6 characters or more in length", () => {
    expect(myArrayFunc(myArray)).toEqual(["abroad", "almost"]);
  });
});

// Convert a number to a string
describe("Convert a number to a string", () => {
  test("Should retrun a string", () => {
    let expected = "1234";

    expect(numToString(1234)).toEqual(expect.stringContaining(expected));
  });
});

// Display the correct planet with the number order it is away from
// the sun
describe("Display the correct planet with the number order it is away from the sun", () => {
  test("displayPlanet(3) //will return Earth", () => {
    expect(displayPlanet(3)).toBe("Earth");
  });
});

// Count the amount of students present in the class. With an array or boolean values
describe("Count the amount of students present in the class. With an array or boolean values, count how many students are present. true = present", () => {
    test("true, true, true, false, true, true // will return 5", () => {
        expect(register([true, true, true, false, true, true])).toBe(5)
    })
})

// Square every digit and concatenate them. Must return an integer.
describe("Square every digit and concatenate them in result. The result must be an integier", () => {
    test("squareEverDigit(34) will return 916", () => {
        expect(squareEverDigit(34)).toBe(916)
    })
})

// Given a year return back the century it is in
describe("Given a year return back the century it is in", () => {
    test("retCentury(1705) // will return 17", () => {
        expect(retCentury(1705)).toBe(17)
    })
})

// With an array of ones and zeroes, convert the equivalent binary value to an integer
describe("With an array of ones and zeroes, convert the equivalent binary value to an integer", () => {
    test("convertBinary([0, 0, 0, 1]) //will return 1. binary([0, 1, 0, 0]) //will return 4", () => {
        expect(convertBinary([0,1,0,0])).toBe(4)
    })
})