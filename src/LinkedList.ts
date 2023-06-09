import { Sorter } from "./Sorter";
class Node {
  next: Node | null = null;
  constructor(public data: number){
  }
}

export class LinkedList extends Sorter {
  head: Node | null = null;
  tail: Node | null = null;
  length: number = 0;
  add (number: number):void{
    const newNode = new Node(number);
    if(!this.head){
      this.head = newNode;
      this.tail = newNode;
      this.length++;
    }else{
      this.tail!.next = newNode;
      this.tail = newNode;
      this.length++
    }
  }
  at (index: number): Node{
    if (!this.head){
      throw new Error("Index out of bounds")
    }
    let counter = 0;
    let current: Node | null = this.head;
    while (current){
      if (counter === index){
        return current;
      }
      counter++
      current = current.next;
    }
    throw new Error('Index out of bounds');
  }
  compare (leftIndex: number, rightIndex: number):boolean{
    if (!this.head){
      throw new Error ('List is empty');
    }
    return this.at(leftIndex).data > this.at(rightIndex).data;
  }

  swap (leftIndex: number, rightIndex: number){
    const leftNode = this.at(leftIndex);
    const rightNode = this.at(rightIndex);

    const temp = leftNode.data;
    leftNode.data = rightNode.data;
    rightNode.data = temp;
  }

  print (): void {
    if (!this.head){
      return;
    }

    let current: Node | null = this.head;
    while (current){
      console.log(current.data);
      current = current.next
    }
  }
}