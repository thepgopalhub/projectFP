import { useEffect, useState } from "react";
import { API_URL } from "../../api/api";

export default function MessagesPage() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}/contact`)
      .then(res => res.json())
      .then(data => setMessages(data));
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Contact Messages</h1>

      <div className="grid gap-4">
        {messages.map(m => (
          <div key={m._id} className="p-4 bg-white shadow rounded">
            <h3 className="font-semibold">{m.name} — {m.email}</h3>
            <p>{m.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
