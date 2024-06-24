export default function appendToEachArrayValue(array, appendString) {
  const newString = [];
  for (const value of array) {
    newString.push(appendString + value);
  }

  return newString;
}
