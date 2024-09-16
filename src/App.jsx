import Content from "./Components/Content";
import Footer from "./Components/Footer";
import Header from "./Components/Header"

function App() {
  // props
  // mengirim sebuah data yg berupa string dari induk ke sebuah komponents anakk(childern)
  const heading = "imals Fao";
  // nah di props juga kita bisa mengirim data lebih dari satu data
  // tapi variabel yang menjadi tampungan nya harus berbeda dengan variabel yang lain
  // itu karena agar nanti pemanggilan isis data props nya menjadi lebih mudah
  const text = "aku ini anak soleh dan baik hati(kata mamah)";

  const textContent = () => {
    return (
      <>
        <h1>Hallo Everyone</h1>
        <p>Nah kita kali ini belajar mengenai props</p>
        {/* 

          props yang di kirim kan berupa sebuah funtion yang di dalam nya ada beberapa tag html
          dan gunanya return adalah mengembalikan nilai apa saja yang berada pada arrow funtion ini

        */}
      </>
    )
  }

  return (
    <>
      <Header headingText={heading} textValue={text} />
      {/* 

        heading text adalah sebuah variabel tampungan untuk
        menampung data variabel yang bernama heading
        dan headingText ini di kirim kan ke sebuah komponents yang bernama header melalui props

      */}

      <Content dataDiri={textContent} />
      {/* 
      
        NAH di props juga tidak hanya bisa mengirim kan data string doang tetapi bisa juga mengirimkan sebuah arrow funtion
        penjelasan nya adalah kita mengirim sebuah funtion dari induk ke childer nya agar funtion yg di kirim nya bisa di 
        tampilkan di childer yang di kirim props
      
      */}

      <Footer end="See You Guys"/>

      {/* 
      
        untuk props di bagian footer itu hanya mengirim data berupa string biasa
        makanya mengirimkan nya tidak menggunakan kurung kurawal dan hanya pake kutip 2

      */}
    </>
  )
}

export default App;
