# Gün 6 - Flexbox

## Ana Eksen ve Çapraz Eksen

Flexbox yapısında ana eksenin yönünü `flex-direction` özelliği belirler. `flex-direction: row` kullanıldığında ana eksen yatay, çapraz eksen ise dikey olur. `flex-direction: column` kullanıldığında ana eksen dikey, çapraz eksen ise yatay olur.

`justify-content`, flex elemanlarını ana eksen üzerinde hizalarken `align-items` çapraz eksen üzerinde hizalar. Bu nedenle bu özelliklerin yatay veya dikey çalışması, kullanılan `flex-direction` değerine göre değişir.


## Uygulama Notu

Bu çalışmada header bölümünde logo ile menüyü karşılıklı uçlara yerleştirmek için Flexbox kullandım. Teknoloji kartlarını yatay sıraladım ve `flex-wrap` sayesinde ekran daraldığında kartların alt satıra geçmesini sağladım. Kartların içeriğini dikey Flexbox ile düzenleyerek açıklama uzunlukları farklı olsa da butonları aynı hizada tuttum.