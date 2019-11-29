function urutkanAbjad(str) {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'
    let hasil = ''
    for(let i=0; i<alphabet.length; i++) {
        for(let j=0; j<str.length; j++) {
            if (alphabet[i] === str[j]) {
                hasil += str[j]
            }
        }
    }
    return hasil
}
  
  // TEST CASES
  console.log(urutkanAbjad('hello')); // 'ehllo'
  console.log(urutkanAbjad('truncate')); // 'acenrttu'
  console.log(urutkanAbjad('developer')); // 'deeeloprv'
  console.log(urutkanAbjad('software')); // 'aeforstw'
  console.log(urutkanAbjad('aegis')); // 'aegis'