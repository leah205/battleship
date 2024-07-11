function isPossible(index, hitBoard, shipBoard) {
    const sunkShipLengths = shipBoard
        .filter((ship) => ship && ship.isSunk)
        .map((ship) => ship.getLength());
    const lengths = [2,3,3,4,5]
    sunkShipLengths.forEach((length) => {
        if(lengths.includes(length))
    })
    if(!isLeftSpace())
}
