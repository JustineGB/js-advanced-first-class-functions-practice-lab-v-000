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
  var newArray = [...drivers];
  return newArray.sort(function(a, b) {
    return a.revenue - b.revenue;
  });
}

function driversByName(drivers) {
  var newArray = [...drivers];
  return newArray.sort(function(a, b) {
  return a.name.localeCompare(b.name);});
}

function totalRevenue(drivers) {
}

function averageRevenue(drivers) { 
}

newArray.sort(function(a, b) { return a.name.localeCompare(b.name);});

