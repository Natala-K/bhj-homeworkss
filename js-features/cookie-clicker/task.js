let clicks = 0;
let lastClickTime = Date.now();

const clickerCounter = document.getElementById("clicker__counter");
const cookie = document.getElementById("cookie");

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

    // Увеличиваем изображение
    cookie.width = originalWidth + increaseAmount;
    cookie.height = originalHeight + increaseAmount;

    // Возвращаем изображение к исходным размерам через 100 мс
    setTimeout(() => {
        cookie.width = originalWidth;
        cookie.height = originalHeight;
    }, 100);

    lastClickTime = currentTime;
}

// Привязываем функцию clickCookie к клику по изображению
cookie.addEventListener("click", clickCookie);

