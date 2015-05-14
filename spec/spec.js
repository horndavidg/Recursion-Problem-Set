var home = require("../probs.js")

describe("Testing homework problems", function(){
    
    it("Returns the lyrics to 99 bottles given a starting point", function(){
       expect(home.bottle1(1)).toEqual("1 bottle of beer on the wall, 1 bottle of beer. Take one down and pass it around, no more bottels of beer on the wall. No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.")

})

it("Returns the lyrics to 99 bottles given a starting point (Recursive)", function(){
       expect(home.bottle2(1)).toEqual("1")

})

it("Returns the sum of a range from 0 to a given number", function(){
       expect(home.sumOfRange1(5)).toEqual(15)
      

})

it("Returns the sum of a range from 0 to a given number (Recursive)", function(){
       expect(home.sumOfRange2(1)).toEqual(1)
       expect(home.sumOfRange2(5)).toEqual(15)
      

})

it("Returns a value given a number and the exponent it is raised to", function(){
       expect(home.power1(1, 1)).toEqual(1)

})

it("Returns a value given a number and the exponent it is raised to (Recursive)", function(){
       expect(home.power2(2, 2)).toEqual(4)

})


})