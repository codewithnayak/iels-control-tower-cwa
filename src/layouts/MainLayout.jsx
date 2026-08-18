import { useState } from "react";

export default function MainLayout({ children }) {
  const [menuOpen, setMenuOpen] = useState(true);

  return (
    <div className="h-screen flex flex-col bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow p-4 flex items-center gap-4 justify-between">
        <button
          className="p-2 rounded bg-gray-200 hover:bg-gray-300"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div className="space-y-1">
            <span className="block w-6 h-0.5 bg-gray-700"></span>
            <span className="block w-6 h-0.5 bg-gray-700"></span>
            <span className="block w-6 h-0.5 bg-gray-700"></span>
          </div>
        </button>

        <div className="text-xl font-semibold text-gray-700">
          IELS Backoffice
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside
          className={`
            bg-white text-gray-800 border-r border-gray-200
            p-5 overflow-y-auto
            fixed md:static inset-y-0 left-0
            transform ${menuOpen ? "translate-x-0" : "-translate-x-full"}
            transition-transform duration-300 ease-in-out
            w-64 z-50
          `}
        >
          <nav className="flex flex-col gap-2 text-sm">
            <a href="/" className="p-2 rounded hover:bg-gray-100">
              Dashboard
            </a>

            <h2 className="mt-4 mb-1 text-xs uppercase text-gray-500">
              Identity
            </h2>
            <a href="/users" className="p-2 rounded hover:bg-gray-100">
              Users
            </a>
            <a href="/roles" className="p-2 rounded hover:bg-gray-100">
              Roles
            </a>
            <a href="/stations" className="p-2 rounded hover:bg-gray-100">
              Stations
            </a>
            <a href="/permissions" className="p-2 rounded hover:bg-gray-100">
              Permissions
            </a>
            <a href="/scopes" className="p-2 rounded hover:bg-gray-100">
              Scopes
            </a>

            <h2 className="mt-4 mb-1 text-xs uppercase text-gray-500">Court</h2>
            <a href="/courtrooms" className="p-2 rounded hover:bg-gray-100">
              Courtrooms
            </a>
            <a href="/judges" className="p-2 rounded hover:bg-gray-100">
              Judges
            </a>
            <a href="/hearings" className="p-2 rounded hover:bg-gray-100">
              Hearing Slots
            </a>

            <h2 className="mt-4 mb-1 text-xs uppercase text-gray-500">
              Evidence
            </h2>
            <a
              href="/evidence-categories"
              className="p-2 rounded hover:bg-gray-100"
            >
              Evidence Categories
            </a>
            <a
              href="/retention-policies"
              className="p-2 rounded hover:bg-gray-100"
            >
              Retention Policies
            </a>

            <h2 className="mt-4 mb-1 text-xs uppercase text-gray-500">AI</h2>
            <a href="/ai-config" className="p-2 rounded hover:bg-gray-100">
              AI Config
            </a>
            <a href="/ai-features" className="p-2 rounded hover:bg-gray-100">
              AI Features
            </a>
          </nav>
        </aside>

        {/* Overlay for mobile */}
        {menuOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-40 md:hidden"
            onClick={() => setMenuOpen(false)}
          />
        )}

        {/* Content */}
        <main className="flex-1 p-10 overflow-y-auto">{children}</main>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 p-4 text-sm text-gray-600">
        © 2026 — All Rights Reserved
      </footer>
    </div>
  );
}
