import { useState } from "react";
import { API_URL } from "../api/api";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const submit = async () => {
    if (!email) return;

    try {
      setLoading(true);
      const res = await fetch(`${API_URL}/newsletter`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();
      alert(data.message || "Subscribed!");
      if (res.ok) setEmail("");
    } catch {
      alert("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-700 py-14">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Wrapper card */}
        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 md:p-10 shadow-xl text-center md:text-left">
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">

            {/* Left Content */}
            <div className="text-white max-w-lg">
              <h2 className="text-3xl font-bold">Stay Updated</h2>
              <p className="text-blue-100 mt-2 text-sm md:text-base">
                Subscribe to our newsletter and never miss new projects or offers.
              </p>
            </div>

            {/* Form */}
            <div className="flex w-full md:w-auto mt-4 md:mt-0">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 md:w-80 px-4 py-3 rounded-l-xl bg-white/90 outline-none 
                border border-gray-300 focus:ring-2 focus:ring-orange-400 transition"
              />

              <button
                onClick={submit}
                disabled={!email || loading}
                className="px-6 md:px-8 py-3 bg-orange-500 text-white font-semibold 
                rounded-r-xl hover:bg-orange-600 transition disabled:opacity-60"
              >
                {loading ? "Subscribing..." : "Subscribe"}
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
