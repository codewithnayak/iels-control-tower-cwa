import { useState } from "react";
import { useParams } from "react-router-dom";
import judgesData from "../../../data/judges.json";
import courtroomsData from "../../../data/courtrooms.json";
import MainLayout from "../../../layouts/MainLayout";

export default function JudgesEdit() {
  const { id } = useParams();
  const judge = judgesData.find((j) => j.id === Number(id));

  const [form, setForm] = useState({
    name: judge.name,
    courtroomId: judge.courtroomId,
    experience: judge.experience,
  });

  const save = () => {
    alert("Judge updated (dummy). API integration later.");
  };

  return (
    <MainLayout>
      <h1 className="text-3xl font-bold mb-8">Edit Judge</h1>

      <div className="bg-white p-6 rounded shadow w-full md:w-2/3 lg:w-1/2">
        <div className="mb-5">
          <label className="block mb-1 font-medium">Judge Name</label>
          <input
            className="border p-2 rounded w-full shadow-sm"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
        </div>

        <div className="mb-5">
          <label className="block mb-1 font-medium">Courtroom</label>
          <select
            className="border p-2 rounded w-full shadow-sm"
            value={form.courtroomId}
            onChange={(e) =>
              setForm({ ...form, courtroomId: Number(e.target.value) })
            }
          >
            {courtroomsData.map((c) => (
              <option key={c.id} value={c.id}>
                {c.name}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-5">
          <label className="block mb-1 font-medium">Experience (Years)</label>
          <input
            type="number"
            className="border p-2 rounded w-full shadow-sm"
            value={form.experience}
            onChange={(e) => setForm({ ...form, experience: e.target.value })}
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
