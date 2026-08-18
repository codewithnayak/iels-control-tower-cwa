import courtrooms from "../../data/courtrooms.json";

export default function CourtroomList() {
  return (
    <div>
      <h2>Courtrooms</h2>
      <ul>
        {courtrooms.map((c) => (
          <li key={c.id}>
            {c.name} — {c.location}
          </li>
        ))}
      </ul>
    </div>
  );
}
