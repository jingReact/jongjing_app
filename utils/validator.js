
export function strLength(val) {
  var len = 0;
  for (var i = 0; i < val.length; i++) {
  if (val[i].match(/[^\x00-\xff]/ig) != null) 
  len += 2;
  else
  len += 1;
  };
  return len;
  }

  export function numberLength(val) {
    console.log(val.length,888);
    let a=typeof(parseInt(val))
      if(a=='number') { 
         if(val.length !=10){
          return false
         }else{ 
          return  true
        }
      }else return false
    }