// Code your solution in this file!
const logDriverNames = function (driver){
  driver.forEach(function(element){console.log(element.name)})
}
const logDriversByHometown = function(driver, location){
  var arry = driver.map(function(num){
    return num.hometown === location
  })
  arry.forEach(function(element){console.log(element)})

}
