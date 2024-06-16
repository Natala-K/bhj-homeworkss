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
                document.getElementById("dead").textContent = molesKilled; // Обновляем количество убитых кротов
                console.log("Попадание! Очки: " + score);
                
                if (molesKilled >= 10) {
                    console.log("Поздравляем! Вы победили!");
                    resetGame('Поздравляем! Вы победили!');
                }
            } else {
                misses++;
                document.getElementById("lost").textContent = misses; // Обновляем количество промахов
                console.log("Промах! Промахов: " + misses);
                
                if (misses >= 5) {
                    console.log("Вы проиграли! Слишком много промахов.");
                    resetGame('Вы проиграли! Слишком много промахов.');
                }
            }
        });
    }
}

function resetGame(notificationText) {
    score = 0;
    misses = 0;
    molesKilled = 0;
    document.getElementById("dead").textContent = molesKilled; // Сбрасываем отображение убитых кротов
    document.getElementById("lost").textContent = misses; // Сбрасываем отображение промахов
    
    // Вызов alert с текстом уведомления
    if (notificationText) {
        alert(notificationText);
    }
}

startGame();
