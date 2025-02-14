document.getElementById('yesBtn').addEventListener('click', function() {
    // Gif'in alt kısmından yağmur efekti oluştur
    for (var i = 0; i < 100; i++) {
        setTimeout(function() {
            // Yeni bir kalp oluştur
            var heart = document.createElement('div');
            heart.className = 'heart';

            // Rastgele x pozisyonu ayarla
            var randomX = Math.random() * window.innerWidth;
            heart.style.left = randomX + 'px';
            heart.style.top = '0px'; // Gif'in üst kısmından başlat

            // Kalbi yağmur bölgesine ekle
            document.body.appendChild(heart);

            // Kalbi yağmur bölgesinden kaldır
            setTimeout(function() {
                heart.remove();
            }, 10000); // 3 saniye sonra kaldır
        }, i * 35); // 50 milisaniye aralıklarla kalpleri ekleyerek daha yoğun yağmur oluştur
    }
});

document.getElementById('noBtn').addEventListener('mouseenter', function() {
    // Ekran genişliği ve yüksekliğini al
    var screenWidth = window.innerWidth;
    var screenHeight = window.innerHeight;

    // Rastgele bir x ve y konumu oluştur
    var newX = Math.floor(Math.random() * screenWidth);
    var newY = Math.floor(Math.random() * screenHeight);

    // Hayır butonunu yeni konuma taşı
    var noBtn = document.getElementById('noBtn');
    noBtn.style.position = 'absolute';
    noBtn.style.left = newX + 'px';
    noBtn.style.top = newY + 'px';
});
