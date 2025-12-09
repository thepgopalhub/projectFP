import { useEffect, useState } from "react";
import { API_URL } from "../../api/api";

export default function MessagesPage() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}/contact`)
      .then((res) => res.json())
      .then((data) => setMessages(data));
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Contact Messages</h1>

      <div className="grid md:grid-cols-2 gap-6">
        {messages.map((m) => (
          <div
            key={m._id}
            className="bg-white p-6 rounded-xl shadow border border-gray-200 hover:shadow-xl transition"
          >
            {/* Header */}
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-semibold text-xl text-gray-800">
                {m.name}
              </h3>
              <span className="text-sm bg-blue-100 text-blue-700 px-2 py-1 rounded-md">
                {m.email}
              </span>
            </div>

            {/* Additional details */}
            <div className="text-sm text-gray-600 space-y-1 mb-3">
              {m.phone && (
                <p>
                  <span className="font-semibold">Phone:</span> {m.phone}
                </p>
              )}

              {m.city && (
                <p>
                  <span className="font-semibold">City:</span> {m.city}
                </p>
              )}

              {m.createdAt && (
                <p className="text-gray-500 text-xs">
                  {new Date(m.createdAt).toLocaleString()}
                </p>
              )}
            </div>

            {/* Message */}
            <div className="bg-gray-100 text-gray-700 p-4 rounded-lg border border-gray-200 italic">
              “{m.message}”
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
