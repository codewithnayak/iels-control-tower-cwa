import judges from "../../data/judges.json";

export default function JudgeList() {
  return (
    <div>
      <h2>Judges</h2>
      <ul>
        {judges.map((j) => (
          <li key={j.id}>
            {j.name} — Courtroom ID: {j.courtroomId}
          </li>
        ))}
      </ul>
    </div>
  );
}
