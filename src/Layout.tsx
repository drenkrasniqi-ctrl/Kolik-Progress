import { Outlet, Link } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './components/Navbar';

const Layout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="relative h-screen overflow-hidden w-full">
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-30"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-gray-100 p-4 z-40 shadow-md transform ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out`}
      >
        <h1 className="text-2xl font-bold mb-4 flex items-center gap-2">🛒 Kolik</h1>
        <nav className="flex flex-col gap-3 text-sm">
          <Link to="/" className="hover:underline" onClick={() => setSidebarOpen(false)}>🏠 Home</Link>
          <Link to="/categories" className="hover:underline" onClick={() => setSidebarOpen(false)}>📂 Categories</Link>
          <Link to="/supermarkets" className="hover:underline" onClick={() => setSidebarOpen(false)}>🏬 Supermarkets</Link>
          <Link to="/how-to-create-account" className="hover:underline" onClick={() => setSidebarOpen(false)}>📸 How to create your acc</Link>
          <Link to="/account-settings" className="hover:underline" onClick={() => setSidebarOpen(false)}>⚙️ Your account settings</Link>
          <Link to="/contact" className="hover:underline" onClick={() => setSidebarOpen(false)}>📞 Contact us</Link>
        </nav>
      </aside>

      <div className="flex flex-col h-full w-full">
        <Navbar onBurgerClick={() => setSidebarOpen(!sidebarOpen)} />
        <main className="flex-1 w-full h-full px-4 md:px-6 py-6 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
