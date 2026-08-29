# Gün 22 - API Hata Yönetimi

Bu çalışmada önceki gün geliştirdiğim API kullanıcı listeleme uygulamasını hata yönetimi açısından daha sağlam hale getirdim.

## Öğrenilen Konular

- Syntax error, runtime error ve mantık hatası arasındaki farklar
- `try`, `catch` ve `finally` bloklarının kullanımı
- `throw new Error()` ile kontrollü hata oluşturma
- `response.ok` ve `response.status` ile HTTP hata kontrolü
- `console.error()` ile geliştirici için ayrıntılı hata kaydı tutma
- Loading, success, empty ve error durumlarını ayrı şekilde yönetme
- Eksik veya null alanlarda varsayılan değer kullanma
- Hata durumunda kullanıcıya `Tekrar Dene` seçeneği sunma

## Hata Yönetimi

API isteğini `try/catch/finally` yapısı içerisinde gerçekleştirdim.

Response başarılı olmadığında status kodunu da içeren kontrollü bir hata oluşturdum:

```js
throw new Error(`HTTP hatası: ${response.status}`);
```

`catch` bölümünde kullanıcıya teknik hata detayları yerine:

`Kullanıcılar yüklenirken bir hata oluştu.`

mesajını gösterdim.

Aynı zamanda geliştiricinin hatanın nedenini inceleyebilmesi için hata detaylarını `console.error()` ile Console ekranına yazdırdım.

`finally` bölümünde ise istek başarılı veya başarısız olsa da butonların tekrar aktif hale gelmesini sağladım.

## Durum Görünümleri

Uygulamada dört farklı durum oluşturdum:

- **Loading:** API isteği devam ederken `Kullanıcılar yükleniyor...` mesajı gösterildi.
- **Success:** Kullanıcılar başarıyla geldiğinde başarı mesajı gösterildi.
- **Empty:** API boş bir dizi döndürdüğünde `Kullanıcı bulunamadı` mesajı gösterildi.
- **Error:** API isteği başarısız olduğunda hata mesajı ve `Tekrar Dene` butonu gösterildi.

## Tekrar Dene Özelliği

API isteği başarısız olduğunda ekranda `Tekrar Dene` butonunun görünmesini sağladım.

Bu butona basıldığında `getUsers()` fonksiyonu yeniden çalışarak API isteğini tekrar göndermektedir.

## Eksik Alan Kontrolü

API'den gelen kullanıcı verilerinde şehir bilgisi eksik olabileceği için optional chaining ve varsayılan değer kullandım:

```js
user.address?.city || "Şehir bilgisi yok"
```

Bu sayede şehir bilgisi bulunmadığında uygulama hata vermek yerine kullanıcıya `Şehir bilgisi yok` mesajını göstermektedir.

## Test Sonuçları

| Test Senaryosu | Uygulanan İşlem | Beklenen Sonuç | Gerçekleşen Sonuç |
| --- | --- | --- | --- |
| Başarılı cevap | Doğru `/users` endpoint'i kullanıldı | Kullanıcıların listelenmesi | 10 kullanıcı başarıyla listelendi |
| Hatalı endpoint | Geçersiz endpoint kullanıldı | Hata görünümü ve Tekrar Dene butonu | Hata mesajı ve Tekrar Dene butonu gösterildi |
| Eksik şehir bilgisi | İlk kullanıcının şehir değeri geçici olarak `null` yapıldı | Varsayılan şehir mesajı | `Şehir bilgisi yok` mesajı gösterildi |

## Sonuç

Bu çalışmada API isteklerinde yalnızca başarılı senaryoyu değil, hata ve eksik veri durumlarını da yönetmeyi uyguladım. `try/catch/finally`, `throw new Error`, `console.error`, durum mesajları ve tekrar deneme mekanizması kullanarak uygulamanın hata durumlarında da kontrollü şekilde çalışmaya devam etmesini sağladım.