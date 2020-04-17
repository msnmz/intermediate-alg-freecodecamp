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
