# Gün 21 - Fetch ile API Kullanıcılarını Listeleme

Bu çalışmada JavaScript'te `fetch` fonksiyonunu kullanarak bir API'den veri çekmeyi ve gelen verileri dinamik olarak ekrana listelemeyi uyguladım.

## Öğrenilen Konular

- `fetch()` ile HTTP isteği gönderme
- Promise yapısının temel çalışma mantığı
- `async` ve `await` kullanımı
- Fetch sonucunda gelen `Response` nesnesi
- `response.ok` ve `response.status` ile response kontrolü
- `response.json()` ile JSON verisini JavaScript verisine dönüştürme
- `try`, `catch` ve `finally` kullanımı
- Loading, success, empty ve error durumlarının yönetimi
- İstek sırasında butonu `disabled` yapma
- API'den gelen verilerin gerekli alanlarını kontrol etme
- DevTools Network sekmesinde HTTP isteğini inceleme

## Yapılan Uygulama

Sayfaya `Kullanıcıları Getir` isimli bir buton, durum mesajı alanı ve kullanıcı listesinin gösterileceği bir bölüm ekledim.

`getUsers()` isimli `async` bir fonksiyon oluşturdum. Kullanıcı butona bastığında fonksiyon çalışarak önce `"Kullanıcılar yükleniyor..."` mesajını gösterdi ve aynı anda butonu pasif hale getirdi.

`fetch()` kullanarak JSONPlaceholder API'sindeki `/users` endpoint'ine GET isteği gönderdim.

Gelen response üzerinde `response.ok` değerini kontrol ettim. Başarısız bir response geldiğinde hata oluşturarak işlemin `catch` bölümüne geçmesini sağladım.

Response başarılı olduğunda `response.json()` kullanarak JSON verisini JavaScript dizisine dönüştürdüm.

API'den gelen her kullanıcı için JavaScript ile bir kullanıcı kartı oluşturdum. Kartlarda kullanıcı adı, e-posta adresi ve şehir bilgilerini gösterdim.

API'den boş bir dizi gelmesi durumunda kullanıcıya `"Kullanıcı bulunamadı"` mesajını gösterdim.

## Hata Yönetimi

API isteği sırasında oluşabilecek hataları `try/catch` yapısı ile yönettim.

Hatalı bir endpoint kullanarak hata senaryosunu test ettim. `404` response geldiğinde kullanıcıya teknik hata detayları yerine:

`Kullanıcılar yüklenirken bir hata oluştu.`

mesajını gösterdim.

`finally` bölümünde istek başarılı veya başarısız olsa da `Kullanıcıları Getir` butonunu tekrar aktif hale getirdim.

## Test Edilen Durumlar

- Loading: İstek sırasında `"Kullanıcılar yükleniyor..."` mesajı
- Success: 10 kullanıcının başarıyla listelenmesi
- Empty: Boş response sonucunda `"Kullanıcı bulunamadı"` mesajı
- Error: Hatalı URL sonucunda kullanıcı dostu hata mesajı

## Network Kontrolü

DevTools Network sekmesini kullanarak `/users` endpoint'ine gönderilen GET isteğini inceledim.

Request URL, HTTP metodu ve response status bilgilerini kontrol ettim.

## Sonuç

Bu çalışmada JavaScript ile frontend tarafından bir REST API'ye HTTP isteği göndermeyi, async/await ile asenkron işlemleri yönetmeyi ve API'den gelen verileri kullanıcı arayüzünde göstermeyi uyguladım. Ayrıca loading, başarılı sonuç, boş veri ve hata durumlarını ayrı şekilde yönetmeyi öğrendim.