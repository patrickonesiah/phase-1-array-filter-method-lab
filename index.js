// Code your solution here

const findMatching = (arrayOfDrivers, matchingName) => {

    return arrayOfDrivers.filter(driver => (driver[0].toUpperCase()+driver.slice(1)) === matchingName);
}


const fuzzyMatch = (arrayOfDrivers, matchingLetter) => {
    return arrayOfDrivers.filter( driver => { return driver.toLowerCase().substring(0, matchingLetter.length) === matchingLetter.toLowerCase() })
}


const matchName  = (arrayOfDrivers, matchingName) => {
    return arrayOfDrivers.filter(driver => driver.name === matchingName);
}


//expect(fuzzyMatch(drivers, 'Sa')).to.have.members(['Sammy', 'Sarah', 'Sally']);

drivers.push('Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby');