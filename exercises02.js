function fpb(angka1, angka2) {
    // you can only write your code here!
    var fpb = Number;
    var a=Number;
    var b=Number;
    if(angka1<angka2){
        a=angka1
        b=angka2
    }else{
        a=angka2
        b=angka1
    }
    for(var i = a; i > 0; i--){
      if(a % i === 0 && b % i === 0) { // jika a dan b habis dibagi i, maka fpb itu samadengan 1
        fpb = i;
        break;
      }
    }
    return fpb;
  }
  
  // TEST CASES
  console.log(fpb(12, 16)); // 4
  console.log(fpb(50, 40)); // 10
  console.log(fpb(22, 99)); // 11
  console.log(fpb(24, 36)); // 12
  console.log(fpb(17, 23)); // 1
  console.log(fpb(4, 8)); // 4
  console.log(fpb(8, 4)); // 4