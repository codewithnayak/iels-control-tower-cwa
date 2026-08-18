import { useState } from "react";
import permissionsData from "../../data/permissions.json";
import FormInput from "../../components/common/FormInput";
import MainLayout from "../../layouts/MainLayout";

export default function Permissions() {
  const [permissions, setPermissions] = useState(permissionsData);
  const [form, setForm] = useState({ name: "" });
  const [editingIndex, setEditingIndex] = useState(null);

  const addPermission = () => {
    setPermissions([...permissions, form.name.trim()]);
    setForm({ name: "" });
  };

  const deletePermission = (index) => {
    setPermissions(permissions.filter((_, i) => i !== index));
  };

  const startEdit = (index) => {
    setEditingIndex(index);
    setForm({ name: permissions[index] });
  };

  const saveEdit = () => {
    const updated = [...permissions];
    updated[editingIndex] = form.name.trim();
    setPermissions(updated);
    setEditingIndex(null);
    setForm({ name: "" });
  };

  return (
    <MainLayout>
      <h1 className="text-2xl font-bold mb-6">Permissions</h1>

      <div className="bg-white p-6 rounded shadow mb-10">
        <h2 className="text-xl font-semibold mb-4">
          {editingIndex !== null ? "Edit Permission" : "Add Permission"}
        </h2>

        <FormInput
          label="Permission Name"
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
            onClick={addPermission}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Add Permission
          </button>
        )}
      </div>

      <div className="bg-white p-6 rounded shadow">
        <h2 className="text-xl font-semibold mb-4">Permission List</h2>

        <ul className="space-y-3">
          {permissions.map((p, index) => (
            <li key={index} className="border p-3 rounded flex justify-between">
              <span>{p}</span>

              <div className="flex gap-3">
                <button
                  onClick={() => startEdit(index)}
                  className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
                >
                  Edit
                </button>

                <button
                  onClick={() => deletePermission(index)}
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
