let isim = 'Ahmet '
const yas=20;
var isstudenty=true; //Boolean
console.log(isim);


/* 1) var
veri tipini tanımlamadan kabul eder ama yazdırmaya çalıştığında 
tanımsız hatası verir



*/
console.log(x); //undefinied yazar, !! HATA VERMEZ
var x=20;
console.log(x);

var y=10;
var y=20; // var veri tipi iki kere tanımlamaya izin verip sorun çıkartabiliyor
console.log(y);


// 2) let
// console.log(a); // let'te hata verir, tanımsız deyip derlemeyi durdurur

let a=10;
if(true)
{let b=20;
    console.log(b); }
// console.log(b); // if tırnağından çıktığı için uygulama b'yi unutur
console.log(a);


// 3) const, çoğunlukla değerler sabit durur sonradan genelde değiştirilmez.
// Eğer const ile bir obje veya dizi tanımladıysanız içindeki veriler değiştirlebilir
const pi = 3.14;
// pi = 3.15; //sabit değer olduğu için değiştirmeye izin vermez 
// TypeError: Assignment to constant variable

if(true){
    const d=50;
    console.log(d);
}
//console.log(d); //Hata verir reference error d is not definied

const arr = [1, 2, 3];
arr.push(4);
arr.push(5);
//objeler ve dizilerdeki iç veriler değiştirilebilir
console.log(arr);