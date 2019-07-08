'use strict';

function countSameElements(collection) {
  var result=[];
  for(let i=0;i<collection.length;i++){
    var split=null;
    var index=true;
    if(collection[i].length!=1){
      split=collection[i].split(/[- : [ ]/);
      split[1]=parseInt(split[1]);
    }
    for(let j=0;j<result.length;j++){
      if(split!=null&&result[j].name==split[0]){
        result[j].summary+=split[1];
        index=false;
        break;
      }
      else{
        if(collection[i]==result[j].name){
          result[j].summary++;
          index=false;
          break;
        }
      }
    }
    if(index){
      if(split!=null){
        let obj={
          name:split[0],
          summary:split[1]
        }
        result.push(obj);
      }
      else{
        let obj={
          name:collection[i],
          summary:1
        }
        result.push(obj);
      }
    }
  }
  return result;
}
