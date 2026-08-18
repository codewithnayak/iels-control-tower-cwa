export default function ListFilter({ value, onChange, placeholder }) {
  return (
    <input
      className="border p-2 rounded w-full mb-4"
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}
