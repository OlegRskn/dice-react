import { useState } from "react";
import Dice, { DICE_COUNT } from "./components/Dice/Dice";
import Button from "./components/Button/Button";

function getRandomDiceIndex() {
  return Math.floor(Math.random() * DICE_COUNT);
}

export default function App() {
  const [diceIndex, setDiceIndex] = useState(getRandomDiceIndex());

  return (
    <>
      <Dice className="dice__image" diceIndex={diceIndex} />
      <Button
        className="button"
        onRoll={() => setDiceIndex(getRandomDiceIndex())}
      />
    </>
  );
}
