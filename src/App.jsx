import Button from "./components/Button/Button";
import Board from "./components/Board/Board";
import getRandomDiceIndex from "./utils/getRandomIndexOfArray.js";
import { DICE_COUNT } from "./components/Dice/Dice.jsx";
import { useState } from "react";
import Options from "./components/Options/Options.jsx";

export default function App() {
  const [diceIndex, setDiceIndex] = useState(() =>
    getRandomDiceIndex(DICE_COUNT, 1)
  );

  const handleChangeCount = (count) => {
    setDiceIndex(getRandomDiceIndex(DICE_COUNT, count));
  };
  const handleRoll = () => {
    setDiceIndex(
      getRandomDiceIndex(DICE_COUNT, diceIndex.length) // сколько уже есть
    );
  };

  return (
    <>
      <Board diceIndex={diceIndex} />
      <Options max={DICE_COUNT} onChange={handleChangeCount} />
      <Button className="button" onRoll={handleRoll} />
    </>
  );
}
