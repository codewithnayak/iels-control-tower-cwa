import permissions from "../../data/permissions.json";

export default function PermissionList() {
  return (
    <div>
      <h2>Permissions</h2>
      <ul>
        {permissions.map((p, idx) => (
          <li key={idx}>{p}</li>
        ))}
      </ul>
    </div>
  );
}
