let colors = ['red','green','blue']
let colorscolor = ['red','green',12]

// console.log(colors[0])

// console.log(colors[3]) // if index is out of bound, returns undefined

// console.log(colors.length)
// console.log(typeof colors)

// console.log(colorscolor)
// console.log(colorscolor[2])


// for(let i=0; i < colors.length;i++){ //traditional for loop
//     console.log(colors[i]) 
// }

//modern for loop
for (let i of colors){ // (var name of array name)
    console.log(i)
}