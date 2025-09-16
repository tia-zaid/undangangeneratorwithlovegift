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

    const teksUndangan = `Assalamualaikum Warahmatullahi Wabarakatuh

Tanpa mengurangi rasa hormat, perkenankan kami mengundang Bapak/Ibu/Saudara/i ${nama} untuk menghadiri acara kami.

Berikut link undangan kami, untuk info lengkap dari acara bisa kunjungi :

${linkUndangan}

Merupakan suatu kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan untuk hadir dan memberikan doa restu.

Terima kasih banyak atas perhatiannya.

Wassalamualaikum Warahmatullahi Wabarakatuh`;

    setHasilUndangan(teksUndangan);
    setShowResult(true);
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
            <button onClick={copyToClipboard} className="btn-copy">
              📋 Salin Teks Undangan
            </button>
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
