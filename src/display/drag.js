//change to enable drag

import drop from './drop';

export default function enableDragAndDrop(target, player) {
    let startingX;
    let startingY;
    let startingLeft;
    let startingTop;

    function drag(e) {
        const gameContainer = document.querySelector('.game-container');
        if (gameContainer) return;
        target.style.position = 'relative';
        target.style.left = target.style.left || 0;
        target.style.left = `calc(${startingLeft} + ${e.clientX - startingX}px)`;
        target.style.top = `calc(${startingTop} + ${e.clientY - startingY}px)`;
    }

    target.addEventListener('mousedown', function (event) {
        startingX = event.clientX;
        startingY = event.clientY;
        startingLeft = target.style.left || `0px`;
        startingTop = target.style.top || `0px`;
        //starting row/column instead
        event.preventDefault();
        window.addEventListener('mousemove', drag);
        window.addEventListener('mouseup', endMove);
    });

    function endMove() {
        setTimeout(() => {
            drop(startingLeft, startingTop, target, player);
        }, 1);
        window.removeEventListener('mousemove', drag);
        window.removeEventListener('mouseup', endMove);
    }
}
