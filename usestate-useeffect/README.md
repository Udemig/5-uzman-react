# Jsx Nedir ?

- Jsx react projelerinde bir dosya içerisinde hem javascript hemde html kodu yazmamıza olanak sağlayan bir yapıdır.

- Jsx ile bir elemana olay izleyicisi eklemek istersek bunu javascript deki gibi uzun uzadıya yapmak yerine satır içerisinde kısa bir şekilde yapabiliriz.

# useState Nedir?

- React içerisinde verilerimizi yönetmek için useState kullanılır.useState i kullanmak için önce react içerisinde import edilir.Sonrasında `const [birinciDeğer,ikinciDeğer]=useState(başlangıçDeğeri)` yapısı oluşturulur.

- Buradaki birinciDeğer bizim için bir state'dir.Yani verilerimizi yönettiğimiz bir yapıdır.ikinciDeğer ise state güncellemeye yarayan bir fonksiyondur.Bu fonksiyonla statein değerini güncelleyebiliriz.

- başlangıçDeğeri ise bir statein ilk değeridir.

# Koşullu Renderlama

- React da bir bileşenin ekranda bulunmasını bir koşula bağlamak için koşullu renderlama kullanılır.Bu metod iki farklı şekilde kullanılabilir.

- 1. And (&&) Operatörü:
- And operatörü bir bileşenin bir koşul sağlanması durumunda ekrana render edilmesini sağlar

- 2. Ternary(? :) Operatör
- Ternary operatör ise bir koşul sağlanırsa bunu sağlanmazsa bunu render et demek için kullanılır.

# Lifecycle

- React da bir bileşenin ekrana gelme,güncellenme ve ekrandan kaldırılma anını izlemek için useEffect kullanılır.Bu metot sayesinde bileşenin çeşitli durumlarını izleyebiliriz.

- useEffect(()=>{},[]) ==> Bileşenin ekrana gelme anını izler

- useEffect(()=>{ return },[]) ==> Bileşenin ekrana gitme anını izler

- useEffect(()=>{},[değer]) ==> Bileşenin güncellenme anını izler
