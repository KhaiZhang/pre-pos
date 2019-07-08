'use strict';

function createUpdatedCollection(collectionA, objectB) {
  for(let j=0;j<objectB.value.length;j++){
    for(let i=0;i<collectionA.length;i++){
      if(objectB.value[j]==collectionA[i].key){
        collectionA[i].count--;
        break;
      }
    }
  }
  return collectionA;
}
