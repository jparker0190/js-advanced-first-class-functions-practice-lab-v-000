// Code your solution in this file!
const logDriverNames = function (driver){
  driver.forEach(function(element){console.log(element.name)})
}
const logDriversByHometown = function(driver, location){
  var arry = driver.filter(function(num){
    console.log(num.hometown)
    return num.hometown === num.location
  })
  var art = arry.forEach(function(element){console.log(element.hometown)})

  return art
}
