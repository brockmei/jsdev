const { resolve } = require("path");

const findAllDuplicates = (arr) => {
  let duplicates = [];
  let entries = {};
  arr.forEach((entry) => {
    if (entries[entry] === undefined) {
      entries[entry] = 1;
    } else {
      entries[entry] += 1;
    }
  });
  console.log(entries);
  for (entry in entries) {
    if (entries[entry] > 1) {
      duplicates.push(entry);
    }
  }
  return duplicates;
  //   entries.forEach((entry) => {
  //     if
  //   })
};
//   let mapping = arr.reduce((acc, el) => {
//     return acc[el] == undefined ? acc[el] : acc[el] + 1;
//   }, {});
//   console.log("mapping is " + mapping);
//   return mapping;
// };
console.log(findAllDuplicates(["a", "b", "c", "b"]));

// const findVowels = (val) => {
//   const vowels = ["a", "e", "i", "o", "u"];
//   console.log(val.split(""));
//   let retVal = val.split("").reduce((acc, el) => {
//     console.log("Processing el " + el);
//     console.log(vowels.contains(el) ? el : "");
//   }, []);
//   return retVal;
// };
// console.log(findVowels("addgregwo"));

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

const getUserName = (userList) => {
  return userList.map((entry) => entry.name);
};

const getActiveUsers = (userList) => {
  return userList.filter((user) => (user.isActive === "true" ? user : ""));
};

const sortUsersByAscAge = (userList) => {
  return userList.sort((user1, user2) => (user1.age > user2.age ? 1 : -1));
};

const getActiveNamesInAscOrderOfActive = (userList) => {
  return getUserName(sortUsersByAscAge(getActiveUsers(userList)));
};

console.log(getUserName(users));
console.log(getUserName(getActiveUsers(users)));
console.log(JSON.stringify(sortUsersByAscAge(users)));
console.log(getActiveNamesInAscOrderOfActive(users));

//Write a function which helpt to acheive multiply(a)(b) and returns the product

const multiplyThese = (val1) => {
  return (val2) => {
    return val1 * val2;
  };
};

//Write a a function which get's an array and an element and returns an array with this element at the end.

const pushElementToEndOfArray = (arr, el) => {
  return [...arr, el];
};
console.log(pushElementToEndOfArray(["c", "b", "a"], "f"));

const doesUserExist = (userList, nameQuery) => {
  return userList.map((user) => user.name).includes(nameQuery);
};
console.log(doesUserExist(users, "Jack"));
console.log(doesUserExist(users, "chris"));

//Remove All Duplicates in the Array
const removeDuplicates = (arr) => {
  return arr.reduce((acc, el) => {
    return acc.includes(el) ? acc : [...acc, el];
  }, []);
};
console.log(removeDuplicates(["a", "b", "a", "c", "f"]));

//Sort array of numbers
//
const sortMyNumbers = (arr) => {
  return arr.sort((entry1, entry2) => (entry1 > entry2 ? 1 : -1));
};
console.log(sortMyNumbers([4, 33, 12, 9, 4]));

const sortUsersByName = (userList) => {
  let names = getUserName(userList);
  return names.sort((name1, name2) =>
    name1.split(" ")[1] > name2.split(" ")[1] ? 1 : -1
  );
};
console.log(sortUsersByName(users));

const countVowelsInAString = (str) => {
  vowels = ["a", "e", "o", "i", "u"];
  return str
    .split("")
    .reduce((acc, el) => (vowels.includes(el) ? acc + 1 : acc), 0);
};

console.log(countVowelsInAString("hellobuddy"));

const addToBegin = (arr, el) => {
  return [el, ...arr];
};
console.log(addToBegin([4, 33, 12, 9, 4], 5));
const addToEnd = (arr, el) => {
  return [...arr, el];
};
console.log(addToEnd([4, 33, 12, 9, 4], 5));

const getPrivateVariable = () => {
  let secret = "super duper secret";
  return function () {
    return secret;
  };
};

let getSecret = getPrivateVariable();
// console.log(getSecret());

// //Create a promise that returns after 10 seconds.
// const runPromise = () => {
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Success!");
//     }, 1000);
//   });

//   promise
//     .then((value) => {
//       console.log(value);
//     })
//     .catch((error) => console.log("Error " + error));
// };

// console.log(runPromise());

