function ubahHuruf(kata) {
    let alphabet = 'abcdefghijklmnopqrstuvwxyza'
    let kataBaru = ''
        for(let i=0; i<kata.length; i++){
            for(let j = 0; j < alphabet.length; j++){
                if(kata[i] === alphabet[j]){
                    kataBaru += alphabet[j+1]
                }
            }
        }
    return kataBaru
}
  
  // TEST CASES
  console.log(ubahHuruf('wow')); // xpx
  console.log(ubahHuruf('developer')); // efwfmpqfs
  console.log(ubahHuruf('javascript')); // kbwbtdsjqu
  console.log(ubahHuruf('keren')); // lfsfo
  console.log(ubahHuruf('semangat')); // tfnbohbu