/* async/await ile fetch aiawit anahtar kelimesi, asenktron bir işlemin tamamlanmasını bekler.
Bu sayede, fetch sonucunu almak için .then() zincirine gerek kalmaz
await, sadece async bir fonksiyon içinde kullanılabilir

async/await ile fetch kullanımı: */
const fetchData = async () => 
{
    // Hata oluşması muhtemel bloklar try bloğuna yazılır, olursa catch bloğunda yakalanır
    try {
        //await: İşlemin sonucunu bekle demektir. Sonucu bekle ve response değişkenine aktar diyoruz
        const response = await fetch(
            'https://jsonplaceholder.typicode.com/users'
        );
//fetch yanıtını kontrol et (başarılı mı, değil mi)
if (!response.ok) {
    throw new Error('Veri çekme başarısız oldu!');
}

//Yanıtı JSON formatına çevir
const data = await response.json();

//Veriyi konsola yazdır
console.log(data);
        } catch (error) {
            //Hata durumunda hata mesajı yazdır
            console.error('Hata: ', error);
        }

}

fetchData();