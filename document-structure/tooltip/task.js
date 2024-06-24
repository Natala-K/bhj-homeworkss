document.addEventListener('DOMContentLoaded', () => {
    const tooltips = document.querySelectorAll('.has-tooltip');

    tooltips.forEach(tooltip => {
        tooltip.addEventListener('click', (event) => {
            event.preventDefault();

            // Удалить существующие подсказки
            document.querySelectorAll('.tooltip').forEach(existingTooltip => existingTooltip.remove());

            // Создать и добавить новую подсказку
            const tooltipText = tooltip.getAttribute('title');
            const tooltipPosition = tooltip.getAttribute('data-position') || 'top';
            const tooltipElement = document.createElement('div');
            tooltipElement.className = 'tooltip';
            tooltipElement.textContent = tooltipText;
            document.body.appendChild(tooltipElement);

            // Получить координаты элемента и размеры подсказки
            const rect = tooltip.getBoundingClientRect();
            const tooltipRect = tooltipElement.getBoundingClientRect();

            // Рассчитать положение подсказки
            let top, left;
            switch (tooltipPosition) {
                case 'top':
                    top = rect.top - tooltipRect.height;
                    left = rect.left + (rect.width - tooltipRect.width) / 2;
                    break;
                case 'bottom':
                    top = rect.bottom;
                    left = rect.left + (rect.width - tooltipRect.width) / 2;
                    break;
                case 'left':
                    top = rect.top + (rect.height - toolti
