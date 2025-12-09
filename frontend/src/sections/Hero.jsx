import { useEffect, useState } from "react";

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 300);
  }, []);

  return (
    <section
      className="relative min-h-[90vh] md:h-screen bg-cover bg-center flex items-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1522199710521-72d69614c702?auto=format&fit=crop&w=1500&q=80')",
      }}
    >
      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/20"></div>

      {/* Content */}
      <div
        className={`relative max-w-7xl mx-auto px-6 w-full grid md:grid-cols-2 gap-12 text-white transition-all duration-700 ${
          loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        {/* Left Text */}
        <div className="flex flex-col justify-center pt-24 md:pt-0">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight drop-shadow-xl">
            Consultation, <br /> Design & Marketing
          </h1>

          <p className="mt-5 text-lg text-gray-200 max-w-md leading-relaxed">
            Helping you grow with modern design, strategic marketing, and smart
            business consultation.
          </p>

          <a
            href="#projects"
            className="mt-8 inline-block bg-orange-500 text-white px-8 py-3 rounded-lg font-bold 
            hover:bg-orange-600 transition shadow-lg hover:shadow-xl w-fit"
          >
            View Our Work
          </a>
        </div>

        {/* Right Contact Card */}
        <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-2xl shadow-2xl mt-10 md:mt-0">
          <h3 className="text-2xl font-semibold mb-4 text-white drop-shadow">
            Get a Free Consultation
          </h3>

          <div className="grid gap-4">
            <input
              className="p-3 rounded-lg bg-white/90 text-black focus:ring-2 focus:ring-orange-400 outline-none"
              placeholder="Full Name"
            />
            <input
              className="p-3 rounded-lg bg-white/90 text-black focus:ring-2 focus:ring-orange-400 outline-none"
              placeholder="Email Address"
            />
            <input
              className="p-3 rounded-lg bg-white/90 text-black focus:ring-2 focus:ring-orange-400 outline-none"
              placeholder="Mobile Number"
            />
            <input
              className="p-3 rounded-lg bg-white/90 text-black focus:ring-2 focus:ring-orange-400 outline-none"
              placeholder="Area, City"
            />

            <button
              className="bg-orange-500 py-3 rounded-lg font-bold 
              hover:bg-orange-600 transition shadow-lg hover:shadow-xl mt-2"
            >
              Get Quick Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
