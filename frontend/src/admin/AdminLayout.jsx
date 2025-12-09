import { Link, Outlet } from "react-router-dom";

export default function AdminLayout() {
  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-xl p-6 border-r">
        <h2 className="text-2xl font-bold mb-6">Admin</h2>

        <nav className="space-y-4 text-gray-700 font-medium">
          <Link to="/admin/projects" className="block hover:text-black">
            Projects
          </Link>
          <Link to="/admin/clients" className="block hover:text-black">
            Clients
          </Link>
          <Link to="/admin/messages" className="block hover:text-black">
            Messages
          </Link>
          <Link to="/admin/subscribers" className="block hover:text-black">
            Newsletter
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10">
        <Outlet />
      </main>
    </div>
  );
}
