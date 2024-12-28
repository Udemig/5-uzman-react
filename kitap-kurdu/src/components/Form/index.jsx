import { useState } from "react";
import { toast } from "react-toastify";
import { v4 } from "uuid";
const Form = () => {
  const [books, setBooks] = useState([]);

  const handleSubmit = (e) => {
    // Sayfa Yenilemeyi iptal et
    e.preventDefault();

    // Input içerisindeki değer eriş
    const bookName = e.target[0].value;

    // Eğer kitap adı girilmediyse uyarı ver
    if (!bookName) {
      // Toast ile kullanıcıya bildirim verebiliriz.Toast kullancıya iletilecek metni alır ve bildirim iletir.
      toast.info("Eklemek istediğiniz kitap adını giriniz !", {
        position: "top-right",
        autoClose: 3000,
      });

      return;
    }

    // Kitap adı girildiyse bir kitap nesnesi oluştur.

    const newBook = {
      id: v4(),
      bookName,
      date: new Date()
        .toLocaleDateString("tr-Tr", {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
        })
        .replaceAll(".", "/"),
    };
    // Books dizisine eleman eklerken öncekileri koru yenisi diziye ekle
    setBooks([...books, newBook]);

    // Inputun içerisini sıfırla
    e.target[0].value = "";

    // Kullanıcıya bir bildirim gönder

    toast.success("Kitap başarıyla eklendi");
  };

  console.log(books);

  return (
    <>
      <form onSubmit={handleSubmit} className="d-flex mt-4 gap-3 p-4">
        <input type="text" className="form-control shadow" />
        <button className="btn btn-warning shadow">Ekle</button>
      </form>

      {books.map((book) => (
        <h1>{book.bookName} </h1>
      ))}
    </>
  );
};
export default Form;
