# Gün 12 - JavaScript Array ve Object

Bu çalışmada JavaScript'te array ve object yapılarını birlikte kullanmayı öğrendim. Birden fazla ürünü düzenli şekilde saklamak için object'lerden oluşan bir products dizisi oluşturdum.

## Öğrendiğim Konular

- Array yapısı
- Index ve length kullanımı
- push ile diziye yeni eleman ekleme
- Object ve key-value yapısı
- Nokta gösterimi ile object özelliklerine erişme
- Array içinde object kullanımı
- Object içinde iç içe object kullanımı
- Veri tipi tutarlılığı
- Object özelliklerini değiştirme ve yeni özellik ekleme
- products.js ve app.js dosyalarının script sırası

## Array ve Object Arasındaki Fark

Array, birden fazla değeri sıralı şekilde tutmak için kullanılır ve elemanlara index değerleri ile erişilir.

Object ise bir varlığa ait özellikleri key-value yapısında saklamak için kullanılır. Örneğin bir ürünün adı, fiyatı, stoğu ve kategorisi aynı object içerisinde tutulabilir.

Gerçek uygulamalarda birden fazla varlığı saklamak için array ve object yapıları birlikte kullanılabilir. Bu çalışmada her ürün bir object olarak oluşturuldu ve bütün ürünler products isimli bir array içerisinde tutuldu.

## Uygulama

En az 10 üründen oluşan bir products dizisi oluşturdum. Her üründe id, code, name, category, price, stock ve isActive alanlarını kullandım.

Bir ürünün fiyatını güncelledim ve push yöntemi ile yeni bir ürün ekledim. Ürünleri for...of döngüsü ile dolaşarak ürün adı, fiyat ve stok bilgilerini Console üzerinde görüntüledim.

Ayrıca bir ürünün içerisine supplier adında iç içe bir object ekleyerek tedarikçi adı ve şehir bilgilerine eriştim. Ürün verilerini products.js dosyasında, bu veriler üzerinde yapılan işlemleri ise app.js dosyasında tuttum.