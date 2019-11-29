function breakOut(array, changeValue, stopValue) {
  if(array[i] === stopValue) {
    break;
  }
  else {
    array.forEach(change => {
    change[i] = changeValue;
  })
}
return array;
}
