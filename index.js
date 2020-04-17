// Sum All Numbers in a Range

function sumAll(arr) {
  // n: max, m: min
  // formula: n(n+1)/2 - m(m-1)/2
  const n = Math.max(...arr);
  const m = Math.min(...arr);
  return (n * (n + 1)) / 2 - (m * (m - 1)) / 2;
}

console.log(sumAll([1, 4]) === 10);

// Diff Two Arrays

function diffArray(arr1, arr2) {
  return [...arr1.filter(elm => !arr2.includes(elm)), ...arr2.filter(elm => !arr1.includes(elm))];
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]).length === 5);

// Seek and Destroy

function destroyer(arr) {
  const [, ...rest] = arguments;
  return arr.filter(elm => !rest.includes(elm));
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3).length === 2);

// Wherefore art thou

function whatIsInAName(collection, source) {
  return collection.filter(elm => Object.entries(source).every(([key, val]) => elm[key] === val));
}

console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }).length === 1);

// Spinal Tap Case

function spinalCase(str) {
  const isLower = ch => ch >= "a" && ch <= "z";
  const isUpper = ch => ch >= "A" && ch <= "Z";
  let words = [];
  let word = '';
  str.split('').forEach(ch => {
    if (isLower(ch)) {
      word += ch;
    } else if (isUpper(ch)) {
      if (word.length === 0) {
        word += ch.toLowerCase();
      } else {
        // got new word
        words.push(word);
        word = ch.toLowerCase();
      }
    } else {
      // got new word
      words.push(word);
      word = ''
    }
  });
  words.push(word);
  console.log({ result: words.join('-') })
  return words.join('-');
}

console.log(spinalCase('This Is Spinal Tap') === 'this-is-spinal-tap');