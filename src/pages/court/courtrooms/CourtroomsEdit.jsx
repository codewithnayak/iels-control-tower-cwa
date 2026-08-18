import { useState } from "react";
import { useParams } from "react-router-dom";
import courtroomsData from "../../../data/courtrooms.json";
import MainLayout from "../../../layouts/MainLayout";

export default function CourtroomsEdit() {
  const { id } = useParams();
  const courtroom = courtroomsData.find((c) => c.id === Number(id));

  const [form, setForm] = useState({
    name: courtroom.name,
    location: courtroom.location,
    capacity: courtroom.capacity,
  });

  const save = () => {
    alert("Courtroom updated (dummy). API integration later.");
  };

  return (
    <MainLayout>
      <h1 className="text-3xl font-bold mb-8">Edit Courtroom</h1>

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
          className="bg-green-600 text-white px-4 py-2 rounded shadow hover:bg-green-700"
        >
          Save Changes
        </button>
      </div>
    </MainLayout>
  );
}
