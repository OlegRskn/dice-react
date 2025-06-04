import { useState } from "react";

let dices = [
  "/dices/dice(1).png",
  "/dices/dice(2).png",
  "/dices/dice(3).png",
  "/dices/dice(4).png",
  "/dices/dice(5).png",
  "/dices/dice(6).png",
];

function getRandomDiceIndex() {
  return Math.floor(Math.random() * dices.length);
}

function Dice({ description, className, src }) {
  return <img className={className} src={src} alt={description} />;
}

function Button({ onRoll, className }) {
  return (
    <button className={className} onClick={onRoll}>
      Roll the dice
    </button>
  );
}

export default function Screen() {
  const [diceIndex, setDiceIndex] = useState(getRandomDiceIndex());
  const srcValue = dices[diceIndex];

  return (
    <>
      <div className="dice">
        <Dice
          className="dice__image"
          description={`Dice ${diceIndex + 1}`}
          src={srcValue}
        />
      </div>
      <Button
        className="button"
        onRoll={() => setDiceIndex(getRandomDiceIndex())}
      />
    </>
  );
}
