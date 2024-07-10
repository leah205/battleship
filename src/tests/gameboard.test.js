import Gameboard from '../gameboard';

test('empty ship grid', () => {
    const playerBoard = Gameboard();
    expect(playerBoard.getShipBoard()).toEqual([]);
});

test('coordinate ship placed at is occupied', () => {
    const playerBoard = Gameboard();
    playerBoard.placeShip([1, 1], 5);
    expect(playerBoard.getShipBoard()[11]).toBeTruthy();
});

test('coordinate ship placed at is occupied', () => {
    const playerBoard = Gameboard();
    playerBoard.placeShip([8, 3], 5);
    expect(playerBoard.getShipBoard()[38]).toBeTruthy();
});

test('attack hits starting coordinate', () => {
    const playerBoard = Gameboard();
    playerBoard.placeShip([8, 3], 5);
    playerBoard.receiveAttack([8, 3]);
    expect(playerBoard.getShipBoard()[38].getHitCount()).toBe(1);
});

test('attack hits non-starting coordinate horizontal', () => {
    const playerBoard = Gameboard();
    playerBoard.placeShip([8, 3], 2);
    playerBoard.receiveAttack([9, 3]);
    expect(playerBoard.getShipBoard()[38].getHitCount()).toBe(1);
});

test('attack hits non-starting coordinate horizontal', () => {
    const playerBoard = Gameboard();
    playerBoard.placeShip([4, 4], 5);
    playerBoard.receiveAttack([6, 4]);
    expect(playerBoard.getShipBoard()[44].getHitCount()).toBe(1);
});

test('attack hits ending coordinate horizontal', () => {
    const playerBoard = Gameboard();
    playerBoard.placeShip([4, 4], 5);
    playerBoard.receiveAttack([8, 4]);
    expect(playerBoard.getShipBoard()[44].getHitCount()).toBe(1);
});

test('attack misses with different y coordinate horizontal', () => {
    const playerBoard = Gameboard();
    playerBoard.placeShip([5, 4], 5);
    playerBoard.receiveAttack([8, 5]);
    expect(playerBoard.getShipBoard()[45].getHitCount()).toBe(0);
});

test('attack misses with different y coordinate horizontal', () => {
    const playerBoard = Gameboard();
    playerBoard.placeShip([5, 4], 5);
    playerBoard.receiveAttack([4, 4]);
    expect(playerBoard.getShipBoard()[45].getHitCount()).toBe(0);
});

test('attack hits with starting coordinate when direction is vertical', () => {
    const playerBoard = Gameboard();
    playerBoard.placeShip([5, 4], 5, 'vertical');
    playerBoard.receiveAttack([5, 4]);
    expect(playerBoard.getShipBoard()[45].getHitCount()).toBe(1);
});

test('attack misses when vertical where it would hit when horizontal', () => {
    const playerBoard = Gameboard();
    playerBoard.placeShip([5, 4], 5, 'vertical');
    playerBoard.receiveAttack([7, 4]);
    expect(playerBoard.getShipBoard()[45].getHitCount()).toBe(0);
});

test('attack hits non-starting coordinate vertical', () => {
    const playerBoard = Gameboard();
    playerBoard.placeShip([5, 4], 5, 'vertical');
    playerBoard.receiveAttack([5, 6]);
    expect(playerBoard.getShipBoard()[45].getHitCount()).toBe(1);
});

test('attack misses beyond length of ship vertical', () => {
    const playerBoard = Gameboard();
    playerBoard.placeShip([5, 4], 5, 'vertical');
    playerBoard.receiveAttack([5, 9]);
    expect(playerBoard.getShipBoard()[45].getHitCount()).toBe(0);
});

test('attack misses too high vertical', () => {
    const playerBoard = Gameboard();
    playerBoard.placeShip([5, 4], 5, 'vertical');
    playerBoard.receiveAttack([5, 3]);
    expect(playerBoard.getShipBoard()[45].getHitCount()).toBe(0);
});

test('attack hits ending coordinate vertical', () => {
    const playerBoard = Gameboard();
    playerBoard.placeShip([5, 4], 5, 'vertical');
    playerBoard.receiveAttack([5, 8]);
    expect(playerBoard.getShipBoard()[45].getHitCount()).toBe(1);
});

