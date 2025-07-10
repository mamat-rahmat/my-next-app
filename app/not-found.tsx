import Link from "next/link";

export default function NotFound() {
    return (
        <div style={{ textAlign: "center", padding: "4rem" }}>
            <h1>😢 Halaman tidak ditemukan</h1>
            <p>Mungkin kamu nyasar... coba <Link href="/" style={{ color: "#0070f3", textDecoration: "underline" }}>
                kembali ke halaman utama
            </Link>.</p>
        </div>
    );
}
