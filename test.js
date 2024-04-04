console.log("hello world");
//Closure
const hoist1 = () => {
  const hoistness = "hoistness";
  return () => {
    return hoistness;
  };
};
const getSecret = hoist1();

console.log("working the hoist");
console.log(getSecret());

//Clone
let obj = { a: 1, b: 2, c: 3 };
let obj2 = { ...obj }; // or

let obj3 = Object.assign({}, obj);

obj2 = { ...obj2, d: 4 };
console.log(obj2);
console.log(obj);
console.log(obj3);

//count vowels inside a string
const findVowels = (input) => {
  const vowels = ["a", "e", "i", "o", "u"];
  return input
    .toLowerCase()
    .split("")
    .reduce((acc, el) => (vowels.includes(el) ? acc + 1 : acc), 0);
};
console.log(findVowels("addgregwo"));

//Reverse word in each sentice
const str = "welecome to this Javascript guide!";
const reverseString = (str) => {
  const arr = str.split(" ");
  console.log("arr", arr);
  const newSentence = [];
  arr.forEach((el) => newSentence.push(el.split("").reverse().join("")));
  console.log("arr", newSentence);
  return newSentence.join(" ");
};
console.log(reverseString(str));

//Define a function that takes an array of strings, and returns the most
//commonly occurring string in that array;

// const findCommonWord = (commonStrings) => {
//   const mostCommon = {};
//   strings.forEach((el) => {
//     if (mostCommon[el] === undefined) {
//       mostCommon[el] = 1;
//     } else {
//       mostCommon[el]++;
//     }
//   });

//   let maxEntry;
//   let maxValue = 0;
//   for (common in mostCommon) {
//     if (mostCommon[common] > maxValue) {
//       maxValue = mostCommon[common];
//       maxEntry = common;
//     }
//   }

//   const mapping = commonStrings.reduce((acc, el) => {
//     acc[el] = acc[el] ? acc[el] + 1 : 1;
//     return acc;
//   }, {});
//   console.log("mapping is ", mapping);
//   console.log("object.entries is ", Object.entries(mapping));

//   Object.entries(mapping).reduce(
//     (acc, el) => {
//       el[1] > acc[1] ? el : acc;
//     },
//     [0]
//   );

//   return maxEntry;
// };

// console.log(findCommonWord(["a", "b", "c", "a"]));

//input : [1,2,4,3,2,1,3]
//output: [1,2,3]

// findAllDuplicates = (arr) => {
//   let mapping = arr.reduce((acc, el) => {
//     acc[el] = acc[el] ? acc[el] + 1 : 1;
//   }, {});
//   console.log("mapping is " + mapping);
// };
// console.log(findAllDuplicates([1, 2, 4, 3, 2, 1, 3]));

// const findVowels2 = (val) => {
//   const vowels = ["a", "e", "i", "o", "u"];
//   return val.split("").reduce((acc, el) => {
//     vowels.includes(el) ? acc[el] + 1 : acc;
//   }, []);
// };
// console.log(findVowels2("addgregwo"));

const reverseStringArr = (arr) => {
  return arr.reverse();
};

console.log(reverseStringArr(["a", "e", "o", "u"]));

const findVowels2 = (str) => {
  const vowels = ["a", "e", "i", "o", "u"];
  // return str.split("").reduce((acc, el) => {
  //   if (acc[el] === undefined) {
  //     acc[el] = 1;
  //   } else {
  //     acc[el] += 1;
  //   }
  //   return acc;
  // }, {});
  // console.log("obj", newObj);

  // return str.split("").reduce((acc, el) => {
  //   if (vowels.includes(el)) {
  //     console.log(acc);
  //     if (acc[el] === undefined) {
  //       console.log("Trying to push " + el);
  //       acc.push(el);
  //     }
  //     console.log("acc", acc);
  //   }
  //   return acc;
  // }, []);
};

console.log(findVowels2("addgregwo"));
