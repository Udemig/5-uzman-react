import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  const person = "Yusuf YAMAN";
  const giveAlert = () => {
    alert("Butona tıklanıldı");
  };
  return (
    <div>
      <Header />
      <Main />
    </div>
  );
}

export default App;
