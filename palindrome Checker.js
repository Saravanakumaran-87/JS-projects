function palindrome(str) {
    let reverse=[];
    let reg=/[^0-9a-zA-Z]/i;
    
    for(let i=0;i<str.length;i++){
      
      if(reg.test(str[i])){
        continue;
      }
      else{
        reverse.unshift(str[i].toLowerCase());
      }
      
    }
    
    let straight=[];
    for(let j=0;j<str.length;j++){
      
      if(reg.test(str[j])){
        continue;
      }
      else{
        straight.push(str[j].toLowerCase());
      }
      
    }
    
    
    if(straight.join("")===reverse.join("")){
      return(true);
    }
    else{
      return(false);
    }
  }
  
  console.log(palindrome("five|\_/|four"));