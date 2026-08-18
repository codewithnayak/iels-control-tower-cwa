import { useState } from "react";
import { useParams } from "react-router-dom";
import retentionPoliciesData from "../../../data/retentionPolicies.json";
import MainLayout from "../../../layouts/MainLayout";

export default function RetentionPoliciesEdit() {
  const { id } = useParams();
  const policy = retentionPoliciesData.find((p) => p.id === Number(id));

  const [form, setForm] = useState({
    name: policy.name,
    duration: policy.duration,
    description: policy.description,
  });

  const save = () => {
    alert("Retention policy updated (dummy). API integration later.");
  };

  return (
    <MainLayout>
      <h1 className="text-3xl font-bold mb-8">Edit Retention Policy</h1>

      <div className="bg-white p-6 rounded shadow w-full md:w-2/3 lg:w-1/2">
        <div className="mb-5">
          <label className="block mb-1 font-medium">Policy Name</label>
          <input
            className="border p-2 rounded w-full shadow-sm"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
        </div>

        <div className="mb-5">
          <label className="block mb-1 font-medium">Duration</label>
          <input
            className="border p-2 rounded w-full shadow-sm"
            value={form.duration}
            onChange={(e) => setForm({ ...form, duration: e.target.value })}
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
