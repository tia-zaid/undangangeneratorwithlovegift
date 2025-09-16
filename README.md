# 🎉 Tebar Undangan Generator

Aplikasi web modern untuk membuat undangan digital dengan mudah. Dibangun menggunakan React, TypeScript, dan Vite untuk performa yang optimal.

## ✨ Fitur

- 🚀 **Interface yang User-Friendly** - Desain yang bersih dan mudah digunakan
- 📝 **Generator Undangan Otomatis** - Buat undangan dengan format yang rapi
- 📋 **Copy to Clipboard** - Salin teks undangan dengan satu klik
- 📱 **Responsive Design** - Tampil sempurna di desktop dan mobile
- ⚡ **Fast & Lightweight** - Dibangun dengan Vite untuk performa terbaik

## 🛠️ Teknologi yang Digunakan

- **React 19.1.1** - Library UI modern
- **TypeScript** - Type safety dan developer experience yang lebih baik
- **Vite** - Build tool yang cepat dan efisien
- **CSS3** - Styling modern dengan responsive design
- **ESLint** - Code quality dan consistency

## 🚀 Cara Menjalankan

### Prerequisites

Pastikan Anda sudah menginstall:

- [Node.js](https://nodejs.org/) (versi 16 atau lebih baru)
- [Yarn](https://yarnpkg.com/) atau npm

### Installation

1. Clone repository ini:

```bash
git clone https://github.com/username/tebar-undangan-generator.git
cd tebar-undangan-generator
```

2. Install dependencies:

```bash
yarn install
# atau
npm install
```

3. Jalankan development server:

```bash
yarn dev
# atau
npm run dev
```

4. Buka browser dan kunjungi `http://localhost:5173`

### Build untuk Production

```bash
yarn build
# atau
npm run build
```

## 📖 Cara Penggunaan

1. **Masukkan Nama** - Ketik nama penerima undangan di field yang tersedia
2. **Generate Undangan** - Klik tombol "Generate Undangan" untuk membuat teks undangan
3. **Salin Teks** - Gunakan tombol "Salin Teks Undangan" untuk menyalin ke clipboard
4. **Reset** - Klik "Reset" untuk membuat undangan baru

## 🎨 Cara Mengedit Template Undangan

### 1. Mengubah Template Teks Undangan

Untuk mengkustomisasi template undangan, edit file `src/App.tsx` pada bagian `generateUndangan` function:

```typescript
const teksUndangan = `Assalamualaikum Warahmatullahi Wabarakatuh

Tanpa mengurangi rasa hormat, perkenankan kami mengundang Bapak/Ibu/Saudara/i ${nama} untuk menghadiri acara kami.

Berikut link undangan kami, untuk info lengkap dari acara bisa kunjungi :

${linkUndangan}

Merupakan suatu kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan untuk hadir dan memberikan doa restu.

Terima kasih banyak atas perhatiannya.

Wassalamualaikum Warahmatullahi Wabarakatuh`;
```

### 2. Mengubah Link Undangan

Ubah URL undangan di bagian ini:

```typescript
const linkUndangan = `https://undangan-dandi-ayu.rifkidocs.eu.org/?to=${encodeURIComponent(
  nama
)}`;
```

Ganti dengan URL undangan Anda sendiri.

### 3. Mengubah Judul dan Deskripsi Aplikasi

Edit bagian header di `src/App.tsx`:

```typescript
<header>
  <h1>🎉 Tebar Undangan Generator</h1>
  <p>Buat undangan digital dengan mudah untuk acara Anda</p>
</header>
```

### 4. Mengubah Styling dan Tampilan

Edit file `src/App.css` untuk mengubah:

- **Warna tema** - Ubah variabel CSS atau warna langsung
- **Font** - Ganti font family
- **Layout** - Modifikasi spacing, padding, margin
- **Responsive design** - Sesuaikan untuk mobile/desktop

### 5. Contoh Template Kustomisasi

```typescript
// Template untuk acara pernikahan
const teksUndangan = `Assalamualaikum Warahmatullahi Wabarakatuh

Dengan memohon rahmat dan ridho Allah SWT, perkenankan kami mengundang Bapak/Ibu/Saudara/i ${nama} untuk menghadiri acara pernikahan putra-putri kami.

Detail acara:
📅 Tanggal: [Tanggal Acara]
🕐 Waktu: [Waktu Acara]
📍 Tempat: [Alamat Lengkap]

Link undangan lengkap: ${linkUndangan}

Atas kehadiran dan doa restu Bapak/Ibu/Saudara/i, kami ucapkan terima kasih.

Wassalamualaikum Warahmatullahi Wabarakatuh`;
```

