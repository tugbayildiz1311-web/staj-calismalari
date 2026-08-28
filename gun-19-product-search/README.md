# Gün 17 - LocalStorage ile Kalıcı Ürün Verileri

Bu çalışmada JavaScript `localStorage` yapısını kullanarak ürün verilerinin sayfa yenilendiğinde kaybolmamasını sağladım.

## Öğrenilen Konular

- Değişkenlerde tutulan verilerin sayfa yenilendiğinde neden kaybolduğu
- `localStorage` ile tarayıcıda key-value şeklinde veri saklama
- `localStorage.setItem()` ve `localStorage.getItem()` kullanımı
- `removeItem()` ve `clear()` metotlarının kullanım amacı
- localStorage'ın yalnızca string değer saklaması
- `JSON.stringify()` ile array ve object verilerini string'e dönüştürme
- `JSON.parse()` ile saklanan JSON verisini tekrar JavaScript verisine dönüştürme
- `getItem()` sonucu `null` olduğunda varsayılan veri kullanma
- `try/catch` ile bozuk JSON verilerine karşı hata kontrolü
- Veriler değiştiğinde localStorage'ı güncelleme

## Yapılan Uygulama

Önceki gün oluşturduğum ürün ekleme uygulamasına localStorage desteği ekledim.

`loadProducts()` fonksiyonunu oluşturarak sayfa açıldığında daha önce kaydedilmiş ürünlerin localStorage üzerinden yüklenmesini sağladım. LocalStorage içerisinde kayıtlı veri bulunmadığında varsayılan ürün verilerinin kullanılmasını sağladım.

`saveProducts()` fonksiyonunda `JSON.stringify()` kullanarak `products` dizisini string formatına dönüştürdüm ve `localStorage.setItem()` ile tarayıcıya kaydettim.

Yeni bir ürün eklendiğinde ürün dizisini güncelledikten sonra `saveProducts()` fonksiyonunu çağırarak değişikliklerin kalıcı olmasını sağladım. Sayfayı yenileyerek eklenen ürünün listede kalmaya devam ettiğini doğruladım.

## Ürün Silme

Her ürün kartına JavaScript ile bir Sil butonu ekledim.

Sil butonuna basıldığında `confirm()` kullanarak kullanıcıdan onay aldım. Kullanıcı işlemi onayladığında ilgili ürünü `products` dizisinden çıkardım, localStorage verisini güncelledim ve `renderProducts()` fonksiyonunu tekrar çağırarak listeyi yeniledim.

Ayrıca tüm ürünleri temizlemek için ayrı bir buton oluşturdum. Bu işlemde de ürünler silinmeden önce kullanıcıdan onay alınmasını sağladım.

## JSON Hata Kontrolü

LocalStorage içerisindeki verinin bozuk veya geçersiz JSON olma ihtimaline karşı `JSON.parse()` işlemini `try/catch` içerisinde kullandım.

Veri okunamadığında uygulamanın tamamen hata vermesi yerine varsayılan ürün listesinin kullanılmasını sağladım.

## DevTools Kontrolü

DevTools içerisinde Application bölümündeki Local Storage alanını kullanarak `products` key'i altında kaydedilen JSON verisini inceledim.

Eklenen ürünlerin JSON içerisinde saklandığını ve sayfa yenilendikten sonra tekrar yüklenebildiğini kontrol ettim.

## LocalStorage Gerçek Bir Veritabanı Değildir

LocalStorage tarayıcı içerisinde çalışan basit bir veri saklama yöntemidir. Veriler yalnızca kullanıcının tarayıcısında tutulur ve sunucu tarafında merkezi olarak saklanmaz.

Kullanıcı localStorage verilerini kolaylıkla görüntüleyebilir, değiştirebilir veya silebilir. Ayrıca gelişmiş sorgulama, kullanıcı yetkilendirmesi ve güvenli veri yönetimi gibi gerçek veritabanı özelliklerine sahip değildir.

Bu nedenle parola, kimlik bilgileri veya diğer hassas verilerin localStorage içerisinde saklanması uygun değildir.

## Sonuç

Bu çalışmada ürün verilerini localStorage kullanarak kalıcı hale getirdim. Veri yükleme, kaydetme ve silme işlemlerini uyguladım ve JSON formatının localStorage ile kullanımını öğrendim.

## Kurulum ve Çalıştırma

Projeyi kullanmak için proje dosyaları bilgisayara indirilebilir veya Git ile repository klonlanabilir.

Uygulama ek bir paket kurulumu gerektirmemektedir. `index.html` dosyası tarayıcıda açılarak çalıştırılabilir.

## Kullanılan Git Akışı

Çalışmalar sırasında aşağıdaki Git akışını kullandım:

Değiştir → Kontrol et → Stage et → Commit et → Push et

Kod üzerinde değişiklik yaptıktan sonra `git status` ve gerektiğinde `git diff` ile değişiklikleri kontrol ettim. Doğru değişiklikleri `git add` ile staging alanına ekledim ve anlamlı commit mesajlarıyla kaydettim. Tamamlanan commitleri daha sonra GitHub'a gönderdim.

## Commitlerin Küçük Tutulmasının Önemi

Commitlerin küçük ve tek bir konuya odaklı olması değişiklik geçmişinin daha kolay anlaşılmasını sağlar. Bir hata oluştuğunda hangi değişikliğin probleme neden olduğunu bulmayı kolaylaştırır. Ayrıca gerektiğinde belirli bir değişikliğin geri alınmasını ve ekip içinde yapılan çalışmaların incelenmesini kolaylaştırır.

## Branch ve Main Arasındaki Fark

`main`, projenin kararlı ve birleştirilmiş ana kodunu temsil eder.

Branch ise yeni bir özellik veya düzeltme üzerinde `main` kodunu doğrudan değiştirmeden çalışmayı sağlar. Bu çalışmada ürün arama özelliğini geliştirmek için `feature/product-search` branch'i kullandım.