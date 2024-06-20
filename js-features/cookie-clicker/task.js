let clicks = 0;
let lastClickTime = Date.now();

const clickerCounter = document.getElementById("clicker__counter");
const cookie = document.getElementById("cookie");
const clickerSpeed = document.getElementById("clicker__speed");

// Исходные размеры изображения
const originalWidth = cookie.width;
const originalHeight = cookie.height;

// Значение, на которое будем увеличивать изображение
const increaseAmount = 20;

function clickCookie() {
    const currentTime = Date.now();
    const timeDifference = (currentTime - lastClickTime) / 1000; // переводим в секунды

    clicks++;

    // Обновляем отображение количества кликов
    clickerCounter.textContent = clicks;

    // Вычисляем скорость кликов и обновляем отображение
    if (timeDifference > 0) {
        const clickSpeed = (1 / timeDifference).toFixed(2);
        clickerSpeed.textContent = clickSpeed;
    }

    // Увеличиваем изображение
    cookie.width = originalWidth + increaseAmount;

    // Возвращаем изображение к исходным размерам через 100 мс
    setTimeout(() => {
        cookie.width = originalWidth;
    }, 100);

    lastClickTime = currentTime;
}

// Привязываем функцию clickCookie к клику по изображению
cookie.addEventListener("click", clickCookie);

