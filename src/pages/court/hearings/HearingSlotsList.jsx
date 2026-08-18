import { useState } from "react";
import hearingSlotsData from "../../../data/hearingSlots.json";
import courtroomsData from "../../../data/courtrooms.json";
import judgesData from "../../../data/judges.json";
import MainLayout from "../../../layouts/MainLayout";

export default function HearingSlotsList() {
  const [filter, setFilter] = useState("");
  const [page, setPage] = useState(0);
  const pageSize = 5;

  const filtered = hearingSlotsData.filter((h) =>
    h.date.toLowerCase().includes(filter.toLowerCase()),
  );

  const paginated = filtered.slice(page * pageSize, (page + 1) * pageSize);

  const getCourtroomName = (id) => {
    const c = courtroomsData.find((x) => x.id === id);
    return c ? c.name : "Unknown";
  };

  const getJudgeName = (id) => {
    const j = judgesData.find((x) => x.id === id);
    return j ? j.name : "Unknown";
  };

  return (
    <MainLayout>
      <h1 className="text-3xl font-bold mb-8">Hearing Slots</h1>

      {/* Search + Add */}
      <div className="flex justify-between items-center mb-6">
        <input
          className="border p-2 rounded w-1/3 shadow-sm"
          placeholder="Search by date..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />

        <a
          href="/hearings/add"
          className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700"
        >
          Add Hearing Slot
        </a>
      </div>

      {/* Table */}
      <div className="bg-white rounded shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-100 sticky top-0 z-10">
            <tr className="text-left text-gray-700">
              <th className="p-3 font-semibold">Date</th>
              <th className="p-3 font-semibold">Time</th>
              <th className="p-3 font-semibold">Courtroom</th>
              <th className="p-3 font-semibold">Judge</th>
              <th className="p-3 font-semibold">Actions</th>
            </tr>
          </thead>

          <tbody>
            {paginated.map((h) => (
              <tr key={h.id} className="border-t hover:bg-gray-50 transition">
                <td className="p-3">{h.date}</td>
                <td className="p-3">{h.time}</td>
                <td className="p-3">{getCourtroomName(h.courtroomId)}</td>
                <td className="p-3">{getJudgeName(h.judgeId)}</td>
                <td className="p-3">
                  <a
                    href={`/hearings/edit/${h.id}`}
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
