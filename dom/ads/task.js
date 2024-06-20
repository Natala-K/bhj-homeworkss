document.addEventListener("DOMContentLoaded", () => {
    const rotator = document.querySelector('.rotator');
    const cases = rotator.querySelectorAll('.rotator__case');
    let activeIndex = 0;

    function changeCase() {
        const currentCase = cases[activeIndex];
        currentCase.classList.remove('rotator__case_active');

        activeIndex = (activeIndex + 1) % cases.length;
        const nextCase = cases[activeIndex];
        nextCase.classList.add('rotator__case_active');

        nextCase.style.color = nextCase.getAttribute('data-color');
        const speed = nextCase.getAttribute('data-speed') || 1000;

        setTimeout(changeCase, speed);
    }

    // Начальная установка цвета
    cases[activeIndex].style.color = cases[activeIndex].getAttribute('data-color');

    // Запуск первой смены
    setTimeout(changeCase, cases[activeIndex].getAttribute('data-speed'));
});
