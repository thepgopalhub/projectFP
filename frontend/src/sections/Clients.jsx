import { useEffect, useState } from "react";
import { API_URL } from "../api/api";

export default function Clients() {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}/clients`)
      .then((res) => res.json())
      .then((data) => setClients(data));
  }, []);

  return (
    <section id="clients" className="py-20 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-10">Happy Clients</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {clients.map((c) => (
            <div
              key={c._id}
              className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition"
            >
              <p className="text-gray-700 italic">"{c.review}"</p>
              <h3 className="mt-4 font-semibold text-right">— {c.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
