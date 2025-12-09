export default function Navbar() {
  return (
    <nav className="w-full fixed top-0 left-0 bg-white shadow z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-wide">RealTrust</h1>
        <div className="hidden md:flex space-x-8 text-gray-600 font-medium">
          <a href="#projects" className="hover:text-black">Projects</a>
          <a href="#clients" className="hover:text-black">Clients</a>
          <a href="#contact" className="hover:text-black">Contact</a>
        </div>
      </div>
    </nav>
  );
}
