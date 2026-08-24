# Gün 15 - DOM ile Dinamik Ürün Listesi

Bu çalışmada JavaScript kullanarak HTML içeriğini dinamik olarak oluşturmayı ve DOM üzerinde işlem yapmayı uyguladım.

## Öğrenilen Konular

- DOM yapısının JavaScript ile nasıl kullanılabildiği
- `document` nesnesi ile HTML elemanlarına erişme
- `getElementById`, `querySelector` ve `querySelectorAll` seçim yöntemleri
- `textContent` ile güvenli metin ekleme
- `innerHTML` ile `textContent` arasındaki fark
- `createElement` ile yeni HTML elemanları oluşturma
- `append` ve `appendChild` ile eleman ekleme
- `classList.add` ile class ekleme
- `setAttribute` ile attribute tanımlama
- `remove` ile DOM elemanlarını kaldırma
- JavaScript ile dinamik içerik üretme
- Render fonksiyonları ile veriyi ekrana basma

## TextContent ve InnerHTML Farkı

`textContent`, bir elemanın metin içeriğini doğrudan eklemek için kullanılır ve HTML kodunu çalıştırmaz.

`innerHTML` ise HTML etiketlerini yorumlayarak içerik oluşturabilir. Ancak kullanıcıdan gelen veriler doğrudan `innerHTML` ile kullanıldığında güvenlik açısından risk oluşturabilir.

Bu nedenle mümkün olduğunda `textContent` ve `createElement` kullanmak daha güvenli ve okunabilir bir yöntemdir.

## Yapılan Uygulama

Önceki günlerde kullandığım ürün dizisini kullanarak `renderProducts` isimli bir fonksiyon oluşturdum. Bu fonksiyon ürün listesini JavaScript ile dinamik olarak ekrana basmaktadır.

Her ürün için `createElement` kullanarak bir ürün kartı oluşturdum. Kart içerisinde ürün adı, kategori, fiyat ve stok bilgisini gösterdim.

Stok miktarı sıfır olan ürünlerde `"Stokta Yok"` mesajını gösterdim ve bu ürünlerin kartlarına `out-of-stock` class'ını ekleyerek farklı görünmelerini sağladım.

Her ürün kartına `setAttribute` kullanarak ürün kodunu içeren `data-code` attribute'ı ekledim.

Ürün sayısını `productCount` alanında dinamik olarak gösterdim.

Liste yeniden oluşturulmadan önce önceki DOM elemanlarını temizlemek için mevcut elemanları kaldırdım.

Ürün dizisi boş olduğunda `"Gösterilecek ürün bulunamadı"` mesajını kullanıcıya gösterdim.

## DevTools Kontrolü

Tarayıcının DevTools Elements sekmesini kullanarak JavaScript tarafından eklenen `product-card` elemanlarını, `data-code` attribute'larını ve stokta olmayan ürünlere eklenen `out-of-stock` class'larını kontrol ettim.

## Sonuç

Bu çalışmada HTML içinde sabit içerik yazmak yerine JavaScript ile dinamik DOM elemanları oluşturmayı öğrendim. Veriyi ekrana basmak için render fonksiyonu kullanarak DOM üzerinde eleman oluşturma, ekleme, class tanımlama ve silme işlemlerini uyguladım.