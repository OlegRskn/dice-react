import "./Options.css";
export default function Options({ max, onChange }) {
  const options = [];

  for (let i = 1; i <= max; i++) {
    options.push(
      <option key={i} value={i}>
        {i}
      </option>
    );
  }

  return (
    <div className="options">
      <span>Count</span>
      <select
        onChange={(e) => {
          onChange(Number(e.target.value));
        }}
      >
        {options}
      </select>
    </div>
  );
}
