export class Wuerfel {
  public static throw(): [number, number] {
    const die1 = Math.floor(Math.random() * 6) + 1;
    const die2 = Math.floor(Math.random() * 6) + 1;
    return [die1, die2];
  }
}