test('missed shot is recorded', () => {
    const playerBoard = Gameboard();
    playerBoard.placeShip([5, 4], 5, 'vertical');
    playerBoard.receiveAttack([7, 0]);
    expect(playerBoard.getHitBoard()[7]).toBe('M');
});

test('hit shot is recorded', () => {
    const playerBoard = Gameboard();
    playerBoard.placeShip([5, 4], 5, 'vertical');
    playerBoard.receiveAttack([5, 5]);
    expect(playerBoard.getHitBoard()[55]).toBe('H');
});

test('receives multiple attacks', () => {
    const playerBoard = Gameboard();
    playerBoard.placeShip([5, 4], 5, 'vertical');
    playerBoard.receiveAttack([5, 5]);
    playerBoard.receiveAttack([5, 7]);
    expect(playerBoard.getShipBoard()[45].getHitCount()).toBe(2);
});

test('all ships are sunk when one ship is on the board', () => {
    const playerBoard = Gameboard();
    playerBoard.placeShip([5, 4], 2, 'vertical');
    playerBoard.receiveAttack([5, 5]);
    playerBoard.receiveAttack([5, 4]);
    expect(playerBoard.allShipsSunk()).toBeTruthy();
});

test('reports that not all ships are sunk', () => {
    const playerBoard = Gameboard();
    playerBoard.placeShip([5, 4], 3, 'vertical');
    playerBoard.receiveAttack([5, 5]);
    playerBoard.receiveAttack([5, 4]);
    expect(playerBoard.allShipsSunk()).toBeFalsy();
});

test('reports all ships sunk when multiple ships on board', () => {
    const playerBoard = Gameboard();
    playerBoard.placeShip([5, 4], 3, 'vertical');
    playerBoard.receiveAttack([5, 5]);
    playerBoard.receiveAttack([5, 4]);
    playerBoard.receiveAttack([5, 6]);

    playerBoard.placeShip([3, 3], 2, 'horizontal');
    playerBoard.receiveAttack([4, 3]);
    playerBoard.receiveAttack([3, 3]);
    expect(playerBoard.allShipsSunk()).toBeTruthy();
});

test('reports not all ships sunk when multiple ships on board', () => {
    const playerBoard = Gameboard();
    playerBoard.placeShip([5, 4], 3, 'vertical');
    playerBoard.receiveAttack([5, 5]);
    playerBoard.receiveAttack([5, 4]);
    playerBoard.receiveAttack([5, 6]);

    playerBoard.placeShip([3, 3], 2, 'horizontal');
    playerBoard.receiveAttack([4, 3]);
    expect(playerBoard.allShipsSunk()).toBeFalsy();
});

test('reports when spot is taken', () => {
    const playerBoard = Gameboard();
    playerBoard.placeShip([5, 4], 3, 'vertical');
    expect(playerBoard.coordinateTaken([5, 4])).toBeTruthy();
});

test('reports when spot is not taken', () => {
    const playerBoard = Gameboard();
    playerBoard.placeShip([5, 4], 3, 'vertical');
    expect(playerBoard.coordinateTaken([5, 5])).toBeFalsy();
});

test('removes ship at starting coordinate', () => {
    const playerBoard = Gameboard();
    playerBoard.placeShip([5, 4], 3, 'vertical');
    playerBoard.removeShip([5, 4]);
    expect(playerBoard.coordinateTaken([5, 4])).toBeFalsy();
});

test('illegaly placed is true when ship end outside grid vertical', () => {
    const playerBoard = Gameboard();
    playerBoard.placeShip([4, 9], 3, 'vertical');
    expect(playerBoard.isPlacedCorrectlyAt([4, 9])).toBe(false);
});

test('illegaly placed is true when ship end outside grid horizontal', () => {
    const playerBoard = Gameboard();
    playerBoard.placeShip([9, 4], 2, 'horizontal');
    expect(playerBoard.isPlacedCorrectlyAt([9, 4])).toBe(false);
});

test('other case horizontal', () => {
    const playerBoard = Gameboard();
    playerBoard.placeShip([8, 9], 2, 'horizontal');
    expect(playerBoard.isPlacedCorrectlyAt([8, 9])).toBe(true);
});

