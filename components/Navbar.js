import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 border-b shadow-sm">
      <Link href="/" className="text-2xl font-bold text-blue-700">
        isprzedamto<span className="text-green-600">.pl</span>
      </Link>
      <div className="flex items-center gap-4">
        <Link href="/login" className="text-sm font-medium text-gray-700 hover:text-blue-700">
          Logowanie
        </Link>
        <Link href="/register" className="text-sm font-medium text-gray-700 hover:text-blue-700">
          Rejestracja
        </Link>
        <Link href="/add">
          <button className="bg-red-500 hover:bg-red-600 text-white text-sm px-4 py-2 rounded shadow font-bold">
            + Dodaj ogłoszenie <span className="uppercase">ZA DARMO!</span>
          </button>
        </Link>
      </div>
    </nav>
  );
}
