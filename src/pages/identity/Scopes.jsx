import { useState } from "react";
import scopesData from "../../data/scopes.json";
import FormInput from "../../components/common/FormInput";
import MainLayout from "../../layouts/MainLayout";

export default function Scopes() {
  const [scopes, setScopes] = useState(scopesData);
  const [form, setForm] = useState({ name: "" });
  const [editingIndex, setEditingIndex] = useState(null);

  const addScope = () => {
    setScopes([...scopes, form.name.trim()]);
    setForm({ name: "" });
  };

  const deleteScope = (index) => {
    setScopes(scopes.filter((_, i) => i !== index));
  };

  const startEdit = (index) => {
    setEditingIndex(index);
    setForm({ name: scopes[index] });
  };

  const saveEdit = () => {
    const updated = [...scopes];
    updated[editingIndex] = form.name.trim();
    setScopes(updated);
    setEditingIndex(null);
    setForm({ name: "" });
  };

  return (
    <MainLayout>
      <h1 className="text-2xl font-bold mb-6">Scopes</h1>

      <div className="bg-white p-6 rounded shadow mb-10">
        <h2 className="text-xl font-semibold mb-4">
          {editingIndex !== null ? "Edit Scope" : "Add Scope"}
        </h2>

        <FormInput
          label="Scope Name"
          value={form.name}
          onChange={(v) => setForm({ name: v })}
        />

        {editingIndex !== null ? (
          <button
            onClick={saveEdit}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            Save Changes
          </button>
        ) : (
          <button
            onClick={addScope}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Add Scope
          </button>
        )}
      </div>

      <div className="bg-white p-6 rounded shadow">
        <h2 className="text-xl font-semibold mb-4">Scope List</h2>

        <ul className="space-y-3">
          {scopes.map((s, index) => (
            <li key={index} className="border p-3 rounded flex justify-between">
              <span>{s}</span>

              <div className="flex gap-3">
                <button
                  onClick={() => startEdit(index)}
                  className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
                >
                  Edit
                </button>

                <button
                  onClick={() => deleteScope(index)}
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
