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
    <section id="projects" className="py-20 bg-[#f3f6ff]">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800">
            Our Projects
          </h2>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto leading-relaxed">
            We transform ideas into visually compelling results that deliver real
            value and elevate your brand.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {projects.map((p) => (
            <div
              key={p._id}
              className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 
              overflow-hidden group flex flex-col border border-gray-100"
            >
              {/* Image */}
              {p.image && (
                <div className="overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="h-48 w-full object-cover transform group-hover:scale-110 transition duration-500"
                  />
                </div>
              )}

              {/* Content */}
              <div className="p-5 flex flex-col flex-1">
                <h3 className="font-bold text-lg text-gray-800">
                  {p.title}
                </h3>

                {p.category && (
                  <p className="text-xs uppercase tracking-wide text-blue-600 font-medium mt-1">
                    {p.category}
                  </p>
                )}

                {p.description && (
                  <p className="text-sm text-gray-600 mt-3 mb-4 line-clamp-3">
                    {p.description}
                  </p>
                )}

                {/* Read More Button */}
                <button
                  type="button"
                  className="mt-auto bg-orange-500 text-white text-sm font-semibold 
                  px-4 py-2 rounded-lg hover:bg-orange-600 shadow 
                  transition-all duration-300"
                >
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
