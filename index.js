// Code your solution in this file!
const logDriverNames = function (driver){
  driver.forEach(function(element){console.log(element.name)})
}
const logDriversByHometown = function(driver, location){
  var arry = driver.filter(function(num){
    return num.hometown === num.location})
  var art = arry.map(function(num){
    return console.log(num === location)
  })
  return art
}
