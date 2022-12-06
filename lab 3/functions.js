const pascalCase = string => {
  let words = string.toLowerCase().split(' ');
  let textArray = [];
  words.forEach(word => {
    textArray.push(word[0].toUpperCase() + word.substr(1));
  });
  return textArray.join(' ');
}


const longestWord = string => {
  let words = string.split(' ').sort((a, b) => b.length - a.length);
  return words[0];
}


const sortString = string => string.split('').sort().join('');

const getDate = _ =>{
  let months = [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  return months[new Date().getMonth()];
}

const randomArray = (size = 5) => {
  if(size > 11) size = 10;
  let arr = [];
  for(let i = 0; i < size; i++){
    arr[i] = Math.ceil((Math.random() * 10));
  }
  return arr;
}

const displayMaxMin = numbers => {
  let min = numbers[0];
  let max = numbers[0];
  numbers.forEach(number => {
    if(number > max) max = number;
    if(number < min) min = number;
  })
  console.log("min", min, "max",  max)
}

const removeRepeated = numbers => {
  numbers = numbers.sort((a,b) => a - b);
  for(let i = 0; i < numbers.length - 1; i++){
    if(numbers[i] == numbers[i+1]){
      numbers[i] = numbers.splice(i, 1)[0];
      i--;
    }
  }
  return numbers;
}
