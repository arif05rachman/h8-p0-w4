function shoppingTime(memberId, money) {
    // you can only write your code here!
  // Sepatu brand Stacattu seharga 1500000
  // Baju brand Zoro seharga 500000
  // Baju brand H&N seharga 250000
  // Sweater brand Uniklooh seharga 175000
  // Casing Handphone seharga 50000
  let listBarang = [
        ['Sepatu Stacattu', 1500000],
        ['Baju Zoro', 500000],
        ['Baju H&N', 250000],
        ['Sweater Uniklooh', 175000],
        ['Casing Handphone', 50000]
    ]
  let hasil = {}
  let arr = []
  var changeMoney = money
    if(memberId === '' || memberId ===  undefined){
      return `Mohon maaf, toko X hanya berlaku untuk member saja`
    } else if(money < 50000){
      return `Mohon maaf, uang tidak cukup`
    } else {
      for(let i=0; i<listBarang.length; i++) {
        if (money >= listBarang[i][1]) {
            arr.push(listBarang[i][0])
            changeMoney -= listBarang[i][1]
        }
      }
      hasil.memberId = memberId
      hasil.money = money
      hasil.listPurchased = arr
      hasil.changeMoney = changeMoney

    }
    return hasil
  }
  
  // TEST CASES
  console.log(shoppingTime('1820RzKrnWn08', 2475000));
    //{ memberId: '1820RzKrnWn08',
    // money: 2475000,
    // listPurchased:
    //  [ 'Sepatu Stacattu',
    //    'Baju Zoro',
    //    'Baju H&N',
    //    'Sweater Uniklooh',
    //    'Casing Handphone' ],
    // changeMoney: 0 }
  console.log(shoppingTime('82Ku8Ma742', 170000));
  //{ memberId: '82Ku8Ma742',
  // money: 170000,
  // listPurchased:
  //  [ 'Casing Handphone' ],
  // changeMoney: 120000 }
  console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
  console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
  console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja