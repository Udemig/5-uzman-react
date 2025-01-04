// React component mimarisine sahiptir.Proje içerisinde yapılar ayrı ayrı bileşenler şeklinde oluturulur.

// ? Peki bir bileşen nasıl oluşturulur ?

// Bir bileşen oluşturmak için ilk olarak bir js fonksiyonu oluşturulur.

function Header() {
  // Bu js fonksiyonunu bir react bileşenine çeviren olaysa `return kullanımıdır.` return ilgili bileşen içerisinde ekrana render edilecek kısıma denk gelir.

  return (
    <header
    // style={{
    //   backgroundColor: "red",
    //   position: "fixed",
    //   width: "100%",
    //   display: "flex",
    //   alignItems: "center",
    //   justifyContent: "space-between",
    // }}
    >
      <h1 className="logo">Udemig</h1>
      <nav>
        <a href="#">Ana Sayfa</a>
        <a href="#">Hakkımızda</a>
        <a href="#">İletişim</a>
        <a href="#">Sosyal Medya</a>
      </nav>
    </header>
  );
}

export default Header;
