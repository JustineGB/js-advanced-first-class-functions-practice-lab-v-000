function logDriverNames(drivers) {
  return drivers.forEach(function(driver) {
    console.log(driver.name);})
}

function logDriverByHometown(drivers, hometown) {
  return drivers.forEach(function(driver) {
    console.log(driver.name).where(driver.hometown == hometown);})
}

function driversByRevenue() {
  // Receives an array of driver objects 
// and returns a new array of driver objects sorted 
// by their revenue attribute from lowest to highest.
}

// driversByName() — Receives an array of driver objects and 
// returns a new array of driver objects sorted by their name 
// attribute from A to Z. Here, you may have to use the String.prototype.localeCompare() method.

// totalRevenue() — Receives an array of driver objects and 
// returns the sum of the revenue earned by each driver.

// averageRevenue() — Receives an array of driver objects and 
// returns the average revenue earned by each driver