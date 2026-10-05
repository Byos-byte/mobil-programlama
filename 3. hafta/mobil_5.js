const a = [`Akdeniz`, `UBF`, true, false, 10, 20];
const b = [`Mobil Uygulama Geliştirme`, 5, ...a];
const hesapla = (x, y, ...z) => (x*y) + z.length;
console.log(hesapla(4, 8, ...b));
