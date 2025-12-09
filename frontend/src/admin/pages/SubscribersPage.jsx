import { useEffect, useState } from "react";
import { API_URL } from "../../api/api";
import { FiMail } from "react-icons/fi";

export default function SubscribersPage() {
  const [subs, setSubs] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}/newsletter`)
      .then((res) => res.json())
      .then((data) => setSubs(data))
      .catch((err) => console.error("Failed to load subscribers", err));
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 text-gray-800">
        Newsletter Subscribers
      </h1>

      {/* Empty State */}
      {subs.length === 0 && (
        <div className="bg-white p-6 border border-gray-200 rounded-xl shadow text-center text-gray-600">
          No subscribers yet.
        </div>
      )}

      {/* Subscribers List */}
      <div className="grid md:grid-cols-2 gap-6">
        {subs.map((s) => (
          <div
            key={s._id}
            className="p-5 bg-white rounded-xl shadow border border-gray-200 
            hover:shadow-xl transition flex items-center gap-4"
          >
            {/* Icon bubble */}
            <div className="bg-blue-100 text-blue-600 p-3 rounded-full text-xl">
              <FiMail />
            </div>

            {/* Email + Timestamp */}
            <div className="flex-1">
              <p className="font-semibold text-gray-800">{s.email}</p>
              <p className="text-xs text-gray-500 mt-1">
                {new Date(s.createdAt).toLocaleString()}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
