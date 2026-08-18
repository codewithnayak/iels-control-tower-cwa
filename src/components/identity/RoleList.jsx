import roles from "../../data/roles.json";

export default function RoleList() {
  return (
    <div>
      <h2>Roles</h2>
      <ul>
        {roles.map((r) => (
          <li key={r.id}>{r.name}</li>
        ))}
      </ul>
    </div>
  );
}
