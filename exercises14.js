function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    //your code here
    var arr = []
    for( var i=0; i<arrPenumpang.length; i++){
        for(var j=0; j<rute.length; j++){
            if(arrPenumpang[i][2]==rute[j]){
                var tujuan=j
            }
            if(arrPenumpang[i][1]==rute[j]){
                var naikDari=j
            }
        }
        var harga = (tujuan-naikDari)*2000
        var obj = {}
            obj.pemumpang=arrPenumpang[i][0]
            obj.naikDari=arrPenumpang[i][1]
            obj.tujuan=arrPenumpang[i][2]
            obj.bayar=harga
            arr.push(obj)
    }
    return arr
  }
  
  //TEST CASE
  console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
  // [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
  //   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
  
  console.log(naikAngkot([])); //[]