import { useEffect, useState } from "react";
import { API_URL } from "../../api/api";
import ImageCropper from "../../components/ImageCropper";

export default function ClientsPage() {
  const [clients, setClients] = useState([]);
  const [form, setForm] = useState({
    name: "",
    designation: "",
    review: "",
    image: "",
  });

  const [showCropper, setShowCropper] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const loadClients = () => {
    fetch(`${API_URL}/clients`)
      .then((res) => res.json())
      .then((data) => setClients(data));
  };

  useEffect(() => loadClients(), []);

  const submit = async () => {
    await fetch(`${API_URL}/clients`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    setForm({ name: "", designation: "", review: "", image: "" });
    loadClients();
  };

  const remove = async (id) => {
    await fetch(`${API_URL}/clients/${id}`, { method: "DELETE" });
    loadClients();
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Manage Clients</h1>

      {/* Add Client Form */}
      <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-200 mb-12">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">Add New Client</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {/* NAME */}
          <div className="relative">
            <input
              className="peer border rounded-lg p-3 w-full focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
              placeholder=" "
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
            <label className="absolute left-3 top-3 bg-white px-1 text-gray-500 
              transition-all peer-focus:-top-2 peer-focus:text-sm peer-placeholder-shown:text-base 
              peer-placeholder-shown:top-3">
              Client Name
            </label>
          </div>

          {/* DESIGNATION */}
          <div className="relative">
            <input
              className="peer border rounded-lg p-3 w-full focus:border-blue-500 
              focus:ring-2 focus:ring-blue-200 outline-none"
              placeholder=" "
              value={form.designation}
              onChange={(e) =>
                setForm({ ...form, designation: e.target.value })
              }
            />
            <label className="absolute left-3 top-3 bg-white px-1 text-gray-500 
              transition-all peer-focus:-top-2 peer-focus:text-sm peer-placeholder-shown:text-base 
              peer-placeholder-shown:top-3">
              Designation (CEO, Web Developer, etc.)
            </label>
          </div>
        </div>

        {/* REVIEW */}
        <div className="relative mt-6">
          <textarea
            className="peer border rounded-lg p-3 w-full h-28 focus:border-blue-500 
            focus:ring-2 focus:ring-blue-200 outline-none"
            placeholder=" "
            value={form.review}
            onChange={(e) => setForm({ ...form, review: e.target.value })}
          />
          <label className="absolute left-3 top-3 bg-white px-1 text-gray-500 
            transition-all peer-focus:-top-2 peer-focus:text-sm peer-placeholder-shown:text-base 
            peer-placeholder-shown:top-3">
            Client Review
          </label>
        </div>

        {/* IMAGE UPLOAD */}
        <div className="mt-6">
          <label className="font-medium text-gray-700 mb-1 block">Client Image</label>
          <input
            type="file"
            className="border rounded-lg p-2 w-full cursor-pointer"
            onChange={(e) => {
              setSelectedImage(e.target.files[0]);
              setShowCropper(true);
            }}
          />
        </div>

        {/* IMAGE PREVIEW */}
        {form.image && (
          <img
            src={form.image}
            alt="Preview"
            className="w-24 h-24 object-cover mt-4 rounded-full border shadow-md"
          />
        )}

        {/* BUTTON */}
        <button
          className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold disabled:opacity-50 hover:bg-blue-700 transition shadow"
          onClick={submit}
          disabled={
            !form.name ||
            !form.designation ||
            !form.review ||
            !form.image
          }
        >
          Add Client
        </button>
      </div>

      {/* List Clients */}
      <h2 className="text-xl font-semibold text-gray-700 mb-4">Existing Clients</h2>

      <div className="grid md:grid-cols-2 gap-6">
        {clients.map((c) => (
          <div
            key={c._id}
            className="bg-white p-5 rounded-xl shadow border border-gray-200 
            hover:shadow-xl transition flex gap-5 items-start"
          >
            {/* Client Image */}
            {c.image ? (
              <img
                src={c.image}
                className="w-20 h-20 rounded-full object-cover border"
              />
            ) : (
              <div className="w-20 h-20 rounded-full bg-gray-200" />
            )}

            {/* Info */}
            <div className="flex-1">
              <h3 className="font-bold text-lg text-gray-800">{c.name}</h3>
              <p className="text-blue-600 text-sm">{c.designation}</p>
              <p className="text-gray-600 mt-2 italic text-sm">"{c.review}"</p>
            </div>

            {/* Delete */}
            <button
              className="text-red-500 font-semibold hover:text-red-700"
              onClick={() => remove(c._id)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>

      {showCropper && selectedImage && (
        <ImageCropper
          imageFile={selectedImage}
          onCropDone={async (blob) => {
            const formData = new FormData();
            formData.append("image", blob);

            const res = await fetch(`${API_URL}/upload`, {
              method: "POST",
              body: formData,
            });

            const data = await res.json();

            setForm((prev) => ({ ...prev, image: data.url }));
            setShowCropper(false);
            setSelectedImage(null);
          }}
          onCancel={() => {
            setShowCropper(false);
            setSelectedImage(null);
          }}
        />
      )}
    </div>
  );
}
