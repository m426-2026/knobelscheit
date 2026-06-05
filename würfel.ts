export function würfelEinmal(): number {
    return Math.floor(Math.random() * 6) + 1;
}

export function würfelZweimal(): number {
    return würfelEinmal() + würfelEinmal();
}