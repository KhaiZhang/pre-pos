'use strict';

function countSameElements(collection) {
  var result=[];
  for(let i=0;i<collection.length;i++){
    var split=null;
    var index=true;
    if(collection[i].length!=1){
      split=collection[i].split(/-/);
      split[1]=parseInt(split[1]);
    }
    for(let j=0;j<result.length;j++){
      if(split!=null&&result[j].key==split[0]){
          result[j].count+=split[1];
          index=false;
          break;
      }
      else{
        if(collection[i]==result[j].key){
          result[j].count++;
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
        result.push(obj);
      }
      else{
        let obj={
          key:collection[i],
          count:1
        }
        result.push(obj);
      }
    }
  }
  return result;
}
