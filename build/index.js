"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NumbersCollection_1 = require("./NumbersCollection");
const CharactersCollection_1 = require("./CharactersCollection");
const LinkedList_1 = require("./LinkedList");
const numbersArr = new NumbersCollection_1.NumbersCollection([329, 3, 5, 674, 2342, 25452, 212, 4562, 23]);
numbersArr.sort();
console.log(numbersArr.data);
const characters = new CharactersCollection_1.CharctersCollection('Xaabyg');
characters.sort();
console.log(characters.data);
const linkedList = new LinkedList_1.LinkedList();
linkedList.add(100);
linkedList.add(17);
linkedList.add(31);
linkedList.add(5);
linkedList.add(3);
linkedList.add(22);
linkedList.sort();
linkedList.print();
