import { useState } from "react";
import rolesData from "../../data/roles.json";
import FormInput from "../../components/common/FormInput";
import MainLayout from "../../layouts/MainLayout";

export default function Roles() {
  const [roles, setRoles] = useState(rolesData);
  const [form, setForm] = useState({ name: "" });
  const [editingId, setEditingId] = useState(null);

  const addRole = () => {
    if (!form.name.trim()) return;

    const newRole = {
      id: roles.length + 1,
      name: form.name.trim(),
    };

    setRoles([...roles, newRole]);
    setForm({ name: "" });
  };

  const deleteRole = (id) => {
    setRoles(roles.filter((r) => r.id !== id));
  };

  const startEdit = (role) => {
    setEditingId(role.id);
    setForm({ name: role.name });
  };

  const saveEdit = () => {
    setRoles(
      roles.map((r) =>
        r.id === editingId ? { ...r, name: form.name.trim() } : r,
      ),
    );
    setEditingId(null);
    setForm({ name: "" });
  };

  return (
    <MainLayout>
      <h1 className="text-2xl font-bold mb-6">Roles</h1>

      {/* Add / Edit Role Form */}
      <div className="bg-white p-6 rounded shadow mb-10">
        <h2 className="text-xl font-semibold mb-4">
          {editingId ? "Edit Role" : "Add Role"}
        </h2>

        <FormInput
          label="Role Name"
          value={form.name}
          onChange={(v) => setForm({ ...form, name: v })}
        />

        {editingId ? (
          <div className="flex gap-3">
            <button
              onClick={saveEdit}
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
            >
              Save Changes
            </button>

            <button
              onClick={() => {
                setEditingId(null);
                setForm({ name: "" });
              }}
              className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
            >
              Cancel
            </button>
          </div>
        ) : (
          <button
            onClick={addRole}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Add Role
          </button>
        )}
      </div>

      {/* Role List */}
      <div className="bg-white p-6 rounded shadow">
        <h2 className="text-xl font-semibold mb-4">Role List</h2>

        <ul className="space-y-3">
          {roles.map((r) => (
            <li
              key={r.id}
              className="border p-3 rounded flex justify-between items-center"
            >
              <span className="font-medium">{r.name}</span>

              <div className="flex gap-3">
                <button
                  onClick={() => startEdit(r)}
                  className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
                >
                  Edit
                </button>

                <button
                  onClick={() => deleteRole(r.id)}
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
