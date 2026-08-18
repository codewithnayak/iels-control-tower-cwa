import MainLayout from "../layouts/MainLayout";

export default function Dashboard() {
  return (
    <MainLayout>
      <h1 className="text-3xl font-bold mb-8">IELS Backoffice Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Identity */}
        <a
          href="/users"
          className="bg-white p-6 rounded shadow hover:shadow-lg transition"
        >
          <h2 className="text-xl font-semibold mb-2">Identity Management</h2>
          <p className="text-gray-600">
            Users, Roles, Stations, Permissions, Scopes
          </p>
        </a>

        {/* Court */}
        <a
          href="/courtrooms"
          className="bg-white p-6 rounded shadow hover:shadow-lg transition"
        >
          <h2 className="text-xl font-semibold mb-2">Court Administration</h2>
          <p className="text-gray-600">Courtrooms, Judges, Hearing Slots</p>
        </a>

        {/* Evidence */}
        <a
          href="/evidence-categories"
          className="bg-white p-6 rounded shadow hover:shadow-lg transition"
        >
          <h2 className="text-xl font-semibold mb-2">Evidence Management</h2>
          <p className="text-gray-600">Categories, Retention Policies</p>
        </a>

        {/* AI */}
        <a
          href="/ai-config"
          className="bg-white p-6 rounded shadow hover:shadow-lg transition"
        >
          <h2 className="text-xl font-semibold mb-2">AI Administration</h2>
          <p className="text-gray-600">AI Config, AI Features</p>
        </a>

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
