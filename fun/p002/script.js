function mergeArrays(arr1, arr2) {
  return [...arr1, ...arr2];
}

function removeDuplicates(...args) {
  return args.filter((value, index, array) => array.indexOf(value) === index);
}

function getEvenNumbers(array) {
  return array.filter((num) => num % 2 === 0);
}

function calculateAverage(array) {
  return array.reduce((acc, value) => acc + value, 0) / array.length;
}

function capitalizeFirstLetter(string) {
  const result = string
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1));
  return result.join(" ");
}

function createCalculator(number) {
  let acc = number;
  return {
    add(num) {
      acc += num;
    },
    subtract(num) {
      acc -= num;
    },
    getNumber() {
      return acc;
    },
  };
}

function createGreeting(username) {
  return `Hello, ${username}!`;
}

function createPasswordChecker(length) {
  const passLength = length;
  return function (string) {
    return string.length >= passLength;
  };
}

function sumDigits(number) {
  if (number < 10) {
    return number;
  } else {
    return (number % 10) + sumDigits(Math.trunc(number / 10));
  }
}


