const Header = () => {
  return (
    <header>
      <a href="#" className="logo">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbnf2sG4fGDg5hj57FC5VJSEyO4ISuuMIOpg&s"
          alt="logo"
        />
      </a>
      <nav>
        <a href="#">Ana Sayfa</a>
        <a href="#">Hakkımızda</a>
        <a href="#">İletişim</a>
        <a href="#">Sosyal Medya</a>
      </nav>

      <button>Giriş Yap</button>
    </header>
  );
};

export default Header;
