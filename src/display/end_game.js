import { createNewGameBtn } from './create_functions';
import createStartingPage from './starting-screen';

export default function endGame(winner, loser) {
    console.log(`${winner.getType()} sunk all the ${loser.getType()}'s ships`);
    const newGameBtn = createNewGameBtn();
    document.body.appendChild(newGameBtn);
    newGameBtn.addEventListener('click', () => {
        resetGame();
    });
}

function resetGame() {
    document.body.removeChild(document.querySelector('.game-container'));
    createStartingPage();
}
