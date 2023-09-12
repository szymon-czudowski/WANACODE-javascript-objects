// First task:
// Add up all of the salaries
const salaries = {
    john: 50,
    adam: 100,
    katie: 75
}
const salarySum = salaries.john + salaries.adam + salaries.katie;
console.log(salarySum);

// Second task:
// Write the isObject() function. Use typeof operator.
function isObject(valueToCheck) {
    return typeof valueToCheck === "object" && valueToCheck !== null;
}

// Third task:
// Write the removeProperty function.
// It should return true  if there is a property with a given key to remove.
// Otherwise, it should return false.
const user = {
    name: 'John',
}
function removeProperty(object, key) {
    if(key in object) {
        delete object[key]
        return true;
    } else return false;
}

// Fourth task
// Write the checkIfUsersHaveTheSameName function.

const firstJohn = {
    firstName: 'John',
    lastName: 'Smith'
}

const secondJohn = {
    firstName: 'John',
    lastName: 'Smith'
}

const adam = {
    firstName: 'Adam',
    lastName: 'Johnson'
}

function checkIfUsersHaveTheSameName(objectOneName, objectTwoName) {
    return objectOneName.firstName === objectTwoName.firstName;
}

checkIfUsersHaveTheSameName(firstJohn, secondJohn); // true
checkIfUsersHaveTheSameName(firstJohn, adam); // false

// Fifth task
// Write the getVoteCount function

function getVoteCount({upvotes, downvotes}) {
    return upvotes - downvotes;
}
getVoteCount({ upvotes: 10, downvotes: 5 }); // 5
getVoteCount({ upvotes: 75, downvotes: 90 }); // -15
getVoteCount({ upvotes: 50, downvotes: 50 }); // 0

// Sixth task
// Write the getCubeVolume function
function getCubeVolume({width, length, height}) {
    return width * length * height;
}

// Seventh task
// Write the getCityInformation function
function getCityInformation({name, country, areaInKilometers}){
    return `${name} is in ${country} and has area of ${areaInKilometers} square kilometers`
}

// Eighth task
// Write the getUserCopy  function. Assume that users only have the firstName and lastName.
const john = {
    firstName: 'John',
    lastName: 'Smith'
}
function getUserCopy(userObject) {
    return Object.assign({}, userObject);
}

const newUser = getUserCopy(john);
console.log(newUser === john);