// const processData = async () => {
//   try {
//     const data = await setTimeout(1000);
//     console.log("Processed: ", data);
//   } catch (error) {
//     console.error("Error ", error);
//   }
// };

// console.log(processData());

const runPromise = () => {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Success");
    }),
      10000;
  });

  promise
    .then((value) => console.log(value))
    .catch((error) => console.error("Error ", error));
};

console.log(runPromise());

const printNumber = (str) => {
  switch (str.toLowerCase()) {
    case "one":
      return 1;
      break;
    case "two":
      return 2;
      break;
    case "three":
      return 3;
      break;
  }
};

console.log(printNumber("two"));

function getRectArea(w, h) {
  if (isNaN(w) || isNaN(h)) {
    throw new Error("Input numbers are not numbers.");
  } else {
    return w * h;
  }
}

function getRectAreaWrapper(w, h) {
  try {
    return getRectArea(w, h);
  } catch (error) {
    console.info("Exception caught");
  }
}

console.log(getRectAreaWrapper(4, 3));

class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  *getSides() {
    yield this.height;
    yield this.width;
    yield this.height;
    yield this.width;
  }
}

const createNewRect = (w, h) => {
  let rect = new Rectangle(w, h);
  return [...rect.getSides()];
};

console.log(createNewRect(1, 3));