test('other case horizontal', () => {
    const playerBoard = Gameboard();
    playerBoard.placeShip([9, 9], 2, 'horizontal');
    expect(playerBoard.isPlacedCorrectlyAt([9, 9])).toBe(false);
});
//don't write tests that won't fail

test('ships overlap works when other ship goes through starting coordinate', () => {
    const playerBoard = Gameboard();
    playerBoard.placeShip([5, 3], 2, 'horizontal');
    playerBoard.placeShip([5, 2], 3, 'vertical');
    expect(playerBoard.isPlacedCorrectlyAt([5, 3])).toBe(false);
});

test('ship overlap works when directions are swapped', () => {
    const playerBoard = Gameboard();
    playerBoard.placeShip([5, 3], 2, 'vertical');
    playerBoard.placeShip([4, 3], 3, 'horizontal');
    expect(playerBoard.isPlacedCorrectlyAt([5, 3])).toBe(false);
});

test('ship overlap works when it is not going through the starting coordinate', () => {
    const playerBoard = Gameboard();
    playerBoard.placeShip([5, 3], 2, 'horizontal');
    playerBoard.placeShip([6, 2], 3, 'vertical');
    expect(playerBoard.isPlacedCorrectlyAt([5, 3])).toBe(false);
});

test('ships overlap works when they are not touching', () => {
    const playerBoard = Gameboard();
    playerBoard.placeShip([5, 3], 2, 'horizontal');
    playerBoard.placeShip([7, 7], 3, 'vertical');
    expect(playerBoard.isPlacedCorrectlyAt([5, 3])).toBe(true);
});

test('find ship at starting coordinate', () => {
    const playerBoard = Gameboard();
    playerBoard.placeShip([5, 4], 3, 'vertical');
    playerBoard.getShipAt([5, 4]);
});

test(' attacks one of the adjacent squares when gets a hit', () => {
    const playerBoard = Gameboard();
    playerBoard.placeShip([4, 4], 3, 'horizontal');
    playerBoard.receiveAttack([4, 4]);

    expect(playerBoard.getSmartAttack()).toEqual([45, 43, 54, 34]);
});

test('returns nothing when no hits', () => {
    const playerBoard = Gameboard();
    playerBoard.placeShip([3, 3], 5, 'vertical');
    playerBoard.receiveAttack([7, 7]);
    expect(playerBoard.getSmartAttack()).toBeFalsy();
});

test('returns nothing when ship is sunk', () => {
    const playerBoard = Gameboard();
    playerBoard.placeShip([2, 1], 2, 'horizontal');
    playerBoard.receiveAttack([2, 1]);
    playerBoard.receiveAttack([3, 1]);
    expect(playerBoard.getSmartAttack()).toBeFalsy();
});

test('returns in line with two in a row', () => {
    const playerBoard = Gameboard();
    playerBoard.placeShip([2, 1], 3, 'horizontal');
    playerBoard.receiveAttack([2, 1]);
    playerBoard.receiveAttack([3, 1]);
    expect(playerBoard.getSmartAttack()).toEqual([11, 14]);
});

test('returns in line with three in a row', () => {
    const playerBoard = Gameboard();
    playerBoard.placeShip([2, 1], 4, 'horizontal');
    playerBoard.receiveAttack([2, 1]);
    playerBoard.receiveAttack([3, 1]);
    playerBoard.receiveAttack([4, 1]);
    expect(playerBoard.getSmartAttack()).toEqual([11, 15]);
});

test('returns array of two when two in line and vertical', () => {
    const playerBoard = Gameboard();
    playerBoard.placeShip([2, 1], 4, 'vertical');
    playerBoard.receiveAttack([2, 2]);
    playerBoard.receiveAttack([2, 3]);
    expect(playerBoard.getSmartAttack()).toEqual([12, 42]);
});

