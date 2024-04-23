// normal array
const array = [1,2,3,45];
console.log(array);
const size = 10;
// size is dynamic 
const dynamicArray = new Array(size).fill(0)
console.log(dynamicArray)
// sort the array
const sortArray = [2,1,115,9,6,5,3];//
sortArray.sort((a,b)=>b-a)
console.log(sortArray)
// sort the object array
const objArray =[{name:"mazhar",city:"Hyd"},{name:"Adnan",city:"CA"},{name:"Preshya",city:"Bang"}]
objArray.sort((a,b)=>a.name.localeCompare(b.name))
console.log(objArray)
// combine arrays
const array1 = [1,2,3,4,5], array2= [4,9,8,7,6] // [{e:4,i:0},{e:9,i:1}]
const array3= [...array1,...array2]
console.log(array3);
console.log('length',array1.length);
let arrayOfObjects = array2.map((e,i)=>{return{e:e,i:i}})

console.log(arrayOfObjects)
