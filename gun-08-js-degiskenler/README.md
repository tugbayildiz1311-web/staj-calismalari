# Gün 08 - JavaScript Değişkenler

Bu çalışmada JavaScript değişkenleri, veri tipleri, `typeof` operatörü, template literal ve `Number()` ile veri tipi dönüşümü uygulandı.

Bir ürünün birim fiyatı ve sipariş adedi kullanılarak ara toplam, KDV tutarı ve KDV dâhil genel toplam hesaplandı. Kod; Klavye, Mouse ve Monitör olmak üzere üç farklı ürün verisiyle test edildi.

## let ve const farkı

`const`, daha sonra yeniden değer atanmayacak değişkenlerde kullanılır. Bu çalışmada bütün ürünlerde aynı kalan KDV oranı `const` ile tanımlandı.

`let`, değeri kod çalışırken değiştirilecek değişkenlerde kullanılır. Ürün adı, birim fiyat, adet, stok durumu ve hesaplama sonuçları farklı ürünlerle yeniden kullanıldığı için `let` ile tanımlandı.

Yeni JavaScript kodlarında öncelikle `const` tercih edilir. Değerin sonradan değiştirilmesi gerekiyorsa `let` kullanılır.

## String ve number karışıklığı

Adet değeri `"4"` şeklinde tırnak içinde yazıldığında string olur. Bu değer `+` operatörüyle bir number değere eklendiğinde matematiksel toplama yerine metin birleştirme işlemi gerçekleşir.

Örneğin `"4" + 1` işleminin sonucu `41` olur. `Number("4") + 1` işleminde ise string değer number veri tipine dönüştürüldüğü için sonuç `5` olur.

Tamamen sayısal olmayan `"4 adet"` değeri `Number()` ile dönüştürülmeye çalışıldığında sonuç `NaN` olur.