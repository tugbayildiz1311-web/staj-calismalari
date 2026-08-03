# Gün 10 - JavaScript Döngüler

Bu çalışmada JavaScript’te tekrar eden işlemleri daha düzenli yapmak için döngüleri kullandım. Aynı kodu birçok kez elle yazmak yerine `for`, `while` ve `for...of` yapılarıyla işlemleri otomatik olarak tekrarladım.

İlk olarak en az sekiz üründen oluşan bir `products` dizisi oluşturdum. Ürünleri klasik `for` döngüsüyle sıra numarası vererek Console’a yazdırdım. Dizi indekslerinin `0`dan başladığını, ancak kullanıcıya sıra numarası gösterirken `i + 1` kullanmam gerektiğini öğrendim.

Aynı ürünleri bu kez `for...of` döngüsüyle tekrar listeledim. `for...of` kullanırken indeks yerine dizideki elemanın kendisine doğrudan ulaşılabildiğini gördüm. Bu nedenle yalnızca dizi elemanlarını kullanmam gereken durumlarda daha sade ve okunaklı olduğunu fark ettim.

Ürünlere ait fiyatları tutan ayrı bir `prices` dizisi oluşturdum. Döngü kullanarak bütün fiyatları topladım ve toplam fiyatı Console’a yazdırdım. Her turda mevcut fiyatı toplam değişkenine ekleyerek toplam fiyatın nasıl değiştiğini gözlemledim. Çalışmanın sonunda toplam fiyatı `42100 TL` olarak buldum.

Stok değerlerini tutmak için bir `stocks` dizisi oluşturdum. Stok değeri `0` olan ürünlerde `continue` kullandım. Böylece stoku bulunmayan ürünler Console’a yazdırılmadan atlandı ve döngü diğer ürünlerle çalışmaya devam etti.

Ürün kodlarını kontrol etmek için ayrı bir `productCodes` dizisi hazırladım. Belirli bir ürün kodunu ararken eşleşme bulunduğunda ürün adını Console’a yazdırdım ve `break` kullanarak arama işlemini durdurdum. Böylece ürün bulunduktan sonra kalan kodların gereksiz yere kontrol edilmesini önledim.

`while` döngüsü kullanarak 1’den 5’e kadar olan sayıları Console’a yazdırdım. Sayaç değerini her turda artırmadığım durumda koşulun sürekli doğru kalacağını ve sonsuz döngü oluşacağını öğrendim. Sonsuz döngünün tarayıcının veya programın kilitlenmesine neden olabileceğini yorum satırıyla açıkladım ve bu kodu çalıştırmadım.

Son olarak fiyat dizisindeki en yüksek değeri döngü kullanarak buldum. Başlangıçta ilk fiyatı en yüksek fiyat olarak kabul ettim. Daha sonra bütün fiyatları sırayla kontrol ederek daha büyük bir değer bulunduğunda en yüksek fiyat değişkenini güncelledim. Sonuç olarak en yüksek fiyatı `20000 TL` olarak buldum.

## `break` ve `continue` farkı

`break`, kullanıldığı anda döngünün tamamını bitirir. Örneğin aranan ürün kodu bulunduğunda kalan ürünleri kontrol etmeye gerek olmadığı için `break` kullandım.

`continue` ise döngüyü tamamen bitirmez. Yalnızca bulunduğu turdaki kalan işlemleri atlayarak sonraki tura geçer. Stok değeri `0` olan ürünleri atlamak için `continue` kullandım.

Kısaca:

- `break`: Döngüyü tamamen durdurur.
- `continue`: Sadece mevcut turu atlayarak sonraki tura geçer.