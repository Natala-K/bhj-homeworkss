let score = 0;
let clicks = 0;
let lastClickTime = Date.now();

function clickCookie() {
    const currentTime = Date.now();
    const timeDifference = (currentTime - lastClickTime) / 1000; // переводим в секунды

    clicks++;
    score += clicks % 2 === 0 ? -1 : 1; // чередуем увеличение и уменьшение счётчика

    console.log("Счёт: " + score);

    if (timeDifference > 0) {
        const clickSpeed = Math.round(1 / timeDifference * 10) / 10; // округляем до одного знака после запятой
        console.log("Скорость клика: " + clickSpeed + " кликов в секунду");
    }

    clicks = 0;
    lastClickTime = currentTime;
}

// Пример вызова функции clickCookie() при клике на печеньку
clickCookie();