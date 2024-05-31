function findLargestElement(numbers) {
  // Check if the array is empty
  if (numbers.length === 0) {
    return undefined; // Return undefined for an empty array
  }

  let largest = numbers[0]; // Assume the first element is the largest

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > largest) {
      largest = numbers[i]; // Update largest if the current element is greater
    }
  }

  return largest;
}

module.exports = findLargestElement;
