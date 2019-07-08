'use strict';

function createUpdatedCollection(collectionA, objectB) {
  var collectionC=[];
  for(let i=0;i<collectionA.length;i++){
    var split=null;
    var index=true;
    if(collectionA[i].length!=1){
      split=collectionA[i].split(/-/);
      split[1]=parseInt(split[1]);
    }
    for(let j=0;j<collectionC.length;j++){
      if(split!=null&&collectionC[j].key==split[0]){
        collectionC[j].count+=split[1];
        index=false;
        break;
      }
      else{
        if(collectionA[i]==collectionC[j].key){
          collectionC[j].count++;
          index=false;
          break;
        }
      }
    }
    if(index){
      if(split!=null){
        let obj={
          key:split[0],
          count:split[1]
        }
        collectionC.push(obj);
      }
      else{
        let obj={
          key:collectionA[i],
          count:1
        }
        collectionC.push(obj);
      }
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
