# Gün 14 - JavaScript Arama ve Doğrulama Metotları

Bu çalışmada JavaScript'te diziler üzerinde arama ve doğrulama yapmak için kullanılan `find`, `some`, `every`, `includes` ve `findIndex` metotlarını uyguladım.

## Öğrenilen Konular

- `find` ile koşula uyan ilk elemanı bulma
- `some` ile en az bir elemanın koşulu sağlayıp sağlamadığını kontrol etme
- `every` ile tüm elemanların koşulu sağlayıp sağlamadığını kontrol etme
- `includes` ile bir değer veya metin parçası arama
- `findIndex` ile koşula uyan elemanın index değerini bulma
- Büyük-küçük harf duyarlılığının arama sonuçlarına etkisi
- `trim()` ile gereksiz boşlukları temizleme
- `toLowerCase()` ile büyük-küçük harf duyarsız arama yapma
- Bulunamayan sonuçlarda anlamlı mesaj döndürme

## Find ve Filter Arasındaki Fark

`find`, verilen koşula uyan ilk elemanı döndürür. Eğer koşula uyan bir eleman bulunamazsa `undefined` döndürür.

`filter` ise verilen koşula uyan tüm elemanları yeni bir dizi içerisinde döndürür. Koşula uyan eleman yoksa boş bir dizi döndürür.

Bu nedenle yalnızca tek bir eleman arandığında `find`, birden fazla eşleşen elemanın tamamı gerektiğinde ise `filter` kullanılır.

## Yapılan Uygulama

Ürün koduna göre arama yapan `findProductByCode` fonksiyonunu oluşturdum. Fonksiyon içerisinde `find` metodunu kullanarak girilen ürün koduna uygun ürünü buldum. Ürün bulunamadığında uygulamanın hata vermesi yerine `"Ürün bulunamadı"` mesajını döndürmesini sağladım.

`some` metodunu kullanarak Electronics kategorisinde en az bir ürün bulunup bulunmadığını ve stokta olmayan bir ürün olup olmadığını kontrol ettim.

`every` metodunu kullanarak tüm ürünlerin fiyatlarının sıfırdan büyük olup olmadığını ve tüm ürün kodlarının dolu olup olmadığını doğruladım.

İzin verilen kategorilerden oluşan bir dizi oluşturarak `includes` metodu ile girilen kategorinin bu listede bulunup bulunmadığını kontrol ettim.

Ürün adına göre yapılan aramalarda `trim()` ve `toLowerCase()` kullanarak boşluklardan ve büyük-küçük harf farklılıklarından kaynaklanan arama sorunlarını önledim. Ürün isimlerinde `includes` kullanarak girilen metni içeren ürünleri buldum.

Ek olarak `findIndex` metodunu kullanarak belirli bir ürünün dizideki index değerini tespit ettim.

## Test Senaryoları

Uygulamada bulunan ürün kodu, bulunmayan ürün kodu, var olan kategori, olmayan kategori, stokta olmayan ürün, büyük-küçük harf duyarsız isim araması ve geçersiz fiyatlı ürün gibi farklı senaryoları test ettim.

Tüm sonuçları tarayıcı Console ekranında anlaşılır başlıklar altında kontrol ettim.

## Sonuç

Bu çalışmada JavaScript'te veri arama ve doğrulama işlemleri için kullanılan temel array metotlarını uygulamalı olarak öğrendim. Farklı arama senaryolarında hangi metodun kullanılmasının daha uygun olduğunu ve kullanıcı girişlerini aramadan önce düzenlemenin önemini gördüm.