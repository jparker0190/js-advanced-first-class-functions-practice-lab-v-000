// Code your solution in this file!
const logDriverNames = function (driver){
  driver.forEach(function(element){console.log(element.name)})
}
const logDriversByHometown = function(driver, location){
  driver.forEach(function(word){
    if (word === location){
      console.log(word.name)
    }
  })
}
