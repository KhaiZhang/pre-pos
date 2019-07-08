'use strict';

function createUpdatedCollection(collectionA, objectB) {
  var collectionC=[];
  for(let i=0;i<collectionA.length;i++){
    var index=true;
    for(let j=0;j<collectionC.length;j++){
      if(collectionA[i]==collectionC[j].key){
        collectionC[j].count++;
        index=false;
        break;
      }
    }
    if(index){
      let obj={
        key:collectionA[i],
        count:1
      }
      collectionC.push(obj);
    }
  }
  for(let j=0;j<objectB.value.length;j++){
    for(let i=0;i<collectionC.length;i++){
      if(objectB.value[j]==collectionC[i].key){
        let subtraction=parseInt(collectionC[i].count/3);
        collectionC[i].count-=subtraction;
        break;
      }
    }
  }
  return collectionC;
}
