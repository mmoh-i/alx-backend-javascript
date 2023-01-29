export default function appendToEachArrayValue(array, appendString) {
  const newArray = []
  for (const idx of array) {
    let value = newArray[idx];
    newArray[idx] = appendString + value;
  }

  return newArray;
}
