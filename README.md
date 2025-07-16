# Next.js Project - Jabar Digital Academy

Proyek ini dibuat untuk memenuhi tugas **Jabar Digital Academy**

## 🌐 Live Demo

[https://my-next-b3oid80lv-mamat-rahmats-projects.vercel.app/](https://my-next-b3oid80lv-mamat-rahmats-projects.vercel.app/)

## 📋 Tugas Pertemuan 2

### Persyaratan yang Dipenuhi:
- ✅ **2 Halaman Statis**
  - `/about` - Halaman tentang
  - `/faq` - Halaman FAQ
- ✅ **Halaman Not Found (404)**
  - Custom 404 page dengan desain unik
- ✅ **1 Halaman Dynamic Route**
  - `/events/[id]` - Halaman detail event berdasarkan ID
  - `/events` - Halaman list semua event
- ✅ **Navigasi Antar Halaman**
  - Menggunakan `<Link>` dari Next.js
  - Menu navigasi di header
  - Navigasi tanpa reload halaman

## 📋 Tugas Pertemuan 4

### Persyaratan yang Dipenuhi:
- ✅ **Endpoint API CRUD** di `/api/users`
  - `GET /api/users` - Mengambil semua data users
  - `POST /api/users` - Menambahkan user baru
  - `PUT /api/users/[id]` - Mengupdate user berdasarkan ID
  - `DELETE /api/users/[id]` - Menghapus user berdasarkan ID

- ✅ **Halaman CRUD** di `/users`
  - Menampilkan list users
  - Form untuk menambahkan user baru
  - Fitur edit user
  - Fitur hapus user
  - Real-time update setelah operasi CRUD

### Struktur Data User:
```javascript
{
  id: number,
  name: string,
  email: string
}
```

## 🛠️ Teknologi yang Digunakan

- **Next.js 15** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Vercel** - Deployment

## 🚀 Cara Menjalankan Project

1. **Clone repository**
   ```bash
   git clone <repository-url>
   cd <project-folder>
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Jalankan development server**
   ```bash
   npm run dev
   ```

4. **Buka browser**
   ```
   http://localhost:3000
   ```

## 👨‍💻 Pengembang

Dibuat oleh **Mamat Rahmat** untuk tugas Jabar Digital Academy

## 🔗 Links

- [Live Demo](https://my-next-b3oid80lv-mamat-rahmats-projects.vercel.app/)
- [GitHub Repository](https://github.com/mamat-rahmat/my-next-app)

---

*Proyek ini dikembangkan sebagai bagian dari program Jabar Digital Academy untuk mempelajari Next.js dan pengembangan web modern.*