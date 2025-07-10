import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleRegister = (e) => {
    e.preventDefault();
    if (!email || !password) return alert('Wypełnij wszystkie pola');

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const exists = users.find((u) => u.email === email);
    if (exists) return alert('Użytkownik już istnieje');

    users.push({ email, password });
    localStorage.setItem('users', JSON.stringify(users));
    alert('Rejestracja zakończona!');
    router.push('/login');
  };

  return (
    <main className="max-w-md mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Rejestracja</h1>
      <form onSubmit={handleRegister} className="flex flex-col gap-4">
        <input
          type="email"
          placeholder="Email"
          className="border px-4 py-2 rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Hasło"
          className="border px-4 py-2 rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Zarejestruj się
        </button>
      </form>
    </main>
  );
}
