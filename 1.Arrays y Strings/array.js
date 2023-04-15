class MyArray {

  constructor(){
    this.length = 0;
    this.data = {}
  }

  get(index){
    return this.data[index];
  }

  push(item){
    this.data[this.length] = item;
    this.length++;
    return this.data;
  }

  pop() {
    const lastItem = this.data[this.length] -1;
    delete this.data[this.length -1];
    this.length--;
    return lastItem;
  }

  delete(index) {
    const item = this.data[index];
    this.shiftIndex(index);

    return item;
  }

  shiftIndex(index){
    for(let i = index; i < this.length -1; i++){
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }

  shift(){
    
    if (this.length === 0) {
      return undefined;
    }

    //obtengo el primer elemento
    const firstItem = this.data[0];

    // corrijo el numero de indice de cada elemento
    for (let i = 0; i < this.length; i++) {
      this.data[i] = this.data[i + 1];
    }
    // remuevo el ultimo slot que queda con undefined
    delete this.data[this.length - 1];

    // corrijo el largo del array
    this.length--;

    return firstItem;
    
  }

  unshift(item){
    if(!item){
      return this.length;
    }

    if(this.length === 0){
      this.data[0] = item;
      this.length++;
      return this.length;
    }
    
    for(let i = this.length; i > 0; i--){
      this.data[i] = this.data[i - 1];
    }
    
    this.data[0] = item;

    this.length++;
    return this.length;
  }

}

const myArray = new MyArray();
console.log("push",myArray.push(10));
console.log("push",myArray.push("Sebastian"));
console.log("push",myArray.push("Hector"));
console.log("get",myArray.get(0));
// console.log(myArray.pop());
console.log("myArray",myArray);
console.log("delete",myArray.delete(1));
console.log("myArray",myArray);