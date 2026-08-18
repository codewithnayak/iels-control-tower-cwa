import { useState } from "react";
import { useParams } from "react-router-dom";
import aiConfigData from "../../../data/aiConfig.json";
import MainLayout from "../../../layouts/MainLayout";

export default function AIConfigEdit() {
  const { id } = useParams();
  const config = aiConfigData.find((c) => c.id === Number(id));

  const [form, setForm] = useState({
    name: config.name,
    value: config.value,
    description: config.description,
  });

  const save = () => {
    alert("AI config updated (dummy). API integration later.");
  };

  return (
    <MainLayout>
      <h1 className="text-3xl font-bold mb-8">Edit AI Config</h1>

      <div className="bg-white p-6 rounded shadow w-full md:w-2/3 lg:w-1/2">
        <div className="mb-5">
          <label className="block mb-1 font-medium">Config Name</label>
          <input
            className="border p-2 rounded w-full shadow-sm"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
        </div>

        <div className="mb-5">
          <label className="block mb-1 font-medium">Value</label>
          <input
            className="border p-2 rounded w-full shadow-sm"
            value={form.value}
            onChange={(e) => setForm({ ...form, value: e.target.value })}
          />
        </div>

        <div className="mb-5">
          <label className="block mb-1 font-medium">Description</label>
          <textarea
            className="border p-2 rounded w-full shadow-sm"
            rows="3"
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
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
