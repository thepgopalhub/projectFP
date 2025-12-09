import { useState } from "react";
import { API_URL } from "../api/api";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const submit = async () => {
    await fetch(`${API_URL}/contact`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    alert("Message sent!");
  };

  return (
    <section id="contact" className="py-20 bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Contact Us</h2>

        <div className="grid gap-4">
          <input
            className="border p-3 rounded"
            placeholder="Your name"
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          <input
            className="border p-3 rounded"
            placeholder="Your email"
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          <textarea
            className="border p-3 rounded"
            rows="4"
            placeholder="Message"
            onChange={(e) => setForm({ ...form, message: e.target.value })}
          />
        </div>

        <button
          className="bg-black text-white px-6 py-3 mt-4 rounded-lg"
          onClick={submit}
        >
          Send Message
        </button>
      </div>
    </section>
  );
}