test('returns array of two when three in line and vertical', () => {
    const playerBoard = Gameboard();
    playerBoard.placeShip([2, 1], 4, 'vertical');
    playerBoard.receiveAttack([2, 1]);
    playerBoard.receiveAttack([2, 2]);
    playerBoard.receiveAttack([2, 3]);
    expect(playerBoard.getSmartAttack()).toEqual([2, 42]);
});
test('returns array when first ship is sunk but second isnot', () => {
    const playerBoard = Gameboard();
    playerBoard.placeShip([2, 1], 3, 'vertical');
    playerBoard.placeShip([7, 7], 2, 'horizontal');
    playerBoard.receiveAttack([2, 1]);
    playerBoard.receiveAttack([2, 2]);
    playerBoard.receiveAttack([2, 3]);
    playerBoard.receiveAttack([7, 7]);
    expect(playerBoard.getSmartAttack()).toEqual([78, 76, 87, 67]);
});
//filter
test('out of bounds not included in array', () => {
    const playerBoard = Gameboard();
    playerBoard.placeShip([0, 0], 3, 'horizontal');
    playerBoard.receiveAttack([0, 0]);
    expect(playerBoard.getSmartAttack()).toEqual([1, 10]);
});

test('greater than 99 not allowed', () => {
    const playerBoard = Gameboard();
    playerBoard.placeShip([9, 9], 3, 'horizontal');
    playerBoard.receiveAttack([9, 9]);
    expect(playerBoard.getSmartAttack()).toEqual([98, 89]);
});

test('does not smart attack index on next line', () => {
    const playerBoard = Gameboard();
    playerBoard.placeShip([9, 8], 3, 'horizontal');
    playerBoard.receiveAttack([9, 8]);
    expect(playerBoard.getSmartAttack()).toEqual([88, 99, 79]);
});

test('does not smart attack index on previous line', () => {
    const playerBoard = Gameboard();
    playerBoard.placeShip([0, 8], 3, 'horizontal');
    playerBoard.receiveAttack([0, 8]);
    expect(playerBoard.getSmartAttack()).toEqual([81, 90, 70]);
});

test('missed shots not included in smart attack arr', () => {
    const playerBoard = Gameboard();
    playerBoard.placeShip([8, 1], 2, 'horizontal');
    playerBoard.receiveAttack([9, 1]);
    playerBoard.receiveAttack([9, 2]);
    expect(playerBoard.getSmartAttack()).toEqual([18, 9]);
});

test('hit of a different ship is counted in a row if ship is sunk', () => {
    const playerBoard = Gameboard();
    playerBoard.placeShip([2, 2], 2, 'horizontal');
    playerBoard.placeShip([1, 2], 2, 'vertical');
    playerBoard.receiveAttack([2, 2]);
    playerBoard.receiveAttack([3, 2]);
    playerBoard.receiveAttack([1, 2]);
    expect(playerBoard.getSmartAttack()).toEqual([20, 31, 11]);
});

test('ship sunk is third in row', () => {
    const playerBoard = Gameboard();
    playerBoard.placeShip([3, 2], 2, 'horizontal');
    playerBoard.placeShip([0, 2], 3, 'horizontal');
    playerBoard.receiveAttack([3, 2]);
    playerBoard.receiveAttack([4, 2]);
    playerBoard.receiveAttack([1, 2]);
    playerBoard.receiveAttack([2, 2]);
    expect(playerBoard.getSmartAttack()).toEqual([20]);
});

test('other ships look like same but obviously not', () => {
    const playerBoard = Gameboard();
    playerBoard.placeShip([3, 3], 2, 'horizontal');
    playerBoard.placeShip([3, 4], 2, 'horizontal');
    playerBoard.placeShip([3, 5], 2, 'horizontal');
    playerBoard.receiveAttack([3, 3]);
    playerBoard.receiveAttack([3, 4]);
    playerBoard.receiveAttack([3, 5]);
    playerBoard.receiveAttack([3, 6]);
    playerBoard.receiveAttack([3, 2]);
    expect(playerBoard.getSmartAttack()).toEqual([34, 32]);
});
test('', () => {
    const playerBoard = Gameboard();
    playerBoard.placeShip([3, 3], 2, 'vertical');
    playerBoard.placeShip([4, 3], 2, 'vertical');
    playerBoard.placeShip([5, 3], 1, 'vertical');
    playerBoard.placeShip([2, 3], 1, 'horizontal');
    playerBoard.receiveAttack([3, 3]);
    playerBoard.receiveAttack([4, 3]);
    playerBoard.receiveAttack([5, 3]);
    playerBoard.receiveAttack([2, 3]);
    expect(playerBoard.getSmartAttack()).toEqual([43, 23]);
});
//perhaps change available coordinates to return all instead of nothing
test.todo('does not pick spot that is surrounded on all four sides');
test.todo('does not pick spot with not enough space for remaing');
