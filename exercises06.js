function digitPerkalianMinimum(angka) {
    // you can only write your code here!
    var digit=0
    var posisi=0
    var arr=[]
    for(var i=1; i<=angka; i++){
        if(angka % i==0){
            arr.push(i)
        }
    }
    posisi=arr.length/2
    if(arr.length==1){
        digit=String(arr[0])+String(arr[0])
    }else{
        digit=String(arr[posisi])+String(arr[posisi-1])
    }
    return digit.length
  }
  
  // TEST CASES
  console.log(digitPerkalianMinimum(24)); // 2
  console.log(digitPerkalianMinimum(90)); // 3
  console.log(digitPerkalianMinimum(20)); // 2
  console.log(digitPerkalianMinimum(179)); // 4
  console.log(digitPerkalianMinimum(1)); // 2
  