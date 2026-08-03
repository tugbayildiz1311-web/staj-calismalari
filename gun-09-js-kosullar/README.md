# Gün 09 - JavaScript Koşullar ve Sipariş Kontrolü

Bu çalışmada JavaScript’te `if`, `else if` ve `else` yapılarını kullanarak bir sipariş kontrol programı hazırladım. Programda ödeme durumu, stok sayısı, sipariş toplamı, kullanıcı rolü ve sipariş durumu gibi farklı bilgiler kontrol edilmektedir.

Ödeme yapılmamışsa “Ödeme bekleniyor.”, ödeme yapılmış ancak stok yoksa “Ürün stokta yok.”, ödeme yapılmış ve stok varsa “Sipariş hazırlanabilir.” mesajı gösterilmektedir. Sipariş toplamı 1000 TL veya üzerindeyse ayrıca “Ücretsiz kargo.” mesajı yazdırılmaktadır.

Kullanıcı rolü `admin` olduğunda sipariş durumunun değiştirilebileceği, `customer` olduğunda ise siparişin yalnızca görüntülenebileceği belirtilmiştir. Bilinmeyen kullanıcı rolleri için ayrı bir uyarı mesajı eklenmiştir.

Sipariş durumlarını kontrol etmek için `switch` yapısını kullandım. `pending`, `preparing`, `shipped` ve `delivered` durumları için farklı mesajlar oluşturdum. Tanımlanmayan bir sipariş durumu girildiğinde `default` bölümü çalışarak “Bilinmeyen sipariş durumu.” mesajını göstermektedir.

Programı altı farklı senaryoyla test ettim. Her senaryodan önce beklediğim sonuçları yorum satırı olarak yazdım ve Console’da oluşan gerçek çıktılarla karşılaştırdım. Koşullarda `&&` ve `!` mantıksal operatörlerini de kullandım.

## `===` ve `==` farkı

`==` operatörü karşılaştırma yaparken veri tiplerini otomatik olarak dönüştürebilir. Bu nedenle `5 == "5"` işleminin sonucu `true` olur.

`===` operatörü ise hem değerlerin hem de veri tiplerinin aynı olup olmadığını kontrol eder. Bu nedenle `5 === "5"` işleminin sonucu `false` olur.

Beklenmeyen veri tipi dönüşümlerini önlemek için bu çalışmada mümkün olduğunca `===` operatörünü kullandım.