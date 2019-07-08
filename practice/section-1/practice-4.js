'use strict';

function collectSameElements(collectionA, objectB) {
  var result=[];
  var values=objectB.value;
  for(let i=0;i<collectionA.length;i++){
    for(let j=0;j<values.length;j++){
      if(collectionA[i].key==values[j]){
        result.push(values[j]);
      }
    }
  }
  return result;
}
