# Gün 16 - Form Eventleri ile Dinamik Ürün Ekleme

Bu çalışmada JavaScript event yapısını kullanarak form üzerinden dinamik ürün ekleme işlemi gerçekleştirdim.

## Öğrenilen Konular

- JavaScript event kavramı
- `addEventListener` kullanımı
- `submit`, `input` ve `click` eventleri
- `preventDefault()` ile form gönderiminde sayfanın yenilenmesini engelleme
- Input değerlerine `.value` ile erişme
- `trim()` ile boşluklardan oluşan girişleri engelleme
- Form doğrulama işlemleri
- Başarı ve hata mesajları gösterme
- Form alanlarını `reset()` ile temizleme
- Event handler fonksiyonlarının kullanımı

## Yapılan Uygulama

Önceki gün oluşturduğum dinamik ürün listesine ürün ekleme formu ekledim. Form içerisinde ürün adı, kategori, fiyat ve stok alanlarını oluşturdum.

Formun `submit` eventini `addEventListener` ile dinledim. Form gönderildiğinde `preventDefault()` kullanarak sayfanın yenilenmesini engelledim.

Form alanlarının değerlerini `.value` özelliği ile aldım. Ürün adında `trim()` kullanarak yalnızca boşluk girilmesini geçersiz kabul ettim.

Ürün adı boş olduğunda, fiyat sıfır veya daha küçük olduğunda ve stok değeri negatif olduğunda kullanıcıya hata mesajı gösterdim.

Girilen bilgiler geçerli olduğunda yeni bir ürün object'i oluşturarak `products` dizisine `push()` ile ekledim. Ardından `renderProducts(products)` fonksiyonunu tekrar çağırarak yeni ürünün ekranda görüntülenmesini sağladım.

Başarılı ürün ekleme işleminden sonra formu temizledim ve kullanıcıya başarı mesajı gösterdim.

## Input ve Click Eventleri

Ürün adı alanında `input` eventini kullanarak kullanıcı yazı yazdıkça karakter sayısını ekranda gösterdim.

Ek olarak Formu Temizle butonunda `click` eventini kullanarak form alanlarını ve mesajları temizledim.

## Test Senaryoları

Aşağıdaki geçersiz giriş senaryolarını test ettim:

- Ürün adının boş bırakılması
- Ürün adına yalnızca boşluk girilmesi
- Fiyat değerinin 0 girilmesi
- Stok değerinin negatif girilmesi

Doğrulama hatalarında ürünün listeye eklenmediğini ve kullanıcıya uygun hata mesajının gösterildiğini kontrol ettim.

## Sonuç

Bu çalışmada JavaScript event yapısını kullanarak kullanıcı etkileşimlerini yönetmeyi, form verilerini doğrulamayı ve geçerli verilerle dinamik olarak yeni ürünler oluşturmayı uyguladım.