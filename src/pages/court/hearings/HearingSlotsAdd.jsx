import { useState } from "react";
import courtroomsData from "../../../data/courtrooms.json";
import judgesData from "../../../data/judges.json";
import MainLayout from "../../../layouts/MainLayout";

export default function HearingSlotsAdd() {
  const [form, setForm] = useState({
    date: "",
    time: "",
    courtroomId: "",
    judgeId: "",
  });

  const save = () => {
    alert("Hearing slot saved (dummy). API integration later.");
  };

  return (
    <MainLayout>
      <h1 className="text-3xl font-bold mb-8">Add Hearing Slot</h1>

      <div className="bg-white p-6 rounded shadow w-full md:w-2/3 lg:w-1/2">
        <div className="mb-5">
          <label className="block mb-1 font-medium">Date</label>
          <input
            type="date"
            className="border p-2 rounded w-full shadow-sm"
            value={form.date}
            onChange={(e) => setForm({ ...form, date: e.target.value })}
          />
        </div>

        <div className="mb-5">
          <label className="block mb-1 font-medium">Time</label>
          <input
            type="time"
            className="border p-2 rounded w-full shadow-sm"
            value={form.time}
            onChange={(e) => setForm({ ...form, time: e.target.value })}
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
            <option value="">Select courtroom</option>
            {courtroomsData.map((c) => (
              <option key={c.id} value={c.id}>
                {c.name}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-5">
          <label className="block mb-1 font-medium">Judge</label>
          <select
            className="border p-2 rounded w-full shadow-sm"
            value={form.judgeId}
            onChange={(e) =>
              setForm({ ...form, judgeId: Number(e.target.value) })
            }
          >
            <option value="">Select judge</option>
            {judgesData.map((j) => (
              <option key={j.id} value={j.id}>
                {j.name}
              </option>
            ))}
          </select>
        </div>

        <button
          onClick={save}
          className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700"
        >
          Save Hearing Slot
        </button>
      </div>
    </MainLayout>
  );
}
