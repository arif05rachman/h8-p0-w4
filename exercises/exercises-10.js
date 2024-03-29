function changeMe(arr) {
    let obj = {}
    if (arr.length === 0) {
        console.log('""');
    }else{
        for(let i=0; i<arr.length; i++) {
            obj = {}
            obj.firstName = arr[i][0]
            obj.lastName = arr[i][1]
            obj.gender = arr[i][2]
            if (arr[i][3] !== undefined) {
                obj.age = arr[i][3]
            } else {
                obj.age = 'Invalid Birth Year'
            }
            console.log(`${ i+1 } ${ arr[i][0]+' '+ arr[i][1] }`, obj)
         }
    }
}

// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); 
// 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 37 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""