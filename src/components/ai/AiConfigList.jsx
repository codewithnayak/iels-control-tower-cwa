import config from "../../data/aiConfig.json";

export default function AiConfigList() {
  return (
    <div>
      <h2>AI Configuration</h2>
      <ul>
        {config.map((c) => (
          <li key={c.id}>
            {c.feature} — Enabled: {c.enabled.toString()}
          </li>
        ))}
      </ul>
    </div>
  );
}
