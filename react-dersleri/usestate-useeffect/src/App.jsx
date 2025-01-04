import Counter from "./Counter";
import { useState } from "react";
import Users from "./Users";
function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  return (
    <div className="app">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 20,
        }}
      >
        <h1>Udemig Akademi</h1>
        <button onClick={() => setIsOpen(!isOpen)}>Göster&Gizle</button>
      </div>
      {isOpen && <Counter />}

      {/* Eğer kullanıcı adminse Admin girişi değilse Kullanıcı girişi yazdır */}

      {isAdmin ? <h1>Admin Girişi</h1> : <h1>Kullanıcı Girişi</h1>}

      <Users />
    </div>
  );
}

export default App;
