/*Map: Bu metod bir dizide değişiklik yaparak yebş dizi oluşturmamıza yardımcı olur
Aşağıdaki örnekte var olan dizimizin içerinde ki sayıları 10 artırarak yeni dizi oluşturduk.
Ardından var olan dizimiz ile yeni oluştuduğumuız dizinin elemanlarını ekrana yazdırdık
*/

const sayilar=[1,2,3,4,5,6,7,8,9,10];
console.log(sayilar);

//Her elemana map fonksiyonu ile 10 ekleyelim
const ekle= sayilar.map(a => a + 10);
console.log(ekle);

//carp isminde bir değişken oluşturup sayılar değerini 3 ile çarp
const carp= sayilar.map(c => c*3);
console.log(carp);

//Sayilar dizisi ilk haliyle yazdırılır
console.log(sayilar);