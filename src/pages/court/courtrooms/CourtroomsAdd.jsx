import { useState } from "react";
import MainLayout from "../../../layouts/MainLayout";

export default function CourtroomsAdd() {
  const [form, setForm] = useState({
    name: "",
    location: "",
    capacity: "",
  });

  const save = () => {
    alert("Courtroom saved (dummy). API integration later.");
  };

  return (
    <MainLayout>
      <h1 className="text-3xl font-bold mb-8">Add Courtroom</h1>

      <div className="bg-white p-6 rounded shadow w-full md:w-2/3 lg:w-1/2">
        <div className="mb-5">
          <label className="block mb-1 font-medium">Courtroom Name</label>
          <input
            className="border p-2 rounded w-full shadow-sm"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
        </div>

        <div className="mb-5">
          <label className="block mb-1 font-medium">Location</label>
          <input
            className="border p-2 rounded w-full shadow-sm"
            value={form.location}
            onChange={(e) => setForm({ ...form, location: e.target.value })}
          />
        </div>

        <div className="mb-5">
          <label className="block mb-1 font-medium">Capacity</label>
          <input
            type="number"
            className="border p-2 rounded w-full shadow-sm"
            value={form.capacity}
            onChange={(e) => setForm({ ...form, capacity: e.target.value })}
          />
        </div>

        <button
          onClick={save}
          className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700"
        >
          Save Courtroom
        </button>
      </div>
    </MainLayout>
  );
}
