import { useState } from "react";
import stationsData from "../../data/stations.json";
import FormInput from "../../components/common/FormInput";
import MainLayout from "../../layouts/MainLayout";

export default function Stations() {
  const [stations, setStations] = useState(stationsData);
  const [form, setForm] = useState({ name: "", address: "" });
  const [editingId, setEditingId] = useState(null);

  const addStation = () => {
    const newStation = {
      id: stations.length + 101,
      ...form,
    };
    setStations([...stations, newStation]);
    setForm({ name: "", address: "" });
  };

  const deleteStation = (id) => {
    setStations(stations.filter((s) => s.id !== id));
  };

  const startEdit = (station) => {
    setEditingId(station.id);
    setForm({ name: station.name, address: station.address });
  };

  const saveEdit = () => {
    setStations(
      stations.map((s) => (s.id === editingId ? { ...s, ...form } : s)),
    );
    setEditingId(null);
    setForm({ name: "", address: "" });
  };

  return (
    <MainLayout>
      <h1 className="text-2xl font-bold mb-6">Stations</h1>

      <div className="bg-white p-6 rounded shadow mb-10">
        <h2 className="text-xl font-semibold mb-4">
          {editingId ? "Edit Station" : "Add Station"}
        </h2>

        <FormInput
          label="Station Name"
          value={form.name}
          onChange={(v) => setForm({ ...form, name: v })}
        />

        <FormInput
          label="Address"
          value={form.address}
          onChange={(v) => setForm({ ...form, address: v })}
        />

        {editingId ? (
          <button
            onClick={saveEdit}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            Save Changes
          </button>
        ) : (
          <button
            onClick={addStation}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Add Station
          </button>
        )}
      </div>

      <div className="bg-white p-6 rounded shadow">
        <h2 className="text-xl font-semibold mb-4">Station List</h2>

        <ul className="space-y-3">
          {stations.map((s) => (
            <li key={s.id} className="border p-3 rounded flex justify-between">
              <div>
                <strong>{s.name}</strong>
                <br />
                {s.address}
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => startEdit(s)}
                  className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
                >
                  Edit
                </button>

                <button
                  onClick={() => deleteStation(s.id)}
                  className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </MainLayout>
  );
}
