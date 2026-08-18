import { useState } from "react";
import usersData from "../../data/users.json";
import stationsData from "../../data/stations.json";
import FormInput from "../../components/common/FormInput";
import FormSelect from "../../components/common/FormSelect";
import MainLayout from "../../layouts/MainLayout";

export default function Users() {
  const [users, setUsers] = useState(usersData);
  const [form, setForm] = useState({
    name: "",
    email: "",
    stationId: "",
    roles: "",
  });

  const addUser = () => {
    const newUser = {
      id: users.length + 1,
      ...form,
      stationId: Number(form.stationId),
      roles: form.roles.split(",").map((r) => r.trim()),
    };

    setUsers([...users, newUser]);
    setForm({ name: "", email: "", stationId: "", roles: "" });
  };

  const deleteUser = (id) => {
    setUsers(users.filter((u) => u.id !== id));
  };

  return (
    <MainLayout>
      <h1 className="text-2xl font-bold mb-6">Users</h1>

      {/* Add User Form */}
      <div className="bg-white p-6 rounded shadow mb-10">
        <h2 className="text-xl font-semibold mb-4">Add User</h2>

        <FormInput
          label="Name"
          value={form.name}
          onChange={(v) => setForm({ ...form, name: v })}
        />

        <FormInput
          label="Email"
          value={form.email}
          onChange={(v) => setForm({ ...form, email: v })}
        />

        <FormSelect
          label="Station"
          value={form.stationId}
          onChange={(v) => setForm({ ...form, stationId: v })}
          options={stationsData.map((s) => ({
            value: s.id,
            label: s.name,
          }))}
        />

        <FormInput
          label="Roles (comma separated)"
          value={form.roles}
          onChange={(v) => setForm({ ...form, roles: v })}
        />

        <button
          onClick={addUser}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Add User
        </button>
      </div>

      {/* User List */}
      <div className="bg-white p-6 rounded shadow">
        <h2 className="text-xl font-semibold mb-4">User List</h2>

        <ul className="space-y-3">
          {users.map((u) => (
            <li key={u.id} className="border p-3 rounded flex justify-between">
              <div>
                <strong>{u.name}</strong> — {u.email}
                <br />
                Station: {u.stationId}
                <br />
                Roles: {u.roles.join(", ")}
              </div>

              <button
                onClick={() => deleteUser(u.id)}
                className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </MainLayout>
  );
}
