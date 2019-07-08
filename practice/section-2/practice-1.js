'use strict';

function countSameElements(collection) {
    var result=[];
    for(let i=0;i<collection.length;i++){
      var index=true;
      for(let j=0;j<result.length;j++){
        if(collection[i]==result[j].key){
          result[j].count++;
          index=false;
          break;
        }
      }
      if(index){
        let obj={
          key:collection[i],
          count:1
        }
        result.push(obj);
      }
    }
    return result;
}
