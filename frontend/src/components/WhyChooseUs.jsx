const items = [
  {
    title: "Potential ROI",
    text: "Maximize the value of your property with expert guidance.",
    icon: "🏠",
  },
  {
    title: "Design Expertise",
    text: "Top-tier interior and exterior design recommendations.",
    icon: "🎨",
  },
  {
    title: "Smart Marketing",
    text: "Effective strategies that attract serious buyers quickly.",
    icon: "📈",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-[#f7faff]">
      {/* Heading */}
      <div className="text-center mb-12 px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-700">
          Why Choose Us?
        </h2>
        <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
          RealTrust delivers unmatched expertise, design excellence, and 
          innovative marketing strategies to help you unlock the full 
          potential of your property.
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
        {items.map((i) => (
          <div
            key={i.title}
            className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center 
            hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
          >
            {/* Icon */}
            <div
              className="mx-auto mb-5 flex items-center justify-center w-20 h-20 rounded-full 
              bg-gradient-to-br from-blue-600 to-orange-500 text-white text-4xl shadow-lg"
            >
              {i.icon}
            </div>

            {/* Title */}
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {i.title}
            </h3>

            {/* Text */}
            <p className="text-gray-600 leading-relaxed">
              {i.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
