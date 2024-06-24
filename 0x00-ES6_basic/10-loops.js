export default function appendToEachArrayValue(array, appendString) {
  const newString = [];
  for (let value of array) {
    newString.push(appendString + value);
  }

  return newString;
}
