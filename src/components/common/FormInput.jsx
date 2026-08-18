export default function FormInput({ label, value, onChange }) {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium mb-1">{label}</label>
      <input
        className="border p-2 w-full rounded"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
