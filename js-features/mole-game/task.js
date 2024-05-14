let score = 0;
let misses = 0;
let molesKilled = 0;

function getHole(index) {
    return document.getElementById(`hole${index}`);
}

function startGame() {
    for (let i = 1; i <= 9; i++) {
        getHole(i).addEventListener('click', function() {
            if (getHole(i).classList.contains('hole_has-mole')) {
                molesKilled++;
                score++;
                console.log("Попадание! Очки: " + score);
                
                if (molesKilled >= 10) {
                    console.log("Поздравляем! Вы победили!");
                    resetGame();
                }
            } else {
                misses++;
                console.log("Промах! Промахов: " + misses);
                
                if (misses >= 5) {
                    console.log("Вы проиграли! Слишком много промахов.");
                    resetGame();
                }
            }
        });
    }
}

function resetGame() {
    score = 0;
    misses = 0;
    molesKilled = 0;
}

startGame();
