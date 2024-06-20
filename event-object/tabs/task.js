document.addEventListener('DOMContentLoaded', () => {
    // Находим все блоки с вкладками
    const tabsContainers = document.querySelectorAll('.tabs');

    tabsContainers.forEach(tabsContainer => {
        const tabs = tabsContainer.querySelectorAll('.tab');
        const contents = tabsContainer.querySelectorAll('.tab__content');

        tabs.forEach((tab, index) => {
            tab.addEventListener('click', () => {
                // Удаляем классы активности у всех вкладок и содержимого
                tabs.forEach(t => t.classList.remove('tab_active'));
                contents.forEach(content => content.classList.remove('tab__content_active'));

                // Добавляем классы активности к текущей вкладке и соответствующему содержимому
                tab.classList.add('tab_active');
                contents[index].classList.add('tab__content_active');
            });
        });
    });
});
