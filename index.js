// Code your solution here
let findMatching = (drivers, driver) => {
    return drivers.filter(el => el.toLowerCase() === driver.toLowerCase())
}

let fuzzyMatch = (drivers, driver) => {
    return drivers.filter(el => el.slice(0, driver.length) === driver)
}

let matchName = (drivers, driver) => {
    return drivers.filter(el => el.name === driver)
}