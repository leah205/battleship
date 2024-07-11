import Player from '../player';

test('player type works', () => {
    const player = Player('human');
    expect(player.getType()).toBe('human');
});

test('player type works', () => {
    const player = Player('computer');
    expect(player.getType()).toBe('computer');
});
//integration test with gameboatd maybe
