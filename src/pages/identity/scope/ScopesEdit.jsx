import { useState } from "react";
import { useParams } from "react-router-dom";
import scopesData from "../../../data/scopes.json";
import MainLayout from "../../../layouts/MainLayout";

export default function ScopesEdit() {
  const { id } = useParams();
  const scope = scopesData.find((s) => s.id === Number(id));

  const [form, setForm] = useState({
    name: scope.name,
    description: scope.description,
  });

  const save = () => {
    alert("Scope updated (dummy). API integration later.");
  };

  return (
    <MainLayout>
      <h1 className="text-3xl font-bold mb-8">Edit Scope</h1>

      <div className="bg-white p-6 rounded shadow w-full md:w-2/3 lg:w-1/2">
        <div className="mb-5">
          <label className="block mb-1 font-medium">Scope Name</label>
          <input
            className="border p-2 rounded w-full shadow-sm"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
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
