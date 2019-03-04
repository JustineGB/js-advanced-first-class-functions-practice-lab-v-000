function logDriverNames(drivers) {
  return drivers.forEach(function(driver) {
    console.log(driver.name);})
}

function logDriversByHometown(drivers, hometown) {
  return drivers.forEach(function(driver) {
    if (driver.hometown == hometown) {
    console.log(driver.name)}
  })
}

function driversByRevenue(drivers) {
  return drivers.sort(function(driver) {
    
  }
  // Receives an array of driver objects 
// and returns a new array of driver objects sorted 
// by their revenue attribute from lowest to highest.
}

function driversByName() {
  // Receives an array of driver objects and 
// returns a new array of driver objects sorted by their name 
// attribute from A to Z. Here, you may have to use the String.prototype.localeCompare() method.
}

function totalRevenue() {
  // Receives an array of driver objects and 
// returns the sum of the revenue earned by each driver.
}

function averageRevenue() { 
  // Receives an array of driver objects and 
// returns the average revenue earned by each driver
}

