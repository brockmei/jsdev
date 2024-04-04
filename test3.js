console.log("Running test3.js");

const hoisting = () => {
  let hoistness = "Most Hoistness";
  return () => {
    return hoistness;
  };
};

let theHoist = hoisting();
console.log(theHoist());

const cloneThemAll = () => {
  let arr = ["a", "b", "c"];
  let obj1 = { a: 1, chris: "brockmeier", newJob: "comcast" };
  let newObj = Object.assign([], arr); //Array Deep Clone
  let newObjClone = { ...obj1 }; //Deep Clone of object type
  let newObj2 = JSON.parse(JSON.stringify(arr)); //Array Deep Clone
  let newObj3 = arr; //Will not work, reverence to arr
  arr.push("f");

  console.log(newObj);
  console.log(newObj2);
  console.log(newObj3);
  console.log(newObjClone);
};

console.log(cloneThemAll());

const countVowels = (str) => {
  let vowels = ["a", "e", "i", "o", "u"];
  let count = str.split("").reduce((acc, el) => {
    return vowels.includes(el) ? (acc = acc + 1) : acc;
  }, 0);
  return count;
};
console.log(countVowels("hello and Goodbye"));

const vowelCount = (str) => {
  let vowels = ["a", "e", "i", "o", "u"];
  let vowelObj = str.split("").reduce((acc, el) => {
    if (acc[el] === undefined) {
      acc[el] = 1;
    } else {
      acc[el] += 1;
    }
    return acc;
  }, {});
  console.log(vowelObj);

  let maxVal = 0;
  let maxEntry = "";
  for (let keys in vowelObj) {
    if (vowelObj[keys] > maxVal) {
      maxVal = vowelObj[keys];
      maxEntry = keys;
    }
  }
  console.log(
    "Most occuring letter is " + maxEntry + " with an occurence of " + maxVal
  );
};

console.log(vowelCount("hello and Goodbye"));

//Reverse word in each sentice
const reverseWordInEachSentence = (str) => {
  let wordArr = str.split(" ");
  return wordArr.reduce((acc, el) => {
    return acc + el.split("").reverse().join("") + " ";
  }, "");
};
console.log(reverseWordInEachSentence("welecome to this Javascript guide!"));

const users = [
  {
    id: 1,
    name: "Jack Black",
    isActive: "true",
    age: 33,
  },
  {
    id: 3,
    name: "Paul Revere",
    isActive: "false",
    age: 22,
  },
  {
    id: 2,
    name: "Joe Jinx",
    isActive: "true",
    age: 40,
  },
];

const filterActiveUsers = (arr) => {
  return arr.filter((user) => (user.isActive === "true" ? user : ""));
};
console.log(JSON.stringify(filterActiveUsers(users)));

const getUserName = (arr) => {
  return arr.map((user) => user.name);
};
console.log(JSON.stringify(getUserName(users)));

const ageAsceding = (arr) => {
  return arr.sort((s1, s2) => (s1.age > s2.age ? 1 : -1));
};
console.log(JSON.stringify(ageAsceding(users)));

const allOfIt = (arr) => {
  return getUserName(ageAsceding(filterActiveUsers(arr)));
};
console.log(JSON.stringify(allOfIt(users)));

//Write a a function which get's an array and an element and returns an array with this element at the end.
const addToArray = (arr, el) => {
  return [...arr, el];
};
console.log(addToArray(["a", "b", "c"], "d"));

const doesUserExist = (userList, name) => {
  return userList.map((entry) => entry.name).includes(name);
};
console.log(doesUserExist(users, "chris"));
console.log(doesUserExist(users, "Jack Black"));

//Remove All Duplicates in the Array
const removeDuplicates = (arr) => {
  return Array.from(new Set(arr));
};
console.log(removeDuplicates(["a", "b", "a", "c", "f"]));

const sortMyNumbers = (arr) => {
  return arr.sort((a, b) => (a > b ? 1 : -1));
};
console.log(sortMyNumbers([4, 33, 12, 9, 4]));

const sortUsersByName = (userList) => {
  let userNames = userList.map((entry) => entry.name);
  //   console.log(userNames);
  return userNames.sort((a, b) => {
    a.toLowerCase().split(" ")[1] > b.toLowerCase().split(" ")[1] ? 1 : -1;
  });
};
console.log(sortUsersByName(users));

async function getUrl() {
  let response = await fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
}
//getUrl();

