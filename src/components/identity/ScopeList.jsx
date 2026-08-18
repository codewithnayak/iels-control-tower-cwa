import scopes from "../../data/scopes.json";

export default function ScopeList() {
  return (
    <div>
      <h2>Scopes</h2>
      <ul>
        {scopes.map((s, idx) => (
          <li key={idx}>{s}</li>
        ))}
      </ul>
    </div>
  );
}
