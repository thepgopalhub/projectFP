import { useEffect, useState } from "react";
import { API_URL } from "../api/api";

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}/projects`)
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-10">Our Projects</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((p) => (
            <div
              key={p._id}
              className="rounded-xl overflow-hidden shadow hover:shadow-xl transition bg-white"
            >
              {p.image && (
                <img
                  src={p.image}
                  className="h-48 w-full object-cover hover:scale-105 transition"
                />
              )}
              <div className="p-4">
                <h3 className="font-semibold text-xl">{p.title}</h3>
                <p className="text-gray-500">{p.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
