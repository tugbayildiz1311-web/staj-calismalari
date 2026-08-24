# Gün 13 - JavaScript Array Metotları

Bu çalışmada JavaScript'te `map`, `filter` ve `reduce` array metotları kullanılarak ürün verileri işlendi.

## Öğrenilen Konular

- `filter` ile belirli koşulları sağlayan elemanları seçme
- `map` ile dizideki elemanları dönüştürme
- `reduce` ile dizideki değerlerden tek bir sonuç üretme
- Callback fonksiyonlarının kullanımı
- Spread operatörü (`...`) ile yeni object oluşturma
- Orijinal veriyi değiştirmeden yeni veriler üretme
- Array metotlarının klasik `for` döngüsü ile doğrulanması

## Map, Filter ve Reduce Farkı

`map`, dizideki her elemanı dönüştürerek yeni bir dizi oluşturur.

`filter`, verilen koşulu sağlayan elemanlardan yeni bir dizi oluşturur.

`reduce`, dizideki tüm elemanları işleyerek tek bir sonuç üretir.

## Yapılan Uygulama

Önceki çalışmada oluşturulan ürün dizisi kullanıldı.

`filter` ile aktif ürünler ve stokta bulunan ürünler ayrı dizilere ayrıldı.

`map` kullanılarak ürün adı ve fiyatından oluşan metinler oluşturuldu. Ayrıca her ürün için orijinal object değiştirilmeden `%20` KDV eklenmiş yeni bir ürün dizisi oluşturuldu.

`reduce` ile toplam stok miktarı ve ürünlerin fiyat ile stok miktarları kullanılarak toplam envanter değeri hesaplandı.

Belirli bir kategoriye ait ürünler `filter` ile seçildi ve bu ürünlerin toplam fiyatı `reduce` kullanılarak bulundu.

Elde edilen sonuçlar klasik `for` döngüsüyle tekrar hesaplanarak array metotlarıyla bulunan sonuçlarla karşılaştırıldı.

## Reduce Başlangıç Değeri

`reduce` metodunda başlangıç değeri verilmesi özellikle boş dizilerde önemlidir. Örneğin başlangıç değeri `0` olarak verilen bir toplama işlemi boş dizide de `0` sonucunu üretir. Başlangıç değeri verilmeden boş bir dizide `reduce` kullanılması hataya neden olur.

## Sonuç

Bu çalışmada ürün verileri üzerinde `map`, `filter` ve `reduce` metotlarının kullanım mantığı öğrenildi ve sonuçlar klasik döngülerle doğrulandı.