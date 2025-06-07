import { useState } from "react";
import Dice, { DICE_COUNT } from "./components/Dice/Dice";
import Button from "./components/Button/Button";

function getRandomDiceIndex() {
  let indexArray = [];
  const a = (count) => Math.floor(Math.random() * count);

  for (let i = 0; i <= DICE_COUNT; i++) {
    indexArray.push(a(DICE_COUNT));
  }
  return indexArray;
}

export default function App() {
  const [diceIndex, setDiceIndex] = useState(getRandomDiceIndex());

  return (
    <>
      <Dice className="dice__image" diceIndex={diceIndex[0]} />
      <Dice className="dice__image" diceIndex={diceIndex[1]} />

      <Button
        className="button"
        onRoll={() => setDiceIndex(getRandomDiceIndex())}
      />
    </>
  );
}
