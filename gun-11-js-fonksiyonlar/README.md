# Gün 11 - JavaScript Fonksiyonlar

Bu çalışmada JavaScript'te fonksiyonların kullanımı üzerinde çalıştım. Tekrarlanan işlemleri ayrı fonksiyonlara ayırarak sipariş hesaplama uygulaması geliştirdim.

## Öğrendiğim Konular

- Function ve arrow function kullanımı
- Parametre ve argüman kavramları
- `return` ile değer döndürme
- `console.log` ile `return` arasındaki fark
- Varsayılan parametre kullanımı
- Fonksiyonların birbirini çağırması
- Scope kavramı
- Erken `return` kullanımı
- Küçük ve tek sorumluluğa sahip fonksiyonlar oluşturma
- Geçersiz verilerin kontrol edilmesi
- `Intl.NumberFormat` ile para biçimlendirme

## Uygulama

Sipariş hesaplama işlemlerini ayrı fonksiyonlara böldüm. Ara toplam, vergi, indirim, stok kontrolü ve para biçimlendirme işlemleri için farklı fonksiyonlar oluşturdum. Ana `calculateOrderTotal` fonksiyonunda bu yardımcı fonksiyonları çağırarak siparişin son tutarını hesapladım.

Ayrıca fiyat ve adet bilgilerinin geçerli olup olmadığını kontrol ettim. Ürün stokta değilse hesaplama yapılmadan kullanıcıya uygun bir mesaj döndürülmesini sağladım.

## Return ve Console.log Arasındaki Fark

`return`, fonksiyon tarafından hesaplanan değeri fonksiyonun dışına gönderir ve bu değer daha sonra başka işlemlerde kullanılabilir. `console.log` ise yalnızca değeri konsolda görüntüler ve fonksiyonun sonucunu dışarı döndürmez.