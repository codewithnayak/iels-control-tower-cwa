import { useState } from "react";
import { useParams } from "react-router-dom";
import usersData from "../../../data/users.json";
import stationsData from "../../../data/stations.json";
import MainLayout from "../../../layouts/MainLayout";

export default function UsersEdit() {
  const { id } = useParams();
  const user = usersData.find((u) => u.id === Number(id));

  const [form, setForm] = useState({
    name: user.name,
    email: user.email,
    stationId: user.stationId,
    roles: user.roles.join(", "),
  });

  const save = () => {
    alert("User updated (dummy). API integration later.");
  };

  return (
    <MainLayout>
      <h1 className="text-3xl font-bold mb-8">Edit User</h1>

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
          <label className="block mb-1 font-medium">Email</label>
          <input
            className="border p-2 rounded w-full shadow-sm"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
        </div>

        <div className="mb-5">
          <label className="block mb-1 font-medium">Station</label>
          <select
            className="border p-2 rounded w-full shadow-sm"
            value={form.stationId}
            onChange={(e) => setForm({ ...form, stationId: e.target.value })}
          >
            {stationsData.map((s) => (
              <option key={s.id} value={s.id}>
                {s.name}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-5">
          <label className="block mb-1 font-medium">
            Roles (comma separated)
          </label>
          <input
            className="border p-2 rounded w-full shadow-sm"
            value={form.roles}
            onChange={(e) => setForm({ ...form, roles: e.target.value })}
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
