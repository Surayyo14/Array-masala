function takroriyElementlar(arr) {
  let takroriy = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j] && !takroriy.includes(arr[i])) {
        takroriy.push(arr[i]);
      }
    }
  }

  return takroriy;
}

console.log(takroriyElementlar([1, 2, 3, 2, 4, 5, 3])); 
