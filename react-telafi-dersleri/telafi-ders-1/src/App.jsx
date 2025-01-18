import { useEffect, useState } from "react";
import Accordion from "./components/Acordion";
import Header from "./components/Header";
import Main from "./components/Main";
import State from "./components/State";

function App() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isShow, setIsShow] = useState(true);

  // Bir bileşenin ekrana gelmesi
  useEffect(() => {
    console.log(`Bileşen ekrana geldi`);
  }, []);
  // Bileşenin güncellenmesi
  useEffect(() => {
    console.log(`Bileşen güncellendi`);
  }, [isAdmin]);
  // Bileşenin ekrandan kaldırılması
  useEffect(() => {
    return console.log(`Bileşen kaldırıldı`);
  }, []);
  return (
    <div>
      {/* <Header />
      <Main /> */}

      <State />
      <button onClick={() => setIsShow(!isShow)}>Göster</button>
      {isShow && <Accordion />}

      <div>
        <button onClick={() => setIsAdmin(!isAdmin)}>Değiş</button>

        {isAdmin ? <h1>Admin Girişi</h1> : <h1>Kullanıcı Girişi</h1>}
      </div>
    </div>
  );
}

export default App;
