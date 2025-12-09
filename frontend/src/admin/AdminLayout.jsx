import { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { FiFolder, FiUsers, FiMail, FiList, FiMenu } from "react-icons/fi";

export default function AdminLayout() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false); // mobile sidebar state

  const menu = [
    { name: "Projects", path: "/admin/projects", icon: <FiFolder size={20} /> },
    { name: "Clients",   path: "/admin/clients",  icon: <FiUsers size={20} /> },
    { name: "Messages",  path: "/admin/messages", icon: <FiMail size={20} /> },
    { name: "Newsletter",path: "/admin/subscribers", icon: <FiList size={20} /> },
  ];

  return (
    <div className="min-h-screen flex bg-gray-50">

      {/* ========== Mobile Top Bar ========== */}
      <div className="md:hidden w-full bg-white shadow px-4 py-3 flex items-center justify-between fixed z-40">
        <h2 className="text-xl font-bold text-gray-800">Admin Panel</h2>
        <button onClick={() => setOpen(true)}>
          <FiMenu size={26} />
        </button>
      </div>

      {/* ========== Sidebar (Desktop + Mobile Drawer) ========== */}
      <aside
        className={`bg-white shadow-xl border-r px-6 py-8 w-72 fixed md:static inset-y-0 left-0 z-50 
          transform transition-transform duration-300
          ${open ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
      >
        <h2 className="text-3xl font-extrabold mb-10 bg-gradient-to-r from-blue-700 to-orange-500 text-transparent bg-clip-text">
          Admin Panel
        </h2>

        <nav className="flex flex-col gap-2">
          {menu.map((item) => {
            const active = pathname === item.path;

            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setOpen(false)} // close drawer after navigation
                className={`flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all
                ${
                  active
                    ? "bg-blue-600 text-white shadow-lg scale-[1.02] border-l-4 border-orange-400"
                    : "text-gray-700 hover:bg-gray-200 hover:scale-[1.02]"
                }`}
              >
                {item.icon}
                {item.name}
              </Link>
            );
          })}

          <Link
            to="/"
            onClick={() => setOpen(false)}
            className="mt-10 inline-block text-blue-600 font-semibold hover:text-blue-800 transition"
          >
            ← Back to Website
          </Link>
        </nav>
      </aside>

      {/* ========== Overlay for Mobile Drawer ========== */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 md:hidden z-40"
          onClick={() => setOpen(false)}
        ></div>
      )}

      {/* ========== Main Content ========== */}
      <main className="flex-1 p-10 pt-20 md:pt-10 w-full">
        {pathname === "/admin" ? (
          <div className="text-center mt-24">
            <h1 className="text-5xl font-extrabold text-gray-800">
              Welcome Admin 👋
            </h1>
            <p className="text-gray-500 mt-3 text-lg max-w-xl mx-auto leading-relaxed">
              Use the sidebar to manage your projects, clients, messages, and subscribers.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mt-14 max-w-4xl mx-auto">
              {menu.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="p-8 rounded-xl bg-white shadow hover:shadow-xl border border-gray-200 
                  transition-all hover:-translate-y-1 text-center"
                >
                  <div className="text-blue-600 text-4xl mb-3">{item.icon}</div>
                  <h3 className="font-semibold text-xl text-gray-700">{item.name}</h3>
                </Link>
              ))}
            </div>
          </div>
        ) : (
          <Outlet />
        )}
      </main>
    </div>
  );
}
