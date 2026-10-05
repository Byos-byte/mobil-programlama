// FONKSİYONLAR
//Geleneksel fonksiyon
function karsilama1(isim){
    return "Merhaba, " + isim;
}
console.log(karsilama1('Murat'));

console.log(karsilama1(60));

function karsilama2(isim){
    return `Merhaba, ${isim}`;
}
console.log(karsilama2('Serdar'));


// Arrow function
const arrowkarsila1 = (isim) => `Merhaba, ${isim}`
console.log(arrowkarsila1('Boran'));

const arrowkarsila2 = (isim, soyisim, yas) =>
    `Merhaba, ${isim} ${soyisim} ${yas}`
console.log(arrowkarsila2('Boran','YILDIRIM',20));