### 6. Menambah Variabel Dinamis

Anda bisa menambah input field untuk variabel lain seperti tanggal, waktu, tempat:

```typescript
const [tanggal, setTanggal] = useState("");
const [waktu, setWaktu] = useState("");
const [tempat, setTempat] = useState("");

// Dalam template
const teksUndangan = `...untuk menghadiri acara kami pada:
📅 Tanggal: ${tanggal}
🕐 Waktu: ${waktu}
📍 Tempat: ${tempat}

${linkUndangan}...`;
```

### 7. Tips Kustomisasi Lanjutan

#### A. Menambah Multiple Template

```typescript
const [templateType, setTemplateType] = useState("default");

const generateUndangan = () => {
  let teksUndangan = "";

  switch (templateType) {
    case "pernikahan":
      teksUndangan = `Template pernikahan untuk ${nama}...`;
      break;
    case "ulangtahun":
      teksUndangan = `Template ulang tahun untuk ${nama}...`;
      break;
    default:
      teksUndangan = `Template default untuk ${nama}...`;
  }

  setHasilUndangan(teksUndangan);
  setShowResult(true);
};
```

#### B. Menambah Validasi Input

```typescript
const generateUndangan = () => {
  if (!nama.trim()) {
    alert("Mohon masukkan nama terlebih dahulu");
    return;
  }

  if (nama.length < 2) {
    alert("Nama harus minimal 2 karakter");
    return;
  }

  // Generate undangan...
};
```

#### C. Menambah Preview Real-time

```typescript
const [preview, setPreview] = useState("");

useEffect(() => {
  if (nama.trim()) {
    const previewText = `Preview: Undangan untuk ${nama}...`;
    setPreview(previewText);
  }
}, [nama]);
```

## 🚀 Cara Deploy ke Production

### 1. Build Aplikasi

```bash
yarn build
```

### 2. Deploy ke Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### 3. Deploy ke Netlify

```bash
# Build dulu
yarn build

# Upload folder 'dist' ke Netlify
```

### 4. Deploy ke GitHub Pages

```bash
# Install gh-pages
yarn add -D gh-pages

# Tambahkan script di package.json
"homepage": "https://username.github.io/tebar-undangan-generator",
"scripts": {
  "predeploy": "yarn build",
  "deploy": "gh-pages -d dist"
}

# Deploy
yarn deploy
```

## 🎯 Fitur Utama

### Generator Undangan Otomatis

Aplikasi ini secara otomatis membuat format undangan yang rapi dengan:

- Salam pembuka yang sopan
- Nama penerima yang dipersonalisasi
- Link undangan yang dapat dikustomisasi
- Penutup yang hangat

### Copy to Clipboard

Fitur ini memungkinkan Anda untuk:

- Menyalin teks undangan dengan satu klik
- Mengirim undangan melalui WhatsApp, email, atau platform lainnya
- Menghemat waktu dalam proses distribusi undangan

## 🔧 Scripts Tersedia

- `yarn dev` - Menjalankan development server
- `yarn build` - Build aplikasi untuk production
- `yarn preview` - Preview build production
- `yarn lint` - Menjalankan ESLint untuk code quality

## 📁 Struktur Project

```
tebar-undangan-generator/
├── public/                 # Static assets
├── src/
│   ├── App.tsx            # Main application component
│   ├── App.css            # Main styles
│   ├── main.tsx           # Application entry point
│   └── index.css          # Global styles
├── package.json           # Dependencies dan scripts
├── vite.config.ts         # Vite configuration
└── README.md             # Documentation
```

## 🤝 Contributing

Kontribusi sangat diterima! Jika Anda ingin berkontribusi:

1. Fork repository ini
2. Buat branch fitur baru (`git checkout -b feature/AmazingFeature`)
3. Commit perubahan Anda (`git commit -m 'Add some AmazingFeature'`)
4. Push ke branch (`git push origin feature/AmazingFeature`)
5. Buat Pull Request

## 📝 License

Distributed under the MIT License. See `LICENSE` for more information.

## 📞 Contact

Jika Anda memiliki pertanyaan atau saran, silakan hubungi:

- Email: your-email@example.com
- GitHub: [@yourusername](https://github.com/yourusername)

## 🙏 Acknowledgments

- Terima kasih kepada semua kontributor yang telah membantu mengembangkan proyek ini
- Dibuat dengan ❤️ untuk memudahkan proses pembuatan undangan digital

---

⭐ Jangan lupa untuk memberikan star jika proyek ini membantu Anda!

⭐ Jangan lupa untuk memberikan star jika proyek ini membantu Anda!
