import { useState } from "react";
import { API_URL } from "../api/api";

export default function Newsletter() {
  const [email, setEmail] = useState("");

  const submit = async () => {
    const res = await fetch(`${API_URL}/newsletter`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    const data = await res.json();
    alert(data.message || "Subscribed!");
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto bg-gray-100 p-10 rounded-xl shadow">
        <h2 className="text-3xl font-bold mb-4 text-center">
          Join Our Newsletter
        </h2>
        <p className="text-center text-gray-600 mb-6">
          Get updates on our best projects and offers.
        </p>

        <div className="flex justify-center">
          <input
            className="border p-3 rounded-l-lg w-64"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            className="bg-black text-white px-6 rounded-r-lg"
            onClick={submit}
          >
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
}
