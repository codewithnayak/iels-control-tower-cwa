import stations from "../../data/stations.json";

export default function StationList() {
  return (
    <div>
      <h2>Stations</h2>
      <ul>
        {stations.map((s) => (
          <li key={s.id}>
            {s.name} — {s.address}
          </li>
        ))}
      </ul>
    </div>
  );
}
