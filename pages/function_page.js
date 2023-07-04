//delete an array//
export function deleteArray(array){
    if(array.length>0){
      return array.splice(0, array.length)
    }
    else{
      return 'error: array is empty';
    }
  };
