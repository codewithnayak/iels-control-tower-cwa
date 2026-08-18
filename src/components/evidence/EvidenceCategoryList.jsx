import categories from "../../data/evidenceCategories.json";

export default function EvidenceCategoryList() {
  return (
    <div>
      <h2>Evidence Categories</h2>
      <ul>
        {categories.map((c) => (
          <li key={c.id}>{c.name}</li>
        ))}
      </ul>
    </div>
  );
}
