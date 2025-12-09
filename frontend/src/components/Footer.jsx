export default function Footer() {
  return (
    <footer className="bg-[#141824] text-white pt-16 pb-10">
      <div className="max-w-6xl mx-auto px-6">

        {/* Top Footer Links */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mb-12">

          {/* Brand */}
          <div className="flex flex-col items-center sm:items-start">
            <h2 className="text-2xl font-bold tracking-wide">RealTrust</h2>
            <p className="text-gray-400 text-sm mt-3 max-w-xs text-center sm:text-left">
              Building digital products, branding, and marketing strategies that create impact.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col items-center">
            <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
            <div className="flex flex-col space-y-2 text-gray-400 text-sm">
              <a href="#home" className="hover:text-white transition">Home</a>
              <a href="#projects" className="hover:text-white transition">Projects</a>
              <a href="#clients" className="hover:text-white transition">Testimonials</a>
              <a href="#contact" className="hover:text-white transition">Contact</a>
              <a href="#newsletter" className="hover:text-white transition">Subscribe Us</a>
            </div>
          </div>

          {/* Social */}
          <div className="flex flex-col items-center sm:items-end">
            <h3 className="text-lg font-semibold mb-3">Follow Us</h3>

            <div className="flex gap-4 text-gray-300 text-2xl">
              {/* Twitter */}
              <a href="#" className="hover:text-white transition">
                <svg width="24" height="24" fill="currentColor">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.18 4.18 0 0 0 1.84-2.32 8.3 8.3 0 0 1-2.63 1A4.15 4.15 0 0 0 11 8.15a11.78 11.78 0 0 1-8.56-4.34 4.15 4.15 0 0 0 1.28 5.54A4.1 4.1 0 0 1 2 9.06v.05A4.15 4.15 0 0 0 4.15 13a4.2 4.2 0 0 1-1.1.14 4 4 0 0 1-.78-.08A4.17 4.17 0 0 0 6.9 16a8.33 8.33 0 0 1-5.15 1.78A7.92 7.92 0 0 1 1 17.7a11.75 11.75 0 0 0 6.36 1.87c7.63 0 11.8-6.32 11.8-11.8v-.54A8.08 8.08 0 0 0 22.46 6Z"/>
                </svg>
              </a>

              {/* Facebook */}
              <a href="#" className="hover:text-white transition">
                <svg width="24" height="24" fill="currentColor">
                  <path d="M13 3h4V0h-4a6 6 0 0 0-6 6v3H4v4h3v12h4V13h3l1-4h-4V6a2 2 0 0 1 2-2Z"/>
                </svg>
              </a>

              {/* Instagram */}
              <a href="#" className="hover:text-white transition">
                <svg width="24" height="24" fill="currentColor">
                  <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7Zm10 2c1.7 0 3 1.3 3 3v10c0 1.7-1.3 3-3 3H7c-1.7 0-3-1.3-3-3V7c0-1.7 1.3-3 3-3h10Zm-5 3.5A5.5 5.5 0 1 0 17.5 13 5.51 5.51 0 0 0 12 7.5Zm0 9A3.5 3.5 0 1 1 15.5 13 3.5 3.5 0 0 1 12 16.5Zm4-9.88a1.12 1.12 0 1 1-1.12-1.12A1.12 1.12 0 0 1 16 6.62Z"/>
                </svg>
              </a>

              {/* LinkedIn */}
              <a href="#" className="hover:text-white transition">
                <svg width="24" height="24" fill="currentColor">
                  <path d="M4 3a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm1 6H3v12h2Zm5 0H8v12h2v-6.5c0-2 3-2.2 3 0V21h2v-7.5c0-5-5.5-4.8-6 0Z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <p className="text-center text-gray-500 text-sm mt-6">
          © {new Date().getFullYear()} RealTrust • All Rights Reserved
        </p>

      </div>
    </footer>
  );
}
