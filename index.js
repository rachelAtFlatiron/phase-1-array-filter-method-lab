// Code your solution here
let findMatching = (drivers, driver) => {
    return drivers.filter(el => el.toLowerCase() === driver.toLowerCase())
}

let fuzzyMatch = (drivers, driver) => {
    return drivers.filter(el => el.slice(0, driver.length) === driver)
}

let matchName = (drivers, driver) => {
    let matchArray = [];
    for (let i in drivers) {
        if (drivers[i].name === driver) {
            matchArray.push(drivers[i])
        }
    }
    return drivers.filter(el => el.name === driver)
}