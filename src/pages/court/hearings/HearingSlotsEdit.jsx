import { useState } from "react";
import { useParams } from "react-router-dom";
import hearingSlotsData from "../../../data/hearingSlots.json";
import courtroomsData from "../../../data/courtrooms.json";
import judgesData from "../../../data/judges.json";
import MainLayout from "../../../layouts/MainLayout";

export default function HearingSlotsEdit() {
  const { id } = useParams();
  const slot = hearingSlotsData.find((h) => h.id === Number(id));

  const [form, setForm] = useState({
    date: slot.date,
    time: slot.time,
    courtroomId: slot.courtroomId,
    judgeId: slot.judgeId,
  });

  const save = () => {
    alert("Hearing slot updated (dummy). API integration later.");
  };

  return (
    <MainLayout>
      <h1 className="text-3xl font-bold mb-8">Edit Hearing Slot</h1>

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
            {judgesData.map((j) => (
              <option key={j.id} value={j.id}>
                {j.name}
              </option>
            ))}
          </select>
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
