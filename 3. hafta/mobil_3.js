//for
for (let i=1; i <=10; i++) {
    console.log(`Sayı: ${i}`);
}


let text="";
function yaz(item, index) {
    text = index + ": " + item ;
    console.log(text);
}

//Bir string dizisi tanımlanıyor
//Bu dizi, şehir isimlerini içeriyor
const dizi = ["Antalya", "Izmir", "Istanbul"];
// forEach metodu, dizideki her bir elemanı sıraya alır ve
// Velirtilen fonksiyonu her zaman çalıştırır
dizi.forEach(yaz);
dizi.forEach(item => console.log(item));
//

const person= {
    name: 'Mert',
    age: 20,
    karsila: function() {
        console.log(`Merhaba Bugün Nasılsın, ${this.name} ${this.age}`); }}
    
person.name= 'Mahmut';
person.age= 21;

person.karsila();

//

let kisi =
{
    adi: "Tuna",
    soyadi: "Tan",
    yas: 25,
    meslek: "Öğretmen"
};

// let adi=kisi.adi;
// let soyadi=kisi.soyadi;

let {adi, soyadi} = kisi;
console.log(adi, soyadi);