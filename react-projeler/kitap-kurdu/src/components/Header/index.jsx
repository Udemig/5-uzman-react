import book from "../../assets/book.png";
const Header = () => {
  return (
    <div className="bg-dark text-light d-flex justify-content-center align-items-center py-3">
      <img src={book} style={{ height: "50px" }} alt="" />
      <h1>Kitap Kurdu</h1>
    </div>
  );
};
export default Header;
