import { Knobelscheit } from "./knobelscheit.ts";
import { rollDice, diceSum } from "./dice.ts";

// ---------------------------------------------------------------------------

function print(text = ""): void {
  console.log(text);
}

function readLine(): string {
  const buf = new Uint8Array(1024);
  const n = Deno.stdin.readSync(buf);
  if (n === null) return "";
  return new TextDecoder().decode(buf.subarray(0, n)).trim();
}

function parseNumbers(input: string): number[] | null {
  const parts = input
    .split(/[\s,]+/)
    .map((s) => s.trim())
    .filter((s) => s.length > 0);

  if (parts.length === 0) return null;

  const numbers: number[] = [];
  for (const part of parts) {
    const n = Number(part);
    if (!Number.isInteger(n) || isNaN(n)) return null;
    numbers.push(n);
  }
  return numbers;
}

// ---------------------------------------------------------------------------

function printBoard(board: Knobelscheit): void {
  print("  Brett:  " + board.getDisplay());
}

function printDice(d1: number, d2: number): void {
  print("   ----  ----");
  print(`  | ${d1} | | ${d2} |        Augensumme: ${d1 + d2}`);
  print("  ----  ----");
}

// ---------------------------------------------------------------------------

function sumPossible(numbers: number[], target: number): boolean {
  if (target === 0) return true;
  if (numbers.length === 0 || target < 0) return false;
  const [first, ...rest] = numbers;
  return sumPossible(rest, target - first) || sumPossible(rest, target);
}

function canMakeMove(board: Knobelscheit, target: number): boolean {
  return sumPossible(board.getAvailable(), target);
}

// ---------------------------------------------------------------------------

function playGame(): void {
  const board = new Knobelscheit();
  let rolls = 0;

  while (!board.isComplete()) {
    print(
      "\n\x1b[31m----------------------------------------------------------------------------\x1b[0m\n",
    );

    printBoard(board);

    const dice = rollDice();
    const rawTotal = diceSum(dice);
    const total = rawTotal > 9 ? rawTotal - 9 : rawTotal;
    rolls++;

    print(`\n--------------| Wurf ${rolls} |--------------\n`);
    printDice(dice[0], dice[1]);

    if (rawTotal !== total) {
      print(`\n( ${rawTotal} > 9 → wird als ${total} gewertet )`);
    }

    print(`\n--------------------------------------`);

    if (!canMakeMove(board, total)) {
      print(
        `\n  Kein Zug möglich: ${total} lässt sich mit den verfügbaren Zahlen nicht darstellen.`,
      );
      print(`\n  Verfügbar: ${board.getAvailable().join("  ")}`);
      print();
      print("  Drücke Y + Enter um erneut zu würfeln.\n");
      while (readLine().toLowerCase() !== "y") {
        print("  Drücke Y + Enter um erneut zu würfeln.\n");
      }
      print();
      continue;
    }

    let moved = false;
    while (!moved) {
      print(`\n  Verfügbar:   ${board.getAvailable().join("  ")}`);
      print(`\n  Welche Zahl(en) willst du für ${total} umklappen? `);
      print('\n  Wenn du das spiel beenden möchtest, schreib "end".\n');

      const input = readLine().trim().toLowerCase();

      if (input === "end") {
        print("\n  Spiel wurde beendet.");
        print(
          "\n\x1b[31m----------------------------------------------------------------------------\x1b[0m\n",
        );
        return;
      }

      const numbers = parseNumbers(input);

      if (numbers === null) {
        print("\n  Ungültige Eingabe. Beispiel: 3 4\n");
        continue;
      }

      const success = board.flip(numbers, total);
      if (success) {
        moved = true;
        print(`\n  ${numbers.join(" + ")} = ${total} umgeklappt.\n`);
      } else {
        print(
          `  Ungültiger Zug: ${numbers.join(", ")} ergibt nicht ${total} oder eine Zahl ist bereits umgeklappt.`,
        );
      }
    }
  }

  printBoard(board);
  print("\n  Gewonnen! Alle Zahlen geklappt!");
  print(`\n  Du hast ${String(rolls).padEnd(3)} Mal gewürfelt.\n`);
}

playGame();