class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  eatFood() {
    return `${this.name} is eating`;
  }
  getName() {
    return this.name;
  }
}

class Dog extends Animal {
  constructor(name, age) {
    super(name, age);
  }
  shitsAlltheTime() {
    return `${this.name} is shitting everywhere`;
  }
}

let dog = new Dog("Rocky", 8);
console.log(dog.eatFood());
console.log(dog.shitsAlltheTime());

async function getURL2() {
  let response = await fetch("https://jsonplaceholder.typicode.com/tods/2")
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log("Error"));
}
//getURL2();

const travereseUsers = (arr) => {
  arr.forEach((user) =>
    Object.entries(user).forEach(([key, value]) =>
      console.log(`${key}: ${value}`)
    )
  );
};

travereseUsers(users);

const createObject = () => {
  console.log("output for create object");
  let items = "key1:value1;key2:value2;key3:value3";
  let itemsArray = items.split(";");
  let finalItems = itemsArray.map((item) => item.split(":"));
  console.log(JSON.stringify(finalItems));
  let finalResult = Object.fromEntries(finalItems);
  console.log(finalResult);
};
createObject();

//reverse words in sentece
const reverseWordInEachSentence2 = (str) => {
  let words = str.split(" ");
  return words.reduce((acc, el) => {
    return (acc += el.split("").reverse().join("") + " ");
  }, "");
};
console.log(reverseWordInEachSentence2("hello worlds"));

const removeDuplicates2 = (arr) => {
  return arr.reduce((acc, el) => {
    if (!acc.includes(el)) {
      acc.push(el);
    }
    return acc;
  }, []);
};

console.log(removeDuplicates2(["a", "b", "a", "c", "f"]));

const vowelCount2 = (str) => {
  console.log("in vowel count 2");
  let vowels = ["a", "e", "i", "o", "u"];
  let strArr = str.split("");
  let vowelCountObj = strArr.reduce((acc, el) => {
    if (vowels.includes(el)) {
      console.log("working with " + el);
      if (acc[el] === undefined) {
        acc[el] = 1;
      } else {
        acc[el] += +1;
      }

      console.log(acc);
    }
    return acc;
  }, {});

  let maxCount = 0;
  let maxCharacter = "";
  for (let key in vowelCountObj) {
    if (vowelCountObj[key] > maxCount) {
      maxCount = vowelCountObj[key];
      maxCharacter = key;
    }
  }
  return "max character is " + maxCharacter + " with a count of " + maxCount;
};
console.log(vowelCount2("helloooo"));

// const vowelCount = (str) => {
//   let vowels = ["a", "e", "i", "o", "u"];
//   let vowelObj = str.split("").reduce((acc, el) => {
//     if (acc[el] === undefined) {
//       acc[el] = 1;
//     } else {
//       acc[el] += 1;
//     }
//     return acc;
//   }, {});
//   console.log(vowelObj);

//   let maxVal = 0;
//   let maxEntry = "";
//   for (let keys in vowelObj) {
//     if (vowelObj[keys] > maxVal) {
//       maxVal = vowelObj[keys];
//       maxEntry = keys;
//     }
//   }
//   console.log(
//     "Most occuring letter is " + maxEntry + " with an occurence of " + maxVal
//   );

const filterIsActive = (arr) => {
  return arr.filter((entry) => (entry.isActive === "true" ? entry : ""));
};
console.log(filterIsActive(users));

// const filterActiveUsers = (arr) => {
//   return arr.filter((user) => (user.isActive === "true" ? user : ""));
// };

const isPalindrome = (str) => {
  return str === str.split("");
};
// Write a function that returns the longest palindrome in a given string.
// Ex: "thisisaracecar" -> "racecar", "abcdefg" -> "a"

const largestPalindrome = (str) => {
  let maxLength = 0;
  let maxPalindrome = "";
  let originalArr = str.split("");
  for (let i = 0; i < originalArr.length - 1; i++) {
    //index i initialCursor
    for (let k = originalArr.length - 1; k >= 0 && k >= i; k--) {
      let str2 = originalArr.splice(i, k);
      if (isPalindrome(str2)) {
        if (str2.length() > maxLegth) {
          maxLength = str2.length();
          maxPalindrome = str2;
        }
      }
    }
  }
  return maxPalindrome;
};

console.log(largestPalindrome("thisisisaracecar"));
