arrayA = new Array(10);
arrayB = new Array(10);

for (i = 0; i < arrayA.length; i++) {
  arrayA[i] = Math.floor(Math.random() * 10 - 1);

}
for (i = 0; i < arrayB.length; i++) {
  arrayB[i] = Math.floor(Math.random() * 10 - 1);
}
console.log('Array A is ');
for (i = 0; i < arrayA.length; i++) {
  console.log(arrayA[i]);
}
console.log('Array B is ');
for (i = 0; i < arrayB.length; i++) {
  console.log(arrayB[i]);
}
for (i = 0; i < arrayA.length; i++) {
  // а = arrayA[i];
  for (j = 0; j < arrayB.length; j++) {
    if (arrayA[i] == arrayB[j]) {
      document.write(arrayA[i], '<br/>');
    }
  }
}

