// let singlyLinkedList = {
//   head: {
//     value: 1,
//     next: {
//       value: 2,
//       next: {
//         value: 3,
//         next: {
//           value: 4,
//           next: {
//             value: null
//           }
//         }
//       }
//     }
//   }
// }

class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class MySinglyLinkedList {
  constructor(value){
    this.head = {
      value: value,
      next: null
    }

    this.tail = this.head;

    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);

    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value) {
    const newNode = new Node(value);

    newNode.next = this.head;
    this.head = newNode;
    this.length++;

    return this;
  }

  insert(index, value){
    if(index >= this.length){
      return this.append(value);
    }

    const newNode = new Node(value);
    const firstPointer = this.getTheIndex(index -1);
    const holdingPointer = firstPointer.next;
    firstPointer.next = newNode;
    newNode.next = holdingPointer;

    this.length++;

    return this;
  }

  getTheIndex(index) {
    let counter = 0;
    let currentNode = this.head;

    while(counter != index) {
      currentNode = currentNode.next;
      counter++;
    }

    return currentNode;
  }

}

let mylinkedlist = new MySinglyLinkedList(5);
console.log(mylinkedlist);


mylinkedlist.append(10);
console.log("append",mylinkedlist);

mylinkedlist.append(9);
console.log("append",mylinkedlist);

mylinkedlist.prepend(7);
console.log("prepend",mylinkedlist);

mylinkedlist.insert(3,7);
console.log("insert",mylinkedlist);