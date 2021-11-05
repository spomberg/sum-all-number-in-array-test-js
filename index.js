function sumItems(array) {
  const flattenedArr = array.flat(Infinity);
  if(flattenedArr.length === 1) return flattenedArr[0];
  return flattenedArr[0] + sumItems(flattenedArr.slice(1));
}

module.exports = sumItems;