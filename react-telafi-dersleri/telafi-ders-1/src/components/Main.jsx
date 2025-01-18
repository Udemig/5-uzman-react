import "../style/Main.css";
const Main = () => {
  return (
    <main>
      <div className="left">
        <h1 style={{ backgroundColor: "black", fontSize: 44 }}>sol kısım</h1>
      </div>
      <div className="center">
        <h1 className="center-title">sağ kısım</h1>
      </div>
      <div className="right">
        <h1>orta kısım</h1>
      </div>
    </main>
  );
};

export default Main;
