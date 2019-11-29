function countProfit(shoppers) {
  var listBarang = [ ['Sepatu Stacattu', 1500000, 10],
                     ['Baju Zoro', 500000, 2],
                     ['Sweater Uniklooh', 175000, 1]
                   ];
  // you can only write your code here!
  var arr = [];
  if(shoppers.length === 0){ 
      return arr
  }
  for(var i = 0; i < listBarang.length; i++) {
    var obj = {};
    var pembeli = [];
    var terjual = 0;
    var stok = listBarang[i][2];
    for(var j = 0; j < shoppers.length; j++) {
      if(listBarang[i][0] === shoppers[j].product && listBarang[i][2] >= shoppers[j].amount) {
        listBarang[i][2] -= shoppers[j].amount;
        terjual += shoppers[j].amount;
        pembeli.push(shoppers[j].name); 
      }
    }
    obj.product = listBarang[i][0];
    obj.shoppers = pembeli;
    obj.leftOver = stok - terjual;
    obj.totalProfit = terjual * listBarang[i][1];
    arr.push(obj);
  }
  return arr
}
// TEST CASES
console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 2}, 
{name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3}, 
{name: 'Rani', product: 'Sweater Uniklooh', amount: 2}]));
//[ { product: 'Sepatu Stacattu',
//   shoppers: [ 'Windi', 'Vanessa' ],
//   leftOver: 5,
//   totalProfit: 7500000 },
// { product: 'Baju Zoro',
//   shoppers: [],
//   leftOver: 2,
//   totalProfit: 0 },
// { product: 'Sweater Uniklooh',
//   shoppers: [],
//   leftOver: 1,
//   totalProfit: 0 } ]

console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 8}, 
{name: 'Vanessa', product: 'Sepatu Stacattu', amount: 10}, 
{name: 'Rani', product: 'Sweater Uniklooh', amount: 1}, 
{name: 'Devi', product: 'Baju Zoro', amount: 1}, 
{name: 'Lisa', product: 'Baju Zoro', amount: 1}]));
// // [ { product: 'Sepatu Stacattu',
// //     shoppers: [ 'Windi' ],
// //     leftOver: 2,
// //     totalProfit: 120000000 },
// //   { product: 'Baju Zoro',
// //     shoppers: [ 'Devi', 'Lisa' ],
// //     leftOver: 0,
// //     totalProfit: 1000000 },
// //   { product: 'Sweater Uniklooh',
// //     shoppers: [ 'Rani' ],
// //     leftOver: 0,
// //     totalProfit: 175000 } ]
console.log(countProfit([{name: 'Windi', product: 'Sepatu Naiki', amount: 5}]));
// // [ { product: 'Sepatu Stacattu',
// //     shoppers: [],
// //     leftOver: 10,
// //     totalProfit: 0 },
// //   { product: 'Baju Zoro',
// //     shoppers: [],
// //     leftOver: 2,
// //     totalProfit: 0 },
// //   { product: 'Sweater Uniklooh',
// //     shoppers: [],
// //     leftOver: 1,
// //     totalProfit: 0 } ]
console.log(countProfit([])); //[]