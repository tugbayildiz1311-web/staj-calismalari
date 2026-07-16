# GÜN 3 - SEMANTİK HTML


## Semantik HTML Nedir?
Etiketlerin yalnızca görünüş değil, içerikteki görev hakkında da anlam taşımasıdır.


## Semantik HTML'in Faydaları

### Erişilebilirlik
Semantik etiketler, ekran okuyucuların sayfadaki menü, ana içerik ve alt bilgi gibi bölümleri ayırt etmesini sağlar. Böylece yardımcı teknoloji kullanan kişiler sayfa içinde daha kolay gezinebilir.

### Arama Motorları Açısından Faydası
`main`, `article`, `nav` ve `footer` gibi etiketler, arama motorlarının sayfanın yapısını ve hangi içeriğin daha önemli olduğunu anlamasına yardımcı olur. Bu kullanım tek başına yüksek sıralama sağlamaz ancak içeriğin daha doğru yorumlanmasına katkıda bulunur.

### Kodun Okunabilirliği
Semantik etiketler, bir bölümün görevini doğrudan ifade ettiği için kodun anlaşılmasını kolaylaştırır. Örneğin `<nav>` görüldüğünde bu bölümün menü bağlantılarını içerdiği hemen anlaşılır. Bu sayede kod üzerinde çalışmak ve ileride değişiklik yapmak daha kolay olur.


## Eski ve Yeni Yapı Arasındaki Fark
Eski yapıda başlıklar, paragraflar, listeler, görsel ve bağlantılar doğrudan `<body>` etiketi altında bulunuyordu. Bu yapı tarayıcıda çalışsa da sayfadaki bölümlerin hangi görevi üstlendiği açık şekilde anlaşılmıyordu.

Yeni yapıda içerikler anlamlarına göre `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>` ve `<footer>` etiketleriyle gruplandırıldı. Menü bağlantıları `id` değerleri kullanılarak ilgili bölümlere yönlendirildi. Böylece sayfanın temel içeriği korunurken HTML yapısı daha anlaşılır, erişilebilir ve düzenli hâle geldi.