// Harici css dosyasının dahil edilmesi
import "./Style.css";
import Header from "./Header";
function App() {
  return (
    <div className="app">
      <Header />

      <main>
        <section style={{ background: "green" }}>Karşılama Alanı</section>
        <section style={{ background: "blue" }}>Eğitimler Alanı</section>
      </main>
    </div>
  );
}

export default App;
