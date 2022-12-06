console.log(pascalCase("ahmed MohamEd ElsAAr"));

console.log(longestWord("Web Development Tutorial"))

console.log(sortString("javascript"));

console.log(getDate());

console.log(randomArray());

let arr = [2,1,3,2,7,2,8,4,3,6,10,9,12];

console.table(arr.sort((a, b)=> a - b));
console.table(arr.sort((a, b)=> b - a));

let numberBiggerThan5 = arr.filter((item)=> item > 5);
console.log(numberBiggerThan5);

displayMaxMin(arr);

console.log(Array.from(arr, x => x * 5));


console.log(removeRepeated(arr));

