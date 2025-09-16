import { useState } from "react";
import "./App.css";

function App() {
  const [nama, setNama] = useState("");
  const [hasilUndangan, setHasilUndangan] = useState("");
  const [showResult, setShowResult] = useState(false);

  const generateUndangan = () => {
    if (!nama.trim()) {
      alert("Mohon masukkan nama terlebih dahulu");
      return;
    }

    const linkUndangan = `https://undangan-dandi-ayu.rifkidocs.eu.org/?to=${encodeURIComponent(
      nama
    )}`;

    const teksUndangan = `Bissmillahirrahmanirrahim
Assalamualaikum Warahmatullahi Wabarakatuh
Kepada Yth:
*${nama}*

Tanpa mengurangi rasa hormat, perkenankan kami mengundang Bapak/Ibu/Saudara/i - ${nama} - untuk menghadiri acara kami. 

Ika Dyah Ayu Fitria S. Psi
dengan
A. Dandi Firmansyah S. Psi

Untuk Info Detail Acara, Lokasi, dan Waktu Lebih Lengkap bisa akses link undangan online berikut :
${linkUndangan}

Merupakan Suatu Kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Rekan-rekan berkenan hadir dan memberikan doa restu di acara pernikahan kami.

Karena keterbatasan jarak dan waktu tidak dapat mengirimkan undangan ini secara langsung, maka melalui e-invitation ini dapat menjadi pengganti undangan resmi sehingga tujuan kami tersampaikan.

Hormat Kami yang berbahagia
Ayu dan Dandi

Wassalamualaikum Warahmatullahi Wabarakatuh`;

    setHasilUndangan(teksUndangan);
    setShowResult(true);

    // Scroll to result section after generating
    setTimeout(() => {
      const resultSection = document.querySelector(".result-section");
      if (resultSection) {
        resultSection.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100);
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(hasilUndangan);
      alert("Teks undangan berhasil disalin!");
    } catch (err) {
      console.error("Gagal menyalin teks:", err);
      alert("Gagal menyalin teks. Silakan salin manual.");
    }
  };

  const resetForm = () => {
    setNama("");
    setHasilUndangan("");
    setShowResult(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="app">
      <div className="container">
        <header>
          <h1>🎉 Tebar Undangan Generator</h1>
          <p>Buat undangan digital dengan mudah untuk acara Anda</p>
        </header>

        <div className="form-section">
          <div className="input-group">
            <label htmlFor="nama">Nama Penerima Undangan:</label>
            <input
              type="text"
              id="nama"
              value={nama}
              onChange={(e) => setNama(e.target.value)}
              placeholder="Masukkan nama penerima undangan"
              className="nama-input"
            />
          </div>

          <div className="button-group">
            <button onClick={generateUndangan} className="btn-generate">
              Generate Undangan
            </button>
            {showResult && (
              <button onClick={resetForm} className="btn-reset">
                Reset
              </button>
            )}
          </div>
        </div>

        {showResult && (
          <div className="result-section">
            <h2>Hasil Undangan:</h2>
            <div className="result-box">
              <pre>{hasilUndangan}</pre>
            </div>
            <div className="result-buttons">
              <button onClick={copyToClipboard} className="btn-copy">
                📋 Salin Teks Undangan
              </button>
              <button onClick={scrollToTop} className="btn-scroll-top">
                ⬆️ Kembali ke Atas
              </button>
            </div>
          </div>
        )}

        <footer>
          <p>
            © {new Date().getFullYear()} Tebar Undangan Generator - Dibuat
            dengan ❤️
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
