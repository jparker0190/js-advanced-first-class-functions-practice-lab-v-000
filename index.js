// Code your solution in this file!
const logDriverNames = function (driver){
  driver.forEach(function(element){console.log(element.name)})
}
const logDriversByHometown = function(driver, location){
  var arry = driver.filter(function(num){
    return num.hometown === location
  })
  arry.forEach(function(element){console.log(element.name)})

}
function driversByRevenue(driver){
  driver.sort(function(a,b){
    return a - b
  })
}
