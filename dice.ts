export  function roll(): [number, number] {

    const d1 = Math.floor(Math.random() * 6) + 1 ;
    const d2 = Math.floor(Math.random() * 6) + 1;
    return [d1, d2];
}