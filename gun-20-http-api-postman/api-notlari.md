# Gün 20 - HTTP ve API Notları

## 1. GET - Tüm Kullanıcılar

Metot: GET

Endpoint:
https://jsonplaceholder.typicode.com/users

Gönderilen veri:
Yok

Status Code:
200 OK

Response:
Kullanıcı bilgilerinden oluşan JSON dizisi döndü.


## 2. GET - Tek Kullanıcı

Metot: GET

Endpoint:
https://jsonplaceholder.typicode.com/users/1

Gönderilen veri:
Yok

Status Code:
200 OK

Response:
ID değeri 1 olan kullanıcıya ait JSON object döndü.


## 3. GET - Bulunamayan Kullanıcı

Metot: GET

Endpoint:
https://jsonplaceholder.typicode.com/users/9999

Gönderilen veri:
Yok

Status Code:
404 Not Found

Response:
{}
 

## 4. POST - Yeni Gönderi Oluşturma

Metot: POST

Endpoint:
https://jsonplaceholder.typicode.com/posts

Gönderilen veri:

{
    "title": "Staj API Çalışması",
    "body": "Postman ile POST isteği testi",
    "userId": 1
}

Status Code:
201 Created

Response:
Gönderilen verilere ek olarak yeni oluşturulan kayıt için id değeri 101 döndü.


## 5. PATCH - Gönderi Güncelleme

Metot: PATCH

Endpoint:
https://jsonplaceholder.typicode.com/posts/1

Gönderilen veri:

{
    "title": "Güncellenmiş Başlık"
}

Status Code:
200 OK

Response:
ID değeri 1 olan gönderinin title alanı güncellenmiş şekilde JSON response döndü.


## 6. DELETE - Gönderi Silme

Metot: DELETE

Endpoint:
https://jsonplaceholder.typicode.com/posts/1

Gönderilen veri:
Yok

Status Code:
200 OK

Response:
{}