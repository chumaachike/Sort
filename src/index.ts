import { NumbersCollection } from "./NumbersCollection";
import {CharctersCollection} from "./CharactersCollection";
import { LinkedList } from "./LinkedList";


const numbersArr = new NumbersCollection([329,3,5,674,2342,25452,212,4562,23]);
numbersArr.sort();
console.log(numbersArr.data);

const characters = new CharctersCollection('Xaabyg');
characters.sort();
console.log(characters.data);

const linkedList = new LinkedList();
linkedList.add(100);
linkedList.add(17);
linkedList.add(31);
linkedList.add(5);
linkedList.add(3);
linkedList.add(22);
linkedList.sort();
linkedList.print();
