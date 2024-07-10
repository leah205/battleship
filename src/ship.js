function Ship(length, direction = 'horizontal') {
    let hitCount = 0;

    const getDirection = () => direction;
    const getLength = () => length;
    function hit() {
        hitCount += 1;
    }
    const isSunk = () => hitCount === length;
    const getHitCount = () => hitCount;
    return { getLength, getHitCount, hit, isSunk, getDirection };
}

export default Ship;
