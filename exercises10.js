function changeMe(arr) {
    // you can only write your code here!
    var no=0
    var fullName=''
    for(var i=0; i<arr.length; i++){
       no++
       fullName=arr[i][0]+' '+arr[i][1]
       var object={}
       object.firstName=arr[i][0]
       object.lastName=arr[i][1]
       object.gender=arr[i][2]
       if(arr[i][3]==undefined||arr[i][3]>2019){
           object.age='Invalid age Year'
       }else{
           object.age=2019-arr[i][3]
       }
       console.log(no+'. '+object.firstName+' '+object.lastName)
       console.log(object)
    }
  }
  
  // TEST CASES
  console.log(changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']])); // 1. Christ Evans:
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