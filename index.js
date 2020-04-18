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

// Pig Latin

function translatePigLatin(str) {
  const vowels = ['a', 'e', 'u', 'i', 'o'];
  let consonants = 0;
  for (let i = 0; i < str.length; ++i) {
    if (!vowels.includes(str[i])) ++consonants;
    else break;
  }
  str = consonants > 0 ? `${str.substring(consonants)}${str.substring(0, consonants)}ay` : `${str}way`;
  return str;
}

console.log(translatePigLatin("consonant") === 'aliforniacay');

// Search and Replace

function myReplace(str, before, after) {
  const matchCase = (first, second) => {
    if (first[0] >= 'A' && first[0] <= 'Z') {
      return second[0].toUpperCase() + second.substring(1);
    }
    return second;
  }
  const index = str.indexOf(before);
  return str.substring(0, index) + matchCase(before, after) + str.substring(index + before.length, str.length);
}

console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped") === 'A quick brown fox leaped over the lazy dog');

// DNA Pairing

function pairElement(str) {
  const pairs = {
    'A': 'T',
    'T': 'A',
    'C': 'G',
    'G': 'C'
  };
  return str.split('').map(ch => [ch, pairs[ch]]);
}

console.log(pairElement("GCG").length === 3);

// Missing letters

function fearNotLetter(str) {
  for (let i = 0; i < str.length; ++i) {
    if (str[i + 1] === undefined) return undefined;
    if (str.charCodeAt(i + 1) - str.charCodeAt(i) > 1) return String.fromCharCode(str.charCodeAt(i) + 1);
  }
}

console.log(fearNotLetter("abce") === 'd');

// Sorted Union

function uniteUnique(arr) {
  return [...arguments].reduce((acc, currArr) => {
    currArr.forEach(elm => {
      if (!acc.includes(elm)) acc.push(elm);
    })
    return acc;
  }, []);
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]).length === 5);

// Convert HTML Entities

function convertHTML(str) {
  const pairs = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&apos;'
  };

  return str.split('').map(ch => pairs[ch] ? pairs[ch] : ch).join('');
}

console.log(convertHTML("Dolce & Gabbana") === 'Dolce &amp; Gabbana');

// Sum All Odd Fibonacci Numbers

function sumFibs(num) {
  if (num === 1 || num === 2) return 2;

  let prev = 2;
  let prevPrev = 1;

  let totalOds = 2; // 1 + 1

  for (let i = 2; i <= num; i = prev + prevPrev) {
    const temp = prev;
    prev = prevPrev + prev;
    prevPrev = temp;
    if (prev % 2 !== 0) totalOds += prev;
  }
  return totalOds;
}

console.log(sumFibs(4) === 5);

// Sum All Primes

function sumPrimes(num) {
  const isPrime = n => {
    for (let i = 2, s = Math.sqrt(n); i <= s; i++)
      if (n % i === 0) return false;
    return n > 1;
  }
  let total = 0;
  for (let i = 2; i <= num; ++i) {
    if (isPrime(i)) total += i;
  }
  return total;
}

console.log(sumPrimes(10) === 17);

// Smallest Common Multiple

function smallestCommons(arr) {
  const isPrime = n => {
    for (let i = 2, s = Math.sqrt(n); i <= s; i++)
      if (n % i === 0) return false;
    return n > 1;
  }
  const findPower = (n, prime) => {
    let power = 0;
    while (n % prime === 0) {
      n /= prime;
      power++;
    }
    return power;
  }
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  const primeDividers = {};
  for (let i = min; i <= max; ++i) {
    if (isPrime(i)) {
      primeDividers[i] = primeDividers[i] ? primeDividers[i] + 1 : 1;
    } else {
      const currDividers = {};
      for (let k = 2, half = i / 2; k <= half; ++k) {
        if (i % k === 0 && isPrime(k)) {
          currDividers[k] = findPower(i, k);
        }
      }
      Object.entries(currDividers).forEach(([prime, amount]) => {
        if (!primeDividers[prime] || amount > primeDividers[prime]) {
          primeDividers[prime] = amount;
        }
      });
    }
  }
  return Object.entries(primeDividers).reduce((acc, [prime, amount]) => acc * Math.pow(prime, amount), 1);
}

console.log(smallestCommons([1, 5]) === 60);

// Drop it

function dropElements(arr, func) {
  const first = arr.find(func);
  if (!first) return [];

  return arr.slice(arr.indexOf(first));
}

console.log(dropElements([1, 2, 3], function (n) { return n < 3; }).length === 3);

// Steamroller

function steamrollArray(arr) {
  const fArr = (elm, fResult = []) => {
    if (!Array.isArray(elm)) fResult.push(elm);
    else elm.forEach(el => fArr(el, fResult));
  }

  const res = [];
  fArr(arr, res);
  return res;
}

console.log(steamrollArray([1, [2], [3, [[4]]]]).length === 4);

// Binary Agents

function binaryAgent(str) {
  return str.split(' ').map(bn => String.fromCharCode(Number.parseInt(bn, 2))).join('');
}

console.log(binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111") === 'Aren\'t bonfires fun!?');


