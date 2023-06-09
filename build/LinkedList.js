"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = void 0;
const Sorter_1 = require("./Sorter");
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class LinkedList extends Sorter_1.Sorter {
    constructor() {
        super(...arguments);
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    add(number) {
        const newNode = new Node(number);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            this.length++;
        }
        else {
            this.tail.next = newNode;
            this.tail = newNode;
            this.length++;
        }
    }
    at(index) {
        if (!this.head) {
            throw new Error("Index out of bounds");
        }
        let counter = 0;
        let current = this.head;
        while (current) {
            if (counter === index) {
                return current;
            }
            counter++;
            current = current.next;
        }
        throw new Error('Index out of bounds');
    }
    compare(leftIndex, rightIndex) {
        if (!this.head) {
            throw new Error('List is empty');
        }
        return this.at(leftIndex).data > this.at(rightIndex).data;
    }
    swap(leftIndex, rightIndex) {
        const leftNode = this.at(leftIndex);
        const rightNode = this.at(rightIndex);
        const temp = leftNode.data;
        leftNode.data = rightNode.data;
        rightNode.data = temp;
    }
    print() {
        if (!this.head) {
            return;
        }
        let current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }
}
exports.LinkedList = LinkedList;
