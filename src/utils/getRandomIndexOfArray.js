export default function getRandomDiceIndex(diceSides, count) {
  const indexArray = [];

  for (let i = 0; i < count; i++) {
    indexArray.push(Math.floor(Math.random() * diceSides));
  }

  return indexArray;
}
