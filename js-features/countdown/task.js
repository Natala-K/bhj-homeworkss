let score = 0;
let clicks = 0;
let lastClickTime = Date.now();

const clickerCounter = document.getElementById("clicker__counter");
const scoreDisplay = document.getElementById("score");
const clickSpeedDisplay = document.getElementById("clickSpeed");
const cookie = document.getElementById("cookie");

// Устанавливаем плавный переход для трансформации
cookie.style.transition = "transform 0.2s";

function clickCookie() {
    const currentTime = Date.now();
    const timeDifference = (currentTime - lastClickTime) / 1000; // переводим в секунды

    clicks++;
    score += clicks % 2 === 0 ? -1 : 1; // чередуем увеличение и уменьшение счётчика

    // Обновляем отображение количества кликов и счёта
    clickerCounter.textContent = clicks;
    scoreDisplay.textContent = score;

    if (timeDifference > 0) {
        const clickSpeed = Math.round(1 / timeDifference * 10) / 10; // округляем до одного знака после запятой
        // Обновляем отображение скорости кликов
        clickSpeedDisplay.textContent = clickSpeed;
    }

    lastClickTime = currentTime;

    // Увеличиваем изображение
    cookie.style.transform = "scale(1.2)";

    // Убираем увеличение через 200 миллисекунд
    setTimeout(() => {
        cookie.style.transform = "scale(1)";
    }, 200);
}

// Привязываем функцию clickCookie к клику по изображению
cookie.addEventListener("click", clickCookie);



