function startTimer(seconds) {
    let timer = setInterval(function() {
        let hours = Math.floor(seconds / 3600);
        let minutes = Math.floor((seconds % 3600) / 60);
        let remainingSeconds = seconds % 60;

        // Добавляем ведущие нули, если необходимо
        hours = String(hours).padStart(2, '0');
        minutes = String(minutes).padStart(2, '0');
        remainingSeconds = String(remainingSeconds).padStart(2, '0');

        console.log(`${hours}:${minutes}:${remainingSeconds}`);

        if (seconds <= 0) {
            clearInterval(timer);
            alert("Вы победили в конкурсе!");
        }

        seconds--;
    }, 1000);
}
