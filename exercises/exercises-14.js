function naikAngkot(arrPenumpang) {
    let rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    let dari = 0
    let tujuan = 0
    let obj = {}
    let hasil = []
    for(let i=0; i<arrPenumpang.length; i++) {
        for(let j=0; j<rute.length; j++) {
            if (arrPenumpang[i][1] === rute[j]) {
                dari = j
            }
            if (arrPenumpang[i][2] === rute[j]) {
                tujuan = j
            }
        }
        obj.penumpang = arrPenumpang[i][0]
        obj.naikDari = arrPenumpang[i][1]
        obj.tujuan = arrPenumpang[i][2]
        obj.bayar = Math.abs(dari-tujuan)*2000
        hasil.push(obj)
        obj = {}
    }
    return hasil
}
  
  //TEST CASE
  console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
  // [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
  //   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
  
  console.log(naikAngkot([])); //[]