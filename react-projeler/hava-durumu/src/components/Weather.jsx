import React, { useState } from "react";
import "./weather.css";
const Weather = () => {
  const [name, setName] = useState();
  const [temp, setTemp] = useState();
  const [feelTemp, setFellTemp] = useState();
  const [minTemp, setMinTemp] = useState();
  const [maxTemp, setMaxTemp] = useState();
  const [isShow, setIsShow] = useState(false);

  // Api'a istek atıp hava durumu verilerini alacak fonksiyon
  const getWeatherData = async (value) => {
    // Api'a istek at
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=d4dbd406439d567485abdbaaa5c46db6&units=metric`
      );
      // Api'dan json veri tipinde gelen datayı js nesnesine çevir
      const data = await res.json();
      // Buradaki datayı bileşen içerisinde kullanabilmek için useState kullanılır.

      // Data içerisindeki name'i name state'ine aktar
      setName(data.name);
      // Data içerisindeki temp'i temp state'ine aktar
      setTemp(data.main.temp);
      // Data içerisindeki felltemp'i felltemp state'ine aktar
      setFellTemp(data.main.feels_like);
      // Data içerisindeki min_temp'i minTemp state'ine aktar
      setMinTemp(data.main.temp_min);
      // Data içerisindeki max_temp'i maxTemp state'ine aktar
      setMaxTemp(data.main.temp_max);
      // Api'dan veri geldikten sonra isShow stateimi true'ya çek
      setIsShow(true);
    } catch (err) {
      alert(`Hataa: ${err}`);
    }

    // ! Api bize Kelvin cinsinden veri verdiği için  biz bu veriyi celcius'a çevirmek istedik bunun içinse api'a units=metric parametresi geçirdik
  };

  // Form gönderildiğinde çalışacak fonksiyon
  const handleSubmit = (e) => {
    // Sayfa yenilemeyi iptal et
    e.preventDefault();

    const value = e.target[0].value;

    getWeatherData(value);
  };

  return (
    <div>
      {/* Title */}
      <h1>Hava Durumu Uygulaması</h1>
      {/* Form */}
      <form onSubmit={handleSubmit}>
        <input type="search" placeholder="Şehir adı giriniz..." />
        <button>Verileri Getir</button>
      </form>

      {/* Results */}
      {isShow && (
        <div className="info">
          <p id="city">{name}</p>
          <div className="results">
            <p className="degree">Hava Sıcaklığı: {temp} &#x2103;</p>
            <p className="felt-degree">
              Hissedilen Sıcaklık: <span>{feelTemp} &#x2103;</span>
            </p>
            <p className="max-degree">
              Max Sıcaklık: <span>{maxTemp} &#x2103;</span>
            </p>
            <p className="min-degree">
              Min Sıcaklık: <span>{minTemp} &#x2103;</span>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Weather;
