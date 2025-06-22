let fruits = ['apple','banana','orange','kiwi']

// let citrus = fruits.slice(0,3)
// console.log(citrus)

// let fruits = ['apple','banana']
// let moreFruits = ['orange','kiwi']

// let allFruits = fruits.concat(moreFruits)
// console.log(allFruits)

// let indexBanana = fruits.indexOf('banana')
// console.log(indexBanana)

// reversedFruits = allFruits.reverse()
// console.log(reversedFruits)

// let sortedFruits =  fruits.sort()
// console.log(sortedFruits)

// let numbers = [3,12,1,9, 9, 90, 900,100,45, 46, 44, 101]
// let sortedNumbers = numbers.sort() //converts the array elements to string and sorts
// console.log(sortedNumbers)

// let sortNums = numbers.sort(function(e1, e2) { return e1 - e2; });
// console.log(sortNums) //e1>e2 or e1=e2 or e1<e2


let mixedArray = [100, 'apple', 200, 3, 'orange']
// mixedArray.sort() // [ 100, 200, 3, 'apple', 'orange' ]

mixedArray.sort((a, b) => {
  if (typeof a === 'number' && typeof b === 'number') return a - b;
  return String(a).localeCompare(String(b));
});
console.log(mixedArray)
