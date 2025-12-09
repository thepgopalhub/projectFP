export default function Hero() {
  return (
    <section
      className="h-[90vh] flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1522199710521-72d69614c702?auto=format&fit=crop&w=1350&q=80')",
      }}
    >
      <div className="text-center text-white backdrop-blur-sm bg-black/40 px-8 py-10 rounded-xl">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Building Digital Products <br /> That Create Impact
        </h1>
        <p className="mt-4 text-lg opacity-90">
          Websites • Mobile Apps • Branding • UI/UX
        </p>
        <a
          href="#projects"
          className="inline-block mt-6 bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
        >
          View Our Work
        </a>
      </div>
    </section>
  );
}
