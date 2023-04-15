class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class Queue{
  constructor(){
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  peek() {
    return this.first;
  }

  enqueue(value) {
    const newNode = new Node(value);
    if(this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    }else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;

    return this;
  }

  dequeue() {
    if(!this.first){
      return null;
    }

    if(this.first === this.last){
      this.last = null;
    }

    this.first = this.first.next;
    this.length--;

    return this;
  }
  
}

const myQueue = new Queue();
console.log("Enqueue-1: ",myQueue.enqueue(2));
console.log("Enqueue-2: ",myQueue.enqueue(5));
console.log("Enqueue-3: ",myQueue.enqueue(7));
console.log("Peek: ",myQueue.peek());
console.log("Dequeue: ",myQueue.dequeue());
