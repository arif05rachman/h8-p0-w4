function checkAB(num) {
    // you can only write your code here!
    var posisiA=0
    var posisiB=0
    for(var i=0; i<num.length; i++){
        if(num[i]=='a'){
            posisiA=i
        }else if(num[i]=='b'){
            posisiB=i
        }
    }
    if(posisiA>posisiB){
        jarak=posisiA-posisiB
    }else{
        jarak=posisiB-posisiA
    }
    if(jarak==4){
        return true
    }else{
        return false
    }
  }
  
  // TEST CASES
  console.log(checkAB('lane borrowed')); // true
  console.log(checkAB('i am sick')); // false
  console.log(checkAB('you are boring')); // true
  console.log(checkAB('barbarian')); // true
  console.log(checkAB('bacon and meat')); // false