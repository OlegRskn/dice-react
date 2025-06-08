import "./Board.css";
import Dice from "../Dice/Dice";

export default function Board({ diceIndex }) {
  return (
    <div className="board">
      {diceIndex.map((value, i) => (
        <Dice key={i} diceIndex={value} className="dice__image" />
      ))}
    </div>
  );
}
