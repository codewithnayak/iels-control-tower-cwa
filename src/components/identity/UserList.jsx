import users from "../../data/users.json";

export default function UserList() {
  return (
    <div>
      <h2>Users</h2>
      <ul>
        {users.map((u) => (
          <li key={u.id}>
            {u.name} — {u.email} — Station: {u.stationId} — Roles:{" "}
            {u.roles.join(", ")}
          </li>
        ))}
      </ul>
    </div>
  );
}
