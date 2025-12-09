import { useEffect, useState } from "react";
import { API_URL } from "../../api/api";
import ImageCropper from "../../components/ImageCropper";

export default function ProjectsPage() {
  const [projects, setProjects] = useState([]);
  const [form, setForm] = useState({
    title: "",
    category: "",
    description: "",
    image: "",
  });
  const [showCropper, setShowCropper] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  // Load projects
  const loadProjects = () => {
    fetch(`${API_URL}/projects`)
      .then((res) => res.json())
      .then((data) => setProjects(data));
  };

  useEffect(() => {
    loadProjects();
  }, []);

  // Create project
  const submit = async () => {
    await fetch(`${API_URL}/projects`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    setForm({ title: "", category: "", description: "", image: "" });
    loadProjects();
  };

  // Delete project
  const remove = async (id) => {
    await fetch(`${API_URL}/projects/${id}`, { method: "DELETE" });
    loadProjects();
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Manage Projects</h1>

      {/* Add Project Form */}
      <div className="bg-white p-6 rounded-xl shadow grid gap-4 mb-10">
        <input
          className="border p-2"
          placeholder="Title"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
        />
        <input
          className="border p-2"
          placeholder="Category"
          value={form.category}
          onChange={(e) => setForm({ ...form, category: e.target.value })}
        />
        <textarea
          className="border p-2"
          placeholder="Description"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
        />
        <input
          type="file"
          onChange={(e) => {
            setSelectedImage(e.target.files[0]);
            setShowCropper(true);
          }}
          className="border p-2"
        />

        <button
          className="bg-black text-white px-4 py-2 rounded-lg disabled:opacity-50"
          onClick={submit}
          disabled={
            !form.title || !form.category || !form.description || !form.image
          }
        >
          Add Project
        </button>
      </div>

      {/* List Projects */}
      <div className="grid gap-4">
        {projects.map((p) => (
          <div
            key={p._id}
            className="p-4 bg-white rounded-lg shadow flex justify-between items-start"
          >
            <div>
              <h3 className="font-semibold">{p.title}</h3>
              <p className="text-gray-600">{p.category}</p>
            </div>

            <button
              className="text-red-500 hover:text-red-700"
              onClick={() => remove(p._id)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>

      {showCropper && selectedImage && (
        <ImageCropper
          imageFile={selectedImage} // VERY IMPORTANT
          onCropDone={async (blob) => {
            const formData = new FormData();
            formData.append("image", blob);

            const res = await fetch(`${API_URL}/upload`, {
              method: "POST",
              body: formData,
            });

            const data = await res.json();

            setForm({ ...form, image: data.url });
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
