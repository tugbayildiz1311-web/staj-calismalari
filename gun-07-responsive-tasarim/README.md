# Gün 07 - Responsive Tasarım

Bu çalışmada bir önceki gün Flexbox kullanılarak hazırlanan teknoloji kartları sayfası responsive hâle getirilmiştir. Sayfanın mobil, tablet ve masaüstü ekranlarda düzenli görüntülenmesi amaçlanmıştır.

## Yapılan çalışmalar

- Mobile-first yaklaşımı kullanıldı.
- Mobil ekranlarda kartlar tek sütun hâlinde düzenlendi.
- Tablet ekranlarda kartlar iki sütunlu yapıya geçirildi.
- Masaüstü ekranlarda üç kart aynı satıra yerleştirildi.
- Header ve navigasyon menüsü mobilde dikey, geniş ekranlarda yatay olacak şekilde düzenlendi.
- Ana içerik alanına `max-width` verilerek büyük ekranlarda gereğinden fazla genişlemesi önlendi.
- Ana içerik alanı `margin: 0 auto` ile yatay olarak ortalandı.
- Görsellerin kapsayıcılarından taşmaması için responsive görsel kuralları eklendi.
- 320 piksel genişlikte yatay kaydırma oluşup oluşmadığı kontrol edildi.

## Mobile-first yaklaşımı

Mobile-first yaklaşımında temel CSS kuralları önce küçük ekranlar için yazılır. Ekran genişliği arttıkça `min-width` kullanılan media query'ler aracılığıyla tablet ve masaüstü düzenleri uygulanır.

Bu projede temel tasarım mobil ekranlara göre hazırlanmış, daha sonra 768 piksel ve 1024 piksel kırılma noktalarında sayfa düzeni değiştirilmiştir.

## Responsive düzen

- 768 pikselden küçük ekranlarda kartlar tek sütun olarak görüntülenir.
- 768 piksel ve üzerindeki ekranlarda kartlar iki sütunlu düzene geçer.
- 1024 piksel ve üzerindeki ekranlarda üç kart aynı satırda görüntülenir.
- Sayfa 375, 768 ve 1440 piksel genişliklerinde test edilmiştir.

## Karşılaşılan sorunlar ve çözümleri

### Sorun 1: Mobil ekranda header alanının sıkışması

Header içerisinde bulunan başlık ve navigasyon bağlantıları başlangıçta yatay olarak görüntülendiği için küçük ekranlarda sıkışma oluştu.

**Çözüm:** Mobil görünümde header ve navigasyon menüsüne `flex-direction: column` verilerek başlık ve bağlantılar alt alta yerleştirildi. Tablet ve masaüstü ekranlarda media query kullanılarak tekrar yatay düzene geçirildi.

### Sorun 2: Tablet görünümünde kartların iki sütuna sığmaması

Kartlara doğrudan yüzde 50 genişlik verilmesi durumunda iki kart arasındaki `gap` değeri toplam genişliğin aşılmasına neden olabilirdi.

**Çözüm:** Kart genişliği `calc((100% - 20px) / 2)` şeklinde hesaplandı. Böylece iki kart ve aralarındaki boşluk aynı satıra düzgün şekilde yerleşti.

### Sorun 3: Masaüstünde kartların fazla genişlemesi

Ana içerik alanı büyük ekranlarda ekranın tamamına yayıldığı için içerik gereğinden fazla geniş görünüyordu.

**Çözüm:** `main` elementine `max-width` değeri verildi ve `margin: 0 auto` kullanılarak içerik ortalandı.

## Kullanılan teknolojiler

- HTML5
- CSS3
- Flexbox
- Media Query
- Chrome DevTools