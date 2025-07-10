// app/layout.tsx
import "./globals.css";
import Link from "next/link";
import { ReactNode } from "react";

export const metadata = {
  title: "Coding Club",
  description: "Welcome to the Coding Club!",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-white min-h-screen font-sans">
        <div className="flex flex-col min-h-screen">
          {/* Header */}
          <header className="h-20 flex items-center justify-between px-8 sm:px-20 bg-white/80 dark:bg-gray-900/50 backdrop-blur shadow-sm">
            <h1 className="text-xl sm:text-2xl font-bold text-indigo-700 dark:text-indigo-200">Coding Club</h1>
            <nav className="flex gap-4 text-sm sm:text-base">
              <Link href="/" className="hover:underline">Home</Link>
              <Link href="/about" className="hover:underline">About</Link>
              <Link href="/faq" className="hover:underline">FAQ</Link>
              <Link href="/events" className="hover:underline">Events</Link>
            </nav>
          </header>

          {/* Main Content */}
          <main className="flex-grow flex items-center justify-center px-8 sm:px-20">
            <div className="w-full max-w-4xl">{children}</div>
          </main>

          {/* Footer */}
          <footer className="h-16 flex items-center justify-center text-sm text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} Coding Club
          </footer>
        </div>
      </body>
    </html>
  );
}
