function checkCashRegister(price, cash, cid) {
    let change=[];
    let due=cash-price;
    let hundred=cid[8][1];
    let twenty=cid[7][1];
    let ten=cid[6][1];
    let five=cid[5][1];
    let one=cid[4][1];
    let quarter=cid[3][1];
    let dime=cid[2][1];
    let nickel=cid[1][1];
    let penny=cid[0][1];
    let i=0;
    
    while(i<cid.length){
      if(due>100 && hundred !==0){
        let money=0;
        while(due!==0 && hundred!==0 && due>=100){
          due=due-100;        
          hundred=hundred-100;
          money+=100;
        }
        change.push(["ONE HUNDRED",money]);
        money=0;
      }
      else if(due>20 && twenty !==0 ){
        let money=0;
        while(due!==0 && twenty!==0 && due>=20){
          due=due-20;
          twenty=twenty-20;
          money+=20;
        }
        change.push(["TWENTY",money]);
        money=0;
      }
      else if(due>10 && ten !==0 ){
        let money=0;
        while(due!==0 && ten!==0 && due>=10){
          due=due-10;
          ten=ten-10;
          money+=10;
        }
        change.push(["TEN",money]);
        money=0;
      }
      else if(due>5 && five !==0 ){
        let money=0;
        while(due!==0 && five!==0 && due>=5){
          due=due-5;
          five=five-5;
          money+=5;
        }
        change.push(["FIVE",money]);
        money=0;
      }
      else if(due>1 && one !==0 ){
        let money=0;
        while(due!==0 && one!==0 && due>=1){
          due=due-1;
          one=one-1;
          money+=1;
        }
        change.push(["ONE",money]);
        money=0;
      }
      else if(due>0.25 && quarter !==0 ){
        let money=0;
        while(due!==0 && quarter!==0 && due>=0.25){
          due=due.toPrecision(2);
          due=due-0.25;
          quarter=quarter-0.25;
          money+=0.25;
        }
        change.push(["QUARTER",money]);
        money=0;
      }
      else if(due>0.1 && dime !==0 ){
        let money=0;
        while(due!==0 && dime!==0 && due>=0.1){
          due=due.toPrecision(2);
          due=due-0.1;
          dime=dime-0.1;
          money+=0.1;
        }
        change.push(["DIME",money]);
        money=0;
      }
      else if(due>0.05 && nickel !==0 ){
        let money=0;
        while(due!==0 && nickel!==0 && due>=0.05){
          due=due.toPrecision(2);
          due=due-0.05;
          nickel=nickel-0.05;
          money+=0.05;
        }
        change.push(["NICKEL",money]);
        money=0;
      }
      else if(due>0.01 && penny !==0 ){
        let money=0;
        while(due!==0 && penny!==0 && due>=0.01){
          due=due.toPrecision(2);
          due=due-0.01;
          penny=penny-0.01;
          money+=0.01;
        }
        change.push(["PENNY",money]);
        money=0;
      }
  
  
      
      i++;
    }
    let case1={
      status: "INSUFFICIENT_FUNDS",
      change: []
    };
    let case2={
      status: "CLOSED",
      change: cid
    };
    let case3={
      status: "OPEN",
      change: change
    };
    
  
    
    if(due!==0 ){
      return case1
    }
    else if(due===0 && hundred===0 && twenty===0 && ten===0 && five===0 && one===0 && quarter ===0 && dime===0 && nickel===0 && penny<=0){
      return case2;
    }
    else{
      return case3;
    }
    
  
    
    
    
  }
  
  console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));