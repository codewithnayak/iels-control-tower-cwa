import { useState } from "react";
import { useParams } from "react-router-dom";
import rolesData from "../../../data/roles.json";
import MainLayout from "../../../layouts/MainLayout";

export default function RolesEdit() {
  const { id } = useParams();
  const role = rolesData.find((r) => r.id === Number(id));
  const [name, setName] = useState(role.name);

  const save = () => {
    alert("Role updated (dummy).");
  };

  return (
    <MainLayout>
      <h1 className="text-3xl font-bold mb-8">Edit Role</h1>

      <div className="bg-white p-6 rounded shadow w-full md:w-2/3 lg:w-1/2">
        <div className="mb-5">
          <label className="block mb-1 font-medium">Role Name</label>
          <input
            className="border p-2 rounded w-full shadow-sm"
            value={name}
            onChange={(e) => setName(e.target.value)}
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
