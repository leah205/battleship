import Ship from '../ship';

test('ship length works', () => {
    const ship = Ship(5);
    expect(ship.getLength()).toBe(5);
});

test('ship hit count works when it has not been hit', () => {
    const ship = Ship(3);
    expect(ship.getHitCount()).toBe(0);
});

test('hit count increments after ship has been hit', () => {
    const ship = Ship(4);
    ship.hit();
    ship.hit();
    expect(ship.getHitCount()).toBe(2);
});

test('ship is not sunk', () => {
    const ship = Ship(3);
    ship.hit();
    ship.hit();
    expect(ship.isSunk()).toBeFalsy();
});
test('ship is sunk', () => {
    const ship = Ship(3);
    ship.hit();
    ship.hit();
    ship.hit();
    expect(ship.isSunk()).toBeTruthy();
});

test('set ship direction vertical', () => {
    const ship = Ship(5, 'vertical');
    expect(ship.getDirection()).toBe('vertical');
});
