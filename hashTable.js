class hashTable{
  constructor(size=53){
    this.keyMap = new Array(size);
  }
  hash(key){
    var total =0;
    var prime =31;
    for(var i=0; i<Math.min(key.length,100);i++){
      var char = key[i];
      var value = char.charCodeAt(0)-96;
      total = (total*prime+value)%this.keyMap.length;
    }
    return total;
  }
  set(key,value){
    var index = this.hash(key);
    if(!this.keyMap[index]){
      this.keyMap[index]=[];
    }
    this.keyMap[index].push([key,value]);
  }
  get(key){
    var index = this.hash(key);
    if(this.keyMap[index]){
      for(var i=0; i<this.keyMap[index].length;i++){
        if(this.keyMap[index][i][0]==key){
          return this.keyMap[index][i][1]
        }
      }
    }
    return undefined;
  }
  keys(){
    var keysarr=[];
    for(var i=0;i<this.keyMap.length;i++){
      if(this.keyMap[i]){
        for(var j=0;j<this.keyMap[i].length;j++){
          if(!keysarr.includes(this.keyMap[i][j][0])){
          keysarr.push(this.keyMap[i][j][0])
      }
    }
    }
    }
    return keysarr;
  }
  values(){
    let valuesArr = [];
    for(let i = 0; i < this.keyMap.length; i++){
      if(this.keyMap[i]){
        for(let j = 0; j < this.keyMap[i].length; j++){
          if(!valuesArr.includes(this.keyMap[i][j][1])){
            valuesArr.push(this.keyMap[i][j][1])
          }
        }
      }
    }
    return valuesArr;
  }

}

var ht = new hashTable(271);



ht.set("musti","sonia");
ht.set("ibbi","preeti");
console.log(ht.keys());
