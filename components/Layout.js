import Link from 'next/link'

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white shadow p-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-blue-700">isprzedamto.pl</Link>
        <nav>
          <Link href="/login" className="text-sm mr-4">Logowanie</Link>
          <Link href="/register" className="text-sm">Rejestracja</Link>
        </nav>
      </header>

      <main className="flex-1 p-6 bg-gray-100">
        {children}
      </main>

      <footer className="bg-white text-center text-sm text-gray-500 p-4">
        © {new Date().getFullYear()} isprzedamto.pl – wszystkie prawa zastrzeżone
      </footer>
    </div>
  )
}
