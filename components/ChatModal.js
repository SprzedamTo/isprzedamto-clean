import { useState } from 'react'

export default function ChatModal({ onClose, adTitle }) {
  const [message, setMessage] = useState('')
  const [sent, setSent] = useState(false)

  const handleSend = () => {
    if (message.trim()) {
      // Można tu później zapisać do bazy albo localStorage
      setSent(true)
    }
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded shadow-md max-w-md w-full relative">
        <button onClick={onClose} className="absolute top-2 right-3 text-gray-500 hover:text-black">✖</button>
        <h2 className="text-lg font-semibold mb-2">Wiadomość do sprzedawcy</h2>
        <p className="text-sm text-gray-600 mb-4">Ogłoszenie: <strong>{adTitle}</strong></p>

        {sent ? (
          <p className="text-green-600">✅ Wiadomość została wysłana!</p>
        ) : (
          <>
            <textarea
              className="w-full border p-2 mb-3"
              rows="4"
              placeholder="Napisz wiadomość..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button
              className="bg-blue-600 text-white px-4 py-2 rounded"
              onClick={handleSend}
            >
              Wyślij wiadomość
            </button>
          </>
        )}
      </div>
    </div>
  )
          } 
