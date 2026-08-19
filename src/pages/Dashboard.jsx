import MainLayout from "../layouts/MainLayout";
import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <MainLayout>
      <h1 className="text-3xl font-bold mb-8">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Identity */}
        <Link
          to="/users"
          className="bg-white p-6 rounded shadow hover:shadow-lg transition"
        >
          <h2 className="text-xl font-semibold mb-2">Identity Management</h2>
          <p className="text-gray-600">
            Users, Roles, Stations, Permissions, Scopes
          </p>
        </Link>

        {/* Court */}
        <Link
          to="/courtrooms"
          className="bg-white p-6 rounded shadow hover:shadow-lg transition"
        >
          <h2 className="text-xl font-semibold mb-2">Court Administration</h2>
          <p className="text-gray-600">Courtrooms, Judges, Hearing Slots</p>
        </Link>

        {/* Evidence */}
        <Link
          to="/evidence-categories"
          className="bg-white p-6 rounded shadow hover:shadow-lg transition"
        >
          <h2 className="text-xl font-semibold mb-2">Evidence Management</h2>
          <p className="text-gray-600">Categories, Retention Policies</p>
        </Link>

        {/* AI */}
        <Link
          to="/ai-config"
          className="bg-white p-6 rounded shadow hover:shadow-lg transition"
        >
          <h2 className="text-xl font-semibold mb-2">AI Administration</h2>
          <p className="text-gray-600">AI Config, AI Features</p>
        </Link>

        {/* System */}
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-xl font-semibold mb-2">System Overview</h2>
          <ul className="text-gray-600 list-disc ml-5">
            <li>Microservice Health</li>
            <li>Audit Logs</li>
            <li>Global Settings</li>
          </ul>
        </div>
      </div>
    </MainLayout>
  );
}