class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} speaks`);
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name);
  }
  speak() {
    console.log(`${this.name} barks`);
  }
}

class Cat extends Animal {
  constructor(name) {
    super(name);
  }
  speak() {
    console.log(`${this.name} meow`);
  }
}

console.log(new Dog("Rockey").speak());

const getUniqueSorted = (arr) => {
  let sorted = arr.sort((val1, val2) => (val1 > val2 ? 1 : -1));
  console.log(sorted);
  return Array.from(new Set(sorted));
};

console.log(getUniqueSorted([1, 9, 3, 4, 9, 0, 10, 13, 4]));

const findMaxNumber = (arr) => {
  return arr.reduce((acc, el) => {
    return el > acc ? el : acc;
  }, 0);
};
console.log(findMaxNumber([13, 22, 3, 5]));

const findAvg = (arr) => {
  let sum = arr.reduce((acc, el) => (acc = acc + el), 0);
  return sum / arr.length;
};

console.log(findAvg([3, 5, 3, 3, 3, 3, 11]));

const upperCaseFirst = (arr) => {
  let first = arr.shift();
  return [first.toUpperCase(), ...arr];
};
console.log(upperCaseFirst(["s", "t", "a", "r"]));

// const getFields = (userList) => {
//   return userList.map((user) => user.name, user.age);
// };
// console.log(getFields(users));

// const emptyArray = (arr) => {
//     return arr.reduce((acc, el) => )
// }
// console.log(emptyArray(["s", "t", "a", "r"]));

// Array.prototype.flattenArray = function () {
//   let newArray = [];
//   for (let entry of this) {
//     if (Array.isArray(entry)) {
//       newArray = [...newArray, ...flattenArray(entry)];
//     } else {
//       newArray.push(entry);
//     }
//   }
//   return newArray;
// };
// let starArray = ["s", "t", "a", "r", [1, 3], [[3]]];
// console.log(starArray.flattenArray());

//["s", "t", "a", "r", [1, 3], [[3]]]

const findDaysBetweenDates = (date1, date2) => {
  const secondsPerDay = 60 * 60 * 24;
  let before = new Date(date1);
  let after = new Date(date2);
  console.log();

  return (after - before) / secondsPerDay / 1000;
  console.log(before);
};

let date1 = "08/10/2021";
let date2 = "09/11/2021";

console.log(findDaysBetweenDates(date1, date2));

const reverseArray = (arr) => {
  let newArray = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    newArray.push(arr[i]);
  }
  return newArray;
};

const sortYears = (arr) => {
  return arr.sort((year1, year2) => (year1 > year2 ? 1 : -1));
};

console.log(sortYears([1975, 1988, 1919, 1922, 1932, 2000, 2024]));

console.log(reverseArray([1, 2, 3, 4]));

// const getStubHub = () => {
//   var xmlHttp = new XMLHttpRequest();
//   xmlHttp.open(
//     "GET",
//     "https://www.stubhub.com/red-rocks-amphitheatre-event-tickets/venue/4688/",
//     true
//   ); // false for synchronous request
//   xmlHttp.send(null);
//   return xmlHttp.responseText;
// };

//   fetch(
//     "https://www.stubhub.com/red-rocks-amphitheatre-event-tickets/venue/4688/"
//   )
//     .then((response) => {
//       console.log("stubhub for the win");
//     })
//     .error((error) => {
//       console.log("Error when finding stubhub");
//     });
// };

// console.log(getStubHub());

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("g");

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(data) {
    let newNode = new Node(data);

    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(node, newNode) {
    if (newNode.val < node.val) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  search(node, data) {
    if (node.val === data.val) {
      return node;
    } else if (node.val < data.val) {
      return search(node.left, data);
    } else if (node.val > data.val) {
      return search(node.right, data);
    } else {
      return null;
    }
  }

  remove(node, key) {
    if (node === null) {
      return null;
    } else {
      if (key < node.val) {
        node.left = this.remove(node.left, key);
        return node;
      } else if (key > node.val) {
        node.right = this.remove(node.right, key);
        return node;
      } else {
        if (node.left === null && node.right === null) {
          node = null;
          return node;
        }

        if (node.left === null) {
          node = node.right;
          return val;
        }
        if (node.right === null) {
          node = node.left;
        }

        var aux = this.findMinNode(node.right);
        node.val = aux.val;

        node.right = this.remove(node.right, aux.data);
        return node;
      }
    }
  }

  findMinNode(node) {
    if (node.left !== null) {
      return this.findMinNode(node.left);
    } else {
      return node;
    }
  }

  inOrder(node) {
    if (node !== null) {
      this.inOrder(node.left);
      console.log(node.val);
      this.inOrder(node.right);
    }
  }

  getRootNode() {
    if (this.root !== null) {
      return this.root;
    } else {
      return null;
    }
  }

  preOrder(node) {
    if (node !== null) {
      console.log(node.data);
      this.preOrder(node.left);
      this.preOrder(node.right);
    }
  }
}

var BST = new BinarySearchTree();

// Inserting nodes to the BinarySearchTree
BST.insert(15);
BST.insert(25);
BST.insert(10);
BST.insert(7);
BST.insert(22);
BST.insert(17);
BST.insert(13);
BST.insert(5);
BST.insert(9);
BST.insert(27);

//          15
//         /  \
//        10   25
//       / \   / \
//      7  13 22  27
//     / \    /
//    5   9  17

console.log("rootNode is ", BST.getRootNode());
console.log("inOrder is ", BST.inOrder(BST.getRootNode()));
console.log("removing  ", BST.remove(BST.getRootNode(), 15));
console.log("inOrder is ", BST.inOrder(BST.getRootNode()));

const createAnimal = (type, name) => {
  if (type === "Dog") {
    return new Dog(name);
  } else if (type === "Cat") {
    return new Cat(name);
  }
};

console.log(createAnimal("Dog", "Rockey").speak());
console.log(createAnimal("Cat", "Boots").speak());

const printObjects = (userList) => {
  userList.forEach((entry) => console.log(entry));
};
console.log(printObjects(users));

const getIndividualPropertes = (userList) => {
  userList.forEach((entry) => {
    console.log(
      Object.entries(entry).forEach(([key, value]) => {
        console.log(key, value);
      })
    );
  });
};
console.log(getIndividualPropertes(users));

const makeObject = (str) => {
  let objectArr = str.split(";");
  console.log(objectArr);
  let finalItems = objectArr.map((item) => item.split(":"));
  console.log(finalItems);
  let myObj = Object.fromEntries(finalItems);
  console.log("object array is ", myObj);
  Object.entries(myObj).forEach(([key, value]) =>
    console.log(`${key}: ${value}`)
  );
};

console.log(makeObject("key1:value1;key2:value2;key3:value3"));

const removeDuplicates2 = (arr) => {
  return arr.reduce((acc, el) => {
    return acc.includes(el) ? acc : [...acc, el];
  }, []);
};
console.log(removeDuplicates2(["a", "b", "a", "c", "f"]));

const runPromise2 = () => {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Success");
    }),
      10000;
  });

  promise
    .then((value) => console.log(value))
    .catch((error) => console.log("error"));
};
console.log(runPromise());

async function g() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("done!"), 1000);
  });

  let result = await promise;
  console.log(result);
}
g();

async function showAvatar() {
  let response = await fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => response.json())
    .then((data) => {
      for (var key in data) {
        console.log(key + ":" + data[key]);
      }
    })
    .catch((err) => console.log(err));
}

showAvatar();
