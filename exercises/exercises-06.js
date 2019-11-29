function digitPerkalianMinimum(angka) {
    let arr = []
    let str = ''
    for(let i=1; i<=angka; i++){
        if(angka % i==0){
            arr.push(i)
        }
    }
    if (arr.length == 1) {
        str += `${arr[0]}${arr[0]}`
    }else{
        str += `${arr[arr.length/2]}${arr[arr.length/2-1]}`
    }
    return str.length
}
  
  // TEST CASES
  console.log(digitPerkalianMinimum(24)); // 2
  console.log(digitPerkalianMinimum(90)); // 3
  console.log(digitPerkalianMinimum(20)); // 2
  console.log(digitPerkalianMinimum(179)); // 4
  console.log(digitPerkalianMinimum(1)); // 2