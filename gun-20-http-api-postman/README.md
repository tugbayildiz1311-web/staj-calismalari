# Gün 20 - HTTP ve REST API Çalışması

Bu çalışmada frontend ile backend arasındaki temel iletişim mantığını ve HTTP isteklerinin Postman üzerinden nasıl test edildiğini uyguladım. Güvenli test ortamı olarak JSONPlaceholder API'sini kullandım.

## Temel Kavramlar

**Request:** İstemcinin sunucuya veri almak, oluşturmak, güncellemek veya silmek amacıyla gönderdiği istektir.

**Response:** Sunucunun gelen request'e karşılık istemciye gönderdiği cevaptır.

**Endpoint:** API içerisinde belirli bir kaynağa veya işleme erişmek için kullanılan URL adresidir.

**Status Code:** Sunucunun isteğin sonucunu belirtmek için döndürdüğü sayısal HTTP kodudur.

## HTTP Metotları

`GET`, sunucudan veri almak için kullanılır.

`POST`, sunucuda yeni bir veri veya kaynak oluşturmak için kullanılır.

`PUT`, mevcut bir kaynağın tamamını güncellemek için kullanılır.

`PATCH`, mevcut bir kaynağın belirli alanlarını güncellemek için kullanılır.

`DELETE`, bir kaynağı silmek için kullanılır.

## Temel HTTP Status Kodları

- `200 OK`: İstek başarıyla gerçekleştirildi.
- `201 Created`: Yeni bir kaynak başarıyla oluşturuldu.
- `204 No Content`: İşlem başarılı ancak response body bulunmuyor.
- `400 Bad Request`: Gönderilen istek geçersiz.
- `401 Unauthorized`: Kimlik doğrulama gerekiyor.
- `403 Forbidden`: İstek anlaşılmış ancak erişim izni bulunmuyor.
- `404 Not Found`: İstenen kaynak bulunamadı.
- `500 Internal Server Error`: Sunucu tarafında beklenmeyen bir hata oluştu.

## Postman ile Yapılan Testler

Postman kullanarak JSONPlaceholder API'sine farklı HTTP istekleri gönderdim.

`GET /users` isteği ile kullanıcı listesini aldım ve `200 OK` status code'unu, response header bilgilerini ve JSON response body'yi inceledim.

`GET /users/1` isteği ile tek bir kullanıcıya ait verileri aldım.

Var olmayan bir kullanıcı için `GET /users/9999` isteği göndererek `404 Not Found` sonucunu gözlemledim.

`POST /posts` endpoint'ine örnek bir gönderi göndererek yeni kaynak oluşturma işlemini test ettim. Sunucu `201 Created` status code'u ve oluşturulan kayıt için `id: 101` değeri döndürdü.

`PATCH /posts/1` isteği ile örnek bir gönderinin yalnızca `title` alanını güncelledim ve `200 OK` cevabı aldım.

`DELETE /posts/1` isteği ile silme işlemini test ettim. JSONPlaceholder bu işlem için `200 OK` ve boş bir JSON object döndürdü.

## JSON

JSON, veri alışverişinde sık kullanılan metin tabanlı bir formattır. JavaScript object yapısına benzer ancak JSON içerisinde property isimleri çift tırnak içerisinde yazılır.

Postman üzerinden gönderilen ve alınan JSON verilerini request ve response body alanlarında inceledim.

## Güvenlik Notu

JSONPlaceholder gibi test API'lerine gerçek kişisel bilgiler, parolalar, kimlik bilgileri veya başka gizli veriler göndermedim. Testlerde yalnızca örnek ve sahte veriler kullandım.

## Sonuç

Bu çalışmada HTTP request ve response yapısını, endpoint kavramını, temel HTTP metotlarını ve status code'ları Postman kullanarak uygulamalı olarak çalıştım. GET, POST, PATCH ve DELETE isteklerinin farklı amaçlarla nasıl kullanıldığını ve başarılı response ile hata response'larının nasıl ayırt edildiğini gözlemledim.