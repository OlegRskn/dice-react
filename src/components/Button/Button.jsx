import "./Button.css";
export default function Button({ onRoll, className }) {
  return (
    <button className={className} onClick={onRoll}>
      Roll the dice
    </button>
  );
}
