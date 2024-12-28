# React Nedir ?

- React facebook tarafından geliştirilmiş bir kütüphanedir.Bu kütüphan temelde javascript kodlaması yaparak uygulama geliştirmemizi sağlar.Güncel projelerin bir çoğunda react aktif olarak kullanılır.

- React'ın popüler olma sebeplerinden başlıcaları açık kaynaklı kütüphane desteği ve performanslı uygulamalar oluşturmasıdır.

# React uygulaması nasıl oluşturulur?

- `npx create-react-app (proje ismi)` komutuyla bir react uygulaması oluşturulur.

- Oluşturulan bu proje içerisinde hazır gelen bazı dosyalar mevcuttur.Bu dosyaların ne olduğuna birlikte bakalım:

- 1. `node-modules` Bu klasör projenin bağımlılıklarını yani projenin çalışması için gerekli dosyaları içerisinde bulundurur.Neredeyse projenin dosya boyutunun büyüklüğünün tamamını node-modules kaplar.Bu dosya olmadan proje ayağa kalkmaz.Bu dosya içerisine elle ekleme çıkarma yapmayız.

- 2. `public` Bu klasör içerisinde herkes tarafından erişilebilir dosyaları bulundurur.

- 3. `gitignore` Proje githuba gönderildiğinde bu dosya içerisinde yer alan dosyalar githuba gönderilmez.

- 4. `package.json` Projede kullanılan kütüphanelerin sürümlerini ve projeyi çalıştırmak için gereken kodların bulunduğu dosyadır.

- 5. `package-lock.json` Proje bağımlılıklarının daha detaylı şekilde yazdığı bir dosyadır.

- 6. `src` Bu klasör bizim uygulamamızı geliştireceğimiz dosyadır.Bu dosya içerisinde kodlamalar yapacağız.
