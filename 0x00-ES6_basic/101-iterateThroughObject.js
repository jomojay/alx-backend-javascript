export default function iterateThroughObject(reportWithIterator) {
  const result = [];
  for (const employee of reportWithIterator) {
    result.push(employee);
  }
  return result.join(' | ');
}
