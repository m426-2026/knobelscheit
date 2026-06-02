import {
  createBoard,
  hasPossibleMove,
  isGameFinish,
  renderBoard,
  tryFlip,
  rollDice,
} from "./demo.ts";

let board = createBoard();
let tries = 0;

console.log("Willkommen zu Knobelscheit");

while (!isGameFinish(board)) {
  tries++;
  const sum = rollDice();

  console.log("Board: " + renderBoard(board));
  console.log("Du hast eine " + sum + " gewürfelt");

  if (!hasPossibleMove(board, sum)) {
    console.log("Keine Kombination möglich.");
    console.log("Du hast verloren! Gebrauchte Würfe: " + tries);
    break;
  }

  const eingabe = prompt("Welche Zahlen möchtest du umklappen (z.B. 2, 3)");

  if (eingabe) {
    const gewaehlteZahlen = eingabe.split(",").map((n) => Number(n.trim()));
    const neuesBoard = tryFlip(board, gewaehlteZahlen, sum);

    if (neuesBoard.length < board.length) {
      console.log("Zahlen wurden umgeklappt");
      board = neuesBoard;
    } else {
      console.log(
        "Ungültiger Zug! Summe passt nicht oder Zahlen sind schon weg",
      );
      tries--;
    }
  }
}

if (isGameFinish(board)) {
  console.log("\n GEWONNEN!!! Du hast das Board abgeräumt.");
  console.log("Du hast " + tries + " Würfe gebraucht.");
}
