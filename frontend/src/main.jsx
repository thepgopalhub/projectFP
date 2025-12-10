import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App";
import './index.css'
import AdminLayout from "./admin/AdminLayout";
import ProjectsPage from "./admin/pages/ProjectsPage";
import ClientsPage from "./admin/pages/ClientsPage";
import MessagesPage from "./admin/pages/MessagesPage";
import SubscribersPage from "./admin/pages/SubscribersPage";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
  <Toaster position="top-right" toastOptions={{ duration: 3000 }} />

    <Routes>
      {/* Landing Page */}
      <Route path="/" element={<App />} />
      
      {/* Admin Dashboard */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route path="projects" element={<ProjectsPage />} />
        <Route path="clients" element={<ClientsPage />} />
        <Route path="messages" element={<MessagesPage />} />
        <Route path="subscribers" element={<SubscribersPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
