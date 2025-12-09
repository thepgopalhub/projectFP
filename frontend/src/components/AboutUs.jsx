export default function AboutUs() {
  return (
    <section className="py-20 bg-[#f8faff]">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* Left Image */}
        <div className="relative group">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80"
            alt="About Us"
            className="rounded-2xl shadow-lg w-full h-[380px] object-cover 
            transform group-hover:scale-[1.03] transition duration-500"
          />

          {/* Decorative Gradient Overlay */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-600/10 to-orange-500/10 opacity-0 group-hover:opacity-100 transition duration-500"></div>
        </div>

        {/* Right Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-4">
            About Us
          </h2>

          <p className="text-gray-600 leading-relaxed mb-6 text-lg">
            With over <span className="font-semibold text-blue-700">15 years of real estate experience</span>, 
            we have built a reputation for delivering high-value consultation, 
            unmatched customer service, and a commitment to turning properties 
            into opportunities.  
            <br /><br />
            Our approach blends market knowledge with creativity, ensuring our clients 
            receive tailored solutions that truly make a difference.
          </p>

          <button className="px-8 py-3 border-2 border-blue-600 rounded-full text-blue-700 font-medium 
          hover:bg-blue-600 hover:text-white transition shadow-sm hover:shadow-lg">
            Learn More
          </button>
        </div>

      </div>
    </section>
  );
}
