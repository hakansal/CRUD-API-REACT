import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './cssfiles/css.css'; // CSS dosyanızı ekledim

function MyInput() {
  return (
    <input className='Myinput'></input>
  );
}
 
 
function App() {
  const [karts, setKarts] = useState([]);

  const getKarts = async () => {
    try {
      const res = await axios.get("http://localhost:3001/veriler");
      console.log(res.data); // Gelen veriyi kontrol etmek için
      setKarts(res.data); // Tüm veriyi set ediyoruz, karts olarak
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };const deleteNote=async(_id)=>{
    const res =await axios.delete("http://localhost:3001/notes/delete/"+_id);

  };

  useEffect(() => {
    getKarts();
  }, []); // useEffect'i boş dizi ile çağırarak sadece bir kez çağırmasını sağlarız.

  return (
    <div className="App">
      <div className='Divrigth'>
        {
          karts && karts.map((kart) => (
            <div key={kart.id}>
            <li>{kart.stok_kodu }  {kart.stok_adi}   {kart.stok_tipi }  {kart.birimi} 
            {kart.barkodu }  {kart.kad_tipi} {kart.aciklama } {kart.olusturma_zamani}
            </li>
            </div>
          ))
        }
      </div >
      <div> 
      <form>
        <label>Stok Kodu</label>
        <MyInput />
        <label>Stok Adı</label>
        <MyInput />
        <label>Stok Tipi</label>
        <MyInput />
        <label>Birimi</label>
        <MyInput />
        <label>Barkodu</label>
        <MyInput />
        <label>KDV Tipi</label>
        <MyInput />
        <label>Açıklama</label>
        <MyInput />
        <label>Oluşturma Zamanı</label>
        <MyInput />

        <button type="button">Ekle</button>
        <button type="button">Sil</button>
        <button type="button">Görüntüle</button>
        <button type="button">Güncelle</button>
      </form></div>
    </div>
  );
}

export default App;
