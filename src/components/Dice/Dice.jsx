import "./Dice.css";
const dices = [
  "/dices/dice(1).png",
  "/dices/dice(2).png",
  "/dices/dice(3).png",
  "/dices/dice(4).png",
  "/dices/dice(5).png",
  "/dices/dice(6).png",
];

export const DICE_COUNT = dices.length;

export default function Dice({ diceIndex, className }) {
  const src = dices[diceIndex];

  return (
    <div className="dice">
      <img className={className} src={src} alt={`Dice ${diceIndex + 1}`} />{" "}
    </div>
  );
}
