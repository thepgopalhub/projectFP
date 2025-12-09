export default function Realtor() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* Left: Text */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-4">
            Not Your Average Realtor
          </h2>

          <p className="text-gray-600 leading-relaxed text-lg">
            At <span className="text-blue-700 font-semibold">RealTrust</span>,
            we combine strategic thinking, exceptional client service, and years
            of market experience to deliver a personalized real-estate
            experience.  
            <br /><br />
            From buying and selling to property consultation, our team helps you
            make confident decisions backed by industry insights and honesty.
          </p>
        </div>

        {/* Right: Images */}
        <div className="grid grid-cols-2 gap-5">
          
          {/* Image 1 */}
          <div className="relative group">
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="Realtor"
              className="rounded-2xl w-full h-48 object-cover shadow-md transform 
              group-hover:scale-[1.05] transition duration-500"
            />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br 
            from-blue-600/20 to-orange-500/20 opacity-0 group-hover:opacity-100 
            transition duration-500"></div>
          </div>

          {/* Image 2 */}
          <div className="relative group">
            <img
              src="https://randomuser.me/api/portraits/women/45.jpg"
              alt="Realtor"
              className="rounded-2xl w-full h-48 object-cover shadow-md transform 
              group-hover:scale-[1.05] transition duration-500"
            />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br 
            from-blue-600/20 to-orange-500/20 opacity-0 group-hover:opacity-100 
            transition duration-500"></div>
          </div>

          {/* Big Image */}
          <div className="relative group col-span-2">
            <img
              src="https://randomuser.me/api/portraits/men/52.jpg"
              alt="Realtor"
              className="rounded-2xl w-full h-56 object-cover shadow-md transform 
              group-hover:scale-[1.05] transition duration-500"
            />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br 
            from-blue-600/20 to-orange-500/20 opacity-0 group-hover:opacity-100 
            transition duration-500"></div>
          </div>

        </div>
      </div>
    </section>
  );
}
