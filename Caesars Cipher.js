function rot13(str) {
    let alphabetarray='abcdefghijklmnopqrstuvwxyz';
    let solutionString='';
    let reg=/[^a-zA-z0-9]/;
    let lowerStr=str.toLowerCase();
    let num=0;
    console.log(lowerStr)
    for(let i=0;i<str.length;i++){
      if(reg.test(lowerStr[i])){
        solutionString+=str[i];
      }
      else if(alphabetarray.indexOf(lowerStr[i]>=0)){
        num=alphabetarray.indexOf(lowerStr[i])+13;
        
        if(num>25){
          num=num-26;
          solutionString+=alphabetarray[num];
        }
        else{
          solutionString+=alphabetarray[num];
        }
      }
    }
    return solutionString.toUpperCase();
  }
  
  console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."));