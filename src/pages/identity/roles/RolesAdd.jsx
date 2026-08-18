import { useState } from "react";
import MainLayout from "../../../layouts/MainLayout";

export default function RolesAdd() {
  const [name, setName] = useState("");

  const save = () => {
    alert("Role saved (dummy).");
  };

  return (
    <MainLayout>
      <h1 className="text-3xl font-bold mb-8">Add Role</h1>

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
          className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700"
        >
          Save Role
        </button>
      </div>
    </MainLayout>
  );
}
