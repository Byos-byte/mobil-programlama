//Promise.all(), birden fazla Promise'in aynı anda çalıştırılmasını sağlar
//Tüm Promise'ler başarıyla tamamlandığında sonuçları döner
const fetchUserAndPostParallel = async () => {
    try {
        const [usersResponse, postResponse, postsResponse] = await Promise.all(
            [
                fetch('https://jsonplaceholder.typicode.com/users'),
                fetch('https://jsonplaceholder.typicode.com/posts/1'),
                fetch('https://jsonplaceholder.typicode.com/posts')
            ]);

            const users = await usersResponse.json();
            const post = await postResponse.json();
            const posts = await postsResponse.json();
            
            console.log("Kullanıcılar: ", users);
            console.log("Gönderi: ", post);
            console.log("Gönderileri: ", posts);
    } catch (error) {
        console.error("Hata: ", error);
    }
};
fetchUserAndPostParallel();
