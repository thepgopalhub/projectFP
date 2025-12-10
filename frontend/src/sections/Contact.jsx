import { useState } from "react";
import { API_URL } from "../api/api";
import toast from "react-hot-toast";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    message: "",
  });

  const submit = async () => {
    try {
      const res = await fetch(`${API_URL}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.error);
        return;
      }

      toast.success("Message sent!");
      setForm({ name: "", email: "", phone: "", city: "", message: "" });
    } catch {
      toast.error("Something went wrong");
    }
  };

  return (
    <section id="contact" className="py-20 bg-[#eef2ff]">
      <div className="max-w-2xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10">
          Contact Us
        </h2>

        <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-200">
          <div className="grid gap-6">

            {/* Name */}
            <input
              type="text"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full p-3 rounded-lg border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-300 transition"
              placeholder="Your Name"
            />

            {/* Email */}
            <input
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full p-3 rounded-lg border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-300 transition"
              placeholder="Your Email"
            />

            {/* Phone */}
            <input
              type="text"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className="w-full p-3 rounded-lg border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-300 transition"
              placeholder="Mobile Number"
            />

            {/* City */}
            <input
              type="text"
              value={form.city}
              onChange={(e) => setForm({ ...form, city: e.target.value })}
              className="w-full p-3 rounded-lg border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-300 transition"
              placeholder="Area, City"
            />

            {/* Message */}
            <textarea
              rows="4"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full p-3 rounded-lg border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-300 transition"
              placeholder="Your Message"
            />
          </div>

          <button
            onClick={submit}
            className="w-full mt-6 bg-orange-500 text-white py-3 rounded-lg font-medium hover:bg-orange-600 hover:shadow-lg transition cursor-pointer"
          >
            Send Message
          </button>
        </div>
      </div>
    </section>
  );
}
