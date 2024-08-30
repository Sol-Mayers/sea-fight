export const generateShips = function (amountOfCells, cellsInterval) {
    let arr = Array(cellsInterval)
        .fill(0)
        .map((_, i) => i)
        .sort(() => Math.random() - 0.5)
        .slice(0, amountOfCells);

    return arr;
};
