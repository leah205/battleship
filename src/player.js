import Gameboard from './gameboard';

function Player(type, num) {
    const getType = () => type;
    const getNum = () => num;
    const board = Gameboard();
    const getBoard = () => board;
    return { getType, getBoard, getNum };
}

export default Player;
