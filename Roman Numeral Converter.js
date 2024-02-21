function convertToRoman(num) {
    let string=num.toString();
     let mulnum=[];
     for(let i=0;i<string.length;i++){
       if(parseInt(string[i])===0){
         continue;
       }
       else{
         mulnum.push(parseInt(string[i]));
       }
       
     }
   
     let i=0;
     let romannumber="";
     
     while(num!=0){
       if(num>=1000){
         num=num-(1000);
         console.log(num);
         romannumber+="M";
            
       }
       else if(num>=900){
         num=num-(900);
         console.log(num);
         romannumber+="CM";
       }
       else if(num>=500){
         num=num-(500);
         console.log(num);
         romannumber+="D";
       }
       else if(num>=400){
         num=num-(400);
         console.log(num);
         romannumber+="CD";
       }
       else if(num>=100){
         num=num-(100);
         console.log(num);
         romannumber+="C"; 
       }
       else if(num>=90){
         num=num-(90);
         console.log(num);
         romannumber+="XC";
       }
       else if(num>=50){
         //console.log(mulnum[i])
         num=num-50;
         console.log(num);
         romannumber+="L";
       }
       else if(num>=40){
         num=num-40;
         console.log(num);
         romannumber+="XL";
     
       }
       else if(num>=10){
         num=num-(10);
         console.log(num);
         romannumber+="X";
       
       }
       else if(num>=9){
         num=num-9;
         romannumber+="IX";
       }
       else if(num>=5){
         num=num-(5);
         romannumber+="V";
         
       }
       else if(num==4){
         num=num-4;
         romannumber+='IV';
       }
       else if(num>=1){
         num=num-1
         romannumber+="I";  
       }
       i++;
     }
    return romannumber;
   }
   
   console.log(convertToRoman(3999));