import { useEffect, useState } from "react";
import { API_URL } from "../../api/api";

export default function ClientsPage() {
  const [clients, setClients] = useState([]);
  const [form, setForm] = useState({
    name: "",
    review: "",
    image: ""
  });

  const loadClients = () => {
    fetch(`${API_URL}/clients`)
      .then(res => res.json())
      .then(data => setClients(data));
  };

  useEffect(() => loadClients(), []);

  const submit = async () => {
    await fetch(`${API_URL}/clients`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    });

    setForm({ name: "", review: "", image: "" });
    loadClients();
  };

  const remove = async (id) => {
    await fetch(`${API_URL}/clients/${id}`, { method: "DELETE" });
    loadClients();
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Manage Clients</h1>

      {/* Add Client Form */}
      <div className="bg-white p-6 rounded-xl shadow grid gap-4 mb-10">
        <input
          className="border p-2"
          placeholder="Name"
          value={form.name}
          onChange={e => setForm({ ...form, name: e.target.value })}
        />
        <textarea
          className="border p-2"
          placeholder="Review"
          value={form.review}
          onChange={e => setForm({ ...form, review: e.target.value })}
        />
        <input
          className="border p-2"
          placeholder="Image URL"
          value={form.image}
          onChange={e => setForm({ ...form, image: e.target.value })}
        />

        <button
          className="bg-black text-white px-4 py-2 rounded-lg"
          onClick={submit}
        >
          Add Client
        </button>
      </div>

      <div className="grid gap-4">
        {clients.map(c => (
          <div key={c._id} className="p-4 bg-white rounded-lg shadow flex justify-between items-start">
            <div>
              <h3 className="font-semibold">{c.name}</h3>
              <p className="text-gray-600">{c.review}</p>
            </div>

            <button
              className="text-red-500 hover:text-red-700"
              onClick={() => remove(c._id)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
