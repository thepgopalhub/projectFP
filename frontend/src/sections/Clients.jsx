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
    <section id="clients" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10">
          Happy Clients
        </h2>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
          {clients.map((c) => (
            <div
              key={c._id}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl border border-gray-100
              transition transform hover:-translate-y-1 duration-300 flex flex-col"
            >
              {/* Client Image */}
              {c.image && (
                <img
                  src={c.image}
                  alt={c.name}
                  className="w-20 h-20 rounded-full object-cover mx-auto mb-4 shadow-md"
                />
              )}

              {/* Text */}
              <p className="text-gray-700 italic text-center mb-4">
                “{c.review}”
              </p>

              <h3 className="font-semibold text-center text-gray-900 text-lg">
                {c.name}
              </h3>
              {c.designation && (
                <p className="text-blue-500 text-sm text-center">
                  {c.designation}
                </p>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
