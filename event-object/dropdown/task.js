document.addEventListener('DOMContentLoaded', () => {
    // Находим все dropdown на странице
    const dropdowns = document.querySelectorAll('.dropdown');
    
    dropdowns.forEach(dropdown => {
        const valueElement = dropdown.querySelector('.dropdown__value');
        const listElement = dropdown.querySelector('.dropdown__list');
        const items = listElement.querySelectorAll('.dropdown__item');

        // Обработчик для клика на элемент с классом dropdown__value
        valueElement.addEventListener('click', () => {
            listElement.classList.toggle('dropdown__list_active');
        });

        // Обработчик для клика на элементы списка
        items.forEach(item => {
            const link = item.querySelector('.dropdown__link');
            link.addEventListener('click', (event) => {
                event.preventDefault(); // Запрещаем переход по ссылке
                valueElement.textContent = link.textContent; // Заменяем текст
                listElement.classList.remove('dropdown__list_active'); // Закрываем список
            });
        });
    });
});
