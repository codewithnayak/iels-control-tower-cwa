import { useState } from "react";
import scopesData from "../../../data/scopes.json";
import MainLayout from "../../../layouts/MainLayout";

export default function ScopesList() {
  const [filter, setFilter] = useState("");
  const [page, setPage] = useState(0);
  const pageSize = 5;

  const filtered = scopesData.filter((s) =>
    s.name.toLowerCase().includes(filter.toLowerCase()),
  );

  const paginated = filtered.slice(page * pageSize, (page + 1) * pageSize);

  return (
    <MainLayout>
      <h1 className="text-3xl font-bold mb-8">Scopes</h1>

      {/* Search + Add */}
      <div className="flex justify-between items-center mb-6">
        <input
          className="border p-2 rounded w-1/3 shadow-sm"
          placeholder="Search scopes..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />

        <a
          href="/scopes/add"
          className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700"
        >
          Add Scope
        </a>
      </div>

      {/* Table */}
      <div className="bg-white rounded shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-100 sticky top-0 z-10">
            <tr className="text-left text-gray-700">
              <th className="p-3 font-semibold">Scope Name</th>
              <th className="p-3 font-semibold">Description</th>
              <th className="p-3 font-semibold">Actions</th>
            </tr>
          </thead>

          <tbody>
            {paginated.map((s) => (
              <tr key={s.id} className="border-t hover:bg-gray-50 transition">
                <td className="p-3">{s.name}</td>
                <td className="p-3">{s.description}</td>
                <td className="p-3">
                  <a
                    href={`/scopes/edit/${s.id}`}
                    className="text-blue-600 hover:text-blue-800"
                  >
                    Edit
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex gap-2 mt-6">
        {[...Array(Math.ceil(filtered.length / pageSize))].map((_, i) => (
          <button
            key={i}
            onClick={() => setPage(i)}
            className={`px-3 py-1 rounded shadow ${
              page === i
                ? "bg-blue-600 text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </MainLayout>
  );
}
