# Gün 4 - Form ve Tablo

Bu çalışmada kullanıcıdan veri almak için HTML form elemanlarını ve verileri satır-sütun biçiminde göstermek için HTML tablo yapısını kullandım.

## Temel Kavramlar

### required

`required`, bir form alanının doldurulmasını zorunlu hâle getirir. Kullanıcı zorunlu alanı boş bırakıp formu göndermeye çalıştığında tarayıcı bir uyarı gösterir ve formun gönderilmesini engeller. Bu çalışmada ad, soyad ve e-posta alanlarında `required` kullandım.

### name

`name`, form gönderildiğinde girilen bilginin hangi isimle gönderileceğini belirtir. Örneğin `name="eposta"` kullanılan bir alana girilen değer, form verileri içerisinde `eposta` adıyla yer alır. Aynı gruba ait radio butonlarında aynı `name` değeri kullanıldığında yalnızca bir seçenek seçilebilir.

### id

`id`, bir HTML elementini sayfa içinde benzersiz olarak tanımlar. Bir sayfada aynı `id` değerinin birden fazla elementte kullanılmaması gerekir. Form alanlarındaki `id` değerlerini, ilgili `label` etiketleriyle bağlantı kurmak için kullandım.

### label ve for ilişkisi

`label`, form alanının kullanıcıdan hangi bilgiyi istediğini açıklar. `label` etiketinin `for` değeri, ilgili form elemanının `id` değeriyle aynı olmalıdır. Bu bağlantı sayesinde kullanıcı etikete tıkladığında ilgili alan aktif olur ve ekran okuyucular alanın amacını daha doğru şekilde açıklayabilir.

Örneğin:

```html
<label for="eposta">E-posta:</label>
<input type="email" id="eposta" name="eposta" required>
```


## Form Gönderimi Hakkında Not

Bu çalışmada form verilerini işleyecek bir sunucu bulunmamaktadır. Bu nedenle form gönderildiğinde sayfanın yenilenmesi ve `GET` yöntemi kullanıldığı için bazı değerlerin adres çubuğunda görünmesi normaldir.