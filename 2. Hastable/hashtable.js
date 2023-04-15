class HashTable {
  constructor(size){
    this.data = new Array(size);
  }

  hashMethod(key){
    let hash = 0;
    for(let i= 0; i < key.length; i++){
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }

    return hash;
  }

  set(key,value){
    const address = this.hashMethod(key);
    if(!this.data[address]){
      this.data[address] = [];
    }
    this.data[address].push([key,value]);
    return this.data;
  }

  get(key){
    const address = this.hashMethod(key);
    const currentBucket = this.data[address];

    if(currentBucket){
      for(let i = 0; i < currentBucket.length; i++){
        if(currentBucket[i][0] === key){
          return currentBucket[i][1];
        }
      }
    }
    
    return undefined;
  }

  delete(key){
    const address = this.hashMethod(key);
    const currentBucket = this.data[address];

    if(currentBucket){
      for(let i = 0; i < currentBucket.length; i++){
        if(currentBucket[i][0] === key){
          let deletedSpace = currentBucket[i];
          delete currentBucket[i];
          currentBucket.splice(i,1);
          return deletedSpace;
        }
      }
    }
  }

  getAllKeys(){
    return this.data.flat().map(([name]) => name);
  }

}

const myHashTable = new HashTable(50);
myHashTable.set("Viky",1992);
myHashTable.set("Pam",1993);
myHashTable.set("Yeny",1990);