import { useState } from "react";
import { useParams } from "react-router-dom";
import stationsData from "../../data/stations.json";
import MainLayout from "../../layouts/MainLayout";

export default function StationsEdit() {
  const { id } = useParams();
  const station = stationsData.find((s) => s.id === Number(id));
  const [form, setForm] = useState({
    name: station.name,
    address: station.address,
  });

  const save = () => {
    alert("Station updated (dummy).");
  };

  return (
    <MainLayout>
      <h1 className="text-3xl font-bold mb-8">Edit Station</h1>

      <div className="bg-white p-6 rounded shadow w-full md:w-2/3 lg:w-1/2">
        <div className="mb-5">
          <label className="block mb-1 font-medium">Name</label>
          <input
            className="border p-2 rounded w-full shadow-sm"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
        </div>

        <div className="mb-5">
          <label className="block mb-1 font-medium">Address</label>
          <input
            className="border p-2 rounded w-full shadow-sm"
            value={form.address}
            onChange={(e) => setForm({ ...form, address: e.target.value })}
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
